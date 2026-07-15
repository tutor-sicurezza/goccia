#!/usr/bin/env python3
"""
Adapter self-fetching per gestori/portali open data.

Ogni adapter sa dove trovare i dati di una fonte e come mapparli sullo schema
comune, riusando il core in `scrape_comune.py` (normalizzazione nomi parametro,
parsing valori, HTTP con proxy). Un adapter ritorna una lista di record pronti
per `upsert_many()`.

Registro in fondo al file. Esecuzione via `scripts/run_adapters.py`.

Regola inderogabile condivisa col resto della pipeline: nessun valore inventato.
Gli adapter estraggono solo ciò che la fonte pubblica davvero; i parametri non
riconosciuti o senza valore vengono scartati.
"""
from __future__ import annotations

import html
import json
import re
import sys
import urllib.error
from typing import Callable, Optional

from scrape_comune import build_sample, http_get, slugify, title_comune

# tipo di un adapter: () -> lista di record
Adapter = Callable[[], list]


def _record(slug: str, name: str, province: str, region: str, gestore: str,
            source_url: str, source_label: str, rows: list[tuple[str, str, str]],
            *, sampling_date: str = '', punto: str = '') -> Optional[dict]:
    """Costruisce un record dai (nome, valore, unita) grezzi, scartando l'ignoto."""
    samples = []
    for name_p, value_p, unit_p in rows:
        s = build_sample(name_p, value_p, unit_p)
        if s:
            samples.append(s)
    if not samples:
        return None
    rec = {
        'comuneSlug': slug, 'comuneName': name, 'province': province, 'region': region,
        'gestore': gestore, 'sourcePdfUrl': source_url, 'sourceLabel': source_label,
        'samples': samples,
    }
    if sampling_date:
        rec['samplingDate'] = sampling_date
    if punto:
        rec['puntoPrelievo'] = punto
    return rec


# ————————————————————————————————————————————————————————————————
# Milano — open data Comune di Milano (CKAN, CSV long-format)
# ————————————————————————————————————————————————————————————————
MILANO_CSV = ('https://dati.comune.milano.it/dataset/'
              'c4e847de-491c-4ce5-bcd4-f2927f68f5d6/resource/'
              '538d4ac2-9d84-48cd-ade1-803908011314/download/ds1670_qualita_acqua.csv')


def adapter_milano_opendata() -> list:
    text = http_get(MILANO_CSV)
    rows: list[tuple[str, str, str]] = []
    for line in text.splitlines()[1:]:  # salta header "Parametro;Limiti;Acqua di Milano;Unita'"
        parts = [p.strip() for p in line.split(';')]
        if len(parts) >= 4 and parts[0]:
            rows.append((parts[0], parts[2], parts[3]))
    rec = _record(
        'milano', 'Milano', 'MI', 'Lombardia', 'MM S.p.A.',
        MILANO_CSV, 'Comune di Milano (open data) — Analisi acqua 4° trim. 2021', rows,
        sampling_date='2021-12-31', punto="media città — carta d'identità (4° trim. 2021)")
    return [rec] if rec else []


# ————————————————————————————————————————————————————————————————
# Publiacqua — schede "Qualità dell'acqua" per comune (Toscana centrale)
# HTML Drupal: div.field-name-field-city-<param> con label + valore.
# ————————————————————————————————————————————————————————————————
PUBLIACQUA_FIELD_RE = re.compile(
    r'field-name-field-city-[a-z0-9\-]+[^>]*>\s*'
    r'<div class="field-label">([^<:]+):?\s*(?:&nbsp;)?</div>.*?'
    r'<div class="field-item[^"]*">([^<]*)</div>',
    re.S)

# Comuni serviti da Publiacqua in provincia di Firenze (FI). L'adapter valida da
# solo: gli slug non pubblicati (404/403) vengono semplicemente saltati.
PUBLIACQUA_COMUNI = [
    ('firenze', 'Firenze'), ('scandicci', 'Scandicci'),
    ('sesto-fiorentino', 'Sesto Fiorentino'), ('campi-bisenzio', 'Campi Bisenzio'),
    ('pontassieve', 'Pontassieve'), ('calenzano', 'Calenzano'), ('signa', 'Signa'),
    ('lastra-a-signa', 'Lastra a Signa'), ('impruneta', 'Impruneta'),
    ('bagno-a-ripoli', 'Bagno a Ripoli'), ('fiesole', 'Fiesole'),
    ('greve-in-chianti', 'Greve in Chianti'),
    ('san-casciano-in-val-di-pesa', 'San Casciano in Val di Pesa'),
    ('reggello', 'Reggello'), ('rignano-sull-arno', "Rignano sull'Arno"),
    ('pelago', 'Pelago'), ('dicomano', 'Dicomano'), ('vicchio', 'Vicchio'),
    ('borgo-san-lorenzo', 'Borgo San Lorenzo'),
    ('barberino-di-mugello', 'Barberino di Mugello'), ('firenzuola', 'Firenzuola'),
]


