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
];
