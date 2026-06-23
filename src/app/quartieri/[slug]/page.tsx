import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ALL_NEIGHBORHOODS as NEIGHBORHOOD_GUIDES, findNeighborhood as getNeighborhoodBySlug, neighborhoodsByCity as getNeighborhoodsByCity } from '@/lib/neighborhoods-all';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

interface PageProps { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return NEIGHBORHOOD_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const g = getNeighborhoodBySlug(slug);
  if (!g) return { title: 'Quartiere non trovato' };
  const url = `https://goccia.org/quartieri/${g.slug}`;
  return {
    title: g.shortTitle,
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: 'article', url, title: g.shortTitle, description: g.metaDescription, locale: 'it_IT' },
  };
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const g = getNeighborhoodBySlug(slug);
  if (!g) notFound();
  const url = `https://goccia.org/quartieri/${g.slug}`;
  const sameCity = getNeighborhoodsByCity(g.citySlug).filter((n) => n.slug !== g.slug).slice(0, 6);

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd data={articleJsonLd({ headline: g.shortTitle, description: g.metaDescription, url, datePublished: '2026-06-20' })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: g.cityName, url: `https://goccia.org/acqua-di-${g.citySlug}` },
        { name: 'Quartieri', url: `https://goccia.org/quartieri?citta=${g.citySlug}` },
        { name: g.neighborhoodName, url },
      ])} />
      <JsonLd data={faqJsonLd(g.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href={`/acqua-di-${g.citySlug}`} className="hover:text-slate-200">{g.cityName}</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/quartieri" className="hover:text-slate-200">Quartieri</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{g.neighborhoodName}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          {g.cityName} · {g.district}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">Acqua del rubinetto a {g.neighborhoodName}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{g.intro}</p>
      </header>

      <aside className="glass mb-10 rounded-2xl p-5">
        <p className="text-xs uppercase tracking-wide text-slate-400">Rischi tipici del quartiere</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {g.typicalRisks.map((r) => (
            <li key={r} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">{r}</li>
          ))}
        </ul>
      </aside>

      <article className="prose-invert space-y-10">
        {g.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">{section.heading}</h2>
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

      <LeadCTA variant={g.ctaVariant} context={g.ctaContext} tone="prominent" />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti — {g.neighborhoodName}</h2>
        <dl className="mt-5 space-y-5">
          {g.faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {sameCity.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-slate-100">Altri quartieri di {g.cityName}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {sameCity.map((n) => (
              <li key={n.slug}>
                <Link href={`/quartieri/${n.slug}`} className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40">
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">{n.neighborhoodName}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{n.district}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
