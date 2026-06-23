import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ATS_REGIONALI, getATSBySlug } from '@/lib/ats-regionali';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

interface PageProps { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return ATS_REGIONALI.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const a = getATSBySlug(slug);
  if (!a) return { title: 'ATS non trovata' };
  const url = `https://goccia.org/ats/${a.slug}`;
  return {
    title: a.shortTitle,
    description: a.metaDescription,
    alternates: { canonical: url },
  };
}

export default async function ATSPage({ params }: PageProps) {
  const { slug } = await params;
  const a = getATSBySlug(slug);
  if (!a) notFound();
  const url = `https://goccia.org/ats/${a.slug}`;

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'ATS regionali', url: 'https://goccia.org/ats' },
        { name: a.name, url },
      ])} />
      <JsonLd data={faqJsonLd(a.faqs)} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/ats" className="hover:text-slate-200">ATS</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{a.region}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">{a.region}</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{a.name}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{a.intro}</p>
      </header>

      <section className="mb-10 glass rounded-2xl p-5">
        <p className="text-xs uppercase tracking-wide text-slate-400">Competenze sull'acqua del rubinetto</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
          {a.competenze.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </section>

      <section className="mb-10 glass rounded-2xl p-5">
        <p className="text-xs uppercase tracking-wide text-slate-400">Procedure per il cittadino</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
          {a.procedureCittadino.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </section>

      <section className="mb-10 glass rounded-2xl p-5">
        <p className="text-xs uppercase tracking-wide text-slate-400">Contatti pubblici</p>
        <dl className="mt-3 space-y-2 text-sm">
          {a.contattiPubblici.map((c, i) => (
            <div key={i}>
              <dt className="text-slate-400">{c.label}</dt>
              <dd className="text-slate-200">{c.value}</dd>
            </div>
          ))}
          <div>
            <dt className="text-slate-400">Sito ufficiale</dt>
            <dd>
              <a href={a.ufficialURL} target="_blank" rel="noreferrer" className="text-sky-300 underline-offset-2 hover:underline">
                {a.ufficialURL.replace(/^https?:\/\//, '')}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <LeadCTA variant="completa" context={`Per analizzare la tua acqua a casa con un laboratorio qualificato, indipendentemente dai controlli ufficiali di ${a.name}:`} tone="prominent" />

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {a.faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
