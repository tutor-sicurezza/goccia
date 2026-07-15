import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getComuniAtRisk,
  getRiskByPollutant,
  getComuniDataCount,
} from '@/lib/comune-analyses';
import { PFAS_COMUNI } from '@/lib/pfas-comuni-veneto';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { articleJsonLd, breadcrumbJsonLd } from '@/components/json-ld';

const URL = 'https://goccia.org/comuni-a-rischio';

export const metadata: Metadata = {
  title: "Comuni più a rischio per la qualità dell'acqua in Italia",
  description:
    "Classifica dei comuni italiani più a rischio per la qualità dell'acqua del rubinetto, in base ai referti pubblici dei gestori e alle contaminazioni documentate (PFAS, metalli, nitrati). Fonti ufficiali.",
  alternates: { canonical: URL },
};

const POLLUTANT_LABEL: Record<string, string> = {
  nitrati: 'Nitrati',
  nitriti: 'Nitriti',
  arsenico: 'Arsenico',
  piombo: 'Piombo',
  fluoruri: 'Fluoruri',
  cromo: 'Cromo',
  nichel: 'Nichel',
  cadmio: 'Cadmio',
  ammonio: 'Ammonio',
  manganese: 'Manganese',
  ferro: 'Ferro',
  durezza_totale: 'Durezza',
  cloruri: 'Cloruri',
  solfati: 'Solfati',
  sodio: 'Sodio',
  pfas_totali: 'PFAS',
  torbidita: 'Torbidità',
  e_coli: 'Escherichia coli',
  coliformi_totali: 'Coliformi totali',
  enterococchi: 'Enterococchi',
};

const ZONE_META: Record<string, { label: string; cls: string; order: number }> = {
  rossa: { label: 'Area rossa', cls: 'bg-rose-500/15 text-rose-200', order: 0 },
  arancione: { label: 'Area arancione', cls: 'bg-orange-500/15 text-orange-200', order: 1 },
  gialla: { label: 'Area gialla', cls: 'bg-amber-500/15 text-amber-200', order: 2 },
};

function scoreCls(score: number): string {
  if (score >= 70) return 'text-emerald-300';
  if (score >= 50) return 'text-amber-300';
  if (score >= 30) return 'text-orange-300';
  return 'text-rose-300';
}