def _publiacqua_rows(page_html: str) -> list[tuple[str, str, str]]:
    rows: list[tuple[str, str, str]] = []
    for label, value in PUBLIACQUA_FIELD_RE.findall(page_html):
        label = html.unescape(label).strip()
        value = html.unescape(value).strip()
        if label and value:
            rows.append((label, value, ''))  # unita dedotta dal core (DEFAULT_UNIT)
    return rows


def adapter_publiacqua() -> list:
    out = []
    for slug, name in PUBLIACQUA_COMUNI:
        url = f'https://www.publiacqua.it/qualita/{slug}'
        try:
            page = http_get(url)
        except urllib.error.HTTPError as e:
            print(f'  [publiacqua] {slug}: HTTP {e.code} — salto', file=sys.stderr)
            continue
        except Exception as e:  # noqa: BLE001
            print(f'  [publiacqua] {slug}: {type(e).__name__} — salto', file=sys.stderr)
            continue
        rec = _record(
            slug, name, 'FI', 'Toscana', 'Publiacqua S.p.A.', url,
            f'Publiacqua — Qualità dell\'acqua di {name}', _publiacqua_rows(page),
            punto="valori medi rete (carta d'identità)")
        if rec:
            out.append(rec)
            print(f'  [publiacqua] {slug}: {len(rec["samples"])} parametri', file=sys.stderr)
    return out


# ————————————————————————————————————————————————————————————————
# Ireti (Gruppo IREN) — API JSON pubblica /bin/acqua-quality
# Enumerazione: province (inline) -> GetComuni -> GetZone -> GetAnalisiZona.
# Il campo "data" della risposta è una STRINGA JSON (doppio parse).
# ————————————————————————————————————————————————————————————————
IRETI_BASE = 'https://www.gruppoiren.it/bin/acqua-quality'
# (codice provincia usato dall'API, sigla provincia, regione)
IRETI_PROVINCES = [
    ('RE', 'RE', 'Emilia-Romagna'), ('PC', 'PC', 'Emilia-Romagna'), ('PR', 'PR', 'Emilia-Romagna'),
    ('GE', 'GE', 'Liguria'), ('SP', 'SP', 'Liguria'), ('Sv', 'SV', 'Liguria'),
    ('VC', 'VC', 'Piemonte'), ('AT', 'AT', 'Piemonte'),
]
# comuni il cui slug ufficiale sul sito differisce dal nome anagrafico
IRETI_SLUG_OVERRIDES = {'reggio-nell-emilia': 'reggio-emilia'}


def _iren_api(type_: str, code: str, value: str):
    raw = http_get(f'{IRETI_BASE}?type={type_}&code={code}&value={value}')
    obj = json.loads(raw)
    data = obj.get('data')
    return json.loads(data) if isinstance(data, str) else data


def adapter_ireti() -> list:
    out = []
    for prov_code, prov_sigla, region in IRETI_PROVINCES:
        try:
            comuni = _iren_api('GetComuni', 'codiceProvincia', prov_code)
        except Exception as e:  # noqa: BLE001
            print(f'  [ireti] provincia {prov_code}: {type(e).__name__} — salto', file=sys.stderr)
            continue
        for c in comuni or []:
            istat, nome = c.get('CodiceISTAT'), c.get('Nome')
            if not istat or not nome:
                continue
            try:
                zones = _iren_api('GetZone', 'codiceComune', istat)
                if not zones:
                    continue
                zone = zones[0]  # zona rappresentativa
                an = _iren_api('GetAnalisiZona', 'idZona', str(zone['idZona']))
            except Exception as e:  # noqa: BLE001
                print(f'  [ireti] {nome}: {type(e).__name__} — salto', file=sys.stderr)
                continue
            rows = [(r.get('Parametro', ''), r.get('ValoreTesto', ''), r.get('UdM', '')) for r in an or []]
            date = ''
            for r in an or []:
                d = (r.get('DataFineEstrazione') or '')[:10]
                if len(d) == 10:
                    date = max(date, d)
            slug = IRETI_SLUG_OVERRIDES.get(slugify(nome), slugify(nome))
            rec = _record(
                slug, title_comune(nome), prov_sigla, region, 'Ireti S.p.A. (Gruppo IREN)',
                'https://www.gruppoiren.it/it/casa/acqua/la-qualita-dell-acqua',
                'Gruppo IREN — Qualità dell\'acqua', rows,
                sampling_date=date, punto=str(zone.get('Nome', '')).strip())
            if rec:
                out.append(rec)
    print(f'  [ireti] {len(out)} comuni con dati', file=sys.stderr)
    return out


REGISTRY: dict[str, Adapter] = {
    'milano-opendata': adapter_milano_opendata,
    'publiacqua': adapter_publiacqua,
    'ireti': adapter_ireti,
}
