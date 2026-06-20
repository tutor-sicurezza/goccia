import type { Metadata } from 'next';
import { PARAMETER_CONFIGS } from '@aquascore/index';
import type { SubscoreKey } from '@aquascore/index';
import { formatRange, prettyParameterName } from '@/lib/format';
import JsonLd, { howToJsonLd, articleJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Come funziona GoccIA — l'algoritmo del punteggio",
  description:
    "Spiegazione passo-passo dell'algoritmo deterministico GoccIA: dal riconoscimento dei parametri al punteggio finale 1–99 ponderato su salute, estetica e impianti.",
};

const SUBSCORE_LABEL: Record<SubscoreKey, string> = {
  health: 'Salute',
  aesthetic: 'Estetica',
  pipe: 'Impianti',
};

function dominantSubscore(weights: Record<SubscoreKey, number>): string {
  const entries = (Object.entries(weights) as [SubscoreKey, number][]).sort(
    (a, b) => b[1] - a[1],
  );
  const [topKey, topVal] = entries[0];
  if (topVal === 0) return '—';
  // detect ties
  const tied = entries.filter(([, v]) => v === topVal).map(([k]) => SUBSCORE_LABEL[k]);
  return tied.join(' · ');
}

export default function ComeFunzionaPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={howToJsonLd()} />
      <JsonLd
        data={articleJsonLd({
          headline: "Come funziona GoccIA — l'algoritmo del punteggio acqua",
          description:
            "Spiegazione dell'algoritmo deterministico GoccIA per assegnare un punteggio 1–99 all'acqua del rubinetto secondo D.Lgs. 18/2023 e linee guida WHO/EFSA.",
          url: 'https://goccia.org/come-funziona',
          datePublished: '2026-06-20',
        })}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Trasparenza algoritmica
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Come funziona GoccIA</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          GoccIA assegna un punteggio da <strong>1 a 99</strong> all'acqua del
          rubinetto a partire dai valori del tuo rapporto di prova. È un motore{' '}
          <strong>deterministico</strong>: a parità di input restituisce sempre
          lo stesso punteggio. Nessuna intelligenza artificiale interviene nel
          calcolo del numero.
        </p>
      </header>

      <section className="glass mb-10 rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">
          I 4 step dell'algoritmo
        </h2>
        <ol className="mt-6 space-y-5 text-slate-200">
          <li>
            <h3 className="font-semibold text-slate-100">
              1. Riconoscimento dei parametri
            </h3>
            <p className="mt-1 text-slate-300">
              Ogni voce del referto viene normalizzata e confrontata con una
              lista di alias (es. <em>«Conducibilità elettrica»</em>,{' '}
              <em>«Conduttività»</em> e <em>«conducibilita»</em> sono lo stesso
              parametro). I parametri non riconosciuti vengono ignorati nel
              calcolo ma elencati nel dettaglio.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-slate-100">
              2. Confronto con limiti di legge e range ideali
            </h3>
            <p className="mt-1 text-slate-300">
              Ogni valore viene confrontato con il limite del{' '}
              <strong>D.Lgs. 18/2023</strong> (attuazione della Direttiva UE
              2020/2184) e con il <strong>range ideale</strong> derivato da
              linee guida WHO ed EFSA.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-slate-100">
              3. Calcolo dei 3 subscore
            </h3>
            <p className="mt-1 text-slate-300">
              Ogni parametro contribuisce, con un peso specifico, a tre
              sotto-punteggi: <strong>Salute</strong>, <strong>Estetica</strong>{' '}
              e <strong>Impianti</strong>. Un piombo elevato pesa solo su
              Salute; un cloro residuo alto pesa solo su Estetica.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-slate-100">
              4. Punteggio finale 1–99
            </h3>
            <p className="mt-1 text-slate-300">
              I tre subscore vengono combinati con la media ponderata{' '}
              <strong>Salute 50% · Estetica 25% · Impianti 25%</strong>. Il
              risultato è un numero intero da 1 a 99 (mai 0, mai 100): nessuna
              acqua è perfetta, nessuna è ingestibile per definizione.
            </p>
          </li>
        </ol>
      </section>

      <section className="glass mb-10 rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">
          Limite di legge vs range ideale
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-slate-100">Limite di legge</h3>
            <p className="mt-2 text-slate-300">
              È il valore massimo (o minimo) tollerato dalla normativa per
              considerare l'acqua <em>conforme</em> al consumo umano. Superarlo
              significa non conformità.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-100">Range ideale</h3>
            <p className="mt-2 text-slate-300">
              È l'intervallo in cui l'acqua è <em>ottimale</em>: buona per la
              salute, gradevole al gusto e poco aggressiva per gli impianti. Un
              valore conforme può comunque non essere ideale.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          I 24 parametri valutati
        </h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Tabella completa con limite di legge, range ideale e subscore su cui
          ciascun parametro ha il peso maggiore.
        </p>
        <div className="glass mt-6 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-white/10 text-slate-300">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Parametro
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Unità
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Limite di legge
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Range ideale
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Subscore dominante
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {PARAMETER_CONFIGS.map((cfg) => (
                <tr key={cfg.id}>
                  <th scope="row" className="px-4 py-3 font-medium text-slate-100">
                    {prettyParameterName(cfg.id)}
                  </th>
                  <td className="px-4 py-3 text-slate-300">{cfg.unit}</td>
                  <td className="px-4 py-3 text-slate-300">
                    {formatRange(cfg.legal, cfg.unit)}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {formatRange(cfg.ideal, cfg.unit)}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {dominantSubscore(cfg.weights)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">
          Determinismo &amp; privacy
        </h2>
        <p className="mt-3 text-slate-300">
          Il motore di scoring è una funzione <strong>pura</strong>: nessuna
          AI nel numero, nessuna variabilità tra una sessione e l'altra. Le
          submission sono <strong>anonime</strong>: non chiediamo nome,
          cognome, telefono. L'eventuale email viene salvata solo se decidi di
          lasciarla dopo aver visto il risultato.
        </p>
      </section>
    </main>
  );
}
