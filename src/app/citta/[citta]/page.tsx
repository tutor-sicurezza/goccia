import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITY_GUIDES, getCityBySlug } from '@/lib/city-guides';
import { getOfficialSource } from '@/lib/official-sources';
import {
  getComuniWithData,
  getLatestReport,
  getReportsForComune,
  scoreReport,
} from '@/lib/comune-analyses';
import { AnalysisReport } from '@/components/analysis-report';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/json-ld';

interface PageProps {
  params: Promise<{ citta: string }>;
}

export function generateStaticParams() {
  // Union: schede editoriali + comuni per cui esistono dati reali scrapati.
  const slugs = new Set<string>([
    ...CITY_GUIDES.map((g) => g.slug),
    ...getComuniWithData(),
  ]);
  return [...slugs].map((citta) => ({ citta }));
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return y && m && d ? `${d}/${m}/${y}` : iso;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { citta } = await params;
  const guide = getCityBySlug(citta);
  const report = getLatestReport(citta);
  if (!guide && !report) return { title: 'Città non trovata' };

  const url = `https://goccia.org/acqua-di-${citta}`;
  const name = guide?.cityName ?? report!.comuneName;
  const title = guide
    ? guide.shortTitle
    : `Acqua del rubinetto a ${name}: analisi ufficiali e punteggio qualità`;
  const when = report?.samplingDate ? ` (${formatDate(report.samplingDate)})` : '';
  const description = guide
    ? guide.metaDescription
    : `Analisi dell'acqua del rubinetto a ${name}: valori reali dal referto di ${report!.gestore}${when}, tabella parametri, limiti di legge e punteggio qualità 1–99.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      locale: 'it_IT',
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { citta } = await params;
  const guide = getCityBySlug(citta);
  const reports = getReportsForComune(citta);
  if (!guide && reports.length === 0) notFound();

  const latest = reports[0] ?? null;
  const scoredLatest = latest ? scoreReport(latest) : null;
  const scoredHistory = reports.slice(1).map((r) => scoreReport(r));

  const officialSource = getOfficialSource(citta);
  const name = guide?.cityName ?? latest!.comuneName;
  const region = guide?.region ?? latest!.region;
  const province = guide?.province ?? latest!.province;
  const url = `https://goccia.org/acqua-di-${citta}`;

  const related = (guide?.relatedCities ?? [])
    .map((slug) => CITY_GUIDES.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: guide?.shortTitle ?? `Acqua del rubinetto a ${name}`,
          description:
            guide?.metaDescription ??
            `Analisi ufficiali dell'acqua del rubinetto a ${name} con punteggio qualità 1–99.`,
          url,
          datePublished: '2026-06-20',
          dateModified: latest?.samplingDate,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Acqua per città', url: 'https://goccia.org/acqua' },
          { name, url },
        ])}
      />
      {guide ? (
        <JsonLd data={faqJsonLd(guide.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      ) : null}
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/acqua" className="hover:text-slate-200">Acqua per città</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{name}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          {region} · {province}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">Acqua del rubinetto a {name}</span>
        </h1>
        {guide ? (
          <p className="mt-4 text-lg text-slate-300">{guide.intro}</p>
        ) : (
          <p className="mt-4 text-lg text-slate-300">
            Valori reali dell&apos;acqua del rubinetto a {name}, estratti dal referto pubblico di{' '}
            {latest!.gestore}. Ogni parametro è confrontato con il limite di legge (D.Lgs. 18/2023) e
            tradotto in un punteggio sintetico 1–99.
          </p>
        )}
      </header>

      {scoredLatest ? (
        <section className="mb-10">
          <h2 className="sr-only">Analisi ufficiale di {name}</h2>
          <AnalysisReport scored={scoredLatest} />
        </section>
      ) : null}

      {guide ? (
        <aside className="glass mb-10 grid gap-4 rounded-2xl p-5 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Gestore idrico</p>
            <p className="mt-1 font-display text-lg text-slate-100">{guide.waterUtility}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Origine geologica</p>
            <p className="mt-1 text-sm text-slate-200">{guide.geologicalContext}</p>
          </div>
        </aside>
      ) : null}

      {guide ? (
        <aside className="glass mb-10 rounded-2xl p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Parametri tipici da tenere d&apos;occhio
          </p>
          <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {Object.entries(guide.typicalParameters).map(([k, v]) =>
              v ? (
                <div key={k} className="flex items-baseline justify-between gap-3">
                  <dt className="text-slate-400 capitalize">{k.replace(/_/g, ' ')}</dt>
                  <dd className="text-right text-slate-100">{v as string}</dd>
                </div>
              ) : null,
            )}
          </dl>
        </aside>
      ) : null}

      {scoredHistory.length > 0 ? (
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold text-slate-100">
            Storico delle analisi di {name}
          </h2>
          <ul className="mt-4 space-y-2">
            {scoredHistory.map((s) => (
              <li
                key={`${s.report.samplingDate ?? 'nodate'}-${s.report.puntoPrelievo ?? ''}`}
                className="glass flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm"
              >
                <span className="text-slate-300">
                  {s.report.samplingDate ? formatDate(s.report.samplingDate) : 'valori medi pubblicati'}
                  {s.report.puntoPrelievo ? ` · ${s.report.puntoPrelievo}` : ''}
                </span>
                <span className="flex items-center gap-3">
                  <span className="font-display text-lg tabular-nums text-slate-100">
                    {s.result.overall}
                    <span className="text-xs text-slate-500">/99</span>
                  </span>
                  <a
                    href={s.report.sourcePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-300 underline-offset-2 hover:underline"
                  >
                    fonte ↗
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {officialSource ? (
        <aside className="glass mb-10 rounded-2xl border-sky-400/20 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Analisi ufficiali di {name}
          </p>
          <p className="mt-2 text-sm text-slate-300">{officialSource.note}</p>
          {officialSource.pathHint ? (
            <p className="mt-1.5 text-xs text-slate-400">
              <span className="text-slate-300">Dove guardare:</span>{' '}
              {officialSource.pathHint}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href={officialSource.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200 transition hover:border-sky-400/60 hover:bg-sky-400/20"
            >
              Vedi le analisi del gestore ↗
            </a>
            <Link
              href="/analisi-ufficiali"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10"
            >
              Tutte le città
            </Link>
          </div>
        </aside>
      ) : null}

      {guide ? (
        <article className="prose-invert space-y-10">
          {guide.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="font-display text-2xl font-semibold text-slate-100">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4 text-slate-300">
                {section.paragraphs.map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="list-disc space-y-1.5 pl-5">
                    {section.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </article>
      ) : null}

      <LeadCTA
        variant="completa"
        context={guide?.ctaContext ?? `Vuoi far analizzare l'acqua del rubinetto a ${name} con un laboratorio qualificato?`}
        tone="prominent"
      />

      {guide && guide.faqs.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Domande frequenti su {name}
          </h2>
          <dl className="mt-5 space-y-5">
            {guide.faqs.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
                <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-slate-100">
            Acqua del rubinetto in altre città
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/acqua-di-${r.slug}`}
                  className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                    Acqua di {r.cityName}
                  </p>
                  <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                    {r.metaDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-6">
        <p className="text-sm text-slate-300">
          Hai un referto dell&apos;acqua di {name}?{' '}
          <Link href="/" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
            Calcola il punteggio della tua acqua con GoccIA
          </Link>{' '}
          in 30 secondi.
        </p>
      </section>
    </main>
  );
}
