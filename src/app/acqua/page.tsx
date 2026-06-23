import type { Metadata } from 'next';
import Link from 'next/link';
import { CITY_GUIDES } from '@/lib/city-guides';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Acqua del rubinetto città per città — confronto e qualità in Italia',
  description:
    "Schede sulla qualità dell'acqua del rubinetto nei principali capoluoghi italiani: gestore, origine, parametri tipici, problematiche storiche e analisi.",
  alternates: { canonical: 'https://goccia.org/acqua' },
};

export default function CityIndexPage() {
  const byRegion = CITY_GUIDES.reduce<Record<string, typeof CITY_GUIDES>>((acc, g) => {
    (acc[g.region] ??= [] as unknown as typeof CITY_GUIDES).push(g);
    return acc;
  }, {});
  const regions = Object.keys(byRegion).sort();

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Acqua per città', url: 'https://goccia.org/acqua' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Acqua del rubinetto in Italia
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Com'è l'acqua nella tua città?</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Una scheda per ciascuno dei principali capoluoghi italiani: gestore
          idrico, origine geologica, parametri tipici da tenere d'occhio,
          problematiche storiche documentate e come verificare la qualità della
          propria acqua.
        </p>
      </header>

      <div className="space-y-10">
        {regions.map((region) => (
          <section key={region}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">{region}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {byRegion[region]
                .sort((a, b) => a.cityName.localeCompare(b.cityName))
                .map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/acqua-di-${g.slug}`}
                      className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                    >
                      <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                        {g.cityName}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                        {g.waterUtility}
                      </p>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>


      <div className="mt-12"><SponsorBanner /></div>

      <LeadCTA
        variant="completa"
        context="Per analizzare l'acqua del rubinetto della tua casa con un laboratorio qualificato che utilizza metodi validati conformi alle norme tecniche:"
        tone="prominent"
      />
    </main>
  );
}
