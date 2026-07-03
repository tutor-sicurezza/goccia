import type { Metadata } from 'next';
import Link from 'next/link';
import { CITY_GUIDES } from '@/lib/city-guides';
import {
  CONFIDENCE_LABEL,
  OFFICIAL_SOURCES,
  type OfficialSource,
} from '@/lib/official-sources';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Analisi ufficiali dell\'acqua del tuo comune: dove trovarle | GoccIA',
  description:
    'Dove ogni gestore idrico italiano pubblica le analisi ufficiali dell\'acqua potabile, città per città: link diretti, come leggere i valori e come trasformarli in un punteggio 1–99.',
  alternates: { canonical: 'https://goccia.org/analisi-ufficiali' },
  keywords: [
    'analisi acqua comune',
    'analisi acqua rubinetto gestore',
    'qualità acqua comune',
    'valori medi acqua potabile',
    'analisi acquedotto',
  ],
};

const FAQS = [
  {
    q: 'Chi pubblica le analisi ufficiali dell\'acqua del rubinetto?',
    a: 'Il gestore del servizio idrico integrato del tuo comune, che per legge (D.Lgs. 18/2023) esegue autocontrolli lungo tutta la filiera, e la ASL/ATS che effettua i controlli ufficiali. La maggior parte dei gestori pubblica sul proprio sito i valori medi per comune o per zona.',
  },
  {
    q: 'Ogni quanto vengono aggiornati i dati?',
    a: 'Dipende dal gestore: alcuni aggiornano i valori medi ogni anno, altri ogni semestre, altri ancora pubblicano dati settimanali (come ABC Napoli). Le pagine linkate qui riportano sempre il periodo di riferimento.',
  },
  {
    q: 'I valori del gestore valgono anche per il mio rubinetto?',
    a: 'Valgono per l\'acqua distribuita nella rete pubblica. Tra il contatore e il tuo rubinetto l\'acqua attraversa l\'impianto interno dell\'edificio: in palazzi datati (tubazioni in piombo, serbatoi condominiali) i valori al rubinetto possono differire. Per esserne certi serve un\'analisi sul punto d\'uso.',
  },
  {
    q: 'Come trasformo i valori del gestore in un punteggio?',
    a: 'Apri la pagina del tuo gestore, cerca la tabella dei valori medi (durezza, nitrati, pH, cloruri…) e inseriscili in GoccIA: ottieni un punteggio 1–99 deterministico con il dettaglio parametro per parametro, che puoi salvare nello storico e confrontare nel tempo.',
  },
  {
    q: 'Il link del mio gestore non funziona: cosa faccio?',
    a: 'I siti dei gestori cambiano spesso struttura. Cerca sul web "qualità acqua" seguito dal nome del gestore o del tuo comune, oppure guarda nella bolletta: il sito del gestore è sempre indicato. Se il gestore non pubblica nulla, puoi chiedere i dati alla ASL o fare un\'analisi privata.',
  },
];

function howToJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Come vedere le analisi ufficiali dell\'acqua del tuo comune',
    description:
      'Procedura per trovare i valori medi pubblicati dal gestore idrico del proprio comune e trasformarli in un punteggio comprensibile.',
    inLanguage: 'it-IT',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Trova il tuo gestore',
        text: 'Individua il gestore del servizio idrico del tuo comune nell\'elenco qui sotto (o sulla bolletta dell\'acqua).',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Apri la pagina delle analisi',
        text: 'Segui il link alla pagina ufficiale dove il gestore pubblica i valori medi per comune o zona.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Trasforma i valori in punteggio',
        text: 'Inserisci i valori in GoccIA per ottenere un punteggio 1–99 e capire subito come si colloca la tua acqua.',
        url: 'https://goccia.org/',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Tieni lo storico',
        text: 'Salva il risultato nello storico del browser e confrontalo con le analisi passate e future.',
        url: 'https://goccia.org/storico',
      },
    ],
  };
}

interface SourceWithCity extends OfficialSource {
  cityName: string;
  region: string;
}

const CONFIDENCE_PILL: Record<OfficialSource['confidence'], string> = {
  alta: 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30',
  media: 'bg-amber-400/15 text-amber-200 ring-1 ring-amber-400/30',
  bassa: 'bg-white/5 text-slate-400 ring-1 ring-white/10',
};

