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


# ————————————————————————————————————————————————————————————————
# GAIA SpA — analisiweb (Toscana: Lucca, Massa-Carrara, Pistoia montana)
# Pagina per codice-prelievo: /analisiweb_v2/campioni/{codice}/0, tabella HTML.
# ————————————————————————————————————————————————————————————————
# (codice prelievo rappresentativo, nome comune, provincia)
GAIA_COMUNI = [
    ('05A04K15', 'Barga', 'LU'), ('08A03K09', 'Camporgiano', 'LU'), ('09A19K11', 'Careggine', 'LU'),
    ('12A03K06', 'Castelnuovo di Garfagnana', 'LU'), ('13A07K09', 'Castiglione di Garfagnana', 'LU'),
    ('15A02K03', 'Coreglia Antelminelli', 'LU'), ('17A05K02', 'Fabbriche di Vallico', 'LU'),
    ('21A01K03', 'Fosciandora', 'LU'), ('23A01K09', 'Gallicano', 'LU'), ('24A01K05', 'Giuncugnano', 'LU'),
    ('29A03K22', 'Minucciano', 'LU'), ('30A07K04', 'Molazzana', 'LU'), ('34A04K02', 'Piazza al Serchio', 'LU'),
    ('36A01K03', 'Pieve Fosciana', 'LU'), ('41A05K08', 'San Romano in Garfagnana', 'LU'),
    ('43A05K05', 'Sillano', 'LU'), ('46A01K02', 'Vagli Sotto', 'LU'), ('48A07K09', 'Vergemoli', 'LU'),
    ('50A03K01', 'Villa Collemandina', 'LU'), ('03A09K07', 'Bagni di Lucca', 'LU'),
    ('06A02K09', 'Borgo a Mozzano', 'LU'), ('33A08K07', 'Pescaglia', 'LU'), ('07A01K01', 'Camaiore', 'LU'),
    ('20A01K05', 'Forte dei Marmi', 'LU'), ('28A02K01', 'Massarosa', 'LU'), ('35A01K01', 'Pietrasanta', 'LU'),
    ('42A05K11', 'Seravezza', 'LU'), ('44A15K01', 'Stazzema', 'LU'), ('49A01K03', 'Viareggio', 'LU'),
    ('02A16K01', 'Aulla', 'MS'), ('04A04K02', 'Bagnone', 'MS'), ('11A05K16', 'Casola in Lunigiana', 'MS'),
    ('14A12K01', 'Comano', 'MS'), ('18A08K08', 'Filattiera', 'MS'), ('19A21K05', 'Fivizzano', 'MS'),
    ('22A07K18', 'Fosdinovo', 'MS'), ('25A13K23', 'Licciana Nardi', 'MS'), ('32A02K21', 'Mulazzo', 'MS'),
    ('38A08K01', 'Podenzana', 'MS'), ('45A17K01', 'Tresana', 'MS'), ('51A04K01', 'Villafranca in Lunigiana', 'MS'),
    ('39A02K01', 'Pontremoli', 'MS'), ('10A02K01', 'Carrara', 'MS'), ('27A01K01', 'Massa', 'MS'),
    ('31A07K10', 'Montignoso', 'MS'), ('16A06K03', 'Cutigliano', 'PT'), ('37A01K04', 'Piteglio', 'PT'),
    ('40A03K02', 'San Marcello Pistoiese', 'PT'), ('01A01K02', 'Abetone', 'PT'),
]


def adapter_gaia() -> list:
    out = []
    for codice, name, prov in GAIA_COMUNI:
        url = f'https://www.gaia-spa.it/analisiweb_v2/campioni/{codice}/0'
        try:
            page = http_get(url)
        except Exception as e:  # noqa: BLE001
            print(f'  [gaia] {name}: {type(e).__name__} — salto', file=sys.stderr)
            continue
        tbl = re.search(r'<table.*?</table>', page, re.S)
        if not tbl:
            continue
        # colonne GAIA: [0]=Parametro [1]=Unità [2]=Valore Medio [3]=Limite
        rows = _table_rows(tbl.group(0), name_i=0, value_i=2, unit_i=1)
        rec = _record(
            slugify(name), name, prov, 'Toscana', 'GAIA S.p.A.', url,
            f'GAIA — Analisi acqua di {name}', rows, punto='valore medio (prelievo rappresentativo)')
        if rec:
            out.append(rec)
    print(f'  [gaia] {len(out)} comuni con dati', file=sys.stderr)
    return out


# ————————————————————————————————————————————————————————————————
# Uniacque — provincia di Bergamo (216 comuni), pagina OpenCms server-rendered.
# 3 GET: enumera comuni -> primo punto rete del comune -> tabella valori.
# ————————————————————————————————————————————————————————————————
import urllib.parse as _urlparse

UNIACQUE_BASE = 'https://www.uniacque.bg.it/qualita-dellacqua/i-parametri-del-tuo-comune/'
_TAG_RE = re.compile(r'<[^>]+>')
_TR_RE = re.compile(r'<tr[^>]*>(.*?)</tr>', re.S)
_CELL_RE = re.compile(r'<t[hd][^>]*>(.*?)</t[hd]>', re.S)


def _cell_text(cell: str) -> str:
    return html.unescape(_TAG_RE.sub('', cell)).strip()


