import type { NeighborhoodGuide } from "./neighborhood-guides";

const IREN_PARAGRAPH =
  "Il gestore del servizio idrico integrato a Genova è Iren Acqua S.p.A. (già Mediterranea delle Acque, gruppo Iren), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete genovese è alimentata principalmente dall'invaso del Brugneto (Val Trebbia, attraverso la galleria di valico), dall'invaso di Val Brevenna e da numerose sorgenti dell'entroterra appenninico ligure: questa origine spiega un profilo a durezza tipicamente bassa-media e una mineralizzazione contenuta, in linea con le acque appenniniche.";

const CONTROLS_PARAGRAPH =
  "I controlli sull'acqua distribuita seguono il D.Lgs. 18/2023, che recepisce la Direttiva UE 2020/2184: gli autocontrolli di Iren Acqua lungo la filiera si affiancano ai controlli ufficiali della ASL3 Genovese e al monitoraggio ambientale di ARPAL Liguria. I referti per area di distribuzione sono consultabili sul portale del gestore.";

interface QuartiereMeta {
  slug: string;
  name: string;
  district: string;
  context: string;
  buildingAge: NeighborhoodGuide["buildingAge"];
  typicalRisks: string[];
  ctaVariant: NeighborhoodGuide["ctaVariant"];
  related: string[];
}

