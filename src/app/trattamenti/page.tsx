import type { Metadata } from 'next';
import Link from 'next/link';
import { TREATMENT_GUIDES } from '@/lib/treatment-guides';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Sistemi di trattamento dell'acqua del rubinetto: guida completa",
  description:
    "Confronto tra osmosi inversa, addolcitore, carbone attivo, UV, ultrafiltrazione e altri sistemi: come funzionano, costi, casi d'uso, quando non servono.",
  alternates: { canonical: 'https://goccia.org/trattamenti' },
};

export default function TreatmentsIndexPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Trattamenti', url: 'https://goccia.org/trattamenti' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Trattamenti
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Sistemi di trattamento dell'acqua</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Una panoramica onesta sui principali sistemi per trattare l'acqua del
          rubinetto: cosa fanno, cosa NON fanno, costi e manutenzione. Senza
          marchi commerciali, senza promesse esagerate.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {TREATMENT_GUIDES.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/trattamenti/${g.slug}`}
              className="glass group block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40"
            >
              <p className="font-display text-lg font-semibold text-slate-100 group-hover:text-white">
                {g.itName}
              </p>
              <p className="mt-1 text-sm text-slate-400 line-clamp-3">
                {g.metaDescription}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">
                {g.costRange}
              </p>
            </Link>
          </li>
        ))}
      </ul>


      <div className="mt-12"><SponsorBanner /></div>

      <LeadCTA
        variant="rapporto-prova"
        context="Per verificare l'efficacia di un sistema di trattamento installato a casa con un'analisi pre/post di laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
