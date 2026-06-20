import type { Metadata } from 'next';
import Link from 'next/link';
import { TOPIC_GUIDES } from '@/lib/topic-guides';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Guide sull'acqua del rubinetto: famiglia, salute, costi, trattamenti",
  description:
    "Guide pratiche e oneste sull'acqua del rubinetto: neonati, gravidanza, animali domestici, addolcitori, depuratori, caraffe filtranti, allenamento, cisterne.",
  alternates: { canonical: 'https://goccia.org/guide' },
};

export default function GuidesIndexPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Guide', url: 'https://goccia.org/guide' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Guide</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Guide pratiche sull'acqua del rubinetto</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Risposte oneste alle domande più frequenti sulla qualità, la sicurezza
          e l'uso dell'acqua del rubinetto in famiglia, con gli animali, in
          gravidanza, in palestra e nei sistemi di trattamento domestico.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {TOPIC_GUIDES.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guide/${g.slug}`}
              className="glass group block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40"
            >
              <p className="font-display text-lg font-semibold text-slate-100 group-hover:text-white">
                {g.itName}
              </p>
              <p className="mt-2 text-sm text-slate-400 line-clamp-3">
                {g.metaDescription}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <LeadCTA
        variant="completa"
        context="Per un'analisi completa dell'acqua del rubinetto della tua casa con un laboratorio qualificato che utilizza metodi validati conformi alle norme tecniche:"
        tone="prominent"
      />
    </main>
  );
}
