#!/usr/bin/env python3
"""
Esegue gli adapter self-fetching e scrive/aggiorna src/data/comuni-analyses.json.

  python3 scripts/run_adapters.py --all
  python3 scripts/run_adapters.py --adapter publiacqua
  python3 scripts/run_adapters.py --list
  python3 scripts/run_adapters.py --all --dry-run   # non scrive, stampa il riepilogo

I record esistenti di altre fonti restano; ogni adapter fa upsert dei propri
comuni (chiave: comune + data + punto di prelievo).
"""
from __future__ import annotations

import argparse
import json
import sys

from adapters import REGISTRY
from scrape_comune import upsert_many


def main() -> None:
    ap = argparse.ArgumentParser(description='Esegue gli adapter GoccIA')
    ap.add_argument('--adapter', help='nome adapter da eseguire')
    ap.add_argument('--all', action='store_true', help='esegue tutti gli adapter')
    ap.add_argument('--list', action='store_true', help='elenca gli adapter disponibili')
    ap.add_argument('--dry-run', action='store_true', help='non scrive, stampa il riepilogo')
    args = ap.parse_args()

    if args.list:
        for name in REGISTRY:
            print(name)
        return

    if args.all:
        names = list(REGISTRY)
    elif args.adapter:
        if args.adapter not in REGISTRY:
            ap.error(f'adapter sconosciuto: {args.adapter}. Disponibili: {", ".join(REGISTRY)}')
        names = [args.adapter]
    else:
        ap.error('specifica --adapter <nome>, --all o --list')

    all_records = []
    for name in names:
        print(f'▶ adapter {name}…', file=sys.stderr)
        try:
            records = [r for r in REGISTRY[name]() if r]
        except Exception as e:  # noqa: BLE001
            print(f'  ERRORE adapter {name}: {type(e).__name__}: {e}', file=sys.stderr)
            continue
        print(f'  {name}: {len(records)} comuni con dati', file=sys.stderr)
        all_records.extend(records)

    if not all_records:
        print('Nessun record prodotto.', file=sys.stderr)
        sys.exit(1)

    summary = [(r['comuneSlug'], len(r['samples'])) for r in all_records]
    if args.dry_run:
        print(json.dumps(summary, ensure_ascii=False))
        print(f'(dry-run) {len(all_records)} comuni pronti — nessuna scrittura.')
        return

    written = upsert_many(all_records)
    print(f'✓ scritti/aggiornati {written} comuni in src/data/comuni-analyses.json')
    for slug, n in sorted(summary):
        print(f'  {slug}: {n} parametri')


if __name__ == '__main__':
    main()
