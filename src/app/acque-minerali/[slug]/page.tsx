import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MINERAL_WATERS,
  getWaterBySlug,
  classificationInfo,
  derivedMentions,
  TYPE_LABEL,
  type MineralWater,
  type MineralWaterAnalysis,
} from '@/lib/mineral-waters';
import { renderText } from '@/lib/render-text';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/json-ld';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return MINERAL_WATERS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const w = getWaterBySlug(slug);
  if (!w) return { title: 'Acqua minerale non trovata' };
  const url = `https://goccia.org/acque-minerali/${w.slug}`;
  const title = `${w.brand}: residuo fisso, analisi e valori dell'etichetta`;
  return {
    title,
    description: w.metaDescription,
    keywords: w.searchKeywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description: w.metaDescription,
      locale: 'it_IT',
    },
  };
}

// Righe della tabella analisi, con eventuale link interno alla scheda parametro.
const ANALYSIS_ROWS: Array<{
  key: keyof MineralWaterAnalysis;
  label: string;
  unit: string;
  href?: string;
}> = [
  { key: 'residuoFisso', label: 'Residuo fisso a 180 °C', unit: 'mg/L' },
  { key: 'ph', label: 'pH', unit: '', href: '/parametri/ph' },
  { key: 'conducibilita', label: 'Conducibilità a 20 °C', unit: 'µS/cm', href: '/parametri/conducibilita' },
  { key: 'durezza', label: 'Durezza', unit: '°F', href: '/parametri/durezza-totale' },
  { key: 'bicarbonato', label: 'Bicarbonati (HCO₃⁻)', unit: 'mg/L' },
  { key: 'calcio', label: 'Calcio (Ca²⁺)', unit: 'mg/L', href: '/parametri/durezza-totale' },
  { key: 'magnesio', label: 'Magnesio (Mg²⁺)', unit: 'mg/L', href: '/parametri/durezza-totale' },
  { key: 'sodio', label: 'Sodio (Na⁺)', unit: 'mg/L', href: '/parametri/sodio' },
  { key: 'potassio', label: 'Potassio (K⁺)', unit: 'mg/L' },
  { key: 'solfati', label: 'Solfati (SO₄²⁻)', unit: 'mg/L', href: '/parametri/solfati' },
  { key: 'cloruri', label: 'Cloruri (Cl⁻)', unit: 'mg/L', href: '/parametri/cloruri' },
  { key: 'nitrati', label: 'Nitrati (NO₃⁻)', unit: 'mg/L', href: '/parametri/nitrati' },
  { key: 'fluoruri', label: 'Fluoruri (F⁻)', unit: 'mg/L', href: '/parametri/fluoruri' },
  { key: 'silice', label: 'Silice (SiO₂)', unit: 'mg/L' },
];

function fmt(v: number | null): string {
  if (v === null) return '—';
  // Numeri italiani: virgola decimale, niente zeri superflui.
  return v.toLocaleString('it-IT', { maximumFractionDigits: 2 });
}

// Posizione dell'acqua sulla scala del residuo fisso (0–1600 mg/L clampato).
function residuePosition(residuo: number | null): number | null {
  if (residuo === null) return null;
  const clamped = Math.min(Math.max(residuo, 0), 1600);
  return Math.round((clamped / 1600) * 100);
}