export default function ComuniARischioPage() {
  const atRisk = getComuniAtRisk();
  const byPollutant = getRiskByPollutant();
  const dataCount = getComuniDataCount();

  const venetoByZone = PFAS_COMUNI.reduce<Record<string, typeof PFAS_COMUNI>>((acc, c) => {
    (acc[c.zone] ??= [] as unknown as typeof PFAS_COMUNI).push(c);
    return acc;
  }, {});
  const zones = Object.keys(venetoByZone).sort(
    (a, b) => (ZONE_META[a]?.order ?? 9) - (ZONE_META[b]?.order ?? 9),
  );

  return (
    <main className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: "Comuni più a rischio per la qualità dell'acqua in Italia",
          description: metadata.description as string,
          url: URL,
          datePublished: '2026-07-15',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Comuni a rischio', url: URL },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Rischio qualità acqua
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">Comuni più a rischio in Italia</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Dove la qualità dell&apos;acqua del rubinetto merita più attenzione, in base ai referti
          pubblici dei gestori e alle contaminazioni documentate da fonti ufficiali (ARPA, ISS,
          Regioni). Solo dati pubblici verificabili, nessuna stima inventata.
        </p>
      </header>

      {/* ——— Comuni a rischio da referti reali ——— */}
      <section className="mb-14">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Classifica dai referti ufficiali
        </h2>
        {atRisk.length > 0 ? (
          <>
            <p className="mt-2 text-sm text-slate-400">
              {dataCount} comuni con referto analizzato. Qui i {Math.min(50, atRisk.length)} col
              punteggio più basso (i più critici); ogni comune ha la sua scheda con la tabella completa.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-slate-400">
                    <th className="py-2 pr-3 font-medium">Comune</th>
                    <th className="py-2 pr-3 font-medium">Punteggio</th>
                    <th className="py-2 pr-3 font-medium">Parametri oltre soglia</th>
                    <th className="py-2 font-medium">Scheda</th>
                  </tr>
                </thead>
                <tbody>
                  {atRisk.slice(0, 50).map((row) => (
                    <tr key={row.slug} className="border-b border-white/5">
                      <td className="py-2.5 pr-3 text-slate-200">
                        {row.name} <span className="text-slate-500">({row.province})</span>
                      </td>
                      <td className={`py-2.5 pr-3 font-display tabular-nums ${scoreCls(row.score)}`}>
                        {row.score}
                        <span className="text-xs text-slate-500">/99</span>
                      </td>
                      <td className="py-2.5 pr-3 text-slate-300">
                        {row.overLimit.length > 0
                          ? row.overLimit
                              .map((p) => POLLUTANT_LABEL[p.parameterId] ?? p.label)
                              .join(', ')
                          : '—'}
                      </td>
                      <td className="py-2.5">
                        <Link
                          href={`/acqua-di-${row.slug}`}
                          className="text-xs text-sky-300 underline-offset-2 hover:underline"
                        >
                          apri
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
            Stiamo estraendo i valori dai referti pubblici dei gestori, comune per comune. Man mano
            che i dati vengono validati, ogni comune ottiene una scheda con tabella e punteggio.
            Intanto puoi consultare le contaminazioni già documentate qui sotto e i{' '}
            <Link href="/analisi-ufficiali" className="text-sky-300 underline-offset-2 hover:underline">
              link ai referti ufficiali per città
            </Link>
            .
          </p>
        )}
      </section>

      {/* ——— Rischio per inquinante ——— */}
      {byPollutant.length > 0 ? (
        <section className="mb-14">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Rischio per tipo di inquinante
          </h2>
          <div className="mt-5 space-y-4">
            {byPollutant.map((row) => (
              <div key={row.parameterId} className="glass rounded-2xl p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-slate-100">
                    {POLLUTANT_LABEL[row.parameterId] ?? row.parameterId}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {row.overLimitCount} comuni oltre il limite
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  {row.comuni
                    .slice(0, 12)
                    .map((c) => `${c.name} (${c.province})`)
                    .join(' · ')}
                  {row.comuni.length > 12 ? ` e altri ${row.comuni.length - 12}` : ''}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ——— PFAS Veneto: dati reali già documentati ——— */}
      <section className="mb-14">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Contaminazione PFAS documentata — Veneto
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          {PFAS_COMUNI.length} comuni di Vicenza, Verona e Padova perimetrati dalla Regione Veneto
          nelle zone di sorveglianza PFAS, la più estesa contaminazione documentata in Europa.
        </p>
        <div className="mt-5 space-y-6">
          {zones.map((zone) => {
            const meta = ZONE_META[zone];
            const comuni = venetoByZone[zone];
            return (
              <div key={zone}>
                <div className="mb-3 flex items-center gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${meta?.cls ?? ''}`}>
                    {meta?.label ?? zone}
                  </span>
                  <span className="text-xs text-slate-500">{comuni.length} comuni</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {comuni.map((c) => (
                    <span
                      key={c.slug}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {c.name} <span className="text-slate-500">({c.province})</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/pfas-italia-mappa"
            className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200 transition hover:border-sky-400/60 hover:bg-sky-400/20"
          >
            Mappa PFAS Italia →
          </Link>
          <Link
            href="/analisi-ufficiali"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10"
          >
            Referti ufficiali per città →
          </Link>
        </div>
      </section>

      <LeadCTA
        variant="completa"
        context="Vuoi sapere com'è davvero l'acqua a casa tua? Un'analisi in laboratorio qualificato misura metalli, nitrati e PFAS del tuo rubinetto:"
        tone="prominent"
      />
    </main>
  );
}
