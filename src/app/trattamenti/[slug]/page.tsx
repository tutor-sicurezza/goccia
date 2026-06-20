import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TREATMENT_GUIDES, getTreatmentBySlug } from '@/lib/treatment-guides';
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
  return TREATMENT_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const g = getTreatmentBySlug(slug);
  if (!g) return { title: 'Trattamento non trovato' };
  const url = `https://goccia.org/trattamenti/${g.slug}`;
  return {
    title: g.shortTitle,
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: 'article', url, title: g.shortTitle, description: g.metaDescription, locale: 'it_IT' },
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const g = getTreatmentBySlug(slug);
  if (!g) notFound();

  const related = g.relatedTreatments
    .map((s) => TREATMENT_GUIDES.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const url = `https://goccia.org/trattamenti/${g.slug}`;

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
          { name: 'Trattamenti', url: 'https://goccia.org/trattamenti' },
          { name: g.itName, url },
        ])}
      />
      <JsonLd data={faqJsonLd(g.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/trattamenti" className="hover:text-slate-200">Trattamenti</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{g.itName}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Sistemi di trattamento dell'acqua
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{g.itName}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{g.intro}</p>
      </header>

      <aside className="glass mb-10 grid gap-4 rounded-2xl p-5 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Costo indicativo</p>
          <p className="mt-1 text-sm font-semibold text-slate-100">{g.costRange}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Manutenzione</p>
          <p className="mt-1 text-sm text-slate-200">{g.maintenance}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Parametri ridotti</p>
          <p className="mt-1 text-sm text-slate-200">{g.parametersTreated.join(', ')}</p>
        </div>
      </aside>

      <aside className="mb-10 rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-5">
        <p className="text-xs uppercase tracking-wide text-amber-200">
          Cosa NON elimina
        </p>
        <p className="mt-1 text-sm text-amber-50">
          {g.parametersNotTreated.join(' · ')}
        </p>
      </aside>

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
        variant="rapporto-prova"
        context={g.ctaContext}
        tone="prominent"
      />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Domande frequenti su {g.itName}
        </h2>
        <dl className="mt-5 space-y-5">
          {g.faqs.map((f, i) => (
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
            Trattamenti correlati
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/trattamenti/${r.slug}`}
                  className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                    {r.itName}
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
    </main>
  );
}
