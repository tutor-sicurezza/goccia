import type { Metadata } from 'next';
import Link from 'next/link';
import { CO2Calculator } from '@/components/co2-calculator';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/json-ld';

const PAGE_URL = 'https://goccia.org/impatto-bottiglie-plastica';
const PUBLISHED = '2026-06-20';

export const metadata: Metadata = {
  title:
    'Calcolatore impatto bottiglie di plastica vs acqua del rubinetto',
  description:
    "Quanto inquina l'acqua in bottiglia? Calcola in 30 secondi CO2, bottiglie PET e costo evitati passando all'acqua del rubinetto. Stime conservative da letteratura LCA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title:
      'Quanto inquini bevendo acqua in bottiglia? Calcolatore CO2 e costo',
    description:
      "Calcolatore interattivo: scopri quante bottiglie, kg di CO2 e € risparmi scegliendo l'acqua del rubinetto. Numeri trasparenti basati su letteratura LCA.",
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Quanto inquini con l\'acqua in bottiglia? Calcolatore impatto CO2',
    description:
      "Bottiglie, CO2, plastica e costo evitati scegliendo il rubinetto. Calcola in 30 secondi.",
  },
};

const FAQ: { q: string; a: string }[] = [
  {
    q: 'I numeri considerano il riciclo del PET?',
    a: 'Le stime utilizzate (circa 85 g di CO2 per bottiglia da 1,5 L) provengono dalla letteratura LCA disponibile e includono indicativamente produzione, trasporto medio e fine vita. Il riciclo effettivo del PET in Italia è parziale e variabile per area: per non sovrastimare il beneficio del rubinetto consideriamo un valore conservativo nella parte bassa del range tipicamente riportato (80–150 g per bottiglia).',
  },
  {
    q: "L'acqua del rubinetto contiene microplastiche?",
    a: "Studi indipendenti hanno rilevato microplastiche sia nell'acqua del rubinetto sia in quella in bottiglia, con concentrazioni in genere più elevate nelle minerali in PET a causa del rilascio dal contenitore. Le quantità sono comunque oggetto di ricerca attiva e gli effetti sanitari non sono ancora pienamente caratterizzati: ridurre la plastica monouso resta una scelta prudenziale.",
  },
  {
    q: "Conviene comprare acqua in vetro invece che in plastica?",
    a: "Il vetro elimina il rilascio di microplastiche dal contenitore, ma è molto più pesante: il trasporto può incidere di più sul bilancio CO2. Se il vetro è a rendere e la filiera è corta, il bilancio migliora; se è a perdere e percorre lunghe distanze, il vantaggio rispetto al PET si riduce. L'acqua del rubinetto resta indicativamente l'opzione a impatto più basso.",
  },
  {
    q: 'Quanto inquina un addolcitore casalingo?',
    a: "Un addolcitore a scambio ionico consuma sale e una piccola quantità di acqua durante la rigenerazione, oltre a un consumo elettrico contenuto. L'impatto annuale è generalmente molto inferiore a quello evitato sostituendo l'acqua in bottiglia, soprattutto in famiglie numerose. Va comunque dimensionato sulla durezza reale e mantenuto con regolarità.",
  },
  {
    q: 'Le caraffe filtranti sono davvero ecologiche?',
    a: 'Le caraffe filtranti riducono in parte cloro, gusto e alcune sostanze, ma richiedono cartucce in plastica da sostituire periodicamente. Sul bilancio ambientale incidono soprattutto la frequenza di sostituzione e il sistema di raccolta dei filtri esausti. Per chi ha già un\'acqua di rubinetto di buona qualità, possono essere superflue.',
  },
];

