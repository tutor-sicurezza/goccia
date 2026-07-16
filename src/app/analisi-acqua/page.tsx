import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getComuniIndex,
  getGestoriCoverage,
  getComuniDataCount,
  getRegionStats,
} from '@/lib/comune-analyses';
import { ComuniBrowser } from '@/components/comuni-browser';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

const URL = 'https://goccia.org/analisi-acqua';

export const metadata: Metadata = {
  title: "Analisi dell'acqua del rubinetto comune per comune in Italia",
  description:
    "Valori reali delle analisi dell'acqua del rubinetto per ogni comune coperto, estratti dai referti pubblici dei gestori: tabella parametri, punteggio 1–99 e link alla fonte ufficiale.",
  alternates: { canonical: URL },
};

export default function AnalisiAcquaHub() {
  const comuni = getComuniIndex();
  const gestori = getGestoriCoverage();
  const total = getComuniDataCount();
  const regionStats = getRegionStats();
  const regions = regionStats.map((s) => s.region);

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Analisi acqua per comune', url: URL },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: "Analisi dell'acqua del rubinetto comune per comune",
          url: URL,
          inLanguage: 'it-IT',
          about: 'Qualità acqua potabile Italia',
          isPartOf: { '@type': 'WebSite', url: 'https://goccia.org' },
        }}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Analisi acqua per comune
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">L&apos;acqua del tuo comune, coi numeri veri</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Per ogni comune coperto pubblichiamo i valori reali delle analisi dell&apos;acqua del
          rubinetto, estratti dai referti pubblici dei gestori idrici: tabella dei parametri
          confrontati con i limiti di legge (D.Lgs. 18/2023), punteggio sintetico 1–99 calcolato in
          modo deterministico e link diretto alla fonte ufficiale. Nessun valore inventato.
        </p>
      </header>

      {/* Statistiche */}
      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { n: total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'), l: 'Comuni con dati' },
          { n: regions.length, l: 'Regioni' },
          { n: gestori.length, l: 'Gestori idrici' },
          { n: '1–99', l: 'Punteggio per comune' },
        ].map((s) => (
          <div key={s.l} className="glass rounded-2xl p-4 text-center">
            <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.n}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Azioni */}
      <div className="mb-12 flex flex-wrap gap-2">
        <Link
          href="/comuni-a-rischio"
          className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-400/60 hover:bg-sky-400/20"
        >
          Comuni più a rischio →
        </Link>
        <Link
          href="/analisi-ufficiali"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10"
        >
          Fonti ufficiali per città →
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10"
        >
          Calcola il punteggio della tua acqua →
        </Link>
      </div>

      {/* Fonti */}
      <section className="glass mb-12 rounded-2xl p-5">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Da dove vengono i dati
        </p>
        <p className="mt-2 text-sm text-slate-300">
          I valori sono estratti automaticamente dai portali e dai referti pubblici dei gestori
          idrici, poi normalizzati sui parametri del D.Lgs. 18/2023. Ogni scheda comune riporta la
          fonte e la data di riferimento.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {gestori.map((g) => (
            <span
              key={g.gestore}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {g.gestore} <span className="text-slate-500">· {g.count}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Mappa interattiva + ricerca + comuni per regione */}
      <ComuniBrowser comuni={comuni} regionStats={regionStats} />

      <LeadCTA
        variant="completa"
        context="Il tuo comune non è ancora coperto, o vuoi i valori esatti del tuo rubinetto? Un'analisi in laboratorio qualificato misura metalli, nitrati, durezza e PFAS di casa tua:"
        tone="prominent"
      />
    </main>
  );
}
