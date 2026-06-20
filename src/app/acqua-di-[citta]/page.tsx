import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITY_GUIDES, getCityBySlug } from '@/lib/city-guides';
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
  return CITY_GUIDES.map((g) => ({ citta: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { citta } = await params;
  const guide = getCityBySlug(citta);
  if (!guide) return { title: 'Città non trovata' };
  const url = `https://goccia.org/acqua-di-${guide.slug}`;
  return {
    title: guide.shortTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: guide.shortTitle,
      description: guide.metaDescription,
      locale: 'it_IT',
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { citta } = await params;
  const guide = getCityBySlug(citta);
  if (!guide) notFound();

  const related = guide.relatedCities
    .map((slug) => CITY_GUIDES.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const url = `https://goccia.org/acqua-di-${guide.slug}`;

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: guide.shortTitle,
          description: guide.metaDescription,
          url,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Acqua per città', url: 'https://goccia.org/acqua' },
          { name: guide.cityName, url },
        ])}
      />
      <JsonLd data={faqJsonLd(guide.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/acqua" className="hover:text-slate-200">Acqua per città</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{guide.cityName}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          {guide.region} · {guide.province}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">Acqua del rubinetto a {guide.cityName}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{guide.intro}</p>
      </header>

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

      <aside className="glass mb-10 rounded-2xl p-5">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Parametri tipici da tenere d'occhio
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

      <LeadCTA
        variant="completa"
        context={guide.ctaContext}
        tone="prominent"
      />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Domande frequenti su {guide.cityName}
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
          Hai un referto dell'acqua di {guide.cityName}?{' '}
          <Link href="/" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
            Calcola il punteggio della tua acqua con GoccIA
          </Link>{' '}
          in 30 secondi.
        </p>
      </section>
    </main>
  );
}
