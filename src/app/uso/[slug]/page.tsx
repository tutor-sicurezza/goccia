import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SECTOR_GUIDES, getSectorBySlug } from '@/lib/sector-guides';
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
  return SECTOR_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const g = getSectorBySlug(slug);
  if (!g) return { title: 'Settore non trovato' };
  const url = `https://goccia.org/uso/${g.slug}`;
  return {
    title: g.shortTitle,
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: 'article', url, title: g.shortTitle, description: g.metaDescription, locale: 'it_IT' },
  };
}

export default async function SectorPage({ params }: PageProps) {
  const { slug } = await params;
  const g = getSectorBySlug(slug);
  if (!g) notFound();

  const url = `https://goccia.org/uso/${g.slug}`;
  const related = (g.relatedSectors ?? [])
    .map((s) => SECTOR_GUIDES.find((sg) => sg.slug === s))
    .filter((sg): sg is NonNullable<typeof sg> => Boolean(sg));

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
          { name: 'Per settore', url: 'https://goccia.org/uso' },
          { name: g.itName, url },
        ])}
      />
      <JsonLd data={faqJsonLd(g.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/uso" className="hover:text-slate-200">Per settore</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{g.itName}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Per professionisti · {g.audience}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{g.itName}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{g.intro}</p>
      </header>

      <aside className="glass mb-10 grid gap-4 rounded-2xl p-5 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Frequenza analisi</p>
          <p className="mt-1 text-sm text-slate-100">{g.frequency}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Parametri richiesti</p>
          <p className="mt-1 text-sm text-slate-200">{g.requiredParameters.slice(0, 6).join(', ')}{g.requiredParameters.length > 6 ? '…' : ''}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Normativa</p>
          <ul className="mt-1 space-y-0.5 text-xs text-slate-200">
            {g.normativeReferences.slice(0, 3).map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
      </aside>

      <article className="prose-invert space-y-10">
        {g.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4 text-slate-300">
              {section.paragraphs.map((p, pi) => <p key={pi}>{p}</p>)}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="list-disc space-y-1.5 pl-5">
                  {section.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
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
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti — {g.itName}</h2>
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
          <h2 className="font-display text-xl font-semibold text-slate-100">Settori correlati</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/uso/${r.slug}`}
                  className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                    {r.itName}
                  </p>
                  <p className="mt-1 text-sm text-slate-400 line-clamp-2">{r.metaDescription}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
