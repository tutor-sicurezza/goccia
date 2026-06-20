import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MYTH_PAGES, getMythBySlug } from '@/lib/myth-pages';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

interface PageProps { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return MYTH_PAGES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const m = getMythBySlug(slug);
  if (!m) return { title: 'Mito non trovato' };
  const url = `https://goccia.org/miti/${m.slug}`;
  return {
    title: m.shortTitle,
    description: m.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: 'article', url, title: m.shortTitle, description: m.metaDescription, locale: 'it_IT' },
  };
}

const VERDICT_TONE: Record<string, { label: string; cls: string }> = {
  falso: { label: 'Falso', cls: 'border-rose-400/40 bg-rose-400/10 text-rose-100' },
  'parzialmente-vero': { label: 'Parzialmente vero', cls: 'border-amber-400/40 bg-amber-400/10 text-amber-100' },
  'vero-ma-fraintendimento': { label: 'Vero, ma fraintendimento', cls: 'border-amber-400/40 bg-amber-400/10 text-amber-100' },
  dipende: { label: 'Dipende', cls: 'border-sky-400/40 bg-sky-400/10 text-sky-100' },
  vero: { label: 'Vero', cls: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100' },
};

export default async function MythPage({ params }: PageProps) {
  const { slug } = await params;
  const m = getMythBySlug(slug);
  if (!m) notFound();
  const url = `https://goccia.org/miti/${m.slug}`;
  const tone = VERDICT_TONE[m.verdict] ?? VERDICT_TONE.dipende;
  const related = (m.relatedSlugs ?? [])
    .map((s) => MYTH_PAGES.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd data={articleJsonLd({ headline: m.shortTitle, description: m.metaDescription, url, datePublished: '2026-06-21' })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'Miti', url: 'https://goccia.org/miti' },
        { name: m.myth, url },
      ])} />
      <JsonLd data={faqJsonLd(m.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ClaimReview',
        url,
        datePublished: '2026-06-21',
        claimReviewed: m.myth,
        author: { '@id': 'https://123acqua.com#organization' },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: m.verdict === 'falso' ? 1 : m.verdict === 'parzialmente-vero' || m.verdict === 'vero-ma-fraintendimento' ? 3 : m.verdict === 'dipende' ? 4 : 5,
          bestRating: 5,
          worstRating: 1,
          alternateName: tone.label,
        },
        itemReviewed: { '@type': 'Claim', author: { '@type': 'Thing', name: 'Cultura popolare' }, datePublished: '2026-06-21' },
      }} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/miti" className="hover:text-slate-200">Miti</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{m.myth.substring(0, 60)}{m.myth.length > 60 ? '…' : ''}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Mito · scienza · verità</p>
        <p className="text-2xl text-slate-300 sm:text-3xl">"{m.myth}"</p>
        <div className={`mt-4 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold ${tone.cls}`}>
          Verdetto: {tone.label}
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{m.shortTitle}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{m.verdictSummary}</p>
      </header>

      <article className="prose-invert space-y-10">
        {m.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">{s.heading}</h2>
            <div className="mt-3 space-y-4 text-slate-300">
              {s.paragraphs.map((p, pi) => <p key={pi}>{p}</p>)}
              {s.bullets && s.bullets.length > 0 ? (
                <ul className="list-disc space-y-1.5 pl-5">
                  {s.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </article>

      <section className="mt-10 glass rounded-2xl p-5">
        <p className="text-xs uppercase tracking-wide text-slate-400">Riferimenti scientifici</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          {m.scientificReferences.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </section>

      <LeadCTA variant={m.ctaVariant} context={m.ctaContext} tone="prominent" />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {m.faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-slate-100">Altri miti smontati</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/miti/${r.slug}`} className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40">
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">{r.myth}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{VERDICT_TONE[r.verdict]?.label ?? r.verdict}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
