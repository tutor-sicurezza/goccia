import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { scoreVerdict } from '@aquascore/index';

export const metadata: Metadata = {
  title: 'Embed risultato GoccIA',
  description: 'Widget embed del risultato GoccIA per integrazione su blog e siti terzi.',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  searchParams: Promise<{ id?: string }>;
}

interface SubmissionShape {
  id: string;
  overall_score?: number;
  health_score?: number | null;
  aesthetic_score?: number | null;
  pipe_score?: number | null;
  verdict?: string;
  matched_count?: number;
  created_at?: string;
}

async function fetchSubmission(id: string): Promise<SubmissionShape | null> {
  try {
    const h = await headers();
    const host = h.get('host') ?? 'goccia.org';
    const proto = h.get('x-forwarded-proto') ?? 'https';
    const url = `${proto}://${host}/api/submission/${encodeURIComponent(id)}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    return (await res.json()) as SubmissionShape;
  } catch {
    return null;
  }
}

const TONE: Record<string, { ring: string; text: string; from: string; to: string }> = {
  green: { ring: 'ring-emerald-400/40', text: 'text-emerald-300', from: 'from-emerald-400/20', to: 'to-emerald-500/10' },
  emerald: { ring: 'ring-emerald-400/40', text: 'text-emerald-300', from: 'from-emerald-400/20', to: 'to-emerald-500/10' },
  amber: { ring: 'ring-amber-400/40', text: 'text-amber-300', from: 'from-amber-400/20', to: 'to-amber-500/10' },
  orange: { ring: 'ring-orange-400/40', text: 'text-orange-300', from: 'from-orange-400/20', to: 'to-orange-500/10' },
  red: { ring: 'ring-rose-400/40', text: 'text-rose-300', from: 'from-rose-400/20', to: 'to-rose-500/10' },
};

export default async function EmbedScorePage({ searchParams }: PageProps) {
  const { id } = await searchParams;
  const sub = id ? await fetchSubmission(id) : null;
  const score = sub?.overall_score ?? null;
  const verdict = score !== null ? scoreVerdict(score) : null;
  const tone = verdict ? TONE[verdict.tone] : TONE.amber;
  const resultUrl = sub ? `https://goccia.org/risultato/${sub.id}` : 'https://goccia.org';

  return (
    <div className="min-h-screen bg-brand-deep px-3 py-4 text-slate-100">
      <a
        href={resultUrl}
        target="_top"
        className="group block max-w-[600px] mx-auto rounded-3xl border border-white/10 bg-black/40 p-5 transition hover:border-violet-400/40"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Powered by <span className="text-gradient font-semibold">GoccIA</span>
          </p>
          <p className="text-xs text-slate-400">goccia.org</p>
        </div>

        {score === null ? (
          <div className="mt-6">
            <p className="font-display text-2xl font-semibold text-slate-100">
              Calcola il punteggio della tua acqua
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Apri GoccIA per inserire i valori del referto e ottenere un
              punteggio 1-99 secondo il D.Lgs. 18/2023.
            </p>
            <span className="mt-4 inline-block rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white">
              Apri GoccIA
            </span>
          </div>
        ) : (
          <div className={`mt-5 rounded-2xl border bg-gradient-to-br ${tone.from} ${tone.to} ${tone.ring} ring-1 p-5 text-center`}>
            <p className="text-xs uppercase tracking-wide text-slate-300">Punteggio acqua</p>
            <p className={`mt-1 font-display text-6xl font-bold ${tone.text}`}>{score}</p>
            <p className="text-xs text-slate-400">su 99</p>
            <p className="mt-2 font-display text-lg font-semibold text-slate-100">
              {verdict?.label}
            </p>
            {sub?.matched_count ? (
              <p className="mt-1 text-xs text-slate-400">
                Calcolato su {sub.matched_count} parametri analizzati
              </p>
            ) : null}
          </div>
        )}

        <p className="mt-4 text-xs text-slate-400">
          {score === null
            ? 'Strumento informativo open source · Labservice S.r.l.'
            : 'Vedi il dettaglio del risultato su goccia.org'}
        </p>
      </a>
    </div>
  );
}
