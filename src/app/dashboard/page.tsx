import type { Metadata } from 'next';
import { createServerSupabase } from '@/lib/supabase/server';
import { DASHBOARD_COPY, REGION_INSIGHTS } from '@/lib/dashboard-copy';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { breadcrumbJsonLd, datasetJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: DASHBOARD_COPY.metaTitle,
  description: DASHBOARD_COPY.metaDescription,
  alternates: { canonical: 'https://goccia.org/dashboard' },
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const VERDICTS = ['Eccellente', 'Buona', 'Discreta', 'Da migliorare', 'Critica'] as const;
const VERDICT_TONE: Record<string, string> = {
  Eccellente: 'from-emerald-400/30 to-emerald-500/10 border-emerald-400/40',
  Buona: 'from-teal-400/30 to-teal-500/10 border-teal-400/40',
  Discreta: 'from-sky-400/30 to-sky-500/10 border-sky-400/40',
  'Da migliorare': 'from-amber-400/30 to-amber-500/10 border-amber-400/40',
  Critica: 'from-rose-400/30 to-rose-500/10 border-rose-400/40',
};

interface BenchmarkRow { day: string; verdict: string; n: number; avg_score: number; }

async function loadBenchmark(): Promise<BenchmarkRow[] | null> {
  try {
    const supabase = await createServerSupabase();
    const { data, error } = await supabase
      .from('goccia_benchmark')
      .select('day, verdict, n, avg_score')
      .order('day', { ascending: false })
      .limit(5000);
    if (error || !data) return null;
    return data.map((r) => ({
      day: String(r.day),
      verdict: String(r.verdict),
      n: Number(r.n) || 0,
      avg_score: Number(r.avg_score) || 0,
    }));
  } catch {
    return null;
  }
}

function formatNum(n: number, d = 0): string {
  return n.toLocaleString('it-IT', { minimumFractionDigits: d, maximumFractionDigits: d });
}

export default async function DashboardPage() {
  const rows = await loadBenchmark();

  let byVerdict: Record<string, number> = {};
  let totalSubmissions = 0;
  let weightedSum = 0;
  let totalN = 0;
  let last30Avg: number | null = null;

  if (rows) {
    for (const r of rows) {
      byVerdict[r.verdict] = (byVerdict[r.verdict] ?? 0) + r.n;
      totalSubmissions += r.n;
      weightedSum += r.avg_score * r.n;
      totalN += r.n;
    }
    const thirtyDaysAgo = Date.now() - 30 * 86400000;
    const last30 = rows.filter((r) => new Date(r.day).getTime() >= thirtyDaysAgo);
    const ln = last30.reduce((s, r) => s + r.n, 0);
    const lw = last30.reduce((s, r) => s + r.avg_score * r.n, 0);
    if (ln > 0) last30Avg = Math.round(lw / ln);
  }

  const nationalAvg = totalN > 0 ? Math.round(weightedSum / totalN) : null;
  const empty = !rows || totalSubmissions === 0;

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'Dashboard', url: 'https://goccia.org/dashboard' },
      ])} />
      <JsonLd data={datasetJsonLd()} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">{DASHBOARD_COPY.hero.eyebrow}</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">{DASHBOARD_COPY.hero.title}</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{DASHBOARD_COPY.hero.intro}</p>
      </header>

      {empty ? (
        <div className="glass mx-auto max-w-2xl rounded-2xl p-10 text-center">
          <p className="font-display text-2xl font-semibold text-slate-100">{DASHBOARD_COPY.emptyState.title}</p>
          <p className="mt-3 text-slate-300">{DASHBOARD_COPY.emptyState.description}</p>
        </div>
      ) : (
        <>
          <section aria-labelledby="cards-h" className="mb-12">
            <h2 id="cards-h" className="font-display text-2xl font-semibold text-slate-100">{DASHBOARD_COPY.cardsHeader.title}</h2>
            <p className="mt-1 text-sm text-slate-400">{DASHBOARD_COPY.cardsHeader.subtitle}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {VERDICTS.map((v) => {
                const n = byVerdict[v] ?? 0;
                const pct = totalSubmissions > 0 ? Math.round((n / totalSubmissions) * 100) : 0;
                return (
                  <div key={v} className={`rounded-2xl border bg-gradient-to-br ${VERDICT_TONE[v]} p-4`}>
                    <p className="text-xs uppercase tracking-wide text-slate-200">{v}</p>
                    <p className="mt-1 font-display text-2xl text-white">{formatNum(n)}</p>
                    <p className="text-xs text-slate-300">{pct}% del totale</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section aria-labelledby="trend-h" className="mb-12">
            <h2 id="trend-h" className="font-display text-2xl font-semibold text-slate-100">{DASHBOARD_COPY.trendHeader.title}</h2>
            <p className="mt-1 text-sm text-slate-400">{DASHBOARD_COPY.trendHeader.subtitle}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-5 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-400">Media nazionale (tutti i dati)</p>
                <p className="mt-2 font-display text-5xl font-bold text-white">{nationalAvg ?? '—'}</p>
                <p className="text-xs text-slate-400">su {formatNum(totalSubmissions)} submission</p>
              </div>
              <div className="glass rounded-2xl p-5 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-400">Media ultimi 30 giorni</p>
                <p className="mt-2 font-display text-5xl font-bold text-white">{last30Avg ?? '—'}</p>
                <p className="text-xs text-slate-400">trend recente</p>
              </div>
            </div>
          </section>
        </>
      )}

      <section aria-labelledby="map-h" className="mb-12">
        <h2 id="map-h" className="font-display text-2xl font-semibold text-slate-100">{DASHBOARD_COPY.mapHeader.title}</h2>
        <p className="mt-1 text-sm text-slate-400">{DASHBOARD_COPY.mapHeader.subtitle}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REGION_INSIGHTS.map((r) => (
            <li key={r.region} className="glass rounded-2xl p-4">
              <p className="font-display text-base font-semibold text-slate-100">{r.region}</p>
              <p className="mt-1 text-sm text-slate-300">{r.commonIssue}</p>
              {r.callout ? <p className="mt-1.5 text-xs text-amber-200">{r.callout}</p> : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12 glass rounded-2xl p-5 text-sm text-slate-300">
        <p><strong>Disclaimer.</strong> {DASHBOARD_COPY.disclaimer}</p>
      </section>

      <section className="mb-12 glass rounded-2xl p-5 text-xs text-slate-400">
        <p><strong>Nota metodologica.</strong> {DASHBOARD_COPY.methodologyNote}</p>
      </section>

      <LeadCTA
        variant="completa"
        context="Per avere un dato strumentale e firmato sulla TUA acqua, non solo una stima aggregata, considera un'analisi con un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
