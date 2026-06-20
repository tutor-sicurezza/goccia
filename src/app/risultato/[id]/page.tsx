import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { PARAMETER_CONFIGS } from '@aquascore/index';
import { ScoreGauge, type GaugeTone } from '@/components/score-gauge';
import { SubscoreBar } from '@/components/subscore-bar';
import { ShareButtons } from '@/components/share-buttons';
import { EmailSaveForm } from '@/components/email-save-form';
import {
  formatRange,
  formatValue,
  prettyParameterName,
  statusBadge,
  type StatusKey,
} from '@/lib/format';
import { RISK_NOTES, GENERIC_RISK_NOTE } from '@/lib/parameter-groups';

interface SubmissionParameter {
  parameter_id: string;
  parameter_name?: string;
  numeric_value: number | null;
  score?: number;
  status?: StatusKey;
  compliant?: boolean | null;
}

interface SubmissionResponse {
  id: string;
  created_at: string;
  overall_score: number;
  health_score: number | null;
  aesthetic_score: number | null;
  pipe_score: number | null;
  matched_count: number;
  parameters: SubmissionParameter[];
  verdict: {
    label: string;
    tone: GaugeTone;
    buona: boolean;
  };
}

async function buildBaseUrl(): Promise<string> {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  const h = await headers();
  const host = h.get('x-forwarded-host') ?? h.get('host');
  const proto =
    h.get('x-forwarded-proto') ??
    (host?.startsWith('localhost') ? 'http' : 'https');
  return `${proto}://${host}`;
}

async function fetchSubmission(
  id: string,
): Promise<SubmissionResponse | null> {
  const baseUrl = await buildBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/submission/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return (await res.json()) as SubmissionResponse;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = await fetchSubmission(id);
  if (!data) {
    return { title: 'Risultato non trovato' };
  }
  return {
    title: `Risultato ${data.overall_score}/99 — GoccIA`,
    description: `La tua acqua ha ottenuto ${data.overall_score} su 99 (${data.verdict.label}). Punteggio calcolato in base ai valori del referto.`,
    robots: { index: false, follow: false },
  };
}

function configById(id: string) {
  return PARAMETER_CONFIGS.find((c) => c.id === id);
}

function synthesisSentence(label: string): string {
  switch (label) {
    case 'Eccellente':
      return 'La tua acqua è di qualità eccellente: tutti i parametri principali sono nei range ideali.';
    case 'Buona':
      return 'La tua acqua è buona: i parametri principali sono dentro i limiti di legge e in genere vicini ai valori ideali.';
    case 'Discreta':
      return 'La tua acqua è discreta: rientra nei limiti di legge ma alcuni valori si avvicinano ai limiti consigliati.';
    case 'Da migliorare':
      return 'Ci sono parametri da migliorare: alcuni valori sono fuori dai range consigliati. Verifica le note di seguito.';
    case 'Critica':
      return 'Il punteggio è critico: uno o più parametri risultano fuori dai limiti di legge. Contatta il gestore idrico e considera un nuovo prelievo.';
    default:
      return 'Ecco il riepilogo del tuo referto.';
  }
}

const TONE_PILL: Record<StatusKey, string> = {
  ideal: 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30',
  acceptable: 'bg-amber-400/15 text-amber-200 ring-1 ring-amber-400/30',
  over_limit: 'bg-rose-400/15 text-rose-200 ring-1 ring-rose-400/30',
  unknown: 'bg-white/5 text-slate-400 ring-1 ring-white/10',
};

