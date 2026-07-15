#!/usr/bin/env python3
"""
Pipeline di estrazione delle analisi dell'acqua dai referti pubblici dei gestori.

Obiettivo: trasformare un referto pubblico (PDF/tabella HTML/CSV) di un gestore
idrico in un record strutturato in `src/data/comuni-analyses.json`, che il sito
rende come pagina comune con tabella + punteggio GoccIA 1-99.

Principi:
  - Zero invenzione: ogni record cita la fonte pubblica (`sourcePdfUrl`) e la data
    di campionamento. I parametri non riconosciuti vengono scartati, non indovinati.
  - Estrazione PDF "pluggable": usa pdfplumber se installato; in alternativa accetta
    testo già estratto (--text) o un CSV `parametro;valore;unita` (--csv), così la
    pipeline gira anche senza dipendenze pesanti.
  - Il core (normalizzazione nomi parametro + parsing valori) è puro e testabile:
    vedi scripts/test_scrape.py.

Uso tipico:
  python3 scripts/scrape_comune.py \
      --slug latina --comune "Latina" --provincia LT --regione Lazio \
      --gestore "Acqualatina S.p.A." --data 2026-03-12 \
      --source-url "https://.../referto.pdf" --source-label "Acqualatina — referto Q1 2026" \
      --pdf referto.pdf

  # oppure, senza pdfplumber, da testo già estratto o CSV:
  python3 scripts/scrape_comune.py ... --csv referto.csv
"""
from __future__ import annotations

import argparse
import json
import os
import re
import ssl
import sys
import time
import unicodedata
import urllib.error
import urllib.request
from typing import Optional

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'comuni-analyses.json')

_CA_BUNDLE = '/root/.ccr/ca-bundle.crt'


def http_get(url: str, retries: int = 3, timeout: int = 30, encoding: str = 'utf-8',
             data: Optional[bytes] = None, headers: Optional[dict] = None) -> str:
    """GET/POST con proxy dell'ambiente + CA bundle, backoff su 403/429/5xx.

    `data` non-None => POST. `encoding` per fonti non-UTF8 (es. 'latin-1').
    Usato dagli adapter self-fetching. Solleva l'ultima eccezione se fallisce.
    """
    proxy = os.environ.get('HTTPS_PROXY') or os.environ.get('https_proxy')
    handlers = []
    if proxy:
        handlers.append(urllib.request.ProxyHandler({'https': proxy, 'http': proxy}))
    if os.path.exists(_CA_BUNDLE):
        ctx = ssl.create_default_context()
        ctx.load_verify_locations(_CA_BUNDLE)
        handlers.append(urllib.request.HTTPSHandler(context=ctx))
    opener = urllib.request.build_opener(*handlers)
    hdrs = {'User-Agent': 'Mozilla/5.0 (goccia-scraper)'}
    if headers:
        hdrs.update(headers)
    last: Optional[Exception] = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, data=data, headers=hdrs)
            with opener.open(req, timeout=timeout) as r:
                return r.read().decode(encoding, 'replace')
        except urllib.error.HTTPError as e:
            last = e
            if e.code in (403, 429, 500, 502, 503, 504) and attempt < retries - 1:
                time.sleep(2 ** attempt)
                continue
            raise
        except Exception as e:  # noqa: BLE001 — network flakiness
            last = e
            if attempt < retries - 1:
                time.sleep(2 ** attempt)
                continue
            raise
    assert last is not None
    raise last

# ————————————————————————————————————————————————————————————————
# Mappa nomi parametro -> id del motore aquascore.
# Mantenere allineata a packages/aquascore/parameters.ts.
# ————————————————————————————————————————————————————————————————
PARAM_ALIASES: dict[str, list[str]] = {
    'ph': ['ph', 'p.h.', 'concentrazione ioni idrogeno'],
    'durezza_totale': ['durezza totale', 'durezza', 'hardness', 'durezza in gradi francesi'],
    'conducibilita': ['conducibilita', 'conducibilita elettrica', 'conduttivita', 'conducibilita a 20 c'],
    'cloro_residuo': ['cloro residuo', 'cloro residuo libero', 'cloro libero', 'cloro attivo libero',
                      'disinfettante residuo', 'disinfettante'],
    'nitrati': ['nitrati', 'no3', 'nitrato'],
    'nitriti': ['nitriti', 'no2', 'nitrito'],
    'ammonio': ['ammonio', 'ammoniaca', 'nh4'],
    'sodio': ['sodio', 'na'],
    'solfati': ['solfati', 'so4', 'solfato'],
    'cloruri': ['cloruri', 'cloruro', 'cl'],
    'fluoruri': ['fluoruri', 'fluoro', 'fluoruro', 'floruri', 'f'],
    'ferro': ['ferro', 'fe'],
    'manganese': ['manganese', 'mn'],
    'piombo': ['piombo', 'pb', 'lead'],
    'arsenico': ['arsenico', 'as', 'arsenic'],
    'rame': ['rame', 'cu', 'copper'],
    'cadmio': ['cadmio', 'cd'],
    'nichel': ['nichel', 'nickel', 'ni'],
    'cromo': ['cromo totale', 'cromo', 'cr'],
    'torbidita': ['torbidita', 'turbidity'],
    'e_coli': ['escherichia coli', 'e.coli', 'e coli', 'ecoli'],
    'coliformi_totali': ['coliformi totali', 'coliformi', 'batteri coliformi'],
    'enterococchi': ['enterococchi intestinali', 'enterococchi', 'enterococco'],
    'pfas_totali': ['pfas totali', 'somma pfas', 'pfas sigma 20', 'pfas'],
}

