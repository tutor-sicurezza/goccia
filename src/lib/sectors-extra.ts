import type { SectorGuide } from "./sector-guides";

export const EXTRA_SECTORS: SectorGuide[] = [
  {
    slug: "farmacie-parafarmacie",
    itName: "Farmacie e parafarmacie",
    audience: "titolari di farmacia, parafarmacisti, responsabili laboratorio galenico",
    shortTitle: "Analisi acqua per farmacie e parafarmacie: obblighi e parametri",
    metaDescription:
      "Analisi acqua per farmacie e parafarmacie: controllo dell'acqua sanitaria, riferimenti al Reg. CE 1223/2009 sui cosmetici, parametri microbiologici e frequenza dei controlli.",
    searchKeywords: [
      "analisi acqua farmacia",
      "controllo acqua parafarmacia",
      "acqua laboratorio galenico",
      "cosmetici farmacia normativa acqua",
      "regolamento 1223 2009 farmacia",
      "acqua sanitaria farmacia",
    ],
    intro:
      "La farmacia non è soltanto un punto vendita di medicinali: ospita laboratori galenici, banchi consulenza, servizi di autoanalisi e in molti casi la preparazione o la vendita di prodotti cosmetici. L'acqua utilizzata per l'igiene del personale, per la pulizia degli strumenti e, in alcuni casi, come ingrediente di preparazioni cosmetiche allestite in farmacia rientra in un quadro normativo articolato. Il Regolamento CE 1223/2009 sui prodotti cosmetici impone al responsabile della preparazione di garantire la sicurezza microbiologica del prodotto finito, e l'acqua è uno dei principali veicoli di contaminazione. Il D.Lgs. 18/2023 disciplina inoltre la qualità dell'acqua sanitaria distribuita all'interno dei locali aperti al pubblico.",
    normativeReferences: [
      "Reg. CE 1223/2009 (prodotti cosmetici)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Farmacopea Ufficiale italiana per i requisiti dell'acqua nelle preparazioni galeniche",
      "Linee guida regionali sui laboratori galenici delle farmacie",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Pseudomonas aeruginosa",
      "Carica batterica a 22 °C e 37 °C",
      "pH",
      "Conducibilità",
      "Cloro residuo",
    ],
    frequency:
      "Annuale per l'acqua sanitaria utilizzata nei locali; semestrale o trimestrale per le farmacie con laboratorio galenico attivo, in funzione della tipologia di preparazioni e delle indicazioni della valutazione del rischio.",
    sections: [
      {
        heading: "Perché l'acqua è un punto critico in farmacia",
        paragraphs: [
          "All'interno della farmacia l'acqua è impiegata per lavare la vetreria, per l'igiene delle mani dell'operatore in fase di preparazione, per pulire i piani di lavoro e in alcuni casi come ingrediente di preparazioni galeniche o cosmetiche. Una contaminazione microbiologica del punto di erogazione si riflette quindi sulla qualità delle preparazioni e sulla sicurezza dei clienti.",
          "I rischi più rilevanti sono di tipo microbiologico: la presenza di Pseudomonas aeruginosa o di cariche batteriche elevate può alterare creme, soluzioni e prodotti cosmetici allestiti in farmacia. Nei laboratori galenici si aggiunge il rischio chimico, quando le tubazioni o i contenitori non sono adeguati e rilasciano sostanze indesiderate.",
        ],
      },
      {
        heading: "Obblighi normativi per il titolare della farmacia",
        paragraphs: [
          "Il Regolamento CE 1223/2009 individua nella persona responsabile il soggetto tenuto a garantire la conformità del cosmetico, inclusi i requisiti microbiologici. Quando un cosmetico è preparato in farmacia, anche in piccoli lotti, occorre documentare la qualità dell'acqua impiegata.",
          "Il D.Lgs. 18/2023 ribadisce che il punto di consegna giuridicamente rilevante è il rubinetto interno: il titolare deve quindi conservare i rapporti di prova relativi all'acqua sanitaria, da esibire in sede di ispezione ASL o NAS. Nei laboratori galenici, la Farmacopea Ufficiale fornisce indicazioni sui requisiti dell'acqua impiegata nelle preparazioni magistrali e officinali.",
        ],
      },
      {
        heading: "Parametri da analizzare in farmacia",
        paragraphs: [
          "Il pannello di analisi tipico per una farmacia con laboratorio galenico è più ampio di quello richiesto per un esercizio commerciale standard, perché deve verificare anche parametri rilevanti per la sicurezza dei prodotti preparati.",
        ],
        bullets: [
          "Escherichia coli e coliformi totali: indicatori di contaminazione fecale",
          "Enterococchi intestinali: marker complementare di contaminazione fecale",
          "Pseudomonas aeruginosa: rilevante per la sicurezza dei cosmetici e delle preparazioni galeniche",
          "Carica batterica a 22 °C e 37 °C: indica la qualità igienica complessiva dell'impianto",
          "pH e conducibilità: utili per verificare la stabilità chimica dell'acqua",
          "Cloro residuo: verifica dell'efficacia della disinfezione di rete",
        ],
      },
      {
        heading: "Frequenza dei controlli in farmacia",
        paragraphs: [
          "La frequenza dei controlli deve essere proporzionata al tipo di attività svolta. Una farmacia che non effettua preparazioni galeniche può limitarsi a un controllo annuale dell'acqua sanitaria distribuita ai servizi igienici e al banco. Una farmacia con laboratorio galenico attivo, soprattutto se realizza prodotti cosmetici personalizzati, dovrebbe prevedere una frequenza semestrale o trimestrale, integrando il controllo con verifiche straordinarie dopo interventi sull'impianto idrico.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "Se l'analisi rileva una non conformità microbiologica, il titolare deve sospendere l'uso dell'acqua per le preparazioni galeniche e cosmetiche, valutare il ritiro dei lotti eventualmente preparati di recente, attivare interventi di sanificazione e ripetere l'analisi. La documentazione del processo è essenziale per dimostrare la diligenza professionale in sede di ispezione e per gestire eventuali contestazioni dei clienti.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il prelievo va effettuato al rubinetto del laboratorio galenico e ai punti d'uso utilizzati per l'igiene del personale. È opportuno utilizzare un kit di prelievo con contenitori sterili forniti dal laboratorio e seguire le istruzioni per il campionamento microbiologico, inclusa la flambatura dell'erogatore.",
          "Il campione va spedito refrigerato. Al termine dell'analisi viene rilasciato un rapporto di prova che riporta i parametri ricercati, i metodi utilizzati e il giudizio di conformità, da archiviare insieme alla documentazione del laboratorio galenico.",
        ],
      },
      {
        heading: "Errori comuni nelle farmacie",
        paragraphs: [
          "Anche nelle farmacie ricorrono alcuni errori che riducono l'efficacia dei controlli sull'acqua.",
        ],
        bullets: [
          "Non distinguere tra acqua sanitaria e acqua dedicata alle preparazioni galeniche",
          "Trascurare la manutenzione dei sistemi di trattamento installati nel laboratorio",
          "Eseguire il prelievo da un rubinetto poco utilizzato anziché dal punto d'uso reale",
          "Non aggiornare la valutazione del rischio dopo l'apertura del laboratorio galenico",
          "Non conservare i rapporti di prova insieme alla documentazione del prodotto cosmetico",
        ],
      },
    ],
    faqs: [
      {
        q: "Una farmacia senza laboratorio galenico deve comunque analizzare l'acqua?",
        a: "Sì. L'acqua sanitaria distribuita nei locali aperti al pubblico rientra nel campo di applicazione del D.Lgs. 18/2023 e va sottoposta a controllo periodico anche in assenza di laboratorio galenico.",
      },
      {
        q: "Quali parametri sono importanti per un laboratorio galenico che prepara cosmetici?",
        a: "Oltre ai consueti indicatori di contaminazione fecale è opportuno verificare Pseudomonas aeruginosa e la carica batterica a 22 °C e 37 °C, perché rilevanti per la sicurezza microbiologica dei cosmetici prevista dal Regolamento CE 1223/2009.",
      },
      {
        q: "Con quale frequenza è opportuno ripetere l'analisi?",
        a: "Per la sola acqua sanitaria è ragionevole una frequenza annuale. Per le farmacie con laboratorio galenico attivo è consigliata una frequenza semestrale o trimestrale, da definire in base alla valutazione del rischio.",
      },
      {
        q: "Chi è responsabile della qualità dell'acqua all'interno della farmacia?",
        a: "Il titolare della farmacia è responsabile della qualità dell'acqua a partire dal punto di consegna interno. Per le preparazioni cosmetiche, il responsabile previsto dal Reg. CE 1223/2009 deve verificare anche la conformità dell'acqua utilizzata come ingrediente.",
      },
      {
        q: "Cosa fare in caso di rilievo di Pseudomonas aeruginosa?",
        a: "Occorre sospendere l'uso dell'acqua per le preparazioni, valutare il destino dei lotti recenti, sanificare l'impianto e ripetere l'analisi prima della ripresa dell'attività di laboratorio.",
      },
    ],
    ctaVariant: "microbiologica",
    ctaContext:
      "Per l'analisi microbiologica dell'acqua del tuo laboratorio galenico o dei punti d'uso della farmacia con un laboratorio qualificato:",
    relatedSectors: ["dentisti-studi-medici", "ospedali-pubblici-privati"],
  },
  {
    slug: "rsa-case-riposo",
    itName: "RSA e case di riposo",
    audience: "direttori sanitari, responsabili tecnici di RSA, gestori di case di riposo",
    shortTitle: "Analisi acqua per RSA e case di riposo: legionella e microbiologia",
    metaDescription:
      "Analisi acqua per RSA, case di riposo e residenze per anziani: rischio legionella, controlli microbiologici, parametri obbligatori e frequenza dei prelievi.",
    searchKeywords: [
      "analisi acqua rsa",
      "legionella casa di riposo",
      "controlli acqua residenza anziani",
      "obbligo analisi acqua rsa",
      "microbiologia acqua rsa",
      "linee guida legionella rsa",
    ],
    intro:
      "Le residenze sanitarie assistenziali e le case di riposo ospitano persone fragili, spesso anziane e con patologie croniche, particolarmente sensibili alle infezioni veicolate dall'acqua. La presenza di docce ad uso comune, impianti di acqua calda sanitaria estesi, terminali poco utilizzati e periodi di stasi della rete rende queste strutture tra i contesti a maggiore rischio per la legionellosi. Il quadro normativo di riferimento è dato dal D.Lgs. 18/2023 sulla potabilità, dalle Linee guida nazionali per la prevenzione e il controllo della legionellosi del 2015 e dalla normativa regionale sull'autorizzazione e l'accreditamento delle strutture socio-sanitarie.",
    normativeReferences: [
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Linee guida nazionali per la prevenzione e il controllo della legionellosi (Conferenza Stato-Regioni, 2015)",
      "Reg. UE 852/2004 per la cucina interna delle strutture",
      "Normativa regionale di autorizzazione e accreditamento delle strutture socio-assistenziali",
    ],
    requiredParameters: [
      "Legionella spp. (in particolare Legionella pneumophila)",
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Pseudomonas aeruginosa",
      "Carica batterica a 22 °C e 37 °C",
      "Temperatura dell'acqua calda sanitaria",
      "Cloro residuo",
    ],
    frequency:
      "Controlli legionella almeno annuali sui punti rappresentativi, con frequenze più strette per i punti distali e per le aree con utenza fragile; analisi microbiologica generale almeno semestrale, da intensificare in base alla valutazione del rischio prevista dalle Linee guida 2015.",
    sections: [
      {
        heading: "Perché l'acqua è critica nelle RSA",
        paragraphs: [
          "Nelle RSA convivono persone con difese immunitarie ridotte e impianti idrici complessi, con lunghi tratti di tubazione, terminali poco utilizzati e zone di accumulo dell'acqua calda. Queste condizioni favoriscono la formazione di biofilm e la proliferazione di Legionella, che si trasmette attraverso l'inalazione di aerosol prodotti dalle docce.",
          "Oltre alla legionellosi, i residenti possono essere esposti a infezioni causate da Pseudomonas aeruginosa e da cariche batteriche elevate, con conseguenze cliniche significative.",
        ],
      },
      {
        heading: "Obblighi normativi per le RSA",
        paragraphs: [
          "Le Linee guida nazionali per la prevenzione e il controllo della legionellosi del 2015 individuano le RSA come strutture a rischio elevato e richiedono la stesura di un documento di valutazione del rischio specifico, l'adozione di un piano di autocontrollo, la verifica periodica con campionamenti rappresentativi e la documentazione di ogni intervento.",
          "Il D.Lgs. 18/2023 disciplina la qualità dell'acqua destinata al consumo umano fino al punto d'uso, mentre la normativa regionale di autorizzazione e accreditamento può prevedere ulteriori obblighi documentali e ispettivi.",
        ],
      },
      {
        heading: "Parametri da analizzare nelle RSA",
        paragraphs: [
          "Il piano di controllo deve combinare parametri microbiologici di potabilità e ricerca della Legionella sui punti rappresentativi, con attenzione particolare alle docce dei bagni assistiti e ai terminali poco utilizzati.",
        ],
        bullets: [
          "Legionella spp. e Legionella pneumophila nei punti distali",
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Pseudomonas aeruginosa per gli ambienti ad alta umidità",
          "Carica batterica a 22 °C e 37 °C",
          "Temperatura dell'acqua calda sanitaria al punto d'uso",
          "Cloro residuo per verificare l'efficacia della disinfezione",
        ],
      },
      {
        heading: "Frequenza dei controlli nelle RSA",
        paragraphs: [
          "Le Linee guida 2015 raccomandano controlli almeno annuali per la Legionella nei punti rappresentativi e frequenze più strette per le aree a maggiore rischio, ad esempio i bagni assistiti e i reparti che ospitano residenti immunodepressi. L'analisi microbiologica generale di potabilità è opportuna almeno con cadenza semestrale.",
          "La frequenza va definita all'interno del documento di valutazione del rischio, in funzione della complessità dell'impianto e della tipologia di utenza.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di positività alla Legionella o di superamento dei limiti microbiologici, la struttura deve attivare le misure correttive previste dal piano: shock termico, disinfezione chimica, interventi sull'impianto, eventuale interdizione temporanea dei punti d'uso interessati e comunicazione all'ATS competente. Il piano deve prevedere il monitoraggio post-intervento per verificare il rientro nei parametri.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il campionamento per la Legionella prevede prelievi sia con flussaggio sia senza flussaggio, in funzione del tipo di informazione cercata. È opportuno coinvolgere un laboratorio qualificato che fornisca contenitori sterili, istruzioni operative e supporto alla pianificazione dei punti di prelievo.",
          "I rapporti di prova vanno archiviati insieme al registro degli interventi sull'impianto e resi disponibili in caso di ispezione dell'ATS.",
        ],
      },
      {
        heading: "Errori comuni nelle RSA",
        paragraphs: [
          "Tra gli errori più frequenti riscontrati nella gestione idrica delle RSA si segnalano alcune prassi che riducono l'efficacia del piano di controllo.",
        ],
        bullets: [
          "Concentrare i prelievi solo nei punti facilmente raggiungibili, escludendo i terminali distali",
          "Non aggiornare la valutazione del rischio dopo interventi strutturali",
          "Trascurare i terminali poco utilizzati durante i cambi di stanza",
          "Non monitorare la temperatura dell'acqua calda al punto d'uso",
          "Documentare gli interventi senza verifica analitica di efficacia",
        ],
      },
    ],
    faqs: [
      {
        q: "La ricerca della Legionella è obbligatoria in RSA?",
        a: "Le Linee guida nazionali del 2015 individuano le RSA come strutture a rischio elevato e richiedono un piano di autocontrollo con verifiche periodiche, inclusi i campionamenti per la Legionella nei punti rappresentativi.",
      },
      {
        q: "Con quale frequenza vanno effettuati i campionamenti?",
        a: "La frequenza dipende dalla valutazione del rischio. In via generale si effettuano controlli almeno annuali per la Legionella e semestrali per i parametri microbiologici di potabilità, con frequenze maggiori per i reparti a utenza più fragile.",
      },
      {
        q: "Quali punti vanno campionati?",
        a: "Vanno scelti punti rappresentativi dell'impianto, terminali distali, docce dei bagni assistiti e punti con storia di non conformità. La scelta va motivata nel documento di valutazione del rischio.",
      },
      {
        q: "Cosa fare in caso di positività alla Legionella?",
        a: "Occorre attivare le misure previste dal piano: bonifica termica o chimica, interdizione temporanea dei punti interessati, comunicazione all'ATS e verifica analitica del rientro nei parametri.",
      },
      {
        q: "Chi è responsabile dei controlli idrici nella RSA?",
        a: "La responsabilità ricade sul gestore della struttura, di norma rappresentato dal direttore sanitario o dal responsabile tecnico individuato nel documento di valutazione del rischio.",
      },
    ],
    ctaVariant: "microbiologica",
    ctaContext:
      "Per il piano di controllo Legionella e microbiologico della tua RSA o casa di riposo con un laboratorio qualificato:",
    relatedSectors: ["ospedali-pubblici-privati", "comunita-terapeutiche"],
  },
  {
    slug: "asili-nido-privati",
    itName: "Asili nido privati",
    audience: "gestori di asili nido privati, coordinatrici pedagogiche, responsabili HACCP",
    shortTitle: "Analisi acqua per asili nido privati: microbiologia e piombo",
    metaDescription:
      "Analisi acqua per asili nido privati: parametri microbiologici mensili, controllo del piombo nelle tubazioni e gestione dell'acqua per bambini sotto i tre anni.",
    searchKeywords: [
      "analisi acqua asilo nido",
      "controlli acqua nido privato",
      "piombo acqua asilo",
      "microbiologia acqua nido",
      "obbligo analisi acqua asilo nido",
      "haccp asilo nido",
    ],
    intro:
      "Gli asili nido privati ospitano bambini al di sotto dei tre anni, una fascia di età particolarmente vulnerabile sia ai contaminanti microbiologici sia a quelli chimici, in particolare al piombo. L'acqua viene utilizzata per preparare biberon, latte in polvere, pappe, per l'igiene dei bambini e per la pulizia degli ambienti. Il quadro normativo combina il Reg. UE 852/2004 per la parte alimentare, il D.Lgs. 18/2023 per la potabilità e i regolamenti regionali sull'autorizzazione al funzionamento dei servizi per la prima infanzia.",
    normativeReferences: [
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Reg. UE 852/2004 (igiene alimentare per la preparazione di pappe e biberon)",
      "Regolamenti regionali sui servizi educativi per la prima infanzia",
      "Indicazioni dell'Istituto Superiore di Sanità sull'esposizione al piombo nelle acque",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Pseudomonas aeruginosa",
      "Piombo",
      "Nichel",
      "Nitrati",
      "Cloro residuo",
    ],
    frequency:
      "Microbiologia ogni mese o ogni due mesi durante l'attività; controllo del piombo e dei metalli almeno annuale, da intensificare in caso di edifici storici o tubazioni di vecchia installazione.",
    sections: [
      {
        heading: "Perché l'acqua è critica negli asili nido",
        paragraphs: [
          "I bambini sotto i tre anni hanno un peso corporeo ridotto e un sistema immunitario in formazione, condizioni che amplificano sia il rischio infettivo sia l'impatto dei contaminanti chimici cronici come il piombo. L'acqua impiegata per preparare biberon, pappe e per l'igiene viene assunta o assorbita in quantità proporzionalmente maggiori rispetto agli adulti.",
          "Le tubazioni in piombo o leghe contenenti piombo, ancora presenti in edifici storici, possono rilasciare il metallo soprattutto dopo periodi di stasi notturna. Questo rende fondamentale il controllo periodico e l'adozione di buone pratiche di flussaggio mattutino.",
        ],
      },
      {
        heading: "Obblighi normativi per gli asili nido privati",
        paragraphs: [
          "Il D.Lgs. 18/2023 richiede la verifica della qualità dell'acqua al punto d'uso, con particolare attenzione ai contesti in cui l'utenza è composta da bambini piccoli. Il Reg. UE 852/2004 si applica alla preparazione di pappe e biberon, che rientra a tutti gli effetti nella produzione alimentare per il consumatore finale e va inquadrata in un piano HACCP.",
          "I regolamenti regionali sui servizi educativi per la prima infanzia possono prevedere obblighi aggiuntivi di controllo periodico e di rendicontazione all'ATS competente, in particolare per gli asili nido in convenzione.",
        ],
      },
      {
        heading: "Parametri da analizzare negli asili nido",
        paragraphs: [
          "Il pannello di analisi tipico combina microbiologia di base e parametri chimici sensibili per la fascia di età ospitata.",
        ],
        bullets: [
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Pseudomonas aeruginosa per le aree umide",
          "Piombo: parametro chiave per la fascia 0-3 anni",
          "Nichel: rilevante per i rubinetti di vecchia installazione",
          "Nitrati: rilevanti in zone agricole o con pozzo privato",
          "Cloro residuo per la verifica della disinfezione di rete",
        ],
      },
      {
        heading: "Frequenza dei controlli negli asili nido",
        paragraphs: [
          "Considerata la vulnerabilità dell'utenza, è opportuno adottare frequenze più strette rispetto agli altri esercizi: microbiologia mensile o bimestrale durante l'attività, controllo del piombo almeno annuale, con verifiche straordinarie dopo lunghi periodi di chiusura come le vacanze estive.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità microbiologica o di superamento del limite del piombo, l'asilo deve sospendere l'utilizzo dell'acqua per la preparazione di pappe e biberon, informare le famiglie con la trasparenza dovuta, attivare le azioni correttive (sanificazione, flussaggio prolungato, sostituzione di tratti di tubazione) e ripetere l'analisi.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il prelievo per il piombo va effettuato dopo una stasi notturna controllata, mentre per i parametri microbiologici è necessario seguire le procedure di flambatura e di utilizzo di contenitori sterili. È opportuno avvalersi di un kit di prelievo fornito da un laboratorio qualificato, con istruzioni passo passo.",
        ],
      },
      {
        heading: "Errori comuni negli asili nido",
        paragraphs: [
          "Tra gli errori riscontrati in fase di consulenza si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Non considerare la stasi notturna nei prelievi del piombo",
          "Effettuare controlli sporadici senza un calendario stabilito",
          "Utilizzare la stessa acqua di rete per la preparazione dei biberon senza valutazione del rischio",
          "Non riprendere i controlli dopo la chiusura estiva",
          "Non comunicare i risultati alle famiglie in modo trasparente",
        ],
      },
    ],
    faqs: [
      {
        q: "Con quale frequenza devo analizzare l'acqua dell'asilo nido?",
        a: "Considerata la vulnerabilità dell'utenza, è opportuno adottare microbiologia mensile o bimestrale e controllo del piombo almeno annuale, con verifiche straordinarie dopo lunghi periodi di chiusura.",
      },
      {
        q: "Perché serve il controllo del piombo?",
        a: "I bambini sotto i tre anni sono particolarmente vulnerabili al piombo, che può essere rilasciato da tubazioni o saldature in edifici storici. Il controllo periodico riduce il rischio di esposizione cronica.",
      },
      {
        q: "L'acqua del rubinetto è adatta per preparare i biberon?",
        a: "Può essere idonea se conforme ai parametri di legge e con tenore di nitrati basso. La valutazione va effettuata caso per caso sulla base dei rapporti di prova e delle indicazioni del pediatra di riferimento.",
      },
      {
        q: "Cosa fare se l'analisi rileva una non conformità?",
        a: "Sospendere l'uso dell'acqua per la preparazione di pappe e biberon, attivare le azioni correttive previste dal piano HACCP, informare le famiglie e ripetere l'analisi a sanificazione completata.",
      },
      {
        q: "Chi è responsabile dei controlli?",
        a: "Il gestore dell'asilo nido è responsabile della qualità dell'acqua al punto d'uso e della tenuta della documentazione, da esibire in caso di ispezione dell'ATS o degli organi regionali competenti.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Per il pannello completo microbiologia + piombo dell'acqua del tuo asilo nido con un laboratorio qualificato:",
    relatedSectors: ["asili-scuole", "fattorie-didattiche"],
  },
  {
    slug: "comunita-terapeutiche",
    itName: "Comunità terapeutiche",
    audience: "gestori di comunità terapeutiche, responsabili sanitari, coordinatori educativi",
    shortTitle: "Analisi acqua per comunità terapeutiche: controllo annuale",
    metaDescription:
      "Analisi acqua per comunità terapeutiche e residenziali: convivenza prolungata, controllo annuale, parametri microbiologici e gestione dell'impianto idrico.",
    searchKeywords: [
      "analisi acqua comunita terapeutica",
      "controlli acqua comunita residenziale",
      "microbiologia acqua comunita",
      "obbligo analisi acqua comunita terapeutica",
      "haccp comunita",
      "legionella comunita residenziale",
    ],
    intro:
      "Le comunità terapeutiche e residenziali ospitano persone in regime di convivenza prolungata, con utilizzo intensivo di docce, cucine interne e spazi condivisi. La presenza di utenza eterogenea, talvolta con patologie croniche o condizioni di fragilità, rende la qualità dell'acqua un fattore di sicurezza centrale. Il quadro normativo combina il D.Lgs. 18/2023, il Reg. UE 852/2004 per la cucina interna e la normativa regionale sull'autorizzazione delle strutture socio-sanitarie e socio-assistenziali.",
    normativeReferences: [
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Reg. UE 852/2004 (igiene alimentare per la cucina interna)",
      "Linee guida nazionali per la prevenzione e il controllo della legionellosi (2015)",
      "Normativa regionale sulle strutture socio-sanitarie e socio-assistenziali",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Legionella spp. nei punti rappresentativi",
      "Carica batterica a 22 °C e 37 °C",
      "pH",
      "Cloro residuo",
      "Nitrati",
    ],
    frequency:
      "Controllo annuale come base, con eventuale aggiunta di campionamenti per la Legionella nei punti rappresentativi e frequenze più strette in funzione della tipologia di utenza ospitata.",
    sections: [
      {
        heading: "Perché l'acqua è importante nelle comunità terapeutiche",
        paragraphs: [
          "Nelle comunità terapeutiche l'acqua è impiegata per la cucina, l'igiene personale, le pulizie e l'idratazione degli ospiti. La convivenza prolungata e l'utilizzo continuo dell'impianto rendono importante prevenire i rischi microbiologici, in particolare nelle docce comuni e nei punti di stasi.",
          "La presenza di ospiti con quadri clinici complessi, ad esempio in trattamento per dipendenze o disturbi psichiatrici, può aumentare la sensibilità individuale a infezioni veicolate dall'acqua.",
        ],
      },
      {
        heading: "Obblighi normativi per le comunità terapeutiche",
        paragraphs: [
          "Il D.Lgs. 18/2023 si applica all'acqua distribuita ai punti d'uso interni. Il Reg. UE 852/2004 si applica alla cucina interna, che va inquadrata in un piano HACCP completo di controlli periodici sull'acqua. La normativa regionale sulle strutture socio-sanitarie può prevedere obblighi aggiuntivi di rendicontazione e di tenuta documentale.",
          "Le Linee guida nazionali per la legionellosi del 2015 si applicano alle comunità con docce comuni e impianti di acqua calda sanitaria estesi.",
        ],
      },
      {
        heading: "Parametri da analizzare nelle comunità terapeutiche",
        paragraphs: [
          "Il pannello base comprende parametri microbiologici di potabilità e, ove pertinente, ricerca della Legionella sui punti rappresentativi.",
        ],
        bullets: [
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Legionella spp. nei punti distali e nelle docce comuni",
          "Carica batterica a 22 °C e 37 °C",
          "pH e cloro residuo",
          "Nitrati per le strutture in zone agricole",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Per le comunità terapeutiche a media utenza è ragionevole un controllo annuale dei parametri di potabilità, integrato da campionamenti per la Legionella in base alla valutazione del rischio. Le strutture con utenza più fragile o con impianti complessi possono richiedere frequenze semestrali.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità microbiologica o positività alla Legionella, occorre attivare le azioni correttive previste dal piano: sospensione dei punti d'uso interessati, sanificazione, comunicazione all'ATS competente, verifica analitica del rientro nei parametri e aggiornamento della documentazione.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il campionamento va programmato in accordo con il responsabile tecnico della struttura, individuando punti rappresentativi della cucina, dei bagni comuni e delle docce. È utile avvalersi di un kit di prelievo fornito dal laboratorio, con istruzioni per il campionamento microbiologico e per la Legionella.",
        ],
      },
      {
        heading: "Errori comuni nelle comunità terapeutiche",
        paragraphs: [
          "Tra gli errori più frequenti si segnalano alcune prassi che riducono l'efficacia dei controlli.",
        ],
        bullets: [
          "Affidarsi a un solo rapporto annuale senza piano scritto",
          "Non includere le docce comuni tra i punti di prelievo",
          "Non aggiornare la valutazione del rischio in caso di aumento degli ospiti",
          "Non monitorare la temperatura dell'acqua calda sanitaria",
          "Conservare la documentazione in modo frammentato",
        ],
      },
    ],
    faqs: [
      {
        q: "Quali controlli minimi servono in una comunità terapeutica?",
        a: "Il pannello base include i parametri microbiologici di potabilità e, ove rilevante, la ricerca della Legionella nei punti rappresentativi, con frequenza almeno annuale.",
      },
      {
        q: "Quando è opportuno aumentare la frequenza dei controlli?",
        a: "Quando la struttura ospita utenza più fragile, presenta impianti complessi o ha avuto in passato non conformità ricorrenti.",
      },
      {
        q: "Chi è responsabile dei controlli?",
        a: "Il gestore della comunità, di norma rappresentato dal responsabile sanitario o dal coordinatore tecnico individuato nella documentazione di autorizzazione.",
      },
      {
        q: "I controlli devono includere la Legionella?",
        a: "Sì, in tutte le strutture con docce comuni e impianti di acqua calda sanitaria estesi, in linea con le Linee guida nazionali del 2015.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Sospendere i punti d'uso interessati, attivare la sanificazione, informare l'ATS competente e ripetere l'analisi a interventi conclusi.",
      },
    ],
    ctaVariant: "microbiologica",
    ctaContext:
      "Per il controllo microbiologico e Legionella della tua comunità terapeutica con un laboratorio qualificato:",
    relatedSectors: ["rsa-case-riposo", "ospedali-pubblici-privati"],
  },
  {
    slug: "ostelli-residence",
    itName: "Ostelli e residence",
    audience: "gestori di ostelli, residence, case per ferie, appartamenti turistici",
    shortTitle: "Analisi acqua per ostelli e residence: frequenze diversificate",
    metaDescription:
      "Analisi acqua per ostelli e residence turistici: rischio legionella, parametri microbiologici, frequenze diversificate in funzione dell'occupazione stagionale.",
    searchKeywords: [
      "analisi acqua ostello",
      "controlli acqua residence",
      "legionella ostello",
      "obbligo analisi acqua struttura turistica",
      "acqua case per ferie",
      "haccp ostello",
    ],
    intro:
      "Ostelli, residence e case per ferie sono caratterizzati da occupazione variabile, frequente turn-over degli ospiti e impianti idrici spesso utilizzati in modo discontinuo, con periodi di stasi che favoriscono la proliferazione microbiologica. Il quadro normativo comprende il D.Lgs. 18/2023, le Linee guida nazionali per la legionellosi del 2015 e i regolamenti regionali sulle strutture ricettive non alberghiere.",
    normativeReferences: [
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Linee guida nazionali per la prevenzione e il controllo della legionellosi (2015)",
      "Reg. UE 852/2004 per le aree comuni con preparazione di alimenti",
      "Regolamenti regionali sulle strutture ricettive extra-alberghiere",
    ],
    requiredParameters: [
      "Legionella spp. nelle docce e nei punti distali",
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Carica batterica a 22 °C e 37 °C",
      "pH",
      "Cloro residuo",
    ],
    frequency:
      "Controlli annuali come base; frequenze più strette per le strutture aperte tutto l'anno o con alta affluenza, con verifiche straordinarie alla riapertura stagionale.",
    sections: [
      {
        heading: "Perché l'acqua è critica negli ostelli e residence",
        paragraphs: [
          "L'utenza turistica utilizza docce, lavandini e zone comuni con intensità variabile e in fasce orarie concentrate, mentre l'impianto resta a bassa o nulla utilizzazione nei periodi di chiusura. Questa alternanza favorisce la formazione di biofilm e la proliferazione di Legionella nei tratti di tubazione poco utilizzati.",
        ],
      },
      {
        heading: "Obblighi normativi per le strutture ricettive non alberghiere",
        paragraphs: [
          "Il D.Lgs. 18/2023 si applica all'acqua distribuita ai punti d'uso. Le Linee guida nazionali del 2015 includono le strutture turistiche tra quelle in cui adottare un piano di prevenzione della legionellosi proporzionato al rischio. I regolamenti regionali possono prevedere obblighi documentali specifici, in particolare per le strutture aperte stagionalmente.",
        ],
      },
      {
        heading: "Parametri da analizzare negli ostelli e residence",
        paragraphs: [
          "Il pannello tipico combina i parametri microbiologici di potabilità con la ricerca della Legionella nei punti rappresentativi.",
        ],
        bullets: [
          "Legionella spp. nelle docce e nei punti distali",
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Carica batterica a 22 °C e 37 °C",
          "pH e cloro residuo",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Per le strutture aperte tutto l'anno è ragionevole una frequenza annuale, con campionamenti aggiuntivi per la Legionella sui punti più critici. Le strutture stagionali devono prevedere un controllo prima della riapertura, dopo flussaggio completo dell'impianto, e un controllo periodico durante la stagione.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità, occorre attivare le misure correttive previste dal piano: sanificazione termica o chimica, interdizione temporanea dei punti d'uso interessati, comunicazione all'ATS competente e verifica analitica del rientro nei parametri.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il piano di campionamento deve includere docce delle camere o dei bagni comuni, punti distali e, ove presenti, terminali poco utilizzati. È utile coinvolgere un laboratorio qualificato che fornisca kit di prelievo e supporto alla definizione dei punti rappresentativi.",
        ],
      },
      {
        heading: "Errori comuni",
        paragraphs: [
          "Tra gli errori più frequenti nelle strutture turistiche non alberghiere si segnalano alcune prassi che riducono l'efficacia del controllo.",
        ],
        bullets: [
          "Riaprire dopo la stagione senza flussaggio adeguato",
          "Non includere le camere meno utilizzate nei prelievi",
          "Affidarsi a un unico rapporto annuale senza piano scritto",
          "Trascurare la manutenzione dei boiler e degli accumuli di acqua calda",
          "Non monitorare la temperatura al punto d'uso",
        ],
      },
    ],
    faqs: [
      {
        q: "Un ostello deve fare la ricerca della Legionella?",
        a: "Sì, in linea con le Linee guida nazionali del 2015 le strutture turistiche con docce comuni devono adottare un piano di prevenzione della legionellosi proporzionato al rischio.",
      },
      {
        q: "Con quale frequenza eseguire i controlli?",
        a: "Almeno annuale per le strutture aperte tutto l'anno, con un controllo aggiuntivo prima della riapertura per le strutture stagionali.",
      },
      {
        q: "Chi è responsabile?",
        a: "Il gestore della struttura, individuato nella documentazione regionale di autorizzazione.",
      },
      {
        q: "Come gestire le riaperture stagionali?",
        a: "Prevedere un flussaggio completo dell'impianto, una eventuale sanificazione e un controllo analitico prima dell'apertura agli ospiti.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Interdire temporaneamente i punti interessati, sanificare, informare l'ATS e ripetere l'analisi.",
      },
    ],
    ctaVariant: "microbiologica",
    ctaContext:
      "Per il piano di controllo del tuo ostello o residence con un laboratorio qualificato:",
    relatedSectors: ["hotel-bb", "b-and-b", "agriturismi"],
  },
  {
    slug: "piscine-private-condominiali",
    itName: "Piscine private e condominiali",
    audience: "amministratori di condominio, gestori di piscine private, responsabili tecnici",
    shortTitle: "Analisi acqua per piscine private e condominiali: DPR 152/2003",
    metaDescription:
      "Analisi acqua per piscine private e condominiali: parametri richiesti dal DPR 152/2003 e dall'Accordo Stato-Regioni 16/01/2003, frequenze e gestione del trattamento.",
    searchKeywords: [
      "analisi acqua piscina condominiale",
      "dpr 152 2003 piscine",
      "accordo stato regioni piscine",
      "controlli acqua piscina privata",
      "parametri piscina",
      "cloro combinato piscina",
    ],
    intro:
      "Le piscine private a uso collettivo e quelle condominiali rientrano nel campo di applicazione del DPR 152/2003 e dell'Accordo Stato-Regioni del 16 gennaio 2003, che disciplinano gli aspetti igienico-sanitari delle piscine. La gestione richiede controlli periodici sull'acqua di vasca, sul trattamento e sui parametri chimico-fisici, oltre a una valutazione del rischio igienico-ambientale.",
    normativeReferences: [
      "DPR 152/2003 (aspetti igienico-sanitari delle piscine)",
      "Accordo Stato-Regioni del 16 gennaio 2003 sugli aspetti igienico-sanitari delle piscine",
      "D.Lgs. 18/2023 per l'acqua di approvvigionamento",
      "Regolamenti regionali sulle piscine ad uso natatorio",
    ],
    requiredParameters: [
      "Cloro libero attivo",
      "Cloro combinato",
      "pH",
      "Temperatura",
      "Torbidità",
      "Carica batterica a 37 °C",
      "Escherichia coli",
      "Pseudomonas aeruginosa",
      "Stafilococchi patogeni",
    ],
    frequency:
      "Controlli giornalieri sui parametri chimico-fisici da parte del gestore; analisi microbiologiche periodiche con frequenza definita dall'Accordo Stato-Regioni e dai regolamenti regionali, di norma mensili durante l'uso.",
    sections: [
      {
        heading: "Perché l'acqua di piscina richiede controlli rigorosi",
        paragraphs: [
          "L'acqua di vasca è ricircolata e condivisa tra più utenti, condizione che facilita la diffusione di microrganismi patogeni se il trattamento non è gestito correttamente. Il bilanciamento tra cloro libero, cloro combinato e pH è centrale per garantire il potere disinfettante senza generare sottoprodotti irritanti o nocivi.",
        ],
      },
      {
        heading: "Obblighi normativi per le piscine",
        paragraphs: [
          "Il DPR 152/2003 e l'Accordo Stato-Regioni del 16 gennaio 2003 individuano i parametri da controllare, le frequenze minime e le responsabilità del gestore. La normativa regionale può prevedere obblighi documentali aggiuntivi e specifiche modalità di comunicazione all'ATS.",
          "Il gestore deve nominare un responsabile della piscina, redigere un protocollo di gestione igienico-sanitaria e conservare i registri delle misure giornaliere e dei rapporti di prova delle analisi microbiologiche.",
        ],
      },
      {
        heading: "Parametri da analizzare in piscina",
        paragraphs: [
          "L'Accordo Stato-Regioni individua un set di parametri obbligatori per la verifica della qualità dell'acqua di vasca.",
        ],
        bullets: [
          "Cloro libero attivo: indicatore del potere disinfettante",
          "Cloro combinato: indicatore della formazione di clorammine",
          "pH: condizione di efficacia del disinfettante",
          "Temperatura: incide sulla stabilità del trattamento",
          "Torbidità: indica efficacia della filtrazione",
          "Carica batterica a 37 °C",
          "Escherichia coli, Pseudomonas aeruginosa, Stafilococchi patogeni",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "I controlli chimico-fisici sui parametri di disinfezione vanno eseguiti giornalmente dal gestore, con strumentazione tarata, e registrati nell'apposito registro. Le analisi microbiologiche di laboratorio vanno eseguite periodicamente in base alle indicazioni regionali, di norma con cadenza mensile durante il periodo di apertura.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di superamento dei limiti, il gestore deve sospendere l'uso della vasca, intervenire sul trattamento, eseguire un controllo di verifica e documentare ogni passaggio. La comunicazione all'ATS competente può essere obbligatoria in funzione del parametro e del livello di superamento.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il campionamento per la microbiologia va effettuato in più punti della vasca e a profondità rappresentative, in accordo con le indicazioni dell'Accordo Stato-Regioni. È opportuno coinvolgere un laboratorio qualificato per la fornitura di contenitori sterili e per la pianificazione dei punti di prelievo.",
        ],
      },
      {
        heading: "Errori comuni nelle piscine",
        paragraphs: [
          "Tra gli errori riscontrati nella gestione delle piscine private e condominiali si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Affidarsi solo alle misure giornaliere senza analisi microbiologiche",
          "Non monitorare il cloro combinato, indicatore chiave del comfort",
          "Trascurare la manutenzione dei filtri",
          "Non documentare le azioni correttive dopo una non conformità",
          "Non aggiornare il protocollo di gestione in caso di modifiche all'impianto",
        ],
      },
    ],
    faqs: [
      {
        q: "Una piscina condominiale è soggetta al DPR 152/2003?",
        a: "Sì, quando è di fatto a uso collettivo. Il quadro di riferimento è completato dall'Accordo Stato-Regioni del 16 gennaio 2003 e dai regolamenti regionali.",
      },
      {
        q: "Quali parametri vanno misurati ogni giorno?",
        a: "I parametri chimico-fisici previsti dall'Accordo Stato-Regioni, in particolare cloro libero, cloro combinato, pH e temperatura, registrati su un apposito registro.",
      },
      {
        q: "Con quale frequenza eseguire le analisi microbiologiche?",
        a: "Di norma con cadenza mensile durante il periodo di apertura, salvo diverse indicazioni regionali.",
      },
      {
        q: "Cosa fare se il cloro combinato è elevato?",
        a: "Verificare il ricambio dell'acqua, la frequentazione e la funzionalità del trattamento; intervenire per riportare il valore entro i limiti previsti.",
      },
      {
        q: "Chi è responsabile?",
        a: "Il gestore della piscina, che deve nominare un responsabile e adottare un protocollo di gestione igienico-sanitaria conforme alla normativa.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Per il controllo microbiologico della tua piscina privata o condominiale con un laboratorio qualificato:",
    relatedSectors: ["palestre-piscine", "centri-sportivi-natatori"],
  },
  {
    slug: "pubblici-esercizi-bar-tabacchi",
    itName: "Pubblici esercizi e bar tabacchi",
    audience: "titolari di bar tabacchi, pubblici esercizi, chioschi",
    shortTitle: "Analisi acqua per bar tabacchi e pubblici esercizi: HACCP semplificato",
    metaDescription:
      "Analisi acqua per bar tabacchi e pubblici esercizi con somministrazione limitata: HACCP semplificato, parametri microbiologici e frequenza dei controlli.",
    searchKeywords: [
      "analisi acqua bar tabacchi",
      "haccp pubblico esercizio",
      "controlli acqua chiosco",
      "obbligo analisi acqua bar",
      "microbiologia acqua pubblico esercizio",
      "acqua somministrazione",
    ],
    intro:
      "I pubblici esercizi a somministrazione limitata, come bar tabacchi, chioschi e piccoli locali, utilizzano l'acqua per la preparazione di bevande, ghiaccio, caffè e per l'igiene del personale. Anche in assenza di una cucina vera e propria, il quadro normativo del Reg. UE 852/2004 si applica integralmente, in forma di HACCP semplificato proporzionato all'attività.",
    normativeReferences: [
      "Reg. UE 852/2004 (igiene alimentare)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Linee guida nazionali sui sistemi semplificati di autocontrollo",
      "Regolamenti regionali sulla somministrazione",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "pH",
      "Cloro residuo",
      "Torbidità",
    ],
    frequency:
      "Annuale come base; semestrale per esercizi ad alta affluenza, con verifiche straordinarie dopo riaperture o interventi sull'impianto idrico.",
    sections: [
      {
        heading: "Perché l'acqua è importante nei pubblici esercizi",
        paragraphs: [
          "Anche un bar tabacchi che si limita a preparare caffè, bevande e ghiaccio utilizza l'acqua come ingrediente principale di queste preparazioni. La presenza di macchine del caffè, depuratori sotto banco e produttori di ghiaccio richiede un monitoraggio adeguato della qualità dell'acqua.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Il Reg. UE 852/2004 si applica a tutte le attività di somministrazione, inclusi gli esercizi più piccoli, sotto forma di HACCP semplificato. Il piano deve identificare l'acqua come materia prima, prevedere controlli periodici e conservare i rapporti di prova.",
          "Il D.Lgs. 18/2023 individua il punto di consegna interno come quello giuridicamente rilevante, lasciando in capo all'operatore la responsabilità della qualità al rubinetto.",
        ],
      },
      {
        heading: "Parametri da analizzare",
        paragraphs: [
          "Il pannello base per i pubblici esercizi a somministrazione limitata è simile a quello dei ristoranti, ma con frequenze proporzionate alla minore complessità delle preparazioni.",
        ],
        bullets: [
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "pH e cloro residuo",
          "Torbidità",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "In assenza di indicazioni specifiche dell'ATS, una frequenza annuale è ragionevole per esercizi a media affluenza. Per esercizi con elevato passaggio o in zone turistiche è opportuno valutare un controllo semestrale.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità microbiologica, sospendere l'uso dell'acqua per le preparazioni, attivare le azioni correttive previste dal piano (sanificazione, sostituzione delle cartucce dei depuratori, sostituzione dei filtri del produttore di ghiaccio), ripetere l'analisi e archiviare la documentazione.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il prelievo va effettuato al punto d'uso reale, di norma il rubinetto del banco o quello dedicato al ghiaccio. È opportuno utilizzare un kit di prelievo fornito da un laboratorio qualificato e seguire scrupolosamente le istruzioni per la parte microbiologica.",
        ],
      },
      {
        heading: "Errori comuni",
        paragraphs: [
          "Tra gli errori più frequenti nei pubblici esercizi a somministrazione limitata si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Non sostituire le cartucce dei depuratori entro le tempistiche del produttore",
          "Non monitorare il produttore di ghiaccio",
          "Affidarsi al solo rapporto di prova del gestore acquedotto",
          "Non conservare la documentazione in modo organizzato",
          "Trascurare le riaperture dopo lunghe chiusure",
        ],
      },
    ],
    faqs: [
      {
        q: "Un bar tabacchi senza cucina deve fare l'analisi dell'acqua?",
        a: "Sì. Il Reg. UE 852/2004 si applica anche alla somministrazione limitata e prevede l'identificazione dell'acqua come materia prima soggetta a controllo periodico.",
      },
      {
        q: "Con quale frequenza?",
        a: "Di norma annuale per esercizi a media affluenza, semestrale per esercizi ad alta affluenza o in zone turistiche.",
      },
      {
        q: "Quali parametri sono importanti?",
        a: "Il pannello base comprende E. coli, coliformi totali, enterococchi intestinali, pH, cloro residuo e torbidità.",
      },
      {
        q: "Devo controllare anche il produttore di ghiaccio?",
        a: "Sì, il ghiaccio è considerato a tutti gli effetti un alimento e va prodotto con acqua conforme. È opportuno includere il filtro del produttore di ghiaccio nel piano di manutenzione.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Sospendere l'uso dell'acqua per le preparazioni, attivare le azioni correttive del piano HACCP e ripetere l'analisi a interventi conclusi.",
      },
    ],
    ctaVariant: "microbiologica",
    ctaContext:
      "Per l'analisi microbiologica HACCP del tuo bar tabacchi o pubblico esercizio con un laboratorio qualificato:",
    relatedSectors: ["ristoranti-bar", "panificatori-pasticceri"],
  },
  {
    slug: "cantine-vinicole",
    itName: "Cantine vinicole",
    audience: "titolari di cantine vinicole, enologi, responsabili HACCP",
    shortTitle: "Analisi acqua per cantine vinicole: uso di processo e acqua tecnica",
    metaDescription:
      "Analisi acqua per cantine vinicole: acqua di processo, lavaggio vasche e bottiglie, parametri microbiologici e chimici per la sicurezza dei prodotti enologici.",
    searchKeywords: [
      "analisi acqua cantina",
      "acqua processo enologia",
      "controlli acqua cantina vinicola",
      "haccp cantina",
      "acqua lavaggio bottiglie",
      "obbligo analisi acqua cantina",
    ],
    intro:
      "Nelle cantine vinicole l'acqua è impiegata per il lavaggio dei vasi vinari, delle bottiglie, delle attrezzature di cantina, per la preparazione di soluzioni di pulizia e, in alcuni casi, come acqua di processo a contatto indiretto con il prodotto. Il Reg. UE 852/2004 si applica alla cantina come operatore del settore alimentare, e il D.Lgs. 18/2023 disciplina la qualità dell'acqua distribuita ai punti d'uso.",
    normativeReferences: [
      "Reg. UE 852/2004 (igiene alimentare)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Norme tecniche di settore per la sanificazione delle attrezzature enologiche",
      "Disciplinari di produzione e linee guida regionali per il settore vitivinicolo",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Carica batterica a 22 °C e 37 °C",
      "pH",
      "Conducibilità",
      "Cloro residuo",
      "Durezza",
    ],
    frequency:
      "Annuale come base, con eventuali frequenze più strette in fase di vendemmia e di imbottigliamento, e dopo interventi sull'impianto idrico.",
    sections: [
      {
        heading: "Perché l'acqua è critica in cantina",
        paragraphs: [
          "Anche se l'acqua non è ingrediente del vino, viene a contatto con superfici e contenitori che entreranno in contatto con il prodotto. Una contaminazione microbiologica o chimica può alterare la qualità del vino e generare difetti organolettici, oltre a costituire una non conformità ai sensi del Reg. UE 852/2004.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Il Reg. UE 852/2004 individua la cantina come operatore del settore alimentare con obbligo di piano di autocontrollo. Il D.Lgs. 18/2023 si applica all'acqua distribuita ai punti d'uso interni. Le buone pratiche enologiche e i disciplinari di produzione possono prevedere ulteriori indicazioni sulla qualità dell'acqua tecnica.",
        ],
      },
      {
        heading: "Parametri da analizzare in cantina",
        paragraphs: [
          "Il pannello tipico combina i parametri microbiologici di potabilità con parametri chimici utili per la valutazione dell'acqua di processo.",
        ],
        bullets: [
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Carica batterica a 22 °C e 37 °C",
          "pH e conducibilità",
          "Cloro residuo",
          "Durezza, rilevante per la formazione di incrostazioni",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Una frequenza annuale costituisce la base per la maggior parte delle cantine. È opportuno integrare con controlli mirati prima della vendemmia e dell'imbottigliamento, fasi in cui l'utilizzo dell'acqua è particolarmente intenso.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità, occorre sospendere l'utilizzo dell'acqua per le operazioni a contatto con il prodotto, attivare le azioni correttive del piano HACCP, sanificare l'impianto e ripetere l'analisi.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il prelievo va effettuato in più punti rappresentativi: rubinetto della cantina, punti di lavaggio vasi vinari e linea di imbottigliamento. È opportuno avvalersi di un kit di prelievo fornito dal laboratorio.",
        ],
      },
      {
        heading: "Errori comuni in cantina",
        paragraphs: [
          "Alcuni errori frequenti riducono l'efficacia del controllo dell'acqua in cantina.",
        ],
        bullets: [
          "Considerare l'acqua tecnica come fuori dal campo di applicazione dell'HACCP",
          "Non includere la linea di imbottigliamento tra i punti di prelievo",
          "Trascurare la manutenzione dei filtri e dei sistemi di trattamento",
          "Eseguire i controlli solo a vendemmia conclusa",
          "Non aggiornare il piano dopo interventi strutturali",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua usata in cantina deve essere potabile?",
        a: "Sì, in quanto entra a contatto con superfici e contenitori che entreranno in contatto con il vino. Il Reg. UE 852/2004 richiede l'utilizzo di acqua conforme ai parametri di potabilità.",
      },
      {
        q: "Quali parametri controllare?",
        a: "Il pannello di base comprende i parametri microbiologici di potabilità e parametri chimici come pH, conducibilità e durezza, utili per gestire l'acqua tecnica.",
      },
      {
        q: "Con quale frequenza?",
        a: "Almeno annuale, con controlli aggiuntivi prima della vendemmia e dell'imbottigliamento.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Sospendere l'utilizzo per le operazioni a contatto con il prodotto, sanificare l'impianto e ripetere l'analisi.",
      },
      {
        q: "Chi è responsabile?",
        a: "Il titolare della cantina come operatore del settore alimentare, supportato dal responsabile HACCP interno.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Per il controllo dell'acqua di processo della tua cantina con un laboratorio qualificato:",
    relatedSectors: ["caseifici-piccoli", "agriturismi"],
  },
  {
    slug: "caseifici-piccoli",
    itName: "Caseifici di piccole dimensioni",
    audience: "titolari di caseifici artigianali, casari, responsabili HACCP",
    shortTitle: "Analisi acqua per caseifici di piccole dimensioni: Reg. UE 853/2004",
    metaDescription:
      "Analisi acqua per caseifici artigianali e di piccole dimensioni: requisiti del Reg. UE 853/2004 sui prodotti di origine animale, parametri microbiologici e frequenza.",
    searchKeywords: [
      "analisi acqua caseificio",
      "reg 853 2004 caseificio",
      "controlli acqua caseificio",
      "microbiologia acqua caseificio",
      "obbligo analisi acqua caseificio",
      "haccp caseificio",
    ],
    intro:
      "I caseifici di piccole dimensioni trattano latte e prodotti caseari freschi, ad alta sensibilità microbiologica. L'acqua viene utilizzata per il lavaggio delle attrezzature, dei tini, delle forme, dei locali di stagionatura e come ingrediente in alcune lavorazioni. Il Reg. UE 853/2004 sui requisiti specifici dei prodotti di origine animale si affianca al Reg. UE 852/2004 sull'igiene generale e impone l'utilizzo di acqua conforme ai parametri di potabilità.",
    normativeReferences: [
      "Reg. UE 852/2004 (igiene alimentare)",
      "Reg. UE 853/2004 (requisiti specifici per i prodotti di origine animale)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Linee guida regionali sui caseifici aziendali e artigianali",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Carica batterica a 22 °C e 37 °C",
      "Pseudomonas aeruginosa",
      "pH",
      "Cloro residuo",
      "Nitrati",
    ],
    frequency:
      "Almeno semestrale; trimestrale o mensile per le lavorazioni di latte crudo o per i caseifici aziendali in zone con approvvigionamento da pozzo.",
    sections: [
      {
        heading: "Perché l'acqua è critica nei caseifici",
        paragraphs: [
          "Il latte e i derivati freschi sono substrati ad alta sensibilità microbiologica. Anche una contaminazione minima dell'acqua impiegata per il lavaggio delle attrezzature può tradursi in difetti di prodotto e in non conformità rilevanti.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Il Reg. UE 853/2004 impone requisiti specifici per gli stabilimenti che trattano prodotti di origine animale, incluso il requisito che l'acqua utilizzata sia conforme ai parametri di potabilità. Il Reg. UE 852/2004 disciplina gli aspetti generali del piano di autocontrollo.",
        ],
      },
      {
        heading: "Parametri da analizzare nei caseifici",
        paragraphs: [
          "Il pannello tipico comprende i marcatori microbiologici di contaminazione fecale e ulteriori parametri rilevanti per la sicurezza dei prodotti caseari.",
        ],
        bullets: [
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Carica batterica a 22 °C e 37 °C",
          "Pseudomonas aeruginosa per le aree umide",
          "pH e cloro residuo",
          "Nitrati per i caseifici con approvvigionamento da pozzo",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Una frequenza almeno semestrale costituisce la base per i caseifici di piccole dimensioni. Per le lavorazioni di latte crudo o per i caseifici in zone con approvvigionamento da pozzo è opportuno aumentare la frequenza a trimestrale o mensile.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità, occorre sospendere le lavorazioni, attivare le azioni correttive del piano HACCP, valutare il destino dei lotti recenti e ripetere l'analisi a sanificazione completata.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il prelievo va effettuato in più punti: rubinetto del laboratorio, punti di lavaggio dei tini e zone di stagionatura. È opportuno avvalersi di un kit di prelievo fornito da un laboratorio qualificato.",
        ],
      },
      {
        heading: "Errori comuni nei caseifici",
        paragraphs: [
          "Tra gli errori più frequenti riscontrati nei caseifici artigianali si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Affidarsi a un unico prelievo all'anno",
          "Non considerare il pozzo nella valutazione del rischio",
          "Non monitorare la stagionatura",
          "Trascurare la manutenzione dei filtri",
          "Non includere i prelievi straordinari dopo interventi sull'impianto",
        ],
      },
    ],
    faqs: [
      {
        q: "Un caseificio aziendale con pozzo deve fare analisi più frequenti?",
        a: "Sì. L'approvvigionamento da pozzo aumenta il rischio di variabilità della qualità dell'acqua e richiede frequenze più strette, in linea con il Reg. UE 853/2004 e con le indicazioni regionali.",
      },
      {
        q: "Quali parametri sono importanti?",
        a: "Oltre ai consueti indicatori di contaminazione fecale, è opportuno includere Pseudomonas aeruginosa e nitrati per i caseifici con approvvigionamento da pozzo.",
      },
      {
        q: "Con quale frequenza?",
        a: "Almeno semestrale, da intensificare a trimestrale o mensile per lavorazioni di latte crudo e per caseifici con pozzo privato.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Sospendere le lavorazioni, attivare le azioni correttive del piano HACCP, valutare il destino dei lotti recenti e ripetere l'analisi a sanificazione completata.",
      },
      {
        q: "Chi è responsabile?",
        a: "Il titolare del caseificio come operatore del settore alimentare, con il supporto del responsabile HACCP individuato nel piano.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Per il controllo microbiologico e chimico dell'acqua del tuo caseificio con un laboratorio qualificato:",
    relatedSectors: ["cantine-vinicole", "agriturismi"],
  },
  {
    slug: "agriturismi",
    itName: "Agriturismi",
    audience: "titolari di agriturismi, gestori di aziende agrituristiche, responsabili HACCP",
    shortTitle: "Analisi acqua per agriturismi: Reg. UE 852/2004 e regolamenti regionali",
    metaDescription:
      "Analisi acqua per agriturismi: rispetto del Reg. UE 852/2004 e dei regolamenti regionali, controlli microbiologici per ristorazione e ospitalità.",
    searchKeywords: [
      "analisi acqua agriturismo",
      "controlli acqua agriturismo",
      "obbligo analisi acqua agriturismo",
      "haccp agriturismo",
      "acqua pozzo agriturismo",
      "microbiologia acqua agriturismo",
    ],
    intro:
      "Gli agriturismi combinano ospitalità, somministrazione e attività agricola, spesso con approvvigionamento idrico da pozzo o da sorgente. La qualità dell'acqua incide direttamente sulla sicurezza degli ospiti e sulla conformità del piano HACCP, in particolare per le aziende che offrono ristorazione con prodotti aziendali. Il quadro normativo comprende il Reg. UE 852/2004, il D.Lgs. 18/2023 e i regolamenti regionali sull'agriturismo.",
    normativeReferences: [
      "Reg. UE 852/2004 (igiene alimentare)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Regolamenti regionali sull'agriturismo e sulle aziende agrituristiche",
      "Linee guida nazionali per la prevenzione e il controllo della legionellosi (2015) per la parte ricettiva",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Carica batterica a 22 °C e 37 °C",
      "Nitrati",
      "Ammonio",
      "pH",
      "Cloro residuo",
    ],
    frequency:
      "Almeno semestrale per le aziende con ristorazione e con approvvigionamento da pozzo; annuale per le strutture con sola ospitalità e approvvigionamento da rete pubblica.",
    sections: [
      {
        heading: "Perché l'acqua è critica in agriturismo",
        paragraphs: [
          "L'agriturismo è un contesto particolare in cui l'acqua è impiegata sia per l'ospitalità (docce, lavandini, cucine di casa) sia per la trasformazione di prodotti aziendali. Quando l'approvvigionamento avviene da pozzo o da sorgente, la qualità dell'acqua è soggetta a maggiore variabilità rispetto alla rete pubblica.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Il Reg. UE 852/2004 si applica alla parte di somministrazione e trasformazione, mentre il D.Lgs. 18/2023 disciplina la qualità dell'acqua distribuita ai punti d'uso. I regolamenti regionali sull'agriturismo possono prevedere obblighi documentali aggiuntivi, in particolare per le aziende con ospitalità diffusa.",
        ],
      },
      {
        heading: "Parametri da analizzare in agriturismo",
        paragraphs: [
          "Il pannello tipico comprende i parametri microbiologici di base e parametri chimici rilevanti in zone agricole.",
        ],
        bullets: [
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Carica batterica a 22 °C e 37 °C",
          "Nitrati e ammonio per le aziende in zone agricole",
          "pH e cloro residuo",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Per gli agriturismi con ristorazione e approvvigionamento da pozzo è opportuno adottare una frequenza almeno semestrale. Per le aziende con sola ospitalità e approvvigionamento da rete pubblica è ragionevole una frequenza annuale, con un controllo aggiuntivo dopo lunghi periodi di chiusura.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità, occorre sospendere l'utilizzo dell'acqua per la ristorazione e la preparazione degli alimenti, attivare le azioni correttive del piano HACCP e ripetere l'analisi.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il prelievo va effettuato in più punti rappresentativi: cucina, sala colazione, docce delle camere e, ove presente, punto di approvvigionamento dal pozzo. È opportuno avvalersi di un kit di prelievo fornito da un laboratorio qualificato.",
        ],
      },
      {
        heading: "Errori comuni negli agriturismi",
        paragraphs: [
          "Tra gli errori più frequenti negli agriturismi si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Non includere il pozzo tra i punti di prelievo",
          "Affidarsi a un unico controllo annuale per le aziende con ristorazione",
          "Trascurare le riaperture stagionali",
          "Non considerare il rischio Legionella nelle docce dei bagni delle camere",
          "Non aggiornare il piano dopo modifiche all'impianto idrico",
        ],
      },
    ],
    faqs: [
      {
        q: "Un agriturismo con pozzo deve fare analisi più frequenti?",
        a: "Sì. L'approvvigionamento da pozzo aumenta la variabilità della qualità dell'acqua e richiede frequenze più strette, in particolare per le aziende con ristorazione.",
      },
      {
        q: "Quali parametri sono importanti?",
        a: "Oltre ai consueti indicatori di contaminazione fecale è opportuno includere nitrati e ammonio per le aziende in zone agricole.",
      },
      {
        q: "Con quale frequenza?",
        a: "Almeno semestrale per agriturismi con ristorazione e approvvigionamento da pozzo; annuale per le strutture con sola ospitalità e approvvigionamento da rete pubblica.",
      },
      {
        q: "Devo prevedere controlli per la Legionella?",
        a: "Sì, in linea con le Linee guida nazionali del 2015, in particolare per le strutture con docce nelle camere e impianti di acqua calda sanitaria estesi.",
      },
      {
        q: "Chi è responsabile?",
        a: "Il titolare dell'azienda agrituristica come operatore del settore alimentare e gestore della struttura ricettiva.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Per il controllo dell'acqua del tuo agriturismo, anche con approvvigionamento da pozzo, con un laboratorio qualificato:",
    relatedSectors: ["b-and-b", "fattorie-didattiche", "caseifici-piccoli"],
  },
  {
    slug: "b-and-b",
    itName: "Bed & Breakfast",
    audience: "gestori di B&B, affittacamere, piccole strutture ricettive",
    shortTitle: "Analisi acqua per B&B: controllo annuale di base",
    metaDescription:
      "Analisi acqua per B&B e affittacamere: controllo annuale di base, indicazioni dell'ATS, parametri microbiologici e gestione della colazione.",
    searchKeywords: [
      "analisi acqua bed and breakfast",
      "controlli acqua bnb",
      "obbligo analisi acqua bnb",
      "haccp bed and breakfast",
      "microbiologia acqua bnb",
      "legionella bed and breakfast",
    ],
    intro:
      "I bed & breakfast e gli affittacamere ospitano un numero limitato di ospiti in regime di ospitalità familiare, ma sono comunque soggetti agli obblighi del D.Lgs. 18/2023 sulla potabilità e, per la parte di colazione, al Reg. UE 852/2004. La presenza di docce in camera, di una piccola cucina condivisa e di periodi di chiusura tra una prenotazione e l'altra giustifica un controllo annuale di base sulla qualità dell'acqua.",
    normativeReferences: [
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Reg. UE 852/2004 per la preparazione della colazione",
      "Linee guida nazionali per la prevenzione e il controllo della legionellosi (2015)",
      "Regolamenti regionali sulle strutture ricettive extra-alberghiere",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Carica batterica a 22 °C e 37 °C",
      "pH",
      "Cloro residuo",
    ],
    frequency:
      "Annuale di base per le strutture con normale rotazione; semestrale per le strutture aperte tutto l'anno o ad alta affluenza turistica.",
    sections: [
      {
        heading: "Perché l'acqua è importante nei B&B",
        paragraphs: [
          "Anche le strutture più piccole utilizzano l'acqua per la colazione, per le docce delle camere e per la pulizia. La rotazione degli ospiti e i periodi di stasi tra una prenotazione e l'altra possono favorire la proliferazione microbiologica nelle tubazioni poco utilizzate.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Il D.Lgs. 18/2023 si applica a tutte le strutture ricettive, anche di piccole dimensioni. Il Reg. UE 852/2004 si applica alla preparazione della colazione, anche quando è di tipo familiare. Le Linee guida nazionali del 2015 sulla legionellosi forniscono indicazioni proporzionate al rischio.",
        ],
      },
      {
        heading: "Parametri da analizzare",
        paragraphs: [
          "Il pannello tipico comprende i parametri microbiologici di base, sufficienti per le piccole strutture con approvvigionamento da rete pubblica.",
        ],
        bullets: [
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Carica batterica a 22 °C e 37 °C",
          "pH e cloro residuo",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Una frequenza annuale è ragionevole per i B&B con normale rotazione di ospiti. Per le strutture aperte tutto l'anno o ad alta affluenza turistica è opportuno valutare una frequenza semestrale, con un controllo aggiuntivo dopo lunghe chiusure stagionali.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità, sospendere l'uso dell'acqua per la colazione, attivare le azioni correttive (sanificazione, flussaggio prolungato), informare l'ATS competente per i parametri più rilevanti e ripetere l'analisi.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il prelievo va effettuato al rubinetto della cucina e a una doccia rappresentativa. È utile avvalersi di un kit di prelievo fornito dal laboratorio.",
        ],
      },
      {
        heading: "Errori comuni nei B&B",
        paragraphs: [
          "Tra gli errori più frequenti nei B&B si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Considerare il B&B esente dagli obblighi del Reg. UE 852/2004 per la colazione",
          "Non eseguire un controllo aggiuntivo dopo lunghe chiusure",
          "Non documentare i rapporti di prova",
          "Trascurare le docce poco utilizzate",
          "Affidarsi solo al rapporto del gestore acquedotto",
        ],
      },
    ],
    faqs: [
      {
        q: "Un B&B familiare deve fare l'analisi dell'acqua?",
        a: "Sì. Il D.Lgs. 18/2023 si applica a tutte le strutture ricettive e il Reg. UE 852/2004 si applica alla preparazione della colazione, anche in ambito familiare.",
      },
      {
        q: "Con quale frequenza?",
        a: "Almeno annuale per le strutture con normale rotazione; semestrale per le strutture aperte tutto l'anno o ad alta affluenza.",
      },
      {
        q: "Quali parametri controllare?",
        a: "Il pannello base comprende E. coli, coliformi totali, enterococchi intestinali, carica batterica a 22 °C e 37 °C, pH e cloro residuo.",
      },
      {
        q: "Devo prevedere controlli per la Legionella?",
        a: "Sì, in linea con le Linee guida nazionali del 2015 e in funzione della valutazione del rischio della struttura.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Sospendere l'uso per la colazione, attivare le azioni correttive e ripetere l'analisi a interventi conclusi.",
      },
    ],
    ctaVariant: "microbiologica",
    ctaContext:
      "Per l'analisi microbiologica annuale del tuo bed & breakfast con un laboratorio qualificato:",
    relatedSectors: ["hotel-bb", "ostelli-residence", "agriturismi"],
  },
  {
    slug: "uffici-grandi-aziende",
    itName: "Uffici e grandi aziende",
    audience: "facility manager, responsabili HSE, datori di lavoro di grandi sedi",
    shortTitle: "Analisi acqua per uffici e grandi aziende: legionella e torri di raffreddamento",
    metaDescription:
      "Analisi acqua per uffici e grandi aziende: distribuzione interna, controllo Legionella nelle torri di raffreddamento, obblighi del D.Lgs. 81/2008.",
    searchKeywords: [
      "analisi acqua ufficio",
      "legionella torri raffreddamento",
      "controlli acqua azienda",
      "obbligo analisi acqua ufficio",
      "dlgs 81 2008 acqua",
      "legionella ufficio",
    ],
    intro:
      "Negli uffici e nelle grandi sedi aziendali l'acqua è impiegata per i servizi igienici, le aree ristoro, le mense interne e, in alcuni casi, per impianti di raffreddamento che generano aerosol. Il D.Lgs. 81/2008 sulla sicurezza nei luoghi di lavoro impone al datore di lavoro la valutazione e la gestione del rischio biologico, compreso quello connesso a Legionella e torri evaporative. Si aggiungono il D.Lgs. 18/2023 sulla qualità dell'acqua distribuita ai punti d'uso e le Linee guida nazionali del 2015 per la legionellosi.",
    normativeReferences: [
      "D.Lgs. 81/2008 (sicurezza nei luoghi di lavoro, rischio biologico)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Linee guida nazionali per la prevenzione e il controllo della legionellosi (2015)",
      "Reg. UE 852/2004 per eventuali mense interne",
    ],
    requiredParameters: [
      "Legionella spp. nelle torri di raffreddamento e nei punti distali",
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Carica batterica a 22 °C e 37 °C",
      "Temperatura dell'acqua calda sanitaria",
      "Cloro residuo",
    ],
    frequency:
      "Annuale come base; semestrale o trimestrale per le aziende con torri evaporative, sedi multipiano con impianti complessi o utenza vulnerabile.",
    sections: [
      {
        heading: "Perché l'acqua è importante negli uffici",
        paragraphs: [
          "Negli uffici l'acqua è impiegata principalmente per i servizi igienici e per le aree ristoro, ma le grandi sedi possono ospitare anche torri evaporative per il raffreddamento, distributori automatici di bevande, fontanelle e mense interne. La distribuzione interna è spesso estesa, con tratti di tubazione poco utilizzati nei piani con bassa occupazione.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Il D.Lgs. 81/2008 impone al datore di lavoro la valutazione del rischio biologico, compreso il rischio legionellosi connesso agli impianti idrici e alle torri evaporative. Le Linee guida nazionali del 2015 forniscono indicazioni operative per la valutazione del rischio e l'adozione di piani di controllo.",
          "Il D.Lgs. 18/2023 si applica all'acqua distribuita ai punti d'uso interni. Le mense aziendali rientrano nel campo di applicazione del Reg. UE 852/2004.",
        ],
      },
      {
        heading: "Parametri da analizzare negli uffici",
        paragraphs: [
          "Il pannello tipico per uffici e grandi sedi comprende la ricerca della Legionella, indispensabile in presenza di torri evaporative, e i parametri microbiologici di potabilità.",
        ],
        bullets: [
          "Legionella spp. nelle torri di raffreddamento e nei punti distali",
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Carica batterica a 22 °C e 37 °C",
          "Temperatura dell'acqua calda sanitaria al punto d'uso",
          "Cloro residuo per la verifica della disinfezione di rete",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Per gli uffici di piccole dimensioni può essere sufficiente una frequenza annuale. Per le sedi con torri evaporative o impianti complessi è opportuno adottare frequenze più strette, con campionamenti dedicati alle torri e ai punti distali, in coerenza con il documento di valutazione del rischio.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità, attivare le azioni correttive previste dal piano: bonifica termica o chimica, interdizione temporanea dei punti d'uso interessati, comunicazione all'ATS competente e verifica analitica del rientro nei parametri. Le risultanze vanno integrate nel documento di valutazione del rischio.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il piano di campionamento deve includere torri evaporative, punti distali e zone con bassa frequenza di utilizzo. È opportuno coinvolgere un laboratorio qualificato che fornisca kit di prelievo e supporto alla definizione dei punti rappresentativi.",
        ],
      },
      {
        heading: "Errori comuni negli uffici",
        paragraphs: [
          "Tra gli errori riscontrati nelle grandi sedi aziendali si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Non considerare le torri evaporative nella valutazione del rischio",
          "Concentrare i prelievi solo nei piani più frequentati",
          "Non monitorare la temperatura dell'acqua calda sanitaria",
          "Trascurare le zone uffici con bassa occupazione",
          "Non aggiornare il documento di valutazione del rischio dopo modifiche all'impianto",
        ],
      },
    ],
    faqs: [
      {
        q: "Un ufficio deve fare la ricerca della Legionella?",
        a: "In presenza di torri evaporative e di impianti che generano aerosol la valutazione del rischio prevista dal D.Lgs. 81/2008 e dalle Linee guida del 2015 conduce di norma all'inserimento della Legionella nel piano di controllo.",
      },
      {
        q: "Chi è responsabile?",
        a: "Il datore di lavoro, supportato dal responsabile del servizio di prevenzione e protezione e dal facility manager.",
      },
      {
        q: "Con quale frequenza?",
        a: "Almeno annuale per gli uffici di piccole dimensioni; semestrale o trimestrale per le sedi con torri evaporative o impianti complessi.",
      },
      {
        q: "Quali punti vanno campionati?",
        a: "Torri evaporative, punti distali, zone con bassa occupazione e punti rappresentativi della distribuzione interna.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Attivare le azioni correttive del piano, interdire temporaneamente i punti interessati, informare l'ATS e ripetere l'analisi.",
      },
    ],
    ctaVariant: "microbiologica",
    ctaContext:
      "Per il piano di controllo Legionella della tua sede aziendale o ufficio con un laboratorio qualificato:",
    relatedSectors: ["ospedali-pubblici-privati", "centri-sportivi-natatori"],
  },
  {
    slug: "ospedali-pubblici-privati",
    itName: "Ospedali pubblici e privati",
    audience: "direttori sanitari, responsabili tecnici ospedalieri, ingegneri clinici",
    shortTitle: "Analisi acqua per ospedali: legionella, dialisi e pazienti immunocompromessi",
    metaDescription:
      "Analisi acqua per ospedali pubblici e privati: rischio Legionella, dialisi, pazienti immunocompromessi, riferimenti alle Linee guida nazionali del 2015 e al D.Lgs. 18/2023.",
    searchKeywords: [
      "analisi acqua ospedale",
      "legionella ospedale",
      "acqua dialisi",
      "controlli acqua ospedale",
      "obbligo analisi acqua ospedale",
      "linee guida legionella ospedale",
    ],
    intro:
      "Gli ospedali pubblici e privati rappresentano il contesto più delicato per la gestione idrica: presenza di pazienti immunocompromessi, reparti di dialisi, sale operatorie, terapie intensive e impianti idrici di grande estensione richiedono un piano di controllo articolato e una valutazione del rischio dettagliata. Il quadro normativo combina le Linee guida nazionali per la legionellosi del 2015, il D.Lgs. 18/2023, il D.Lgs. 81/2008 e la normativa regionale sull'autorizzazione e l'accreditamento delle strutture sanitarie.",
    normativeReferences: [
      "Linee guida nazionali per la prevenzione e il controllo della legionellosi (2015)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "D.Lgs. 81/2008 (sicurezza nei luoghi di lavoro, rischio biologico)",
      "Normativa regionale di autorizzazione e accreditamento delle strutture sanitarie",
    ],
    requiredParameters: [
      "Legionella spp. nei punti rappresentativi dei reparti a rischio",
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Pseudomonas aeruginosa nei reparti critici",
      "Carica batterica a 22 °C e 37 °C",
      "Endotossine batteriche per la dialisi",
      "Cloro residuo",
    ],
    frequency:
      "Frequenze articolate per reparto, in linea con il documento di valutazione del rischio: campionamenti trimestrali o semestrali per i reparti critici, mensili o specifici per la dialisi, semestrali per i parametri di potabilità generale.",
    sections: [
      {
        heading: "Perché l'acqua è critica in ospedale",
        paragraphs: [
          "Negli ospedali l'acqua entra in contatto con pazienti la cui sensibilità alle infezioni è elevatissima. La dialisi richiede acqua trattata con elevatissimi requisiti microbiologici e chimici. I reparti di terapia intensiva, ematologia, oncologia e neonatologia ospitano pazienti immunocompromessi per i quali una contaminazione anche modesta può avere conseguenze gravi.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Le Linee guida nazionali del 2015 individuano gli ospedali come strutture a rischio molto elevato e richiedono un piano di valutazione e gestione del rischio dettagliato, articolato per reparto. Il D.Lgs. 18/2023 si applica all'acqua distribuita ai punti d'uso. Il D.Lgs. 81/2008 impone la valutazione del rischio biologico per il personale.",
          "La normativa regionale di accreditamento può prevedere obblighi documentali e di rendicontazione aggiuntivi, con verifiche periodiche da parte dell'ATS.",
        ],
      },
      {
        heading: "Parametri da analizzare in ospedale",
        paragraphs: [
          "Il piano di analisi è articolato per reparto e include parametri specifici per la dialisi.",
        ],
        bullets: [
          "Legionella spp. nei punti rappresentativi dei reparti critici",
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Pseudomonas aeruginosa nei reparti critici e nelle aree umide",
          "Carica batterica a 22 °C e 37 °C",
          "Endotossine batteriche per la dialisi",
          "Cloro residuo per la verifica della disinfezione di rete",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "La frequenza è definita all'interno del documento di valutazione del rischio in funzione del reparto: campionamenti trimestrali o semestrali per i reparti critici, monitoraggi più stretti e specifici per la dialisi, frequenze semestrali per i parametri di potabilità generale.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità, attivare immediatamente le azioni previste dal piano: interdizione temporanea dei punti d'uso interessati, bonifica termica o chimica, comunicazione alle direzioni sanitarie e all'ATS, verifica analitica del rientro nei parametri e aggiornamento del documento di valutazione del rischio. Per la dialisi è prevista una gestione specifica con sospensione delle attività sui circuiti interessati.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il piano di campionamento è definito dal documento di valutazione del rischio e prevede punti rappresentativi per ciascun reparto, con particolare attenzione a docce, terminali distali e linee della dialisi. Il supporto di un laboratorio qualificato è essenziale per la pianificazione e l'esecuzione delle attività.",
        ],
      },
      {
        heading: "Errori comuni in ospedale",
        paragraphs: [
          "Tra gli errori riscontrati nella gestione idrica ospedaliera si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Non differenziare il piano di controllo per reparto",
          "Non monitorare i terminali distali e quelli poco utilizzati",
          "Trascurare la verifica della temperatura dell'acqua calda sanitaria",
          "Non integrare la dialisi nel piano di valutazione del rischio",
          "Non aggiornare la documentazione dopo modifiche strutturali",
        ],
      },
    ],
    faqs: [
      {
        q: "Qual è il quadro normativo di riferimento per gli ospedali?",
        a: "Le Linee guida nazionali del 2015 sulla legionellosi, il D.Lgs. 18/2023 sulla potabilità, il D.Lgs. 81/2008 sulla sicurezza dei lavoratori e la normativa regionale di accreditamento.",
      },
      {
        q: "Con quale frequenza vanno effettuati i controlli?",
        a: "La frequenza è definita all'interno del documento di valutazione del rischio: trimestrale o semestrale per i reparti critici, con monitoraggi specifici per la dialisi.",
      },
      {
        q: "Quali parametri sono importanti per la dialisi?",
        a: "Per la dialisi sono fondamentali il controllo microbiologico, le endotossine batteriche e i parametri chimici dell'acqua trattata, secondo le indicazioni del produttore dell'impianto e delle linee guida di settore.",
      },
      {
        q: "Chi è responsabile?",
        a: "La direzione sanitaria, supportata dal responsabile tecnico e dal servizio di prevenzione e protezione.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Attivare immediatamente le misure previste dal piano: interdizione dei punti d'uso interessati, bonifica, comunicazione all'ATS e verifica analitica del rientro nei parametri.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Per il piano di controllo articolato del tuo presidio ospedaliero con un laboratorio qualificato:",
    relatedSectors: ["rsa-case-riposo", "dentisti-studi-medici", "uffici-grandi-aziende"],
  },
  {
    slug: "fattorie-didattiche",
    itName: "Fattorie didattiche",
    audience: "titolari di fattorie didattiche, coordinatori delle attività educative, responsabili HACCP",
    shortTitle: "Analisi acqua per fattorie didattiche: bambini e controlli microbiologici",
    metaDescription:
      "Analisi acqua per fattorie didattiche: tutela dei bambini in visita, parametri microbiologici, frequenza dei controlli e gestione dell'acqua di approvvigionamento.",
    searchKeywords: [
      "analisi acqua fattoria didattica",
      "controlli acqua fattoria didattica",
      "microbiologia acqua fattoria",
      "obbligo analisi acqua fattoria didattica",
      "haccp fattoria",
      "acqua pozzo fattoria didattica",
    ],
    intro:
      "Le fattorie didattiche accolgono gruppi di bambini e ragazzi in visita, spesso scolastica, e offrono attività che possono includere merende, laboratori di trasformazione e contatto con animali. La presenza di utenza vulnerabile e di approvvigionamento idrico spesso da pozzo aziendale rende centrale il controllo periodico della qualità dell'acqua. Il quadro normativo combina il Reg. UE 852/2004, il D.Lgs. 18/2023 e i regolamenti regionali sulle fattorie didattiche.",
    normativeReferences: [
      "Reg. UE 852/2004 (igiene alimentare)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "Regolamenti regionali sulle fattorie didattiche",
      "Linee guida regionali sulla prevenzione delle zoonosi nelle attività con animali",
    ],
    requiredParameters: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Carica batterica a 22 °C e 37 °C",
      "Nitrati",
      "Ammonio",
      "pH",
      "Cloro residuo",
    ],
    frequency:
      "Almeno semestrale durante il periodo di attività, con un controllo prima dell'avvio della stagione scolastica e dopo lunghi periodi di chiusura.",
    sections: [
      {
        heading: "Perché l'acqua è critica nelle fattorie didattiche",
        paragraphs: [
          "Le fattorie didattiche ospitano gruppi di bambini, spesso in fascia scolare bassa, particolarmente sensibili ai contaminanti microbiologici e chimici. L'approvvigionamento idrico avviene frequentemente da pozzo aziendale, condizione che aumenta la variabilità della qualità dell'acqua.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Il Reg. UE 852/2004 si applica alle merende e ai laboratori alimentari proposti durante le visite. Il D.Lgs. 18/2023 si applica all'acqua distribuita ai punti d'uso. I regolamenti regionali sulle fattorie didattiche possono prevedere obblighi documentali specifici, in particolare per le strutture iscritte nell'elenco regionale.",
        ],
      },
      {
        heading: "Parametri da analizzare nelle fattorie didattiche",
        paragraphs: [
          "Il pannello tipico comprende parametri microbiologici di base e parametri chimici rilevanti per il contesto agricolo.",
        ],
        bullets: [
          "Escherichia coli, coliformi totali, enterococchi intestinali",
          "Carica batterica a 22 °C e 37 °C",
          "Nitrati e ammonio per gli approvvigionamenti da pozzo in zone agricole",
          "pH e cloro residuo",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Una frequenza almeno semestrale durante il periodo di attività rappresenta la base. È opportuno aggiungere un controllo prima dell'avvio della stagione scolastica e dopo lunghe chiusure, considerata la vulnerabilità dell'utenza.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di non conformità, sospendere le merende e le attività che prevedono l'utilizzo dell'acqua, attivare le azioni correttive del piano HACCP, informare le scuole e i genitori in modo trasparente e ripetere l'analisi a sanificazione completata.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il prelievo va effettuato al rubinetto utilizzato per le merende, ai punti di igiene per i bambini e, ove presente, al punto di approvvigionamento dal pozzo. È opportuno avvalersi di un kit di prelievo fornito da un laboratorio qualificato.",
        ],
      },
      {
        heading: "Errori comuni",
        paragraphs: [
          "Tra gli errori più frequenti nelle fattorie didattiche si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Non includere il pozzo tra i punti di prelievo",
          "Eseguire i controlli solo all'avvio dell'attività",
          "Non aggiornare la valutazione del rischio in caso di nuove attività con animali",
          "Trascurare i punti d'uso per l'igiene dei bambini",
          "Non comunicare i risultati alle scuole in modo trasparente",
        ],
      },
    ],
    faqs: [
      {
        q: "Una fattoria didattica con pozzo deve fare analisi più frequenti?",
        a: "Sì, l'approvvigionamento da pozzo aumenta la variabilità della qualità dell'acqua e, considerando la vulnerabilità dell'utenza, richiede frequenze più strette.",
      },
      {
        q: "Quali parametri controllare?",
        a: "Il pannello base comprende i parametri microbiologici di potabilità e parametri chimici come nitrati e ammonio, rilevanti per gli approvvigionamenti da pozzo in zone agricole.",
      },
      {
        q: "Con quale frequenza?",
        a: "Almeno semestrale durante il periodo di attività, con un controllo prima dell'avvio della stagione scolastica.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Sospendere le merende, attivare le azioni correttive previste dal piano HACCP, informare le scuole e ripetere l'analisi.",
      },
      {
        q: "Chi è responsabile?",
        a: "Il titolare della fattoria didattica come operatore del settore alimentare e responsabile dell'attività educativa.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Per il controllo microbiologico e chimico della tua fattoria didattica con un laboratorio qualificato:",
    relatedSectors: ["agriturismi", "asili-nido-privati", "asili-scuole"],
  },
  {
    slug: "centri-sportivi-natatori",
    itName: "Centri sportivi natatori",
    audience: "gestori di centri sportivi con piscina, responsabili tecnici, direttori di impianto",
    shortTitle: "Analisi acqua per centri sportivi natatori: piscine, docce e spogliatoi",
    metaDescription:
      "Analisi acqua per centri sportivi natatori: parametri DPR 152/2003 e Accordo Stato-Regioni 16/01/2003 per le piscine, controlli sulle docce e sugli spogliatoi.",
    searchKeywords: [
      "analisi acqua centro natatorio",
      "controlli acqua centro sportivo",
      "legionella centro sportivo",
      "piscina pubblica controlli",
      "dpr 152 2003 centro natatorio",
      "docce spogliatoi legionella",
    ],
    intro:
      "I centri sportivi natatori combinano in un'unica struttura piscine ad uso collettivo, docce comuni, spogliatoi, aree benessere e talvolta vasche idromassaggio. Il quadro normativo è ampio e include il DPR 152/2003 e l'Accordo Stato-Regioni del 16 gennaio 2003 per le piscine, le Linee guida nazionali per la legionellosi del 2015 per le docce e i punti distali, il D.Lgs. 18/2023 per l'acqua di approvvigionamento e il D.Lgs. 81/2008 per la sicurezza dei lavoratori.",
    normativeReferences: [
      "DPR 152/2003 (aspetti igienico-sanitari delle piscine)",
      "Accordo Stato-Regioni del 16 gennaio 2003 sugli aspetti igienico-sanitari delle piscine",
      "Linee guida nazionali per la prevenzione e il controllo della legionellosi (2015)",
      "D.Lgs. 18/2023 (qualità acque destinate al consumo umano)",
      "D.Lgs. 81/2008 (sicurezza nei luoghi di lavoro)",
    ],
    requiredParameters: [
      "Cloro libero attivo, cloro combinato, pH, temperatura, torbidità in vasca",
      "Escherichia coli, Pseudomonas aeruginosa, Stafilococchi patogeni in vasca",
      "Legionella spp. nelle docce comuni e nei punti distali",
      "Carica batterica a 22 °C e 37 °C nei punti d'uso sanitari",
      "Cloro residuo nell'acqua sanitaria",
    ],
    frequency:
      "Controlli giornalieri sui parametri chimico-fisici delle vasche; analisi microbiologiche periodiche secondo le indicazioni regionali, di norma mensili; controlli Legionella nelle docce con frequenza definita dal documento di valutazione del rischio.",
    sections: [
      {
        heading: "Perché l'acqua è critica nei centri sportivi natatori",
        paragraphs: [
          "I centri sportivi natatori concentrano in un unico edificio condizioni di rischio diverse: vasche ad acqua ricircolata, docce comuni che generano aerosol, spogliatoi ad alta umidità, eventuali vasche idromassaggio. Ciascuno di questi elementi richiede un protocollo di gestione specifico.",
        ],
      },
      {
        heading: "Obblighi normativi",
        paragraphs: [
          "Il DPR 152/2003 e l'Accordo Stato-Regioni del 16 gennaio 2003 disciplinano la qualità dell'acqua di vasca, mentre le Linee guida nazionali del 2015 individuano le strutture con docce comuni come ad alto rischio per la legionellosi. Il D.Lgs. 18/2023 si applica all'acqua sanitaria distribuita ai punti d'uso, e il D.Lgs. 81/2008 impone la valutazione del rischio biologico per il personale della struttura.",
        ],
      },
      {
        heading: "Parametri da analizzare nei centri sportivi natatori",
        paragraphs: [
          "Il piano di controllo combina i parametri delle piscine e quelli dell'acqua sanitaria, con attenzione particolare alla Legionella nelle docce comuni.",
        ],
        bullets: [
          "Cloro libero attivo, cloro combinato, pH, temperatura, torbidità in vasca",
          "Escherichia coli, Pseudomonas aeruginosa, Stafilococchi patogeni in vasca",
          "Legionella spp. nelle docce comuni e nei punti distali",
          "Carica batterica a 22 °C e 37 °C nei punti d'uso sanitari",
          "Cloro residuo nell'acqua sanitaria",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "I parametri chimico-fisici delle vasche vanno misurati quotidianamente dal personale tecnico e registrati nel registro di gestione. Le analisi microbiologiche di laboratorio sulle vasche vanno eseguite con cadenza periodica, di norma mensile durante l'apertura. I controlli Legionella nelle docce vengono pianificati in base al documento di valutazione del rischio, con frequenza coerente con le Linee guida del 2015.",
        ],
      },
      {
        heading: "Cosa succede in caso di non conformità",
        paragraphs: [
          "In caso di superamento dei limiti in vasca, il gestore deve sospendere l'uso della vasca, intervenire sul trattamento e ripetere il controllo. In caso di positività alla Legionella nelle docce, attivare le misure correttive (bonifica termica o chimica, interdizione temporanea), informare l'ATS competente e verificare il rientro nei parametri.",
        ],
      },
      {
        heading: "Come organizzare il prelievo e l'analisi",
        paragraphs: [
          "Il piano di campionamento prevede prelievi rappresentativi sulle vasche, sulle docce comuni e sui punti distali dell'acqua sanitaria. È opportuno coinvolgere un laboratorio qualificato per la fornitura dei contenitori sterili e per la pianificazione dei punti di prelievo.",
        ],
      },
      {
        heading: "Errori comuni nei centri sportivi natatori",
        paragraphs: [
          "Tra gli errori più frequenti nei centri sportivi natatori si segnalano alcune prassi che meritano attenzione.",
        ],
        bullets: [
          "Concentrare il controllo solo sulle vasche, trascurando le docce",
          "Non monitorare il cloro combinato in vasca",
          "Trascurare la temperatura dell'acqua calda sanitaria",
          "Non aggiornare la valutazione del rischio dopo interventi sull'impianto",
          "Non documentare le azioni correttive dopo le non conformità",
        ],
      },
    ],
    faqs: [
      {
        q: "Un centro sportivo natatorio è soggetto al DPR 152/2003?",
        a: "Sì, per la parte di piscine ad uso collettivo. Il quadro è completato dall'Accordo Stato-Regioni del 16 gennaio 2003 e dai regolamenti regionali.",
      },
      {
        q: "Le docce comuni richiedono controlli specifici?",
        a: "Sì. Le Linee guida nazionali del 2015 individuano le strutture con docce comuni come ad alto rischio per la legionellosi e raccomandano un piano di controllo dedicato.",
      },
      {
        q: "Con quale frequenza eseguire i controlli microbiologici?",
        a: "Per le vasche, di norma mensili durante l'apertura; per la Legionella nelle docce, con frequenza coerente con il documento di valutazione del rischio.",
      },
      {
        q: "Chi è responsabile?",
        a: "Il gestore del centro sportivo, supportato dal responsabile della piscina e dal servizio di prevenzione e protezione.",
      },
      {
        q: "Cosa fare in caso di non conformità?",
        a: "Sospendere l'uso del punto interessato, attivare le azioni correttive previste dal piano, informare l'ATS competente e verificare il rientro nei parametri tramite ripetizione dell'analisi.",
      },
    ],
    ctaVariant: "completa",
    ctaContext:
      "Per il piano completo di controllo del tuo centro sportivo natatorio con un laboratorio qualificato:",
    relatedSectors: ["palestre-piscine", "piscine-private-condominiali", "uffici-grandi-aziende"],
  },
];
