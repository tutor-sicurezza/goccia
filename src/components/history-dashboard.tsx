'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { PARAMETER_CONFIGS } from '@aquascore/index';
import {
  clearHistory,
  loadHistory,
  removeAnalysis,
  updateLabel,
  type HistoryStatus,
  type StoredAnalysis,
} from '@/lib/water-history';
import { formatValue, prettyParameterName, statusBadge } from '@/lib/format';

const LINE = '#38bdf8'; // sky-400, unica serie su superficie scura
const GUIDE = 'rgba(148,163,184,0.35)';

const STATUS_PILL: Record<HistoryStatus, string> = {
  ideal: 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30',
  acceptable: 'bg-amber-400/15 text-amber-200 ring-1 ring-amber-400/30',
  over_limit: 'bg-rose-400/15 text-rose-200 ring-1 ring-rose-400/30',
  unknown: 'bg-white/5 text-slate-400 ring-1 ring-white/10',
};

const TONE_TEXT: Record<StoredAnalysis['verdictTone'], string> = {
  green: 'text-green-300',
  emerald: 'text-emerald-300',
  amber: 'text-amber-300',
  orange: 'text-orange-300',
  red: 'text-rose-300',
};

const STATUS_RANK: Record<HistoryStatus, number> = {
  ideal: 2,
  acceptable: 1,
  over_limit: 0,
  unknown: -1,
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function unitOf(parameterId: string): string {
  return PARAMETER_CONFIGS.find((c) => c.id === parameterId)?.unit ?? '';
}

/** Grafico del punteggio nel tempo: serie singola, etichette dirette sui punti. */
function ScoreTrendChart({ entries }: { entries: StoredAnalysis[] }) {
  const w = 640;
  const h = 220;
  const pad = { top: 28, right: 24, bottom: 34, left: 34 };
  const innerW = w - pad.left - pad.right;
  const innerH = h - pad.top - pad.bottom;

  const scores = entries.map((e) => e.overall);
  const min = Math.max(1, Math.min(...scores) - 12);
  const max = Math.min(99, Math.max(...scores) + 8);
  const x = (i: number) =>
    pad.left + (entries.length === 1 ? innerW / 2 : (i / (entries.length - 1)) * innerW);
  const y = (v: number) => pad.top + innerH - ((v - min) / Math.max(1, max - min)) * innerH;

  const path = entries
    .map((e, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(e.overall).toFixed(1)}`)
    .join(' ');

  const showGuide70 = 70 >= min && 70 <= max;
  // Etichette data: prima, ultima e al massimo una ogni ~3 per non affollare.
  const labelStep = Math.max(1, Math.ceil(entries.length / 5));

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={`Andamento del punteggio nelle ultime ${entries.length} analisi`}
      className="w-full"
    >
      {showGuide70 ? (
        <g>
          <line
            x1={pad.left}
            x2={w - pad.right}
            y1={y(70)}
            y2={y(70)}
            stroke={GUIDE}
            strokeDasharray="4 5"
            strokeWidth="1"
          />
          <text x={w - pad.right} y={y(70) - 6} textAnchor="end" fontSize="11" fill="#94a3b8">
            70 · soglia “Buona”
          </text>
        </g>
      ) : null}
      <line
        x1={pad.left}
        x2={w - pad.right}
        y1={pad.top + innerH}
        y2={pad.top + innerH}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />
      <path d={path} fill="none" stroke={LINE} strokeWidth="2" strokeLinejoin="round" />
      {entries.map((e, i) => (
        <g key={e.submissionId}>
          <circle cx={x(i)} cy={y(e.overall)} r="4" fill={LINE} stroke="#0f172a" strokeWidth="2">
            <title>
              {formatDate(e.analyzedAt)}
              {e.label ? ` · ${e.label}` : ''} — {e.overall}/99 ({e.verdictLabel})
            </title>
          </circle>
          <text
            x={x(i)}
            y={y(e.overall) - 10}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="#e2e8f0"
          >
            {e.overall}
          </text>
          {i % labelStep === 0 || i === entries.length - 1 ? (
            <text
              x={x(i)}
              y={pad.top + innerH + 18}
              textAnchor="middle"
              fontSize="11"
              fill="#94a3b8"
            >
              {new Date(e.analyzedAt).toLocaleDateString('it-IT', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
              })}
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

function Sparkline({ values }: { values: number[] }) {
  const w = 120;
  const h = 36;
  const pad = 4;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const x = (i: number) =>
    pad + (values.length === 1 ? (w - pad * 2) / 2 : (i / (values.length - 1)) * (w - pad * 2));
  const y = (v: number) => pad + (h - pad * 2) - ((v - min) / span) * (h - pad * 2);
  const path = values
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`)
    .join(' ');
  const last = values[values.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-[120px]" aria-hidden="true">
      <path d={path} fill="none" stroke={LINE} strokeWidth="2" strokeLinejoin="round" />
      <circle cx={x(values.length - 1)} cy={y(last)} r="3" fill={LINE} stroke="#0f172a" strokeWidth="1.5" />
    </svg>
  );
}

interface ParamSeries {
  id: string;
  values: { date: string; value: number }[];
}

function buildParamSeries(entries: StoredAnalysis[]): ParamSeries[] {
  const byId = new Map<string, { date: string; value: number }[]>();
  for (const e of entries) {
    for (const p of e.parameters) {
      if (p.value === null || Number.isNaN(p.value)) continue;
      const arr = byId.get(p.id) ?? [];
      arr.push({ date: e.analyzedAt, value: p.value });
      byId.set(p.id, arr);
    }
  }
  return [...byId.entries()]
    .filter(([, values]) => values.length >= 2)
    .map(([id, values]) => ({ id, values }))
    .sort((a, b) => prettyParameterName(a.id).localeCompare(prettyParameterName(b.id)));
}

function deltaJudgment(a: HistoryStatus, b: HistoryStatus): {
  label: string;
  cls: string;
} {
  const diff = STATUS_RANK[b] - STATUS_RANK[a];
  if (STATUS_RANK[a] < 0 || STATUS_RANK[b] < 0) return { label: '—', cls: 'text-slate-500' };
  if (diff > 0) return { label: 'Migliorato', cls: 'text-emerald-300' };
  if (diff < 0) return { label: 'Peggiorato', cls: 'text-rose-300' };
  return { label: 'Stabile', cls: 'text-slate-400' };
}

export function HistoryDashboard() {
  const [entries, setEntries] = useState<StoredAnalysis[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [compareA, setCompareA] = useState<string>('');
  const [compareB, setCompareB] = useState<string>('');
  const [editing, setEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const loaded = loadHistory();
    setEntries(loaded);
    setHydrated(true);
    if (loaded.length >= 2) {
      setCompareA(loaded[loaded.length - 2].submissionId);
      setCompareB(loaded[loaded.length - 1].submissionId);
    }
  }, []);

  const paramSeries = useMemo(() => buildParamSeries(entries), [entries]);

  const entryA = entries.find((e) => e.submissionId === compareA);
  const entryB = entries.find((e) => e.submissionId === compareB);

  const comparisonRows = useMemo(() => {
    if (!entryA || !entryB) return [];
    const ids = new Set<string>();
    for (const p of entryA.parameters) ids.add(p.id);
    for (const p of entryB.parameters) ids.add(p.id);
    return [...ids]
      .sort((a, b) => prettyParameterName(a).localeCompare(prettyParameterName(b)))
      .map((id) => {
        const pa = entryA.parameters.find((p) => p.id === id);
        const pb = entryB.parameters.find((p) => p.id === id);
        return { id, a: pa, b: pb };
      });
  }, [entryA, entryB]);

  function handleRemove(submissionId: string) {
    removeAnalysis(submissionId);
    setEntries(loadHistory());
  }

  function handleClear() {
    if (!window.confirm('Vuoi davvero svuotare tutto lo storico salvato in questo browser?')) return;
    clearHistory();
    setEntries([]);
  }

  function startEdit(e: StoredAnalysis) {
    setEditing(e.submissionId);
    setEditValue(e.label ?? '');
  }

  function commitEdit(submissionId: string) {
    updateLabel(submissionId, editValue);
    setEditing(null);
    setEntries(loadHistory());
  }

  if (!hydrated) {
    return (
      <div className="glass p-8 text-sm text-slate-400" aria-busy="true">
        Caricamento dello storico locale…
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="glass-strong p-8 sm:p-10">
        <h2 className="font-display text-2xl font-semibold text-white">
          Il tuo storico è ancora vuoto
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Ogni volta che calcoli un punteggio con GoccIA, il risultato viene
          salvato automaticamente <strong>solo in questo browser</strong>. Qui
          troverai la linea del tempo delle tue analisi, il trend del punteggio
          e il confronto parametro per parametro tra due referti — utile per
          capire se l&apos;acqua di casa sta migliorando o peggiorando.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40"
          >
            Calcola il tuo primo punteggio
          </Link>
          <Link
            href="/analisi-ufficiali"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Trova le analisi ufficiali del tuo comune
          </Link>
        </div>
      </div>
    );
  }

  const last = entries[entries.length - 1];
  const prev = entries.length >= 2 ? entries[entries.length - 2] : null;
  const scoreDelta = prev ? last.overall - prev.overall : null;

  return (
    <div className="space-y-10">
      {/* RIEPILOGO */}
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="glass p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">Analisi salvate</p>
          <p className="mt-1 font-display text-3xl font-semibold text-white tabular-nums">
            {entries.length}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            dal {formatDate(entries[0].analyzedAt)}
          </p>
        </div>
        <div className="glass p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">Ultimo punteggio</p>
          <p className={`mt-1 font-display text-3xl font-semibold tabular-nums ${TONE_TEXT[last.verdictTone]}`}>
            {last.overall}
            <span className="text-base text-slate-500"> /99</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {last.verdictLabel} · {formatDate(last.analyzedAt)}
          </p>
        </div>
        <div className="glass p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">Rispetto alla precedente</p>
          <p
            className={`mt-1 font-display text-3xl font-semibold tabular-nums ${
              scoreDelta === null
                ? 'text-slate-500'
                : scoreDelta > 0
                ? 'text-emerald-300'
                : scoreDelta < 0
                ? 'text-rose-300'
                : 'text-slate-300'
            }`}
          >
            {scoreDelta === null ? '—' : `${scoreDelta > 0 ? '+' : ''}${scoreDelta}`}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {scoreDelta === null ? 'serve almeno una seconda analisi' : 'punti sul punteggio 1–99'}
          </p>
        </div>
      </section>

      {/* TREND PUNTEGGIO */}
      {entries.length >= 2 ? (
        <section className="glass p-5 sm:p-6">
          <h2 className="font-display text-xl font-semibold text-white">
            Trend del punteggio
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Punteggio complessivo 1–99 delle tue analisi, in ordine di data.
          </p>
          <div className="mt-4">
            <ScoreTrendChart entries={entries} />
          </div>
        </section>
      ) : null}

      {/* TREND PER PARAMETRO */}
      {paramSeries.length > 0 ? (
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            Parametri nel tempo
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Solo i parametri presenti in almeno due analisi. L&apos;ultimo valore è
            confrontato con quello dell&apos;analisi precedente che lo conteneva.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {paramSeries.map((s) => {
              const lastV = s.values[s.values.length - 1].value;
              const prevV = s.values[s.values.length - 2].value;
              const delta = lastV - prevV;
              const unit = unitOf(s.id);
              return (
                <div key={s.id} className="glass flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p className="truncate font-display text-sm font-semibold text-white">
                      {prettyParameterName(s.id)}
                    </p>
                    <p className="mt-1 text-sm text-slate-200 tabular-nums">
                      {formatValue(lastV, unit)}
                    </p>
                    <p
                      className={`mt-0.5 text-xs tabular-nums ${
                        delta === 0 ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      {delta === 0
                        ? 'invariato'
                        : `${delta > 0 ? '+' : ''}${formatValue(delta)} vs precedente`}
                    </p>
                  </div>
                  <Sparkline values={s.values.map((v) => v.value)} />
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* CONFRONTO */}
      {entries.length >= 2 ? (
        <section className="glass p-5 sm:p-6">
          <h2 className="font-display text-xl font-semibold text-white">
            Confronta due analisi
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { label: 'Analisi A', value: compareA, set: setCompareA },
              { label: 'Analisi B', value: compareB, set: setCompareB },
            ].map((sel) => (
              <label key={sel.label} className="block text-xs text-slate-400">
                {sel.label}
                <select
                  value={sel.value}
                  onChange={(e) => sel.set(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50"
                >
                  {entries.map((e) => (
                    <option key={e.submissionId} value={e.submissionId}>
                      {formatDate(e.analyzedAt)} — {e.overall}/99
                      {e.label ? ` — ${e.label}` : ''}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          {entryA && entryB && entryA.submissionId !== entryB.submissionId ? (
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-slate-400">
                    <tr>
                      <th className="px-4 py-3 font-medium">Parametro</th>
                      <th className="px-4 py-3 font-medium">
                        A · {formatDate(entryA.analyzedAt)}
                      </th>
                      <th className="px-4 py-3 font-medium">
                        B · {formatDate(entryB.analyzedAt)}
                      </th>
                      <th className="px-4 py-3 font-medium">Esito</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="bg-white/[0.02] text-slate-100">
                      <td className="px-4 py-3 font-semibold">Punteggio complessivo</td>
                      <td className="px-4 py-3 tabular-nums">{entryA.overall}/99</td>
                      <td className="px-4 py-3 tabular-nums">{entryB.overall}/99</td>
                      <td
                        className={`px-4 py-3 text-xs font-medium ${
                          entryB.overall > entryA.overall
                            ? 'text-emerald-300'
                            : entryB.overall < entryA.overall
                            ? 'text-rose-300'
                            : 'text-slate-400'
                        }`}
                      >
                        {entryB.overall > entryA.overall
                          ? `Migliorato (+${entryB.overall - entryA.overall})`
                          : entryB.overall < entryA.overall
                          ? `Peggiorato (${entryB.overall - entryA.overall})`
                          : 'Stabile'}
                      </td>
                    </tr>
                    {comparisonRows.map((row) => {
                      const unit = unitOf(row.id);
                      const judgment =
                        row.a && row.b
                          ? deltaJudgment(row.a.status, row.b.status)
                          : { label: '—', cls: 'text-slate-500' };
                      return (
                        <tr key={row.id} className="text-slate-200">
                          <td className="px-4 py-3 font-medium text-white">
                            {prettyParameterName(row.id)}
                          </td>
                          {[row.a, row.b].map((p, i) => (
                            <td key={i} className="px-4 py-3 tabular-nums">
                              {p ? (
                                <span className="inline-flex items-center gap-2">
                                  {formatValue(p.value, unit)}
                                  <span
                                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${STATUS_PILL[p.status]}`}
                                  >
                                    {statusBadge(p.status).label}
                                  </span>
                                </span>
                              ) : (
                                <span className="text-slate-500">non misurato</span>
                              )}
                            </td>
                          ))}
                          <td className={`px-4 py-3 text-xs font-medium ${judgment.cls}`}>
                            {judgment.label}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-xs text-slate-500">
              Seleziona due analisi diverse per vedere il confronto parametro per parametro.
            </p>
          )}
        </section>
      ) : null}

      {/* ELENCO */}
      <section>
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-xl font-semibold text-white">
            Tutte le tue analisi
          </h2>
          <button
            type="button"
            onClick={handleClear}
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition hover:border-rose-400/40 hover:text-rose-300"
          >
            Svuota storico
          </button>
        </div>
        <ul className="mt-4 space-y-3">
          {[...entries].reverse().map((e) => (
            <li key={e.submissionId} className="glass p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span
                  className={`font-display text-2xl font-semibold tabular-nums ${TONE_TEXT[e.verdictTone]}`}
                >
                  {e.overall}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-100">
                    {e.verdictLabel} · {formatDate(e.analyzedAt)}
                  </p>
                  {editing === e.submissionId ? (
                    <form
                      className="mt-1 flex items-center gap-2"
                      onSubmit={(ev) => {
                        ev.preventDefault();
                        commitEdit(e.submissionId);
                      }}
                    >
                      <input
                        value={editValue}
                        onChange={(ev) => setEditValue(ev.target.value)}
                        maxLength={40}
                        placeholder="Es. Casa — cucina"
                        autoFocus
                        className="w-48 rounded-lg border border-white/15 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 outline-none focus:border-sky-400/50"
                      />
                      <button
                        type="submit"
                        className="rounded-lg border border-white/15 px-2 py-1 text-xs text-slate-200 hover:bg-white/5"
                      >
                        Salva
                      </button>
                    </form>
                  ) : (
                    <button
                      type="button"
                      onClick={() => startEdit(e)}
                      className="mt-0.5 text-xs text-slate-400 underline decoration-white/20 underline-offset-2 transition hover:text-slate-200"
                    >
                      {e.label ? e.label : 'Aggiungi etichetta (es. "Casa — cucina")'}
                    </button>
                  )}
                </div>
                <p className="text-xs text-slate-500">
                  {e.parameters.length} parametri
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/risultato/${e.submissionId}`}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    Apri
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleRemove(e.submissionId)}
                    aria-label={`Elimina l'analisi del ${formatDate(e.analyzedAt)}`}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition hover:border-rose-400/40 hover:text-rose-300"
                  >
                    Elimina
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