export default function Page() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={articleJsonLd({
          headline:
            'Calcolatore impatto bottiglie di plastica vs acqua del rubinetto',
          description:
            "Calcola CO2, bottiglie e costo evitati scegliendo l'acqua del rubinetto. Stime conservative da letteratura LCA.",
          url: PAGE_URL,
          datePublished: PUBLISHED,
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'GoccIA', url: 'https://goccia.org/' },
          { name: 'Impatto bottiglie di plastica', url: PAGE_URL },
        ])}
      />

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">
          Calcolatore interattivo
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Quanto inquini bevendo acqua in bottiglia?{' '}
          <span className="text-gradient">Scoprilo in 30 secondi</span>
        </h1>
        <p className="mt-5 text-base text-slate-300 sm:text-lg">
          L&apos;acqua in bottiglia è comoda, ma ha un costo ambientale ed economico
          che spesso resta invisibile. Con questo calcolatore puoi stimare, sulla
          base della tua famiglia e delle tue abitudini, quante bottiglie di PET,
          quanti kg di CO2 e quanti euro potresti risparmiare scegliendo
          l&apos;acqua del rubinetto. I numeri sono stime conservative basate su
          letteratura LCA (Life Cycle Assessment) disponibile: servono per dare un
          ordine di grandezza credibile, non per claim assoluti.
        </p>
      </header>

      <CO2Calculator />

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Da dove vengono questi numeri
        </h2>
        <p className="mt-4 text-slate-300">
          Il calcolatore usa tre ipotesi principali, scelte per restare nella
          fascia bassa-prudente di ciò che riporta la letteratura LCA disponibile
          sulle bottiglie in PET monouso.
        </p>
        <ul className="mt-4 space-y-3 text-slate-200">
          <li>
            <strong className="text-white">85 g di CO2 per bottiglia da 1,5 L.</strong>{' '}
            Comprende indicativamente produzione del PET vergine, riempimento,
            trasporto medio dal sito di imbottigliamento al punto vendita e fine
            vita. Il range che si trova in letteratura è tipicamente 80–150 g a
            bottiglia, fortemente dipendente dalle distanze percorse: abbiamo
            scelto il limite inferiore per non sovrastimare il vantaggio del
            rubinetto.
          </li>
          <li>
            <strong className="text-white">35 g di PET per bottiglia da 1,5 L.</strong>{' '}
            Peso medio commerciale del contenitore vuoto; le marche più leggere
            scendono sotto i 30 g, quelle in materiale più rigido superano i 40 g.
          </li>
          <li>
            <strong className="text-white">0,003 €/L per l&apos;acqua del rubinetto.</strong>{' '}
            Corrispettivo indicativo medio italiano per acquedotto, fognatura e
            depurazione applicato a un consumo domestico tipico. Varia
            sensibilmente per ATO e fasce di consumo.
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-400">
          Le fonti sono studi LCA accademici e report di settore pubblici: il
          calcolatore non sostituisce un&apos;analisi specifica della tua filiera
          locale, ma fornisce un ordine di grandezza coerente con quanto
          riportato in letteratura.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          L&apos;Italia è il primo consumatore europeo di acqua in bottiglia
        </h2>
        <p className="mt-4 text-slate-300">
          I dati pubblici sui consumi mostrano che l&apos;Italia è da anni ai primi
          posti al mondo, e indicativamente prima in Europa, per litri pro capite
          di acqua minerale acquistata. Si parla di circa 200 litri per persona
          all&apos;anno, contro una media europea sensibilmente più bassa. Una
          famiglia tipo da 4 persone consuma quindi nell&apos;ordine di 800 litri
          l&apos;anno, equivalenti a oltre 500 bottiglie da 1,5 L: è qui che il
          calcolatore restituisce numeri sorprendenti già su un orizzonte di 5
          anni.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Perché l&apos;acqua del rubinetto è quasi sempre buona quanto la
          minerale (e a volte migliore)
        </h2>
        <p className="mt-4 text-slate-300">
          L&apos;acqua destinata al consumo umano in Italia è regolata dal
          D.Lgs. 18/2023, che recepisce la direttiva europea sulle acque potabili.
          Il gestore dell&apos;acquedotto effettua controlli periodici su decine
          di parametri chimici e microbiologici, con frequenze fissate per legge
          e limiti spesso più stringenti di quelli minimi previsti per le acque
          minerali confezionate.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-200">
          <li>
            <strong className="text-white">Freschezza.</strong> Dal rubinetto
            l&apos;acqua arriva nelle ultime ore o giorni, mentre una bottiglia
            può restare in magazzino per mesi a contatto col PET.
          </li>
          <li>
            <strong className="text-white">Costo.</strong> Indicativamente
            centinaia di volte inferiore per litro rispetto alla minerale media.
          </li>
          <li>
            <strong className="text-white">Impatto ambientale.</strong> Nessun
            contenitore monouso, nessun trasporto dedicato di acqua pesante su
            gomma.
          </li>
          <li>
            <strong className="text-white">Trasparenza.</strong> I rapporti di
            prova sono pubblici e ottenibili dal gestore.
          </li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Quando ha senso comprare comunque acqua in bottiglia
        </h2>
        <p className="mt-4 text-slate-300">
          Restare equilibrati è importante: ci sono contesti in cui scegliere
          l&apos;acqua confezionata è ragionevole.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-200">
          <li>
            Quando un&apos;analisi recente del rubinetto evidenzia parametri
            fuori norma non gestibili rapidamente.
          </li>
          <li>
            Per esigenze cliniche specifiche (residuo fisso particolare,
            povertà di sodio, gravidanza, prima infanzia) consigliate dal medico.
          </li>
          <li>
            In viaggio o in zone con avvisi temporanei di non potabilità da parte
            del gestore.
          </li>
          <li>
            Per il gusto, se il proprio acquedotto distribuisce un&apos;acqua
            molto clorata o particolarmente dura e non si vuole filtrare.
          </li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Come sapere se la TUA acqua del rubinetto è di qualità
        </h2>
        <p className="mt-4 text-slate-300">
          Prima di decidere se vale la pena passare al rubinetto, conviene
          guardare i numeri reali della propria acqua. Due strade complementari:
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-200">
          <li>
            Hai già un referto, anche del gestore?{' '}
            <Link
              href="/"
              className="font-semibold text-violet-300 underline-offset-4 hover:underline"
            >
              calcola subito il punteggio della tua acqua
            </Link>{' '}
            con GoccIA: assegna un voto 1–99 confrontando ogni parametro con i
            limiti di legge e i range ideali.
          </li>
          <li>
            Non hai un referto o vuoi un&apos;analisi indipendente?
            un&apos;analisi di laboratorio con metodi validati copre i parametri
            chiave per uso potabile e fornisce un rapporto di prova ufficiale.
          </li>
        </ol>

        <LeadCTA
          variant="kit-analisi"
          tone="soft"
          context="Per fare i conti con i numeri reali della tua acqua: kit di analisi del rubinetto con metodi validati e rapporto di prova firmato da un laboratorio qualificato."
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Domande frequenti
        </h2>
        <dl className="mt-6 space-y-6">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="glass rounded-2xl border border-white/10 p-5 sm:p-6"
            >
              <dt className="text-lg font-semibold text-white">{item.q}</dt>
              <dd className="mt-2 text-slate-300">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <LeadCTA
        variant="kit-analisi"
        tone="prominent"
        context="Vuoi un dato solido prima di cambiare le abitudini di casa? Un'analisi del rubinetto con metodi validati ti dice esattamente cosa stai bevendo, parametro per parametro, con un rapporto di prova ufficiale."
      />

      <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white">
          Condividi il calcolatore
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Se ti è stato utile, falo girare: ogni famiglia che lo prova può
          rivedere le proprie abitudini in modo informato.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `Quanto inquini bevendo acqua in bottiglia? Calcolatore CO2 + costo + bottiglie evitate: ${PAGE_URL}`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.08]"
          >
            Condividi su X
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.08]"
          >
            Condividi su Facebook
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              `Quanto inquini bevendo acqua in bottiglia? Calcolatore: ${PAGE_URL}`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.08]"
          >
            Condividi su WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
