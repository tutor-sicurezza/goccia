import type { Metadata } from 'next';
import { createServerSupabase } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: "Com'è l'acqua in Italia — Benchmark GoccIA",
  description:
    "Statistiche aggregate e anonime delle submission GoccIA: distribuzione dei verdetti, punteggio medio nazionale e andamento degli ultimi 30 giorni.",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Row = {
  day: string;
  verdict: string;
  n: number;
  avg_score: number;
};

const VERDICT_ORDER = [
  'Eccellente',
  'Buona',
  'Discreta',
  'Da migliorare',
  'Critica',
] as const;

const VERDICT_TONE: Record<string, string> = {
  Eccellente: 'from-emerald-400/30 to-emerald-500/10 border-emerald-400/40',
  Buona: 'from-teal-400/30 to-teal-500/10 border-teal-400/40',
  Discreta: 'from-sky-400/30 to-sky-500/10 border-sky-400/40',
  'Da migliorare': 'from-amber-400/30 to-amber-500/10 border-amber-400/40',
  Critica: 'from-rose-400/30 to-rose-500/10 border-rose-400/40',
};

function formatNum(n: number, digits = 0): string {
  return n.toLocaleString('it-IT', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

async function loadRows(): Promise<Row[] | null> {
  try {
    const supabase = await createServerSupabase();
    const { data, error } = await supabase
      .from('goccia_benchmark')
      .select('day, verdict, n, avg_score')
      .order('day', { ascending: false })
      .limit(2000);
    if (error) return null;
    if (!data) return [];
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

function Placeholder() {
  return (
    <div className="glass mx-auto max-w-2xl rounded-2xl p-10 text-center">
      <p className="font-display text-2xl font-semibold text-slate-100">
        Stiamo raccogliendo dati…
      </p>
      <p className="mt-3 text-slate-300">
        Il benchmark si aggiornerà man mano che arriveranno nuove submission.
        Torna presto.
      </p>
    </div>
  );
}

export default async function BenchmarkPage() {
  const rows = await loadRows();

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Benchmark nazionale
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Com'è l'acqua in Italia</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Statistiche aggregate e anonime delle submission ricevute da GoccIA:
          come si distribuiscono i verdetti e qual è il punteggio medio.
        </p>
      </header>

      {rows === null || rows.length === 0 ? (
        <Placeholder />
      ) : (
        <BenchmarkContent rows={rows} />
      )}

      <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-slate-400">
        Dati aggregati e anonimi delle submission GoccIA. Non rappresentano un
        campione statistico nazionale.
      </p>
    </main>
  );
}

function BenchmarkContent({ rows }: { rows: Row[] }) {
  // Totals by verdict (across all time in the view)
  const byVerdict = new Map<string, { n: number; weighted: number }>();
  for (const r of rows) {
    const cur = byVerdict.get(r.verdict) ?? { n: 0, weighted: 0 };
    cur.n += r.n;
    cur.weighted += r.avg_score * r.n;
    byVerdict.set(r.verdict, cur);
  }

  const totalN = Array.from(byVerdict.values()).reduce((a, b) => a + b.n, 0);
  const totalWeighted = Array.from(byVerdict.values()).reduce(
    (a, b) => a + b.weighted,
    0,
  );
  const nationalAvg = totalN > 0 ? totalWeighted / totalN : 0;

  // Last 30 days
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const last30 = rows
    .filter((r) => {
      const t = Date.parse(r.day);
      return Number.isFinite(t) && t >= cutoff;
    })
    .sort((a, b) => Date.parse(b.day) - Date.parse(a.day));

  return (
    <>
      <section aria-labelledby="riassunto" className="mb-12">
        <h2 id="riassunto" className="sr-only">
          Riassunto per verdetto
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {VERDICT_ORDER.map((v) => {
            const stats = byVerdict.get(v);
            const n = stats?.n ?? 0;
            const pct = totalN > 0 ? (n / totalN) * 100 : 0;
            const tone = VERDICT_TONE[v] ?? 'from-slate-400/20 to-slate-500/5 border-slate-400/30';
            return (
              <div
                key={v}
                className={`glass rounded-2xl border bg-gradient-to-br ${tone} p-5`}
              >
                <p className="text-sm font-medium text-slate-200">{v}</p>
                <p className="mt-2 font-display text-3xl font-semibold text-slate-100">
                  {formatNum(n)}
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  {formatNum(pct, 1)}% del totale
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="media" className="mb-12">
        <h2 id="media" className="sr-only">
          Punteggio medio nazionale
        </h2>
        <div className="glass mx-auto max-w-md rounded-2xl p-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Punteggio medio nazionale
          </p>
          <p className="mt-3 font-display text-6xl font-semibold">
            <span className="text-gradient">{formatNum(nationalAvg, 1)}</span>
            <span className="ml-2 text-2xl text-slate-400">/ 99</span>
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Media ponderata su <strong>{formatNum(totalN)}</strong> submission
          </p>
        </div>
      </section>

      <section aria-labelledby="ultimi-30" className="mb-4">
        <h2
          id="ultimi-30"
          className="font-display text-2xl font-semibold"
        >
          Ultimi 30 giorni
        </h2>
        {last30.length === 0 ? (
          <p className="mt-4 text-slate-300">
            Nessuna submission negli ultimi 30 giorni.
          </p>
        ) : (
          <div className="glass mt-6 overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-b border-white/10 text-slate-300">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Data
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Verdetto
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Submission
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Punteggio medio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {last30.map((r, i) => (
                  <tr key={`${r.day}-${r.verdict}-${i}`}>
                    <td className="px-4 py-3 text-slate-300">
                      {formatDate(r.day)}
                    </td>
                    <td className="px-4 py-3 text-slate-100">{r.verdict}</td>
                    <td className="px-4 py-3 text-slate-300">
                      {formatNum(r.n)}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {formatNum(r.avg_score, 1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}