export default async function MineralWaterPage({ params }: PageProps) {
  const { slug } = await params;
  const w = getWaterBySlug(slug);
  if (!w) notFound();

  const url = `https://goccia.org/acque-minerali/${w.slug}`;
  const cls = classificationInfo(w.classification);
  const mentions = derivedMentions(w.analysis);
  const related: MineralWater[] = w.relatedIds
    .map((id) => MINERAL_WATERS.find((x) => x.id === id))
    .filter((x): x is MineralWater => Boolean(x));
  const pos = residuePosition(w.analysis.residuoFisso);

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: `${w.brand}: residuo fisso e analisi in etichetta`,
          description: w.metaDescription,
          url,
          datePublished: '2026-07-03',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Acque minerali', url: 'https://goccia.org/acque-minerali' },
          { name: w.brand, url },
        ])}
      />
      {w.faqs.length > 0 ? (
        <JsonLd data={faqJsonLd(w.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      ) : null}
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/acque-minerali" className="hover:text-slate-200">
          Acque minerali
        </Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{w.brand}</span>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
            {cls.label}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {TYPE_LABEL[w.type]}
          </span>
        </div>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{w.brand}</span>
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          {w.sorgente} · {w.comune} ({w.provincia}), {w.regione}
          {w.altitudine ? ` · sorgente a ${w.altitudine} m s.l.m.` : ''}
        </p>
        <p className="mt-4 text-lg text-slate-300">{w.intro}</p>
      </header>

      {/* Residuo fisso in evidenza */}
      {w.analysis.residuoFisso !== null ? (
        <aside className="glass mb-8 rounded-2xl p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Residuo fisso a 180 °C
            </p>
            <p className="font-display text-3xl font-semibold text-slate-100">
              {fmt(w.analysis.residuoFisso)}{' '}
              <span className="text-base font-normal text-slate-400">mg/L</span>
            </p>
          </div>
          {pos !== null ? (
            <div className="mt-4">
              <div className="relative h-2 w-full rounded-full bg-gradient-to-r from-emerald-400/60 via-sky-400/60 to-violet-500/70">
                <div
                  className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-slate-900 shadow"
                  style={{ left: `${pos}%` }}
                  aria-hidden
                />
              </div>
              <div className="mt-1.5 flex justify-between text-[11px] text-slate-500">
                <span>0 · leggerissima</span>
                <span>500</span>
                <span>1500+ · ricca di sali</span>
              </div>
            </div>
          ) : null}
          <p className="mt-3 text-sm text-slate-400">{cls.short}</p>
        </aside>
      ) : null}

      {/* Tabella analisi completa */}
      <section aria-labelledby="analisi" className="mb-10">
        <h2 id="analisi" className="font-display text-2xl font-semibold text-slate-100">
          L’analisi in etichetta
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Valori dell’analisi chimico-fisica dichiarata dal produttore
          {w.analysisRef ? ` (rif. ${w.analysisRef})` : ''}. Le voci sottolineate
          rimandano alla scheda del parametro.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[22rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-slate-400">
                <th className="py-2 pr-4 font-medium">Parametro</th>
                <th className="py-2 pr-4 text-right font-medium">Valore</th>
                <th className="py-2 font-medium">Unità</th>
              </tr>
            </thead>
            <tbody>
              {ANALYSIS_ROWS.map((row) => {
                const value = w.analysis[row.key];
                if (value === null) return null;
                return (
                  <tr key={row.key} className="border-b border-white/5">
                    <td className="py-2 pr-4 text-slate-200">
                      {row.href ? (
                        <Link
                          href={row.href}
                          className="underline decoration-slate-600 underline-offset-2 hover:decoration-sky-400 hover:text-white"
                        >
                          {row.label}
                        </Link>
                      ) : (
                        row.label
                      )}
                    </td>
                    <td className="py-2 pr-4 text-right font-display text-slate-100">
                      {fmt(value)}
                    </td>
                    <td className="py-2 text-slate-400">{row.unit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Menzioni consentite in etichetta */}
      {mentions.length > 0 ? (
        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Cosa può dichiarare l’etichetta
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            In base ai valori dell’analisi, la normativa (DM 10 febbraio 2015)
            consente a questa acqua le seguenti menzioni:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {mentions.map((m) => (
              <li
                key={m.label}
                className="glass rounded-xl px-3 py-2 text-sm text-slate-200"
                title={m.rule}
              >
                {m.label}
                <span className="ml-1.5 text-xs text-slate-500">({m.rule})</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Sezioni editoriali */}
      <article className="space-y-10">
        {w.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4 text-slate-300">
              {section.paragraphs.map((p, pi) => (
                <p key={pi}>{renderText(p)}</p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="list-disc space-y-1.5 pl-5">
                  {section.bullets.map((b, bi) => (
                    <li key={bi}>{renderText(b)}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </article>

      {/* A chi è adatta / attenzioni */}
      {(w.bestFor.length > 0 || w.cautions.length > 0) && (
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          {w.bestFor.length > 0 ? (
            <div className="glass rounded-2xl p-5">
              <h3 className="font-display text-base font-semibold text-emerald-200">
                Indicata per
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {w.bestFor.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="text-emerald-300">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {w.cautions.length > 0 ? (
            <div className="glass rounded-2xl p-5">
              <h3 className="font-display text-base font-semibold text-amber-200">
                Da tenere presente
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {w.cautions.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="text-amber-300">
                      !
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      )}

      <div className="mt-10">
        <LeadCTA
          variant="completa"
          tone="prominent"
          context={`Bevi soprattutto acqua del rubinetto e vuoi sapere come si colloca rispetto a ${w.brand}? Analizzala con un laboratorio qualificato che utilizza metodi validati conformi alle norme tecniche:`}
        />
      </div>

      {/* FAQ */}
      {w.faqs.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Domande frequenti su {w.brand}
          </h2>
          <dl className="mt-5 space-y-5">
            {w.faqs.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <dt className="font-display text-base font-semibold text-slate-100">
                  {f.q}
                </dt>
                <dd className="mt-2 text-sm text-slate-300">{renderText(f.a)}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {/* Acque correlate */}
      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-slate-100">
            Da confrontare con
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/acque-minerali/${r.slug}`}
                  className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                    {r.brand}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Residuo fisso {fmt(r.analysis.residuoFisso)} mg/L ·{' '}
                    {classificationInfo(r.classification).label.toLowerCase()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-12">
        <SponsorBanner />
      </div>

      {/* Nota metodologica / disclaimer */}
      <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-slate-400">
        <p>
          I valori riportati provengono dall’analisi chimico-fisica pubblicata
          dal produttore sull’etichetta di {w.brand}, dato reso obbligatorio dal
          D.Lgs. 176/2011. L’analisi di un’acqua minerale è stabile nel tempo
          perché la sorgente è protetta, ma può essere aggiornata: fa sempre fede
          l’etichetta della bottiglia. Questa scheda ha finalità informative e non
          costituisce parere medico. Per scegliere in base a esigenze cliniche
          (dieta iposodica, calcoli renali, alimentazione dei lattanti) senti il
          medico o il pediatra.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-6">
        <p className="text-sm text-slate-300">
          Curioso di sapere come si comporta l’acqua che esce dal tuo rubinetto
          rispetto a {w.brand}? Confronta i due mondi nella guida{' '}
          <Link
            href="/rubinetto-vs-minerale"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            acqua del rubinetto vs minerale
          </Link>{' '}
          e calcola il{' '}
          <Link
            href="/"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            punteggio della tua acqua del rubinetto
          </Link>{' '}
          con GoccIA.
        </p>
      </section>
    </main>
  );
}
