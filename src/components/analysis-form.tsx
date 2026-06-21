'use client';

import { useMemo, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { PARAMETER_CONFIGS, type ParameterConfig } from '@aquascore/index';
import { PARAMETER_GROUPS } from '@/lib/parameter-groups';
import { ReportUpload, type ParsedReport } from '@/components/report-upload';
import {
  formatRange,
  localStatus,
  prettyParameterName,
  statusBadge,
  type StatusKey,
} from '@/lib/format';

type LabSource =
  | '123acqua'
  | 'altro_laboratorio'
  | 'gestore_idrico'
  | 'preferisco_non_dirlo';

interface NumericRow {
  value: string; // raw input string for italian decimals
}

interface MicroRow {
  present: boolean | null; // null = not specified
}

const TONE_PILL: Record<StatusKey, string> = {
  ideal: 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30',
  acceptable: 'bg-amber-400/15 text-amber-200 ring-1 ring-amber-400/30',
  over_limit: 'bg-rose-400/15 text-rose-200 ring-1 ring-rose-400/30',
  unknown: 'bg-white/5 text-slate-400 ring-1 ring-white/10',
};

function parseItalianNumber(raw: string): number | null {
  const trimmed = raw.trim().replace(',', '.');
  if (trimmed === '') return null;
  const n = Number(trimmed);
  if (!Number.isFinite(n)) return null;
  return n;
}

function configById(id: string): ParameterConfig | undefined {
  return PARAMETER_CONFIGS.find((c) => c.id === id);
}

export function AnalysisForm() {
  const router = useRouter();
  const [numeric, setNumeric] = useState<Record<string, NumericRow>>({});
  const [micro, setMicro] = useState<Record<string, MicroRow>>({});
  const [cap, setCap] = useState('');
  const [sourceLab, setSourceLab] = useState<LabSource>('preferisco_non_dirlo');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [isPending, startTransition] = useTransition();

  const totals = useMemo(() => {
    let filled = 0;
    for (const row of Object.values(numeric))
      if (row.value.trim() !== '') filled++;
    for (const row of Object.values(micro)) if (row.present !== null) filled++;
    return { filled };
  }, [numeric, micro]);

  function setNumericValue(id: string, value: string) {
    setNumeric((prev) => ({ ...prev, [id]: { value } }));
  }
  function applyParsedReport(report: ParsedReport) {
    const knownIds = new Set(PARAMETER_CONFIGS.map((c) => c.id));
    setNumeric((prev) => {
      const next = { ...prev };
      for (const p of report.parameters) {
        if (!knownIds.has(p.parameter_id)) continue;
        const cfg = PARAMETER_CONFIGS.find((c) => c.id === p.parameter_id);
        if (!cfg || cfg.microbiological) continue;
        if (p.numeric_value === null || Number.isNaN(p.numeric_value)) continue;
        const formatted = String(p.numeric_value).replace('.', ',');
        next[p.parameter_id] = { value: formatted };
      }
      return next;
    });
    setMicro((prev) => {
      const next = { ...prev };
      for (const p of report.parameters) {
        if (!knownIds.has(p.parameter_id)) continue;
        const cfg = PARAMETER_CONFIGS.find((c) => c.id === p.parameter_id);
        if (!cfg || !cfg.microbiological) continue;
        let present: boolean | null = null;
        if (typeof p.compliant === 'boolean') present = !p.compliant;
        else if (typeof p.numeric_value === 'number') present = p.numeric_value > 0;
        next[p.parameter_id] = { present };
      }
      return next;
    });
    if (report.cap && /^\d{5}$/.test(report.cap)) setCap(report.cap);
    if (
      report.laboratory_name &&
      /123\s*acqua|labservice/i.test(report.laboratory_name)
    ) {
      setSourceLab('123acqua');
    } else if (report.laboratory_name) {
      setSourceLab('altro_laboratorio');
    }
  }
  function setMicroValue(id: string, present: boolean | null) {
    setMicro((prev) => ({ ...prev, [id]: { present } }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    // Validation
    if (totals.filled < 1) {
      setError('Inserisci almeno un parametro per calcolare il punteggio.');
      return;
    }
    if (cap && !/^\d{5}$/.test(cap)) {
      setError('Il CAP deve essere di 5 cifre.');
      return;
    }

    const parameters: Array<{
      parameter_id: string;
      numeric_value: number | null;
      compliant?: boolean;
    }> = [];

    for (const [id, row] of Object.entries(numeric)) {
      if (row.value.trim() === '') continue;
      const n = parseItalianNumber(row.value);
      if (n === null) {
        setError(`Valore non valido per ${prettyParameterName(id)}.`);
        return;
      }
      if (n < 0) {
        setError(
          `Il valore di ${prettyParameterName(id)} non può essere negativo.`,
        );
        return;
      }
      parameters.push({ parameter_id: id, numeric_value: n });
    }
    for (const [id, row] of Object.entries(micro)) {
      if (row.present === null) continue;
      parameters.push({
        parameter_id: id,
        numeric_value: row.present ? 1 : 0,
        compliant: !row.present,
      });
    }

    const payload = {
      parameters,
      cap: cap || undefined,
      source_lab: sourceLab,
    };

    setSubmitting(true);
    try {
      const res = await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 429) {
        setError('Troppe richieste, riprova tra un’ora.');
        setSubmitting(false);
        return;
      }
      if (!res.ok) {
        setError(
          'Si è verificato un errore durante il calcolo. Riprova fra qualche istante.',
        );
        setSubmitting(false);
        return;
      }
      const data = (await res.json()) as { id: string };
      startTransition(() => {
        router.push(`/risultato/${data.id}`);
      });
    } catch {
      setError('Errore di rete. Verifica la connessione e riprova.');
      setSubmitting(false);
    }
  }

  const isBusy = submitting || isPending;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <ReportUpload onParsed={applyParsedReport} disabled={isBusy} />
      {PARAMETER_GROUPS.map((group) => (
        <fieldset key={group.key} className="space-y-4">
          <legend className="flex items-baseline gap-3">
            <span className="font-display text-xl font-semibold text-white">
              {group.label}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {group.parameterIds.length} parametri
            </span>
          </legend>
          <p className="-mt-2 text-sm text-slate-400">{group.description}</p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.parameterIds.map((id) => {
              const cfg = configById(id);
              if (!cfg) return null;
              const name = prettyParameterName(id);

              if (cfg.microbiological) {
                const row = micro[id] ?? { present: null };
                const status: StatusKey =
                  row.present === null
                    ? 'unknown'
                    : row.present
                    ? 'over_limit'
                    : 'ideal';
                const badge = statusBadge(status);
                return (
                  <div
                    key={id}
                    className="glass p-4 transition hover:border-white/20"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <label className="text-sm font-medium text-slate-100">
                        {name}
                      </label>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${TONE_PILL[status]}`}
                      >
                        {badge.label}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      Limite di legge: assente · {cfg.unit}
                    </p>
                    <div className="mt-3 inline-flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10">
                      {(
                        [
                          { v: false, label: 'Assente' },
                          { v: true, label: 'Presente' },
                        ] as const
                      ).map((opt) => {
                        const active = row.present === opt.v;
                        return (
                          <button
                            key={String(opt.v)}
                            type="button"
                            onClick={() => setMicroValue(id, opt.v)}
                            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                              active
                                ? opt.v
                                  ? 'bg-rose-500/20 text-rose-100 ring-1 ring-rose-400/40'
                                  : 'bg-emerald-500/20 text-emerald-100 ring-1 ring-emerald-400/40'
                                : 'text-slate-400 hover:text-slate-100'
                            }`}
                            aria-pressed={active}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                      {row.present !== null ? (
                        <button
                          type="button"
                          onClick={() => setMicroValue(id, null)}
                          className="rounded-lg px-2 py-1.5 text-xs text-slate-500 hover:text-slate-200"
                          aria-label={`Annulla selezione ${name}`}
                        >
                          ✕
                        </button>
                      ) : null}
                    </div>
                  </div>
                );
              }

              const row = numeric[id] ?? { value: '' };
              const parsed = parseItalianNumber(row.value);
              const status = localStatus(
                parsed,
                cfg.legal,
                cfg.ideal,
                cfg.microbiological,
              );
              const badge = statusBadge(status);
              const inputId = `param-${id}`;

              return (
                <div
                  key={id}
                  className="glass p-4 transition hover:border-white/20"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <label
                      htmlFor={inputId}
                      className="text-sm font-medium text-slate-100"
                    >
                      {name}
                    </label>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${TONE_PILL[status]}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Limite di legge: {formatRange(cfg.legal, cfg.unit)}
                  </p>
                  <div className="relative mt-3">
                    <input
                      id={inputId}
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      value={row.value}
                      onChange={(e) => setNumericValue(id, e.target.value)}
                      placeholder={
                        typeof cfg.legal.max === 'number'
                          ? `es. ${cfg.legal.max
                              .toString()
                              .replace('.', ',')}`
                          : 'es. 0'
                      }
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 pr-16 text-sm text-white placeholder:text-slate-600 transition focus:border-violet-400/60 focus:bg-black/40 focus:outline-none"
                      aria-describedby={`${inputId}-unit`}
                    />
                    <span
                      id={`${inputId}-unit`}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500"
                    >
                      {cfg.unit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>
      ))}

      {/* Extras */}
      <fieldset className="space-y-4">
        <legend className="font-display text-xl font-semibold text-white">
          Contesto (opzionale)
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="glass p-4">
            <label htmlFor="cap" className="text-sm font-medium text-slate-100">
              CAP
            </label>
            <p className="mt-1 text-xs text-slate-500">
              Utile per statistiche aggregate. Non identifica te.
            </p>
            <input
              id="cap"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              value={cap}
              onChange={(e) =>
                setCap(e.target.value.replace(/\D/g, '').slice(0, 5))
              }
              placeholder="00100"
              className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-violet-400/60 focus:outline-none"
            />
          </div>
          <div className="glass p-4">
            <label
              htmlFor="source_lab"
              className="text-sm font-medium text-slate-100"
            >
              Dove hai analizzato?
            </label>
            <p className="mt-1 text-xs text-slate-500">
              Aiuta a contestualizzare il referto.
            </p>
            <select
              id="source_lab"
              value={sourceLab}
              onChange={(e) => setSourceLab(e.target.value as LabSource)}
              className="mt-3 w-full appearance-none rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white focus:border-violet-400/60 focus:outline-none"
            >
              <option value="123acqua">123Acqua</option>
              <option value="altro_laboratorio">Altro laboratorio</option>
              <option value="gestore_idrico">Gestore idrico</option>
              <option value="preferisco_non_dirlo">
                Preferisco non dirlo
              </option>
            </select>
          </div>
        </div>
      </fieldset>

      {error ? (
        <div
          role="alert"
          className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-rose-100"
        >
          {error}
        </div>
      ) : null}

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          {totals.filled === 0
            ? 'Compila almeno un parametro per iniziare.'
            : `${totals.filled} parametr${totals.filled === 1 ? 'o' : 'i'} compilat${
                totals.filled === 1 ? 'o' : 'i'
              }.`}
        </p>
        <button
          type="submit"
          disabled={isBusy || totals.filled < 1}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="absolute inset-0 bg-white/0 transition group-hover:bg-white/10" />
          {isBusy ? (
            <>
              <Spinner />
              <span>Calcolo in corso…</span>
            </>
          ) : (
            <>
              <span>Calcola il mio punteggio</span>
              <Arrow />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="3"
      />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      className="h-4 w-4 transition group-hover:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-5-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
