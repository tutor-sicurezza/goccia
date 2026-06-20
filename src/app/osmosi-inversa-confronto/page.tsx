import type { Metadata } from 'next';
import {
  OSMOSIS_SYSTEMS,
  OSMOSIS_COMPARISON_ROWS,
  OSMOSIS_COMPARISON_FAQS,
  OSMOSIS_DECISION_PATHS,
} from '@/lib/osmosis-comparison';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

const URL = 'https://goccia.org/osmosi-inversa-confronto';

export const metadata: Metadata = {
  title: 'Confronto sistemi osmosi inversa: 5 categorie a confronto onesto',
  description:
    "Sottolavello classico, senza serbatoio, portatile, zero-waste, commerciale: pro, contro, costi e quando ciascuno conviene davvero. Confronto neutro.",
  alternates: { canonical: URL },
};

const DIFFICULTY_LABEL: Record<string, string> = {
  facile: 'Facile (fai-da-te)',
  media: 'Media',
  professionale: 'Professionale',
};

export default function OsmosisComparisonPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: 'Confronto sistemi di osmosi inversa per casa',
          description: metadata.description as string,
          url: URL,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Osmosi inversa: confronto', url: URL },
        ])}
      />
      <JsonLd data={faqJsonLd(OSMOSIS_COMPARISON_FAQS.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Confronto onesto · senza marchi</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">Osmosi inversa: 5 categorie a confronto</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Niente classifica del "migliore in assoluto". Confrontiamo cinque
          categorie tipologiche (sottolavello classico, senza serbatoio,
          portatile, zero-waste, commerciale) per aiutarti a capire quale ha
          senso nel tuo specifico scenario.
        </p>
      </header>

      <section className="glass mb-10 overflow-x-auto rounded-2xl p-5">
        <p className="mb-3 text-xs uppercase tracking-wide text-slate-400">Tabella sintetica</p>
        <table className="w-full text-sm">
          <thead className="border-b border-white/10 text-left">
            <tr>
              <th className="py-2 pr-3 text-slate-300">Parametro</th>
              {OSMOSIS_SYSTEMS.map((s) => (
                <th key={s.id} className="py-2 px-3 text-slate-100 whitespace-nowrap">{s.itName}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {OSMOSIS_COMPARISON_ROWS.map((row, idx) => (
              <tr key={idx}>
                <td className="py-2 pr-3 text-slate-400">{row.label}</td>
                {OSMOSIS_SYSTEMS.map((s) => {
                  const v = row.values.find((r) => r.systemId === s.id);
                  return <td key={s.id} className="py-2 px-3 text-slate-200">{v?.value ?? '—'}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <article className="prose-invert space-y-12">
        {OSMOSIS_SYSTEMS.map((s) => (
          <section key={s.id} className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-2xl font-semibold text-slate-100">
                {s.rank}. {s.itName}
              </h2>
              <span className="text-xs uppercase tracking-wide text-slate-400">{s.type}</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">
              {s.priceRange} · {s.productionRate} · spreco {s.wasteRatio} · {DIFFICULTY_LABEL[s.installationDifficulty] ?? s.installationDifficulty}
            </p>
            <p className="mt-4 text-slate-300">{s.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-emerald-300">Punti di forza</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {s.pros.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-amber-300">Punti deboli</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {s.cons.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Ideale per</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {s.bestFor.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Sconsigliato se</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {s.notIdealFor.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              <strong>Manutenzione</strong>: {s.maintenance} · <strong>Stadi</strong>: {s.filterStages} ·{' '}
              <strong>Membrana</strong>: {s.membranePermeate}
            </p>
          </section>
        ))}
      </article>

      <section className="mt-14 glass rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Scenario per scenario</h2>
        <p className="mt-1 text-sm text-slate-400">Quale categoria ha più senso secondo le tue condizioni</p>
        <ul className="mt-6 space-y-4">
          {OSMOSIS_DECISION_PATHS.map((d, i) => (
            <li key={i} className="border-l-2 border-violet-400/40 pl-4">
              <p className="text-sm text-slate-300"><strong>Scenario</strong>: {d.scenario}</p>
              <p className="mt-1 text-sm text-emerald-200"><strong>Suggerimento</strong>: {d.recommendation}</p>
            </li>
          ))}
        </ul>
      </section>

      <LeadCTA
        variant="rapporto-prova"
        context="Per verificare con un'analisi pre/post in laboratorio se il sistema di osmosi che stai valutando porta benefici reali sulla tua acqua del rubinetto:"
        tone="prominent"
      />

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {OSMOSIS_COMPARISON_FAQS.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
