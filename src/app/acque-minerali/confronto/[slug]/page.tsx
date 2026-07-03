import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  WATER_COMPARISONS,
  getComparisonBySlug,
} from '@/lib/mineral-water-comparisons';
import {
  getWaterById,
  classificationInfo,
  TYPE_LABEL,
  type MineralWater,
  type MineralWaterAnalysis,
} from '@/lib/mineral-waters';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/json-ld';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return WATER_COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cmp = getComparisonBySlug(slug);
  if (!cmp) return { title: 'Confronto non trovato' };
  const url = `https://goccia.org/acque-minerali/confronto/${cmp.slug}`;
  return {
    title: cmp.title,
    description: cmp.metaDescription,
    keywords: cmp.searchKeywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: cmp.title,
      description: cmp.metaDescription,
      locale: 'it_IT',
    },
  };
}

const ROWS: Array<{ key: keyof MineralWaterAnalysis; label: string; unit: string }> = [
  { key: 'residuoFisso', label: 'Residuo fisso', unit: 'mg/L' },
  { key: 'ph', label: 'pH', unit: '' },
  { key: 'durezza', label: 'Durezza', unit: '°F' },
  { key: 'bicarbonato', label: 'Bicarbonati', unit: 'mg/L' },
  { key: 'calcio', label: 'Calcio', unit: 'mg/L' },
  { key: 'magnesio', label: 'Magnesio', unit: 'mg/L' },
  { key: 'sodio', label: 'Sodio', unit: 'mg/L' },
  { key: 'solfati', label: 'Solfati', unit: 'mg/L' },
  { key: 'nitrati', label: 'Nitrati', unit: 'mg/L' },
];

function fmt(v: number | null): string {
  if (v === null) return '—';
  return v.toLocaleString('it-IT', { maximumFractionDigits: 2 });
}

function WaterMini({ w }: { w: MineralWater }) {
  return (
    <Link
      href={`/acque-minerali/${w.slug}`}
      className="glass group block rounded-2xl p-4 text-center transition hover:-translate-y-0.5 hover:border-violet-400/40"
    >
      <p className="font-display text-lg font-semibold text-slate-100 group-hover:text-white">
        {w.brand}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        {classificationInfo(w.classification).label} · {TYPE_LABEL[w.type]}
      </p>
    </Link>
  );
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const cmp = getComparisonBySlug(slug);
  if (!cmp) notFound();

  const a = getWaterById(cmp.aId);
  const b = getWaterById(cmp.bId);
  if (!a || !b) notFound();

  const url = `https://goccia.org/acque-minerali/confronto/${cmp.slug}`;

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: cmp.title,
          description: cmp.metaDescription,
          url,
          datePublished: '2026-07-03',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Acque minerali', url: 'https://goccia.org/acque-minerali' },
          { name: `${a.brand} o ${b.brand}`, url },
        ])}
      />
      {cmp.faqs.length > 0 ? (
        <JsonLd data={faqJsonLd(cmp.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      ) : null}
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/acque-minerali" className="hover:text-slate-200">
          Acque minerali
        </Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">
          {a.brand} o {b.brand}
        </span>
      </nav>

      <header className="mb-8">
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{cmp.title}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{cmp.intro}</p>
      </header>

      <div className="mb-8 grid grid-cols-2 gap-3">
        <WaterMini w={a} />
        <WaterMini w={b} />
      </div>

      {/* Tabella confronto */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          I numeri a confronto
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[24rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2 pr-3 text-left font-medium">Parametro</th>
                <th className="py-2 px-3 text-right font-medium">{a.brand}</th>
                <th className="py-2 pl-3 text-right font-medium">{b.brand}</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => {
                const av = a.analysis[row.key];
                const bv = b.analysis[row.key];
                if (av === null && bv === null) return null;
                return (
                  <tr key={row.key} className="border-b border-white/5">
                    <td className="py-2 pr-3 text-slate-300">
                      {row.label}
                      {row.unit ? (
                        <span className="ml-1 text-xs text-slate-500">{row.unit}</span>
                      ) : null}
                    </td>
                    <td className="py-2 px-3 text-right font-display text-slate-100">
                      {fmt(av)}
                    </td>
                    <td className="py-2 pl-3 text-right font-display text-slate-100">
                      {fmt(bv)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Verdetto */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Quale scegliere
        </h2>
        <div className="mt-3 space-y-4 text-slate-300">
          {cmp.verdict.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="glass rounded-2xl p-5">
            <h3 className="font-display text-base font-semibold text-slate-100">
              Scegli {a.brand} se…
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
              {cmp.chooseA.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-sky-300">
                    →
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="font-display text-base font-semibold text-slate-100">
              Scegli {b.brand} se…
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
              {cmp.chooseB.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-sky-300">
                    →
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mb-10">
        <LeadCTA
          variant="completa"
          tone="prominent"
          context="Vuoi sapere come si colloca l'acqua del tuo rubinetto rispetto a queste minerali? Analizzala con un laboratorio qualificato che utilizza metodi validati conformi alle norme tecniche:"
        />
      </div>

      {/* FAQ */}
      {cmp.faqs.length > 0 ? (
        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Domande frequenti
          </h2>
          <dl className="mt-5 space-y-5">
            {cmp.faqs.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <dt className="font-display text-base font-semibold text-slate-100">
                  {f.q}
                </dt>
                <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <div className="mb-8">
        <SponsorBanner />
      </div>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-6">
        <p className="text-sm text-slate-300">
          Vedi tutte le schede nella{' '}
          <Link
            href="/acque-minerali"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            tabella delle acque minerali italiane
          </Link>{' '}
          o approfondisci le due acque:{' '}
          <Link
            href={`/acque-minerali/${a.slug}`}
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            {a.brand}
          </Link>{' '}
          e{' '}
          <Link
            href={`/acque-minerali/${b.slug}`}
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            {b.brand}
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
