import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_SECTORS as SECTOR_GUIDES } from '@/lib/sectors-all';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Analisi acqua per professionisti: ristoranti, hotel, scuole, studi medici",
  description:
    "Guide settoriali per ristoranti, hotel, dentisti, condomini, parrucchieri, palestre, panificatori, scuole: normativa, parametri, frequenza analisi acqua.",
  alternates: { canonical: 'https://goccia.org/uso' },
};

export default function SectorIndexPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Per settore', url: 'https://goccia.org/uso' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Analisi acqua per professionisti
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">L'acqua nel tuo settore</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Obblighi normativi, parametri da analizzare, frequenza dei controlli e
          casi specifici per ristoranti, hotel, studi medici, condomini,
          parrucchieri, palestre, panificatori, scuole.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {SECTOR_GUIDES.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/uso/${g.slug}`}
              className="glass group block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40"
            >
              <p className="font-display text-lg font-semibold text-slate-100 group-hover:text-white">
                {g.itName}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                {g.audience}
              </p>
              <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                {g.metaDescription}
              </p>
            </Link>
          </li>
        ))}
      </ul>


      <div className="mt-12"><SponsorBanner /></div>

      <LeadCTA
        variant="completa"
        context="Per analisi periodica dell'acqua del rubinetto del tuo esercizio commerciale, studio professionale o struttura ricettiva con un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
