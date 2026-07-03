'use client';

import * as React from 'react';
import Link from 'next/link';

export interface ExplorerRow {
  slug: string;
  brand: string;
  classLabel: string;
  regione: string;
  residuoFisso: number | null;
  sodio: number | null;
  calcio: number | null;
  magnesio: number | null;
  ph: number | null;
  useTags: string[];
}

export interface ExplorerUseCase {
  key: string;
  label: string;
}

type SortKey = 'brand' | 'residuoFisso' | 'sodio' | 'calcio' | 'magnesio' | 'ph';

const COLUMNS: Array<{ key: SortKey; label: string; unit?: string; numeric: boolean }> = [
  { key: 'brand', label: 'Acqua', numeric: false },
  { key: 'residuoFisso', label: 'Residuo fisso', unit: 'mg/L', numeric: true },
  { key: 'sodio', label: 'Sodio', unit: 'mg/L', numeric: true },
  { key: 'calcio', label: 'Calcio', unit: 'mg/L', numeric: true },
  { key: 'magnesio', label: 'Magnesio', unit: 'mg/L', numeric: true },
  { key: 'ph', label: 'pH', numeric: true },
];

function fmt(v: number | null): string {
  if (v === null) return '—';
  return v.toLocaleString('it-IT', { maximumFractionDigits: 2 });
}

function compareRows(a: ExplorerRow, b: ExplorerRow, key: SortKey, dir: 1 | -1): number {
  if (key === 'brand') return a.brand.localeCompare(b.brand, 'it') * dir;
  const av = a[key];
  const bv = b[key];
  // I valori mancanti finiscono sempre in fondo, a prescindere dalla direzione.
  if (av === null && bv === null) return 0;
  if (av === null) return 1;
  if (bv === null) return -1;
  return (av - bv) * dir;
}

export function MineralWaterTable({
  rows,
  useCases,
}: {
  rows: ExplorerRow[];
  useCases: ExplorerUseCase[];
}) {
  const [sortKey, setSortKey] = React.useState<SortKey>('residuoFisso');
  const [dir, setDir] = React.useState<1 | -1>(1);
  const [filter, setFilter] = React.useState<string | null>(null);

  const view = React.useMemo(() => {
    const filtered = filter
      ? rows.filter((r) => r.useTags.includes(filter))
      : rows;
    const copy = [...filtered];
    copy.sort((a, b) => compareRows(a, b, sortKey, dir));
    return copy;
  }, [rows, filter, sortKey, dir]);

  function onSort(key: SortKey) {
    if (key === sortKey) {
      setDir((d) => (d === 1 ? -1 : 1));
    } else {
      setSortKey(key);
      setDir(1);
    }
  }

  return (
    <div>
      {/* Filtri per esigenza */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter(null)}
          aria-pressed={filter === null}
          className={`rounded-full border px-3 py-1.5 text-sm transition ${
            filter === null
              ? 'border-violet-400/50 bg-violet-500/20 text-violet-100'
              : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/25'
          }`}
        >
          Tutte ({rows.length})
        </button>
        {useCases.map((uc) => {
          const count = rows.filter((r) => r.useTags.includes(uc.key)).length;
          if (count === 0) return null;
          const active = filter === uc.key;
          return (
            <button
              key={uc.key}
              type="button"
              onClick={() => setFilter(active ? null : uc.key)}
              aria-pressed={active}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                active
                  ? 'border-violet-400/50 bg-violet-500/20 text-violet-100'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/25'
              }`}
            >
              {uc.label} ({count})
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[38rem] border-collapse text-sm">
          <caption className="sr-only">
            Confronto di residuo fisso, sodio, calcio, magnesio e pH delle
            principali acque minerali italiane. Tocca un&apos;intestazione per
            ordinare.
          </caption>
          <thead>
            <tr className="border-b border-white/10 text-left text-slate-400">
              {COLUMNS.map((col) => {
                const active = col.key === sortKey;
                return (
                  <th
                    key={col.key}
                    scope="col"
                    className={`py-2.5 pr-3 font-medium ${col.numeric ? 'text-right' : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => onSort(col.key)}
                      aria-sort={
                        active ? (dir === 1 ? 'ascending' : 'descending') : 'none'
                      }
                      className={`inline-flex items-center gap-1 rounded px-1 py-0.5 transition hover:text-slate-100 ${
                        active ? 'text-slate-100' : ''
                      }`}
                    >
                      <span>
                        {col.label}
                        {col.unit ? (
                          <span className="ml-1 text-[11px] font-normal text-slate-500">
                            {col.unit}
                          </span>
                        ) : null}
                      </span>
                      <span aria-hidden className="text-xs">
                        {active ? (dir === 1 ? '▲' : '▼') : '↕'}
                      </span>
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {view.map((r) => (
              <tr
                key={r.slug}
                className="border-b border-white/5 transition hover:bg-white/[0.03]"
              >
                <td className="py-2.5 pr-3">
                  <Link
                    href={`/acque-minerali/${r.slug}`}
                    className="font-display font-semibold text-slate-100 underline-offset-2 hover:text-white hover:underline"
                  >
                    {r.brand}
                  </Link>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    {r.classLabel} · {r.regione}
                  </span>
                </td>
                <td className="py-2.5 pr-3 text-right font-display text-slate-100">
                  {fmt(r.residuoFisso)}
                </td>
                <td className="py-2.5 pr-3 text-right text-slate-300">{fmt(r.sodio)}</td>
                <td className="py-2.5 pr-3 text-right text-slate-300">{fmt(r.calcio)}</td>
                <td className="py-2.5 pr-3 text-right text-slate-300">
                  {fmt(r.magnesio)}
                </td>
                <td className="py-2.5 pr-3 text-right text-slate-300">{fmt(r.ph)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {view.length === 0 ? (
        <p className="mt-4 text-sm text-slate-400">
          Nessuna acqua di questo elenco rientra in questo criterio.
        </p>
      ) : null}
    </div>
  );
}
