#!/usr/bin/env python3
"""Test del core dello scraper (normalizzazione + parsing valori). Nessuna rete, nessun PDF.

Esegui:  python3 scripts/test_scrape.py
"""
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from scrape_comune import match_parameter, parse_value, build_sample  # noqa: E402

failures = []


def check(desc, got, expected):
    if got != expected:
        failures.append(f"FAIL {desc}: atteso {expected!r}, ottenuto {got!r}")


# — riconoscimento nomi parametro —
check('nitrati', match_parameter('Nitrati'), 'nitrati')
check('nitrati NO3', match_parameter('NO3'), 'nitrati')
check('arsenico', match_parameter('Arsenico'), 'arsenico')
check('cromo totale non confuso', match_parameter('Cromo totale'), 'cromo')
check('durezza gradi francesi', match_parameter('Durezza totale in gradi francesi'), 'durezza_totale')
check('e.coli', match_parameter('Escherichia coli'), 'e_coli')
check('pfas somma', match_parameter('PFAS totali'), 'pfas_totali')
check('conducibilita accento', match_parameter('Conducibilità elettrica'), 'conducibilita')
check('sconosciuto', match_parameter('Temperatura'), None)
check('vuoto', match_parameter(''), None)

# — parsing valori (virgola decimale, sotto-soglia, assente) —
check('virgola', parse_value('12,3')['value'], 12.3)
check('punto decimale', parse_value('0.05')['value'], 0.05)
check('migliaia', parse_value('1.234')['value'], 1234.0)
check('sotto soglia value', parse_value('<1')['value'], 1.0)
check('sotto soglia flag', parse_value('<0,05')['below_detection'], True)
check('assente not_detected', parse_value('assente')['not_detected'], True)
check('assente non missing', parse_value('assente')['missing'], False)
check('non rilevato', parse_value('non rilevato')['not_detected'], True)
check('nd missing', parse_value('n.d.')['missing'], True)
check('nd non not_detected', parse_value('n.d.')['not_detected'], False)

# — build_sample end-to-end —
s = build_sample('Nitrati', '12,3', 'mg/L')
check('sample nitrati id', s['parameterId'], 'nitrati')
check('sample nitrati value', s['value'], 12.3)

s = build_sample('Arsenico', '<1', 'µg/L')
check('sample arsenico below->0', s['value'], 0.0)  # sotto rilevabilita' = ~assente

s = build_sample('Escherichia coli', 'assente', 'UFC/100mL')
check('microbio assente compliant', s['compliant'], True)
check('microbio assente value', s['value'], None)

# chimico "assente" -> mostrato come assente, value 0 per lo scoring
s = build_sample('Nitriti', 'Assente', 'mg/L')
check('chimico assente value', s['value'], 0.0)
check('chimico assente display', s['display'], 'assente')

s = build_sample('Escherichia coli', '5', 'UFC/100mL')
check('microbio rilevato compliant', s['compliant'], False)
check('microbio rilevato value', s['value'], 5.0)

check('chimico n.d. scartato', build_sample('Piombo', 'n.d.', 'µg/L'), None)
check('parametro ignoto scartato', build_sample('Temperatura', '15', '°C'), None)

# pH: sotto-soglia NON azzerato (ha un minimo di legge)
s = build_sample('pH', '<7', 'unità pH')
check('ph below non azzerato', s['value'], 7.0)

if failures:
    print('\n'.join(failures))
    print(f"\n{len(failures)} test falliti")
    sys.exit(1)
print('Tutti i test dello scraper OK')
