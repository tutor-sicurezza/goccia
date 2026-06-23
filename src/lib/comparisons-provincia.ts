import type { RegionalComparison } from './regional-comparisons';

export const COMP_PROVINCE: RegionalComparison[] = [
  {
    slug: 'roma-vs-milano-acqua-rubinetto-confronto',
    title: 'Acqua del rubinetto Roma vs Milano: confronto su durezza, origine e gestori',
    shortTitle: 'Acqua Roma vs Milano: confronto rubinetto',
    metaDescription:
      "Confronto tra l'acqua del rubinetto di Roma e Milano: origine, durezza, parametri tipici, gestori del servizio idrico e differenze in bolletta secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua roma vs milano',
      'acqua rubinetto roma milano',
      'confronto acqua roma milano',
      'durezza acqua roma milano',
      'qualità acqua roma milano',
      'gestori acqua roma milano',
    ],
    regions: ['Roma', 'Milano'],
    intro:
      "Roma e Milano sono le due principali aree metropolitane italiane e mostrano profili idrici molto diversi. Roma è alimentata in gran parte da sorgenti dell'Appennino centrale e della zona dei laghi vulcanici, gestite storicamente da ACEA ATO 2. Milano riceve acqua dalla falda della pianura padana, con un sistema di pozzi gestito principalmente da MM e dal Gruppo CAP per l'area metropolitana. Questa guida confronta in modo equilibrato durezza, mineralizzazione, criticità tipiche e tariffe, citando come riferimento normativo il D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Roma', value: 'Sorgenti appenniniche (Peschiera-Capore) e laghi vulcanici' },
          { region: 'Milano', value: 'Falda di pianura tramite pozzi cittadini' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Roma', value: '25-35 °f (medio-dura)' },
          { region: 'Milano', value: '30-40 °f (dura)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Roma', value: 'Fluoruri e arsenico naturali nelle zone vulcaniche' },
          { region: 'Milano', value: 'Nitrati e solventi clorurati in alcune aree storiche' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Roma', value: 'ACEA ATO 2' },
          { region: 'Milano', value: 'MM (Metropolitana Milanese) per il comune di Milano' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Roma', value: 'Intorno a 1,90-2,30 €/m³' },
          { region: 'Milano', value: 'Intorno a 1,30-1,80 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: "Origine dell'acqua: sorgenti contro falda",
        paragraphs: [
          "Roma è una delle pochissime grandi capitali europee alimentata prevalentemente da sorgenti naturali. L'acquedotto del Peschiera-Capore, alimentato da sorgenti appenniniche reatine, copre una parte molto rilevante del fabbisogno cittadino, integrato da altri schemi storici. Milano invece poggia su un'estesa rete di pozzi che attingono alla falda padana, con trattamenti dedicati nelle centrali di potabilizzazione cittadine.",
          "Le due origini si riflettono in caratteristiche chimiche differenti: l'acqua romana mostra in genere mineralizzazione medio-alta e tracce naturali di elementi tipici delle zone vulcaniche, mentre quella milanese ha durezza elevata e necessita di un controllo costante su nitrati e composti organoalogenati nelle aree storicamente più sensibili.",
        ],
      },
      {
        heading: 'Durezza e calcare: cosa aspettarsi al rubinetto',
        paragraphs: [
          "A Milano la durezza dell'acqua è tipicamente fra 30 e 40 °f, con conseguenti incrostazioni in caldaie, lavastoviglie e lavatrici. A Roma i valori sono spesso fra 25 e 35 °f, comunque all'interno dell'intervallo consigliato dal D.Lgs. 18/2023 (15-50 °f). Nessuna delle due acque è 'pesante' per la salute: la durezza non è un parametro sanitario, ma di tipologia.",
          "Per ridurre il calcare in casa molte famiglie installano addolcitori. È bene ricordare che un addolcitore mal manutenuto può alterare la qualità microbiologica dell'acqua e che la regolazione corretta del residuo di durezza al punto d'uso resta una scelta tecnica, non una garanzia di maggiore salubrità.",
        ],
      },
      {
        heading: 'Parametri di attenzione: zone vulcaniche vs Pianura Padana',
        paragraphs: [
          "Nelle zone romane di origine vulcanica si possono trovare valori naturali più elevati di fluoruri e, storicamente, di arsenico: per questo motivo nei decenni passati sono state attivate deroghe poi superate con interventi di abbattimento e miscelazione. Oggi i campionamenti di ACEA ATO 2 mostrano in genere valori entro i limiti del D.Lgs. 18/2023.",
          "A Milano e nell'hinterland la pressione agricola e il pregresso industriale incidono sulla falda: nitrati nelle aree periurbane e tracce di solventi clorurati in alcune zone storiche sono tra i parametri monitorati con più attenzione. Il gestore pubblica con regolarità i rapporti di prova per quartiere.",
        ],
      },
      {
        heading: 'Gestori, investimenti e trasparenza',
        paragraphs: [
          "ACEA ATO 2 gestisce l'acqua di Roma e di gran parte della sua area metropolitana, con investimenti significativi su ricerca perdite e rinnovo reti. MM gestisce il servizio idrico del comune di Milano, mentre il Gruppo CAP serve gran parte dei comuni dell'hinterland. Entrambe le città dispongono di portali pubblici che mostrano i risultati delle analisi per zona.",
          "Per il cittadino, la lettura del rapporto di prova del proprio quartiere è il primo passo per conoscere la qualità in rete. La parte privata, dall'allaccio condominiale al rubinetto, non è di competenza del gestore e può modificare alcuni parametri al punto d'uso.",
        ],
      },
      {
        heading: 'Bolletta: quanto si paga davvero',
        paragraphs: [
          "Milano è una delle città italiane con la bolletta dell'acqua più contenuta, grazie ad una struttura tariffaria storicamente bassa e ad una rete relativamente efficiente. Roma presenta tariffe medie più alte rispetto al capoluogo lombardo ma comunque allineate alla media nazionale dei grandi comuni.",
          "In entrambi i casi, l'acqua del rubinetto resta enormemente più economica dell'acqua in bottiglia: a parità di consumo, un litro al rubinetto costa una frazione di centesimo, contro decine di centesimi per un litro di minerale.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al tuo rubinetto',
        paragraphs: [
          "Per avere un quadro reale del punto d'uso, oltre al rapporto di prova del gestore, può essere utile far analizzare un campione prelevato direttamente al rubinetto di casa, in modo da intercettare eventuali effetti della tubazione privata, dei serbatoi condominiali o di impianti di trattamento domestici.",
        ],
        bullets: [
          'Durezza (°f): incide su caldaia ed elettrodomestici',
          'Nitrati: rilevanti soprattutto in alcune aree milanesi',
          'Fluoruri e arsenico: storicamente monitorati in zona romana',
          'Piombo e ferro: dipendono dalla tubazione interna',
          'Carica microbica: serbatoi e tratti privati a valle del contatore',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Roma è migliore di quella di Milano?",
        a: "Non si può fare una graduatoria assoluta. Roma ha un'origine prevalentemente sorgentizia, Milano da falda profonda: due acque diverse, entrambe controllate secondo il D.Lgs. 18/2023. Le differenze riguardano tipologia, durezza e parametri tipici di attenzione, non un giudizio di valore.",
      },
      {
        q: "L'acqua di Milano è troppo dura?",
        a: "La durezza tipica milanese è fra 30 e 40 °f, all'interno dell'intervallo consigliato dal D.Lgs. 18/2023 (15-50 °f). Provoca incrostazioni in caldaie e lavastoviglie, ma non rappresenta un problema di salubrità.",
      },
      {
        q: "Perché a Roma si parla di arsenico nelle zone vulcaniche?",
        a: "Alcuni territori a nord di Roma hanno acque di origine vulcanica con presenza naturale di arsenico. Nei decenni scorsi sono state attivate deroghe, poi sostituite da interventi di abbattimento. Oggi i campionamenti pubblicati dal gestore mostrano in genere valori entro i limiti.",
      },
      {
        q: "Dove trovo i dati ufficiali del mio quartiere?",
        a: "Sul sito del gestore: ACEA ATO 2 per Roma e MM per il comune di Milano. Pubblicano periodicamente i rapporti di prova divisi per zona, con i valori dei principali parametri del D.Lgs. 18/2023.",
      },
      {
        q: "Conviene installare un addolcitore?",
        a: "Dipende dalle esigenze. A Milano la durezza elevata può favorire la scelta di un addolcitore per proteggere caldaia ed elettrodomestici. A Roma la durezza è inferiore. In ogni caso un impianto va dimensionato e manutenuto correttamente per non alterare la qualità microbiologica.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Roma o a Milano e vuoi sapere come la tua acqua del rubinetto si confronta davvero con i dati medi cittadini? Un'analisi completa del campione prelevato a casa permette di valutare durezza, parametri tipici della tua zona e qualità reale al punto d'uso.",
    relatedSlugs: ['nord-vs-sud-italia', 'lombardia-vs-veneto', 'lazio-vs-campania'],
  },

  {
    slug: 'bologna-vs-firenze-confronto-acqua',
    title: 'Acqua del rubinetto Bologna vs Firenze: confronto fra Emilia e Toscana',
    shortTitle: 'Acqua Bologna vs Firenze: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Bologna e Firenze: origine, durezza, parametri tipici e gestori, secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua bologna vs firenze',
      'acqua rubinetto bologna firenze',
      'confronto acqua bologna firenze',
      'durezza acqua bologna firenze',
      'qualità acqua bologna firenze',
      'gestori acqua bologna firenze',
    ],
    regions: ['Bologna', 'Firenze'],
    intro:
      "Bologna e Firenze, capoluoghi di due regioni dell'Italia centro-settentrionale, presentano profili idrici differenti. Bologna è alimentata in larga parte da sorgenti appenniniche e da invasi montani, con integrazione di pozzi di pianura, sotto la gestione di Hera. Firenze fa affidamento prevalentemente sul fiume Arno e su captazioni dalla zona del Mugello, gestite da Publiacqua. Questa guida mette a confronto durezza, parametri tipici e tariffe, sempre con riferimento al D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Bologna', value: 'Sorgenti appenniniche, invasi e pozzi di pianura' },
          { region: 'Firenze', value: 'Acque superficiali (Arno) e captazioni del Mugello' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Bologna', value: '25-35 °f (medio-dura)' },
          { region: 'Firenze', value: '20-30 °f (medio-dura)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Bologna', value: 'Durezza, presenza storica di nitrati in pianura' },
          { region: 'Firenze', value: 'Trihalometani da potabilizzazione, torbidità Arno' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Bologna', value: 'Hera' },
          { region: 'Firenze', value: 'Publiacqua' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Bologna', value: 'Intorno a 2,20-2,60 €/m³' },
          { region: 'Firenze', value: 'Intorno a 2,40-2,90 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Due origini, due profili chimici',
        paragraphs: [
          "Bologna riceve acqua principalmente da sorgenti appenniniche e dall'invaso di Suviana, integrate da pozzi di pianura nelle aree periurbane. Firenze invece tratta in larga parte acqua superficiale dall'Arno, presso impianti come Anconella e Mantignano, integrata da captazioni del bacino del Mugello.",
          "Le acque superficiali, come quelle dell'Arno, richiedono potabilizzazione spinta con processi di chiarificazione, ossidazione e disinfezione: questo può portare alla formazione di sottoprodotti come i trihalometani, anch'essi soggetti a limiti specifici nel D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "Bologna ha un'acqua tipicamente medio-dura, con valori fra 25 e 35 °f. Firenze si attesta su valori leggermente inferiori, ma sempre nell'intervallo medio. In entrambi i casi i parametri restano nel range consigliato dal D.Lgs. 18/2023 (15-50 °f).",
          "Il calcare residuo è presente in entrambe le città, anche se in misura meno marcata rispetto a Milano o ad altre aree della Pianura Padana.",
        ],
      },
      {
        heading: 'Parametri tipici di attenzione',
        paragraphs: [
          "A Bologna l'attenzione storica è andata sui nitrati nelle falde di pianura e sulla qualità delle reti più vecchie del centro storico. A Firenze il punto critico riguarda i sottoprodotti della disinfezione, in particolare i trihalometani, che vengono monitorati con frequenza dal gestore.",
          "Entrambe le città mostrano in genere conformità al D.Lgs. 18/2023, con campionamenti pubblicati periodicamente.",
        ],
      },
      {
        heading: 'Gestori e investimenti',
        paragraphs: [
          "Hera è una grande multiutility quotata che gestisce numerosi servizi nel nord-est, con investimenti rilevanti su rinnovo reti e ricerca perdite. Publiacqua serve l'ATO 3 Medio Valdarno, includendo Firenze, Prato, Pistoia ed Empoli.",
          "Entrambi i gestori pubblicano i rapporti di prova per zona, consultabili online dal cittadino.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Le tariffe di Firenze sono storicamente fra le più alte d'Italia per uso domestico, riflettendo i costi di potabilizzazione delle acque superficiali. Bologna si colloca su valori più moderati, comunque allineati alla media del Nord.",
        ],
      },
      {
        heading: 'Come conoscere la qualità al tuo punto d\'uso',
        paragraphs: [
          "Il rapporto di prova del gestore descrive la qualità in rete. La tubazione interna dell'edificio può modificare alcuni parametri al rubinetto. Per un quadro reale al punto d'uso, l'analisi di un campione prelevato in casa è la strada più diretta.",
        ],
        bullets: [
          'Durezza (°f): impatto su caldaia ed elettrodomestici',
          'Trihalometani: tipici di acque superficiali potabilizzate',
          'Nitrati: storicamente monitorati nelle falde bolognesi',
          'Piombo e rame: legati alla tubazione interna',
          'Carica microbica: serbatoi e tratti privati',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Firenze è meno buona perché viene dall'Arno?",
        a: "L'acqua di Firenze viene potabilizzata negli impianti del gestore e immessa in rete conforme al D.Lgs. 18/2023. La provenienza superficiale richiede trattamenti più articolati, ma non comporta automaticamente una qualità inferiore.",
      },
      {
        q: "Perché a Firenze si parla di trihalometani?",
        a: "I trihalometani possono formarsi come sottoprodotti della disinfezione delle acque potabilizzate da fonti superficiali. Sono soggetti a limiti specifici e monitorati regolarmente dal gestore.",
      },
      {
        q: "L'acqua di Bologna è molto calcarea?",
        a: "Ha una durezza medio-alta, fra 25 e 35 °f, comparabile a molte aree del Nord Italia. Rientra nell'intervallo consigliato dal D.Lgs. 18/2023.",
      },
      {
        q: "La bolletta a Firenze è davvero così alta?",
        a: "Storicamente le tariffe dell'ATO 3 Medio Valdarno sono fra le più elevate d'Italia. Riflettono i costi di potabilizzazione delle acque superficiali e gli investimenti sulla rete.",
      },
      {
        q: "Posso leggere i dati per il mio quartiere?",
        a: "Sì. Sia Hera sia Publiacqua pubblicano periodicamente i rapporti di prova suddivisi per zona, consultabili online sui rispettivi siti istituzionali.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Bologna o a Firenze e vuoi confrontare i dati medi della tua città con la qualità reale al rubinetto di casa? Un'analisi completa del campione prelevato al punto d'uso fornisce un quadro chiaro e personalizzato.",
    relatedSlugs: ['nord-vs-sud-italia', 'roma-vs-milano-acqua-rubinetto-confronto'],
  },

  {
    slug: 'napoli-vs-roma-confronto-acqua-sud-centro',
    title: 'Acqua del rubinetto Napoli vs Roma: confronto fra Sud e Centro Italia',
    shortTitle: 'Acqua Napoli vs Roma: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Napoli e Roma: origine, durezza, parametri tipici e gestori, con riferimento al D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua napoli vs roma',
      'acqua rubinetto napoli roma',
      'confronto acqua napoli roma',
      'durezza acqua napoli roma',
      'qualità acqua napoli roma',
      'gestori acqua napoli roma',
    ],
    regions: ['Napoli', 'Roma'],
    intro:
      "Napoli e Roma sono due grandi città del Centro-Sud che condividono un'alimentazione prevalentemente sorgentizia, ma con caratteristiche idrochimiche differenti. Napoli è servita storicamente dall'acquedotto del Serino e dalle sorgenti del Gran Sasso, gestita da ABC Napoli. Roma è alimentata principalmente dall'acquedotto Peschiera-Capore, sotto ACEA ATO 2. Questa guida mette a confronto i due profili in modo equilibrato, citando il D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Napoli', value: 'Sorgenti del Serino, integrate da pozzi e altre captazioni' },
          { region: 'Roma', value: 'Sorgenti appenniniche (Peschiera-Capore) e laghi vulcanici' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Napoli', value: '20-30 °f (medio-dura)' },
          { region: 'Roma', value: '25-35 °f (medio-dura)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Napoli', value: 'Aree vulcaniche (fluoruri, arsenico naturali in alcune zone)' },
          { region: 'Roma', value: 'Fluoruri naturali nelle aree vulcaniche a nord' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Napoli', value: 'ABC Napoli (Acqua Bene Comune)' },
          { region: 'Roma', value: 'ACEA ATO 2' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Napoli', value: 'Intorno a 1,40-1,90 €/m³' },
          { region: 'Roma', value: 'Intorno a 1,90-2,30 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: "Due grandi acquedotti sorgentizi",
        paragraphs: [
          "Napoli è alimentata storicamente dalle sorgenti del Serino, in provincia di Avellino, e da altre captazioni appenniniche, con integrazione di pozzi locali. Roma trae la maggior parte della sua acqua dal sistema Peschiera-Capore, con sorgenti nel reatino, considerato uno dei principali schemi sorgentizi d'Europa per portata e qualità.",
          "Entrambe le città hanno quindi un vantaggio storico: alimentarsi prevalentemente da sorgenti significa partire con un'acqua già di buona qualità chimica, che richiede potabilizzazione meno spinta rispetto alle fonti superficiali.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "L'acqua di Napoli ha durezza tipicamente fra 20 e 30 °f, leggermente più morbida rispetto a Roma, dove i valori si attestano fra 25 e 35 °f. Entrambe le città sono comunque all'interno dell'intervallo consigliato dal D.Lgs. 18/2023 (15-50 °f).",
        ],
      },
      {
        heading: 'Aree vulcaniche e parametri naturali',
        paragraphs: [
          "Sia il napoletano sia parte del territorio a nord di Roma sono caratterizzati da geologia vulcanica. Questo può comportare la presenza naturale di fluoruri e, in alcune aree storiche, di arsenico. I gestori, in coordinamento con le ASL, monitorano questi parametri secondo il D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Gestori e reti',
        paragraphs: [
          "Napoli è gestita da ABC Napoli, azienda speciale del Comune. Roma è servita da ACEA ATO 2, parte di una multiutility quotata. Entrambi i gestori pubblicano i rapporti di prova per zona.",
          "Le reti di entrambe le città hanno punti di vetustà che incidono soprattutto sulle perdite e sulla pressione, più che sulla qualità chimica al rubinetto.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Napoli ha una bolletta media più contenuta di Roma per il tipico nucleo familiare, in linea con la media delle grandi città del Sud. Roma si allinea alla media nazionale dei grandi capoluoghi.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al rubinetto',
        paragraphs: [
          "Il rapporto di prova pubblicato dal gestore descrive la qualità in rete pubblica. La parte privata dell'impianto può modificare alcuni parametri al punto d'uso. Per avere un quadro reale conviene analizzare un campione prelevato a casa.",
        ],
        bullets: [
          'Durezza (°f): impatto su caldaie ed elettrodomestici',
          'Fluoruri: presenza naturale in alcune zone vulcaniche',
          'Arsenico: storicamente monitorato in alcune aree',
          'Piombo e rame: dipendono dalla tubazione interna',
          'Carica microbica: serbatoi privati e tratti a valle',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Napoli è davvero così buona come dicono?",
        a: "L'acqua di Napoli arriva in larga parte da sorgenti appenniniche di buona qualità, in particolare il Serino. I dati pubblicati da ABC mostrano in genere parametri ampiamente entro i limiti del D.Lgs. 18/2023.",
      },
      {
        q: "Roma e Napoli condividono problemi nelle zone vulcaniche?",
        a: "Sì, alcune aree intorno a entrambe le città hanno geologia vulcanica con presenza naturale di fluoruri e, storicamente, arsenico. Questi parametri sono monitorati dai gestori in coordinamento con le ASL.",
      },
      {
        q: "Perché Napoli ha bollette più basse?",
        a: "Riflette una struttura tariffaria storicamente contenuta tipica di molte città del Sud. Non significa qualità inferiore: i parametri di legge sono gli stessi su tutto il territorio nazionale.",
      },
      {
        q: "Dove trovo i dati ufficiali?",
        a: "Sul sito di ABC Napoli per Napoli e sul portale di ACEA ATO 2 per Roma. Pubblicano periodicamente i rapporti di prova per zona.",
      },
      {
        q: "Conviene analizzare l'acqua del rubinetto se vivo in un palazzo storico?",
        a: "Negli edifici più datati la tubazione interna può influenzare parametri come piombo, ferro e carica microbica anche con rete pubblica conforme. Un'analisi al punto d'uso fornisce un quadro reale.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Napoli o a Roma e vuoi capire come la tua acqua si confronta davvero con i dati cittadini? Un'analisi completa del campione prelevato a casa permette di valutare durezza, parametri tipici e qualità reale al punto d'uso.",
    relatedSlugs: ['nord-vs-sud-italia', 'roma-vs-milano-acqua-rubinetto-confronto', 'lazio-vs-campania'],
  },

  {
    slug: 'torino-vs-milano-confronto-acqua-nord-ovest',
    title: 'Acqua del rubinetto Torino vs Milano: confronto nel Nord-Ovest',
    shortTitle: 'Acqua Torino vs Milano: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Torino e Milano: origine alpina vs falda padana, durezza, parametri tipici e gestori, secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua torino vs milano',
      'acqua rubinetto torino milano',
      'confronto acqua torino milano',
      'durezza acqua torino milano',
      'qualità acqua torino milano',
      'gestori acqua torino milano',
    ],
    regions: ['Torino', 'Milano'],
    intro:
      "Torino e Milano, le due principali città del Nord-Ovest, hanno fonti idriche molto diverse. Torino è alimentata in larga parte da sorgenti delle Alpi Cozie e Graie e da falde alimentate dai depositi alluvionali, gestita da SMAT. Milano poggia su un'estesa rete di pozzi che attingono alla falda padana, gestita principalmente da MM. Questa guida confronta i due profili in modo equilibrato, citando il D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Torino', value: 'Sorgenti alpine e falda alluvionale di pianura' },
          { region: 'Milano', value: 'Falda padana tramite pozzi cittadini' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Torino', value: '15-25 °f (medio-dolce)' },
          { region: 'Milano', value: '30-40 °f (dura)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Torino', value: 'Cromo esavalente storicamente monitorato in alcune zone' },
          { region: 'Milano', value: 'Nitrati e solventi clorurati in alcune aree storiche' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Torino', value: 'SMAT (Società Metropolitana Acque Torino)' },
          { region: 'Milano', value: 'MM (Metropolitana Milanese)' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Torino', value: 'Intorno a 1,60-2,10 €/m³' },
          { region: 'Milano', value: 'Intorno a 1,30-1,80 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Acque alpine vs falda padana',
        paragraphs: [
          "Torino si alimenta in modo significativo da sorgenti delle Alpi occidentali e da falda alluvionale generata dall'azione fluvio-glaciale. La componente sorgiva conferisce all'acqua un profilo a mineralizzazione medio-bassa e durezza relativamente contenuta. Milano invece sfrutta in modo intensivo la falda padana, con acque più mineralizzate e più dure.",
        ],
      },
      {
        heading: 'Durezza e calcare',
        paragraphs: [
          "L'acqua di Torino è tipicamente più morbida (15-25 °f) rispetto a quella di Milano (30-40 °f), con minore tendenza a formare calcare in caldaie ed elettrodomestici. Per la salute la differenza non è significativa: entrambe rientrano nel range consigliato dal D.Lgs. 18/2023 (15-50 °f).",
        ],
      },
      {
        heading: 'Parametri di attenzione storici',
        paragraphs: [
          "A Torino in passato sono emerse situazioni di attenzione legate al cromo esavalente in alcune zone industriali, monitorate dal gestore con campionamenti dedicati. A Milano il focus storico è andato su nitrati nelle aree periurbane e su solventi clorurati in alcune zone storiche. In entrambi i casi i dati attuali pubblicati dai gestori mostrano in genere conformità al D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Gestori e trasparenza',
        paragraphs: [
          "SMAT serve la città di Torino e numerosi comuni dell'area metropolitana, con un sistema di trasparenza che pubblica i rapporti di prova per zona. MM gestisce il servizio idrico del comune di Milano, anch'essa con portale pubblico dei dati di analisi.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Milano ha una tariffa media più contenuta. Torino si colloca su valori leggermente superiori, comunque in linea con la media del Nord-Ovest. Entrambe sono enormemente più economiche dell'acqua in bottiglia.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al rubinetto',
        paragraphs: [
          "Per conoscere la qualità reale al punto d'uso, oltre al rapporto di prova del gestore, è utile far analizzare un campione prelevato al rubinetto, in modo da considerare anche la tubazione interna dell'edificio.",
        ],
        bullets: [
          'Durezza (°f): più contenuta a Torino, più elevata a Milano',
          'Nitrati: storicamente più rilevanti a Milano',
          'Cromo esavalente: monitorato in alcune zone di Torino',
          'Piombo e ferro: legati alla tubazione interna',
          'Carica microbica: tratti privati a valle del contatore',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Torino è davvero più morbida di quella di Milano?",
        a: "Sì, di solito. Torino ha durezza media più bassa, intorno a 15-25 °f, mentre Milano si attesta su 30-40 °f. Entrambe restano nell'intervallo consigliato dal D.Lgs. 18/2023.",
      },
      {
        q: "Il cromo esavalente è ancora un problema a Torino?",
        a: "È un parametro storicamente monitorato dal gestore in alcune zone. I dati attuali pubblicati da SMAT mostrano in genere conformità ai limiti di legge.",
      },
      {
        q: "Perché a Milano la bolletta è più bassa di Torino?",
        a: "Milano ha una struttura tariffaria storicamente molto contenuta. Riflette scelte tariffarie locali e l'efficienza relativa della rete cittadina.",
      },
      {
        q: "Posso vedere i dati del mio quartiere?",
        a: "Sì. SMAT per Torino e MM per Milano pubblicano periodicamente i rapporti di prova per zona, consultabili online sui rispettivi siti.",
      },
      {
        q: "Vivo a Torino, devo preoccuparmi del calcare?",
        a: "Meno rispetto a Milano. La durezza media inferiore rende il calcare un problema meno marcato, anche se presente.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Torino o a Milano e vuoi sapere come la tua acqua del rubinetto si confronta con i dati medi cittadini? Un'analisi completa del campione prelevato a casa fornisce un quadro reale al punto d'uso.",
    relatedSlugs: ['nord-vs-sud-italia', 'lombardia-vs-veneto', 'roma-vs-milano-acqua-rubinetto-confronto'],
  },

  {
    slug: 'venezia-vs-trieste-confronto-acqua-nord-est',
    title: 'Acqua del rubinetto Venezia vs Trieste: confronto nel Nord-Est',
    shortTitle: 'Acqua Venezia vs Trieste: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Venezia e Trieste: origine, durezza, parametri tipici e gestori, secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua venezia vs trieste',
      'acqua rubinetto venezia trieste',
      'confronto acqua venezia trieste',
      'durezza acqua venezia trieste',
      'qualità acqua venezia trieste',
      'gestori acqua venezia trieste',
    ],
    regions: ['Venezia', 'Trieste'],
    intro:
      "Venezia e Trieste, due capoluoghi del Nord-Est affacciati sull'Adriatico, hanno fonti idriche distinte. Venezia è alimentata da pozzi che attingono alla falda profonda della pianura veneta, gestiti da Veritas. Trieste si appoggia in larga parte a sorgenti del Carso e a captazioni dell'Isonzo, gestite da AcegasApsAmga. Questa guida mette a confronto i due profili con riferimento al D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Venezia', value: 'Pozzi falda profonda veneta' },
          { region: 'Trieste', value: 'Sorgenti del Carso, captazioni Isonzo' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Venezia', value: '20-30 °f (medio-dura)' },
          { region: 'Trieste', value: '25-35 °f (medio-dura, da rocce carsiche)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Venezia', value: 'Salinizzazione storica della falda costiera in alcune zone' },
          { region: 'Trieste', value: 'Torbidità episodica delle sorgenti carsiche dopo eventi piovosi' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Venezia', value: 'Veritas' },
          { region: 'Trieste', value: 'AcegasApsAmga (gruppo Hera)' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Venezia', value: 'Intorno a 2,30-2,70 €/m³' },
          { region: 'Trieste', value: 'Intorno a 2,10-2,50 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Falda veneta vs sorgenti carsiche',
        paragraphs: [
          "Venezia attinge da una falda profonda della pianura veneta, particolarmente protetta dagli inquinamenti superficiali. Trieste si alimenta in modo significativo da sorgenti del Carso e da prelievi dall'Isonzo, con caratteristiche tipicamente calcaree.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "L'acqua di Venezia ha durezza media intorno a 20-30 °f, mentre Trieste, alimentata da rocce carsiche, ha valori leggermente più alti (25-35 °f). Entrambe rientrano nell'intervallo consigliato dal D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Parametri tipici di attenzione',
        paragraphs: [
          "Per Venezia il punto storico è la possibile salinizzazione delle falde più superficiali in zone costiere; per questo la città usa prevalentemente falde profonde più protette. Per Trieste un fattore noto è la torbidità episodica delle sorgenti carsiche dopo piogge intense, gestita dai trattamenti del gestore.",
        ],
      },
      {
        heading: 'Gestori e trasparenza',
        paragraphs: [
          "Veritas gestisce il servizio idrico di Venezia e numerosi comuni della provincia. AcegasApsAmga, parte del gruppo Hera, serve Trieste. Entrambi pubblicano i rapporti di prova per zona.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Le tariffe di Venezia sono leggermente più alte rispetto a quelle di Trieste, ma allineate alla media del Nord-Est. Entrambe restano molto più economiche dell'acqua in bottiglia.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al rubinetto',
        paragraphs: [
          "Per il quadro reale al punto d'uso, l'analisi di un campione prelevato a casa permette di valutare anche l'effetto della tubazione interna, particolarmente rilevante negli edifici storici di entrambe le città.",
        ],
        bullets: [
          'Durezza (°f): leggermente maggiore a Trieste',
          'Salinizzazione: storicamente monitorata in alcune zone di Venezia',
          'Torbidità: episodica nelle sorgenti carsiche di Trieste',
          'Piombo: legato a tubazioni storiche',
          'Carica microbica: serbatoi e tratti privati',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Venezia viene davvero dalla falda profonda?",
        a: "Sì. Veritas attinge in larga parte da falde profonde della pianura veneta, particolarmente protette dagli inquinamenti superficiali, con campionamenti pubblicati periodicamente.",
      },
      {
        q: "Cos'è la torbidità delle sorgenti carsiche di Trieste?",
        a: "Le sorgenti carsiche possono presentare aumenti di torbidità dopo eventi piovosi intensi. Il gestore interviene con trattamenti adeguati per garantire la conformità al D.Lgs. 18/2023.",
      },
      {
        q: "Le acque di Trieste sono molto calcaree?",
        a: "Hanno una durezza medio-alta tipica delle rocce carsiche, intorno a 25-35 °f. Sono comunque all'interno del range consigliato dal D.Lgs. 18/2023.",
      },
      {
        q: "Dove trovo i dati ufficiali?",
        a: "Veritas per Venezia e AcegasApsAmga per Trieste pubblicano periodicamente i rapporti di prova per zona, consultabili online.",
      },
      {
        q: "Vivo in un edificio storico veneziano: devo preoccuparmi delle tubazioni?",
        a: "Gli edifici storici possono avere tubazioni con effetti residui su parametri come piombo o ferro al punto d'uso. Un'analisi del campione prelevato a casa fornisce un quadro reale.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Venezia o a Trieste e vuoi conoscere la qualità reale della tua acqua del rubinetto, oltre i dati medi della tua zona? Un'analisi completa del campione prelevato a casa è la strada più diretta per valutare il punto d'uso.",
    relatedSlugs: ['nord-vs-sud-italia', 'lombardia-vs-veneto'],
  },

  {
    slug: 'bari-vs-lecce-confronto-acqua-puglia',
    title: 'Acqua del rubinetto Bari vs Lecce: confronto in Puglia',
    shortTitle: 'Acqua Bari vs Lecce: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Bari e Lecce: origine pugliese, durezza, parametri tipici e gestione di Acquedotto Pugliese, secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua bari vs lecce',
      'acqua rubinetto bari lecce',
      'confronto acqua bari lecce',
      'durezza acqua bari lecce',
      'qualità acqua puglia',
      'acquedotto pugliese',
    ],
    regions: ['Bari', 'Lecce'],
    intro:
      "Bari e Lecce, capoluoghi pugliesi, condividono lo stesso gestore unico regionale: Acquedotto Pugliese (AQP). La risorsa idrica della Puglia arriva in larga parte da fuori regione, in particolare dalla Basilicata, attraverso un'imponente rete di adduzione. Questa guida confronta le due città con riferimento al D.Lgs. 18/2023, evidenziando le caratteristiche tipiche del nord e del sud Puglia.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Bari', value: 'Sorgenti della Basilicata via AQP, integrate da pozzi locali' },
          { region: 'Lecce', value: 'Sorgenti via AQP, integrate da pozzi salentini' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Bari', value: '25-35 °f (medio-dura)' },
          { region: 'Lecce', value: '30-40 °f (più mineralizzata)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Bari', value: 'Cloruri in alcuni pozzi costieri' },
          { region: 'Lecce', value: 'Salinizzazione storica delle falde salentine' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Bari', value: 'Acquedotto Pugliese (AQP)' },
          { region: 'Lecce', value: 'Acquedotto Pugliese (AQP)' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Bari', value: 'Intorno a 1,80-2,20 €/m³' },
          { region: 'Lecce', value: 'Intorno a 1,80-2,20 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: "Un gestore unico, due profili territoriali",
        paragraphs: [
          "La Puglia è una delle regioni italiane più dipendenti dalle adduzioni extra-regionali. AQP porta in Puglia acqua proveniente in larga parte dalla Basilicata, integrata da pozzi locali nelle zone più periferiche. Bari, in posizione centrale, beneficia in modo diretto della grande adduzione lucana. Lecce, a sud, riceve l'acqua attraverso il completamento dello schema regionale.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "Bari mostra durezza media fra 25 e 35 °f. Lecce, anche per integrazione con pozzi salentini, tende ad avere acque leggermente più mineralizzate, fra 30 e 40 °f. Entrambe rientrano nel range consigliato dal D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Salinizzazione delle falde salentine',
        paragraphs: [
          "Il Salento, per la sua geologia e per la sovra-estrazione storica, conosce fenomeni di salinizzazione delle falde superficiali. AQP utilizza i pozzi salentini in modo integrato con la rete principale per mantenere i parametri di legge. Anche per Bari alcuni pozzi costieri possono mostrare cloruri più elevati, gestiti tramite miscelazione.",
        ],
      },
      {
        heading: 'Gestione e trasparenza',
        paragraphs: [
          "AQP è uno dei più grandi gestori idrici monoregionali in Europa e pubblica i rapporti di prova suddivisi per comune. Per cittadini di Bari e Lecce sono consultabili online i dati di analisi più recenti per la propria zona.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Trattandosi dello stesso gestore, le tariffe AQP per uso domestico sono allineate tra Bari e Lecce. La Puglia ha tariffe moderate, in linea con la media del Sud Italia.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al rubinetto',
        paragraphs: [
          "L'analisi di un campione prelevato a casa è utile per valutare l'effetto della tubazione privata, particolarmente nei centri storici dove le condutture interne possono essere datate.",
        ],
        bullets: [
          'Durezza (°f): leggermente più alta a Lecce',
          'Cloruri: monitorati in pozzi costieri',
          'Salinizzazione: storicamente rilevante nel Salento',
          'Piombo: dipende dalla tubazione interna',
          'Carica microbica: serbatoi e tratti privati',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Bari e Lecce è la stessa?",
        a: "Provengono in larga parte dallo stesso schema regionale gestito da AQP, ma i punti di erogazione finali e l'integrazione con pozzi locali rendono i profili leggermente diversi tra le due città.",
      },
      {
        q: "L'acqua di Lecce è davvero più dura?",
        a: "Tende ad esserlo, anche per l'integrazione con pozzi salentini con mineralizzazione più elevata. Resta comunque all'interno del range consigliato dal D.Lgs. 18/2023.",
      },
      {
        q: "La salinizzazione delle falde è un problema attuale?",
        a: "È un tema strutturale del Salento. AQP gestisce le miscelazioni per mantenere i parametri di legge al rubinetto.",
      },
      {
        q: "Dove trovo i dati ufficiali del mio comune?",
        a: "Sul sito di AQP, nella sezione dedicata alle analisi dell'acqua, con dati suddivisi per comune e aggiornati periodicamente.",
      },
      {
        q: "L'acqua del rubinetto in Puglia è sicura?",
        a: "I dati pubblicati da AQP mostrano in genere conformità al D.Lgs. 18/2023. Per il punto d'uso, l'analisi del campione prelevato a casa fornisce un quadro reale anche del tratto privato.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Bari o a Lecce e vuoi capire come la tua acqua del rubinetto si confronta con i dati medi pugliesi? Un'analisi completa del campione prelevato a casa permette di valutare durezza, cloruri e altri parametri al tuo punto d'uso.",
    relatedSlugs: ['nord-vs-sud-italia'],
  },

  {
    slug: 'genova-vs-la-spezia-confronto-acqua-liguria',
    title: 'Acqua del rubinetto Genova vs La Spezia: confronto in Liguria',
    shortTitle: 'Acqua Genova vs La Spezia: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Genova e La Spezia: origine appenninica, durezza, parametri tipici e gestori, secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua genova vs la spezia',
      'acqua rubinetto genova la spezia',
      'confronto acqua liguria',
      'durezza acqua genova la spezia',
      'qualità acqua liguria',
      'gestori acqua liguria',
    ],
    regions: ['Genova', 'La Spezia'],
    intro:
      "Genova e La Spezia, due capoluoghi liguri affacciati sul mar Ligure, condividono un'alimentazione idrica prevalentemente appenninica. Genova è servita storicamente da IRETI (gruppo Iren) per buona parte del territorio, La Spezia da ACAM Acque. Questa guida confronta i due profili idrici con riferimento al D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Genova', value: 'Invasi e sorgenti appenniniche, captazioni Brugneto' },
          { region: 'La Spezia', value: 'Sorgenti appenniniche e invaso di Polverara' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Genova', value: '15-25 °f (medio-dolce)' },
          { region: 'La Spezia', value: '15-25 °f (medio-dolce)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Genova', value: 'Torbidità episodica dopo piogge intense' },
          { region: 'La Spezia', value: 'Sottoprodotti disinfezione in fonti superficiali' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Genova', value: 'IRETI (gruppo Iren)' },
          { region: 'La Spezia', value: 'ACAM Acque (gruppo Iren)' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Genova', value: 'Intorno a 2,00-2,40 €/m³' },
          { region: 'La Spezia', value: 'Intorno a 2,00-2,50 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Acque appenniniche del versante ligure',
        paragraphs: [
          "Sia Genova sia La Spezia attingono in larga parte a sorgenti e invasi dell'Appennino Ligure. Genova si avvale storicamente di schemi come l'invaso del Brugneto e di altri sistemi di captazione montani. La Spezia utilizza invece l'invaso di Polverara e sorgenti del bacino del Magra.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "Entrambe le città hanno acque tipicamente medio-dolci, con durezza intorno a 15-25 °f, in linea con la geologia dell'Appennino ligure. Sono valori all'interno del range consigliato dal D.Lgs. 18/2023 e con scarsa tendenza a formare calcare.",
        ],
      },
      {
        heading: 'Parametri tipici di attenzione',
        paragraphs: [
          "La torbidità episodica dopo eventi piovosi intensi è un tema noto delle captazioni superficiali liguri, gestito dai gestori tramite trattamenti dedicati. I sottoprodotti della disinfezione vengono monitorati con frequenza nelle acque potabilizzate da fonti superficiali.",
        ],
      },
      {
        heading: 'Gestori e trasparenza',
        paragraphs: [
          "Sia IRETI a Genova sia ACAM Acque a La Spezia fanno capo al gruppo Iren e pubblicano periodicamente i rapporti di prova per zona, consultabili online.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Le tariffe medie nelle due città sono allineate e in linea con la media del Nord Italia. La struttura tariffaria liguir riflette i costi di potabilizzazione e di gestione di una rete con forte dislivello orografico.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al rubinetto',
        paragraphs: [
          "Per gli edifici storici di Genova e La Spezia, l'analisi di un campione prelevato al rubinetto è utile per valutare anche l'effetto delle tubazioni interne, che possono incidere su parametri come piombo, ferro o carica microbica.",
        ],
        bullets: [
          'Durezza (°f): medio-dolce in entrambe le città',
          'Torbidità: monitorata dopo eventi piovosi intensi',
          'Trihalometani: tipici della potabilizzazione di acque superficiali',
          'Piombo: dipende dalle tubazioni interne',
          'Carica microbica: serbatoi e tratti privati',
        ],
      },
    ],
    faqs: [
      {
        q: "Le acque di Genova e La Spezia sono simili?",
        a: "Hanno profili simili, con durezza medio-dolce tipica dell'Appennino ligure. Le differenze riguardano gli schemi di approvvigionamento e i singoli impianti di potabilizzazione.",
      },
      {
        q: "Cosa succede dopo le piogge intense in Liguria?",
        a: "Gli eventi piovosi possono aumentare la torbidità delle captazioni superficiali. I gestori intervengono con trattamenti adeguati per mantenere la conformità ai parametri del D.Lgs. 18/2023.",
      },
      {
        q: "Devo temere il calcare a Genova o a La Spezia?",
        a: "No, in genere. La durezza media è contenuta. Caldaie ed elettrodomestici sono meno sollecitati rispetto alle aree padane.",
      },
      {
        q: "Dove trovo i dati ufficiali per il mio quartiere?",
        a: "Sui siti di IRETI per Genova e di ACAM Acque per La Spezia. Pubblicano periodicamente i rapporti di prova suddivisi per zona.",
      },
      {
        q: "Vivo in un palazzo storico genovese: cosa controllare?",
        a: "L'analisi del campione al rubinetto è utile per valutare l'effetto della tubazione interna, in particolare parametri come piombo o carica microbica nei tratti più datati.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Genova o a La Spezia e vuoi confrontare i dati medi della tua città con la qualità reale al rubinetto di casa? Un'analisi completa del campione prelevato al punto d'uso fornisce un quadro chiaro e personalizzato.",
    relatedSlugs: ['nord-vs-sud-italia'],
  },

  {
    slug: 'catania-vs-palermo-confronto-acqua-sicilia',
    title: 'Acqua del rubinetto Catania vs Palermo: confronto in Sicilia',
    shortTitle: 'Acqua Catania vs Palermo: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Catania e Palermo: origine etnea vs sorgenti madonite, durezza, parametri tipici e gestori, secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua catania vs palermo',
      'acqua rubinetto catania palermo',
      'confronto acqua sicilia',
      'durezza acqua catania palermo',
      'qualità acqua sicilia',
      'gestori acqua sicilia',
    ],
    regions: ['Catania', 'Palermo'],
    intro:
      "Catania e Palermo, le due principali città siciliane, mostrano profili idrici molto diversi. Catania si alimenta in larga parte dalle falde delle pendici dell'Etna, gestite da SIDRA. Palermo invece riceve acqua da sorgenti dei Monti Madonie e da invasi, gestita da AMAP. Questa guida mette a confronto i due profili con riferimento al D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Catania', value: 'Falde delle pendici dell\'Etna' },
          { region: 'Palermo', value: 'Sorgenti Madonie e invasi (Scanzano, Piana degli Albanesi)' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Catania', value: '20-30 °f (medio-dura)' },
          { region: 'Palermo', value: '20-30 °f (medio-dura)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Catania', value: 'Tracce naturali di elementi vulcanici' },
          { region: 'Palermo', value: 'Sottoprodotti disinfezione di invasi superficiali' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Catania', value: 'SIDRA' },
          { region: 'Palermo', value: 'AMAP' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Catania', value: 'Intorno a 1,50-1,90 €/m³' },
          { region: 'Palermo', value: 'Intorno a 1,50-2,00 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Etna vs Madonie: due origini molto diverse',
        paragraphs: [
          "Catania attinge da una delle risorse idriche più caratteristiche d'Europa: le falde dell'Etna, ricaricate dalle abbondanti piogge e nevicate del vulcano, che danno acque tipicamente buone dal punto di vista microbiologico. Palermo si alimenta da sorgenti dei Monti Madonie e da invasi superficiali, con caratteristiche idrochimiche diverse.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "Entrambe le città presentano durezza medio-dura, fra 20 e 30 °f, all'interno del range consigliato dal D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Parametri tipici di attenzione',
        paragraphs: [
          "Le acque di origine vulcanica possono presentare tracce naturali di elementi come fluoruri. A Palermo, l'utilizzo di invasi superficiali comporta la formazione di sottoprodotti della disinfezione, monitorati con frequenza dal gestore.",
        ],
      },
      {
        heading: 'Reti, perdite e distribuzione',
        paragraphs: [
          "La Sicilia ha mediamente perdite di rete elevate, con conseguenze su pressione e continuità del servizio in alcune aree. Sia Catania sia Palermo hanno conosciuto storicamente fasi di razionamento. La qualità chimica al rubinetto resta comunque monitorata in conformità al D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Le tariffe medie nelle due città siciliane sono allineate, in linea con la media del Sud Italia. Restano molto inferiori al costo dell'acqua in bottiglia.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al rubinetto',
        paragraphs: [
          "Per molti edifici siciliani con serbatoi di accumulo sul tetto, l'analisi del campione prelevato al rubinetto è particolarmente utile per valutare l'effetto del tratto privato dell'impianto idrico.",
        ],
        bullets: [
          'Durezza (°f): medio-dura in entrambe le città',
          'Fluoruri: monitorati nelle aree vulcaniche',
          'Trihalometani: sottoprodotti tipici degli invasi',
          'Piombo: dipende dalla tubazione interna',
          'Carica microbica: importante dove ci sono serbatoi',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua dell'Etna è davvero pregiata?",
        a: "Le falde delle pendici etnee hanno un'ottima qualità di base, grazie all'abbondante ricarica meteorica e alla geologia vulcanica. Restano valide le indicazioni del D.Lgs. 18/2023 e i monitoraggi del gestore.",
      },
      {
        q: "Cosa sono i trihalometani che si citano per Palermo?",
        a: "Sono sottoprodotti tipici della disinfezione di acque superficiali, monitorati con limiti specifici. Il gestore opera per mantenerli sotto soglia.",
      },
      {
        q: "Perché in Sicilia si parla spesso di serbatoi sul tetto?",
        a: "L'erogazione storicamente discontinua ha portato alla diffusione di serbatoi privati. Se non manutenuti, possono incidere sulla qualità microbiologica al punto d'uso.",
      },
      {
        q: "Dove trovo i dati ufficiali?",
        a: "Su SIDRA per Catania e AMAP per Palermo. Pubblicano periodicamente i rapporti di prova per zona.",
      },
      {
        q: "L'acqua del rubinetto in Sicilia è sicura da bere?",
        a: "I parametri del D.Lgs. 18/2023 sono gli stessi in tutta Italia. Per il punto d'uso, soprattutto in presenza di serbatoi, l'analisi del campione prelevato a casa fornisce un quadro reale.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Catania o a Palermo e vuoi sapere come la tua acqua del rubinetto, considerando anche il serbatoio condominiale, si confronta davvero con i dati cittadini? Un'analisi completa del campione prelevato a casa è la strada più diretta.",
    relatedSlugs: ['nord-vs-sud-italia'],
  },

  {
    slug: 'cagliari-vs-sassari-confronto-acqua-sardegna',
    title: 'Acqua del rubinetto Cagliari vs Sassari: confronto in Sardegna',
    shortTitle: 'Acqua Cagliari vs Sassari: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Cagliari e Sassari: origine sarda, durezza, parametri tipici e gestione di Abbanoa, secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua cagliari vs sassari',
      'acqua rubinetto cagliari sassari',
      'confronto acqua sardegna',
      'durezza acqua sardegna',
      'qualità acqua sardegna',
      'abbanoa',
    ],
    regions: ['Cagliari', 'Sassari'],
    intro:
      "Cagliari e Sassari, due capoluoghi sardi, condividono lo stesso gestore unico regionale: Abbanoa. La risorsa idrica della Sardegna è prevalentemente di origine superficiale, da un sistema integrato di invasi distribuiti sul territorio. Questa guida confronta i due profili con riferimento al D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Cagliari', value: 'Invasi del sud Sardegna (Mulargia, Flumendosa)' },
          { region: 'Sassari', value: 'Invasi del nord Sardegna (Coghinas, Bidighinzu)' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Cagliari', value: '20-30 °f (medio-dura)' },
          { region: 'Sassari', value: '15-25 °f (medio-dolce)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Cagliari', value: 'Trihalometani da potabilizzazione, livelli invasi' },
          { region: 'Sassari', value: 'Trihalometani, gestione invasi' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Cagliari', value: 'Abbanoa' },
          { region: 'Sassari', value: 'Abbanoa' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Cagliari', value: 'Intorno a 1,80-2,30 €/m³' },
          { region: 'Sassari', value: 'Intorno a 1,80-2,30 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Sardegna: una regione dipendente dagli invasi',
        paragraphs: [
          "La Sardegna ha una risorsa idrica prevalentemente superficiale, raccolta in un sistema esteso di invasi gestito da ENAS per la grande adduzione e da Abbanoa per il servizio civile. Cagliari attinge soprattutto al sistema sud (Mulargia, Flumendosa). Sassari fa riferimento agli invasi del nord, come Coghinas e Bidighinzu.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "Le acque di Cagliari mostrano durezza media leggermente più elevata rispetto a Sassari, ma entrambe rientrano nell'intervallo consigliato dal D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Parametri tipici di attenzione',
        paragraphs: [
          "La potabilizzazione delle acque superficiali comporta la formazione di sottoprodotti come i trihalometani, monitorati con frequenza dal gestore. La qualità degli invasi varia stagionalmente, in particolare nelle annate siccitose.",
        ],
      },
      {
        heading: 'Reti, perdite e investimenti',
        paragraphs: [
          "La Sardegna ha perdite di rete storicamente elevate. Abbanoa, come gestore unico regionale, sta investendo nel rinnovo delle reti, anche grazie ai fondi del PNRR. La qualità chimica al rubinetto resta controllata in conformità al D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Trattandosi dello stesso gestore, le tariffe per uso domestico sono allineate fra Cagliari e Sassari. Il costo medio è in linea con la media nazionale dei capoluoghi.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al rubinetto',
        paragraphs: [
          "Per molte abitazioni sarde con serbatoi privati di accumulo, l'analisi del campione prelevato al rubinetto è utile per valutare l'effetto del tratto privato dell'impianto idrico.",
        ],
        bullets: [
          'Durezza (°f): leggermente più alta a Cagliari',
          'Trihalometani: tipici della potabilizzazione di invasi',
          'Qualità invasi: variabile su base stagionale',
          'Piombo: dipende dalla tubazione interna',
          'Carica microbica: importante con serbatoi privati',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Cagliari e Sassari arriva dagli invasi?",
        a: "Sì, in larga parte. La Sardegna utilizza un sistema integrato di invasi superficiali distribuiti sul territorio, con captazioni differenti per il sud e il nord dell'isola.",
      },
      {
        q: "I trihalometani sono un problema?",
        a: "Sono sottoprodotti tipici della disinfezione delle acque superficiali, soggetti a limiti specifici nel D.Lgs. 18/2023. Il gestore opera per mantenerli entro le soglie.",
      },
      {
        q: "Perché in Sardegna si parla così spesso di siccità?",
        a: "Gli invasi rappresentano la risorsa principale e la loro disponibilità varia molto in base alle precipitazioni. La gestione delle riserve è un tema strutturale della politica idrica regionale.",
      },
      {
        q: "Dove trovo i dati ufficiali per il mio comune?",
        a: "Sul sito di Abbanoa, nella sezione dedicata alle analisi dell'acqua, con dati suddivisi per comune e aggiornati periodicamente.",
      },
      {
        q: "Vivo in una zona con serbatoio sul tetto: cosa controllare?",
        a: "Carica microbica, ferro e altri parametri che possono dipendere dalle condizioni del serbatoio. Un'analisi del campione prelevato al rubinetto fornisce un quadro reale.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Cagliari o a Sassari e vuoi sapere come la tua acqua del rubinetto, dopo serbatoio e tubazioni interne, si confronta con i dati Abbanoa? Un'analisi completa del campione prelevato a casa risponde in modo diretto.",
    relatedSlugs: ['nord-vs-sud-italia'],
  },

  {
    slug: 'padova-vs-verona-confronto-acqua-veneto',
    title: 'Acqua del rubinetto Padova vs Verona: confronto in Veneto',
    shortTitle: 'Acqua Padova vs Verona: confronto rubinetto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto di Padova e Verona: origine, durezza, parametri tipici e gestori, secondo il D.Lgs. 18/2023.",
    searchKeywords: [
      'acqua padova vs verona',
      'acqua rubinetto padova verona',
      'confronto acqua veneto',
      'durezza acqua padova verona',
      'qualità acqua veneto',
      'gestori acqua veneto',
    ],
    regions: ['Padova', 'Verona'],
    intro:
      "Padova e Verona, due importanti città venete, hanno fonti idriche differenti. Padova è alimentata da pozzi della falda profonda padana, con gestione AcegasApsAmga (gruppo Hera). Verona riceve acqua dalle sorgenti dei Lessini e da pozzi di pianura, sotto la gestione di Acque Veronesi. Questa guida confronta i due profili con riferimento al D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Origine principale',
        values: [
          { region: 'Padova', value: 'Pozzi falda profonda padana' },
          { region: 'Verona', value: 'Sorgenti dei Lessini e pozzi di pianura' },
        ],
      },
      {
        label: 'Durezza media',
        values: [
          { region: 'Padova', value: '25-35 °f (medio-dura)' },
          { region: 'Verona', value: '20-30 °f (medio-dura)' },
        ],
      },
      {
        label: 'Parametri tipici di attenzione',
        values: [
          { region: 'Padova', value: 'Nitrati nelle falde superficiali in aree agricole' },
          { region: 'Verona', value: 'PFAS storicamente segnalati in alcune zone dell\'area est' },
        ],
      },
      {
        label: 'Gestore principale',
        values: [
          { region: 'Padova', value: 'AcegasApsAmga (gruppo Hera)' },
          { region: 'Verona', value: 'Acque Veronesi' },
        ],
      },
      {
        label: 'Tariffa media domestica',
        values: [
          { region: 'Padova', value: 'Intorno a 2,20-2,60 €/m³' },
          { region: 'Verona', value: 'Intorno a 2,00-2,50 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Falda profonda vs sorgenti dei Lessini',
        paragraphs: [
          "Padova attinge in larga parte dalla falda profonda padana, tramite pozzi protetti dagli inquinamenti superficiali. Verona ha invece un'origine mista: una parte importante arriva dalle sorgenti dei Lessini, integrate da pozzi della pianura veronese.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "Padova mostra durezza media più elevata, fra 25 e 35 °f, tipica della falda padana. Verona, grazie all'apporto delle sorgenti dei Lessini, ha valori leggermente inferiori. Entrambe rientrano nell'intervallo consigliato dal D.Lgs. 18/2023.",
        ],
      },
      {
        heading: 'Nitrati e PFAS: due temi venti',
        paragraphs: [
          "Padova condivide con il resto della pianura veneta la pressione storica da nitrati nelle falde superficiali, ragione per cui si utilizzano in via prevalente le falde profonde più protette. Verona è stata interessata, in una porzione dell'area orientale, dal noto caso PFAS legato all'area centro-vicentina; la zona di Verona città non è stata fra le più colpite, ma il monitoraggio resta attivo.",
        ],
      },
      {
        heading: 'Gestori e trasparenza',
        paragraphs: [
          "AcegasApsAmga gestisce Padova ed è parte del gruppo Hera. Acque Veronesi è il gestore del Consiglio di Bacino Veronese. Entrambi pubblicano periodicamente i rapporti di prova per zona, consultabili online.",
        ],
      },
      {
        heading: 'Bolletta a confronto',
        paragraphs: [
          "Le tariffe medie di Padova sono leggermente superiori a quelle di Verona. Entrambe le città restano in linea con la media del Nord-Est e ampiamente più economiche dell'acqua in bottiglia.",
        ],
      },
      {
        heading: 'Come conoscere la qualità reale al rubinetto',
        paragraphs: [
          "Per la qualità reale al punto d'uso, soprattutto negli edifici con tubazioni interne datate, l'analisi del campione prelevato a casa permette di considerare anche l'effetto del tratto privato dell'impianto.",
        ],
        bullets: [
          'Durezza (°f): leggermente più alta a Padova',
          'Nitrati: storicamente rilevanti nelle falde superficiali venete',
          'PFAS: monitorati in particolare in una porzione del veronese',
          'Piombo: dipende dalla tubazione interna',
          'Carica microbica: tratti privati a valle del contatore',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua di Verona ha problemi di PFAS?",
        a: "Il noto caso PFAS ha interessato in particolare l'area centro-vicentina e alcune zone limitrofe. La zona di Verona città non è stata fra le più colpite; il monitoraggio è comunque attivo da parte del gestore.",
      },
      {
        q: "Perché a Padova si parla di nitrati?",
        a: "Le falde superficiali della pianura veneta hanno storicamente concentrazioni di nitrati legate all'agricoltura intensiva. Per questo motivo si utilizzano in via prevalente le falde profonde più protette.",
      },
      {
        q: "L'acqua di Padova è più dura?",
        a: "Tendenzialmente sì, con valori medi 25-35 °f, leggermente superiori a Verona. Entrambe restano nell'intervallo consigliato dal D.Lgs. 18/2023.",
      },
      {
        q: "Dove trovo i dati ufficiali del mio quartiere?",
        a: "Sui siti di AcegasApsAmga per Padova e di Acque Veronesi per Verona. Pubblicano periodicamente i rapporti di prova suddivisi per zona.",
      },
      {
        q: "Conviene analizzare l'acqua del rubinetto a casa?",
        a: "Per chi vive in edifici con tubazioni datate o serbatoi privati, un'analisi del campione prelevato al punto d'uso fornisce un quadro più realistico rispetto al solo dato di rete.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi a Padova o a Verona e vuoi sapere come la tua acqua del rubinetto, dopo la tubazione interna, si confronta con i dati medi della tua città? Un'analisi completa del campione prelevato a casa è la strada più diretta per un quadro reale.",
    relatedSlugs: ['nord-vs-sud-italia', 'lombardia-vs-veneto'],
  },
];