# Unita di default per id (mirror di parameters.ts).
DEFAULT_UNIT: dict[str, str] = {
    'ph': 'unità pH', 'durezza_totale': '°F', 'conducibilita': 'µS/cm',
    'cloro_residuo': 'mg/L', 'nitrati': 'mg/L', 'nitriti': 'mg/L', 'ammonio': 'mg/L',
    'sodio': 'mg/L', 'solfati': 'mg/L', 'cloruri': 'mg/L', 'fluoruri': 'mg/L',
    'ferro': 'µg/L', 'manganese': 'µg/L', 'piombo': 'µg/L', 'arsenico': 'µg/L',
    'rame': 'mg/L', 'cadmio': 'µg/L', 'nichel': 'µg/L', 'cromo': 'µg/L',
    'torbidita': 'NTU', 'e_coli': 'UFC/100mL', 'coliformi_totali': 'UFC/100mL',
    'enterococchi': 'UFC/100mL', 'pfas_totali': 'µg/L',
}

MICROBIO = {'e_coli', 'coliformi_totali', 'enterococchi'}
# Parametri in cui anche un valore basso e' un problema (hanno un minimo di legge):
MIN_BOUND = {'ph', 'durezza_totale'}

# Ordina gli alias piu' lunghi per primi per evitare match parziali (es. "cromo totale" prima di "cromo").
_ALIAS_INDEX: list[tuple[str, str]] = sorted(
    ((alias, pid) for pid, aliases in PARAM_ALIASES.items() for alias in aliases),
    key=lambda t: len(t[0]),
    reverse=True,
)


def _norm(s: str) -> str:
    """Minuscolo, senza accenti, spazi collassati."""
    s = unicodedata.normalize('NFD', s.lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r'[^a-z0-9]+', ' ', s)
    return s.strip()


