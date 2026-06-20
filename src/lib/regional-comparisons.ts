export interface RegionalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface RegionalFAQ {
  q: string;
  a: string;
}

export type CTAVariant =
  | 'kit-analisi'
  | 'laboratorio'
  | 'rapporto-prova'
  | 'metalli-pesanti'
  | 'microbiologica'
  | 'pfas'
  | 'completa';

export interface RegionalComparison {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  regions: string[];
  comparisonTable: {
    label: string;
    values: { region: string; value: string }[];
  }[];
  sections: RegionalSection[];
  faqs: RegionalFAQ[];
  ctaVariant: CTAVariant;
  ctaContext: string;
  relatedSlugs?: string[];
}

export const REGIONAL_COMPARISONS: RegionalComparison[] = [
  {
    slug: 'nord-vs-sud-italia',
    title: 'Acqua del rubinetto Nord vs Sud Italia: differenze reali tra le due macroaree',
    shortTitle: 'Acqua rubinetto Nord vs Sud Italia: confronto reale',
    metaDescription:
      'Confronto onesto tra acqua del rubinetto del Nord e del Sud Italia: origini, durezza, problematiche storiche, gestori e differenze di costo in bolletta.',
    searchKeywords: [
      'acqua nord sud italia',
      'differenza acqua nord sud',
      'acqua nord italia',
      'acqua sud italia qualità',
      'acqua rubinetto italia confronto',
      'qualità acqua italiana macroaree',
    ],
    regions: ['Nord Italia', 'Sud Italia'],
    intro:
      "Quando si parla di acqua del rubinetto in Italia, la divisione fra Nord e Sud è spesso evocata in modo superficiale. La realtà è più sfumata: entrambe le macroaree presentano sia acquedotti con qualità molto buona sia situazioni storiche di criticità locale. Le differenze reali riguardano l'origine della risorsa, la durezza media, le problematiche tipiche legate alla geologia e all'uso del suolo, la struttura dei gestori e i prezzi medi in bolletta. Questa guida mette a confronto le due macroaree in modo equilibrato, senza eleggere un vincitore e citando la normativa vigente, il D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Nord Italia', value: '25-45 °f (medio-dura)' },
          { region: 'Sud Italia', value: '15-30 °f (variabile, spesso medio-bassa)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Nord Italia', value: 'Sorgenti alpine, falda padana, laghi' },
          { region: 'Sud Italia', value: 'Sorgenti appenniniche, falde profonde, invasi' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Nord Italia', value: 'Nitrati, PFAS in alcune aree, durezza, solventi clorurati' },
          { region: 'Sud Italia', value: 'Arsenico vulcanico, perdite di rete, salinizzazione costiera' },
        ],
      },
      {
        label: 'Qualità microbiologica',
        values: [
          { region: 'Nord Italia', value: 'Generalmente conforme, episodi sporadici' },
          { region: 'Sud Italia', value: 'Conforme nei capoluoghi, episodi più frequenti in piccoli comuni' },
        ],
      },
      {
        label: 'Costo medio bolletta (uso domestico tipo)',
        values: [
          { region: 'Nord Italia', value: 'Tendenzialmente più alta (2,20-2,80 €/m³)' },
          { region: 'Sud Italia', value: 'Tendenzialmente più bassa (1,40-2,20 €/m³)' },
        ],
      },
      {
        label: 'Dispersioni di rete',
        values: [
          { region: 'Nord Italia', value: 'Mediamente 30-35%' },
          { region: 'Sud Italia', value: 'Mediamente 45-55%' },
        ],
      },
    ],
    sections: [
      {
        heading: "Origine dell'acqua: due geografie diverse",
        paragraphs: [
          "Nel Nord Italia la risorsa idropotabile arriva in larga parte dall'arco alpino e prealpino, dai grandi laghi e dalla falda padana. L'acqua delle sorgenti alpine è in genere fredda, povera di carico organico e con mineralizzazione media o medio-alta a seconda delle rocce attraversate. La falda padana, ricarica naturale per gran parte della pianura, ha invece subito decenni di pressione agricola e zootecnica con conseguente aumento dei nitrati in molte aree.",
          "Nel Sud Italia la geografia idrica è dominata dalla dorsale appenninica meridionale, con sorgenti calcaree spesso di buona qualità chimica, integrate da falde profonde e da un sistema di invasi e schemi di trasferimento idrico fra regioni. L'Acquedotto Pugliese, ad esempio, porta in Puglia acqua proveniente in buona parte dalla Basilicata. Le aree vulcaniche del Lazio meridionale, della Campania e della Sicilia mostrano un quadro idrochimico particolare, con presenza naturale di fluoruri, arsenico o altri elementi a seconda dei contesti.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione: cosa cambia davvero',
        paragraphs: [
          "La durezza dell'acqua, espressa in gradi francesi (°f), non è un parametro di salubrità ma di tipologia. Nel Nord Italia le acque sono spesso classificate come medio-dure o dure, in particolare in Lombardia, Veneto ed Emilia-Romagna, dove sono comuni valori fra 30 e 45 °f. Nel Sud Italia il quadro è più variegato: zone con acque medio-dolci convivono con aree calcaree dove la durezza supera i 30 °f.",
          "Un'acqua dura non fa male alla salute, anzi apporta calcio e magnesio, ma crea incrostazioni in caldaie e elettrodomestici. Un'acqua dolce, al contrario, può essere più aggressiva nei confronti delle tubazioni metalliche più datate. Il D.Lgs. 18/2023 indica come valore consigliato un intervallo fra 15 e 50 °f, all'interno del quale ricade la stragrande maggioranza delle acque italiane sia al Nord sia al Sud.",
        ],
      },
      {
        heading: 'Problematiche storiche: nitrati al Nord, arsenico al Sud',
        paragraphs: [
          "Le problematiche tipiche delle due macroaree riflettono la geologia e la storia agricola. Il Nord Italia, in particolare la Pianura Padana, ha conosciuto in passato superamenti del limite di nitrati nelle falde superficiali, con esempi noti in alcune zone di Lombardia, Veneto ed Emilia-Romagna. La Lombardia ha conosciuto anche situazioni storiche di contaminazione da solventi clorurati nelle aree industriali, mentre il Veneto è stato al centro del caso PFAS legato all'area di Vicenza.",
          "Nel Sud Italia la presenza naturale di arsenico in alcune aree vulcaniche del Lazio settentrionale ha portato in passato a deroghe e poi a interventi di abbattimento. La Sicilia presenta situazioni eterogenee con punte di salinizzazione nelle aree costiere a causa della sovra-estrazione. Le perdite di rete sono storicamente più alte al Sud, con valori medi che superano il 45% in diverse regioni e che incidono sulla pressione di servizio più che sulla qualità chimica al rubinetto.",
        ],
      },
      {
        heading: "Gestori, qualità del servizio e investimenti",
        paragraphs: [
          "Il quadro dei gestori del servizio idrico integrato è frammentato. Al Nord prevalgono multiutility di medie e grandi dimensioni, spesso a controllo pubblico ma con forte capacità di investimento; sono esempi MM e Gruppo CAP per l'area milanese, Hera in Emilia-Romagna e gestori regionali in Veneto. Al Sud convivono gestori unici regionali, come Acquedotto Pugliese, e una pluralità di realtà locali di dimensioni minori, con investimenti pro capite mediamente più bassi.",
          "Questa differenza incide sulla capacità di rinnovare le reti, ridurre le perdite e attivare trattamenti avanzati. Va ricordato però che la qualità chimica e microbiologica al rubinetto è uniformemente controllata in tutta Italia secondo gli stessi parametri di legge: ASL e gestori effettuano campionamenti periodici e i superamenti sono pubblici. Non esiste un Nord 'sicuro' e un Sud 'insicuro': esistono singoli acquedotti con storie e criticità diverse.",
        ],
      },
      {
        heading: 'Quanto si paga: la bolletta nelle due macroaree',
        paragraphs: [
          "Il costo dell'acqua in bolletta è tendenzialmente più alto al Nord rispetto al Sud, con tariffe medie per uso domestico tipico fra 2,20 e 2,80 €/m³ nelle regioni settentrionali e fra 1,40 e 2,20 €/m³ in molte regioni meridionali. La differenza riflette diversi fattori: livelli di investimento, struttura tariffaria, costo dell'energia per il sollevamento, ampiezza del bacino d'utenza, scelte politiche locali.",
          "Una tariffa più bassa al Sud non significa servizio migliore: spesso indica investimenti più contenuti, con conseguente accumulo di vetustà delle reti. Una tariffa più alta al Nord finanzia ricerca perdite, distrettualizzazione e trattamenti avanzati come l'abbattimento di nitrati o PFAS dove necessario. Per il singolo cittadino, comunque, l'acqua del rubinetto resta in ogni caso più economica dell'acqua minerale in bottiglia di almeno due ordini di grandezza.",
        ],
      },
      {
        heading: 'Cosa controllare se vuoi conoscere davvero la tua acqua',
        paragraphs: [
          "Al di là delle differenze fra macroaree, l'unico modo per conoscere la qualità reale dell'acqua che esce dal tuo rubinetto è leggere il rapporto di prova pubblicato dal gestore per il tuo Comune ed eventualmente integrare con un'analisi del campione prelevato al punto d'uso. La rete domestica, le tubazioni interne dell'edificio e l'eventuale presenza di vecchi serbatoi possono incidere su parametri come piombo, ferro o carica microbica anche dove la rete pubblica eroga acqua conforme.",
        ],
        bullets: [
          "Durezza (°f): incide su elettrodomestici, non sulla salute",
          "Nitrati: rilevanti soprattutto al Nord nelle aree agricole",
          "PFAS: storicamente segnalati in Veneto e in alcune aree limitate",
          "Arsenico e fluoruri: zone vulcaniche del centro-sud",
          "Piombo: legato alle tubazioni interne, non al gestore",
          "Carica batterica: serbatoi e tubazioni a valle del contatore",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto al Sud è davvero peggiore di quella del Nord?",
        a: "No. È un luogo comune. Sia al Nord sia al Sud esistono acquedotti con qualità eccellente e singole situazioni storiche di criticità. La normativa nazionale, il D.Lgs. 18/2023, impone gli stessi parametri ovunque. Le differenze reali riguardano origine, durezza e tipologia di problematiche locali, non un giudizio assoluto di qualità.",
      },
      {
        q: "Perché al Nord la bolletta dell'acqua costa di più?",
        a: "Al Nord le multiutility investono in media più che al Sud nel rinnovo delle reti, nella ricerca perdite e in trattamenti avanzati. Anche il costo energetico per il sollevamento e la depurazione incide. La tariffa più bassa al Sud riflette spesso un livello di investimento più contenuto, non una qualità superiore.",
      },
      {
        q: "L'acqua dura del Nord fa male?",
        a: "No. La durezza non è un parametro di salubrità ma di tipologia. Un'acqua dura apporta calcio e magnesio e provoca incrostazioni in caldaie ed elettrodomestici, ma non rappresenta un rischio per la salute. Il D.Lgs. 18/2023 indica un intervallo consigliato fra 15 e 50 °f.",
      },
      {
        q: "Quali sono i problemi più diffusi al Nord?",
        a: "Nitrati nelle falde superficiali delle aree agricole intensive della Pianura Padana, presenza storica di PFAS in una porzione del Veneto, solventi clorurati in alcune aree industriali storiche e durezza elevata in gran parte delle pianure.",
      },
      {
        q: "Quali sono i problemi più diffusi al Sud?",
        a: "Presenza naturale di arsenico in alcune zone vulcaniche del centro-sud, salinizzazione di alcune falde costiere, perdite di rete più elevate che incidono sulla pressione di servizio. La qualità chimica al rubinetto resta comunque controllata e in genere conforme ai limiti.",
      },
      {
        q: "Come faccio a sapere com'è l'acqua nella mia città?",
        a: "Puoi richiedere al gestore il rapporto di prova più recente, di norma pubblicato anche sul sito istituzionale. Per conoscere la qualità al rubinetto, comprensiva del tratto privato di tubazioni, puoi far analizzare un campione prelevato direttamente al punto d'uso da un laboratorio.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vuoi sapere se la tua acqua del rubinetto rispecchia davvero la media regionale? Un'analisi completa del campione prelevato in casa ti dice esattamente cosa scorre nelle tubazioni della tua abitazione, oltre la media del tuo Comune.",
    relatedSlugs: ['regione-con-acqua-migliore-italia', 'lombardia-vs-veneto', 'pianura-padana-acqua'],
  },

  {
    slug: 'lombardia-vs-veneto',
    title: 'Acqua Lombardia vs Veneto: confronto su durezza, PFAS, nitrati e gestori',
    shortTitle: 'Acqua Lombardia vs Veneto: durezza, PFAS, nitrati',
    metaDescription:
      "Confronto fra l'acqua del rubinetto in Lombardia e Veneto: durezza, nitrati della Pianura Padana, PFAS storici dell'area vicentina e differenze fra gestori.",
    searchKeywords: [
      'acqua lombardia veneto',
      'pfas veneto lombardia',
      'acqua rubinetto nord italia',
      'qualità acqua veneto',
      'acqua lombardia qualità',
      'durezza acqua lombardia veneto',
    ],
    regions: ['Lombardia', 'Veneto'],
    intro:
      "Lombardia e Veneto condividono geografia padana, intensità agricola e tessuto industriale denso, ma la storia dell'acqua del rubinetto nelle due regioni segue strade in parte diverse. Entrambe presentano durezza medio-alta, entrambe hanno conosciuto problematiche di nitrati in alcune zone di pianura, ma il Veneto si è trovato al centro del più importante caso italiano di contaminazione da PFAS, mentre la Lombardia ha vissuto situazioni storiche di solventi clorurati in aree industriali specifiche. Questo confronto mette a fuoco le differenze reali fra le due regioni con riferimento al D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Lombardia', value: '28-45 °f (medio-dura/dura)' },
          { region: 'Veneto', value: '20-40 °f (medio-dura)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Lombardia', value: 'Falda padana, sorgenti alpine, laghi prealpini' },
          { region: 'Veneto', value: 'Falda padana, sorgenti dolomitiche, risorgive' },
        ],
      },
      {
        label: 'Problematiche storiche principali',
        values: [
          { region: 'Lombardia', value: 'Solventi clorurati industriali, cromo, nitrati locali' },
          { region: 'Veneto', value: 'PFAS area Vicentina, nitrati Bassa Padana' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Lombardia', value: 'MM, Gruppo CAP, Brianzacque, Padania Acque, A2A' },
          { region: 'Veneto', value: 'Viveracqua (consorzio), Acque Veronesi, Etra, Veritas' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Lombardia', value: '2,00-2,60 €/m³' },
          { region: 'Veneto', value: '2,30-2,90 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Origine e tipologia delle acque',
        paragraphs: [
          "La Lombardia attinge da una pluralità di fonti: la falda padana, profonda e superficiale, copre buona parte del fabbisogno di pianura, mentre l'area prealpina e alpina è alimentata da sorgenti e dai laghi. La provincia di Milano è in larga parte servita da acqua di falda profonda, una risorsa preziosa che richiede protezione dal sovrasfruttamento. La Lombardia presenta inoltre una notevole rete di pozzi monitorati.",
          "Il Veneto combina sorgenti dolomitiche di ottima qualità nell'area pedemontana, falda profonda e superficiale nella pianura e il sistema delle risorgive nel medio Veneto. Quest'ultimo è uno dei sistemi idrogeologici più caratteristici d'Italia e fornisce acqua di buona qualità a numerosi acquedotti. Nelle pianure più meridionali la risorsa è meno protetta e più esposta alla pressione agricola.",
        ],
      },
      {
        heading: 'PFAS: il caso veneto e il quadro lombardo',
        paragraphs: [
          "Il caso PFAS in Veneto, emerso a partire dal 2013 e collegato a un impianto industriale in provincia di Vicenza, ha interessato un'area che comprende parte delle province di Vicenza, Verona e Padova, coinvolgendo centinaia di migliaia di residenti. La Regione Veneto ha attivato un piano di sorveglianza sanitaria, ha installato filtri a carboni attivi sugli acquedotti coinvolti e ha definito limiti regionali più stringenti rispetto a quelli storici nazionali. Oggi gli acquedotti nell'area coinvolta erogano acqua conforme ai limiti vigenti.",
          "La Lombardia ha presentato situazioni più localizzate di PFAS, in genere collegate a singoli siti industriali, senza l'estensione territoriale del caso veneto. Il D.Lgs. 18/2023 ha introdotto limiti nazionali specifici per PFAS, applicabili dal 12 gennaio 2026, che uniformeranno il quadro su tutto il territorio. Entrambe le regioni stanno adeguando i piani di monitoraggio in vista dell'entrata in vigore dei nuovi limiti.",
        ],
      },
      {
        heading: 'Nitrati e Pianura Padana',
        paragraphs: [
          "La Pianura Padana, condivisa fra Lombardia, Veneto, Emilia-Romagna e Piemonte, è una delle aree europee con maggiore presenza di nitrati nelle falde superficiali a causa della densità di allevamenti e dell'uso storico di fertilizzanti. In Lombardia le falde superficiali della Bassa lodigiana, cremonese e mantovana hanno mostrato in passato concentrazioni vicine o superiori al limite di 50 mg/L. La risposta tipica è stata la captazione da falda profonda, la miscelazione o il trattamento.",
          "In Veneto le aree più esposte si trovano nella Bassa veronese, nel Polesine e in alcune zone vicentine e padovane. Anche qui i gestori utilizzano miscelazione e captazione da risorse meno esposte. È utile sottolineare che il limite del nitrato al rubinetto è 50 mg/L e che, dove le situazioni di pressione agricola sono importanti, gli acquedotti sono soggetti a monitoraggio rinforzato.",
        ],
      },
      {
        heading: 'Durezza: due regioni a confronto',
        paragraphs: [
          "Sia Lombardia sia Veneto presentano acque generalmente medio-dure o dure, con valori che spesso superano i 30 °f nelle aree di pianura. Milano, ad esempio, eroga acqua con durezza tipicamente compresa fra 28 e 40 °f a seconda della zona, mentre Brescia e Bergamo hanno valori simili. In Veneto, città come Verona e Padova mostrano valori medi fra 20 e 35 °f, mentre la pedemontana berica e dolomitica può scendere sotto i 20 °f grazie alle sorgenti calcaree pure.",
          "La durezza non è un parametro di salubrità ma incide sul comfort domestico: incrostazioni in caldaia, lavatrice e lavastoviglie, residui sulle stoviglie. In entrambe le regioni l'installazione di addolcitori è frequente, ma è bene ricordare che una regolazione errata può produrre acqua troppo dolce e potenzialmente aggressiva sulle tubazioni.",
        ],
      },
      {
        heading: 'Solventi clorurati e contaminazioni industriali storiche',
        paragraphs: [
          "La Lombardia ha conosciuto in alcune aree dell'hinterland milanese e in altri poli industriali situazioni storiche di contaminazione da solventi clorurati come tricloroetilene, dovute ad attività industriali pregresse. I gestori hanno installato impianti di trattamento a carboni attivi e i parametri al rubinetto risultano conformi. Il monitoraggio resta capillare.",
          "Il Veneto ha vissuto situazioni di contaminazione industriale più localizzate e meno estese rispetto alla Lombardia, ad eccezione del caso PFAS, di cui si è parlato sopra. Le aree industriali di Porto Marghera e di Vicenza sono storicamente le più sorvegliate.",
        ],
      },
      {
        heading: 'Gestori e qualità del servizio',
        paragraphs: [
          "In Lombardia il servizio idrico è gestito da una pluralità di soggetti, in genere a controllo pubblico, raggruppati per ambiti territoriali ottimali. MM serve Milano città, Gruppo CAP la città metropolitana di Milano, Brianzacque gran parte della Brianza, Padania Acque la provincia di Cremona, A2A Ciclo Idrico parte di Brescia. La frammentazione è bilanciata da capacità di investimento mediamente buona.",
          "In Veneto il modello prevalente è quello del consorzio Viveracqua, che aggrega numerosi gestori regionali e consente economie di scala su acquisti, ricerca perdite e laboratori. La rete dei gestori veneti ha investito in modo importante negli ultimi anni anche in funzione della risposta al caso PFAS, e i tassi di sostituzione delle reti sono fra i migliori del Paese.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto in Veneto è ancora contaminata da PFAS?",
        a: "Gli acquedotti dell'area storicamente coinvolta in provincia di Vicenza, Verona e Padova sono dotati di sistemi di abbattimento e oggi erogano acqua conforme ai limiti vigenti. Dal 12 gennaio 2026 entreranno in vigore i nuovi limiti nazionali introdotti dal D.Lgs. 18/2023, che uniformeranno la situazione in tutta Italia.",
      },
      {
        q: "Quale regione fra Lombardia e Veneto ha l'acqua più dura?",
        a: "In media i valori sono simili, fra 25 e 40 °f in entrambe le regioni. La Lombardia ha mediamente valori leggermente più alti nelle pianure centrali, mentre il Veneto della pedemontana berica e dolomitica può presentare acque più dolci grazie alle sorgenti di alta qualità.",
      },
      {
        q: 'I nitrati sono un problema reale nella Pianura Padana lombarda e veneta?',
        a: "Sì, nelle falde superficiali di alcune aree agricole intensive le concentrazioni di nitrati sono storicamente elevate. I gestori adottano captazione da falda profonda, miscelazione e monitoraggio rinforzato. Al rubinetto i valori devono restare sotto il limite di 50 mg/L e nelle città principali sono in genere ampiamente inferiori.",
      },
      {
        q: 'Quanto costa più o meno la bolletta in Veneto rispetto alla Lombardia?',
        a: 'Il Veneto presenta tariffe medie leggermente superiori, fra 2,30 e 2,90 €/m³, contro 2,00-2,60 €/m³ della Lombardia. La differenza riflette i forti investimenti veneti degli ultimi anni anche in funzione della risposta al caso PFAS.',
      },
      {
        q: "Posso bere l'acqua del rubinetto a Milano e a Verona?",
        a: "Sì, in entrambe le città l'acqua del rubinetto è controllata, conforme ai limiti di legge e di norma può essere bevuta senza problemi. Eventuali aspetti di gusto o di residuo calcareo dipendono dalla durezza, non da problemi sanitari.",
      },
    ],
    ctaVariant: 'pfas',
    ctaContext:
      "Vivi in un'area del Veneto o della Lombardia storicamente interessata da PFAS o vuoi semplicemente verificare lo stato della tua acqua? Un'analisi specifica per PFAS sul campione prelevato a casa ti dà un quadro reale, oltre la media dell'acquedotto.",
    relatedSlugs: ['pianura-padana-acqua', 'nord-vs-sud-italia', 'emilia-romagna-vs-marche'],
  },

  {
    slug: 'lazio-vs-campania',
    title: 'Acqua Lazio vs Campania: confronto fra contesti vulcanico e appenninico',
    shortTitle: 'Acqua Lazio vs Campania: vulcanico vs appenninico',
    metaDescription:
      "Confronto fra l'acqua del rubinetto in Lazio e Campania: fluoruri e arsenico vulcanici, sorgenti calcaree appenniniche, durezza, gestori e qualità.",
    searchKeywords: [
      'acqua lazio campania',
      'acqua roma napoli',
      'fluoruri lazio',
      'acqua viterbo arsenico',
      'acqua rubinetto centro sud',
      'acqua campania qualità',
    ],
    regions: ['Lazio', 'Campania'],
    intro:
      "Lazio e Campania condividono il versante tirrenico centro-meridionale ma presentano due ambienti idrogeologici differenti, che si riflettono nella composizione dell'acqua del rubinetto. Il Lazio è in larga parte segnato dai distretti vulcanici dei Colli Albani, dei Monti Sabatini e dei Vulsini, con presenza naturale storicamente significativa di fluoruri e arsenico in alcune aree. La Campania attinge prevalentemente da sorgenti calcaree appenniniche di buona qualità, integrate da falde locali, con una rete però segnata da perdite e da una storia di gestione complessa. Il confronto, basato sul D.Lgs. 18/2023, evita giudizi assoluti.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Lazio', value: '20-35 °f (variabile)' },
          { region: 'Campania', value: '15-30 °f (medio-dolce/media)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Lazio', value: 'Sorgenti vulcaniche, sorgenti appenniniche, falde locali' },
          { region: 'Campania', value: 'Sorgenti appenniniche calcaree, falde profonde' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Lazio', value: 'Fluoruri e arsenico vulcanico (Viterbese), durezza locale' },
          { region: 'Campania', value: 'Perdite di rete, salinizzazione costiera, gestione frammentata' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Lazio', value: 'Acea ATO 2, Talete, Acea ATO 5' },
          { region: 'Campania', value: 'ABC Napoli, GORI, EVI, Alto Calore' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Lazio', value: '1,80-2,40 €/m³' },
          { region: 'Campania', value: '1,60-2,20 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: "Il sottosuolo: vulcanico in Lazio, calcareo in Campania",
        paragraphs: [
          "Il Lazio è uno dei contesti vulcanici più importanti d'Europa. I Colli Albani a sud di Roma, i Monti Sabatini a nord, i Vulsini nel Viterbese hanno generato suoli e falde che presentano in modo naturale concentrazioni non trascurabili di fluoruri e arsenico. Roma è alimentata in larga parte dalle sorgenti del Peschiera-Capore, di origine appenninica e di ottima qualità, mentre molti comuni della cintura vulcanica si servono di pozzi locali con caratteristiche idrochimiche più impegnative.",
          "La Campania attinge in larga parte dalla dorsale appenninica meridionale, con sorgenti calcaree fra cui il sistema del Serino, le sorgenti del Sele, il complesso del Matese. Si tratta di acque di buona qualità chimica, con mineralizzazione media e durezza spesso medio-bassa. Napoli e l'area metropolitana si servono in parte di queste sorgenti, integrate da pozzi e da altri schemi di adduzione.",
        ],
      },
      {
        heading: 'Fluoruri e arsenico: il caso del Viterbese',
        paragraphs: [
          "La provincia di Viterbo è stata per anni al centro di deroghe per superamento dei limiti di arsenico e fluoruri, in funzione della naturale presenza vulcanica di questi elementi. A partire dagli anni 2010 sono stati installati impianti di abbattimento, in particolare per l'arsenico, che hanno consentito di riportare la qualità dell'acqua erogata entro i limiti di legge nei comuni interessati. La normativa fissa il limite di arsenico a 10 µg/L e quello di fluoruro a 1,5 mg/L.",
          "Anche alcune aree dei Castelli Romani hanno presentato in passato concentrazioni elevate di fluoruri, con segnalazioni di fluorosi dentale localizzata. Il monitoraggio è oggi intensivo. La situazione nei comuni interessati richiede in alcuni casi pretrattamento, miscelazione con altre fonti o installazione di impianti dedicati. Roma città, servita prevalentemente da sorgenti appenniniche, non rientra fra le aree con criticità di arsenico o fluoruri.",
        ],
      },
      {
        heading: 'Sorgenti appenniniche campane',
        paragraphs: [
          "La Campania è ricca di sorgenti appenniniche di qualità: le sorgenti del Serino alimentano storicamente Napoli, quelle del Sele riforniscono la Puglia e parte della Campania attraverso schemi di adduzione, il complesso del Matese serve gran parte del Casertano. La composizione chimica è quella tipica delle acque calcaree, con durezza media, bicarbonati prevalenti e bassa presenza di elementi indesiderati.",
          "L'area vesuviana e flegrea presenta tuttavia caratteristiche idrochimiche particolari, con presenza locale di elementi di origine vulcanica e talvolta di componenti termali. I gestori adottano monitoraggio rinforzato in queste zone. Lungo la fascia costiera la sovra-estrazione dei pozzi ha causato in alcune aree fenomeni di salinizzazione, con incremento dei cloruri e del sodio.",
        ],
      },
      {
        heading: 'Reti idriche, perdite e gestori',
        paragraphs: [
          "Le reti idriche di Lazio e Campania presentano in alcune zone livelli di vetustà elevati. In Lazio le perdite di rete medie si collocano intorno al 40-45%, con picchi significativi in alcuni comuni minori; Acea ATO 2 ha avviato negli ultimi anni un piano di ricerca perdite e distrettualizzazione. In Campania le perdite sono spesso più alte, fra il 45 e oltre il 50% in molti contesti.",
          "I gestori sono diversi: in Lazio Acea opera nei due ATO principali, Talete nel Viterbese, altri gestori più piccoli altrove. In Campania ABC è il gestore pubblico di Napoli, GORI serve il Vesuviano e la Penisola sorrentina, EVI e Alto Calore servono altre aree. La frammentazione storica rende più complessi gli investimenti, ma la situazione sta gradualmente evolvendo.",
        ],
      },
      {
        heading: 'Roma e Napoli: due capoluoghi a confronto',
        paragraphs: [
          "Roma riceve acqua di alta qualità grazie alle sorgenti del Peschiera-Capore, che forniscono un'acqua oligominerale di origine appenninica, con bassa durezza e bassa mineralizzazione. La sostituzione progressiva delle vecchie tubazioni in piombo nei tratti privati resta uno dei principali fronti aperti, perché incide sulla qualità al rubinetto anche dove la rete pubblica eroga acqua conforme.",
          "Napoli viene servita da una miscela di sorgenti appenniniche e di acque locali. La qualità al rubinetto è in genere buona, con durezza medio-bassa e mineralizzazione media. Anche qui le vecchie tubazioni interne degli edifici storici possono incidere su parametri come piombo o ferro al punto d'uso, indipendentemente dalla qualità della rete pubblica.",
        ],
      },
    ],
    faqs: [
      {
        q: 'È vero che a Viterbo c\'è arsenico nell\'acqua?',
        a: 'La presenza naturale di arsenico nelle falde vulcaniche del Viterbese ha storicamente portato a deroghe. Negli ultimi anni sono stati installati impianti di abbattimento e oggi i comuni interessati erogano acqua conforme al limite di 10 µg/L. Il monitoraggio resta intensivo.',
      },
      {
        q: 'Posso bere l\'acqua del rubinetto a Roma?',
        a: 'Sì. Roma riceve acqua di sorgente di ottima qualità chimica, oligominerale e con bassa durezza. Un punto di attenzione resta la presenza eventuale di vecchie tubazioni in piombo nei tratti privati interni agli edifici, che può incidere sul parametro piombo al punto d\'uso.',
      },
      {
        q: 'Posso bere l\'acqua del rubinetto a Napoli?',
        a: 'Sì. L\'acqua erogata da ABC Napoli è generalmente di buona qualità, con durezza medio-bassa. Anche qui le tubazioni interne degli edifici storici possono incidere su alcuni parametri al rubinetto, in particolare nei palazzi più datati.',
      },
      {
        q: 'L\'acqua del Lazio è più dura di quella della Campania?',
        a: 'Dipende dalla zona. Nelle aree vulcaniche del Lazio la durezza può essere elevata, mentre Roma centro presenta valori medi grazie alle sorgenti appenniniche. La Campania, servita prevalentemente da sorgenti calcaree appenniniche, ha mediamente acque con durezza medio-bassa.',
      },
      {
        q: 'I fluoruri sono un problema nei Castelli Romani?',
        a: 'Storicamente alcune zone dei Castelli Romani hanno presentato concentrazioni elevate di fluoruri di origine vulcanica. Il monitoraggio è intensivo e dove necessario sono attivi miscelazione, pretrattamento o sostituzione delle fonti per garantire il rispetto del limite di 1,5 mg/L.',
      },
    ],
    ctaVariant: 'metalli-pesanti',
    ctaContext:
      "Se vivi in un\'area del Lazio vulcanico o in una zona della Campania con preoccupazioni su arsenico, fluoruri o metalli, un'analisi mirata su metalli pesanti e parametri inorganici del campione prelevato in casa permette di conoscere la situazione reale al tuo rubinetto.",
    relatedSlugs: ['nord-vs-sud-italia', 'sicilia-vs-sardegna', 'regione-con-acqua-migliore-italia'],
  },

  {
    slug: 'toscana-vs-umbria',
    title: 'Acqua Toscana vs Umbria: sorgenti centrali e differenze idrochimiche',
    shortTitle: 'Acqua Toscana vs Umbria: sorgenti centrali a confronto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto in Toscana e Umbria: sorgenti appenniniche, durezza, geotermia, gestori principali e qualità nelle città capoluogo.",
    searchKeywords: [
      'acqua toscana umbria',
      'qualità acqua toscana',
      'acqua firenze perugia',
      'acqua rubinetto centro italia',
      'sorgenti toscana umbria',
      'durezza acqua firenze',
    ],
    regions: ['Toscana', 'Umbria'],
    intro:
      "Toscana e Umbria sono regioni del centro Italia con un patrimonio idrico ricco e in parte simile, ma con caratteristiche idrochimiche distinte. La Toscana spazia da sorgenti appenniniche di ottima qualità a contesti geotermici come il Larderello e l'Amiata, dove la presenza di elementi naturali specifici impone monitoraggi rinforzati. L'Umbria si appoggia in modo significativo alle sorgenti del Nera, del Topino e del sistema del Trasimeno, con qualità mediamente alta nelle aree montane e collinari. Il confronto evita giudizi assoluti e si fonda sul D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Toscana', value: '15-30 °f (medio-dolce/media)' },
          { region: 'Umbria', value: '20-35 °f (media)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Toscana', value: 'Sorgenti appenniniche, falde alluvionali, geotermia locale' },
          { region: 'Umbria', value: 'Sorgenti appenniniche calcaree, falde alluvionali' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Toscana', value: 'Arsenico in aree geotermiche (Amiata), boro, mercurio storico' },
          { region: 'Umbria', value: 'Solfati e idrogeno solforato locale, durezza media' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Toscana', value: 'Publiacqua, Acquedotto del Fiora, ASA, GAIA, Nuove Acque' },
          { region: 'Umbria', value: 'Umbra Acque, VUS, SII Terni' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Toscana', value: '2,40-3,00 €/m³ (fra le più alte d\'Italia)' },
          { region: 'Umbria', value: '2,00-2,50 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Sorgenti e idrogeologia',
        paragraphs: [
          "La Toscana attinge da una pluralità di sorgenti appenniniche e dalle falde alluvionali della pianura. L'area fiorentina si serve in parte di acque dell'Arno trattate, di pozzi della piana e di sorgenti del Mugello. La Maremma e la zona dell'Amiata utilizzano sorgenti dell'omonimo monte, di natura vulcanica, con caratteristiche idrochimiche specifiche. La costa è servita da una combinazione di sorgenti e pozzi, con criticità locali di salinizzazione.",
          "L'Umbria gode di sorgenti appenniniche calcaree di ottima qualità, in particolare nell'area del Nera e nella dorsale orientale. Perugia è alimentata da una combinazione di sorgenti e pozzi che assicurano un'acqua di mineralizzazione media. La zona del Trasimeno presenta caratteristiche più complesse legate al bacino lacustre. Le acque carsiche dell'area di Foligno e Spoleto sono fra le migliori della regione.",
        ],
      },
      {
        heading: 'Geotermia e arsenico in Toscana',
        paragraphs: [
          "L'area dell'Amiata e zone limitrofe della Toscana presentano la naturale presenza di arsenico, boro e altri elementi legati all'attività geotermica e vulcanica del passato. Alcuni comuni dell'area sono stati soggetti negli scorsi anni a deroghe per superamento del limite di arsenico. Sono stati installati impianti di abbattimento e oggi gli acquedotti coinvolti erogano acqua conforme al limite di 10 µg/L.",
          "L'area geotermica del Larderello è caratterizzata da emissioni naturali ma l'acquedotto attinge da fonti diverse, monitorate. Le concentrazioni di mercurio nelle falde, retaggio storico anche dell'attività mineraria del Monte Amiata, sono oggetto di monitoraggio specifico. Le città principali come Firenze, Pisa, Siena non rientrano in aree con criticità di arsenico geotermico.",
        ],
      },
      {
        heading: 'Sorgenti dell\'Umbria: una qualità mediamente alta',
        paragraphs: [
          "L'Umbria può vantare alcune fra le sorgenti più qualitative del centro Italia, in particolare nell'area della Valnerina e della dorsale appenninica orientale. Le sorgenti del Nera e del Velino, condivise con il Lazio, alimentano sia acquedotti locali sia, attraverso schemi di adduzione, parte del territorio romano. Le caratteristiche idrochimiche sono quelle tipiche delle acque calcaree, con mineralizzazione media e bassa presenza di elementi indesiderati.",
          "Il sisma del 2016 nel centro Italia ha modificato il regime di alcune sorgenti dell'area di Norcia, riducendone temporaneamente la portata o alterandone la composizione. I gestori hanno attivato fonti alternative per garantire continuità di servizio. Oggi la situazione è in larga parte stabilizzata, anche se il monitoraggio resta rinforzato.",
        ],
      },
      {
        heading: 'Firenze e Perugia: acqua nelle città capoluogo',
        paragraphs: [
          "Firenze è servita da Publiacqua con una miscela di acque superficiali dell'Arno trattate e di pozzi della piana. La qualità al rubinetto è conforme, con durezza media e mineralizzazione media. Il sapore può variare leggermente fra zone della città a seconda della miscela. La Toscana presenta tariffe medie fra le più alte d'Italia.",
          "Perugia è servita da Umbra Acque con acque prevalentemente di sorgente e di pozzo, con durezza media e ottima qualità chimica. Il costo della bolletta è mediamente più basso rispetto alla Toscana. Anche in Umbria, come ovunque, eventuali criticità al rubinetto possono dipendere dalle tubazioni interne degli edifici storici.",
        ],
      },
      {
        heading: "Durezza, sapore e percezione degli utenti",
        paragraphs: [
          "Toscana e Umbria si collocano in un range di durezza medio, fra 15 e 35 °f, con valori più alti nelle aree di pianura. La percezione del sapore dell'acqua dipende da molti fattori: residuo fisso, equilibrio fra bicarbonati e cloruri, eventuale presenza di clorazione. Entrambe le regioni hanno acque ben accettate dal pubblico nelle città principali, con isole di scetticità legate ad aree storicamente problematiche.",
          "In Toscana l'attenzione del consumatore è alta nelle zone dell'Amiata per arsenico, in alcune aree costiere per salinizzazione. In Umbria la fiducia nell'acqua del rubinetto è mediamente alta, complice la prevalenza di acque di sorgente. Resta valida la raccomandazione di consultare il rapporto di prova del proprio acquedotto e, in caso di dubbi specifici, di analizzare un campione del proprio punto d'uso.",
        ],
      },
    ],
    faqs: [
      {
        q: 'È vero che nell\'area dell\'Amiata c\'è arsenico nell\'acqua?',
        a: "La presenza naturale di arsenico è legata alle origini geotermiche e vulcaniche dell'area. Negli anni passati alcuni comuni sono stati soggetti a deroghe. Oggi sono attivi impianti di abbattimento e l'acqua erogata è conforme al limite di 10 µg/L.",
      },
      {
        q: 'L\'acqua di Perugia è di buona qualità?',
        a: "Sì. Umbra Acque serve Perugia con acque prevalentemente di sorgente, di durezza media e ottima composizione chimica. Le analisi pubblicate dal gestore mostrano conformità ampia rispetto ai limiti di legge.",
      },
      {
        q: 'Posso bere l\'acqua del rubinetto a Firenze?',
        a: "Sì. L'acqua erogata da Publiacqua è conforme ai limiti di legge. Eventuali differenze di sapore fra zone della città dipendono dalla miscela di fonti utilizzate e dalla durezza. Non risultano criticità sanitarie nella distribuzione urbana.",
      },
      {
        q: 'Quale fra Toscana e Umbria ha l\'acqua più dolce?',
        a: "In media le due regioni sono simili. La Toscana costiera ha valori medio-bassi, l'Umbria appenninica presenta acque con durezza media. Le sorgenti carsiche di entrambe le regioni offrono acque di buona qualità.",
      },
      {
        q: 'Perché la bolletta dell\'acqua in Toscana è alta?',
        a: "La Toscana ha storicamente tariffe medie fra le più alte d'Italia, riflesso di una struttura tariffaria che incorpora investimenti significativi sulla rete e specifici costi di trattamento. Anche la depurazione e il sollevamento incidono.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vuoi sapere com'è davvero l'acqua del rubinetto a casa tua in Toscana o in Umbria, oltre le medie comunali? Un'analisi completa del campione prelevato al punto d'uso fornisce un quadro chiaro dei parametri rilevanti per la tua zona.",
    relatedSlugs: ['lazio-vs-campania', 'piemonte-vs-liguria', 'regione-con-acqua-migliore-italia'],
  },

  {
    slug: 'piemonte-vs-liguria',
    title: 'Acqua Piemonte vs Liguria: alpina contro appenninica costiera',
    shortTitle: 'Acqua Piemonte vs Liguria: alpina vs appenninica',
    metaDescription:
      "Confronto fra l'acqua del rubinetto in Piemonte e Liguria: sorgenti alpine, falda padana, contesto appenninico costiero, cromo storico e gestori.",
    searchKeywords: [
      'acqua piemonte liguria',
      'acqua torino genova',
      'cromo torino',
      'acqua rubinetto nord ovest',
      'qualità acqua piemonte',
      'acqua liguria qualità',
    ],
    regions: ['Piemonte', 'Liguria'],
    intro:
      "Piemonte e Liguria condividono il versante nord-occidentale del Paese ma differiscono profondamente per geografia idrica. Il Piemonte, ai piedi delle Alpi, dispone di sorgenti alpine di buona qualità e di un'ampia falda padana, con criticità storiche legate a contaminazioni industriali in alcune aree. La Liguria, stretta fra Appennino e Tirreno, ha una geografia idrica più frammentata e fragile, con acqua spesso di sorgente ma sottoposta a stress per perdite, vetustà delle reti e cambiamenti climatici. Questo confronto si fonda sul D.Lgs. 18/2023 e mantiene un tono equilibrato.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Piemonte', value: '15-35 °f (variabile)' },
          { region: 'Liguria', value: '15-30 °f (medio-dolce/media)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Piemonte', value: 'Sorgenti alpine, falda padana, laghi' },
          { region: 'Liguria', value: 'Sorgenti appenniniche, invasi, falde di costa' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Piemonte', value: 'Cromo esavalente area torinese, nitrati, solventi industriali' },
          { region: 'Liguria', value: 'Perdite di rete elevate, scarsità in siccità, salinizzazione costiera' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Piemonte', value: 'SMAT, AMC, ACDA, Acqua Novara.VCO' },
          { region: 'Liguria', value: 'IRETI, Acquedotto De Ferrari Galliera, MEDIRETE, IREN' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Piemonte', value: '1,90-2,40 €/m³' },
          { region: 'Liguria', value: '2,20-2,80 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Geografia idrica: due mondi a confronto',
        paragraphs: [
          "Il Piemonte è una delle regioni più ricche d'acqua d'Italia per disponibilità di risorse: l'arco alpino occidentale alimenta torrenti e sorgenti di ottima qualità, mentre la falda padana copre il fabbisogno di buona parte della pianura. Torino è servita da una combinazione di sorgenti alpine e pozzi della piana, con qualità in genere buona. Le criticità storiche si concentrano in alcune aree industriali ben individuate.",
          "La Liguria è una regione idricamente fragile, con risorse complessivamente limitate e fortemente dipendenti dalle piogge. Le sorgenti appenniniche del versante padano alimentano la riviera, integrate da invasi e da alcuni schemi di trasferimento. La frammentazione orografica rende complessa la gestione e la siccità è una criticità ricorrente. La qualità chimica al rubinetto resta in genere buona.",
        ],
      },
      {
        heading: 'Cromo esavalente: il caso storico dell\'area torinese',
        paragraphs: [
          "L'area metropolitana di Torino ha conosciuto in passato segnalazioni di cromo esavalente nelle falde superficiali di alcuni comuni, legate ad attività industriali storiche, fra cui il caso noto del comune di Acerbi e di alcune aree della cintura. SMAT ha attivato negli anni piani di monitoraggio intensivo e installato sistemi di abbattimento dove necessario. Oggi i valori al rubinetto si mantengono al di sotto del limite di legge, fissato a 50 µg/L per il cromo totale.",
          "Il caso ha portato a un dibattito pubblico significativo sulla necessità di introdurre un limite specifico per il cromo esavalente, frazione più rilevante dal punto di vista tossicologico. Il D.Lgs. 18/2023 mantiene il limite sul cromo totale e prevede approfondimenti specifici dove necessario. Le città principali del Piemonte erogano oggi acqua conforme.",
        ],
      },
      {
        heading: 'Risorsa fragile e perdite di rete in Liguria',
        paragraphs: [
          "La Liguria presenta livelli di perdita di rete fra i più alti d'Italia in diverse aree, con valori che superano in alcuni casi il 50%. Le cause sono molteplici: vetustà delle reti, conformazione orografica che impone pressioni elevate, frammentazione gestionale storica. Le grandi siccità degli ultimi anni hanno aggravato la pressione sulla risorsa in alcune zone, con razionamenti notturni in comuni minori.",
          "La qualità chimica al rubinetto resta in genere buona grazie alla prevalenza di acque di sorgente appenninica e di invasi. Lungo la costa, in alcune aree, la sovra-estrazione di pozzi può portare a fenomeni di intrusione salina con incremento di cloruri e sodio. Il monitoraggio è rinforzato in queste zone.",
        ],
      },
      {
        heading: 'Torino e Genova: due acquedotti urbani',
        paragraphs: [
          "Torino è servita da SMAT con una combinazione di acque alpine e pozzi della piana. La qualità è buona, con durezza variabile a seconda del quartiere. SMAT è un gestore con tradizione di forte investimento e monitoraggio capillare, con pubblicazione mensile dei dati delle analisi. La rete è in buone condizioni nei distretti urbani principali.",
          "Genova è servita prevalentemente da IRETI con acque di sorgente appenninica e invasi. La qualità al rubinetto è in genere buona, con durezza medio-bassa. Le condizioni della rete sono eterogenee fra centro e quartieri periferici, con investimenti in corso per ridurre le perdite. La tariffa è mediamente più alta rispetto a Torino, riflesso della complessità della distribuzione.",
        ],
      },
      {
        heading: 'Durezza e mineralizzazione',
        paragraphs: [
          "In Piemonte la durezza varia molto: le acque alpine pure possono presentare valori molto bassi, sotto i 10 °f, mentre i pozzi della pianura raggiungono i 30-35 °f. Torino città si colloca in genere fra 15 e 25 °f. In Liguria i valori medi sono fra 15 e 30 °f, con punte più alte nelle aree calcaree. La mineralizzazione è in genere media in entrambe le regioni.",
          "Una bassa durezza, tipica di alcune acque alpine piemontesi, rende l'acqua molto gradevole al palato ma può essere leggermente più aggressiva nei confronti di tubazioni metalliche di vecchia generazione, in particolare se non sono installati dispositivi di neutralizzazione. Il problema riguarda però l'impianto privato dell'edificio, non la qualità dell'acqua erogata dal gestore.",
        ],
      },
    ],
    faqs: [
      {
        q: 'È ancora un problema il cromo nell\'acqua di Torino?',
        a: "I valori di cromo totale al rubinetto di Torino e dei comuni interessati si mantengono al di sotto del limite di legge di 50 µg/L. SMAT ha installato sistemi di abbattimento nelle aree con storia di contaminazione e pubblica dati di monitoraggio. Il dibattito su un eventuale limite specifico per il cromo esavalente resta aperto a livello nazionale.",
      },
      {
        q: 'Perché in Liguria ci sono spesso problemi di siccità?',
        a: "La Liguria ha risorse idriche limitate per la conformazione orografica e dipende molto dalle precipitazioni. Le perdite di rete elevate, la frammentazione gestionale storica e i cambiamenti climatici aggravano la situazione. La qualità chimica al rubinetto resta in genere buona.",
      },
      {
        q: 'Posso bere l\'acqua del rubinetto a Torino e a Genova?',
        a: "Sì. Entrambe le città erogano acqua conforme ai limiti di legge. SMAT a Torino pubblica analisi mensili dettagliate; IRETI a Genova fornisce dati sulle principali fonti. Eventuali criticità al rubinetto dipendono in genere dalle tubazioni interne degli edifici.",
      },
      {
        q: 'Quanto è dura l\'acqua a Torino?',
        a: "La durezza dell'acqua di Torino città si colloca tipicamente fra 15 e 25 °f, con variazioni fra quartieri a seconda della miscela di fonti utilizzate. È un valore di durezza media, simile a quello di molte capitali alpine.",
      },
      {
        q: 'L\'acqua in Liguria è più dolce di quella in Piemonte?',
        a: "In media le due regioni si collocano su livelli simili, con valori fra 15 e 30 °f. Alcune sorgenti alpine piemontesi pure presentano valori molto bassi, sotto i 10 °f, mentre i pozzi padani arrivano a 30-35 °f. In Liguria la durezza è più uniformemente medio-bassa.",
      },
    ],
    ctaVariant: 'metalli-pesanti',
    ctaContext:
      "Se vivi nell\'area torinese o in una zona del Piemonte o della Liguria con preoccupazioni su metalli o residui industriali, un'analisi mirata sui metalli pesanti del campione prelevato in casa permette di conoscere lo stato reale della tua acqua al punto d\'uso.",
    relatedSlugs: ['lombardia-vs-veneto', 'pianura-padana-acqua', 'regione-con-acqua-migliore-italia'],
  },

  {
    slug: 'emilia-romagna-vs-marche',
    title: 'Acqua Emilia-Romagna vs Marche: pianura padana e collina adriatica',
    shortTitle: 'Acqua Emilia-Romagna vs Marche: pianura vs collina',
    metaDescription:
      "Confronto fra l'acqua del rubinetto in Emilia-Romagna e Marche: pianura padana, sorgenti adriatiche, durezza, gestori e qualità nei capoluoghi principali.",
    searchKeywords: [
      'acqua emilia romagna marche',
      'qualità acqua bologna ancona',
      'acqua rubinetto adriatica',
      'durezza acqua emilia romagna',
      'acqua marche qualità',
      'acqua bologna rubinetto',
    ],
    regions: ['Emilia-Romagna', 'Marche'],
    intro:
      "Emilia-Romagna e Marche si affacciano entrambe sull'Adriatico ma hanno strutture idriche profondamente diverse. L'Emilia-Romagna combina la grande Pianura Padana, con i suoi noti problemi di nitrati e durezza, con l'arco appenninico, da cui scendono fiumi e sorgenti. Le Marche sono dominate dalle colline appenniniche, con sorgenti calcaree di buona qualità e una fascia costiera caratterizzata da falde alluvionali. Il confronto si fonda sul D.Lgs. 18/2023 e tiene conto delle peculiarità delle due regioni.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Emilia-Romagna', value: '25-40 °f (medio-dura/dura)' },
          { region: 'Marche', value: '20-35 °f (media)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Emilia-Romagna', value: 'Falda padana, fiumi appenninici, invasi' },
          { region: 'Marche', value: 'Sorgenti appenniniche, falde alluvionali costiere' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Emilia-Romagna', value: 'Nitrati nelle falde superficiali, durezza, ferro e manganese locali' },
          { region: 'Marche', value: 'Salinizzazione costiera, nitrati locali, perdite di rete' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Emilia-Romagna', value: 'Hera, IRETI, Romagna Acque' },
          { region: 'Marche', value: 'Multiservizi, ASTEA, ATA Rifiuti, Viva Servizi' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Emilia-Romagna', value: '2,30-2,80 €/m³' },
          { region: 'Marche', value: '2,00-2,50 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Pianura padana emiliana e collina marchigiana',
        paragraphs: [
          "L'Emilia-Romagna combina due mondi: la grande Pianura Padana orientale, ricca di falde profonde e superficiali ma esposta alla pressione agricola e zootecnica, e l'arco appenninico, da cui scendono fiumi importanti e sorgenti di buona qualità. La Romagna si serve in misura significativa di acque superficiali captate, trattate negli impianti di Romagna Acque. L'Emilia centro-occidentale utilizza prevalentemente acque di falda.",
          "Le Marche hanno una struttura idrica dominata dall'Appennino: sorgenti calcaree di buona qualità in tutta la dorsale, falde alluvionali nelle vallate principali che scendono verso l'Adriatico. La fascia costiera utilizza in parte pozzi nelle falde di costa, con criticità locali di salinizzazione. La rete è frammentata fra diversi gestori provinciali.",
        ],
      },
      {
        heading: 'Nitrati: una criticità storica della Pianura Padana emiliana',
        paragraphs: [
          "L'Emilia-Romagna ha conosciuto in passato situazioni di concentrazione elevata di nitrati nelle falde superficiali di alcune aree, in particolare nelle province di Modena, Reggio Emilia e Parma, caratterizzate da agricoltura e zootecnia intensive. La risposta dei gestori è stata l'utilizzo di falda profonda, la miscelazione con acque a basso contenuto di nitrati e in alcuni casi il trattamento. I valori al rubinetto delle città principali si mantengono ampiamente sotto il limite di 50 mg/L.",
          "Le Marche presentano situazioni di nitrati più localizzate, in particolare nelle vallate agricole della parte centro-meridionale. La presenza di sorgenti appenniniche di buona qualità consente in genere ai gestori di mantenere valori contenuti al rubinetto attraverso miscelazione. Anche qui il monitoraggio è capillare.",
        ],
      },
      {
        heading: 'Sorgenti appenniniche marchigiane',
        paragraphs: [
          "Le Marche dispongono di un patrimonio di sorgenti appenniniche calcaree di qualità mediamente alta. Le sorgenti dei Sibillini, della dorsale umbro-marchigiana, dell'area di Frasassi forniscono acque oligominerali o mediominerali di ottima composizione chimica. Gli acquedotti delle città di mezza costa, come Macerata, Fabriano e Pesaro, beneficiano in parte di queste fonti.",
          "Il sisma del 2016 ha modificato il regime di alcune sorgenti nell'area di Visso e Castelsantangelo sul Nera, richiedendo riconfigurazione degli schemi di adduzione. Oggi la situazione è in larga parte stabilizzata. Le sorgenti marchigiane sono inoltre integrate da pozzi nelle pianure costiere, con qualità più variabile.",
        ],
      },
      {
        heading: 'Bologna, Ancona e gli altri capoluoghi',
        paragraphs: [
          "Bologna è servita da Hera con una combinazione di acque di falda, acque dai fiumi appenninici trattate e di sorgenti. La durezza è medio-alta, fra 25 e 35 °f a seconda della zona della città. La qualità al rubinetto è conforme e ampiamente monitorata. Hera è uno dei gestori più strutturati d'Italia per capacità di investimento e laboratorio.",
          "Ancona è servita da Viva Servizi con una combinazione di sorgenti appenniniche e pozzi della valle dell'Esino. La durezza è media, intorno a 25-30 °f. La qualità chimica e microbiologica al rubinetto è in genere buona. Le altre città marchigiane sono servite da gestori provinciali con caratteristiche diverse fra coste e zone interne.",
        ],
      },
      {
        heading: 'Salinizzazione costiera e perdite di rete',
        paragraphs: [
          "Lungo la fascia adriatica entrambe le regioni presentano criticità locali di salinizzazione delle falde di costa, accentuate dalla sovra-estrazione e dai cambiamenti climatici. Le Marche, con una densità urbana costiera importante, ne sono interessate in alcune aree fra Ancona e San Benedetto del Tronto. L'Emilia-Romagna, lungo la riviera ravennate e ferrarese, conosce fenomeni analoghi.",
          "Le perdite di rete in Emilia-Romagna sono mediamente più basse, intorno al 25-30%, grazie alla capacità di investimento di Hera e Romagna Acque. Nelle Marche le perdite sono mediamente più alte, fra il 35 e il 45%, con investimenti in corso per ridurle. La qualità chimica al rubinetto non è influenzata dalle perdite, mentre il costo del servizio sì.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua di Bologna è dura?',
        a: "Sì, l'acqua di Bologna presenta una durezza medio-alta, in genere fra 25 e 35 °f a seconda della zona. È un valore tipico delle acque emiliane di pianura. La durezza non è un parametro di salubrità ma può creare incrostazioni in caldaie ed elettrodomestici.",
      },
      {
        q: 'I nitrati sono un problema in Emilia-Romagna?',
        a: "Storicamente sì, in particolare nelle falde superficiali delle aree agricole intensive. I gestori, in primis Hera, captano da falda profonda e adottano miscelazione e monitoraggio rinforzato. Al rubinetto i valori si mantengono ampiamente sotto il limite di 50 mg/L nelle città principali.",
      },
      {
        q: 'Posso bere l\'acqua del rubinetto ad Ancona?',
        a: "Sì. L'acqua erogata da Viva Servizi è conforme ai limiti di legge e presenta in genere durezza media e ottima composizione chimica grazie alle sorgenti appenniniche utilizzate.",
      },
      {
        q: 'Le sorgenti delle Marche sono state danneggiate dal terremoto del 2016?',
        a: "Alcune sorgenti dell'area di Visso e Castelsantangelo sul Nera hanno modificato il regime dopo gli eventi sismici. I gestori hanno riconfigurato gli schemi di adduzione e oggi la situazione è in larga parte stabilizzata, con qualità conforme.",
      },
      {
        q: 'Quale fra Emilia-Romagna e Marche ha l\'acqua più dolce?',
        a: "Le Marche presentano in media valori di durezza più bassi, fra 20 e 35 °f, contro 25-40 °f dell'Emilia-Romagna. La differenza è dovuta alla prevalenza di sorgenti appenniniche marchigiane rispetto alle acque di pianura emiliana.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Se vuoi conoscere la composizione reale dell'acqua del tuo rubinetto in Emilia-Romagna o nelle Marche, un'analisi completa del campione prelevato a casa fornisce un quadro chiaro di durezza, nitrati e altri parametri rilevanti.",
    relatedSlugs: ['lombardia-vs-veneto', 'pianura-padana-acqua', 'toscana-vs-umbria'],
  },

  {
    slug: 'puglia-vs-basilicata',
    title: 'Acqua Puglia vs Basilicata: trasporto idrico fra regioni dell\'Acquedotto Pugliese',
    shortTitle: 'Acqua Puglia vs Basilicata: trasporto idrico',
    metaDescription:
      "Confronto fra l'acqua del rubinetto in Puglia e Basilicata: sorgenti lucane, Acquedotto Pugliese, trasporto idrico, durezza e qualità nei capoluoghi.",
    searchKeywords: [
      'acqua puglia basilicata',
      'acquedotto pugliese',
      'acqua bari potenza',
      'qualità acqua puglia',
      'sorgenti basilicata acqua',
      'acqua rubinetto sud italia',
    ],
    regions: ['Puglia', 'Basilicata'],
    intro:
      "Il rapporto idrico fra Puglia e Basilicata è uno dei più peculiari d'Italia: gran parte dell'acqua che scorre nei rubinetti pugliesi nasce in Basilicata, captata da sorgenti lucane e dagli invasi del Pertusillo e del Monte Cotugno, e trasportata attraverso il sistema dell'Acquedotto Pugliese. Questo legame strutturale rende il confronto fra le due regioni più articolato rispetto ad altri. La Basilicata dispone della risorsa originaria, la Puglia gestisce una distribuzione capillare su un territorio molto vasto e siccitoso. Il confronto si basa sul D.Lgs. 18/2023.",
    comparisonTable: [
      {
        label: 'Durezza media',
        values: [
          { region: 'Puglia', value: '20-35 °f (media)' },
          { region: 'Basilicata', value: '15-25 °f (medio-dolce)' },
        ],
      },
      {
        label: 'Origine prevalente',
        values: [
          { region: 'Puglia', value: 'Sorgenti lucane, invasi, falda carsica locale' },
          { region: 'Basilicata', value: 'Sorgenti appenniniche locali, invasi' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Puglia', value: 'Lunghezza adduzione, salinizzazione falda carsica, siccità' },
          { region: 'Basilicata', value: 'Distribuzione frammentata, perdite di rete' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Puglia', value: 'Acquedotto Pugliese (gestore unico)' },
          { region: 'Basilicata', value: 'Acquedotto Lucano' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Puglia', value: '1,80-2,40 €/m³' },
          { region: 'Basilicata', value: '1,50-2,00 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: "L'Acquedotto Pugliese: una storia di trasporto idrico",
        paragraphs: [
          "L'Acquedotto Pugliese, inaugurato nei primi anni del Novecento, è una delle infrastrutture idriche più imponenti d'Europa. Nasce per fronteggiare la storica scarsità di risorse idriche autoctone della Puglia, attingendo acqua dalle sorgenti lucane del Sele e del Calore, dagli invasi del Pertusillo e del Monte Cotugno e da altre fonti dell'area appenninica meridionale. Oggi serve gran parte della popolazione pugliese.",
          "Il sistema si compone di centinaia di chilometri di gallerie e condotte che attraversano l'Appennino e la Murgia, con sistemi di sollevamento e impianti di trattamento. La gestione unica regionale, affidata ad Acquedotto Pugliese S.p.A., consente economie di scala importanti su monitoraggio e investimenti. La rete capillare distributiva supera i 12.000 km.",
        ],
      },
      {
        heading: 'Sorgenti lucane: la risorsa originaria',
        paragraphs: [
          "La Basilicata è una delle regioni più ricche d'acqua del Sud Italia in termini di portata sorgentizia. Le sorgenti del Sele e del Calore, condivise con la Campania, forniscono acque calcaree appenniniche di ottima qualità. Gli invasi del Pertusillo e del Monte Cotugno, fra i più capienti del Sud, accumulano acqua poi distribuita a Puglia e in parte alla stessa Basilicata.",
          "Le sorgenti lucane presentano caratteristiche idrochimiche tipiche delle acque calcaree appenniniche: durezza medio-bassa, mineralizzazione media, bassa presenza di elementi indesiderati. La gestione regionale è affidata ad Acquedotto Lucano per la distribuzione interna. Il bilancio fra utilizzo locale e esportazione interregionale è regolato da specifici accordi.",
        ],
      },
      {
        heading: 'Falda carsica pugliese e salinizzazione',
        paragraphs: [
          "Oltre all'acqua importata, la Puglia dispone di una falda carsica autoctona, particolarmente nelle aree della Murgia e del Salento. Si tratta di una falda di acqua dolce che galleggia su acque salate di intrusione marina, con un equilibrio fragile. La sovra-estrazione per usi agricoli e industriali ha portato in molte aree del Salento a fenomeni di salinizzazione progressiva.",
          "Per l'uso potabile la Puglia preferisce in genere l'acqua importata, di migliore qualità chimica. La falda carsica viene utilizzata in modo selettivo. Le aree del Salento più colpite dalla salinizzazione possono presentare cloruri e sodio elevati nelle acque di pozzo, mentre l'acqua di rete fornita da Acquedotto Pugliese mantiene una composizione più stabile.",
        ],
      },
      {
        heading: 'Lunghezza dell\'adduzione e qualità al rubinetto',
        paragraphs: [
          "Un aspetto specifico del sistema pugliese è la lunghezza dell'adduzione: l'acqua percorre decine o centinaia di chilometri prima di arrivare al rubinetto del consumatore. Questo richiede sistemi di disinfezione attentamente calibrati per garantire la sicurezza microbiologica sull'intero percorso, con conseguente sapore di cloro percepibile in alcune zone. La qualità chimica resta nei limiti di legge.",
          "Acquedotto Pugliese pubblica analisi periodiche per i comuni serviti. La conformità ai parametri del D.Lgs. 18/2023 è in genere ampia. Il tema della disinfezione è oggetto di studi continui per ottimizzare il rapporto fra sicurezza microbiologica e qualità organolettica. Anche in Basilicata, dove la distribuzione è più breve, la disinfezione è presente ma con dosaggi tipicamente più contenuti.",
        ],
      },
      {
        heading: 'Bari e Potenza: due capoluoghi a confronto',
        paragraphs: [
          "Bari è servita da Acquedotto Pugliese con acque prevalentemente di origine lucana. La durezza è in genere medio-alta, fra 25 e 35 °f, la mineralizzazione è media. La qualità chimica e microbiologica al rubinetto è conforme. Il sapore di cloro può essere percepito in alcune zone, conseguenza della disinfezione necessaria per la lunga adduzione.",
          "Potenza è servita da Acquedotto Lucano con acque locali di sorgente appenninica. La durezza è in genere più bassa, fra 15 e 25 °f, e il sapore è in genere molto gradevole. La distribuzione è più breve e i dosaggi di disinfettante più contenuti. La qualità complessiva è ottima, in linea con la generale buona qualità delle acque sorgentizie lucane.",
        ],
      },
    ],
    faqs: [
      {
        q: 'È vero che l\'acqua di Bari viene dalla Basilicata?',
        a: "Sì, in larga parte. Acquedotto Pugliese capta acqua da sorgenti e invasi lucani e la trasporta verso la Puglia attraverso un sistema infrastrutturale storico. Una quota minore proviene da fonti locali pugliesi.",
      },
      {
        q: 'Perché l\'acqua in Puglia sa di cloro?',
        a: "La lunga adduzione richiede disinfezione attentamente calibrata per garantire sicurezza microbiologica sull'intero percorso. Questo può comportare la percezione di sapore di cloro in alcune zone. La quantità è entro i limiti e l'acqua è sicura.",
      },
      {
        q: 'Qual è la durezza dell\'acqua di Potenza?',
        a: "L'acqua di Potenza presenta una durezza medio-bassa, in genere fra 15 e 25 °f. È un valore tipico delle acque sorgentizie appenniniche lucane e rende l'acqua particolarmente gradevole al palato.",
      },
      {
        q: 'Quanto si paga la bolletta in Puglia rispetto alla Basilicata?',
        a: "La Puglia ha tariffe medie fra 1,80 e 2,40 €/m³, la Basilicata fra 1,50 e 2,00 €/m³. La differenza riflette la complessità del sistema di adduzione pugliese, fra i più estesi d'Europa, che incide sui costi di gestione.",
      },
      {
        q: 'La falda del Salento è salinizzata?',
        a: "In alcune aree del Salento la sovra-estrazione per usi agricoli e industriali ha portato a una progressiva intrusione marina nella falda carsica. Per uso potabile la Puglia preferisce in genere l'acqua importata dalla Basilicata, di migliore qualità chimica.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vivi in Puglia o in Basilicata e vuoi conoscere lo stato reale dell'acqua del tuo rubinetto, oltre la media dell'acquedotto? Un'analisi completa del campione prelevato a casa fornisce un quadro chiaro per la tua specifica abitazione.",
    relatedSlugs: ['sicilia-vs-sardegna', 'nord-vs-sud-italia', 'regione-con-acqua-migliore-italia'],
  },

  {
    slug: 'sicilia-vs-sardegna',
    title: 'Acqua Sicilia vs Sardegna: due isole, due modelli idrici a confronto',
    shortTitle: 'Acqua Sicilia vs Sardegna: isole a confronto',
    metaDescription:
      "Confronto fra l'acqua del rubinetto in Sicilia e Sardegna: sorgenti vulcaniche, invasi, falde, gestori e qualità nei capoluoghi delle isole maggiori.",
    searchKeywords: [
      'acqua sicilia sardegna',
      'acqua palermo cagliari',
      'qualità acqua isole italia',
      'acqua rubinetto sicilia',
      'acqua sardegna qualità',
      'durezza acqua isole',
    ],
    regions: ['Sicilia', 'Sardegna'],
    intro:
      "Sicilia e Sardegna affrontano la sfida idrica con due modelli geografici molto diversi. La Sicilia ha l'Etna e altre aree vulcaniche che alimentano sorgenti di ottima qualità, integrate da invasi e falde, e una rete distribuiva frammentata fra molti gestori. La Sardegna si fonda su un sistema di invasi di grande capacità, integrato da falde profonde, con un servizio idrico in larga parte unificato sotto Abbanoa. Entrambe le regioni hanno conosciuto storiche difficoltà idriche legate a siccità e perdite di rete. Il confronto, basato sul D.Lgs. 18/2023, mantiene un tono equilibrato.",
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
          { region: 'Sardegna', value: 'Invasi, falde profonde, sorgenti minori' },
        ],
      },
      {
        label: 'Problematiche storiche tipiche',
        values: [
          { region: 'Sicilia', value: 'Perdite di rete elevate, intermittenza, salinizzazione costiera' },
          { region: 'Sardegna', value: 'Dipendenza dagli invasi, siccità, qualità organolettica' },
        ],
      },
      {
        label: 'Gestori principali',
        values: [
          { region: 'Sicilia', value: 'AMAP, AMG Energia, Caltaqua, EAS, gestione frammentata' },
          { region: 'Sardegna', value: 'Abbanoa (gestore unico)' },
        ],
      },
      {
        label: 'Costo medio bolletta',
        values: [
          { region: 'Sicilia', value: '1,50-2,20 €/m³' },
          { region: 'Sardegna', value: '1,80-2,40 €/m³' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Acque vulcaniche dell\'Etna',
        paragraphs: [
          "La Sicilia orientale dispone di una risorsa idrica di eccezionale qualità: le sorgenti vulcaniche dell'Etna. La massa basaltica del vulcano funziona come un enorme filtro naturale e le sorgenti che ne emergono presentano acque oligominerali di ottima composizione chimica, con bassa durezza e bassa presenza di elementi indesiderati. Catania e i comuni etnei beneficiano in larga parte di queste fonti.",
          "Le acque vulcaniche etnee sono inoltre alla base di alcune importanti acque minerali italiane. Per la rete acquedottistica, la gestione di queste sorgenti richiede attenzione alla protezione delle aree di ricarica e al monitoraggio dei parametri specifici dell'idrochimica vulcanica. La Sicilia occidentale, priva di vulcani attivi, si appoggia invece su invasi e sorgenti appenniniche.",
        ],
      },
      {
        heading: 'Sistema degli invasi sardo',
        paragraphs: [
          "La Sardegna ha sviluppato fin dagli anni del secondo dopoguerra un sistema di invasi di grande capacità per fronteggiare la scarsità di acque sorgentizie e la siccità ricorrente. Gli invasi del Liscia, del Posada, del Tirso, del Coghinas e altri compongono un sistema integrato che alimenta la rete idrica regionale. L'acqua trattenuta viene potabilizzata in impianti dedicati prima della distribuzione.",
          "Questo modello implica un trattamento più articolato rispetto alle acque di sorgente: filtrazione, sedimentazione, disinfezione, eventuale rimozione di sostanze organiche. La qualità al rubinetto è conforme ma il sapore può risentire del processo di potabilizzazione, soprattutto in alcuni periodi dell'anno. La siccità degli ultimi anni ha messo sotto pressione il sistema in diverse zone.",
        ],
      },
      {
        heading: 'Perdite di rete e siccità',
        paragraphs: [
          "Entrambe le isole presentano livelli di perdita di rete elevati. In Sicilia in alcune aree si superano il 50%, conseguenza della vetustà delle reti e della frammentazione storica della gestione. Molte zone della Sicilia conoscono ancora la pratica della distribuzione intermittente, con erogazione a giorni alterni e riempimento dei serbatoi privati domestici. Questo sistema, comune nelle isole, ha implicazioni sulla qualità microbiologica al punto d'uso.",
          "In Sardegna le perdite si attestano mediamente sotto la Sicilia ma sopra la media nazionale, fra il 40 e il 50% in molte aree. La siccità ricorrente, accentuata dai cambiamenti climatici, è una preoccupazione strutturale. Abbanoa investe in ricerca perdite e distrettualizzazione, con risultati graduali. La distribuzione continua è in genere garantita nelle città principali ma può subire restrizioni in periodi di stress idrico.",
        ],
      },
      {
        heading: 'Serbatoi domestici e qualità al punto d\'uso',
        paragraphs: [
          "La presenza diffusa di serbatoi domestici nelle abitazioni siciliane, conseguenza storica della distribuzione intermittente, costituisce un tema specifico per la qualità dell'acqua al rubinetto. I serbatoi privati richiedono manutenzione regolare, pulizia e disinfezione periodiche per evitare la proliferazione di carica microbica al punto d'uso. La responsabilità è del proprietario dell'immobile, non del gestore.",
          "Anche in alcune aree della Sardegna sono presenti serbatoi domestici, ma in misura minore. Per i residenti delle isole, l'analisi dell'acqua al rubinetto può fornire informazioni utili che vanno oltre il dato dell'acquedotto, in particolare sul fronte microbiologico. Il dato del gestore documenta la qualità in uscita dalla rete pubblica.",
        ],
      },
      {
        heading: 'Palermo e Cagliari: due capoluoghi insulari',
        paragraphs: [
          "Palermo è servita da AMAP con acque provenienti in larga parte dagli invasi e da sorgenti del Madonie. La durezza si colloca in genere fra 20 e 30 °f. La qualità al rubinetto è conforme ai limiti di legge, anche se in alcune zone della città permangono temi di pressione e di servizio. La rete è oggetto di un piano di investimento articolato.",
          "Cagliari è servita da Abbanoa con acque prevalentemente provenienti dagli invasi del sud Sardegna, potabilizzate negli impianti dedicati. La durezza è in genere fra 15 e 25 °f. La qualità chimica è conforme. Il sapore può variare nei diversi periodi dell'anno in funzione delle caratteristiche delle acque grezze e del trattamento.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua dell\'Etna è davvero di qualità superiore?',
        a: "Le sorgenti vulcaniche dell'Etna producono acque oligominerali di ottima qualità chimica, con bassa mineralizzazione e bassa durezza. Sono fra le migliori del Sud Italia. La rete distributiva può influire sulla qualità al rubinetto, ma la risorsa originaria è di alto pregio.",
      },
      {
        q: 'In Sicilia c\'è ancora la distribuzione a giorni alterni?',
        a: "In molte aree della Sicilia la distribuzione intermittente è ancora una realtà, conseguenza della vetustà delle reti e delle perdite. Le città principali hanno in genere servizio continuo. La presenza di serbatoi domestici rende fondamentale la loro pulizia regolare per la qualità microbiologica al rubinetto.",
      },
      {
        q: 'Abbanoa garantisce acqua di qualità in Sardegna?',
        a: "Abbanoa, gestore unico regionale, eroga acqua conforme ai limiti del D.Lgs. 18/2023 nelle aree servite. La provenienza prevalentemente da invasi richiede potabilizzazione articolata, con possibili variazioni di sapore stagionali. La qualità chimica al rubinetto è in genere conforme.",
      },
      {
        q: 'Posso bere l\'acqua del rubinetto a Palermo?',
        a: "Sì. L'acqua erogata da AMAP è conforme ai limiti di legge. Eventuali criticità possono dipendere dai serbatoi domestici dell'edificio, che vanno mantenuti puliti. Il dato del gestore è disponibile pubblicamente.",
      },
      {
        q: 'Quale fra Sicilia e Sardegna ha l\'acqua più dolce?',
        a: "In media le due isole presentano valori simili, fra 15 e 30 °f. Le acque vulcaniche etnee in Sicilia orientale e quelle di alcuni invasi sardi presentano durezza medio-bassa. Le acque calcaree appenniniche siciliane occidentali sono leggermente più dure.",
      },
    ],
    ctaVariant: 'microbiologica',
    ctaContext:
      "Se hai un serbatoio domestico in Sicilia o Sardegna, un'analisi microbiologica del campione prelevato al rubinetto è il modo più diretto per verificare lo stato igienico dell'acqua che esce dal tuo punto d'uso.",
    relatedSlugs: ['puglia-vs-basilicata', 'nord-vs-sud-italia', 'regione-con-acqua-migliore-italia'],
  },

  {
    slug: 'pianura-padana-acqua',
    title: 'Acqua nella Pianura Padana: nitrati, falda, agricoltura intensiva',
    shortTitle: 'Acqua Pianura Padana: nitrati e falda',
    metaDescription:
      "Acqua del rubinetto nella Pianura Padana: nitrati, falda profonda e superficiale, intensività agricola e zootecnica, deroghe storiche e qualità al rubinetto.",
    searchKeywords: [
      'acqua pianura padana',
      'nitrati padana',
      'falda padana acqua',
      'acqua agricola pianura',
      'qualità acqua pianura padana',
      'acqua rubinetto cremona mantova',
    ],
    regions: ['Pianura Padana'],
    intro:
      "La Pianura Padana è uno dei contesti idrici più complessi d'Italia. Estesa fra Piemonte, Lombardia, Veneto ed Emilia-Romagna, ospita una delle aree europee con più alta densità di allevamenti intensivi e di agricoltura industriale. Il risultato è una falda superficiale storicamente esposta ai nitrati e in alcune aree ad altri contaminanti agricoli. La risposta dei gestori si è basata sulla captazione da falda profonda, sulla miscelazione e sui trattamenti dove necessario. Al rubinetto dei consumatori i valori si mantengono in genere ampiamente entro i limiti del D.Lgs. 18/2023, ma le pressioni ambientali sull'origine della risorsa restano significative.",
    comparisonTable: [
      {
        label: 'Cremona',
        values: [
          { region: 'Cremona', value: 'Falda alluvionale, durezza 30-40 °f, nitrati controllati' },
        ],
      },
      {
        label: 'Mantova',
        values: [
          { region: 'Mantova', value: 'Falda alluvionale, durezza 25-35 °f, nitrati storicamente alti' },
        ],
      },
      {
        label: 'Parma',
        values: [
          { region: 'Parma', value: 'Pozzi profondi e collinari, durezza 20-30 °f' },
        ],
      },
      {
        label: 'Modena',
        values: [
          { region: 'Modena', value: 'Falda profonda, durezza 25-35 °f, monitoraggio rinforzato' },
        ],
      },
      {
        label: 'Reggio Emilia',
        values: [
          { region: 'Reggio Emilia', value: 'Falda profonda e collinare, durezza 25-35 °f' },
        ],
      },
      {
        label: 'Verona',
        values: [
          { region: 'Verona', value: 'Falda padana e risorgive, durezza 25-35 °f' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Una pianura, quattro regioni, una risorsa condivisa',
        paragraphs: [
          "La Pianura Padana è il più grande sistema idrogeologico del Paese. Si estende per oltre 46.000 chilometri quadrati fra Alpi e Appennini, ospita oltre 20 milioni di abitanti e concentra una parte rilevante dell'agricoltura, dell'allevamento e dell'industria italiani. La falda padana è in realtà una sequenza di acquiferi sovrapposti: una falda superficiale, esposta alle pressioni del suolo, e una serie di falde profonde, più protette, separate da strati impermeabili.",
          "La gestione dell'acqua potabile nella Pianura Padana è uno dei più grandi compiti di ingegneria sanitaria italiana. Gli acquedotti urbani delle grandi città padane attingono in genere alle falde profonde, di migliore qualità chimica. La falda superficiale è invece esposta a tutte le pressioni del suolo: fertilizzanti, deiezioni zootecniche, fitofarmaci, scarichi industriali storici.",
        ],
      },
      {
        heading: 'Nitrati: il parametro chiave',
        paragraphs: [
          "I nitrati sono il parametro che meglio rappresenta la condizione della Pianura Padana. Le falde superficiali di vaste aree, in particolare nelle province di Cremona, Mantova, Lodi, Modena, Reggio Emilia e Verona, presentano da decenni concentrazioni elevate. La direttiva nitrati europea ha definito intere parti della Pianura Padana come zone vulnerabili ai nitrati, con obblighi specifici per l'utilizzo agricolo.",
          "Per l'acqua potabile, il limite stabilito dal D.Lgs. 18/2023 è di 50 mg/L. I gestori adottano diverse strategie per garantire il rispetto del limite: captazione prevalente da falda profonda, miscelazione fra acque a diverso contenuto di nitrati, in alcuni casi trattamento per abbattere il parametro. Al rubinetto dei capoluoghi principali i valori sono in genere ampiamente sotto il limite.",
        ],
      },
      {
        heading: 'Falda profonda: la risposta storica dei gestori',
        paragraphs: [
          "L'utilizzo prevalente della falda profonda è la strategia principale dei gestori padani per garantire acqua di buona qualità. Le falde profonde, separate dalla superficie da strati impermeabili, sono in larga parte ricaricate da acque infiltratesi molto tempo fa e meno esposte alle pressioni recenti. Tuttavia il loro utilizzo intenso ha portato in alcune aree a fenomeni di abbassamento del livello piezometrico.",
          "La gestione sostenibile della falda profonda richiede equilibrio fra prelievi e ricarica naturale. In alcuni contesti i gestori hanno avviato studi e progetti di ricarica artificiale per ripristinare i livelli. La qualità della falda profonda è in genere ottima ma in alcuni casi può presentare concentrazioni elevate di ferro e manganese, che richiedono trattamento.",
        ],
      },
      {
        heading: "Cremona, Mantova, Parma, Modena, Reggio, Verona: città a confronto",
        paragraphs: [
          "Cremona si serve in larga parte di acque della falda alluvionale del Po, con durezza in genere fra 30 e 40 °f. Padania Acque garantisce il monitoraggio. Mantova ha una situazione storica di nitrati elevati nelle falde superficiali; oggi l'acqua erogata è conforme grazie a captazione da falda profonda e miscelazione. Parma attinge a una combinazione di pozzi profondi e fonti collinari, con qualità complessivamente buona.",
          "Modena e Reggio Emilia, servite da IRETI, utilizzano falde profonde e fonti collinari, con valori di nitrati al rubinetto in genere ampiamente inferiori al limite. Verona, servita da Acque Veronesi, utilizza acque della falda padana e risorgive, con buona qualità complessiva. Tutte queste città pubblicano periodicamente i dati delle analisi.",
        ],
      },
      {
        heading: 'PFAS e altri contaminanti emergenti',
        paragraphs: [
          "La Pianura Padana ospita anche siti industriali che hanno generato contaminazioni storiche. Il caso più noto è quello dei PFAS nell'area vicentina, di cui si è trattato in altri confronti. Altre aree padane hanno presentato situazioni di solventi clorurati, cromo industriale, residui di fitofarmaci. Il monitoraggio è progressivamente esteso anche ai contaminanti emergenti.",
          "Il D.Lgs. 18/2023 introduce nuovi limiti e nuovi parametri, fra cui il limite specifico per PFAS applicabile dal 2026. Nel corso degli anni l'attenzione si sta spostando anche sui microinquinanti farmaceutici e sui prodotti di trasformazione di pesticidi. La Pianura Padana, per la sua intensività di pressioni, è una delle aree con maggiore necessità di monitoraggio capillare.",
        ],
      },
      {
        heading: "Durezza in tutta la Pianura Padana",
        paragraphs: [
          "Le acque della Pianura Padana sono in generale medio-dure o dure, con valori che spesso superano i 30 °f. Questo dipende dalle caratteristiche geologiche delle falde alluvionali e non riguarda la salubrità ma il comfort domestico. Le incrostazioni in caldaie, lavatrici e lavastoviglie sono una conseguenza diretta. La sostituzione del calcare con sodio attraverso addolcitori va valutata caso per caso.",
          "Va ricordato che un'acqua dura apporta calcio e magnesio, due minerali utili nell'alimentazione. Una regolazione errata dell'addolcitore può produrre un'acqua eccessivamente dolce e potenzialmente aggressiva sulle tubazioni metalliche. Il D.Lgs. 18/2023 indica come valore consigliato un intervallo fra 15 e 50 °f, all'interno del quale si colloca la maggior parte delle acque padane.",
        ],
      },
    ],
    faqs: [
      {
        q: 'L\'acqua del rubinetto nella Pianura Padana è sicura?',
        a: "Sì, nelle città principali. I gestori captano in larga parte da falda profonda, adottano miscelazione e monitoraggio rinforzato. Al rubinetto i valori dei principali parametri, fra cui i nitrati, sono in genere ampiamente sotto i limiti del D.Lgs. 18/2023.",
      },
      {
        q: 'I nitrati nell\'acqua causano problemi di salute?',
        a: "Concentrazioni sopra il limite di 50 mg/L possono essere problematiche, in particolare per neonati. Il limite di legge è cautelativo. Negli acquedotti urbani della Pianura Padana i valori al rubinetto sono in genere ben sotto il limite grazie alle strategie di captazione e miscelazione.",
      },
      {
        q: 'Perché l\'acqua della Pianura Padana è dura?',
        a: "Le falde alluvionali padane attraversano sedimenti ricchi di calcare e dolomia, da cui derivano la durezza media o medio-alta. Si tratta di una caratteristica geologica, non di un problema di qualità. La durezza non incide sulla salute.",
      },
      {
        q: 'Cosa succede con i PFAS nella Pianura Padana?',
        a: "Il caso più noto è quello dell'area vicentina, dove sono attivi sistemi di abbattimento. Il D.Lgs. 18/2023 introduce un limite specifico per PFAS applicabile dal 12 gennaio 2026. Il monitoraggio è in corso di estensione anche ad altre aree padane.",
      },
      {
        q: 'La falda profonda della Pianura Padana è una risorsa illimitata?',
        a: "No. L'utilizzo intenso ha portato in alcune aree ad abbassamenti del livello piezometrico. La gestione sostenibile richiede equilibrio fra prelievi e ricarica naturale, e in alcune aree progetti di ricarica artificiale.",
      },
      {
        q: 'Posso bere l\'acqua del rubinetto a Cremona, Mantova, Parma, Modena, Reggio, Verona?',
        a: "Sì, in tutte queste città l'acqua del rubinetto è conforme ai limiti di legge. I gestori pubblicano periodicamente i dati delle analisi, consultabili sui rispettivi siti istituzionali.",
      },
    ],
    ctaVariant: 'kit-analisi',
    ctaContext:
      "Se vivi nella Pianura Padana e vuoi conoscere i valori di nitrati, durezza e altri parametri al tuo specifico punto d\'uso, un kit di analisi domiciliare permette di prelevare un campione e farlo analizzare per ottenere un quadro chiaro della tua acqua reale.",
    relatedSlugs: ['lombardia-vs-veneto', 'emilia-romagna-vs-marche', 'piemonte-vs-liguria'],
  },

  {
    slug: 'regione-con-acqua-migliore-italia',
    title: "Qual è la regione italiana con l'acqua del rubinetto migliore? Analisi multi-regionale",
    shortTitle: "Qual è la regione con l'acqua del rubinetto migliore in Italia?",
    metaDescription:
      "Analisi onesta delle regioni italiane con l'acqua del rubinetto di migliore qualità: durezza, contaminanti, gestori e qualità reale al rubinetto.",
    searchKeywords: [
      'miglior acqua rubinetto italia',
      'regione acqua migliore italia',
      'dove c\'è acqua migliore italia',
      'classifica acqua italiana',
      'regioni acqua qualità',
      'migliore acqua rubinetto regione',
      'acqua più pura italia',
    ],
    regions: ['analisi multi-regionale'],
    intro:
      "La domanda \"qual è la regione italiana con l'acqua del rubinetto migliore\" è frequente ma la risposta non è univoca. Il concetto di acqua \"migliore\" è relativo: dipende da cosa si considera prioritario, durezza, mineralizzazione, assenza di contaminanti, qualità organolettica o sostenibilità del servizio. Tutte le regioni italiane erogano acqua del rubinetto che deve rispettare i parametri del D.Lgs. 18/2023, quindi in tutte le regioni l'acqua del rubinetto è in linea generale sicura. Ciò che cambia sono caratteristiche, problematiche specifiche, qualità del servizio. Questa analisi mette a confronto in modo equilibrato le principali regioni italiane senza eleggere una vincitrice, ma identificando le aree dove la qualità è generalmente più alta.",
    comparisonTable: [
      {
        label: 'Trentino-Alto Adige',
        values: [
          { region: 'Trentino-Alto Adige', value: 'Acqua alpina di sorgente, durezza bassa, qualità molto alta' },
        ],
      },
      {
        label: 'Valle d\'Aosta',
        values: [
          { region: 'Valle d\'Aosta', value: 'Acqua alpina di sorgente, durezza bassa, qualità molto alta' },
        ],
      },
      {
        label: 'Marche',
        values: [
          { region: 'Marche', value: 'Sorgenti appenniniche calcaree, qualità mediamente alta' },
        ],
      },
      {
        label: 'Umbria',
        values: [
          { region: 'Umbria', value: 'Sorgenti appenniniche calcaree, qualità mediamente alta' },
        ],
      },
      {
        label: 'Friuli-Venezia Giulia',
        values: [
          { region: 'Friuli-Venezia Giulia', value: 'Sorgenti carsiche e risorgive, qualità buona' },
        ],
      },
      {
        label: 'Basilicata',
        values: [
          { region: 'Basilicata', value: 'Sorgenti appenniniche meridionali, qualità buona' },
        ],
      },
    ],
    sections: [
      {
        heading: 'Premessa: l\'acqua del rubinetto in Italia è sicura ovunque',
        paragraphs: [
          "Prima di parlare di \"migliore\" è importante chiarire un punto: l'acqua del rubinetto in Italia è controllata in modo uniforme dal D.Lgs. 18/2023, che recepisce la direttiva europea 2020/2184. Tutte le regioni e tutti i Comuni sono soggetti agli stessi parametri di sicurezza e gli scostamenti pubblici sono segnalati. In nessuna regione italiana l'acqua del rubinetto può essere distribuita se non rispetta i limiti di legge, salvo procedure di deroga specifiche e temporanee, sempre pubbliche.",
          "Quando parliamo di acqua \"migliore\" parliamo quindi di sfumature qualitative all'interno di un contesto di sicurezza garantita. Le differenze riguardano la mineralizzazione, la durezza, l'origine, la qualità organolettica e la robustezza del servizio. Non esistono regioni con acqua \"pericolosa\" e regioni con acqua \"perfetta\". Esistono territori con caratteristiche idrochimiche diverse e con storie diverse di gestione e investimento.",
        ],
      },
      {
        heading: 'Le regioni alpine: dove la natura aiuta',
        paragraphs: [
          "Il Trentino-Alto Adige e la Valle d'Aosta sono spesso indicate fra le regioni con l'acqua del rubinetto di migliore qualità in Italia. Il motivo è geografico: l'origine prevalente è di sorgente alpina, con acque che attraversano rocce cristalline o dolomitiche in territori a bassa densità di pressioni antropiche. Le sorgenti alpine forniscono in genere acque oligominerali, di bassa durezza, di ottima composizione chimica e di gradevole sapore.",
          "Province come Trento e Bolzano vantano acque al rubinetto che spesso si avvicinano per qualità alle migliori acque minerali in bottiglia, a costi infinitamente inferiori. La Valle d'Aosta ha caratteristiche analoghe. Il limite di questo modello è la fragilità in caso di pressioni emergenti: una piccola contaminazione può avere effetti significativi su una risorsa di per sé pregiata. Per questo il monitoraggio nelle zone di ricarica è particolarmente curato.",
        ],
      },
      {
        heading: 'Sorgenti appenniniche: una rete di alta qualità',
        paragraphs: [
          "Lungo tutta la dorsale appenninica, dall'Emilia-Romagna alla Calabria, sgorgano sorgenti calcaree di buona o ottima qualità chimica. Le Marche, l'Umbria, parti dell'Abruzzo, della Basilicata e della Campania ne beneficiano in modo particolare. Le acque appenniniche presentano in genere mineralizzazione media, durezza medio-bassa, bassa presenza di contaminanti naturali.",
          "Le sorgenti appenniniche alimentano alcuni dei più grandi acquedotti italiani: il Peschiera-Capore per Roma, le sorgenti del Serino per Napoli, il sistema lucano per la Puglia. La qualità della risorsa originaria è in genere ottima; la qualità al rubinetto dipende anche dalla lunghezza dell'adduzione e dallo stato delle reti distributive. Le Marche e l'Umbria, dove la distribuzione è più capillare e meno estesa, mostrano spesso qualità al rubinetto particolarmente alta.",
        ],
      },
      {
        heading: 'Friuli-Venezia Giulia e le risorgive',
        paragraphs: [
          "Il Friuli-Venezia Giulia presenta una situazione idrogeologica peculiare con il sistema delle risorgive della bassa pianura friulana e le acque carsiche dell'altopiano triestino. La qualità è in genere buona, con caratteristiche idrochimiche tipiche delle acque carsiche, mineralizzazione media e durezza media. Gli acquedotti della regione godono di una risorsa qualitativamente solida.",
          "Anche il Veneto, nella sua parte pedemontana e dolomitica, dispone di sorgenti di ottima qualità, mentre la pianura conosce le pressioni della falda padana. La differenza fra Veneto pedemontano e Veneto di pianura è significativa anche in termini di qualità al rubinetto.",
        ],
      },
      {
        heading: 'Regioni con storia più complessa',
        paragraphs: [
          "Altre regioni hanno avuto e in alcuni casi continuano ad avere fronti idrici aperti. La Pianura Padana (Lombardia, Veneto orientale, Emilia-Romagna) ha la pressione storica dei nitrati e in alcune aree dei PFAS, gestita dai gestori con strategie di captazione e trattamento. Il Lazio vulcanico ha la presenza naturale di arsenico e fluoruri, oggetto di abbattimenti specifici. La Sicilia ha la distribuzione intermittente in molte aree.",
          "Queste situazioni non rendono l'acqua \"non potabile\" ma richiedono attenzione, investimenti e a volte trattamenti specifici. In tutti i capoluoghi e nelle grandi città l'acqua al rubinetto è oggi conforme ai limiti di legge. I temi aperti riguardano in genere territori specifici o tipologie di problematiche storiche da gestire.",
        ],
      },
      {
        heading: 'Costo, qualità del servizio e investimenti',
        paragraphs: [
          "La qualità di un sistema idrico non si misura solo sull'acqua che esce dal rubinetto ma anche sulla qualità del servizio: continuità, pressione, ricerca perdite, capacità di intervento in caso di guasti, trasparenza delle informazioni. Da questo punto di vista le multiutility del Nord, come Hera, MM, Gruppo CAP, Acque Veronesi, SMAT, sono fra le più strutturate. Anche Acquedotto Pugliese, pur con la specificità di una distribuzione lunghissima, è un soggetto di rilievo nazionale.",
          "Le regioni con maggiore frammentazione gestionale e con tariffe medie più basse tendono ad avere minore capacità di investimento, livelli di perdita più alti e in alcuni casi servizio più discontinuo. Il costo della bolletta riflette anche questa variabile e non solo la qualità dell'acqua erogata. Un servizio più costoso può corrispondere a una rete più moderna e a controlli più frequenti.",
        ],
      },
      {
        heading: 'Allora dove si trova davvero l\'acqua del rubinetto migliore?',
        paragraphs: [
          "Se per \"migliore\" si intende acqua di sorgente, oligominerale, di bassa durezza, con caratteristiche organolettiche simili a quelle delle migliori acque minerali, le regioni alpine (Trentino-Alto Adige e Valle d'Aosta) e le zone appenniniche pedemontane (Marche e Umbria in particolare, ma anche aree di Abruzzo, Basilicata, Toscana) sono mediamente in cima alla classifica. Anche le zone pedemontane di Veneto, Friuli-Venezia Giulia, Lombardia e Piemonte ne fanno parte.",
          "Se per \"migliore\" si intende invece sicurezza chimica e microbiologica con buona qualità del servizio, le grandi città italiane garantiscono in genere standard adeguati, con differenze più legate alla rete privata dell'edificio che alle scelte del gestore. Milano, Roma, Torino, Bologna, Firenze, Genova, Padova, Ancona offrono acqua del rubinetto pienamente bevibile.",
          "Quello che conta veramente per il singolo consumatore non è la regione di residenza in astratto ma lo stato specifico della propria fornitura. Per questo, accanto al rapporto pubblico del gestore, è utile valutare un'analisi del campione prelevato direttamente al punto d'uso, l'unica via per conoscere davvero la qualità dell'acqua che esce dal proprio rubinetto.",
        ],
      },
      {
        heading: 'Le coordinate fondamentali per orientarsi',
        paragraphs: [
          "Per orientarsi nel confronto fra regioni può essere utile tenere a mente alcune coordinate sintetiche. Queste rappresentano un quadro generale, ma vanno verificate caso per caso con i dati del proprio gestore.",
        ],
        bullets: [
          "Sorgenti di montagna (Alpi, dorsale appenninica) = qualità generalmente alta",
          "Falde padane superficiali = pressione storica nitrati",
          "Aree vulcaniche centrali e meridionali = presenza naturale di arsenico, fluoruri, boro",
          "Falde di costa = rischio di salinizzazione",
          "Distribuzione lunga = sapore di cloro più marcato",
          "Reti molto vecchie = possibile contributo di metalli dalle tubazioni interne",
          "Tariffa bassa = spesso indica minori investimenti",
          "Multiutility strutturate = monitoraggio capillare e trasparenza",
        ],
      },
      {
        heading: 'Conclusione: il concetto di "migliore" è relativo',
        paragraphs: [
          "Non esiste \"la regione con l'acqua del rubinetto migliore d'Italia\" in senso assoluto. Esistono regioni con acque di sorgente pregiate e a bassa pressione antropica (Trentino-Alto Adige, Valle d'Aosta, Marche, Umbria, in parte Basilicata, Friuli-Venezia Giulia, zone dolomitiche del Veneto). Esistono regioni con maggiore stress storico ma gestori capaci di garantire conformità al rubinetto (Lombardia, Emilia-Romagna, Veneto di pianura, Lazio).",
          "Esistono regioni con risorse di buona origine ma sistemi distributivi sotto pressione (Sicilia, Sardegna, parti della Calabria). E esistono casi specifici, come il sistema dell'Acquedotto Pugliese, dove la complessità del trasporto idrico interregionale è essa stessa la cifra distintiva. Conoscere il quadro generale aiuta a orientarsi; conoscere la propria specifica fornitura, attraverso il rapporto del gestore e un'analisi al punto d'uso, è ciò che fa davvero la differenza per il singolo consumatore.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Qual è la regione italiana con l\'acqua del rubinetto migliore?',
        a: "Non esiste una risposta univoca. Le regioni alpine come Trentino-Alto Adige e Valle d'Aosta, e le regioni del centro Italia come Marche e Umbria, mostrano in media qualità della risorsa originaria molto alta. La qualità al rubinetto dipende però anche dalla rete distributiva e dallo stato della tubazione interna dell'edificio.",
      },
      {
        q: 'In quali regioni l\'acqua del rubinetto è più dolce?',
        a: "Le regioni alpine offrono in genere acque a bassa durezza, spesso sotto i 15 °f. Anche le sorgenti appenniniche di Marche, Umbria e parte di Abruzzo, Basilicata e Toscana hanno spesso valori bassi o medi. Le acque di pianura padana sono invece più dure.",
      },
      {
        q: 'L\'acqua del Trentino-Alto Adige è la migliore d\'Italia?',
        a: "Il Trentino-Alto Adige offre in larga parte acqua del rubinetto di sorgente alpina, di ottima qualità chimica e bassa durezza. È fra le regioni con qualità mediamente più alta della risorsa, anche se la valutazione \"migliore in assoluto\" resta soggettiva.",
      },
      {
        q: 'Le città del Sud hanno acqua del rubinetto di qualità inferiore?',
        a: "No. Tutte le città italiane sono soggette agli stessi limiti di legge. Le città del Sud hanno spesso reti distributive con maggiori perdite e talvolta distribuzione intermittente, ma la qualità chimica al rubinetto è controllata e conforme.",
      },
      {
        q: 'Posso fidarmi del rapporto di prova del mio gestore?',
        a: "Sì. I gestori pubblicano periodicamente i risultati delle analisi sui parametri del D.Lgs. 18/2023. Si tratta di dati attendibili che rappresentano la qualità in rete. Per conoscere la qualità al rubinetto, dopo la tubazione interna dell'edificio, è utile integrare con un'analisi del campione prelevato al punto d'uso.",
      },
      {
        q: 'Conviene comprare acqua in bottiglia se vivo in una regione con acqua del rubinetto di buona qualità?',
        a: "L'acqua del rubinetto in Italia è di norma sicura e costa una piccola frazione dell'acqua in bottiglia. Nelle regioni con risorse di sorgente di alta qualità, la differenza qualitativa con molte acque minerali è in pratica minima o nulla. La scelta è personale, ma sul piano della sicurezza e del rapporto qualità-prezzo il rubinetto è generalmente vincente.",
      },
    ],
    ctaVariant: 'completa',
    ctaContext:
      "Vuoi sapere se la tua acqua del rubinetto è davvero in linea con la media della tua regione o se l'impianto del tuo edificio modifica significativamente i parametri al punto d'uso? Un'analisi completa del campione prelevato a casa fornisce un quadro reale e personalizzato della tua specifica fornitura.",
    relatedSlugs: [
      'nord-vs-sud-italia',
      'lombardia-vs-veneto',
      'lazio-vs-campania',
      'pianura-padana-acqua',
    ],
  },
];

const COMPARISON_MAP: Map<string, RegionalComparison> = new Map(
  REGIONAL_COMPARISONS.map((comparison) => [comparison.slug, comparison]),
);

export function getComparisonBySlug(slug: string): RegionalComparison | undefined {
  return COMPARISON_MAP.get(slug);
}
