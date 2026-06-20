import type { Metadata } from 'next';
import Link from 'next/link';
import { PARAMETER_GUIDES } from '@/lib/parameter-guides';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Tutti i parametri dell'acqua del rubinetto: guide e limiti di legge",
  description:
    "Schede informative dei 24 parametri analizzati nell'acqua potabile: cos'è ogni parametro, limiti del D.Lgs. 18/2023, rischi e soluzioni. Guida completa in italiano.",
  alternates: { canonical: 'https://goccia.org/parametri' },
};

const CATEGORY_LABEL: Record<string, string> = {
  salute: 'Salute',
  estetica: 'Estetica',
  impianti: 'Impianti',
  microbiologia: 'Microbiologia',
};

const CATEGORY_ORDER = ['salute', 'estetica', 'impianti', 'microbiologia'] as const;

export default function ParametriIndexPage() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    label: CATEGORY_LABEL[cat],
    items: PARAMETER_GUIDES.filter((g) => g.category === cat),
  }));

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Parametri', url: 'https://goccia.org/parametri' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Schede tecniche
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">I 24 parametri dell'acqua</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Per ogni parametro analizzato nell'acqua potabile italiana trovi una
          scheda con il limite di legge fissato dal{' '}
          <strong>D.Lgs. 18/2023</strong> (recepimento della direttiva UE
          2020/2184), il range ideale WHO/EFSA, gli effetti su salute, gusto e
          impianti, e come si riduce o si elimina.
        </p>
      </header>

      <div className="space-y-12">
        {byCategory.map(({ cat, label, items }) => (
          <section key={cat} aria-labelledby={`cat-${cat}`}>
            <h2
              id={`cat-${cat}`}
              className="font-display text-2xl font-semibold text-slate-100"
            >
              {label}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {items.length} parametri
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {items.map((g) => (
                <li key={g.id}>
                  <Link
                    href={`/parametri/${g.slug}`}
                    className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                  >
                    <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                      {g.itName}
                    </p>
                    <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                      {g.metaDescription}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <LeadCTA
        variant="completa"
        tone="prominent"
        context="Per analizzare tutti i parametri della tua acqua con un laboratorio qualificato che utilizza metodi validati conformi alle norme tecniche:"
      />
    </main>
  );
}
