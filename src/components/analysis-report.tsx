import { ScoreGauge, type GaugeTone } from '@/components/score-gauge';
import { SubscoreBar } from '@/components/subscore-bar';
import type { ScoredReport } from '@/lib/comune-analyses';
import { scoreVerdict, type ParameterRange, type ParameterStatus } from '@aquascore/index';

function toneFor(value: number | null): GaugeTone {
  return value === null ? 'amber' : scoreVerdict(value).tone;
}

const STATUS_META: Record<ParameterStatus, { label: string; cls: string }> = {
  ideal: { label: 'Ottimale', cls: 'bg-emerald-500/15 text-emerald-200' },
  acceptable: { label: 'Nella norma', cls: 'bg-sky-500/15 text-sky-200' },
  over_limit: { label: 'Oltre soglia', cls: 'bg-rose-500/15 text-rose-200' },
  unknown: { label: 'n.d.', cls: 'bg-slate-500/15 text-slate-300' },
};

function formatLimit(range: ParameterRange, unit: string): string {
  const hasMin = range.min !== undefined;
  const hasMax = range.max !== undefined;
  if (hasMin && hasMax) return `${range.min}–${range.max} ${unit}`;
  if (hasMax) return `≤ ${range.max} ${unit}`;
  if (hasMin) return `≥ ${range.min} ${unit}`;
  return '—';
}

function formatValue(
  value: number | null,
  unit: string,
  status: ParameterStatus,
  display?: string,
): string {
  if (display) return `${display} ${unit}`;
  if (value === null || value === undefined) {
    return status === 'ideal' ? 'assente' : 'n.d.';
  }
  return `${value} ${unit}`;
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  if (!y || !m || !d) return iso;
  return `${d}/${m}/${y}`;
}

export function AnalysisReport({ scored }: { scored: ScoredReport }) {
  const { report, result, verdict } = scored;
  const details = report.samples
    .map((s) => ({
      sample: s,
      detail: result.parameterScores.find((d) => d.parameterId === s.parameterId),
    }))
    .filter((x): x is { sample: (typeof report.samples)[number]; detail: NonNullable<typeof x.detail> } =>
      Boolean(x.detail),
    );

  return (
    <div className="glass rounded-3xl p-5 sm:p-7">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="shrink-0">
          <ScoreGauge score={result.overall} tone={verdict.tone} label={verdict.label} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Punteggio GoccIA da referto ufficiale
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Calcolato in modo deterministico dai valori pubblicati da{' '}
            <span className="font-semibold text-slate-100">{report.gestore}</span>
            {report.samplingDate ? (
              <>
                , campionamento del{' '}
                <span className="text-slate-100">{formatDate(report.samplingDate)}</span>
              </>
            ) : null}
            {report.puntoPrelievo ? ` · ${report.puntoPrelievo}` : ''}.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {result.health !== null ? (
              <SubscoreBar label="Salute" value={result.health} tone={toneFor(result.health)} weight="50%" />
            ) : null}
            {result.aesthetic !== null ? (
              <SubscoreBar label="Estetica" value={result.aesthetic} tone={toneFor(result.aesthetic)} weight="25%" />
            ) : null}
            {result.pipe !== null ? (
              <SubscoreBar label="Impianti" value={result.pipe} tone={toneFor(result.pipe)} weight="25%" />
            ) : null}
          </div>
          <a
            href={report.sourcePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200 transition hover:border-sky-400/60 hover:bg-sky-400/20"
          >
            Fonte: {report.sourceLabel} ↗
          </a>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-slate-400">
              <th className="py-2 pr-3 font-medium">Parametro</th>
              <th className="py-2 pr-3 font-medium">Valore misurato</th>
              <th className="py-2 pr-3 font-medium">Limite di legge</th>
              <th className="py-2 font-medium">Stato</th>
            </tr>
          </thead>
          <tbody>
            {details.map(({ sample, detail }) => {
              const meta = STATUS_META[detail.status];
              return (
                <tr key={sample.parameterId} className="border-b border-white/5">
                  <td className="py-2.5 pr-3 text-slate-200">{sample.label}</td>
                  <td className="py-2.5 pr-3 tabular-nums text-slate-100">
                    {formatValue(sample.value, sample.unit, detail.status, sample.display)}
                  </td>
                  <td className="py-2.5 pr-3 tabular-nums text-slate-400">
                    {formatLimit(detail.legal, sample.unit)}
                  </td>
                  <td className="py-2.5">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${meta.cls}`}>
                      {meta.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        I valori sono quelli pubblicati dal gestore alla data indicata e possono variare nel tempo e
        per punto di prelievo. Il punteggio è uno strumento informativo e non sostituisce il rapporto
        di prova ufficiale. Limiti di legge secondo D.Lgs. 18/2023.
      </p>
    </div>
  );
}
