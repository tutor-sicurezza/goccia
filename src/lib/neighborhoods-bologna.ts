import type { NeighborhoodGuide } from "./neighborhood-guides";

const HERA_PARAGRAPH =
  "Il servizio idrico integrato di Bologna è gestito da Hera S.p.A., che si occupa di captazione, potabilizzazione, adduzione e distribuzione. L'acqua del capoluogo emiliano proviene principalmente dal fiume Reno e dal torrente Setta (potabilizzatore di Val di Setta), dalla falda dell'alta pianura appenninica e da sorgenti minori dell'Appennino bolognese. Il profilo è quello di un'acqua con durezza media, mediamente bicarbonato-calcica, in linea con la geologia della pedecollina emiliana.";

const CONTROLS_PARAGRAPH =
  "I controlli sull'acqua distribuita seguono il D.Lgs. 18/2023, che recepisce la Direttiva UE 2020/2184: gli autocontrolli di Hera lungo la filiera si affiancano ai controlli ufficiali dell'AUSL di Bologna e al monitoraggio ambientale di ARPAE Emilia-Romagna. I dati di qualità per zona acquedottistica sono consultabili sul portale del gestore.";

const NITRATI_PARAGRAPH =
  "Un tema rilevante per l'area bolognese è quello dei nitrati: parte della pianura padana emiliana è classificata come zona vulnerabile da nitrati di origine agricola ai sensi della Direttiva 91/676/CEE, e ARPAE monitora costantemente le falde. L'acqua distribuita da Hera resta entro i limiti di legge, ma il contesto giustifica un'attenzione specifica nelle zone periferiche servite anche da pozzi.";

