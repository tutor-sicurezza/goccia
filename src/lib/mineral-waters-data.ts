import type { MineralWater } from './mineral-waters';

// ============================================================================
// Schede delle singole acque minerali.
// Valori dell'analisi presi dall'etichetta / dati pubblicati dal produttore
// (obbligo del D.Lgs. 176/2011). Contenuto editoriale redazionale GoccIA.
// I link interni nei testi usano la sintassi [testo](/percorso) di renderText.
// ============================================================================

export const WATER_ENTRIES: MineralWater[] = [
  // -------------------------------------------------------------------------
  {
    id: 'lauretana',
    brand: 'Lauretana',
    slug: 'lauretana',
    producer: 'Lauretana S.p.A.',
    sorgente: 'Fonte Lauretana',
    comune: 'Graglia',
    provincia: 'BI',
    regione: 'Piemonte',
    altitudine: 1050,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 14,
      ph: 6.0,
      conducibilita: 15,
      durezza: 0.6,
      bicarbonato: 4.9,
      calcio: 1.0,
      magnesio: 0.37,
      sodio: 0.9,
      potassio: 0.1,
      solfati: 1.4,
      cloruri: 0.42,
      nitrati: 1.6,
      fluoruri: null,
      silice: 4.9,
    },
    tagline: "Il residuo fisso più basso tra le grandi marche italiane: 14 mg/L.",
    metaDescription:
      "Lauretana ha un residuo fisso di 14 mg/L, il più basso fra le acque minerali diffuse in Italia. Analisi completa dell'etichetta, pH, sodio e a chi è adatta.",
    searchKeywords: [
      'lauretana residuo fisso',
      'lauretana acqua più leggera',
      'lauretana analisi',
      'lauretana ph',
      'acqua lauretana valori',
    ],
    intro:
      "Lauretana è l'acqua che quasi tutti citano quando si parla di «acqua leggera»: con 14 mg/L di residuo fisso è la più povera di sali fra le marche a larga distribuzione in Italia. Sgorga a circa mille metri sulle Alpi Biellesi, ai piedi del Monte Mucrone, e nasce dallo scioglimento delle nevi filtrate lentamente dalle rocce silicee, che cedono pochissimi minerali.",
    sections: [
      {
        heading: 'Perché il residuo fisso è così basso',
        paragraphs: [
          "Il residuo fisso misura i sali disciolti che restano quando un litro d'acqua evapora a 180 °C. In Lauretana è appena 14 mg/L perché la roccia da cui filtra — gneiss e graniti del massiccio biellese — è chimicamente povera e poco solubile: l'acqua la attraversa senza arricchirsi di calcio, magnesio o bicarbonati. Il risultato è un'acqua che sulla lingua risulta quasi «vuota», neutra, senza la rotondità delle acque calcaree.",
          "Anche la [conducibilità elettrica](/parametri/conducibilita), che è direttamente legata ai sali disciolti, è bassissima (intorno a 15 µS/cm): un altro modo per leggere la stessa cosa. Chi cerca un'acqua che non appesantisca il gusto di un tè pregiato o di un caffè in purezza spesso sceglie proprio profili come questo.",
        ],
      },
      {
        heading: 'A cosa serve davvero un residuo così basso',
        paragraphs: [
          "L'idea che un'acqua a basso residuo «lavi via» le scorie o «sgonfi» è più marketing che fisiologia: reni e fegato depurano l'organismo indipendentemente dall'acqua che bevi. Un residuo basso ha però un senso pratico in alcune situazioni: lascia meno calcare in caldaie e ferri da stiro, ha pochissimo [sodio](/parametri/sodio) (0,9 mg/L, adatta alle diete iposodiche) ed è tra le tipologie usate per la preparazione degli alimenti dei lattanti.",
          "Va detto con onestà che il calcio e il magnesio che non prendi dall'acqua leggera li assumi comunque dagli alimenti: in una dieta equilibrata l'acqua contribuisce solo in piccola parte al fabbisogno di minerali. Scegliere Lauretana è legittimo per gusto e leggerezza percepita, non perché le altre acque «facciano male».",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (0,9 mg/L)',
      'Preparazione degli alimenti dei lattanti',
      "Chi preferisce un'acqua dal gusto neutro, per tè e caffè",
      'Chi vuole ridurre il calcare in caldaia e piccoli elettrodomestici',
    ],
    cautions: [
      "Il pH acidulo (circa 6) è normale per un'acqua così poco mineralizzata e non ha effetti sulla salute.",
      "Un residuo bassissimo non «depura» l'organismo più di un'altra acqua potabile.",
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Lauretana?',
        a: "14 mg/L a 180 °C. È il valore più basso fra le acque minerali a larga diffusione in Italia e la colloca fra le acque minimamente mineralizzate (residuo ≤ 50 mg/L).",
      },
      {
        q: 'Lauretana va bene per i neonati?',
        a: "Sì: il bassissimo contenuto di sodio e di nitrati la rende una delle acque tipicamente usate per ricostituire il latte in polvere. Segui comunque le indicazioni del pediatra.",
      },
      {
        q: 'Perché Lauretana ha un pH leggermente acido?',
        a: "Perché contiene pochissimi bicarbonati, che sono le sostanze che «tamponano» e alzano il [pH](/parametri/ph). È del tutto normale per un'acqua a residuo molto basso e non ha rilievo per la salute.",
      },
    ],
    relatedIds: ['plose', 'santanna-vinadio', 'levissima'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'plose',
    brand: 'Acqua Plose',
    slug: 'plose',
    producer: 'Fonte Plose S.p.A.',
    sorgente: 'Fonte Plose',
    comune: 'Bressanone',
    provincia: 'BZ',
    regione: 'Trentino-Alto Adige',
    altitudine: 1870,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 22,
      ph: 6.6,
      conducibilita: null,
      durezza: 1.1,
      bicarbonato: 14,
      calcio: 2.0,
      magnesio: 1.4,
      sodio: 1.1,
      potassio: null,
      solfati: 3.4,
      cloruri: null,
      nitrati: 1.0,
      fluoruri: null,
      silice: null,
    },
    tagline: "Sgorga a 1.870 metri sul Monte Plose: residuo 22 mg/L, molto pura.",
    metaDescription:
      "Acqua Plose: residuo fisso 22 mg/L, sorgente a 1.870 m in Alto Adige. Valori dell'etichetta, pH, durezza e perché è una delle acque più leggere d'Italia.",
    searchKeywords: [
      'plose residuo fisso',
      'acqua plose analisi',
      'plose ph',
      'acqua plose valori',
      'plose alto adige',
    ],
    intro:
      "Acqua Plose nasce a 1.870 metri di quota sull'omonimo monte sopra Bressanone, una delle sorgenti imbottigliate più alte d'Italia. È un'acqua minimamente mineralizzata (residuo fisso 22 mg/L) che il produttore raccoglie senza trattamenti e senza pompaggio, sfruttando la sola pressione della montagna. La quota e la roccia dolomitico-silicea spiegano la sua leggerezza.",
    sections: [
      {
        heading: 'Un profilo da alta montagna',
        paragraphs: [
          "Con un residuo di 22 mg/L e una [durezza](/parametri/durezza-totale) di poco più di 1 grado francese, Plose è vicina a Lauretana e Sant'Anna nella famiglia delle acque leggerissime. Il calcio (2 mg/L) e il magnesio (1,4 mg/L) sono minimi, il [sodio](/parametri/sodio) è appena 1,1 mg/L: un'acqua adatta a chi deve limitare il sale e a un uso quotidiano che non lascia calcare.",
          "Il [pH](/parametri/ph) di 6,6 la colloca fra le acque leggermente acidule, coerente con il basso contenuto di bicarbonati. È un dato tecnico, non un difetto: nessuna acqua potabile in questo intervallo di pH crea problemi.",
        ],
      },
      {
        heading: 'Il fattore quota e la non manipolazione',
        paragraphs: [
          "Plose costruisce buona parte della propria immagine sull'origine ad alta quota e sull'assenza di trattamenti: l'acqua viene imbottigliata così come sgorga. È un punto che vale per molte acque minerali naturali (per legge non possono essere disinfettate né modificate nella composizione), ma la fonte alpina a quasi 1.900 metri resta un elemento distintivo raro.",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (1,1 mg/L)',
      'Uso quotidiano leggero, senza calcare',
      "Chi cerca un'acqua di montagna poco mineralizzata",
    ],
    cautions: [
      "Come tutte le acque a residuo molto basso, apporta pochi minerali: il fabbisogno va coperto con l'alimentazione.",
    ],
    faqs: [
      {
        q: 'Quanto è alto il residuo fisso di Plose?',
        a: '22 mg/L a 180 °C, che la rende un\'acqua minimamente mineralizzata (soglia ≤ 50 mg/L).',
      },
      {
        q: 'Da dove viene Acqua Plose?',
        a: 'Da una sorgente a 1.870 metri di quota sul Monte Plose, sopra Bressanone, in provincia di Bolzano.',
      },
    ],
    relatedIds: ['lauretana', 'santanna-vinadio', 'levissima'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'santanna-vinadio',
    brand: "Sant'Anna",
    slug: 'santanna',
    producer: 'Fonti di Vinadio S.p.A.',
    sorgente: 'Fonti di Vinadio (Alta Valle Stura)',
    comune: 'Vinadio',
    provincia: 'CN',
    regione: 'Piemonte',
    altitudine: 1950,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 44.1,
      ph: 7.5,
      conducibilita: 69,
      durezza: 3.3,
      bicarbonato: 29,
      calcio: 11.8,
      magnesio: null,
      sodio: 1.4,
      potassio: null,
      solfati: null,
      cloruri: null,
      nitrati: 0.76,
      fluoruri: null,
      silice: 3.7,
    },
    tagline: "Leggerissima dell'Alta Valle Stura, tra le più vendute in Italia.",
    metaDescription:
      "Acqua Sant'Anna di Vinadio: residuo fisso circa 44 mg/L, minimamente mineralizzata. Valori dell'etichetta, sodio, nitrati e a chi è adatta.",
    searchKeywords: [
      "sant'anna residuo fisso",
      'santanna vinadio analisi',
      "acqua sant'anna valori",
      'santanna ph',
    ],
    intro:
      "Sant'Anna nasce dalle Fonti di Vinadio, in alta Valle Stura, nel cuneese, a quasi duemila metri di quota. È da anni una delle acque minerali più vendute in Italia, complice il prezzo popolare e un profilo minimamente mineralizzato (residuo fisso intorno a 44 mg/L) che la rende leggera e adatta a tutta la famiglia.",
    sections: [
      {
        heading: 'Un profilo leggero e neutro',
        paragraphs: [
          "Con un residuo fisso di circa 44 mg/L, Sant'Anna resta sotto la soglia delle acque minimamente mineralizzate (50 mg/L). Il [sodio](/parametri/sodio) è molto basso (1,4 mg/L) e i [nitrati](/parametri/nitrati) sono contenuti (sotto 1 mg/L): valori che la rendono compatibile con le diete povere di sale e con la preparazione degli alimenti dei lattanti.",
          "Rispetto a Lauretana e Plose, Sant'Anna ha un [pH](/parametri/ph) intorno a 7,5, quindi vicino alla neutralità: un profilo un po' più «pieno» pur restando nella fascia delle acque leggere.",
        ],
      },
      {
        heading: 'La sostenibilità come tratto di marca',
        paragraphs: [
          "Oltre al posizionamento di prezzo, il marchio ha puntato molto sul packaging, introducendo bottiglie da fonti rinnovabili e riduzione della plastica. Sul piano dell'acqua in sé, il tratto distintivo resta la leggerezza dell'origine alpina, come per le altre grandi minimamente mineralizzate del Nord-Ovest.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano di tutta la famiglia',
      'Diete povere di sodio',
      'Preparazione degli alimenti dei lattanti',
    ],
    cautions: [
      "I valori possono variare leggermente tra le annate di etichetta; fa fede quella della bottiglia.",
    ],
    faqs: [
      {
        q: "Qual è il residuo fisso di Sant'Anna?",
        a: "Circa 44 mg/L a 180 °C, che la classifica come acqua minimamente mineralizzata.",
      },
      {
        q: "Sant'Anna è adatta ai neonati?",
        a: "Sì, grazie al basso contenuto di sodio e di nitrati è tra le acque usate per la preparazione del latte artificiale, seguendo le indicazioni del pediatra.",
      },
    ],
    relatedIds: ['lauretana', 'plose', 'levissima'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'levissima',
    brand: 'Levissima',
    slug: 'levissima',
    producer: 'Sanpellegrino S.p.A. (Gruppo Nestlé)',
    sorgente: 'Fonte Levissima (Cepina)',
    comune: 'Valdisotto',
    provincia: 'SO',
    regione: 'Lombardia',
    altitudine: 1800,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 88.3,
      ph: 7.8,
      conducibilita: 130,
      durezza: 6.1,
      bicarbonato: 55.8,
      calcio: 22.2,
      magnesio: 1.6,
      sodio: 2.0,
      potassio: 1.5,
      solfati: 19.9,
      cloruri: null,
      nitrati: 1.2,
      fluoruri: 0.2,
      silice: 5.8,
    },
    tagline: "L'acqua della Valtellina: leggera ma con un po' più di struttura.",
    metaDescription:
      "Levissima: residuo fisso 88 mg/L, oligominerale della Valtellina. Analisi dell'etichetta, calcio, sodio e differenze con le acque minimamente mineralizzate.",
    searchKeywords: [
      'levissima residuo fisso',
      'levissima analisi',
      'acqua levissima valori',
      'levissima ph',
    ],
    intro:
      "Levissima sgorga in alta Valtellina, nel comune di Valdisotto, da sorgenti alpine a circa 1.800 metri. Con un residuo fisso di 88 mg/L è un'oligominerale «di confine»: più leggera della media, ma con qualche minerale in più rispetto alle leggerissime come Lauretana o Plose. È una delle acque più vendute e riconoscibili d'Italia.",
    sections: [
      {
        heading: 'Oligominerale, ma vicina alle leggere',
        paragraphs: [
          "Il residuo di 88 mg/L la colloca fra le acque oligominerali (50–500 mg/L), la categoria di gran lunga più diffusa in Italia. Il [calcio](/parametri/durezza-totale) è 22 mg/L e il [sodio](/parametri/sodio) appena 2 mg/L: un profilo equilibrato, adatto a un uso quotidiano senza appesantire.",
          "Il [pH](/parametri/ph) di 7,8 la rende leggermente basica, coerente con la presenza di bicarbonati. È un'acqua «da tutti i giorni» che sta comodamente a metà strada fra la neutralità gustativa delle leggerissime e la maggiore mineralità delle medio-minerali.",
        ],
      },
      {
        heading: "L'origine alpina come racconto di marca",
        paragraphs: [
          "Levissima ha legato la propria immagine alle montagne della Valtellina e al tema della purezza dell'alta quota. Al di là della comunicazione, i numeri raccontano un'acqua leggera e affidabile, con [sodio](/parametri/sodio) molto basso che la rende compatibile con la maggior parte delle diete.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano equilibrato',
      'Diete povere di sodio (2 mg/L)',
      "Chi vuole un'acqua leggera ma non «vuota» al gusto",
    ],
    cautions: [],
    faqs: [
      {
        q: 'Levissima è oligominerale o minimamente mineralizzata?',
        a: 'È oligominerale: con 88 mg/L di residuo fisso supera la soglia dei 50 mg/L che separa le due categorie, pur restando un\'acqua leggera.',
      },
      {
        q: 'Quanto sodio contiene Levissima?',
        a: 'Circa 2 mg/L, un valore molto basso che la rende adatta anche a chi segue diete iposodiche.',
      },
    ],
    relatedIds: ['santanna-vinadio', 'panna', 'vera'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'panna',
    brand: 'Acqua Panna',
    slug: 'acqua-panna',
    producer: 'Sanpellegrino S.p.A. (Gruppo Nestlé)',
    sorgente: 'Fonte Panna (Mugello)',
    comune: 'Scarperia e San Piero',
    provincia: 'FI',
    regione: 'Toscana',
    altitudine: 900,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 141,
      ph: 8.0,
      conducibilita: 222,
      durezza: null,
      bicarbonato: 103,
      calcio: 32,
      magnesio: 6.4,
      sodio: 6.7,
      potassio: 0.9,
      solfati: 22.7,
      cloruri: 9,
      nitrati: 2.9,
      fluoruri: null,
      silice: 7.1,
    },
    tagline: "L'oligominerale toscana dal gusto morbido, icona della ristorazione.",
    metaDescription:
      "Acqua Panna: residuo fisso 141 mg/L, oligominerale del Mugello con pH 8. Analisi dell'etichetta, gusto morbido e perché è un'icona della tavola.",
    searchKeywords: [
      'acqua panna residuo fisso',
      'panna analisi',
      'acqua panna valori',
      'panna ph',
    ],
    intro:
      "Acqua Panna sgorga nel Mugello, sulle colline a nord di Firenze, in una tenuta legata alla fonte fin dall'Ottocento. È un'oligominerale dal residuo fisso di 141 mg/L e dal [pH](/parametri/ph) leggermente basico (8,0) che le dà un carattere morbido e rotondo, molto apprezzato nell'alta ristorazione, dove è spesso proposta accanto alla frizzante San Pellegrino.",
    sections: [
      {
        heading: 'Un gusto morbido, non neutro',
        paragraphs: [
          "A differenza delle leggerissime, Panna ha una mineralità percepibile ma delicata: 32 mg/L di [calcio](/parametri/durezza-totale), bicarbonati intorno a 103 mg/L e un pH basico che le danno quella sensazione «vellutata» sul palato. Il [sodio](/parametri/sodio) resta basso (6,7 mg/L), quindi resta un'acqua adatta a un consumo quotidiano.",
          "È un buon esempio di come il residuo fisso da solo non racconti tutto: due acque con lo stesso residuo possono avere gusti diversi a seconda di quali sali prevalgono. In Panna dominano bicarbonati e calcio, che portano rotondità.",
        ],
      },
      {
        heading: 'Perché è così presente nei ristoranti',
        paragraphs: [
          "Panna ha costruito un posizionamento «fine dining» a livello internazionale, spesso in coppia con [San Pellegrino](/acque-minerali/san-pellegrino) per offrire al cliente la scelta fra naturale e frizzante. Il gusto morbido la rende versatile a tavola, perché non copre i sapori dei piatti.",
        ],
      },
    ],
    bestFor: [
      'Abbinamento a tavola e ristorazione',
      "Chi ama un'acqua naturale dal gusto morbido",
      'Uso quotidiano (sodio basso)',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Acqua Panna?',
        a: '141 mg/L a 180 °C: è un\'acqua oligominerale dal gusto morbido, con pH leggermente basico (8,0).',
      },
      {
        q: 'Perché Acqua Panna ha un sapore «rotondo»?',
        a: "Per la combinazione di bicarbonati e calcio e per il pH basico, che insieme danno una sensazione morbida al palato, diversa da quella delle acque leggerissime dal gusto quasi neutro.",
      },
    ],
    relatedIds: ['san-pellegrino', 'levissima', 'vera'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'fiuggi',
    brand: 'Fiuggi',
    slug: 'fiuggi',
    producer: 'Acqua e Terme Fiuggi S.p.A.',
    sorgente: 'Fonte Anticolana / Bonifacio VIII (Monti Ernici)',
    comune: 'Fiuggi',
    provincia: 'FR',
    regione: 'Lazio',
    altitudine: 620,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 150,
      ph: 7.47,
      conducibilita: 210,
      durezza: 9,
      bicarbonato: 81.7,
      calcio: 15.9,
      magnesio: 6.3,
      sodio: 6.4,
      potassio: 4.4,
      solfati: 6,
      cloruri: 13.9,
      nitrati: 7,
      fluoruri: null,
      silice: 12.8,
    },
    tagline: "L'acqua storica dei calcoli renali, celebrata da papi e artisti.",
    metaDescription:
      "Acqua Fiuggi: residuo fisso 150 mg/L, oligominerale del Lazio nota nella tradizione per i calcoli renali. Analisi dell'etichetta e uso corretto.",
    searchKeywords: [
      'fiuggi residuo fisso',
      'acqua fiuggi calcoli renali',
      'fiuggi analisi',
      'acqua fiuggi valori',
    ],
    intro:
      "Poche acque hanno una storia come Fiuggi. Sgorga dai Monti Ernici, nel frusinate, ed è citata già nel Rinascimento: Bonifacio VIII e Michelangelo ne parlavano per il celebre «mal della pietra», i calcoli renali. Oggi è un'oligominerale dal residuo fisso di 150 mg/L, legata a una lunga tradizione idropinica (la cura del bere alle terme).",
    sections: [
      {
        heading: 'Una tradizione, letta con occhi moderni',
        paragraphs: [
          "La reputazione di Fiuggi nasce dall'uso termale: bere grandi quantità di un'acqua leggera aumenta il volume delle urine e la diuresi, il che può favorire l'eliminazione di piccoli cristalli e ridurre la concentrazione delle sostanze che formano i calcoli. È un effetto legato soprattutto al bere molto e a un'acqua poco mineralizzata, più che a una singola «sostanza miracolosa».",
          "Con [calcio](/parametri/durezza-totale) contenuto (16 mg/L), [sodio](/parametri/sodio) basso e residuo moderato, Fiuggi rientra fra le acque che gli specialisti considerano compatibili con chi ha tendenza alla calcolosi. Le decisioni cliniche però spettano al medico: l'acqua è un supporto, non una terapia.",
        ],
      },
      {
        heading: 'Il valore da conoscere: i nitrati',
        paragraphs: [
          "L'etichetta riporta [nitrati](/parametri/nitrati) intorno a 7 mg/L: un valore basso e sotto i limiti, ma superiore ai 10 mg/L richiesti per la dicitura specifica sui lattanti solo in alcune fonti — qui resta comunque entro i 10 mg/L. Per il consumo adulto non è un elemento di attenzione.",
        ],
      },
    ],
    bestFor: [
      'Tradizione idropinica e diuresi (bevuta in quantità)',
      'Chi cerca un\'oligominerale leggera del centro Italia',
      'Uso quotidiano (sodio basso)',
    ],
    cautions: [
      "Gli effetti sulla calcolosi renale vanno valutati con il medico: l'acqua aiuta la diuresi ma non sostituisce le terapie.",
    ],
    faqs: [
      {
        q: 'Fiuggi fa passare i calcoli renali?',
        a: "La tradizione la lega alla calcolosi perché, bevuta in abbondanza, aumenta la diuresi e può favorire l'eliminazione di piccoli calcoli. Non è però un farmaco: l'uso in caso di calcolosi va concordato con il medico.",
      },
      {
        q: 'Qual è il residuo fisso di Fiuggi?',
        a: '150 mg/L a 180 °C, che la colloca fra le acque oligominerali leggere.',
      },
    ],
    relatedIds: ['recoaro', 'santanna-vinadio', 'panna'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'recoaro',
    brand: 'Recoaro',
    slug: 'recoaro',
    producer: 'Refresco Italia S.p.A.',
    sorgente: 'Conca di Smeraldo (Piccole Dolomiti)',
    comune: 'Recoaro Terme',
    provincia: 'VI',
    regione: 'Veneto',
    altitudine: 700,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 153.7,
      ph: 8.0,
      conducibilita: 245,
      durezza: null,
      bicarbonato: 153,
      calcio: 34,
      magnesio: 14.7,
      sodio: 0.9,
      potassio: 0.2,
      solfati: null,
      cloruri: 0.7,
      nitrati: 3.7,
      fluoruri: null,
      silice: 1.7,
    },
    tagline: "Alcalina e povera di sodio dalle Piccole Dolomiti venete.",
    metaDescription:
      "Acqua Recoaro: residuo fisso 154 mg/L, oligominerale alcalina (pH 8) e povera di sodio. Analisi dell'etichetta, magnesio e a chi è adatta.",
    searchKeywords: [
      'recoaro residuo fisso',
      'acqua recoaro analisi',
      'recoaro ph',
      'acqua recoaro valori',
    ],
    intro:
      "Recoaro nasce nella Conca di Smeraldo, tra le Piccole Dolomiti vicentine, in una zona di terme storiche. È un'oligominerale dal residuo fisso di 154 mg/L che si distingue per due caratteristiche: un [pH](/parametri/ph) basico (8,0) e un contenuto di [sodio](/parametri/sodio) bassissimo, appena 0,9 mg/L.",
    sections: [
      {
        heading: 'Alcalina e quasi priva di sodio',
        paragraphs: [
          "Il tratto più interessante di Recoaro è il sodio quasi assente (0,9 mg/L): un valore fra i più bassi in assoluto, che la rende una scelta naturale per chi segue diete iposodiche o soffre di ipertensione (sempre in accordo con il medico). Il [magnesio](/parametri/durezza-totale) intorno a 15 mg/L aggiunge un po' di struttura senza appesantirla.",
          "Il pH di 8 la rende leggermente alcalina. È bene chiarire un equivoco diffuso: bere acqua «alcalina» non modifica il pH del sangue, che l'organismo regola in modo rigidissimo. L'alcalinità qui è semplicemente una caratteristica chimica dell'acqua, legata ai bicarbonati.",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio e ipertensione (con il medico)',
      "Chi cerca un'acqua alcalina naturale",
      'Uso quotidiano leggero',
    ],
    cautions: [
      "«Alcalina» non significa che «alcalinizza» il corpo: il pH del sangue non dipende dall'acqua che bevi.",
    ],
    faqs: [
      {
        q: 'Recoaro è adatta a chi ha la pressione alta?',
        a: "Il contenuto di sodio bassissimo (0,9 mg/L) la rende compatibile con le diete iposodiche spesso consigliate in caso di ipertensione. Le scelte alimentari in presenza di ipertensione vanno però concordate con il medico.",
      },
      {
        q: "Cosa significa che Recoaro è un'acqua alcalina?",
        a: "Significa solo che il suo pH è superiore a 7 (qui 8,0), per la presenza di bicarbonati. Non ha effetti sull'equilibrio acido-base dell'organismo.",
      },
    ],
    relatedIds: ['fiuggi', 'panna', 'lete'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'smeraldina',
    brand: 'Smeraldina',
    slug: 'smeraldina',
    producer: 'A.L.B. S.p.A. (Sardegna Sorgenti)',
    sorgente: 'Monti di Deu (Gallura)',
    comune: 'Tempio Pausania',
    provincia: 'SS',
    regione: 'Sardegna',
    altitudine: 700,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Sassari, 2023',
    analysis: {
      residuoFisso: 155,
      ph: 6.59,
      conducibilita: 287,
      durezza: null,
      bicarbonato: 53.1,
      calcio: 13.8,
      magnesio: 6.9,
      sodio: 28.3,
      potassio: 1.4,
      solfati: 11.2,
      cloruri: 49.8,
      nitrati: null,
      fluoruri: 0.2,
      silice: 18.3,
    },
    tagline: "L'acqua di granito della Gallura, nella bottiglia-diamante.",
    metaDescription:
      "Acqua Smeraldina: residuo fisso 155 mg/L, oligominerale sarda dei Monti di Deu. Analisi dell'etichetta, cloruri, sodio e caratteristiche.",
    searchKeywords: [
      'smeraldina residuo fisso',
      'acqua smeraldina analisi',
      'smeraldina sardegna',
      'acqua smeraldina valori',
    ],
    intro:
      "Smeraldina sgorga in Gallura, ai piedi dei Monti di Deu, in Sardegna, e filtra attraverso i graniti del massiccio. È un'oligominerale dal residuo fisso di 155 mg/L, resa riconoscibile anche dalla sua bottiglia dal profilo sfaccettato «a diamante», diventata un piccolo oggetto di design della tavola.",
    sections: [
      {
        heading: 'Un profilo mediterraneo',
        paragraphs: [
          "Rispetto alle acque alpine, Smeraldina ha un contenuto di [cloruri](/parametri/cloruri) più marcato (circa 50 mg/L) e un [sodio](/parametri/sodio) di 28 mg/L: valori tipici delle acque di zone costiere e insulari, entro i limiti ma che le danno un carattere gustativo un po' più deciso. Il [pH](/parametri/ph) leggermente acido (6,6) completa un profilo diverso da quello delle acque calcaree del continente.",
          "Il granito da cui filtra cede poco calcio e magnesio, per questo la durezza resta bassa nonostante un residuo medio. È un buon esempio di come la geologia locale disegni il gusto di un'acqua.",
        ],
      },
    ],
    bestFor: [
      "Chi cerca un'acqua italiana dal carattere più deciso",
      'Uso a tavola, anche per il design della bottiglia',
    ],
    cautions: [
      "Il sodio (28 mg/L) è più alto delle acque iposodiche: chi deve limitarlo con attenzione preferisca acque sotto i 20 mg/L.",
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Smeraldina?',
        a: 'Circa 155 mg/L a 180 °C, che la colloca fra le acque oligominerali.',
      },
      {
        q: 'Perché Smeraldina ha più cloruri delle acque alpine?',
        a: "Perché nasce in un contesto insulare gallurese: le acque di zone costiere tendono ad avere più cloruri e sodio rispetto a quelle di montagna del continente. I valori restano comunque entro i limiti di legge.",
      },
    ],
    relatedIds: ['santanna-vinadio', 'san-benedetto', 'norda'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'vera',
    brand: 'Acqua Vera',
    slug: 'acqua-vera',
    producer: 'Sanpellegrino S.p.A. (Gruppo Nestlé)',
    sorgente: 'Fonte In Bosco',
    comune: 'San Giorgio in Bosco',
    provincia: 'PD',
    regione: 'Veneto',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore (Fonte In Bosco)',
    analysis: {
      residuoFisso: 162,
      ph: 7.9,
      conducibilita: 251,
      durezza: null,
      bicarbonato: 147,
      calcio: 35.6,
      magnesio: null,
      sodio: null,
      potassio: null,
      solfati: null,
      cloruri: 2.8,
      nitrati: null,
      fluoruri: null,
      silice: null,
    },
    tagline: "Oligominerale veneta da grande distribuzione, gusto equilibrato.",
    metaDescription:
      "Acqua Vera (Nestlé): residuo fisso 162 mg/L, oligominerale della Fonte In Bosco. Valori dell'etichetta e caratteristiche di un'acqua da uso quotidiano.",
    searchKeywords: [
      'acqua vera residuo fisso',
      'nestlé vera analisi',
      'acqua vera valori',
      'acqua vera ph',
    ],
    intro:
      "Vera è un marchio molto diffuso nella grande distribuzione, imbottigliato da più fonti a seconda dell'area geografica. Nella versione della Fonte In Bosco, in provincia di Padova, è un'oligominerale dal residuo fisso di 162 mg/L, con un profilo equilibrato pensato per il consumo quotidiano di massa.",
    sections: [
      {
        heading: 'Un profilo «di tutti i giorni»',
        paragraphs: [
          "Con 162 mg/L di residuo, [calcio](/parametri/durezza-totale) intorno a 36 mg/L e bicarbonati sui 147 mg/L, Vera è un'acqua oligominerale media, con [pH](/parametri/ph) leggermente basico (7,9). È il tipo di acqua «neutra e affidabile» che risponde bene alle esigenze di una famiglia senza particolari necessità dietetiche.",
          "Va ricordato che, essendo Vera un marchio multi-fonte, i valori esatti in etichetta possono cambiare a seconda dello stabilimento di imbottigliamento indicato: conviene sempre controllare la fonte riportata sulla bottiglia.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano di famiglia',
      "Chi cerca un'oligominerale equilibrata e diffusa",
    ],
    cautions: [
      "Vera è imbottigliata da più fonti: i valori possono variare in base allo stabilimento indicato in etichetta.",
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Acqua Vera?',
        a: 'Nella versione della Fonte In Bosco è 162 mg/L, un\'acqua oligominerale. Altre fonti dello stesso marchio possono avere valori leggermente diversi.',
      },
    ],
    relatedIds: ['levissima', 'san-benedetto', 'norda'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'norda',
    brand: 'Norda',
    slug: 'norda',
    producer: "Norda S.p.A. (Acque Minerali d'Italia)",
    sorgente: 'Fonte Norda (Valsassina)',
    comune: 'Primaluna',
    provincia: 'LC',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 178,
      ph: 7.5,
      conducibilita: null,
      durezza: 14,
      bicarbonato: null,
      calcio: null,
      magnesio: null,
      sodio: 1.6,
      potassio: null,
      solfati: null,
      cloruri: null,
      nitrati: null,
      fluoruri: null,
      silice: null,
    },
    tagline: "L'oligominerale della Valsassina, leggera e povera di sodio.",
    metaDescription:
      "Acqua Norda: residuo fisso 178 mg/L, oligominerale della Valsassina con sodio molto basso. Valori dell'etichetta e caratteristiche.",
    searchKeywords: [
      'norda residuo fisso',
      'acqua norda analisi',
      'acqua norda valori',
      'norda ph',
    ],
    intro:
      "Norda nasce in Valsassina, a Primaluna, in provincia di Lecco, ed è un marchio lombardo storico oggi parte di un grande gruppo nazionale. La versione naturale è un'oligominerale dal residuo fisso di 178 mg/L, con [sodio](/parametri/sodio) molto basso (1,6 mg/L) e un [pH](/parametri/ph) vicino alla neutralità (7,5).",
    sections: [
      {
        heading: 'Leggera e adatta alle diete iposodiche',
        paragraphs: [
          "Il tratto pratico più utile di Norda è il sodio quasi assente, che la rende compatibile con chi deve limitare il sale. La [durezza](/parametri/durezza-totale) intorno a 14 gradi francesi indica una mineralità moderata, in linea con un'oligominerale da uso quotidiano.",
          "Come per altri marchi del gruppo, esistono diverse fonti collegate al nome Norda: conviene leggere l'etichetta della bottiglia, perché i valori di dettaglio possono variare tra sorgenti differenti.",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (1,6 mg/L)',
      'Uso quotidiano leggero',
    ],
    cautions: [
      'Il marchio raccoglie più fonti: verifica sempre i valori sull\'etichetta specifica.',
    ],
    faqs: [
      {
        q: 'Quanto sodio ha Acqua Norda?',
        a: 'Circa 1,6 mg/L nella versione naturale della Valsassina: un valore molto basso, adatto alle diete iposodiche.',
      },
    ],
    relatedIds: ['levissima', 'vera', 'rocchetta'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'rocchetta',
    brand: 'Rocchetta',
    slug: 'rocchetta',
    producer: 'Rocchetta S.p.A.',
    sorgente: 'Fonte Rocchetta',
    comune: 'Gualdo Tadino',
    provincia: 'PG',
    regione: 'Umbria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 181.6,
      ph: 7.61,
      conducibilita: 297.6,
      durezza: null,
      bicarbonato: 185.4,
      calcio: 60.4,
      magnesio: 3.7,
      sodio: 3.9,
      potassio: 0.35,
      solfati: 7.5,
      cloruri: 7.3,
      nitrati: 1.4,
      fluoruri: 0.14,
      silice: 5.2,
    },
    tagline: "L'oligominerale umbra dal profilo «bilanciato», povera di sodio.",
    metaDescription:
      "Acqua Rocchetta: residuo fisso 182 mg/L, oligominerale umbra con sodio basso e calcio moderato. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'rocchetta residuo fisso',
      'acqua rocchetta analisi',
      'rocchetta valori',
      'rocchetta ph',
    ],
    intro:
      "Rocchetta sgorga a Gualdo Tadino, in Umbria, ai piedi dell'Appennino, ed è imbottigliata dallo stesso gruppo di [Uliveto](/acque-minerali/uliveto), pur avendo un profilo molto diverso. È un'oligominerale dal residuo fisso di 182 mg/L, comunicata da anni con il claim della leggerezza e del benessere quotidiano.",
    sections: [
      {
        heading: 'Sodio basso, calcio moderato',
        paragraphs: [
          "Rocchetta unisce un [sodio](/parametri/sodio) basso (3,9 mg/L) a un [calcio](/parametri/durezza-totale) moderato (60 mg/L): un'acqua che resta leggera ma con un pizzico di mineralità utile. I bicarbonati intorno a 185 mg/L le danno un [pH](/parametri/ph) vicino alla neutralità.",
          "È il classico profilo dell'oligominerale «da tutti i giorni», con il vantaggio del sodio contenuto che la rende adatta anche a chi tiene d'occhio il sale.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano bilanciato',
      'Diete povere di sodio (3,9 mg/L)',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Rocchetta?',
        a: 'Circa 182 mg/L a 180 °C: è un\'acqua oligominerale leggera e povera di sodio.',
      },
      {
        q: 'Rocchetta e Uliveto sono la stessa acqua?',
        a: "No: sono imbottigliate dallo stesso gruppo ma sono acque diverse. Rocchetta è leggera e oligominerale, mentre [Uliveto](/acque-minerali/uliveto) è più mineralizzata, calcica e leggermente frizzante.",
      },
    ],
    relatedIds: ['uliveto', 'norda', 'san-benedetto'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'san-benedetto',
    brand: 'San Benedetto',
    slug: 'san-benedetto',
    producer: 'Acqua Minerale San Benedetto S.p.A.',
    sorgente: 'Fonte di Scorzè',
    comune: 'Scorzè',
    provincia: 'VE',
    regione: 'Veneto',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore (Fonte Scorzè)',
    analysis: {
      residuoFisso: 273,
      ph: 7.6,
      conducibilita: 420,
      durezza: null,
      bicarbonato: 300,
      calcio: 49.8,
      magnesio: 28.5,
      sodio: 5.9,
      potassio: 0.99,
      solfati: 4.9,
      cloruri: 3.0,
      nitrati: 9,
      fluoruri: null,
      silice: 16.5,
    },
    tagline: "Una delle acque più vendute d'Italia, oligominerale equilibrata.",
    metaDescription:
      "Acqua San Benedetto: residuo fisso 273 mg/L, oligominerale della Fonte di Scorzè con buon magnesio. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'san benedetto residuo fisso',
      'acqua san benedetto analisi',
      'san benedetto valori',
      'san benedetto ph',
    ],
    intro:
      "San Benedetto, imbottigliata a Scorzè nel veneziano, è uno dei marchi di acqua minerale più diffusi in Italia e all'estero. La sua naturale è un'oligominerale dal residuo fisso di 273 mg/L, con un contenuto di [magnesio](/parametri/durezza-totale) apprezzabile (circa 28 mg/L) e un [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Nella fascia medio-alta delle oligominerali',
        paragraphs: [
          "Con 273 mg/L di residuo, San Benedetto sta nella parte più mineralizzata delle oligominerali, ancora ben lontana dalle medio-minerali. Il magnesio (28 mg/L) è un piccolo plus, e i bicarbonati intorno a 300 mg/L danno morbidezza. Il [sodio](/parametri/sodio) di 6 mg/L la mantiene adatta a un consumo quotidiano.",
          "I [nitrati](/parametri/nitrati) si attestano intorno a 9 mg/L: entro i limiti, ma vicini alla soglia dei 10 mg/L che di solito segna il confine per le acque destinate ai lattanti. Per il consumo di adulti e bambini più grandi non è un elemento di preoccupazione.",
        ],
      },
      {
        heading: 'Un marchio multi-fonte',
        paragraphs: [
          "San Benedetto imbottiglia da più sorgenti e i valori possono variare in base allo stabilimento. Quelli riportati qui si riferiscono alla storica fonte di Scorzè; verifica sempre l'etichetta della bottiglia che acquisti.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano equilibrato',
      "Chi vuole un po' di magnesio in più",
      'Diete povere di sodio (6 mg/L)',
    ],
    cautions: [
      'I nitrati (circa 9 mg/L) sono vicini alla soglia dei 10 mg/L usata come riferimento per i lattanti.',
      'Marchio multi-fonte: i valori possono cambiare per stabilimento.',
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di San Benedetto?',
        a: 'Nella versione della Fonte di Scorzè è 273 mg/L: un\'acqua oligominerale nella fascia più mineralizzata della categoria.',
      },
      {
        q: 'San Benedetto va bene per i neonati?',
        a: "I nitrati intorno a 9 mg/L sono entro i limiti ma vicini ai 10 mg/L di riferimento per i lattanti: per la preparazione del latte artificiale molti pediatri preferiscono acque a nitrati più bassi. Chiedi consiglio al pediatra.",
      },
    ],
    relatedIds: ['vera', 'rocchetta', 'smeraldina'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'egeria',
    brand: 'Egeria',
    slug: 'egeria',
    producer: 'Acqua Santa di Roma S.r.l.',
    sorgente: 'Acqua Santa di Roma',
    comune: 'Roma',
    provincia: 'RM',
    regione: 'Lazio',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'analisi Univ. La Sapienza, 2021',
    analysis: {
      residuoFisso: 646,
      ph: 6.35,
      conducibilita: 772,
      durezza: null,
      bicarbonato: 471,
      calcio: 100,
      magnesio: 24,
      sodio: 42,
      potassio: 63,
      solfati: null,
      cloruri: null,
      nitrati: 35.1,
      fluoruri: 1.1,
      silice: 89,
      // (potassio elevato, tipico delle acque vulcaniche del Lazio)
    },
    tagline: "L'effervescente naturale di Roma, mediominerale vulcanica.",
    metaDescription:
      "Acqua Egeria: residuo fisso 646 mg/L, effervescente naturale mediominerale di Roma. Analisi dell'etichetta, fluoruri, nitrati e note d'uso.",
    searchKeywords: [
      'egeria residuo fisso',
      'acqua egeria analisi',
      'egeria acqua roma',
      'egeria valori',
    ],
    intro:
      "Egeria è l'effervescente naturale di Roma, imbottigliata dalla storica sorgente dell'Acqua Santa lungo la via Appia, in una zona di origine vulcanica. È un'acqua mediominerale (residuo fisso 646 mg/L) con bollicine naturali e un profilo tipico dei terreni vulcanici laziali, ricchi di [potassio](/glossario) e silice.",
    sections: [
      {
        heading: 'Un profilo vulcanico',
        paragraphs: [
          "Il residuo di 646 mg/L colloca Egeria fra le medio-minerali. I bicarbonati sono elevati (471 mg/L), il [calcio](/parametri/durezza-totale) è 100 mg/L e spicca il potassio (63 mg/L), insolitamente alto e caratteristico delle acque dei distretti vulcanici del Lazio. Le bollicine sono naturali, dovute all'anidride carbonica presente in falda.",
          "Da notare i [fluoruri](/parametri/fluoruri) intorno a 1,1 mg/L, che superano la soglia per la menzione «fluorata», e i [nitrati](/parametri/nitrati) sui 35 mg/L: entrambi entro i limiti di legge per un'acqua minerale, ma valori da conoscere, soprattutto se l'acqua è destinata a bambini piccoli.",
        ],
      },
    ],
    bestFor: [
      'Chi ama le bollicine naturali a tavola',
      "Chi cerca un'acqua romana dal carattere mineralizzato",
    ],
    cautions: [
      'Nitrati intorno a 35 mg/L e fluoruri a 1,1 mg/L: entro i limiti, ma non indicata per la preparazione degli alimenti dei lattanti.',
      "Il potassio elevato è un tratto naturale, ma chi ha problemi renali dovrebbe valutarlo con il medico.",
    ],
    faqs: [
      {
        q: 'Egeria è naturale o addizionata di anidride carbonica?',
        a: "È un'effervescente naturale: le bollicine derivano dall'anidride carbonica già presente nella falda, non aggiunta.",
      },
      {
        q: 'Egeria va bene per i bambini piccoli?',
        a: "Per i lattanti no: i nitrati intorno a 35 mg/L, pur entro i limiti di legge, sono troppo alti per la preparazione del latte artificiale, per cui si preferiscono acque sotto i 10 mg/L.",
      },
    ],
    relatedIds: ['ferrarelle', 'gaudianello', 'san-pellegrino'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'uliveto',
    brand: 'Uliveto',
    slug: 'uliveto',
    producer: 'Co.Ge.Di. International S.p.A.',
    sorgente: 'Sorgente Uliveto',
    comune: 'Vicopisano (Uliveto Terme)',
    provincia: 'PI',
    regione: 'Toscana',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 741,
      ph: 5.8,
      conducibilita: 1099,
      durezza: null,
      bicarbonato: 578,
      calcio: 175,
      magnesio: 26,
      sodio: 64,
      potassio: 7.2,
      solfati: 92,
      cloruri: 74,
      nitrati: 6.5,
      fluoruri: 1.0,
      silice: 8.8,
    },
    tagline: "La calcica toscana associata a digestione e benessere.",
    metaDescription:
      "Acqua Uliveto: residuo fisso 741 mg/L, mediominerale calcica leggermente frizzante. Analisi dell'etichetta, calcio, sodio e usi.",
    searchKeywords: [
      'uliveto residuo fisso',
      'acqua uliveto analisi',
      'uliveto digestione',
      'uliveto valori',
    ],
    intro:
      "Uliveto sgorga a Uliveto Terme, tra Pisa e le colline toscane, ed è da tempo associata nella comunicazione ai temi della digestione e del benessere quotidiano. È un'acqua mediominerale (residuo fisso 741 mg/L), calcica e leggermente frizzante per l'anidride carbonica naturale della sorgente.",
    sections: [
      {
        heading: 'Ricca di calcio e bicarbonati',
        paragraphs: [
          "Il tratto distintivo di Uliveto è il [calcio](/parametri/durezza-totale) elevato (175 mg/L), che le vale la menzione «calcica», insieme a bicarbonati abbondanti (578 mg/L). È una combinazione che alcuni associano a una sensazione di miglior digeribilità: le acque bicarbonato-calciche possono favorire lo svuotamento gastrico, anche se gli effetti variano da persona a persona.",
          "Il [sodio](/parametri/sodio) è più alto delle acque leggere (64 mg/L) e il [pH](/parametri/ph) è acidulo (5,8), coerente con la presenza di CO₂ naturale. Un buon apporto di calcio dall'acqua può essere utile a chi ne assume poco con la dieta.",
        ],
      },
    ],
    bestFor: [
      'Apporto di calcio (175 mg/L) per chi ne assume poco',
      'Chi cerca un aiuto percepito alla digestione',
      'Chi ama una leggera effervescenza naturale',
    ],
    cautions: [
      'Il sodio (64 mg/L) la rende meno indicata per le diete iposodiche strette.',
      "Non è pensata come acqua «da lattanti» per l'alta mineralità.",
    ],
    faqs: [
      {
        q: 'Uliveto aiuta davvero la digestione?',
        a: "Le acque bicarbonato-calciche come Uliveto possono favorire lo svuotamento gastrico e dare una sensazione di miglior digeribilità, ma l'effetto è soggettivo e non sostituisce indicazioni mediche.",
      },
      {
        q: 'Quanto calcio contiene Uliveto?',
        a: 'Circa 175 mg/L, un valore che le vale la menzione «calcica» e che può contribuire all\'apporto giornaliero di calcio.',
      },
    ],
    relatedIds: ['rocchetta', 'lete', 'sangemini'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'lete',
    brand: 'Acqua Lete',
    slug: 'lete',
    producer: 'Lete S.p.A.',
    sorgente: 'Fonti di Lete',
    comune: 'Pratella',
    provincia: 'CE',
    regione: 'Campania',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 890,
      ph: 6.2,
      conducibilita: 1150,
      durezza: null,
      bicarbonato: 930,
      calcio: 300,
      magnesio: 12.5,
      sodio: 5.1,
      potassio: 1.7,
      solfati: null,
      cloruri: 9.2,
      nitrati: 4.8,
      fluoruri: 0.3,
      silice: 9,
    },
    tagline: "Effervescente naturale ricca di calcio ma con pochissimo sodio.",
    metaDescription:
      "Acqua Lete: residuo fisso 890 mg/L, effervescente naturale calcica (300 mg/L di calcio) e a basso sodio. Analisi dell'etichetta e usi.",
    searchKeywords: [
      'lete residuo fisso',
      'acqua lete analisi',
      'lete calcio',
      'acqua lete valori',
    ],
    intro:
      "Lete è l'effervescente naturale campana imbottigliata a Pratella, ai piedi del Matese, resa celebre dalle sue bollicine naturali. È un'acqua mediominerale (residuo fisso 890 mg/L) con una combinazione particolare: tantissimo [calcio](/parametri/durezza-totale) (300 mg/L) ma pochissimo [sodio](/parametri/sodio) (5,1 mg/L).",
    sections: [
      {
        heading: 'Molto calcio, poco sodio: un binomio raro',
        paragraphs: [
          "La forza di Lete è offrire un apporto importante di calcio (300 mg/L, con menzione «calcica») senza il sodio elevato che spesso accompagna le acque mineralizzate. Con soli 5 mg/L di sodio, rientra fra le acque indicate per le diete povere di sale, pur essendo tutt'altro che «leggera» come residuo.",
          "I bicarbonati sono molto alti (930 mg/L) e il [pH](/parametri/ph) è acidulo (6,2) per l'anidride carbonica naturale. Il calcio ben assorbibile la rende una scelta interessante per chi cerca di aumentare l'apporto di questo minerale, per esempio in menopausa o in età avanzata, sempre valutando con il medico.",
        ],
      },
    ],
    bestFor: [
      'Aumentare l\'apporto di calcio (300 mg/L)',
      'Diete povere di sodio (5 mg/L), pur con residuo alto',
      'Chi ama le bollicine naturali',
    ],
    cautions: [
      "L'alto residuo e il calcio elevato la rendono un'acqua «funzionale», non la più adatta a un uso indifferenziato per tutti.",
    ],
    faqs: [
      {
        q: 'Perché Lete è consigliata per il calcio?',
        a: "Perché contiene circa 300 mg/L di calcio, uno dei valori più alti fra le acque diffuse, in una forma ben assorbibile. È utile a chi vuole aumentare l'apporto di calcio, per esempio in menopausa.",
      },
      {
        q: 'Lete ha molto sodio?',
        a: "No, al contrario: pur essendo un'acqua ricca di minerali, ha solo circa 5 mg/L di sodio, quindi è adatta anche a chi deve limitare il sale.",
      },
    ],
    relatedIds: ['sangemini', 'uliveto', 'ferrarelle'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'san-pellegrino',
    brand: 'San Pellegrino',
    slug: 'san-pellegrino',
    producer: 'Sanpellegrino S.p.A. (Gruppo Nestlé)',
    sorgente: 'Sorgente termale di San Pellegrino (Val Brembana)',
    comune: 'San Pellegrino Terme',
    provincia: 'BG',
    regione: 'Lombardia',
    altitudine: null,
    type: 'frizzante',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 915,
      ph: 7.84,
      conducibilita: 1079,
      durezza: null,
      bicarbonato: 245,
      calcio: 174,
      magnesio: 51.4,
      sodio: 33.3,
      potassio: 2.2,
      solfati: 430,
      cloruri: 52,
      nitrati: 2.6,
      fluoruri: null,
      silice: 7.1,
    },
    tagline: "L'icona italiana nel mondo: frizzante solfato-calcica della Val Brembana.",
    metaDescription:
      "San Pellegrino: residuo fisso circa 915 mg/L, mediominerale solfato-calcica. Analisi dell'etichetta, solfati, magnesio e perché è celebre a tavola.",
    searchKeywords: [
      'san pellegrino residuo fisso',
      'san pellegrino analisi',
      'sanpellegrino valori',
      'san pellegrino solfati',
    ],
    intro:
      "San Pellegrino è probabilmente l'acqua italiana più famosa nel mondo, simbolo del «made in Italy» a tavola. Nasce dalle sorgenti termali della Val Brembana, nel bergamasco, ed è un'acqua mediominerale (residuo fisso intorno a 915 mg/L) solfato-calcica, resa frizzante con l'aggiunta di anidride carbonica.",
    sections: [
      {
        heading: 'Un profilo ricco: solfati, calcio, magnesio',
        paragraphs: [
          "Ciò che caratterizza San Pellegrino è l'alto contenuto di [solfati](/parametri/solfati) (circa 430 mg/L, con menzione «solfata»), [calcio](/parametri/durezza-totale) (174 mg/L) e [magnesio](/parametri/durezza-totale) (oltre 51 mg/L, quindi «magnesiaca»). È una mineralità decisa, che a tavola regge bene i piatti strutturati e i sapori intensi, motivo per cui è così amata nella ristorazione.",
          "Le bollicine sono aggiunte (acqua «frizzante», non effervescente naturale): l'acqua alla sorgente è meno gassata e la CO₂ viene reintrodotta in fase di imbottigliamento. Il [sodio](/parametri/sodio) è moderato (33 mg/L). Va segnalato che il residuo esatto varia leggermente tra le annate di etichetta, intorno ai 900 mg/L.",
        ],
      },
    ],
    bestFor: [
      'Abbinamento a tavola con piatti strutturati',
      "Chi cerca un apporto di calcio e magnesio con le bollicine",
    ],
    cautions: [
      "Il sodio (33 mg/L) e l'alta mineralità la rendono meno adatta alle diete iposodiche strette.",
      "L'alto contenuto di solfati può avere un blando effetto sull'intestino in soggetti sensibili se bevuta in grandi quantità.",
    ],
    faqs: [
      {
        q: 'San Pellegrino è naturalmente frizzante?',
        a: "No: è un'acqua minerale naturale a cui viene aggiunta anidride carbonica in fase di imbottigliamento. Per questo in etichetta è indicata come «frizzante» e non «effervescente naturale».",
      },
      {
        q: 'Qual è il residuo fisso di San Pellegrino?',
        a: 'Intorno a 915 mg/L a 180 °C (il valore oscilla di poco tra le annate): è un\'acqua mediominerale, solfato-calcica.',
      },
    ],
    relatedIds: ['panna', 'ferrarelle', 'sangemini'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'sangemini',
    brand: 'Sangemini',
    slug: 'sangemini',
    producer: "Acque Minerali d'Italia S.p.A.",
    sorgente: 'Fonte Sangemini',
    comune: 'San Gemini',
    provincia: 'TR',
    regione: 'Umbria',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'analisi Univ. di Perugia, 2013',
    analysis: {
      residuoFisso: 932,
      ph: 6.2,
      conducibilita: 1365,
      durezza: null,
      bicarbonato: 976,
      calcio: 310,
      magnesio: 15.1,
      sodio: 19.9,
      potassio: 3.8,
      solfati: 55.7,
      cloruri: 18.8,
      nitrati: 0.9,
      fluoruri: 0.2,
      silice: 27.6,
    },
    tagline: "La storica «acqua che fa bene ai bambini», calcica umbra.",
    metaDescription:
      "Acqua Sangemini: residuo fisso 932 mg/L, mediominerale calcica umbra con nitrati bassissimi. Analisi dell'etichetta e la tradizione dell'infanzia.",
    searchKeywords: [
      'sangemini residuo fisso',
      'sangemini bambini',
      'acqua sangemini analisi',
      'sangemini valori',
    ],
    intro:
      "Sangemini è un marchio umbro storico, legato nell'immaginario collettivo all'infanzia («Sangemini fa bene ai bambini»). Nasce a San Gemini, in provincia di Terni, ed è un'acqua mediominerale (residuo fisso 932 mg/L), bicarbonato-calcica ed effervescente naturale.",
    sections: [
      {
        heading: 'Molto calcio e nitrati bassissimi',
        paragraphs: [
          "La combinazione che ha reso Sangemini «l'acqua dei bambini» è quella di un [calcio](/parametri/durezza-totale) molto elevato (310 mg/L) unito a [nitrati](/parametri/nitrati) bassissimi (sotto 1 mg/L). Il calcio è utile in fase di crescita, mentre i nitrati quasi assenti sono importanti proprio per i più piccoli, che vi sono più sensibili.",
          "Attenzione però a non confondere due prodotti diversi dello stesso mondo: la classica Sangemini mediominerale ricca di calcio è pensata per bambini più grandi e adulti; per i lattanti esistono acque dedicate a mineralità molto più bassa. L'alta mineralità e i bicarbonati (976 mg/L) danno all'acqua un carattere deciso e un [pH](/parametri/ph) acidulo (6,2).",
        ],
      },
    ],
    bestFor: [
      'Apporto di calcio in età di crescita (310 mg/L)',
      'Nitrati bassissimi (< 1 mg/L)',
      'Chi cerca un\'effervescente naturale calcica',
    ],
    cautions: [
      "È molto mineralizzata: per i lattanti si usano acque a residuo molto più basso, non questa. Chiedi al pediatra.",
    ],
    faqs: [
      {
        q: 'Perché si dice che Sangemini fa bene ai bambini?',
        a: "Per lo slogan storico e per un profilo che unisce molto calcio (utile alla crescita) e nitrati bassissimi (importanti per i più piccoli). Resta però un'acqua mineralizzata, adatta a bambini più grandi e adulti, non ai lattanti.",
      },
      {
        q: 'Qual è il residuo fisso di Sangemini?',
        a: 'Circa 932 mg/L a 180 °C: è un\'acqua mediominerale, bicarbonato-calcica.',
      },
    ],
    relatedIds: ['lete', 'uliveto', 'gaudianello'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'gaudianello',
    brand: 'Gaudianello',
    slug: 'gaudianello',
    producer: "Acque Minerali d'Italia S.p.A.",
    sorgente: 'Sorgente Gaudianello (Monticchio, Monte Vulture)',
    comune: 'Rionero in Vulture',
    provincia: 'PZ',
    regione: 'Basilicata',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'analisi Univ. di Napoli, 2015',
    analysis: {
      residuoFisso: 1156,
      ph: 5.9,
      conducibilita: 1504,
      durezza: null,
      bicarbonato: 966,
      calcio: 155,
      magnesio: 59,
      sodio: 130,
      potassio: 51,
      solfati: 125,
      cloruri: 39,
      nitrati: 3,
      fluoruri: null,
      silice: 110,
    },
    tagline: "L'effervescente naturale del Vulture, ricca e magnesiaca.",
    metaDescription:
      "Acqua Gaudianello: residuo fisso 1156 mg/L, mediominerale effervescente naturale del Vulture, ricca di magnesio. Analisi dell'etichetta e usi.",
    searchKeywords: [
      'gaudianello residuo fisso',
      'acqua gaudianello analisi',
      'gaudianello vulture',
      'gaudianello valori',
    ],
    intro:
      "Gaudianello sgorga sul Monte Vulture, l'antico vulcano spento della Basilicata, nella zona di Monticchio, celebre per le sue acque effervescenti naturali. È un'acqua mediominerale piuttosto ricca (residuo fisso 1156 mg/L), bicarbonato-magnesiaca, con le tipiche bollicine naturali di questo territorio.",
    sections: [
      {
        heading: 'Il carattere delle acque del Vulture',
        paragraphs: [
          "Le acque del Vulture, come Gaudianello, si distinguono per l'alto contenuto di [magnesio](/parametri/durezza-totale) (qui 59 mg/L, con menzione «magnesiaca»), bicarbonati abbondanti (966 mg/L) e una spiccata effervescenza naturale dovuta alla CO₂ di origine vulcanica. Il [pH](/parametri/ph) acidulo (5,9) è tipico di queste acque gassate in falda.",
          "Il [sodio](/parametri/sodio) è più alto (130 mg/L) e anche il potassio è notevole (51 mg/L): è un'acqua dal profilo deciso, che dà il meglio a tavola con piatti saporiti. Il magnesio elevato può interessare chi cerca di integrarne l'apporto.",
        ],
      },
    ],
    bestFor: [
      'Apporto di magnesio (59 mg/L)',
      'Chi ama le effervescenze naturali intense',
      'Abbinamento con piatti saporiti',
    ],
    cautions: [
      "Il sodio (130 mg/L) la rende non adatta alle diete iposodiche.",
      "Acqua molto mineralizzata: meglio come acqua «funzionale» che per l'uso indifferenziato.",
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Gaudianello?',
        a: 'Circa 1156 mg/L a 180 °C: è un\'acqua mediominerale, effervescente naturale e magnesiaca.',
      },
      {
        q: 'Perché le acque del Vulture sono frizzanti in modo naturale?',
        a: "Perché nel sottosuolo del Vulture, antico vulcano, l'acqua si arricchisce di anidride carbonica di origine profonda, che le dà l'effervescenza naturale senza aggiunte.",
      },
    ],
    relatedIds: ['ferrarelle', 'egeria', 'sangemini'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'ferrarelle',
    brand: 'Ferrarelle',
    slug: 'ferrarelle',
    producer: 'Ferrarelle S.p.A.',
    sorgente: 'Sorgenti di Riardo (Roccamonfina)',
    comune: 'Riardo',
    provincia: 'CE',
    regione: 'Campania',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 1323,
      ph: 6.2,
      conducibilita: 1800,
      durezza: null,
      bicarbonato: 1500,
      calcio: 400,
      magnesio: 25,
      sodio: 50,
      potassio: 49,
      solfati: 4.7,
      cloruri: 16,
      nitrati: 3.5,
      fluoruri: 1.0,
      silice: 85,
    },
    tagline: "«Liscia, gassata o Ferrarelle?»: l'effervescente naturale per antonomasia.",
    metaDescription:
      "Ferrarelle: residuo fisso 1323 mg/L, effervescente naturale bicarbonato-calcica di Riardo. Analisi dell'etichetta, calcio, bollicine naturali e usi.",
    searchKeywords: [
      'ferrarelle residuo fisso',
      'ferrarelle analisi',
      'ferrarelle effervescente naturale',
      'ferrarelle valori',
    ],
    intro:
      "Ferrarelle è talmente identificata con l'effervescenza naturale da essere entrata nel linguaggio comune («liscia, gassata o Ferrarelle?»). Nasce dalle sorgenti di Riardo, ai piedi del vulcano spento di Roccamonfina, in Campania, ed è un'acqua mediominerale (residuo fisso 1323 mg/L) bicarbonato-calcica, con bollicine naturali dovute alla CO₂ vulcanica.",
    sections: [
      {
        heading: 'Le bollicine che nascono dal vulcano',
        paragraphs: [
          "L'effervescenza di Ferrarelle non è aggiunta: l'anidride carbonica risale dal sottosuolo vulcanico di Roccamonfina e si scioglie nell'acqua in profondità. È questa CO₂ naturale che dà le bollicine fini e persistenti e un [pH](/parametri/ph) acidulo (6,2), oltre a mantenere in soluzione i minerali.",
          "Il profilo è nettamente bicarbonato-calcico: bicarbonati altissimi (1500 mg/L) e [calcio](/parametri/durezza-totale) importante (400 mg/L, menzione «calcica»). Questa combinazione la rende un'acqua «strutturata», che alcuni trovano piacevolmente digestiva dopo i pasti. Il [sodio](/parametri/sodio) resta contenuto (50 mg/L) rispetto alla mineralità complessiva.",
        ],
      },
    ],
    bestFor: [
      'Apporto di calcio (400 mg/L)',
      'Chi ama le bollicine naturali fini a fine pasto',
      'Abbinamento a tavola',
    ],
    cautions: [
      "Acqua molto mineralizzata: adatta come acqua «da pasto» più che per un consumo indifferenziato di grandi quantità.",
      'Il calcio elevato dà una durezza alta: non è la scelta per chi cerca leggerezza.',
    ],
    faqs: [
      {
        q: 'Ferrarelle è veramente effervescente naturale?',
        a: "Sì: le bollicine derivano dall'anidride carbonica di origine vulcanica presente naturalmente nella falda di Riardo, non aggiunta in fase di imbottigliamento.",
      },
      {
        q: 'Qual è il residuo fisso di Ferrarelle?',
        a: 'Circa 1323 mg/L a 180 °C: è un\'acqua mediominerale, bicarbonato-calcica ricca di calcio.',
      },
    ],
    relatedIds: ['san-pellegrino', 'lete', 'gaudianello'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'fonte-essenziale',
    brand: 'Fonte Essenziale',
    slug: 'fonte-essenziale',
    producer: 'Ferrarelle S.p.A. (Terme di Boario)',
    sorgente: 'Fonte Essenziale — Terme di Boario',
    comune: 'Darfo Boario Terme',
    provincia: 'BS',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'ricca-di-sali',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 2470,
      ph: 7.2,
      conducibilita: 2300,
      durezza: null,
      bicarbonato: 268,
      calcio: 580,
      magnesio: 101,
      sodio: 14,
      potassio: null,
      solfati: 1590,
      cloruri: null,
      nitrati: 0.5,
      fluoruri: null,
      silice: null,
    },
    tagline: "L'acqua «della salute»: solfato-magnesiaca a scopo funzionale.",
    metaDescription:
      "Fonte Essenziale (Terme di Boario): residuo fisso 2470 mg/L, ricca di sali, solfato-calcico-magnesiaca. Analisi dell'etichetta e uso corretto.",
    searchKeywords: [
      'fonte essenziale residuo fisso',
      'fonte essenziale boario analisi',
      'fonte essenziale a cosa serve',
      'fonte essenziale valori',
    ],
    intro:
      "Fonte Essenziale è un'acqua diversa da tutte le altre di questa raccolta: non è un'acqua «da tavola», ma un'acqua ricca di sali (residuo fisso 2470 mg/L) che si beve a scopo funzionale, nella tradizione delle cure idropiniche delle Terme di Boario, in Valcamonica. È solfato-calcico-magnesiaca e va usata con criterio.",
    sections: [
      {
        heading: "A cosa serve un'acqua così ricca di solfati",
        paragraphs: [
          "Il tratto che definisce Fonte Essenziale è l'altissimo contenuto di [solfati](/parametri/solfati) (1590 mg/L), insieme a [calcio](/parametri/durezza-totale) (580 mg/L) e [magnesio](/parametri/durezza-totale) (101 mg/L). I solfati di magnesio, in quantità elevate, hanno un noto effetto sulla motilità intestinale: per questo l'acqua è tradizionalmente usata come coadiuvante contro la stitichezza e per favorire funzioni digestive ed epatiche.",
          "Proprio per la sua concentrazione, non è un'acqua da bere tutto il giorno al posto dell'acqua normale: si assume in quantità e modalità definite, spesso al mattino, per un ciclo limitato, idealmente con il consiglio del medico. Il [sodio](/parametri/sodio) resta basso (14 mg/L), quindi il carattere «funzionale» viene dai solfati e dal magnesio, non dal sale.",
        ],
      },
      {
        heading: 'Perché sta a parte nella classificazione',
        paragraphs: [
          "Con un residuo oltre i 1500 mg/L, Fonte Essenziale rientra nella categoria delle acque «ricche di sali minerali». È utile capire che categorie diverse rispondono a bisogni diversi: un'acqua come questa non va confrontata con una leggerissima come [Lauretana](/acque-minerali/lauretana), perché servono a cose completamente differenti.",
        ],
      },
    ],
    bestFor: [
      'Uso funzionale contro la stitichezza (a cicli, con il medico)',
      'Chi cerca un apporto elevato di magnesio e solfati a scopo mirato',
    ],
    cautions: [
      "Non è un'acqua da tavola: si beve in quantità e periodi definiti, preferibilmente su indicazione medica.",
      "L'effetto lassativo dei solfati è marcato: attenzione nelle persone sensibili e sconsigliata senza motivo.",
    ],
    faqs: [
      {
        q: 'A cosa serve Fonte Essenziale?',
        a: "È un'acqua ricca di solfati e magnesio usata a scopo funzionale, soprattutto come coadiuvante contro la stitichezza e per favorire la digestione. Non è un'acqua da bere quotidianamente al posto di quella da tavola.",
      },
      {
        q: 'Si può bere Fonte Essenziale tutti i giorni?',
        a: "No, non come acqua normale: per l'altissimo contenuto di sali e l'effetto sull'intestino va assunta in quantità e periodi definiti, idealmente su consiglio del medico.",
      },
    ],
    relatedIds: ['san-pellegrino', 'ferrarelle', 'sangemini'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'san-bernardo',
    brand: 'San Bernardo',
    slug: 'san-bernardo',
    producer: 'Acqua Minerale San Bernardo S.p.A.',
    sorgente: 'Sorgente Rocciaviva',
    comune: 'Garessio',
    provincia: 'CN',
    regione: 'Piemonte',
    altitudine: 1300,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 34,
      ph: 7.0,
      conducibilita: 48,
      durezza: 2.5,
      bicarbonato: 27.9,
      calcio: 9.1,
      magnesio: 0.6,
      sodio: 0.8,
      potassio: 0.4,
      solfati: 2.6,
      cloruri: 0.8,
      nitrati: 1.4,
      fluoruri: null,
      silice: 4.2,
    },
    tagline: "L'acqua di montagna delle Alpi Marittime, molto leggera.",
    metaDescription:
      "Acqua San Bernardo: residuo fisso 34 mg/L, minimamente mineralizzata dalla sorgente Rocciaviva di Garessio. Analisi dell'etichetta, sodio e a chi è adatta.",
    searchKeywords: [
      'san bernardo residuo fisso',
      'acqua san bernardo analisi',
      'san bernardo valori',
      'acqua san bernardo garessio',
    ],
    intro:
      "San Bernardo è un'acqua di montagna molto popolare, imbottigliata dalla sorgente Rocciaviva a Garessio, nelle Alpi Marittime cuneesi, a quota elevata. Con un residuo fisso di 34 mg/L è minimamente mineralizzata e punta tutto sulla leggerezza e sull'immagine dell'alta quota.",
    sections: [
      {
        heading: 'Leggera e con pochissimo sodio',
        paragraphs: [
          "Il profilo di San Bernardo è quello classico dell'acqua alpina leggerissima: [sodio](/parametri/sodio) quasi assente (0,8 mg/L), [calcio](/parametri/durezza-totale) minimo e [nitrati](/parametri/nitrati) bassi. È adatta alle diete povere di sale e alla preparazione degli alimenti dei lattanti, oltre a lasciare poco calcare.",
          "Il [pH](/parametri/ph) è vicino alla neutralità (7,0). Rispetto ad altre leggerissime come [Lauretana](/acque-minerali/lauretana) o [Lurisia](/acque-minerali/lurisia), San Bernardo si distingue soprattutto per la riconoscibilità del marchio e per la comunicazione legata alle montagne piemontesi.",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (0,8 mg/L)',
      'Preparazione degli alimenti dei lattanti',
      'Uso quotidiano leggero, senza calcare',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di San Bernardo?',
        a: '34 mg/L a 180 °C: è un\'acqua minimamente mineralizzata, tra le più leggere in commercio.',
      },
      {
        q: 'Da dove viene San Bernardo?',
        a: 'Dalla sorgente Rocciaviva, a Garessio, nelle Alpi Marittime in provincia di Cuneo.',
      },
    ],
    relatedIds: ['lurisia', 'maniva', 'lauretana'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'lurisia',
    brand: 'Lurisia',
    slug: 'lurisia',
    producer: 'Acque Minerali Lurisia',
    sorgente: 'Santa Barbara (Monte Pigna)',
    comune: 'Roccaforte Mondovì',
    provincia: 'CN',
    regione: 'Piemonte',
    altitudine: 900,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 38,
      ph: 6.7,
      conducibilita: 34,
      durezza: 1.1,
      bicarbonato: 18,
      calcio: 4.0,
      magnesio: 0.43,
      sodio: 2.7,
      potassio: 0.71,
      solfati: 1.9,
      cloruri: 0.35,
      nitrati: 3.1,
      fluoruri: null,
      silice: null,
    },
    tagline: "La leggerissima piemontese dalla storia termale, molto pura.",
    metaDescription:
      "Acqua Lurisia: residuo fisso 38 mg/L, minimamente mineralizzata dalla sorgente Santa Barbara. Analisi dell'etichetta, pH e caratteristiche.",
    searchKeywords: [
      'lurisia residuo fisso',
      'acqua lurisia analisi',
      'lurisia valori',
      'acqua lurisia stille',
    ],
    intro:
      "Lurisia nasce dalla sorgente Santa Barbara, sul Monte Pigna, nel comune di Roccaforte Mondovì, in una località termale storica delle Alpi cuneesi. È un'acqua minimamente mineralizzata (residuo fisso 38 mg/L) dal profilo purissimo, che nel tempo si è costruita un posizionamento premium.",
    sections: [
      {
        heading: 'Tra le più povere di sali in assoluto',
        paragraphs: [
          "Con appena 38 mg/L di residuo e una [conducibilità](/parametri/conducibilita) bassissima (34 µS/cm), Lurisia è nella ristretta cerchia delle acque leggerissime, insieme a [Lauretana](/acque-minerali/lauretana) e [Plose](/acque-minerali/plose). Il [calcio](/parametri/durezza-totale) è minimo (4 mg/L) e il [sodio](/parametri/sodio) molto basso (2,7 mg/L).",
          "Il [pH](/parametri/ph) leggermente acido (6,7) è coerente con la scarsità di bicarbonati. È un'acqua dal gusto pulito e discreto, che non interferisce con i sapori — motivo per cui è apprezzata anche nella ristorazione attenta.",
        ],
      },
    ],
    bestFor: [
      'Gusto neutro e pulito, per la tavola',
      'Diete povere di sodio (2,7 mg/L)',
      'Preparazione degli alimenti dei lattanti',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Lurisia?',
        a: '38 mg/L a 180 °C: un\'acqua minimamente mineralizzata, tra le più leggere sul mercato.',
      },
    ],
    relatedIds: ['san-bernardo', 'plose', 'lauretana'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'maniva',
    brand: 'Maniva',
    slug: 'maniva',
    producer: 'Fonte Maniva S.p.A.',
    sorgente: 'Sorgente Monte Maniva',
    comune: 'Bagolino',
    provincia: 'BS',
    regione: 'Lombardia',
    altitudine: 1750,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Pavia',
    analysis: {
      residuoFisso: 98,
      ph: 8.0,
      conducibilita: 147,
      durezza: 7.8,
      bicarbonato: 88,
      calcio: 25,
      magnesio: 4.2,
      sodio: 2.7,
      potassio: 0.8,
      solfati: 7.5,
      cloruri: 3.0,
      nitrati: 4.6,
      fluoruri: null,
      silice: 6.7,
    },
    tagline: "Alcalina d'alta quota dalle Prealpi bresciane.",
    metaDescription:
      "Acqua Maniva: residuo fisso 98 mg/L, oligominerale alcalina (pH 8) dal Monte Maniva. Analisi dell'etichetta, sodio basso e caratteristiche.",
    searchKeywords: [
      'maniva residuo fisso',
      'acqua maniva analisi',
      'maniva valori',
      'acqua maniva ph',
    ],
    intro:
      "Maniva sgorga a circa 1.750 metri di quota sul Monte Maniva, nelle Prealpi bresciane, ed è una delle acque di alta montagna più diffuse in Lombardia. È un'oligominerale leggera (residuo fisso 98 mg/L) con un [pH](/parametri/ph) basico (8,0) e un contenuto di [sodio](/parametri/sodio) molto basso.",
    sections: [
      {
        heading: 'Leggera, alcalina e povera di sodio',
        paragraphs: [
          "Con 98 mg/L di residuo, Maniva sta al confine tra le leggerissime e le oligominerali, molto vicina a [Levissima](/acque-minerali/levissima). Il sodio bassissimo (2,7 mg/L) la rende adatta alle diete iposodiche e il pH basico le dà un carattere «alcalino».",
          "Come per altre acque, «alcalina» descrive solo il pH superiore a 7 dovuto ai bicarbonati e non ha effetti sull'equilibrio acido-base del corpo. Resta un'ottima acqua da tutti i giorni, leggera e con poco calcare.",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (2,7 mg/L)',
      'Uso quotidiano leggero',
      "Chi cerca un'acqua di montagna alcalina",
    ],
    cautions: [
      "«Alcalina» (pH 8) non significa che «alcalinizza» l'organismo.",
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Maniva?',
        a: '98 mg/L a 180 °C: è un\'acqua oligominerale leggera e povera di sodio.',
      },
    ],
    relatedIds: ['san-bernardo', 'levissima', 'pejo'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'pejo',
    brand: 'Pejo',
    slug: 'pejo',
    producer: 'Idropejo S.r.l.',
    sorgente: 'Fonte Alpina',
    comune: 'Cogolo di Pejo',
    provincia: 'TN',
    regione: 'Trentino-Alto Adige',
    altitudine: 1400,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore (Fonte Alpina)',
    analysis: {
      residuoFisso: 109,
      ph: 6.9,
      conducibilita: 170,
      durezza: 8.2,
      bicarbonato: 49.1,
      calcio: 22.9,
      magnesio: 5.9,
      sodio: 2.1,
      potassio: 1.9,
      solfati: null,
      cloruri: null,
      nitrati: 3.1,
      fluoruri: null,
      silice: null,
    },
    tagline: "L'oligominerale trentina della Val di Sole, povera di sodio.",
    metaDescription:
      "Acqua Pejo (Fonte Alpina): residuo fisso 109 mg/L, oligominerale trentina povera di sodio. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'pejo residuo fisso',
      'acqua pejo analisi',
      'pejo valori',
      'acqua pejo fonte alpina',
    ],
    intro:
      "Pejo nasce a Cogolo, nella Val di Sole trentina, in una zona nota anche per le terme. La versione Fonte Alpina è un'oligominerale leggera (residuo fisso 109 mg/L), povera di sodio, dal profilo tipico delle acque dolomitiche di montagna.",
    sections: [
      {
        heading: 'Un profilo dolomitico equilibrato',
        paragraphs: [
          "Con residuo di 109 mg/L, [sodio](/parametri/sodio) basso (2,1 mg/L) e una [durezza](/parametri/durezza-totale) contenuta (8,2 °F), Pejo è un'acqua leggera adatta a un uso quotidiano e alle diete povere di sale. Il [pH](/parametri/ph) vicino alla neutralità (6,9) completa un profilo equilibrato.",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (2,1 mg/L)',
      'Uso quotidiano leggero',
    ],
    cautions: [
      'Circolano due edizioni di etichetta con residuo leggermente diverso (circa 95–109 mg/L): fa fede la bottiglia.',
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Pejo?',
        a: 'Circa 109 mg/L a 180 °C nella Fonte Alpina: è un\'acqua oligominerale leggera e povera di sodio.',
      },
    ],
    relatedIds: ['maniva', 'levissima', 'san-bernardo'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'guizza',
    brand: 'Guizza',
    slug: 'guizza',
    producer: 'Acqua Minerale San Benedetto S.p.A.',
    sorgente: 'Fonte Guizza',
    comune: 'Scorzè',
    provincia: 'VE',
    regione: 'Veneto',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi 09/07/2021',
    analysis: {
      residuoFisso: 291,
      ph: 7.48,
      conducibilita: 422,
      durezza: 24.2,
      bicarbonato: 307,
      calcio: 48.4,
      magnesio: 28.6,
      sodio: 6.1,
      potassio: 0.98,
      solfati: 4.38,
      cloruri: 2.9,
      nitrati: 10,
      fluoruri: null,
      silice: 15.2,
    },
    tagline: "L'oligominerale veneta economica del gruppo San Benedetto.",
    metaDescription:
      "Acqua Guizza: residuo fisso 291 mg/L, oligominerale della Fonte Guizza di Scorzè con buon magnesio. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'guizza residuo fisso',
      'acqua guizza analisi',
      'guizza valori',
      'acqua guizza san benedetto',
    ],
    intro:
      "Guizza è un'acqua molto diffusa nella grande distribuzione a prezzo popolare, imbottigliata a Scorzè (Venezia) dallo stesso gruppo di [San Benedetto](/acque-minerali/san-benedetto). È un'oligominerale nella fascia media (residuo fisso 291 mg/L), con un contenuto di [magnesio](/parametri/durezza-totale) apprezzabile.",
    sections: [
      {
        heading: 'Equilibrata, con un po\' di magnesio',
        paragraphs: [
          "Con 291 mg/L di residuo, [calcio](/parametri/durezza-totale) intorno a 48 mg/L e magnesio a 28 mg/L, Guizza è un'oligominerale «di sostanza» dal buon rapporto qualità-prezzo. Il [sodio](/parametri/sodio) resta basso (6 mg/L), adatto anche a chi limita il sale.",
          "I [nitrati](/parametri/nitrati) sono intorno a 10 mg/L, il valore di riferimento oltre il quale si tende a preferire altre acque per i lattanti: per il consumo di adulti e bambini più grandi non è un problema.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano economico',
      "Chi vuole un po' di magnesio in più",
      'Diete povere di sodio (6 mg/L)',
    ],
    cautions: [
      'Nitrati intorno a 10 mg/L: al limite del riferimento usato per i lattanti.',
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Guizza?',
        a: 'Circa 291 mg/L a 180 °C: un\'acqua oligominerale della Fonte Guizza di Scorzè.',
      },
    ],
    relatedIds: ['san-benedetto', 'vera', 'norda'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'vitasnella',
    brand: 'Vitasnella',
    slug: 'vitasnella',
    producer: 'Sanpellegrino S.p.A. (Gruppo Nestlé)',
    sorgente: 'Fonte Vitas',
    comune: 'Darfo Boario Terme',
    provincia: 'BS',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 396,
      ph: 7.4,
      conducibilita: 572,
      durezza: null,
      bicarbonato: 324,
      calcio: 86,
      magnesio: 34,
      sodio: 3.3,
      potassio: 1.5,
      solfati: 91,
      cloruri: 4,
      nitrati: 4.7,
      fluoruri: 0.4,
      silice: 9.2,
    },
    tagline: "L'oligominerale della Val Camonica, povera di sodio e con magnesio.",
    metaDescription:
      "Acqua Vitasnella: residuo fisso 396 mg/L, oligominerale con buon magnesio e sodio bassissimo. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'vitasnella residuo fisso',
      'acqua vitasnella analisi',
      'vitasnella valori',
      'acqua vitasnella',
    ],
    intro:
      "Vitasnella è un marchio storicamente legato all'idea di leggerezza e benessere, imbottigliato dalla Fonte Vitas a Darfo Boario Terme, in Val Camonica. È un'oligominerale nella fascia medio-alta (residuo fisso 396 mg/L) con un buon contenuto di [magnesio](/parametri/durezza-totale) e sodio bassissimo.",
    sections: [
      {
        heading: 'Sodio quasi assente, magnesio interessante',
        paragraphs: [
          "Il tratto utile di Vitasnella è il [sodio](/parametri/sodio) molto basso (3,3 mg/L) unito a un magnesio apprezzabile (34 mg/L) e a [solfati](/parametri/solfati) intorno a 91 mg/L. È un'acqua adatta alle diete povere di sale che offre comunque un po' di mineralità.",
          "Va chiarito un equivoco storico: nessuna acqua «fa dimagrire». La leggerezza di Vitasnella riguarda il gusto e il basso sodio, non un effetto sul peso: le calorie di un'acqua minerale sono sempre zero, qualunque sia il residuo.",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (3,3 mg/L)',
      "Chi cerca magnesio con un'acqua leggera al gusto",
    ],
    cautions: [
      "Nessuna acqua «fa dimagrire»: la leggerezza è di gusto, non un effetto sul peso.",
    ],
    faqs: [
      {
        q: 'Vitasnella fa dimagrire?',
        a: "No. Come tutte le acque non ha calorie e non ha effetti dimagranti: il nome e la comunicazione richiamano la leggerezza del gusto e il basso sodio, non un dimagrimento.",
      },
      {
        q: 'Qual è il residuo fisso di Vitasnella?',
        a: 'Circa 396 mg/L a 180 °C: è un\'acqua oligominerale con sodio bassissimo e buon magnesio.',
      },
    ],
    relatedIds: ['cerelia', 'san-benedetto', 'rocchetta'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'cerelia',
    brand: 'Cerelia',
    slug: 'cerelia',
    producer: 'Cerelia — Sorgenti Italiane Regionali S.p.A.',
    sorgente: 'Sorgente Cerelia (Cereglio)',
    comune: 'Vergato',
    provincia: 'BO',
    regione: 'Emilia-Romagna',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Camerino',
    analysis: {
      residuoFisso: 322,
      ph: 7.4,
      conducibilita: 548,
      durezza: null,
      bicarbonato: 418,
      calcio: 121,
      magnesio: 10.8,
      sodio: 5.7,
      potassio: 0.5,
      solfati: 7.8,
      cloruri: 6.2,
      nitrati: 2.0,
      fluoruri: 0.1,
      silice: 8,
    },
    tagline: "Bicarbonato-calcica dell'Appennino bolognese, povera di sodio.",
    metaDescription:
      "Acqua Cerelia: residuo fisso 322 mg/L, oligominerale bicarbonato-calcica dell'Appennino bolognese. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'cerelia residuo fisso',
      'acqua cerelia analisi',
      'cerelia valori',
      'acqua cerelia',
    ],
    intro:
      "Cerelia nasce nell'Appennino bolognese, nella frazione di Cereglio a Vergato, ed è un'acqua storica dell'Emilia-Romagna. È un'oligominerale bicarbonato-calcica (residuo fisso 322 mg/L) con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Un buon apporto di calcio, poco sodio',
        paragraphs: [
          "Cerelia unisce un [calcio](/parametri/durezza-totale) discreto (121 mg/L) e bicarbonati abbondanti (418 mg/L) a un sodio basso (5,7 mg/L): un profilo che dà un po' di mineralità utile senza appesantire chi limita il sale. Il [pH](/parametri/ph) è vicino alla neutralità (7,4).",
        ],
      },
    ],
    bestFor: [
      "Chi cerca un po' di calcio con sodio basso",
      'Diete povere di sodio (5,7 mg/L)',
      'Uso quotidiano',
    ],
    cautions: [
      'Circolano due edizioni di etichetta con residuo diverso (circa 322–378 mg/L): fa fede la bottiglia.',
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Cerelia?',
        a: 'Circa 322 mg/L a 180 °C: un\'acqua oligominerale bicarbonato-calcica dell\'Appennino bolognese.',
      },
    ],
    relatedIds: ['vitasnella', 'san-benedetto', 'frasassi'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'frasassi',
    brand: 'Frasassi',
    slug: 'frasassi',
    producer: 'Togni S.p.A.',
    sorgente: 'Sorgente Frasassi',
    comune: 'Genga',
    provincia: 'AN',
    regione: 'Marche',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'analisi Univ. di Camerino, 2019',
    analysis: {
      residuoFisso: 327.7,
      ph: 7.33,
      conducibilita: 512,
      durezza: null,
      bicarbonato: 312.3,
      calcio: 97.2,
      magnesio: 4.2,
      sodio: 17.9,
      potassio: 1.7,
      solfati: null,
      cloruri: 19.9,
      nitrati: 2.3,
      fluoruri: null,
      silice: 10.9,
    },
    tagline: "L'oligominerale marchigiana dalle gole di Frasassi.",
    metaDescription:
      "Acqua Frasassi: residuo fisso 328 mg/L, oligominerale marchigiana della zona delle celebri grotte. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'frasassi residuo fisso',
      'acqua frasassi analisi',
      'frasassi valori',
      'acqua frasassi',
    ],
    intro:
      "Frasassi nasce a Genga, nelle Marche, nella zona delle celebri grotte carsiche da cui prende il nome. È un'oligominerale bicarbonato-calcica (residuo fisso 328 mg/L) che nasce dai calcari dell'Appennino marchigiano.",
    sections: [
      {
        heading: "Il segno dei calcari dell'Appennino",
        paragraphs: [
          "Il [calcio](/parametri/durezza-totale) intorno a 97 mg/L e i bicarbonati sui 312 mg/L raccontano l'origine calcarea di questa acqua, la stessa geologia che ha scavato le grotte di Frasassi. Il [sodio](/parametri/sodio) è contenuto (18 mg/L) e il [pH](/parametri/ph) vicino alla neutralità (7,3).",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano equilibrato',
      'Diete povere di sodio (18 mg/L)',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Frasassi?',
        a: 'Circa 328 mg/L a 180 °C: un\'acqua oligominerale bicarbonato-calcica delle Marche.',
      },
    ],
    relatedIds: ['cerelia', 'san-benedetto', 'rocchetta'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'nepi',
    brand: 'Nepi',
    slug: 'nepi',
    producer: 'Acqua di Nepi S.p.A.',
    sorgente: 'Sorgente di Nepi (Monti Cimini)',
    comune: 'Nepi',
    provincia: 'VT',
    regione: 'Lazio',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 519,
      ph: 5.58,
      conducibilita: 690,
      durezza: null,
      bicarbonato: 433,
      calcio: 74.2,
      magnesio: 26.6,
      sodio: 32.9,
      potassio: 45.8,
      solfati: 38.8,
      cloruri: 20.1,
      nitrati: 12,
      fluoruri: 1.4,
      silice: 102,
    },
    tagline: "L'effervescente naturale del viterbese, di origine vulcanica.",
    metaDescription:
      "Acqua di Nepi: residuo fisso 519 mg/L, effervescente naturale mediominerale del Lazio. Analisi dell'etichetta, fluoruri, potassio e note d'uso.",
    searchKeywords: [
      'nepi residuo fisso',
      'acqua di nepi analisi',
      'nepi valori',
      'acqua nepi effervescente',
    ],
    intro:
      "Acqua di Nepi è un'effervescente naturale storica del viterbese, imbottigliata a Nepi, ai piedi dei Monti Cimini, in una zona di origine vulcanica. È un'acqua mediominerale (residuo fisso 519 mg/L) con bollicine naturali e il tipico profilo ricco di [potassio](/glossario) e silice delle acque vulcaniche laziali.",
    sections: [
      {
        heading: 'Bollicine naturali e minerali vulcanici',
        paragraphs: [
          "Il residuo di 519 mg/L la colloca appena dentro le medio-minerali. I bicarbonati sono elevati (433 mg/L), spiccano il potassio (46 mg/L) e la silice (102 mg/L), tratti caratteristici dei terreni vulcanici. Il [pH](/parametri/ph) acidulo (5,6) è dovuto all'anidride carbonica naturale che dà l'effervescenza.",
          "Da conoscere: i [fluoruri](/parametri/fluoruri) sono intorno a 1,4 mg/L (menzione «fluorata») e i [nitrati](/parametri/nitrati) intorno a 12 mg/L. Entrambi entro i limiti per un'acqua minerale, ma è un profilo da adulti: non adatta alla preparazione degli alimenti dei lattanti.",
        ],
      },
    ],
    bestFor: [
      'Chi ama le bollicine naturali a tavola',
      "Chi cerca un'acqua laziale dal carattere deciso",
    ],
    cautions: [
      'Fluoruri (1,4 mg/L) e nitrati (12 mg/L): non indicata per i lattanti.',
    ],
    faqs: [
      {
        q: 'Nepi è naturalmente frizzante?',
        a: "Sì: è un'effervescente naturale, le bollicine derivano dall'anidride carbonica presente nella falda vulcanica, non aggiunta.",
      },
      {
        q: 'Qual è il residuo fisso di Nepi?',
        a: 'Circa 519 mg/L a 180 °C: è un\'acqua mediominerale effervescente naturale.',
      },
    ],
    relatedIds: ['egeria', 'cutolo-rionero', 'gaudianello'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'galvanina',
    brand: 'Galvanina',
    slug: 'galvanina',
    producer: 'La Galvanina S.p.A.',
    sorgente: 'Fonte Galvanina',
    comune: 'Rimini',
    provincia: 'RN',
    regione: 'Emilia-Romagna',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'analisi Univ. di Camerino',
    analysis: {
      residuoFisso: 545.4,
      ph: 7.06,
      conducibilita: 900,
      durezza: null,
      bicarbonato: 463.1,
      calcio: 135,
      magnesio: 23.7,
      sodio: 27.85,
      potassio: 1.31,
      solfati: 57.24,
      cloruri: 33.89,
      nitrati: null,
      fluoruri: null,
      silice: null,
    },
    tagline: "L'effervescente naturale premium di Rimini, di lunga storia.",
    metaDescription:
      "Acqua Galvanina: residuo fisso 545 mg/L, effervescente naturale bicarbonato-calcica di Rimini. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'galvanina residuo fisso',
      'acqua galvanina analisi',
      'galvanina valori',
      'acqua galvanina rimini',
    ],
    intro:
      "Galvanina è un'acqua riminese di lunga tradizione, imbottigliata dall'omonima fonte e nota per il posizionamento premium e la bottiglia riconoscibile. È un'effervescente naturale mediominerale (residuo fisso 545 mg/L), bicarbonato-calcica.",
    sections: [
      {
        heading: 'Un profilo bicarbonato-calcico',
        paragraphs: [
          "Con 545 mg/L di residuo, [calcio](/parametri/durezza-totale) a 135 mg/L e bicarbonati abbondanti (463 mg/L), Galvanina è un'acqua «strutturata» dalle bollicine naturali fini, pensata per la tavola. Il [pH](/parametri/ph) è vicino alla neutralità (7,1).",
        ],
      },
    ],
    bestFor: [
      'Abbinamento a tavola con bollicine naturali',
      "Chi cerca un'acqua effervescente naturale premium",
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Galvanina?',
        a: 'Circa 545 mg/L a 180 °C: è un\'acqua mediominerale effervescente naturale, bicarbonato-calcica.',
      },
    ],
    relatedIds: ['ferrarelle', 'san-pellegrino', 'egeria'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'boario',
    brand: 'Boario',
    slug: 'boario',
    producer: 'Terme di Boario S.p.A.',
    sorgente: 'Terme di Boario',
    comune: 'Darfo Boario Terme',
    provincia: 'BS',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 566,
      ph: 7.2,
      conducibilita: 767,
      durezza: null,
      bicarbonato: 303,
      calcio: 120,
      magnesio: 40,
      sodio: 4.9,
      potassio: 2,
      solfati: 245,
      cloruri: 4,
      nitrati: 6,
      fluoruri: 0.4,
      silice: 11,
    },
    tagline: "La solfato-calcica delle Terme di Boario, povera di sodio.",
    metaDescription:
      "Acqua Boario: residuo fisso 566 mg/L, mediominerale solfato-calcica delle Terme di Boario. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'boario residuo fisso',
      'acqua boario analisi',
      'boario valori',
      'acqua boario terme',
    ],
    intro:
      "Boario è l'acqua da tavola delle storiche Terme di Boario, in Val Camonica, da non confondere con la [Fonte Essenziale](/acque-minerali/fonte-essenziale) dello stesso comprensorio, molto più concentrata. È una mediominerale (residuo fisso 566 mg/L) solfato-calcica con [sodio](/parametri/sodio) basso.",
    sections: [
      {
        heading: 'Solfati e calcio, ma poco sodio',
        paragraphs: [
          "Boario ha un contenuto di [solfati](/parametri/solfati) intorno a 245 mg/L (menzione «solfata»), [calcio](/parametri/durezza-totale) a 120 mg/L e [magnesio](/parametri/durezza-totale) a 40 mg/L, con un sodio molto basso (4,9 mg/L). È un'acqua dal carattere mineralizzato ma compatibile con le diete iposodiche.",
          "A differenza della Fonte Essenziale, pensata per un uso funzionale, la Boario da tavola è un'acqua più moderata, adatta al pasto per chi apprezza una mineralità decisa.",
        ],
      },
    ],
    bestFor: [
      "Chi cerca solfati e calcio con sodio basso",
      'Diete povere di sodio (4,9 mg/L)',
      'Abbinamento a tavola',
    ],
    cautions: [
      "Non va confusa con la Fonte Essenziale, molto più ricca e a uso funzionale.",
      'Circolano edizioni di etichetta con residuo leggermente diverso (566–606 mg/L).',
    ],
    faqs: [
      {
        q: 'Che differenza c\'è tra Boario e Fonte Essenziale?',
        a: "Sono entrambe delle Terme di Boario ma molto diverse: la Boario da tavola ha un residuo intorno a 566 mg/L ed è un'acqua da pasto, mentre la [Fonte Essenziale](/acque-minerali/fonte-essenziale) supera i 2400 mg/L ed è un'acqua funzionale ricca di solfati, da usare a cicli con il medico.",
      },
      {
        q: 'Qual è il residuo fisso di Boario?',
        a: 'Circa 566 mg/L a 180 °C: un\'acqua mediominerale solfato-calcica.',
      },
    ],
    relatedIds: ['fonte-essenziale', 'san-pellegrino', 'vitasnella'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'cutolo-rionero',
    brand: 'Cutolo Rionero',
    slug: 'cutolo-rionero',
    producer: 'Cutolo-Rionero S.p.A.',
    sorgente: 'Fonte Atella (Monte Vulture)',
    comune: 'Rionero in Vulture',
    provincia: 'PZ',
    regione: 'Basilicata',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 603,
      ph: 5.86,
      conducibilita: 858,
      durezza: null,
      bicarbonato: 473,
      calcio: 69,
      magnesio: 17.3,
      sodio: 89.7,
      potassio: 34.5,
      solfati: 53.7,
      cloruri: 23.8,
      nitrati: 12,
      fluoruri: 0.9,
      silice: 97.8,
    },
    tagline: "L'effervescente naturale del Vulture, dalle bollicine intense.",
    metaDescription:
      "Acqua Cutolo Rionero: residuo fisso 603 mg/L, effervescente naturale del Monte Vulture. Analisi dell'etichetta, potassio e note d'uso.",
    searchKeywords: [
      'cutolo rionero residuo fisso',
      'acqua cutolo rionero analisi',
      'cutolo rionero valori',
      'acqua cutolo rionero vulture',
    ],
    intro:
      "Cutolo Rionero è una delle acque effervescenti naturali storiche del Monte Vulture, in Basilicata, imbottigliata dalla Fonte Atella a Rionero in Vulture. Come la vicina [Gaudianello](/acque-minerali/gaudianello), deve le sue bollicine intense all'anidride carbonica di origine vulcanica. È un'acqua mediominerale (residuo fisso 603 mg/L).",
    sections: [
      {
        heading: 'Il carattere del Vulture',
        paragraphs: [
          "Il profilo è quello tipico delle acque del Vulture: bicarbonati elevati (473 mg/L), [potassio](/glossario) e silice alti (34 e 98 mg/L) e un'effervescenza naturale marcata, con [pH](/parametri/ph) acidulo (5,9). È un'acqua dal gusto vivace, che accompagna bene i piatti saporiti.",
          "Il [sodio](/parametri/sodio) è più alto (90 mg/L) e i [nitrati](/parametri/nitrati) intorno a 12 mg/L: per questo non è indicata per le diete iposodiche strette né per la preparazione degli alimenti dei lattanti.",
        ],
      },
    ],
    bestFor: [
      'Chi ama le bollicine naturali intense',
      'Abbinamento con piatti saporiti',
    ],
    cautions: [
      'Sodio alto (90 mg/L): non adatta alle diete iposodiche.',
      'Nitrati intorno a 12 mg/L: non indicata per i lattanti.',
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Cutolo Rionero?',
        a: 'Circa 603 mg/L a 180 °C: è un\'acqua mediominerale effervescente naturale del Monte Vulture.',
      },
    ],
    relatedIds: ['gaudianello', 'nepi', 'egeria'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'courmayeur',
    brand: 'Courmayeur',
    slug: 'courmayeur',
    producer: 'Sorgenti Monte Bianco S.p.A. (Gruppo Nestlé)',
    sorgente: 'Fonte Youla',
    comune: 'Courmayeur',
    provincia: 'AO',
    regione: "Valle d'Aosta",
    altitudine: 1224,
    type: 'naturale',
    classification: 'ricca-di-sali',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 2162,
      ph: 8.0,
      conducibilita: 2000,
      durezza: null,
      bicarbonato: 180,
      calcio: 542,
      magnesio: 70,
      sodio: 0.87,
      potassio: 2.8,
      solfati: 1417,
      cloruri: 0.43,
      nitrati: null,
      fluoruri: null,
      silice: null,
    },
    tagline: "Dal Monte Bianco: tantissimo calcio e solfati, quasi zero sodio.",
    metaDescription:
      "Courmayeur: residuo fisso 2162 mg/L, acqua ricca di sali solfato-calcica del Monte Bianco. Molto calcio, sodio bassissimo. Analisi dell'etichetta e usi.",
    searchKeywords: [
      'courmayeur residuo fisso',
      'acqua courmayeur analisi',
      'courmayeur calcio',
      'courmayeur valori',
    ],
    intro:
      "Courmayeur nasce dalla Fonte Youla, ai piedi del Monte Bianco, in Valle d'Aosta, e filtra per decenni tra le rocce del massiccio. È un'acqua ricca di sali (residuo fisso 2162 mg/L) con un profilo raro: moltissimo calcio e solfati, ma un contenuto di sodio quasi nullo.",
    sections: [
      {
        heading: 'Un profilo estremo: calcica e iposodica insieme',
        paragraphs: [
          "Il tratto che rende Courmayeur particolare è la combinazione di [calcio](/parametri/durezza-totale) altissimo (542 mg/L) e [solfati](/parametri/solfati) abbondanti (oltre 1400 mg/L) con un [sodio](/parametri/sodio) di appena 0,9 mg/L. È quindi al tempo stesso «ricca di sali» e adatta alle diete povere di sodio: chi vuole un apporto importante di calcio senza sale la trova ideale.",
          "L'alto contenuto di solfati di magnesio e calcio può avere un blando effetto sulla motilità intestinale se l'acqua è bevuta in grandi quantità. È un'acqua «funzionale» più che da consumo indifferenziato: ottima per integrare calcio, ma non pensata per riempire la borraccia tutto il giorno.",
        ],
      },
    ],
    bestFor: [
      'Apporto elevato di calcio (542 mg/L)',
      'Diete povere di sodio (0,9 mg/L)',
      'Chi cerca minerali senza sale',
    ],
    cautions: [
      "L'alto contenuto di solfati può avere un lieve effetto lassativo se bevuta in abbondanza.",
      "Acqua molto mineralizzata: usarla come integrazione mirata, non come unica acqua quotidiana.",
    ],
    faqs: [
      {
        q: 'Perché Courmayeur ha così tanto calcio ma poco sodio?',
        a: "Perché filtra tra rocce calcaree e gessose del Monte Bianco, che cedono calcio e solfati, ma non attraversa formazioni saline: il risultato è un'acqua ricchissima di calcio (542 mg/L) con sodio quasi assente.",
      },
      {
        q: 'Courmayeur va bene per le diete iposodiche?',
        a: "Sì, per il sodio: ne contiene meno di 1 mg/L. Va però considerata la sua elevata mineralità complessiva, quindi meglio usarla in modo mirato.",
      },
    ],
    relatedIds: ['fonte-essenziale', 'lete', 'san-pellegrino'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'eva',
    brand: 'Eva',
    slug: 'eva',
    producer: 'Fonti Alta Valle Po S.p.A.',
    sorgente: 'Rocce Azzurre (gruppo del Monviso)',
    comune: 'Paesana',
    provincia: 'CN',
    regione: 'Piemonte',
    altitudine: 2042,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'analisi Univ. di Pavia',
    analysis: {
      residuoFisso: 48,
      ph: 7.6,
      conducibilita: 76,
      durezza: null,
      bicarbonato: 52,
      calcio: 10.2,
      magnesio: 4.4,
      sodio: 0.32,
      potassio: 0.28,
      solfati: 1.8,
      cloruri: 0.16,
      nitrati: 2.3,
      fluoruri: null,
      silice: 2.5,
    },
    tagline: "Dalla sorgente del Monviso a oltre 2.000 metri: leggera e povera di sodio.",
    metaDescription:
      "Acqua Eva: residuo fisso 48 mg/L, minimamente mineralizzata dalla sorgente del Monviso a 2.042 m. Sodio bassissimo. Analisi dell'etichetta e usi.",
    searchKeywords: [
      'eva residuo fisso',
      'acqua eva analisi',
      'acqua eva monviso',
      'acqua eva valori',
    ],
    intro:
      "Eva sgorga dalle Rocce Azzurre, sul gruppo del Monviso, a oltre 2.000 metri di quota, tra le sorgenti imbottigliate più alte d'Italia. È un'acqua minimamente mineralizzata (residuo fisso 48 mg/L) leggera e con un [sodio](/parametri/sodio) tra i più bassi in assoluto (0,3 mg/L).",
    sections: [
      {
        heading: 'Alta quota e grande leggerezza',
        paragraphs: [
          "Con 48 mg/L di residuo, Eva resta appena sotto la soglia delle acque minimamente mineralizzate. Il [calcio](/parametri/durezza-totale) è basso (10 mg/L), il sodio quasi assente e i [nitrati](/parametri/nitrati) contenuti: un profilo che la rende adatta alle diete povere di sale e alla preparazione degli alimenti dei lattanti.",
          "L'origine ad alta quota sul Monviso è il tratto identitario del marchio, in linea con le altre leggerissime alpine come [Lauretana](/acque-minerali/lauretana) e [Valverde](/acque-minerali/valverde).",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (0,3 mg/L)',
      'Preparazione degli alimenti dei lattanti',
      'Uso quotidiano leggero',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Acqua Eva?',
        a: '48 mg/L a 180 °C: è un\'acqua minimamente mineralizzata, molto leggera e povera di sodio.',
      },
    ],
    relatedIds: ['lauretana', 'valverde', 'san-bernardo'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'valverde',
    brand: 'Valverde',
    slug: 'valverde',
    producer: 'Spumador S.p.A.',
    sorgente: 'Valverde (Valsesia, pendici del Monte Rosa)',
    comune: 'Zacconale (Valsesia)',
    provincia: 'VC',
    regione: 'Piemonte',
    altitudine: 780,
    type: 'naturale',
    classification: 'minimamente-mineralizzata',
    analysisRef: 'analisi Univ. di Torino, 2020',
    analysis: {
      residuoFisso: 38.8,
      ph: 6.3,
      conducibilita: 57,
      durezza: 1,
      bicarbonato: 14,
      calcio: 5.7,
      magnesio: 0.71,
      sodio: 4.5,
      potassio: 0.55,
      solfati: 1.6,
      cloruri: 7.3,
      nitrati: 4.6,
      fluoruri: null,
      silice: 15.1,
    },
    tagline: "La leggerissima della Valsesia, icona di design della tavola.",
    metaDescription:
      "Acqua Valverde: residuo fisso 39 mg/L, minimamente mineralizzata della Valsesia. Analisi dell'etichetta, pH e la celebre bottiglia di design.",
    searchKeywords: [
      'valverde residuo fisso',
      'acqua valverde analisi',
      'valverde bottiglia',
      'valverde valori',
    ],
    intro:
      "Valverde nasce in Valsesia, sulle pendici del Monte Rosa, ed è nota tanto per la leggerezza quanto per la sua bottiglia dalla forma sinuosa, diventata un'icona del design italiano a tavola. È un'acqua minimamente mineralizzata (residuo fisso 39 mg/L).",
    sections: [
      {
        heading: 'Leggera, con un tocco di silice',
        paragraphs: [
          "Con 39 mg/L di residuo e una [durezza](/parametri/durezza-totale) di appena 1 grado francese, Valverde è tra le più leggere. Il [sodio](/parametri/sodio) è basso (4,5 mg/L) e il [pH](/parametri/ph) leggermente acidulo (6,3), coerente con la scarsa presenza di bicarbonati. Interessante il contenuto di silice, relativamente alto per un'acqua così poco mineralizzata.",
          "È un'acqua che unisce un profilo da leggerissima alpina a un forte posizionamento estetico, spesso scelta per la tavola più per l'immagine che per necessità dietetiche particolari.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano leggero',
      'Diete povere di sodio',
      'Tavola e presentazione (bottiglia di design)',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Valverde?',
        a: 'Circa 39 mg/L a 180 °C: è un\'acqua minimamente mineralizzata, molto leggera.',
      },
    ],
    relatedIds: ['lauretana', 'plose', 'eva'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'sole',
    brand: 'Sole',
    slug: 'sole',
    producer: 'Fonte Sole S.r.l.',
    sorgente: 'Fonte Sole',
    comune: 'Nuvolento',
    provincia: 'BS',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 399,
      ph: 7.5,
      conducibilita: null,
      durezza: null,
      bicarbonato: 418,
      calcio: 100,
      magnesio: 28,
      sodio: 16.4,
      potassio: 0.6,
      solfati: null,
      cloruri: 4.9,
      nitrati: 2.8,
      fluoruri: null,
      silice: null,
    },
    tagline: "Oligominerale bresciana equilibrata, con buon calcio e magnesio.",
    metaDescription:
      "Acqua Sole: residuo fisso 399 mg/L, oligominerale lombarda con calcio e magnesio. Analisi dell'etichetta, sodio e caratteristiche.",
    searchKeywords: [
      'sole residuo fisso',
      'acqua sole analisi',
      'acqua sole valori',
      'acqua sole nuvolento',
    ],
    intro:
      "Sole è un'oligominerale bresciana imbottigliata a Nuvolento, ai piedi delle Prealpi. Con un residuo fisso di 399 mg/L si colloca nella fascia più mineralizzata delle oligominerali, con un buon apporto di [calcio](/parametri/durezza-totale) e [magnesio](/parametri/durezza-totale).",
    sections: [
      {
        heading: 'Minerali utili, sodio contenuto',
        paragraphs: [
          "Il profilo di Sole unisce calcio (100 mg/L), magnesio (28 mg/L) e bicarbonati abbondanti (418 mg/L), mantenendo il [sodio](/parametri/sodio) sotto i 20 mg/L. È un'acqua che porta minerali utili senza appesantire con il sale, adatta a chi cerca qualcosa di più «pieno» di una leggerissima ma senza arrivare alle medio-minerali.",
        ],
      },
    ],
    bestFor: [
      'Apporto di calcio e magnesio',
      'Diete povere di sodio (sotto 20 mg/L)',
      "Uso quotidiano con un po' più di minerali",
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Acqua Sole?',
        a: 'Circa 399 mg/L a 180 °C: è un\'acqua oligominerale nella fascia più mineralizzata della categoria.',
      },
    ],
    relatedIds: ['san-benedetto', 'rocchetta', 'maniva'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'bracca',
    brand: 'Bracca',
    slug: 'bracca',
    producer: 'Bracca Acque Minerali S.r.l.',
    sorgente: "Nuova Fonte (imbocco dell'Orrido)",
    comune: 'Zogno',
    provincia: 'BG',
    regione: 'Lombardia',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore (Nuova Fonte)',
    analysis: {
      residuoFisso: 314,
      ph: 7.4,
      conducibilita: 494,
      durezza: null,
      bicarbonato: 339,
      calcio: 76.7,
      magnesio: 30.6,
      sodio: 1.2,
      potassio: 0.4,
      solfati: null,
      cloruri: 1.3,
      nitrati: 3.9,
      fluoruri: null,
      silice: null,
    },
    tagline: "Storica acqua della Val Brembana, oligominerale povera di sodio.",
    metaDescription:
      "Acqua Bracca (Nuova Fonte): residuo fisso 314 mg/L, oligominerale della Val Brembana con magnesio e sodio bassissimo. Analisi dell'etichetta.",
    searchKeywords: [
      'bracca residuo fisso',
      'acqua bracca analisi',
      'acqua bracca valori',
      'bracca val brembana',
    ],
    intro:
      "Bracca è un marchio storico della Val Brembana, nel bergamasco, con una lunga tradizione termale. La sua naturale (Nuova Fonte) è un'oligominerale dal residuo fisso di 314 mg/L, con un buon contenuto di [magnesio](/parametri/durezza-totale) e un [sodio](/parametri/sodio) quasi assente.",
    sections: [
      {
        heading: 'Magnesio e leggerezza di sodio',
        paragraphs: [
          "Con 31 mg/L di magnesio e appena 1,2 mg/L di sodio, Bracca Nuova Fonte offre minerali utili restando adatta alle diete povere di sale. Il [calcio](/parametri/durezza-totale) è moderato (77 mg/L) e il [pH](/parametri/ph) vicino alla neutralità. Esiste anche una «Antica Fonte» dal profilo diverso, più mineralizzata: verifica sempre l'etichetta.",
        ],
      },
    ],
    bestFor: [
      'Apporto di magnesio con poco sodio',
      'Diete povere di sodio (1,2 mg/L)',
      'Uso quotidiano equilibrato',
    ],
    cautions: [
      'Il marchio ha più fonti (Nuova Fonte, Antica Fonte): i valori cambiano tra prodotti.',
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Bracca?',
        a: 'Nella versione Nuova Fonte è circa 314 mg/L: un\'acqua oligominerale con buon magnesio e sodio molto basso.',
      },
    ],
    relatedIds: ['san-benedetto', 'recoaro', 'maniva'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'sandalia',
    brand: 'Sandalia',
    slug: 'sandalia',
    producer: 'Stabilimento Sandalia (Gruppo San Benedetto)',
    sorgente: "S'Acqua Cotta",
    comune: 'Villasor',
    provincia: 'SU',
    regione: 'Sardegna',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 1463,
      ph: 7.52,
      conducibilita: 2100,
      durezza: null,
      bicarbonato: 927,
      calcio: 35.7,
      magnesio: 9.24,
      sodio: 520,
      potassio: 25,
      solfati: 59.9,
      cloruri: 329,
      nitrati: null,
      fluoruri: null,
      silice: 42.7,
    },
    tagline: "L'effervescente naturale sarda dal carattere sodico-clorurato.",
    metaDescription:
      "Acqua Sandalia: residuo fisso 1463 mg/L, effervescente naturale sarda sodico-bicarbonata. Analisi dell'etichetta e note d'uso.",
    searchKeywords: [
      'sandalia residuo fisso',
      'acqua sandalia analisi',
      'sandalia sardegna',
      'sandalia valori',
    ],
    intro:
      "Sandalia è un'effervescente naturale sarda che sgorga a Villasor, nel Campidano, dalla fonte S'Acqua Cotta. È un'acqua fortemente mineralizzata (residuo fisso 1463 mg/L) dal carattere molto particolare: sodico-bicarbonato-clorurata, con bollicine naturali.",
    sections: [
      {
        heading: 'Un profilo insolito: sodio e cloruri alti',
        paragraphs: [
          "A differenza delle acque bicarbonato-calciche del continente, Sandalia ha [sodio](/parametri/sodio) molto elevato (520 mg/L) e [cloruri](/parametri/cloruri) alti (329 mg/L), oltre a bicarbonati abbondanti. Ne deriva un gusto deciso e una spiccata sapidità, tipica di alcune acque profonde del sud Sardegna.",
          "Proprio per il sodio elevato, non è un'acqua indicata per chi deve limitare il sale né per un consumo quotidiano indifferenziato: è più un'acqua «da scoprire» per il suo carattere unico.",
        ],
      },
    ],
    bestFor: [
      "Chi cerca un'acqua dal carattere sapido e originale",
      'Bollicine naturali a tavola',
    ],
    cautions: [
      'Sodio molto alto (520 mg/L): non adatta alle diete iposodiche.',
      'Acqua fortemente mineralizzata, da consumare con moderazione.',
    ],
    faqs: [
      {
        q: 'Perché Sandalia ha così tanto sodio?',
        a: "Perché nasce da una falda profonda del Campidano sardo che arricchisce l'acqua di sodio e cloruri: è un'acqua sodico-clorurata, molto diversa dalle classiche bicarbonato-calciche.",
      },
    ],
    relatedIds: ['smeraldina', 'fonte-essenziale', 'san-pellegrino'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'monte-cimone',
    brand: 'Monte Cimone',
    slug: 'monte-cimone',
    producer: 'S.E.M. — Sorgenti Emiliane Modena S.p.A.',
    sorgente: 'Concessione Ospitale',
    comune: 'Fanano',
    provincia: 'MO',
    regione: 'Emilia-Romagna',
    altitudine: 935,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 128,
      ph: 7.5,
      conducibilita: null,
      durezza: null,
      bicarbonato: 115,
      calcio: 34,
      magnesio: 5.0,
      sodio: 2.3,
      potassio: 0.48,
      solfati: 9.9,
      cloruri: null,
      nitrati: 1.8,
      fluoruri: null,
      silice: null,
    },
    tagline: "L'oligominerale dell'Appennino modenese, leggera e povera di sodio.",
    metaDescription:
      "Acqua Monte Cimone: residuo fisso 128 mg/L, oligominerale dell'Appennino modenese con sodio molto basso. Analisi dell'etichetta e usi.",
    searchKeywords: [
      'monte cimone residuo fisso',
      'acqua monte cimone analisi',
      'monte cimone valori',
      'acqua appennino modenese',
    ],
    intro:
      "Monte Cimone nasce sull'Appennino modenese, nel comune di Fanano, da sorgenti oltre i 900 metri di quota. È un'oligominerale leggera (residuo fisso 128 mg/L) con [sodio](/parametri/sodio) molto basso, pensata per un uso quotidiano semplice.",
    sections: [
      {
        heading: 'Leggera e neutra',
        paragraphs: [
          "Con 128 mg/L di residuo, [calcio](/parametri/durezza-totale) moderato (34 mg/L) e sodio di appena 2,3 mg/L, Monte Cimone è un'oligominerale «di montagna» equilibrata, adatta anche alle diete povere di sale. Il [pH](/parametri/ph) è vicino alla neutralità.",
        ],
      },
    ],
    bestFor: [
      'Diete povere di sodio (2,3 mg/L)',
      'Uso quotidiano leggero',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Monte Cimone?',
        a: 'Circa 128 mg/L a 180 °C: è un\'acqua oligominerale leggera dell\'Appennino modenese.',
      },
    ],
    relatedIds: ['rocchetta', 'sole', 'norda'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'santantonio',
    brand: "Sant'Antonio",
    slug: 'santantonio',
    producer: "Fonte Sant'Antonio (Cadorago)",
    sorgente: 'Fonte S. Antonio',
    comune: 'Cadorago',
    provincia: 'CO',
    regione: 'Lombardia',
    altitudine: 313,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 134,
      ph: 7.9,
      conducibilita: 202,
      durezza: 11.1,
      bicarbonato: 137,
      calcio: 35.2,
      magnesio: 5.6,
      sodio: 4.0,
      potassio: 0.66,
      solfati: null,
      cloruri: 1.2,
      nitrati: 4.0,
      fluoruri: null,
      silice: 15.4,
    },
    tagline: "Oligominerale lombarda leggera, dal pH basico.",
    metaDescription:
      "Acqua Sant'Antonio: residuo fisso 134 mg/L, oligominerale lombarda povera di sodio con pH basico. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      "sant'antonio residuo fisso",
      "acqua sant'antonio analisi",
      "acqua sant'antonio valori",
    ],
    intro:
      "Sant'Antonio è un'oligominerale lombarda imbottigliata a Cadorago, in provincia di Como. Con un residuo fisso di 134 mg/L e un [pH](/parametri/ph) leggermente basico (7,9) è un'acqua leggera ed equilibrata da uso quotidiano.",
    sections: [
      {
        heading: 'Leggera e alcalina',
        paragraphs: [
          "Il profilo di Sant'Antonio è quello di un'oligominerale classica: [calcio](/parametri/durezza-totale) moderato, [sodio](/parametri/sodio) basso (4 mg/L) e pH sopra la neutralità. La [durezza](/parametri/durezza-totale) intorno a 11 gradi francesi indica una mineralità contenuta.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano leggero',
      'Diete povere di sodio (4 mg/L)',
    ],
    cautions: [],
    faqs: [
      {
        q: "Qual è il residuo fisso di Sant'Antonio?",
        a: 'Circa 134 mg/L a 180 °C: è un\'acqua oligominerale leggera, dal pH basico.',
      },
    ],
    relatedIds: ['norda', 'sole', 'monte-cimone'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'fabia',
    brand: 'Fabia',
    slug: 'fabia',
    producer: "Acque Minerali d'Italia S.p.A.",
    sorgente: 'Fonte Fabia',
    comune: 'San Gemini',
    provincia: 'TR',
    regione: 'Umbria',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 448,
      ph: 7.35,
      conducibilita: 651,
      durezza: null,
      bicarbonato: 394,
      calcio: 137,
      magnesio: 7.55,
      sodio: 17.7,
      potassio: 1.93,
      solfati: 44.8,
      cloruri: null,
      nitrati: 8.3,
      fluoruri: null,
      silice: 9.3,
    },
    tagline: "L'umbra di San Gemini: quasi calcica, con sodio ancora contenuto.",
    metaDescription:
      "Acqua Fabia: residuo fisso 448 mg/L, oligominerale umbra bicarbonato-calcica di San Gemini. Analisi dell'etichetta, calcio e usi.",
    searchKeywords: [
      'fabia residuo fisso',
      'acqua fabia analisi',
      'acqua fabia valori',
      'fabia san gemini',
    ],
    intro:
      "Fabia nasce a San Gemini, in Umbria, la stessa area di [Sangemini](/acque-minerali/sangemini), da cui condivide la vocazione bicarbonato-calcica ma con una mineralità più contenuta. È un'oligominerale (residuo fisso 448 mg/L) al confine con le medio-minerali.",
    sections: [
      {
        heading: 'Un buon apporto di calcio, ma più leggera',
        paragraphs: [
          "Con 137 mg/L di [calcio](/parametri/durezza-totale) e bicarbonati abbondanti, Fabia offre un apporto di calcio quasi da acqua «calcica», restando però più leggera delle grandi bicarbonato-calciche umbre. Il [sodio](/parametri/sodio) è sotto i 20 mg/L, quindi compatibile con le diete povere di sale.",
        ],
      },
    ],
    bestFor: [
      'Apporto di calcio con mineralità moderata',
      'Diete povere di sodio (sotto 20 mg/L)',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Fabia?',
        a: 'Circa 448 mg/L a 180 °C: è un\'acqua oligominerale bicarbonato-calcica, al confine con le medio-minerali.',
      },
    ],
    relatedIds: ['sangemini', 'rocchetta', 'uliveto'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'flaminia',
    brand: 'Flaminia',
    slug: 'flaminia',
    producer: 'Nocera Umbra Fonti Storiche S.p.A.',
    sorgente: 'Fonte Flaminia',
    comune: 'Nocera Umbra',
    provincia: 'PG',
    regione: 'Umbria',
    altitudine: null,
    type: 'naturale',
    classification: 'oligominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 204,
      ph: 7.5,
      conducibilita: null,
      durezza: null,
      bicarbonato: 216,
      calcio: 71,
      magnesio: 1.0,
      sodio: 2.6,
      potassio: 0.6,
      solfati: 2.2,
      cloruri: 5.3,
      nitrati: 2.4,
      fluoruri: null,
      silice: 6.7,
    },
    tagline: "L'oligominerale di Nocera Umbra, leggera e povera di sodio.",
    metaDescription:
      "Acqua Flaminia: residuo fisso 204 mg/L, oligominerale di Nocera Umbra con sodio molto basso. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'flaminia residuo fisso',
      'acqua flaminia analisi',
      'flaminia nocera umbra',
      'flaminia valori',
    ],
    intro:
      "Flaminia sgorga a Nocera Umbra, storica città delle acque in Umbria, da fonti legate a una lunga tradizione di imbottigliamento. È un'oligominerale (residuo fisso 204 mg/L) leggera e con [sodio](/parametri/sodio) molto basso.",
    sections: [
      {
        heading: 'Equilibrata, con poco sodio',
        paragraphs: [
          "Con un residuo di 204 mg/L, [calcio](/parametri/durezza-totale) moderato (71 mg/L) e sodio di appena 2,6 mg/L, Flaminia è un'oligominerale adatta all'uso quotidiano e alle diete povere di sale. Il [pH](/parametri/ph) è vicino alla neutralità.",
        ],
      },
    ],
    bestFor: [
      'Uso quotidiano equilibrato',
      'Diete povere di sodio (2,6 mg/L)',
    ],
    cautions: [],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Flaminia?',
        a: 'Circa 204 mg/L a 180 °C: è un\'acqua oligominerale leggera di Nocera Umbra.',
      },
    ],
    relatedIds: ['rocchetta', 'sole', 'norda'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'toka',
    brand: 'Toka',
    slug: 'toka',
    producer: "Acque Minerali d'Italia S.p.A.",
    sorgente: 'Fonte Capanna (Monticchio Bagni)',
    comune: 'Rionero in Vulture',
    provincia: 'PZ',
    regione: 'Basilicata',
    altitudine: 450,
    type: 'effervescente-naturale',
    classification: 'ricca-di-sali',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 1956,
      ph: 6.25,
      conducibilita: null,
      durezza: null,
      bicarbonato: 1562,
      calcio: 216,
      magnesio: 48.4,
      sodio: null,
      potassio: 90,
      solfati: null,
      cloruri: null,
      nitrati: null,
      fluoruri: 0.59,
      silice: null,
    },
    tagline: "L'effervescente naturale del Vulture, ricca e bicarbonato-calcica.",
    metaDescription:
      "Acqua Toka: residuo fisso 1956 mg/L, effervescente naturale ricca di sali del Monte Vulture. Analisi dell'etichetta e caratteristiche.",
    searchKeywords: [
      'toka residuo fisso',
      'acqua toka analisi',
      'toka vulture',
      'acqua toka valori',
    ],
    intro:
      "Toka nasce a Monticchio, sul Monte Vulture, in Basilicata, la stessa area vulcanica di [Gaudianello](/acque-minerali/gaudianello). È un'effervescente naturale ricca di sali (residuo fisso 1956 mg/L), bicarbonato-calcica, con la forte carbonatazione naturale tipica del territorio.",
    sections: [
      {
        heading: 'Il carattere del Vulture, al massimo',
        paragraphs: [
          "Toka porta all'estremo il profilo delle acque del Vulture: bicarbonati altissimi (oltre 1500 mg/L), [calcio](/parametri/durezza-totale) importante (216 mg/L) e una vivace effervescenza naturale dovuta all'anidride carbonica vulcanica. Il [pH](/parametri/ph) è acidulo (6,25), come nelle acque fortemente gassate in falda.",
          "È un'acqua «da scoprire», dal gusto minerale intenso: si presta a un uso a tavola più che al consumo di grandi quantità.",
        ],
      },
    ],
    bestFor: [
      'Apporto di calcio e magnesio',
      'Chi ama le effervescenze naturali intense',
    ],
    cautions: [
      "Acqua molto mineralizzata: meglio come acqua «da pasto» che per l'uso indifferenziato.",
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Toka?',
        a: 'Circa 1956 mg/L a 180 °C: è un\'acqua ricca di sali, effervescente naturale del Monte Vulture.',
      },
    ],
    relatedIds: ['gaudianello', 'ferrarelle', 'fonte-essenziale'],
  },
  // -------------------------------------------------------------------------
  {
    id: 'santagata',
    brand: 'Santagata',
    slug: 'santagata',
    producer: 'Ferrarelle S.p.A.',
    sorgente: "Val d'Assano",
    comune: 'Rocchetta e Croce',
    provincia: 'CE',
    regione: 'Campania',
    altitudine: null,
    type: 'effervescente-naturale',
    classification: 'mediominerale',
    analysisRef: 'etichetta produttore',
    analysis: {
      residuoFisso: 1083,
      ph: 6.1,
      conducibilita: 1450,
      durezza: null,
      bicarbonato: 1140,
      calcio: 280,
      magnesio: 20,
      sodio: 49,
      potassio: 35,
      solfati: 5,
      cloruri: 20,
      nitrati: 7,
      fluoruri: 1.0,
      silice: null,
    },
    tagline: "L'effervescente naturale campana ricca di calcio, sorella di Ferrarelle.",
    metaDescription:
      "Acqua Santagata: residuo fisso 1083 mg/L, effervescente naturale campana bicarbonato-calcica ricca di calcio. Analisi dell'etichetta e usi.",
    searchKeywords: [
      'santagata residuo fisso',
      'acqua santagata analisi',
      'santagata valori',
      'acqua santagata ferrarelle',
    ],
    intro:
      "Santagata è un'effervescente naturale campana, prodotta da Ferrarelle dalla sorgente della Val d'Assano, nel casertano. È un'acqua mediominerale (residuo fisso 1083 mg/L) bicarbonato-calcica, molto ricca di [calcio](/parametri/durezza-totale), con bollicine naturali.",
    sections: [
      {
        heading: 'Molto calcio e bollicine naturali',
        paragraphs: [
          "Con 280 mg/L di calcio e bicarbonati molto alti (1140 mg/L), Santagata condivide il carattere bicarbonato-calcico di [Ferrarelle](/acque-minerali/ferrarelle), pur restando più contenuta nel residuo complessivo. È un'acqua «da pasto» dal gusto pieno, con effervescenza naturale.",
          "Il [sodio](/parametri/sodio) è moderato (49 mg/L) e il [pH](/parametri/ph) acidulo per la CO₂ naturale. L'alto apporto di calcio interessa chi vuole integrarlo, sempre valutando con il medico in caso di esigenze specifiche.",
        ],
      },
    ],
    bestFor: [
      'Apporto di calcio (280 mg/L)',
      'Bollicine naturali a tavola',
    ],
    cautions: [
      'Acqua mineralizzata: adatta come acqua da pasto più che per grandi quantità.',
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso di Santagata?',
        a: 'Circa 1083 mg/L a 180 °C: è un\'acqua mediominerale, effervescente naturale e ricca di calcio.',
      },
      {
        q: 'Santagata è prodotta da Ferrarelle?',
        a: "Sì: è imbottigliata da Ferrarelle da una sorgente campana (Val d'Assano) e ne condivide il profilo bicarbonato-calcico effervescente naturale.",
      },
    ],
    relatedIds: ['ferrarelle', 'gaudianello', 'lete'],
  },
];