def _table_rows(table_html: str, name_i: int, value_i: int, unit_i: int) -> list[tuple[str, str, str]]:
    """Estrae righe (nome, valore, unita) da una <table> parsando le celle IN ORDINE.

    Robusto alle celle vuote (valore sotto-rilevabilita): non disallinea le colonne.
    """
    rows = []
    for tr in _TR_RE.findall(table_html):
        cells = [_cell_text(c) for c in _CELL_RE.findall(tr)]
        if len(cells) <= max(name_i, value_i, unit_i):
            continue
        name = cells[name_i]
        if not name:
            continue
        rows.append((name, cells[value_i], cells[unit_i]))
    return rows


def _select_options(page: str, name: str) -> list[tuple[str, str]]:
    block = re.search(rf'<select[^>]*name="{name}"[^>]*>(.*?)</select>', page, re.S)
    if not block:
        return []
    opts = re.findall(r'<option[^>]*value="([^"]*)"[^>]*>([^<]*)</option>', block.group(1))
    return [(html.unescape(v), html.unescape(t).strip()) for v, t in opts if v.strip()]


def adapter_uniacque() -> list:
    try:
        index = http_get(UNIACQUE_BASE)
    except Exception as e:  # noqa: BLE001
        print(f'  [uniacque] indice non raggiungibile: {type(e).__name__}', file=sys.stderr)
        return []
    comuni = _select_options(index, 'comuneId')
    out = []
    for name, _ in comuni:
        try:
            cpage = http_get(UNIACQUE_BASE + '?comuneId=' + _urlparse.quote(name))
            punti = _select_options(cpage, 'comune')
            if not punti:
                continue
            punto_val, punto_label = punti[0]  # punto rete rappresentativo
            tpage = http_get(UNIACQUE_BASE + '?comune=' + _urlparse.quote(punto_val))
        except Exception as e:  # noqa: BLE001
            print(f'  [uniacque] {name}: {type(e).__name__} — salto', file=sys.stderr)
            continue
        tbl = re.search(r'id="tabellaValori".*?</table>', tpage, re.S)
        if not tbl:
            continue
        # colonne: [0]=Parametro [1]=Valore rilevato [2]=Valore limite [3]=Unità
        rows = _table_rows(tbl.group(0), name_i=0, value_i=1, unit_i=3)
        rec = _record(
            slugify(name), name, 'BG', 'Lombardia', 'Uniacque S.p.A.',
            UNIACQUE_BASE + '?comuneId=' + _urlparse.quote(name),
            f'Uniacque — Parametri di qualità di {name}', rows,
            punto=punto_label)
        if rec:
            out.append(rec)
    print(f'  [uniacque] {len(out)} comuni con dati', file=sys.stderr)
    return out


# ————————————————————————————————————————————————————————————————
# SMAT — ATO 3 Torinese (299 comuni). admin-ajax WordPress con nonce.
# ————————————————————————————————————————————————————————————————
SMAT_PAGE = 'https://www.smatorino.it/monitoraggio-acque/'


def adapter_smat() -> list:
    try:
        page = http_get(SMAT_PAGE)
    except Exception as e:  # noqa: BLE001
        print(f'  [smat] pagina non raggiungibile: {type(e).__name__}', file=sys.stderr)
        return []
    mnonce = re.search(r'ajax_url"\s*:\s*"[^"]*_wpnonce=([0-9a-fA-F]+)', page)
    block = re.search(r'<select[^>]*name=["\']comune["\'][^>]*>(.*?)</select>', page, re.S)
    if not mnonce or not block:
        print('  [smat] nonce o select non trovati', file=sys.stderr)
        return []
    nonce = mnonce.group(1)
    ajax = f'https://www.smatorino.it/wp-admin/admin-ajax.php?_wpnonce={nonce}'
    comuni = re.findall(r'<option[^>]*value="(\d+)"[^>]*>([^<]+)</option>', block.group(1))
    out = []
    for code, raw_name in comuni:
        name = title_comune(html.unescape(raw_name))
        body = _urlparse.urlencode(
            {'action': 'filtrocomune_request', 'comune': code, 'tipologia': 'chimico'}).encode()
        try:
            resp = http_get(ajax, data=body,
                            headers={'Content-Type': 'application/x-www-form-urlencoded'})
        except Exception as e:  # noqa: BLE001
            print(f'  [smat] {name}: {type(e).__name__} — salto', file=sys.stderr)
            continue
        tbl = re.search(r'<table[^>]*tbchimico.*?</table>', resp, re.S)
        if not tbl:
            continue
        # colonne: [0]=Parametro [1]=N rilevazioni [2]=Unità [3]=Valore medio [4]=Limite
        rows = _table_rows(tbl.group(0), name_i=0, value_i=3, unit_i=2)
        rec = _record(
            slugify(name), name, 'TO', 'Piemonte', 'SMAT S.p.A.', SMAT_PAGE,
            'SMAT — Qualità dell\'acqua del tuo comune', rows,
            punto='valori medi comunali (parametri chimici)')
        if rec:
            out.append(rec)
    print(f'  [smat] {len(out)} comuni con dati', file=sys.stderr)
    return out


REGISTRY: dict[str, Adapter] = {
    'milano-opendata': adapter_milano_opendata,
    'publiacqua': adapter_publiacqua,
    'ireti': adapter_ireti,
    'gaia': adapter_gaia,
    'uniacque': adapter_uniacque,
    'smat': adapter_smat,
}
