import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQ_CLUSTERS } from '@/lib/faq-clusters';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "FAQ acqua del rubinetto: cluster di risposte per tema",
  description:
    "FAQ tematiche sull'acqua del rubinetto: neonati, gravidanza, animali, piombo, PFAS, analisi, osmosi, addolcitore, condominio, pozzo, HACCP, microbiologia.",
  alternates: { canonical: 'https://goccia.org/faq' },
};

export default function FaqIndexPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'FAQ', url: 'https://goccia.org/faq' },
      ])} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">FAQ tematiche</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Le risposte raggruppate per tema</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Oltre 200 domande con riferimenti normativi e scientifici, organizzate
          in 15 cluster tematici.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {FAQ_CLUSTERS.map((c) => (
          <li key={c.slug}>
            <Link href={`/faq/${c.slug}`} className="glass group block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40">
              <p className="font-display text-lg font-semibold text-slate-100 group-hover:text-white">{c.title}</p>
              <p className="mt-2 text-sm text-slate-400 line-clamp-2">{c.metaDescription}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">{c.faqs.length} FAQ</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12"><SponsorBanner /></div>
      <LeadCTA variant="completa" context="Per risposte specifiche sulla tua acqua con un'analisi di laboratorio:" tone="prominent" />
    </main>
  );
}
