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
  },
  {
    slug: "torino-centro",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Centro",
    district: "Circoscrizione 1",
    shortTitle: "Acqua del rubinetto in Centro a Torino: cosa controllare",
    metaDescription: "Acqua del rubinetto in Centro a Torino: tubazioni storiche, durezza, controlli SMAT e quando ha senso un'analisi al rubinetto.",
    searchKeywords: ["acqua centro torino", "acqua rubinetto torino centro", "tubazioni piombo torino centro", "qualità acqua smat centro", "analisi acqua torino centro"],
    intro: "Il Centro di Torino (Circoscrizione 1) raccoglie il cuore storico della città, con palazzi sabaudi e ottocenteschi spesso ristrutturati ma con impianti interni stratificati. La rete pubblica gestita da SMAT distribuisce acqua di buona qualità, prevalentemente di origine alpina e di falda profonda. Nei palazzi storici il punto debole resta l'impianto interno: colonne montanti, raccordi e diramazioni possono risalire a epoche in cui il piombo era ancora ammesso negli usi idropotabili.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da tubazioni interne pre-1960 in palazzi storici",
      "Stagnazione in immobili a uso discontinuo (uffici, B&B)",
      "Durezza variabile, mediamente medio-bassa in centro",
    ],
    sections: [
      {
        heading: "L'acqua in Centro a Torino: contesto urbano e tubazioni",
        paragraphs: [
          "Il servizio idrico integrato del Comune di Torino è gestito da SMAT S.p.A. (Società Metropolitana Acque Torino), che cura captazione, potabilizzazione e distribuzione. La rete cittadina è alimentata principalmente da pozzi di falda profonda, sorgenti alpine e quote di acque superficiali trattate (Sangone, Stura).",
          "In Centro convivono edifici sabaudi, palazzi ottocenteschi e qualche inserimento novecentesco: gli impianti interni sono stati rifatti in fasi successive, ma non sempre integralmente. È plausibile la presenza di tratti vetusti in tubazioni private."
        ],
        bullets: ["Edifici prevalentemente pre-1900", "Tubazioni pubbliche rinnovate da SMAT", "Possibili residui di linee in piombo nei tratti privati"],
      },
      {
        heading: "Rischi specifici del Centro",
        paragraphs: [
          "Il rischio principale in Centro è il rilascio di piombo da tubazioni interne ai palazzi storici, soprattutto in presenza di stagnazione notturna. Un secondo fronte è rappresentato dagli immobili a uso discontinuo (uffici, B&B, seconde case) dove l'acqua resta ferma a lungo nelle condutture.",
        ],
        bullets: ["Piombo a rubinetto in palazzi pre-1960", "Stagnazione in immobili a uso turistico", "Cloro residuo variabile"],
      },
      {
        heading: "Cosa controllare a casa in Centro",
        paragraphs: [
          "Per chi vive in un palazzo storico del Centro di Torino, il pacchetto più informativo combina metalli (piombo, rame, nichel) con una microbiologica di base. Vale la pena valutare anche durezza e cloro residuo per inquadrare il profilo dell'acqua al rubinetto.",
          "Il prelievo va eseguito con metodi validati conformi a norme tecniche, da un laboratorio qualificato."
        ],
        bullets: ["Piombo (priorità alta nei palazzi pre-1960)", "Rame e nichel da rubinetterie", "Microbiologica di base", "Durezza, cloro residuo, pH"],
      },
      {
        heading: "Quando fare un'analisi in Centro",
        paragraphs: [
          "Situazioni concrete in cui un'analisi è utile: presenza di neonati, gravidanza, ristrutturazione recente, acquisto di un appartamento storico, cambiamento avvertito di sapore o colore, riavvio dell'utenza dopo un'assenza prolungata."
        ],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Centro?", a: "Nella rete pubblica SMAT il piombo è stato sostituito da tempo. Negli impianti interni dei palazzi storici del Centro possono permanere tratti antecedenti alle normative restrittive: per saperlo con certezza serve un'analisi al rubinetto." },
      { q: "L'acqua di Centro è dura?", a: "In Centro la durezza è generalmente medio-bassa (intorno ai 20-30 gradi francesi), grazie all'origine alpina e di falda profonda dell'acqua SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Centro?", a: "Sì, l'acqua distribuita da SMAT è potabile e controllata secondo il D.Lgs. 18/2023. Nei palazzi storici è buona pratica far scorrere l'acqua qualche secondo al mattino." },
      { q: "Dove trovo i referti del gestore?", a: "SMAT pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per zona di distribuzione. ARPA Piemonte e ASL Città di Torino curano controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto in Centro a Torino: priorità ai metalli (piombo, rame, nichel) nei palazzi storici, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-crocetta", "torino-quadrilatero-romano", "torino-san-salvario"],
  },
  {
    slug: "torino-crocetta",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Crocetta",
    district: "Circoscrizione 1",
    shortTitle: "Acqua del rubinetto in Crocetta (Torino): cosa sapere",
    metaDescription: "Acqua del rubinetto in Crocetta a Torino: palazzi Liberty e primi '900, controlli SMAT, durezza e quando fare un'analisi al rubinetto.",
    searchKeywords: ["acqua crocetta torino", "acqua rubinetto crocetta", "qualità acqua smat crocetta", "tubazioni crocetta torino", "analisi acqua torino crocetta"],
    intro: "La Crocetta è un quartiere residenziale e prestigioso della Circoscrizione 1, caratterizzato da palazzi Liberty e di primo Novecento. La rete SMAT distribuisce qui acqua di buona qualità, ma gli impianti interni di edifici di un secolo possono presentare tratti datati. Il tema principale è la verifica dei materiali a valle del contatore, in particolare nei condomini dove non sono mai stati eseguiti rifacimenti integrali.",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Piombo o ottone con piombo in raccordi pre-1960",
      "Stagnazione in appartamenti a uso saltuario",
      "Durezza medio-bassa tipica della rete torinese",
    ],
    sections: [
      {
        heading: "L'acqua in Crocetta: contesto e tubazioni",
        paragraphs: [
          "Il gestore SMAT alimenta la Crocetta con acqua di origine prevalentemente alpina e di falda profonda, con conducibilità medio-bassa e fluoruri contenuti. Gli stabili Liberty e primo Novecento del quartiere sono in larga parte ben mantenuti, ma le colonne montanti originali, ove non sostituite, possono contenere tratti misti.",
        ],
        bullets: ["Edifici primo Novecento ben conservati", "Rete pubblica SMAT moderna", "Possibili colonne montanti non rinnovate"],
      },
      {
        heading: "Rischi specifici in Crocetta",
        paragraphs: ["Il rischio dominante è il rilascio di piombo da tubazioni interne non sostituite. Aggiungiamo il consueto tema della stagnazione e una possibile variabilità del cloro residuo."],
        bullets: ["Piombo in raccordi pre-1960", "Stagnazione in seconde case", "Rame/nichel da rubinetterie"],
      },
      {
        heading: "Cosa controllare a casa in Crocetta",
        paragraphs: ["Pacchetto consigliato: piombo, rame, nichel, microbiologica di base, durezza e cloro residuo. Prelievo con metodi validati conformi a norme tecniche, da laboratorio qualificato."],
        bullets: ["Piombo (priorità in palazzi pre-1960)", "Rame e nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi in Crocetta",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ristrutturazione, acquisto immobile storico, cambiamento di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Crocetta?", a: "Nella rete pubblica SMAT no. Negli impianti interni di stabili Liberty o primi '900 possono permanere tratti non sostituiti: l'unica verifica certa è l'analisi al rubinetto." },
      { q: "L'acqua di Crocetta è dura?", a: "La durezza è generalmente medio-bassa, intorno ai 20-30 gradi francesi, in linea con il profilo SMAT della zona centrale." },
      { q: "Posso bere l'acqua del rubinetto a Crocetta?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito SMAT, con dettaglio per zona di distribuzione. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto in Crocetta a Torino: verifica metalli nei palazzi Liberty, microbiologica e durezza con laboratorio qualificato.",
    relatedNeighborhoods: ["torino-centro", "torino-san-salvario", "torino-cit-turin"],
  },
  {
    slug: "torino-san-salvario",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "San Salvario",
    district: "Circoscrizione 8",
    shortTitle: "Acqua del rubinetto in San Salvario (Torino): guida",
    metaDescription: "Acqua del rubinetto in San Salvario a Torino: edifici storici riqualificati, controlli SMAT e quando fare un'analisi al rubinetto.",
    searchKeywords: ["acqua san salvario torino", "acqua rubinetto san salvario", "qualità acqua smat san salvario", "tubazioni san salvario", "analisi acqua torino san salvario"],
    intro: "San Salvario, alle spalle della stazione di Porta Nuova, è un quartiere popolare riqualificato della Circoscrizione 8, con un patrimonio edilizio in larga parte ottocentesco e primo Novecento. La rete SMAT garantisce un'acqua di buona qualità all'ingresso degli stabili; il punto critico, come spesso nei quartieri storici, è l'impianto interno dei palazzi non ristrutturati.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo in tubazioni private pre-1960",
      "Stagnazione in immobili affittati a breve termine",
      "Variazioni di cloro residuo in zona distale",
    ],
    sections: [
      {
        heading: "L'acqua in San Salvario: contesto e tubazioni",
        paragraphs: ["SMAT alimenta San Salvario con la consueta miscela di acque di falda profonda e sorgenti alpine. Gli stabili del quartiere alternano palazzi storici a interventi di ristrutturazione recente, con un mosaico di impianti."],
        bullets: ["Edifici prevalentemente storici riqualificati", "Rete SMAT moderna", "Impianti privati eterogenei"],
      },
      {
        heading: "Rischi specifici in San Salvario",
        paragraphs: ["Piombo e stagnazione sono i due fronti principali, accentuati dalla forte presenza di immobili in affitto a uso turistico e da appartamenti a uso discontinuo."],
        bullets: ["Piombo a rubinetto in palazzi pre-1960", "Stagnazione in B&B e affitti brevi", "Microbiologia residua in punti poco utilizzati"],
      },
      {
        heading: "Cosa controllare a casa in San Salvario",
        paragraphs: ["Pacchetto consigliato: piombo, rame, nichel, microbiologica di base, durezza e cloro residuo. Il prelievo segue metodi validati conformi a norme tecniche."],
        bullets: ["Piombo (priorità)", "Rame e nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi in San Salvario",
        paragraphs: ["Trigger tipici: ingresso in un appartamento storico, neonati o gravidanza, riavvio dopo una lunga assenza, cambiamento di sapore o colore dopo le prime erogazioni del mattino."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a San Salvario?", a: "Nella rete pubblica SMAT no. Negli impianti privati di palazzi storici è possibile la presenza di tratti datati: l'analisi al rubinetto è l'unico modo per verificarlo." },
      { q: "L'acqua di San Salvario è dura?", a: "La durezza è generalmente medio-bassa, intorno ai 20-30 gradi francesi." },
      { q: "Posso bere l'acqua del rubinetto a San Salvario?", a: "Sì, l'acqua distribuita da SMAT è potabile e controllata secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino curano i controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto in San Salvario a Torino: priorità metalli nei palazzi storici riqualificati, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-centro", "torino-crocetta", "torino-borgo-po"],
  },
  {
    slug: "torino-vanchiglia",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Vanchiglia",
    district: "Circoscrizione 7",
    shortTitle: "Acqua del rubinetto a Vanchiglia (Torino): cosa controllare",
    metaDescription: "Acqua del rubinetto a Vanchiglia a Torino: quartiere alternativo, controlli SMAT e quando fare un'analisi al rubinetto.",
    searchKeywords: ["acqua vanchiglia torino", "acqua rubinetto vanchiglia", "qualità acqua smat vanchiglia", "tubazioni vanchiglia", "analisi acqua torino vanchiglia"],
    intro: "Vanchiglia, nella Circoscrizione 7, è un quartiere dal carattere alternativo, con un patrimonio edilizio misto che spazia dal primo Novecento agli inserimenti più recenti. La rete SMAT garantisce un'acqua di buona qualità; le verifiche al rubinetto restano utili per gli stabili più datati e per chi entra in un nuovo appartamento.",
    buildingAge: "misto",
    typicalRisks: [
      "Piombo in tubazioni private in palazzi più antichi",
      "Stagnazione in appartamenti a uso discontinuo",
      "Durezza medio-bassa tipica della rete torinese",
    ],
    sections: [
      {
        heading: "L'acqua a Vanchiglia: contesto e tubazioni",
        paragraphs: ["SMAT distribuisce a Vanchiglia acqua di origine alpina e di falda profonda. Il patrimonio edilizio misto richiede verifiche caso per caso: la rete pubblica è moderna, ma gli impianti privati seguono storie diverse."],
        bullets: ["Edificato misto", "Rete pubblica SMAT moderna", "Impianti interni eterogenei"],
      },
      {
        heading: "Rischi specifici a Vanchiglia",
        paragraphs: ["Nei palazzi più antichi del quartiere il piombo nelle linee private resta il rischio rilevante. Nelle costruzioni recenti il tema è invece più legato a rubinetterie e biofilm in caso di stagnazione."],
        bullets: ["Piombo nei palazzi pre-1960", "Rame/nichel da rubinetterie", "Microbiologia in punti poco utilizzati"],
      },
      {
        heading: "Cosa controllare a casa a Vanchiglia",
        paragraphs: ["Pacchetto consigliato: metalli (piombo, rame, nichel), microbiologica di base, durezza e cloro residuo. Prelievo con metodi validati conformi a norme tecniche."],
        bullets: ["Piombo", "Rame e nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Vanchiglia",
        paragraphs: ["Trigger tipici: ristrutturazione, ingresso in un nuovo appartamento, neonati, gravidanza, cambiamento di sapore o colore dell'acqua."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Vanchiglia?", a: "Nella rete pubblica SMAT no. Nei palazzi più antichi del quartiere è possibile, ma non sistematico: l'unica verifica certa è un'analisi al rubinetto." },
      { q: "L'acqua di Vanchiglia è dura?", a: "La durezza è generalmente medio-bassa (20-30 gradi francesi), in linea con il profilo SMAT della zona." },
      { q: "Posso bere l'acqua del rubinetto a Vanchiglia?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Vanchiglia a Torino: verifiche su misura tra palazzi storici e nuove costruzioni.",
    relatedNeighborhoods: ["torino-aurora", "torino-centro", "torino-borgo-po"],
  },
  {
    slug: "torino-borgo-po",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Borgo Po",
    district: "Circoscrizione 8",
    shortTitle: "Acqua del rubinetto in Borgo Po (Torino): guida",
    metaDescription: "Acqua del rubinetto in Borgo Po a Torino: collina, ville di primo Novecento, controlli SMAT e analisi consigliate al rubinetto.",
    searchKeywords: ["acqua borgo po torino", "acqua rubinetto borgo po", "qualità acqua smat borgo po", "tubazioni borgo po", "analisi acqua torino borgo po"],
    intro: "Borgo Po, nella Circoscrizione 8, si arrampica sulla collina torinese con ville e palazzine di primo Novecento. La rete SMAT serve l'area con acqua di origine alpina e di falda profonda. Negli edifici storici della zona collinare il tema rilevante è la verifica delle tubazioni interne e dei materiali a valle del contatore.",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Piombo in tubazioni private in palazzine d'epoca",
      "Stagnazione in seconde case e residenze collinari a uso discontinuo",
      "Pressioni variabili lungo la collina",
    ],
    sections: [
      {
        heading: "L'acqua in Borgo Po: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Borgo Po con acqua di origine alpina e falda profonda, gestendo anche le pressioni in zona collinare. Il patrimonio edilizio è in larga parte primo Novecento."],
        bullets: ["Ville e palazzine primo '900", "Rete SMAT con gestione pressioni in collina", "Impianti interni stratificati"],
      },
      {
        heading: "Rischi specifici in Borgo Po",
        paragraphs: ["Il piombo da tubazioni private resta il rischio principale, accompagnato da una possibile stagnazione in residenze a uso saltuario o discontinuo."],
        bullets: ["Piombo a rubinetto in palazzine pre-1960", "Stagnazione in seconde case", "Rame/nichel da rubinetterie"],
      },
      {
        heading: "Cosa controllare a casa in Borgo Po",
        paragraphs: ["Pacchetto consigliato: metalli (piombo, rame, nichel), microbiologica di base, durezza e cloro residuo. Prelievo con metodi validati conformi a norme tecniche, da laboratorio qualificato."],
        bullets: ["Piombo", "Rame e nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi in Borgo Po",
        paragraphs: ["Trigger tipici: acquisto di una villa storica, ristrutturazione, neonati o gravidanza, riavvio dopo lunga assenza, variazioni di pressione percepite."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Borgo Po?", a: "Nella rete pubblica SMAT no. In ville e palazzine primo '900 possono permanere tratti privati datati: l'analisi al rubinetto è l'unico modo per accertarlo." },
      { q: "L'acqua di Borgo Po è dura?", a: "La durezza è generalmente medio-bassa, intorno ai 20-30 gradi francesi." },
      { q: "Posso bere l'acqua del rubinetto a Borgo Po?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino curano i controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto in Borgo Po a Torino: verifica metalli in ville e palazzine primo '900, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-san-salvario", "torino-centro", "torino-nizza-millefonti"],
  },
  {
    slug: "torino-aurora",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Aurora",
    district: "Circoscrizione 7",
    shortTitle: "Acqua del rubinetto ad Aurora (Torino): cosa sapere",
    metaDescription: "Acqua del rubinetto ad Aurora a Torino: quartiere multiculturale a nord, controlli SMAT, parametri di interesse e analisi al rubinetto.",
    searchKeywords: ["acqua aurora torino", "acqua rubinetto aurora", "qualità acqua smat aurora", "tubazioni aurora torino", "analisi acqua torino aurora"],
    intro: "Aurora, nella Circoscrizione 7, è un quartiere popolare e multiculturale del nord di Torino, con un edificato misto che alterna fabbricati primo Novecento e ricostruzioni del dopoguerra. La rete SMAT garantisce un'acqua di buona qualità all'ingresso degli stabili. Trattandosi di una zona settentrionale, può essere prudente includere nell'analisi anche la verifica di indicatori specifici dell'area nord torinese.",
    buildingAge: "misto",
    typicalRisks: [
      "Piombo in tubazioni private negli stabili più antichi",
      "Cromo VI storico falda Torino nord — verifica controlli SMAT",
      "Stagnazione in alloggi a uso discontinuo",
    ],
    sections: [
      {
        heading: "L'acqua ad Aurora: contesto e tubazioni",
        paragraphs: ["SMAT distribuisce ad Aurora acqua di origine prevalentemente alpina e di falda profonda. Il patrimonio edilizio misto del quartiere richiede verifiche caso per caso a valle del contatore."],
        bullets: ["Edificato misto primo '900 e dopoguerra", "Rete SMAT moderna", "Storia di presenza di cromo VI in falda nella zona nord (controlli SMAT attivi)"],
      },
      {
        heading: "Rischi specifici ad Aurora",
        paragraphs: [
          "Il rischio principale è il piombo in impianti privati datati. In quanto quartiere nord di Torino, è documentata pubblicamente una storia di concentrazioni di cromo esavalente in falda in alcune aree della cintura torinese: SMAT applica trattamenti specifici e controlli, ma può essere prudente includere il parametro in un'analisi mirata.",
        ],
        bullets: ["Piombo nelle linee private pre-1960", "Cromo VI: verifica controlli SMAT zona nord", "Microbiologia in punti poco utilizzati"],
      },
      {
        heading: "Cosa controllare a casa ad Aurora",
        paragraphs: ["Pacchetto consigliato: piombo, rame, nichel, microbiologica di base, durezza, cloro residuo; eventualmente anche cromo totale e cromo VI in funzione del contesto."],
        bullets: ["Piombo, rame, nichel", "Cromo totale e cromo VI (su richiesta)", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi ad Aurora",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, riavvio dopo un'assenza prolungata, variazioni di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti ad Aurora?", a: "Nella rete pubblica SMAT no. Negli impianti privati dei palazzi più antichi del quartiere è possibile: l'analisi al rubinetto è l'unica verifica certa." },
      { q: "L'acqua di Aurora è dura?", a: "La durezza in periferia può essere variabile; SMAT pubblica i dati per zona. In Aurora si attesta su valori in linea con il profilo della rete torinese." },
      { q: "Posso bere l'acqua del rubinetto ad Aurora?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023, con controlli aggiuntivi nelle aree con storico di presenza di cromo VI in falda." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona di distribuzione. ARPA Piemonte cura il monitoraggio ambientale, ASL Città di Torino i controlli sanitari." },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto ad Aurora a Torino: pacchetto metalli (incluso cromo) e microbiologica, utile nei quartieri nord serviti da SMAT.",
    relatedNeighborhoods: ["torino-barriera-di-milano", "torino-vanchiglia", "torino-borgo-vittoria"],
  },
  {
    slug: "torino-barriera-di-milano",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Barriera di Milano",
    district: "Circoscrizione 6",
    shortTitle: "Acqua del rubinetto a Barriera di Milano (Torino): guida",
    metaDescription: "Acqua del rubinetto a Barriera di Milano a Torino: quartiere popolare nord, controlli SMAT, cromo VI storico in falda e analisi consigliate.",
    searchKeywords: ["acqua barriera di milano torino", "acqua rubinetto barriera di milano", "qualità acqua smat barriera", "tubazioni barriera milano torino", "analisi acqua torino barriera"],
    intro: "Barriera di Milano, nella Circoscrizione 6, è un quartiere popolare del nord di Torino, con un patrimonio edilizio in larga parte del dopoguerra. La rete SMAT serve la zona con acqua di origine alpina e di falda profonda, integrata da trattamenti specifici. La zona rientra nell'area nord della cintura torinese in cui è documentata pubblicamente una storia di presenza di cromo esavalente in falda.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Cromo VI storico falda Torino nord — verifica controlli SMAT",
      "Rame e nichel da rubinetterie domestiche",
      "Stagnazione in alloggi a uso discontinuo",
    ],
    sections: [
      {
        heading: "L'acqua a Barriera di Milano: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Barriera di Milano con acqua prevalentemente alpina e di falda, con trattamenti aggiuntivi a tutela delle aree nord interessate dalla storia di presenza di cromo VI."],
        bullets: ["Edifici prevalentemente dopoguerra", "Rete SMAT con trattamenti dedicati", "Storia di cromo VI in falda nord (controlli attivi)"],
      },
      {
        heading: "Rischi specifici a Barriera di Milano",
        paragraphs: ["Il tema più caratteristico della zona è la verifica dei controlli SMAT sulla presenza storica di cromo VI nella falda. I rischi domestici classici (rame, nichel, stagnazione) restano sullo sfondo."],
        bullets: ["Cromo VI: verifica controlli SMAT", "Rame/nichel da rubinetterie", "Microbiologia in stagnazione"],
      },
      {
        heading: "Cosa controllare a casa a Barriera di Milano",
        paragraphs: ["Pacchetto consigliato: cromo totale e cromo VI, piombo, rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Cromo totale e cromo VI", "Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Barriera di Milano",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, dubbi sulla zona di residenza nord, riavvio dopo assenza."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Barriera di Milano?", a: "Negli edifici dopoguerra del quartiere il piombo nelle linee principali è raro. Possibile invece in raccordi o rubinetterie datate." },
      { q: "L'acqua di Barriera di Milano è dura?", a: "In periferia la durezza può variare; nella zona è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Barriera di Milano?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023, con trattamenti specifici nelle aree storicamente interessate da cromo VI." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte cura il monitoraggio ambientale, ASL Città di Torino i controlli sanitari." },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Barriera di Milano: pacchetto metalli inclusivo di cromo, utile nei quartieri nord serviti da SMAT.",
    relatedNeighborhoods: ["torino-aurora", "torino-falchera", "torino-borgo-vittoria"],
  },
  {
    slug: "torino-borgo-vittoria",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Borgo Vittoria",
    district: "Circoscrizione 5",
    shortTitle: "Acqua del rubinetto a Borgo Vittoria (Torino): guida",
    metaDescription: "Acqua del rubinetto a Borgo Vittoria a Torino: quartiere nord, controlli SMAT, cromo VI storico in falda e analisi al rubinetto.",
    searchKeywords: ["acqua borgo vittoria torino", "acqua rubinetto borgo vittoria", "qualità acqua smat borgo vittoria", "tubazioni borgo vittoria", "analisi acqua torino borgo vittoria"],
    intro: "Borgo Vittoria, nella Circoscrizione 5, è un quartiere a nord di Torino, con un edificato misto che alterna primo Novecento e ricostruzioni successive. La rete SMAT distribuisce acqua di origine alpina e di falda, con trattamenti aggiuntivi nelle aree settentrionali della cintura, dove è documentata pubblicamente una storia di concentrazioni di cromo esavalente in falda.",
    buildingAge: "misto",
    typicalRisks: [
      "Cromo VI storico falda Torino nord — verifica controlli SMAT",
      "Piombo in tubazioni private degli stabili più antichi",
      "Stagnazione in alloggi a uso discontinuo",
    ],
    sections: [
      {
        heading: "L'acqua a Borgo Vittoria: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Borgo Vittoria con la consueta miscela di acque alpine e di falda profonda. Trattamenti dedicati e controlli sono attivi per la storica presenza di cromo VI in falda nord."],
        bullets: ["Edificato misto", "Rete SMAT con trattamenti dedicati nelle aree nord", "Impianti interni eterogenei"],
      },
      {
        heading: "Rischi specifici a Borgo Vittoria",
        paragraphs: ["La presenza storica di cromo VI in falda nord richiede attenzione, e si affianca ai rischi domestici classici (piombo nei palazzi più antichi, rame/nichel, stagnazione)."],
        bullets: ["Cromo VI: verifica controlli SMAT", "Piombo in linee private pre-1960", "Rame/nichel da rubinetterie"],
      },
      {
        heading: "Cosa controllare a casa a Borgo Vittoria",
        paragraphs: ["Pacchetto consigliato: cromo totale e cromo VI, piombo, rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Cromo totale e cromo VI", "Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Borgo Vittoria",
        paragraphs: ["Trigger tipici: famiglie con neonati, gravidanza, ingresso in un nuovo appartamento, dubbi sull'origine dell'acqua in zona nord, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Borgo Vittoria?", a: "Nei palazzi più antichi del quartiere è possibile; negli edifici più recenti è raro. L'analisi al rubinetto consente di verificare con certezza." },
      { q: "L'acqua di Borgo Vittoria è dura?", a: "In periferia la durezza è variabile; SMAT pubblica i dati per zona. Nella zona è in genere medio-bassa." },
      { q: "Posso bere l'acqua del rubinetto a Borgo Vittoria?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023, con trattamenti specifici nelle aree storicamente interessate dal cromo VI." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con monitoraggi ambientali e sanitari." },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Borgo Vittoria: pacchetto metalli inclusivo di cromo nelle zone nord servite da SMAT.",
    relatedNeighborhoods: ["torino-madonna-di-campagna", "torino-barriera-di-milano", "torino-borgata-vittoria"],
  },
  {
    slug: "torino-falchera",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Falchera",
    district: "Circoscrizione 6",
    shortTitle: "Acqua del rubinetto a Falchera (Torino): cosa sapere",
    metaDescription: "Acqua del rubinetto a Falchera a Torino: quartiere periferico nord, controlli SMAT, cromo VI storico in falda e analisi consigliate.",
    searchKeywords: ["acqua falchera torino", "acqua rubinetto falchera", "qualità acqua smat falchera", "tubazioni falchera", "analisi acqua torino falchera"],
    intro: "Falchera, nella Circoscrizione 6, è un quartiere periferico nord di Torino, costruito in larga parte nel dopoguerra. La rete SMAT serve la zona con acqua di origine alpina e di falda, con trattamenti aggiuntivi nelle aree settentrionali della cintura, dove è documentata pubblicamente una storia di presenza di cromo esavalente in falda.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Cromo VI storico falda Torino nord — verifica controlli SMAT",
      "Rame e nichel da rubinetterie domestiche",
      "Stagnazione in alloggi a uso discontinuo",
    ],
    sections: [
      {
        heading: "L'acqua a Falchera: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Falchera con acque alpine e di falda, applicando trattamenti dedicati nella zona nord della rete cittadina. Il patrimonio edilizio è prevalentemente dopoguerra, con condomini popolari."],
        bullets: ["Edifici dopoguerra", "Rete SMAT con trattamenti dedicati nord Torino", "Impianti interni di pari epoca"],
      },
      {
        heading: "Rischi specifici a Falchera",
        paragraphs: ["Il tema caratteristico è la presenza storica di cromo VI in falda nord, sotto controllo attivo SMAT. I rischi domestici si limitano in genere a rame/nichel e stagnazione."],
        bullets: ["Cromo VI: verifica controlli SMAT", "Rame/nichel da rubinetterie", "Microbiologia in stagnazione"],
      },
      {
        heading: "Cosa controllare a casa a Falchera",
        paragraphs: ["Pacchetto consigliato: cromo totale e cromo VI, piombo (per sicurezza), rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Cromo totale e cromo VI", "Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Falchera",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, riavvio dopo assenza, variazioni di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Falchera?", a: "Negli edifici dopoguerra il piombo nelle linee principali è raro; possibili tracce in raccordi o rubinetterie datate." },
      { q: "L'acqua di Falchera è dura?", a: "In periferia la durezza è variabile; nella zona è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Falchera?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023, con trattamenti specifici nelle aree storicamente interessate dal cromo VI." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino curano i controlli ambientali e sanitari." },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Falchera: pacchetto metalli inclusivo di cromo nelle zone periferiche nord servite da SMAT.",
    relatedNeighborhoods: ["torino-barriera-di-milano", "torino-borgo-vittoria", "torino-madonna-di-campagna"],
  },
  {
    slug: "torino-pozzo-strada",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Pozzo Strada",
    district: "Circoscrizione 3",
    shortTitle: "Acqua del rubinetto a Pozzo Strada (Torino): guida",
    metaDescription: "Acqua del rubinetto a Pozzo Strada a Torino: quartiere residenziale ovest, controlli SMAT e analisi al rubinetto consigliate.",
    searchKeywords: ["acqua pozzo strada torino", "acqua rubinetto pozzo strada", "qualità acqua smat pozzo strada", "tubazioni pozzo strada", "analisi acqua torino pozzo strada"],
    intro: "Pozzo Strada, nella Circoscrizione 3, è un quartiere residenziale dell'ovest di Torino, costruito in larga parte nel dopoguerra. La rete SMAT distribuisce qui acqua di buona qualità, con un profilo minerale simile al resto della città. Il tema principale resta la verifica dei materiali domestici a valle del contatore.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da rubinetterie",
      "Stagnazione in alloggi a uso discontinuo",
      "Eventuali raccordi datati in stabili anni '50-'60",
    ],
    sections: [
      {
        heading: "L'acqua a Pozzo Strada: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Pozzo Strada con acqua di origine alpina e di falda profonda. Il patrimonio edilizio dopoguerra ha impianti interni omogenei per epoca."],
        bullets: ["Edifici dopoguerra", "Rete pubblica SMAT moderna", "Impianti interni anni '50-'70"],
      },
      {
        heading: "Rischi specifici a Pozzo Strada",
        paragraphs: ["Negli edifici dopoguerra il rischio piombo è marginale rispetto al centro storico. Restano la possibilità di stagnazione in alloggi a uso discontinuo e il rilascio di rame/nichel da rubinetterie."],
        bullets: ["Rame/nichel da rubinetterie", "Stagnazione in alloggi a uso saltuario", "Eventuali raccordi datati"],
      },
      {
        heading: "Cosa controllare a casa a Pozzo Strada",
        paragraphs: ["Pacchetto consigliato: rame, nichel, microbiologica di base, durezza e cloro residuo, con piombo per sicurezza. Prelievo con metodi validati conformi a norme tecniche."],
        bullets: ["Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Pozzo Strada",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un appartamento mai analizzato, ristrutturazione, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Pozzo Strada?", a: "Negli edifici dopoguerra del quartiere le linee in piombo sono rare. Possibile invece presenza in raccordi o rubinetterie datate." },
      { q: "L'acqua di Pozzo Strada è dura?", a: "In periferia la durezza può variare; in zona ovest è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Pozzo Strada?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Pozzo Strada a Torino: pacchetto base con metalli, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-parella", "torino-cit-turin", "torino-mirafiori-nord"],
  },
  {
    slug: "torino-borgata-vittoria",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Borgata Vittoria",
    district: "Circoscrizione 5",
    shortTitle: "Acqua del rubinetto a Borgata Vittoria (Torino): guida",
    metaDescription: "Acqua del rubinetto a Borgata Vittoria a Torino: zona nord, controlli SMAT, cromo VI storico in falda e analisi consigliate.",
    searchKeywords: ["acqua borgata vittoria torino", "acqua rubinetto borgata vittoria", "qualità acqua smat borgata vittoria", "tubazioni borgata vittoria", "analisi acqua torino borgata vittoria"],
    intro: "Borgata Vittoria, nella Circoscrizione 5, è una zona del nord di Torino con un edificato misto tra primo Novecento e dopoguerra. La rete SMAT serve la zona con acqua di origine alpina e di falda, con trattamenti dedicati nelle aree settentrionali della cintura interessate storicamente dalla presenza di cromo esavalente in falda.",
    buildingAge: "misto",
    typicalRisks: [
      "Cromo VI storico falda Torino nord — verifica controlli SMAT",
      "Piombo in tubazioni private negli stabili più antichi",
      "Stagnazione in alloggi a uso discontinuo",
    ],
    sections: [
      {
        heading: "L'acqua a Borgata Vittoria: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Borgata Vittoria con la consueta miscela di acque alpine e di falda profonda, con controlli e trattamenti dedicati nella zona nord della rete cittadina."],
        bullets: ["Edificato misto", "Rete SMAT con trattamenti aree nord", "Impianti interni eterogenei"],
      },
      {
        heading: "Rischi specifici a Borgata Vittoria",
        paragraphs: ["La presenza storica di cromo VI in falda nord richiede attenzione e si affianca al piombo nelle linee private dei palazzi più antichi e alla stagnazione."],
        bullets: ["Cromo VI: verifica controlli SMAT", "Piombo nelle linee pre-1960", "Rame/nichel da rubinetterie"],
      },
      {
        heading: "Cosa controllare a casa a Borgata Vittoria",
        paragraphs: ["Pacchetto consigliato: cromo totale e cromo VI, piombo, rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Cromo totale e cromo VI", "Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Borgata Vittoria",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, dubbi sull'origine dell'acqua in zona nord."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Borgata Vittoria?", a: "Negli stabili più antichi è possibile; negli edifici dopoguerra il rischio è minore. L'analisi al rubinetto consente la verifica certa." },
      { q: "L'acqua di Borgata Vittoria è dura?", a: "In periferia la durezza è variabile; nella zona è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Borgata Vittoria?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023, con trattamenti specifici nelle aree storicamente interessate dal cromo VI." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con monitoraggi ambientali e sanitari." },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Borgata Vittoria: pacchetto metalli inclusivo di cromo, utile nelle zone nord servite da SMAT.",
    relatedNeighborhoods: ["torino-borgo-vittoria", "torino-madonna-di-campagna", "torino-barriera-di-milano"],
  },
  {
    slug: "torino-mirafiori-sud",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Mirafiori Sud",
    district: "Circoscrizione 10",
    shortTitle: "Acqua del rubinetto a Mirafiori Sud (Torino): guida",
    metaDescription: "Acqua del rubinetto a Mirafiori Sud a Torino: ex zona FIAT, controlli SMAT, parametri di interesse e analisi consigliate al rubinetto.",
    searchKeywords: ["acqua mirafiori sud torino", "acqua rubinetto mirafiori sud", "qualità acqua smat mirafiori", "tubazioni mirafiori sud", "analisi acqua torino mirafiori sud"],
    intro: "Mirafiori Sud, nella Circoscrizione 10, è il quartiere simbolo dell'ex polo industriale FIAT di Torino, costruito in larga parte nel dopoguerra. La rete SMAT distribuisce qui acqua di buona qualità. Il quartiere, in quanto ex zona industriale, può beneficiare di analisi che includano alcuni metalli e indicatori di interesse, pur trattandosi di acqua pubblica regolarmente controllata.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da rubinetterie",
      "Stagnazione in alloggi a uso discontinuo",
      "Eventuali raccordi datati in stabili anni '50-'60",
    ],
    sections: [
      {
        heading: "L'acqua a Mirafiori Sud: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Mirafiori Sud con acqua di origine alpina e di falda profonda. Il patrimonio edilizio è in larga parte dopoguerra, con grandi condomini popolari e palazzine."],
        bullets: ["Edifici dopoguerra", "Rete pubblica SMAT moderna", "Impianti interni anni '50-'70"],
      },
      {
        heading: "Rischi specifici a Mirafiori Sud",
        paragraphs: ["Negli edifici dopoguerra il piombo nelle linee principali è raro. Permangono i rischi domestici classici: stagnazione, rilascio da rubinetterie, eventuali raccordi datati."],
        bullets: ["Rame/nichel da rubinetterie", "Stagnazione", "Eventuali raccordi datati"],
      },
      {
        heading: "Cosa controllare a casa a Mirafiori Sud",
        paragraphs: ["Pacchetto consigliato: piombo (per sicurezza), rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Mirafiori Sud",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, ristrutturazione, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Mirafiori Sud?", a: "Negli edifici dopoguerra le linee in piombo sono rare; possibili residui in raccordi o rubinetterie datate." },
      { q: "L'acqua di Mirafiori Sud è dura?", a: "In periferia la durezza è variabile; in zona sud è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Mirafiori Sud?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino curano i controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Mirafiori Sud a Torino: pacchetto base con metalli, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-mirafiori-nord", "torino-santa-rita", "torino-lingotto"],
  },
  {
    slug: "torino-mirafiori-nord",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Mirafiori Nord",
    district: "Circoscrizione 2",
    shortTitle: "Acqua del rubinetto a Mirafiori Nord (Torino): guida",
    metaDescription: "Acqua del rubinetto a Mirafiori Nord a Torino: quartiere residenziale, controlli SMAT e analisi al rubinetto consigliate.",
    searchKeywords: ["acqua mirafiori nord torino", "acqua rubinetto mirafiori nord", "qualità acqua smat mirafiori nord", "tubazioni mirafiori nord", "analisi acqua torino mirafiori nord"],
    intro: "Mirafiori Nord, nella Circoscrizione 2, è un quartiere residenziale di Torino costruito in larga parte nel dopoguerra. La rete SMAT distribuisce qui acqua di buona qualità. Il tema principale è la verifica dei materiali domestici a valle del contatore.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Rame e nichel da rubinetterie", "Stagnazione in alloggi a uso discontinuo", "Eventuali raccordi datati"],
    sections: [
      {
        heading: "L'acqua a Mirafiori Nord: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Mirafiori Nord con acqua di origine alpina e di falda profonda. Il patrimonio edilizio dopoguerra ha impianti interni omogenei per epoca."],
        bullets: ["Edifici dopoguerra", "Rete pubblica SMAT moderna", "Impianti interni anni '50-'70"],
      },
      {
        heading: "Rischi specifici a Mirafiori Nord",
        paragraphs: ["Negli edifici dopoguerra il piombo nelle linee principali è raro. Restano i rischi classici di stagnazione e rilascio da rubinetterie."],
        bullets: ["Rame/nichel da rubinetterie", "Stagnazione", "Eventuali raccordi datati"],
      },
      {
        heading: "Cosa controllare a casa a Mirafiori Nord",
        paragraphs: ["Pacchetto consigliato: piombo (per sicurezza), rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Mirafiori Nord",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, ristrutturazione, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Mirafiori Nord?", a: "Negli edifici dopoguerra le linee in piombo sono rare; possibili residui in raccordi o rubinetterie datate." },
      { q: "L'acqua di Mirafiori Nord è dura?", a: "In periferia la durezza è variabile; nella zona è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Mirafiori Nord?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Mirafiori Nord a Torino: pacchetto base con metalli, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-mirafiori-sud", "torino-santa-rita", "torino-pozzo-strada"],
  },
  {
    slug: "torino-cit-turin",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Cit Turin",
    district: "Circoscrizione 4",
    shortTitle: "Acqua del rubinetto in Cit Turin (Torino): guida",
    metaDescription: "Acqua del rubinetto in Cit Turin a Torino: quartiere Liberty, controlli SMAT e analisi al rubinetto consigliate.",
    searchKeywords: ["acqua cit turin torino", "acqua rubinetto cit turin", "qualità acqua smat cit turin", "tubazioni cit turin", "analisi acqua torino cit turin"],
    intro: "Cit Turin, nella Circoscrizione 4, è un quartiere Liberty di Torino, con un patrimonio edilizio di primo Novecento spesso ben conservato. La rete SMAT distribuisce qui acqua di buona qualità. Nei palazzi storici il tema rilevante è la verifica delle tubazioni interne, in particolare delle colonne montanti originarie.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Piombo in tubazioni private pre-1960", "Stagnazione in immobili a uso saltuario", "Rame/nichel da rubinetterie"],
    sections: [
      {
        heading: "L'acqua in Cit Turin: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Cit Turin con acqua di origine alpina e di falda profonda. I palazzi Liberty del quartiere conservano spesso colonne montanti originali, da verificare in funzione delle ristrutturazioni interne."],
        bullets: ["Palazzi Liberty primo '900", "Rete pubblica SMAT moderna", "Possibili colonne montanti non rinnovate"],
      },
      {
        heading: "Rischi specifici in Cit Turin",
        paragraphs: ["Il rischio principale è il piombo da tubazioni private non sostituite. Aggiungiamo il tema della stagnazione e una possibile variabilità di rame/nichel."],
        bullets: ["Piombo a rubinetto in palazzi pre-1960", "Stagnazione in seconde case", "Rame/nichel da rubinetterie"],
      },
      {
        heading: "Cosa controllare a casa in Cit Turin",
        paragraphs: ["Pacchetto consigliato: piombo, rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Piombo", "Rame e nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi in Cit Turin",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ristrutturazione, acquisto immobile storico, cambiamento di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Cit Turin?", a: "Nella rete pubblica SMAT no. Nei palazzi Liberty possono permanere tratti privati datati: l'analisi al rubinetto è l'unica verifica certa." },
      { q: "L'acqua di Cit Turin è dura?", a: "La durezza è generalmente medio-bassa, intorno ai 20-30 gradi francesi, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Cit Turin?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto in Cit Turin a Torino: priorità metalli nei palazzi Liberty, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-crocetta", "torino-parella", "torino-pozzo-strada"],
  },
  {
    slug: "torino-parella",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Parella",
    district: "Circoscrizione 4",
    shortTitle: "Acqua del rubinetto a Parella (Torino): cosa sapere",
    metaDescription: "Acqua del rubinetto a Parella a Torino: quartiere residenziale ovest, controlli SMAT e analisi al rubinetto consigliate.",
    searchKeywords: ["acqua parella torino", "acqua rubinetto parella", "qualità acqua smat parella", "tubazioni parella", "analisi acqua torino parella"],
    intro: "Parella, nella Circoscrizione 4, è un quartiere residenziale dell'ovest di Torino, costruito in larga parte nel dopoguerra. La rete SMAT distribuisce qui acqua di buona qualità. Il tema principale è la verifica dei materiali domestici a valle del contatore.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Rame e nichel da rubinetterie", "Stagnazione in alloggi a uso discontinuo", "Eventuali raccordi datati"],
    sections: [
      {
        heading: "L'acqua a Parella: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Parella con acqua di origine alpina e di falda profonda. Il patrimonio edilizio è in larga parte dopoguerra, con condomini omogenei per epoca."],
        bullets: ["Edifici dopoguerra", "Rete pubblica SMAT moderna", "Impianti interni anni '50-'70"],
      },
      {
        heading: "Rischi specifici a Parella",
        paragraphs: ["Negli edifici dopoguerra il piombo nelle linee principali è raro. Restano i rischi domestici di stagnazione e rilascio da rubinetterie."],
        bullets: ["Rame/nichel da rubinetterie", "Stagnazione", "Eventuali raccordi datati"],
      },
      {
        heading: "Cosa controllare a casa a Parella",
        paragraphs: ["Pacchetto consigliato: piombo (per sicurezza), rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Parella",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, ristrutturazione, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Parella?", a: "Negli edifici dopoguerra le linee in piombo sono rare; possibili residui in raccordi o rubinetterie datate." },
      { q: "L'acqua di Parella è dura?", a: "In periferia la durezza è variabile; in zona ovest è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Parella?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Parella a Torino: pacchetto base con metalli, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-pozzo-strada", "torino-cit-turin", "torino-mirafiori-nord"],
  },
  {
    slug: "torino-madonna-di-campagna",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Madonna di Campagna",
    district: "Circoscrizione 5",
    shortTitle: "Acqua del rubinetto a Madonna di Campagna (Torino): guida",
    metaDescription: "Acqua del rubinetto a Madonna di Campagna a Torino: zona nord, controlli SMAT, cromo VI storico in falda e analisi consigliate.",
    searchKeywords: ["acqua madonna di campagna torino", "acqua rubinetto madonna di campagna", "qualità acqua smat madonna di campagna", "tubazioni madonna di campagna", "analisi acqua torino madonna di campagna"],
    intro: "Madonna di Campagna, nella Circoscrizione 5, è una zona nord-ovest di Torino, con edificato prevalentemente dopoguerra. La rete SMAT serve la zona con acqua di origine alpina e di falda, con trattamenti aggiuntivi nelle aree settentrionali della cintura, dove è documentata pubblicamente una storia di concentrazioni di cromo esavalente in falda (caso noto della cintura nord torinese).",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Cromo VI storico falda Torino nord — verifica controlli SMAT",
      "Rame e nichel da rubinetterie domestiche",
      "Stagnazione in alloggi a uso discontinuo",
    ],
    sections: [
      {
        heading: "L'acqua a Madonna di Campagna: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Madonna di Campagna con acque alpine e di falda profonda, applicando trattamenti specifici nelle aree nord della rete dove è documentata pubblicamente una storia di presenza di cromo VI in falda."],
        bullets: ["Edifici dopoguerra", "Rete SMAT con trattamenti dedicati", "Storia di cromo VI in falda nord (controlli attivi)"],
      },
      {
        heading: "Rischi specifici a Madonna di Campagna",
        paragraphs: ["Il tema più caratteristico è la verifica dei controlli SMAT sulla presenza storica di cromo VI nella falda nord. Si affiancano i consueti rischi domestici (rame/nichel, stagnazione)."],
        bullets: ["Cromo VI: verifica controlli SMAT", "Rame/nichel da rubinetterie", "Microbiologia in stagnazione"],
      },
      {
        heading: "Cosa controllare a casa a Madonna di Campagna",
        paragraphs: ["Pacchetto consigliato: cromo totale e cromo VI, piombo, rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Cromo totale e cromo VI", "Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Madonna di Campagna",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, dubbi sull'origine dell'acqua in zona nord, riavvio dopo assenza."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Madonna di Campagna?", a: "Negli edifici dopoguerra le linee in piombo sono rare; possibili residui in raccordi o rubinetterie datate." },
      { q: "L'acqua di Madonna di Campagna è dura?", a: "In periferia la durezza è variabile; nella zona è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Madonna di Campagna?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023, con trattamenti specifici nelle aree storicamente interessate dal cromo VI." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte cura il monitoraggio ambientale, ASL Città di Torino i controlli sanitari." },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Madonna di Campagna: pacchetto metalli inclusivo di cromo, utile nelle zone nord servite da SMAT.",
    relatedNeighborhoods: ["torino-borgo-vittoria", "torino-borgata-vittoria", "torino-falchera"],
  },
  {
    slug: "torino-lingotto",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Lingotto",
    district: "Circoscrizione 9",
    shortTitle: "Acqua del rubinetto al Lingotto (Torino): guida",
    metaDescription: "Acqua del rubinetto al Lingotto a Torino: ex zona industriale FIAT riqualificata, controlli SMAT e analisi al rubinetto consigliate.",
    searchKeywords: ["acqua lingotto torino", "acqua rubinetto lingotto", "qualità acqua smat lingotto", "tubazioni lingotto", "analisi acqua torino lingotto"],
    intro: "Il Lingotto, nella Circoscrizione 9, è il quartiere simbolo della riqualificazione dell'ex polo industriale FIAT, con edifici che spaziano dal dopoguerra a interventi recenti. La rete SMAT distribuisce qui acqua di buona qualità. Trattandosi di un'area un tempo industriale ma oggi residenziale e commerciale, è prudente includere alcuni metalli e indicatori di interesse in un'analisi al rubinetto.",
    buildingAge: "misto",
    typicalRisks: ["Rame e nichel da rubinetterie", "Stagnazione in uffici e nuove costruzioni a uso discontinuo", "Eventuali raccordi datati negli stabili più anziani"],
    sections: [
      {
        heading: "L'acqua al Lingotto: contesto e tubazioni",
        paragraphs: ["SMAT alimenta il Lingotto con acqua di origine alpina e di falda profonda. L'edificato è misto: condomini dopoguerra e interventi recenti di riqualificazione."],
        bullets: ["Edificato misto post-FIAT", "Rete pubblica SMAT moderna", "Impianti interni eterogenei"],
      },
      {
        heading: "Rischi specifici al Lingotto",
        paragraphs: ["Nelle costruzioni più recenti i rischi domestici si limitano a rame/nichel e stagnazione. Negli stabili dopoguerra restano possibili raccordi datati."],
        bullets: ["Rame/nichel da rubinetterie", "Stagnazione in uffici", "Eventuali raccordi datati"],
      },
      {
        heading: "Cosa controllare a casa al Lingotto",
        paragraphs: ["Pacchetto consigliato: piombo (per sicurezza), rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi al Lingotto",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, ristrutturazione, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti al Lingotto?", a: "Negli edifici dopoguerra le linee in piombo sono rare; nelle nuove costruzioni assenti. Possibili residui solo in raccordi o rubinetterie datate." },
      { q: "L'acqua del Lingotto è dura?", a: "In periferia la durezza è variabile; in zona sud è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto al Lingotto?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto al Lingotto a Torino: pacchetto base con metalli, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-nizza-millefonti", "torino-santa-rita", "torino-mirafiori-sud"],
  },
  {
    slug: "torino-santa-rita",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Santa Rita",
    district: "Circoscrizione 2",
    shortTitle: "Acqua del rubinetto a Santa Rita (Torino): guida",
    metaDescription: "Acqua del rubinetto a Santa Rita a Torino: quartiere residenziale, controlli SMAT e analisi al rubinetto consigliate.",
    searchKeywords: ["acqua santa rita torino", "acqua rubinetto santa rita", "qualità acqua smat santa rita", "tubazioni santa rita", "analisi acqua torino santa rita"],
    intro: "Santa Rita, nella Circoscrizione 2, è un quartiere residenziale di Torino costruito in larga parte nel dopoguerra. La rete SMAT distribuisce qui acqua di buona qualità. Il tema principale è la verifica dei materiali domestici a valle del contatore.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Rame e nichel da rubinetterie", "Stagnazione in alloggi a uso discontinuo", "Eventuali raccordi datati"],
    sections: [
      {
        heading: "L'acqua a Santa Rita: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Santa Rita con acqua di origine alpina e di falda profonda. Il patrimonio edilizio è in larga parte dopoguerra."],
        bullets: ["Edifici dopoguerra", "Rete pubblica SMAT moderna", "Impianti interni anni '50-'70"],
      },
      {
        heading: "Rischi specifici a Santa Rita",
        paragraphs: ["Negli edifici dopoguerra il piombo nelle linee principali è raro. Restano i rischi domestici di stagnazione e rilascio da rubinetterie."],
        bullets: ["Rame/nichel da rubinetterie", "Stagnazione", "Eventuali raccordi datati"],
      },
      {
        heading: "Cosa controllare a casa a Santa Rita",
        paragraphs: ["Pacchetto consigliato: piombo (per sicurezza), rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Santa Rita",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, ristrutturazione, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Santa Rita?", a: "Negli edifici dopoguerra le linee in piombo sono rare; possibili residui in raccordi o rubinetterie datate." },
      { q: "L'acqua di Santa Rita è dura?", a: "In periferia la durezza è variabile; nella zona è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Santa Rita?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Santa Rita a Torino: pacchetto base con metalli, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-mirafiori-nord", "torino-lingotto", "torino-nizza-millefonti"],
  },
  {
    slug: "torino-nizza-millefonti",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Nizza Millefonti",
    district: "Circoscrizione 8",
    shortTitle: "Acqua del rubinetto a Nizza Millefonti (Torino): guida",
    metaDescription: "Acqua del rubinetto a Nizza Millefonti a Torino: quartiere sud, controlli SMAT e analisi al rubinetto consigliate.",
    searchKeywords: ["acqua nizza millefonti torino", "acqua rubinetto nizza millefonti", "qualità acqua smat nizza millefonti", "tubazioni nizza millefonti", "analisi acqua torino nizza millefonti"],
    intro: "Nizza Millefonti, nella Circoscrizione 8, è un quartiere a sud di Torino, costruito in larga parte nel dopoguerra. La rete SMAT distribuisce qui acqua di buona qualità. Il tema principale resta la verifica dei materiali domestici a valle del contatore.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Rame e nichel da rubinetterie", "Stagnazione in alloggi a uso discontinuo", "Eventuali raccordi datati"],
    sections: [
      {
        heading: "L'acqua a Nizza Millefonti: contesto e tubazioni",
        paragraphs: ["SMAT alimenta Nizza Millefonti con acqua di origine alpina e di falda profonda. Il patrimonio edilizio è in larga parte dopoguerra, con condomini omogenei per epoca."],
        bullets: ["Edifici dopoguerra", "Rete pubblica SMAT moderna", "Impianti interni anni '50-'70"],
      },
      {
        heading: "Rischi specifici a Nizza Millefonti",
        paragraphs: ["Negli edifici dopoguerra il piombo nelle linee principali è raro. Restano i rischi domestici di stagnazione e rilascio da rubinetterie."],
        bullets: ["Rame/nichel da rubinetterie", "Stagnazione", "Eventuali raccordi datati"],
      },
      {
        heading: "Cosa controllare a casa a Nizza Millefonti",
        paragraphs: ["Pacchetto consigliato: piombo (per sicurezza), rame, nichel, microbiologica di base, durezza e cloro residuo."],
        bullets: ["Piombo, rame, nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi a Nizza Millefonti",
        paragraphs: ["Trigger tipici: neonati, gravidanza, ingresso in un nuovo appartamento, ristrutturazione, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Nizza Millefonti?", a: "Negli edifici dopoguerra le linee in piombo sono rare; possibili residui in raccordi o rubinetterie datate." },
      { q: "L'acqua di Nizza Millefonti è dura?", a: "In periferia la durezza è variabile; nella zona è in genere medio-bassa, in linea con il profilo SMAT." },
      { q: "Posso bere l'acqua del rubinetto a Nizza Millefonti?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto a Nizza Millefonti a Torino: pacchetto base con metalli, microbiologica e durezza.",
    relatedNeighborhoods: ["torino-lingotto", "torino-san-salvario", "torino-borgo-po"],
  },
  {
    slug: "torino-quadrilatero-romano",
    citySlug: "torino",
    cityName: "Torino",
    neighborhoodName: "Quadrilatero Romano",
    district: "Circoscrizione 1",
    shortTitle: "Acqua del rubinetto nel Quadrilatero Romano (Torino): guida",
    metaDescription: "Acqua del rubinetto nel Quadrilatero Romano a Torino: area movida e ristrutturazioni recenti, controlli SMAT e analisi consigliate.",
    searchKeywords: ["acqua quadrilatero romano torino", "acqua rubinetto quadrilatero torino", "qualità acqua smat quadrilatero", "tubazioni quadrilatero torino", "analisi acqua torino quadrilatero"],
    intro: "Il Quadrilatero Romano, nella Circoscrizione 1, è il cuore antico di Torino, area di movida e di intense ristrutturazioni recenti. La rete SMAT distribuisce qui acqua di buona qualità. Tra palazzi storici e interventi recenti convive un patchwork di impianti: il tema rilevante resta la verifica dei materiali a valle del contatore, palazzo per palazzo.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Piombo in tubazioni private pre-1960", "Stagnazione in immobili a uso turistico", "Rame/nichel da rubinetterie post-ristrutturazione"],
    sections: [
      {
        heading: "L'acqua nel Quadrilatero Romano: contesto e tubazioni",
        paragraphs: ["SMAT alimenta il Quadrilatero Romano con acqua di origine alpina e di falda profonda. Le ristrutturazioni recenti hanno spesso aggiornato gli impianti interni, ma in alcuni palazzi storici restano tratti privati datati."],
        bullets: ["Edifici prevalentemente pre-1900", "Rete SMAT moderna", "Forte presenza di ristrutturazioni recenti"],
      },
      {
        heading: "Rischi specifici nel Quadrilatero Romano",
        paragraphs: ["Il piombo da tubazioni private non sostituite resta il rischio principale nei palazzi non ristrutturati. La forte presenza di affitti brevi e attività di ristorazione introduce il tema della stagnazione."],
        bullets: ["Piombo a rubinetto in palazzi pre-1960", "Stagnazione in B&B e affitti brevi", "Rame/nichel da rubinetterie nuove"],
      },
      {
        heading: "Cosa controllare a casa nel Quadrilatero Romano",
        paragraphs: ["Pacchetto consigliato: piombo, rame, nichel, microbiologica di base, durezza e cloro residuo. Prelievo con metodi validati conformi a norme tecniche."],
        bullets: ["Piombo (priorità nei palazzi pre-1960)", "Rame e nichel", "Microbiologica di base", "Durezza, cloro, pH"],
      },
      {
        heading: "Quando fare un'analisi nel Quadrilatero Romano",
        paragraphs: ["Trigger tipici: ingresso in un appartamento storico, neonati o gravidanza, riavvio dopo lunga assenza, ristrutturazione completata di recente, variazione di sapore o colore."],
      },
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti nel Quadrilatero Romano?", a: "Nella rete pubblica SMAT no. Nei palazzi storici non integralmente ristrutturati possono permanere tratti privati datati: l'analisi al rubinetto è l'unica verifica certa." },
      { q: "L'acqua del Quadrilatero Romano è dura?", a: "La durezza in centro è generalmente medio-bassa, intorno ai 20-30 gradi francesi, in linea con il profilo SMAT della zona centrale." },
      { q: "Posso bere l'acqua del rubinetto nel Quadrilatero Romano?", a: "Sì, è potabile e controllata da SMAT secondo il D.Lgs. 18/2023." },
      { q: "Dove trovo i referti del gestore?", a: "Sul sito di SMAT, con dettaglio per zona. ARPA Piemonte e ASL Città di Torino integrano con controlli ambientali e sanitari." },
    ],
    ctaVariant: "kit-analisi",
    ctaContext: "Analisi acqua del rubinetto nel Quadrilatero Romano a Torino: priorità metalli nei palazzi storici, microbiologica e durezza, utile in zone di movida e affitti brevi.",
    relatedNeighborhoods: ["torino-centro", "torino-san-salvario", "torino-crocetta"],
  },
  {
    slug: "napoli-centro-storico",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Centro Storico",
    district: "Municipalità 4",
    shortTitle: "Acqua del rubinetto a Centro Storico (Napoli): piombo nei palazzi antichi",
    metaDescription: "Acqua del rubinetto nel Centro Storico di Napoli (Municipalità 4): gestore ABC Napoli, fonti Serino-Cassano, rischio piombo nelle tubazioni vetuste dei palazzi antichi.",
    searchKeywords: ["acqua centro storico napoli", "acqua rubinetto centro storico", "qualita acqua napoli centro storico", "tubazioni piombo centro storico", "durezza acqua centro storico napoli"],
    intro: "Il Centro Storico di Napoli, parte della Municipalità 4 e Patrimonio UNESCO, racchiude un tessuto edilizio in larga parte pre-novecentesco, con palazzi nobiliari, case a corte e fondaci che convivono in un reticolo viario di origine greco-romana. L'acqua del rubinetto distribuita da ABC Napoli — Acqua Bene Comune Napoli S.p.A. arriva qui prevalentemente dalle sorgenti appenniniche di Serino e Cassano Irpino attraverso l'Acquedotto della Campania: si tratta di acqua di origine sorgentizia, con durezza tipicamente medio-bassa (intorno ai 15-25 °F) e profilo minerale leggero. Il punto sensibile in Centro Storico non è la rete pubblica ma le tubazioni interne dei palazzi antichi, dove possono persistere tratti residui in piombo o materiali datati.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Piombo da tubazioni interne pre-1960 in palazzi antichi", "Stagnazione in appartamenti a uso turistico o saltuario", "Tubazioni condominiali stratificate nei secoli"],
    sections: [
      {
        heading: "L'acqua a Centro Storico: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Napoli è ABC Napoli (Acqua Bene Comune Napoli S.p.A.), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete partenopea è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, integrate da altre fonti dell'Acquedotto della Campania: ne deriva un'acqua di origine sorgentizia con durezza medio-bassa e conducibilità contenuta.",
          "Nel Centro Storico, parte della Municipalità 4, la rete si innesta su edifici stratificati nei secoli: palazzi pre-ottocenteschi, case a corte, fondaci. Anche dove la rete condominiale è stata rifatta, possono permanere tratti intermedi (colonne montanti, raccordi, allacci al contatore) realizzati prima dei divieti sull'uso del piombo nelle reti idropotabili."
        ]
      },
      {
        heading: "Rischi specifici a Centro Storico",
        paragraphs: [
          "La priorità in questa zona è il piombo nelle tubazioni interne. Non si tratta di un problema della rete ABC Napoli, ma dei tratti privati di palazzi molto antichi: dopo stagnazioni notturne o nei periodi di chiusura di appartamenti a uso turistico, il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle vecchie linee. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Un secondo rischio è la stagnazione legata alla forte presenza di B&B e appartamenti turistici: l'acqua ferma a lungo aumenta il contatto con eventuali materiali rilascianti e la carica microbiologica residua."
        ]
      },
      {
        heading: "Cosa controllare a casa a Centro Storico",
        paragraphs: [
          "Per chi vive o gestisce immobili in Centro Storico consigliamo come pannello minimo: piombo, rame, nichel, durezza totale, conducibilità, cloro residuo e microbiologica di base (E. coli, coliformi, enterococchi). Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato, includendo un campione di primo getto e uno dopo flussaggio per misurare l'effetto stagnazione.",
          "Per famiglie con neonati o donne in gravidanza è utile aggiungere nitrati e arsenico al pacchetto."
        ]
      },
      {
        heading: "Quando fare un'analisi a Centro Storico",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione di un appartamento in palazzo storico, arrivo di un neonato, gestione di una struttura ricettiva, cambio nel sapore o nel colore dell'acqua, dubbi sull'età delle colonne montanti condominiali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Centro Storico?", a: "In edifici pre-1960 del Centro Storico è plausibile trovare tratti residui in piombo nei collegamenti privati interni. Nei palazzi successivi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Centro Storico è dura?", a: "No, l'acqua del rubinetto a Napoli è generalmente leggera, con durezza medio-bassa (circa 15-25 °F), perché di origine sorgentizia appenninica. È meno dura di quella di Roma o Milano." },
      { q: "Devo bollire l'acqua del rubinetto a Centro Storico?", a: "No, in condizioni ordinarie l'acqua di ABC Napoli è potabile e controllata. Bollire elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per zona di distribuzione. ARPA Campania (ARPAC) e ASL Napoli pubblicano i controlli ambientali e sanitari." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto in Centro Storico (Napoli) con un laboratorio qualificato: piombo, rame e nichel nei palazzi antichi, durezza, microbiologica.",
    relatedNeighborhoods: ["napoli-spaccanapoli", "napoli-quartieri-spagnoli", "napoli-toledo"],
  },
  {
    slug: "napoli-spaccanapoli",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Spaccanapoli",
    district: "Municipalità 4/2",
    shortTitle: "Acqua del rubinetto a Spaccanapoli (Napoli): tubazioni storiche e piombo",
    metaDescription: "Acqua del rubinetto a Spaccanapoli (Napoli, Municipalità 4/2): gestore ABC Napoli, fonti Serino-Cassano, attenzione al piombo nelle tubazioni dei palazzi antichi.",
    searchKeywords: ["acqua spaccanapoli napoli", "acqua rubinetto spaccanapoli", "qualita acqua napoli spaccanapoli", "tubazioni piombo spaccanapoli", "durezza acqua spaccanapoli napoli"],
    intro: "Spaccanapoli è il decumano inferiore della città antica, il cuore della vecchia Napoli a cavallo tra Municipalità 4 e 2. Gli edifici sono prevalentemente pre-novecenteschi, con stratificazioni che vanno dall'epoca medievale al barocco. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: profilo leggero, durezza medio-bassa (15-25 °F), conducibilità contenuta. Il tema centrale a Spaccanapoli è il tratto interno ai palazzi: nei collegamenti privati molto datati possono persistere tubazioni in piombo, e la stagnazione in immobili a uso turistico è un fattore che merita attenzione.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Piombo possibile in palazzi pre-1960", "Stagnazione in appartamenti turistici", "Colonne montanti d'epoca poco manutenute"],
    sections: [
      {
        heading: "L'acqua a Spaccanapoli: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli (Acqua Bene Comune Napoli S.p.A.) gestisce il servizio idrico integrato in città: la rete è alimentata in prevalenza dalle sorgenti appenniniche di Serino e Cassano Irpino e da altre fonti dell'Acquedotto della Campania. Ne risulta un'acqua sorgentizia con durezza medio-bassa e profilo minerale leggero, decisamente meno mineralizzato di quello romano o milanese.",
          "A Spaccanapoli, lungo il decumano inferiore tra Municipalità 4 e 2, i palazzi sono in gran parte pre-1900: la rete pubblica arriva al piede dei fabbricati con buoni standard, ma gli impianti interni — colonne montanti, allacci al contatore, raccordi — sono spesso stratificazioni di interventi successivi."
        ]
      },
      {
        heading: "Rischi specifici a Spaccanapoli",
        paragraphs: [
          "Il rischio principale è il piombo nelle tubazioni interne dei palazzi antichi: dopo stagnazioni prolungate (notte, weekend, periodi di chiusura) il primo getto può rilasciare tracce di metalli. Far scorrere alcuni litri prima del consumo è una buona pratica.",
          "La forte vocazione turistica della zona, con molti B&B e case vacanza, accentua il problema della stagnazione: appartamenti chiusi per settimane lasciano l'acqua ferma nelle tubazioni interne."
        ]
      },
      {
        heading: "Cosa controllare a casa a Spaccanapoli",
        paragraphs: [
          "Pannello minimo consigliato a Spaccanapoli: piombo, rame, nichel, durezza, conducibilità, cloro residuo, microbiologica di base. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato. Per cogliere l'effetto stagnazione conviene prelevare un campione di primo getto e uno dopo flussaggio.",
          "In presenza di neonati o donne in gravidanza si aggiungono nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Spaccanapoli",
        paragraphs: [
          "Trigger tipici: ristrutturazione di un appartamento, riapertura di un immobile chiuso da tempo, gestione di una struttura ricettiva, cambio di sapore o colore dell'acqua, dubbi sull'età degli impianti condominiali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Spaccanapoli?", a: "Sì, è plausibile trovare tratti residui in piombo nei collegamenti privati di palazzi pre-1960, specie nelle colonne montanti antiche. La rete pubblica di ABC Napoli è invece priva di piombo nei tratti rinnovati." },
      { q: "L'acqua di Spaccanapoli è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F): le sorgenti appenniniche di Serino e Cassano Irpino conferiscono un profilo poco mineralizzato, ben diverso da quello romano o milanese." },
      { q: "Devo bollire l'acqua del rubinetto a Spaccanapoli?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire serve solo a eliminare la microbiologia, ma concentra eventuali metalli per evaporazione, quindi non è una strategia preventiva utile contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "I dati di qualità sono pubblicati da ABC Napoli sul proprio sito; ARPAC e ASL Napoli pubblicano i controlli ambientali e sanitari sui propri portali." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Spaccanapoli (Napoli) con un laboratorio qualificato: piombo, rame, nichel nei palazzi antichi, microbiologica e parametri di base.",
    relatedNeighborhoods: ["napoli-centro-storico", "napoli-quartieri-spagnoli", "napoli-toledo"],
  },
  {
    slug: "napoli-quartieri-spagnoli",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Quartieri Spagnoli",
    district: "Municipalità 2",
    shortTitle: "Acqua del rubinetto ai Quartieri Spagnoli (Napoli): vecchie tubazioni",
    metaDescription: "Acqua del rubinetto ai Quartieri Spagnoli di Napoli (Municipalità 2): gestore ABC Napoli, fonti appenniniche, attenzione a piombo e densità abitativa storica.",
    searchKeywords: ["acqua quartieri spagnoli napoli", "acqua rubinetto quartieri spagnoli", "qualita acqua napoli quartieri spagnoli", "tubazioni piombo quartieri spagnoli", "durezza acqua quartieri spagnoli napoli"],
    intro: "I Quartieri Spagnoli, parte della Municipalità 2, sono uno dei quartieri più densamente abitati d'Europa, con un reticolo di vicoli stretti tracciato nel Cinquecento. Gli edifici sono in larghissima parte pre-novecenteschi, con bassi al piano strada e case di ringhiera in alto. L'acqua del rubinetto distribuita da ABC Napoli arriva qui dalle sorgenti appenniniche di Serino e Cassano Irpino: profilo leggero, durezza medio-bassa (15-25 °F). La densità abitativa e l'età degli impianti rendono prioritaria l'attenzione alle tubazioni interne e alla stagnazione, soprattutto nei bassi e nei vani con poco ricambio.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Piombo in palazzi pre-1960", "Tubazioni condominiali datate e stratificate", "Stagnazione in bassi e appartamenti turistici"],
    sections: [
      {
        heading: "L'acqua a Quartieri Spagnoli: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce captazione, adduzione e distribuzione dell'acqua potabile in città: le sorgenti appenniniche di Serino e Cassano Irpino, insieme alle altre fonti dell'Acquedotto della Campania, garantiscono un'acqua di origine sorgentizia con durezza medio-bassa e profilo minerale leggero.",
          "Ai Quartieri Spagnoli, Municipalità 2, gli edifici risalgono in larghissima parte a prima del Novecento. I tratti pubblici di ABC Napoli arrivano al piede dei fabbricati con buoni standard, ma le linee interne — spesso stratificate da interventi non coordinati — possono includere tratti datati."
        ]
      },
      {
        heading: "Rischi specifici ai Quartieri Spagnoli",
        paragraphs: [
          "Il rischio principale è il piombo residuo in tratti privati di palazzi pre-1960, plausibile in molte colonne montanti dei vicoli. La densità abitativa e la conformazione dei bassi favoriscono inoltre la stagnazione in alcuni punti della rete interna.",
          "Per le strutture ricettive, sempre più diffuse in zona, vale l'invito a far scorrere l'acqua dopo periodi di chiusura prima dell'uso alimentare."
        ]
      },
      {
        heading: "Cosa controllare a casa ai Quartieri Spagnoli",
        paragraphs: [
          "Pannello consigliato: piombo, rame, nichel, durezza, conducibilità, cloro residuo, microbiologica di base. Per cogliere l'effetto stagnazione è utile prelevare un campione di primo getto e uno dopo flussaggio. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di bambini piccoli o donne in gravidanza si aggiungono nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi ai Quartieri Spagnoli",
        paragraphs: [
          "Trigger tipici: acquisto di un appartamento, ristrutturazione, apertura o riapertura di una struttura ricettiva, dubbi sull'età delle colonne montanti, cambio di sapore o colore dell'acqua."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti ai Quartieri Spagnoli?", a: "Sì, è plausibile incontrare tratti residui in piombo nei collegamenti privati di palazzi pre-1960. Le linee pubbliche di ABC Napoli sono invece prive di piombo nei tratti rinnovati." },
      { q: "L'acqua dei Quartieri Spagnoli è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), tipica delle sorgenti appenniniche che alimentano Napoli." },
      { q: "Devo bollire l'acqua del rubinetto ai Quartieri Spagnoli?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità dell'acqua sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto ai Quartieri Spagnoli (Napoli) con un laboratorio qualificato: piombo, rame, nichel, microbiologica e parametri di base nei palazzi antichi.",
    relatedNeighborhoods: ["napoli-toledo", "napoli-centro-storico", "napoli-chiaia"],
  },
  {
    slug: "napoli-toledo",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Toledo",
    district: "Municipalità 2",
    shortTitle: "Acqua del rubinetto a Toledo (Napoli): edifici storici e tubazioni",
    metaDescription: "Acqua del rubinetto a Toledo, Napoli (Municipalità 2): gestore ABC Napoli, fonti Serino-Cassano, attenzione a piombo e stagnazione nei palazzi storici della via.",
    searchKeywords: ["acqua toledo napoli", "acqua rubinetto toledo", "qualita acqua napoli toledo", "tubazioni piombo toledo", "durezza acqua toledo napoli"],
    intro: "Toledo è l'asse storico-commerciale di Napoli, parte della Municipalità 2, con palazzi prevalentemente sei-ottocenteschi che si affacciano su via Toledo e si estendono nelle traverse verso i Quartieri Spagnoli e il porto. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. Nei palazzi storici di Toledo il punto chiave è lo stato delle colonne montanti e dei raccordi privati: dove gli edifici sono pre-1960 può ancora essere presente piombo in tratti residui, e la stagnazione in immobili poco utilizzati va monitorata.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Piombo possibile in colonne montanti d'epoca", "Stagnazione in uffici e immobili chiusi nel weekend", "Tubazioni stratificate in palazzi storici"],
    sections: [
      {
        heading: "L'acqua a Toledo: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli (Acqua Bene Comune Napoli S.p.A.) gestisce il servizio idrico integrato: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino attraverso l'Acquedotto della Campania, con acqua di origine sorgentizia, durezza medio-bassa e profilo minerale leggero.",
          "Lungo Toledo, Municipalità 2, i palazzi sono per la maggior parte storici. La rete pubblica arriva con buoni standard, ma gli impianti interni — colonne, allacci ai contatori — possono includere tratti realizzati prima dei divieti sull'uso del piombo nelle reti idropotabili."
        ]
      },
      {
        heading: "Rischi specifici a Toledo",
        paragraphs: [
          "Il rischio principale è il piombo in tratti privati di palazzi pre-1960. Dopo stagnazioni notturne o nei weekend, il primo getto può contenere tracce: far scorrere alcuni litri prima dell'uso alimentare è una pratica raccomandata.",
          "La presenza di uffici e attività commerciali rende il tema della stagnazione rilevante: ambienti chiusi nel weekend lasciano l'acqua ferma a lungo nei tratti interni."
        ]
      },
      {
        heading: "Cosa controllare a casa a Toledo",
        paragraphs: [
          "Pannello consigliato: piombo, rame, nichel, durezza, conducibilità, cloro residuo, microbiologica di base. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato, con campione di primo getto e uno dopo flussaggio.",
          "Per famiglie con neonati o donne in gravidanza si aggiungono nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Toledo",
        paragraphs: [
          "Trigger tipici: acquisto di un appartamento in palazzo storico, ristrutturazione, gestione di uffici o B&B chiusi nei weekend, cambio di sapore o colore dell'acqua, dubbi sulle colonne montanti condominiali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Toledo?", a: "Negli edifici pre-1960 è plausibile trovare tratti residui in piombo nei collegamenti privati interni. La rete pubblica di ABC Napoli è invece priva di piombo nei tratti rinnovati." },
      { q: "L'acqua di Toledo è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), grazie all'origine sorgentizia appenninica." },
      { q: "Devo bollire l'acqua del rubinetto a Toledo?", a: "No, in condizioni ordinarie l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i controlli ambientali e sanitari." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Toledo (Napoli) con un laboratorio qualificato: piombo, rame, nichel, durezza e microbiologica nei palazzi storici della via.",
    relatedNeighborhoods: ["napoli-quartieri-spagnoli", "napoli-centro-storico", "napoli-chiaia"],
  },
  {
    slug: "napoli-chiaia",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Chiaia",
    district: "Municipalità 1",
    shortTitle: "Acqua del rubinetto a Chiaia (Napoli): residenziale storico e controlli",
    metaDescription: "Acqua del rubinetto a Chiaia, Napoli (Municipalità 1): gestore ABC Napoli, fonti Serino-Cassano, qualità tipica e cosa controllare nei palazzi residenziali storici.",
    searchKeywords: ["acqua chiaia napoli", "acqua rubinetto chiaia", "qualita acqua napoli chiaia", "tubazioni piombo chiaia", "durezza acqua chiaia napoli"],
    intro: "Chiaia è uno dei quartieri residenziali storici di Napoli, parte della Municipalità 1, con palazzi prevalentemente del tardo Ottocento e del primo Novecento affacciati sul lungomare e nelle vie interne tra Riviera, Mergellina e Vomero basso. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino, con durezza medio-bassa (15-25 °F) e profilo leggero. A Chiaia il fattore principale per la qualità a rubinetto è lo stato degli impianti condominiali, in molti casi rinnovati ma con possibili tratti residui in edifici più antichi.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Possibili tratti in piombo in palazzi pre-1960", "Manutenzione delle colonne montanti condominiali", "Stagnazione in seconde case e uffici"],
    sections: [
      {
        heading: "L'acqua a Chiaia: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce il servizio idrico integrato della città. La rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino e da altre fonti dell'Acquedotto della Campania, con acqua sorgentizia, durezza medio-bassa e profilo minerale leggero.",
          "A Chiaia, Municipalità 1, prevalgono edifici del primo Novecento, in molti casi con impianti idrici rinnovati. Nei palazzi più antichi o non ristrutturati possono sopravvivere tratti datati nelle colonne montanti."
        ]
      },
      {
        heading: "Rischi specifici a Chiaia",
        paragraphs: [
          "Il rischio più rilevante è la possibile presenza di piombo nei tratti privati interni di palazzi pre-1960, specie nelle colonne montanti non sostituite. In edifici primi-novecenteschi ben manutenuti il rischio è basso.",
          "Va considerata la stagnazione in seconde case e uffici poco utilizzati: dopo lunghe chiusure è opportuno far scorrere l'acqua prima dell'uso alimentare."
        ]
      },
      {
        heading: "Cosa controllare a casa a Chiaia",
        paragraphs: [
          "Pannello consigliato a Chiaia: durezza, conducibilità, cloro residuo, microbiologica di base; nei palazzi pre-1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "Per famiglie con neonati o gravidanze, aggiungere nitrati e arsenico al pacchetto."
        ]
      },
      {
        heading: "Quando fare un'analisi a Chiaia",
        paragraphs: [
          "Trigger tipici: acquisto di un appartamento, ristrutturazione del bagno o della cucina con sostituzione tubazioni, arrivo di un neonato in casa, dubbi sull'età degli impianti condominiali, riapertura di una seconda casa chiusa da tempo."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Chiaia?", a: "Negli edifici pre-1960 non ristrutturati è plausibile trovare tratti residui di piombo in colonne montanti private. Nei palazzi rinnovati il rischio è basso." },
      { q: "L'acqua di Chiaia è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), tipica delle sorgenti appenniniche che alimentano Napoli." },
      { q: "Devo bollire l'acqua del rubinetto a Chiaia?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità dell'acqua sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Chiaia (Napoli) con un laboratorio qualificato: durezza, microbiologica, metalli (piombo, rame, nichel) nei palazzi pre-1980.",
    relatedNeighborhoods: ["napoli-mergellina", "napoli-posillipo", "napoli-toledo"],
  },
  {
    slug: "napoli-vomero",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Vomero",
    district: "Municipalità 5",
    shortTitle: "Acqua del rubinetto al Vomero (Napoli): residenziale collinare",
    metaDescription: "Acqua del rubinetto al Vomero, Napoli (Municipalità 5): gestore ABC Napoli, fonti appenniniche, profilo leggero e cosa controllare nei condomini del quartiere.",
    searchKeywords: ["acqua vomero napoli", "acqua rubinetto vomero", "qualita acqua napoli vomero", "tubazioni piombo vomero", "durezza acqua vomero napoli"],
    intro: "Il Vomero è un quartiere residenziale collinare di Napoli, parte della Municipalità 5, con un patrimonio edilizio prevalentemente del primo Novecento e degli anni '20-'40, integrato da palazzine del dopoguerra. L'acqua del rubinetto distribuita da ABC Napoli arriva qui dalle sorgenti appenniniche di Serino e Cassano Irpino attraverso reti di adduzione che servono la collina: durezza medio-bassa (15-25 °F), profilo leggero. Per i residenti del Vomero il tema principale è lo stato delle colonne condominiali, in molti edifici dei primi del Novecento ancora con impianti originari o solo parzialmente rinnovati.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Possibili tratti residui in piombo in palazzine anteguerra", "Manutenzione delle colonne montanti", "Variazioni di pressione in zona collinare"],
    sections: [
      {
        heading: "L'acqua al Vomero: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli (Acqua Bene Comune Napoli S.p.A.) cura captazione, adduzione e distribuzione: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, integrate dalle altre fonti dell'Acquedotto della Campania. Ne risulta un'acqua sorgentizia, leggera, con durezza medio-bassa.",
          "Al Vomero, Municipalità 5, prevalgono palazzine di inizio Novecento ed edifici del dopoguerra. La quota collinare comporta reti di adduzione dedicate; i tratti privati nei condomini più antichi possono includere ancora qualche linea storica."
        ]
      },
      {
        heading: "Rischi specifici al Vomero",
        paragraphs: [
          "Il rischio principale è la presenza di tratti residui di piombo nelle colonne montanti di edifici pre-1960 non ristrutturati. Nei palazzi del dopoguerra il piombo è raro.",
          "Da considerare la manutenzione delle colonne nei condomini storici e la possibilità di variazioni di pressione in zona collinare, che possono mettere in evidenza punti deboli dell'impianto interno."
        ]
      },
      {
        heading: "Cosa controllare a casa al Vomero",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base; nei palazzi pre-1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "Per famiglie con neonati o gravidanze, si aggiungono nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi al Vomero",
        paragraphs: [
          "Trigger tipici: acquisto di un appartamento, ristrutturazione, arrivo di un neonato, dubbi sull'età degli impianti condominiali, cambio di sapore o colore dell'acqua."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti al Vomero?", a: "Negli edifici pre-1960 non ristrutturati è plausibile trovare tratti residui in piombo nelle colonne montanti private. Negli edifici del dopoguerra è raro." },
      { q: "L'acqua del Vomero è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), grazie alle sorgenti appenniniche che alimentano Napoli." },
      { q: "Devo bollire l'acqua del rubinetto al Vomero?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire elimina la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità dell'acqua sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto al Vomero (Napoli) con un laboratorio qualificato: durezza, microbiologica e metalli (piombo, rame, nichel) nei palazzi pre-1980.",
    relatedNeighborhoods: ["napoli-arenella", "napoli-chiaia", "napoli-posillipo"],
  },
  {
    slug: "napoli-arenella",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Arenella",
    district: "Municipalità 5",
    shortTitle: "Acqua del rubinetto all'Arenella (Napoli): condomini del dopoguerra",
    metaDescription: "Acqua del rubinetto all'Arenella, Napoli (Municipalità 5): gestore ABC Napoli, fonti appenniniche e cosa controllare nei condomini del dopoguerra.",
    searchKeywords: ["acqua arenella napoli", "acqua rubinetto arenella", "qualita acqua napoli arenella", "tubazioni piombo arenella", "durezza acqua arenella napoli"],
    intro: "L'Arenella è un quartiere residenziale collinare di Napoli, parte della Municipalità 5, sviluppatosi soprattutto nel dopoguerra con palazzine degli anni '50-'70 affiancate a porzioni precedenti. L'acqua del rubinetto distribuita da ABC Napoli arriva dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. All'Arenella il tema principale per la qualità a rubinetto non è tanto il piombo — più raro in edifici del dopoguerra — quanto la manutenzione delle colonne montanti condominiali, soprattutto nei palazzi degli anni '50-'60 in cui sono stati spesso usati materiali non più di prima scelta.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Manutenzione delle colonne condominiali anni '50-'70", "Stagnazione in appartamenti poco usati", "Variazioni di pressione in zona collinare"],
    sections: [
      {
        heading: "L'acqua all'Arenella: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce il servizio idrico integrato: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "All'Arenella, Municipalità 5, prevalgono palazzine del dopoguerra. La rete pubblica arriva al piede dei fabbricati con buoni standard; gli impianti interni dipendono dalle scelte fatte in fase di costruzione e dalle manutenzioni successive."
        ]
      },
      {
        heading: "Rischi specifici all'Arenella",
        paragraphs: [
          "Negli edifici del dopoguerra il piombo è raro: i materiali usati sono spesso acciaio zincato, rame o materiali plastici. Il rischio principale è il deterioramento delle colonne montanti e dei tratti orizzontali condominiali nei palazzi degli anni '50-'60, dove l'acciaio zincato può rilasciare ferro e zinco e produrre piccoli intorbidamenti.",
          "Da valutare anche la stagnazione in appartamenti poco utilizzati e l'effetto delle variazioni di pressione tipiche delle reti collinari."
        ]
      },
      {
        heading: "Cosa controllare a casa all'Arenella",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base, ferro, zinco. Per edifici primi anni '60 con dubbi sull'impianto si possono aggiungere piombo e rame. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi all'Arenella",
        paragraphs: [
          "Trigger tipici: acquisto di un appartamento, ristrutturazione, comparsa di intorbidamenti o sapori metallici, arrivo di un neonato in casa, riapertura di un'abitazione chiusa a lungo."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti all'Arenella?", a: "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il ferro o lo zinco rilasciati da tubazioni in acciaio zincato deteriorate." },
      { q: "L'acqua dell'Arenella è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto all'Arenella?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire elimina la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i controlli ambientali e sanitari." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto all'Arenella (Napoli) con un laboratorio qualificato: durezza, microbiologica, ferro, zinco nelle colonne condominiali del dopoguerra.",
    relatedNeighborhoods: ["napoli-vomero", "napoli-capodimonte", "napoli-soccavo"],
  },
  {
    slug: "napoli-posillipo",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Posillipo",
    district: "Municipalità 1",
    shortTitle: "Acqua del rubinetto a Posillipo (Napoli): costa collinare e impianti misti",
    metaDescription: "Acqua del rubinetto a Posillipo, Napoli (Municipalità 1): gestore ABC Napoli, fonti appenniniche, impianti misti tra ville storiche e palazzine moderne.",
    searchKeywords: ["acqua posillipo napoli", "acqua rubinetto posillipo", "qualita acqua napoli posillipo", "tubazioni piombo posillipo", "durezza acqua posillipo napoli"],
    intro: "Posillipo è il quartiere costiero collinare di Napoli, parte della Municipalità 1, con un patrimonio edilizio misto: ville storiche di fine Ottocento e primo Novecento, palazzine del dopoguerra e interventi più recenti. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Posillipo il quadro impiantistico è eterogeneo: nelle ville e palazzine d'epoca possono persistere tratti datati, mentre negli edifici recenti le tubazioni sono in materiali idonei.",
    buildingAge: "misto",
    typicalRisks: ["Impianti misti tra edifici storici e recenti", "Possibili tratti in piombo in ville pre-1960", "Stagnazione in seconde case e ville chiuse"],
    sections: [
      {
        heading: "L'acqua a Posillipo: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli (Acqua Bene Comune Napoli S.p.A.) cura captazione, adduzione e distribuzione dell'acqua potabile in città: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia di durezza medio-bassa e profilo leggero.",
          "A Posillipo, Municipalità 1, il patrimonio edilizio è misto: ville e palazzine storiche convivono con interventi più recenti. La rete pubblica arriva ai fabbricati con buoni standard; i tratti privati riflettono l'età dell'immobile."
        ]
      },
      {
        heading: "Rischi specifici a Posillipo",
        paragraphs: [
          "Nelle ville e palazzine pre-1960 non ristrutturate è plausibile trovare tratti residui in piombo nelle colonne private. Negli edifici più recenti il rischio è basso.",
          "Da considerare la stagnazione in seconde case affacciate sulla costa, talvolta chiuse per lunghi periodi: prima dell'uso alimentare conviene flussare la rete interna."
        ]
      },
      {
        heading: "Cosa controllare a casa a Posillipo",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base; nei palazzi e nelle ville pre-1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze si aggiungono nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Posillipo",
        paragraphs: [
          "Trigger tipici: acquisto di una villa o appartamento, ristrutturazione, riapertura di una seconda casa, dubbi sull'età delle colonne interne, cambio di sapore o colore dell'acqua."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Posillipo?", a: "Nelle ville e palazzine pre-1960 non ristrutturate è plausibile trovare tratti residui di piombo nei collegamenti privati. Negli edifici recenti è raro." },
      { q: "L'acqua di Posillipo è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), grazie alle sorgenti appenniniche che alimentano Napoli." },
      { q: "Devo bollire l'acqua del rubinetto a Posillipo?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità dell'acqua sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Posillipo (Napoli) con un laboratorio qualificato: durezza, microbiologica, metalli (piombo, rame, nichel) nelle ville e palazzine pre-1980.",
    relatedNeighborhoods: ["napoli-chiaia", "napoli-mergellina", "napoli-fuorigrotta"],
  },
  {
    slug: "napoli-fuorigrotta",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Fuorigrotta",
    district: "Municipalità 10",
    shortTitle: "Acqua del rubinetto a Fuorigrotta (Napoli): dopoguerra e bonifica vicina",
    metaDescription: "Acqua del rubinetto a Fuorigrotta, Napoli (Municipalità 10): gestore ABC Napoli, edifici dopoguerra, prossimità alla bonifica di Bagnoli e cosa controllare.",
    searchKeywords: ["acqua fuorigrotta napoli", "acqua rubinetto fuorigrotta", "qualita acqua napoli fuorigrotta", "tubazioni acqua fuorigrotta", "durezza acqua fuorigrotta napoli"],
    intro: "Fuorigrotta è un quartiere a ovest di Napoli, parte della Municipalità 10, con il polo dello stadio Maradona e della Mostra d'Oltremare. Il patrimonio edilizio è in larga parte del dopoguerra (anni '50-'70), con interventi successivi. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Fuorigrotta il tema principale per la qualità a rubinetto è la manutenzione degli impianti condominiali del dopoguerra. La prossimità con Bagnoli, area SIN in bonifica, richiama attenzione sui controlli ambientali condotti da ARPAC nell'area ovest, anche se la rete idropotabile distribuita resta sotto controllo del gestore e delle ASL.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Manutenzione colonne condominiali anni '50-'70", "Acciaio zincato che può rilasciare ferro/zinco", "Prossimità area SIN di Bagnoli in bonifica (controlli ambientali ARPAC)"],
    sections: [
      {
        heading: "L'acqua a Fuorigrotta: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce captazione, adduzione e distribuzione dell'acqua potabile: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino e dalle altre fonti dell'Acquedotto della Campania. L'acqua è di origine sorgentizia, leggera, con durezza medio-bassa.",
          "A Fuorigrotta, Municipalità 10, prevalgono palazzine del dopoguerra. La rete pubblica arriva con buoni standard al piede degli edifici; gli impianti interni risentono dello stato di manutenzione dei singoli condomini."
        ]
      },
      {
        heading: "Rischi specifici a Fuorigrotta",
        paragraphs: [
          "Negli edifici del dopoguerra il piombo è raro: il rischio principale è il deterioramento di tratti in acciaio zincato nelle colonne condominiali, con possibile rilascio di ferro e zinco. Nei palazzi degli anni '80 in poi i materiali sono in genere più stabili.",
          "Il quartiere confina con Bagnoli, area dichiarata SIN (Sito di Interesse Nazionale) e oggetto di un percorso di bonifica per la presenza di contaminazioni nei suoli e nelle acque sotterranee legate all'ex acciaieria Italsider. La rete idropotabile distribuita da ABC Napoli è una filiera separata, controllata dal gestore e dalle ASL, e i monitoraggi ambientali nell'area sono curati da ARPA Campania (ARPAC)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Fuorigrotta",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base, ferro, zinco. Per chi desidera un quadro più completo si possono aggiungere metalli pesanti (piombo, rame, nichel) e parametri legati al monitoraggio ambientale dell'area ovest, da valutare caso per caso. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, includere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Fuorigrotta",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione di un appartamento, comparsa di intorbidamenti o sapori metallici, arrivo di un neonato, esigenza di un quadro di riferimento personale dato il contesto ambientale della vicina area di Bagnoli."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Fuorigrotta?", a: "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro o zinco da vecchie tubazioni in acciaio zincato." },
      { q: "L'acqua di Fuorigrotta è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Fuorigrotta?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione, quindi non protegge da contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità dell'acqua sul proprio sito; ARPA Campania (ARPAC) pubblica i monitoraggi ambientali dell'area ovest, incluso il SIN di Bagnoli; ASL Napoli pubblica i controlli sanitari." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Fuorigrotta (Napoli) con un laboratorio qualificato: durezza, microbiologica, ferro, zinco e — su richiesta — metalli pesanti, anche in considerazione del contesto ambientale dell'area ovest.",
    relatedNeighborhoods: ["napoli-bagnoli", "napoli-soccavo", "napoli-pianura"],
  },
  {
    slug: "napoli-bagnoli",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Bagnoli",
    district: "Municipalità 10",
    shortTitle: "Acqua del rubinetto a Bagnoli (Napoli): area SIN in bonifica",
    metaDescription: "Acqua del rubinetto a Bagnoli, Napoli (Municipalità 10): gestore ABC Napoli, area ex Italsider classificata SIN in bonifica, ruolo dei controlli ARPAC.",
    searchKeywords: ["acqua bagnoli napoli", "acqua rubinetto bagnoli", "qualita acqua napoli bagnoli", "bonifica bagnoli acqua", "durezza acqua bagnoli napoli"],
    intro: "Bagnoli è il quartiere a ovest di Napoli, parte della Municipalità 10, segnato dalla storia industriale dell'ex acciaieria Italsider e oggi caratterizzato da un'area dichiarata Sito di Interesse Nazionale (SIN) in bonifica. Il patrimonio edilizio è misto, con porzioni storiche e palazzine del dopoguerra. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. La rete idropotabile distribuita è una filiera distinta dalle matrici ambientali (suoli e acque sotterranee) oggetto della bonifica, ed è controllata dal gestore e dalle ASL; il monitoraggio ambientale dell'area è invece curato da ARPA Campania (ARPAC).",
    buildingAge: "misto",
    typicalRisks: ["Area SIN ex Italsider in bonifica (controlli ambientali ARPAC su suoli e acque sotterranee)", "Manutenzione condominiale impianti dopoguerra", "Stagnazione in immobili poco utilizzati"],
    sections: [
      {
        heading: "L'acqua a Bagnoli: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli (Acqua Bene Comune Napoli S.p.A.) gestisce il servizio idrico integrato in città. La rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino e dalle altre fonti dell'Acquedotto della Campania, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Bagnoli, Municipalità 10, l'edificato è misto: zone storiche, palazzine del dopoguerra e aree in trasformazione legate alla bonifica e ai progetti di riqualificazione. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica."
        ]
      },
      {
        heading: "Rischi specifici a Bagnoli",
        paragraphs: [
          "Bagnoli è dichiarata Sito di Interesse Nazionale (SIN) per la contaminazione dei suoli e delle acque sotterranee legata all'attività dell'ex acciaieria Italsider e di altri stabilimenti industriali dismessi. L'area è oggetto di un percorso di bonifica e i controlli ambientali sui suoli, sulle acque di falda e sulle acque marine costiere sono di competenza di ARPA Campania (ARPAC).",
          "La rete idropotabile distribuita da ABC Napoli costituisce una filiera separata rispetto alle matrici ambientali oggetto della bonifica: i parametri di qualità dell'acqua al rubinetto sono regolati dal D.Lgs. 18/2023 e verificati dal gestore e dalle ASL. Per i singoli condomini il tema principale resta lo stato degli impianti interni: acciaio zincato in palazzine del dopoguerra può rilasciare ferro o zinco."
        ]
      },
      {
        heading: "Cosa controllare a casa a Bagnoli",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base, ferro, zinco. Per chi vuole un quadro più ampio, dato il contesto dell'area, è ragionevole aggiungere metalli pesanti (piombo, rame, nichel) e — su valutazione caso per caso — parametri specifici legati al monitoraggio ambientale dell'area. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, includere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Bagnoli",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione di un appartamento, esigenza di un quadro di riferimento personale data la storia ambientale dell'area, comparsa di intorbidamenti, arrivo di un neonato in casa."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Bagnoli?", a: "Negli edifici del dopoguerra il piombo è raro. Nei palazzi misti e nelle porzioni più antiche è plausibile trovare qualche tratto residuo nei collegamenti privati: il pannello con metalli pesanti lo evidenzia." },
      { q: "L'acqua di Bagnoli è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Bagnoli?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una strategia preventiva utile contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità dell'acqua sul proprio sito; ARPAC pubblica i monitoraggi ambientali del SIN di Bagnoli (suoli, falda, acque marine); ASL Napoli pubblica i controlli sanitari." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Bagnoli (Napoli) con un laboratorio qualificato: durezza, microbiologica, metalli pesanti (piombo, rame, nichel, ferro, zinco) per un quadro di riferimento personale nell'area in bonifica.",
    relatedNeighborhoods: ["napoli-fuorigrotta", "napoli-pianura", "napoli-soccavo"],
  },
  {
    slug: "napoli-pianura",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Pianura",
    district: "Municipalità 9",
    shortTitle: "Acqua del rubinetto a Pianura (Napoli): edifici dopoguerra e controlli",
    metaDescription: "Acqua del rubinetto a Pianura, Napoli (Municipalità 9): gestore ABC Napoli, fonti appenniniche, edifici dopoguerra e cosa controllare nei condomini.",
    searchKeywords: ["acqua pianura napoli", "acqua rubinetto pianura", "qualita acqua napoli pianura", "tubazioni acqua pianura", "durezza acqua pianura napoli"],
    intro: "Pianura è un quartiere periferico nordovest di Napoli, parte della Municipalità 9, sviluppatosi prevalentemente nel dopoguerra con palazzine degli anni '60-'80. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Pianura il tema principale per la qualità a rubinetto è lo stato di manutenzione degli impianti condominiali, soprattutto nei palazzi degli anni '60-'70 in cui sono frequenti colonne in acciaio zincato.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Manutenzione colonne condominiali del dopoguerra", "Acciaio zincato deteriorato (ferro, zinco)", "Stagnazione in appartamenti poco utilizzati"],
    sections: [
      {
        heading: "L'acqua a Pianura: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli cura captazione, adduzione e distribuzione dell'acqua potabile: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua di origine sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Pianura, Municipalità 9, prevalgono palazzine del dopoguerra. La rete pubblica arriva con buoni standard al piede degli edifici; gli impianti interni dipendono dalle scelte costruttive e dalle manutenzioni dei singoli condomini."
        ]
      },
      {
        heading: "Rischi specifici a Pianura",
        paragraphs: [
          "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli al rubinetto è il deterioramento di colonne in acciaio zincato, con possibile rilascio di ferro e zinco. Nei palazzi più recenti i materiali sono in genere più stabili.",
          "Da valutare anche la stagnazione in appartamenti poco utilizzati: dopo periodi di chiusura conviene far scorrere l'acqua prima dell'uso alimentare."
        ]
      },
      {
        heading: "Cosa controllare a casa a Pianura",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base, ferro, zinco. Nei palazzi degli anni '60 con dubbi sull'impianto si possono aggiungere piombo e rame. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Pianura",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione di un appartamento, comparsa di intorbidamenti o sapori metallici, arrivo di un neonato in casa, riapertura di un'abitazione chiusa a lungo."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Pianura?", a: "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro o zinco da vecchie tubazioni in acciaio zincato." },
      { q: "L'acqua di Pianura è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Pianura?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli ambientali e sanitari." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Pianura (Napoli) con un laboratorio qualificato: durezza, microbiologica, ferro, zinco nelle colonne dei palazzi del dopoguerra.",
    relatedNeighborhoods: ["napoli-soccavo", "napoli-fuorigrotta", "napoli-bagnoli"],
  },
  {
    slug: "napoli-soccavo",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Soccavo",
    district: "Municipalità 9",
    shortTitle: "Acqua del rubinetto a Soccavo (Napoli): condomini dopoguerra e impianti",
    metaDescription: "Acqua del rubinetto a Soccavo, Napoli (Municipalità 9): gestore ABC Napoli, fonti appenniniche, condomini dopoguerra e cosa controllare in casa.",
    searchKeywords: ["acqua soccavo napoli", "acqua rubinetto soccavo", "qualita acqua napoli soccavo", "tubazioni acqua soccavo", "durezza acqua soccavo napoli"],
    intro: "Soccavo è un quartiere a ovest di Napoli, parte della Municipalità 9, sviluppatosi soprattutto nel dopoguerra con grandi complessi residenziali degli anni '60-'80. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Soccavo il tema centrale per la qualità a rubinetto è la manutenzione degli impianti condominiali nei grandi edifici del dopoguerra, dove sono frequenti colonne in acciaio zincato.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Manutenzione colonne condominiali grandi complessi", "Acciaio zincato deteriorato (ferro, zinco)", "Stagnazione nei tratti interni di grandi edifici"],
    sections: [
      {
        heading: "L'acqua a Soccavo: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce il servizio idrico integrato di Napoli: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Soccavo, Municipalità 9, prevalgono grandi complessi residenziali del dopoguerra. La rete pubblica arriva con buoni standard al piede dei fabbricati; gli impianti interni dipendono dalle scelte costruttive e dalle manutenzioni condominiali."
        ]
      },
      {
        heading: "Rischi specifici a Soccavo",
        paragraphs: [
          "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro e zinco da colonne in acciaio zincato deteriorate, specie nei grandi complessi non oggetto di rifacimenti recenti.",
          "La conformazione dei grandi edifici, con lunghi tratti interni di tubazione, accentua il tema della stagnazione: appartamenti poco usati lasciano l'acqua ferma a lungo nei propri tratti interni."
        ]
      },
      {
        heading: "Cosa controllare a casa a Soccavo",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base, ferro, zinco. Per edifici di inizio anni '60 con impianti originari si possono aggiungere piombo e rame. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Soccavo",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione, comparsa di intorbidamenti o sapori metallici, arrivo di un neonato in casa, riapertura di un'abitazione chiusa a lungo."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Soccavo?", a: "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro o zinco da vecchie tubazioni in acciaio zincato." },
      { q: "L'acqua di Soccavo è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Soccavo?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Soccavo (Napoli) con un laboratorio qualificato: durezza, microbiologica, ferro, zinco nelle colonne dei grandi complessi del dopoguerra.",
    relatedNeighborhoods: ["napoli-pianura", "napoli-fuorigrotta", "napoli-arenella"],
  },
  {
    slug: "napoli-secondigliano",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Secondigliano",
    district: "Municipalità 7",
    shortTitle: "Acqua del rubinetto a Secondigliano (Napoli): edilizia popolare nord",
    metaDescription: "Acqua del rubinetto a Secondigliano, Napoli (Municipalità 7): gestore ABC Napoli, fonti appenniniche, edilizia popolare del dopoguerra e cosa controllare.",
    searchKeywords: ["acqua secondigliano napoli", "acqua rubinetto secondigliano", "qualita acqua napoli secondigliano", "tubazioni acqua secondigliano", "durezza acqua secondigliano napoli"],
    intro: "Secondigliano è un quartiere popolare a nord di Napoli, parte della Municipalità 7, segnato da un'intensa edilizia pubblica e residenziale del dopoguerra. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Secondigliano il tema principale per la qualità a rubinetto è lo stato di manutenzione degli impianti condominiali nei grandi complessi popolari, dove sono frequenti colonne in acciaio zincato e dove le manutenzioni straordinarie hanno coperto realtà condominiali molto diverse.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Manutenzione condominiale grandi complessi popolari", "Acciaio zincato deteriorato (ferro, zinco)", "Stagnazione nei tratti interni"],
    sections: [
      {
        heading: "L'acqua a Secondigliano: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli (Acqua Bene Comune Napoli S.p.A.) gestisce il servizio idrico integrato della città: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Secondigliano, Municipalità 7, prevalgono complessi residenziali popolari del dopoguerra. La rete pubblica arriva con buoni standard al piede dei fabbricati; gli impianti interni dipendono dallo stato di manutenzione dei singoli edifici."
        ]
      },
      {
        heading: "Rischi specifici a Secondigliano",
        paragraphs: [
          "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro e zinco da colonne in acciaio zincato deteriorate, specie nei complessi più datati.",
          "La grande dimensione di alcuni edifici, con lunghi tratti interni di tubazione, può favorire stagnazione: nei punti più distali dell'impianto conviene far scorrere l'acqua prima dell'uso alimentare."
        ]
      },
      {
        heading: "Cosa controllare a casa a Secondigliano",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base, ferro, zinco. Per edifici di inizio anni '60 con impianti originari si possono aggiungere piombo e rame. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Secondigliano",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione, comparsa di intorbidamenti o sapori metallici, arrivo di un neonato in casa, riapertura di un'abitazione chiusa a lungo."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Secondigliano?", a: "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro o zinco da vecchie tubazioni in acciaio zincato." },
      { q: "L'acqua di Secondigliano è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Secondigliano?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Secondigliano (Napoli) con un laboratorio qualificato: durezza, microbiologica, ferro, zinco nei grandi complessi popolari del dopoguerra.",
    relatedNeighborhoods: ["napoli-scampia", "napoli-capodimonte", "napoli-arenella"],
  },
  {
    slug: "napoli-scampia",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Scampia",
    district: "Municipalità 8",
    shortTitle: "Acqua del rubinetto a Scampia (Napoli): edilizia popolare e impianti",
    metaDescription: "Acqua del rubinetto a Scampia, Napoli (Municipalità 8): gestore ABC Napoli, fonti appenniniche, edilizia popolare del dopoguerra e cosa controllare in casa.",
    searchKeywords: ["acqua scampia napoli", "acqua rubinetto scampia", "qualita acqua napoli scampia", "tubazioni acqua scampia", "durezza acqua scampia napoli"],
    intro: "Scampia è un quartiere popolare a nord di Napoli, parte della Municipalità 8, sviluppatosi dagli anni '60-'70 con grandi interventi di edilizia pubblica. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Scampia il tema principale per la qualità a rubinetto è lo stato degli impianti condominiali nei grandi complessi del dopoguerra, dove le manutenzioni straordinarie e i programmi di riqualificazione hanno interessato solo parte del patrimonio edilizio.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Manutenzione condominiale grandi complessi popolari", "Acciaio zincato deteriorato (ferro, zinco)", "Stagnazione nei lunghi tratti interni"],
    sections: [
      {
        heading: "L'acqua a Scampia: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce il servizio idrico integrato della città: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Scampia, Municipalità 8, prevalgono grandi complessi popolari del dopoguerra. La rete pubblica arriva al piede dei fabbricati con buoni standard; gli impianti interni dipendono dallo stato di manutenzione e dai programmi di riqualificazione dei singoli edifici."
        ]
      },
      {
        heading: "Rischi specifici a Scampia",
        paragraphs: [
          "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro e zinco da colonne in acciaio zincato deteriorate.",
          "La grande dimensione di alcuni complessi, con lunghi tratti interni di tubazione, può favorire stagnazione: nei punti più distali dell'impianto conviene far scorrere l'acqua prima dell'uso alimentare."
        ]
      },
      {
        heading: "Cosa controllare a casa a Scampia",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base, ferro, zinco. Per edifici di inizio anni '60 con impianti originari si possono aggiungere piombo e rame. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Scampia",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione, comparsa di intorbidamenti o sapori metallici, arrivo di un neonato in casa, riapertura di un'abitazione chiusa a lungo."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Scampia?", a: "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro o zinco da vecchie tubazioni in acciaio zincato." },
      { q: "L'acqua di Scampia è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Scampia?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Scampia (Napoli) con un laboratorio qualificato: durezza, microbiologica, ferro, zinco nei grandi complessi popolari del dopoguerra.",
    relatedNeighborhoods: ["napoli-secondigliano", "napoli-capodimonte", "napoli-soccavo"],
  },
  {
    slug: "napoli-poggioreale",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Poggioreale",
    district: "Municipalità 4",
    shortTitle: "Acqua del rubinetto a Poggioreale (Napoli): area mista e controlli",
    metaDescription: "Acqua del rubinetto a Poggioreale, Napoli (Municipalità 4): gestore ABC Napoli, area cimiteri/industriale, edilizia mista e cosa controllare in casa.",
    searchKeywords: ["acqua poggioreale napoli", "acqua rubinetto poggioreale", "qualita acqua napoli poggioreale", "tubazioni acqua poggioreale", "durezza acqua poggioreale napoli"],
    intro: "Poggioreale è un quartiere a est del centro di Napoli, parte della Municipalità 4, caratterizzato dalla presenza dei grandi cimiteri, di aree artigianali e industriali e di un edificato residenziale eterogeneo che spazia dal primo Novecento agli interventi del dopoguerra. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Poggioreale il tema principale per la qualità a rubinetto è la convivenza tra edifici di età diverse, con impianti interni di tipologia mista.",
    buildingAge: "misto",
    typicalRisks: ["Impianti misti tra edifici storici e dopoguerra", "Possibile piombo in palazzi pre-1960", "Stagnazione in uffici e attività chiuse nei weekend"],
    sections: [
      {
        heading: "L'acqua a Poggioreale: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli (Acqua Bene Comune Napoli S.p.A.) cura captazione, adduzione e distribuzione: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Poggioreale, Municipalità 4, gli edifici sono eterogenei: palazzine primi-novecentesche, edifici del dopoguerra e interventi residenziali più recenti. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica."
        ]
      },
      {
        heading: "Rischi specifici a Poggioreale",
        paragraphs: [
          "Nei palazzi pre-1960 è plausibile la presenza di tratti residui in piombo nei collegamenti privati. Negli edifici del dopoguerra il piombo è raro, ma può comparire ferro o zinco da acciaio zincato deteriorato.",
          "La presenza di uffici, attività artigianali e magazzini rende rilevante il tema della stagnazione: ambienti chiusi nei weekend lasciano l'acqua ferma a lungo nei tratti interni."
        ]
      },
      {
        heading: "Cosa controllare a casa a Poggioreale",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base; nei palazzi pre-1980 anche piombo, rame e nichel; nei palazzi del dopoguerra ferro e zinco. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Poggioreale",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione, gestione di uffici o attività chiuse nei weekend, dubbi sull'età degli impianti condominiali, cambio di sapore o colore dell'acqua."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Poggioreale?", a: "Nei palazzi pre-1960 è plausibile trovare tratti residui in piombo. Negli edifici del dopoguerra il piombo è raro." },
      { q: "L'acqua di Poggioreale è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Poggioreale?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Poggioreale (Napoli) con un laboratorio qualificato: durezza, microbiologica, metalli (piombo, rame, ferro, zinco) negli impianti misti del quartiere.",
    relatedNeighborhoods: ["napoli-centro-storico", "napoli-san-giovanni-a-teduccio", "napoli-barra"],
  },
  {
    slug: "napoli-san-giovanni-a-teduccio",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "San Giovanni a Teduccio",
    district: "Municipalità 6",
    shortTitle: "Acqua del rubinetto a San Giovanni a Teduccio (Napoli): ex industriale",
    metaDescription: "Acqua del rubinetto a San Giovanni a Teduccio, Napoli (Municipalità 6): gestore ABC Napoli, ex zona industriale orientale, edilizia mista e controlli.",
    searchKeywords: ["acqua san giovanni a teduccio napoli", "acqua rubinetto san giovanni a teduccio", "qualita acqua napoli san giovanni a teduccio", "tubazioni acqua san giovanni a teduccio", "durezza acqua san giovanni a teduccio napoli"],
    intro: "San Giovanni a Teduccio è un quartiere della zona orientale di Napoli, parte della Municipalità 6, con un passato industriale importante e un patrimonio edilizio misto tra edifici di primo Novecento, palazzine del dopoguerra e progetti di riqualificazione urbana. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A San Giovanni a Teduccio il tema principale per la qualità a rubinetto è lo stato degli impianti condominiali in un contesto edilizio misto e in trasformazione.",
    buildingAge: "misto",
    typicalRisks: ["Impianti misti tra edifici storici e dopoguerra", "Possibile piombo in palazzi pre-1960", "Acciaio zincato deteriorato (ferro, zinco) in edifici del dopoguerra"],
    sections: [
      {
        heading: "L'acqua a San Giovanni a Teduccio: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce il servizio idrico integrato in città: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A San Giovanni a Teduccio, Municipalità 6, gli edifici sono eterogenei: palazzine primi-novecentesche, complessi del dopoguerra e nuovi interventi di riqualificazione. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica."
        ]
      },
      {
        heading: "Rischi specifici a San Giovanni a Teduccio",
        paragraphs: [
          "Nei palazzi pre-1960 è plausibile trovare tratti residui in piombo nei collegamenti privati. Negli edifici del dopoguerra il rischio piombo è basso, ma può comparire ferro o zinco da acciaio zincato deteriorato.",
          "Il passato industriale del quartiere riguarda principalmente lo stato di suoli e acque sotterranee in specifiche aree dismesse, oggetto di monitoraggi ambientali da parte di ARPA Campania (ARPAC). La rete idropotabile distribuita resta una filiera separata, controllata da ABC Napoli e dalle ASL."
        ]
      },
      {
        heading: "Cosa controllare a casa a San Giovanni a Teduccio",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base; nei palazzi pre-1980 anche piombo, rame e nichel; nei palazzi del dopoguerra ferro e zinco. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a San Giovanni a Teduccio",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione di un appartamento, comparsa di intorbidamenti o sapori metallici, arrivo di un neonato in casa, dubbi sull'età degli impianti condominiali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a San Giovanni a Teduccio?", a: "Nei palazzi pre-1960 è plausibile trovare tratti residui in piombo. Negli edifici del dopoguerra il piombo è raro." },
      { q: "L'acqua di San Giovanni a Teduccio è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a San Giovanni a Teduccio?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli ambientali e sanitari." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a San Giovanni a Teduccio (Napoli) con un laboratorio qualificato: durezza, microbiologica, metalli (piombo, rame, ferro, zinco) nel contesto edilizio misto del quartiere orientale.",
    relatedNeighborhoods: ["napoli-barra", "napoli-ponticelli", "napoli-poggioreale"],
  },
  {
    slug: "napoli-barra",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Barra",
    district: "Municipalità 6",
    shortTitle: "Acqua del rubinetto a Barra (Napoli): zona orientale ed edilizia mista",
    metaDescription: "Acqua del rubinetto a Barra, Napoli (Municipalità 6): gestore ABC Napoli, zona orientale, edilizia mista e cosa controllare nei condomini.",
    searchKeywords: ["acqua barra napoli", "acqua rubinetto barra", "qualita acqua napoli barra", "tubazioni acqua barra", "durezza acqua barra napoli"],
    intro: "Barra è un quartiere della zona orientale di Napoli, parte della Municipalità 6, con un patrimonio edilizio misto fatto di nuclei storici, palazzine del dopoguerra e zone artigianali. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Barra il tema principale per la qualità a rubinetto è lo stato degli impianti condominiali in un edificato eterogeneo per epoca e tipologia.",
    buildingAge: "misto",
    typicalRisks: ["Impianti misti tra nuclei storici e dopoguerra", "Possibile piombo in palazzi pre-1960", "Acciaio zincato deteriorato (ferro, zinco) in edifici dopoguerra"],
    sections: [
      {
        heading: "L'acqua a Barra: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce captazione, adduzione e distribuzione dell'acqua potabile: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Barra, Municipalità 6, l'edificato è misto. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica; gli impianti interni riflettono l'età e lo stato di manutenzione dei singoli condomini."
        ]
      },
      {
        heading: "Rischi specifici a Barra",
        paragraphs: [
          "Nei palazzi pre-1960 è plausibile trovare tratti residui in piombo nei collegamenti privati. Negli edifici del dopoguerra il rischio piombo è basso, ma può comparire ferro o zinco da acciaio zincato deteriorato.",
          "Per le attività artigianali presenti in zona vale l'invito a far scorrere l'acqua dopo periodi di chiusura prima dell'uso alimentare."
        ]
      },
      {
        heading: "Cosa controllare a casa a Barra",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base; nei palazzi pre-1980 anche piombo, rame e nichel; nei palazzi del dopoguerra ferro e zinco. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Barra",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione di un appartamento, comparsa di intorbidamenti, arrivo di un neonato in casa, dubbi sull'età degli impianti condominiali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Barra?", a: "Nei palazzi pre-1960 è plausibile trovare tratti residui in piombo. Negli edifici del dopoguerra il piombo è raro." },
      { q: "L'acqua di Barra è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Barra?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Barra (Napoli) con un laboratorio qualificato: durezza, microbiologica, metalli (piombo, rame, ferro, zinco) nel contesto edilizio misto del quartiere orientale.",
    relatedNeighborhoods: ["napoli-san-giovanni-a-teduccio", "napoli-ponticelli", "napoli-poggioreale"],
  },
  {
    slug: "napoli-ponticelli",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Ponticelli",
    district: "Municipalità 6",
    shortTitle: "Acqua del rubinetto a Ponticelli (Napoli): popolare orientale",
    metaDescription: "Acqua del rubinetto a Ponticelli, Napoli (Municipalità 6): gestore ABC Napoli, edilizia popolare orientale del dopoguerra e cosa controllare in casa.",
    searchKeywords: ["acqua ponticelli napoli", "acqua rubinetto ponticelli", "qualita acqua napoli ponticelli", "tubazioni acqua ponticelli", "durezza acqua ponticelli napoli"],
    intro: "Ponticelli è un quartiere popolare della zona orientale di Napoli, parte della Municipalità 6, con un patrimonio edilizio in larga parte del dopoguerra e degli interventi post-terremoto del 1980. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Ponticelli il tema principale per la qualità a rubinetto è lo stato di manutenzione delle colonne condominiali nei complessi residenziali popolari.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Manutenzione condominiale complessi popolari", "Acciaio zincato deteriorato (ferro, zinco)", "Stagnazione nei tratti interni"],
    sections: [
      {
        heading: "L'acqua a Ponticelli: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce il servizio idrico integrato di Napoli: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Ponticelli, Municipalità 6, prevalgono complessi residenziali del dopoguerra e degli interventi post-terremoto. La rete pubblica arriva con buoni standard al piede dei fabbricati; gli impianti interni dipendono dallo stato di manutenzione dei singoli condomini."
        ]
      },
      {
        heading: "Rischi specifici a Ponticelli",
        paragraphs: [
          "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro e zinco da colonne in acciaio zincato deteriorate.",
          "Da considerare la stagnazione in appartamenti poco utilizzati e nei punti più distali degli impianti dei grandi complessi."
        ]
      },
      {
        heading: "Cosa controllare a casa a Ponticelli",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base, ferro, zinco. Per edifici di inizio anni '60 si possono aggiungere piombo e rame. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Ponticelli",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione, comparsa di intorbidamenti o sapori metallici, arrivo di un neonato in casa, riapertura di un'abitazione chiusa a lungo."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Ponticelli?", a: "Negli edifici del dopoguerra il piombo è raro. Il rischio principale per i metalli a rubinetto è il rilascio di ferro o zinco da vecchie tubazioni in acciaio zincato." },
      { q: "L'acqua di Ponticelli è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Ponticelli?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Ponticelli (Napoli) con un laboratorio qualificato: durezza, microbiologica, ferro, zinco nelle colonne condominiali dei complessi popolari orientali.",
    relatedNeighborhoods: ["napoli-barra", "napoli-san-giovanni-a-teduccio", "napoli-poggioreale"],
  },
  {
    slug: "napoli-mergellina",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Mergellina",
    district: "Municipalità 1",
    shortTitle: "Acqua del rubinetto a Mergellina (Napoli): lungomare e palazzi storici",
    metaDescription: "Acqua del rubinetto a Mergellina, Napoli (Municipalità 1): gestore ABC Napoli, edifici primo Novecento, lungomare e cosa controllare in casa.",
    searchKeywords: ["acqua mergellina napoli", "acqua rubinetto mergellina", "qualita acqua napoli mergellina", "tubazioni piombo mergellina", "durezza acqua mergellina napoli"],
    intro: "Mergellina è il tratto di lungomare di Napoli a ovest di Chiaia, parte della Municipalità 1, con un patrimonio edilizio prevalentemente del primo Novecento e degli anni '20-'40, integrato da palazzine successive. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Mergellina il tema principale per la qualità a rubinetto è lo stato degli impianti condominiali nei palazzi primi-novecenteschi e la stagnazione in appartamenti affacciati sul lungomare a uso non continuativo.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Possibili tratti in piombo in palazzine pre-1960", "Manutenzione delle colonne condominiali", "Stagnazione in seconde case affacciate sul lungomare"],
    sections: [
      {
        heading: "L'acqua a Mergellina: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce il servizio idrico integrato della città: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Mergellina, Municipalità 1, prevalgono edifici del primo Novecento e degli anni '20-'40. La rete pubblica arriva con buoni standard ai fabbricati; gli impianti interni riflettono lo stato di manutenzione dei singoli condomini."
        ]
      },
      {
        heading: "Rischi specifici a Mergellina",
        paragraphs: [
          "Nelle palazzine pre-1960 non ristrutturate è plausibile trovare tratti residui di piombo nelle colonne montanti private. Nei palazzi successivi il piombo è raro.",
          "Da considerare la stagnazione in seconde case affacciate sul lungomare, talvolta chiuse per lunghi periodi: prima dell'uso alimentare conviene flussare la rete interna."
        ]
      },
      {
        heading: "Cosa controllare a casa a Mergellina",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base; nei palazzi pre-1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Mergellina",
        paragraphs: [
          "Trigger tipici: acquisto di un appartamento, ristrutturazione, riapertura di una seconda casa, dubbi sull'età delle colonne interne, cambio di sapore o colore dell'acqua."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Mergellina?", a: "Nelle palazzine pre-1960 non ristrutturate è plausibile trovare tratti residui di piombo nei collegamenti privati. Nei palazzi successivi è raro." },
      { q: "L'acqua di Mergellina è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Mergellina?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Mergellina (Napoli) con un laboratorio qualificato: durezza, microbiologica, metalli (piombo, rame, nichel) nelle palazzine del lungomare.",
    relatedNeighborhoods: ["napoli-chiaia", "napoli-posillipo", "napoli-toledo"],
  },
  {
    slug: "napoli-capodimonte",
    citySlug: "napoli",
    cityName: "Napoli",
    neighborhoodName: "Capodimonte",
    district: "Municipalità 3",
    shortTitle: "Acqua del rubinetto a Capodimonte (Napoli): collinare nord e impianti misti",
    metaDescription: "Acqua del rubinetto a Capodimonte, Napoli (Municipalità 3): gestore ABC Napoli, collina nord, edilizia mista e cosa controllare nei condomini.",
    searchKeywords: ["acqua capodimonte napoli", "acqua rubinetto capodimonte", "qualita acqua napoli capodimonte", "tubazioni acqua capodimonte", "durezza acqua capodimonte napoli"],
    intro: "Capodimonte è un quartiere collinare a nord di Napoli, parte della Municipalità 3, noto per la Reggia e il Parco e con un patrimonio edilizio misto: ville e palazzi storici, palazzine del dopoguerra e interventi più recenti. L'acqua del rubinetto distribuita da ABC Napoli proviene dalle sorgenti appenniniche di Serino e Cassano Irpino: durezza medio-bassa (15-25 °F), profilo leggero. A Capodimonte il tema principale per la qualità a rubinetto è lo stato degli impianti condominiali in un edificato eterogeneo e la possibile variabilità di pressione in zona collinare.",
    buildingAge: "misto",
    typicalRisks: ["Impianti misti tra edifici storici e dopoguerra", "Possibile piombo in palazzi pre-1960", "Variazioni di pressione in zona collinare"],
    sections: [
      {
        heading: "L'acqua a Capodimonte: contesto urbano e tubazioni",
        paragraphs: [
          "ABC Napoli gestisce captazione, adduzione e distribuzione dell'acqua potabile: la rete è alimentata principalmente dalle sorgenti appenniniche di Serino e Cassano Irpino, con acqua sorgentizia, durezza medio-bassa e profilo leggero.",
          "A Capodimonte, Municipalità 3, l'edificato è misto: edifici storici, palazzine del dopoguerra, interventi più recenti. La rete pubblica arriva con buoni standard ai fabbricati; gli impianti interni riflettono l'età e lo stato di manutenzione dei singoli condomini."
        ]
      },
      {
        heading: "Rischi specifici a Capodimonte",
        paragraphs: [
          "Nei palazzi pre-1960 è plausibile trovare tratti residui in piombo nei collegamenti privati. Negli edifici del dopoguerra il piombo è raro, ma può comparire ferro o zinco da acciaio zincato deteriorato.",
          "Da considerare la possibilità di variazioni di pressione in zona collinare, che possono mettere in evidenza punti deboli degli impianti interni."
        ]
      },
      {
        heading: "Cosa controllare a casa a Capodimonte",
        paragraphs: [
          "Pannello consigliato: durezza, conducibilità, cloro residuo, microbiologica di base; nei palazzi pre-1980 anche piombo, rame e nichel; nei palazzi del dopoguerra ferro e zinco. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.",
          "In presenza di neonati o gravidanze, aggiungere nitrati e arsenico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Capodimonte",
        paragraphs: [
          "Trigger tipici: acquisto o ristrutturazione, dubbi sull'età degli impianti condominiali, comparsa di intorbidamenti, arrivo di un neonato in casa."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Capodimonte?", a: "Nei palazzi pre-1960 è plausibile trovare tratti residui in piombo. Negli edifici del dopoguerra il piombo è raro." },
      { q: "L'acqua di Capodimonte è dura?", a: "No, è un'acqua leggera, con durezza medio-bassa (15-25 °F), come tutta la rete napoletana alimentata dalle sorgenti appenniniche." },
      { q: "Devo bollire l'acqua del rubinetto a Capodimonte?", a: "No, l'acqua di ABC Napoli è potabile e controllata. Bollire abbatte la microbiologia ma concentra eventuali metalli per evaporazione." },
      { q: "Dove trovo i referti del gestore?", a: "ABC Napoli pubblica i dati di qualità sul proprio sito; ARPAC e ASL Napoli pubblicano i rispettivi controlli." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Capodimonte (Napoli) con un laboratorio qualificato: durezza, microbiologica, metalli (piombo, rame, ferro, zinco) negli impianti misti del quartiere collinare nord.",
    relatedNeighborhoods: ["napoli-arenella", "napoli-vomero", "napoli-secondigliano"],
  },
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
