'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  classificationInfo,
  type MineralWater,
  type WaterClassification,
} from '@/lib/mineral-waters';

interface Row {
  slug: string;
  brand: string;
  regione: string;
  type: string;
  classification: WaterClassification;
  residuoFisso: number | null;
  sodio: number | null;
  calcio: number | null;
  magnesio: number | null;
  ph: number | null;
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

function compareRows(a: Row, b: Row, key: SortKey, dir: 1 | -1): number {
  if (key === 'brand') return a.brand.localeCompare(b.brand, 'it') * dir;
  const av = a[key];
  const bv = b[key];
  // I valori mancanti finiscono sempre in fondo, a prescindere dalla direzione.
  if (av === null && bv === null) return 0;
  if (av === null) return 1;
  if (bv === null) return -1;
  return (av - bv) * dir;
}

export function MineralWaterTable({ waters }: { waters: MineralWater[] }) {
  const rows: Row[] = React.useMemo(
    () =>
      waters.map((w) => ({
        slug: w.slug,
        brand: w.brand,
        regione: w.regione,
        type: w.type,
        classification: w.classification,
        residuoFisso: w.analysis.residuoFisso,
        sodio: w.analysis.sodio,
        calcio: w.analysis.calcio,
        magnesio: w.analysis.magnesio,
        ph: w.analysis.ph,
      })),
    [waters],
  );

  const [sortKey, setSortKey] = React.useState<SortKey>('residuoFisso');
  const [dir, setDir] = React.useState<1 | -1>(1);

  const sorted = React.useMemo(() => {
    const copy = [...rows];
    copy.sort((a, b) => compareRows(a, b, sortKey, dir));
    return copy;
  }, [rows, sortKey, dir]);

  function onSort(key: SortKey) {
    if (key === sortKey) {
      setDir((d) => (d === 1 ? -1 : 1));
    } else {
      setSortKey(key);
      // Il testo si ordina A→Z, i numeri dal più basso al più alto.
      setDir(1);
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[38rem] border-collapse text-sm">
        <caption className="sr-only">
          Confronto di residuo fisso, sodio, calcio, magnesio e pH delle
          principali acque minerali italiane. Tocca un'intestazione per ordinare.
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
                    aria-sort={active ? (dir === 1 ? 'ascending' : 'descending') : 'none'}
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
          {sorted.map((r) => (
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
                  {classificationInfo(r.classification).label} · {r.regione}
                </span>
              </td>
              <td className="py-2.5 pr-3 text-right font-display text-slate-100">
                {fmt(r.residuoFisso)}
              </td>
              <td className="py-2.5 pr-3 text-right text-slate-300">{fmt(r.sodio)}</td>
              <td className="py-2.5 pr-3 text-right text-slate-300">{fmt(r.calcio)}</td>
              <td className="py-2.5 pr-3 text-right text-slate-300">{fmt(r.magnesio)}</td>
              <td className="py-2.5 pr-3 text-right text-slate-300">{fmt(r.ph)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
