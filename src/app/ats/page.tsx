import type { Metadata } from 'next';
import Link from 'next/link';
import { ATS_REGIONALI } from '@/lib/ats-regionali';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "ATS, ASL, AUSL regionali — controlli acqua del rubinetto",
  description:
    "Schede istituzionali delle ATS/ASL/AUSL regionali italiane: competenze sull'acqua del rubinetto, procedure cittadino, contatti ufficiali per ogni regione.",
  alternates: { canonical: 'https://goccia.org/ats' },
};

export default function ATSIndexPage() {
  const sorted = [...ATS_REGIONALI].sort((a, b) => a.region.localeCompare(b.region));
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'ATS regionali', url: 'https://goccia.org/ats' },
      ])} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Istituzioni · 20 regioni</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">ATS, ASL, AUSL regionali</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Le aziende sanitarie regionali italiane competenti sui controlli ufficiali
          dell'acqua del rubinetto (D.Lgs. 18/2023): cosa fanno, come contattarle,
          procedure per i cittadini.
        </p>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((a) => (
          <li key={a.slug}>
            <Link href={`/ats/${a.slug}`} className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40">
              <p className="text-xs uppercase tracking-wide text-slate-400">{a.region}</p>
              <p className="mt-1 font-display text-base font-semibold text-slate-100 group-hover:text-white">{a.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12"><SponsorBanner /></div>
      <LeadCTA variant="completa" context="Per controlli al punto d'uso con un laboratorio qualificato che integra le verifiche dell'autorità sanitaria:" tone="prominent" />
    </main>
  );
}
