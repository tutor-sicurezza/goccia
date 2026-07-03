import type { MineralWater } from './mineral-waters';

// ============================================================================
// Secondo lotto di schede acque minerali (copertura regionale ampliata).
// Valori dall'analisi in etichetta / dati del produttore (D.Lgs. 176/2011),
// raccolti da fonti pubbliche. Testi redazionali GoccIA.
// ============================================================================

export const WATER_ENTRIES_2: MineralWater[] = [
  // ===================== PIEMONTE =====================
  {
    id: 'bognanco',
    brand: 'Bognanco Ausonia',
    slug: 'bognanco',
    producer: 'Terme di Bognanco',
    sorgente: 'Fonte Ausonia',
    comune: 'Bognanco',
    provincia: 'VB',
    regione: 'Piemonte',
    altitudine: null,
    type: 'naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 684, ph: 7.8, conducibilita: 920, durezza: null, bicarbonato: 580, calcio: 45, magnesio: 106, sodio: 44, potassio: 7.2, solfati: 135, cloruri: 23.9, nitrati: 0.5, fluoruri: 0.3, silice: 28 },
    tagline: "Acqua termale dell'Ossola, ricchissima di magnesio (106 mg/L).",
    metaDescription:
      "Bognanco Ausonia: residuo fisso 684 mg/L, mediominerale bicarbonato-magnesiaca dell'Ossola con 106 mg/L di magnesio. Analisi dell'etichetta e usi.",
    searchKeywords: ['bognanco residuo fisso', 'acqua bognanco ausonia', 'bognanco magnesio'],
    intro:
      "Bognanco è una piccola stazione termale in Val d'Ossola, nel verbano, nota fin dall'Ottocento per le sue acque curative. La fonte Ausonia dà un'acqua mediominerale (residuo fisso 684 mg/L) dal profilo insolito: pochissimo calcio ma tantissimo [magnesio](/parametri/durezza-totale), 106 mg/L, tra i valori più alti in Italia.",
    sections: [
      {
        heading: "Un'acqua magnesiaca da bere con criterio",
        paragraphs: [
          "Con 106 mg/L di magnesio (menzione «magnesiaca») e bicarbonati abbondanti, Ausonia rientra nella tradizione delle acque termali «della salute», un tempo bevute alle terme per favorire funzioni digestive ed epatiche. Il magnesio elevato la rende interessante per chi vuole integrarne l'apporto, ma è un'acqua strutturata, non da consumare in grandi quantità come acqua da tavola.",
          "Il [sodio](/parametri/sodio) è moderato (44 mg/L) e i bicarbonati alti danno morbidezza. È un profilo lontano dalle leggerissime alpine del vicino biellese come [Lauretana](/acque-minerali/lauretana).",
        ],
      },
    ],
    bestFor: ['Chi cerca un forte apporto di magnesio (106 mg/L)', 'Uso funzionale nella tradizione termale'],
    cautions: ["Molto mineralizzata: non è un'acqua «da tavola» per grandi quantità quotidiane."],
    faqs: [
      { q: 'Qual è il residuo fisso di Bognanco Ausonia?', a: '684 mg/L a 180 °C: è un\'acqua mediominerale, bicarbonato-magnesiaca.' },
      { q: 'Perché Bognanco è ricca di magnesio?', a: "Perché filtra attraverso rocce dell'Ossola che cedono molto magnesio: circa 106 mg/L, un valore fra i più alti tra le acque italiane, che le vale la menzione «magnesiaca»." },
    ],
    relatedIds: ['fonte-essenziale', 'san-pellegrino', 'valmora'],
  },
  {
    id: 'valmora',
    brand: 'Valmora',
    slug: 'valmora',
    producer: 'Acqua Valmora S.p.A.',
    sorgente: 'Fonte Valmora',
    comune: 'Rorà (Val Pellice)',
    provincia: 'TO',
    regione: 'Piemonte',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 51.1, ph: 7.2, conducibilita: 71.5, durezza: 4, bicarbonato: 37, calcio: 11.5, magnesio: 2.7, sodio: 1.2, potassio: 0.46, solfati: 3.5, cloruri: 0.24, nitrati: null, fluoruri: 0.31, silice: null },
    tagline: 'Leggera della Val Pellice, con pochissimo sodio.',
    metaDescription:
      "Acqua Valmora: residuo fisso 51 mg/L, leggerissima della Val Pellice con sodio bassissimo. Analisi dell'etichetta e a chi è adatta.",
    searchKeywords: ['valmora residuo fisso', 'acqua valmora analisi', 'valmora val pellice'],
    intro:
      "Valmora nasce a Rorà, in Val Pellice, nel torinese, dalle rocce delle Alpi Cozie. È un'acqua sul confine tra le minimamente mineralizzate e le oligominerali (residuo fisso 51 mg/L), leggera e con [sodio](/parametri/sodio) bassissimo (1,2 mg/L).",
    sections: [
      {
        heading: 'Leggera e adatta alle diete iposodiche',
        paragraphs: [
          "Con un residuo appena sopra la soglia dei 50 mg/L e un sodio quasi assente, Valmora è un'acqua leggera da uso quotidiano, adatta a chi deve limitare il sale. La [durezza](/parametri/durezza-totale) di 4 gradi francesi è molto bassa: lascia poco calcare.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (1,2 mg/L)', 'Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Valmora?', a: 'Circa 51 mg/L a 180 °C: è un\'acqua leggera, al confine tra minimamente mineralizzata e oligominerale.' },
    ],
    relatedIds: ['lurisia', 'san-bernardo', 'crodo-lisiel'],
  },
  {
    id: 'crodo-lisiel',
    brand: 'Crodo Lisiel',
    slug: 'crodo-lisiel',
    producer: 'Fonti di Crodo (Campari)',
    sorgente: 'Fonte Lisiel',
    comune: 'Crodo',
    provincia: 'VB',
    regione: 'Piemonte',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 247.8, ph: 7.8, conducibilita: null, durezza: null, bicarbonato: 115, calcio: 61.7, magnesio: 6.1, sodio: 6.1, potassio: 3.4, solfati: 96.4, cloruri: 3.3, nitrati: 3.7, fluoruri: 0.11, silice: 9 },
    tagline: "L'oligominerale della Valle Antigorio, dalle fonti di Crodo.",
    metaDescription:
      "Crodo Lisiel: residuo fisso 248 mg/L, oligominerale dell'Ossola dalle storiche Fonti di Crodo. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['crodo lisiel residuo fisso', 'acqua crodo analisi', 'fonti di crodo'],
    intro:
      "Le Fonti di Crodo, in Valle Antigorio nell'alto Piemonte, sono celebri per i loro prodotti storici. L'acqua Lisiel è un'oligominerale (residuo fisso 248 mg/L) dal profilo calcico-solfato, con un contenuto di [solfati](/parametri/solfati) apprezzabile (96 mg/L).",
    sections: [
      {
        heading: 'Un profilo alpino solfato-calcico',
        paragraphs: [
          "Lisiel unisce [calcio](/parametri/durezza-totale) (62 mg/L) e solfati (96 mg/L) a un [sodio](/parametri/sodio) basso (6 mg/L): un'acqua di media leggerezza, equilibrata, adatta all'uso di tutti i giorni. Il [pH](/parametri/ph) di 7,8 la rende leggermente basica.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Crodo Lisiel?', a: 'Circa 248 mg/L a 180 °C: è un\'acqua oligominerale, solfato-calcica.' },
    ],
    relatedIds: ['bognanco', 'valmora', 'lurisia'],
  },
  // ===================== VALLE D'AOSTA / LIGURIA =====================
  {
    id: 'monte-bianco',
    brand: 'Monte Bianco',
    slug: 'monte-bianco',
    producer: 'Sorgenti Monte Bianco S.p.A.',
    sorgente: 'Fonte Monte Bianco (Val Veny)',
    comune: 'Morgex',
    provincia: 'AO',
    regione: "Valle d'Aosta",
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 137, ph: 8.0, conducibilita: 228, durezza: null, bicarbonato: 75, calcio: 38.3, magnesio: 3.1, sodio: 1.6, potassio: 2.2, solfati: 50.4, cloruri: null, nitrati: null, fluoruri: null, silice: null },
    tagline: "L'acqua del massiccio del Monte Bianco, alcalina e povera di sodio.",
    metaDescription:
      "Acqua Monte Bianco: residuo fisso 137 mg/L, oligominerale valdostana della Val Veny, alcalina e povera di sodio. Analisi dell'etichetta.",
    searchKeywords: ['monte bianco acqua residuo fisso', 'acqua monte bianco analisi', 'acqua val veny'],
    intro:
      "Sgorga in Val Veny, ai piedi del massiccio del Monte Bianco, nel comune di Morgex. È un'oligominerale (residuo fisso 137 mg/L) con [pH](/parametri/ph) basico (8,0) e [sodio](/parametri/sodio) bassissimo, tratto comune alle acque d'alta quota valdostane.",
    sections: [
      {
        heading: 'Origine alpina e sodio minimo',
        paragraphs: [
          "Con soli 1,6 mg/L di sodio, Monte Bianco è adatta alle diete iposodiche. I [solfati](/parametri/solfati) (50 mg/L) e il [calcio](/parametri/durezza-totale) (38 mg/L) le danno un minimo di struttura senza appesantirla. È il classico profilo dell'acqua di montagna: leggera, pulita, poco mineralizzata.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (1,6 mg/L)', 'Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: "L'acqua Monte Bianco viene davvero dal Monte Bianco?", a: 'Sì: la fonte è in Val Veny, sul versante italiano del massiccio del Monte Bianco, nel comune di Morgex (Valle d\'Aosta).' },
    ],
    relatedIds: ['courmayeur', 'eva', 'santa-vittoria'],
  },
  {
    id: 'calizzano',
    brand: 'Calizzano',
    slug: 'calizzano',
    producer: 'Acqua Minerale di Calizzano S.r.l.',
    sorgente: 'Fonte Bauda',
    comune: 'Calizzano',
    provincia: 'SV',
    regione: 'Liguria',
    altitudine: null,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 44.6, ph: 6.9, conducibilita: 59, durezza: 2.0, bicarbonato: 17.5, calcio: 12.3, magnesio: 1.0, sodio: 3.7, potassio: 1.0, solfati: 5.7, cloruri: 2.1, nitrati: 3.0, fluoruri: null, silice: 6.9 },
    tagline: "Leggerissima dell'entroterra savonese, in val Bormida.",
    metaDescription:
      "Acqua Calizzano: residuo fisso 45 mg/L, minimamente mineralizzata dell'entroterra ligure. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['calizzano residuo fisso', 'acqua calizzano analisi', 'acqua calizzano bauda'],
    intro:
      "Calizzano nasce nell'entroterra savonese, in alta val Bormida, ed è una delle poche acque minerali liguri. La fonte Bauda dà un'acqua minimamente mineralizzata (residuo fisso 45 mg/L), leggera e a bassa durezza.",
    sections: [
      {
        heading: 'Un profilo leggero da entroterra',
        paragraphs: [
          "Con residuo sotto i 50 mg/L e una [durezza](/parametri/durezza-totale) di appena 2 gradi francesi, Calizzano è un'acqua leggera adatta all'uso quotidiano e che lascia pochissimo calcare. Il [pH](/parametri/ph) leggermente acido (6,9) è coerente con la scarsa mineralizzazione.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', 'Poco calcare in casa'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Calizzano?', a: 'Circa 45 mg/L a 180 °C: è un\'acqua minimamente mineralizzata.' },
    ],
    relatedIds: ['santa-vittoria', 'altavalle', 'valmora'],
  },
  {
    id: 'santa-vittoria',
    brand: 'Santa Vittoria',
    slug: 'santa-vittoria',
    producer: 'Santa Vittoria S.r.l.',
    sorgente: 'Sorgente Santa Vittoria (Alpi Liguri)',
    comune: 'Montegrosso Pian Latte',
    provincia: 'IM',
    regione: 'Liguria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Torino, 2023',
    analysis: { residuoFisso: 181.7, ph: 7.9, conducibilita: 327, durezza: null, bicarbonato: 175, calcio: 52.6, magnesio: 8.2, sodio: 1.6, potassio: 0.22, solfati: 22.8, cloruri: 1.1, nitrati: 1.9, fluoruri: null, silice: 6.0 },
    tagline: "Oligominerale del Parco delle Alpi Liguri, povera di sodio.",
    metaDescription:
      "Acqua Santa Vittoria: residuo fisso 182 mg/L, oligominerale delle Alpi Liguri, povera di sodio. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['santa vittoria acqua residuo fisso', 'acqua santa vittoria analisi', 'santa vittoria alpi liguri'],
    intro:
      "Santa Vittoria sgorga nel Parco delle Alpi Liguri, nell'imperiese, ed è imbottigliata a Pornassio. È un'oligominerale (residuo fisso 182 mg/L) con [sodio](/parametri/sodio) molto basso (1,6 mg/L) e [pH](/parametri/ph) leggermente basico.",
    sections: [
      {
        heading: 'Equilibrata e iposodica',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) moderato (53 mg/L) e sodio quasi assente, Santa Vittoria unisce un po' di mineralità utile alla compatibilità con le diete iposodiche. È un'acqua d'origine alpina dal profilo pulito.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (1,6 mg/L)', 'Uso quotidiano equilibrato'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Santa Vittoria?', a: 'Circa 182 mg/L a 180 °C: è un\'acqua oligominerale, povera di sodio.' },
    ],
    relatedIds: ['calizzano', 'altavalle', 'monte-bianco'],
  },
  {
    id: 'altavalle',
    brand: 'AltaValle',
    slug: 'altavalle',
    producer: 'Valtrebbia Acque Minerali S.r.l.',
    sorgente: 'Fonte Galletto (Alta Valtrebbia)',
    comune: 'Rovegno',
    provincia: 'GE',
    regione: 'Liguria',
    altitudine: 740,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 154, ph: 7.8, conducibilita: 235, durezza: null, bicarbonato: 144, calcio: 41.5, magnesio: 4.3, sodio: 4, potassio: 0.5, solfati: 4.8, cloruri: null, nitrati: 1.6, fluoruri: null, silice: 9.1 },
    tagline: "L'oligominerale dell'Alta Valtrebbia genovese.",
    metaDescription:
      "Acqua AltaValle: residuo fisso 154 mg/L, oligominerale dell'Alta Valtrebbia (GE), povera di sodio. Analisi dell'etichetta.",
    searchKeywords: ['altavalle residuo fisso', 'acqua altavalle analisi', 'acqua valtrebbia'],
    intro:
      "AltaValle nasce dalla Fonte Galletto, a 740 metri nell'Alta Valtrebbia, nell'entroterra genovese. È un'oligominerale (residuo fisso 154 mg/L) equilibrata e povera di [sodio](/parametri/sodio).",
    sections: [
      {
        heading: 'Profilo bicarbonato-calcico leggero',
        paragraphs: [
          "Con bicarbonati sui 144 mg/L e [calcio](/parametri/durezza-totale) di 42 mg/L, AltaValle è un'oligominerale da uso quotidiano, con sodio contenuto (4 mg/L) adatto anche a chi limita il sale.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di AltaValle?', a: 'Circa 154 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['santa-vittoria', 'calizzano', 'chiarella'],
  },
  // ===================== LOMBARDIA (est) =====================
  {
    id: 'san-carlo-spinone',
    brand: 'San Carlo Spinone',
    slug: 'san-carlo-spinone',
    producer: 'Sorgente San Carlo Spinone S.p.A.',
    sorgente: 'Fonte Nuova / San Carlo',
    comune: 'Spinone al Lago',
    provincia: 'BG',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Torino, 2016',
    analysis: { residuoFisso: 389, ph: 7.3, conducibilita: 590, durezza: null, bicarbonato: 370, calcio: 96.8, magnesio: 26.1, sodio: 6.6, potassio: 0.8, solfati: null, cloruri: 5.5, nitrati: 5.5, fluoruri: 0.27, silice: 11.1 },
    tagline: "L'oligominerale del lago di Endine, bicarbonato-calcica.",
    metaDescription:
      "Acqua San Carlo Spinone: residuo fisso 389 mg/L, oligominerale bergamasca bicarbonato-calcica. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['san carlo spinone residuo fisso', 'acqua san carlo analisi', 'spinone al lago acqua'],
    intro:
      "San Carlo sgorga a Spinone al Lago, sulle sponde del lago di Endine, nella bergamasca. È un'oligominerale nella fascia più mineralizzata (residuo fisso 389 mg/L), bicarbonato-calcica, con un buon apporto di [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Bicarbonato-calcica con magnesio',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 97 mg/L, magnesio 26 mg/L e bicarbonati 370 mg/L, San Carlo Spinone porta una mineralità utile pur restando oligominerale. Il [sodio](/parametri/sodio) basso (7 mg/L) la mantiene adatta all'uso quotidiano.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano con un po\' più di minerali', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di San Carlo Spinone?', a: 'Circa 389 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['gaverina', 'fonti-prealpi', 'castello-vallio'],
  },
  {
    id: 'gaverina',
    brand: 'Gaverina',
    slug: 'gaverina',
    producer: 'Fonti di Gaverina S.p.A.',
    sorgente: 'Fonte Centrale',
    comune: 'Gaverina Terme',
    provincia: 'BG',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 410, ph: 7.6, conducibilita: 585, durezza: null, bicarbonato: null, calcio: 98.8, magnesio: 24.3, sodio: 6.4, potassio: 1.0, solfati: null, cloruri: null, nitrati: null, fluoruri: null, silice: null },
    tagline: "L'acqua storica delle terme di Gaverina, in Val Cavallina.",
    metaDescription:
      "Acqua Gaverina: residuo fisso 410 mg/L, oligominerale bergamasca calcica delle terme di Gaverina. Analisi dell'etichetta.",
    searchKeywords: ['gaverina residuo fisso', 'acqua gaverina analisi', 'fonti di gaverina'],
    intro:
      "Gaverina Terme, in Val Cavallina, ha una lunga tradizione idrotermale. L'acqua è un'oligominerale (residuo fisso 410 mg/L) calcica, con [calcio](/parametri/durezza-totale) intorno a 99 mg/L e un buon contenuto di magnesio.",
    sections: [
      {
        heading: 'Tradizione termale bergamasca',
        paragraphs: [
          "Con calcio e [magnesio](/parametri/durezza-totale) apprezzabili e [sodio](/parametri/sodio) basso (6 mg/L), Gaverina è un'oligominerale «piena» ma adatta al consumo quotidiano, legata alla storia delle sue terme.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Gaverina?', a: 'Circa 410 mg/L a 180 °C: è un\'acqua oligominerale, calcica.' },
    ],
    relatedIds: ['san-carlo-spinone', 'fonti-prealpi', 'castello-vallio'],
  },
  {
    id: 'fonti-prealpi',
    brand: 'Fonti Prealpi',
    slug: 'fonti-prealpi',
    producer: 'Fonti Prealpi S.p.A.',
    sorgente: 'Fonti Prealpi',
    comune: 'Almè',
    provincia: 'BG',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 420, ph: 7.7, conducibilita: 629, durezza: null, bicarbonato: 351, calcio: 101, magnesio: 24.6, sodio: 16.2, potassio: 1.5, solfati: 73.0, cloruri: 17.8, nitrati: 0.3, fluoruri: null, silice: 9.8 },
    tagline: "L'oligominerale della bergamasca, calcica e con solfati.",
    metaDescription:
      "Acqua Fonti Prealpi: residuo fisso 420 mg/L, oligominerale bergamasca calcica con solfati. Analisi dell'etichetta.",
    searchKeywords: ['fonti prealpi residuo fisso', 'acqua prealpi analisi', 'fonti prealpi almè'],
    intro:
      "Fonti Prealpi nasce ad Almè, alle porte della Val Brembana bergamasca. È un'oligominerale nella parte alta della categoria (residuo fisso 420 mg/L), bicarbonato-calcica con un contenuto apprezzabile di [solfati](/parametri/solfati).",
    sections: [
      {
        heading: 'Calcica con solfati',
        paragraphs: [
          "Al [calcio](/parametri/durezza-totale) (101 mg/L) e ai bicarbonati (351 mg/L) si aggiungono solfati sui 73 mg/L. Il [sodio](/parametri/sodio) è contenuto (16 mg/L). È un'oligominerale strutturata, adatta a chi ama un'acqua con più corpo.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano con più minerali', 'Apporto di calcio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Fonti Prealpi?', a: 'Circa 420 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['san-carlo-spinone', 'gaverina', 'chiarella'],
  },
  {
    id: 'castello-vallio',
    brand: 'Castello di Vallio',
    slug: 'castello-vallio',
    producer: 'Fonti di Vallio S.p.A.',
    sorgente: 'Fonte Castello',
    comune: 'Vallio Terme',
    provincia: 'BS',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 279, ph: 7.6, conducibilita: 450, durezza: null, bicarbonato: 341, calcio: 61.2, magnesio: 33.1, sodio: 0.8, potassio: 0.1, solfati: 3.8, cloruri: 1.3, nitrati: 7.8, fluoruri: 0.2, silice: 3.1 },
    tagline: "L'acqua di Vallio Terme, bicarbonato-alcalina e quasi senza sodio.",
    metaDescription:
      "Acqua Castello di Vallio: residuo fisso 279 mg/L, oligominerale bresciana con sodio bassissimo e buon magnesio. Analisi dell'etichetta.",
    searchKeywords: ['castello vallio residuo fisso', 'acqua vallio analisi', 'fonti di vallio'],
    intro:
      "Castello sgorga a Vallio Terme, nel bresciano, in una zona termale della Val Sabbia. È un'oligominerale (residuo fisso 279 mg/L) dal [sodio](/parametri/sodio) quasi assente (0,8 mg/L) e con un buon contenuto di [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Sodio minimo e magnesio buono',
        paragraphs: [
          "Il tratto distintivo è il sodio bassissimo (0,8 mg/L), tra i più bassi in assoluto, unito a magnesio (33 mg/L) e bicarbonati abbondanti. È un'acqua adatta alle diete iposodiche pur portando minerali utili.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (0,8 mg/L)', 'Apporto di magnesio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Castello di Vallio?', a: 'Circa 279 mg/L a 180 °C: è un\'acqua oligominerale con sodio bassissimo.' },
    ],
    relatedIds: ['san-carlo-spinone', 'gaverina', 'fonti-prealpi'],
  },
  // ===================== LOMBARDIA (ovest) =====================
  {
    id: 'chiarella',
    brand: 'Chiarella',
    slug: 'chiarella',
    producer: 'Acque Minerali Val Menaggio S.r.l.',
    sorgente: 'Chiarella (Monte Grona)',
    comune: 'Plesio',
    provincia: 'CO',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Pavia, 2019',
    analysis: { residuoFisso: 204, ph: 7.5, conducibilita: 314, durezza: null, bicarbonato: 230, calcio: 41, magnesio: 22.8, sodio: 1, potassio: 0.2, solfati: 6.5, cloruri: 0.7, nitrati: 5.7, fluoruri: null, silice: 3.4 },
    tagline: "L'acqua del Monte Grona, sopra il lago di Como.",
    metaDescription:
      "Acqua Chiarella: residuo fisso 204 mg/L, oligominerale comasca del Monte Grona con sodio bassissimo. Analisi dell'etichetta.",
    searchKeywords: ['chiarella residuo fisso', 'acqua chiarella analisi', 'chiarella lago di como'],
    intro:
      "Chiarella nasce dalle rocce del Monte Grona, sopra Menaggio e il lago di Como. È un'oligominerale (residuo fisso 204 mg/L) con [sodio](/parametri/sodio) quasi assente (1 mg/L) e un buon [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Iposodica con magnesio',
        paragraphs: [
          "Con sodio a 1 mg/L e magnesio a 23 mg/L, Chiarella unisce leggerezza sul fronte del sale a un discreto apporto di magnesio. Il profilo bicarbonato-calcico-magnesiaco è tipico delle acque prealpine.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (1 mg/L)', 'Uso quotidiano con magnesio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Chiarella?', a: 'Circa 204 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['luna', 'san-carlo-spinone', 'altavalle'],
  },
  {
    id: 'luna',
    brand: 'Luna',
    slug: 'luna',
    producer: "Acque Minerali d'Italia S.p.A.",
    sorgente: 'Fonte Luna',
    comune: 'Primaluna',
    provincia: 'LC',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 228, ph: 7.4, conducibilita: 320, durezza: null, bicarbonato: 156.2, calcio: 47.6, magnesio: 17.2, sodio: 3.5, potassio: 1.6, solfati: 54.8, cloruri: 4.6, nitrati: 9.6, fluoruri: null, silice: 8.2 },
    tagline: "L'oligominerale della Valsassina, dallo stesso territorio di Norda.",
    metaDescription:
      "Acqua Luna: residuo fisso 228 mg/L, oligominerale della Valsassina. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['acqua luna residuo fisso', 'acqua luna primaluna', 'luna valsassina analisi'],
    intro:
      "Luna sgorga a Primaluna, in Valsassina, nello stesso territorio lecchese di [Norda](/acque-minerali/norda). È un'oligominerale (residuo fisso 228 mg/L) bicarbonato-calcica con un po' di [solfati](/parametri/solfati).",
    sections: [
      {
        heading: 'Un profilo equilibrato di valle',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 48 mg/L, magnesio 17 mg/L e solfati 55 mg/L, Luna è un'oligominerale di media mineralità e [sodio](/parametri/sodio) basso (3,5 mg/L), adatta all'uso quotidiano.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Acqua Luna?', a: 'Circa 228 mg/L a 180 °C: è un\'acqua oligominerale della Valsassina.' },
    ],
    relatedIds: ['chiarella', 'norda', 'san-carlo-spinone'],
  },
  // ===================== TRENTINO-ALTO ADIGE =====================
  {
    id: 'surgiva',
    brand: 'Surgiva',
    slug: 'surgiva',
    producer: 'Surgiva (Gruppo Lunelli)',
    sorgente: 'Fonte Surgiva (Adamello Brenta)',
    comune: 'Carisolo',
    provincia: 'TN',
    regione: 'Trentino-Alto Adige',
    altitudine: null,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 41, ph: 6.8, conducibilita: 45, durezza: 1.9, bicarbonato: 24, calcio: 7.9, magnesio: null, sodio: 1.9, potassio: null, solfati: null, cloruri: null, nitrati: 4.9, fluoruri: null, silice: null },
    tagline: "Leggerissima del Parco Adamello Brenta, marchio premium.",
    metaDescription:
      "Acqua Surgiva: residuo fisso 41 mg/L, minimamente mineralizzata del Parco Adamello Brenta. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['surgiva residuo fisso', 'acqua surgiva analisi', 'surgiva adamello'],
    intro:
      "Surgiva nasce nel cuore del Parco Naturale Adamello Brenta, in Val Rendena, e appartiene al gruppo Lunelli (Ferrari). È un'acqua minimamente mineralizzata (residuo fisso 41 mg/L), leggera, con posizionamento premium nella ristorazione.",
    sections: [
      {
        heading: 'Leggerezza da parco naturale',
        paragraphs: [
          "Con residuo di 41 mg/L, [durezza](/parametri/durezza-totale) di 2 gradi francesi e [sodio](/parametri/sodio) bassissimo, Surgiva è un'acqua pura e leggera, che punta molto sull'origine incontaminata dell'area protetta.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', 'Tavola e ristorazione', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Surgiva?', a: 'Circa 41 mg/L a 180 °C: è un\'acqua minimamente mineralizzata.' },
    ],
    relatedIds: ['levico', 'meraner', 'pejo'],
  },
  {
    id: 'levico',
    brand: 'Levico',
    slug: 'levico',
    producer: 'Levico Acque S.r.l.',
    sorgente: 'Fonte Levico',
    comune: 'Levico Terme',
    provincia: 'TN',
    regione: 'Trentino-Alto Adige',
    altitudine: null,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 38, ph: null, conducibilita: null, durezza: 2.3, bicarbonato: 14.4, calcio: 7.1, magnesio: 1.4, sodio: 1.5, potassio: 0.44, solfati: 11.5, cloruri: 1.1, nitrati: 2, fluoruri: null, silice: 5.5 },
    tagline: "Leggerissima della Valsugana trentina.",
    metaDescription:
      "Acqua Levico: residuo fisso 38 mg/L, minimamente mineralizzata della Valsugana. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['levico residuo fisso', 'acqua levico analisi', 'levico terme acqua'],
    intro:
      "Levico nasce a Levico Terme, in Valsugana, nel trentino. È un'acqua minimamente mineralizzata (residuo fisso 38 mg/L), leggera e a bassissimo [sodio](/parametri/sodio).",
    sections: [
      {
        heading: 'Un profilo leggero di valle',
        paragraphs: [
          "Con residuo di 38 mg/L, [calcio](/parametri/durezza-totale) minimo e sodio 1,5 mg/L, Levico è un'acqua leggera adatta a tutta la famiglia e alle diete iposodiche.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Levico?', a: 'Circa 38 mg/L a 180 °C: è un\'acqua minimamente mineralizzata.' },
    ],
    relatedIds: ['surgiva', 'meraner', 'pejo'],
  },
  {
    id: 'kaiserwasser',
    brand: 'Kaiserwasser',
    slug: 'kaiserwasser',
    producer: 'Kaiserwasser S.r.l.',
    sorgente: 'Sorgente Kaiserwasser (1323 m)',
    comune: 'San Candido',
    provincia: 'BZ',
    regione: 'Trentino-Alto Adige',
    altitudine: 1323,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 770, ph: 7.52, conducibilita: null, durezza: null, bicarbonato: 230, calcio: 180, magnesio: 41, sodio: 1.2, potassio: null, solfati: 400, cloruri: 0.6, nitrati: 1.1, fluoruri: 0.8, silice: 5.6 },
    tagline: "L'effervescente naturale altoatesina, solfato-calcica e senza sodio.",
    metaDescription:
      "Acqua Kaiserwasser: residuo fisso 770 mg/L, effervescente naturale solfato-calcica dell'Alto Adige. Analisi dell'etichetta.",
    searchKeywords: ['kaiserwasser residuo fisso', 'acqua kaiserwasser analisi', 'kaiserwasser san candido'],
    intro:
      "Kaiserwasser («acqua dell'imperatore») sgorga a San Candido, in Alta Pusteria, a oltre 1.300 metri. È un'acqua mediominerale (residuo fisso 770 mg/L) solfato-calcica ed effervescente naturale, con un tratto raro: molto [calcio](/parametri/durezza-totale) ma pochissimo [sodio](/parametri/sodio).",
    sections: [
      {
        heading: 'Ricca di calcio e solfati, senza sodio',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 180 mg/L (menzione «calcica»), [solfati](/parametri/solfati) 400 mg/L («solfata») e sodio appena 1,2 mg/L, Kaiserwasser offre un forte apporto di calcio compatibile con le diete iposodiche. Le bollicine sono naturali, dalla fonte d'alta quota.",
        ],
      },
    ],
    bestFor: ['Apporto di calcio (180 mg/L)', 'Diete povere di sodio', 'Chi ama le bollicine naturali'],
    cautions: ['Acqua mineralizzata: più «da pasto» che per grandi quantità quotidiane.'],
    faqs: [
      { q: 'Qual è il residuo fisso di Kaiserwasser?', a: 'Circa 770 mg/L a 180 °C: è un\'acqua mediominerale, solfato-calcica ed effervescente naturale.' },
    ],
    relatedIds: ['san-pellegrino', 'lete', 'meraner'],
  },
  {
    id: 'meraner',
    brand: 'Meraner',
    slug: 'meraner',
    producer: 'Aquaeforst S.r.l.',
    sorgente: 'Fonte San Vigilio (1540 m)',
    comune: 'Lagundo',
    provincia: 'BZ',
    regione: 'Trentino-Alto Adige',
    altitudine: 1540,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 42, ph: null, conducibilita: null, durezza: null, bicarbonato: 16, calcio: 4.3, magnesio: 1.3, sodio: 4, potassio: 0.8, solfati: null, cloruri: null, nitrati: 0.8, fluoruri: 1.4, silice: 18.8 },
    tagline: "Leggerissima altoatesina d'alta quota, ricca di silice.",
    metaDescription:
      "Acqua Meraner: residuo fisso 42 mg/L, minimamente mineralizzata dell'Alto Adige, ricca di silice. Analisi dell'etichetta.",
    searchKeywords: ['meraner residuo fisso', 'acqua meraner analisi', 'meraner mineralwasser'],
    intro:
      "Meraner sgorga dalla Fonte San Vigilio, a 1.540 metri sopra Merano, nel meranese. È un'acqua minimamente mineralizzata (residuo fisso 42 mg/L), leggerissima, con un contenuto di silice insolitamente alto.",
    sections: [
      {
        heading: 'Leggera, con silice e fluoro',
        paragraphs: [
          "Al profilo leggero si aggiungono silice (19 mg/L) e [fluoruri](/parametri/fluoruri) intorno a 1,4 mg/L, che superano la soglia per la menzione «fluorata». Un contenuto di fluoro così, pur entro i limiti, è da conoscere: sopra 1,5 mg/L l'acqua non è indicata per il consumo regolare dei bambini piccoli.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', 'Chi cerca un\'acqua d\'alta quota'],
    cautions: ['Fluoruri circa 1,4 mg/L: valore da conoscere, vicino alla soglia rilevante per i bambini piccoli.'],
    faqs: [
      { q: 'Qual è il residuo fisso di Meraner?', a: 'Circa 42 mg/L a 180 °C: è un\'acqua minimamente mineralizzata.' },
    ],
    relatedIds: ['surgiva', 'levico', 'pejo'],
  },
  // ===================== VENETO =====================
  {
    id: 'fonte-margherita',
    brand: 'Fonte Margherita',
    slug: 'fonte-margherita',
    producer: 'Fonte Margherita 1845 S.r.l.',
    sorgente: 'Fonte Margherita',
    comune: 'Torrebelvicino',
    provincia: 'VI',
    regione: 'Veneto',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 440, ph: 7.23, conducibilita: 600, durezza: null, bicarbonato: 239, calcio: 97.5, magnesio: 36.5, sodio: 1.6, potassio: 1.4, solfati: 167.3, cloruri: 0.75, nitrati: 3, fluoruri: null, silice: null },
    tagline: "Storica acqua vicentina, bicarbonato-solfato-calcica e senza sodio.",
    metaDescription:
      "Acqua Fonte Margherita: residuo fisso 440 mg/L, oligominerale vicentina ricca di calcio e magnesio, senza sodio. Analisi dell'etichetta.",
    searchKeywords: ['fonte margherita residuo fisso', 'acqua fonte margherita analisi', 'fonte margherita 1845'],
    intro:
      "Fonte Margherita, attiva dal 1845 a Torrebelvicino nel vicentino, è una delle acque venete storiche. È un'oligominerale (residuo fisso 440 mg/L) bicarbonato-solfato-calcica, con [calcio](/parametri/durezza-totale) e [magnesio](/parametri/durezza-totale) buoni ma [sodio](/parametri/sodio) quasi assente.",
    sections: [
      {
        heading: 'Minerali utili, sodio minimo',
        paragraphs: [
          "Con calcio 98 mg/L, magnesio 37 mg/L e [solfati](/parametri/solfati) 167 mg/L, Fonte Margherita offre un apporto di minerali interessante, mentre il sodio a 1,6 mg/L la rende adatta alle diete iposodiche.",
        ],
      },
    ],
    bestFor: ['Apporto di calcio e magnesio', 'Diete povere di sodio (1,6 mg/L)'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Fonte Margherita?', a: 'Circa 440 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-solfato-calcica.' },
    ],
    relatedIds: ['lissa', 'sorgente-alba', 'lora-recoaro'],
  },
  {
    id: 'lissa',
    brand: 'Lissa',
    slug: 'lissa',
    producer: 'Fonti di Posina S.p.A.',
    sorgente: 'Sorgente Lissa',
    comune: 'Posina',
    provincia: 'VI',
    regione: 'Veneto',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 168.5, ph: 7.8, conducibilita: 272, durezza: 16.4, bicarbonato: null, calcio: 37, magnesio: 19.2, sodio: 0.6, potassio: 0.42, solfati: 8.5, cloruri: 0.56, nitrati: null, fluoruri: null, silice: 4.8 },
    tagline: "L'acqua di Posina, tra le Prealpi vicentine, quasi senza sodio.",
    metaDescription:
      "Acqua Lissa: residuo fisso 169 mg/L, oligominerale vicentina con sodio bassissimo e buon magnesio. Analisi dell'etichetta.",
    searchKeywords: ['lissa residuo fisso', 'acqua lissa analisi', 'acqua lissa posina'],
    intro:
      "Lissa sgorga a Posina, tra le Prealpi vicentine. È un'oligominerale (residuo fisso 169 mg/L) con [sodio](/parametri/sodio) minimo (0,6 mg/L) e un buon apporto di [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Iposodica con magnesio',
        paragraphs: [
          "Con sodio 0,6 mg/L e magnesio 19 mg/L, Lissa è un'acqua leggera sul fronte del sale ma con un pizzico di magnesio utile. La [durezza](/parametri/durezza-totale) di 16 gradi francesi indica una discreta presenza di calcio e magnesio.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (0,6 mg/L)', 'Uso quotidiano con magnesio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Lissa?', a: 'Circa 169 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['fonte-margherita', 'lora-recoaro', 'sorgente-alba'],
  },
  {
    id: 'lora-recoaro',
    brand: 'Lora di Recoaro',
    slug: 'lora-recoaro',
    producer: 'Sanpellegrino S.p.A.',
    sorgente: 'Fonte Lora',
    comune: 'Recoaro Terme',
    provincia: 'VI',
    regione: 'Veneto',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 153.7, ph: null, conducibilita: 253, durezza: null, bicarbonato: 154, calcio: 36, magnesio: 15, sodio: 0.99, potassio: 0.28, solfati: null, cloruri: null, nitrati: 3.7, fluoruri: null, silice: null },
    tagline: "La fonte Lora di Recoaro Terme, leggera e povera di sodio.",
    metaDescription:
      "Acqua Lora di Recoaro: residuo fisso 154 mg/L, oligominerale delle Piccole Dolomiti, povera di sodio. Analisi dell'etichetta.",
    searchKeywords: ['lora recoaro residuo fisso', 'acqua lora analisi', 'fonte lora recoaro'],
    intro:
      "La fonte Lora, a Recoaro Terme nelle Piccole Dolomiti vicentine, dà un'acqua distinta dalla più nota [Recoaro](/acque-minerali/recoaro). È un'oligominerale (residuo fisso 154 mg/L) leggera e con [sodio](/parametri/sodio) quasi assente.",
    sections: [
      {
        heading: 'Profilo alcalino-terroso leggero',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 36 mg/L, magnesio 15 mg/L e sodio 1 mg/L, Lora è un'oligominerale equilibrata da uso quotidiano, adatta anche a chi limita il sale.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (1 mg/L)', 'Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: 'Lora è la stessa cosa di Recoaro?', a: "No: sono due fonti diverse della stessa zona di Recoaro Terme. Lora è imbottigliata da Sanpellegrino ed è distinta dal marchio Recoaro." },
    ],
    relatedIds: ['recoaro', 'lissa', 'fonte-margherita'],
  },
  {
    id: 'sorgente-alba',
    brand: 'Sorgente Alba',
    slug: 'sorgente-alba',
    producer: 'Fonte Margherita 1845 S.r.l.',
    sorgente: 'Sorgente Alba',
    comune: 'Torrebelvicino',
    provincia: 'VI',
    regione: 'Veneto',
    altitudine: null,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 30, ph: 6.74, conducibilita: 52, durezza: null, bicarbonato: 21, calcio: 5.1, magnesio: 2.1, sodio: 2, potassio: 0.4, solfati: 5.9, cloruri: 0.83, nitrati: 3, fluoruri: null, silice: null },
    tagline: "Tra le più leggere del Veneto, in bottiglia di vetro.",
    metaDescription:
      "Acqua Sorgente Alba: residuo fisso 30 mg/L, minimamente mineralizzata vicentina tra le più leggere del Veneto. Analisi dell'etichetta.",
    searchKeywords: ['sorgente alba residuo fisso', 'acqua alba analisi', 'acqua leggera veneto'],
    intro:
      "Sorgente Alba, della stessa casa di [Fonte Margherita](/acque-minerali/fonte-margherita), è una delle acque più leggere del Veneto: residuo fisso appena 30 mg/L. Minimamente mineralizzata, viene proposta soprattutto in bottiglia di vetro.",
    sections: [
      {
        heading: 'Una delle più leggere del Veneto',
        paragraphs: [
          "Con residuo di 30 mg/L, [sodio](/parametri/sodio) basso (2 mg/L) e durezza minima, Alba è un'acqua dal gusto neutro e leggerissimo, adatta a chi cerca il minimo di minerali e poco calcare.",
        ],
      },
    ],
    bestFor: ['Gusto neutro e leggerezza', 'Diete povere di sodio', 'Poco calcare'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Sorgente Alba?', a: 'Circa 30 mg/L a 180 °C: è tra le acque minimamente mineralizzate più leggere del Veneto.' },
    ],
    relatedIds: ['fonte-margherita', 'lissa', 'lauretana'],
  },
  // ===================== FRIULI-VENEZIA GIULIA =====================
  {
    id: 'goccia-di-carnia',
    brand: 'Goccia di Carnia',
    slug: 'goccia-di-carnia',
    producer: 'Goccia di Carnia S.p.A.',
    sorgente: 'Fonte di Fleons (1370 m)',
    comune: 'Forni Avoltri',
    provincia: 'UD',
    regione: 'Friuli-Venezia Giulia',
    altitudine: 1370,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 74, ph: 8.1, conducibilita: 119, durezza: 6.6, bicarbonato: 79, calcio: 17.6, magnesio: 4, sodio: 1.2, potassio: 0.2, solfati: 2.8, cloruri: 0.3, nitrati: 1.5, fluoruri: null, silice: null },
    tagline: "Acqua d'alta quota delle Alpi Carniche, leggera e alcalina.",
    metaDescription:
      "Acqua Goccia di Carnia: residuo fisso 74 mg/L, oligominerale d'alta quota delle Alpi Carniche, leggera e povera di sodio. Analisi dell'etichetta.",
    searchKeywords: ['goccia di carnia residuo fisso', 'acqua goccia di carnia analisi', 'goccia di carnia'],
    intro:
      "Goccia di Carnia nasce dalla Fonte di Fleons, a 1.370 metri sulle Alpi Carniche, a Forni Avoltri, nell'estremo nord del Friuli. È un'oligominerale leggera (residuo fisso 74 mg/L) con [pH](/parametri/ph) basico e [sodio](/parametri/sodio) minimo.",
    sections: [
      {
        heading: 'Leggera, alcalina, iposodica',
        paragraphs: [
          "Con residuo di 74 mg/L, pH 8,1 e sodio 1,2 mg/L, è un'acqua d'alta quota leggera, adatta all'uso quotidiano e alle diete povere di sale. L'origine a quasi 1.400 metri è un tratto distintivo.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (1,2 mg/L)', 'Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Goccia di Carnia?', a: 'Circa 74 mg/L a 180 °C: è un\'acqua oligominerale leggera.' },
    ],
    relatedIds: ['pradis', 'levissima', 'plose'],
  },
  {
    id: 'pradis',
    brand: 'Pradis',
    slug: 'pradis',
    producer: 'Acqua Pradis S.p.A.',
    sorgente: 'Grotte di Pradis (650 m)',
    comune: 'Clauzetto',
    provincia: 'PN',
    regione: 'Friuli-Venezia Giulia',
    altitudine: 650,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 176, ph: 7.5, conducibilita: 265, durezza: null, bicarbonato: null, calcio: 36.4, magnesio: 17, sodio: 0.6, potassio: null, solfati: null, cloruri: 1.2, nitrati: 6, fluoruri: null, silice: null },
    tagline: "L'acqua delle Grotte di Pradis, con sodio minimo.",
    metaDescription:
      "Acqua Pradis: residuo fisso 176 mg/L, oligominerale friulana delle Grotte di Pradis, sodio bassissimo. Analisi dell'etichetta.",
    searchKeywords: ['pradis residuo fisso', 'acqua pradis analisi', 'acqua pradis clauzetto'],
    intro:
      "Pradis nasce nella zona delle suggestive Grotte di Pradis, a Clauzetto, nella pedemontana pordenonese. È un'oligominerale (residuo fisso 176 mg/L) con [sodio](/parametri/sodio) quasi assente e un buon [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Iposodica con magnesio',
        paragraphs: [
          "Con sodio 0,6 mg/L e magnesio 17 mg/L, Pradis unisce leggerezza sul sale a un discreto apporto di magnesio, in un profilo carsico tipico della zona delle grotte.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (0,6 mg/L)', 'Uso quotidiano con magnesio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Pradis?', a: 'Circa 176 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['goccia-di-carnia', 'chiarella', 'lissa'],
  },
  // ===================== EMILIA-ROMAGNA =====================
  {
    id: 'ducale',
    brand: 'Ducale',
    slug: 'ducale',
    producer: "Acque Minerali d'Italia (Norda)",
    sorgente: 'Fonte Tarsogno (1421 m)',
    comune: 'Tornolo',
    provincia: 'PR',
    regione: 'Emilia-Romagna',
    altitudine: 1421,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 57, ph: 8.5, conducibilita: 85, durezza: 4.0, bicarbonato: 43.9, calcio: 13.8, magnesio: 1.3, sodio: 3.1, potassio: 0.4, solfati: 5.2, cloruri: 3.9, nitrati: 1.5, fluoruri: null, silice: 5.3 },
    tagline: "Leggera dell'Appennino parmense, molto alcalina (pH 8,5).",
    metaDescription:
      "Acqua Ducale: residuo fisso 57 mg/L, oligominerale leggera e alcalina (pH 8,5) dell'Appennino parmense. Analisi dell'etichetta.",
    searchKeywords: ['ducale residuo fisso', 'acqua ducale analisi', 'acqua ducale norda'],
    intro:
      "Ducale nasce a oltre 1.400 metri sull'Appennino parmense, a Tornolo. È un'acqua leggera (residuo fisso 57 mg/L) con un [pH](/parametri/ph) notevolmente basico (8,5), tra i più alti tra le acque italiane.",
    sections: [
      {
        heading: 'Leggera e spiccatamente alcalina',
        paragraphs: [
          "Con residuo di 57 mg/L e pH 8,5, Ducale è un'acqua leggera e alcalina. Ricordiamo che «alcalina» descrive solo il pH dell'acqua: non modifica l'equilibrio acido-base del corpo. Il [sodio](/parametri/sodio) basso (3 mg/L) la rende adatta a un uso quotidiano.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', "Chi cerca un'acqua alcalina naturale"],
    cautions: ["«Alcalina» non significa che «alcalinizza» l'organismo."],
    faqs: [
      { q: 'Qual è il residuo fisso di Ducale?', a: 'Circa 57 mg/L a 180 °C: è un\'acqua oligominerale leggera e alcalina (pH 8,5).' },
    ],
    relatedIds: ['alisea', 'lynx', 'recoaro'],
  },
  {
    id: 'alisea',
    brand: 'Alisea',
    slug: 'alisea',
    producer: "Norda / Acque Minerali d'Italia",
    sorgente: 'Reale di Tarsogno (935 m)',
    comune: 'Tornolo',
    provincia: 'PR',
    regione: 'Emilia-Romagna',
    altitudine: 935,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 59, ph: 7.84, conducibilita: null, durezza: null, bicarbonato: 45, calcio: 13, magnesio: 2.2, sodio: 2.9, potassio: 0.3, solfati: 7.4, cloruri: 4.3, nitrati: null, fluoruri: null, silice: null },
    tagline: "Leggera dell'Appennino di Tarsogno, poco mineralizzata.",
    metaDescription:
      "Acqua Alisea: residuo fisso 59 mg/L, oligominerale leggera dell'Appennino parmense. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['alisea residuo fisso', 'acqua alisea analisi', 'alisea tarsogno'],
    intro:
      "Alisea nasce dalla sorgente Reale di Tarsogno, a 935 metri sull'Appennino parmense. È un'acqua leggera (residuo fisso 59 mg/L), poco mineralizzata e a basso [sodio](/parametri/sodio).",
    sections: [
      {
        heading: 'Profilo leggero appenninico',
        paragraphs: [
          "Con residuo di 59 mg/L e minerali contenuti, Alisea è un'acqua leggera adatta all'uso quotidiano, dalla stessa area appenninica di [Ducale](/acque-minerali/ducale).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Alisea?', a: 'Circa 59 mg/L a 180 °C: è un\'acqua oligominerale leggera.' },
    ],
    relatedIds: ['ducale', 'lynx', 'goccia-di-carnia'],
  },
  {
    id: 'lynx',
    brand: 'Lynx',
    slug: 'lynx',
    producer: "Acque Minerali d'Italia",
    sorgente: 'Fonti di San Fermo (Monte Pelpi)',
    comune: 'Bedonia',
    provincia: 'PR',
    regione: 'Emilia-Romagna',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 173, ph: 7.69, conducibilita: 279, durezza: 15.8, bicarbonato: 182, calcio: 55.6, magnesio: 4.6, sodio: 2.6, potassio: 0.3, solfati: 8.3, cloruri: 3.0, nitrati: 2.3, fluoruri: null, silice: 4.9 },
    tagline: "L'oligominerale dell'Appennino parmense, dal Monte Pelpi.",
    metaDescription:
      "Acqua Lynx: residuo fisso 173 mg/L, oligominerale dell'Appennino parmense (Fonti di San Fermo). Analisi dell'etichetta.",
    searchKeywords: ['lynx residuo fisso', 'acqua lynx analisi', 'acqua lynx san fermo'],
    intro:
      "Lynx nasce dalle Fonti di San Fermo, sul Monte Pelpi, a Bedonia nell'Appennino parmense. È un'oligominerale (residuo fisso 173 mg/L) bicarbonato-calcica con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Bicarbonato-calcica leggera',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 56 mg/L e bicarbonati 182 mg/L, Lynx è un'oligominerale equilibrata di media leggerezza, con sodio contenuto (2,6 mg/L) adatta all'uso quotidiano.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Lynx?', a: 'Circa 173 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['ducale', 'alisea', 'chiarella'],
  },
  // ===================== TOSCANA =====================
  {
    id: 'fonte-ilaria',
    brand: 'Fonte Ilaria',
    slug: 'fonte-ilaria',
    producer: 'Fonte Ilaria S.p.A.',
    sorgente: 'Fonte Ilaria',
    comune: 'Pescaglia',
    provincia: 'LU',
    regione: 'Toscana',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 250.1, ph: 7.6, conducibilita: 390, durezza: null, bicarbonato: 215, calcio: 71, magnesio: 5.5, sodio: 11.7, potassio: 1.2, solfati: 10.7, cloruri: 17.9, nitrati: 9.4, fluoruri: null, silice: 16.6 },
    tagline: "L'oligominerale delle colline lucchesi.",
    metaDescription:
      "Acqua Fonte Ilaria: residuo fisso 250 mg/L, oligominerale bicarbonato-calcica delle colline lucchesi. Analisi dell'etichetta.",
    searchKeywords: ['fonte ilaria residuo fisso', 'acqua fonte ilaria analisi', 'acqua ilaria lucca'],
    intro:
      "Fonte Ilaria nasce a Pescaglia, sulle colline lucchesi. È un'oligominerale (residuo fisso 250 mg/L) bicarbonato-calcica di media mineralità, con un contenuto di [calcio](/parametri/durezza-totale) di 71 mg/L.",
    sections: [
      {
        heading: 'Bicarbonato-calcica toscana',
        paragraphs: [
          "Con bicarbonati 215 mg/L e calcio 71 mg/L, Fonte Ilaria è un'oligominerale equilibrata. I [nitrati](/parametri/nitrati) intorno a 9 mg/L sono entro i limiti ma vicini alla soglia dei 10 mg/L di riferimento per i lattanti.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato'],
    cautions: ['Nitrati circa 9 mg/L: vicini alla soglia dei 10 mg/L usata come riferimento per i lattanti.'],
    faqs: [
      { q: 'Qual è il residuo fisso di Fonte Ilaria?', a: 'Circa 250 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['verna', 'fonteviva', 'amorosa'],
  },
  {
    id: 'fonteviva',
    brand: 'Fonteviva',
    slug: 'fonteviva',
    producer: 'EVAM S.p.A.',
    sorgente: 'Monte Belvedere (Alpi Apuane)',
    comune: 'Massa',
    provincia: 'MS',
    regione: 'Toscana',
    altitudine: null,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 49, ph: 6.9, conducibilita: 80, durezza: 2.88, bicarbonato: 28, calcio: 7.4, magnesio: 2.5, sodio: 4.8, potassio: 0.2, solfati: 3.5, cloruri: 9.8, nitrati: 1.5, fluoruri: null, silice: 4.5 },
    tagline: "Leggerissima delle Alpi Apuane, molto diffusa in Toscana.",
    metaDescription:
      "Acqua Fonteviva: residuo fisso 49 mg/L, minimamente mineralizzata delle Alpi Apuane. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['fonteviva residuo fisso', 'acqua fonteviva analisi', 'fonteviva massa'],
    intro:
      "Fonteviva sgorga dal Monte Belvedere, sulle Alpi Apuane, ed è imbottigliata a Massa dall'azienda regionale EVAM. È un'acqua minimamente mineralizzata (residuo fisso 49 mg/L), leggera e molto diffusa in Toscana.",
    sections: [
      {
        heading: 'Leggera e popolare',
        paragraphs: [
          "Con residuo appena sotto i 50 mg/L e [durezza](/parametri/durezza-totale) di 3 gradi francesi, Fonteviva è un'acqua leggera da uso quotidiano, che lascia poco calcare. Il [sodio](/parametri/sodio) è contenuto (5 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', 'Poco calcare in casa'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Fonteviva?', a: 'Circa 49 mg/L a 180 °C: è un\'acqua minimamente mineralizzata.' },
    ],
    relatedIds: ['amorosa', 'fonte-ilaria', 'verna'],
  },
  {
    id: 'verna',
    brand: 'Verna',
    slug: 'verna',
    producer: 'Sorgente Verna S.r.l. (Gruppo Maniva)',
    sorgente: 'Sorgente Verna',
    comune: 'Chiusi della Verna',
    provincia: 'AR',
    regione: 'Toscana',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 165, ph: 7.5, conducibilita: 246, durezza: 12.8, bicarbonato: 141, calcio: 43, magnesio: 5.0, sodio: 6.1, potassio: 0.9, solfati: 21.7, cloruri: 7.1, nitrati: 0.5, fluoruri: 0.1, silice: 9 },
    tagline: "L'acqua del Casentino, dai monti della Verna.",
    metaDescription:
      "Acqua Verna: residuo fisso 165 mg/L, oligominerale del Casentino (monti della Verna). Analisi dell'etichetta e caratteristiche.",
    searchKeywords: ['verna residuo fisso', 'acqua verna analisi', 'acqua verna casentino'],
    intro:
      "Verna nasce a Chiusi della Verna, nel Casentino aretino, nei luoghi francescani del santuario della Verna. È un'oligominerale (residuo fisso 165 mg/L) equilibrata, con [nitrati](/parametri/nitrati) bassissimi.",
    sections: [
      {
        heading: 'Equilibrata con nitrati bassissimi',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 43 mg/L e nitrati sotto 1 mg/L, Verna è un'oligominerale pulita da uso quotidiano. Il [sodio](/parametri/sodio) è basso (6 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Nitrati bassissimi'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Verna?', a: 'Circa 165 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['fonte-ilaria', 'fonteviva', 'amorosa'],
  },
  {
    id: 'amorosa',
    brand: 'Amorosa',
    slug: 'amorosa',
    producer: 'EVAM S.p.A.',
    sorgente: 'Monte Belvedere (Alpi Apuane)',
    comune: 'Massa',
    provincia: 'MS',
    regione: 'Toscana',
    altitudine: null,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 29, ph: 5.5, conducibilita: 44, durezza: null, bicarbonato: 6, calcio: 0.9, magnesio: 1.0, sodio: 5.4, potassio: 0.18, solfati: 0.9, cloruri: 8.6, nitrati: 5.5, fluoruri: null, silice: 3.4 },
    tagline: "Tra le più leggere delle Apuane, quasi priva di calcio.",
    metaDescription:
      "Acqua Amorosa: residuo fisso 29 mg/L, minimamente mineralizzata delle Alpi Apuane, molto leggera. Analisi dell'etichetta.",
    searchKeywords: ['amorosa residuo fisso', 'acqua amorosa analisi', 'acqua amorosa apuane'],
    intro:
      "Amorosa, come Fonteviva imbottigliata da EVAM a Massa dal Monte Belvedere, è una delle acque più leggere delle Apuane: residuo fisso appena 29 mg/L, con pochissimi sali disciolti.",
    sections: [
      {
        heading: 'Leggerissima e povera di calcare',
        paragraphs: [
          "Con residuo di 29 mg/L, [calcio](/parametri/durezza-totale) minimo (0,9 mg/L) e [pH](/parametri/ph) acidulo, Amorosa è un'acqua dal gusto neutro che lascia pochissimo calcare. Un profilo simile a quello delle leggerissime alpine.",
        ],
      },
    ],
    bestFor: ['Gusto neutro e leggerezza', 'Poco calcare'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Amorosa?', a: 'Circa 29 mg/L a 180 °C: è tra le acque minimamente mineralizzate più leggere.' },
    ],
    relatedIds: ['fonteviva', 'sorgente-alba', 'lauretana'],
  },
  // ===================== UMBRIA =====================
  {
    id: 'viva',
    brand: 'Viva',
    slug: 'viva',
    producer: 'S.I.A.Mi. S.p.A.',
    sorgente: 'Borgo Cerreto',
    comune: 'Cerreto di Spoleto',
    provincia: 'PG',
    regione: 'Umbria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Perugia',
    analysis: { residuoFisso: 285, ph: 7.4, conducibilita: null, durezza: null, bicarbonato: 243, calcio: 82.6, magnesio: 9.8, sodio: 2.8, potassio: 0.8, solfati: 52.6, cloruri: 4.6, nitrati: 2.6, fluoruri: 0.2, silice: 8.5 },
    tagline: "L'oligominerale della Valnerina spoletina.",
    metaDescription:
      "Acqua Viva: residuo fisso 285 mg/L, oligominerale della Valnerina umbra, povera di sodio. Analisi dell'etichetta.",
    searchKeywords: ['acqua viva residuo fisso', 'acqua viva analisi', 'acqua viva umbria'],
    intro:
      "Viva nasce a Cerreto di Spoleto, nella Valnerina umbra. È un'oligominerale (residuo fisso 285 mg/L) bicarbonato-calcica, con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Bicarbonato-calcica povera di sodio',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 83 mg/L, bicarbonati 243 mg/L e sodio 2,8 mg/L, Viva è un'oligominerale equilibrata adatta all'uso quotidiano e alle diete iposodiche.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Viva?', a: 'Circa 285 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['sassovivo', 'motette', 'amerino'],
  },
  {
    id: 'motette',
    brand: 'Motette',
    slug: 'motette',
    producer: 'Fonte Motette',
    sorgente: 'Parco del Monte Cucco',
    comune: 'Costacciaro',
    provincia: 'PG',
    regione: 'Umbria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Camerino, 2021',
    analysis: { residuoFisso: 181.1, ph: 7.51, conducibilita: 323, durezza: null, bicarbonato: 169, calcio: 59.3, magnesio: 1.8, sodio: 5.9, potassio: 0.64, solfati: 7.5, cloruri: 10.4, nitrati: 1.76, fluoruri: null, silice: 5.3 },
    tagline: "L'acqua del Monte Cucco, oligominerale appenninica.",
    metaDescription:
      "Acqua Motette: residuo fisso 181 mg/L, oligominerale del Parco del Monte Cucco (Umbria). Analisi dell'etichetta.",
    searchKeywords: ['motette residuo fisso', 'acqua motette analisi', 'acqua motette monte cucco'],
    intro:
      "Motette nasce nel Parco del Monte Cucco, sull'Appennino umbro-marchigiano, nel perugino. È un'oligominerale (residuo fisso 181 mg/L) bicarbonato-calcica con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Profilo appenninico equilibrato',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 59 mg/L e nitrati bassi, Motette è un'oligominerale pulita da uso quotidiano, dalle rocce del massiccio del Monte Cucco.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Motette?', a: 'Circa 181 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['viva', 'sassovivo', 'nerea'],
  },
  {
    id: 'sassovivo',
    brand: 'Sassovivo',
    slug: 'sassovivo',
    producer: 'Fonti di Sassovivo S.p.A.',
    sorgente: "Grotta dell'Orso (Fonte della Fulgide)",
    comune: 'Foligno',
    provincia: 'PG',
    regione: 'Umbria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 208, ph: 7.51, conducibilita: 374, durezza: 18, bicarbonato: 215, calcio: 70, magnesio: 1.3, sodio: 4.2, potassio: 0.45, solfati: 5.5, cloruri: 7.9, nitrati: null, fluoruri: null, silice: 6.4 },
    tagline: "L'oligominerale di Foligno, legata all'abbazia di Sassovivo.",
    metaDescription:
      "Acqua Sassovivo: residuo fisso 208 mg/L, oligominerale bicarbonato-calcica di Foligno. Analisi dell'etichetta.",
    searchKeywords: ['sassovivo residuo fisso', 'acqua sassovivo analisi', 'acqua sassovivo foligno'],
    intro:
      "Sassovivo nasce presso Foligno, nella zona della storica abbazia di Sassovivo. È un'oligominerale (residuo fisso 208 mg/L) bicarbonato-calcica con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Bicarbonato-calcica umbra',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 70 mg/L e bicarbonati 215 mg/L, Sassovivo è un'oligominerale equilibrata di media mineralità, adatta all'uso quotidiano.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Sassovivo?', a: 'Circa 208 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['viva', 'motette', 'amerino'],
  },
  {
    id: 'amerino',
    brand: 'Amerino',
    slug: 'amerino',
    producer: 'Acqua Amerino',
    sorgente: 'Sorgenti di San Francesco',
    comune: 'Acquasparta',
    provincia: 'TR',
    regione: 'Umbria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 481, ph: 7.13, conducibilita: 750, durezza: null, bicarbonato: 429, calcio: 157, magnesio: 8.4, sodio: 11.5, potassio: 1.2, solfati: null, cloruri: 17.8, nitrati: 3, fluoruri: null, silice: 12.6 },
    tagline: "L'oligominerale di Acquasparta, ricca di calcio.",
    metaDescription:
      "Acqua Amerino: residuo fisso 481 mg/L, oligominerale bicarbonato-calcica di Acquasparta (Umbria), ricca di calcio. Analisi dell'etichetta.",
    searchKeywords: ['amerino residuo fisso', 'acqua amerino analisi', 'acqua amerino acquasparta'],
    intro:
      "Amerino nasce ad Acquasparta, nel ternano, terra di acque note fin dal Seicento. È un'oligominerale nella fascia alta (residuo fisso 481 mg/L), bicarbonato-calcica, con un [calcio](/parametri/durezza-totale) elevato (157 mg/L).",
    sections: [
      {
        heading: 'Ricca di calcio',
        paragraphs: [
          "Con calcio 157 mg/L (menzione «calcica») e bicarbonati 429 mg/L, Amerino offre un apporto di calcio importante pur restando oligominerale, con [sodio](/parametri/sodio) contenuto (12 mg/L).",
        ],
      },
    ],
    bestFor: ['Apporto di calcio (157 mg/L)', 'Uso quotidiano'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Amerino?', a: 'Circa 481 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica ricca di calcio.' },
    ],
    relatedIds: ['viva', 'sassovivo', 'cottorella'],
  },
  // ===================== MARCHE =====================
  {
    id: 'nerea',
    brand: 'Nerea',
    slug: 'nerea',
    producer: 'Nerea S.p.A.',
    sorgente: "Sorgente dell'Uccelletto (Sibillini)",
    comune: 'Castelsantangelo sul Nera',
    provincia: 'MC',
    regione: 'Marche',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 161, ph: 7.45, conducibilita: 292, durezza: 14.9, bicarbonato: 173.3, calcio: 58, magnesio: 0.9, sodio: 1.8, potassio: 0.4, solfati: 1.7, cloruri: 5.4, nitrati: 1.1, fluoruri: null, silice: 6.06 },
    tagline: "L'acqua dei Monti Sibillini, quasi senza sodio.",
    metaDescription:
      "Acqua Nerea: residuo fisso 161 mg/L, oligominerale dei Monti Sibillini con sodio bassissimo. Analisi dell'etichetta.",
    searchKeywords: ['nerea residuo fisso', 'acqua nerea analisi', 'acqua nerea sibillini'],
    intro:
      "Nerea nasce alle sorgenti del fiume Nera, nei Monti Sibillini maceratesi. È un'oligominerale (residuo fisso 161 mg/L) con [sodio](/parametri/sodio) minimo (1,8 mg/L) e nitrati bassi.",
    sections: [
      {
        heading: 'Iposodica di montagna',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 58 mg/L, sodio 1,8 mg/L e nitrati 1,1 mg/L, Nerea è un'acqua pulita adatta alle diete iposodiche e all'uso di tutta la famiglia.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (1,8 mg/L)', 'Uso quotidiano di famiglia'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Nerea?', a: 'Circa 161 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['san-cassiano', 'gaia', 'roana'],
  },
  {
    id: 'san-cassiano',
    brand: 'San Cassiano',
    slug: 'san-cassiano',
    producer: 'Togni S.p.A.',
    sorgente: 'San Cassiano',
    comune: 'Fabriano',
    provincia: 'AN',
    regione: 'Marche',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi in etichetta, 2019',
    analysis: { residuoFisso: 252.5, ph: 7.35, conducibilita: 397, durezza: null, bicarbonato: 262.4, calcio: 87, magnesio: 1.3, sodio: 6.8, potassio: 0.4, solfati: null, cloruri: 11.9, nitrati: 2.5, fluoruri: null, silice: 5.9 },
    tagline: "L'oligominerale di Fabriano, bicarbonato-calcica.",
    metaDescription:
      "Acqua San Cassiano: residuo fisso 253 mg/L, oligominerale bicarbonato-calcica di Fabriano. Analisi dell'etichetta.",
    searchKeywords: ['san cassiano residuo fisso', 'acqua san cassiano analisi', 'acqua san cassiano fabriano'],
    intro:
      "San Cassiano nasce nel territorio di Fabriano, nell'anconetano. È un'oligominerale (residuo fisso 253 mg/L) bicarbonato-calcica, dalla stessa casa (Togni) del gruppo di Frasassi.",
    sections: [
      {
        heading: 'Bicarbonato-calcica marchigiana',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 87 mg/L e bicarbonati 262 mg/L, San Cassiano è un'oligominerale equilibrata di media mineralità, con [sodio](/parametri/sodio) basso.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di San Cassiano?', a: 'Circa 253 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['gaia', 'nerea', 'frasassi'],
  },
  {
    id: 'gaia',
    brand: 'Gaia',
    slug: 'gaia',
    producer: 'Industrie Togni S.p.A.',
    sorgente: 'Piagge del Prete (Genga)',
    comune: 'Genga',
    provincia: 'AN',
    regione: 'Marche',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 314, ph: 7.55, conducibilita: 476, durezza: null, bicarbonato: 268.5, calcio: 91.7, magnesio: 3, sodio: 19.5, potassio: 1.7, solfati: 28, cloruri: 19.9, nitrati: 6.2, fluoruri: null, silice: 10.4 },
    tagline: "L'oligominerale di Genga, terra delle Grotte di Frasassi.",
    metaDescription:
      "Acqua Gaia: residuo fisso 314 mg/L, oligominerale di Genga (Grotte di Frasassi). Analisi dell'etichetta.",
    searchKeywords: ['acqua gaia residuo fisso', 'acqua gaia analisi', 'acqua gaia genga'],
    intro:
      "Gaia nasce a Genga, nell'anconetano, la terra delle Grotte di Frasassi. È un'oligominerale (residuo fisso 314 mg/L) bicarbonato-calcica, prodotta dallo stesso gruppo di [Frasassi](/acque-minerali/frasassi).",
    sections: [
      {
        heading: 'Bicarbonato-calcica di Genga',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 92 mg/L e bicarbonati 268 mg/L, Gaia è un'oligominerale di media mineralità. Il [sodio](/parametri/sodio) è moderato (20 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano', 'Apporto di calcio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Gaia?', a: 'Circa 314 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['san-cassiano', 'nerea', 'frasassi'],
  },
  {
    id: 'roana',
    brand: 'Roana',
    slug: 'roana',
    producer: 'S.I.Be. S.r.l.',
    sorgente: 'Panico (Monte Bove)',
    comune: 'Ussita',
    provincia: 'MC',
    regione: 'Marche',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 108.7, ph: null, conducibilita: null, durezza: null, bicarbonato: 115, calcio: 37.6, magnesio: 0.33, sodio: 0.66, potassio: 0.32, solfati: 1.25, cloruri: 1.45, nitrati: 0.79, fluoruri: null, silice: null },
    tagline: "L'acqua di Ussita, dai Sibillini, con sodio minimo.",
    metaDescription:
      "Acqua Roana: residuo fisso 109 mg/L, oligominerale dei Sibillini con sodio bassissimo. Analisi dell'etichetta.",
    searchKeywords: ['roana residuo fisso', 'acqua roana analisi', 'acqua roana ussita'],
    intro:
      "Roana nasce a Ussita, ai piedi del Monte Bove nei Sibillini maceratesi. È un'oligominerale leggera (residuo fisso 109 mg/L) con [sodio](/parametri/sodio) minimo e nitrati bassissimi.",
    sections: [
      {
        heading: 'Leggera e iposodica',
        paragraphs: [
          "Con sodio 0,66 mg/L e nitrati sotto 1 mg/L, Roana è un'acqua pulita e leggera, adatta alle diete povere di sodio e alla famiglia.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (0,66 mg/L)', 'Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Roana?', a: 'Circa 109 mg/L a 180 °C: è un\'acqua oligominerale leggera.' },
    ],
    relatedIds: ['nerea', 'san-cassiano', 'gaia'],
  },
  // ===================== LAZIO (nord) =====================
  {
    id: 'cottorella',
    brand: 'Cottorella',
    slug: 'cottorella',
    producer: 'Fonte Cottorella S.p.A.',
    sorgente: 'Cottorella',
    comune: 'Rieti',
    provincia: 'RI',
    regione: 'Lazio',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi ufficiale, 2021',
    analysis: { residuoFisso: 289.5, ph: 7.05, conducibilita: 463.9, durezza: 27.6, bicarbonato: 317.3, calcio: 99.35, magnesio: 4.38, sodio: 5.57, potassio: 0.5, solfati: 5.68, cloruri: 9.71, nitrati: 0.61, fluoruri: 0.06, silice: 7.22 },
    tagline: "La storica acqua di Rieti, bicarbonato-calcica.",
    metaDescription:
      "Acqua Cottorella: residuo fisso 290 mg/L, oligominerale bicarbonato-calcica di Rieti. Analisi dell'etichetta.",
    searchKeywords: ['cottorella residuo fisso', 'acqua cottorella analisi', 'acqua cottorella rieti'],
    intro:
      "Cottorella è la storica acqua di Rieti, imbottigliata alle porte della città. È un'oligominerale (residuo fisso 290 mg/L) bicarbonato-calcica con [nitrati](/parametri/nitrati) bassissimi.",
    sections: [
      {
        heading: 'Bicarbonato-calcica pulita',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 99 mg/L, bicarbonati 317 mg/L e nitrati sotto 1 mg/L, Cottorella è un'oligominerale equilibrata e pulita, con [sodio](/parametri/sodio) basso (6 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Nitrati bassissimi'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Cottorella?', a: 'Circa 290 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['filette', 'amerino', 'claudia'],
  },
  {
    id: 'claudia',
    brand: 'Claudia',
    slug: 'claudia',
    producer: 'Acqua Claudia S.p.A.',
    sorgente: 'Fonte Claudia',
    comune: 'Anguillara Sabazia',
    provincia: 'RM',
    regione: 'Lazio',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 656, ph: 5.78, conducibilita: 940, durezza: null, bicarbonato: 426, calcio: 101, magnesio: 20.2, sodio: 55, potassio: 71.3, solfati: 43.2, cloruri: 50.8, nitrati: 8.46, fluoruri: 1.45, silice: 81.8 },
    tagline: "L'effervescente naturale del lago di Bracciano, vulcanica.",
    metaDescription:
      "Acqua Claudia: residuo fisso 656 mg/L, effervescente naturale vulcanica del lago di Bracciano. Analisi dell'etichetta.",
    searchKeywords: ['claudia residuo fisso', 'acqua claudia analisi', 'acqua claudia anguillara'],
    intro:
      "Claudia sgorga ad Anguillara Sabazia, sul lago di Bracciano, in area vulcanica sabatina. È un'acqua mediominerale (residuo fisso 656 mg/L) effervescente naturale, con il [potassio](/glossario) alto tipico delle acque vulcaniche laziali.",
    sections: [
      {
        heading: 'Un profilo vulcanico',
        paragraphs: [
          "Con potassio 71 mg/L, [fluoruri](/parametri/fluoruri) 1,45 mg/L (menzione «fluorata») e silice alta, Claudia ha il carattere delle acque vulcaniche. I [fluoruri](/parametri/fluoruri) oltre 1,5 mg/L renderebbero un'acqua non indicata ai bambini piccoli: qui si è appena sotto, ma è un valore da conoscere.",
        ],
      },
    ],
    bestFor: ['Chi ama le bollicine naturali', 'Tavola'],
    cautions: ['Fluoruri circa 1,45 mg/L e nitrati 8,5 mg/L: non indicata per la preparazione degli alimenti dei lattanti.'],
    faqs: [
      { q: 'Qual è il residuo fisso di Claudia?', a: 'Circa 656 mg/L a 180 °C: è un\'acqua mediominerale, effervescente naturale.' },
    ],
    relatedIds: ['acqua-sacra', 'egeria', 'cottorella'],
  },
  {
    id: 'acqua-sacra',
    brand: 'Acqua Sacra',
    slug: 'acqua-sacra',
    producer: 'S.I.V.A.M. S.p.A.',
    sorgente: 'Monte Sacro',
    comune: 'Roma',
    provincia: 'RM',
    regione: 'Lazio',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'analisi 2023',
    analysis: { residuoFisso: 788, ph: 5.56, conducibilita: 1220, durezza: 52.2, bicarbonato: 689.3, calcio: 176.2, magnesio: 19.9, sodio: 56, potassio: 40, solfati: 66.5, cloruri: 42.5, nitrati: 12.3, fluoruri: 1.6, silice: 42.2 },
    tagline: "L'effervescente naturale di Roma, dal quartiere Monte Sacro.",
    metaDescription:
      "Acqua Sacra: residuo fisso 788 mg/L, effervescente naturale romana bicarbonato-calcica e fluorata. Analisi dell'etichetta.",
    searchKeywords: ['acqua sacra residuo fisso', 'acqua sacra analisi', 'acqua sacra roma'],
    intro:
      "Acqua Sacra sgorga a Roma, nella zona di Monte Sacro, da falde di origine vulcanica. È un'acqua mediominerale (residuo fisso 788 mg/L) effervescente naturale, bicarbonato-calcica e fluorata.",
    sections: [
      {
        heading: 'Romana, vulcanica e fluorata',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 176 mg/L (menzione «calcica»), bicarbonati elevati e [fluoruri](/parametri/fluoruri) 1,6 mg/L, Acqua Sacra è un'acqua strutturata dal carattere vulcanico. I [nitrati](/parametri/nitrati) a 12 mg/L e i fluoruri oltre 1,5 mg/L la rendono non adatta ai bambini piccoli.",
        ],
      },
    ],
    bestFor: ['Chi ama le bollicine naturali', 'Apporto di calcio'],
    cautions: ['Fluoruri 1,6 mg/L e nitrati 12 mg/L: non indicata per i lattanti e i bambini piccoli.'],
    faqs: [
      { q: 'Qual è il residuo fisso di Acqua Sacra?', a: 'Circa 788 mg/L a 180 °C: è un\'acqua mediominerale, effervescente naturale e fluorata.' },
    ],
    relatedIds: ['claudia', 'egeria', 'cottorella'],
  },
  // ===================== LAZIO (sud) =====================
  {
    id: 'filette',
    brand: 'Filette',
    slug: 'filette',
    producer: 'Acqua Filette S.r.l.',
    sorgente: 'Fonte Filette',
    comune: 'Guarcino',
    provincia: 'FR',
    regione: 'Lazio',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. Sapienza, 2021',
    analysis: { residuoFisso: 224, ph: 7.36, conducibilita: 293, durezza: null, bicarbonato: 241, calcio: 86, magnesio: 1.2, sodio: 3.3, potassio: null, solfati: 4, cloruri: null, nitrati: 0.2, fluoruri: null, silice: null },
    tagline: "L'oligominerale dei Monti Ernici, premium della Ciociaria.",
    metaDescription:
      "Acqua Filette: residuo fisso 224 mg/L, oligominerale bicarbonato-calcica dei Monti Ernici, nitrati bassissimi. Analisi dell'etichetta.",
    searchKeywords: ['filette residuo fisso', 'acqua filette analisi', 'acqua filette guarcino'],
    intro:
      "Filette nasce a Guarcino, sui Monti Ernici in Ciociaria, non lontano da Fiuggi. È un'oligominerale (residuo fisso 224 mg/L) bicarbonato-calcica con [nitrati](/parametri/nitrati) bassissimi, dal posizionamento premium.",
    sections: [
      {
        heading: 'Bicarbonato-calcica pulita',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 86 mg/L, bicarbonati 241 mg/L e nitrati 0,2 mg/L, Filette è un'oligominerale equilibrata e molto pulita, con [sodio](/parametri/sodio) basso (3 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Nitrati bassissimi'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Filette?', a: 'Circa 224 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['fiuggi', 'cottorella', 'suio'],
  },
  {
    id: 'suio',
    brand: 'Suio',
    slug: 'suio',
    producer: 'PROVES S.r.l.',
    sorgente: 'Fonte Suio',
    comune: 'Castelforte',
    provincia: 'LT',
    regione: 'Lazio',
    altitudine: null,
    type: 'naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 512, ph: 6.97, conducibilita: null, durezza: null, bicarbonato: 573.4, calcio: 135.3, magnesio: 45.16, sodio: 5, potassio: null, solfati: null, cloruri: null, nitrati: null, fluoruri: null, silice: null },
    tagline: "L'acqua termale di Suio, bicarbonato-calcica ricca di magnesio.",
    metaDescription:
      "Acqua Suio: residuo fisso 512 mg/L, mediominerale bicarbonato-calcica termale (Castelforte, LT), ricca di calcio e magnesio. Analisi dell'etichetta.",
    searchKeywords: ['suio residuo fisso', 'acqua suio analisi', 'acqua suio terme'],
    intro:
      "Suio nasce a Castelforte, nel sud pontino, in una zona termale nota fin dall'antichità. È un'acqua mediominerale (residuo fisso 512 mg/L) bicarbonato-calcica, con buon [calcio](/parametri/durezza-totale) e [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Ricca di calcio e magnesio',
        paragraphs: [
          "Con calcio 135 mg/L, magnesio 45 mg/L e bicarbonati 573 mg/L, Suio offre un apporto interessante di minerali. Il [sodio](/parametri/sodio) resta basso (5 mg/L).",
        ],
      },
    ],
    bestFor: ['Apporto di calcio e magnesio', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Suio?', a: 'Circa 512 mg/L a 180 °C: è un\'acqua mediominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['filette', 'amerino', 'amata'],
  },
  // ===================== ABRUZZO =====================
  {
    id: 'gran-guizza',
    brand: 'Gran Guizza',
    slug: 'gran-guizza',
    producer: 'Gran Guizza S.p.A. (Gruppo San Benedetto)',
    sorgente: 'Fonte Valle Reale',
    comune: 'Popoli',
    provincia: 'PE',
    regione: 'Abruzzo',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 307, ph: 7.54, conducibilita: 469, durezza: null, bicarbonato: 317, calcio: 85.8, magnesio: 16, sodio: 3.24, potassio: 1.1, solfati: 17.2, cloruri: 4.9, nitrati: 4, fluoruri: 0.1, silice: null },
    tagline: "L'oligominerale abruzzese di Popoli, bicarbonato-calcica.",
    metaDescription:
      "Acqua Gran Guizza: residuo fisso 307 mg/L, oligominerale abruzzese bicarbonato-calcica (Popoli). Analisi dell'etichetta.",
    searchKeywords: ['gran guizza residuo fisso', 'acqua gran guizza analisi', 'gran guizza popoli'],
    intro:
      "Gran Guizza nasce dalla Fonte Valle Reale a Popoli, nel pescarese, ai piedi del massiccio del Gran Sasso e della Majella. È un'oligominerale (residuo fisso 307 mg/L) bicarbonato-calcica con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Bicarbonato-calcica appenninica',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 86 mg/L, magnesio 16 mg/L e bicarbonati 317 mg/L, Gran Guizza è un'oligominerale equilibrata, con sodio contenuto (3 mg/L), adatta all'uso quotidiano.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Gran Guizza?', a: 'Circa 307 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['santa-croce', 'sepinia', 'cottorella'],
  },
  {
    id: 'santa-croce',
    brand: 'Santa Croce',
    slug: 'santa-croce',
    producer: 'Acqua Santa Croce S.p.A.',
    sorgente: 'Sorgente Santa Croce',
    comune: 'Canistro',
    provincia: 'AQ',
    regione: 'Abruzzo',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 208, ph: 6.7, conducibilita: 351, durezza: null, bicarbonato: null, calcio: 70, magnesio: 7.5, sodio: 5, potassio: null, solfati: 8, cloruri: null, nitrati: 0.5, fluoruri: null, silice: null },
    tagline: "L'oligominerale di Canistro, nella valle Roveto.",
    metaDescription:
      "Acqua Santa Croce: residuo fisso 208 mg/L, oligominerale abruzzese di Canistro con nitrati bassissimi. Analisi dell'etichetta.",
    searchKeywords: ['santa croce residuo fisso', 'acqua santa croce analisi', 'acqua santa croce canistro'],
    intro:
      "Santa Croce nasce a Canistro, nella valle Roveto in provincia dell'Aquila. È un'oligominerale (residuo fisso 208 mg/L) con [nitrati](/parametri/nitrati) bassissimi e [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Pulita e leggera',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 70 mg/L, nitrati 0,5 mg/L e sodio 5 mg/L, Santa Croce è un'oligominerale pulita adatta all'uso quotidiano e alle diete povere di sodio.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Nitrati bassissimi'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Santa Croce?', a: 'Circa 208 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['gran-guizza', 'filette', 'sepinia'],
  },
  // ===================== MOLISE =====================
  {
    id: 'sepinia',
    brand: 'Sepinia',
    slug: 'sepinia',
    producer: 'Terme di Sepino S.p.A.',
    sorgente: 'Sorgente Sepinia',
    comune: 'Sepino',
    provincia: 'CB',
    regione: 'Molise',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 227, ph: 7.75, conducibilita: null, durezza: null, bicarbonato: 264, calcio: 74.7, magnesio: 4.7, sodio: 4, potassio: 1.3, solfati: 3.2, cloruri: 4.5, nitrati: 1.8, fluoruri: 0.1, silice: 7.2 },
    tagline: "L'oligominerale del Matese molisano, dalla romana Saepinum.",
    metaDescription:
      "Acqua Sepinia: residuo fisso 227 mg/L, oligominerale molisana bicarbonato-calcica del Matese. Analisi dell'etichetta.",
    searchKeywords: ['sepinia residuo fisso', 'acqua sepinia analisi', 'acqua sepinia molise'],
    intro:
      "Sepinia nasce a Sepino, nel Matese molisano, presso l'antica città romana di Saepinum. È un'oligominerale (residuo fisso 227 mg/L) bicarbonato-calcica con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Bicarbonato-calcica del Matese',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 75 mg/L e bicarbonati 264 mg/L, Sepinia è un'oligominerale equilibrata di media mineralità, con sodio contenuto (4 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Sepinia?', a: 'Circa 227 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['castellina', 'gran-guizza', 'prata'],
  },
  {
    id: 'castellina',
    brand: 'Castellina',
    slug: 'castellina',
    producer: 'Castellina S.p.A.',
    sorgente: 'Fonte Castellina',
    comune: 'Castelpizzuto',
    provincia: 'IS',
    regione: 'Molise',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 175, ph: null, conducibilita: null, durezza: null, bicarbonato: 179, calcio: 53, magnesio: 2.8, sodio: 2.2, potassio: 0.5, solfati: 2.2, cloruri: 3.5, nitrati: 0.8, fluoruri: null, silice: 5.1 },
    tagline: "L'oligominerale isernina, leggera e povera di sodio.",
    metaDescription:
      "Acqua Castellina: residuo fisso 175 mg/L, oligominerale molisana (Castelpizzuto, IS) povera di sodio. Analisi dell'etichetta.",
    searchKeywords: ['castellina residuo fisso', 'acqua castellina analisi', 'acqua castellina molise'],
    intro:
      "Castellina nasce a Castelpizzuto, nell'isernino, sull'Appennino molisano. È un'oligominerale (residuo fisso 175 mg/L) bicarbonato-calcica con [sodio](/parametri/sodio) minimo e nitrati bassissimi.",
    sections: [
      {
        heading: 'Leggera e pulita',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 53 mg/L, sodio 2,2 mg/L e nitrati 0,8 mg/L, Castellina è un'oligominerale leggera e pulita, adatta all'uso quotidiano e alle diete iposodiche.",
        ],
      },
    ],
    bestFor: ['Diete povere di sodio (2,2 mg/L)', 'Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Castellina?', a: 'Circa 175 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['sepinia', 'santa-croce', 'gran-guizza'],
  },
  // ===================== PUGLIA =====================
  {
    id: 'orsini',
    brand: 'Orsini',
    slug: 'orsini',
    producer: 'Sorgenti Italiane Regionali S.p.A.',
    sorgente: 'Fonte Orsinella (Alta Murgia)',
    comune: 'Poggiorsini',
    provincia: 'BA',
    regione: 'Puglia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 298, ph: 7.5, conducibilita: null, durezza: null, bicarbonato: 248, calcio: 60, magnesio: 23, sodio: 11, potassio: null, solfati: 9, cloruri: 17, nitrati: null, fluoruri: null, silice: null },
    tagline: "L'unica minerale pugliese, dal Parco dell'Alta Murgia.",
    metaDescription:
      "Acqua Orsini: residuo fisso 298 mg/L, oligominerale pugliese del Parco dell'Alta Murgia. Analisi dell'etichetta.",
    searchKeywords: ['orsini residuo fisso', 'acqua orsini analisi', 'acqua orsini puglia'],
    intro:
      "Orsini nasce a Poggiorsini, nel Parco Nazionale dell'Alta Murgia barese: una rarità, perché la Puglia ha pochissime sorgenti di acqua minerale. È un'oligominerale (residuo fisso 298 mg/L) bicarbonato-calcica con un buon [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'La minerale delle Murge',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 60 mg/L, magnesio 23 mg/L e bicarbonati 248 mg/L, Orsini è un'oligominerale equilibrata, con [sodio](/parametri/sodio) contenuto (11 mg/L), che nasce dall'acquifero carsico delle Murge.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Apporto di magnesio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Orsini?', a: 'Circa 298 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['amata', 'sepinia', 'sorgesana'],
  },
  {
    id: 'amata',
    brand: 'Amata',
    slug: 'amata',
    producer: 'Castello S.r.l.',
    sorgente: 'Fonte Castello (Murge)',
    comune: 'Casamassima',
    provincia: 'BA',
    regione: 'Puglia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 471.8, ph: 6.73, conducibilita: 846, durezza: null, bicarbonato: 485, calcio: 94.46, magnesio: 44.96, sodio: 21.42, potassio: 2.42, solfati: 6.13, cloruri: 31.66, nitrati: null, fluoruri: 0.18, silice: 17.12 },
    tagline: "L'oligominerale barese delle Murge, ricca di calcio e magnesio.",
    metaDescription:
      "Acqua Amata: residuo fisso 472 mg/L, oligominerale pugliese delle Murge, ricca di calcio e magnesio. Analisi dell'etichetta.",
    searchKeywords: ['amata residuo fisso', 'acqua amata analisi', 'acqua amata puglia'],
    intro:
      "Amata nasce a Casamassima, nel barese, dall'acquifero carsico delle Murge. È un'oligominerale nella fascia alta (residuo fisso 472 mg/L), bicarbonato-calcica, con buon [calcio](/parametri/durezza-totale) e [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Bicarbonato-calcica ricca',
        paragraphs: [
          "Con calcio 94 mg/L, magnesio 45 mg/L e bicarbonati 485 mg/L, Amata offre un apporto interessante di minerali, con [sodio](/parametri/sodio) moderato (21 mg/L).",
        ],
      },
    ],
    bestFor: ['Apporto di calcio e magnesio', 'Uso quotidiano'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Amata?', a: 'Circa 472 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['orsini', 'suio', 'sorgesana'],
  },
  // ===================== CAMPANIA =====================
  {
    id: 'prata',
    brand: 'Prata',
    slug: 'prata',
    producer: 'SGAM S.p.A.',
    sorgente: 'Fonte Prata',
    comune: 'Pratella',
    provincia: 'CE',
    regione: 'Campania',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 430, ph: 7.1, conducibilita: 690, durezza: null, bicarbonato: 500, calcio: 142, magnesio: 12.5, sodio: 3.6, potassio: 1, solfati: 4.6, cloruri: 6, nitrati: 2.8, fluoruri: 0.15, silice: 4 },
    tagline: "L'oligominerale del Matese casertano, ricca di calcio.",
    metaDescription:
      "Acqua Prata: residuo fisso 430 mg/L, oligominerale campana bicarbonato-calcica ricca di calcio. Analisi dell'etichetta.",
    searchKeywords: ['prata residuo fisso', 'acqua prata analisi', 'acqua prata pratella'],
    intro:
      "Prata nasce a Pratella, nel Matese casertano, la stessa zona di [Lete](/acque-minerali/lete). È un'oligominerale nella fascia alta (residuo fisso 430 mg/L), bicarbonato-calcica, con [calcio](/parametri/durezza-totale) importante (142 mg/L) e [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Ricca di calcio, povera di sodio',
        paragraphs: [
          "Con calcio 142 mg/L, bicarbonati 500 mg/L e sodio 3,6 mg/L, Prata offre un buon apporto di calcio in un profilo adatto anche alle diete iposodiche.",
        ],
      },
    ],
    bestFor: ['Apporto di calcio (142 mg/L)', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Prata?', a: 'Circa 430 mg/L a 180 °C: è un\'acqua oligominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['sorgesana', 'lete', 'natia'],
  },
  {
    id: 'sorgesana',
    brand: 'Sorgesana',
    slug: 'sorgesana',
    producer: 'Acqua Sorgesana',
    sorgente: 'Fonte Sorgesana',
    comune: 'Pratella',
    provincia: 'CE',
    regione: 'Campania',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 260, ph: 7.02, conducibilita: 460, durezza: null, bicarbonato: 320, calcio: 88, magnesio: 11.55, sodio: 3.4, potassio: 1, solfati: null, cloruri: 5.4, nitrati: 3.2, fluoruri: 0.1, silice: 4.1 },
    tagline: "L'oligominerale del Matese, iposodica.",
    metaDescription:
      "Acqua Sorgesana: residuo fisso 260 mg/L, oligominerale campana bicarbonato-calcica e povera di sodio. Analisi dell'etichetta.",
    searchKeywords: ['sorgesana residuo fisso', 'acqua sorgesana analisi', 'acqua sorgesana'],
    intro:
      "Sorgesana nasce a Pratella, nel Matese casertano. È un'oligominerale (residuo fisso 260 mg/L) bicarbonato-calcica con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Bicarbonato-calcica leggera',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 88 mg/L, bicarbonati 320 mg/L e sodio 3,4 mg/L, Sorgesana è un'oligominerale equilibrata adatta all'uso quotidiano e alle diete iposodiche.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano equilibrato', 'Diete povere di sodio'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Sorgesana?', a: 'Circa 260 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['prata', 'lete', 'natia'],
  },
  {
    id: 'vitologatti',
    brand: 'Vitologatti',
    slug: 'vitologatti',
    producer: 'S.I.A.B. S.n.c.',
    sorgente: 'Sorgente Vitologatti',
    comune: 'Salerno',
    provincia: 'SA',
    regione: 'Campania',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'ricca-di-sali',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 1650, ph: 6.6, conducibilita: null, durezza: null, bicarbonato: 2105, calcio: 440, magnesio: 147, sodio: 22, potassio: 8, solfati: 28.5, cloruri: 21, nitrati: 4.9, fluoruri: null, silice: 5 },
    tagline: "Ricca di sali del salernitano, bicarbonato-calcico-magnesiaca.",
    metaDescription:
      "Acqua Vitologatti: residuo fisso 1650 mg/L, ricca di sali effervescente naturale del salernitano, ricchissima di calcio e magnesio. Analisi dell'etichetta.",
    searchKeywords: ['vitologatti residuo fisso', 'acqua vitologatti analisi', 'acqua vitologatti salerno'],
    intro:
      "Vitologatti sgorga nel salernitano ed è un'acqua molto particolare: ricca di sali (residuo fisso 1650 mg/L), effervescente naturale, bicarbonato-calcico-magnesiaca, con valori di [calcio](/parametri/durezza-totale) e [magnesio](/parametri/durezza-totale) tra i più alti in assoluto.",
    sections: [
      {
        heading: "Un'acqua fortemente mineralizzata",
        paragraphs: [
          "Con calcio 440 mg/L, magnesio 147 mg/L e bicarbonati oltre 2000 mg/L, Vitologatti è un'acqua funzionale, non da tavola: si beve per il suo apporto minerale, in quantità misurate. Il [sodio](/parametri/sodio) resta basso (22 mg/L).",
        ],
      },
    ],
    bestFor: ['Apporto elevato di calcio e magnesio a scopo mirato'],
    cautions: ["Molto mineralizzata: non è un'acqua «da tavola» per grandi quantità quotidiane."],
    faqs: [
      { q: 'Qual è il residuo fisso di Vitologatti?', a: 'Circa 1650 mg/L a 180 °C: è un\'acqua ricca di sali minerali, effervescente naturale.' },
    ],
    relatedIds: ['fonte-essenziale', 'sveva', 'san-martino'],
  },
  {
    id: 'natia',
    brand: 'Natia',
    slug: 'natia',
    producer: 'Ferrarelle S.p.A.',
    sorgente: 'Roccamonfina (Riardo)',
    comune: 'Riardo',
    provincia: 'CE',
    regione: 'Campania',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 312, ph: null, conducibilita: null, durezza: null, bicarbonato: 213, calcio: 35, magnesio: 4, sodio: 32, potassio: 30, solfati: 3, cloruri: 16, nitrati: 8, fluoruri: 0.9, silice: 84 },
    tagline: "La naturale liscia di Riardo, dalla stessa falda di Ferrarelle.",
    metaDescription:
      "Acqua Natia: residuo fisso 312 mg/L, oligominerale naturale di Riardo (Ferrarelle). Analisi dell'etichetta.",
    searchKeywords: ['natia residuo fisso', 'acqua natia analisi', 'natia ferrarelle'],
    intro:
      "Natia è l'acqua naturale (liscia) prodotta da Ferrarelle nella stessa area vulcanica di Riardo, in Campania. È un'oligominerale (residuo fisso 312 mg/L): la versione senza bollicine del territorio di [Ferrarelle](/acque-minerali/ferrarelle).",
    sections: [
      {
        heading: 'La liscia del vulcano di Roccamonfina',
        paragraphs: [
          "A differenza della gassata Ferrarelle, Natia è naturale e meno mineralizzata. Il [potassio](/glossario) (30 mg/L) e la silice alta ricordano l'origine vulcanica. I [nitrati](/parametri/nitrati) a 8 mg/L sono entro i limiti ma da considerare per i più piccoli.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano', 'Chi vuole la liscia del territorio di Ferrarelle'],
    cautions: ['Nitrati circa 8 mg/L: vicini alla soglia di riferimento per i lattanti.'],
    faqs: [
      { q: 'Natia è la versione naturale di Ferrarelle?', a: 'È l\'acqua naturale (liscia) prodotta da Ferrarelle nella stessa area di Riardo; è un marchio distinto dalla gassata Ferrarelle.' },
    ],
    relatedIds: ['ferrarelle', 'prata', 'sorgesana'],
  },
  // ===================== BASILICATA =====================
  {
    id: 'sveva',
    brand: 'Sveva',
    slug: 'sveva',
    producer: 'Fonti del Vulture S.r.l. (Coca-Cola HBC)',
    sorgente: 'Fonte Sveva (Vulture)',
    comune: 'Rionero in Vulture',
    provincia: 'PZ',
    regione: 'Basilicata',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 1356, ph: 6.25, conducibilita: 1780, durezza: null, bicarbonato: 1080, calcio: 184, magnesio: 32, sodio: null, potassio: 52, solfati: null, cloruri: null, nitrati: 4.3, fluoruri: 1.2, silice: null },
    tagline: "L'effervescente naturale del Vulture, bicarbonato-calcica.",
    metaDescription:
      "Acqua Sveva: residuo fisso 1356 mg/L, mediominerale effervescente naturale del Monte Vulture, ricca di calcio. Analisi dell'etichetta.",
    searchKeywords: ['sveva residuo fisso', 'acqua sveva analisi', 'acqua sveva vulture'],
    intro:
      "Sveva sgorga sul Monte Vulture, in Basilicata, la terra delle acque effervescenti naturali. È un'acqua mediominerale piuttosto ricca (residuo fisso 1356 mg/L), bicarbonato-calcica, con le tipiche bollicine naturali del Vulture.",
    sections: [
      {
        heading: 'Il carattere del Vulture',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 184 mg/L (menzione «calcica»), bicarbonati oltre 1000 mg/L e [fluoruri](/parametri/fluoruri) 1,2 mg/L, Sveva è un'acqua strutturata dalle bollicine naturali di origine vulcanica. Un profilo simile a quello di [Gaudianello](/acque-minerali/gaudianello) e delle altre acque del Vulture.",
        ],
      },
    ],
    bestFor: ['Apporto di calcio', 'Chi ama le bollicine naturali'],
    cautions: ["Acqua mineralizzata: più «da pasto» che per grandi quantità."],
    faqs: [
      { q: 'Qual è il residuo fisso di Sveva?', a: 'Circa 1356 mg/L a 180 °C: è un\'acqua mediominerale, effervescente naturale del Vulture.' },
    ],
    relatedIds: ['gaudianello', 'lilia', 'fonte-itala'],
  },
  {
    id: 'lilia',
    brand: 'Lilia',
    slug: 'lilia',
    producer: 'Fonti del Vulture S.r.l. (Coca-Cola HBC)',
    sorgente: 'Fonte Lilia (Monticchio Bagni)',
    comune: 'Rionero in Vulture',
    provincia: 'PZ',
    regione: 'Basilicata',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 383, ph: 6.33, conducibilita: 468, durezza: null, bicarbonato: 268, calcio: 33.9, magnesio: 10.5, sodio: null, potassio: 29.1, solfati: null, cloruri: null, nitrati: 6, fluoruri: 0.9, silice: null },
    tagline: "L'effervescente naturale leggera di Monticchio, sul Vulture.",
    metaDescription:
      "Acqua Lilia: residuo fisso 383 mg/L, oligominerale effervescente naturale del Monte Vulture. Analisi dell'etichetta.",
    searchKeywords: ['lilia residuo fisso', 'acqua lilia analisi', 'acqua lilia vulture'],
    intro:
      "Lilia nasce a Monticchio Bagni, sul Monte Vulture lucano, la stessa zona di [Gaudianello](/acque-minerali/gaudianello). È un'oligominerale (residuo fisso 383 mg/L) effervescente naturale, più leggera della vicina Sveva.",
    sections: [
      {
        heading: 'Effervescente naturale di media leggerezza',
        paragraphs: [
          "Con bicarbonati 268 mg/L e [potassio](/glossario) 29 mg/L, Lilia ha il carattere vulcanico del Vulture ma in un profilo più contenuto rispetto alle acque più mineralizzate della zona. Le bollicine sono naturali.",
        ],
      },
    ],
    bestFor: ['Chi ama le bollicine naturali leggere', 'Tavola'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Lilia?', a: 'Circa 383 mg/L a 180 °C: è un\'acqua oligominerale, effervescente naturale.' },
    ],
    relatedIds: ['sveva', 'gaudianello', 'fonte-itala'],
  },
  {
    id: 'fonte-itala',
    brand: 'Fonte Itala',
    slug: 'fonte-itala',
    producer: 'Fonte Itala S.r.l.',
    sorgente: 'Fonte Itala',
    comune: 'Atella',
    provincia: 'PZ',
    regione: 'Basilicata',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 478.8, ph: 6.0, conducibilita: null, durezza: null, bicarbonato: 305, calcio: 48.05, magnesio: 12.63, sodio: null, potassio: null, solfati: 21.87, cloruri: 17.73, nitrati: null, fluoruri: null, silice: null },
    tagline: "L'effervescente naturale di Atella, sul versante del Vulture.",
    metaDescription:
      "Acqua Fonte Itala: residuo fisso 479 mg/L, oligominerale effervescente naturale lucana. Analisi dell'etichetta.",
    searchKeywords: ['fonte itala residuo fisso', 'acqua fonte itala analisi', 'fonte itala atella'],
    intro:
      "Fonte Itala nasce ad Atella, sul versante del Monte Vulture in Basilicata. È un'oligominerale nella fascia alta (residuo fisso 479 mg/L), effervescente naturale, bicarbonato-calcica.",
    sections: [
      {
        heading: 'Bollicine naturali lucane',
        paragraphs: [
          "Con bicarbonati 305 mg/L e [calcio](/parametri/durezza-totale) 48 mg/L, Fonte Itala ha le bollicine naturali tipiche del Vulture in un profilo di media mineralità.",
        ],
      },
    ],
    bestFor: ['Chi ama le bollicine naturali', 'Tavola'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Fonte Itala?', a: 'Circa 479 mg/L a 180 °C: è un\'acqua oligominerale, effervescente naturale.' },
    ],
    relatedIds: ['sveva', 'lilia', 'gaudianello'],
  },
  // ===================== CALABRIA =====================
  {
    id: 'mangiatorella',
    brand: 'Mangiatorella',
    slug: 'mangiatorella',
    producer: 'Sorgente Mangiatorella S.p.A.',
    sorgente: 'Mangiatorella',
    comune: 'Sorbo San Basile',
    provincia: 'CZ',
    regione: 'Calabria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 68.6, ph: 6.04, conducibilita: 85.5, durezza: null, bicarbonato: 30.9, calcio: 6.7, magnesio: 1.4, sodio: 9.7, potassio: 0.6, solfati: 4.7, cloruri: 10.1, nitrati: 0.07, fluoruri: 0.11, silice: null },
    tagline: "La leggerissima della Sila, storica acqua calabrese.",
    metaDescription:
      "Acqua Mangiatorella: residuo fisso 69 mg/L, oligominerale leggera della Sila con nitrati quasi assenti. Analisi dell'etichetta.",
    searchKeywords: ['mangiatorella residuo fisso', 'acqua mangiatorella analisi', 'mangiatorella sila'],
    intro:
      "Mangiatorella sgorga a Sorbo San Basile, ai piedi della Sila catanzarese, ed è una delle acque calabresi storiche. È un'oligominerale leggera (residuo fisso 69 mg/L) con [nitrati](/parametri/nitrati) quasi assenti.",
    sections: [
      {
        heading: 'Leggera e purissima',
        paragraphs: [
          "Con residuo di 69 mg/L, nitrati 0,07 mg/L (tra i più bassi in assoluto) e [pH](/parametri/ph) acidulo, Mangiatorella è un'acqua leggera e molto pulita, adatta all'uso quotidiano e ai più piccoli.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', 'Nitrati quasi assenti'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Mangiatorella?', a: 'Circa 69 mg/L a 180 °C: è un\'acqua oligominerale leggera.' },
    ],
    relatedIds: ['calabria', 'fontenoce', 'fabrizia'],
  },
  {
    id: 'calabria',
    brand: 'Calabria',
    slug: 'acqua-calabria',
    producer: 'Calabria Acqua Minerale S.a.s.',
    sorgente: 'Fonte della Madonnina',
    comune: 'Girifalco',
    provincia: 'CZ',
    regione: 'Calabria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 92, ph: 7.5, conducibilita: 121, durezza: 4.5, bicarbonato: 45.7, calcio: 10.8, magnesio: 4.3, sodio: 10.3, potassio: 1.4, solfati: 8.7, cloruri: 15.2, nitrati: null, fluoruri: 0.1, silice: 16.6 },
    tagline: "Leggera del catanzarese, dalla Fonte della Madonnina.",
    metaDescription:
      "Acqua Calabria: residuo fisso 92 mg/L, oligominerale leggera di Girifalco (CZ). Analisi dell'etichetta.",
    searchKeywords: ['acqua calabria residuo fisso', 'acqua calabria analisi', 'acqua calabria girifalco'],
    intro:
      "L'acqua Calabria nasce a Girifalco, nel catanzarese, dalla Fonte della Madonnina. È un'oligominerale leggera (residuo fisso 92 mg/L) a bassa durezza.",
    sections: [
      {
        heading: 'Leggera da uso quotidiano',
        paragraphs: [
          "Con residuo di 92 mg/L e [durezza](/parametri/durezza-totale) di 4,5 gradi francesi, l'acqua Calabria è leggera e lascia poco calcare. Il [sodio](/parametri/sodio) è moderato (10 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero', 'Poco calcare'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso dell\'acqua Calabria?', a: 'Circa 92 mg/L a 180 °C: è un\'acqua oligominerale leggera.' },
    ],
    relatedIds: ['mangiatorella', 'fontenoce', 'fabrizia'],
  },
  {
    id: 'fontenoce',
    brand: 'Fontenoce',
    slug: 'fontenoce',
    producer: 'Sila S.p.A.',
    sorgente: 'Fontenoce',
    comune: 'Parenti',
    provincia: 'CS',
    regione: 'Calabria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 102.5, ph: 7.69, conducibilita: 146, durezza: 6.6, bicarbonato: 75.7, calcio: 17.1, magnesio: 5.3, sodio: 7.1, potassio: 1.6, solfati: 8.1, cloruri: 7.1, nitrati: 1.7, fluoruri: 0.15, silice: null },
    tagline: "La leggera della Sila cosentina.",
    metaDescription:
      "Acqua Fontenoce: residuo fisso 103 mg/L, oligominerale leggera della Sila cosentina. Analisi dell'etichetta.",
    searchKeywords: ['fontenoce residuo fisso', 'acqua fontenoce analisi', 'fontenoce sila'],
    intro:
      "Fontenoce sgorga a Parenti, nella Sila cosentina. È un'oligominerale leggera (residuo fisso 103 mg/L) equilibrata, adatta all'uso quotidiano.",
    sections: [
      {
        heading: 'Leggera di montagna',
        paragraphs: [
          "Con residuo di 103 mg/L, [durezza](/parametri/durezza-totale) di 7 gradi francesi e [sodio](/parametri/sodio) basso (7 mg/L), Fontenoce è un'acqua leggera da uso quotidiano, dalle montagne della Sila.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Fontenoce?', a: 'Circa 103 mg/L a 180 °C: è un\'acqua oligominerale leggera.' },
    ],
    relatedIds: ['mangiatorella', 'calabria', 'fabrizia'],
  },
  {
    id: 'fabrizia',
    brand: 'Fabrizia',
    slug: 'fabrizia',
    producer: 'Fabriella Group S.r.l.',
    sorgente: "Passo dell'Abate - Serricella",
    comune: 'Fabrizia',
    provincia: 'VV',
    regione: 'Calabria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 74, ph: 6.5, conducibilita: null, durezza: null, bicarbonato: 39.66, calcio: 4, magnesio: 10.7, sodio: 10.88, potassio: null, solfati: 8, cloruri: 14.2, nitrati: null, fluoruri: null, silice: null },
    tagline: "La leggera delle Serre vibonesi, con magnesio.",
    metaDescription:
      "Acqua Fabrizia: residuo fisso 74 mg/L, oligominerale leggera delle Serre calabresi. Analisi dell'etichetta.",
    searchKeywords: ['fabrizia residuo fisso', 'acqua fabrizia analisi', 'acqua fabrizia calabria'],
    intro:
      "Fabrizia nasce nelle Serre vibonesi, in Calabria, al Passo dell'Abate. È un'oligominerale leggera (residuo fisso 74 mg/L) in cui, curiosamente, il [magnesio](/parametri/durezza-totale) supera il calcio.",
    sections: [
      {
        heading: 'Leggera e magnesiaca nel rapporto',
        paragraphs: [
          "Con residuo di 74 mg/L, magnesio 11 mg/L e calcio appena 4 mg/L, Fabrizia ha un profilo insolito in cui prevale il magnesio. Il [sodio](/parametri/sodio) è moderato (11 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Fabrizia?', a: 'Circa 74 mg/L a 180 °C: è un\'acqua oligominerale leggera.' },
    ],
    relatedIds: ['mangiatorella', 'fontenoce', 'calabria'],
  },
  // ===================== SICILIA =====================
  {
    id: 'geraci',
    brand: 'Geraci',
    slug: 'geraci',
    producer: 'Terme di Geraci Siculo S.p.A.',
    sorgente: 'Geraci',
    comune: 'Geraci Siculo',
    provincia: 'PA',
    regione: 'Sicilia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 69, ph: 6.8, conducibilita: 92, durezza: null, bicarbonato: 21, calcio: 5.7, magnesio: 2.64, sodio: 5.73, potassio: null, solfati: 18, cloruri: 11, nitrati: null, fluoruri: null, silice: 8.43 },
    tagline: "La leggerissima delle Madonie, in Sicilia.",
    metaDescription:
      "Acqua Geraci: residuo fisso 69 mg/L, oligominerale leggera delle Madonie (Sicilia). Analisi dell'etichetta.",
    searchKeywords: ['geraci residuo fisso', 'acqua geraci analisi', 'acqua geraci madonie'],
    intro:
      "Geraci sgorga a Geraci Siculo, nel cuore delle Madonie palermitane. È un'oligominerale leggera (residuo fisso 69 mg/L), tra le poche minerali siciliane a larga diffusione.",
    sections: [
      {
        heading: 'Leggera di montagna',
        paragraphs: [
          "Con residuo di 69 mg/L e [pH](/parametri/ph) acidulo, Geraci è un'acqua leggera dal gusto pulito, adatta all'uso quotidiano. Il [sodio](/parametri/sodio) è basso (6 mg/L).",
        ],
      },
    ],
    bestFor: ['Uso quotidiano leggero'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Geraci?', a: 'Circa 69 mg/L a 180 °C: è un\'acqua oligominerale leggera.' },
    ],
    relatedIds: ['sabrinella', 'milicia', 'mangiatorella'],
  },
  {
    id: 'milicia',
    brand: 'Milicia',
    slug: 'milicia',
    producer: 'La Fonte S.r.l.',
    sorgente: 'Milicia',
    comune: 'Altavilla Milicia',
    provincia: 'PA',
    regione: 'Sicilia',
    altitudine: null,
    type: 'naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 503.7, ph: 7.4, conducibilita: 830, durezza: null, bicarbonato: 264.2, calcio: 63.6, magnesio: 39.2, sodio: null, potassio: 2.6, solfati: 35.9, cloruri: null, nitrati: null, fluoruri: 0.36, silice: 11.4 },
    tagline: "La mediominerale del palermitano, ricca di magnesio.",
    metaDescription:
      "Acqua Milicia: residuo fisso 504 mg/L, mediominerale siciliana bicarbonato-calcica ricca di magnesio. Analisi dell'etichetta.",
    searchKeywords: ['milicia residuo fisso', 'acqua milicia analisi', 'acqua milicia sicilia'],
    intro:
      "Milicia nasce ad Altavilla Milicia, nel palermitano. È un'acqua al confine tra oligominerale e mediominerale (residuo fisso 504 mg/L), bicarbonato-calcica con un buon [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Bicarbonato-calcica con magnesio',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 64 mg/L, magnesio 39 mg/L e bicarbonati 264 mg/L, Milicia offre un buon apporto di minerali, in particolare magnesio, in un profilo di media mineralità.",
        ],
      },
    ],
    bestFor: ['Apporto di magnesio', 'Uso quotidiano'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Milicia?', a: 'Circa 504 mg/L a 180 °C: è un\'acqua mediominerale, bicarbonato-calcica.' },
    ],
    relatedIds: ['sabrinella', 'geraci', 'san-giorgio'],
  },
  {
    id: 'sabrinella',
    brand: 'Sabrinella',
    slug: 'sabrinella',
    producer: 'La Fonte S.r.l.',
    sorgente: 'Sabrinella',
    comune: 'Altavilla Milicia',
    provincia: 'PA',
    regione: 'Sicilia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 353.7, ph: 7.91, conducibilita: 552, durezza: null, bicarbonato: 339.3, calcio: 56.7, magnesio: 38.7, sodio: 21, potassio: 2, solfati: null, cloruri: 24.4, nitrati: null, fluoruri: null, silice: null },
    tagline: "L'oligominerale del palermitano, bicarbonato-calcica.",
    metaDescription:
      "Acqua Sabrinella: residuo fisso 354 mg/L, oligominerale siciliana bicarbonato-calcica con magnesio. Analisi dell'etichetta.",
    searchKeywords: ['sabrinella residuo fisso', 'acqua sabrinella analisi', 'acqua sabrinella sicilia'],
    intro:
      "Sabrinella nasce ad Altavilla Milicia, nel palermitano, dalla stessa casa di [Milicia](/acque-minerali/milicia). È un'oligominerale (residuo fisso 354 mg/L) bicarbonato-calcica con un buon [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Bicarbonato-calcica siciliana',
        paragraphs: [
          "Con [calcio](/parametri/durezza-totale) 57 mg/L, magnesio 39 mg/L e bicarbonati 339 mg/L, Sabrinella è un'oligominerale di media mineralità dal [pH](/parametri/ph) leggermente basico.",
        ],
      },
    ],
    bestFor: ['Apporto di magnesio', 'Uso quotidiano'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di Sabrinella?', a: 'Circa 354 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['milicia', 'geraci', 'san-giorgio'],
  },
  // ===================== SARDEGNA =====================
  {
    id: 'san-martino',
    brand: 'San Martino',
    slug: 'san-martino',
    producer: 'San Martino S.r.l. (Gruppo San Benedetto)',
    sorgente: 'San Martino',
    comune: 'Codrongianos',
    provincia: 'SS',
    regione: 'Sardegna',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'ricca-di-sali',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 3098, ph: 6.66, conducibilita: 3594, durezza: null, bicarbonato: 2461, calcio: 211, magnesio: 66, sodio: 750, potassio: 99, solfati: 281, cloruri: 290.69, nitrati: null, fluoruri: null, silice: null },
    tagline: "L'iperminerale sarda: la più mineralizzata di questa raccolta.",
    metaDescription:
      "Acqua San Martino: residuo fisso 3098 mg/L, ricca di sali effervescente naturale della Sardegna, iperminerale. Analisi dell'etichetta e uso.",
    searchKeywords: ['san martino residuo fisso', 'acqua san martino analisi', 'acqua san martino sardegna'],
    intro:
      "San Martino, da Codrongianos nel sassarese, è l'acqua più mineralizzata di questa raccolta: un residuo fisso di 3098 mg/L, oltre il doppio della soglia delle acque «ricche di sali». È un'effervescente naturale sodico-bicarbonata, usata a scopo funzionale.",
    sections: [
      {
        heading: "Un'iperminerale da usare con criterio",
        paragraphs: [
          "Con [sodio](/parametri/sodio) 750 mg/L (menzione «sodica»), bicarbonati 2461 mg/L e [cloruri](/parametri/cloruri) 291 mg/L, San Martino è un'acqua estrema, quasi «medicinale», che si beve in piccole quantità per il suo carattere digestivo. L'alto sodio la rende sconsigliata a chi deve limitare il sale.",
        ],
      },
    ],
    bestFor: ['Uso funzionale a piccole dosi', 'Chi cerca un\'acqua fortemente mineralizzata'],
    cautions: ['Sodio altissimo (750 mg/L): non adatta alle diete iposodiche né al consumo quotidiano indifferenziato.'],
    faqs: [
      { q: 'Qual è il residuo fisso di San Martino?', a: 'Circa 3098 mg/L a 180 °C: è tra le acque più ricche di sali in commercio in Italia.' },
    ],
    relatedIds: ['fonte-essenziale', 'vitologatti', 'san-leonardo'],
  },
  {
    id: 'san-leonardo',
    brand: 'San Leonardo',
    slug: 'san-leonardo',
    producer: 'Fonti di San Leonardo S.p.A.',
    sorgente: 'Siete Fuentes (620 m)',
    comune: 'Santu Lussurgiu',
    provincia: 'OR',
    regione: 'Sardegna',
    altitudine: 620,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 139, ph: null, conducibilita: null, durezza: null, bicarbonato: 40.9, calcio: 8.2, magnesio: 5.3, sodio: 27.5, potassio: 0.6, solfati: 1.9, cloruri: 42.1, nitrati: 6.4, fluoruri: null, silice: 8.8 },
    tagline: "L'oligominerale del Montiferru, in Sardegna.",
    metaDescription:
      "Acqua San Leonardo: residuo fisso 139 mg/L, oligominerale sarda di Santu Lussurgiu. Analisi dell'etichetta.",
    searchKeywords: ['san leonardo residuo fisso', 'acqua san leonardo analisi', 'san leonardo siete fuentes'],
    intro:
      "San Leonardo nasce a Santu Lussurgiu, nel Montiferru oristanese, presso il borgo di San Leonardo de Siete Fuentes. È un'oligominerale leggera (residuo fisso 139 mg/L) dal carattere mediterraneo.",
    sections: [
      {
        heading: 'Profilo mediterraneo',
        paragraphs: [
          "Come diverse acque insulari, San Leonardo ha [cloruri](/parametri/cloruri) e [sodio](/parametri/sodio) un po' più marcati (42 e 28 mg/L) rispetto alle acque alpine, che le danno un gusto più deciso pur restando leggera.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano', 'Chi cerca un\'acqua sarda leggera'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di San Leonardo?', a: 'Circa 139 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['san-giorgio', 'smeraldina', 'san-martino'],
  },
  {
    id: 'san-giorgio',
    brand: 'S. Giorgio',
    slug: 'san-giorgio',
    producer: 'Sarda Acque Minerali',
    sorgente: 'Zinnigas',
    comune: 'Siliqua',
    provincia: 'SU',
    regione: 'Sardegna',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: { residuoFisso: 272, ph: 6.8, conducibilita: null, durezza: null, bicarbonato: 113.4, calcio: 27, magnesio: 15, sodio: 42.6, potassio: null, solfati: null, cloruri: 72.5, nitrati: null, fluoruri: null, silice: 21.8 },
    tagline: "L'oligominerale del Sulcis, dalla sorgente Zinnigas.",
    metaDescription:
      "Acqua S. Giorgio: residuo fisso 272 mg/L, oligominerale sarda del Sulcis (Siliqua). Analisi dell'etichetta.",
    searchKeywords: ['san giorgio acqua residuo fisso', 'acqua san giorgio sardegna', 'san giorgio zinnigas'],
    intro:
      "S. Giorgio nasce dalla sorgente Zinnigas a Siliqua, nel Sulcis cagliaritano. È un'oligominerale (residuo fisso 272 mg/L) dal profilo mediterraneo, con [cloruri](/parametri/cloruri) marcati.",
    sections: [
      {
        heading: 'Carattere insulare',
        paragraphs: [
          "Con cloruri 73 mg/L, [sodio](/parametri/sodio) 43 mg/L e silice alta, S. Giorgio ha il gusto più deciso tipico delle acque sarde di pianura, pur restando un'oligominerale da uso quotidiano.",
        ],
      },
    ],
    bestFor: ['Uso quotidiano', 'Chi cerca un\'acqua dal gusto più deciso'],
    cautions: [],
    faqs: [
      { q: 'Qual è il residuo fisso di S. Giorgio?', a: 'Circa 272 mg/L a 180 °C: è un\'acqua oligominerale.' },
    ],
    relatedIds: ['san-leonardo', 'smeraldina', 'san-martino'],
  },
];
