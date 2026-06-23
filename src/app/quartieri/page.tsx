import type { Metadata } from 'next';
import Link from 'next/link';
import { NEIGHBORHOOD_GUIDES } from '@/lib/neighborhood-guides';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Acqua del rubinetto per quartiere a Roma e Milano",
  description:
    "Schede sulla qualità dell'acqua del rubinetto quartiere per quartiere: centro storico, Trastevere, EUR per Roma; Brera, Navigli, CityLife per Milano.",
  alternates: { canonical: 'https://goccia.org/quartieri' },
};

export default function NeighborhoodsIndexPage() {
  const byCity = NEIGHBORHOOD_GUIDES.reduce<Record<string, typeof NEIGHBORHOOD_GUIDES>>(
    (acc, g) => {
      (acc[g.cityName] ??= [] as unknown as typeof NEIGHBORHOOD_GUIDES).push(g);
      return acc;
    },
    {},
  );
  const cities = Object.keys(byCity).sort();

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'Quartieri', url: 'https://goccia.org/quartieri' },
      ])} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Quartieri</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">L'acqua del rubinetto, quartiere per quartiere</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Roma e Milano hanno acque del rubinetto generalmente buone, ma la
          qualità a casa tua dipende anche dall'età degli impianti e dalla
          zona. Schede dedicate per i quartieri principali.
        </p>
      </header>

      <div className="space-y-10">
        {cities.map((city) => (
          <section key={city}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">{city}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {byCity[city]
                .sort((a, b) => a.neighborhoodName.localeCompare(b.neighborhoodName))
                .map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/quartieri/${g.slug}`}
                      className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                    >
                      <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                        {g.neighborhoodName}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{g.district}</p>
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
        context="Per analizzare l'acqua del rubinetto del tuo quartiere con un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
