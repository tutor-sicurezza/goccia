import type { Metadata } from 'next';
import Link from 'next/link';
import { PFAS_HOTSPOTS, PFAS_INFO } from '@/lib/pfas-hotspots';
import { PFASMap } from '@/components/pfas-map';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { articleJsonLd, breadcrumbJsonLd } from '@/components/json-ld';

const URL = 'https://goccia.org/pfas-italia-mappa';

export const metadata: Metadata = {
  title: 'PFAS in Italia: mappa degli hotspot documentati pubblicamente',
  description:
    "Mappa interattiva delle aree italiane con presenza documentata di PFAS: Veneto Miteni, Spinetta Marengo, Brescia, Lombardia, e altri hotspot.",
  alternates: { canonical: URL },
};

const SEV_LABEL: Record<string, string> = {
  critica: 'Critica',
  alta: 'Alta',
  media: 'Media',
  monitorata: 'Monitorata',
};

export default function PFASMapPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: 'PFAS in Italia: mappa degli hotspot',
          description: metadata.description as string,
          url: URL,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Mappa PFAS Italia', url: URL },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Mappa PFAS</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">PFAS in Italia: dove sono</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Sintesi degli hotspot PFAS documentati pubblicamente in Italia: Veneto
          (Miteni), Piemonte (Spinetta Marengo), Lombardia, Toscana, Emilia-Romagna,
          Lazio. Solo dati pubblici, niente speculazioni.
        </p>
      </header>

      <PFASMap />

      <article className="prose-invert mt-12 space-y-10">
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-100">Cosa sono i PFAS</h2>
          <p className="mt-3 text-slate-300">{PFAS_INFO.description}</p>
          <p className="mt-3 text-slate-300">
            <strong>Limiti UE</strong>: la direttiva 2020/2184 stabilisce
            <strong> {PFAS_INFO.euLimitSumPfasUgL} µg/L per la somma di 20 PFAS prioritari</strong> e
            <strong> {PFAS_INFO.euLimitTotalPfasUgL} µg/L per la somma dei PFAS totali</strong>. In
            Italia recepiti dal <strong>{PFAS_INFO.italyTransposition}</strong>. {PFAS_INFO.newLimitsEnforcement}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-100">Hotspot documentati</h2>
          <ul className="mt-4 space-y-4">
            {PFAS_HOTSPOTS.map((h) => (
              <li key={h.id} className="glass rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-base font-semibold text-slate-100">{h.name}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-400 mt-0.5">
                      {h.region} · {h.provinces.join(', ')} · noto dal {h.knownSince}
                    </p>
                  </div>
                  <span className={
                    h.severity === 'critica' ? 'rounded-full bg-rose-500/15 px-2.5 py-1 text-xs font-semibold text-rose-200' :
                    h.severity === 'alta' ? 'rounded-full bg-orange-500/15 px-2.5 py-1 text-xs font-semibold text-orange-200' :
                    h.severity === 'media' ? 'rounded-full bg-amber-500/15 px-2.5 py-1 text-xs font-semibold text-amber-200' :
                    'rounded-full bg-sky-500/15 px-2.5 py-1 text-xs font-semibold text-sky-200'
                  }>
                    {SEV_LABEL[h.severity]}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{h.description}</p>
                {h.affectedPopulationEstimate ? (
                  <p className="mt-2 text-xs text-slate-400">
                    Popolazione stimata interessata: {h.affectedPopulationEstimate}
                  </p>
                ) : null}
                {h.whatToDo.length > 0 ? (
                  <>
                    <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">Cosa fare</p>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-slate-300">
                      {h.whatToDo.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                  </>
                ) : null}
                {h.officialReferences.length > 0 ? (
                  <p className="mt-3 text-xs text-slate-400">
                    Fonti ufficiali:{' '}
                    {h.officialReferences.map((r, i) => (
                      <span key={i}>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-300 underline-offset-2 hover:underline"
                        >
                          {r.label}
                        </a>
                        {i < h.officialReferences.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Come scoprire se la TUA acqua contiene PFAS
          </h2>
          <p className="mt-3 text-slate-300">
            I PFAS non si vedono, non hanno sapore e non si possono rilevare con
            le strisce reattive casalinghe. Servono strumenti analitici di
            laboratorio (LC-MS/MS) calibrati su standard PFAS specifici. Il costo
            indicativo di un'analisi PFAS è 150-300 €.
          </p>
          <p className="mt-3 text-slate-300">
            Se vivi in un'area documentata sopra, puoi:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-300">
            <li>Richiedere all'ATS o al gestore idrico l'ultimo referto del tuo comune.</li>
            <li>Far analizzare il rubinetto di casa con un laboratorio qualificato.</li>
            <li>Valutare un sistema di trattamento mirato (osmosi inversa o carbone attivo dimensionato per PFAS).</li>
            <li>
              Leggi anche{' '}
              <Link href="/blog/pfas-italia-mappa" className="text-sky-300 underline-offset-2 hover:underline">
                l'articolo blog completo sui PFAS in Italia
              </Link>
              .
            </li>
          </ul>
        </section>
      </article>

      <LeadCTA
        variant="pfas"
        context="Per analizzare i PFAS nella tua acqua del rubinetto con strumentazione professionale LC-MS/MS in un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