export const NEIGHBORHOODS_BOLOGNA: NeighborhoodGuide[] = [
  {
    slug: "bologna-centro",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Centro storico",
    district: "Quartiere Santo Stefano",
    shortTitle:
      "Acqua del rubinetto nel Centro storico di Bologna: cosa controllare",
    metaDescription:
      "Acqua del rubinetto nel Centro storico di Bologna: palazzi medievali e signorili, possibili tubazioni interne datate, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua centro storico bologna",
      "acqua rubinetto bologna centro",
      "tubazioni piombo centro bologna",
      "qualità acqua bologna centro",
      "analisi acqua bologna centro",
      "acqua hera bologna",
    ],
    intro:
      "Il Centro storico di Bologna, racchiuso dai viali di circonvallazione, conserva uno dei tessuti medievali più estesi d'Europa: palazzi torre, edifici porticati, conventi e dimore signorili in larga parte antecedenti al Novecento. La rete pubblica di Hera porta acqua di buona qualità a ogni palazzo, ma il tratto più delicato è quello interno: colonne montanti, raccordi e ultimi metri verso il rubinetto possono risalire a stratificazioni di interventi succedutisi nei secoli.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da tubazioni interne pre-1960",
      "Stagnazione in palazzi a uso parziale o turistico",
      "Durezza media tipica di Bologna",
      "Cloro residuo variabile nei punti più distali della rete",
    ],
    sections: [
      {
        heading:
          "L'acqua nel Centro storico di Bologna: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Nel Centro storico la rete pubblica si innesta su edifici stratificati nei secoli: palazzi medievali, rinascimentali e signorili in cui gli impianti idrici interni sono stati rifatti in fasi successive. Anche dove la rete condominiale è moderna, possono permanere tratti intermedi realizzati prima del divieto di utilizzo del piombo in ambito idropotabile.",
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
          "La priorità in questa zona è il piombo. Non si tratta di un problema della rete Hera, ma delle tubazioni interne ai palazzi: nei tratti più datati il metallo può cedere lentamente all'acqua, soprattutto in caso di stagnazione notturna o nei periodi di inutilizzo.",
          CONTROLS_PARAGRAPH,
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
          "Per chi vive in un palazzo storico del Centro, l'analisi più informativa combina metalli (piombo, rame, nichel) con un set microbiologico di base. Vale la pena valutare anche durezza e cloro residuo per inquadrare il profilo organolettico.",
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
          "Un'analisi è particolarmente utile in presenza di neonati o gravidanza, dopo una ristrutturazione recente dell'impianto, all'ingresso in un appartamento storico o se si avverte un cambiamento del sapore o del colore dell'acqua nelle prime erogazioni del mattino.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti nel Centro storico di Bologna?",
        a: "Nella rete pubblica gestita da Hera il piombo è stato sostituito da tempo. Negli impianti interni dei palazzi storici, invece, possono permanere tratti realizzati prima delle normative restrittive: per saperlo con certezza serve un'analisi al rubinetto.",
      },
      {
        q: "L'acqua del Centro storico di Bologna è dura?",
        a: "Ha una durezza media, in linea con il resto della città. Non è un problema sanitario, ma può causare incrostazioni su elettrodomestici e rubinetterie.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto in centro?",
        a: "No, in condizioni ordinarie è potabile. Far scorrere l'acqua per qualche secondo al mattino è una buona pratica negli impianti antichi.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Hera pubblica i dati di qualità per zona acquedottistica sul proprio sito istituzionale, con il dettaglio dei parametri principali.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto nel Centro storico di Bologna con focus su piombo e metalli da tubazioni interne dei palazzi antichi.",
    relatedNeighborhoods: ["bologna-pratello", "bologna-santo-stefano", "bologna-galvani"],
  },
  {
    slug: "bologna-pratello",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Pratello",
    district: "Quartiere Porto-Saragozza",
    shortTitle: "Acqua del rubinetto al Pratello (Bologna): cosa controllare",
    metaDescription:
      "Acqua del rubinetto al Pratello: palazzi storici, possibili tubazioni interne datate, durezza media e quando fare un'analisi nel quartiere di Bologna.",
    searchKeywords: [
      "acqua pratello bologna",
      "acqua rubinetto pratello",
      "tubazioni piombo pratello",
      "qualità acqua pratello bologna",
      "analisi acqua pratello",
    ],
    intro:
      "Il Pratello è una delle zone più caratteristiche di Bologna, ai margini del Centro storico, con un tessuto edilizio fatto di palazzine basse e edifici prevalentemente pre-novecenteschi. La rete pubblica Hera porta acqua di buona qualità, ma negli appartamenti più antichi i tratti interni dell'impianto possono ancora contenere materiali datati.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da impianti interni pre-1960",
      "Stagnazione in immobili a uso discontinuo",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua al Pratello: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Il Pratello è uno dei nuclei storici di Bologna: la maggior parte degli edifici è di impianto pre-novecentesco. Anche dove la facciata è stata conservata, gli impianti interni sono stati sostituiti più volte, ma non sempre in modo integrale.",
        ],
      },
      {
        heading: "Rischi specifici del Pratello",
        paragraphs: [
          "Come nel resto del Centro storico, il rischio principale è legato a eventuali residui di piombo nelle tubazioni interne. A questo si aggiunge la stagnazione tipica degli immobili a uso saltuario.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Piombo nei tratti residui di impianti pre-1960",
          "Stagnazione in seconde case e affitti brevi",
          "Cloro residuo variabile",
        ],
      },
      {
        heading: "Cosa controllare a casa al Pratello",
        paragraphs: [
          "Per gli appartamenti del Pratello ha senso un'analisi che verifichi i metalli (piombo, rame, nichel), associata a parametri microbiologici di base. Durezza e cloro residuo completano il quadro.",
        ],
      },
      {
        heading: "Quando fare un'analisi al Pratello",
        paragraphs: [
          "Un'analisi è indicata prima di trasferirsi in un appartamento storico, in presenza di neonati o gravidanza, dopo una ristrutturazione parziale o se si riapre un'abitazione dopo settimane di inutilizzo.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti al Pratello?",
        a: "La rete pubblica non utilizza più piombo, ma negli impianti interni di palazzi pre-1960 possono esserci tratti residui.",
      },
      {
        q: "L'acqua del Pratello è dura?",
        a: "Ha una durezza media, in linea con il resto di Bologna.",
      },
      {
        q: "Devo bollire l'acqua al Pratello?",
        a: "No, in condizioni ordinarie è potabile.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul sito di Hera, nella sezione dedicata alla qualità dell'acqua per zona.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto al Pratello (Bologna) con focus su piombo e metalli negli appartamenti storici.",
    relatedNeighborhoods: ["bologna-centro", "bologna-saffi", "bologna-malpighi"],
  },
  {
    slug: "bologna-bolognina",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Bolognina",
    district: "Quartiere Navile",
    shortTitle: "Acqua del rubinetto in Bolognina (Bologna): qualità e parametri",
    metaDescription:
      "Acqua del rubinetto in Bolognina: edifici primo Novecento e dopoguerra, tubazioni stratificate, durezza media e quando fare un'analisi a Bologna.",
    searchKeywords: [
      "acqua bolognina",
      "acqua rubinetto bolognina",
      "qualità acqua bolognina bologna",
      "tubazioni piombo bolognina",
      "analisi acqua bolognina",
    ],
    intro:
      "La Bolognina, a nord della stazione centrale, è un quartiere a forte identità popolare e operaia, sviluppatosi tra primo Novecento e dopoguerra. Il tessuto edilizio è misto: palazzine ferroviarie, edilizia popolare anni '50-'70 e nuovi interventi di rigenerazione urbana. Gli impianti idrici interni riflettono questa stratificazione.",
    buildingAge: "misto",
    typicalRisks: [
      "Tubazioni interne datate in alcuni edifici",
      "Possibile piombo residuo in tratti pre-1960",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in Bolognina: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "La Bolognina ha un patrimonio edilizio eterogeneo: gli edifici più antichi possono avere impianti interni mai completamente rifatti, mentre gli interventi di rigenerazione urbana hanno introdotto reti moderne.",
        ],
      },
      {
        heading: "Rischi specifici della Bolognina",
        paragraphs: [
          "Il rischio principale riguarda gli edifici più datati, dove possono permanere tratti di impianto con materiali oggi non più ammessi. Negli edifici dopoguerra sono più frequenti rame e acciaio zincato.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Tubazioni interne datate in palazzi pre-1960",
          "Rame e zincati nei tratti dopoguerra",
          "Durezza media tipica della zona",
        ],
      },
      {
        heading: "Cosa controllare a casa in Bolognina",
        paragraphs: [
          "Un pacchetto base utile combina metalli (piombo, rame, nichel) e parametri chimici (durezza, conducibilità, cloro residuo), con una microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi in Bolognina",
        paragraphs: [
          "Indicata in presenza di neonati o gravidanza, all'acquisto di un appartamento in edificio non recentemente ristrutturato, o se si percepisce un cambiamento del sapore dell'acqua.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in Bolognina è di buona qualità?",
        a: "Sì, la rete Hera distribuisce acqua conforme al D.Lgs. 18/2023. Le criticità riguardano eventuali tratti interni datati.",
      },
      {
        q: "Quanto è dura l'acqua in Bolognina?",
        a: "Ha durezza media, simile al resto di Bologna.",
      },
      {
        q: "Servono filtri in casa?",
        a: "Non in modo sistematico: dipende dall'esito di un'analisi al rubinetto.",
      },
      {
        q: "Dove trovo i dati del gestore?",
        a: "Sul portale Hera, nella sezione dedicata alla qualità dell'acqua per zona.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua di rubinetto in Bolognina (Bologna) con focus su metalli e parametri di base.",
    relatedNeighborhoods: ["bologna-corticella", "bologna-arcoveggio", "bologna-fiera"],
  },
  {
    slug: "bologna-san-vitale",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "San Vitale",
    district: "Quartiere San Vitale-San Donato",
    shortTitle: "Acqua del rubinetto a San Vitale (Bologna): cosa sapere",
    metaDescription:
      "Acqua del rubinetto a San Vitale: tessuto urbano misto storico e primo Novecento, possibili tratti datati, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua san vitale bologna",
      "acqua rubinetto san vitale",
      "qualità acqua san vitale",
      "analisi acqua san vitale bologna",
    ],
    intro:
      "Il quartiere San Vitale si estende lungo la direttrice omonima a est del Centro storico, con un tessuto edilizio che mescola palazzi pre-novecenteschi a edifici di primo Novecento e dopoguerra. La rete pubblica Hera è in buono stato; le criticità tipiche riguardano i tratti interni dei palazzi più datati.",
    buildingAge: "misto",
    typicalRisks: [
      "Tubazioni interne datate in alcuni stabili",
      "Possibile piombo residuo in tratti pre-1960",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a San Vitale: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Lungo la via San Vitale si alternano edifici storici e palazzine novecentesche, con impianti interni stratificati nel tempo.",
        ],
      },
      {
        heading: "Rischi specifici di San Vitale",
        paragraphs: [
          "Negli edifici più datati possono ancora esserci tratti di impianto con materiali oggi non più ammessi. Nei palazzi rinnovati il rischio è limitato alla rubinetteria.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa a San Vitale",
        paragraphs: [
          "Un'analisi mirata su piombo, rame, nichel e parametri microbiologici di base è la scelta più informativa per un appartamento in palazzo storico.",
        ],
      },
      {
        heading: "Quando fare un'analisi a San Vitale",
        paragraphs: [
          "All'ingresso in un nuovo appartamento, in presenza di neonati, dopo lavori di ristrutturazione parziale o in caso di cambiamenti percepiti del sapore.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di San Vitale è dura?",
        a: "Ha durezza media, in linea con il resto della città.",
      },
      {
        q: "Ci sono tubazioni in piombo a San Vitale?",
        a: "Non nella rete pubblica. Possono esserci tratti residui negli impianti interni di palazzi pre-1960.",
      },
      {
        q: "Devo bollire l'acqua?",
        a: "No, in condizioni ordinarie è potabile.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera, per zona acquedottistica.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto a San Vitale (Bologna) con focus su metalli e tubazioni interne.",
    relatedNeighborhoods: ["bologna-cirenaica", "bologna-massarenti", "bologna-mazzini"],
  },
  {
    slug: "bologna-cirenaica",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Cirenaica",
    district: "Quartiere San Vitale-San Donato",
    shortTitle: "Acqua del rubinetto in Cirenaica (Bologna): qualità e analisi",
    metaDescription:
      "Acqua del rubinetto in Cirenaica: edilizia popolare anni '20-'50, tubazioni interne possibili datate, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua cirenaica bologna",
      "acqua rubinetto cirenaica",
      "qualità acqua cirenaica",
      "analisi acqua cirenaica bologna",
    ],
    intro:
      "La Cirenaica è un quartiere storico operaio di Bologna, costruito tra gli anni '20 e il dopoguerra. Il tessuto edilizio è dominato da palazzine basse e case a schiera popolari. Gli impianti idrici interni sono stati rifatti in molte case, ma non sempre integralmente.",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Tratti di impianto datati in case storiche",
      "Acciaio zincato in tratti dopoguerra",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in Cirenaica: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Le case della Cirenaica sono in larga parte di impianto primo-novecentesco. Gli impianti interni mostrano stratificazioni di materiali, dal piombo iniziale all'acciaio zincato del dopoguerra fino ai materiali plastici moderni.",
        ],
      },
      {
        heading: "Rischi specifici della Cirenaica",
        paragraphs: [
          "Il rischio principale riguarda i tratti più datati di impianti che non hanno subito una ristrutturazione integrale. Da non sottovalutare l'acciaio zincato dei primi decenni del dopoguerra, che può rilasciare ferro e zinco.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in Cirenaica",
        paragraphs: [
          "Indicata un'analisi che verifichi metalli (piombo, ferro, zinco, rame), durezza e parametri microbiologici di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi in Cirenaica",
        paragraphs: [
          "In presenza di neonati o gravidanza, dopo lavori di ristrutturazione parziale o se si percepiscono variazioni del sapore o del colore dell'acqua.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua della Cirenaica è dura?",
        a: "Ha durezza media, simile al resto della città.",
      },
      {
        q: "Ci sono problemi di piombo in Cirenaica?",
        a: "Nella rete pubblica no. Negli impianti interni di case pre-1960 può esserci, va verificato con un'analisi.",
      },
      {
        q: "Serve un filtro in casa?",
        a: "Solo se l'analisi mostra superamenti specifici.",
      },
      {
        q: "Dove trovo i dati ufficiali?",
        a: "Sul sito di Hera per zona acquedottistica.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto in Cirenaica (Bologna) con focus su metalli da impianti datati.",
    relatedNeighborhoods: ["bologna-san-vitale", "bologna-massarenti", "bologna-mazzini"],
  },
  {
    slug: "bologna-massarenti",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Massarenti",
    district: "Quartiere San Vitale-San Donato",
    shortTitle: "Acqua del rubinetto in zona Massarenti (Bologna): cosa sapere",
    metaDescription:
      "Acqua del rubinetto in via Massarenti: edilizia dopoguerra e moderna, tratti zincati possibili, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua massarenti bologna",
      "acqua rubinetto massarenti",
      "qualità acqua massarenti",
      "analisi acqua massarenti bologna",
    ],
    intro:
      "La zona Massarenti si sviluppa lungo l'omonima direttrice a est della città, con un tessuto edilizio dominato da edifici del dopoguerra e degli anni '60-'70. La rete pubblica Hera è in buono stato; le criticità tipiche riguardano gli impianti interni di tipo zincato e l'eventuale rame nei raccordi.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Acciaio zincato in impianti dopoguerra",
      "Rame nei raccordi",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona Massarenti: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Gli edifici di via Massarenti sono prevalentemente del secondo Novecento, con impianti interni meno datati rispetto al Centro storico.",
        ],
      },
      {
        heading: "Rischi specifici della zona Massarenti",
        paragraphs: [
          "Il rischio principale è il rilascio di ferro e zinco da vecchie tubazioni in acciaio zincato, e di rame da raccordi non recentissimi.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Massarenti",
        paragraphs: [
          "Un'analisi base con metalli (ferro, zinco, rame, nichel), durezza, conducibilità e microbiologica di base copre bene il profilo tipico della zona.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Massarenti",
        paragraphs: [
          "Al cambio casa, in presenza di bambini piccoli o se l'acqua presenta un colore giallastro al primo flusso del mattino.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di via Massarenti è sicura?",
        a: "Sì, la rete Hera distribuisce acqua conforme alla normativa.",
      },
      {
        q: "Perché a volte esce acqua giallastra?",
        a: "Può dipendere da vecchie tubazioni zincate interne; far scorrere qualche secondo aiuta.",
      },
      {
        q: "Quanto è dura l'acqua?",
        a: "Durezza media, simile al resto di Bologna.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera per zona.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua di rubinetto in zona Massarenti (Bologna) con focus su metalli e tubazioni zincate.",
    relatedNeighborhoods: ["bologna-san-vitale", "bologna-cirenaica", "bologna-mazzini"],
  },
  {
    slug: "bologna-fiera",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Fiera",
    district: "Quartiere San Donato-San Vitale",
    shortTitle: "Acqua del rubinetto in zona Fiera (Bologna): qualità e analisi",
    metaDescription:
      "Acqua del rubinetto in zona Fiera: edilizia moderna e direzionale, impianti recenti, durezza media e quando fare un'analisi a Bologna.",
    searchKeywords: [
      "acqua fiera bologna",
      "acqua rubinetto zona fiera",
      "qualità acqua fiera bologna",
      "analisi acqua fiera",
    ],
    intro:
      "La zona Fiera, a nord-est di Bologna, è caratterizzata da grandi infrastrutture espositive, uffici e edilizia residenziale relativamente recente. Gli impianti interni sono generalmente moderni: il profilo dell'acqua riflette in modo più diretto quello distribuito dalla rete Hera.",
    buildingAge: "moderno",
    typicalRisks: [
      "Stagnazione in uffici e immobili a uso intermittente",
      "Rame nei raccordi",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona Fiera: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Gli edifici di questa zona sono in larga parte degli ultimi decenni del Novecento o successivi, con impianti idrici interni di concezione moderna.",
        ],
      },
      {
        heading: "Rischi specifici della zona Fiera",
        paragraphs: [
          "Il tema principale è la stagnazione negli edifici a uso intermittente (uffici chiusi nel weekend, hall fiera fuori stagione), che può favorire l'accumulo di biofilm.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Fiera",
        paragraphs: [
          "Una microbiologica di base con parametri chimici (durezza, conducibilità, cloro residuo) e un controllo dei metalli da raccordi (rame, nichel) coprono il profilo tipico.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Fiera",
        paragraphs: [
          "Alla riapertura di un immobile dopo settimane di inutilizzo, all'ingresso in una nuova abitazione o per un controllo periodico in famiglie con bambini.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in zona Fiera è di buona qualità?",
        a: "Sì, la rete è recente e i controlli Hera mostrano un quadro stabile.",
      },
      {
        q: "Serve un filtro?",
        a: "Non in modo sistematico; dipende dall'esito di un'analisi.",
      },
      {
        q: "Quanto è dura l'acqua?",
        a: "Durezza media, in linea con il resto della città.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera, sezione qualità acqua per zona.",
      },
    ],
    ctaVariant: "microbiologica",
    ctaContext:
      "Analisi acqua di rubinetto in zona Fiera (Bologna) con focus su microbiologica e stagnazione.",
    relatedNeighborhoods: ["bologna-bolognina", "bologna-san-vitale", "bologna-arcoveggio"],
  },
  {
    slug: "bologna-savena",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Savena",
    district: "Quartiere Savena",
    shortTitle: "Acqua del rubinetto a Savena (Bologna): cosa controllare",
    metaDescription:
      "Acqua del rubinetto nel quartiere Savena: edilizia dopoguerra e moderna, tubazioni miste, durezza media e quando fare un'analisi a Bologna.",
    searchKeywords: [
      "acqua savena bologna",
      "acqua rubinetto savena",
      "qualità acqua quartiere savena",
      "analisi acqua savena bologna",
    ],
    intro:
      "Il quartiere Savena, a sud-est di Bologna, è una zona residenziale sviluppatasi nel secondo dopoguerra. Comprende sia edifici degli anni '50-'70 sia interventi più recenti. Gli impianti idrici interni sono in larga parte adeguati, ma in alcuni stabili possono permanere tratti zincati.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Acciaio zincato in tratti residui",
      "Rame nei raccordi",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Savena: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Nei palazzi anni '50-'70 di Savena sono frequenti impianti in acciaio zincato, oggi sostituiti in molti condomini ma non sempre in modo integrale.",
        ],
      },
      {
        heading: "Rischi specifici di Savena",
        paragraphs: [
          "Il tema dominante è il rilascio di ferro e zinco da tratti di impianto datati, con possibili tracce di rame nei raccordi più recenti.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa a Savena",
        paragraphs: [
          "Indicata un'analisi base con metalli (ferro, zinco, rame, nichel), durezza, conducibilità e microbiologica.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Savena",
        paragraphs: [
          "Al cambio casa, in presenza di bambini piccoli o se l'acqua si presenta torbida al primo flusso del mattino.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Savena è potabile senza problemi?",
        a: "Sì, la distribuzione Hera è conforme ai limiti del D.Lgs. 18/2023.",
      },
      {
        q: "Perché a volte esce acqua torbida?",
        a: "Per micro-bolle d'aria o residui da impianti interni datati; il flusso si chiarifica in pochi secondi.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i dati ufficiali?",
        a: "Sul portale Hera, sezione qualità acqua.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua di rubinetto a Savena (Bologna) con focus su metalli da tubazioni zincate.",
    relatedNeighborhoods: ["bologna-mazzini", "bologna-massarenti", "bologna-santo-stefano"],
  },
  {
    slug: "bologna-mazzini",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Mazzini",
    district: "Quartiere Savena",
    shortTitle: "Acqua del rubinetto in zona Mazzini (Bologna): qualità",
    metaDescription:
      "Acqua del rubinetto in zona Mazzini: edilizia mista dopoguerra-moderna, impianti stratificati, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua mazzini bologna",
      "acqua rubinetto mazzini",
      "qualità acqua mazzini bologna",
      "analisi acqua mazzini",
    ],
    intro:
      "La zona Mazzini, lungo l'omonima via che porta verso sud-est, è una delle direttrici residenziali storiche fuori dalle mura. Il tessuto edilizio mescola palazzi pre-bellici e edilizia dopoguerra. La rete Hera è in buono stato; le criticità riguardano gli impianti interni datati.",
    buildingAge: "misto",
    typicalRisks: [
      "Tratti di impianto datati in palazzi anni '30-'50",
      "Acciaio zincato in tratti residui",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona Mazzini: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Il mix di edifici di epoche diverse fa sì che gli impianti interni siano molto eterogenei: ogni condominio fa storia a sé.",
        ],
      },
      {
        heading: "Rischi specifici della zona Mazzini",
        paragraphs: [
          "Possibili tracce di piombo nei tratti più datati, ferro e zinco nei tratti zincati, rame nei raccordi.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Mazzini",
        paragraphs: [
          "Analisi con metalli (piombo, ferro, zinco, rame, nichel), durezza, conducibilità e microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Mazzini",
        paragraphs: [
          "Al cambio casa, in presenza di neonati o gravidanza, o dopo una ristrutturazione parziale.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in via Mazzini è dura?",
        a: "Ha durezza media.",
      },
      {
        q: "Posso bere l'acqua del rubinetto?",
        a: "Sì, in condizioni ordinarie è potabile.",
      },
      {
        q: "Serve un'analisi?",
        a: "Solo in caso di edifici datati, neonati o variazioni percepite.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto in zona Mazzini (Bologna) con focus su metalli da impianti misti.",
    relatedNeighborhoods: ["bologna-savena", "bologna-santo-stefano", "bologna-massarenti"],
  },
  {
    slug: "bologna-corticella",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Corticella",
    district: "Quartiere Navile",
    shortTitle: "Acqua del rubinetto a Corticella (Bologna): qualità e nitrati",
    metaDescription:
      "Acqua del rubinetto a Corticella: zona periferica nord, vicinanza a falda agricola, possibili tracce nitrati, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua corticella bologna",
      "acqua rubinetto corticella",
      "nitrati acqua corticella",
      "qualità acqua corticella bologna",
      "analisi acqua corticella",
    ],
    intro:
      "Corticella è un quartiere periferico a nord di Bologna, in pianura, con un tessuto urbano misto fatto di edilizia popolare anni '60-'80 e nuclei storici di origine rurale. Si trova in un'area dove la falda padana è stata storicamente impattata dall'agricoltura intensiva, e questo rende il monitoraggio dei nitrati particolarmente rilevante.",
    buildingAge: "misto",
    typicalRisks: [
      "Possibili tracce di nitrati da contesto agricolo padano",
      "Tratti zincati in edifici dopoguerra",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Corticella: contesto urbano e ambientale",
        paragraphs: [
          HERA_PARAGRAPH,
          NITRATI_PARAGRAPH,
          "L'acqua distribuita resta entro i limiti, ma per chi vive in zone periferiche servite anche da pozzi privati il monitoraggio dei nitrati è un'attenzione opportuna.",
        ],
      },
      {
        heading: "Rischi specifici di Corticella",
        paragraphs: [
          "Per la rete pubblica i parametri sono conformi. Per chi utilizza pozzi privati o cisterne il quadro va verificato con analisi specifiche, includendo nitrati, nitriti e pesticidi.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa a Corticella",
        paragraphs: [
          "Un'analisi che includa nitrati, nitriti, durezza, conducibilità, metalli base e microbiologica è la scelta più informativa.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Corticella",
        paragraphs: [
          "Se si utilizza un pozzo privato, in presenza di neonati o gravidanza, o per un controllo periodico al rubinetto in famiglia.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ci sono problemi di nitrati a Corticella?",
        a: "La rete pubblica resta entro i limiti. ARPAE monitora le falde della zona, classificata vulnerabile da nitrati di origine agricola.",
      },
      {
        q: "Posso bere acqua di pozzo?",
        a: "Solo dopo un'analisi completa, ripetuta nel tempo.",
      },
      {
        q: "Quanto è dura l'acqua di rete?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i dati ufficiali?",
        a: "Sul portale Hera e sul sito di ARPAE Emilia-Romagna.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto a Corticella (Bologna) con focus su nitrati, metalli e microbiologica.",
    relatedNeighborhoods: ["bologna-bolognina", "bologna-arcoveggio", "bologna-borgo-panigale"],
  },
  {
    slug: "bologna-arcoveggio",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Arcoveggio",
    district: "Quartiere Navile",
    shortTitle: "Acqua del rubinetto all'Arcoveggio (Bologna): cosa controllare",
    metaDescription:
      "Acqua del rubinetto all'Arcoveggio: zona nord, edilizia anni '50-'70, contesto periurbano con attenzione ai nitrati e analisi consigliate.",
    searchKeywords: [
      "acqua arcoveggio bologna",
      "acqua rubinetto arcoveggio",
      "qualità acqua arcoveggio",
      "analisi acqua arcoveggio bologna",
    ],
    intro:
      "L'Arcoveggio è una zona a nord di Bologna sviluppatasi soprattutto tra anni '50 e anni '70, con tessuto residenziale e funzioni di transizione verso la periferia agricola. La rete Hera è in buono stato; il contesto periurbano giustifica un'attenzione specifica ai nitrati e ai parametri chimici.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Possibili tracce nitrati nel contesto periurbano",
      "Acciaio zincato in tratti residui",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua all'Arcoveggio: contesto urbano e ambientale",
        paragraphs: [
          HERA_PARAGRAPH,
          NITRATI_PARAGRAPH,
        ],
      },
      {
        heading: "Rischi specifici dell'Arcoveggio",
        paragraphs: [
          "Per la rete pubblica i valori restano nei limiti; resta utile, per chi vive in case con impianti datati, un controllo di metalli e durezza.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa all'Arcoveggio",
        paragraphs: [
          "Analisi base con nitrati, durezza, metalli (ferro, zinco, rame, nichel) e microbiologica.",
        ],
      },
      {
        heading: "Quando fare un'analisi all'Arcoveggio",
        paragraphs: [
          "Al cambio casa, in famiglie con neonati o per controlli periodici di routine.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua dell'Arcoveggio è di buona qualità?",
        a: "Sì, la rete Hera distribuisce acqua conforme.",
      },
      {
        q: "Ci sono problemi di nitrati?",
        a: "Nella rete pubblica no; ARPAE monitora costantemente le falde.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua di rubinetto all'Arcoveggio (Bologna) con focus su nitrati e metalli.",
    relatedNeighborhoods: ["bologna-bolognina", "bologna-corticella", "bologna-fiera"],
  },
  {
    slug: "bologna-borgo-panigale",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Borgo Panigale",
    district: "Quartiere Borgo Panigale-Reno",
    shortTitle: "Acqua del rubinetto a Borgo Panigale (Bologna): qualità",
    metaDescription:
      "Acqua del rubinetto a Borgo Panigale: zona ovest, contesto industriale e periurbano, attenzione a nitrati e metalli, quando fare un'analisi.",
    searchKeywords: [
      "acqua borgo panigale bologna",
      "acqua rubinetto borgo panigale",
      "qualità acqua borgo panigale",
      "analisi acqua borgo panigale",
    ],
    intro:
      "Borgo Panigale è un quartiere a ovest di Bologna, oltre il fiume Reno, con un tessuto urbano misto fatto di edilizia residenziale dopoguerra, nuclei storici e una storica vocazione industriale. La rete pubblica Hera è in buono stato; il contesto ambientale giustifica attenzione a nitrati e metalli.",
    buildingAge: "misto",
    typicalRisks: [
      "Possibili tracce nitrati nel contesto periurbano",
      "Metalli da impianti dopoguerra",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Borgo Panigale: contesto urbano e ambientale",
        paragraphs: [
          HERA_PARAGRAPH,
          NITRATI_PARAGRAPH,
        ],
      },
      {
        heading: "Rischi specifici di Borgo Panigale",
        paragraphs: [
          "La rete pubblica resta nei limiti. Per le case in edifici datati possono esserci tratti di impianto interno con materiali zincati o rame.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa a Borgo Panigale",
        paragraphs: [
          "Analisi con nitrati, metalli base, durezza, conducibilità e microbiologica.",
        ],
      },
      {
        heading: "Quando fare un'analisi a Borgo Panigale",
        paragraphs: [
          "Al cambio casa, in famiglie con neonati, o per un controllo periodico se si avvertono variazioni del sapore.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Borgo Panigale è potabile?",
        a: "Sì, la rete Hera è conforme.",
      },
      {
        q: "Ci sono problemi di nitrati?",
        a: "ARPAE monitora la zona; la rete pubblica resta nei limiti.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i dati?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto a Borgo Panigale (Bologna) con focus su nitrati, metalli e microbiologica.",
    relatedNeighborhoods: ["bologna-reno", "bologna-barca", "bologna-corticella"],
  },
  {
    slug: "bologna-reno",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Reno",
    district: "Quartiere Borgo Panigale-Reno",
    shortTitle: "Acqua del rubinetto in zona Reno (Bologna): cosa sapere",
    metaDescription:
      "Acqua del rubinetto in zona Reno: quartiere ovest, vicinanza al fiume da cui proviene parte dell'acqua potabile, qualità e parametri tipici.",
    searchKeywords: [
      "acqua reno bologna",
      "acqua rubinetto reno",
      "qualità acqua zona reno",
      "analisi acqua zona reno bologna",
    ],
    intro:
      "Il quartiere Reno copre l'area attorno al corso del fiume omonimo a ovest del Centro. È curioso ricordare che proprio dal fiume Reno (e dal torrente Setta) proviene una quota significativa dell'acqua potabile di Bologna, trattata nel potabilizzatore di Val di Setta. L'acqua di rete è gestita da Hera ed è di buona qualità.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Possibili tratti zincati in edifici anni '60-'70",
      "Durezza media",
      "Stagnazione in immobili a uso intermittente",
    ],
    sections: [
      {
        heading: "L'acqua in zona Reno: contesto urbano e ambientale",
        paragraphs: [
          HERA_PARAGRAPH,
          "Il fiume Reno e il Setta sono le principali fonti superficiali per l'acquedotto bolognese. Il trattamento di potabilizzazione assicura conformità ai limiti di legge.",
        ],
      },
      {
        heading: "Rischi specifici della zona Reno",
        paragraphs: [
          "Per la rete pubblica non emergono criticità. A livello di impianto interno possono esserci tratti zincati in edifici degli anni '60-'70.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Reno",
        paragraphs: [
          "Analisi base con metalli, durezza, conducibilità e microbiologica.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Reno",
        paragraphs: [
          "Al cambio casa, in famiglie con neonati o se si percepisce un cambiamento del sapore dell'acqua.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua viene dal fiume Reno?",
        a: "Una parte sì, dopo potabilizzazione nel sistema Setta-Reno.",
      },
      {
        q: "È sicura?",
        a: "Sì, Hera assicura conformità al D.Lgs. 18/2023.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i dati?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua di rubinetto in zona Reno (Bologna) con focus su metalli e microbiologica.",
    relatedNeighborhoods: ["bologna-borgo-panigale", "bologna-barca", "bologna-marconi"],
  },
  {
    slug: "bologna-saffi",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Saffi",
    district: "Quartiere Porto-Saragozza",
    shortTitle: "Acqua del rubinetto in zona Saffi (Bologna): qualità",
    metaDescription:
      "Acqua del rubinetto in zona Saffi: direttrice ovest, edilizia primo Novecento e dopoguerra, tubazioni interne stratificate, quando fare un'analisi.",
    searchKeywords: [
      "acqua saffi bologna",
      "acqua rubinetto saffi",
      "qualità acqua saffi bologna",
      "analisi acqua saffi",
    ],
    intro:
      "La zona Saffi si sviluppa lungo l'omonima via che porta verso ovest, con un tessuto edilizio misto di primo Novecento e dopoguerra. La rete pubblica Hera è in buono stato; le criticità tipiche riguardano gli impianti interni dei palazzi più datati.",
    buildingAge: "misto",
    typicalRisks: [
      "Tubazioni interne datate in palazzi pre-1960",
      "Acciaio zincato in tratti dopoguerra",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona Saffi: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Il mix di edifici di epoche diverse rende il quadro degli impianti interni eterogeneo.",
        ],
      },
      {
        heading: "Rischi specifici della zona Saffi",
        paragraphs: [
          "Possibili tracce di piombo in palazzi pre-1960, ferro e zinco in tratti zincati.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Saffi",
        paragraphs: [
          "Analisi con metalli (piombo, ferro, zinco, rame, nichel), durezza e microbiologica.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Saffi",
        paragraphs: [
          "Al cambio casa, in presenza di neonati o gravidanza, o dopo lavori parziali.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in via Saffi è di buona qualità?",
        a: "Sì, la rete Hera è conforme.",
      },
      {
        q: "Ci sono tubazioni in piombo?",
        a: "Solo possibili tratti residui negli impianti interni più datati.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto in zona Saffi (Bologna) con focus su metalli da impianti misti.",
    relatedNeighborhoods: ["bologna-pratello", "bologna-malpighi", "bologna-marconi"],
  },
  {
    slug: "bologna-malpighi",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Malpighi",
    district: "Quartiere Porto-Saragozza",
    shortTitle: "Acqua del rubinetto in zona Malpighi (Bologna): cosa sapere",
    metaDescription:
      "Acqua del rubinetto in zona Malpighi: edilizia signorile di fine Ottocento e primo Novecento, tubazioni stratificate, quando fare un'analisi.",
    searchKeywords: [
      "acqua malpighi bologna",
      "acqua rubinetto malpighi",
      "qualità acqua malpighi bologna",
      "analisi acqua malpighi",
    ],
    intro:
      "La zona Malpighi, ai margini del Centro storico verso ovest, è caratterizzata da palazzi signorili di fine Ottocento e primo Novecento. Gli impianti interni sono stati spesso rinnovati, ma in modo non integrale.",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Tubazioni interne datate in palazzi signorili",
      "Possibile piombo residuo",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona Malpighi: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Nei palazzi signorili di fine Ottocento sono frequenti impianti rifatti a tratti, con colonne montanti più recenti collegate a brevi tratti finali datati.",
        ],
      },
      {
        heading: "Rischi specifici della zona Malpighi",
        paragraphs: [
          "Possibili tracce di piombo nei tratti più datati e rame nei raccordi.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Malpighi",
        paragraphs: [
          "Analisi con metalli (piombo, rame, nichel), durezza e microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Malpighi",
        paragraphs: [
          "Al cambio casa, in presenza di neonati o gravidanza, o all'ingresso in un palazzo signorile non ristrutturato di recente.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ci sono tubazioni in piombo a Malpighi?",
        a: "Non nella rete pubblica. Negli impianti interni di palazzi pre-1960 possono esserci tratti residui.",
      },
      {
        q: "L'acqua è dura?",
        a: "Durezza media.",
      },
      {
        q: "Posso bere senza preoccupazioni?",
        a: "Sì, in condizioni ordinarie è potabile.",
      },
      {
        q: "Dove trovo i dati?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto in zona Malpighi (Bologna) con focus su piombo e metalli.",
    relatedNeighborhoods: ["bologna-pratello", "bologna-saffi", "bologna-centro"],
  },
  {
    slug: "bologna-marconi",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Marconi",
    district: "Quartiere Porto-Saragozza",
    shortTitle: "Acqua del rubinetto in via Marconi (Bologna): qualità",
    metaDescription:
      "Acqua del rubinetto in via Marconi: edilizia novecentesca ricostruita nel dopoguerra, impianti misti, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua marconi bologna",
      "acqua rubinetto via marconi",
      "qualità acqua marconi bologna",
      "analisi acqua marconi",
    ],
    intro:
      "Via Marconi è un asse urbano ricostruito nel dopoguerra, con edifici degli anni '50-'60 ai lati. La rete Hera è in buono stato; gli impianti interni riflettono l'epoca di ricostruzione.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Acciaio zincato in impianti dopoguerra",
      "Rame nei raccordi",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in via Marconi: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Negli edifici anni '50-'60 di via Marconi sono frequenti impianti zincati, con colonne rifatte in epoche successive.",
        ],
      },
      {
        heading: "Rischi specifici di via Marconi",
        paragraphs: [
          "Possibili tracce di ferro e zinco da tratti zincati, rame nei raccordi.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in via Marconi",
        paragraphs: [
          "Analisi base con metalli (ferro, zinco, rame, nichel), durezza e microbiologica.",
        ],
      },
      {
        heading: "Quando fare un'analisi in via Marconi",
        paragraphs: [
          "Al cambio casa, in famiglie con bambini piccoli o se l'acqua presenta colore atipico al primo flusso.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in via Marconi è potabile?",
        a: "Sì, la rete Hera è conforme.",
      },
      {
        q: "Perché a volte ha sapore metallico?",
        a: "Può dipendere da vecchie tubazioni zincate interne.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua di rubinetto in via Marconi (Bologna) con focus su metalli da impianti dopoguerra.",
    relatedNeighborhoods: ["bologna-saffi", "bologna-galvani", "bologna-reno"],
  },
  {
    slug: "bologna-galvani",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Galvani",
    district: "Quartiere Santo Stefano",
    shortTitle: "Acqua del rubinetto in zona Galvani (Bologna): cosa controllare",
    metaDescription:
      "Acqua del rubinetto in zona Galvani: pieno Centro storico, palazzi medievali e signorili, tubazioni interne stratificate, quando fare un'analisi.",
    searchKeywords: [
      "acqua galvani bologna",
      "acqua rubinetto piazza galvani",
      "qualità acqua galvani bologna",
      "analisi acqua galvani",
    ],
    intro:
      "La zona Galvani è nel cuore del Centro storico di Bologna, attorno alla piazza omonima alle spalle di San Petronio. Gli edifici sono in larga parte pre-novecenteschi, con impianti interni stratificati nei secoli.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da impianti interni pre-1960",
      "Stagnazione in uffici e appartamenti turistici",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona Galvani: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Nei palazzi del cuore storico la stratificazione degli impianti interni è massima: ogni edificio fa storia a sé.",
        ],
      },
      {
        heading: "Rischi specifici della zona Galvani",
        paragraphs: [
          "Possibili tracce di piombo nei tratti più datati e stagnazione negli immobili a uso parziale.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Galvani",
        paragraphs: [
          "Analisi con metalli (piombo, rame, nichel) e microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Galvani",
        paragraphs: [
          "Al cambio casa, in presenza di neonati o gravidanza, alla riapertura di un immobile dopo settimane di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in piazza Galvani è dura?",
        a: "Durezza media.",
      },
      {
        q: "Ci sono tubazioni in piombo?",
        a: "Possibili tratti residui negli impianti interni di palazzi pre-1960.",
      },
      {
        q: "Devo bollire l'acqua?",
        a: "No, in condizioni ordinarie è potabile.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto in zona Galvani (Bologna) con focus su piombo e metalli.",
    relatedNeighborhoods: ["bologna-centro", "bologna-santo-stefano", "bologna-malpighi"],
  },
  {
    slug: "bologna-santo-stefano",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Santo Stefano",
    district: "Quartiere Santo Stefano",
    shortTitle: "Acqua del rubinetto in zona Santo Stefano (Bologna): qualità",
    metaDescription:
      "Acqua del rubinetto in zona Santo Stefano: pieno Centro storico, palazzi signorili e edifici medievali, tubazioni interne datate, quando fare un'analisi.",
    searchKeywords: [
      "acqua santo stefano bologna",
      "acqua rubinetto santo stefano",
      "qualità acqua santo stefano bologna",
      "analisi acqua santo stefano",
    ],
    intro:
      "La zona Santo Stefano comprende la celebre piazza con il complesso delle Sette Chiese e i palazzi signorili adiacenti. È una delle aree più antiche del Centro storico bolognese, con impianti idrici interni stratificati.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da impianti interni pre-1960",
      "Stagnazione in immobili signorili a uso parziale",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona Santo Stefano: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Gli edifici di Santo Stefano sono in larga parte pre-novecenteschi, con impianti interni rifatti a fasi.",
        ],
      },
      {
        heading: "Rischi specifici della zona Santo Stefano",
        paragraphs: [
          "Possibili tracce di piombo nei tratti più datati e stagnazione negli immobili a uso saltuario.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Santo Stefano",
        paragraphs: [
          "Analisi con metalli (piombo, rame, nichel) e microbiologica di base.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Santo Stefano",
        paragraphs: [
          "Al cambio casa, in presenza di neonati o gravidanza, alla riapertura di un appartamento storico.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in Santo Stefano è di buona qualità?",
        a: "Sì, la rete Hera è conforme; le criticità tipiche riguardano gli impianti interni.",
      },
      {
        q: "Ci sono tubazioni in piombo?",
        a: "Solo possibili tratti residui negli impianti interni più datati.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto in zona Santo Stefano (Bologna) con focus su piombo e metalli.",
    relatedNeighborhoods: ["bologna-centro", "bologna-galvani", "bologna-mazzini"],
  },
  {
    slug: "bologna-cesena",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Via Cesena",
    district: "Quartiere Savena",
    shortTitle: "Acqua del rubinetto in zona via Cesena (Bologna): cosa sapere",
    metaDescription:
      "Acqua del rubinetto in zona via Cesena (San Ruffillo, Savena): edilizia dopoguerra e moderna, parametri tipici e quando fare un'analisi.",
    searchKeywords: [
      "acqua via cesena bologna",
      "acqua rubinetto san ruffillo",
      "qualità acqua via cesena",
      "analisi acqua via cesena bologna",
    ],
    intro:
      "La zona di via Cesena (San Ruffillo, Savena) è un'area residenziale a sud di Bologna sviluppatasi nel dopoguerra. La rete Hera è in buono stato; le criticità tipiche riguardano gli impianti interni di tipo zincato.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Acciaio zincato in tratti residui",
      "Rame nei raccordi",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona via Cesena: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Gli edifici della zona sono prevalentemente del secondo Novecento, con impianti rifatti a fasi.",
        ],
      },
      {
        heading: "Rischi specifici della zona via Cesena",
        paragraphs: [
          "Possibili tracce di ferro e zinco da tratti zincati, rame nei raccordi.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa in zona via Cesena",
        paragraphs: [
          "Analisi base con metalli (ferro, zinco, rame, nichel), durezza e microbiologica.",
        ],
      },
      {
        heading: "Quando fare un'analisi in zona via Cesena",
        paragraphs: [
          "Al cambio casa, in famiglie con bambini piccoli o in caso di variazioni percepite.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in via Cesena è di buona qualità?",
        a: "Sì, la rete Hera è conforme.",
      },
      {
        q: "Ci sono problemi specifici?",
        a: "Solo legati a impianti interni datati.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua di rubinetto in zona via Cesena (Bologna, San Ruffillo) con focus su metalli.",
    relatedNeighborhoods: ["bologna-savena", "bologna-mazzini", "bologna-massarenti"],
  },
  {
    slug: "bologna-barca",
    citySlug: "bologna",
    cityName: "Bologna",
    neighborhoodName: "Barca",
    district: "Quartiere Borgo Panigale-Reno",
    shortTitle: "Acqua del rubinetto al Barca (Bologna): qualità e analisi",
    metaDescription:
      "Acqua del rubinetto al Barca: quartiere ovest oltre il Reno, edilizia popolare anni '60-'70, parametri tipici e quando fare un'analisi.",
    searchKeywords: [
      "acqua barca bologna",
      "acqua rubinetto barca",
      "qualità acqua barca bologna",
      "analisi acqua barca",
    ],
    intro:
      "Il Barca è un quartiere a ovest di Bologna, oltre il fiume Reno, sviluppatosi soprattutto negli anni '60 e '70 con interventi di edilizia popolare. La rete Hera è in buono stato; gli impianti interni dei palazzi possono presentare tratti zincati.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Acciaio zincato in impianti anni '60-'70",
      "Rame nei raccordi",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua al Barca: contesto urbano e tubazioni",
        paragraphs: [
          HERA_PARAGRAPH,
          "Gli edifici del Barca sono in larga parte di edilizia popolare anni '60-'70, con impianti idrici di concezione dell'epoca.",
        ],
      },
      {
        heading: "Rischi specifici del Barca",
        paragraphs: [
          "Possibili tracce di ferro e zinco da tubazioni zincate, rame nei raccordi.",
          CONTROLS_PARAGRAPH,
          NITRATI_PARAGRAPH,
        ],
      },
      {
        heading: "Cosa controllare a casa al Barca",
        paragraphs: [
          "Analisi base con metalli (ferro, zinco, rame, nichel), nitrati, durezza e microbiologica.",
        ],
      },
      {
        heading: "Quando fare un'analisi al Barca",
        paragraphs: [
          "Al cambio casa, in famiglie con bambini piccoli o in caso di variazioni percepite di sapore e colore.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del Barca è potabile?",
        a: "Sì, la rete Hera è conforme.",
      },
      {
        q: "Ci sono problemi di nitrati?",
        a: "ARPAE monitora la zona; la rete pubblica resta nei limiti.",
      },
      {
        q: "Quanto è dura?",
        a: "Durezza media.",
      },
      {
        q: "Dove trovo i referti?",
        a: "Sul portale Hera.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Analisi acqua di rubinetto al Barca (Bologna) con focus su metalli, nitrati e microbiologica.",
    relatedNeighborhoods: ["bologna-reno", "bologna-borgo-panigale", "bologna-marconi"],
  },
];
