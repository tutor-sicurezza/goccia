import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';
import { LeadCTA } from '@/components/lead-cta';

export const metadata: Metadata = {
  title: 'Glossario acqua potabile — termini tecnici spiegati | GoccIA',
  description:
    "Oltre 70 termini tecnici sull'acqua del rubinetto, analisi di laboratorio e normativa italiana spiegati in italiano semplice: pH, PFAS, ICP-MS, D.Lgs. 18/2023 e altro.",
  alternates: {
    canonical: 'https://goccia.org/glossario',
  },
};

interface GlossaryTerm {
  term: string;
  definition: string;
  relatedSlugs?: string[];
}

const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Acqua potabile',
    definition:
      "Acqua destinata al consumo umano, conforme ai requisiti del D.Lgs. 18/2023 per parametri microbiologici, chimici e indicatori. In Italia è erogata principalmente dalla rete idrica pubblica.",
  },
  {
    term: 'Acqua del rubinetto',
    definition:
      "Acqua potabile distribuita dall'acquedotto, sottoposta a controlli periodici da parte del gestore idrico e dell'autorità sanitaria. È la forma più controllata di acqua disponibile in Italia.",
  },
  {
    term: 'Acqua minerale naturale',
    definition:
      "Acqua di origine sotterranea imbottigliata alla sorgente, regolata da una normativa distinta da quella dell'acqua del rubinetto. Non subisce trattamenti di disinfezione.",
  },
  {
    term: 'Acqua oligominerale',
    definition:
      'Acqua con residuo fisso a 180 °C compreso tra 50 e 500 mg/L. Tipica delle minerali italiane di montagna, povera di sali disciolti.',
  },
  {
    term: 'Acqua medio-minerale',
    definition:
      'Acqua con residuo fisso a 180 °C compreso tra 500 e 1500 mg/L. Più ricca di sali rispetto a una oligominerale.',
  },
  {
    term: 'pH',
    definition:
      "Misura dell'acidità o basicità dell'acqua su una scala da 0 a 14. Il valore di parametro per l'acqua potabile è 6,5–9,5. Valori intorno a 7,5–8 sono tipici delle acque italiane.",
    relatedSlugs: ['/parametri/ph'],
  },
  {
    term: 'Durezza totale',
    definition:
      "Concentrazione di sali di calcio e magnesio disciolti, espressa in gradi francesi (°F) o mg/L di CaCO₃. Non ha limite di legge sanitario ma influenza calcare e gusto.",
    relatedSlugs: ['/parametri/durezza'],
  },
  {
    term: 'Conducibilità elettrica',
    definition:
      "Capacità dell'acqua di condurre corrente, espressa in µS/cm. È un indicatore generale della quantità di sali disciolti. Il valore di parametro è 2500 µS/cm a 20 °C.",
    relatedSlugs: ['/parametri/conducibilita'],
  },
  {
    term: 'TDS (Solidi disciolti totali)',
    definition:
      "Massa totale di sostanze disciolte in un litro d'acqua, espressa in mg/L. Spesso stimata dalla conducibilità elettrica moltiplicata per un coefficiente.",
  },
  {
    term: 'Limite di legge',
    definition:
      "Valore massimo (o minimo) di un parametro previsto dalla normativa per considerare l'acqua conforme al consumo umano. In Italia è fissato dal D.Lgs. 18/2023.",
  },
  {
    term: 'Range ideale',
    definition:
      "Intervallo in cui un parametro è considerato ottimale per salute, gusto e impianti, derivato da linee guida WHO ed EFSA. Un valore conforme può comunque non essere ideale.",
  },
  {
    term: 'Valore di parametro (parametric value)',
    definition:
      "Termine della Direttiva UE 2020/2184 equivalente al limite di legge: concentrazione che non deve essere superata per garantire la salubrità dell'acqua.",
  },
  {
    term: 'Concentrazione massima ammissibile',
    definition:
      "Espressione storica per indicare il valore di parametro; oggi nella normativa italiana si parla più spesso di valore di parametro o limite di legge.",
  },
  {
    term: 'D.Lgs. 18/2023',
    definition:
      'Decreto legislativo italiano che recepisce la Direttiva UE 2020/2184 sulla qualità delle acque destinate al consumo umano. Fissa parametri, limiti e regole di controllo.',
  },
  {
    term: 'Direttiva UE 2020/2184',
    definition:
      "Direttiva europea che aggiorna la disciplina dell'acqua potabile nell'Unione, introducendo nuovi parametri (es. PFAS) e un approccio basato sul rischio lungo l'intera filiera.",
  },
  {
    term: 'WHO Guidelines for Drinking-water Quality',
    definition:
      "Linee guida dell'Organizzazione Mondiale della Sanità sulla qualità dell'acqua potabile: forniscono valori di riferimento basati sull'evidenza scientifica per centinaia di sostanze.",
  },
  {
    term: 'EFSA',
    definition:
      "Autorità europea per la sicurezza alimentare. Pubblica pareri scientifici su contaminanti dell'acqua e degli alimenti, spesso usati come base per i limiti normativi UE.",
  },
  {
    term: 'Nitrati',
    definition:
      "Sali dell'acido nitrico (NO₃⁻), comuni nelle acque di falda in aree agricole. Valore di parametro 50 mg/L. Concentrazioni elevate sono problematiche soprattutto per i lattanti.",
    relatedSlugs: ['/parametri/nitrati'],
  },
  {
    term: 'Nitriti',
    definition:
      "Forma intermedia del ciclo dell'azoto (NO₂⁻), più reattiva dei nitrati. Valore di parametro 0,5 mg/L. La somma nitrati/50 + nitriti/3 non deve superare 1.",
    relatedSlugs: ['/parametri/nitriti'],
  },
  {
    term: 'Ammonio',
    definition:
      "Ione NH₄⁺, indicatore di contaminazione recente da scarichi o di rilascio dalle tubazioni. Valore di parametro 0,5 mg/L.",
    relatedSlugs: ['/parametri/ammonio'],
  },
  {
    term: "Ciclo dell'azoto",
    definition:
      'Insieme di trasformazioni biologiche e chimiche tra ammonio, nitriti e nitrati. Nelle acque indica freschezza della contaminazione e capacità di ossidazione del sistema.',
  },
  {
    term: 'Sodio',
    definition:
      "Catione Na⁺ presente naturalmente nelle acque. Valore di parametro 200 mg/L. Importante da monitorare per chi segue diete iposodiche.",
    relatedSlugs: ['/parametri/sodio'],
  },
  {
    term: 'Cloruri',
    definition:
      "Anione Cl⁻ che influenza il gusto dell'acqua. Valore di parametro 250 mg/L. Concentrazioni alte possono indicare contaminazione marina o salina.",
    relatedSlugs: ['/parametri/cloruri'],
  },
  {
    term: 'Solfati',
    definition:
      'Anione SO₄²⁻ presente in molte acque di origine sedimentaria. Valore di parametro 250 mg/L. Concentrazioni elevate possono avere effetto lassativo.',
    relatedSlugs: ['/parametri/solfati'],
  },
  {
    term: 'Fluoruri',
    definition:
      "Anione F⁻ con effetto protettivo sui denti a basse concentrazioni e tossico a concentrazioni alte. Valore di parametro 1,5 mg/L.",
    relatedSlugs: ['/parametri/fluoruri'],
  },
  {
    term: 'Cloro residuo',
    definition:
      "Cloro che rimane nell'acqua dopo la disinfezione e mantiene un effetto residuo lungo la rete. È la somma di cloro libero e combinato.",
    relatedSlugs: ['/parametri/cloro-residuo'],
  },
  {
    term: 'Cloro libero',
    definition:
      "Parte del cloro residuo ancora disponibile come disinfettante attivo (acido ipocloroso e ipoclorito). Tipicamente 0,1–0,3 mg/L al rubinetto.",
  },
  {
    term: 'Cloro combinato',
    definition:
      "Cloro legato a composti azotati (cloramine) formato dopo la disinfezione. Ha potere disinfettante minore ma più persistente; può dare odore caratteristico.",
  },
  {
    term: 'Trialometani (THM)',
    definition:
      'Sottoprodotti della disinfezione con cloro, formati per reazione con la sostanza organica naturale. Valore di parametro 100 µg/L come somma di quattro composti.',
    relatedSlugs: ['/parametri/trialometani'],
  },
  {
    term: 'Disinfezione',
    definition:
      "Processo per abbattere batteri e virus nell'acqua potabile: cloro, biossido di cloro, ozono o UV. È un requisito di sicurezza, non un'aggiunta facoltativa.",
  },
  {
    term: 'Ferro',
    definition:
      "Metallo presente come Fe²⁺ o Fe³⁺. Valore di parametro 200 µg/L. Concentrazioni elevate danno colore giallastro e gusto metallico.",
    relatedSlugs: ['/parametri/ferro'],
  },
  {
    term: 'Manganese',
    definition:
      "Metallo che a concentrazioni elevate provoca macchie nere e gusto sgradevole. Valore di parametro 50 µg/L.",
    relatedSlugs: ['/parametri/manganese'],
  },
  {
    term: 'Piombo',
    definition:
      "Metallo tossico, soprattutto per bambini e gestanti. Valore di parametro 5 µg/L (dal 2036; oggi 10 µg/L). Spesso deriva da tubazioni datate.",
    relatedSlugs: ['/parametri/piombo'],
  },
  {
    term: 'Arsenico',
    definition:
      "Semimetallo cancerogeno, presente in alcune falde di origine vulcanica. Valore di parametro 10 µg/L. Aree note: Lazio nord, Lombardia, alcune zone vulcaniche.",
    relatedSlugs: ['/parametri/arsenico'],
  },
  {
    term: 'Rame',
    definition:
      "Metallo essenziale ma tossico ad alte dosi. Valore di parametro 2 mg/L. Concentrazioni elevate provengono spesso da tubazioni in rame nuove.",
    relatedSlugs: ['/parametri/rame'],
  },
  {
    term: 'Cadmio',
    definition:
      "Metallo tossico e cancerogeno. Valore di parametro 5 µg/L. Raro nelle acque italiane in assenza di contaminazione industriale.",
    relatedSlugs: ['/parametri/cadmio'],
  },
  {
    term: 'Nichel',
    definition:
      "Metallo che può rilasciarsi da rubinetti e raccordi. Valore di parametro 20 µg/L. È utile far scorrere l'acqua qualche secondo prima del consumo al mattino.",
    relatedSlugs: ['/parametri/nichel'],
  },
  {
    term: 'Cromo totale',
    definition:
      "Somma di cromo trivalente (Cr III) ed esavalente (Cr VI). Valore di parametro 50 µg/L. La normativa sta evolvendo verso un valore separato per Cr VI.",
    relatedSlugs: ['/parametri/cromo'],
  },
  {
    term: 'Cromo esavalente (Cr VI)',
    definition:
      "Forma più tossica del cromo, cancerogena per inalazione e di interesse crescente per l'ingestione. Il D.Lgs. 18/2023 introduce un valore specifico di 25 µg/L.",
  },
  {
    term: 'Torbidità (NTU)',
    definition:
      "Misura dell'opacità dell'acqua dovuta a particelle sospese, in unità nefelometriche (NTU). Al rubinetto dovrebbe essere inferiore a 1 NTU. Un aumento improvviso è un segnale d'allarme.",
    relatedSlugs: ['/parametri/torbidita'],
  },
  {
    term: 'Colore',
    definition:
      "Caratteristica organolettica misurata in mg/L Pt/Co. Un'acqua potabile deve essere incolore o quasi. Tonalità giallastra spesso indica ferro o sostanza organica.",
  },
  {
    term: 'PFAS',
    definition:
      "Sostanze perfluoroalchiliche, contaminanti persistenti di origine industriale. Il D.Lgs. 18/2023 fissa 100 ng/L come somma di 20 PFAS. Aree critiche note in Veneto e Lombardia.",
    relatedSlugs: ['/parametri/pfas'],
  },
  {
    term: 'PFOA',
    definition:
      'Acido perfluoroottanoico, uno dei PFAS più diffusi e studiati. Cancerogeno secondo IARC (gruppo 1). Presente in alcune acque del Nord-Est italiano negli anni passati.',
  },
  {
    term: 'PFOS',
    definition:
      'Acido perfluoroottansolfonico, PFAS estremamente persistente. Vietato per molti usi industriali ma ancora rilevabile nelle acque per la sua persistenza.',
  },
  {
    term: 'Contaminanti emergenti',
    definition:
      "Sostanze non storicamente regolamentate ma di crescente preoccupazione: residui farmaceutici, pesticidi, microplastiche, PFAS, interferenti endocrini.",
  },
  {
    term: 'Escherichia coli',
    definition:
      "Batterio coliforme di origine fecale. Valore di parametro: assenza in 100 mL. La sua presenza nell'acqua potabile è una non conformità sanitaria grave.",
    relatedSlugs: ['/parametri/escherichia-coli'],
  },
  {
    term: 'Coliformi totali',
    definition:
      "Gruppo di batteri usati come indicatore generale di contaminazione. Valore di parametro: assenza in 100 mL.",
    relatedSlugs: ['/parametri/coliformi'],
  },
  {
    term: 'Enterococchi intestinali',
    definition:
      'Batteri indicatori di contaminazione fecale, più resistenti dei coliformi nella matrice acqua. Valore di parametro: assenza in 100 mL.',
    relatedSlugs: ['/parametri/enterococchi'],
  },
  {
    term: 'UFC (unità formanti colonia)',
    definition:
      "Unità di misura microbiologica: ogni colonia conteggiata in piastra corrisponde a una cellula vitale di partenza. Comune l'espressione UFC/100 mL per le acque potabili.",
  },
  {
    term: 'ICP-MS',
    definition:
      "Spettrometria di massa con sorgente al plasma accoppiato induttivamente. Tecnica strumentale di riferimento per metalli pesanti in tracce nell'acqua (µg/L e ng/L).",
  },
  {
    term: 'ICP-OES',
    definition:
      "Spettrometria di emissione ottica al plasma. Tecnica multielemento per cationi e metalli a concentrazioni mg/L, complementare all'ICP-MS.",
  },
  {
    term: 'Cromatografia ionica',
    definition:
      "Tecnica strumentale per quantificare anioni (cloruri, solfati, nitrati, nitriti, fluoruri) e cationi inorganici nell'acqua.",
  },
  {
    term: 'HPLC',
    definition:
      'Cromatografia liquida ad alta prestazione. Usata per pesticidi, farmaci, alcuni sottoprodotti di disinfezione e composti organici polari.',
  },
  {
    term: 'GC-MS',
    definition:
      'Gascromatografia accoppiata a spettrometria di massa. Tecnica di riferimento per trialometani, pesticidi organoclorurati, idrocarburi e composti volatili.',
  },
  {
    term: 'Spettrofotometria',
    definition:
      "Metodo basato sull'assorbimento di luce a una specifica lunghezza d'onda. Usato in campo per ammonio, nitriti, fosfati, cloro residuo.",
  },
  {
    term: 'Striscia reattiva',
    definition:
      "Test colorimetrico qualitativo per stime rapide di pH, durezza, cloro o nitrati. Utile come screening domestico ma non sostituisce l'analisi strumentale.",
  },
  {
    term: 'TDS meter',
    definition:
      'Strumento portatile che stima i solidi disciolti totali misurando la conducibilità elettrica. Indicativo, non quantifica i singoli sali.',
  },
  {
    term: 'Osmosi inversa',
    definition:
      "Sistema di trattamento domestico che rimuove la quasi totalità di sali, metalli e contaminanti tramite una membrana semipermeabile. Riduce anche minerali utili come calcio e magnesio.",
  },
  {
    term: 'Carbone attivo (GAC)',
    definition:
      "Materiale filtrante che adsorbe cloro, composti organici, alcuni pesticidi e migliora il gusto. Richiede sostituzione periodica per evitare rilascio batterico.",
  },
  {
    term: 'Scambio ionico',
    definition:
      'Tecnica di trattamento basata su resine che scambiano ioni indesiderati con altri (es. calcio con sodio negli addolcitori, o nitrati con cloruri).',
  },
  {
    term: 'Addolcitore',
    definition:
      "Apparecchio domestico che riduce la durezza dell'acqua scambiando calcio e magnesio con sodio. Va dimensionato e manutenuto correttamente.",
  },
  {
    term: 'Ultrafiltrazione',
    definition:
      'Filtrazione su membrane con porosità inferiore al micron, in grado di trattenere batteri e particolato senza demineralizzare significativamente.',
  },
  {
    term: 'Disinfezione UV',
    definition:
      "Trattamento con lampade ultraviolette che inattiva batteri e virus senza aggiungere sostanze chimiche. Non lascia un effetto residuo lungo l'impianto.",
  },
  {
    term: 'Bollitura',
    definition:
      "Metodo di emergenza per inattivare microrganismi: portare l'acqua a ebollizione per almeno un minuto. Non rimuove metalli, nitrati o PFAS.",
  },
  {
    term: 'Gestore idrico',
    definition:
      "Soggetto pubblico o privato che gestisce la rete acquedottistica e ha l'obbligo di garantire la qualità dell'acqua fino al punto di consegna (di norma il contatore).",
  },
  {
    term: 'Acquedotto',
    definition:
      "Infrastruttura di captazione, trattamento, accumulo e distribuzione dell'acqua potabile. In Italia conta centinaia di migliaia di chilometri di rete.",
  },
  {
    term: 'ATS',
    definition:
      "Azienda di Tutela della Salute (o ASL secondo regione): autorità sanitaria locale che effettua controlli ufficiali sull'acqua erogata dal gestore.",
  },
  {
    term: 'ARPA',
    definition:
      "Agenzia Regionale per la Protezione Ambientale: monitora la qualità delle acque superficiali e sotterranee e collabora ai controlli sull'acqua potabile.",
  },
  {
    term: 'Ministero della Salute',
    definition:
      "Autorità nazionale competente per la disciplina dell'acqua destinata al consumo umano: emana decreti, linee guida e gestisce le banche dati centrali.",
  },
  {
    term: 'Rapporto di prova',
    definition:
      "Documento ufficiale emesso da un laboratorio che riporta i risultati analitici di un campione: parametri, valori, metodi, limiti di confronto e firma del responsabile.",
  },
  {
    term: 'Verbale di campionamento',
    definition:
      'Documento che registra le condizioni di prelievo: punto, data, ora, temperatura, operatore. È parte integrante della tracciabilità del campione.',
  },
];

