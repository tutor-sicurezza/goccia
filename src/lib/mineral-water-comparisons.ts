// ============================================================================
// Confronti diretti tra due acque minerali ("X o Y: quale scegliere").
// Intercettano ricerche molto frequenti (es. "ferrarelle o san pellegrino").
// I dati numerici vengono dalle schede in mineral-waters-data; qui c'è solo
// il contenuto editoriale del confronto.
// ============================================================================

export interface WaterComparison {
  slug: string; // "ferrarelle-vs-san-pellegrino"
  aId: string;
  bId: string;
  title: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  /** Paragrafi del verdetto ("quale scegliere"). */
  verdict: string[];
  chooseA: string[];
  chooseB: string[];
  faqs: { q: string; a: string }[];
}

export const WATER_COMPARISONS: WaterComparison[] = [
  {
    slug: 'ferrarelle-vs-san-pellegrino',
    aId: 'ferrarelle',
    bId: 'san-pellegrino',
    title: 'Ferrarelle o San Pellegrino: quale scegliere',
    metaDescription:
      "Ferrarelle vs San Pellegrino: bollicine naturali contro frizzante aggiunta, bicarbonati contro solfati. Analisi a confronto e quale scegliere a tavola.",
    searchKeywords: [
      'ferrarelle o san pellegrino',
      'ferrarelle vs san pellegrino',
      'differenza ferrarelle san pellegrino',
    ],
    intro:
      "Sono due delle acque frizzanti più famose d'Italia, ma nascono da logiche diverse: Ferrarelle è un'effervescente naturale bicarbonato-calcica, San Pellegrino è un'acqua minerale resa frizzante con anidride carbonica aggiunta ed è ricca di solfati. Ecco cosa cambia davvero.",
    verdict: [
      "La differenza più concreta è nelle bollicine: in Ferrarelle l'anidride carbonica risale naturalmente dal sottosuolo vulcanico di Roccamonfina, mentre in San Pellegrino la CO₂ viene reintrodotta in fase di imbottigliamento (l'acqua alla sorgente è poco gassata). Chi cerca la dicitura «effervescente naturale» in senso stretto trova solo in Ferrarelle.",
      "Sul piano dei minerali, Ferrarelle è nettamente bicarbonato-calcica (tantissimi bicarbonati e calcio), San Pellegrino spicca invece per i solfati e per un buon contenuto di magnesio. Entrambe sono mediominerali «da pasto», strutturate: nessuna delle due è un'acqua leggera per bere in grandi quantità tutto il giorno.",
    ],
    chooseA: [
      'Vuoi bollicine davvero naturali dalla fonte',
      'Cerchi un forte apporto di calcio (bicarbonato-calcica)',
      'Preferisci un gusto morbido a fine pasto',
    ],
    chooseB: [
      'Ti piace la bollicina più vivace dell’acqua frizzante',
      'Cerchi solfati e magnesio a tavola',
      'La usi come acqua «da ristorazione» con piatti strutturati',
    ],
    faqs: [
      {
        q: 'Ferrarelle è più «naturale» di San Pellegrino?',
        a: "Nelle bollicine sì: Ferrarelle è effervescente naturale (CO₂ dalla fonte), San Pellegrino è frizzante con anidride carbonica aggiunta. Entrambe restano acque minerali naturali per composizione.",
      },
      {
        q: 'Quale ha più calcio?',
        a: 'Ferrarelle, con un contenuto di calcio nettamente superiore. San Pellegrino ha invece più solfati e magnesio.',
      },
    ],
  },
  {
    slug: 'lauretana-vs-santanna',
    aId: 'lauretana',
    bId: 'santanna-vinadio',
    title: "Lauretana o Sant'Anna: quale acqua è più leggera",
    metaDescription:
      "Lauretana vs Sant'Anna: due leggerissime piemontesi a confronto per residuo fisso, sodio e nitrati. Quale scegliere per neonati e diete iposodiche.",
    searchKeywords: [
      "lauretana o sant'anna",
      "lauretana vs sant'anna",
      'acqua più leggera lauretana santanna',
    ],
    intro:
      "Due acque piemontesi tra le più leggere in commercio, spesso messe a confronto da chi cerca «l'acqua con meno residuo fisso». Sono simili nello spirito, ma con qualche differenza utile a decidere.",
    verdict: [
      "Sul residuo fisso vince Lauretana, che con 14 mg/L è la più bassa tra le grandi marche; Sant'Anna resta comunque minimamente mineralizzata, con un valore attorno ai 44 mg/L. In pratica entrambe sono «leggere», ma Lauretana lo è all'estremo.",
      "Per l'uso quotidiano e per i neonati contano soprattutto sodio e nitrati: tutte e due hanno sodio bassissimo e nitrati contenuti, quindi entrambe rientrano tra le acque compatibili con la preparazione degli alimenti dei lattanti. La scelta finale spesso si gioca su prezzo e disponibilità, più che sui numeri.",
    ],
    chooseA: [
      'Vuoi il residuo fisso più basso in assoluto',
      'Cerchi il gusto più neutro per tè e caffè',
    ],
    chooseB: [
      'Vuoi una leggerissima a prezzo popolare e molto diffusa',
      'Preferisci un pH più vicino alla neutralità',
    ],
    faqs: [
      {
        q: "Qual è più leggera tra Lauretana e Sant'Anna?",
        a: "Lauretana, con 14 mg/L di residuo fisso contro i circa 44 mg/L di Sant'Anna. Entrambe però sono minimamente mineralizzate.",
      },
    ],
  },
  {
    slug: 'levissima-vs-san-benedetto',
    aId: 'levissima',
    bId: 'san-benedetto',
    title: 'Levissima o San Benedetto: quale scegliere',
    metaDescription:
      'Levissima vs San Benedetto: due oligominerali diffusissime a confronto per residuo fisso, magnesio e sodio. Quale acqua scegliere ogni giorno.',
    searchKeywords: [
      'levissima o san benedetto',
      'levissima vs san benedetto',
      'differenza levissima san benedetto',
    ],
    intro:
      "Due delle acque più vendute nei supermercati italiani, entrambe oligominerali «da tutti i giorni». La differenza sta nel grado di mineralizzazione e in qualche minerale specifico.",
    verdict: [
      "Levissima è più leggera (residuo attorno a 88 mg/L), San Benedetto è nella fascia più mineralizzata delle oligominerali (circa 273 mg/L) e porta un po' più di magnesio. Chi cerca la massima leggerezza sceglie Levissima; chi vuole qualche minerale in più, San Benedetto.",
      "Entrambe hanno sodio basso e sono adatte a un consumo quotidiano. Da tenere d'occhio, per San Benedetto, i nitrati vicini alla soglia dei 10 mg/L usata come riferimento per i lattanti: per il latte artificiale molti pediatri preferiscono acque a nitrati più bassi.",
    ],
    chooseA: [
      'Vuoi un’oligominerale più leggera',
      'Cerchi un’acqua di origine alpina dal gusto pulito',
    ],
    chooseB: [
      'Vuoi un po’ più di magnesio',
      'Preferisci un’acqua con maggiore struttura minerale',
    ],
    faqs: [
      {
        q: 'Levissima o San Benedetto hanno più residuo fisso?',
        a: 'San Benedetto (circa 273 mg/L) ha un residuo fisso più alto di Levissima (circa 88 mg/L): è quindi più mineralizzata.',
      },
    ],
  },
  {
    slug: 'lete-vs-sangemini',
    aId: 'lete',
    bId: 'sangemini',
    title: 'Lete o Sangemini: quale acqua ricca di calcio scegliere',
    metaDescription:
      "Lete vs Sangemini: due acque ricche di calcio a confronto. Sodio, nitrati e bollicine per capire quale scegliere, anche per i bambini.",
    searchKeywords: [
      'lete o sangemini',
      'lete vs sangemini',
      'acqua ricca di calcio lete sangemini',
    ],
    intro:
      "Due acque scelte spesso da chi vuole aumentare l'apporto di calcio, per esempio in crescita o in menopausa. Sono entrambe molto calciche, ma con differenze che contano.",
    verdict: [
      "Sono entrambe ricchissime di calcio (circa 300 mg/L) e bicarbonato-calciche. La differenza chiave è il sodio: Lete ne ha pochissimo (adatta anche alle diete iposodiche), mentre Sangemini ne ha un po' di più. Sangemini vanta invece nitrati bassissimi, storicamente associati all'idea di acqua «per i bambini».",
      "Lete è un'effervescente naturale (bollicine dalla fonte), il che la rende gradevole a tavola; Sangemini è anch'essa effervescente naturale ma dal carattere più deciso. Nessuna delle due, per l'alta mineralità, è adatta ai lattanti: per il latte artificiale servono acque a residuo molto più basso.",
    ],
    chooseA: [
      'Vuoi molto calcio ma pochissimo sodio',
      'Cerchi un’effervescente naturale calcica per la tavola',
    ],
    chooseB: [
      'Cerchi calcio con nitrati bassissimi',
      'Vuoi l’acqua legata alla tradizione dell’infanzia',
    ],
    faqs: [
      {
        q: 'Lete o Sangemini per il calcio?',
        a: 'Entrambe contengono circa 300 mg/L di calcio. Lete ha meno sodio (meglio per le diete iposodiche); Sangemini ha nitrati più bassi.',
      },
    ],
  },
  {
    slug: 'uliveto-vs-ferrarelle',
    aId: 'uliveto',
    bId: 'ferrarelle',
    title: 'Uliveto o Ferrarelle: quale scegliere',
    metaDescription:
      "Uliveto vs Ferrarelle: due acque frizzanti calciche a confronto per residuo fisso, calcio e sodio. Quale scegliere per la digestione.",
    searchKeywords: [
      'uliveto o ferrarelle',
      'uliveto vs ferrarelle',
      'acqua per digestione uliveto ferrarelle',
    ],
    intro:
      "Due acque associate nell'immaginario alla digestione e alla tavola. Entrambe sono calciche ed effervescenti naturali, ma con intensità diverse.",
    verdict: [
      "Ferrarelle è più mineralizzata (residuo attorno a 1300 mg/L) e più ricca di calcio e bicarbonati; Uliveto è più «contenuta» (circa 740 mg/L) ma ha un po' più di sodio e di solfati. Chi cerca la mineralità piena sceglie Ferrarelle, chi preferisce qualcosa di leggermente più moderato va su Uliveto.",
      "Entrambe sono acque bicarbonato-calciche, il profilo che molti percepiscono come «digestivo». La scelta è soprattutto di gusto e di intensità delle bollicine.",
    ],
    chooseA: [
      'Preferisci un’acqua un po’ meno mineralizzata',
      'Cerchi il profilo «digestione» storico di Uliveto',
    ],
    chooseB: [
      'Vuoi più calcio e bollicine naturali intense',
      'Ti piace un’acqua strutturata a fine pasto',
    ],
    faqs: [
      {
        q: 'Uliveto o Ferrarelle hanno più calcio?',
        a: 'Ferrarelle, con un contenuto di calcio più alto e un residuo fisso maggiore. Uliveto è più moderata ma con un po’ più di sodio e solfati.',
      },
    ],
  },
  {
    slug: 'plose-vs-lauretana',
    aId: 'plose',
    bId: 'lauretana',
    title: 'Plose o Lauretana: quale acqua leggera scegliere',
    metaDescription:
      'Plose vs Lauretana: due minimamente mineralizzate a confronto per residuo fisso, pH e origine. Quale acqua leggera scegliere.',
    searchKeywords: [
      'plose o lauretana',
      'plose vs lauretana',
      'acqua leggera plose lauretana',
    ],
    intro:
      "Due acque di montagna a bassissimo residuo, spesso confrontate da chi cerca leggerezza e purezza dell'origine. Sono davvero vicine, con sfumature di gusto e di quota.",
    verdict: [
      "Lauretana ha il residuo fisso più basso (14 mg/L contro i 22 di Plose): sulla carta è la più «vuota». Plose gioca invece la carta della quota, con una sorgente a 1.870 metri sul Monte Plose, in Alto Adige, e un pH leggermente più alto.",
      "Sono differenze minime: entrambe sono minimamente mineralizzate, leggere e a bassissimo sodio. La scelta è più questione di gusto e di legame con il territorio che di sostanza.",
    ],
    chooseA: [
      'Vuoi un’acqua d’alta quota (1.870 m) non trattata',
      'Preferisci un pH un filo più alto',
    ],
    chooseB: [
      'Vuoi il residuo fisso più basso in assoluto',
      'Cerchi il gusto più neutro possibile',
    ],
    faqs: [
      {
        q: 'Plose o Lauretana è più leggera?',
        a: 'Lauretana, con 14 mg/L di residuo fisso contro i 22 di Plose. Entrambe sono comunque minimamente mineralizzate.',
      },
    ],
  },
  {
    slug: 'panna-vs-levissima',
    aId: 'panna',
    bId: 'levissima',
    title: 'Acqua Panna o Levissima: quale scegliere',
    metaDescription:
      'Acqua Panna vs Levissima: due oligominerali a confronto per residuo fisso, gusto e pH. Quale acqua naturale scegliere ogni giorno.',
    searchKeywords: [
      'panna o levissima',
      'acqua panna vs levissima',
      'differenza panna levissima',
    ],
    intro:
      "Due acque naturali oligominerali molto note, ma con caratteri opposti: Levissima punta sulla leggerezza alpina, Panna su un gusto morbido e rotondo.",
    verdict: [
      "Levissima è più leggera (residuo attorno a 88 mg/L), Panna è più mineralizzata (circa 141 mg/L) e ha un pH basico che le dà quella sensazione «vellutata» apprezzata a tavola. Chi cerca la massima leggerezza va su Levissima; chi ama un'acqua dal sorso morbido preferisce Panna.",
      "Entrambe hanno sodio basso e sono adatte all'uso quotidiano: qui la differenza è soprattutto di gusto e di occasione (tutti i giorni contro tavola).",
    ],
    chooseA: [
      'Vuoi un gusto morbido, ideale a tavola',
      'Ti piace un’acqua con pH basico e più struttura',
    ],
    chooseB: [
      'Cerchi la maggiore leggerezza',
      'Vuoi un’acqua alpina dal gusto pulito',
    ],
    faqs: [
      {
        q: 'Panna o Levissima è più leggera?',
        a: 'Levissima (residuo circa 88 mg/L) è più leggera di Acqua Panna (circa 141 mg/L), che è invece più morbida e minerale al gusto.',
      },
    ],
  },
  {
    slug: 'san-benedetto-vs-san-pellegrino',
    aId: 'san-benedetto',
    bId: 'san-pellegrino',
    title: 'San Benedetto o San Pellegrino: quale scegliere',
    metaDescription:
      'San Benedetto vs San Pellegrino: naturale leggera contro frizzante ricca di minerali. Analisi a confronto e quale scegliere.',
    searchKeywords: [
      'san benedetto o san pellegrino',
      'san benedetto vs san pellegrino',
      'differenza san benedetto san pellegrino',
    ],
    intro:
      "Spesso confuse per il nome simile, sono due acque molto diverse: San Benedetto (nella naturale) è un'oligominerale leggera da tutti i giorni, San Pellegrino è una frizzante mediominerale ricca di solfati.",
    verdict: [
      "San Benedetto naturale è molto più leggera (residuo circa 273 mg/L) e pensata per il consumo quotidiano; San Pellegrino è un'acqua da tavola frizzante, strutturata, con solfati alti e più calcio e magnesio. Non competono davvero: rispondono a bisogni diversi.",
      "Se cerchi l'acqua di casa per bere durante il giorno, San Benedetto; se vuoi una frizzante decisa per accompagnare i pasti, San Pellegrino.",
    ],
    chooseA: [
      'Vuoi un’acqua naturale leggera per tutti i giorni',
      'Preferisci sodio e mineralità contenuti',
    ],
    chooseB: [
      'Vuoi una frizzante ricca da tavola',
      'Cerchi solfati, calcio e magnesio',
    ],
    faqs: [
      {
        q: 'San Benedetto e San Pellegrino sono la stessa acqua?',
        a: 'No: sono marchi e acque diverse. San Benedetto naturale è un’oligominerale leggera; San Pellegrino è una frizzante mediominerale ricca di solfati.',
      },
    ],
  },
];

const COMPARISON_INDEX = new Map(WATER_COMPARISONS.map((c) => [c.slug, c]));

export function getComparisonBySlug(slug: string): WaterComparison | undefined {
  return COMPARISON_INDEX.get(slug);
}
