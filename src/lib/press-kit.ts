export interface PressKitFact {
  label: string;
  value: string;
}

export interface PressKitSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PressContact {
  role: string;
  name: string;
  email: string;
}

export interface MediaAsset {
  label: string;
  url: string;
  format: string;
  sizeBytes?: number;
  description: string;
}

export interface PressKitData {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  oneliner: string;
  longDescription: string;
  facts: PressKitFact[];
  founderStory: string;
  positioning: PressKitSection;
  scientificMethod: PressKitSection;
  legalNotice: PressKitSection;
  contacts: PressContact[];
  mediaAssets: MediaAsset[];
  embedSnippets: { label: string; description: string; code: string }[];
}

export const PRESS_KIT: PressKitData = {
  metaTitle: "Press kit GoccIA — risorse per giornalisti e ricercatori",
  metaDescription:
    "Press kit ufficiale di GoccIA: one-liner, fatti citabili, biografia tecnica, contatti stampa, logo, screenshot e snippet embed. Licenza CC-BY 4.0.",
  hero: {
    eyebrow: "Press kit · Risorse libere",
    title: "Tutto quello che serve per parlare di GoccIA",
    intro:
      "Questa pagina raccoglie in un unico posto i materiali per chi vuole scrivere, citare o approfondire GoccIA: una frase di sintesi pronta all'uso, una biografia tecnica del progetto, fatti citabili verificati, contatti diretti dell'ufficio stampa, asset visivi (logo, screenshot, OG image) e snippet HTML per l'embed nei tuoi articoli. Tutto il materiale è in italiano e rilasciato con licenza Creative Commons CC-BY 4.0: puoi usarlo liberamente, anche a fini commerciali, citando la fonte goccia.org.",
  },
  oneliner:
    "GoccIA è uno strumento open source italiano di Labservice S.r.l. (123Acqua) che assegna un punteggio 1-99 alla qualità dell'acqua del rubinetto secondo i limiti del D.Lgs. 18/2023.",
  longDescription:
    "GoccIA è un'applicazione web gratuita e open source che valuta la qualità dell'acqua potabile italiana a partire dai parametri di un'analisi di laboratorio. L'utente inserisce i valori riportati sul referto del proprio acquedotto o di un'analisi indipendente e ottiene un punteggio sintetico da 1 a 99, accompagnato da tre subscore tematici e da una spiegazione parametro per parametro. Il calcolo è prodotto da un motore deterministico in TypeScript, pubblico su GitHub con licenza MIT: non viene usata alcuna intelligenza artificiale per produrre il punteggio. " +
    "Il progetto è realizzato da Labservice S.r.l., laboratorio italiano qualificato con metodi validati conformi a norme tecniche, con sede ad Anguillara Sabazia (Roma), partita IVA IT09433191005. Labservice opera anche con il marchio commerciale 123Acqua, dedicato alle analisi dell'acqua per privati. GoccIA è la sua iniziativa di divulgazione: uno strumento educativo gratuito che non sostituisce un rapporto di prova firmato di laboratorio. " +
    "L'algoritmo valuta 24 parametri previsti dal D.Lgs. 18/2023 (in attuazione della Direttiva UE 2020/2184), confrontandoli sia con i limiti di legge sia con i range ideali indicati dalle WHO Guidelines for Drinking-water Quality e dalle Scientific Opinions dell'EFSA. Il punteggio finale è la media pesata di tre subscore: Salute (50%), Estetica (25%) e Impianti (25%). La logica completa, i pesi e le soglie sono visibili nel repository pubblico e modificabili tramite pull request. " +
    "L'obiettivo dichiarato è rendere accessibile la lettura del referto idrico al pubblico non specialista, fornire un riferimento neutrale per giornalisti e ricercatori, e contribuire a ridurre il consumo di acqua in bottiglia in Italia mostrando in modo trasparente la qualità di ciò che esce dal rubinetto. GoccIA non sostituisce in alcun modo il gestore idrico, l'ARPA regionale o un rapporto di prova firmato; è un livello di lettura aggiuntivo, gratuito e verificabile. " +
    "Sul piano tecnico la piattaforma è costruita con Next.js 15, ospitata su Vercel (regione Francoforte, UE) e si appoggia a un database Supabase (Francoforte, UE). Non utilizza cookie di tracciamento: la sessione utente è gestita con localStorage del browser. Al momento del lancio il sito ospita oltre 245 pagine editoriali, copre 80 quartieri di Roma, Milano, Napoli e Torino, e include schede per 50 capoluoghi di provincia, oltre a guide tematiche su PFAS, calcare, nitrati e trattamenti domestici dell'acqua.",
  facts: [
    { label: "Lancio del progetto", value: "20 giugno 2026" },
    { label: "Licenza codice", value: "MIT" },
    { label: "Licenza contenuti", value: "Creative Commons CC-BY 4.0" },
    { label: "Repository pubblico", value: "https://github.com/tutor-sicurezza/goccia" },
    { label: "Parametri analizzati", value: "24 (D.Lgs. 18/2023)" },
    { label: "Range ideali", value: "WHO Guidelines + EFSA Opinions" },
    { label: "Pesi subscore", value: "Salute 50% · Estetica 25% · Impianti 25%" },
    { label: "Scala di punteggio", value: "1-99, calcolo deterministico" },
    { label: "Lingua", value: "Italiano" },
    { label: "Costo per l'utente", value: "Gratuito, senza registrazione obbligatoria" },
    { label: "Cookie di tracciamento", value: "Nessuno (solo localStorage del browser)" },
    { label: "Hosting", value: "Vercel — regione Francoforte, UE" },
    { label: "Database", value: "Supabase — regione Francoforte, UE" },
    {
      label: "Titolare del trattamento",
      value: "Labservice S.r.l. — Anguillara Sabazia (RM), P.IVA IT09433191005",
    },
  ],
  founderStory:
    "Il progetto nasce nel 2026 dall'osservazione che il rapporto di prova standard di un acquedotto italiano, pur essendo pubblico, risulta in pratica illeggibile per la maggior parte dei cittadini: decine di parametri con unità di misura eterogenee, soglie di legge espresse in note a piè di pagina e nessun confronto con i valori di riferimento internazionali. Labservice S.r.l., laboratorio attivo nel settore delle analisi delle acque, raccoglie da anni le stesse domande ricorrenti da parte di clienti privati e amministratori condominiali: \"il mio valore è alto?\", \"questo nitrato è pericoloso?\", \"posso bere quest'acqua?\". " +
    "GoccIA è la risposta strutturata a queste domande. La sfida principale è stata tradurre le tabelle del D.Lgs. 18/2023 e le linee guida WHO ed EFSA in un algoritmo deterministico, riproducibile e ispezionabile, evitando il ricorso a modelli di intelligenza artificiale che avrebbero reso il punteggio non verificabile. La scelta è stata quella di pubblicare tutto il codice di scoring su GitHub con licenza MIT, in modo che chiunque (giornalisti, ricercatori, ARPA, associazioni di consumatori) possa controllare riga per riga come viene prodotto il numero finale. " +
    "GoccIA è il primo strumento italiano open source di scoring dell'acqua potabile basato sulla normativa nazionale vigente e su fonti scientifiche internazionali, distribuito gratuitamente e senza registrazione obbligatoria.",
  positioning: {
    heading: "Posizionamento editoriale",
    paragraphs: [
      "GoccIA è uno strumento open source, gratuito, anonimo e deterministico: a parità di parametri inseriti produce sempre lo stesso punteggio, indipendentemente dall'utente o dalla località. È un livello di lettura neutrale, pensato per affiancare e rendere comprensibile la documentazione tecnica già pubblicata dai gestori idrici.",
      "GoccIA NON sostituisce un rapporto di prova firmato di laboratorio, NON fornisce pareri medici, NON è uno strumento diagnostico clinico e NON è un acquedotto né un gestore del servizio idrico integrato. I valori inseriti dall'utente non sono certificati e il punteggio non ha valore legale: per qualsiasi uso ufficiale è necessario rivolgersi a un laboratorio qualificato.",
      "Conflitto di interessi dichiarato: GoccIA è realizzato da Labservice S.r.l., laboratorio che vende anche, attraverso il marchio commerciale 123Acqua, servizi di analisi dell'acqua a privati e aziende. Lo strumento è gratuito per l'utente finale; il sostentamento economico del progetto deriva dall'attività commerciale del laboratorio. Questa relazione è dichiarata in modo trasparente su ogni pagina del sito.",
      "Indipendenza editoriale: il codice è open source e ispezionabile pubblicamente su GitHub. I parametri, i pesi e le soglie non possono essere oggetto di sponsorizzazione o di branded content: ogni modifica passa da un commit pubblico tracciabile. I contenuti editoriali (guide, articoli, schede città) non ospitano pubblicità di terzi.",
    ],
  },
  scientificMethod: {
    heading: "Metodo scientifico",
    paragraphs: [
      "Il punteggio GoccIA è calcolato da un algoritmo deterministico in quattro step. Step 1: riconoscimento dei parametri inseriti e normalizzazione delle unità di misura. Step 2: confronto di ciascun valore con il limite di legge (D.Lgs. 18/2023) e con il range ideale (WHO/EFSA). Step 3: calcolo dei tre subscore tematici (Salute, Estetica, Impianti), ciascuno aggregato come media pesata dei parametri di pertinenza. Step 4: pesatura finale (50% Salute, 25% Estetica, 25% Impianti) e mappatura sulla scala 1-99.",
      "Le fonti di riferimento sono normative e scientifiche, non aneddotiche: D.Lgs. 18 del 23 febbraio 2023, Direttiva UE 2020/2184, WHO Guidelines for Drinking-water Quality (4ª edizione, con addendum) e Scientific Opinions dell'EFSA per i parametri non coperti dalle linee guida WHO.",
      "Il motore di scoring non utilizza modelli di intelligenza artificiale, machine learning o euristiche probabilistiche: ogni operazione è una funzione pura, verificabile e riproducibile. Lo stesso input produce sempre lo stesso output.",
      "L'intero codice di scoring è pubblicato su GitHub con licenza MIT e può essere ispezionato, riusato o forkato. Ogni modifica passa da pull request pubbliche con storico dei commit.",
    ],
    bullets: [
      "D.Lgs. 18/2023 — attuazione italiana della direttiva sulle acque destinate al consumo umano",
      "Direttiva (UE) 2020/2184 del Parlamento Europeo e del Consiglio del 16 dicembre 2020",
      "WHO Guidelines for Drinking-water Quality, 4ª edizione (2017) con addendum 2022",
      "EFSA Scientific Opinions su nitrati, fluoruri, arsenico, sodio e altri parametri",
      "Reg. (UE) 2020/741 per il riuso e Reg. (CE) 1881/2006 per i contaminanti, ove applicabili",
      "Codice sorgente: https://github.com/tutor-sicurezza/goccia (licenza MIT)",
    ],
  },
  legalNotice: {
    heading: "Note legali",
    paragraphs: [
      "GoccIA è conforme al D.Lgs. 18/2023 per i parametri e le soglie utilizzate, al Reg. (CE) 1924/2006 per le indicazioni nutrizionali e sulla salute, al Codice del Consumo (D.Lgs. 206/2005) per la comunicazione al consumatore e al Regolamento (UE) 2016/679 (GDPR) per il trattamento dei dati personali.",
      "Disclaimer obbligatorio: GoccIA è uno strumento informativo ed educativo. Il punteggio prodotto NON sostituisce un rapporto di prova firmato di laboratorio, NON costituisce parere medico, sanitario, legale o tecnico, e NON ha valore probatorio in alcun procedimento. Per uso ufficiale è necessario un rapporto di prova rilasciato da un laboratorio qualificato.",
      "GoccIA è un marchio commerciale di Labservice S.r.l., società italiana anche operante con il marchio commerciale 123Acqua. Il logo, il nome e gli elementi grafici sono di proprietà di Labservice S.r.l.; il loro uso editoriale è consentito alle condizioni indicate nelle brand guidelines.",
      "Wording corretto da utilizzare in citazione: Labservice S.r.l. è un \"laboratorio qualificato\" che opera con \"metodi validati conformi a norme tecniche\". Si prega di NON utilizzare in citazione i termini \"accreditato\", \"Accredia\" o \"ISO 17025\" in riferimento a GoccIA o a Labservice in questo contesto.",
    ],
  },
  contacts: [
    {
      role: "Stampa e comunicazione",
      name: "Ufficio Stampa GoccIA",
      email: "press@goccia.org",
    },
    {
      role: "Tecnico e API",
      name: "Team Sviluppo",
      email: "dev@goccia.org",
    },
    {
      role: "Privacy e diritti",
      name: "Privacy",
      email: "privacy@goccia.org",
    },
  ],
  mediaAssets: [
    {
      label: "Logo SVG",
      url: "/icon.svg",
      format: "SVG",
      description:
        "Logo vettoriale ufficiale di GoccIA, gradient viola-azzurro-emerald, fondo trasparente compatibile con sfondi chiari e scuri.",
    },
    {
      label: "Logo PNG 1024×1024",
      url: "/press-kit/logo-1024.png",
      format: "PNG",
      description: "Versione rasterizzata ad alta risoluzione per anteprime social e copertine editoriali.",
    },
    {
      label: "OpenGraph image",
      url: "/opengraph-image",
      format: "PNG (dinamico)",
      description: "Card 1200×630 generata dinamicamente per la condivisione sui social network.",
    },
    {
      label: "Screenshot tool",
      url: "/press-kit/screenshot-tool.png",
      format: "PNG",
      description: "Screenshot della home con il form di inserimento dei parametri dell'analisi.",
    },
    {
      label: "Screenshot risultato",
      url: "/press-kit/screenshot-result.png",
      format: "PNG",
      description: "Screenshot di un esempio di pagina risultato con punteggio finale 1-99 e i tre subscore.",
    },
    {
      label: "Brand guidelines PDF",
      url: "/press-kit/brand-guidelines.pdf",
      format: "PDF",
      description: "Documento con palette colori, font, regole d'uso del logo ed esempi di applicazione corretta.",
    },
  ],
  embedSnippets: [
    {
      label: 'Badge "Powered by GoccIA"',
      description:
        "Inseriscilo su qualsiasi blog o sito per mostrare che hai usato GoccIA per valutare un'acqua. Linka a goccia.org.",
      code: '<a href="https://goccia.org" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:linear-gradient(90deg,#8B5CF6,#0EA5E9);color:#fff;border-radius:12px;font:600 14px system-ui;text-decoration:none">💧 Powered by GoccIA</a>',
    },
    {
      label: "Iframe risultato (esempio)",
      description:
        "Embed di un risultato di scoring nel tuo articolo. Usa l'ID di una submission pubblica condivisibile.",
      code: '<iframe src="https://goccia.org/embed/score?id=SUBMISSION_ID" style="width:100%;max-width:600px;height:480px;border:0;border-radius:24px" loading="lazy"></iframe>',
    },
  ],
};