const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Z',
];

function firstLetter(term: string): string {
  return term
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .charAt(0)
    .toUpperCase();
}

function definedTermSetJsonLd(terms: GlossaryTerm[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: "Glossario dell'acqua potabile — GoccIA",
    inLanguage: 'it-IT',
    url: 'https://goccia.org/glossario',
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: 'https://goccia.org/glossario',
    })),
  };
}

export default function GlossarioPage() {
  const sorted = [...GLOSSARY].sort((a, b) =>
    a.term.toLocaleLowerCase('it').localeCompare(b.term.toLocaleLowerCase('it'), 'it'),
  );

  const presentLetters = new Set(sorted.map((t) => firstLetter(t.term)));

  let currentLetter = '';

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={definedTermSetJsonLd(sorted)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Glossario', url: 'https://goccia.org/glossario' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Risorsa di consultazione
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">
            Glossario dell'acqua potabile — termini tecnici spiegati in italiano
          </span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Oltre settanta voci tra parametri chimici, microbiologici, tecniche
          di laboratorio, normativa italiana ed europea e sistemi di
          trattamento domestico. Una guida pensata per leggere senza intoppi
          un rapporto di prova, capire un avviso del gestore idrico o
          confrontare due acque diverse. Ogni definizione cita, dove
          rilevante, il valore di parametro del D.Lgs. 18/2023.
        </p>
      </header>

      <nav
        aria-label="Salta alla lettera"
        className="glass mb-10 flex flex-wrap gap-2 rounded-2xl p-4"
      >
        {ALPHABET.map((letter) => {
          const enabled = presentLetters.has(letter);
          return enabled ? (
            <a
              key={letter}
              href={`#${letter.toLowerCase()}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-sm font-semibold text-slate-100 transition hover:border-violet-400/40 hover:bg-white/[0.08]"
            >
              {letter}
            </a>
          ) : (
            <span
              key={letter}
              aria-disabled="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-sm font-medium text-slate-600"
            >
              {letter}
            </span>
          );
        })}
      </nav>

      <section className="glass rounded-2xl p-6 sm:p-8">
        <dl className="space-y-6">
          {sorted.map((entry) => {
            const letter = firstLetter(entry.term);
            const isNewLetter = letter !== currentLetter;
            if (isNewLetter) currentLetter = letter;
            return (
              <div key={entry.term} className="border-b border-white/5 pb-5 last:border-b-0 last:pb-0">
                {isNewLetter ? (
                  <h2
                    id={letter.toLowerCase()}
                    className="font-display mb-3 mt-2 text-2xl font-semibold text-violet-300"
                  >
                    {letter}
                  </h2>
                ) : null}
                <dt className="font-display text-lg font-semibold text-slate-100">
                  {entry.term}
                </dt>
                <dd className="mt-1 text-slate-300">
                  {entry.definition}
                  {entry.relatedSlugs && entry.relatedSlugs.length > 0 ? (
                    <span className="ml-2 inline-flex flex-wrap gap-2 text-sm">
                      {entry.relatedSlugs.map((slug) => (
                        <Link
                          key={slug}
                          href={slug}
                          className="text-sky-300 underline decoration-sky-500/40 underline-offset-4 hover:text-sky-200"
                        >
                          → scheda parametro
                        </Link>
                      ))}
                    </span>
                  ) : null}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <LeadCTA
        variant="completa"
        tone="prominent"
        context="Per passare dalla teoria al referto: richiedi un'analisi completa dell'acqua del rubinetto con metodi validati conformi alle norme tecniche e supporto interpretativo sui parametri descritti in questo glossario."
      />
    </main>
  );
}