export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetchSubmission(id);
  if (!data) notFound();

  const baseUrl = await buildBaseUrl();
  const shareUrl = `${baseUrl}/risultato/${data.id}`;

  const overLimit = data.parameters.filter(
    (p) => p.status === 'over_limit',
  );

  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 sm:pt-16">
      {/* HEADER */}
      <div className="glass-strong relative overflow-hidden p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
        />

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[auto,1fr] lg:items-center">
          <ScoreGauge
            score={data.overall_score}
            tone={data.verdict.tone}
            label={data.verdict.label}
          />
          <div>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                data.verdict.buona
                  ? 'bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-400/30'
                  : 'bg-rose-400/15 text-rose-200 ring-1 ring-rose-400/30'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  data.verdict.buona ? 'bg-emerald-300' : 'bg-rose-300'
                }`}
              />
              {data.verdict.buona ? 'Acqua buona' : 'Acqua cattiva'}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {data.verdict.label}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {synthesisSentence(data.verdict.label)}
            </p>
            <p className="mt-3 text-xs text-slate-500">
              {data.matched_count} parametr
              {data.matched_count === 1 ? 'o' : 'i'} riconosciut
              {data.matched_count === 1 ? 'o' : 'i'} dal sistema.
            </p>
          </div>
        </div>
      </div>

      {/* SUBSCORES */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          Dettaglio per dimensione
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <SubscoreBar
            label="Salute"
            value={data.health_score}
            tone={subscoreTone(data.health_score)}
            weight="50%"
            description="Metalli, nitrati, microbiologia, PFAS."
          />
          <SubscoreBar
            label="Estetica"
            value={data.aesthetic_score}
            tone={subscoreTone(data.aesthetic_score)}
            weight="25%"
            description="Sapore, odore, colore, torbidità."
          />
          <SubscoreBar
            label="Impianti"
            value={data.pipe_score}
            tone={subscoreTone(data.pipe_score)}
            weight="25%"
            description="pH, durezza, conducibilità."
          />
        </div>
      </section>

      {/* OVER LIMIT CALLOUTS */}
      {overLimit.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-white">
            Parametri fuori limite
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {overLimit.map((p) => (
              <div
                key={p.parameter_id}
                className="glass border-rose-400/20 p-5"
                style={{ borderColor: 'rgba(244,63,94,0.25)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-white">
                    {prettyParameterName(p.parameter_id)}
                  </h3>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${TONE_PILL.over_limit}`}>
                    Fuori limite
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {RISK_NOTES[p.parameter_id] ?? GENERIC_RISK_NOTE}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* TABLE */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-white">
          Tutti i parametri
        </h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Parametro</th>
                  <th className="px-4 py-3 font-medium">Valore</th>
                  <th className="px-4 py-3 font-medium">Limite di legge</th>
                  <th className="px-4 py-3 font-medium">Range ideale</th>
                  <th className="px-4 py-3 font-medium">Stato</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.parameters.map((p) => {
                  const cfg = configById(p.parameter_id);
                  const status: StatusKey = p.status ?? 'unknown';
                  const badge = statusBadge(status);
                  const unit = cfg?.unit ?? '';
                  const isMicro = cfg?.microbiological;
                  const display =
                    isMicro
                      ? p.compliant === false || (p.numeric_value ?? 0) > 0
                        ? 'Presente'
                        : 'Assente'
                      : formatValue(p.numeric_value, unit);
                  return (
                    <tr
                      key={p.parameter_id}
                      className="text-slate-200 transition hover:bg-white/[0.03]"
                    >
                      <td className="px-4 py-3 font-medium text-white">
                        {prettyParameterName(p.parameter_id)}
                      </td>
                      <td className="px-4 py-3 tabular-nums">{display}</td>
                      <td className="px-4 py-3 text-slate-400">
                        {cfg ? formatRange(cfg.legal, cfg.unit) : '—'}
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        {cfg ? formatRange(cfg.ideal, cfg.unit) : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider ${TONE_PILL[status]}`}
                        >
                          <Dot status={status} />
                          {badge.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="glass p-6">
          <h3 className="font-display text-base font-semibold text-white">
            Cosa puoi fare
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <Bullet /> Far scorrere il rubinetto qualche minuto se l’acqua è
              ferma da ore.
            </li>
            <li className="flex gap-2">
              <Bullet /> Valutare un secondo prelievo a distanza di qualche
              giorno.
            </li>
            <li className="flex gap-2">
              <Bullet /> Pulire periodicamente areatori e filtri del rubinetto.
            </li>
            <li className="flex gap-2">
              <Bullet /> Se i valori sono fuori legge, contattare il gestore
              idrico locale.
            </li>
          </ul>
        </div>
        <div className="glass relative overflow-hidden p-6">
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl"
          />
          <div className="relative">
            <h3 className="font-display text-base font-semibold text-white">
              Vuoi un rapporto di prova ufficiale?
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              123Acqua è il laboratorio qualificato dietro GoccIA, con metodi
              validati conformi a norme tecniche.
            </p>
            <a
              href="https://123acqua.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Apri 123acqua.com
            </a>
          </div>
        </div>
      </section>

      {/* SHARE + EMAIL */}
      <section className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="glass p-5">
          <h3 className="font-display text-base font-semibold text-white">
            Condividi il risultato
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Genera un link che puoi inviare a chi vuoi.
          </p>
          <div className="mt-4">
            <ShareButtons
              url={shareUrl}
              title={`Punteggio acqua ${data.overall_score}/99 — GoccIA`}
              text={`Ho calcolato il punteggio della mia acqua del rubinetto: ${data.overall_score}/99 (${data.verdict.label}).`}
            />
          </div>
        </div>
        <EmailSaveForm submissionId={data.id} />
      </section>

      {/* Disclaimer */}
      <section className="mt-10">
        <div className="glass p-5">
          <p className="text-xs leading-relaxed text-slate-400">
            <span className="font-medium text-slate-200">Disclaimer:</span>{' '}
            GoccIA è uno strumento informativo. Il punteggio non sostituisce
            il rapporto di prova di laboratorio né costituisce parere medico o
            legale. Per decisioni con valenza sanitaria, tecnica o legale
            rivolgiti al gestore idrico o a un laboratorio qualificato.
          </p>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}

function subscoreTone(value: number | null): GaugeTone {
  if (value === null) return 'amber';
  if (value >= 85) return 'emerald';
  if (value >= 70) return 'green';
  if (value >= 50) return 'amber';
  if (value >= 30) return 'orange';
  return 'red';
}

function Bullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-sky-400"
    />
  );
}

function Dot({ status }: { status: StatusKey }) {
  const color =
    status === 'ideal'
      ? 'bg-emerald-300'
      : status === 'acceptable'
      ? 'bg-amber-300'
      : status === 'over_limit'
      ? 'bg-rose-300'
      : 'bg-slate-400';
  return (
    <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${color}`} />
  );
}
