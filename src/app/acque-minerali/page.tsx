import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MINERAL_WATERS,
  CLASSIFICATIONS,
  classificationInfo,
} from '@/lib/mineral-waters';
import { MineralWaterTable } from '@/components/mineral-water-table';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Residuo fisso delle acque minerali: tabella e schede delle marche italiane',
  description:
    "L'enciclopedia delle acque minerali italiane: residuo fisso, sodio, calcio e pH a confronto, con la scheda analisi di ogni marca. Dati dell'etichetta, spiegati in modo chiaro.",
  keywords: [
    'residuo fisso acque minerali',
    'tabella residuo fisso',
    'acque minerali a confronto',
    'classificazione acque minerali',
    'acqua con meno residuo fisso',
    'analisi acque minerali',
  ],
  alternates: { canonical: 'https://goccia.org/acque-minerali' },
};

const INDEX_FAQS = [
  {
    q: "Cos'è il residuo fisso di un'acqua minerale?",
    a: "È la quantità di sali minerali disciolti che resta quando si fa evaporare un litro d'acqua a 180 °C, espressa in mg/L. Più è basso, più l'acqua è «leggera»; più è alto, più è ricca di minerali. È il parametro con cui la legge classifica le acque minerali.",
  },
  {
    q: 'Qual è la migliore acqua per residuo fisso?',
    a: "Non esiste un'acqua «migliore» in assoluto: dipende dall'uso. Per un consumo quotidiano e per i bambini si preferiscono acque leggere (residuo basso e pochi nitrati); per aumentare l'apporto di calcio o magnesio possono servire acque più mineralizzate. La cosa importante è leggere l'etichetta.",
  },
  {
    q: "Un residuo fisso basso significa acqua più pura o più sana?",
    a: "No. «Leggera» non vuol dire «più sana»: tutte le acque minerali in commercio sono sicure. Un residuo basso apporta meno minerali (che comunque prendi dagli alimenti) e lascia meno calcare; un residuo più alto porta minerali utili come calcio e magnesio. Sono profili diversi, non migliori o peggiori.",
  },
  {
    q: "Come faccio a sapere il residuo fisso dell'acqua del rubinetto?",
    a: "Lo trovi nelle analisi pubblicate dal gestore idrico o, in modo approssimato, dalla conducibilità. Se hai un referto di analisi puoi usare lo strumento gratuito di GoccIA per valutare la tua acqua del rubinetto.",
  },
];

export default function AcqueMineraliIndexPage() {
  const byClass = CLASSIFICATIONS.map((c) => ({
    info: c,
    items: MINERAL_WATERS.filter((w) => w.classification === c.key),
  }));

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Acque minerali', url: 'https://goccia.org/acque-minerali' },
        ])}
      />
      <JsonLd data={faqJsonLd(INDEX_FAQS)} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Enciclopedia delle acque
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Residuo fisso e analisi</span>
          <br />
          delle acque minerali italiane
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          «Qual è il residuo fisso di questa acqua?» è una delle domande più
          frequenti davanti allo scaffale. Qui trovi la risposta per{' '}
          {MINERAL_WATERS.length} tra le marche più diffuse in Italia, con la{' '}
          <strong>scheda dell&apos;analisi in etichetta</strong> di ognuna e una
          tabella per confrontarle. Nessuna classifica di «migliori» e
          «peggiori»: solo i numeri, spiegati in modo che tu possa scegliere in
          base a ciò che ti serve.
        </p>
      </header>

      {/* Cos'è il residuo fisso */}
      <section className="glass mb-10 rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Cos&apos;è il residuo fisso, in due righe
        </h2>
        <div className="mt-3 space-y-3 text-slate-300">
          <p>
            Il <strong>residuo fisso</strong> è ciò che rimane quando fai
            evaporare un litro d&apos;acqua a 180 °C: i sali minerali disciolti,
            misurati in milligrammi per litro (mg/L). È il parametro con cui la
            legge italiana (D.Lgs. 176/2011) divide le acque minerali in quattro
            famiglie. Più il valore è basso, più l&apos;acqua è «leggera»; più è
            alto, più è ricca di minerali come calcio, magnesio e bicarbonati.
          </p>
          <p>
            È strettamente legato alla{' '}
            <Link
              href="/parametri/conducibilita"
              className="font-semibold text-sky-300 underline-offset-2 hover:underline"
            >
              conducibilità elettrica
            </Link>
            : entrambi misurano, da angolazioni diverse, quanti sali ci sono
            nell&apos;acqua. Non dice però <em>quali</em> sali: due acque con lo
            stesso residuo possono avere gusto e usi molto diversi a seconda che
            prevalga il calcio, il sodio o i solfati.
          </p>
        </div>
      </section>

      {/* Le quattro classi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Le quattro categorie per legge
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {CLASSIFICATIONS.map((c) => (
            <li key={c.key} className="glass rounded-2xl p-5">
              <p className="font-display text-base font-semibold text-slate-100">
                {c.label}
              </p>
              <p className="mt-0.5 text-sm text-violet-200">{c.range}</p>
              <p className="mt-2 text-sm text-slate-400">{c.short}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Tabella comparativa */}
      <section className="mb-14">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Le acque minerali a confronto
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-slate-400">
          Tocca un&apos;intestazione per ordinare la tabella: per residuo fisso,
          per sodio (utile per le diete iposodiche), per calcio o magnesio (per
          chi vuole integrarli) o per pH. Clicca sul nome per aprire la scheda
          completa con tutti i valori dell&apos;etichetta.
        </p>
        <div className="glass mt-5 rounded-2xl p-4 sm:p-5">
          <MineralWaterTable waters={MINERAL_WATERS} />
        </div>
      </section>

      {/* Elenco per categoria */}
      <section className="space-y-10">
        {byClass.map(({ info, items }) =>
          items.length === 0 ? null : (
            <div key={info.key} aria-labelledby={`cls-${info.key}`}>
              <h2
                id={`cls-${info.key}`}
                className="font-display text-xl font-semibold text-slate-100"
              >
                {info.label}
                <span className="ml-2 text-sm font-normal text-slate-500">
                  {info.range}
                </span>
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {items.map((w) => (
                  <li key={w.id}>
                    <Link
                      href={`/acque-minerali/${w.slug}`}
                      className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                          {w.brand}
                        </p>
                        <p className="shrink-0 font-display text-sm text-violet-200">
                          {w.analysis.residuoFisso ?? '—'}{' '}
                          <span className="text-xs text-slate-500">mg/L</span>
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                        {w.tagline}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </section>

      <div className="mt-12">
        <SponsorBanner />
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Domande frequenti sul residuo fisso
        </h2>
        <dl className="mt-5 space-y-5">
          {INDEX_FAQS.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">
                {f.q}
              </dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <LeadCTA
        variant="completa"
        tone="prominent"
        context="Bevi soprattutto acqua del rubinetto e vuoi sapere come si colloca rispetto alle minerali in bottiglia? Analizzala con un laboratorio qualificato che utilizza metodi validati conformi alle norme tecniche:"
      />

      <section className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-6">
        <p className="text-sm text-slate-300">
          Ti interessa il confronto tra acqua in bottiglia e acqua di casa?
          Leggi la guida{' '}
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
          con GoccIA — gratuito e anonimo.
        </p>
      </section>
    </main>
  );
}
