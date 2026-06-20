import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, {
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from '@/components/json-ld';
import { LeadCTA } from '@/components/lead-cta';

export const metadata: Metadata = {
  title: 'Acqua del rubinetto o minerale? Confronto onesto | GoccIA',
  description:
    "Acqua del rubinetto vs acqua minerale: confronto su salute, costo, ambiente e controlli analitici. Dati verificabili e quando ha senso scegliere l'una o l'altra.",
  alternates: {
    canonical: 'https://goccia.org/rubinetto-vs-minerale',
  },
};

const FAQ = [
  {
    q: "L'acqua del rubinetto è sicura in Italia?",
    a: "L'acqua erogata dalla rete acquedottistica italiana è soggetta a controlli periodici previsti dal D.Lgs. 18/2023. Nella stragrande maggioranza dei comuni rispetta i valori di parametro per i contaminanti chimici e microbiologici. Possono esserci situazioni locali specifiche (vecchie tubazioni private, aree con superamento storico di nitrati, arsenico o PFAS) che richiedono attenzione individuale.",
  },
  {
    q: "L'acqua minerale è più sana dell'acqua del rubinetto?",
    a: "Non esiste un'evidenza generale che l'acqua minerale in bottiglia sia più salutare di una buona acqua del rubinetto conforme al D.Lgs. 18/2023. Le minerali hanno composizioni minerali specifiche utili in alcuni casi (ad esempio acque ricche di calcio per chi ha basso apporto), ma la sicurezza microbiologica del rubinetto è tipicamente alta proprio grazie alla disinfezione e ai controlli del gestore.",
  },
  {
    q: 'I filtri caraffa servono davvero?',
    a: "Le caraffe filtranti a carbone attivo riducono cloro residuo, alcuni metalli e migliorano il gusto. Non rimuovono nitrati, PFAS o microrganismi in modo affidabile. Se non manutenuti correttamente (cartucce sostituite nei tempi) possono diventare un rischio microbiologico. Sono utili per il gusto, non sono una garanzia di sicurezza.",
  },
  {
    q: "Come si può migliorare il sapore dell'acqua del rubinetto?",
    a: "Lasciare l'acqua decantare aperta per qualche minuto riduce il cloro residuo. Conservarla in frigorifero in bottiglia di vetro la rende più gradevole. Una caraffa con carbone attivo migliora ulteriormente il gusto. Una manutenzione periodica del filtro del rompigetto evita rilascio di metalli da rubinetti datati.",
  },
  {
    q: "Quando bisogna fare analizzare l'acqua del rubinetto?",
    a: "È utile far analizzare l'acqua se: vivi in un edificio con tubazioni antecedenti al 1980 (rischio piombo), risiedi in un'area con storico superamenti di nitrati, arsenico o PFAS, hai un neonato in casa, percepisci gusti o odori anomali, o hai un pozzo privato. Negli altri casi i controlli del gestore sulla rete sono di norma sufficienti.",
  },
  {
    q: 'Il calcare fa male?',
    a: "Il calcare è la manifestazione visibile del calcio e del magnesio disciolti: non ha effetti negativi documentati sulla salute alle concentrazioni tipiche dell'acqua potabile italiana. Anzi, il calcio nell'acqua contribuisce al fabbisogno giornaliero. Il problema è solo estetico e impiantistico (caldaie, lavatrici).",
  },
];

export default function RubinettoVsMineralePage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline:
            "Acqua del rubinetto o acqua minerale? Confronto onesto su salute, costo e ambiente",
          description:
            "Confronto onesto tra acqua del rubinetto e acqua minerale in bottiglia: salute, costi, controlli, impatto ambientale e casi in cui ha senso scegliere l'una o l'altra.",
          url: 'https://goccia.org/rubinetto-vs-minerale',
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          {
            name: 'Rubinetto vs Minerale',
            url: 'https://goccia.org/rubinetto-vs-minerale',
          },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Confronto
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">
            Acqua del rubinetto o acqua minerale? Confronto onesto su salute,
            costo e ambiente
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Una guida senza tifoserie. Confrontiamo le due opzioni sul piano dei
          controlli analitici, della spesa annua per una famiglia tipo,
          dell'impatto ambientale e delle situazioni in cui un'opzione è
          oggettivamente migliore dell'altra. L'obiettivo non è convincerti a
          smettere di comprare bottiglie: è darti gli elementi per decidere
          consapevolmente.
        </p>
      </header>

      <section className="glass mb-10 overflow-x-auto rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">I numeri rapidi</h2>
        <table className="mt-5 w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-white/10 text-slate-300">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold">
                Aspetto
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Acqua del rubinetto
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Acqua minerale in bottiglia
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-200">
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                Costo medio per litro
              </th>
              <td className="px-3 py-3">circa 0,001–0,005 €/L</td>
              <td className="px-3 py-3">circa 0,15–0,40 €/L</td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                Origine tipica
              </th>
              <td className="px-3 py-3">
                Acquedotto pubblico, fonti superficiali e di falda
              </td>
              <td className="px-3 py-3">
                Sorgenti sotterranee imbottigliate alla sorgente
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                Controlli analitici
              </th>
              <td className="px-3 py-3">
                Gestore idrico + autorità sanitaria (D.Lgs. 18/2023)
              </td>
              <td className="px-3 py-3">
                Produttore + autorità competenti per le minerali
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                Impatto CO₂
              </th>
              <td className="px-3 py-3">Molto basso</td>
              <td className="px-3 py-3">
                Più alto (PET, trasporto, imballaggio)
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                Imballaggio
              </th>
              <td className="px-3 py-3">Nessuno</td>
              <td className="px-3 py-3">PET o vetro, da smaltire</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Cosa beve la maggior parte degli italiani
        </h2>
        <p className="mt-3 text-slate-300">
          L'Italia è storicamente uno dei principali consumatori europei di
          acqua minerale in bottiglia pro capite, con quantità medie annue
          riportate in modo costante dalle statistiche di settore e dalle
          rilevazioni Istat. È un fatto culturale prima ancora che tecnico:
          molti scelgono la bottiglia per abitudine, gusto o sfiducia
          generalizzata nel rubinetto, anche dove i controlli del gestore
          mostrano un'acqua pienamente conforme.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          I controlli sull'acqua del rubinetto in Italia
        </h2>
        <p className="mt-3 text-slate-300">
          Il gestore idrico ha l'obbligo di rispettare il D.Lgs. 18/2023 che
          recepisce la Direttiva UE 2020/2184. I controlli interni sono
          affiancati dai controlli ufficiali dell'autorità sanitaria locale
          (ATS o ASL). Le frequenze di campionamento dipendono dal volume
          d'acqua distribuito e dalla popolazione servita, e i parametri
          analizzati spaziano da batteri indicatori (E. coli, enterococchi),
          metalli (piombo, arsenico, nichel), anioni e cationi (nitrati,
          sodio, cloruri), fino ai PFAS introdotti dalla normativa più recente.
        </p>
        <p className="mt-3 text-slate-300">
          I report annuali del gestore sono in gran parte consultabili online.
          Vale la pena cercare il proprio: troverai medie, valori massimi
          riscontrati e parametri eventualmente in deroga.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Quando l'acqua del rubinetto è effettivamente la scelta migliore
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Sostenibilità</strong>: niente PET, niente trasporto su
            gomma per centinaia di chilometri, niente rifiuti da smaltire.
          </li>
          <li>
            <strong>Costo</strong>: differenze nell'ordine di centinaia di
            euro all'anno per una famiglia di quattro persone.
          </li>
          <li>
            <strong>Freschezza</strong>: l'acqua arriva al rubinetto senza
            settimane di stoccaggio in plastica esposta alla luce.
          </li>
          <li>
            <strong>Controlli pubblici</strong>: trasparenti, periodici,
            visibili sul sito del gestore.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Quando ha senso scegliere acqua minerale o filtrata
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Lattanti</strong>: in presenza di nitrati elevati o dubbi
            microbiologici locali, alcune acque oligominerali a basso residuo
            fisso sono indicate per preparare il latte in formula.
          </li>
          <li>
            <strong>Edifici con vecchie tubazioni</strong>: in palazzi
            antecedenti agli anni Ottanta è prudente analizzare l'acqua al
            rubinetto per piombo prima di affidarsi a essa per il consumo
            quotidiano.
          </li>
          <li>
            <strong>Aree con superamenti specifici</strong>: dove le ATS
            segnalano deroghe in corso (es. arsenico in alcune zone vulcaniche
            del Lazio o PFAS in aree del Veneto in passato), conviene
            verificare il proprio caso.
          </li>
          <li>
            <strong>Gusto</strong>: se trovi sgradevole il sapore del tuo
            rubinetto, una caraffa filtrante o una minerale di profilo
            organolettico apprezzato è una scelta legittima.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Come capire se la tua acqua del rubinetto è buona
        </h2>
        <p className="mt-3 text-slate-300">
          Il primo passo è guardare il rapporto annuale del gestore (di norma
          pubblicato sul sito o nella bolletta). Il secondo è incrociare i
          valori col limite di legge. Se vuoi una stima rapida senza dover
          interpretare a mano numeri ed unità,{' '}
          <Link
            href="/"
            className="text-sky-300 underline decoration-sky-500/40 underline-offset-4 hover:text-sky-200"
          >
            calcola subito il punteggio della tua acqua
          </Link>
          : GoccIA confronta ogni parametro con D.Lgs. 18/2023 e linee guida
          WHO/EFSA e restituisce un numero da 1 a 99 in trenta secondi.
        </p>
        <LeadCTA
          variant="kit-analisi"
          tone="soft"
          context="Per una valutazione strumentale del tuo rubinetto specifico, con campionamento eseguito a regola d'arte:"
        />
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Impatto ambientale
        </h2>
        <p className="mt-3 text-slate-300">
          La produzione di una bottiglia in PET richiede materie prime fossili
          e acqua. Il trasporto su gomma di acqua imbottigliata aggiunge
          chilometri ed emissioni che un litro di rubinetto semplicemente non
          ha. Sul fine vita pesa il problema dei rifiuti: anche con tassi di
          raccolta differenziata buoni in Italia, una quota di bottiglie
          finisce dispersa nell'ambiente e contribuisce all'accumulo di
          microplastiche nei suoli e nelle acque. Scegliere il rubinetto, dove
          è di qualità, è la scelta ambientale a parità di funzione bevuta.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Costo a 5 anni per una famiglia tipo
        </h2>
        <p className="mt-3 text-slate-300">
          Quattro persone, 1,5 litri al giorno a testa, per 365 giorni e per
          cinque anni fanno circa 10.950 litri. A un prezzo medio di 0,30 €/L
          per l'acqua minerale in bottiglia parliamo di un ordine di grandezza
          di circa 3.300 € in cinque anni. A 0,003 €/L del rubinetto parliamo
          di circa 33 €. La differenza è dell'ordine di tremila euro: non sono
          cifre puntuali da prendere alla virgola, ma rendono evidente la
          scala del confronto economico.
        </p>
      </section>

      <section className="glass mb-10 rounded-2xl p-6 sm:p-8">
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

      <section className="mb-4">
        <h2 className="font-display text-2xl font-semibold">In sintesi</h2>
        <p className="mt-3 text-slate-300">
          Per la maggior parte delle famiglie italiane l'acqua del rubinetto è
          un'opzione sicura, economica e ambientalmente preferibile. L'acqua
          minerale ha senso in casi specifici (lattanti, edifici con tubazioni
          critiche, aree con superamenti noti, preferenza di gusto). La
          decisione informata passa da una verifica concreta del proprio
          rubinetto: i report del gestore raccontano la rete, un'analisi al
          punto di consumo racconta la tua casa.
        </p>
      </section>

      <LeadCTA
        variant="laboratorio"
        tone="prominent"
        context="Per analizzare l'acqua del tuo rubinetto con metodi validati conformi alle norme tecniche e ottenere un rapporto di prova firmato dal responsabile tecnico:"
      />
    </main>
  );
}