def slugify(name: str) -> str:
    """Nome comune -> slug URL (minuscolo, senza accenti, trattini)."""
    s = unicodedata.normalize('NFD', name.lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = s.replace("'", ' ').replace('’', ' ')
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


_TITLE_LOWER = {'di', 'del', 'della', 'dei', 'degli', 'delle', 'da', 'in', 'sul', 'sulla',
                'a', 'al', 'con', 'e', 'ed', "d'", 'lo', 'la', 'il', "nell'", 'san', "sant'"}


def title_comune(name: str) -> str:
    """Capitalizza un nome comune tutto maiuscolo in modo ragionevole (Italiano)."""
    words = name.strip().lower().split()
    out = []
    for i, w in enumerate(words):
        out.append(w if (i > 0 and w in _TITLE_LOWER) else w[:1].upper() + w[1:])
    return ' '.join(out)


def match_parameter(name: str) -> Optional[str]:
    """Ritorna l'id aquascore per il nome di un parametro, o None se non riconosciuto."""
    n = _norm(name)
    if not n:
        return None
    # match esatto sull'intera stringa
    for alias, pid in _ALIAS_INDEX:
        if n == _norm(alias):
            return pid
    # match su token (il nome del parametro compare come sottostringa "a parola")
    for alias, pid in _ALIAS_INDEX:
        a = _norm(alias)
        if re.search(rf'(^| ){re.escape(a)}( |$)', n):
            return pid
    return None


_NUM_RE = re.compile(r'[-+]?\d[\d.,]*\d|\d')


def _to_float(num: str) -> Optional[float]:
    """Normalizza un token numerico italiano/inglese in float.

    Gestisce virgola decimale, punto decimale e separatore delle migliaia:
      "12,3"->12.3  "0.05"->0.05  "1.234"->1234  "1.234,56"->1234.56  "1,234.56"->1234.56
    """
    num = num.strip()
    has_dot, has_comma = '.' in num, ',' in num
    if has_dot and has_comma:
        # l'ultimo separatore che compare e' quello decimale
        dec = ',' if num.rfind(',') > num.rfind('.') else '.'
        thou = '.' if dec == ',' else ','
        num = num.replace(thou, '').replace(dec, '.')
    elif has_comma:
        num = num.replace(',', '.')  # convenzione italiana: virgola decimale
    elif has_dot:
        # solo punto: migliaia (1.234 / 1.234.567) oppure decimale (0.05, 12.5)
        if re.fullmatch(r'\d{1,3}(\.\d{3})+', num):
            num = num.replace('.', '')
    try:
        return float(num)
    except ValueError:
        return None


def parse_value(raw: str) -> dict:
    """
    Interpreta la cella "valore" di un referto italiano.

    Ritorna: { 'value': float|None, 'below_detection', 'not_detected', 'missing' }
      - missing=True per celle vuote / "n.d." (dato non disponibile) -> si scarta
      - not_detected=True per "assente"/"non rilevato" (rilevato come non presente)
      - below_detection=True per "<X" / "≤X" -> value = soglia numerica
      - altrimenti value = numero (virgola decimale gestita)
    """
    base = {'value': None, 'below_detection': False, 'not_detected': False, 'missing': False}
    if raw is None:
        return {**base, 'missing': True}
    t = raw.strip().lower()
    if t in ('', '-', '—', 'n.d.', 'nd', 'n.d', 'n/d', 'nr', 'n.r.', 'n.a.'):
        return {**base, 'missing': True}
    if any(k in t for k in ('assente', 'non rilevat', 'non riscontrat', 'negativ')):
        return {**base, 'not_detected': True}

    below = t.startswith('<') or t.startswith('≤') or 'minore di' in t or 'inferiore a' in t
    # rimuove spazi fra cifre (separatore migliaia "1 234") e i simboli di disuguaglianza
    t2 = re.sub(r'(?<=\d)\s+(?=\d)', '', t).replace('<', ' ').replace('≤', ' ')
    m = _NUM_RE.search(t2)
    if not m:
        return {**base, 'below_detection': below, 'missing': not below}
    value = _to_float(m.group(0))
    if value is None:
        return {**base, 'below_detection': below, 'missing': not below}
    return {**base, 'value': value, 'below_detection': below}


def build_sample(name: str, value_raw: str, unit_raw: str = '') -> Optional[dict]:
    """Costruisce un sample per il JSON, o None se il parametro non e' riconosciuto."""
    pid = match_parameter(name)
    if pid is None:
        return None
    parsed = parse_value(value_raw)
    unit = unit_raw.strip() or DEFAULT_UNIT.get(pid, '')

    if pid in MICROBIO:
        if parsed['missing']:
            return None  # non si puo' asserire conformita': si scarta
        if parsed['not_detected'] or parsed['below_detection'] or parsed['value'] == 0:
            return {'parameterId': pid, 'label': name.strip(), 'value': None,
                    'unit': unit or DEFAULT_UNIT[pid], 'compliant': True}
        return {'parameterId': pid, 'label': name.strip(), 'value': parsed['value'],
                'unit': unit or DEFAULT_UNIT[pid], 'compliant': False}

    if parsed['missing']:
        return None  # parametro chimico senza valore leggibile: si scarta
    sample = {'parameterId': pid, 'label': name.strip(), 'value': parsed['value'],
              'unit': unit or DEFAULT_UNIT.get(pid, '')}
    if parsed['not_detected']:
        # rilevato come non presente: value 0 ai fini del punteggio, mostra "assente"
        sample['value'] = 0.0
        sample['display'] = 'assente'
    elif parsed['below_detection']:
        # conserva il valore verbatim del referto (es. "<2") per la visualizzazione
        sample['display'] = value_raw.strip()
        if pid not in MIN_BOUND:
            sample['value'] = 0.0  # sotto il limite di rilevabilita' = praticamente assente
    return sample


# ————————————————————————————————————————————————————————————————
# Estrazione input (PDF / testo / CSV) -> lista di (nome, valore, unita)
# ————————————————————————————————————————————————————————————————
def rows_from_csv(path: str) -> list[tuple[str, str, str]]:
    import csv
    out: list[tuple[str, str, str]] = []
    with open(path, newline='', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=';')
        for r in reader:
            if not r or not r[0].strip():
                continue
            name = r[0]
            value = r[1] if len(r) > 1 else ''
            unit = r[2] if len(r) > 2 else ''
            out.append((name, value, unit))
    return out


def rows_from_text(text: str) -> list[tuple[str, str, str]]:
    """Righe tipo 'Nitrati 12,3 mg/L' o 'Arsenico: <1 µg/L'."""
    out: list[tuple[str, str, str]] = []
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        m = re.match(r'^(.+?)[\s:]+([<≤]?\s*[\d.,]+|assente|non rilevato|n\.d\.)\s*(.*)$', line, re.I)
        if not m:
            continue
        out.append((m.group(1), m.group(2), m.group(3)))
    return out


def rows_from_pdf(path: str) -> list[tuple[str, str, str]]:
    try:
        import pdfplumber  # type: ignore
    except ImportError:
        print('ERRORE: pdfplumber non installato. Usa --text o --csv, '
              'oppure: pip install pdfplumber', file=sys.stderr)
        sys.exit(2)
    rows: list[tuple[str, str, str]] = []
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            for table in page.extract_tables() or []:
                for r in table:
                    cells = [(c or '').strip() for c in r]
                    if len(cells) >= 2 and cells[0]:
                        unit = cells[2] if len(cells) > 2 else ''
                        rows.append((cells[0], cells[1], unit))
            # fallback: righe di testo se non ci sono tabelle
            if not (page.extract_tables() or []):
                rows.extend(rows_from_text(page.extract_text() or ''))
    return rows


# ————————————————————————————————————————————————————————————————
# Merge nel JSON (upsert per comune + data + punto di prelievo)
# ————————————————————————————————————————————————————————————————
def load_data() -> list[dict]:
    if not os.path.exists(DATA_PATH):
        return []
    with open(DATA_PATH, encoding='utf-8') as f:
        return json.load(f)


def save_data(records: list[dict]) -> None:
    records.sort(key=lambda r: (r['comuneSlug'], r.get('samplingDate', '')))
    with open(DATA_PATH, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(records, f, ensure_ascii=False, indent=2)
        f.write('\n')


def _key(r: dict) -> tuple:
    return (r['comuneSlug'], r.get('samplingDate', ''), r.get('puntoPrelievo', ''))


def upsert(record: dict) -> None:
    upsert_many([record])


def upsert_many(records: list[dict]) -> int:
    """Inserisce/aggiorna più record (chiave: comune + data + punto). Ritorna quanti scritti."""
    data = load_data()
    incoming = {_key(r): r for r in records}
    data = [r for r in data if _key(r) not in incoming]
    data.extend(incoming.values())
    save_data(data)
    return len(incoming)


def main() -> None:
    ap = argparse.ArgumentParser(description='Estrae un referto acqua in comuni-analyses.json')
    ap.add_argument('--slug', required=True)
    ap.add_argument('--comune', required=True)
    ap.add_argument('--provincia', required=True)
    ap.add_argument('--regione', required=True)
    ap.add_argument('--gestore', required=True)
    ap.add_argument('--data', default='', help='data/periodo riferimento YYYY-MM-DD (opzionale)')
    ap.add_argument('--source-url', required=True)
    ap.add_argument('--source-label', required=True)
    ap.add_argument('--punto', default='', help='punto/zona di prelievo (opzionale)')
    ap.add_argument('--pdf')
    ap.add_argument('--text', help='file di testo gia estratto')
    ap.add_argument('--csv', help='CSV parametro;valore;unita')
    ap.add_argument('--dry-run', action='store_true', help='stampa il record senza scrivere')
    args = ap.parse_args()

    if args.pdf:
        rows = rows_from_pdf(args.pdf)
    elif args.csv:
        rows = rows_from_csv(args.csv)
    elif args.text:
        with open(args.text, encoding='utf-8') as f:
            rows = rows_from_text(f.read())
    else:
        ap.error('specifica --pdf, --csv o --text')

    samples = []
    skipped = []
    for name, value, unit in rows:
        s = build_sample(name, value, unit)
        (samples.append(s) if s else skipped.append(name.strip()))

    if not samples:
        print('Nessun parametro riconosciuto. Scartati:', skipped, file=sys.stderr)
        sys.exit(1)

    record = {
        'comuneSlug': args.slug,
        'comuneName': args.comune,
        'province': args.provincia,
        'region': args.regione,
        'gestore': args.gestore,
        'sourcePdfUrl': args.source_url,
        'sourceLabel': args.source_label,
        'samples': samples,
    }
    if args.data:
        record['samplingDate'] = args.data
    if args.punto:
        record['puntoPrelievo'] = args.punto

    print(f"Riconosciuti {len(samples)} parametri; scartati {len(skipped)}: {skipped}")
    if args.dry_run:
        print(json.dumps(record, ensure_ascii=False, indent=2))
        return
    upsert(record)
    print(f"Scritto {args.slug} in {os.path.relpath(DATA_PATH)}")


if __name__ == '__main__':
    main()
