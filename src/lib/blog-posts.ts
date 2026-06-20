export interface BlogPostSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPostFAQ {
  q: string;
  a: string;
}

export type BlogCategory = 'salute' | 'casa' | 'ambiente' | 'normativa' | 'scienza';

export interface BlogPost {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  category: BlogCategory;
  publishedAt: string;
  readingMinutes: number;
  searchKeywords: string[];
  excerpt: string;
  sections: BlogPostSection[];
  faqs: BlogPostFAQ[];
  relatedSlugs?: string[];
  ctaContext?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'microplastiche-acqua-rubinetto',
    title: "Microplastiche nell'acqua del rubinetto: cosa sappiamo davvero nel 2026",
    shortTitle: "Microplastiche nell'acqua del rubinetto: i fatti",
    metaDescription:
      "Microplastiche nell'acqua: cosa dicono OMS, EFSA e gli studi più recenti, confronto con l'acqua in bottiglia e cosa si può fare in pratica a casa.",
    category: 'scienza',
    publishedAt: '2026-05-15',
    readingMinutes: 9,
    searchKeywords: [
      'microplastiche acqua',
      'microplastiche acqua rubinetto',
      'pericolo microplastiche',
      'acqua bottiglia microplastiche',
      'microplastiche salute',
      'filtri microplastiche',
    ],
    excerpt:
      "Le microplastiche sono diventate uno dei temi più discussi nel dibattito sull'acqua potabile. I titoli allarmistici si sono moltiplicati, ma cosa dicono davvero la scienza e le istituzioni? In questo articolo facciamo ordine: spieghiamo cos'è una microplastica, come arriva nell'acqua del rubinetto, perché diversi studi danno numeri molto diversi, cosa hanno concluso OMS ed EFSA sulla rilevanza per la salute umana, e perché il confronto con l'acqua in bottiglia non è così intuitivo. Concludiamo con indicazioni pratiche su filtri, comportamenti utili e quando ha davvero senso preoccuparsi, senza scivolare nel sensazionalismo né minimizzare un tema sotto continua osservazione.",
    sections: [
      {
        heading: "Cos'è esattamente una microplastica",
        paragraphs: [
          "Per microplastica si intende qualsiasi frammento di materiale plastico con dimensioni inferiori a 5 millimetri. Sotto il micrometro si parla invece di nanoplastiche, una categoria ancora più difficile da studiare per i limiti strumentali dei laboratori.",
          "Le microplastiche si dividono in primarie, prodotte già piccole (microsfere cosmetiche, pellet industriali, fibre tessili), e secondarie, generate dalla frammentazione di plastiche più grandi sotto l'azione di sole, attrito, calore e processi meccanici. Nella maggior parte delle matrici ambientali, comprese le acque, dominano le microplastiche secondarie.",
        ],
      },
      {
        heading: "Come arrivano nell'acqua del rubinetto",
        paragraphs: [
          "Le fonti sono molteplici e raramente isolabili. Le acque superficiali ricevono microplastiche dal dilavamento urbano, dagli scarichi (anche depurati) e dall'atmosfera. Le falde sono in genere meno esposte, ma non immuni nei contesti più antropizzati.",
          "Nella rete di distribuzione contano anche le tubazioni, i giunti e i serbatoi: porzioni in materiale plastico possono rilasciare frammenti, soprattutto in presenza di acqua aggressiva, alte temperature o stagnazioni prolungate.",
        ],
        bullets: [
          'Acque superficiali contaminate a monte degli impianti di potabilizzazione.',
          'Atmosfera (le microplastiche si depositano anche sui bacini di raccolta).',
          'Tubazioni, raccordi e serbatoi domestici in plastica.',
          'Bollitori e contenitori utilizzati a fine rubinetto.',
        ],
      },
      {
        heading: 'Acqua in bottiglia: davvero meglio o peggio?',
        paragraphs: [
          "Diversi studi pubblicati tra il 2018 e il 2024 hanno trovato concentrazioni medie di microplastiche più alte nelle acque in bottiglia rispetto a quelle del rubinetto, in particolare nelle bottiglie in PET sottoposte a calore o riempimenti ripetuti. Tappi e processi di imbottigliamento contribuiscono al rilascio di particelle.",
          "Questo non vuol dire che l'acqua del rubinetto sia esente: significa che la narrazione \"in bottiglia è più pura\" non è supportata dai dati attuali. Il punto importante è che il livello assoluto resta basso rispetto ad altre vie di esposizione, come polveri domestiche e alimenti.",
        ],
      },
      {
        heading: 'Cosa dicono OMS ed EFSA',
        paragraphs: [
          "L'Organizzazione Mondiale della Sanità, in un rapporto del 2019 e nei successivi aggiornamenti, ha concluso che sulla base delle evidenze disponibili non emergono rischi acuti per la salute legati alle microplastiche nell'acqua potabile, pur sottolineando la necessità di ulteriori ricerche soprattutto sulle nanoplastiche e sui contaminanti che possono adsorbirsi alla loro superficie.",
          "L'EFSA, l'autorità europea per la sicurezza alimentare, ha mantenuto una linea coerente: dato monitorato, attenzione alta, ma non ci sono ancora valori limite armonizzati perché manca uno standard analitico univoco. La nuova direttiva UE 2020/2184 include le microplastiche nella watch list, dunque sono fra i parametri da osservare per definire futuri valori soglia.",
        ],
      },
      {
        heading: 'Tecniche di analisi: perché i numeri sono così diversi',
        paragraphs: [
          "Quando leggi che un'acqua \"contiene X particelle per litro\" devi sempre chiederti come sono state cercate. Le tecniche più comuni sono la spettroscopia FTIR e Raman, accoppiate a filtrazione su membrane, ma differiscono per limiti di rilevamento, dimensione minima rilevabile e tipi di polimero identificabili.",
          "Confronti diretti tra studi sono problematici: alcuni rilevano solo particelle sopra i 20 micrometri, altri arrivano a 1 micrometro o meno. Risultati differenti per ordini di grandezza non implicano necessariamente acque diverse, ma metodi diversi.",
        ],
      },
      {
        heading: 'Cosa puoi fare in pratica',
        paragraphs: [
          "Per chi vuole ridurre l'esposizione domestica esistono interventi sensati, senza cadere nell'iperprotezione.",
        ],
        bullets: [
          "Preferire l'acqua del rubinetto controllata rispetto all'acqua in bottiglia in PET, soprattutto se conservata in auto al caldo.",
          'Utilizzare caraffe e contenitori in vetro o acciaio inox al posto della plastica monouso.',
          "Per chi vuole ridurre ulteriormente, un filtro a carbone attivo a blocco o ad osmosi inversa abbatte una parte significativa delle particelle più grandi di alcuni micrometri.",
          "Lasciare scorrere l'acqua qualche secondo dopo lunghi periodi di stagnazione (ad esempio la mattina).",
        ],
      },
    ],
    faqs: [
      {
        q: 'Le microplastiche nel rubinetto sono pericolose?',
        a: "Sulla base delle evidenze attuali OMS ed EFSA non hanno individuato rischi acuti per la salute alle concentrazioni tipicamente riportate, ma la ricerca prosegue, in particolare sulle nanoplastiche.",
      },
      {
        q: "L'acqua in bottiglia ne contiene meno?",
        a: "No, spesso ne contiene di più, soprattutto le bottiglie in PET esposte a calore. La differenza dipende molto dal materiale del contenitore e dalle condizioni di conservazione.",
      },
      {
        q: "Un filtro domestico riesce a eliminarle?",
        a: "I filtri a carbone attivo a blocco e i sistemi a osmosi inversa riducono significativamente le microplastiche di alcuni micrometri. L'efficienza varia in funzione del modello, della manutenzione e della dimensione delle particelle.",
      },
      {
        q: 'Esiste un limite di legge per le microplastiche nell\'acqua potabile?',
        a: 'Non ancora. La direttiva UE 2020/2184 le ha inserite tra i parametri sotto osservazione, in attesa che venga definito uno standard analitico armonizzato a livello europeo.',
      },
    ],
    relatedSlugs: ['pfas-italia-mappa', 'bollire-acqua-cosa-elimina', 'rapporto-prova-vs-strisce'],
    ctaContext: 'analisi microplastiche e contaminanti emergenti acqua rubinetto',
  },
  {
    slug: 'come-eliminare-cloro-acqua-rubinetto',
    title: "Come eliminare il sapore di cloro dall'acqua del rubinetto: 5 metodi che funzionano",
    shortTitle: "Eliminare il sapore di cloro dall'acqua: 5 metodi",
    metaDescription:
      "Il sapore di cloro nell'acqua del rubinetto si elimina in modi semplici: decantazione, carbone attivo, bollitura, vitamina C e caraffa filtrante. Pro e contro di ognuno.",
    category: 'casa',
    publishedAt: '2026-05-01',
    readingMinutes: 7,
    searchKeywords: [
      'eliminare cloro acqua',
      'sapore cloro acqua',
      'togliere cloro acqua rubinetto',
      'far evaporare cloro',
      'filtro carbone attivo acqua',
      'caraffa filtrante cloro',
    ],
    excerpt:
      "Il sapore di cloro è uno dei motivi per cui molte persone abbandonano l'acqua del rubinetto. Eppure è la garanzia che l'acqua è stata disinfettata e ha raggiunto il rubinetto in sicurezza. La buona notizia è che si elimina facilmente: bastano pochi minuti di tempo o sistemi domestici economici. In questo articolo confrontiamo i cinque metodi più efficaci - decantazione, carbone attivo, bollitura, vitamina C e caraffa filtrante - spiegando come funzionano, cosa rimuovono davvero, quanto durano, quanto costano e quale tipo di abitudine domestica favoriscono. Senza promesse miracolose, ma con quello che serve per scegliere consapevolmente.",
    sections: [
      {
        heading: 'Perché senti il sapore di cloro',
        paragraphs: [
          "Il cloro è il disinfettante più diffuso negli acquedotti italiani. La sua presenza, in forma di cloro libero residuo, garantisce che l'acqua arrivi al rubinetto senza ricontaminazioni microbiche lungo la rete.",
          "La soglia olfattiva è molto bassa: alcune persone avvertono il cloro già a concentrazioni di 0,2-0,3 mg/L, ben al di sotto dei limiti normativi italiani. Non è un segnale di acqua \"sbagliata\", ma solo di sensibilità individuale.",
        ],
      },
      {
        heading: 'Metodo 1: lascia decantare 30 minuti',
        paragraphs: [
          "Il cloro libero è volatile. Lasciare l'acqua in una caraffa aperta in frigorifero per 30-60 minuti consente alla maggior parte del cloro di passare in fase gassosa, abbattendo significativamente il sapore.",
          "Pro: gratuito, niente da comprare. Contro: richiede un minimo di organizzazione, non rimuove altri composti come la clorammina, più persistente.",
        ],
      },
      {
        heading: 'Metodo 2: filtro a carbone attivo',
        paragraphs: [
          "I filtri a carbone attivo, sia in caraffa che sottolavello, sono la soluzione più efficace per il cloro. La struttura porosa del carbone trattiene il cloro libero e anche molti composti organoclorurati responsabili di odori e sapori.",
          "Pro: rimozione efficace e immediata. Contro: la cartuccia va sostituita rispettando le indicazioni del costruttore, altrimenti perde efficacia e può diventare un terreno favorevole alla proliferazione batterica.",
        ],
      },
      {
        heading: 'Metodo 3: bollitura',
        paragraphs: [
          "Far bollire l'acqua per 5-15 minuti elimina la quasi totalità del cloro libero, oltre a sanificarla dal punto di vista microbiologico. È utile in emergenze ma poco pratico per uso quotidiano.",
          "Da ricordare: la bollitura concentra i sali minerali (l'acqua evapora ma i sali restano) e non rimuove nitrati, metalli o sostanze chimiche.",
        ],
      },
      {
        heading: 'Metodo 4: vitamina C (acido ascorbico)',
        paragraphs: [
          "L'acido ascorbico neutralizza il cloro per via chimica, trasformandolo in cloruri inerti. Una pastiglia da 1 grammo è sufficiente per circa 100 litri.",
          "Pro: efficace anche con la clorammina, utile per chi gestisce acquari o lieviti. Contro: introduce un additivo, ha un sapore proprio, eccessivo per usi quotidiani in cucina.",
        ],
      },
      {
        heading: 'Metodo 5: caraffa filtrante',
        paragraphs: [
          "Le caraffe filtranti combinano carbone attivo e resine a scambio ionico. Riducono il cloro e ammorbidiscono leggermente l'acqua. Vanno bene per uso domestico se la cartuccia viene cambiata regolarmente.",
          "Pro: economiche, immediate, niente installazione. Contro: efficacia variabile tra marche, costo nel tempo non trascurabile, attenzione alla manutenzione.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il cloro nell'acqua del rubinetto fa male?",
        a: "Alle concentrazioni di legge non rappresenta un rischio per la salute. È la garanzia che l'acqua è stata disinfettata. Il sapore è il problema più frequente, non la sicurezza.",
      },
      {
        q: 'Quanto tempo serve far decantare per eliminare il cloro?',
        a: "Per il cloro libero in genere 30-60 minuti in una caraffa aperta sono sufficienti per ridurre nettamente il sapore. La clorammina invece evapora molto più lentamente.",
      },
      {
        q: 'La bollitura elimina davvero il cloro?',
        a: "Sì, ma il vantaggio quotidiano è limitato perché concentra i sali minerali e non agisce sui contaminanti chimici. Più utile come passaggio di sanificazione che per migliorare il sapore.",
      },
      {
        q: 'Ogni quanto devo cambiare la cartuccia della caraffa filtrante?',
        a: "Seguire le indicazioni del produttore (in genere 4-6 settimane). Una cartuccia esaurita perde efficacia e può favorire la crescita batterica all'interno della caraffa.",
      },
    ],
    relatedSlugs: ['acqua-rubinetto-fa-male-davvero', 'bollire-acqua-cosa-elimina', 'acqua-troppo-dura-cosa-fare'],
    ctaContext: 'analisi acqua rubinetto cloro e disinfettanti',
  },
  {
    slug: 'pfas-italia-mappa',
    title: 'PFAS in Italia: dove sono stati trovati e cosa fare se vivi in quelle zone',
    shortTitle: 'PFAS in Italia: mappa e cosa fare',
    metaDescription:
      "PFAS in Italia: la mappa delle aree contaminate (Veneto, Lombardia, Piemonte), il caso Miteni, i nuovi limiti UE 2020/2184 e come analizzare l'acqua di casa.",
    category: 'salute',
    publishedAt: '2026-04-22',
    readingMinutes: 11,
    searchKeywords: [
      'pfas italia',
      'pfas mappa italia',
      'pfas veneto',
      'come eliminare pfas acqua',
      'pfas analisi',
      'pfas limiti legge',
      'pfas miteni',
    ],
    excerpt:
      "I PFAS - sostanze poli- e perfluoroalchiliche - sono al centro di una delle più grandi emergenze ambientali italiane. Scoperti nel 2013 nelle falde di Veneto, Lombardia e Piemonte, sono associati a problemi tiroidei, immunitari e oncologici. Da gennaio 2026 la nuova direttiva UE 2020/2184, recepita con il D.Lgs. 18/2023, impone limiti precisi sull'acqua potabile. In questo articolo spieghiamo cosa sono i PFAS, dove sono stati trovati in Italia, perché preoccupano, quali sono i nuovi limiti di legge e come puoi capire se la tua acqua è interessata e cosa fare in caso positivo, dalle analisi di laboratorio ai trattamenti più efficaci.",
    sections: [
      {
        heading: 'Cosa sono i PFAS',
        paragraphs: [
          "I PFAS sono una famiglia di oltre 10.000 molecole di sintesi caratterizzate da catene carbonio-fluoro estremamente stabili. Vengono usate da decenni per la loro resistenza a calore, acqua, oli: rivestimenti antiaderenti, tessili idrorepellenti, schiume antincendio, imballaggi alimentari, cosmetici.",
          "Proprio la loro stabilità è il problema: in natura non si degradano e sono stati ribattezzati \"forever chemicals\". Si accumulano nel sangue umano e si trasferiscono al feto in gravidanza e ai lattanti attraverso il latte materno.",
        ],
      },
      {
        heading: 'Il caso Miteni e la contaminazione del Veneto',
        paragraphs: [
          "Nel 2013 una ricerca del CNR documentò che le falde della provincia di Vicenza, Verona e Padova erano fortemente contaminate. La fonte fu identificata nello stabilimento Miteni di Trissino, attivo dagli anni Sessanta nella produzione di PFAS.",
          "La Regione Veneto definì zone di rischio: area rossa (massima contaminazione, intervento urgente sugli acquedotti), area arancione e gialla. Centinaia di migliaia di persone hanno consumato per anni acqua contaminata. Sono stati attivati screening sanitari sui residenti, ancora in corso.",
        ],
      },
      {
        heading: 'Altre regioni italiane interessate',
        paragraphs: [
          "Il problema non è solo veneto. Negli ultimi anni rilevamenti significativi sono emersi anche in altre aree, sia per attività industriali sia per impianti di trattamento dei rifiuti.",
        ],
        bullets: [
          'Lombardia: aree del bresciano, lodigiano, milanese vicino a impianti chimici e galvaniche.',
          "Piemonte: zona dell'alessandrino, in particolare attorno a Spinetta Marengo con il polo Solvay.",
          'Toscana ed Emilia-Romagna: rilevamenti sporadici legati a poli produttivi specifici.',
          'Lazio e Campania: monitoraggi attivati in seguito a controlli su acque superficiali.',
        ],
      },
      {
        heading: 'I nuovi limiti della direttiva UE 2020/2184',
        paragraphs: [
          "La direttiva UE 2020/2184, recepita in Italia dal D.Lgs. 18/2023, ha introdotto due parametri specifici per i PFAS nell'acqua destinata al consumo umano.",
          "Il limite di 0,1 µg/L (microgrammi per litro) si applica alla somma di 20 PFAS individuati come prioritari. Il limite di 0,5 µg/L si riferisce invece al \"PFAS totali\", una stima cumulativa. Sono valori più severi rispetto alla normativa precedente e impongono ai gestori monitoraggi sistematici.",
        ],
      },
      {
        heading: "Come capire se l'acqua di casa è interessata",
        paragraphs: [
          "I PFAS non si vedono, non si annusano, non alterano il sapore. L'unico modo per saperlo è un'analisi chimica specifica, eseguita da un laboratorio specialistico con tecnica LC-MS/MS o HRMS, in grado di rilevare concentrazioni dell'ordine dei nanogrammi per litro.",
          "Le analisi di routine fornite dal gestore non sempre includono il pannello PFAS completo. Per acque di pozzo privato o se si vive in aree storicamente esposte, ha senso richiedere un'analisi mirata.",
        ],
      },
      {
        heading: 'Come ridurli a livello domestico',
        paragraphs: [
          "I PFAS non si eliminano bollendo l'acqua. Le tecnologie efficaci sono limitate, ma esistono.",
        ],
        bullets: [
          'Osmosi inversa sottolavello: rimozione superiore al 90% per la maggior parte dei PFAS, è la soluzione più affidabile.',
          'Filtri a carbone attivo granulare (GAC) ad alte prestazioni: efficaci ma con efficienza variabile in funzione della catena del PFAS e del livello di saturazione.',
          'Resine a scambio anionico specifiche: utilizzate negli impianti di trattamento centralizzati.',
        ],
      },
      {
        heading: 'Cosa NON funziona contro i PFAS',
        paragraphs: [
          "Vale la pena sfatare alcune illusioni diffuse.",
        ],
        bullets: [
          "La bollitura non rimuove i PFAS, anzi li concentra perché l'acqua evapora.",
          "Le caraffe filtranti a basso costo offrono efficienze marginali e non documentate sui PFAS.",
          "Gli addolcitori riducono la durezza, non agiscono sui contaminanti organici come i PFAS.",
        ],
      },
    ],
    faqs: [
      {
        q: 'I PFAS sono pericolosi anche a basse concentrazioni?',
        a: "Sì, vista la loro persistenza nell'organismo (emivita di anni). I limiti europei sono stati abbassati proprio perché studi epidemiologici hanno collegato esposizioni croniche a effetti su tiroide, sistema immunitario, fertilità e ad alcuni tumori.",
      },
      {
        q: 'Vivo in area rossa: il gestore mi garantisce acqua sotto i limiti?',
        a: "I gestori in zona rossa hanno installato impianti di trattamento a carboni attivi e resine. I controlli pubblici sono frequenti e i dati spesso disponibili. È comunque sensato chiedere conferma e, se desiderato, fare analisi indipendenti.",
      },
      {
        q: 'Posso analizzare i PFAS con un kit fai-da-te?',
        a: "No. La determinazione dei PFAS richiede strumentazione di laboratorio (LC-MS/MS o HRMS) e protocolli rigorosi. Le strisce reattive e i kit domestici non sono in grado di rilevarli.",
      },
      {
        q: "Quanto costa un'analisi PFAS?",
        a: "Indicativamente da poco meno di 100 a oltre 250 euro a seconda del numero di composti ricercati e dei limiti di quantificazione richiesti. Per uso domestico in zone a rischio, il pannello dei 4 principali è spesso sufficiente come prima valutazione.",
      },
    ],
    relatedSlugs: ['direttiva-2020-2184-cosa-cambia', 'microplastiche-acqua-rubinetto', 'acqua-pozzo-privato-controlli'],
    ctaContext: 'analisi PFAS acqua rubinetto Veneto Lombardia Piemonte',
  },
  {
    slug: 'piombo-tubazioni-vecchie',
    title: 'Piombo nelle tubazioni: come capire se la tua casa è a rischio',
    shortTitle: 'Piombo nelle tubazioni: rischi e verifica',
    metaDescription:
      "Tubazioni in piombo negli edifici prima del 1970: come riconoscerle, quando rilasciano nell'acqua, cosa fare e come verificare con un'analisi.",
    category: 'casa',
    publishedAt: '2026-04-10',
    readingMinutes: 8,
    searchKeywords: [
      'piombo tubazioni acqua',
      'tubature piombo casa',
      'come riconoscere tubazioni piombo',
      'piombo acqua rischi',
      'piombo limite acqua potabile',
      'sostituzione tubazioni piombo',
    ],
    excerpt:
      "Nelle case costruite o ristrutturate prima del 1970 non è raro trovare ancora porzioni di tubazioni in piombo, soprattutto sui tratti di allacciamento. Il piombo è un metallo tossico anche a concentrazioni molto basse, in particolare per bambini e donne in gravidanza. La direttiva UE 2020/2184 ha abbassato ulteriormente il limite, portandolo nel tempo a 5 microgrammi per litro. In questo articolo spieghiamo quando un'abitazione è realmente a rischio, come riconoscere visivamente una tubazione in piombo, quali condizioni favoriscono il rilascio nell'acqua, cosa fare in attesa di una sostituzione e come confermare il sospetto con un'analisi di laboratorio mirata.",
    sections: [
      {
        heading: 'Quali edifici sono potenzialmente a rischio',
        paragraphs: [
          "Le tubazioni in piombo per l'acqua potabile sono state usate diffusamente fino agli anni Sessanta-Settanta. Dal D.M. 174/2004 il piombo è formalmente vietato negli impianti destinati al consumo umano.",
          "Le situazioni più a rischio sono case storiche non ristrutturate, allacciamenti dall'acquedotto di pochi metri tra il contatore e l'ingresso casa, vecchi condomini in cui le colonne montanti non sono mai state sostituite.",
        ],
      },
      {
        heading: 'Come riconoscere una tubazione in piombo',
        paragraphs: [
          "Il piombo si riconosce con criteri pratici, da verificare nei punti accessibili dell'impianto (cantina, sottolavello, contatore).",
        ],
        bullets: [
          'Colore grigio opaco, simile alla matita; sotto la patina la superficie tagliata è argentea brillante.',
          'È un metallo morbido: si rigaa facilmente con una moneta.',
          'Una calamita non aderisce (a differenza dei tubi in acciaio).',
          'Battendo con un cacciavite produce un suono sordo, non metallico.',
          'I raccordi sono spesso saldati con piombo, non avvitati.',
        ],
      },
      {
        heading: 'Quando il piombo passa effettivamente nell\'acqua',
        paragraphs: [
          "Una tubazione in piombo non rilascia sempre la stessa quantità di metallo. Il rilascio dipende da chimica dell'acqua e tempi di stagnazione.",
          "Acque dolci, leggermente acide o povere di sali (tipiche di alcune zone montane) sono più aggressive verso il piombo. Acque dure e ricche di carbonati tendono a formare uno strato protettivo all'interno della tubazione.",
          "Il fattore principale è la stagnazione: dopo una notte o una vacanza, le concentrazioni di piombo nei primi litri possono essere ordini di grandezza più alte rispetto all'acqua che scorre da minuti.",
        ],
      },
      {
        heading: 'Cosa fare in attesa di sostituire le tubazioni',
        paragraphs: [
          "La soluzione definitiva è la sostituzione (rame, multistrato, acciaio inox). In attesa, alcune buone pratiche riducono drasticamente l'esposizione.",
        ],
        bullets: [
          "Far scorrere l'acqua del rubinetto della cucina per almeno 1-2 minuti dopo lunghi periodi di stagnazione, prima di berla o usarla per cucinare.",
          "Non usare l'acqua calda per cucinare o preparare biberon: scioglie più piombo di quella fredda.",
          "Installare un filtro certificato per la rimozione del piombo a fine rubinetto (osmosi inversa o cartucce specifiche).",
          "Far analizzare l'acqua in laboratorio per quantificare il rischio reale.",
        ],
      },
      {
        heading: "Il nuovo limite di legge: 5 µg/L",
        paragraphs: [
          "La direttiva UE 2020/2184 e il D.Lgs. 18/2023 hanno ridotto il limite del piombo da 10 a 5 microgrammi per litro, da raggiungere entro il 2036. È una scelta basata sulle evidenze: per il piombo non esiste una soglia sicura, in particolare per il neurosviluppo dei bambini.",
          "I gestori dell'acquedotto sono responsabili fino al contatore. Dal contatore in poi la responsabilità è del proprietario dell'immobile.",
        ],
      },
      {
        heading: "Come confermare il sospetto: l'analisi giusta",
        paragraphs: [
          "Per il piombo si richiede una determinazione in ICP-MS o analoga, con limite di quantificazione di almeno 1-2 µg/L. È fondamentale raccogliere il campione correttamente: il prelievo \"first draw\" (primo getto dopo una notte di stagnazione) misura il caso peggiore, il \"flushed\" (dopo 2-5 minuti di scorrimento) misura l'acqua di rete in ingresso.",
          "Confrontare i due prelievi permette di distinguere un problema di acquedotto da un problema interno all'edificio.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Bere acqua con piombo da una tubatura vecchia è pericoloso?',
        a: "Sì, anche a basse dosi. Il piombo è cumulativo e l'esposizione cronica può causare effetti neurologici, soprattutto nei bambini. Per questo i limiti sono stati abbassati.",
      },
      {
        q: "Far scorrere l'acqua qualche minuto basta a renderla sicura?",
        a: "Riduce nettamente le concentrazioni se il problema è solo la tubazione interna stagnante. Non risolve casi di rilascio continuo: in quel caso serve la sostituzione.",
      },
      {
        q: 'Come faccio a sapere se il mio condominio ha ancora tubazioni in piombo?',
        a: "Verifica i tratti visibili in cantina e in prossimità del contatore. Per i tratti incassati nel muro, l'unico modo certo è un'analisi dell'acqua al primo getto del mattino.",
      },
      {
        q: 'Chi paga la sostituzione se il piombo è nel tratto dell\'acquedotto?',
        a: "Fino al contatore è in carico al gestore. Dal contatore in poi è responsabilità del proprietario dell'immobile. Alcuni acquedotti offrono programmi di sostituzione coordinata.",
      },
    ],
    relatedSlugs: ['acqua-rubinetto-fa-male-davvero', 'rapporto-prova-vs-strisce', 'direttiva-2020-2184-cosa-cambia'],
    ctaContext: 'analisi piombo acqua rubinetto e tubazioni vecchie casa',
  },
  {
    slug: 'acqua-troppo-dura-cosa-fare',
    title: "Acqua troppo dura: 4 segnali per accorgersene e cosa puoi fare",
    shortTitle: "Acqua troppo dura: segnali e cosa fare",
    metaDescription:
      "Acqua dura: come riconoscerla (calcare, sapone, pelle, elettrodomestici), come misurarla a casa e le soluzioni reali (addolcitore, osmosi).",
    category: 'casa',
    publishedAt: '2026-03-28',
    readingMinutes: 7,
    searchKeywords: [
      'acqua dura',
      'acqua troppo dura',
      'durezza acqua sintomi',
      'calcare acqua come ridurre',
      'addolcitore acqua',
      'gradi francesi acqua',
    ],
    excerpt:
      "Calcare ovunque, sapone che non fa schiuma, pelle che tira dopo la doccia, lavatrice che si rompe: spesso il colpevole comune è uno solo, la durezza dell'acqua. In Italia la durezza varia molto da zona a zona, perché dipende dalla geologia del bacino. Avere un'acqua dura non è di per sé un problema sanitario - il calcio non fa male e non causa calcoli renali - ma incide su comfort domestico, durata degli elettrodomestici e bollette. In questo articolo vediamo i quattro segnali principali, come misurare la durezza in modo semplice, le soluzioni reali (addolcitore, osmosi inversa, accettarla) e quando vale economicamente la pena intervenire.",
    sections: [
      {
        heading: "Cos'è la durezza dell'acqua",
        paragraphs: [
          "La durezza misura il contenuto di calcio e magnesio disciolti. Si esprime in gradi francesi (°F), dove 1°F equivale a 10 mg/L di carbonato di calcio.",
          "Le acque si classificano grossolanamente così: molto dolci sotto 7°F, dolci 7-15°F, medio-dure 15-25°F, dure 25-40°F, molto dure oltre 40°F. In molte aree del centro e nord Italia si superano i 30-40°F.",
        ],
      },
      {
        heading: '4 segnali per accorgersene',
        paragraphs: [
          "L'acqua dura non è invisibile: lascia tracce facili da osservare.",
        ],
        bullets: [
          'Calcare visibile su rubinetti, soffioni doccia, fondo del bollitore e schermo del piano cottura.',
          'Sapone, shampoo e detersivo che fanno poca schiuma, anche con dosi abbondanti.',
          'Pelle che tira dopo la doccia, capelli opachi, biancheria ruvida dopo il bucato.',
          'Elettrodomestici che si guastano prima del previsto: caldaia, scaldabagno, lavatrice e lavastoviglie hanno scambiatori sensibili al calcare.',
        ],
      },
      {
        heading: 'Come misurarla a casa',
        paragraphs: [
          "Il modo più semplice è il dato del gestore. Sul sito dell'acquedotto la durezza media è sempre pubblicata, suddivisa per comune o zona.",
          "Per misure puntuali esistono strisce reattive da pochi euro, sufficienti per una stima approssimativa. Per misure più precise serve un kit titrimetrico o un'analisi di laboratorio. Non ha senso investire in misure ad alta precisione se non per dimensionare un addolcitore.",
        ],
      },
      {
        heading: 'Soluzione 1: addolcitore a scambio ionico',
        paragraphs: [
          "L'addolcitore sostituisce gli ioni calcio e magnesio con ioni sodio attraverso una resina. È la tecnologia di riferimento per le applicazioni di tutta la casa.",
          "Pro: efficace, automatico, abbattimento prevedibile della durezza. Contro: costo iniziale e di manutenzione (resina, sale), aumento del sodio nell'acqua (non ottimale per chi è iposodico), produzione di acqua di rigenerazione.",
        ],
      },
      {
        heading: 'Soluzione 2: osmosi inversa solo per uso potabile',
        paragraphs: [
          "Se il problema è solo bere e cucinare, l'osmosi inversa sottolavello rimuove la durezza insieme a quasi tutti i sali. Lascia inalterata l'acqua dei sanitari.",
          "È la soluzione più razionale per chi vuole un'acqua dal sapore neutro al rubinetto della cucina, senza modificare l'impianto generale e senza scambiare calcio con sodio.",
        ],
      },
      {
        heading: 'Soluzione 3: accettarla',
        paragraphs: [
          "Un'acqua medio-dura non è un problema sanitario. Anzi: calcio e magnesio sono nutrienti utili. Per uso alimentare un'acqua a 25-35°F è perfettamente accettabile.",
          "Per gli elettrodomestici esistono accorgimenti più economici dell'addolcitore centralizzato: dosaggio corretto dei detersivi, pulizie regolari con prodotti decalcificanti, programmi a temperatura più bassa, sostituzione tempestiva dei filtri.",
        ],
      },
      {
        heading: 'Conseguenze sui costi energetici',
        paragraphs: [
          "Uno strato di 1 millimetro di calcare sulla serpentina della caldaia o dello scaldabagno aumenta i consumi di gas o elettricità del 10-15%. Su anni di uso il conto sale rapidamente.",
          "Per chi ha caldaie ad accumulo o scaldabagno elettrico in zone con durezza superiore ai 30°F, un addolcitore o un dosatore di polifosfati a monte è spesso un investimento che si ripaga.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua dura fa venire i calcoli renali?",
        a: "No, è un mito. Le evidenze epidemiologiche non mostrano relazione tra durezza dell'acqua potabile e calcoli renali. Anzi, alcune ricerche suggeriscono che il calcio alimentare ha effetto protettivo.",
      },
      {
        q: 'Un addolcitore aumenta il sodio nell\'acqua?',
        a: "Sì. Lo scambio sostituisce calcio e magnesio con sodio. Per acque molto dure l'aumento è significativo. Chi segue diete iposodiche dovrebbe bere acqua osmotizzata in cucina o mantenere un rubinetto non addolcito.",
      },
      {
        q: 'Bere acqua addolcita fa male?',
        a: "Per la maggior parte delle persone no, ma è un'acqua più salata e più povera di calcio rispetto alla naturale. Per neonati e cardiopatici non è la prima scelta.",
      },
      {
        q: 'Posso togliere il calcare dal bollitore con aceto?',
        a: "Sì, l'acido acetico scioglie i carbonati. Lasciare in immersione 30 minuti e risciacquare abbondantemente. È un'alternativa economica ai decalcificanti commerciali.",
      },
    ],
    relatedSlugs: ['come-eliminare-cloro-acqua-rubinetto', 'acqua-rubinetto-fa-male-davvero', 'rapporto-prova-vs-strisce'],
    ctaContext: "analisi durezza acqua e parametri fisico chimici",
  },
  {
    slug: 'acqua-pozzo-privato-controlli',
    title: 'Acqua di pozzo privato: ogni quanto va analizzata e quali controlli fare',
    shortTitle: 'Acqua di pozzo privato: controlli e analisi',
    metaDescription:
      "Acqua di pozzo privato: frequenza consigliata delle analisi, parametri minimi (microbiologici e chimici), autorizzazioni e contesti di rischio.",
    category: 'normativa',
    publishedAt: '2026-03-15',
    readingMinutes: 8,
    searchKeywords: [
      'analisi acqua pozzo',
      'pozzo privato analisi',
      'quanto costa analisi pozzo',
      'controlli pozzo casa',
      'pozzo potabile parametri',
      'autorizzazione pozzo privato',
    ],
    excerpt:
      "Chi ha un pozzo privato o una sorgente non collegata all'acquedotto pubblico è il responsabile diretto della qualità dell'acqua che beve. Nessun gestore esegue controlli al posto suo. Eppure molti proprietari di pozzo non sanno con quale frequenza analizzare, quali parametri cercare, come distinguere un controllo serio da uno minimale. In questo articolo facciamo chiarezza su autorizzazioni necessarie, frequenze consigliate dalle linee guida ISS, parametri irrinunciabili in un'analisi minima (microbiologici e chimici), e i contesti di rischio specifico - vicinanza ad allevamenti, terreni agricoli intensivi, vecchie discariche, aree industriali - in cui servono pannelli estesi.",
    sections: [
      {
        heading: 'Il pozzo privato non è sotto controllo pubblico',
        paragraphs: [
          "Il gestore dell'acquedotto è responsabile dell'acqua erogata fino al contatore degli utenti collegati alla rete. Chi si approvvigiona autonomamente da pozzo o sorgente è invece responsabile in proprio della qualità.",
          "Il D.Lgs. 18/2023 e le normative regionali distinguono usi: per il consumo umano (bere, cucinare, igiene personale) si applicano gli stessi limiti dell'acqua di acquedotto. Per usi non potabili (giardino, lavaggi esterni) il controllo è meno stringente.",
        ],
      },
      {
        heading: 'Autorizzazioni e adempimenti',
        paragraphs: [
          "Per realizzare un pozzo serve generalmente una concessione di derivazione (Regione o Provincia), un'autorizzazione comunale e l'iscrizione al registro delle acque sotterranee. Per piccoli prelievi domestici alcune regioni prevedono procedure semplificate.",
          "Se l'acqua è destinata al consumo umano, l'ATS (ex ASL) competente può richiedere certificazioni di potabilità periodiche. Per usi commerciali (agriturismi, B&B, ristoranti) i controlli sono obbligatori e la frequenza è definita dall'autorità sanitaria.",
        ],
      },
      {
        heading: 'Frequenza consigliata delle analisi',
        paragraphs: [
          "Le linee guida dell'Istituto Superiore di Sanità suggeriscono cicli minimi per pozzi privati a uso domestico.",
        ],
        bullets: [
          'Analisi microbiologica: almeno una volta all\'anno e dopo ogni evento critico (piene, alluvioni, interventi sul pozzo).',
          'Analisi chimica di base: ogni 2 anni in condizioni stabili.',
          'Analisi estesa (metalli, pesticidi, solventi): all\'attivazione del pozzo e poi periodicamente in funzione del contesto.',
          'Subito dopo qualsiasi lavoro di manutenzione, rifacimento dei filtri o lunga inattività.',
        ],
      },
      {
        heading: 'Parametri minimi di un controllo serio',
        paragraphs: [
          "Un'analisi minima sull'acqua di pozzo destinata al consumo umano dovrebbe includere almeno i seguenti parametri.",
        ],
        bullets: [
          'Microbiologia: Escherichia coli, enterococchi intestinali, conteggio colonie totali a 22 e 37°C.',
          'Parametri chimico-fisici: pH, conducibilità, durezza, residuo fisso, temperatura.',
          'Indicatori di contaminazione: nitrati, nitriti, ammoniaca, cloruri, solfati.',
          'Metalli base: ferro e manganese (estetici); arsenico se in area geologicamente esposta.',
        ],
      },
      {
        heading: 'Contesti di rischio specifico',
        paragraphs: [
          "Alcuni contesti impongono pannelli analitici aggiuntivi per intercettare contaminanti specifici.",
        ],
        bullets: [
          'Vicinanza ad allevamenti intensivi o liquamai: nitrati, ammoniaca, indicatori microbiologici fecali.',
          'Terreni agricoli intensivi: pesticidi e fitofarmaci (almeno il pannello base regionale).',
          'Aree industriali o ex industriali: solventi clorurati (PCE, TCE), metalli pesanti, PFAS.',
          'Vecchie discariche o ex cave: metalli, ammoniaca, parametri di mineralizzazione anomala.',
          'Aree vulcaniche (es. Lazio, Campania): arsenico, fluoro, radon.',
        ],
      },
      {
        heading: "Come si campiona correttamente l'acqua di pozzo",
        paragraphs: [
          "Un'analisi vale quanto vale il campione. Per la microbiologia si usano bottiglie sterili fornite dal laboratorio, si raccoglie con guanti puliti dopo aver fatto scorrere l'acqua per qualche minuto e flammeggiato il rubinetto, e si trasporta a temperatura controllata (4°C) consegnando entro 24 ore.",
          "Per la chimica i requisiti sono meno restrittivi ma vanno comunque rispettati i tempi di consegna e l'eventuale acidificazione del campione per i metalli.",
        ],
      },
      {
        heading: 'Quanto costa',
        paragraphs: [
          "Un pannello minimo (microbiologia + chimica di base) costa indicativamente 80-150 euro. Un pannello esteso con metalli, fitofarmaci o solventi può arrivare a 300-500 euro. Per acque a rischio PFAS o radon si arriva oltre.",
          "Considerando che un'analisi annuale tutela la salute dell'intera famiglia, il rapporto costo-beneficio è nettamente favorevole.",
        ],
      },
    ],
    faqs: [
      {
        q: "Devo per legge analizzare l'acqua del mio pozzo privato?",
        a: "Se la usi solo tu e la tua famiglia, l'obbligo formale dipende dalla regione. Quando l'acqua viene servita a terzi (ospiti paganti, attività commerciali) l'analisi periodica è obbligatoria.",
      },
      {
        q: "L'acqua del pozzo è automaticamente più pura di quella dell'acquedotto?",
        a: "No, dipende totalmente dal contesto. Le falde superficiali sono esposte a contaminazione agricola e zootecnica; quelle profonde possono contenere arsenico naturale, ferro, manganese o fluoro.",
      },
      {
        q: "Se trovo Escherichia coli che faccio?",
        a: "Smetti immediatamente di usare l'acqua per consumo umano, identifica la causa (infiltrazione superficiale, fossa biologica vicina, pozzo non protetto), procedi alla disinfezione/clorazione, ripeti l'analisi e valuta interventi strutturali.",
      },
      {
        q: 'Posso usare strisce reattive al posto delle analisi di laboratorio?',
        a: "Le strisce reattive sono un controllo indicativo (durezza, pH, nitrati) ma non sostituiscono un'analisi microbiologica e chimica completa eseguita su strumentazione di laboratorio.",
      },
    ],
    relatedSlugs: ['rapporto-prova-vs-strisce', 'direttiva-2020-2184-cosa-cambia', 'pfas-italia-mappa'],
    ctaContext: 'analisi acqua di pozzo privato microbiologica e chimica',
  },
  {
    slug: 'acqua-rubinetto-fa-male-davvero',
    title: "L'acqua del rubinetto fa male? Risposte basate su dati, non su miti",
    shortTitle: "L'acqua del rubinetto fa male? I dati",
    metaDescription:
      "L'acqua del rubinetto fa davvero male? I 5 miti più diffusi messi alla prova: calcare, cloro, metalli, sapore, sali minerali. Cosa dicono i controlli ATS.",
    category: 'salute',
    publishedAt: '2026-02-28',
    readingMinutes: 9,
    searchKeywords: [
      'acqua rubinetto fa male',
      'acqua del rubinetto sicura',
      'acqua rubinetto pericoli',
      'verità acqua rubinetto',
      'acqua rubinetto vs minerale',
      'controlli ATS acqua potabile',
    ],
    excerpt:
      "\"L'acqua del rubinetto fa male.\" Lo si sente al bar, sui social, in cucina dai parenti. Eppure l'acqua di acquedotto in Italia è uno dei prodotti alimentari più controllati al mondo: i gestori eseguono migliaia di analisi l'anno e le ATS effettuano controlli paralleli indipendenti. In questo articolo affrontiamo i cinque miti più resistenti - calcare uguale calcoli, cloro tossico, presenza di metalli, sapore che indica pericolo, povertà di minerali - e li mettiamo alla prova con dati ed evidenze. Vediamo poi quando esistono problemi reali (PFAS, piombo nelle vecchie tubazioni, criticità locali) e come distinguere percezione e rischio effettivo.",
    sections: [
      {
        heading: 'Mito 1: \"il calcare fa venire i calcoli renali\"',
        paragraphs: [
          "Il calcare nell'acqua del rubinetto è composto principalmente da carbonato di calcio. Non esiste alcuna evidenza epidemiologica che colleghi la durezza dell'acqua potabile all'aumento dell'incidenza di calcoli renali.",
          "Anzi, diversi studi mostrano che un adeguato apporto di calcio alimentare è protettivo contro i calcoli di ossalato di calcio, che sono i più comuni. Il calcare è un problema estetico e tecnico (incrostazioni), non sanitario.",
        ],
      },
      {
        heading: 'Mito 2: \"il cloro è tossico\"',
        paragraphs: [
          "Il cloro libero residuo nell'acqua di acquedotto è la garanzia che l'acqua è stata disinfettata e non si è ricontaminata in rete. I limiti italiani sono fissati per essere sicuri sul lungo periodo.",
          "Se il sapore disturba esistono soluzioni semplici (decantazione, carbone attivo). Eliminare il cloro non è un beneficio sanitario in sé: significa solo agire sul sapore.",
        ],
      },
      {
        heading: 'Mito 3: \"contiene metalli pesanti pericolosi\"',
        paragraphs: [
          "I limiti per piombo, arsenico, nichel, cromo, rame nel D.Lgs. 18/2023 sono tra i più severi al mondo. I gestori sono tenuti a verificarli periodicamente e i dati sono pubblici.",
          "Esistono criticità locali concrete: arsenico naturale nelle zone vulcaniche del centro Italia (Lazio, Campania, Toscana), piombo nelle tubazioni vecchie interne agli edifici, ferro e manganese in alcune sorgenti. Sono problemi noti, mappati e gestiti caso per caso, non un attributo generico dell'acqua di rubinetto.",
        ],
      },
      {
        heading: 'Mito 4: \"se ha un sapore strano è pericolosa\"',
        paragraphs: [
          "Sapore e odore sono indicatori estetici, non sanitari. Un'acqua può avere note di cloro, sapore terroso (geosmina di origine algale, innocua) o leggera nota metallica senza nessun problema di sicurezza.",
          "Viceversa contaminanti realmente pericolosi (PFAS, pesticidi, alcuni metalli) sono inodori e insapori. Affidarsi al palato per decidere se un'acqua è sicura è l'esatto contrario di un metodo razionale.",
        ],
      },
      {
        heading: 'Mito 5: \"è troppo povera di minerali\"',
        paragraphs: [
          "L'acqua del rubinetto italiana non è chimicamente pura: ha un contenuto di sali variabile da poche decine a alcune centinaia di mg/L di residuo fisso. È spesso paragonabile a molte acque oligominerali in bottiglia.",
          "Il fabbisogno di calcio, magnesio e sodio si copre con la dieta, non con l'acqua. Una vasta categoria di acque \"povere di minerali\" in bottiglia è venduta proprio per questo motivo.",
        ],
      },
      {
        heading: "Cosa dicono i controlli ATS",
        paragraphs: [
          "L'ATS competente per territorio esegue migliaia di campionamenti all'anno, in aggiunta a quelli del gestore. I parametri controllati sono decine: microbiologia, metalli, pesticidi, sottoprodotti della disinfezione, parametri organolettici, parametri emergenti come PFAS.",
          "I rapporti annuali sono pubblici e consultabili. Per la maggior parte dei comuni italiani la percentuale di superamenti dei limiti è inferiore all'1%. Le criticità sono geograficamente localizzate, non generalizzate.",
        ],
      },
      {
        heading: 'Quando esiste un problema reale',
        paragraphs: [
          "Esistono casi concreti che meritano attenzione e in cui un'analisi personale ha senso.",
        ],
        bullets: [
          'Vivi in zona PFAS (Veneto, Lombardia, Piemonte, aree specifiche).',
          'Casa con tubazioni anteriori al 1970 mai sostituite (rischio piombo).',
          'Pozzo privato non collegato all\'acquedotto.',
          "Zone con problemi conclamati di arsenico (parti di Lazio, Toscana, Campania).",
          'Avvisi pubblici di non potabilità o ordinanze sindacali in corso.',
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto in Italia è sicura?",
        a: "Nella stragrande maggioranza dei comuni italiani sì, sulla base dei controlli pubblici. Esistono criticità geograficamente localizzate (PFAS, arsenico, vecchi edifici con piombo) che vanno gestite caso per caso.",
      },
      {
        q: "L'acqua in bottiglia è più sicura?",
        a: "Non è più sicura per legge: i parametri di controllo sono confrontabili. Differiscono spesso composizione minerale, prezzo, impatto ambientale e talvolta presenza di microplastiche dal contenitore.",
      },
      {
        q: 'Posso fidarmi dei dati pubblicati dal gestore?',
        a: "Sì, i dati sono soggetti a controlli incrociati ATS. Se vuoi una verifica indipendente puoi sempre fare analizzare un campione presso un laboratorio terzo.",
      },
      {
        q: 'Quando ha senso un\'analisi privata dell\'acqua di casa?',
        a: "Se vivi in area con criticità note, in un edificio storico mai ristrutturato, se hai un pozzo privato, o semplicemente se vuoi rassicurazione personale su parametri specifici come piombo, nitrati, PFAS o durezza.",
      },
    ],
    relatedSlugs: ['piombo-tubazioni-vecchie', 'pfas-italia-mappa', 'rapporto-prova-vs-strisce'],
    ctaContext: 'analisi indipendente acqua rubinetto casa',
  },
  {
    slug: 'direttiva-2020-2184-cosa-cambia',
    title: "Nuova direttiva UE sull'acqua potabile (2020/2184): cosa cambia in Italia",
    shortTitle: 'Direttiva UE 2020/2184: cosa cambia',
    metaDescription:
      "Direttiva UE 2020/2184 e D.Lgs. 18/2023: nuovi limiti per PFAS, bisfenolo A, uranio, microcistine. Approccio risk-based e diritto all'informazione.",
    category: 'normativa',
    publishedAt: '2026-02-15',
    readingMinutes: 9,
    searchKeywords: [
      'direttiva 2020 2184',
      'dlgs 18 2023',
      'nuova direttiva acqua potabile',
      'limiti pfas legge',
      'approccio rischio acqua',
      'risk based water safety',
    ],
    excerpt:
      "Dopo oltre vent'anni dalla direttiva 98/83/CE, l'Unione Europea ha completamente rivisto la disciplina dell'acqua destinata al consumo umano con la direttiva 2020/2184. L'Italia l'ha recepita con il D.Lgs. 18/2023, in vigore dal 21 marzo 2023, con tempi di attuazione differenziati. La riforma non è cosmetica: introduce nuovi parametri (PFAS, bisfenolo A, microcistine, uranio), abbassa limiti storici come quello del piombo, impone l'approccio basato sul rischio lungo tutta la filiera dal bacino al rubinetto, sancisce il diritto del cittadino a informazioni chiare e accessibili sulla qualità dell'acqua. In questo articolo vediamo cosa cambia davvero e che impatto ha su gestori, condomini e consumatori.",
    sections: [
      {
        heading: 'Storia: dalla 98/83/CE alla 2020/2184',
        paragraphs: [
          "La direttiva 98/83/CE ha disciplinato per oltre vent'anni l'acqua potabile europea, fissando parametri e limiti che gli stati membri dovevano garantire al rubinetto del consumatore.",
          "Nel frattempo sono emerse nuove preoccupazioni: contaminanti come i PFAS, materiali a contatto con l'acqua potabile, microplastiche, geopardie climatiche sulla disponibilità. La revisione era attesa e arriva con un'impostazione molto diversa, basata sul rischio e sulla trasparenza.",
        ],
      },
      {
        heading: 'Recepimento italiano: D.Lgs. 18/2023',
        paragraphs: [
          "Il D.Lgs. 23 febbraio 2023 n. 18 recepisce la direttiva 2020/2184. È strutturato in capi che disciplinano qualità dell'acqua, valutazione e gestione del rischio dal punto di captazione al rubinetto, materiali a contatto, informazione al pubblico, controlli e sanzioni.",
          "L'autorità di riferimento è il Ministero della Salute, con l'Istituto Superiore di Sanità per gli aspetti tecnici e le ATS regionali per il controllo territoriale.",
        ],
      },
      {
        heading: 'Nuovi parametri introdotti',
        paragraphs: [
          "L'allegato I è stato aggiornato con composti che la direttiva precedente non considerava o trattava marginalmente.",
        ],
        bullets: [
          'PFAS: somma di 20 composti prioritari sotto 0,1 µg/L; PFAS totali sotto 0,5 µg/L.',
          'Bisfenolo A: 2,5 µg/L (rilascio dai materiali a contatto).',
          'Microcistina-LR: 1 µg/L, parametro rilevante per le acque superficiali soggette a fioriture algali.',
          'Uranio: 30 µg/L, per geologie specifiche.',
          'Acidi aloacetici (HAA5): 60 µg/L, sottoprodotti della disinfezione.',
          'Clorito e clorato: nuovi limiti in funzione del trattamento di disinfezione.',
        ],
      },
      {
        heading: 'Piombo: limite più severo',
        paragraphs: [
          "Il valore parametrico del piombo passa da 10 a 5 µg/L, con periodo di adeguamento fino al 2036. È una decisione coerente con gli aggiornamenti tossicologici: per il piombo non c'è soglia di sicurezza, in particolare per il neurosviluppo dei bambini.",
          "Per le tubazioni interne agli edifici la responsabilità resta del proprietario. Il legislatore italiano prevede strumenti informativi e programmi di intervento, ma la sostituzione delle colonne in piombo richiede pianificazione a livello condominiale.",
        ],
      },
      {
        heading: 'Approccio risk-based: dal bacino al rubinetto',
        paragraphs: [
          "L'innovazione metodologica più importante è l'obbligo di valutazione e gestione del rischio lungo tutta la filiera idropotabile. Tre livelli: la captazione (bacino idrografico, area di salvaguardia), il sistema di distribuzione (acquedotto, serbatoi, rete), il sistema interno agli edifici (impianti, materiali, manutenzioni).",
          "Per ogni livello i gestori devono identificare pericoli, valutare rischi, definire misure di controllo e monitoraggio. Non si guarda più solo al rubinetto: si previene a monte.",
        ],
      },
      {
        heading: "Comunicazione obbligatoria al consumatore",
        paragraphs: [
          "Il D.Lgs. 18/2023 introduce un vero diritto all'informazione. Il gestore deve mettere a disposizione almeno una volta all'anno, in forma chiara e facilmente accessibile, informazioni su qualità dell'acqua, parametri chimici e microbiologici, durezza, eventuali superamenti, struttura della tariffa.",
          "Per i cittadini significa avere finalmente accesso strutturato a dati che prima erano spesso sepolti in PDF tecnici. Per i gestori significa investire in trasparenza e comunicazione.",
        ],
      },
      {
        heading: "Materiali a contatto con l'acqua potabile",
        paragraphs: [
          "Una novità importante riguarda i materiali utilizzati per tubazioni, rubinetti, raccordi e impianti di trattamento. La direttiva impone armonizzazione europea sui requisiti di idoneità, in modo da evitare che plastiche o leghe rilascino sostanze nell'acqua.",
          "L'attuazione è graduale e proseguirà nei prossimi anni con regolamenti di esecuzione UE. Per il consumatore il messaggio è chiaro: i materiali contano e devono rispettare requisiti specifici, non basta una generica conformità.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Cosa cambia concretamente per me come cittadino?',
        a: "Hai diritto a informazioni periodiche e chiare dal gestore, hai nuovi parametri tutelati (PFAS in primis) e limiti più bassi per il piombo. Cambia poco nella vita quotidiana, molto nella tutela di lungo periodo.",
      },
      {
        q: "Quando entrano in vigore tutti i nuovi limiti?",
        a: "Il D.Lgs. 18/2023 è in vigore dal 21 marzo 2023. Diversi parametri hanno tempi di adeguamento più lunghi (il piombo a 5 µg/L entro il 2036), ma il quadro normativo è già operativo per la maggior parte dei contaminanti.",
      },
      {
        q: 'Chi controlla che i gestori applichino la nuova direttiva?',
        a: "In Italia le ATS regionali eseguono controlli indipendenti e il Ministero della Salute coordina la sorveglianza. L'ISS fornisce supporto tecnico e mantiene le banche dati nazionali.",
      },
      {
        q: "Posso chiedere al gestore i dati di qualità dell'acqua del mio comune?",
        a: "Sì, è un diritto sancito dal D.Lgs. 18/2023. I gestori principali pubblicano i dati online; in alternativa puoi richiederli formalmente come accesso agli atti.",
      },
    ],
    relatedSlugs: ['pfas-italia-mappa', 'piombo-tubazioni-vecchie', 'acqua-pozzo-privato-controlli'],
    ctaContext: 'analisi acqua secondo D.Lgs. 18/2023 e direttiva 2020/2184',
  },
  {
    slug: 'bollire-acqua-cosa-elimina',
    title: "Bollire l'acqua del rubinetto: cosa elimina davvero e cosa no",
    shortTitle: "Bollire l'acqua: cosa elimina davvero",
    metaDescription:
      "Bollire l'acqua del rubinetto: efficace contro batteri, virus, parassiti. Non elimina metalli, PFAS, nitrati né sostanze chimiche, anzi le concentra.",
    category: 'scienza',
    publishedAt: '2026-02-01',
    readingMinutes: 7,
    searchKeywords: [
      'bollire acqua rubinetto',
      'bollire acqua microbiologia',
      'bollitura acqua',
      'acqua bollita serve',
      'bollire acqua per quanto tempo',
      'acqua bollita biberon',
    ],
    excerpt:
      "Bollire l'acqua è uno dei gesti più antichi e più male interpretati del rapporto tra esseri umani e qualità dell'acqua. Funziona benissimo per certi rischi e non serve a nulla - o addirittura peggiora - per altri. Capirne i limiti è fondamentale, soprattutto in tutte quelle situazioni in cui ci si affida alla bollitura come misura precauzionale: emergenze post-alluvione, viaggi, vasche per neonati, preparazione di alimenti per la prima infanzia. In questo articolo separiamo nettamente cosa la bollitura elimina (microbiologia: batteri, virus, parassiti) e cosa no (metalli, pesticidi, nitrati, PFAS, microplastiche), e spieghiamo perché ha senso bollire e per quanto tempo.",
    sections: [
      {
        heading: 'Cosa elimina davvero la bollitura',
        paragraphs: [
          "Il calore è uno dei più antichi e affidabili metodi di sanificazione. A temperature comprese tra 70 e 100°C i microrganismi patogeni vengono inattivati in tempi molto rapidi.",
          "L'effetto è dovuto alla denaturazione delle proteine cellulari e dei componenti strutturali di virus e batteri.",
        ],
        bullets: [
          "Batteri patogeni come Escherichia coli, Salmonella, Shigella, Vibrio cholerae, Campylobacter.",
          'Virus enterici come norovirus, rotavirus, virus dell\'epatite A.',
          'Parassiti come Giardia lamblia, Cryptosporidium, amebe.',
          "Spore di alcuni microrganismi, a tempi di bollitura sufficienti.",
        ],
      },
      {
        heading: 'Cosa NON elimina',
        paragraphs: [
          "La bollitura agisce sul vivente. Non spezza i legami chimici delle molecole inorganiche o organiche persistenti. Anzi, le concentra: l'acqua evapora ma le sostanze disciolte restano nel pentolino.",
        ],
        bullets: [
          'Metalli come piombo, arsenico, nichel, rame: restano e si concentrano.',
          'Nitrati e nitriti: persistono identici.',
          'PFAS, sostanze poli- e perfluoroalchiliche: stabilissime, non degradate dal calore tipico della cucina.',
          'Pesticidi e solventi organici: non distrutti dalla semplice bollitura.',
          'Microplastiche e fibre: in parte sedimentano, ma non spariscono.',
          'Sali minerali in eccesso e durezza: concentrati, non rimossi.',
        ],
      },
      {
        heading: 'Per quanto tempo bollire',
        paragraphs: [
          "Per uso domestico la raccomandazione generale è di portare l'acqua a bollitura piena e mantenerla per almeno 1 minuto al livello del mare. In alta quota, dove l'acqua bolle a temperatura più bassa, si consigliano almeno 3 minuti.",
          "Bollire per tempi molto più lunghi non aggiunge sicurezza e accentua l'effetto concentrazione dei sali e dei contaminanti chimici.",
        ],
      },
      {
        heading: "L'effetto concentrazione: un dettaglio non banale",
        paragraphs: [
          "Quando l'acqua evapora i contaminanti non volatili rimangono nel volume residuo. Se parti con 1 litro di acqua e ne lasci evaporare il 20%, hai aumentato del 25% la concentrazione di ogni metallo, nitrato o PFAS presente.",
          "Per acque a basso rischio è un effetto trascurabile. Per acque con concentrazioni vicine ai limiti di legge è un fattore da tenere presente, soprattutto in caso di bolliture prolungate o ripetute.",
        ],
      },
      {
        heading: 'Quando ha senso bollire',
        paragraphs: [
          "Ci sono contesti in cui la bollitura è la scelta giusta e talvolta vitale.",
        ],
        bullets: [
          "Ordinanze sindacali di non potabilità per cause microbiologiche (E. coli, enterococchi).",
          "Eventi di emergenza: alluvioni, terremoti, rotture di rete, ricontaminazione.",
          'Pozzi privati con problemi microbiologici accertati, in attesa di interventi strutturali.',
          'Preparazione di alimenti per neonati nei primi mesi, quando indicato dal pediatra.',
          'Viaggi in zone dove l\'acqua di rete non è garantita microbiologicamente.',
        ],
      },
      {
        heading: 'Alternative alla bollitura',
        paragraphs: [
          "Per affrontare i contaminanti chimici che la bollitura non rimuove servono tecnologie diverse: filtri a carbone attivo per i composti organici, osmosi inversa per metalli e PFAS, resine specifiche per nitrati.",
          "Per la microbiologia in emergenza, oltre alla bollitura, si possono usare pastiglie disinfettanti a base di cloro o iodio, o filtri batteriostatici con porosità sotto 0,2 µm.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Bollire elimina il calcare?',
        a: "No, lo precipita: il calcio si deposita sul fondo del pentolino (la patina bianca che vedi). L'acqua resta dura, e parte del calcare viene trascinato quando la versi.",
      },
      {
        q: 'Posso bollire per eliminare i PFAS?',
        a: "No, i PFAS sono estremamente stabili e la bollitura li concentra invece di eliminarli. Servono filtri a carbone attivo specifici o osmosi inversa.",
      },
      {
        q: "L'acqua bollita per il biberon è la scelta giusta?",
        a: "In aree e periodi con eventuali rischi microbiologici sì, su indicazione del pediatra. In contesti normali e con acqua di rete sicura, l'OMS e i pediatri italiani raccomandano comunque di non bollire eccessivamente per evitare la concentrazione dei sali.",
      },
      {
        q: 'Quanto tempo dura un\'acqua bollita?',
        a: "Una volta raffreddata e conservata in un contenitore pulito chiuso, mantiene la sicurezza microbiologica per circa 24 ore in frigorifero. Dopo è prudente bollirla di nuovo.",
      },
    ],
    relatedSlugs: ['come-eliminare-cloro-acqua-rubinetto', 'microplastiche-acqua-rubinetto', 'acqua-pozzo-privato-controlli'],
    ctaContext: "analisi microbiologica e chimica acqua casa",
  },
  {
    slug: 'rapporto-prova-vs-strisce',
    title: 'Rapporto di prova di laboratorio vs strisce reattive: cosa cambia',
    shortTitle: 'Rapporto di prova vs strisce reattive',
    metaDescription:
      "Rapporto di prova del laboratorio e strisce reattive a confronto: validità, accuratezza, costi e in quali casi ha senso usare l'uno o l'altro.",
    category: 'scienza',
    publishedAt: '2026-01-18',
    readingMinutes: 8,
    searchKeywords: [
      'rapporto di prova acqua',
      'strisce reattive acqua',
      'analisi acqua casa',
      'kit analisi acqua confronto',
      'analisi acqua laboratorio',
      'analisi acqua fai da te',
    ],
    excerpt:
      "Quando si parla di analizzare l'acqua di casa, le opzioni più diffuse sono due e profondamente diverse: il rapporto di prova rilasciato da un laboratorio e le strisce reattive da banco. Sembrano servire allo stesso scopo ma rispondono a domande diverse. Le strisce danno un'indicazione rapida e qualitativa su pochi parametri; il rapporto di prova è un documento formale, firmato, con valenza tecnico-legale, basato su strumentazione e personale qualificati. In questo articolo vediamo come funziona ciascuno, quali sono i loro limiti reali, quanto costano, quando ha senso scegliere uno o l'altro e perché, in alcuni contesti come pozzi privati o contenziosi condominiali, solo il rapporto di prova ha valore.",
    sections: [
      {
        heading: "Cos'è un rapporto di prova",
        paragraphs: [
          "Il rapporto di prova è il documento tecnico ufficiale che un laboratorio rilascia al termine di un'analisi. Riporta dati di identificazione del campione, metodi analitici utilizzati, risultati per ciascun parametro con limiti di quantificazione e incertezza di misura, firma del responsabile.",
          "È redatto seguendo procedure standardizzate. Vale come prova in sede tecnica per gestori, ATS, contenziosi condominiali, contestazioni a fornitori di impianti. Nessuna striscia reattiva ha questo valore.",
        ],
      },
      {
        heading: 'Come si esegue in laboratorio',
        paragraphs: [
          "Le analisi sono eseguite su strumentazione di alta sensibilità: spettrofotometri UV-VIS, cromatografi ionici, ICP-MS per i metalli, gas e liquido cromatografi accoppiati a spettrometria di massa per composti organici e PFAS, sistemi di filtrazione e incubazione per la microbiologia.",
          "Ogni misura segue protocolli definiti dalla letteratura tecnica (UNI EN, EPA, Standard Methods). I limiti di quantificazione sono nell'ordine dei microgrammi o nanogrammi per litro, ordini di grandezza inferiori a qualsiasi striscia commerciale.",
        ],
      },
      {
        heading: 'Cosa sono le strisce reattive',
        paragraphs: [
          "Le strisce reattive sono supporti di carta o plastica impregnati di reagenti chimici che cambiano colore in presenza dei composti cercati. Confrontando il colore con una scala fornita si ottiene una stima qualitativa o semi-quantitativa.",
          "I parametri tipici: pH, durezza totale, alcalinità, cloro libero, cloruri, nitrati, nitriti, ferro, rame. Test rapidi, in pochi minuti, economici (1-3 euro per striscia).",
        ],
      },
      {
        heading: 'Accuratezza: dove sta la differenza',
        paragraphs: [
          "Le strisce reattive offrono una risoluzione tipica di 5-25 mg/L per la durezza, intervalli grezzi di 0,5-1 unità per il pH, e per i nitrati passi di 5-10 mg/L. Una striscia ti dice se sei sopra o sotto una soglia, non quanto esattamente.",
          "Il laboratorio fornisce dati con incertezza dichiarata, in genere il 5-15% del valore misurato. Per parametri tossicologici importanti come piombo, arsenico, PFAS, la differenza non è cosmetica: nessuna striscia commerciale rileva contaminanti dell'ordine del microgrammo o nanogrammo per litro.",
        ],
      },
      {
        heading: 'Confronto sintetico',
        paragraphs: [
          "Per orientarsi velocemente è utile vedere i due strumenti affiancati sui criteri rilevanti.",
        ],
        bullets: [
          'Validità formale: rapporto di prova sì, strisce no.',
          'Parametri coperti: rapporto di prova decine o centinaia; strisce 4-10 tipicamente.',
          "Sensibilità tipica: rapporto di prova µg/L o ng/L; strisce mg/L.",
          'Tempo: rapporto di prova 5-15 giorni lavorativi; strisce minuti.',
          'Costi: rapporto di prova 80-500 euro; strisce 1-3 euro a test.',
          'Microbiologia: strisce reattive non praticabili; serve laboratorio.',
        ],
      },
      {
        heading: 'Quando ha senso ciascun approccio',
        paragraphs: [
          "Non si tratta di scegliere quello \"migliore\" in assoluto, ma di adattare lo strumento allo scopo.",
        ],
        bullets: [
          'Dimensionare un addolcitore o monitorare una caraffa filtrante: strisce vanno bene.',
          'Verificare il cloro residuo in una piscina, una cisterna o un acquario: strisce.',
          "Acquistare casa, gestire un pozzo, sospettare PFAS o piombo, valutare un'osmosi inversa, far valere un diritto: rapporto di prova.",
          "Casi di interesse legale o contrattuale (condominio, contenzioso, perizia): solo rapporto di prova.",
        ],
      },
      {
        heading: 'Errori frequenti nell\'uso delle strisce',
        paragraphs: [
          "Le strisce reattive funzionano se usate correttamente. Errori comuni che falsano i risultati: striscia scaduta, conservazione a temperatura sbagliata o in luogo umido, tempo di lettura non rispettato, scarsa luce per il confronto colorimetrico.",
          "Inoltre nessuna striscia è progettata per gestire interferenze (acque colorate, torbide, mineralizzazione molto alta o molto bassa) che falsano la reazione. Tenerlo presente quando si interpreta un risultato che non sembra plausibile.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Posso usare le strisce reattive per controllare l\'acqua potabile?',
        a: "Per un'indicazione di massima su pochi parametri va bene. Per una valutazione completa di potabilità servono analisi di laboratorio: la striscia non rileva metalli pesanti, PFAS, pesticidi né i contaminanti microbiologici.",
      },
      {
        q: 'Il rapporto di prova del laboratorio è opponibile in tribunale?',
        a: "Sì, ha valore tecnico-legale e può essere utilizzato come prova in contenziosi condominiali, controversie con gestori o fornitori, perizie. Le strisce reattive non hanno questo valore.",
      },
      {
        q: 'Posso analizzare il piombo con una striscia?',
        a: "Le strisce per piombo esistono ma hanno soglie di rilevazione 10-100 volte superiori al limite di legge (5 µg/L). Sono inutilizzabili per verificare la conformità ai limiti potabili.",
      },
      {
        q: "Quanto tempo richiede un'analisi di laboratorio?",
        a: "Per la chimica di base 5-7 giorni lavorativi; per la microbiologia 2-3 giorni; per pannelli complessi come PFAS o pesticidi 10-15 giorni.",
      },
    ],
    relatedSlugs: ['acqua-pozzo-privato-controlli', 'pfas-italia-mappa', 'piombo-tubazioni-vecchie'],
    ctaContext: 'rapporto di prova laboratorio acqua rubinetto e pozzo',
  },
];

const POSTS_MAP: ReadonlyMap<string, BlogPost> = new Map(
  BLOG_POSTS.map((post) => [post.slug, post])
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS_MAP.get(slug);
}
