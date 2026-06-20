import type { Metadata } from 'next';
import JsonLd, {
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from '@/components/json-ld';
import { LeadCTA } from '@/components/lead-cta';

export const metadata: Metadata = {
  title: "Quanto costa un'analisi dell'acqua del rubinetto? Prezzi 2026 | GoccIA",
  description:
    "Prezzi indicativi per analisi dell'acqua del rubinetto: strisce reattive, kit casalinghi e laboratorio qualificato (chimico-fisico, microbiologico, metalli, PFAS, completa).",
  alternates: {
    canonical: 'https://goccia.org/quanto-costa-analisi-acqua',
  },
};

const FAQ = [
  {
    q: 'Posso detrarre il costo dell\'analisi dell\'acqua?',
    a: "In genere no per il singolo cittadino. In contesti professionali (amministratori condominiali, attività di ristorazione, B&B, asili) il costo è deducibile come spesa per sicurezza sanitaria o per autocontrollo HACCP. Verifica sempre con il tuo commercialista la riconducibilità nel tuo caso specifico.",
  },
  {
    q: "Il gestore idrico paga l'analisi della mia casa?",
    a: "No. Il gestore è responsabile della qualità dell'acqua fino al punto di consegna (di norma il contatore). A valle, sull'impianto privato del condominio o della singola abitazione, l'eventuale analisi è a carico del proprietario o dell'amministratore.",
  },
  {
    q: 'Quanto dura il referto di analisi dell\'acqua?',
    a: "Non c'è una scadenza legale unica. Per usi di autocontrollo si considera un orizzonte di 12 mesi. Per la microbiologia il dato è più volatile (cambia in giorni o settimane). Per parametri chimici stabili (metalli, durezza) il valore resta indicativo per uno o due anni in assenza di modifiche all'impianto.",
  },
  {
    q: 'Devo prendere il campione da un rubinetto specifico?',
    a: "Sì, e la scelta cambia il risultato. Per analisi microbiologica si usa di solito il rubinetto della cucina dopo flambaggio o disinfezione esterna. Per metalli rilasciati dall'impianto interno (es. piombo) si prendono campioni 'first flush' senza far scorrere l'acqua. Un laboratorio serio fornisce istruzioni precise o invia un campionatore.",
  },
  {
    q: 'Quanto tempo ci vuole per avere i risultati?',
    a: "Per la microbiologia tipicamente 3–5 giorni lavorativi (servono tempi di incubazione). Per chimica di base 5–10 giorni. Per metalli pesanti e PFAS i tempi sono simili o leggermente superiori in funzione della coda di campioni in laboratorio. Tempi più brevi sono possibili in regime di urgenza.",
  },
  {
    q: 'Le analisi sono valide in caso di controversia legale?',
    a: "Sì, se eseguite da un laboratorio qualificato con metodi validati e con una corretta catena di custodia del campione. Il rapporto di prova firmato dal responsabile tecnico è il documento ufficiale di riferimento in caso di contestazione al gestore o di causa civile.",
  },
];

export default function QuantoCostaAnalisiAcquaPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline:
            "Quanto costa un'analisi dell'acqua del rubinetto? Tipologie e prezzi indicativi",
          description:
            "Prezzi indicativi per le diverse tipologie di analisi dell'acqua del rubinetto: dalle strisce reattive ai pannelli completi di laboratorio qualificato.",
          url: 'https://goccia.org/quanto-costa-analisi-acqua',
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          {
            name: "Quanto costa un'analisi dell'acqua",
            url: 'https://goccia.org/quanto-costa-analisi-acqua',
          },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Guida ai prezzi
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">
            Quanto costa un'analisi dell'acqua del rubinetto? Tipologie e
            prezzi indicativi
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Il costo di un'analisi dell'acqua del rubinetto varia da pochi euro
          per una striscia reattiva a qualche centinaio per un pannello
          completo di laboratorio. Le cifre seguenti sono indicative del
          mercato italiano e variano per laboratorio e regione.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">Strisce reattive</h2>
        <p className="mt-2 text-sm uppercase tracking-wider text-emerald-300">
          5–20 €
        </p>
        <p className="mt-3 text-slate-300">
          Confezioni acquistabili in farmacia, negozi di acquariologia o
          online. Tipicamente coprono pH, durezza totale, cloro libero,
          talvolta nitrati e nitriti. Il colore si confronta con una scala
          stampata sulla confezione: la lettura è qualitativa o
          semiquantitativa. Sono uno screening rapido, non un'analisi
          strumentale.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">Kit casalinghi</h2>
        <p className="mt-2 text-sm uppercase tracking-wider text-emerald-300">
          30–80 €
        </p>
        <p className="mt-3 text-slate-300">
          Kit più strutturati con reagenti colorimetrici per qualche
          parametro chimico-fisico (pH, durezza, cloro, ferro, nitrati) e in
          alcuni casi per uno-due metalli (rame, piombo come stima). Migliori
          delle strisce, ma non producono un rapporto di prova ufficiale e
          non quantificano in modo affidabile metalli in tracce o
          microbiologia.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Analisi di laboratorio qualificato
        </h2>
        <p className="mt-2 text-sm uppercase tracking-wider text-emerald-300">
          80–400 € secondo pannello
        </p>
        <p className="mt-3 text-slate-300">
          Un laboratorio qualificato utilizza strumenti come ICP-MS,
          cromatografia ionica e GC-MS con metodi validati conformi alle
          norme tecniche di riferimento. Il rapporto di prova è il documento
          ufficiale, firmato dal responsabile tecnico. Cifre indicative:
        </p>
        <div className="glass mt-5 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-white/10 text-slate-300">
              <tr>
                <th scope="col" className="px-3 py-3 font-semibold">
                  Pannello
                </th>
                <th scope="col" className="px-3 py-3 font-semibold">
                  Prezzo indicativo
                </th>
                <th scope="col" className="px-3 py-3 font-semibold">
                  Cosa include tipicamente
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              <tr>
                <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                  Chimico-fisico base
                </th>
                <td className="px-3 py-3">70–130 €</td>
                <td className="px-3 py-3">
                  pH, conducibilità, durezza, nitrati, sodio, cloruri,
                  solfati, ammonio
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                  Microbiologico
                </th>
                <td className="px-3 py-3">60–100 €</td>
                <td className="px-3 py-3">
                  E. coli, coliformi totali, enterococchi, carica batterica
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                  Metalli pesanti
                </th>
                <td className="px-3 py-3">100–200 €</td>
                <td className="px-3 py-3">
                  Piombo, arsenico, cadmio, nichel, rame, cromo, ferro,
                  manganese
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                  PFAS
                </th>
                <td className="px-3 py-3">150–300 €</td>
                <td className="px-3 py-3">
                  Somma 20 PFAS secondo D.Lgs. 18/2023 (analisi specialistica)
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                  Pannello completo periodico
                </th>
                <td className="px-3 py-3">250–400 €</td>
                <td className="px-3 py-3">
                  Chimico-fisico + microbiologico + metalli principali
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Le cifre sono indicative e possono variare in funzione del
          laboratorio, della regione, dell'urgenza e dell'inclusione del
          campionamento on-site.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Cosa include un'analisi di laboratorio seria
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Kit di prelievo</strong> dedicato (contenitori sterili
            per microbiologia, bottiglie con conservante per metalli e PFAS).
          </li>
          <li>
            <strong>Istruzioni di campionamento</strong> chiare o
            campionamento eseguito da personale tecnico.
          </li>
          <li>
            <strong>Catena di custodia</strong> tracciata dal prelievo
            all'esecuzione analitica.
          </li>
          <li>
            <strong>Metodi strumentali validati</strong> conformi alle norme
            tecniche di riferimento (es. UNI EN, ISO, EPA).
          </li>
          <li>
            <strong>Rapporto di prova</strong> con valori, limiti di
            confronto e firma del responsabile tecnico.
          </li>
          <li>
            <strong>Supporto interpretativo</strong> per leggere i risultati
            e capire eventuali azioni successive.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Vale la pena fare l'analisi se l'acqua è già controllata dal
          gestore?
        </h2>
        <p className="mt-3 text-slate-300">
          I controlli del gestore riguardano la rete fino al punto di
          consegna (di norma il contatore). A valle, sull'impianto privato,
          l'acqua può modificarsi per rilascio di metalli dalle tubazioni,
          contaminazioni puntuali o stagnazione. È utile analizzare l'acqua
          quando:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            l'edificio ha tubazioni datate (in particolare anteriori al
            1980, possibili tracce di piombo);
          </li>
          <li>
            la zona è in area con storico superamenti di nitrati, arsenico o
            PFAS;
          </li>
          <li>
            in casa c'è un neonato e si prepara latte in formula;
          </li>
          <li>
            si avverte gusto, odore o colore anomalo persistente;
          </li>
          <li>
            si sospetta una contaminazione puntuale (es. dopo lavori
            sull'impianto).
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Come scegliere il pannello adatto
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Neonato in casa</strong>: pannello microbiologico +
            nitrati + arsenico è la combinazione minima sensata.
          </li>
          <li>
            <strong>Edificio antecedente al 1980</strong>: aggiungi un
            pannello metalli pesanti, con focus su piombo (campionamento
            first flush) e nichel.
          </li>
          <li>
            <strong>Area del Veneto, della Lombardia o del Piemonte con
            storico PFAS</strong>: considera il pannello PFAS specifico.
          </li>
          <li>
            <strong>Pozzo privato</strong>: serve sempre un pannello
            completo, perché non c'è un controllo pubblico a monte.
          </li>
          <li>
            <strong>Dubbio generico sulla qualità</strong>: pannello
            chimico-fisico base + microbiologico è un buon punto di partenza.
          </li>
        </ul>
      </section>

      <LeadCTA
        variant="laboratorio"
        tone="prominent"
        context="Per richiedere un'analisi dell'acqua del rubinetto con un laboratorio qualificato che usa metodi validati conformi alle norme tecniche, con kit di prelievo a domicilio e refertazione firmata:"
      />

      <section className="glass mt-10 rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {FAQ.map((item) => (
            <div key={item.q}>
              <dt className="font-semibold text-slate-100">{item.q}</dt>
              <dd className="mt-1 text-slate-300">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
