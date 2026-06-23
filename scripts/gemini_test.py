#!/usr/bin/env python3
"""Test Gemini 2.5 Pro output quality on a small health-related prompt with Italian compliance constraints."""
import json
import os
import sys
import urllib.request

KEY_PATH = os.path.join(os.path.dirname(__file__), '..', '.gemini.key')
MODEL = 'gemini-2.0-flash'
API = f'https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent'


def call(prompt: str, max_tokens: int = 2048) -> str:
    with open(KEY_PATH) as f:
        key = f.read().strip()
    body = {
        'contents': [{'parts': [{'text': prompt}]}],
        'generationConfig': {
            'temperature': 0.4,
            'maxOutputTokens': max_tokens,
            'responseMimeType': 'text/plain',
        },
    }
    req = urllib.request.Request(
        f'{API}?key={key}',
        data=json.dumps(body).encode('utf-8'),
        headers={'Content-Type': 'application/json'},
        method='POST',
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            raw = r.read().decode('utf-8')
    except urllib.error.HTTPError as e:
        msg = e.read().decode('utf-8', errors='ignore')
        return f'HTTP_ERR_{e.code}: {msg[:500]}'
    data = json.loads(raw)
    if 'error' in data:
        return 'API_ERR: ' + str(data['error'])[:500]
    candidates = data.get('candidates', [])
    if not candidates:
        return 'EMPTY_RESPONSE: ' + json.dumps(data)[:500]
    parts = candidates[0].get('content', {}).get('parts', [])
    if not parts:
        finish = candidates[0].get('finishReason', '?')
        return f'NO_PARTS (finish={finish}): ' + json.dumps(candidates[0])[:500]
    return parts[0].get('text', '')


PROMPT = """Sei un editor scientifico italiano specializzato in divulgazione di alta qualità per goccia.org — sito open source educativo di Labservice S.r.l. sulla qualità dell'acqua del rubinetto in Italia.

VINCOLI LEGALI INDEROGABILI (Italia):
1. NESSUN claim sanitario tipo "cura", "previene malattie", "guarisce" (D.Lgs. 219/2006 vieta claim medicinali).
2. NESSUN claim salutistico non autorizzato dal Reg. UE 432/2012 / Reg. 1924/2006 (ammessi solo claim autorizzati EFSA).
3. NESSUN claim ingannevole (Codice del Consumo D.Lgs. 206/2005).
4. NESSUNA dicitura "accreditato", "Accredia", "ISO 17025" riferita al laboratorio Labservice.
5. Wording ammesso: "laboratorio qualificato", "metodi validati conformi a norme tecniche", "processi tecnici documentati".
6. Tono divulgativo, neutrale, mai allarmistico né venditoriale.

TASK DI TEST:
Scrivi un singolo paragrafo introduttivo (max 180 parole) per un articolo pillar intitolato:
"Acqua del rubinetto e salute: cosa dice davvero la letteratura scientifica"

Requisiti:
- Italiano formale-divulgativo, mai marketing.
- Cita ALMENO 2 fonti scientifiche REALI verificabili (WHO, EFSA, OMS, Lancet, BMJ, ISS) con anno.
- ZERO claim medicali.
- Definisci subito l'angolo: cosa dice la scienza, cosa non dice, perché conta.
- Frasi brevi, leggibilità alta.

OUTPUT: solo il paragrafo, niente intestazione, niente meta-commento."""


def main():
    print(f'=== Test {MODEL} ===')
    print('Prompt size:', len(PROMPT), 'chars\n')
    out = call(PROMPT, max_tokens=512)
    print(out)
    print('\n---')
    print(f'Length: {len(out)} chars, {len(out.split())} words')


if __name__ == '__main__':
    main()
