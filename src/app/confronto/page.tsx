import type { Metadata } from 'next';
import Link from 'next/link';
import { REGIONAL_COMPARISONS } from '@/lib/regional-comparisons';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Confronti regionali sull'acqua del rubinetto in Italia",
  description:
    "Nord vs Sud, Lombardia vs Veneto, Lazio vs Campania: confronti su durezza, PFAS, nitrati, normativa e qualità dell'acqua del rubinetto regione per regione.",
  alternates: { canonical: 'https://goccia.org/confronto' },
};

export default function ComparisonsIndexPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Confronti regionali', url: 'https://goccia.org/confronto' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Confronti regionali</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">L'acqua del rubinetto regione per regione</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Differenze geologiche, normative e storiche tra le regioni italiane.
          Senza propaganda, senza primati: solo i dati e cosa significano per chi
          vive lì.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {REGIONAL_COMPARISONS.map((c) => (
          <li key={c.slug}>
            <Link href={`/confronto/${c.slug}`} className="glass group block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40">
              <p className="font-display text-lg font-semibold text-slate-100 group-hover:text-white">{c.title}</p>
              <p className="mt-2 text-sm text-slate-400 line-clamp-3">{c.metaDescription}</p>
            </Link>
          </li>
        ))}
      </ul>
      <LeadCTA
        variant="completa"
        context="Per analizzare l'acqua del rubinetto del tuo comune con un laboratorio qualificato e capire da quali parametri ti differenzi dalla media regionale:"
        tone="prominent"
      />
    </main>
  );
}
