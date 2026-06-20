export type CTAVariant =
  | "kit-analisi"
  | "laboratorio"
  | "rapporto-prova"
  | "metalli-pesanti"
  | "microbiologica"
  | "pfas"
  | "completa";

export interface NeighborhoodSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface NeighborhoodFAQ {
  q: string;
  a: string;
}

export interface NeighborhoodGuide {
  slug: string;
  citySlug: string;
  cityName: string;
  neighborhoodName: string;
  district: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  buildingAge:
    | "storico-pre1900"
    | "primo-novecento"
    | "dopoguerra"
    | "moderno"
    | "misto";
  typicalRisks: string[];
  sections: NeighborhoodSection[];
  faqs: NeighborhoodFAQ[];
  ctaVariant: CTAVariant;
  ctaContext: string;
  relatedNeighborhoods?: string[];
}

const ACEA_PARAGRAPH =
  "Il gestore del servizio idrico integrato per Roma è ACEA Ato 2 S.p.A., che cura captazione, adduzione e distribuzione. La rete capitolina è alimentata principalmente dalle sorgenti del Peschiera-Capore e da fonti collegate al sistema vulcanico dei Colli Albani: questa origine spiega la presenza naturale di fluoruri, una durezza medio-alta e un profilo minerale tipico dell'area laziale.";

const CONTROLS_PARAGRAPH =
  "I controlli sull'acqua distribuita seguono il D.Lgs. 18/2023, che recepisce la Direttiva UE 2020/2184: gli autocontrolli di ACEA Ato 2 lungo la filiera si affiancano ai controlli ufficiali della ASL Roma e al monitoraggio ambientale di ARPA Lazio. I referti per distretto sono consultabili sul portale del gestore.";

