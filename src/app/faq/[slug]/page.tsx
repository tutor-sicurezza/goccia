import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FAQ_CLUSTERS, getFAQClusterBySlug } from '@/lib/faq-clusters';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

interface PageProps { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return FAQ_CLUSTERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = getFAQClusterBySlug(slug);
  if (!c) return { title: 'FAQ non trovate' };
  const url = `https://goccia.org/faq/${c.slug}`;
  return {
    title: c.shortTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
  };
}

export default async function FaqClusterPage({ params }: PageProps) {
  const { slug } = await params;
  const c = getFAQClusterBySlug(slug);
  if (!c) notFound();
  const url = `https://goccia.org/faq/${c.slug}`;
  const related = (c.relatedSlugs ?? [])
    .map((s) => FAQ_CLUSTERS.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'FAQ', url: 'https://goccia.org/faq' },
        { name: c.title, url },
      ])} />
      <JsonLd data={faqJsonLd(c.faqs)} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">FAQ</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{c.title}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{c.intro}</p>
      </header>

      <dl className="space-y-5">
        {c.faqs.map((f, i) => (
          <div key={i} className="glass rounded-2xl p-5">
            <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
            <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
          </div>
        ))}
      </dl>

      <LeadCTA variant="completa" context="Per risposte specifiche sulla TUA acqua con un'analisi di un laboratorio qualificato:" tone="prominent" />

      {related.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-slate-100">FAQ correlate</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/faq/${r.slug}`} className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40">
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">{r.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
