'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { ComuneIndexEntry, RegionStat } from '@/lib/comune-analyses';

// Cartogramma a caselle: posizione (colonna, riga) di ogni regione, forma ~Italia.
const REGION_TILES: Record<string, { c: number; r: number; label: string }> = {
  "Valle d'Aosta": { c: 1, r: 1, label: 'VdA' },
  Piemonte: { c: 1, r: 2, label: 'Piem' },
  Lombardia: { c: 2, r: 1, label: 'Lomb' },
  'Trentino-Alto Adige': { c: 3, r: 1, label: 'TAA' },
  'Friuli-Venezia Giulia': { c: 4, r: 1, label: 'FVG' },
  Veneto: { c: 3, r: 2, label: 'Ven' },
  Liguria: { c: 1, r: 3, label: 'Lig' },
  'Emilia-Romagna': { c: 2, r: 3, label: 'E-R' },
  Toscana: { c: 2, r: 4, label: 'Tosc' },
  Umbria: { c: 3, r: 4, label: 'Umb' },
  Marche: { c: 4, r: 4, label: 'Mar' },
  Lazio: { c: 2, r: 5, label: 'Laz' },
  Abruzzo: { c: 3, r: 5, label: 'Abr' },
  Molise: { c: 4, r: 5, label: 'Mol' },
  Sardegna: { c: 1, r: 6, label: 'Sard' },
  Campania: { c: 2, r: 6, label: 'Camp' },
  Basilicata: { c: 3, r: 6, label: 'Bas' },
  Puglia: { c: 4, r: 6, label: 'Pug' },
  Calabria: { c: 3, r: 7, label: 'Cal' },
  Sicilia: { c: 2, r: 8, label: 'Sic' },
};

function scoreTone(score: number): string {
  if (score >= 70) return 'bg-emerald-500/25 text-emerald-100 border-emerald-400/40';
  if (score >= 50) return 'bg-amber-500/25 text-amber-100 border-amber-400/40';
  if (score >= 30) return 'bg-orange-500/25 text-orange-100 border-orange-400/40';
  return 'bg-rose-500/25 text-rose-100 border-rose-400/40';
}

function dotColor(score: number): string {
  if (score >= 70) return 'bg-emerald-400';
  if (score >= 50) return 'bg-amber-400';
  if (score >= 30) return 'bg-orange-400';
  return 'bg-rose-400';
}

