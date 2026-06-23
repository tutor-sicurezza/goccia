import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { KIT_EDU, getKitBySlug } from '@/lib/kit-educational';
import { LeadCTA } from '@/components/lead-cta';
import { renderText } from '@/lib/render-text';
import JsonLd, { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

interface PageProps { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return KIT_EDU.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const k = getKitBySlug(slug);
  if (!k) return { title: 'Kit non trovato' };
  const url = `https://goccia.org/kit/${k.slug}`;
  return {
    title: k.shortTitle,
    description: k.metaDescription,
    alternates: { canonical: url },
  };
}

export default async function KitPage({ params }: PageProps) {
  const { slug } = await params;
  const k = getKitBySlug(slug);
  if (!k) notFound();
  const url = `https://goccia.org/kit/${k.slug}`;
  const related = (k.relatedSlugs ?? [])
    .map((s) => KIT_EDU.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd data={articleJsonLd({ headline: k.shortTitle, description: k.metaDescription, url, datePublished: '2026-06-24' })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'Kit di prelievo', url: 'https://goccia.org/kit' },
        { name: k.itName, url },
      ])} />
      <JsonLd data={faqJsonLd(k.faqs)} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/kit" className="hover:text-slate-200">Kit di prelievo</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{k.itName}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Scheda educational</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{k.itName}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{k.intro}</p>
      </header>

      <aside className="glass mb-10 grid gap-4 rounded-2xl p-5 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Parametri inclusi</p>
          <p className="mt-1 text-sm text-slate-200">{k.parametersIncluded.slice(0, 6).join(', ')}{k.parametersIncluded.length > 6 ? '…' : ''}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Fascia costo</p>
          <p className="mt-1 text-sm text-slate-100">{k.typicalCost}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Tempi</p>
          <p className="mt-1 text-sm text-slate-200">{k.typicalTurnaround}</p>
        </div>
      </aside>

      <article className="prose-invert space-y-10">
        {k.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">{s.heading}</h2>
            <div className="mt-3 space-y-4 text-slate-300">
              {s.paragraphs.map((p, pi) => <p key={pi}>{renderText(p)}</p>)}
              {s.bullets && s.bullets.length > 0 ? (
                <ul className="list-disc space-y-1.5 pl-5">
                  {s.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </article>

      <LeadCTA variant="kit-analisi" context={k.ctaContext} tone="prominent" />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {k.faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {related.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-slate-100">Kit correlati</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/kit/${r.slug}`} className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40">
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">{r.itName}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