export const NEIGHBORHOOD_GUIDES: NeighborhoodGuide[] = [
  {
    slug: "roma-centro-storico",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Centro storico",
    district: "Municipio I",
    shortTitle:
      "Acqua del rubinetto nel Centro storico di Roma: cosa controllare",
    metaDescription:
      "Acqua del rubinetto nel Centro storico di Roma: rischio piombo nelle tubazioni di palazzi antichi, durezza, stagnazione e quando fare un'analisi.",
    searchKeywords: [
      "acqua centro storico roma",
      "acqua rubinetto centro storico roma",
      "tubazioni piombo centro storico roma",
      "qualità acqua roma centro",
      "piombo acqua palazzi storici roma",
      "analisi acqua roma centro",
      "acqua acea centro storico",
    ],
    intro:
      "Il Centro storico di Roma raccoglie i rioni dentro le Mura Aureliane, con un patrimonio edilizio in larga parte antecedente al Novecento e in molti casi pre-ottocentesco. La rete pubblica ACEA Ato 2 raggiunge ogni palazzo con acqua di buona qualità, ma il tratto più delicato è quello interno: colonne montanti, raccordi e diramazioni dei singoli appartamenti possono risalire a epoche in cui il piombo era un materiale ammesso. È la zona di Roma in cui ha più senso porsi il tema delle tubazioni interne e della stagnazione.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da tubazioni interne pre-1960",
      "Stagnazione in palazzi con appartamenti poco utilizzati",
      "Durezza medio-alta tipica di Roma",
      "Cloro residuo variabile nei punti più distali della rete",
    ],
    sections: [
      {
        heading:
          "L'acqua nel Centro storico di Roma: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Nel Centro storico la rete pubblica si innesta su edifici stratificati nei secoli: palazzi rinascimentali, barocchi e ottocenteschi in cui gli impianti idrici interni sono stati rifatti in fasi successive. Anche quando la rete condominiale è moderna, possono permanere tratti intermedi (colonne, allacci ai contatori, raccordi) realizzati prima del divieto di utilizzo del piombo in ambito idropotabile.",
        ],
        bullets: [
          "Edifici prevalentemente pre-1900, con impianti interni stratificati",
          "Tubazioni di adduzione pubblica generalmente rinnovate",
          "Possibili residui di vecchie linee in piombo nei tratti privati",
        ],
      },
      {
        heading: "Rischi specifici del Centro storico",
        paragraphs: [
          "La priorità in questa zona è il piombo. Non si tratta di un problema della rete ACEA, ma delle tubazioni interne ai palazzi: nei tratti più datati il metallo può cedere lentamente all'acqua, soprattutto se questa ristagna nelle ore notturne o nei periodi di assenza degli inquilini.",
          "Un secondo rischio è la stagnazione: appartamenti utilizzati saltuariamente (uso turistico, seconde case, uffici chiusi nel weekend) lasciano l'acqua ferma a lungo nelle tubazioni, aumentando il contatto con eventuali materiali rilascianti e la carica microbiologica residua.",
        ],
        bullets: [
          "Piombo a rubinetto in palazzi pre-1960 non integralmente ristrutturati",
          "Stagnazione in immobili a uso discontinuo",
          "Eventuali biofilm in tratti di rete poco utilizzati",
        ],
      },
      {
        heading: "Cosa controllare a casa nel Centro storico",
        paragraphs: [
          "Per chi vive in un palazzo antico del Centro, l'analisi più informativa è quella che combina metalli (in particolare piombo, rame, nichel) con un set microbiologico di base. Vale la pena valutare anche durezza e cloro residuo per inquadrare il profilo dell'acqua al rubinetto.",
          "Il prelievo va eseguito con metodi validati conformi a norme tecniche, da un laboratorio qualificato: il modo in cui si raccoglie il campione (first draw vs. acqua corrente) cambia il risultato sul piombo.",
        ],
        bullets: [
          "Piombo (priorità alta nei palazzi pre-1960)",
          "Rame e nichel da raccordi e rubinetteria",
          "Microbiologica di base (carica batterica, coliformi)",
          "Durezza, cloro residuo, pH",
        ],
      },
      {
        heading: "Quando fare un'analisi nel Centro storico",
        paragraphs: [
          "Ci sono situazioni concrete in cui un'analisi è particolarmente utile: presenza di neonati, gravidanza in corso, ristrutturazione recente dell'impianto, acquisto o ingresso in un appartamento storico, cambiamento avvertito del sapore o del colore dell'acqua dopo le prime erogazioni del mattino.",
          "Anche un riavvio dell'utenza dopo un periodo di assenza prolungato (chiusura estiva, immobile lasciato vuoto) è un buon momento per verificare il punto di erogazione.",
        ],
      },
      {
        heading: "Storia e casi noti del Centro storico",
        paragraphs: [
          "Il tema del piombo nelle tubazioni interne dei palazzi del Centro è ricorrente nei rapporti istituzionali sull'acqua delle grandi città italiane. Non riguarda la rete pubblica, ma una quota di impianti privati realizzati prima delle normative restrittive: per questo l'unica verifica davvero significativa è quella eseguita al rubinetto di casa.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti nel Centro storico di Roma?",
        a: "Nella rete pubblica ACEA Ato 2 il piombo è stato sostituito da tempo. Negli impianti interni dei palazzi storici, invece, possono permanere tratti realizzati prima delle normative restrittive: per saperlo con certezza serve un'analisi al rubinetto.",
      },
      {
        q: "L'acqua del Centro storico è dura?",
        a: "Sì, è mediamente dura, in linea con il resto della città. La durezza non è un problema sanitario, ma può causare incrostazioni su elettrodomestici e rubinetterie.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto nel Centro storico?",
        a: "In condizioni ordinarie non è necessario, perché l'acqua distribuita è potabile. Far scorrere l'acqua per qualche secondo al mattino è una buona pratica negli impianti antichi.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "ACEA Ato 2 pubblica i referti per distretto sul proprio sito istituzionale, con il dettaglio dei parametri principali misurati nei punti di prelievo.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto nel Centro storico di Roma con focus su piombo e metalli da tubazioni interne dei palazzi antichi.",
    relatedNeighborhoods: ["roma-trastevere", "roma-testaccio", "roma-prati"],
  },
  {
    slug: "roma-trastevere",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Trastevere",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Trastevere (Roma): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Trastevere: palazzi storici, possibili tubazioni in piombo, durezza, stagnazione e quando fare un'analisi nei rioni di Roma.",
    searchKeywords: [
      "acqua trastevere",
      "acqua rubinetto trastevere roma",
      "tubazioni piombo trastevere",
      "qualità acqua roma trastevere",
      "analisi acqua trastevere",
      "acqua acea trastevere",
    ],
    intro:
      "Trastevere è un rione storico della riva destra del Tevere, con un tessuto edilizio fatto di palazzine basse, edifici medievali rimaneggiati e palazzi otto-novecenteschi. Gran parte degli immobili è anteriore al 1900 e ha conosciuto stratificazioni di impianti idrici nei decenni. La rete pubblica ACEA Ato 2 porta acqua di buona qualità, ma negli appartamenti molto antichi la parte interna (colonne, raccordi, ultimi metri verso il rubinetto) può ancora contenere materiali datati. Trastevere ospita inoltre un alto numero di abitazioni a uso turistico, che amplificano il tema della stagnazione.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da impianti interni pre-1960",
      "Stagnazione in case vacanza e B&B",
      "Durezza medio-alta",
    ],
    sections: [
      {
        heading: "L'acqua a Trastevere: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Trastevere è uno dei rioni più antichi di Roma: la maggior parte degli edifici è di impianto pre-otto-novecentesco. Anche dove la facciata è stata conservata, gli impianti interni sono stati sostituiti più volte, ma non sempre in modo integrale: capita di trovare colonne montanti più recenti collegate a brevi tratti finali datati.",
        ],
      },
      {
        heading: "Rischi specifici di Trastevere",
        paragraphs: [
          "Come nel resto del Centro storico, il rischio principale è legato a eventuali residui di piombo nelle tubazioni interne. A questo si aggiunge la peculiarità di Trastevere come zona ad alta densità di affitti brevi: in molti appartamenti l'acqua resta ferma per giorni tra un soggiorno e l'altro, condizione che favorisce la cessione di metalli e l'accumulo di biofilm.",
        ],
        bullets: [
          "Piombo nei tratti residui di impianti pre-1960",
          "Stagnazione marcata in case vacanza, B&B, seconde case",
          "Cloro residuo variabile nei tratti distali",
        ],
      },
      {
        heading: "Cosa controllare a casa a Trastevere",
        paragraphs: [
          "Per gli appartamenti di Trastevere ha senso un'analisi che verifichi i metalli (piombo, rame, nichel), associata a parametri microbiologici di base. Durezza e cloro residuo aiutano a inquadrare la qualità organolettica.",
        ],
        bullets: [
          "Piombo (priorità in palazzi pre-1960)",
          "Carica microbiologica di base",
          "Durezza, conducibilità, pH",
        ],
      },
      {
        heading: "Quando fare un'analisi a Trastevere",
        paragraphs: [
          "Vale la pena fare un'analisi prima di trasferirsi in un appartamento storico, dopo una ristrutturazione che non ha rifatto integralmente l'impianto, in presenza di neonati o gravidanza, oppure quando si riaprono case vacanza dopo settimane di inutilizzo. Un cambiamento di sapore o di colore al risveglio è un altro segnale concreto.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Trastevere?",
        a: "La rete pubblica non utilizza più piombo, ma negli impianti interni di palazzi pre-1960 possono esserci tratti residui. Verificarlo richiede un'analisi al rubinetto.",
      },
      {
        q: "L'acqua di Trastevere è dura?",
        a: "Sì, è mediamente dura come il resto della città, con calcio e bicarbonati in quantità apprezzabili.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Trastevere?",
        a: "No, in condizioni ordinarie è potabile. Negli appartamenti con uso saltuario è consigliabile far scorrere l'acqua qualche secondo prima del primo utilizzo.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, nella sezione dedicata alla qualità dell'acqua, è possibile consultare i referti per distretto.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto a Trastevere (Roma) con focus su piombo, metalli e stagnazione negli appartamenti storici.",
    relatedNeighborhoods: [
      "roma-centro-storico",
      "roma-testaccio",
      "roma-monteverde",
    ],
  },
  {
    slug: "roma-prati",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Prati",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Prati (Roma): qualità e parametri",
    metaDescription:
      "Acqua del rubinetto a Prati: palazzi umbertini di inizio Novecento, tubazioni storiche residue, durezza tipica di Roma e quando fare un'analisi.",
    searchKeywords: [
      "acqua prati roma",
      "acqua rubinetto prati",
      "qualità acqua prati roma",
      "tubazioni piombo prati",
      "analisi acqua prati",
      "acqua acea prati",
    ],
    intro:
      "Il quartiere Prati nasce alla fine dell'Ottocento come zona residenziale borghese vicino al Vaticano. Il tessuto edilizio è dominato da palazzi umbertini di inizio Novecento, alti e regolari. Gli impianti idrici interni sono stati spesso rinnovati nel corso del secolo, ma in una parte degli edifici resistono ancora colonne montanti datate. Rispetto al Centro storico, il rischio piombo è inferiore ma non trascurabile, soprattutto negli stabili che non hanno mai subito una ristrutturazione integrale dell'impianto.",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Tubazioni interne datate in alcuni palazzi umbertini",
      "Possibile piombo residuo in tratti non rifatti",
      "Durezza medio-alta",
    ],
    sections: [
      {
        heading: "L'acqua a Prati: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Prati è caratterizzato da una griglia urbanistica regolare e da edifici di inizio Novecento. La rete pubblica è generalmente in buono stato; gli impianti interni dei palazzi sono spesso stati rifatti, ma con interventi parziali nel tempo.",
        ],
      },
      {
        heading: "Rischi specifici di Prati",
        paragraphs: [
          "Il rischio principale riguarda i tratti interni più datati dei palazzi storici. In alcuni edifici è possibile trovare ancora colonne o diramazioni risalenti ai primi decenni del Novecento, con materiali che oggi non sono più ammessi per l'acqua potabile.",
        ],
        bullets: [
          "Tubazioni residue di impianti datati in alcuni stabili",
          "Possibili tracce di piombo o rame",
          "Durezza tipica romana",
        ],
      },
      {
        heading: "Cosa controllare a casa a Prati",
        paragraphs: [
          "Per un appartamento a Prati il pacchetto di base più utile combina metalli (piombo, rame, nichel) con parametri chimici (durezza, conducibilità, cloro residuo). La microbiologica di base completa il quadro.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Prati",
        paragraphs: [
          "Un'analisi è particolarmente indicata quando si acquista o si entra in un palazzo storico non ristrutturato di recente, in presenza di neonati o gravidanza, dopo una ristrutturazione interna, o se si percepisce un cambiamento del sapore dell'acqua al mattino.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Prati?",
        a: "La rete pubblica non le utilizza. In alcuni palazzi umbertini possono restare tratti interni datati: solo un'analisi al rubinetto chiarisce se vi sia rilascio.",
      },
      {
        q: "L'acqua di Prati è dura?",
        a: "Sì, è in linea con la durezza media di Roma, medio-alta.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Prati?",
        a: "No, l'acqua distribuita è potabile. Nessun obbligo di bollitura in condizioni ordinarie.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul portale ACEA Ato 2 sono disponibili i referti per distretto, con il dettaglio dei parametri principali.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto a Prati (Roma) per verificare metalli e parametri chimici negli edifici umbertini.",
    relatedNeighborhoods: [
      "roma-centro-storico",
      "roma-parioli",
      "roma-aurelio",
    ],
  },
  {
    slug: "roma-testaccio",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Testaccio",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Testaccio (Roma): qualità e rischi",
    metaDescription:
      "Acqua del rubinetto a Testaccio: case popolari storiche, impianti interni datati, possibile piombo nei tratti privati e quando fare un'analisi.",
    searchKeywords: [
      "acqua testaccio",
      "acqua rubinetto testaccio roma",
      "qualità acqua testaccio",
      "tubazioni piombo testaccio",
      "analisi acqua testaccio roma",
      "acqua acea testaccio",
    ],
    intro:
      "Testaccio è un rione popolare storico, sviluppatosi tra fine Ottocento e inizi Novecento attorno al porto fluviale e all'ex mattatoio. Il patrimonio edilizio è in gran parte composto da case popolari e palazzine di quell'epoca. Gli impianti idrici interni sono stati ristrutturati in molti casi, ma una quota di edifici conserva ancora elementi datati. La rete ACEA Ato 2 è in buono stato; il tema, anche qui, riguarda l'ultimo tratto, dal contatore al rubinetto.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Impianti interni datati nelle case popolari storiche",
      "Possibile piombo in tratti residui",
      "Durezza medio-alta tipica di Roma",
    ],
    sections: [
      {
        heading: "L'acqua a Testaccio: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Testaccio è un rione storico nato come quartiere operaio: la trama urbana è regolare e gli edifici, in gran parte tra fine Ottocento e primi Novecento, ospitano impianti che hanno conosciuto interventi successivi nel tempo.",
        ],
      },
      {
        heading: "Rischi specifici di Testaccio",
        paragraphs: [
          "Il rischio principale è legato ai tratti interni più datati. Nelle case popolari storiche non sempre l'impianto idrico è stato rifatto integralmente: possono esistere tratti realizzati prima del divieto di utilizzo del piombo, soprattutto in case che non sono passate per ristrutturazioni profonde.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Testaccio",
        paragraphs: [
          "Il pacchetto utile per Testaccio combina metalli (piombo, rame, nichel), microbiologica di base e parametri chimici (durezza, cloro residuo, pH). Il prelievo va eseguito con metodi validati conformi a norme tecniche.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Testaccio",
        paragraphs: [
          "Triggers tipici: ingresso in un nuovo immobile storico, gravidanza, neonati, ristrutturazioni parziali, sapore o colore dell'acqua diversi dal solito, ripresa dopo lunghi periodi di inutilizzo.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Testaccio?",
        a: "La rete pubblica non utilizza piombo. Nei tratti privati delle case popolari storiche è possibile trovare ancora materiali datati: per saperlo serve un'analisi al rubinetto.",
      },
      {
        q: "L'acqua di Testaccio è dura?",
        a: "Sì, è mediamente dura come nel resto di Roma.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Testaccio?",
        a: "No, in condizioni ordinarie non serve. È una buona pratica far scorrere l'acqua qualche secondo al primo utilizzo del mattino.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2 sono pubblicati i referti per distretto, aggiornati periodicamente.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto a Testaccio (Roma) con focus su piombo e parametri chimici nelle case popolari storiche.",
    relatedNeighborhoods: [
      "roma-centro-storico",
      "roma-trastevere",
      "roma-portuense",
    ],
  },
  {
    slug: "roma-parioli",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Parioli",
    district: "Municipio II",
    shortTitle: "Acqua del rubinetto ai Parioli (Roma): durezza e parametri",
    metaDescription:
      "Acqua del rubinetto ai Parioli: quartiere residenziale, palazzi anni '20-'60, durezza tipica romana, parametri da controllare a casa.",
    searchKeywords: [
      "acqua parioli",
      "acqua rubinetto parioli roma",
      "qualità acqua parioli",
      "durezza acqua parioli",
      "analisi acqua parioli roma",
      "acqua acea parioli",
    ],
    intro:
      "I Parioli sono un quartiere residenziale di Roma sviluppatosi a partire dagli anni '20 del Novecento, con un'espansione importante negli anni '50 e '60. Il tessuto edilizio è composto da palazzi di buona qualità costruttiva, in molti casi ristrutturati. Il rischio piombo è inferiore rispetto al Centro storico, ma negli stabili più vecchi non si può escludere la presenza di tratti datati. La durezza dell'acqua è tipica della Roma settentrionale, medio-alta.",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Durezza medio-alta con incrostazioni",
      "Possibili tratti datati nei palazzi anni '20-'30",
      "Stagnazione in seconde case",
    ],
    sections: [
      {
        heading: "L'acqua ai Parioli: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Ai Parioli convivono palazzi degli anni '20-'30 e stabili del dopoguerra, spesso oggetto di ristrutturazioni significative. La rete pubblica è ben dimensionata e gli impianti interni sono in genere in buone condizioni.",
        ],
      },
      {
        heading: "Rischi specifici dei Parioli",
        paragraphs: [
          "Il rischio prevalente è la durezza, che può tradursi in incrostazioni su elettrodomestici e rubinetterie. In alcuni edifici più datati sono possibili tratti interni storici, ma la situazione è in genere migliore rispetto al Centro storico.",
        ],
      },
      {
        heading: "Cosa controllare a casa ai Parioli",
        paragraphs: [
          "Un pacchetto utile combina durezza, sodio, conducibilità, cloro residuo e una verifica dei metalli (piombo, rame, nichel) negli edifici più vecchi. La microbiologica di base completa il quadro.",
        ],
      },
      {
        heading: "Quando fare un'analisi ai Parioli",
        paragraphs: [
          "Triggers concreti: ingresso in un nuovo immobile, gravidanza, neonati, ristrutturazione, sapore cambiato. È utile anche per valutare la necessità di un trattamento di addolcimento.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti ai Parioli?",
        a: "Nei palazzi degli anni '20-'30 possono esserci tratti interni datati. Negli stabili più recenti il rischio è basso.",
      },
      {
        q: "L'acqua dei Parioli è dura?",
        a: "Sì, ha durezza medio-alta in linea con la zona nord di Roma.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto ai Parioli?",
        a: "No, l'acqua è potabile in condizioni ordinarie.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, nella sezione qualità dell'acqua, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi completa acqua di rubinetto ai Parioli (Roma) per verificare durezza, metalli e profilo chimico-microbiologico.",
    relatedNeighborhoods: ["roma-prati", "roma-tiburtino", "roma-centro-storico"],
  },
  {
    slug: "roma-aurelio",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Aurelio",
    district: "Municipio XIII",
    shortTitle: "Acqua del rubinetto in zona Aurelio (Roma): cosa sapere",
    metaDescription:
      "Acqua del rubinetto in zona Aurelio a Roma: palazzi del dopoguerra, durezza tipica, manutenzione condominiale e quando fare un'analisi.",
    searchKeywords: [
      "acqua aurelio roma",
      "acqua rubinetto aurelio",
      "qualità acqua aurelio roma",
      "analisi acqua aurelio",
      "durezza acqua aurelio",
      "acqua acea aurelio",
    ],
    intro:
      "La zona Aurelio si sviluppa lungo l'asse della via Aurelia, a ovest del centro. È un quartiere residenziale prevalentemente del dopoguerra, con palazzine costruite tra gli anni '50 e '80. Gli impianti idrici interni sono in genere relativamente recenti e i rischi tipici delle aree storiche (piombo nelle tubazioni antiche) sono ridotti. L'attenzione si sposta sulla manutenzione condominiale e sui parametri chimici tipici della rete romana.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Durezza medio-alta tipica di Roma",
      "Manutenzione condominiale di autoclavi e serbatoi",
      "Stagnazione in immobili poco usati",
    ],
    sections: [
      {
        heading: "L'acqua in zona Aurelio: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "L'Aurelio è una zona residenziale del dopoguerra, con palazzine costruite in larga parte dopo il 1950. Gli impianti idrici condominiali sono in genere posteriori alle normative restrittive sul piombo per uso idropotabile.",
        ],
      },
      {
        heading: "Rischi specifici dell'Aurelio",
        paragraphs: [
          "I rischi tipici sono qui legati alla manutenzione condominiale: serbatoi di accumulo, autoclavi e tratti di rete interna possono dare luogo, se non manutenuti, a problemi microbiologici o organolettici. La durezza tipica di Roma resta un fattore da considerare.",
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Aurelio",
        paragraphs: [
          "Per l'Aurelio è utile un pacchetto che includa parametri chimici (durezza, conducibilità, cloro residuo, sodio) e microbiologica di base. Le verifiche su piombo sono in genere meno prioritarie rispetto al Centro storico, ma restano utili in singoli stabili.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Aurelio",
        paragraphs: [
          "Triggers tipici: cambio casa, presenza di neonati, sapore cambiato, lavori condominiali sulla rete, autoclavi rumorose o irregolari, lunghi periodi di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti in zona Aurelio?",
        a: "Nei palazzi del dopoguerra il rischio è molto basso. Solo per stabili più vecchi vicini al centro può esserci qualche tratto datato.",
      },
      {
        q: "L'acqua dell'Aurelio è dura?",
        a: "Sì, è in linea con la durezza media di Roma, medio-alta.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto in zona Aurelio?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul portale ACEA Ato 2, nella sezione qualità dell'acqua per distretto.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto in zona Aurelio (Roma) con focus su parametri chimici, microbiologica e manutenzione condominiale.",
    relatedNeighborhoods: ["roma-prati", "roma-monteverde", "roma-portuense"],
  },
  {
    slug: "roma-monteverde",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Monteverde",
    district: "Municipio XII",
    shortTitle: "Acqua del rubinetto a Monteverde (Roma): parametri e controlli",
    metaDescription:
      "Acqua del rubinetto a Monteverde: zona collinare di Roma, palazzi dal dopoguerra a oggi, durezza tipica e quando fare un'analisi.",
    searchKeywords: [
      "acqua monteverde roma",
      "acqua rubinetto monteverde",
      "qualità acqua monteverde roma",
      "analisi acqua monteverde",
      "durezza acqua monteverde",
      "acqua acea monteverde",
    ],
    intro:
      "Monteverde è un quartiere collinare a ovest del Tevere, articolato tra una parte più vecchia (Monteverde Vecchio) di inizio Novecento e una più estesa del dopoguerra (Monteverde Nuovo). Convivono dunque palazzine d'epoca e stabili moderni. Le caratteristiche dell'acqua sono quelle tipiche di Roma: durezza medio-alta, fluoruri presenti per ragioni geologiche, qualità complessivamente buona. I rischi sono distribuiti in funzione dell'età dell'edificio.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Tratti datati in palazzi di Monteverde Vecchio",
      "Manutenzione condominiale negli stabili più moderni",
      "Durezza medio-alta",
    ],
    sections: [
      {
        heading: "L'acqua a Monteverde: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "A Monteverde Vecchio convivono palazzine di inizio Novecento; a Monteverde Nuovo prevalgono gli stabili del dopoguerra. Gli impianti interni rispecchiano questa stratificazione.",
        ],
      },
      {
        heading: "Rischi specifici di Monteverde",
        paragraphs: [
          "Nelle zone più antiche del quartiere possono restare tratti datati negli impianti interni; nelle zone più moderne il tema è la manutenzione dei serbatoi e delle autoclavi. La durezza è la costante.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Monteverde",
        paragraphs: [
          "Pacchetto consigliato: durezza, conducibilità, cloro residuo, microbiologica di base. Nei palazzi più vecchi va aggiunta la verifica dei metalli (piombo, rame, nichel).",
        ],
      },
      {
        heading: "Quando fare un'analisi a Monteverde",
        paragraphs: [
          "Triggers tipici: cambio casa, neonati, gravidanza, ristrutturazioni, lavori sulle parti comuni, sapore o colore cambiati.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Monteverde?",
        a: "Negli edifici di Monteverde Vecchio è possibile trovare tratti datati. Nei palazzi del dopoguerra il rischio è basso.",
      },
      {
        q: "L'acqua di Monteverde è dura?",
        a: "Sì, in linea con il resto di Roma.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Monteverde?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto a Monteverde (Roma) per profilo chimico, microbiologica e verifica metalli nei palazzi storici del quartiere.",
    relatedNeighborhoods: ["roma-trastevere", "roma-portuense", "roma-aurelio"],
  },
  {
    slug: "roma-tuscolano",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Tuscolano",
    district: "Municipio VII",
    shortTitle: "Acqua del rubinetto al Tuscolano (Roma): cosa controllare",
    metaDescription:
      "Acqua del rubinetto al Tuscolano: quartiere popolare del dopoguerra, durezza tipica romana, manutenzione condominiale e quando fare un'analisi.",
    searchKeywords: [
      "acqua tuscolano",
      "acqua rubinetto tuscolano roma",
      "qualità acqua tuscolano",
      "analisi acqua tuscolano",
      "durezza acqua tuscolano",
      "acqua acea tuscolano",
    ],
    intro:
      "Il Tuscolano è uno dei grandi quartieri popolari del dopoguerra di Roma, sviluppatosi lungo la via Tuscolana. Il patrimonio edilizio è composto in larga parte da palazzine costruite tra gli anni '50 e '70, spesso a impianto INA-Casa. Gli impianti idrici sono generalmente posteriori alle normative restrittive sul piombo: i rischi sono più legati alla manutenzione condominiale che alle tubazioni storiche.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Manutenzione di autoclavi e serbatoi condominiali",
      "Durezza medio-alta",
      "Stagnazione in immobili poco usati",
    ],
    sections: [
      {
        heading: "L'acqua al Tuscolano: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Il Tuscolano è dominato da palazzi del dopoguerra. Le reti interne sono in larga parte successive al 1960 e meno esposte al tema piombo rispetto alle aree storiche.",
        ],
      },
      {
        heading: "Rischi specifici del Tuscolano",
        paragraphs: [
          "I rischi prevalenti sono legati alla manutenzione: serbatoi di accumulo, autoclavi e tratti di rete interna se non manutenuti possono dare problemi microbiologici o organolettici.",
        ],
      },
      {
        heading: "Cosa controllare a casa al Tuscolano",
        paragraphs: [
          "Pacchetto utile: durezza, conducibilità, sodio, cloro residuo, microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi al Tuscolano",
        paragraphs: [
          "Triggers concreti: cambio casa, presenza di neonati, sapore cambiato, lavori sulle parti comuni, ripresa dopo lunghi periodi di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti al Tuscolano?",
        a: "Nei palazzi del dopoguerra il rischio è basso; vale la pena verificare solo negli stabili più vecchi del quartiere.",
      },
      {
        q: "L'acqua del Tuscolano è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto al Tuscolano?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto al Tuscolano (Roma) con focus su parametri chimici e microbiologica nei condomini del dopoguerra.",
    relatedNeighborhoods: ["roma-quadraro", "roma-centocelle", "roma-tiburtino"],
  },
  {
    slug: "roma-tiburtino",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Tiburtino",
    district: "Municipio IV",
    shortTitle: "Acqua del rubinetto al Tiburtino (Roma): qualità e parametri",
    metaDescription:
      "Acqua del rubinetto al Tiburtino: quartiere del dopoguerra a Roma, durezza tipica, manutenzione condominiale e parametri da controllare a casa.",
    searchKeywords: [
      "acqua tiburtino",
      "acqua rubinetto tiburtino roma",
      "qualità acqua tiburtino",
      "analisi acqua tiburtino",
      "durezza acqua tiburtino",
      "acqua acea tiburtino",
    ],
    intro:
      "Il Tiburtino è un'ampia area a nord-est di Roma, attraversata dalla via Tiburtina. Il quartiere si è sviluppato soprattutto nel dopoguerra, con un mix di palazzine residenziali e zone artigianali e industriali. Gli impianti idrici condominiali sono generalmente posteriori al 1960. I parametri da seguire sono quelli tipici della rete romana: durezza, eventuale variabilità del cloro residuo nei punti distali, microbiologica.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Durezza medio-alta",
      "Manutenzione condominiale",
      "Cloro residuo variabile",
    ],
    sections: [
      {
        heading: "L'acqua al Tiburtino: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Il Tiburtino è prevalentemente del dopoguerra. Gli impianti interni dei condomini sono in genere relativamente recenti.",
        ],
      },
      {
        heading: "Rischi specifici del Tiburtino",
        paragraphs: [
          "I temi sono comuni alle zone residenziali del dopoguerra: manutenzione di autoclavi e serbatoi, durezza, eventuale variabilità organolettica nei punti più distali della rete.",
        ],
      },
      {
        heading: "Cosa controllare a casa al Tiburtino",
        paragraphs: [
          "Pacchetto utile: durezza, conducibilità, cloro residuo, microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi al Tiburtino",
        paragraphs: [
          "Triggers concreti: cambio casa, neonati, sapore cambiato, lavori sulle parti comuni, ripresa dopo chiusure prolungate.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti al Tiburtino?",
        a: "Nei palazzi del dopoguerra il rischio è basso. Negli stabili più vecchi della parte interna è opportuno verificare.",
      },
      {
        q: "L'acqua del Tiburtino è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto al Tiburtino?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto al Tiburtino (Roma) per verificare profilo chimico e microbiologica nei condomini del dopoguerra.",
    relatedNeighborhoods: ["roma-casalbertone", "roma-pigneto", "roma-san-lorenzo"],
  },
  {
    slug: "roma-portuense",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Portuense",
    district: "Municipio XI",
    shortTitle: "Acqua del rubinetto al Portuense (Roma): cosa sapere",
    metaDescription:
      "Acqua del rubinetto al Portuense: quartiere del dopoguerra a Roma, durezza tipica romana, manutenzione condominiale e quando fare un'analisi.",
    searchKeywords: [
      "acqua portuense",
      "acqua rubinetto portuense roma",
      "qualità acqua portuense",
      "analisi acqua portuense",
      "durezza acqua portuense",
      "acqua acea portuense",
    ],
    intro:
      "Il Portuense si estende lungo la via Portuense, a sud-ovest di Roma. È un quartiere residenziale del dopoguerra, con palazzine costruite tra gli anni '50 e '80 e alcune zone più recenti. Gli impianti idrici sono generalmente posteriori alle normative restrittive sul piombo. Le caratteristiche dell'acqua sono quelle tipiche della rete capitolina, con durezza medio-alta e profilo minerale stabile.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Durezza medio-alta",
      "Manutenzione di autoclavi e serbatoi condominiali",
      "Stagnazione in seconde case",
    ],
    sections: [
      {
        heading: "L'acqua al Portuense: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Il Portuense è un quartiere residenziale del dopoguerra: gli impianti idrici interni dei condomini sono in larga parte relativamente recenti.",
        ],
      },
      {
        heading: "Rischi specifici del Portuense",
        paragraphs: [
          "Il rischio piombo è basso. I temi prevalenti sono la manutenzione condominiale e la durezza dell'acqua, che può causare incrostazioni su elettrodomestici e rubinetterie.",
        ],
      },
      {
        heading: "Cosa controllare a casa al Portuense",
        paragraphs: [
          "Pacchetto consigliato: durezza, conducibilità, sodio, cloro residuo, microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi al Portuense",
        paragraphs: [
          "Triggers tipici: cambio casa, gravidanza, neonati, sapore cambiato, lavori condominiali, lunghi periodi di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti al Portuense?",
        a: "Nei palazzi del dopoguerra il rischio è basso.",
      },
      {
        q: "L'acqua del Portuense è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto al Portuense?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto al Portuense (Roma) per verificare profilo chimico, durezza e microbiologica.",
    relatedNeighborhoods: ["roma-magliana", "roma-monteverde", "roma-aurelio"],
  },
  {
    slug: "roma-eur",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "EUR",
    district: "Municipio IX",
    shortTitle: "Acqua del rubinetto all'EUR (Roma): qualità e parametri",
    metaDescription:
      "Acqua del rubinetto all'EUR: quartiere moderno di Roma, impianti recenti, durezza tipica romana e parametri da controllare a casa.",
    searchKeywords: [
      "acqua eur roma",
      "acqua rubinetto eur",
      "qualità acqua eur roma",
      "analisi acqua eur",
      "durezza acqua eur",
      "acqua acea eur",
    ],
    intro:
      "L'EUR è un quartiere di impianto moderno, sviluppatosi a partire dagli anni '50-'60 attorno al nucleo razionalista degli anni '30-'40. È un'area con edilizia residenziale, direzionale e terziaria in larga parte costruita o ricostruita nella seconda metà del Novecento. Gli impianti idrici sono moderni, con rischi piombo molto bassi. L'attenzione si concentra sulla manutenzione degli impianti centralizzati e sui parametri chimici tipici di Roma.",
    buildingAge: "moderno",
    typicalRisks: [
      "Durezza medio-alta",
      "Manutenzione di impianti centralizzati negli stabili direzionali",
      "Stagnazione in uffici durante i weekend",
    ],
    sections: [
      {
        heading: "L'acqua all'EUR: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "All'EUR convivono edilizia residenziale e direzionale realizzata in larga parte tra anni '50 e '90. Gli impianti idrici sono moderni e gli interventi di manutenzione sono in genere ben tracciati.",
        ],
      },
      {
        heading: "Rischi specifici dell'EUR",
        paragraphs: [
          "Il rischio piombo è molto basso. Più rilevante è la gestione degli impianti centralizzati di accumulo e ricircolo (autoclavi, addolcitori, reti antincendio collegate) e la stagnazione nei punti d'uso di uffici e direzionali nei weekend o nei periodi di ferie.",
        ],
      },
      {
        heading: "Cosa controllare a casa all'EUR",
        paragraphs: [
          "Pacchetto utile: durezza, conducibilità, sodio, cloro residuo, microbiologica di base. Nei direzionali con utilizzo intermittente è opportuno valutare anche il rischio Legionella sulle reti calde, in capo al gestore dell'immobile.",
        ],
      },
      {
        heading: "Quando fare un'analisi all'EUR",
        paragraphs: [
          "Triggers tipici: cambio casa, neonati, gravidanza, lavori condominiali, sapore cambiato. Negli uffici al rientro da lunghe chiusure è una buona pratica eseguire una verifica organolettica.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti all'EUR?",
        a: "Il rischio è molto basso, essendo un quartiere di costruzione moderna.",
      },
      {
        q: "L'acqua dell'EUR è dura?",
        a: "Sì, in linea con la media romana, medio-alta.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto all'EUR?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, nella sezione qualità dell'acqua per distretto.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto all'EUR (Roma) per verificare durezza, microbiologica e profilo chimico in residenziale e direzionale.",
    relatedNeighborhoods: ["roma-laurentino", "roma-magliana", "roma-ostia"],
  },
  {
    slug: "roma-laurentino",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Laurentino",
    district: "Municipio IX",
    shortTitle: "Acqua del rubinetto al Laurentino (Roma): cosa controllare",
    metaDescription:
      "Acqua del rubinetto al Laurentino: quartiere moderno anni '70 a Roma, impianti centralizzati, durezza tipica e parametri da controllare a casa.",
    searchKeywords: [
      "acqua laurentino",
      "acqua rubinetto laurentino roma",
      "qualità acqua laurentino",
      "analisi acqua laurentino",
      "durezza acqua laurentino",
      "acqua acea laurentino",
    ],
    intro:
      "Il Laurentino è un quartiere a sud di Roma, sviluppatosi negli anni '70 attorno al noto complesso del Laurentino 38 e in altre lottizzazioni successive. È un'area moderna, con grandi complessi residenziali e impianti idrici centralizzati. Il rischio piombo è basso; i temi rilevanti riguardano la manutenzione delle reti interne e dei serbatoi condominiali.",
    buildingAge: "moderno",
    typicalRisks: [
      "Durezza medio-alta",
      "Manutenzione di serbatoi e autoclavi in grandi complessi",
      "Stagnazione nei rami di rete poco utilizzati",
    ],
    sections: [
      {
        heading: "L'acqua al Laurentino: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Il Laurentino è costituito in larga parte da complessi residenziali degli anni '70-'80, con impianti idrici centralizzati e serbatoi di accumulo.",
        ],
      },
      {
        heading: "Rischi specifici del Laurentino",
        paragraphs: [
          "I principali fattori critici sono la manutenzione dei serbatoi condominiali e la stagnazione nei rami di rete interna poco utilizzati. La durezza dell'acqua è quella tipica di Roma.",
        ],
      },
      {
        heading: "Cosa controllare a casa al Laurentino",
        paragraphs: [
          "Pacchetto consigliato: durezza, conducibilità, cloro residuo, microbiologica di base. Negli alloggi con impianti di addolcimento condominiali può essere utile valutare il sodio.",
        ],
      },
      {
        heading: "Quando fare un'analisi al Laurentino",
        paragraphs: [
          "Triggers concreti: cambio casa, gravidanza, neonati, sapore cambiato, lavori sulle parti comuni, problemi noti a serbatoi o autoclavi.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti al Laurentino?",
        a: "Il rischio è molto basso, essendo un quartiere costruito dopo le normative restrittive.",
      },
      {
        q: "L'acqua del Laurentino è dura?",
        a: "Sì, in linea con la durezza media di Roma.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto al Laurentino?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto al Laurentino (Roma) per verificare microbiologica e profilo chimico in grandi complessi residenziali.",
    relatedNeighborhoods: ["roma-eur", "roma-magliana", "roma-ostia"],
  },
  {
    slug: "roma-magliana",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Magliana",
    district: "Municipio XI",
    shortTitle: "Acqua del rubinetto alla Magliana (Roma): qualità e parametri",
    metaDescription:
      "Acqua del rubinetto alla Magliana: quartiere del dopoguerra di Roma, durezza tipica, manutenzione condominiale e parametri da controllare.",
    searchKeywords: [
      "acqua magliana",
      "acqua rubinetto magliana roma",
      "qualità acqua magliana",
      "analisi acqua magliana",
      "durezza acqua magliana",
      "acqua acea magliana",
    ],
    intro:
      "La Magliana è un quartiere a sud di Roma, sviluppatosi nel dopoguerra in zone in parte soggette al regime del fiume Tevere. L'edilizia residenziale è prevalentemente degli anni '50-'70. Gli impianti idrici sono in genere posteriori alle normative restrittive sul piombo; i temi prevalenti sono manutenzione condominiale e parametri tipici della rete romana.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Durezza medio-alta",
      "Manutenzione di autoclavi e serbatoi condominiali",
      "Stagnazione in case poco abitate",
    ],
    sections: [
      {
        heading: "L'acqua alla Magliana: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "La Magliana è un quartiere residenziale del dopoguerra: gli impianti idrici condominiali sono in larga parte successivi al 1960.",
        ],
      },
      {
        heading: "Rischi specifici della Magliana",
        paragraphs: [
          "Il rischio piombo è basso; i temi prevalenti sono manutenzione condominiale e durezza dell'acqua.",
        ],
      },
      {
        heading: "Cosa controllare a casa alla Magliana",
        paragraphs: [
          "Pacchetto consigliato: durezza, conducibilità, sodio, cloro residuo, microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi alla Magliana",
        paragraphs: [
          "Triggers tipici: cambio casa, neonati, gravidanza, sapore cambiato, lavori condominiali, lunghi periodi di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti alla Magliana?",
        a: "Nei palazzi del dopoguerra il rischio è basso.",
      },
      {
        q: "L'acqua della Magliana è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto alla Magliana?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto alla Magliana (Roma) con focus su profilo chimico, durezza e microbiologica.",
    relatedNeighborhoods: ["roma-portuense", "roma-eur", "roma-ostia"],
  },
  {
    slug: "roma-casalbertone",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Casal Bertone",
    district: "Municipio V",
    shortTitle: "Acqua del rubinetto a Casal Bertone (Roma): parametri",
    metaDescription:
      "Acqua del rubinetto a Casal Bertone: quartiere del dopoguerra a Roma, durezza tipica, manutenzione condominiale e quando fare un'analisi.",
    searchKeywords: [
      "acqua casal bertone",
      "acqua rubinetto casal bertone roma",
      "qualità acqua casal bertone",
      "analisi acqua casal bertone",
      "durezza acqua casal bertone",
      "acqua acea casal bertone",
    ],
    intro:
      "Casal Bertone è un quartiere residenziale a est di Roma, sviluppatosi prevalentemente nel dopoguerra a ridosso della linea ferroviaria. Il tessuto edilizio è dominato da palazzine costruite tra gli anni '50 e '80. Gli impianti idrici interni sono in genere posteriori alle normative restrittive sul piombo, con rischi più legati alla manutenzione condominiale che alle vecchie tubazioni.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Durezza medio-alta",
      "Manutenzione di autoclavi e serbatoi",
      "Cloro residuo variabile",
    ],
    sections: [
      {
        heading: "L'acqua a Casal Bertone: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Casal Bertone è un quartiere prevalentemente del dopoguerra. Gli impianti interni dei condomini sono in larga parte relativamente recenti.",
        ],
      },
      {
        heading: "Rischi specifici di Casal Bertone",
        paragraphs: [
          "I temi sono comuni alle zone residenziali del dopoguerra: durezza tipica romana, manutenzione di autoclavi e serbatoi, eventuale variabilità organolettica nei punti più distali della rete.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Casal Bertone",
        paragraphs: [
          "Pacchetto consigliato: durezza, conducibilità, cloro residuo, microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Casal Bertone",
        paragraphs: [
          "Triggers tipici: cambio casa, gravidanza, neonati, sapore cambiato, lavori sulle parti comuni, ripresa dopo lunghi periodi di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Casal Bertone?",
        a: "Nei palazzi del dopoguerra il rischio è basso.",
      },
      {
        q: "L'acqua di Casal Bertone è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Casal Bertone?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto a Casal Bertone (Roma) per profilo chimico e microbiologica nei condomini del dopoguerra.",
    relatedNeighborhoods: ["roma-pigneto", "roma-tiburtino", "roma-san-lorenzo"],
  },
  {
    slug: "roma-pigneto",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Pigneto",
    district: "Municipio V",
    shortTitle: "Acqua del rubinetto al Pigneto (Roma): cosa controllare",
    metaDescription:
      "Acqua del rubinetto al Pigneto: ex quartiere popolare riqualificato di Roma, edifici di inizio Novecento, possibili tratti datati e parametri da analizzare.",
    searchKeywords: [
      "acqua pigneto",
      "acqua rubinetto pigneto roma",
      "qualità acqua pigneto",
      "tubazioni piombo pigneto",
      "analisi acqua pigneto",
      "acqua acea pigneto",
    ],
    intro:
      "Il Pigneto è un quartiere a est di Roma, nato a inizio Novecento come zona popolare e oggi profondamente riqualificato. Il patrimonio edilizio è composto da villini, palazzine basse e piccoli edifici di inizio secolo, in parte ristrutturati. Gli impianti idrici interni possono essere stati rifatti in modo parziale e in alcuni edifici sopravvivono tratti datati. È una zona in cui ha senso un controllo orientato anche ai metalli.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Tratti residui di impianti pre-1960",
      "Possibile piombo nelle tubazioni interne",
      "Durezza medio-alta",
    ],
    sections: [
      {
        heading: "L'acqua al Pigneto: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Il Pigneto è un quartiere di villini e palazzine basse a impianto storico, con un patrimonio edilizio di inizio Novecento e successive stratificazioni.",
        ],
      },
      {
        heading: "Rischi specifici del Pigneto",
        paragraphs: [
          "Pur in un contesto riqualificato, il tema delle tubazioni interne datate resta presente in alcuni edifici. Il rischio piombo va valutato in funzione dell'epoca di ultima ristrutturazione dell'impianto idrico.",
        ],
      },
      {
        heading: "Cosa controllare a casa al Pigneto",
        paragraphs: [
          "Pacchetto utile: metalli (piombo, rame, nichel), microbiologica di base, durezza e cloro residuo. Il prelievo va eseguito con metodi validati conformi a norme tecniche.",
        ],
      },
      {
        heading: "Quando fare un'analisi al Pigneto",
        paragraphs: [
          "Triggers concreti: ingresso in un nuovo immobile, ristrutturazione, gravidanza, neonati, sapore cambiato, dubbi sull'età dell'impianto.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti al Pigneto?",
        a: "In alcuni edifici di inizio Novecento è possibile trovare tratti residui di impianti datati: solo un'analisi al rubinetto chiarisce se vi sia rilascio.",
      },
      {
        q: "L'acqua del Pigneto è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto al Pigneto?",
        a: "No, l'acqua distribuita è potabile. È utile far scorrere l'acqua qualche secondo al mattino.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto al Pigneto (Roma) con focus su piombo e metalli nelle palazzine storiche di inizio Novecento.",
    relatedNeighborhoods: [
      "roma-torpignattara",
      "roma-centocelle",
      "roma-san-lorenzo",
    ],
  },
  {
    slug: "roma-san-lorenzo",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "San Lorenzo",
    district: "Municipio II",
    shortTitle: "Acqua del rubinetto a San Lorenzo (Roma): qualità e rischi",
    metaDescription:
      "Acqua del rubinetto a San Lorenzo: quartiere popolare storico di Roma, palazzine di fine Ottocento, possibili tubazioni datate e parametri da controllare.",
    searchKeywords: [
      "acqua san lorenzo roma",
      "acqua rubinetto san lorenzo",
      "qualità acqua san lorenzo",
      "tubazioni piombo san lorenzo",
      "analisi acqua san lorenzo roma",
      "acqua acea san lorenzo",
    ],
    intro:
      "San Lorenzo è un quartiere storico a est della Sapienza, nato come quartiere operaio a fine Ottocento. Le palazzine sono in gran parte di quel periodo e dei primi del Novecento, con un'identità popolare e universitaria. Gli impianti idrici interni sono spesso stratificati: ristrutturazioni successive convivono con tratti datati. Il rischio piombo, in alcuni edifici, resta da verificare.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo residuo in palazzine ottocentesche",
      "Stagnazione in alloggi universitari poco occupati",
      "Durezza medio-alta",
    ],
    sections: [
      {
        heading: "L'acqua a San Lorenzo: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "San Lorenzo conserva palazzine di fine Ottocento e primi Novecento. Gli impianti idrici interni sono stati spesso rifatti in modo parziale.",
        ],
      },
      {
        heading: "Rischi specifici di San Lorenzo",
        paragraphs: [
          "Il tema centrale è il piombo nei tratti residui degli impianti interni. A questo si somma la stagnazione in molti alloggi a uso studentesco, occupati saltuariamente o lasciati vuoti per periodi prolungati.",
        ],
      },
      {
        heading: "Cosa controllare a casa a San Lorenzo",
        paragraphs: [
          "Pacchetto utile: metalli (piombo, rame, nichel), microbiologica di base, durezza e cloro residuo.",
        ],
      },
      {
        heading: "Quando fare un'analisi a San Lorenzo",
        paragraphs: [
          "Triggers tipici: ingresso in un nuovo immobile, gravidanza, neonati, ristrutturazioni, ripresa dopo lunghi periodi di chiusura, sapore o colore cambiati.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a San Lorenzo?",
        a: "Nelle palazzine ottocentesche è possibile trovare tratti interni datati. La rete pubblica non utilizza più piombo.",
      },
      {
        q: "L'acqua di San Lorenzo è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a San Lorenzo?",
        a: "No, in condizioni ordinarie non è necessario. Vale la pena far scorrere l'acqua al primo utilizzo del mattino negli alloggi storici.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto a San Lorenzo (Roma) con focus su piombo e stagnazione negli alloggi storici e universitari.",
    relatedNeighborhoods: [
      "roma-pigneto",
      "roma-tiburtino",
      "roma-centro-storico",
    ],
  },
  {
    slug: "roma-quadraro",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Quadraro",
    district: "Municipio V",
    shortTitle: "Acqua del rubinetto al Quadraro (Roma): cosa sapere",
    metaDescription:
      "Acqua del rubinetto al Quadraro: quartiere del dopoguerra di Roma, durezza tipica, manutenzione condominiale e quando fare un'analisi.",
    searchKeywords: [
      "acqua quadraro",
      "acqua rubinetto quadraro roma",
      "qualità acqua quadraro",
      "analisi acqua quadraro",
      "durezza acqua quadraro",
      "acqua acea quadraro",
    ],
    intro:
      "Il Quadraro è un quartiere a sud-est di Roma, dal forte carattere storico-popolare ma sviluppatosi nella sua forma attuale soprattutto nel dopoguerra. Convivono palazzine di varie epoche, con un nucleo più antico e ampliamenti successivi tra anni '50 e '70. Gli impianti idrici condominiali sono in larga parte posteriori alle normative restrittive sul piombo: il tema centrale è la manutenzione, oltre alla durezza tipica romana.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Durezza medio-alta",
      "Manutenzione di autoclavi e serbatoi",
      "Tratti datati nei nuclei più storici",
    ],
    sections: [
      {
        heading: "L'acqua al Quadraro: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Il Quadraro è dominato da palazzine del dopoguerra, con un piccolo nucleo più storico. Gli impianti interni dei condomini sono in larga parte successivi al 1960.",
        ],
      },
      {
        heading: "Rischi specifici del Quadraro",
        paragraphs: [
          "Manutenzione condominiale e durezza dell'acqua sono i temi principali. Per i pochi edifici più antichi va valutata anche la presenza di tratti datati.",
        ],
      },
      {
        heading: "Cosa controllare a casa al Quadraro",
        paragraphs: [
          "Pacchetto utile: durezza, conducibilità, cloro residuo, microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi al Quadraro",
        paragraphs: [
          "Triggers tipici: cambio casa, neonati, gravidanza, sapore cambiato, lavori condominiali.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti al Quadraro?",
        a: "Nei palazzi del dopoguerra il rischio è basso. Solo per gli edifici più vecchi del nucleo storico è opportuno verificare.",
      },
      {
        q: "L'acqua del Quadraro è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto al Quadraro?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto al Quadraro (Roma) per durezza, microbiologica e profilo chimico nei condomini del dopoguerra.",
    relatedNeighborhoods: ["roma-tuscolano", "roma-centocelle", "roma-torpignattara"],
  },
  {
    slug: "roma-torpignattara",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Torpignattara",
    district: "Municipio V",
    shortTitle: "Acqua del rubinetto a Torpignattara (Roma): parametri",
    metaDescription:
      "Acqua del rubinetto a Torpignattara: quartiere misto di Roma, palazzine di varie epoche, durezza tipica e parametri da controllare.",
    searchKeywords: [
      "acqua torpignattara",
      "acqua rubinetto torpignattara roma",
      "qualità acqua torpignattara",
      "tubazioni piombo torpignattara",
      "analisi acqua torpignattara",
      "acqua acea torpignattara",
    ],
    intro:
      "Torpignattara è un quartiere a est di Roma, con un tessuto edilizio misto che va da palazzine di inizio Novecento fino a edifici del dopoguerra. È una zona multiculturale, densamente abitata, in cui convivono nuclei storici e ampliamenti successivi. Per gli impianti idrici questo si traduce in una situazione eterogenea: il rischio piombo non è uniforme e va valutato per singolo edificio.",
    buildingAge: "misto",
    typicalRisks: [
      "Mix di impianti antichi e moderni",
      "Possibile piombo in palazzine pre-1960",
      "Durezza medio-alta",
    ],
    sections: [
      {
        heading: "L'acqua a Torpignattara: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Torpignattara è un quartiere misto: convivono palazzine di inizio Novecento ed edifici del dopoguerra. Gli impianti idrici interni rispecchiano questa eterogeneità.",
        ],
      },
      {
        heading: "Rischi specifici di Torpignattara",
        paragraphs: [
          "Per le palazzine più antiche resta il tema del piombo nei tratti interni datati; per gli stabili del dopoguerra prevale il tema della manutenzione condominiale.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Torpignattara",
        paragraphs: [
          "Pacchetto utile: metalli (piombo, rame, nichel) negli edifici più vecchi; durezza, cloro residuo, microbiologica di base sempre.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Torpignattara",
        paragraphs: [
          "Triggers tipici: cambio casa in un edificio storico, ristrutturazioni, gravidanza, neonati, sapore cambiato, lavori condominiali.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Torpignattara?",
        a: "Solo nei tratti interni più datati delle palazzine pre-1960. La rete pubblica non utilizza piombo.",
      },
      {
        q: "L'acqua di Torpignattara è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Torpignattara?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto a Torpignattara (Roma) per verifica metalli, durezza e microbiologica in edifici di varie epoche.",
    relatedNeighborhoods: ["roma-pigneto", "roma-centocelle", "roma-quadraro"],
  },
  {
    slug: "roma-centocelle",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Centocelle",
    district: "Municipio V",
    shortTitle: "Acqua del rubinetto a Centocelle (Roma): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Centocelle: quartiere del dopoguerra di Roma, durezza tipica, manutenzione condominiale e parametri da controllare.",
    searchKeywords: [
      "acqua centocelle",
      "acqua rubinetto centocelle roma",
      "qualità acqua centocelle",
      "analisi acqua centocelle",
      "durezza acqua centocelle",
      "acqua acea centocelle",
    ],
    intro:
      "Centocelle è un quartiere residenziale a est di Roma, sviluppatosi tra dopoguerra e anni '70. Il patrimonio edilizio è dominato da palazzine di quegli anni, con impianti idrici condominiali generalmente posteriori al 1960. I rischi tipici sono quelli delle zone moderne di Roma: durezza, manutenzione condominiale, eventuale variabilità organolettica nei punti distali.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Durezza medio-alta",
      "Manutenzione di autoclavi e serbatoi",
      "Cloro residuo variabile",
    ],
    sections: [
      {
        heading: "L'acqua a Centocelle: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Centocelle è un quartiere prevalentemente del dopoguerra. Gli impianti idrici dei condomini sono in larga parte relativamente recenti.",
        ],
      },
      {
        heading: "Rischi specifici di Centocelle",
        paragraphs: [
          "I temi prevalenti sono manutenzione condominiale e durezza dell'acqua. Il rischio piombo è basso.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Centocelle",
        paragraphs: [
          "Pacchetto utile: durezza, conducibilità, sodio, cloro residuo, microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Centocelle",
        paragraphs: [
          "Triggers tipici: cambio casa, neonati, gravidanza, sapore cambiato, lavori condominiali, lunghi periodi di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Centocelle?",
        a: "Nei palazzi del dopoguerra il rischio è basso.",
      },
      {
        q: "L'acqua di Centocelle è dura?",
        a: "Sì, in linea con la media romana.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Centocelle?",
        a: "No, in condizioni ordinarie non è necessario.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto a Centocelle (Roma) per verifica durezza, microbiologica e profilo chimico nei condomini del dopoguerra.",
    relatedNeighborhoods: ["roma-torpignattara", "roma-quadraro", "roma-tuscolano"],
  },
  {
    slug: "roma-ostia",
    citySlug: "roma",
    cityName: "Roma",
    neighborhoodName: "Ostia",
    district: "Municipio X",
    shortTitle: "Acqua del rubinetto a Ostia (Roma): qualità e specificità costiere",
    metaDescription:
      "Acqua del rubinetto a Ostia: litorale di Roma, mix edilizio, atmosfera marina e parametri da controllare con focus su sodio, durezza e microbiologica.",
    searchKeywords: [
      "acqua ostia roma",
      "acqua rubinetto ostia",
      "qualità acqua ostia",
      "acqua mare ostia rubinetto",
      "analisi acqua ostia",
      "durezza acqua ostia",
      "acqua acea ostia",
    ],
    intro:
      "Ostia è la zona costiera di Roma, sviluppatasi a partire dagli anni '20 del Novecento con un'espansione importante nel dopoguerra e fino agli anni '80. Convivono palazzine d'epoca, edilizia degli anni '50-'70 e quartieri più moderni. L'acqua è erogata dalla rete ACEA Ato 2 ed è quella della rete romana; il contesto costiero, con atmosfera marina e una falda con possibile interazione salina nei tratti più vicini al mare, suggerisce attenzione ai parametri di conducibilità e sodio, oltre alla microbiologica.",
    buildingAge: "misto",
    typicalRisks: [
      "Conducibilità e sodio da valutare in zone costiere",
      "Manutenzione di serbatoi in stabili balneari a uso stagionale",
      "Stagnazione marcata in seconde case",
      "Aggressività dell'atmosfera marina su rubinetterie",
    ],
    sections: [
      {
        heading: "L'acqua a Ostia: contesto urbano e tubazioni",
        paragraphs: [
          ACEA_PARAGRAPH,
          "Ostia è una zona costiera con edilizia stratificata tra anni '20 e oggi. Una quota significativa del patrimonio immobiliare è destinata a uso stagionale, condizione che incide sulla stagnazione nelle reti interne.",
        ],
      },
      {
        heading: "Rischi specifici di Ostia",
        paragraphs: [
          "In contesto costiero, fra le specificità da tenere d'occhio, ci sono il monitoraggio di conducibilità e sodio (utili a inquadrare eventuali interazioni con falde superficiali), la manutenzione delle reti interne in case stagionali e la stagnazione marcata nelle seconde case riaperte a inizio estate.",
          "L'atmosfera marina è inoltre aggressiva su componenti metallici di rubinetterie e raccordi, con possibile cessione accelerata in caso di materiali non idonei.",
        ],
        bullets: [
          "Conducibilità e sodio come indicatori di profilo",
          "Stagnazione in seconde case e affitti turistici",
          "Manutenzione di serbatoi in stabili a uso stagionale",
          "Usura accelerata della rubinetteria da atmosfera salina",
        ],
      },
      {
        heading: "Cosa controllare a casa a Ostia",
        paragraphs: [
          "Pacchetto utile: durezza, conducibilità, sodio, cloruri, cloro residuo, microbiologica di base. Nei palazzi più vecchi è opportuno aggiungere la verifica dei metalli (piombo, rame, nichel). Il prelievo va eseguito con metodi validati conformi a norme tecniche.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Ostia",
        paragraphs: [
          "Triggers tipici: riapertura di una casa stagionale, cambio sapore o colore, lavori condominiali, neonati, gravidanza, dubbi sull'età dell'impianto, gestione di affitti turistici.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Ostia?",
        a: "Negli edifici più vecchi possono esserci tratti residui di impianti datati; nei palazzi più recenti il rischio è basso.",
      },
      {
        q: "L'acqua di Ostia è dura?",
        a: "Sì, è in linea con la media romana, medio-alta.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Ostia?",
        a: "No, in condizioni ordinarie non è necessario. Alla riapertura delle case stagionali è consigliato far scorrere abbondantemente l'acqua prima del primo utilizzo.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Sul sito di ACEA Ato 2, per distretto di appartenenza.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto a Ostia (Roma) con focus su sodio, conducibilità, microbiologica e metalli, anche in case stagionali sul litorale.",
    relatedNeighborhoods: ["roma-eur", "roma-laurentino", "roma-magliana"],
  },
  {
    slug: "milano-centro",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Centro",
    district: "Municipio 1",
    shortTitle: "Acqua del rubinetto a Centro (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Centro, Milano (Municipio 1). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua centro milano", "acqua rubinetto centro", "qualita acqua milano centro", "tubazioni piombo centro", "durezza acqua milano centro"],
    intro: "Centro è il cuore storico dentro la cerchia dei Navigli, parte del Municipio 1. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Centro il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Centro aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Tubazioni vetuste centro storico", "Stagnazione condomini d'epoca", "Possibili tracce di piombo"],
    sections: [
      {
        heading: "L'acqua a Centro: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Centro, parte del Municipio 1, la rete è caratterizzata da edifici di varia epoca: il cuore storico dentro la cerchia dei Navigli. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Centro",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Centro",
        paragraphs: [
          "Per famiglie residenti a Centro consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Centro",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Centro, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Centro?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Centro è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Centro?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Centro (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-brera",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Brera",
    district: "Municipio 1",
    shortTitle: "Acqua del rubinetto a Brera (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Brera, Milano (Municipio 1). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua brera milano", "acqua rubinetto brera", "qualita acqua milano brera", "tubazioni piombo brera", "durezza acqua milano brera"],
    intro: "Brera è il quartiere d'arte di Milano, parte del Municipio 1. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Brera il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Brera aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Tubazioni edifici storici", "Piombo possibile in palazzi pre-1960", "Calcare diffuso"],
    sections: [
      {
        heading: "L'acqua a Brera: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Brera, parte del Municipio 1, la rete è caratterizzata da edifici di varia epoca: il quartiere d'arte di Milano. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Brera",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Brera",
        paragraphs: [
          "Per famiglie residenti a Brera consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Brera",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Brera, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Brera?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Brera è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Brera?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Brera (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-porta-romana",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Porta Romana",
    district: "Municipio 5",
    shortTitle: "Acqua del rubinetto a Porta Romana (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Porta Romana, Milano (Municipio 5). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua porta romana milano", "acqua rubinetto porta romana", "qualita acqua milano porta romana", "tubazioni piombo porta romana", "durezza acqua milano porta romana"],
    intro: "Porta Romana è l'area tra centro e periferia sud, parte del Municipio 5. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Porta Romana il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Porta Romana aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Mix tubazioni storiche e rifatte", "Durezza alta", "Condomini di varie epoche"],
    sections: [
      {
        heading: "L'acqua a Porta Romana: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Porta Romana, parte del Municipio 5, la rete è caratterizzata da edifici di varia epoca: l'area tra centro e periferia sud. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Porta Romana",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Porta Romana",
        paragraphs: [
          "Per famiglie residenti a Porta Romana consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Porta Romana",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Porta Romana, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Porta Romana?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Porta Romana è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Porta Romana?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Porta Romana (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-porta-venezia",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Porta Venezia",
    district: "Municipio 3",
    shortTitle: "Acqua del rubinetto a Porta Venezia (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Porta Venezia, Milano (Municipio 3). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua porta venezia milano", "acqua rubinetto porta venezia", "qualita acqua milano porta venezia", "tubazioni piombo porta venezia", "durezza acqua milano porta venezia"],
    intro: "Porta Venezia è il quartiere Liberty, parte del Municipio 3. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Porta Venezia il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Porta Venezia aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Edifici Liberty con impianti datati", "Durezza alta", "Possibile piombo in palazzi storici"],
    sections: [
      {
        heading: "L'acqua a Porta Venezia: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Porta Venezia, parte del Municipio 3, la rete è caratterizzata da edifici di varia epoca: il quartiere Liberty. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Porta Venezia",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Porta Venezia",
        paragraphs: [
          "Per famiglie residenti a Porta Venezia consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Porta Venezia",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Porta Venezia, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Porta Venezia?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Porta Venezia è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Porta Venezia?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Porta Venezia (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-garibaldi",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Garibaldi",
    district: "Municipio 9",
    shortTitle: "Acqua del rubinetto a Garibaldi (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Garibaldi, Milano (Municipio 9). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua garibaldi milano", "acqua rubinetto garibaldi", "qualita acqua milano garibaldi", "tubazioni piombo garibaldi", "durezza acqua milano garibaldi"],
    intro: "Garibaldi è Porta Nuova con la parte storica, parte del Municipio 9. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Garibaldi il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Garibaldi aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Mix edifici storici e nuovissimi", "Durezza alta tipica milanese", "Tubazioni recenti nei nuovi grattacieli"],
    sections: [
      {
        heading: "L'acqua a Garibaldi: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Garibaldi, parte del Municipio 9, la rete è caratterizzata da edifici di varia epoca: Porta Nuova con la parte storica. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Garibaldi",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Garibaldi",
        paragraphs: [
          "Per famiglie residenti a Garibaldi consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Garibaldi",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Garibaldi, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Garibaldi?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Garibaldi è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Garibaldi?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Garibaldi (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-navigli",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Navigli",
    district: "Municipio 6",
    shortTitle: "Acqua del rubinetto a Navigli (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Navigli, Milano (Municipio 6). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua navigli milano", "acqua rubinetto navigli", "qualita acqua milano navigli", "tubazioni piombo navigli", "durezza acqua milano navigli"],
    intro: "Navigli è i Navigli storici di Milano, parte del Municipio 6. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Navigli il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Navigli aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Edifici storici lungo le vie d'acqua", "Tubazioni datate", "Piombo possibile"],
    sections: [
      {
        heading: "L'acqua a Navigli: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Navigli, parte del Municipio 6, la rete è caratterizzata da edifici di varia epoca: i Navigli storici di Milano. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Navigli",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Navigli",
        paragraphs: [
          "Per famiglie residenti a Navigli consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Navigli",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Navigli, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Navigli?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Navigli è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Navigli?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Navigli (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-isola",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Isola",
    district: "Municipio 9",
    shortTitle: "Acqua del rubinetto a Isola (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Isola, Milano (Municipio 9). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua isola milano", "acqua rubinetto isola", "qualita acqua milano isola", "tubazioni piombo isola", "durezza acqua milano isola"],
    intro: "Isola è il quartiere riqualificato vicino a Porta Nuova, parte del Municipio 9. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Isola il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Isola aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Riqualificazione 2010+", "Mix tubazioni storiche e nuove", "Durezza alta"],
    sections: [
      {
        heading: "L'acqua a Isola: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Isola, parte del Municipio 9, la rete è caratterizzata da edifici di varia epoca: il quartiere riqualificato vicino a Porta Nuova. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Isola",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Isola",
        paragraphs: [
          "Per famiglie residenti a Isola consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Isola",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Isola, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Isola?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Isola è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Isola?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Isola (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-sempione",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Sempione",
    district: "Municipio 8",
    shortTitle: "Acqua del rubinetto a Sempione (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Sempione, Milano (Municipio 8). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua sempione milano", "acqua rubinetto sempione", "qualita acqua milano sempione", "tubazioni piombo sempione", "durezza acqua milano sempione"],
    intro: "Sempione è l'area attorno al Parco Sempione, parte del Municipio 8. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Sempione il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Sempione aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Edifici Liberty e anni '20", "Tubazioni storiche", "Durezza alta"],
    sections: [
      {
        heading: "L'acqua a Sempione: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Sempione, parte del Municipio 8, la rete è caratterizzata da edifici di varia epoca: l'area attorno al Parco Sempione. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Sempione",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Sempione",
        paragraphs: [
          "Per famiglie residenti a Sempione consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Sempione",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Sempione, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Sempione?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Sempione è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Sempione?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Sempione (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-citylife",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "CityLife",
    district: "Municipio 8",
    shortTitle: "Acqua del rubinetto a CityLife (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a CityLife, Milano (Municipio 8). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua citylife milano", "acqua rubinetto citylife", "qualita acqua milano citylife", "tubazioni piombo citylife", "durezza acqua milano citylife"],
    intro: "CityLife è il quartiere di nuova costruzione con le Torri, parte del Municipio 8. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come CityLife il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a CityLife aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "moderno",
    typicalRisks: ["Tubazioni nuove (anni 2010+)", "Durezza alta", "Bassi rischi piombo"],
    sections: [
      {
        heading: "L'acqua a CityLife: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A CityLife, parte del Municipio 8, la rete è caratterizzata da edifici di varia epoca: il quartiere di nuova costruzione con le Torri. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a CityLife",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a CityLife",
        paragraphs: [
          "Per famiglie residenti a CityLife consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a CityLife",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a CityLife, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a CityLife?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di CityLife è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a CityLife?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a CityLife (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-cinque-giornate",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Cinque Giornate",
    district: "Municipio 4",
    shortTitle: "Acqua del rubinetto a Cinque Giornate (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Cinque Giornate, Milano (Municipio 4). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua cinque giornate milano", "acqua rubinetto cinque giornate", "qualita acqua milano cinque giornate", "tubazioni piombo cinque giornate", "durezza acqua milano cinque giornate"],
    intro: "Cinque Giornate è l'area tra centro e Calvairate, parte del Municipio 4. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Cinque Giornate il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Cinque Giornate aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Edifici primi '900", "Durezza alta", "Condomini di varie epoche"],
    sections: [
      {
        heading: "L'acqua a Cinque Giornate: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Cinque Giornate, parte del Municipio 4, la rete è caratterizzata da edifici di varia epoca: l'area tra centro e Calvairate. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Cinque Giornate",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Cinque Giornate",
        paragraphs: [
          "Per famiglie residenti a Cinque Giornate consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Cinque Giornate",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Cinque Giornate, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Cinque Giornate?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Cinque Giornate è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Cinque Giornate?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Cinque Giornate (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-bicocca",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Bicocca",
    district: "Municipio 9",
    shortTitle: "Acqua del rubinetto a Bicocca (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Bicocca, Milano (Municipio 9). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua bicocca milano", "acqua rubinetto bicocca", "qualita acqua milano bicocca", "tubazioni piombo bicocca", "durezza acqua milano bicocca"],
    intro: "Bicocca è l'area universitaria a nord, parte del Municipio 9. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Bicocca il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Bicocca aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Riqualificazione ex industriale 2000+", "Durezza alta", "Tubazioni miste"],
    sections: [
      {
        heading: "L'acqua a Bicocca: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Bicocca, parte del Municipio 9, la rete è caratterizzata da edifici di varia epoca: l'area universitaria a nord. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Bicocca",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Bicocca",
        paragraphs: [
          "Per famiglie residenti a Bicocca consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Bicocca",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Bicocca, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Bicocca?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Bicocca è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Bicocca?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Bicocca (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-bovisa",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Bovisa",
    district: "Municipio 9",
    shortTitle: "Acqua del rubinetto a Bovisa (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Bovisa, Milano (Municipio 9). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua bovisa milano", "acqua rubinetto bovisa", "qualita acqua milano bovisa", "tubazioni piombo bovisa", "durezza acqua milano bovisa"],
    intro: "Bovisa è l'ex zona industriale a nord-ovest, parte del Municipio 9. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Bovisa il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Bovisa aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Edifici anni '50-'70", "Durezza alta", "Tubazioni miste in alcune palazzine"],
    sections: [
      {
        heading: "L'acqua a Bovisa: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Bovisa, parte del Municipio 9, la rete è caratterizzata da edifici di varia epoca: l'ex zona industriale a nord-ovest. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Bovisa",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Bovisa",
        paragraphs: [
          "Per famiglie residenti a Bovisa consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Bovisa",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Bovisa, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Bovisa?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Bovisa è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Bovisa?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Bovisa (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-quarto-oggiaro",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Quarto Oggiaro",
    district: "Municipio 8",
    shortTitle: "Acqua del rubinetto a Quarto Oggiaro (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Quarto Oggiaro, Milano (Municipio 8). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua quarto oggiaro milano", "acqua rubinetto quarto oggiaro", "qualita acqua milano quarto oggiaro", "tubazioni piombo quarto oggiaro", "durezza acqua milano quarto oggiaro"],
    intro: "Quarto Oggiaro è l'area popolare a nord-ovest, parte del Municipio 8. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Quarto Oggiaro il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Quarto Oggiaro aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Edifici anni '60-'70", "Tubazioni da manutenzione", "Durezza alta"],
    sections: [
      {
        heading: "L'acqua a Quarto Oggiaro: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Quarto Oggiaro, parte del Municipio 8, la rete è caratterizzata da edifici di varia epoca: l'area popolare a nord-ovest. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Quarto Oggiaro",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Quarto Oggiaro",
        paragraphs: [
          "Per famiglie residenti a Quarto Oggiaro consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Quarto Oggiaro",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Quarto Oggiaro, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Quarto Oggiaro?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Quarto Oggiaro è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Quarto Oggiaro?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Quarto Oggiaro (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-affori",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Affori",
    district: "Municipio 9",
    shortTitle: "Acqua del rubinetto a Affori (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Affori, Milano (Municipio 9). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua affori milano", "acqua rubinetto affori", "qualita acqua milano affori", "tubazioni piombo affori", "durezza acqua milano affori"],
    intro: "Affori è il quartiere a nord di Milano, parte del Municipio 9. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Affori il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Affori aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Edifici anni '50-'70", "Durezza alta", "Condomini di periferia nord"],
    sections: [
      {
        heading: "L'acqua a Affori: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Affori, parte del Municipio 9, la rete è caratterizzata da edifici di varia epoca: il quartiere a nord di Milano. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Affori",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Affori",
        paragraphs: [
          "Per famiglie residenti a Affori consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Affori",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Affori, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Affori?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Affori è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Affori?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Affori (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-greco",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Greco",
    district: "Municipio 2",
    shortTitle: "Acqua del rubinetto a Greco (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Greco, Milano (Municipio 2). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua greco milano", "acqua rubinetto greco", "qualita acqua milano greco", "tubazioni piombo greco", "durezza acqua milano greco"],
    intro: "Greco è il quartiere residenziale a nord-est, parte del Municipio 2. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Greco il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Greco aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Edifici primi '900 e dopoguerra", "Durezza alta", "Tubazioni miste"],
    sections: [
      {
        heading: "L'acqua a Greco: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Greco, parte del Municipio 2, la rete è caratterizzata da edifici di varia epoca: il quartiere residenziale a nord-est. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Greco",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Greco",
        paragraphs: [
          "Per famiglie residenti a Greco consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Greco",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Greco, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Greco?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Greco è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Greco?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Greco (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-lambrate",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Lambrate",
    district: "Municipio 3",
    shortTitle: "Acqua del rubinetto a Lambrate (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Lambrate, Milano (Municipio 3). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua lambrate milano", "acqua rubinetto lambrate", "qualita acqua milano lambrate", "tubazioni piombo lambrate", "durezza acqua milano lambrate"],
    intro: "Lambrate è l'area est tra ferrovia e Lambro, parte del Municipio 3. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Lambrate il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Lambrate aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Mix industriale-residenziale", "Durezza alta", "Tubazioni varie età"],
    sections: [
      {
        heading: "L'acqua a Lambrate: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Lambrate, parte del Municipio 3, la rete è caratterizzata da edifici di varia epoca: l'area est tra ferrovia e Lambro. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Lambrate",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Lambrate",
        paragraphs: [
          "Per famiglie residenti a Lambrate consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Lambrate",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Lambrate, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Lambrate?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Lambrate è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Lambrate?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Lambrate (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-forlanini",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Forlanini",
    district: "Municipio 4",
    shortTitle: "Acqua del rubinetto a Forlanini (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Forlanini, Milano (Municipio 4). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua forlanini milano", "acqua rubinetto forlanini", "qualita acqua milano forlanini", "tubazioni piombo forlanini", "durezza acqua milano forlanini"],
    intro: "Forlanini è la zona vicino all'aeroporto Linate, parte del Municipio 4. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Forlanini il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Forlanini aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Edifici dopoguerra", "Durezza alta", "Vicinanza area Linate"],
    sections: [
      {
        heading: "L'acqua a Forlanini: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Forlanini, parte del Municipio 4, la rete è caratterizzata da edifici di varia epoca: la zona vicino all'aeroporto Linate. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Forlanini",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Forlanini",
        paragraphs: [
          "Per famiglie residenti a Forlanini consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Forlanini",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Forlanini, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Forlanini?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Forlanini è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Forlanini?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Forlanini (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-baggio",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Baggio",
    district: "Municipio 7",
    shortTitle: "Acqua del rubinetto a Baggio (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Baggio, Milano (Municipio 7). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua baggio milano", "acqua rubinetto baggio", "qualita acqua milano baggio", "tubazioni piombo baggio", "durezza acqua milano baggio"],
    intro: "Baggio è l'ex borgo a ovest, parte del Municipio 7. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Baggio il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Baggio aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Mix borgo storico e dopoguerra", "Durezza alta", "Tubazioni miste"],
    sections: [
      {
        heading: "L'acqua a Baggio: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Baggio, parte del Municipio 7, la rete è caratterizzata da edifici di varia epoca: l'ex borgo a ovest. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Baggio",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Baggio",
        paragraphs: [
          "Per famiglie residenti a Baggio consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Baggio",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Baggio, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Baggio?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Baggio è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Baggio?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Baggio (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-lorenteggio",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Lorenteggio",
    district: "Municipio 6",
    shortTitle: "Acqua del rubinetto a Lorenteggio (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Lorenteggio, Milano (Municipio 6). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua lorenteggio milano", "acqua rubinetto lorenteggio", "qualita acqua milano lorenteggio", "tubazioni piombo lorenteggio", "durezza acqua milano lorenteggio"],
    intro: "Lorenteggio è l'area sud-ovest, parte del Municipio 6. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Lorenteggio il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Lorenteggio aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Edifici anni '60", "Durezza alta", "Condomini popolari"],
    sections: [
      {
        heading: "L'acqua a Lorenteggio: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Lorenteggio, parte del Municipio 6, la rete è caratterizzata da edifici di varia epoca: l'area sud-ovest. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Lorenteggio",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Lorenteggio",
        paragraphs: [
          "Per famiglie residenti a Lorenteggio consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Lorenteggio",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Lorenteggio, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Lorenteggio?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Lorenteggio è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Lorenteggio?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Lorenteggio (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "milano-barona",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "Barona",
    district: "Municipio 6",
    shortTitle: "Acqua del rubinetto a Barona (Milano): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Barona, Milano (Municipio 6). Gestore MM SpA, durezza tipicamente alta, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua barona milano", "acqua rubinetto barona", "qualita acqua milano barona", "tubazioni piombo barona", "durezza acqua milano barona"],
    intro: "Barona è l'area popolare a sud-ovest, parte del Municipio 6. L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella media milanese. In quartieri come Barona il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Barona aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Edifici anni '60-'70", "Durezza alta", "Tubazioni periferiche"],
    sections: [
      {
        heading: "L'acqua a Barona: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Milano è MM SpA (Metropolitana Milanese), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete milanese è alimentata principalmente dalla falda lombarda profonda e da apporti dalle sorgenti prealpine.",
          "A Barona, parte del Municipio 6, la rete è caratterizzata da edifici di varia epoca: l'area popolare a sud-ovest. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Barona",
        paragraphs: [
          "In quartieri di costruzione più recente come questo, il rischio di tubazioni in piombo è basso: i materiali principali sono rame, acciaio inox o polietilene. Resta importante la cura della manutenzione condominiale e la sostituzione periodica di guarnizioni e filtri.",
          "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Barona",
        paragraphs: [
          "Per famiglie residenti a Barona consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Barona",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Barona, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Barona?", a: "Negli edifici di questa zona, di costruzione più recente, le tubazioni in piombo sono molto rare. Il rischio principale è minore rispetto al centro storico." },
      { q: "L'acqua di Barona è dura?", a: "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza intorno ai 30-45 gradi francesi), in linea con il profilo della falda lombarda. È normale, non pericolosa per la salute, ma influisce su elettrodomestici e gusto." },
      { q: "Devo bollire l'acqua del rubinetto a Barona?", a: "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per municipio e zona di distribuzione." }
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Barona (Milano) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  }
];

const NEIGHBORHOOD_INDEX: Map<string, NeighborhoodGuide> = new Map(
  NEIGHBORHOOD_GUIDES.map((guide) => [guide.slug, guide]),
);

export function getNeighborhoodBySlug(
  slug: string,
): NeighborhoodGuide | undefined {
  return NEIGHBORHOOD_INDEX.get(slug);
}

export function getNeighborhoodsByCity(citySlug: string): NeighborhoodGuide[] {
  return NEIGHBORHOOD_GUIDES.filter((guide) => guide.citySlug === citySlug);
}
