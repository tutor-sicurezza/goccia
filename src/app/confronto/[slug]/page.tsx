import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { REGIONAL_COMPARISONS, getComparisonBySlug } from '@/lib/regional-comparisons';
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
  return REGIONAL_COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparisonBySlug(slug);
  if (!c) return { title: 'Confronto non trovato' };
  const url = `https://goccia.org/confronto/${c.slug}`;
  return {
    title: c.shortTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: 'article', url, title: c.shortTitle, description: c.metaDescription, locale: 'it_IT' },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const c = getComparisonBySlug(slug);
  if (!c) notFound();
  const url = `https://goccia.org/confronto/${c.slug}`;
  const related = (c.relatedSlugs ?? [])
    .map((s) => REGIONAL_COMPARISONS.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: c.shortTitle,
          description: c.metaDescription,
          url,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Confronti regionali', url: 'https://goccia.org/confronto' },
          { name: c.title, url },
        ])}
      />
      <JsonLd data={faqJsonLd(c.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/confronto" className="hover:text-slate-200">Confronti regionali</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{c.regions.join(' vs ')}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Confronto regionale · {c.regions.join(' / ')}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{c.title}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{c.intro}</p>
      </header>

      {c.comparisonTable.length > 0 ? (
        <aside className="glass mb-10 overflow-x-auto rounded-2xl p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">Tabella sintetica</p>
          <table className="w-full text-sm">
            <thead className="border-b border-white/10 text-left">
              <tr>
                <th className="py-2 pr-3 text-slate-300">Parametro</th>
                {c.comparisonTable[0].values.map((v) => (
                  <th key={v.region} className="py-2 px-3 text-slate-100">
                    {v.region}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {c.comparisonTable.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-2 pr-3 text-slate-400">{row.label}</td>
                  {row.values.map((v) => (
                    <td key={v.region} className="py-2 px-3 text-slate-200">
                      {v.value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      ) : null}

      <article className="prose-invert space-y-10">
        {c.sections.map((section, idx) => (
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

      <LeadCTA variant={c.ctaVariant} context={c.ctaContext} tone="prominent" />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {c.faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-slate-100">Confronti correlati</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/confronto/${r.slug}`} className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40">
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">{r.title}</p>
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
