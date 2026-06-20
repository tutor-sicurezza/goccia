import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TOPIC_GUIDES, getTopicBySlug } from '@/lib/topic-guides';
import { PARAMETER_GUIDES } from '@/lib/parameter-guides';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/json-ld';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TOPIC_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const g = getTopicBySlug(slug);
  if (!g) return { title: 'Guida non trovata' };
  const url = `https://goccia.org/guide/${g.slug}`;
  return {
    title: g.shortTitle,
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: 'article', url, title: g.shortTitle, description: g.metaDescription, locale: 'it_IT' },
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const g = getTopicBySlug(slug);
  if (!g) notFound();

  const url = `https://goccia.org/guide/${g.slug}`;
  const relatedParams = (g.relatedParameters ?? [])
    .map((id) => PARAMETER_GUIDES.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relatedTopics = (g.relatedTopics ?? [])
    .map((s) => TOPIC_GUIDES.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: g.shortTitle,
          description: g.metaDescription,
          url,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Guide', url: 'https://goccia.org/guide' },
          { name: g.itName, url },
        ])}
      />
      <JsonLd data={faqJsonLd(g.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/guide" className="hover:text-slate-200">Guide</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{g.itName}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Guida</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{g.itName}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{g.intro}</p>
      </header>

      <article className="prose-invert space-y-10">
        {g.sections.map((section, idx) => (
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
        variant={g.ctaVariant}
        context={g.ctaContext}
        tone="prominent"
      />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {g.faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {relatedParams.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-slate-100">
            Parametri correlati a questa guida
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedParams.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/parametri/${p.slug}`}
                  className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                    {p.itName}
                  </p>
                  <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                    {p.metaDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {relatedTopics.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-slate-100">Guide correlate</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedTopics.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/guide/${t.slug}`}
                  className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                    {t.itName}
                  </p>
                  <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                    {t.metaDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-6">
        <p className="text-sm text-slate-300">
          Hai i valori del referto?{' '}
          <Link href="/" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
            Calcola il punteggio della tua acqua con GoccIA
          </Link>{' '}
          in 30 secondi.
        </p>
      </section>
    </main>
  );
}
