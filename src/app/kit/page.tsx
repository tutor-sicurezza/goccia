import type { Metadata } from 'next';
import Link from 'next/link';
import { KIT_EDU } from '@/lib/kit-educational';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Kit di prelievo acqua: 10 schede educational",
  description:
    "Cosa contiene un kit di prelievo per analisi acqua: microbiologia, chimico-fisico, metalli, PFAS, legionella, condominio, pozzo, HACCP. Schede neutrali.",
  alternates: { canonical: 'https://goccia.org/kit' },
};

export default function KitIndexPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'Kit di prelievo', url: 'https://goccia.org/kit' },
      ])} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Schede educational</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Kit di prelievo: cosa contengono</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          10 schede tecniche neutrali sui kit di prelievo per le analisi dell'acqua
          del rubinetto: cosa includono, fascia costo, tempi di refertazione, parametri.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {KIT_EDU.map((k) => (
          <li key={k.slug}>
            <Link href={`/kit/${k.slug}`} className="glass group block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40">
              <p className="font-display text-lg font-semibold text-slate-100 group-hover:text-white">{k.itName}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{k.typicalCost} · {k.typicalTurnaround}</p>
              <p className="mt-2 text-sm text-slate-400 line-clamp-2">{k.metaDescription}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12"><SponsorBanner /></div>
      <LeadCTA variant="kit-analisi" context="Per richiedere un kit di prelievo con refertazione di laboratorio qualificato:" tone="prominent" />
    </main>
  );
}
