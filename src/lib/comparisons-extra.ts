import type { RegionalComparison } from './regional-comparisons';

export const EXTRA_COMPARISONS: RegionalComparison[] = [
  {
    slug: 'trentino-alto-adige-vs-valle-aosta',
    title: 'Acqua Trentino-Alto Adige vs Valle d\'Aosta: sorgenti alpine a confronto',
    shortTitle: 'Acqua Trentino-AA vs Valle d\'Aosta: sorgenti alpine',
    metaDescription:
      'Confronto fra l\'acqua del rubinetto in Trentino-Alto Adige e Valle d\'Aosta: sorgenti alpine, mineralizzazione, gestori e qualità nei capoluoghi delle due regioni autonome.',
    searchKeywords: [
      'acqua trentino alto adige valle aosta',
      'acqua sorgenti alpine',
      'acqua rubinetto trento bolzano aosta',
      'qualità acqua valle aosta',
      'acqua alpina italia',
      'durezza acqua trentino',
    ],
    regions: ['Trentino-Alto Adige', 'Valle d\'Aosta'],
    intro:
      "Trentino-Alto Adige e Valle d'Aosta sono due regioni autonome dell'arco alpino italiano dove l'acqua del rubinetto deriva quasi interamente da sorgenti di montagna. La copertura del fabbisogno con acque sorgentizie è in entrambi i casi molto elevata, con trattamento limitato alla sola disinfezione. Le differenze fra le due regioni riguardano la dimensione del bacino servito, la frammentazione gestionale e la durezza media, legata alla diversa litologia dei massicci attraversati. Questo confronto, basato sui parametri del D.Lgs. 18/2023, descrive le due realtà senza eleggere un vincitore.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Trentino-Alto Adige', value: '8-25 °f (dolce/medio-dolce)' },
          { region: 'Valle d\'Aosta', value: '5-20 °f (molto dolce/dolce)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Trentino-Alto Adige', value: 'Sorgenti dolomitiche e alpine, alta quota' },
          { region: 'Valle d\'Aosta', value: 'Sorgenti del massiccio del Monte Bianco, del Gran Paradiso e del Cervino' },
        ],
      },
      {
        label: 'Trattamento prevalente',
        values: [
          { region: 'Trentino-Alto Adige', value: 'Sola disinfezione nella maggior parte dei comuni' },
          { region: 'Valle d\'Aosta', value: 'Sola disinfezione nella maggior parte dei comuni' },
        ],
      },
      {
        label: 'Problematiche tipiche',
        values: [
          { region: 'Trentino-Alto Adige', value: 'Torbidità da piogge intense, locali tracce di arsenico geogenico' },
          { region: 'Valle d\'Aosta', value: 'Torbidità da scioglimento glaciale, mineralizzazione molto bassa' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Trentino-Alto Adige', value: 'Gestione prevalentemente comunale, Novareti, SEAB' },
          { region: 'Valle d\'Aosta', value: 'BIM (Bacino Imbrifero Montano), gestione comunale e consortile' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Sorgenti di alta quota e qualità della risorsa',
        paragraphs: [
          "Entrambe le regioni alpine dispongono di sorgenti naturali di alta quota che alimentano una porzione molto rilevante del fabbisogno idropotabile. In Trentino-Alto Adige le sorgenti dolomitiche e quelle dei massicci silicatici della catena di confine forniscono acque a bassa mineralizzazione, fredde e povere di carico organico. In Valle d'Aosta le sorgenti dei massicci del Monte Bianco, del Gran Paradiso, del Monte Rosa e del Cervino hanno caratteristiche analoghe, con valori di durezza ancora più bassi nelle aree silicatiche.",
          "La quota delle captazioni, la limitata pressione antropica nelle aree di ricarica e la geologia favorevole consentono in molti comuni di erogare acqua con sola disinfezione, senza trattamenti aggiuntivi. Il D.Lgs. 18/2023 impone in ogni caso un piano di sicurezza dell'acqua che copre l'intera filiera, dalla captazione al rubinetto, indipendentemente dalla qualità della risorsa di origine.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione: due regioni dolci',
        paragraphs: [
          "Le acque del Trentino-Alto Adige presentano valori di durezza fra 8 e 25 °f a seconda della provincia e della provenienza. Le acque della Valle d'Aosta scendono in molte aree sotto i 10 °f, con casi di mineralizzazione molto bassa nelle captazioni dei massicci silicatici. Entrambe le regioni rientrano ampiamente nell'intervallo consigliato di 15-50 °f indicato dal D.Lgs. 18/2023, con valori che si collocano spesso al di sotto del minimo consigliato.",
          "Un'acqua a bassissima mineralizzazione può risultare più aggressiva nei confronti di tubazioni metalliche, in particolare quelle interne degli edifici più datati. Per questo motivo l'analisi del campione prelevato al rubinetto può integrare il dato di rete con informazioni rilevanti su parametri come piombo, rame o ferro disciolti dalle tubazioni private.",
        ],
      },
      {
        heading: 'Gestione del servizio: frammentazione comunale',
        paragraphs: [
          "Il servizio idrico in entrambe le regioni è caratterizzato da una forte presenza della dimensione comunale e consortile. In Trentino-Alto Adige convivono gestori urbani come Novareti per Trento e SEAB per Bolzano con una vasta rete di gestioni comunali nelle valli. In Valle d'Aosta il sistema dei BIM e dei consorzi di gestione affianca le gestioni comunali dirette, con una dimensione media di servizio molto piccola.",
          "Questa frammentazione, se da un lato consente una conoscenza diretta del territorio e delle captazioni, dall'altro implica un maggiore impegno di coordinamento per gli investimenti e per il monitoraggio. Le tariffe medie restano fra le più basse a livello nazionale in entrambe le regioni.",
        ],
      },
      {
        heading: 'Eventi meteo e torbidità',
        paragraphs: [
          "Una caratteristica comune alle due regioni è la sensibilità delle captazioni a eventi meteorologici intensi. Piogge violente e scioglimento glaciale possono causare episodi di torbidità nelle sorgenti, con conseguente necessità temporanea di intensificare il trattamento o di passare a fonti alternative. Tali episodi sono gestiti dai piani di sicurezza dell'acqua dei gestori e in genere non comportano superamenti dei limiti microbiologici al punto d'uso.",
          "I cambiamenti climatici stanno modificando la stagionalità delle portate e la dinamica dei ghiacciai, con implicazioni di lungo periodo che entrambe le regioni stanno monitorando. Le strategie di adattamento includono la diversificazione delle fonti e il rafforzamento dei sistemi di accumulo.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua del rubinetto in Trentino-Alto Adige e Valle d\'Aosta è davvero fra le migliori d\'Italia?',
        a: "La qualità della risorsa di origine, le sorgenti di alta quota, è oggettivamente fra le più favorevoli del Paese. La normativa è uguale per tutti, quindi l'acqua è conforme al D.Lgs. 18/2023 ovunque venga erogata. Il vantaggio strutturale di queste regioni è che il trattamento può limitarsi alla disinfezione, segno di una risorsa di partenza di buona qualità.",
      },
      {
        q: 'Perché l\'acqua valdostana è così poco mineralizzata?',
        a: "Le rocce silicatiche dei massicci alpini occidentali rilasciano poche sostanze disciolte nelle acque sotterranee, generando acque a bassa o bassissima mineralizzazione. Questa caratteristica è naturale e non rappresenta un problema sanitario, ma può rendere l'acqua più aggressiva verso le tubazioni metalliche più datate.",
      },
      {
        q: 'Le sorgenti dolomitiche sono diverse da quelle silicatiche?',
        a: "Sì. Le rocce dolomitiche e calcaree rilasciano calcio e magnesio, producendo acque a durezza media. Le rocce silicatiche tipiche dei massicci cristallini rilasciano molto meno, generando acque più dolci. Entrambe le tipologie sono presenti sia in Trentino-Alto Adige sia in Valle d'Aosta a seconda della provenienza.",
      },
      {
        q: 'Devo preoccuparmi della torbidità dopo piogge intense?',
        a: "I gestori del servizio idrico delle due regioni gestiscono questi eventi attraverso i piani di sicurezza dell'acqua previsti dal D.Lgs. 18/2023. In caso di superamento dei limiti viene emessa un'ordinanza di non potabilità temporanea. Verifica le comunicazioni del tuo gestore in caso di eventi meteo eccezionali.",
      },
      {
        q: 'L\'acqua povera di sali è meno salutare?',
        a: "No. Un'acqua oligominerale è perfettamente compatibile con un'alimentazione bilanciata. La maggior parte del calcio e del magnesio assunti quotidianamente arriva dal cibo. Il D.Lgs. 18/2023 stabilisce un intervallo consigliato di durezza in funzione del comfort impiantistico, non della salubrità.",
      },
    ],
    ctaVariant: 'metalli-pesanti',
    ctaContext:
      "Se vivi in un edificio storico in Trentino-Alto Adige o in Valle d'Aosta, le acque a bassa mineralizzazione possono interagire con tubazioni metalliche datate. Un'analisi dei metalli al punto d'uso ti dice se piombo o rame rilasciati dalle tubazioni private alterano il quadro reale al tuo rubinetto.",
    relatedSlugs: ['piemonte-vs-liguria', 'lombardia-vs-veneto', 'regione-con-acqua-migliore-italia'],
  },

  {
    slug: 'friuli-vs-veneto',
    title: 'Acqua Friuli Venezia Giulia vs Veneto: Carso e PFAS a confronto',
    shortTitle: 'Acqua Friuli VG vs Veneto: Carso e PFAS',
    metaDescription:
      'Confronto fra l\'acqua del rubinetto in Friuli Venezia Giulia e Veneto: sorgenti del Carso e delle Alpi Giulie, area PFAS vicentina, gestori e qualità al rubinetto.',
    searchKeywords: [
      'acqua friuli venezia giulia veneto',
      'pfas veneto',
      'acqua carso',
      'acqua rubinetto friuli',
      'acqua trieste udine',
      'acquedotto pordenone vicenza',
    ],
    regions: ['Friuli Venezia Giulia', 'Veneto'],
    intro:
      "Friuli Venezia Giulia e Veneto sono regioni del Nord-Est con strutture idriche profondamente diverse, pur condividendo l'arco prealpino. Il Friuli dispone di importanti riserve nelle Alpi Giulie e Carniche e del sistema sorgentizio del Carso. Il Veneto ha conosciuto, in una porzione del proprio territorio, l'emergenza nazionale dei PFAS, con il bacino dell'area vicentina-veronese-padovana al centro di interventi specifici. Questo confronto, basato sul D.Lgs. 18/2023 e sulla direttiva (UE) 2020/2184, descrive in modo onesto i punti di forza e le criticità storiche delle due regioni.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Friuli Venezia Giulia', value: '15-30 °f (dolce/media)' },
          { region: 'Veneto', value: '25-40 °f (media/dura)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Friuli Venezia Giulia', value: 'Sorgenti delle Alpi Giulie e Carniche, falda dell\'alta pianura, Carso' },
          { region: 'Veneto', value: 'Sorgenti prealpine, falda della pianura veneta, risorgive' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Friuli Venezia Giulia', value: 'Vulnerabilità del Carso, locali nitrati nella bassa pianura' },
          { region: 'Veneto', value: 'PFAS storici nell\'area vicentina, nitrati di origine agricola e zootecnica' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Friuli Venezia Giulia', value: 'CAFC, AcegasApsAmga, HydroGEA, Livenza Tagliamento Acque' },
          { region: 'Veneto', value: 'Acque Veronesi, Acque Vicentine, ETRA, Veritas, Viacqua, AcegasApsAmga' },
        ],
      },
      {
        label: 'Trattamento PFAS dedicato',
        values: [
          { region: 'Friuli Venezia Giulia', value: 'Non rilevante a livello sistemico' },
          { region: 'Veneto', value: 'Impianti a carboni attivi in alcune aree dell\'ovest vicentino e bassa veronese' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Il sistema sorgentizio del Carso',
        paragraphs: [
          "Il Carso triestino e isontino è un acquifero carbonatico estremamente produttivo ma anche estremamente vulnerabile. La rapidità di transito delle acque nei sistemi carsici implica una limitata capacità di autodepurazione e una forte sensibilità alle pressioni antropiche superficiali. Le sorgenti del Timavo, fra le più importanti d'Europa per portata, alimentano una porzione del territorio. La gestione di queste captazioni richiede tutela rigorosa delle aree di ricarica.",
          "Le acque carsiche, di norma fresche e di buona qualità chimica, possono mostrare oscillazioni di torbidità dopo piogge intense per via della rapidità di transito. Il monitoraggio nei punti di captazione è continuo. La qualità al rubinetto nei capoluoghi del Friuli Venezia Giulia, da Trieste a Udine a Pordenone, è conforme ai limiti del D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'PFAS: il caso veneto',
        paragraphs: [
          "Il Veneto è stato al centro di una delle emergenze ambientali più rilevanti d'Italia per la presenza di PFAS, sostanze poli- e perfluoroalchiliche, in una porzione di territorio che comprende parte delle province di Vicenza, Verona e Padova. L'origine è stata individuata in attività industriali storiche di un sito produttivo specifico. La risposta del sistema sanitario regionale e dei gestori ha incluso l'installazione di impianti di abbattimento a carboni attivi, sorveglianza epidemiologica e nuovi limiti normativi.",
          "Il D.Lgs. 18/2023, che recepisce la direttiva (UE) 2020/2184, ha introdotto a livello nazionale i limiti per PFAS totali (0,5 µg/L) e per la somma di 20 PFAS specifici (0,1 µg/L), in vigore dal 12 gennaio 2026. La Regione Veneto applica già limiti di prestazione più stringenti per i propri impianti dell'area interessata. Le aree del Friuli Venezia Giulia non risultano interessate da problematiche PFAS sistemiche analoghe.",
        ],
      },
      {
        heading: 'Falda dell\'alta pianura e risorgive',
        paragraphs: [
          "Sia il Friuli sia il Veneto si appoggiano in larga misura alla falda dell'alta pianura, alimentata dalle dispersioni dei fiumi alpini nelle conoidi al piede dei rilievi. Questa falda fornisce acqua di buona qualità alle aree di alta e media pianura. Nella bassa pianura, dove emergono le risorgive, la situazione è più articolata e la pressione agricola e zootecnica può incidere sui nitrati nelle falde superficiali.",
          "Le risorgive del Veneto centrale e del Friuli occidentale sono ambienti idrogeologici di grande valore, ma sono anche indicatori sensibili dello stato delle acque sotterranee. Il monitoraggio dei nitrati di origine agricola è stato a lungo un tema di attenzione per entrambe le regioni, con esiti complessivamente in miglioramento negli ultimi due decenni grazie alle politiche di buona pratica agricola.",
        ],
      },
      {
        heading: 'Gestori e investimenti',
        paragraphs: [
          "Il Friuli Venezia Giulia ha un panorama gestionale con quattro ambiti territoriali ottimali e gestori come CAFC per Udine, AcegasApsAmga per Trieste, HydroGEA per la Carnia e Livenza Tagliamento Acque per il pordenonese orientale. In Veneto operano gestori come Acque Veronesi, Acque Vicentine, ETRA, Veritas e Viacqua, organizzati per ambito territoriale. In entrambe le regioni la copertura è capillare e gli investimenti pro capite sono in linea con la media del Nord Italia.",
          "Le tariffe medie sono moderate in entrambe le regioni, con valori in genere fra 1,80 e 2,60 €/m³ per uso domestico tipo. La rete è oggetto di interventi continui di rinnovo e di distrettualizzazione per la ricerca perdite.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua del rubinetto nelle zone PFAS del Veneto è sicura oggi?',
        a: "Nelle aree storicamente interessate i gestori hanno installato impianti di abbattimento a carboni attivi e applicano limiti di prestazione stringenti. La conformità al D.Lgs. 18/2023, che entra pienamente in vigore per PFAS dal 12 gennaio 2026, è monitorata da ARPAV e dalle ASL. I dati pubblici dei gestori dell'area dichiarano valori in uscita dagli impianti molto bassi.",
      },
      {
        q: 'Cos\'è il Carso e perché è importante per l\'acqua del Friuli?',
        a: "Il Carso è un altopiano calcareo della Venezia Giulia con un sistema idrografico sotterraneo unico in Europa. Fornisce acqua di buona qualità a una parte del territorio regionale, ma la sua vulnerabilità intrinseca rende fondamentale la tutela delle aree di ricarica e il monitoraggio continuo. La rapidità di transito implica oscillazioni di torbidità dopo piogge intense.",
      },
      {
        q: 'Quali parametri sono più rilevanti in Veneto?',
        a: "Nelle aree interessate dai PFAS, la verifica della somma dei PFAS specifici e dei PFAS totali è il parametro più rilevante. Nelle aree agricole della pianura veneta, anche i nitrati possono essere d'interesse. La durezza è in genere medio-alta. Il rapporto di prova del gestore documenta i valori effettivi per il tuo Comune.",
      },
      {
        q: 'Friuli Venezia Giulia e Veneto hanno acqua più dolce o più dura?',
        a: "Il Friuli ha in media valori più contenuti, fra 15 e 30 °f, grazie al contributo delle sorgenti alpine. Il Veneto ha in media valori più alti, fra 25 e 40 °f, per via della componente di falda padana e prealpina con litologia carbonatica. Entrambe rientrano nell'intervallo consigliato di 15-50 °f del D.Lgs. 18/2023.",
      },
      {
        q: 'Come faccio a sapere se la mia abitazione è in un\'area PFAS?',
        a: "I gestori del Veneto pubblicano le mappe dell'area interessata e i Comuni serviti dagli impianti di abbattimento. Puoi consultare il sito del gestore del tuo Comune e quello di ARPAV. In alternativa, un'analisi di laboratorio mirata sui PFAS specifici dal campione prelevato al rubinetto fornisce il dato puntuale dell'abitazione.",
      },
    ],
    ctaVariant: 'pfas',
    ctaContext:
      "Se vivi in Veneto, in particolare nelle province di Vicenza, Verona o Padova, un'analisi dedicata PFAS sul campione del tuo rubinetto fornisce il dato puntuale per la tua abitazione, integrando il dato di rete del gestore.",
    relatedSlugs: ['lombardia-vs-veneto', 'pianura-padana-acqua', 'nord-vs-sud-italia'],
  },

  {
    slug: 'lazio-vs-toscana',
    title: 'Acqua Lazio vs Toscana: vulcanico contro appenninico centrale',
    shortTitle: 'Acqua Lazio vs Toscana: vulcanico vs appenninico',
    metaDescription:
      'Confronto fra l\'acqua del rubinetto in Lazio e Toscana: acquiferi vulcanici, sorgenti appenniniche, arsenico geogenico, fluoruri e gestori delle due regioni del centro Italia.',
    searchKeywords: [
      'acqua lazio toscana',
      'arsenico acqua lazio',
      'acqua roma firenze',
      'acqua vulcanica centro italia',
      'acquedotto peschiera lazio',
      'acqua rubinetto toscana',
    ],
    regions: ['Lazio', 'Toscana'],
    intro:
      "Lazio e Toscana sono le due regioni più popolose del centro Italia e offrono un confronto interessante fra due geologie idriche diverse: quella vulcanica laziale e quella prevalentemente appenninica toscana. Il Lazio dispone di sorgenti di altissima qualità nell'area reatina ma deve gestire la presenza naturale di arsenico e fluoruri in alcuni acquiferi vulcanici. La Toscana si appoggia a un mix di sorgenti appenniniche, falde alluvionali e invasi. Questo confronto, basato sul D.Lgs. 18/2023, descrive in modo equilibrato i due quadri senza eleggere una regione vincente.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Lazio', value: '20-40 °f (medio-dura)' },
          { region: 'Toscana', value: '20-35 °f (media)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Lazio', value: 'Sorgenti del reatino e dei Sibillini, acquiferi vulcanici, falde laziali' },
          { region: 'Toscana', value: 'Sorgenti appenniniche, falda di Pianura, invasi, acquiferi del Monte Amiata' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Lazio', value: 'Arsenico geogenico, fluoruri in alcune aree vulcaniche' },
          { region: 'Toscana', value: 'Arsenico geogenico in Amiata, durezza, locali nitrati di pianura' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Lazio', value: 'ACEA ATO 2, ACEA ATO 5, Acqualatina, Talete' },
          { region: 'Toscana', value: 'Publiacqua, Acque SpA, ASA, Nuove Acque, GAIA' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Lazio', value: '1,80-2,40 €/m³' },
          { region: 'Toscana', value: '2,40-3,00 €/m³ (fra le più alte d\'Italia)' },
        ],
      },
    ],
    sections: [
      {
        heading: 'L\'acquedotto del Peschiera e le sorgenti reatine',
        paragraphs: [
          "Il sistema dell'acquedotto del Peschiera, alimentato dalle sorgenti reatine del Peschiera e delle Capore, costituisce la spina dorsale dell'approvvigionamento idrico di Roma e di larga parte del Lazio. Si tratta di sorgenti di altissima qualità chimica e di portata eccezionale. ACEA ATO 2 gestisce il sistema con investimenti continui. La distanza fra le sorgenti e l'utilizzo finale rende cruciale la tenuta della rete adduttrice.",
          "Anche le sorgenti dei Monti Sibillini, condivise con le Marche e l'Umbria, contribuiscono al sistema idrico del Lazio settentrionale e dell'Umbria. La componente vulcanica del Lazio centrale, dei Castelli Romani in particolare, integra l'approvvigionamento con falde che possono presentare contenuti naturali di arsenico e fluoruri da gestire con trattamento specifico.",
        ],
      },
      {
        heading: 'Acquiferi vulcanici e arsenico geogenico',
        paragraphs: [
          "Le aree vulcaniche del Lazio settentrionale, dei Castelli Romani e dei Monti Sabatini possono presentare nelle acque sotterranee concentrazioni naturali di arsenico legate alla composizione delle rocce vulcaniche. Negli anni passati sono state attivate deroghe ai sensi della normativa europea, oggi superate grazie agli interventi di abbattimento. Il limite del D.Lgs. 18/2023 per l'arsenico è 10 µg/L.",
          "La Toscana ha analogamente un'area vulcanica importante nel Monte Amiata, con presenza geogenica di arsenico in alcune sorgenti. Anche qui sono stati realizzati impianti di abbattimento dedicati. La conformità ai limiti è oggi assicurata. La presenza di arsenico geogenico non è quindi specifica di una singola regione ma è un tema condiviso del centro Italia vulcanico.",
        ],
      },
      {
        heading: 'Fluoruri e altri parametri specifici',
        paragraphs: [
          "I fluoruri sono un altro parametro che può presentare valori elevati negli acquiferi vulcanici, in particolare in alcune aree del Lazio settentrionale e dei Castelli Romani. Il limite del D.Lgs. 18/2023 è 1,5 mg/L. Gli interventi di gestione possono includere la miscelazione con altre fonti o trattamenti dedicati. La Toscana presenta valori di fluoruri in genere più contenuti.",
          "Altri parametri vulcanici da monitorare includono il manganese e, in alcune aree, il vanadio. Il monitoraggio costante e la trasparenza dei dati pubblici da parte dei gestori sono lo strumento per garantire la conformità.",
        ],
      },
      {
        heading: 'Tariffe: Toscana fra le più alte d\'Italia',
        paragraphs: [
          "La Toscana presenta storicamente le tariffe idriche fra le più elevate a livello nazionale, con valori medi per uso domestico fra 2,40 e 3,00 €/m³, in alcune aree anche oltre. Il livello tariffario riflette gli investimenti in rinnovo delle reti e in adeguamento degli impianti di trattamento. Il Lazio presenta tariffe in genere più contenute, con valori fra 1,80 e 2,40 €/m³, anche se con differenze significative fra gli ambiti.",
          "La tariffa più alta non è di per sé indice di servizio peggiore: spesso finanzia interventi infrastrutturali necessari. Il confronto delle bollette va sempre fatto per consumo equivalente.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua del rubinetto a Roma è di buona qualità?',
        a: "Sì. L'acqua erogata da ACEA ATO 2 proviene in gran parte dalle sorgenti reatine del Peschiera e delle Capore, di altissima qualità. La conformità al D.Lgs. 18/2023 è documentata dai rapporti di prova pubblicati. In alcune aree integrate da fonti vulcaniche locali viene applicato trattamento specifico per arsenico e fluoruri.",
      },
      {
        q: 'C\'è ancora un problema di arsenico nell\'acqua del Lazio?',
        a: "Le situazioni di deroga storiche legate all'arsenico geogenico sono state superate con interventi di abbattimento. La conformità ai limiti del D.Lgs. 18/2023 (10 µg/L per l'arsenico) è oggi assicurata nelle aree interessate. La verifica puntuale è disponibile nei rapporti di prova dei gestori.",
      },
      {
        q: 'L\'acqua a Firenze è dura?',
        a: "L'acqua di Firenze, erogata da Publiacqua, ha una durezza media intorno a 25-30 °f, quindi medio-dura. Rientra ampiamente nell'intervallo consigliato di 15-50 °f del D.Lgs. 18/2023. La sensazione di durezza dipende anche dalla rete domestica e dagli scaldabagni.",
      },
      {
        q: 'Perché in Toscana l\'acqua costa così tanto?',
        a: "Le tariffe toscane riflettono livelli di investimento storicamente elevati e l'adeguamento di impianti di trattamento per arsenico nelle aree dell'Amiata e per altri parametri specifici. Il dato medio è fra i più alti a livello nazionale ma è dichiarato e regolato dall'ARERA.",
      },
      {
        q: 'Dove si trovano le aree vulcaniche nel Lazio e in Toscana?',
        a: "In Lazio i Castelli Romani, i Monti Sabatini, l'area dei laghi di Bracciano e Vico, e parte del viterbese hanno geologia vulcanica. In Toscana il Monte Amiata è la principale area vulcanica. In queste aree la geologia può influire su parametri come arsenico e fluoruri, gestiti dai trattamenti.",
      },
    ],
    ctaVariant: 'metalli-pesanti',
    ctaContext:
      "Se vivi in un'area di geologia vulcanica del Lazio o della Toscana, un'analisi dedicata a metalli e parametri specifici come arsenico e fluoruri sul campione del tuo rubinetto fornisce il dato puntuale della tua abitazione.",
    relatedSlugs: ['toscana-vs-umbria', 'lazio-vs-campania', 'regione-con-acqua-migliore-italia'],
  },

  {
    slug: 'abruzzo-vs-molise',
    title: 'Acqua Abruzzo vs Molise: l\'Appennino centro-meridionale a confronto',
    shortTitle: 'Acqua Abruzzo vs Molise: Appennino centro-sud',
    metaDescription:
      'Confronto fra l\'acqua del rubinetto in Abruzzo e Molise: sorgenti appenniniche del Gran Sasso e del Matese, gestori e qualità nei capoluoghi delle due regioni.',
    searchKeywords: [
      'acqua abruzzo molise',
      'acqua gran sasso',
      'acquedotto molisano',
      'acqua rubinetto abruzzo',
      'acqua l\'aquila pescara',
      'acqua campobasso',
    ],
    regions: ['Abruzzo', 'Molise'],
    intro:
      "Abruzzo e Molise sono due regioni dell'Appennino centro-meridionale storicamente accomunate da una risorsa idrica di sorgente di buona qualità. L'Abruzzo dispone delle grandi sorgenti del Gran Sasso e della Maiella, mentre il Molise si appoggia al sistema sorgentizio del Matese e a varie sorgenti minori. Le due regioni hanno dimensioni demografiche molto diverse, ma una struttura idrica simile. Questo confronto, basato sul D.Lgs. 18/2023, descrive il quadro reale con onestà, senza eleggere una regione superiore all'altra.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Abruzzo', value: '20-35 °f (media)' },
          { region: 'Molise', value: '20-35 °f (media)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Abruzzo', value: 'Sorgenti del Gran Sasso, della Maiella, dei Monti della Laga' },
          { region: 'Molise', value: 'Sorgenti del Matese, sorgenti minori dell\'Appennino molisano' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Abruzzo', value: 'Vulnerabilità degli acquiferi carsici, casi storici al Gran Sasso' },
          { region: 'Molise', value: 'Frammentazione gestionale, condizione delle reti' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Abruzzo', value: 'Ruzzo Reti, ACA, SACA, SASI, ACIAM, CAM' },
          { region: 'Molise', value: 'GRIM, Molise Acque, gestione comunale in alcune aree' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Abruzzo', value: '1,40-2,00 €/m³' },
          { region: 'Molise', value: '1,30-1,90 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Sorgenti del Gran Sasso e della Maiella',
        paragraphs: [
          "L'Abruzzo dispone di un sistema sorgentizio carsico di rilievo nazionale, alimentato dai massicci del Gran Sasso, della Maiella e dei Monti della Laga. Le sorgenti del Vera, del Tirino, del Pescara e altre forniscono acque di ottima qualità chimica a una vasta parte del territorio regionale. La capacità di rinnovo delle riserve è alta nelle stagioni piovose ma sensibile alla siccità prolungata.",
          "Gli acquiferi carsici del Gran Sasso hanno conosciuto in passato vicende di vulnerabilità legate alla presenza dei laboratori nazionali di fisica e a infrastrutture stradali interne al massiccio. La gestione di questa risorsa richiede tutela rigorosa e monitoraggio continuo. La conformità ai limiti del D.Lgs. 18/2023 è documentata dai rapporti di prova dei gestori.",
        ],
      },
      {
        heading: 'Il sistema del Matese in Molise',
        paragraphs: [
          "Il Molise si appoggia in larga parte al sistema sorgentizio del Matese, condiviso con la Campania, integrato da sorgenti appenniniche minori. Le sorgenti del Biferno e del Volturno alimentano una parte significativa del territorio. Molise Acque gestisce il sistema di adduzione regionale, mentre la distribuzione finale è frammentata fra più soggetti.",
          "La qualità chimica della risorsa di origine è in genere buona, con caratteristiche tipiche delle acque calcaree appenniniche. La durezza si colloca su valori medi. La maggiore criticità è di tipo gestionale: la frammentazione della distribuzione e l'età delle reti incidono sulle perdite e sulla pressione di servizio in alcune aree.",
        ],
      },
      {
        heading: 'Capoluoghi: L\'Aquila, Pescara, Campobasso',
        paragraphs: [
          "L'Aquila è alimentata da sorgenti del massiccio del Gran Sasso e dei Monti della Laga, con qualità chimica eccellente e durezza media. Ruzzo Reti gestisce il servizio di buona parte della provincia di Teramo e l'Aquila ha CAM come gestore. Pescara è servita da ACA con un mix di sorgenti e falde, con qualità conforme e durezza media.",
          "Campobasso e parte del Molise interno sono serviti da GRIM con acque del Matese e di sorgenti locali. La qualità al rubinetto è conforme. La verifica puntuale è disponibile nei rapporti di prova del gestore. Le differenze fra capoluoghi e piccoli comuni interni delle due regioni possono essere significative in termini di vetustà delle reti.",
        ],
      },
      {
        heading: 'Frammentazione gestionale: una sfida comune',
        paragraphs: [
          "Sia l'Abruzzo sia il Molise mostrano un panorama gestionale frammentato rispetto alle medie nazionali. In Abruzzo operano numerosi gestori per ambito territoriale ottimale. In Molise la dimensione regionale piccola accentua la frammentazione, con presenza significativa di gestioni comunali. La frammentazione può limitare la capacità di investimento e di pianificazione strategica.",
          "Gli investimenti pro capite nelle infrastrutture idriche sono mediamente inferiori rispetto al Nord Italia. Le tariffe medie sono fra le più basse d'Italia, riflettendo questo quadro. La presenza di sorgenti di buona qualità di partenza compensa in parte i limiti gestionali, garantendo conformità chimica al rubinetto.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua delle sorgenti del Gran Sasso è ancora di buona qualità?',
        a: "Le sorgenti del Gran Sasso forniscono acque di ottima qualità chimica al sistema idrico regionale. Le situazioni di vulnerabilità legate alle infrastrutture interne al massiccio sono monitorate. La conformità al D.Lgs. 18/2023 è documentata dai gestori. La verifica puntuale è disponibile nei rapporti di prova del tuo Comune.",
      },
      {
        q: 'Il Molise ha problemi di acqua?',
        a: "Il Molise dispone di sorgenti del Matese e dell'Appennino interno di buona qualità chimica. La principale criticità è di tipo gestionale e infrastrutturale, con frammentazione della distribuzione e vetustà delle reti in alcune aree. La conformità ai limiti di legge al rubinetto è in genere assicurata.",
      },
      {
        q: 'A Campobasso si può bere l\'acqua del rubinetto?',
        a: "Sì. L'acqua erogata è conforme ai limiti del D.Lgs. 18/2023. La verifica del dato di rete è disponibile nei rapporti di prova del gestore. La rete domestica dell'edificio e i serbatoi privati possono incidere su parametri come piombo e carica microbica al punto d'uso.",
      },
      {
        q: 'L\'Abruzzo ha tariffe basse?',
        a: "Sì. L'Abruzzo ha tariffe medie fra 1,40 e 2,00 €/m³ per uso domestico tipo, fra le più contenute a livello nazionale. Il Molise si colloca su valori analoghi o leggermente più bassi. Le tariffe basse riflettono anche un livello di investimento pro capite più contenuto.",
      },
      {
        q: 'Qual è la differenza fra acque del Gran Sasso e del Matese?',
        a: "Si tratta in entrambi i casi di acque carsiche calcaree di buona qualità chimica, con durezza media. Le caratteristiche idrochimiche di dettaglio dipendono dalla specifica sorgente. Per il consumatore al rubinetto le differenze sono marginali a parità di rete domestica.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Se vivi in Abruzzo o Molise, in particolare in piccoli comuni serviti da reti datate, un'analisi completa del campione al rubinetto integra il dato del gestore con informazioni su parametri legati alla rete domestica del tuo edificio.",
    relatedSlugs: ['lazio-vs-campania', 'puglia-vs-basilicata', 'nord-vs-sud-italia'],
  },

  {
    slug: 'nord-italia-comprehensive',
    title: 'Acqua del rubinetto Nord Italia: panoramica completa di tutte le regioni',
    shortTitle: 'Acqua Nord Italia: panoramica completa',
    metaDescription:
      'Panoramica completa sull\'acqua del rubinetto nel Nord Italia: tutte le regioni a confronto su durezza, problematiche storiche, gestori e tariffe, dal Piemonte al Friuli.',
    searchKeywords: [
      'acqua nord italia',
      'qualità acqua nord italia',
      'acqua rubinetto regioni settentrionali',
      'acqua piemonte lombardia veneto',
      'durezza acqua nord italia',
      'gestori acqua nord italia',
    ],
    regions: [
      'Piemonte',
      'Valle d\'Aosta',
      'Lombardia',
      'Trentino-Alto Adige',
      'Veneto',
      'Friuli Venezia Giulia',
      'Liguria',
      'Emilia-Romagna',
    ],
    intro:
      "Il Nord Italia, inteso come l'insieme delle otto regioni settentrionali, copre circa il 46% della popolazione nazionale e presenta un quadro idrico estremamente variegato. Si va dalle sorgenti glaciali della Valle d'Aosta alle acque della falda padana, dall'arco alpino del Trentino-Alto Adige alla geologia di costa della Liguria. Le problematiche storiche sono differenziate: nitrati nelle aree agricole, PFAS in una porzione del Veneto, solventi clorurati in alcune aree industriali storiche, durezza diffusa nella pianura. Questa panoramica, basata sul D.Lgs. 18/2023, mette a confronto in modo onesto i punti di forza e di attenzione di tutte le regioni del Nord.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Piemonte', value: '20-35 °f (media)' },
          { region: 'Valle d\'Aosta', value: '5-20 °f (molto dolce)' },
          { region: 'Lombardia', value: '25-45 °f (medio-dura/dura)' },
          { region: 'Trentino-Alto Adige', value: '8-25 °f (dolce)' },
          { region: 'Veneto', value: '25-40 °f (media/dura)' },
          { region: 'Friuli Venezia Giulia', value: '15-30 °f (dolce/media)' },
          { region: 'Liguria', value: '15-30 °f (medio-dolce/media)' },
          { region: 'Emilia-Romagna', value: '25-45 °f (medio-dura/dura)' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Piemonte', value: 'Cromo esavalente storico, nitrati locali' },
          { region: 'Valle d\'Aosta', value: 'Bassa mineralizzazione' },
          { region: 'Lombardia', value: 'Solventi clorurati storici, nitrati, durezza' },
          { region: 'Trentino-Alto Adige', value: 'Torbidità da piogge intense' },
          { region: 'Veneto', value: 'PFAS storici nell\'area vicentina, nitrati' },
          { region: 'Friuli Venezia Giulia', value: 'Vulnerabilità del Carso, nitrati locali' },
          { region: 'Liguria', value: 'Salinizzazione costiera, frammentazione' },
          { region: 'Emilia-Romagna', value: 'Salinizzazione delle falde costiere, nitrati' },
        ],
      },
    ],
    sections: [
      {
        heading: 'L\'arco alpino: sorgenti di alta quota',
        paragraphs: [
          "Le regioni dell'arco alpino, Valle d'Aosta, Piemonte settentrionale, Lombardia settentrionale, Trentino-Alto Adige e Friuli Venezia Giulia, dispongono di un patrimonio sorgentizio di alta quota fra i più rilevanti d'Europa. La qualità chimica della risorsa di origine è in genere eccellente, con bassa mineralizzazione e bassa pressione antropica nelle aree di ricarica. Il trattamento si limita spesso alla sola disinfezione.",
          "Le caratteristiche differiscono in base alla litologia: rocce silicatiche dei massicci cristallini producono acque molto dolci, rocce dolomitiche e calcaree producono acque a durezza media. La principale criticità delle aree alpine è la sensibilità a eventi meteorologici intensi, che possono causare temporanee torbidità.",
        ],
      },
      {
        heading: 'La Pianura Padana: la falda più sfruttata d\'Italia',
        paragraphs: [
          "La Pianura Padana, condivisa fra Piemonte, Lombardia, Veneto ed Emilia-Romagna, ospita la falda più produttiva ma anche più sfruttata d'Italia. Decenni di pressione agricola, zootecnica e industriale hanno lasciato un'eredità di problematiche tipiche: nitrati nelle falde superficiali, solventi clorurati in alcune aree industriali storiche, PFAS in una porzione del Veneto. La risposta del sistema idrico include trattamenti dedicati, miscelazione e protezione delle aree di salvaguardia.",
          "Le acque della pianura presentano in genere durezza media o medio-alta, con valori frequenti fra 25 e 45 °f. La pianura è anche l'area dove sono concentrate le principali multiutility del Paese, con livelli di investimento mediamente alti.",
        ],
      },
      {
        heading: 'La Liguria: una costa stretta fra mare e Appennino',
        paragraphs: [
          "La Liguria ha una struttura idrica peculiare, condizionata dalla geografia stretta fra mare e Appennino. Le risorse idriche sono frammentate, in parte di sorgente appenninica, in parte da falde alluvionali costiere. La salinizzazione di alcune falde costiere è una problematica tipica. La distribuzione è capillare ma frammentata fra più gestori.",
          "Le acque liguri hanno in genere durezza medio-dolce, con valori frequenti fra 15 e 30 °f. La qualità chimica al rubinetto è conforme. Le criticità più rilevanti sono di tipo infrastrutturale e legate alla vulnerabilità delle captazioni costiere.",
        ],
      },
      {
        heading: 'Gestori e investimenti nel Nord',
        paragraphs: [
          "Il Nord Italia ospita le principali multiutility a controllo pubblico del Paese: Hera in Emilia-Romagna e parte del Triveneto, A2A e MM in Lombardia, Iren in Piemonte e Liguria. Convivono con gestori regionali e con realtà locali nelle aree alpine. I livelli di investimento pro capite sono mediamente i più alti d'Italia.",
          "Le tariffe medie del Nord sono in genere fra 2,00 e 2,80 €/m³ per uso domestico tipo. La differenza con il resto del Paese riflette il livello di investimento. Le perdite di rete sono mediamente fra il 25 e il 35%, valori migliori della media nazionale.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Qual è la regione del Nord con l\'acqua più dolce?',
        a: "Valle d'Aosta e Trentino-Alto Adige hanno in media i valori di durezza più bassi, grazie alle sorgenti di alta quota su rocce silicatiche e dolomitiche. Anche parti del Piemonte settentrionale e della Lombardia alpina hanno acque a durezza medio-bassa. Le aree di pianura padana hanno in genere acque medio-dure o dure.",
      },
      {
        q: 'Tutto il Nord Italia ha problemi di PFAS?',
        a: "No. I PFAS sono una problematica concentrata in una porzione del territorio veneto, in particolare nelle province di Vicenza, Verona e Padova. Il resto del Nord non presenta problematiche PFAS sistemiche analoghe. Il D.Lgs. 18/2023 introduce limiti uniformi a livello nazionale per PFAS in vigore dal 12 gennaio 2026.",
      },
      {
        q: 'Perché al Nord la bolletta dell\'acqua costa di più che al Sud?',
        a: "I livelli di investimento pro capite del Nord sono mediamente più alti, sia per il rinnovo delle reti sia per i trattamenti dedicati. Anche i costi energetici per sollevamento e depurazione incidono. La tariffa è regolata dall'ARERA in funzione del piano economico-finanziario dei gestori.",
      },
      {
        q: 'I nitrati sono un problema in tutto il Nord?',
        a: "I nitrati di origine agricola e zootecnica sono una problematica delle falde superficiali della Pianura Padana, in particolare in alcune aree di Lombardia, Veneto ed Emilia-Romagna. La rete di distribuzione utilizza in genere falde più profonde o miscelazione per garantire la conformità al limite di 50 mg/L del D.Lgs. 18/2023.",
      },
      {
        q: 'Le acque alpine sono davvero le migliori d\'Italia?',
        a: "Le sorgenti di alta quota dell'arco alpino partono da una risorsa di qualità eccezionale. La normativa è uguale per tutti, quindi parlare di 'migliore in assoluto' non è corretto: l'acqua è conforme al D.Lgs. 18/2023 ovunque venga erogata. Il vantaggio strutturale delle regioni alpine è la qualità della risorsa di origine, che richiede trattamento limitato.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vuoi sapere come si colloca davvero l'acqua del tuo rubinetto nel panorama del Nord Italia? Un'analisi completa del campione prelevato in casa fornisce il quadro reale dei parametri della tua specifica abitazione, integrando il dato del gestore.",
    relatedSlugs: ['nord-vs-sud-italia', 'pianura-padana-acqua', 'regione-con-acqua-migliore-italia'],
  },

  {
    slug: 'sud-italia-comprehensive',
    title: 'Acqua del rubinetto Sud Italia: panoramica completa di tutte le regioni',
    shortTitle: 'Acqua Sud Italia: panoramica completa',
    metaDescription:
      'Panoramica completa sull\'acqua del rubinetto nel Sud Italia: tutte le regioni a confronto su durezza, sorgenti, gestori e perdite di rete, dalla Campania alla Calabria.',
    searchKeywords: [
      'acqua sud italia',
      'qualità acqua sud italia',
      'acqua rubinetto regioni meridionali',
      'acquedotto pugliese',
      'durezza acqua sud italia',
      'perdite rete sud italia',
    ],
    regions: [
      'Abruzzo',
      'Molise',
      'Campania',
      'Puglia',
      'Basilicata',
      'Calabria',
    ],
    intro:
      "Il Sud Italia continentale, inteso come l'insieme delle sei regioni meridionali peninsulari, presenta un quadro idrico dominato dalla dorsale appenninica meridionale e dal grande schema di trasferimento idrico fra regioni che alimenta l'Acquedotto Pugliese. La qualità della risorsa di origine è in genere buona, con sorgenti calcaree appenniniche di rilievo nazionale. La sfida più rilevante è di tipo infrastrutturale: le perdite di rete sono storicamente fra le più alte d'Italia e la distribuzione intermittente è ancora una realtà in alcune aree. Questa panoramica, basata sul D.Lgs. 18/2023, descrive in modo onesto luci e ombre del sistema idrico meridionale.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Abruzzo', value: '20-35 °f (media)' },
          { region: 'Molise', value: '20-35 °f (media)' },
          { region: 'Campania', value: '15-30 °f (medio-dolce/media)' },
          { region: 'Puglia', value: '20-35 °f (media)' },
          { region: 'Basilicata', value: '15-30 °f (medio-dolce/media)' },
          { region: 'Calabria', value: '15-30 °f (medio-dolce/media)' },
        ],
      },
      {
        label: 'Sorgente principale',
        values: [
          { region: 'Abruzzo', value: 'Gran Sasso, Maiella, Monti della Laga' },
          { region: 'Molise', value: 'Matese, Appennino molisano' },
          { region: 'Campania', value: 'Serino, Matese, sorgenti vesuviane' },
          { region: 'Puglia', value: 'Acquedotto Pugliese (acque della Basilicata)' },
          { region: 'Basilicata', value: 'Pollino, Sirino, falde appenniniche' },
          { region: 'Calabria', value: 'Sila, Aspromonte, Pollino calabrese' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Abruzzo', value: 'Vulnerabilità acquiferi carsici' },
          { region: 'Molise', value: 'Frammentazione gestionale' },
          { region: 'Campania', value: 'Arsenico vulcanico locale, vetustà reti' },
          { region: 'Puglia', value: 'Perdite di rete elevate, salinizzazione costiera' },
          { region: 'Basilicata', value: 'Manutenzione reti, vetustà' },
          { region: 'Calabria', value: 'Perdite di rete molto elevate, intermittenza' },
        ],
      },
    ],
    sections: [
      {
        heading: 'La dorsale appenninica meridionale',
        paragraphs: [
          "Il Sud Italia continentale dispone di un sistema sorgentizio appenninico di rilievo nazionale. Le sorgenti del Gran Sasso e della Maiella in Abruzzo, del Matese fra Molise e Campania, del Pollino fra Basilicata e Calabria, della Sila in Calabria forniscono acque calcaree di buona qualità chimica. La portata complessiva è elevata, anche se concentrata in pochi grandi sistemi.",
          "Il grande schema di trasferimento idrico dell'Acquedotto Pugliese rappresenta un'opera infrastrutturale unica in Europa: alimentato dalle sorgenti della Basilicata e in misura minore della Campania, distribuisce acqua in tutta la Puglia. Il sistema, in funzione dal primo Novecento, è stato oggetto di interventi continui di estensione e modernizzazione.",
        ],
      },
      {
        heading: 'La Campania: il caso di Napoli e dintorni',
        paragraphs: [
          "La Campania presenta una geografia idrica complessa, con sorgenti del Serino, del Matese e altre aree appenniniche, integrate da falde della Pianura Campana e da componenti vulcaniche del Vesuvio e dei Campi Flegrei. ABC Napoli serve la città capoluogo. La qualità chimica al rubinetto è conforme. La pressione antropica sulle falde campane è elevata.",
          "Le aree vulcaniche del napoletano possono presentare componenti idrochimiche particolari da gestire con monitoraggio specifico. I sistemi sorgentizi del Serino e del Matese forniscono acque calcaree di buona qualità.",
        ],
      },
      {
        heading: 'Perdite di rete: la grande sfida del Sud',
        paragraphs: [
          "Le perdite di rete del Sud Italia sono storicamente fra le più alte del Paese. La Calabria supera in alcune aree il 60%, la Puglia si attesta sopra il 45% nonostante gli investimenti dell'Acquedotto Pugliese. Le cause sono strutturali: età delle reti, frammentazione gestionale storica, investimenti pro capite inferiori al Nord. Il PNRR ha destinato risorse importanti al Sud per il rinnovo delle reti.",
          "Le perdite incidono sulla pressione di servizio e sull'efficienza complessiva del sistema, non direttamente sulla qualità chimica al rubinetto. In alcune aree, in particolare in Calabria e in parte della Puglia, persiste la distribuzione intermittente con serbatoi domestici, che richiedono manutenzione regolare per la qualità microbiologica al punto d'uso.",
        ],
      },
      {
        heading: 'Tariffe basse, investimenti contenuti',
        paragraphs: [
          "Le tariffe medie del Sud Italia sono fra le più basse del Paese, con valori in genere fra 1,30 e 2,20 €/m³ per uso domestico tipo. La tariffa bassa riflette anche un livello di investimento pro capite più contenuto. I piani economico-finanziari dei gestori, regolati dall'ARERA, prevedono progressivi aumenti per finanziare il rinnovo delle reti.",
          "Il quadro gestionale vede la convivenza di gestori unici regionali, come l'Acquedotto Pugliese, e di una pluralità di realtà locali in altre regioni. La frammentazione storica si sta riducendo con l'unificazione progressiva degli ambiti territoriali.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua del rubinetto al Sud è sicura da bere?',
        a: "Sì, nelle aree servite da rete pubblica. La qualità chimica e microbiologica è controllata secondo il D.Lgs. 18/2023, come in tutto il resto del Paese. La verifica puntuale è disponibile nei rapporti di prova dei gestori. La presenza di serbatoi domestici in alcune aree richiede manutenzione regolare per la qualità microbiologica al punto d'uso.",
      },
      {
        q: 'Perché le perdite di rete sono così alte al Sud?',
        a: "Le cause sono storiche: età delle reti, frammentazione gestionale, investimenti pro capite inferiori al Nord. Il PNRR ha destinato risorse importanti per il rinnovo. Le perdite incidono sulla pressione di servizio e sull'efficienza, non direttamente sulla qualità chimica al rubinetto.",
      },
      {
        q: 'Esiste ancora la distribuzione a giorni alterni?',
        a: "In alcune aree della Calabria, della Sicilia e in misura minore di altre regioni meridionali la distribuzione intermittente è ancora una realtà. La presenza di serbatoi domestici richiede manutenzione regolare per evitare proliferazione di carica microbica al punto d'uso. La responsabilità del serbatoio privato è del proprietario dell'immobile.",
      },
      {
        q: 'L\'Acquedotto Pugliese funziona davvero bene?',
        a: "L'Acquedotto Pugliese è un'opera infrastrutturale unica in Europa, in funzione dal primo Novecento. Garantisce acqua di qualità chimica conforme a tutta la Puglia. Le perdite di rete restano elevate ma in graduale riduzione grazie agli investimenti. La gestione unica regionale facilita la pianificazione strategica.",
      },
      {
        q: 'Il Sud ha tariffe basse perché l\'acqua è di qualità inferiore?',
        a: "No. Le tariffe basse riflettono livelli di investimento pro capite più contenuti, non una qualità inferiore. La qualità chimica al rubinetto è in genere conforme ai limiti di legge. La sfida del Sud è di tipo infrastrutturale, non di qualità chimica della risorsa di partenza.",
      },
    ],
    ctaVariant: 'microbiologica',
    ctaContext:
      "Se vivi in un'area con serbatoio domestico o distribuzione intermittente, un'analisi microbiologica del campione al rubinetto è il modo più diretto per verificare lo stato igienico dell'acqua al tuo punto d'uso.",
    relatedSlugs: ['nord-vs-sud-italia', 'puglia-vs-basilicata', 'isole-italia-comprehensive'],
  },

  {
    slug: 'isole-italia-comprehensive',
    title: 'Acqua del rubinetto isole italiane: Sicilia e Sardegna a confronto unificato',
    shortTitle: 'Acqua isole italiane: Sicilia e Sardegna',
    metaDescription:
      'Panoramica completa sull\'acqua del rubinetto in Sicilia e Sardegna: invasi, sorgenti vulcaniche, perdite di rete, siccità e gestori delle due isole maggiori italiane.',
    searchKeywords: [
      'acqua isole italia',
      'acqua sicilia sardegna',
      'acquedotto siciliano',
      'acquedotto sardo',
      'siccità isole italia',
      'qualità acqua isole maggiori',
    ],
    regions: ['Sicilia', 'Sardegna'],
    intro:
      "Sicilia e Sardegna, le due isole maggiori d'Italia, condividono una condizione idrica che le distingue dalla parte peninsulare del Paese: dipendenza significativa da invasi, vulnerabilità alla siccità e perdite di rete fra le più alte d'Italia. La Sicilia dispone in più dell'eccezionale risorsa delle sorgenti vulcaniche dell'Etna, integrata da invasi, falde e sorgenti appenniniche. La Sardegna si fonda su un sistema di invasi di grande capacità con gestione regionale unificata sotto Abbanoa. Questa panoramica, basata sul D.Lgs. 18/2023, descrive in modo onesto il quadro delle due isole.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Sicilia', value: '15-35 °f (variabile)' },
          { region: 'Sardegna', value: '15-30 °f (medio-dolce/media)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Sicilia', value: 'Sorgenti vulcaniche Etna, sorgenti appenniniche, invasi, falde' },
          { region: 'Sardegna', value: 'Invasi (Liscia, Posada, Tirso, Coghinas), falde profonde' },
        ],
      },
      {
        label: 'Perdite di rete',
        values: [
          { region: 'Sicilia', value: '45-55%, oltre 60% in alcune aree' },
          { region: 'Sardegna', value: '40-50% in media' },
        ],
      },
      {
        label: 'Distribuzione intermittente',
        values: [
          { region: 'Sicilia', value: 'Ancora presente in molte aree, serbatoi domestici diffusi' },
          { region: 'Sardegna', value: 'Limitata a periodi di siccità, distribuzione continua nei capoluoghi' },
        ],
      },
      {
        label: 'Gestori',
        values: [
          { region: 'Sicilia', value: 'AMAP, Caltaqua, EAS, AMG Energia, gestione frammentata' },
          { region: 'Sardegna', value: 'Abbanoa (gestore unico regionale)' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Due modelli idrici diversi',
        paragraphs: [
          "Sicilia e Sardegna affrontano la sfida idrica con due modelli organizzativi e geografici molto diversi. La Sardegna ha sviluppato dagli anni del dopoguerra un sistema di invasi di grande capacità che fronteggia la scarsità di sorgenti e la siccità ricorrente. Gli invasi del Liscia, del Posada, del Tirso, del Coghinas compongono un sistema integrato. La gestione è unificata sotto Abbanoa, gestore unico regionale.",
          "La Sicilia ha un sistema più articolato: sorgenti vulcaniche dell'Etna nell'orientale, sorgenti calcaree appenniniche dei Madonie e dei Nebrodi, invasi e falde nelle altre aree. La gestione è frammentata fra numerosi gestori, con AMAP per Palermo, Caltaqua per Caltanissetta, AMG Energia per Catania, EAS storicamente, oltre a molte altre realtà locali.",
        ],
      },
      {
        heading: 'Le sorgenti dell\'Etna: un\'eccezione di qualità',
        paragraphs: [
          "Le sorgenti vulcaniche dell'Etna producono acque oligominerali di eccezionale qualità chimica, con bassa mineralizzazione e composizione favorevole. La massa basaltica del vulcano funziona come un enorme filtro naturale. Catania e i comuni etnei beneficiano in larga parte di queste fonti. La qualità della risorsa di origine è fra le migliori del Paese.",
          "La gestione delle captazioni vulcaniche richiede attenzione alla protezione delle aree di ricarica e al monitoraggio dei parametri specifici dell'idrochimica vulcanica. Queste acque sono inoltre alla base di importanti acque minerali italiane.",
        ],
      },
      {
        heading: 'Siccità e cambiamenti climatici',
        paragraphs: [
          "Entrambe le isole sono particolarmente vulnerabili alla siccità, accentuata dai cambiamenti climatici. Periodi prolungati di scarse precipitazioni hanno messo sotto pressione il sistema in più occasioni negli ultimi decenni. In Sicilia la siccità si è tradotta in alcune aree in distribuzione intermittente più severa. In Sardegna gli invasi hanno funzionato come riserva strategica, con livelli scesi a soglie critiche in alcune annate.",
          "Le strategie di adattamento includono il rafforzamento dei sistemi di accumulo, il riuso delle acque reflue, la riduzione delle perdite e la diversificazione delle fonti. Il PNRR ha destinato risorse specifiche al Mezzogiorno per affrontare queste sfide.",
        ],
      },
      {
        heading: 'Serbatoi domestici e qualità al punto d\'uso',
        paragraphs: [
          "La distribuzione intermittente storica ha portato a una diffusione capillare di serbatoi domestici nelle abitazioni siciliane, in misura minore in quelle sarde. I serbatoi privati richiedono manutenzione regolare, pulizia e disinfezione periodiche per evitare la proliferazione di carica microbica al punto d'uso. La responsabilità del serbatoio è del proprietario dell'immobile, non del gestore del servizio idrico.",
          "Per i residenti delle isole con serbatoio domestico, l'analisi microbiologica al rubinetto fornisce informazioni che vanno oltre il dato del gestore e che riflettono la condizione effettiva del sistema interno dell'edificio.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua delle isole italiane è meno sicura di quella della penisola?',
        a: "La qualità chimica al rubinetto, nelle aree servite da rete pubblica, è controllata secondo il D.Lgs. 18/2023 come in tutto il resto del Paese. La sfida specifica delle isole è di tipo infrastrutturale: perdite di rete elevate, distribuzione intermittente in alcune aree, serbatoi domestici diffusi. La qualità della risorsa di partenza varia: l'Etna in Sicilia orientale fornisce acque di eccezionale qualità.",
      },
      {
        q: 'Posso bere l\'acqua del rubinetto in Sicilia?',
        a: "Sì, nelle aree servite da rete pubblica conforme al D.Lgs. 18/2023. Eventuali criticità possono dipendere dal serbatoio domestico dell'edificio, che va mantenuto pulito. Il dato del gestore documenta la qualità in uscita dalla rete pubblica.",
      },
      {
        q: 'Abbanoa garantisce un servizio omogeneo in tutta la Sardegna?',
        a: "Abbanoa, gestore unico regionale, copre la quasi totalità del territorio sardo. La provenienza prevalentemente da invasi richiede potabilizzazione articolata, con possibili variazioni stagionali di sapore. La qualità chimica al rubinetto è in genere conforme. Le perdite di rete restano sopra la media nazionale.",
      },
      {
        q: 'Le acque dell\'Etna sono davvero migliori delle altre?',
        a: "Le sorgenti vulcaniche dell'Etna producono acque oligominerali di ottima qualità chimica di partenza, fra le migliori del Sud Italia. La normativa è uguale per tutti, quindi parlare di 'migliore in assoluto' non è corretto: l'acqua è conforme al D.Lgs. 18/2023 ovunque venga erogata. Il vantaggio strutturale dell'area etnea è la qualità della risorsa di partenza.",
      },
      {
        q: 'Cosa devo fare se ho un serbatoio domestico?',
        a: "Il serbatoio privato va mantenuto pulito, con verifica della chiusura ermetica, pulizia interna almeno una volta all'anno e disinfezione periodica. Un'analisi microbiologica al rubinetto verifica l'efficacia della manutenzione. La responsabilità è del proprietario dell'immobile, non del gestore del servizio idrico.",
      },
    ],
    ctaVariant: 'microbiologica',
    ctaContext:
      "Se vivi in Sicilia o Sardegna con un serbatoio domestico, un'analisi microbiologica del campione prelevato al rubinetto verifica lo stato igienico dell'acqua che esce dal tuo punto d'uso e l'efficacia della manutenzione del serbatoio.",
    relatedSlugs: ['sicilia-vs-sardegna', 'sud-italia-comprehensive', 'nord-vs-sud-italia'],
  },

  {
    slug: 'citta-vs-campagna-italia',
    title: 'Acqua di città vs acqua di campagna in Italia: acquedotto e pozzo a confronto',
    shortTitle: 'Acqua città vs campagna: acquedotto vs pozzo',
    metaDescription:
      'Confronto fra l\'acqua del rubinetto urbano e l\'acqua di pozzo rurale in Italia: controlli, gestione, parametri, responsabilità e analisi consigliate per i due casi.',
    searchKeywords: [
      'acqua acquedotto pozzo',
      'acqua pozzo privato italia',
      'acqua campagna rubinetto',
      'differenza acqua città campagna',
      'analisi acqua pozzo',
      'normativa acqua pozzo privato',
    ],
    regions: ['Acqua urbana acquedotto', 'Acqua rurale di pozzo'],
    intro:
      "Una delle differenze più rilevanti nel panorama italiano dell'acqua potabile non è geografica ma riguarda la fonte: acqua di acquedotto pubblico, tipica del contesto urbano e suburbano, contro acqua di pozzo o sorgente privata, ancora diffusa in molte aree rurali. Le due situazioni hanno regole, controlli, responsabilità e parametri tipici molto diversi. Questo confronto, basato sul D.Lgs. 18/2023, descrive in modo onesto le caratteristiche delle due situazioni, senza sostenere la superiorità di una sull'altra.",
    comparisonTable: [
      {
        label: 'Quadro normativo',
        values: [
          { region: 'Acqua urbana acquedotto', value: 'D.Lgs. 18/2023, controlli ASL e gestore' },
          { region: 'Acqua rurale di pozzo', value: 'D.Lgs. 18/2023 per uso umano, responsabilità del proprietario' },
        ],
      },
      {
        label: 'Soggetto responsabile dei controlli',
        values: [
          { region: 'Acqua urbana acquedotto', value: 'Gestore del servizio idrico integrato e ASL' },
          { region: 'Acqua rurale di pozzo', value: 'Proprietario del pozzo' },
        ],
      },
      {
        label: 'Trattamento prevalente',
        values: [
          { region: 'Acqua urbana acquedotto', value: 'Disinfezione, potabilizzazione, trattamenti dedicati' },
          { region: 'Acqua rurale di pozzo', value: 'Variabile, spesso assente o limitato' },
        ],
      },
      {
        label: 'Parametri di attenzione tipici',
        values: [
          { region: 'Acqua urbana acquedotto', value: 'Cloro residuo, sottoprodotti disinfezione, piombo da tubazioni interne' },
          { region: 'Acqua rurale di pozzo', value: 'Nitrati, carica microbica, pesticidi, ferro, manganese, arsenico geogenico' },
        ],
      },
      {
        label: 'Dato di rete pubblico disponibile',
        values: [
          { region: 'Acqua urbana acquedotto', value: 'Sì, rapporti di prova del gestore' },
          { region: 'Acqua rurale di pozzo', value: 'No, solo analisi a carico del proprietario' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Cosa cambia dal punto di vista normativo',
        paragraphs: [
          "L'acqua di acquedotto pubblico è regolata dal D.Lgs. 18/2023, che recepisce la direttiva (UE) 2020/2184. Il gestore del servizio idrico integrato è responsabile della conformità dell'acqua erogata dal punto di consegna in poi, mentre l'ASL effettua controlli esterni. I parametri sono pubblici e disponibili nei rapporti di prova.",
          "L'acqua di pozzo privato, utilizzata per uso umano in abitazioni non collegate alla rete pubblica, è ugualmente soggetta agli stessi parametri di legge, ma la responsabilità dei controlli ricade sul proprietario dell'immobile. Il regolamento locale e le ASL possono prevedere modalità specifiche di registrazione del pozzo e di periodicità delle analisi. La normativa non distingue il limite di salubrità in base alla fonte: l'acqua deve essere conforme agli stessi parametri ovunque.",
        ],
      },
      {
        heading: 'Acqua urbana: i parametri di attenzione',
        paragraphs: [
          "In contesto urbano la qualità della risorsa di partenza è in genere monitorata dal gestore. I parametri di attenzione tipici per il consumatore al rubinetto riguardano più la rete domestica e l'edificio che la rete pubblica: piombo da tubazioni interne datate, ferro e rame da impianti vetusti, carica microbica nei serbatoi condominiali e nelle reti interne non utilizzate per periodi prolungati. Il cloro residuo è un indicatore della disinfezione attiva, in genere percepibile al sapore.",
          "I sottoprodotti della disinfezione, come i trialometani, sono monitorati dal gestore e regolati dal D.Lgs. 18/2023 con limite di 100 µg/L per la somma. Le aree con acque ricche di carico organico in ingresso al trattamento possono richiedere attenzione particolare a questo parametro.",
        ],
      },
      {
        heading: 'Acqua di pozzo: i parametri di attenzione',
        paragraphs: [
          "L'acqua di pozzo privato in contesto rurale presenta parametri di attenzione tipici diversi. La pressione agricola e zootecnica delle aree agricole intensive può portare a presenza di nitrati nelle falde superficiali, con limite di 50 mg/L. I pesticidi sono regolati con limite di 0,1 µg/L per singola sostanza attiva e 0,5 µg/L per la somma. La qualità microbiologica è particolarmente sensibile alla protezione del pozzo, alla profondità e alla manutenzione.",
          "Anche parametri geogenici come arsenico, ferro e manganese possono essere presenti naturalmente in alcune falde. Per chi utilizza un pozzo privato, l'analisi periodica completa di laboratorio non è solo consigliata ma è l'unico strumento per conoscere la qualità reale dell'acqua. La frequenza minima consigliata è annuale per i parametri di base e ogni 3-5 anni per il panel completo.",
        ],
      },
      {
        heading: 'Trattamento: dove arriva il pubblico, dove inizia il privato',
        paragraphs: [
          "Nel sistema acquedottistico pubblico il trattamento è progettato dal gestore in funzione delle caratteristiche della risorsa: disinfezione almeno, potabilizzazione articolata in caso di acque superficiali o di invaso, trattamenti dedicati per parametri specifici come arsenico, nitrati, PFAS dove necessario. Il consumatore non deve in genere intervenire.",
          "Per il pozzo privato il trattamento è una scelta del proprietario, basata sui risultati delle analisi. Soluzioni tipiche includono disinfezione UV o clorazione per la qualità microbiologica, filtri a sabbia o multistrato per ferro e manganese, sistemi a osmosi inversa o specifici per arsenico o nitrati dove presenti. La progettazione del trattamento richiede competenza tecnica.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua di pozzo privato è soggetta agli stessi limiti dell\'acquedotto?',
        a: "Sì, se utilizzata per il consumo umano. Il D.Lgs. 18/2023 prevede gli stessi parametri di salubrità indipendentemente dalla fonte. La differenza è che per il pozzo privato la responsabilità dei controlli e della conformità ricade sul proprietario dell'immobile, non sul gestore pubblico.",
      },
      {
        q: 'Devo registrare il mio pozzo privato?',
        a: "Le regole variano per Regione e per Comune. In molti casi è prevista la registrazione del pozzo presso il Comune o l'autorità competente, in particolare se utilizzato per consumo umano. Verifica il regolamento del tuo Comune e contatta la tua ASL per le modalità specifiche.",
      },
      {
        q: 'Ogni quanto devo analizzare l\'acqua del mio pozzo?',
        a: "Una verifica annuale dei parametri di base, tipicamente nitrati, carica microbica e parametri chimico-fisici, è consigliata. Un panel completo che includa pesticidi e metalli ogni 3-5 anni offre un quadro più ampio. In caso di eventi specifici, come alluvioni o lavori vicini al pozzo, è opportuna un'analisi aggiuntiva.",
      },
      {
        q: 'L\'acqua di pozzo è naturalmente più pura di quella di acquedotto?',
        a: "Non necessariamente. L'acqua di pozzo non è disinfettata e non subisce trattamenti di potabilizzazione, quindi può presentare carica microbica, nitrati o altri parametri non conformi se la falda è vulnerabile. L'acqua di acquedotto è sottoposta a controlli sistematici e a trattamenti che ne garantiscono la conformità. Nessuna delle due è di per sé superiore.",
      },
      {
        q: 'Il piombo è un problema solo dell\'acqua urbana?',
        a: "Il piombo deriva tipicamente dalle tubazioni interne datate, in particolare negli edifici costruiti prima degli anni Sessanta. È quindi un tema più legato alle abitazioni in contesto urbano storico. Il D.Lgs. 18/2023 abbassa il limite del piombo da 10 a 5 µg/L dal 12 gennaio 2036, accelerando la sostituzione delle tubazioni datate.",
      },
      {
        q: 'Posso collegare il mio pozzo all\'impianto domestico senza autorizzazioni?',
        a: "No. L'uso di un pozzo privato per il consumo umano in abitazione richiede in genere autorizzazione e segue regole comunali. Inoltre, la separazione idraulica fra rete pubblica e rete privata, dove entrambe coesistono, è obbligatoria per evitare contaminazioni della rete pubblica. Verifica il regolamento locale e contatta la tua ASL.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Se utilizzi un pozzo privato o vivi in un'abitazione storica in contesto urbano, un'analisi completa del campione al rubinetto fornisce il quadro reale dei parametri della tua specifica situazione, ben oltre il dato di rete del gestore.",
    relatedSlugs: ['nord-vs-sud-italia', 'pianura-padana-acqua', 'regione-con-acqua-migliore-italia'],
  },
];
