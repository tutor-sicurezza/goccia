import type { Metadata } from 'next';
import Link from 'next/link';
import { CALCULATORS_META } from '@/lib/calculators-meta';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Calcolatori acqua del rubinetto: durezza, ROI, bolletta, sodio",
  description:
    "Convertitore durezza °F/°dH/ppm, ROI addolcitore a 10 anni, simulatore bolletta, calcolo sodio dieta, prossima analisi consigliata: 5 strumenti gratuiti.",
  alternates: { canonical: 'https://goccia.org/calcolatori' },
};

export default function CalculatorsIndexPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'Calcolatori', url: 'https://goccia.org/calcolatori' },
      ])} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Strumenti</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Calcolatori acqua del rubinetto</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Conversioni, simulazioni, ROI: cinque strumenti gratuiti per
          rispondere alle domande pratiche più frequenti sull'acqua del
          rubinetto in Italia.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {CALCULATORS_META.map((c) => (
          <li key={c.slug}>
            <Link href={`/calcolatori/${c.slug}`} className="glass group block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40">
              <p className="font-display text-lg font-semibold text-slate-100 group-hover:text-white">{c.shortTitle}</p>
              <p className="mt-2 text-sm text-slate-400 line-clamp-3">{c.metaDescription}</p>
            </Link>
          </li>
        ))}
      </ul>
      <LeadCTA
        variant="completa"
        context="Per dati reali sulla tua acqua e non solo stime, prenota un'analisi con un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
