import type { NeighborhoodGuide } from "./neighborhood-guides";

const PUBLIACQUA_PARAGRAPH =
  "Il gestore del servizio idrico integrato per Firenze è Publiacqua S.p.A., che cura captazione, potabilizzazione, adduzione e distribuzione. La rete fiorentina è alimentata da un mix di fonti: derivazioni dal sistema Mugello (invasi di Bilancino), acque dell'Arno potabilizzate negli impianti dell'Anconella e del Mantignano, e contributi da pozzi di falda nella pianura. Questa origine spiega una durezza media e un profilo minerale tipico delle acque di pianura toscane.";

const CONTROLS_PARAGRAPH =
  "I controlli sull'acqua distribuita seguono il D.Lgs. 18/2023, che recepisce la Direttiva UE 2020/2184: gli autocontrolli di Publiacqua lungo la filiera si affiancano ai controlli ufficiali dell'Azienda USL Toscana Centro e al monitoraggio ambientale di ARPA Toscana. I referti per zona sono pubblicati sul portale del gestore.";

export const NEIGHBORHOODS_FIRENZE: NeighborhoodGuide[] = [
  {
    slug: "firenze-centro-storico",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Centro storico",
    district: "Quartiere 1",
    shortTitle:
      "Acqua del rubinetto nel Centro storico di Firenze: cosa controllare",
    metaDescription:
      "Acqua del rubinetto nel Centro storico di Firenze: tubazioni in palazzi pre-1900, piombo, stagnazione, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua centro storico firenze",
      "acqua rubinetto centro storico firenze",
      "tubazioni piombo centro firenze",
      "qualità acqua firenze centro",
      "analisi acqua firenze centro",
      "acqua publiacqua centro firenze",
    ],
    intro:
      "Il Centro storico di Firenze, racchiuso entro la cerchia dei viali ottocenteschi, è dominato da palazzi rinascimentali e medievali in cui gli impianti idrici sono stati stratificati nei secoli. La rete pubblica Publiacqua arriva ovunque con acqua di buona qualità, ma il punto più delicato è l'ultimo tratto interno ai palazzi: colonne montanti e raccordi possono risalire a epoche in cui il piombo era ammesso.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da tubazioni interne pre-1960",
      "Stagnazione in palazzi a uso turistico o saltuario",
      "Durezza media tipica di Firenze",
      "Cloro residuo variabile nei punti distali",
    ],
    sections: [
      {
        heading:
          "L'acqua nel Centro storico di Firenze: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Nel Centro storico la rete pubblica si innesta su edifici di impianto medievale o rinascimentale, con impianti idrici rifatti in fasi successive. Anche dove la rete condominiale è stata rinnovata, possono permanere tratti intermedi (colonne, raccordi, ultimi metri ai contatori) realizzati prima del divieto di utilizzo del piombo nelle reti idropotabili.",
        ],
        bullets: [
          "Edifici prevalentemente pre-1900, impianti stratificati",
          "Tubazioni di adduzione pubblica generalmente moderne",
          "Possibili tratti residui in piombo nei circuiti privati",
        ],
      },
      {
        heading: "Rischi specifici del Centro storico",
        paragraphs: [
          "La priorità in quest'area è il piombo. Non è un problema della rete Publiacqua, ma di alcune tubazioni interne ai palazzi: nei tratti più datati il metallo può cedere lentamente all'acqua, soprattutto in caso di stagnazione notturna o prolungata.",
          "A questo si aggiunge il fenomeno della stagnazione: appartamenti utilizzati come case vacanza, B&B o uffici chiusi nei fine settimana lasciano l'acqua ferma a lungo, aumentando il contatto con eventuali materiali rilascianti.",
        ],
        bullets: [
          "Piombo a rubinetto in palazzi pre-1960",
          "Stagnazione in immobili a uso discontinuo",
          "Possibili biofilm in tratti poco utilizzati",
        ],
      },
      {
        heading: "Cosa controllare a casa nel Centro storico",
        paragraphs: [
          "Per chi vive in un palazzo storico fiorentino, l'analisi più informativa combina metalli (in particolare piombo, rame, nichel) con un set microbiologico di base. Vale la pena valutare anche durezza, conducibilità e cloro residuo.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Piombo (priorità alta nei palazzi pre-1960)",
          "Rame e nichel da raccordi e rubinetterie",
          "Microbiologica di base (carica batterica, coliformi)",
          "Durezza, cloro residuo, pH",
        ],
      },
      {
        heading: "Quando fare un'analisi nel Centro storico",
        paragraphs: [
          "Un'analisi è particolarmente utile in presenza di neonati o gravidanza, dopo l'acquisto di un appartamento storico, in seguito a ristrutturazioni parziali dell'impianto, o quando si riapre una casa vacanza dopo settimane di chiusura. Anche un cambiamento del sapore o del colore dell'acqua al risveglio è un buon motivo per verificare.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti nel Centro storico di Firenze?",
        a: "Nella rete pubblica Publiacqua il piombo è stato sostituito da tempo. Negli impianti interni dei palazzi storici, invece, possono permanere tratti realizzati prima delle normative restrittive: solo un'analisi al rubinetto può confermarne l'assenza.",
      },
      {
        q: "L'acqua del Centro di Firenze è dura?",
        a: "Ha una durezza media, in linea con il resto della città. Non è un problema sanitario, ma può causare incrostazioni su elettrodomestici e rubinetterie.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto nel Centro?",
        a: "In condizioni ordinarie non è necessario, perché l'acqua distribuita è potabile. Far scorrere l'acqua qualche secondo al mattino è una buona pratica negli impianti antichi.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "Publiacqua pubblica i referti per zona sul proprio sito istituzionale, con il dettaglio dei principali parametri misurati nei punti di prelievo.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto nel Centro storico di Firenze con focus su piombo e metalli da tubazioni interne dei palazzi antichi.",
    relatedNeighborhoods: [
      "firenze-santa-croce",
      "firenze-san-frediano",
      "firenze-oltrarno",
    ],
  },
  {
    slug: "firenze-santa-croce",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Santa Croce",
    district: "Quartiere 1",
    shortTitle: "Acqua del rubinetto a Santa Croce (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto nel rione Santa Croce a Firenze: palazzi antichi, possibili tubazioni in piombo, stagnazione e quando fare un'analisi.",
    searchKeywords: [
      "acqua santa croce firenze",
      "acqua rubinetto santa croce",
      "tubazioni piombo santa croce firenze",
      "analisi acqua santa croce",
      "acqua publiacqua santa croce",
    ],
    intro:
      "Santa Croce è uno dei rioni più antichi di Firenze, con un tessuto edilizio fatto di palazzi medievali, case-torri rimaneggiate e palazzine otto-novecentesche. Gran parte degli immobili è anteriore al 1900: la rete pubblica Publiacqua è moderna, ma i circuiti interni dei palazzi possono ancora contenere materiali datati.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da impianti interni pre-1960",
      "Stagnazione in case vacanza e B&B",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Santa Croce: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Santa Croce conserva un patrimonio edilizio prevalentemente medievale e rinascimentale. Anche dove le facciate sono state mantenute, gli impianti idrici interni sono stati rifatti in più riprese, non sempre integralmente: capita di trovare colonne montanti più recenti collegate a tratti finali datati.",
        ],
      },
      {
        heading: "Rischi specifici di Santa Croce",
        paragraphs: [
          "Come nel resto del Centro storico, il rischio principale è il piombo nelle tubazioni interne. A questo si aggiunge una densità elevata di affitti brevi: in molti appartamenti l'acqua resta ferma per giorni tra un soggiorno e l'altro, condizione che favorisce la cessione di metalli e l'accumulo di biofilm.",
        ],
        bullets: [
          "Piombo in tratti residui di impianti pre-1960",
          "Stagnazione in case vacanza, B&B, seconde case",
          "Cloro residuo variabile nei tratti distali",
        ],
      },
      {
        heading: "Cosa controllare a casa a Santa Croce",
        paragraphs: [
          "Per gli appartamenti del rione conviene un'analisi che verifichi i metalli (piombo, rame, nichel) e un set microbiologico di base. Durezza e cloro residuo aiutano a inquadrare la qualità organolettica.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Piombo (priorità in palazzi pre-1960)",
          "Carica microbiologica di base",
          "Durezza, conducibilità, pH",
        ],
      },
      {
        heading: "Quando fare un'analisi a Santa Croce",
        paragraphs: [
          "L'analisi è opportuna prima di trasferirsi in un appartamento storico, dopo una ristrutturazione parziale, in presenza di neonati o gravidanza, oppure quando si riapre una casa vacanza dopo settimane di inutilizzo.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le tubazioni in piombo sono ancora presenti a Santa Croce?",
        a: "La rete pubblica non usa più piombo, ma negli impianti interni di palazzi pre-1960 possono esserci tratti residui. Solo un'analisi al rubinetto può confermarlo.",
      },
      {
        q: "L'acqua di Santa Croce è dura?",
        a: "Ha durezza media, in linea con il resto della città.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto a Santa Croce?",
        a: "No, in condizioni ordinarie è potabile. In appartamenti a uso saltuario è consigliabile far scorrere l'acqua qualche secondo prima del primo utilizzo.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua a Santa Croce, Firenze: focus su piombo e microbiologica per palazzi storici e immobili a uso turistico.",
    relatedNeighborhoods: [
      "firenze-centro-storico",
      "firenze-san-niccolo",
      "firenze-oltrarno",
    ],
  },
  {
    slug: "firenze-san-frediano",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "San Frediano",
    district: "Quartiere 1",
    shortTitle: "Acqua del rubinetto a San Frediano (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a San Frediano (Oltrarno, Firenze): palazzi antichi, piombo nelle tubazioni interne, durezza e quando fare un'analisi.",
    searchKeywords: [
      "acqua san frediano firenze",
      "acqua rubinetto oltrarno san frediano",
      "tubazioni piombo san frediano",
      "analisi acqua san frediano firenze",
    ],
    intro:
      "San Frediano è uno dei rioni più caratteristici dell'Oltrarno fiorentino, con palazzine basse, edifici medievali e botteghe artigiane. La gran parte degli immobili è pre-otto-novecentesca e ha conosciuto stratificazioni di impianti. La rete pubblica Publiacqua è moderna, ma negli appartamenti più antichi i tratti interni possono ancora contenere materiali datati.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da impianti interni pre-1960",
      "Stagnazione in case a uso turistico",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a San Frediano: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "San Frediano ha un tessuto edilizio con forte presenza di edifici pre-1900: gli impianti idrici interni sono stati sostituiti in più riprese, ma non sempre in modo integrale.",
        ],
      },
      {
        heading: "Rischi specifici di San Frediano",
        paragraphs: [
          "Il rischio principale è il piombo nelle tubazioni interne pre-1960. La crescente densità di affitti brevi e attività turistiche accentua il tema della stagnazione, soprattutto in immobili utilizzati in modo discontinuo.",
        ],
        bullets: [
          "Piombo nei tratti residui interni",
          "Stagnazione in B&B e case vacanza",
          "Possibili biofilm in linee poco usate",
        ],
      },
      {
        heading: "Cosa controllare a casa a San Frediano",
        paragraphs: [
          "Un'analisi mirata a piombo, rame, nichel e parametri microbiologici di base è la scelta più utile. Durezza e cloro residuo completano il quadro organolettico.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Piombo (palazzi pre-1960)",
          "Microbiologica di base",
          "Durezza, conducibilità, pH",
        ],
      },
      {
        heading: "Quando fare un'analisi a San Frediano",
        paragraphs: [
          "Prima di trasferirsi in un appartamento storico, dopo ristrutturazioni parziali, in presenza di neonati o gravidanza, oppure alla riapertura di una casa vacanza dopo periodi di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ci sono ancora tubazioni in piombo a San Frediano?",
        a: "La rete pubblica non ne utilizza più, ma negli impianti interni di palazzi pre-1960 possono esserci tratti residui. Solo l'analisi al rubinetto può confermarlo.",
      },
      {
        q: "L'acqua di San Frediano è dura?",
        a: "Ha durezza media, come il resto di Firenze.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a San Frediano?",
        a: "Sì, è potabile. In palazzi storici è prudente far scorrere l'acqua qualche secondo al mattino.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua a San Frediano, Oltrarno di Firenze: focus su piombo e metalli da impianti interni di palazzi storici.",
    relatedNeighborhoods: [
      "firenze-oltrarno",
      "firenze-san-niccolo",
      "firenze-centro-storico",
    ],
  },
  {
    slug: "firenze-oltrarno",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Oltrarno",
    district: "Quartiere 1",
    shortTitle: "Acqua del rubinetto in Oltrarno (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto in Oltrarno a Firenze: palazzi storici, piombo nelle tubazioni interne, stagnazione e quando fare un'analisi.",
    searchKeywords: [
      "acqua oltrarno firenze",
      "acqua rubinetto oltrarno",
      "tubazioni piombo oltrarno firenze",
      "analisi acqua oltrarno",
    ],
    intro:
      "L'Oltrarno è la riva sinistra del fiume nel cuore di Firenze: comprende rioni come Santo Spirito e Pitti, oltre alle aree più collinari verso San Niccolò. Il patrimonio edilizio è in gran parte pre-1900. La rete pubblica Publiacqua è moderna, ma negli appartamenti antichi gli ultimi metri interni possono ancora contenere materiali datati.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da impianti interni pre-1960",
      "Stagnazione in case a uso turistico",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in Oltrarno: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "L'Oltrarno conserva palazzi nobiliari, palazzine artigiane e edifici medievali. Gli impianti idrici sono stati rifatti in più epoche, con risultati disomogenei nei singoli condomini.",
        ],
      },
      {
        heading: "Rischi specifici dell'Oltrarno",
        paragraphs: [
          "Il rischio dominante è il piombo nelle tubazioni interne pre-1960. La presenza di numerosi affitti brevi accentua il tema della stagnazione, soprattutto nei mesi di minore presenza turistica.",
        ],
        bullets: [
          "Piombo nei tratti residui interni",
          "Stagnazione in case vacanza",
          "Cloro residuo variabile",
        ],
      },
      {
        heading: "Cosa controllare a casa in Oltrarno",
        paragraphs: [
          "Un'analisi mirata su piombo, rame, nichel e parametri microbiologici di base è la scelta più utile. Durezza e cloro residuo completano il quadro.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Piombo (palazzi pre-1960)",
          "Rame, nichel da rubinetterie",
          "Microbiologica di base",
          "Durezza, pH, conducibilità",
        ],
      },
      {
        heading: "Quando fare un'analisi in Oltrarno",
        paragraphs: [
          "Prima di trasferirsi, dopo ristrutturazioni parziali, in presenza di neonati o gravidanza, alla riapertura di una casa vacanza, o se si percepiscono cambiamenti di sapore o colore al risveglio.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua dell'Oltrarno è potabile?",
        a: "Sì, l'acqua distribuita da Publiacqua è potabile. Le criticità riguardano eventualmente le tubazioni interne dei palazzi più antichi.",
      },
      {
        q: "L'acqua dell'Oltrarno è dura?",
        a: "Ha durezza media, come il resto della città.",
      },
      {
        q: "Le tubazioni in piombo sono ancora un problema?",
        a: "Nella rete pubblica no. Nei palazzi storici possono permanere tratti interni datati: l'unica verifica certa è l'analisi al rubinetto.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua di rubinetto in Oltrarno (Firenze) con focus su piombo e metalli da impianti interni storici.",
    relatedNeighborhoods: [
      "firenze-san-frediano",
      "firenze-san-niccolo",
      "firenze-centro-storico",
    ],
  },
  {
    slug: "firenze-san-niccolo",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "San Niccolò",
    district: "Quartiere 1",
    shortTitle: "Acqua del rubinetto a San Niccolò (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a San Niccolò (Firenze): palazzi storici lungo l'Arno, piombo nelle tubazioni interne, durezza e quando fare un'analisi.",
    searchKeywords: [
      "acqua san niccolò firenze",
      "acqua rubinetto san niccolò",
      "tubazioni piombo san niccolò",
      "analisi acqua san niccolò firenze",
    ],
    intro:
      "San Niccolò si estende lungo la riva sinistra dell'Arno, ai piedi della collina di Belvedere. È un rione di palazzine basse, edifici medievali e ville sette-ottocentesche. La rete pubblica Publiacqua è moderna, ma negli edifici più antichi i circuiti interni meritano attenzione.",
    buildingAge: "storico-pre1900",
    typicalRisks: [
      "Piombo da impianti interni pre-1960",
      "Stagnazione in seconde case",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a San Niccolò: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "San Niccolò ha un patrimonio edilizio in gran parte pre-1900 e una buona quota di seconde case collegate alle pendici di Belvedere e Costa San Giorgio.",
        ],
      },
      {
        heading: "Rischi specifici di San Niccolò",
        paragraphs: [
          "Il rischio principale è il piombo nelle tubazioni interne pre-1960. Si aggiunge la stagnazione in immobili a uso saltuario, frequenti nella zona.",
        ],
        bullets: [
          "Piombo in tratti residui interni",
          "Stagnazione in seconde case",
          "Cloro residuo variabile",
        ],
      },
      {
        heading: "Cosa controllare a casa a San Niccolò",
        paragraphs: [
          "Analisi mirata su metalli (piombo, rame, nichel) e microbiologica di base. Durezza e cloro residuo aiutano a inquadrare la qualità.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Piombo (palazzi pre-1960)",
          "Microbiologica di base",
          "Durezza, conducibilità, pH",
        ],
      },
      {
        heading: "Quando fare un'analisi a San Niccolò",
        paragraphs: [
          "Prima di trasferirsi in un appartamento storico, dopo ristrutturazioni parziali, in presenza di neonati o gravidanza, alla riapertura di una seconda casa dopo periodi di chiusura.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di San Niccolò è potabile?",
        a: "Sì, è distribuita da Publiacqua e potabile. Le criticità possono interessare i circuiti interni dei palazzi più antichi.",
      },
      {
        q: "L'acqua di San Niccolò è dura?",
        a: "Ha durezza media, come il resto di Firenze.",
      },
      {
        q: "C'è ancora piombo nelle tubazioni?",
        a: "Non nella rete pubblica. Nei tratti interni di palazzi pre-1960 può esserci, ma solo l'analisi al rubinetto può confermarlo.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua a San Niccolò (Firenze) per palazzi storici lungo l'Arno: focus piombo e metalli interni.",
    relatedNeighborhoods: [
      "firenze-oltrarno",
      "firenze-santa-croce",
      "firenze-centro-storico",
    ],
  },
  {
    slug: "firenze-campo-di-marte",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Campo di Marte",
    district: "Quartiere 2",
    shortTitle:
      "Acqua del rubinetto a Campo di Marte (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Campo di Marte (Firenze): palazzine anni 50-70, durezza media, rame e nichel da impianti misti. Quando fare un'analisi.",
    searchKeywords: [
      "acqua campo di marte firenze",
      "acqua rubinetto campo di marte",
      "qualità acqua campo di marte",
      "analisi acqua campo di marte firenze",
    ],
    intro:
      "Campo di Marte è un quartiere residenziale nato attorno allo stadio e all'omonimo polo sportivo. Il tessuto edilizio è dominato da palazzine degli anni 1950-1980, con presenza di interventi più recenti. La rete pubblica Publiacqua è moderna; le criticità principali sono legate a impianti condominiali di età intermedia.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Durezza media",
      "Cloro residuo variabile",
    ],
    sections: [
      {
        heading: "L'acqua a Campo di Marte: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Le palazzine di Campo di Marte hanno impianti idrici tipicamente dell'epoca di costruzione: zincati, ferro/rame o materiali misti aggiornati nelle ristrutturazioni. Il piombo è meno frequente che nei palazzi storici, ma non assente in alcuni interventi più datati.",
        ],
      },
      {
        heading: "Rischi specifici di Campo di Marte",
        paragraphs: [
          "I rischi prevalenti sono legati al rilascio di rame e nichel da raccordi e rubinetterie, oltre a fenomeni di corrosione in impianti zincati datati.",
        ],
        bullets: [
          "Rame, nichel da rubinetterie",
          "Ferro/manganese da impianti zincati datati",
          "Cloro residuo variabile",
        ],
      },
      {
        heading: "Cosa controllare a casa a Campo di Marte",
        paragraphs: [
          "Un'analisi che includa metalli (rame, nichel, ferro), parametri organolettici (durezza, conducibilità, pH) e microbiologica di base è la scelta più utile.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Rame, nichel, ferro",
          "Microbiologica di base",
          "Durezza, conducibilità, pH",
        ],
      },
      {
        heading: "Quando fare un'analisi a Campo di Marte",
        paragraphs: [
          "Dopo l'acquisto di un appartamento in palazzine d'epoca, dopo ristrutturazioni parziali dell'impianto, in presenza di neonati, o se si percepiscono variazioni di sapore o colore.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Campo di Marte è dura?",
        a: "Ha durezza media, in linea con il resto di Firenze.",
      },
      {
        q: "Ci sono problemi di piombo a Campo di Marte?",
        a: "Il piombo è meno frequente che nei palazzi del Centro, ma non si può escludere a priori. L'unica verifica certa è un'analisi al rubinetto.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a Campo di Marte?",
        a: "Sì, l'acqua distribuita è potabile.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Campo di Marte (Firenze) per palazzine dopoguerra: rame, nichel e microbiologica di base.",
    relatedNeighborhoods: [
      "firenze-coverciano",
      "firenze-cure",
      "firenze-bellariva",
    ],
  },
  {
    slug: "firenze-bellariva",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Bellariva",
    district: "Quartiere 2",
    shortTitle: "Acqua del rubinetto a Bellariva (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Bellariva (Firenze): zona residenziale lungo l'Arno, palazzine dopoguerra, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua bellariva firenze",
      "acqua rubinetto bellariva",
      "qualità acqua bellariva",
      "analisi acqua bellariva firenze",
    ],
    intro:
      "Bellariva è una zona residenziale lungo l'Arno, tra Campo di Marte e Varlungo. Le palazzine sono prevalentemente del dopoguerra e degli anni 1960-1980. La rete pubblica Publiacqua è moderna; l'attenzione si concentra sugli impianti condominiali di età intermedia.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Durezza media",
      "Ferro/manganese in impianti zincati datati",
    ],
    sections: [
      {
        heading: "L'acqua a Bellariva: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Le palazzine di Bellariva hanno impianti idrici dell'epoca di costruzione, con stratificazioni di interventi più recenti.",
        ],
      },
      {
        heading: "Rischi specifici di Bellariva",
        paragraphs: [
          "I rischi prevalenti sono rame e nichel da raccordi e rubinetterie, oltre a possibili tracce di ferro o manganese da impianti zincati datati.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Bellariva",
        paragraphs: [
          "Un'analisi che includa metalli (rame, nichel, ferro), parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
        bullets: [
          "Rame, nichel, ferro",
          "Microbiologica di base",
          "Durezza, conducibilità, pH",
        ],
      },
      {
        heading: "Quando fare un'analisi a Bellariva",
        paragraphs: [
          "Dopo l'acquisto di un appartamento, dopo ristrutturazioni parziali, in presenza di neonati o se si percepiscono variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Bellariva è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "Ci sono problemi di piombo?",
        a: "Sono meno frequenti rispetto al Centro storico. Un'analisi al rubinetto può confermarne l'assenza.",
      },
      {
        q: "L'acqua di Bellariva è dura?",
        a: "Ha durezza media, come il resto della città.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Bellariva (Firenze) per palazzine dopoguerra lungo l'Arno: rame, nichel, microbiologica.",
    relatedNeighborhoods: [
      "firenze-campo-di-marte",
      "firenze-coverciano",
      "firenze-gavinana",
    ],
  },
  {
    slug: "firenze-coverciano",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Coverciano",
    district: "Quartiere 2",
    shortTitle: "Acqua del rubinetto a Coverciano (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Coverciano (Firenze): zona residenziale collinare, palazzine dopoguerra, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua coverciano firenze",
      "acqua rubinetto coverciano",
      "qualità acqua coverciano",
      "analisi acqua coverciano firenze",
    ],
    intro:
      "Coverciano è una zona residenziale a est di Firenze, nota per il centro tecnico federale di calcio. Il tessuto edilizio è prevalentemente del dopoguerra, con palazzine e villette degli anni 1950-1980. La rete pubblica Publiacqua è moderna; l'attenzione si concentra sugli impianti condominiali.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Durezza media",
      "Cloro residuo variabile in zona collinare",
    ],
    sections: [
      {
        heading: "L'acqua a Coverciano: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Le palazzine di Coverciano hanno impianti dell'epoca di costruzione, talvolta integrati da interventi recenti.",
        ],
      },
      {
        heading: "Rischi specifici di Coverciano",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie sono i parametri più rilevanti. Nei tratti collinari più periferici il cloro residuo può risultare leggermente variabile.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Coverciano",
        paragraphs: [
          "Un'analisi che includa metalli (rame, nichel, ferro), parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi a Coverciano",
        paragraphs: [
          "Dopo l'acquisto di un appartamento, dopo ristrutturazioni parziali, in presenza di neonati o se si percepiscono variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Coverciano è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua di Coverciano è dura?",
        a: "Ha durezza media, in linea con il resto della città.",
      },
      {
        q: "Devo preoccuparmi del piombo?",
        a: "In edifici dopoguerra il rischio è basso, ma non si può escludere in singoli impianti datati: un'analisi è la verifica più affidabile.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Coverciano (Firenze) per palazzine dopoguerra: rame, nichel e microbiologica di base.",
    relatedNeighborhoods: [
      "firenze-campo-di-marte",
      "firenze-bellariva",
      "firenze-cure",
    ],
  },
  {
    slug: "firenze-rifredi",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Rifredi",
    district: "Quartiere 5",
    shortTitle: "Acqua del rubinetto a Rifredi (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Rifredi (Firenze): zona residenziale e ospedaliera, palazzine dopoguerra, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua rifredi firenze",
      "acqua rubinetto rifredi",
      "qualità acqua rifredi",
      "analisi acqua rifredi firenze",
    ],
    intro:
      "Rifredi è un quartiere residenziale nord di Firenze, con presenza di importanti poli ospedalieri e universitari. Il tessuto edilizio è eterogeneo: palazzine primi novecento, edifici dopoguerra e interventi più recenti. La rete pubblica Publiacqua è moderna.",
    buildingAge: "misto",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Piombo in tratti residui di edifici primo novecento",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Rifredi: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Il mix edilizio di Rifredi comporta impianti idrici di età diverse: alcuni edifici primi novecento possono ancora avere tratti residui datati, mentre le palazzine dopoguerra hanno impianti più moderni.",
        ],
      },
      {
        heading: "Rischi specifici di Rifredi",
        paragraphs: [
          "Nei tratti più antichi può esserci attenzione al piombo; nelle palazzine recenti i parametri rilevanti sono rame, nichel e ferro.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Rifredi",
        paragraphs: [
          "Analisi su metalli (piombo nei palazzi pre-1960, rame e nichel altrove), parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi a Rifredi",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o se si percepiscono variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Rifredi è potabile?",
        a: "Sì, è distribuita da Publiacqua e potabile.",
      },
      {
        q: "L'acqua di Rifredi è dura?",
        a: "Ha durezza media, in linea con il resto di Firenze.",
      },
      {
        q: "Ci sono problemi di piombo a Rifredi?",
        a: "Possibili solo in tratti interni di palazzi primo novecento. Un'analisi al rubinetto chiarisce il quadro.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Rifredi (Firenze) per edifici di età eterogenea: metalli e microbiologica di base.",
    relatedNeighborhoods: [
      "firenze-careggi",
      "firenze-novoli",
      "firenze-statuto",
    ],
  },
  {
    slug: "firenze-novoli",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Novoli",
    district: "Quartiere 5",
    shortTitle: "Acqua del rubinetto a Novoli (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Novoli (Firenze): zona moderna con polo universitario, palazzi anni 2000, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua novoli firenze",
      "acqua rubinetto novoli",
      "qualità acqua novoli",
      "analisi acqua novoli firenze",
    ],
    intro:
      "Novoli è una delle aree più rinnovate di Firenze, con il polo universitario, il Palazzo di Giustizia e nuovi quartieri residenziali. Gli edifici sono in larga parte degli anni 1990-2010, con impianti idrici moderni. La rete pubblica Publiacqua è capillare.",
    buildingAge: "moderno",
    typicalRisks: [
      "Rame e nichel da rubinetterie",
      "Cloro residuo variabile in punti distali",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Novoli: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Novoli ha impianti idrici moderni, sia nelle reti condominiali sia negli allacci. Le criticità tipiche sono limitate alle rubinetterie e ai punti distali della rete.",
        ],
      },
      {
        heading: "Rischi specifici di Novoli",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie sono i parametri principali. Il piombo è raro in edifici di nuova costruzione.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Novoli",
        paragraphs: [
          "Analisi su rame, nichel, parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi a Novoli",
        paragraphs: [
          "Dopo l'ingresso in un nuovo appartamento, in presenza di neonati, o se si avverte un sapore metallico.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Novoli è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua di Novoli è dura?",
        a: "Ha durezza media, in linea con il resto della città.",
      },
      {
        q: "Devo preoccuparmi del piombo a Novoli?",
        a: "In edifici moderni il rischio è molto basso.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Novoli (Firenze) per edifici moderni: rame, nichel e microbiologica di base.",
    relatedNeighborhoods: [
      "firenze-rifredi",
      "firenze-careggi",
      "firenze-statuto",
    ],
  },
  {
    slug: "firenze-isolotto",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Isolotto",
    district: "Quartiere 4",
    shortTitle: "Acqua del rubinetto all'Isolotto (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto all'Isolotto (Firenze): quartiere INA-Casa anni '50, palazzine dopoguerra, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua isolotto firenze",
      "acqua rubinetto isolotto",
      "qualità acqua isolotto",
      "analisi acqua isolotto firenze",
    ],
    intro:
      "L'Isolotto è un quartiere INA-Casa progettato negli anni 1950 lungo la riva sinistra dell'Arno, a ovest del centro. Le palazzine sono in larga parte del dopoguerra. La rete pubblica Publiacqua è moderna; le criticità riguardano gli impianti condominiali di età intermedia.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Ferro/manganese da impianti zincati datati",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua all'Isolotto: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Le palazzine INA-Casa dell'Isolotto hanno impianti idrici degli anni 1950, in parte aggiornati nei decenni successivi.",
        ],
      },
      {
        heading: "Rischi specifici dell'Isolotto",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie sono i parametri principali. In alcuni impianti zincati datati può comparire ferro o manganese.",
        ],
      },
      {
        heading: "Cosa controllare a casa all'Isolotto",
        paragraphs: [
          "Analisi su metalli (rame, nichel, ferro), parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi all'Isolotto",
        paragraphs: [
          "Dopo l'acquisto di un appartamento, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua dell'Isolotto è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua dell'Isolotto è dura?",
        a: "Ha durezza media.",
      },
      {
        q: "Ci sono problemi di piombo all'Isolotto?",
        a: "Sono rari in edifici dopoguerra. Un'analisi al rubinetto fornisce certezza.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua all'Isolotto (Firenze) per palazzine INA-Casa: rame, nichel e microbiologica di base.",
    relatedNeighborhoods: [
      "firenze-legnaia",
      "firenze-soffiano",
      "firenze-galluzzo",
    ],
  },
  {
    slug: "firenze-legnaia",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Legnaia",
    district: "Quartiere 4",
    shortTitle: "Acqua del rubinetto a Legnaia (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Legnaia (Firenze): quartiere residenziale a ovest, palazzine dopoguerra, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua legnaia firenze",
      "acqua rubinetto legnaia",
      "qualità acqua legnaia",
      "analisi acqua legnaia firenze",
    ],
    intro:
      "Legnaia è una zona residenziale a ovest del centro fiorentino, tra l'Isolotto e Soffiano. Il tessuto edilizio è prevalentemente dopoguerra, con palazzine degli anni 1950-1980. La rete pubblica Publiacqua è moderna.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Ferro/manganese in impianti zincati datati",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Legnaia: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Le palazzine di Legnaia hanno impianti dell'epoca di costruzione, talvolta integrati da interventi recenti.",
        ],
      },
      {
        heading: "Rischi specifici di Legnaia",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie sono i parametri principali. Possibili tracce di ferro da impianti zincati datati.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Legnaia",
        paragraphs: [
          "Analisi su metalli, parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi a Legnaia",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Legnaia è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua di Legnaia è dura?",
        a: "Ha durezza media.",
      },
      {
        q: "Ci sono problemi di piombo a Legnaia?",
        a: "Rari in edifici dopoguerra. Un'analisi al rubinetto conferma il quadro.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Legnaia (Firenze) per palazzine dopoguerra: rame, nichel e microbiologica.",
    relatedNeighborhoods: [
      "firenze-isolotto",
      "firenze-soffiano",
      "firenze-galluzzo",
    ],
  },
  {
    slug: "firenze-galluzzo",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Galluzzo",
    district: "Quartiere 3",
    shortTitle: "Acqua del rubinetto al Galluzzo (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto al Galluzzo (Firenze): zona collinare sud, palazzine miste, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua galluzzo firenze",
      "acqua rubinetto galluzzo",
      "qualità acqua galluzzo",
      "analisi acqua galluzzo firenze",
    ],
    intro:
      "Il Galluzzo è una zona collinare a sud di Firenze, lungo la via Senese verso la Certosa. Il tessuto edilizio mescola villette e palazzine dopoguerra con interventi più recenti. La rete pubblica Publiacqua è moderna, con qualche caratteristica tipica delle zone collinari.",
    buildingAge: "misto",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Cloro residuo variabile in zona collinare",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua al Galluzzo: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Il Galluzzo, essendo zona collinare, può presentare variazioni di pressione e di cloro residuo nei punti più distali. Gli impianti sono eterogenei.",
        ],
      },
      {
        heading: "Rischi specifici del Galluzzo",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie sono i parametri principali. Il cloro residuo può risultare leggermente variabile in alcune zone.",
        ],
      },
      {
        heading: "Cosa controllare a casa al Galluzzo",
        paragraphs: [
          "Analisi su metalli, parametri organolettici (durezza, cloro, pH) e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi al Galluzzo",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del Galluzzo è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua del Galluzzo è dura?",
        a: "Ha durezza media.",
      },
      {
        q: "Posso bere l'acqua del rubinetto al Galluzzo?",
        a: "Sì. In zone collinari conviene comunque verificare il proprio impianto interno.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua al Galluzzo (Firenze) per zone collinari sud: metalli e microbiologica.",
    relatedNeighborhoods: [
      "firenze-legnaia",
      "firenze-soffiano",
      "firenze-gavinana",
    ],
  },
  {
    slug: "firenze-soffiano",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Soffiano",
    district: "Quartiere 4",
    shortTitle: "Acqua del rubinetto a Soffiano (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Soffiano (Firenze): zona residenziale ovest, palazzine dopoguerra, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua soffiano firenze",
      "acqua rubinetto soffiano",
      "qualità acqua soffiano",
      "analisi acqua soffiano firenze",
    ],
    intro:
      "Soffiano è una zona residenziale a ovest di Firenze, tra Legnaia e le pendici di Monte Oliveto. Il tessuto edilizio è dopoguerra, con palazzine degli anni 1950-1980. La rete pubblica Publiacqua è moderna.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Ferro/manganese in impianti zincati datati",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Soffiano: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Le palazzine di Soffiano hanno impianti dell'epoca di costruzione, in parte aggiornati.",
        ],
      },
      {
        heading: "Rischi specifici di Soffiano",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie sono i parametri principali, con possibili tracce di ferro in impianti datati.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Soffiano",
        paragraphs: [
          "Analisi su metalli, parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi a Soffiano",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Soffiano è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua di Soffiano è dura?",
        a: "Ha durezza media.",
      },
      {
        q: "Ci sono problemi di piombo a Soffiano?",
        a: "Rari in edifici dopoguerra. Un'analisi al rubinetto chiarisce il quadro.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Soffiano (Firenze) per palazzine dopoguerra: rame, nichel e microbiologica.",
    relatedNeighborhoods: [
      "firenze-legnaia",
      "firenze-isolotto",
      "firenze-galluzzo",
    ],
  },
  {
    slug: "firenze-statuto",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Statuto",
    district: "Quartiere 5",
    shortTitle: "Acqua del rubinetto in zona Statuto (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto in zona Statuto (Firenze): edifici primo novecento e palazzine miste, possibile piombo, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua statuto firenze",
      "acqua rubinetto statuto",
      "qualità acqua statuto",
      "analisi acqua statuto firenze",
    ],
    intro:
      "La zona Statuto si sviluppa attorno a piazza dello Statuto e alla stazione di Rifredi-Statuto. Il tessuto edilizio è eterogeneo: palazzine primo novecento, edifici degli anni 1930-1950 e palazzi più recenti. La rete pubblica Publiacqua è moderna.",
    buildingAge: "primo-novecento",
    typicalRisks: [
      "Piombo in impianti pre-1960",
      "Rame e nichel da impianti misti",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua in zona Statuto: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Gli edifici della zona Statuto hanno impianti idrici di età diverse: in alcuni palazzi primi novecento possono permanere tratti residui datati.",
        ],
      },
      {
        heading: "Rischi specifici della zona Statuto",
        paragraphs: [
          "Nei palazzi primo novecento attenzione al piombo. Nelle palazzine più recenti i parametri rilevanti sono rame, nichel e ferro.",
        ],
      },
      {
        heading: "Cosa controllare a casa in zona Statuto",
        paragraphs: [
          "Analisi mirata su metalli (piombo nei palazzi pre-1960, rame e nichel altrove), parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi in zona Statuto",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in zona Statuto è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "Ci sono problemi di piombo in zona Statuto?",
        a: "Possibili in tratti interni di palazzi primo novecento. Un'analisi chiarisce il quadro.",
      },
      {
        q: "L'acqua in zona Statuto è dura?",
        a: "Ha durezza media.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua in zona Statuto (Firenze) per edifici primi novecento: piombo, rame, nichel e microbiologica.",
    relatedNeighborhoods: [
      "firenze-rifredi",
      "firenze-cure",
      "firenze-careggi",
    ],
  },
  {
    slug: "firenze-cure",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Le Cure",
    district: "Quartiere 2",
    shortTitle: "Acqua del rubinetto alle Cure (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto alle Cure (Firenze): zona residenziale storica nord, palazzine primi novecento e dopoguerra, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua le cure firenze",
      "acqua rubinetto le cure",
      "qualità acqua le cure",
      "analisi acqua le cure firenze",
    ],
    intro:
      "Le Cure è una zona residenziale a nord del centro di Firenze, lungo viale dei Mille e il Mugnone. Il tessuto edilizio mescola palazzine primi novecento, edifici degli anni 1930-1950 e palazzine dopoguerra. La rete pubblica Publiacqua è moderna.",
    buildingAge: "misto",
    typicalRisks: [
      "Piombo in impianti pre-1960",
      "Rame e nichel da impianti misti",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua alle Cure: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Gli edifici delle Cure hanno impianti idrici di età diverse: i palazzi primi novecento possono presentare tratti residui datati, mentre le palazzine più recenti hanno impianti più moderni.",
        ],
      },
      {
        heading: "Rischi specifici delle Cure",
        paragraphs: [
          "Nei palazzi primo novecento il piombo merita attenzione. Nelle palazzine recenti sono più rilevanti rame e nichel.",
        ],
      },
      {
        heading: "Cosa controllare a casa alle Cure",
        paragraphs: [
          "Analisi mirata su metalli, parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi alle Cure",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua delle Cure è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "Ci sono problemi di piombo alle Cure?",
        a: "Possibili in tratti interni di palazzi pre-1960. Un'analisi al rubinetto chiarisce il quadro.",
      },
      {
        q: "L'acqua delle Cure è dura?",
        a: "Ha durezza media, in linea con il resto della città.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua alle Cure (Firenze) per edifici di età eterogenea: piombo e metalli da impianti interni.",
    relatedNeighborhoods: [
      "firenze-campo-di-marte",
      "firenze-statuto",
      "firenze-careggi",
    ],
  },
  {
    slug: "firenze-careggi",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Careggi",
    district: "Quartiere 5",
    shortTitle: "Acqua del rubinetto a Careggi (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Careggi (Firenze): zona ospedaliera e residenziale nord, palazzine dopoguerra, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua careggi firenze",
      "acqua rubinetto careggi",
      "qualità acqua careggi",
      "analisi acqua careggi firenze",
    ],
    intro:
      "Careggi è una zona residenziale nord di Firenze, nota per il polo ospedaliero universitario. Il tessuto edilizio è prevalentemente dopoguerra, con palazzine degli anni 1950-1980. La rete pubblica Publiacqua è moderna.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Ferro/manganese in impianti zincati datati",
      "Durezza media",
    ],
    sections: [
      {
        heading: "L'acqua a Careggi: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Le palazzine di Careggi hanno impianti dell'epoca di costruzione, talvolta aggiornati.",
        ],
      },
      {
        heading: "Rischi specifici di Careggi",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie. Possibili tracce di ferro in impianti zincati datati.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Careggi",
        paragraphs: [
          "Analisi su metalli, parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi a Careggi",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Careggi è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua di Careggi è dura?",
        a: "Ha durezza media.",
      },
      {
        q: "Devo preoccuparmi del piombo?",
        a: "In edifici dopoguerra il rischio è basso. Un'analisi al rubinetto è la verifica più affidabile.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Careggi (Firenze) per zona residenziale e ospedaliera: rame, nichel e microbiologica.",
    relatedNeighborhoods: [
      "firenze-rifredi",
      "firenze-novoli",
      "firenze-statuto",
    ],
  },
  {
    slug: "firenze-piazza-della-vittoria",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Piazza della Vittoria",
    district: "Quartiere 5",
    shortTitle:
      "Acqua del rubinetto in zona Piazza della Vittoria (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto in zona Piazza della Vittoria (Firenze): edifici primi novecento e dopoguerra, possibile piombo, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua piazza della vittoria firenze",
      "acqua rubinetto piazza vittoria firenze",
      "qualità acqua piazza vittoria",
      "analisi acqua piazza vittoria firenze",
    ],
    intro:
      "Piazza della Vittoria è uno snodo residenziale a nord-ovest del centro di Firenze, tra Rifredi e lo Statuto. Il tessuto edilizio mescola palazzine primi novecento, edifici degli anni 1930-1950 e palazzine dopoguerra. La rete pubblica Publiacqua è moderna.",
    buildingAge: "misto",
    typicalRisks: [
      "Piombo in impianti pre-1960",
      "Rame e nichel da impianti misti",
      "Durezza media",
    ],
    sections: [
      {
        heading:
          "L'acqua in zona Piazza della Vittoria: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Gli edifici della zona hanno impianti idrici di età diverse: i palazzi primi novecento possono ancora avere tratti residui datati.",
        ],
      },
      {
        heading: "Rischi specifici della zona",
        paragraphs: [
          "Nei palazzi primo novecento attenzione al piombo. Nelle palazzine recenti i parametri rilevanti sono rame, nichel e ferro.",
        ],
      },
      {
        heading: "Cosa controllare a casa",
        paragraphs: [
          "Analisi mirata su metalli (piombo nei palazzi pre-1960, rame e nichel altrove), parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua in zona Piazza della Vittoria è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "Ci sono problemi di piombo?",
        a: "Possibili in tratti interni di palazzi pre-1960. Un'analisi al rubinetto chiarisce il quadro.",
      },
      {
        q: "L'acqua è dura?",
        a: "Ha durezza media.",
      },
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext:
      "Analisi acqua in zona Piazza della Vittoria (Firenze) per edifici di età eterogenea: piombo e metalli interni.",
    relatedNeighborhoods: [
      "firenze-statuto",
      "firenze-rifredi",
      "firenze-cure",
    ],
  },
  {
    slug: "firenze-gavinana",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Gavinana",
    district: "Quartiere 3",
    shortTitle: "Acqua del rubinetto a Gavinana (Firenze): cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Gavinana (Firenze): zona residenziale sud, palazzine dopoguerra e interventi moderni, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua gavinana firenze",
      "acqua rubinetto gavinana",
      "qualità acqua gavinana",
      "analisi acqua gavinana firenze",
    ],
    intro:
      "Gavinana è una zona residenziale a sud-est di Firenze, lungo viale Europa. Il tessuto edilizio è prevalentemente dopoguerra, con palazzine e interventi moderni (es. l'area di Firenze Sud). La rete pubblica Publiacqua è moderna.",
    buildingAge: "dopoguerra",
    typicalRisks: [
      "Rame e nichel da impianti misti",
      "Durezza media",
      "Cloro residuo variabile",
    ],
    sections: [
      {
        heading: "L'acqua a Gavinana: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Le palazzine di Gavinana hanno impianti dell'epoca di costruzione, integrati da interventi più recenti.",
        ],
      },
      {
        heading: "Rischi specifici di Gavinana",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie sono i parametri principali.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Gavinana",
        paragraphs: [
          "Analisi su metalli, parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi a Gavinana",
        paragraphs: [
          "Dopo l'acquisto, dopo ristrutturazioni parziali, in presenza di neonati o variazioni organolettiche.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Gavinana è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua di Gavinana è dura?",
        a: "Ha durezza media.",
      },
      {
        q: "Devo preoccuparmi del piombo?",
        a: "Rischio basso in edifici dopoguerra. Un'analisi al rubinetto conferma.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Gavinana (Firenze) per palazzine dopoguerra: rame, nichel e microbiologica.",
    relatedNeighborhoods: [
      "firenze-bellariva",
      "firenze-firenze-sud",
      "firenze-galluzzo",
    ],
  },
  {
    slug: "firenze-firenze-sud",
    citySlug: "firenze",
    cityName: "Firenze",
    neighborhoodName: "Firenze Sud",
    district: "Quartiere 3",
    shortTitle: "Acqua del rubinetto a Firenze Sud: cosa controllare",
    metaDescription:
      "Acqua del rubinetto a Firenze Sud: zona moderna lungo viale Europa, palazzi recenti, durezza media e quando fare un'analisi.",
    searchKeywords: [
      "acqua firenze sud",
      "acqua rubinetto firenze sud",
      "qualità acqua firenze sud",
      "analisi acqua firenze sud",
    ],
    intro:
      "Firenze Sud comprende le aree di sviluppo recente lungo viale Europa e attorno a Gavinana, con palazzi degli anni 1980-2010 e nuove edificazioni. La rete pubblica Publiacqua è moderna e capillare.",
    buildingAge: "moderno",
    typicalRisks: [
      "Rame e nichel da rubinetterie",
      "Durezza media",
      "Cloro residuo variabile in punti distali",
    ],
    sections: [
      {
        heading: "L'acqua a Firenze Sud: contesto urbano e tubazioni",
        paragraphs: [
          PUBLIACQUA_PARAGRAPH,
          "Gli edifici di Firenze Sud hanno impianti moderni. Le criticità tipiche sono limitate alle rubinetterie e ai punti distali della rete.",
        ],
      },
      {
        heading: "Rischi specifici di Firenze Sud",
        paragraphs: [
          "Rame e nichel da raccordi e rubinetterie sono i parametri principali. Il piombo è raro in edifici moderni.",
        ],
      },
      {
        heading: "Cosa controllare a casa a Firenze Sud",
        paragraphs: [
          "Analisi su rame, nichel, parametri organolettici e microbiologica di base.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: "Quando fare un'analisi a Firenze Sud",
        paragraphs: [
          "Dopo l'ingresso in un nuovo appartamento, in presenza di neonati o se si avverte un sapore metallico.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Firenze Sud è potabile?",
        a: "Sì, è distribuita da Publiacqua ed è potabile.",
      },
      {
        q: "L'acqua di Firenze Sud è dura?",
        a: "Ha durezza media.",
      },
      {
        q: "Devo preoccuparmi del piombo?",
        a: "In edifici moderni il rischio è molto basso.",
      },
    ],
    ctaVariant: "kit-analisi",
    ctaContext:
      "Analisi acqua a Firenze Sud per edifici moderni: rame, nichel e microbiologica di base.",
    relatedNeighborhoods: [
      "firenze-gavinana",
      "firenze-bellariva",
      "firenze-galluzzo",
    ],
  },
];