const QUARTIERI: QuartiereMeta[] = [
  {
    slug: "genova-centro",
    name: "Centro",
    district: "Municipio I Centro Est",
    context:
      "il cuore storico tra il porto antico e i caruggi, con un tessuto edilizio prevalentemente anteriore al Novecento",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da tubazioni interne pre-1960",
      "Stagnazione in palazzi a uso turistico o commerciale",
      "Cloro residuo variabile nei tratti più distali",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-castelletto", "genova-portoria", "genova-foce"],
  },
  {
    slug: "genova-castelletto",
    name: "Castelletto",
    district: "Municipio I Centro Est",
    context:
      "la collina sopra il centro storico, con palazzine Liberty e primo Novecento collegate da impianti d'epoca",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Impianti condominiali datati primo Novecento",
      "Possibili tratti residui di piombo nei collegamenti interni",
      "Sbalzi di pressione legati alla rete in quota",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-centro", "genova-portoria", "genova-san-fruttuoso"],
  },
  {
    slug: "genova-portoria",
    name: "Portoria",
    district: "Municipio I Centro Est",
    context:
      "la zona di Piazza De Ferrari e Via XX Settembre, con edifici otto-novecenteschi a uso misto residenziale e direzionale",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Impianti misti residenziale-uffici con stagnazione nei weekend",
      "Tubazioni interne di epoche stratificate",
      "Durezza bassa-media tipica della rete genovese",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-centro", "genova-castelletto", "genova-foce"],
  },
  {
    slug: "genova-foce",
    name: "Foce",
    district: "Municipio I Centro Est",
    context:
      "il quartiere residenziale tra Corso Italia e la Fiera, con palazzine prevalentemente novecentesche e una densità abitativa elevata",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Condomini anni '30-'50 con impianti rifatti solo in parte",
      "Calcare contenuto ma persistente sugli elettrodomestici",
      "Stagnazione in seconde case fronte mare",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-albaro", "genova-centro", "genova-san-fruttuoso"],
  },
  {
    slug: "genova-albaro",
    name: "Albaro",
    district: "Municipio VIII Medio Levante",
    context:
      "il quartiere residenziale tra Corso Europa e il mare, con ville d'epoca, palazzine Liberty e condomini del dopoguerra",
    buildingAge: "misto",
    typicalRisks: [
      "Mix di ville d'epoca e condomini dopoguerra",
      "Impianti interni stratificati in più epoche",
      "Stagnazione in immobili usati saltuariamente",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-foce", "genova-sturla", "genova-san-fruttuoso"],
  },
  {
    slug: "genova-sturla",
    name: "Sturla",
    district: "Municipio VIII Medio Levante",
    context:
      "la zona di Corso Europa verso il mare, con un tessuto residenziale del dopoguerra e palazzine recenti",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Impianti condominiali anni '60-'70 da verificare",
      "Stagnazione in appartamenti a uso turistico",
      "Cloro residuo nei tratti distali della rete",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-albaro", "genova-quarto", "genova-quinto"],
  },
  {
    slug: "genova-quarto",
    name: "Quarto",
    district: "Municipio IX Levante",
    context:
      "il quartiere lungo Via Cinque Maggio e Via Gianelli, con palazzine del dopoguerra e nuove costruzioni vicino all'ospedale",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Edifici dopoguerra con impianti originali in alcuni casi",
      "Stagnazione in appartamenti fronte mare a uso stagionale",
      "Variazioni di pressione nei tratti collinari",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-sturla", "genova-quinto", "genova-nervi"],
  },
  {
    slug: "genova-quinto",
    name: "Quinto",
    district: "Municipio IX Levante",
    context:
      "il borgo marinaro di levante con la sua passeggiata, un tessuto edilizio misto fra palazzine d'epoca e dopoguerra",
    buildingAge: "misto",
    typicalRisks: [
      "Forte presenza di seconde case con lunghe stagnazioni",
      "Impianti condominiali eterogenei per epoca",
      "Cloro residuo variabile",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-quarto", "genova-nervi", "genova-sturla"],
  },
  {
    slug: "genova-nervi",
    name: "Nervi",
    district: "Municipio IX Levante",
    context:
      "il borgo storico della passeggiata Anita Garibaldi, con ville ottocentesche, parchi e palazzine d'epoca",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Ville e palazzine pre-1900 con impianti interni datati",
      "Stagnazione marcata in case vacanza e B&B",
      "Possibili tratti residui di piombo",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-quinto", "genova-quarto", "genova-albaro"],
  },
  {
    slug: "genova-cornigliano",
    name: "Cornigliano",
    district: "Municipio VI Medio Ponente",
    context:
      "il quartiere del ponente cittadino accanto all'aeroporto e alle ex aree industriali siderurgiche",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Vicinanza a ex aree industriali e infrastrutture",
      "Impianti condominiali dopoguerra in molti casi originali",
      "Attenzione ai parametri legati a metalli pesanti su impianti privati",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-sampierdarena", "genova-pegli", "genova-rivarolo"],
  },
  {
    slug: "genova-sampierdarena",
    name: "Sampierdarena",
    district: "Municipio II Centro Ovest",
    context:
      "il quartiere ad alta densità del ponente vicino al porto, con palazzi otto-novecenteschi e condomini del dopoguerra",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Palazzi pre-1960 con impianti interni stratificati",
      "Alta densità abitativa e ricambi frequenti di inquilini",
      "Possibili tratti residui di piombo nei collegamenti privati",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-cornigliano", "genova-rivarolo", "genova-centro"],
  },
  {
    slug: "genova-rivarolo",
    name: "Rivarolo",
    district: "Municipio V Valpolcevera",
    context:
      "il quartiere della bassa Valpolcevera con un tessuto edilizio misto, residenziale e produttivo",
    buildingAge: "misto",
    typicalRisks: [
      "Edifici di epoche diverse con impianti eterogenei",
      "Variazioni di pressione legate alla rete di valle",
      "Stagnazione in immobili a uso discontinuo",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-bolzaneto", "genova-pontedecimo", "genova-sampierdarena"],
  },
  {
    slug: "genova-bolzaneto",
    name: "Bolzaneto",
    district: "Municipio V Valpolcevera",
    context:
      "il quartiere di media Valpolcevera, residenziale con presenze produttive e infrastrutturali",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Impianti condominiali dopoguerra da verificare",
      "Vicinanza a infrastrutture viarie e produttive",
      "Sbalzi di pressione nei rami collinari",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-rivarolo", "genova-pontedecimo", "genova-sampierdarena"],
  },
  {
    slug: "genova-pontedecimo",
    name: "Pontedecimo",
    district: "Municipio V Valpolcevera",
    context:
      "l'alta Valpolcevera al confine nord della città, con un tessuto edilizio prevalentemente residenziale di varie epoche",
    buildingAge: "misto",
    typicalRisks: [
      "Rete in posizione terminale di valle con tempi di residenza più lunghi",
      "Impianti condominiali di varie epoche",
      "Stagnazione in immobili a uso saltuario",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-bolzaneto", "genova-rivarolo"],
  },
  {
    slug: "genova-pegli",
    name: "Pegli",
    district: "Municipio VII Ponente",
    context:
      "il borgo storico balneare del ponente con ville ottocentesche, parchi e palazzine d'epoca",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Ville e palazzine pre-1900 con impianti interni datati",
      "Stagnazione in seconde case e immobili stagionali",
      "Possibili tratti residui di piombo",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-voltri", "genova-prà", "genova-cornigliano"],
  },
  {
    slug: "genova-voltri",
    name: "Voltri",
    district: "Municipio VII Ponente",
    context:
      "il borgo del ponente estremo, residenziale e legato al mare, con un tessuto edilizio stratificato",
    buildingAge: "misto",
    typicalRisks: [
      "Mix di edifici storici e dopoguerra",
      "Stagnazione in case vacanza fronte mare",
      "Posizione distale sulla rete di adduzione",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-pegli", "genova-prà"],
  },
  {
    slug: "genova-prà",
    name: "Prà",
    district: "Municipio VII Ponente",
    context:
      "il quartiere del ponente cittadino noto per il porto e l'attività portuale, con un tessuto residenziale del dopoguerra",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Vicinanza al porto e a infrastrutture industriali",
      "Impianti condominiali dopoguerra in molti casi originali",
      "Stagnazione in appartamenti a uso non continuativo",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-voltri", "genova-pegli", "genova-cornigliano"],
  },
  {
    slug: "genova-marassi",
    name: "Marassi",
    district: "Municipio III Bassa Val Bisagno",
    context:
      "il quartiere della bassa Val Bisagno noto per lo stadio, con un tessuto edilizio prevalentemente otto-novecentesco",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Palazzi pre-1960 con impianti stratificati",
      "Possibili tratti residui di piombo nei collegamenti privati",
      "Stagnazione in alcuni condomini ad alta rotazione",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-staglieno", "genova-san-fruttuoso", "genova-foce"],
  },
  {
    slug: "genova-staglieno",
    name: "Staglieno",
    district: "Municipio IV Media Val Bisagno",
    context:
      "il quartiere della media Val Bisagno noto per il cimitero monumentale, con tessuto edilizio misto residenziale",
    buildingAge: "misto",
    typicalRisks: [
      "Edifici di varie epoche con impianti eterogenei",
      "Stagnazione in immobili a uso discontinuo",
      "Posizione intermedia di valle sulla rete",
    ],
    ctaVariant: "kit-analisi",
    related: ["genova-marassi", "genova-san-fruttuoso"],
  },
  {
    slug: "genova-san-fruttuoso",
    name: "San Fruttuoso",
    district: "Municipio III Bassa Val Bisagno",
    context:
      "il quartiere collinare-residenziale alle spalle della Foce, con un tessuto edilizio prevalentemente novecentesco",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Condomini primo Novecento con impianti rifatti solo in parte",
      "Possibili tratti residui di piombo nei collegamenti interni",
      "Stagnazione in appartamenti poco utilizzati",
    ],
    ctaVariant: "metalli-pesanti",
    related: ["genova-marassi", "genova-foce", "genova-staglieno"],
  },
];

function buildGuide(q: QuartiereMeta): NeighborhoodGuide {
  const { slug, name, district, context, buildingAge, typicalRisks, ctaVariant, related } = q;
  const lowerName = name.toLowerCase();

  return {
    slug,
    citySlug: "genova",
    cityName: "Genova",
    neighborhoodName: name,
    district,
    shortTitle: `Acqua del rubinetto a ${name} (Genova): cosa controllare`,
    metaDescription: `Acqua del rubinetto a ${name}, Genova (${district}). Gestore Iren Acqua, origine appenninica (invasi Brugneto e Val Brevenna, sorgenti), durezza bassa-media. Cosa controllare a casa e quando fare un'analisi.`,
    searchKeywords: [
      `acqua ${lowerName} genova`,
      `acqua rubinetto ${lowerName}`,
      `qualità acqua genova ${lowerName}`,
      `tubazioni piombo ${lowerName}`,
      `durezza acqua genova ${lowerName}`,
      `analisi acqua ${lowerName} genova`,
      `acqua iren ${lowerName}`,
    ],
    intro: `${name} è ${context}, parte del ${district}. La rete pubblica gestita da Iren Acqua arriva qui con acqua di origine prevalentemente appenninica (invasi del Brugneto e di Val Brevenna, integrati da sorgenti dell'entroterra ligure): il profilo tipico è a durezza bassa-media e mineralizzazione contenuta. Come in tutta Genova, il fattore più variabile per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti interni privati: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a ${name} aiuta a usare l'acqua del rubinetto con consapevolezza, riducendo anche il ricorso all'acqua in bottiglia.`,
    buildingAge,
    typicalRisks,
    sections: [
      {
        heading: `L'acqua a ${name}: contesto urbano e tubazioni`,
        paragraphs: [
          IREN_PARAGRAPH,
          `A ${name}, parte del ${district}, la rete di Iren Acqua serve un tessuto edilizio composito: ${context}. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica del gestore; gli impianti interni dei condomini, invece, ricadono sotto la responsabilità dell'amministratore e dei singoli proprietari.`,
        ],
        bullets: [
          `Edifici tipici del quartiere: ${context}`,
          "Adduzione pubblica gestita e monitorata da Iren Acqua",
          "Eventuali criticità più frequenti nei tratti privati interni",
        ],
      },
      {
        heading: `Rischi specifici a ${name}`,
        paragraphs: [
          `Negli edifici antecedenti al 1960 si possono ancora trovare tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend, periodi di assenza), il primo getto d'acqua può contenere tracce di metalli ceduti dalle pareti interne dell'impianto. Per questa ragione è buona pratica far scorrere alcuni litri al primo utilizzo del mattino.`,
          `Pur in presenza di una durezza tipicamente bassa-media, gli impianti centralizzati di acqua calda sanitaria nei condomini più grandi possono richiedere attenzione ai parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015). A ${name}, come nel resto di Genova, la conformazione orografica può inoltre tradursi in variazioni locali di pressione.`,
        ],
        bullets: typicalRisks,
      },
      {
        heading: `Cosa controllare a casa a ${name}`,
        paragraphs: [
          `Per chi vive a ${name} un pannello informativo minimo include: durezza totale, conducibilità, cloro residuo, microbiologica di base (carica batterica a 22 e 37 °C, coliformi, E. coli, enterococchi). Nei palazzi antecedenti al 1980 vale la pena aggiungere piombo, rame e nichel. ${CONTROLS_PARAGRAPH}`,
          "Il prelievo va eseguito con metodi validati conformi alle norme tecniche di riferimento, da personale di un laboratorio qualificato: la modalità di campionamento (first draw a rubinetto fermo da almeno 8 ore vs. acqua già lasciata scorrere) modifica in maniera significativa il risultato sui metalli.",
        ],
        bullets: [
          "Piombo nei palazzi pre-1960 (priorità)",
          "Rame e nichel da raccordi e rubinetterie",
          "Microbiologica di base (carica batterica, coliformi, E. coli, enterococchi)",
          "Durezza, conducibilità, cloro residuo, pH",
        ],
      },
      {
        heading: `Quando fare un'analisi a ${name}`,
        paragraphs: [
          `Le situazioni in cui un'analisi diventa particolarmente utile sono ricorrenti: arrivo di un neonato, gravidanza, ristrutturazione recente dell'impianto idraulico, acquisto o ingresso in un appartamento di cui non si conosce l'età delle tubazioni, percezione di un cambiamento nel sapore, nel colore o nell'odore dell'acqua. A ${name} è opportuno valutare un controllo anche al riavvio dell'utenza dopo periodi di assenza prolungati (chiusure estive, immobili lasciati vuoti).`,
        ],
      },
    ],
    faqs: [
      {
        q: `Le tubazioni in piombo sono ancora presenti a ${name}?`,
        a: "Nella rete pubblica di Iren Acqua il piombo è stato sostituito da tempo. Negli impianti interni dei condomini più antichi, invece, possono permanere tratti realizzati prima delle normative restrittive: l'unico modo per saperlo con certezza è un'analisi al rubinetto eseguita da un laboratorio qualificato.",
      },
      {
        q: `L'acqua di ${name} è dura?`,
        a: "L'acqua del rubinetto a Genova è tipicamente a durezza bassa-media, coerente con l'origine appenninica (invasi e sorgenti). La durezza non è un parametro sanitario, ma incide su gusto, formazione di calcare ed efficienza degli elettrodomestici.",
      },
      {
        q: `Devo bollire l'acqua del rubinetto a ${name}?`,
        a: "In condizioni ordinarie no. L'acqua distribuita da Iren Acqua è soggetta a controlli secondo il D.Lgs. 18/2023. Bollire l'acqua può ridurre la carica microbiologica ma concentra per evaporazione eventuali sali e metalli, quindi non è una strategia preventiva utile contro contaminazioni chimiche.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Iren Acqua pubblica i dati di qualità dell'acqua sul proprio portale istituzionale, organizzati per area di distribuzione. I controlli ufficiali sono inoltre svolti dalla ASL3 Genovese, mentre il monitoraggio ambientale è in capo ad ARPAL Liguria.",
      },
    ],
    ctaVariant,
    ctaContext: `Analisi dell'acqua di rubinetto a ${name} (Genova) con un laboratorio qualificato: durezza, microbiologica di base e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).`,
    relatedNeighborhoods: related,
  };
}

export const NEIGHBORHOODS_GENOVA: NeighborhoodGuide[] = QUARTIERI.map(buildGuide);