export default function OfficialSourcesPage() {
  const withCity: SourceWithCity[] = OFFICIAL_SOURCES.flatMap((s) => {
    const guide = CITY_GUIDES.find((g) => g.slug === s.citySlug);
    return guide ? [{ ...s, cityName: guide.cityName, region: guide.region }] : [];
  });

  const byRegion = withCity.reduce<Record<string, SourceWithCity[]>>((acc, s) => {
    (acc[s.region] ??= []).push(s);
    return acc;
  }, {});
  const regions = Object.keys(byRegion).sort();

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Analisi ufficiali', url: 'https://goccia.org/analisi-ufficiali' },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd data={howToJsonLd()} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Città per città
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Le analisi ufficiali dell&apos;acqua del tuo comune</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Ogni gestore idrico italiano è tenuto a controllare l&apos;acqua che
          distribuisce e quasi tutti pubblicano online i <strong>valori medi
          per comune</strong>. Qui trovi il link diretto alla fonte ufficiale
          della tua città: apri la pagina del gestore, leggi i valori e — se
          vuoi capirli al volo — trasformali in un punteggio 1–99 con GoccIA.
        </p>
      </header>

      {/* COME FUNZIONA */}
      <section className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-4">
        {[
          { n: '1', t: 'Trova il gestore', d: 'Cerca la tua città qui sotto o guarda la bolletta.' },
          { n: '2', t: 'Apri le analisi', d: 'Vai alla pagina ufficiale con i valori medi del tuo comune.' },
          { n: '3', t: 'Calcola il punteggio', d: 'Inserisci i valori in GoccIA: punteggio 1–99 immediato.' },
          { n: '4', t: 'Tieni lo storico', d: 'Salva e confronta le analisi nel tempo, anche quelle passate.' },
        ].map((s) => (
          <div key={s.n} className="glass rounded-2xl p-4">
            <p className="font-display text-2xl font-semibold text-sky-300">{s.n}</p>
            <p className="mt-1 font-display text-sm font-semibold text-slate-100">{s.t}</p>
            <p className="mt-1 text-xs text-slate-400">{s.d}</p>
          </div>
        ))}
      </section>

      <div className="space-y-10">
        {regions.map((region) => (
          <section key={region}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">{region}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {byRegion[region]
                .sort((a, b) => a.cityName.localeCompare(b.cityName))
                .map((s) => (
                  <li key={s.citySlug} className="glass flex flex-col rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-slate-100">
                          {s.cityName}
                        </h3>
                        <p className="mt-0.5 text-xs uppercase tracking-wide text-slate-400">
                          {s.utility}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${CONFIDENCE_PILL[s.confidence]}`}
                      >
                        {CONFIDENCE_LABEL[s.confidence]}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm text-slate-300">{s.note}</p>
                    {s.pathHint ? (
                      <p className="mt-2 text-xs text-slate-400">
                        <span className="text-slate-300">Dove guardare:</span> {s.pathHint}
                      </p>
                    ) : null}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <a
                        href={s.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200 transition hover:border-sky-400/60 hover:bg-sky-400/20"
                      >
                        Analisi ufficiali ↗
                      </a>
                      {s.regionalPortal ? (
                        <a
                          href={s.regionalPortal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10"
                        >
                          {s.regionalPortal.name} ↗
                        </a>
                      ) : null}
                      <Link
                        href={`/acqua-di-${s.citySlug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10"
                      >
                        Guida all&apos;acqua di {s.cityName}
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>

      {/* NOTA METODOLOGICA */}
      <section className="mt-12 glass rounded-2xl p-5">
        <p className="text-xs leading-relaxed text-slate-400">
          <span className="font-medium text-slate-200">Nota:</span> i link sono
          stati individuati a luglio 2026 su fonti pubbliche (siti dei gestori,
          comuni, stampa locale) e portano sempre a siti esterni gestiti dai
          rispettivi titolari. I siti dei gestori cambiano spesso: se un link
          non funziona, cerca &quot;qualità acqua&quot; + il nome del gestore. Il referto
          pubblicato dal gestore è l&apos;unico documento ufficiale; GoccIA non
          ripubblica quei valori, ti aiuta a trovarli e a interpretarli.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Domande frequenti
        </h2>
        <dl className="mt-5 space-y-5">
          {FAQS.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-6">
        <p className="text-sm text-slate-300">
          Hai trovato i valori del tuo comune?{' '}
          <Link href="/" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
            Trasformali in un punteggio 1–99
          </Link>{' '}
          e poi{' '}
          <Link href="/storico" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
            segui il trend nel tuo storico
          </Link>
          . Per capire i singoli parametri c&apos;è la{' '}
          <Link
            href="/come-leggere-referto-acqua"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            guida alla lettura del referto
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