function norm(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Formattazione migliaia deterministica (identica server e client) per evitare
// mismatch di hydration da toLocaleString.
function fmt(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function ComuniBrowser({
  comuni,
  regionStats,
}: {
  comuni: ComuneIndexEntry[];
  regionStats: RegionStat[];
}) {
  const [region, setRegion] = useState<string | null>(null);
  const [gestore, setGestore] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const statByRegion = useMemo(
    () => new Map(regionStats.map((s) => [s.region, s])),
    [regionStats],
  );

  const gestori = useMemo(() => {
    const counts = new Map<string, number>();
    for (const c of comuni) counts.set(c.gestore, (counts.get(c.gestore) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [comuni]);

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return comuni.filter(
      (c) =>
        (!region || c.region === region) &&
        (!gestore || c.gestore === gestore) &&
        (!q || norm(c.name).includes(q)),
    );
  }, [comuni, region, gestore, query]);

  const byRegion = useMemo(() => {
    const acc: Record<string, ComuneIndexEntry[]> = {};
    for (const c of filtered) (acc[c.region] ??= []).push(c);
    return acc;
  }, [filtered]);
  // ordinamento deterministico (per code-unit): evita mismatch di hydration
  // tra ICU di Node (server) e del browser (client).
  const regionsSorted = Object.keys(byRegion).sort();

  return (
    <div>
      {/* Mappa a caselle */}
      <div className="glass rounded-3xl p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Mappa: clicca una regione per filtrare
          </p>
          {region ? (
            <button
              type="button"
              onClick={() => setRegion(null)}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:border-white/30 hover:bg-white/10"
            >
              ✕ {region}
            </button>
          ) : null}
        </div>
        <div
          className="mx-auto mt-4 grid w-full max-w-md gap-1.5"
          style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
          role="group"
          aria-label="Mappa delle regioni"
        >
          {Object.entries(REGION_TILES).map(([name, pos]) => {
            const stat = statByRegion.get(name);
            const has = Boolean(stat);
            const active = region === name;
            return (
              <button
                key={name}
                type="button"
                disabled={!has}
                onClick={() => setRegion(active ? null : name)}
                title={has ? `${name}: ${stat!.count} comuni · punteggio medio ${stat!.avgScore}` : `${name}: nessun dato`}
                style={{ gridColumn: pos.c, gridRow: pos.r }}
                className={[
                  'flex aspect-square flex-col items-center justify-center rounded-lg border text-center transition',
                  has
                    ? `${scoreTone(stat!.avgScore)} cursor-pointer hover:brightness-125`
                    : 'border-white/5 bg-white/[0.02] text-slate-600',
                  active ? 'ring-2 ring-white/70' : '',
                ].join(' ')}
              >
                <span className="text-[10px] font-semibold leading-none">{pos.label}</span>
                {has ? (
                  <span className="mt-0.5 text-[9px] leading-none opacity-80">{stat!.count}</span>
                ) : null}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-400">
          <span>Colore = punteggio medio regionale:</span>
          <span className="flex items-center gap-1"><i className="inline-block h-2.5 w-2.5 rounded-sm bg-emerald-500/60" />≥70</span>
          <span className="flex items-center gap-1"><i className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-500/60" />50–69</span>
          <span className="flex items-center gap-1"><i className="inline-block h-2.5 w-2.5 rounded-sm bg-orange-500/60" />30–49</span>
          <span className="flex items-center gap-1"><i className="inline-block h-2.5 w-2.5 rounded-sm bg-rose-500/60" />&lt;30</span>
        </div>
      </div>

      {/* Ricerca */}
      <div className="mt-6">
        <label htmlFor="comune-search" className="sr-only">
          Cerca un comune
        </label>
        <input
          id="comune-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca un comune…"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-sky-400/50 focus:bg-white/10"
        />
        <p className="mt-2 text-xs text-slate-500">
          {fmt(filtered.length)} comuni
          {region ? ` in ${region}` : ''}
          {gestore ? ` · ${gestore}` : ''}
          {query ? ` per «${query}»` : ''}
        </p>

        {/* Filtro gestore */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {gestori.map(([g, n]) => {
            const active = gestore === g;
            return (
              <button
                key={g}
                type="button"
                onClick={() => setGestore(active ? null : g)}
                className={[
                  'rounded-full border px-2.5 py-1 text-xs transition',
                  active
                    ? 'border-sky-400/50 bg-sky-400/15 text-sky-100'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/10',
                ].join(' ')}
              >
                {g} <span className="text-slate-500">· {n}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Risultati */}
      {filtered.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
          Nessun comune trovato. Prova un altro nome o rimuovi il filtro regione.
        </p>
      ) : (
        <div className="mt-6 space-y-8">
          <p className="text-xs text-slate-500">
            Il pallino indica il punteggio del comune:{' '}
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" /> buono ·{' '}
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400 align-middle" /> discreto ·{' '}
            <span className="inline-block h-2 w-2 rounded-full bg-orange-400 align-middle" /> da migliorare ·{' '}
            <span className="inline-block h-2 w-2 rounded-full bg-rose-400 align-middle" /> critico
          </p>
          {regionsSorted.map((r) => (
            <section key={r}>
              <h2 className="flex items-baseline gap-3 font-display text-xl font-semibold text-slate-100">
                {r}
                <span className="text-sm font-normal text-slate-500">
                  {byRegion[r].length} comuni
                </span>
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {byRegion[r].map((c) => (
                  <Link
                    key={c.slug}
                    href={`/acqua-di-${c.slug}`}
                    title={`Punteggio ${c.score}/99`}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-slate-200 transition hover:border-violet-400/40 hover:bg-white/10 hover:text-white"
                  >
                    <span
                      className={`inline-block h-2 w-2 shrink-0 rounded-full ${dotColor(c.score)}`}
                      aria-hidden
                    />
                    {c.name}
                    {c.province ? <span className="text-slate-500">({c.province})</span> : null}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
