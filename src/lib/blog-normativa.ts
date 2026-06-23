import type { BlogPost } from './blog-posts';

export const BLOG_NORMATIVA: BlogPost[] = [
  {
    slug: 'dm-26-marzo-1991-classificazione-acque',
    title: "DM 26 marzo 1991: la classificazione delle acque destinate al consumo umano in Italia",
    shortTitle: "DM 26 marzo 1991: classificazione acque",
    metaDescription:
      "Cos'è il DM 26 marzo 1991, come ha classificato le acque destinate al consumo umano in Italia e come si raccorda con la normativa europea e con il D.Lgs. 18/2023.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 8,
    searchKeywords: [
      'DM 26 marzo 1991',
      'classificazione acque potabili',
      'acque destinate al consumo umano',
      'normativa acqua potabile Italia',
      'requisiti acqua potabile',
    ],
    excerpt:
      "Il Decreto Ministeriale 26 marzo 1991 è uno dei pilastri storici della normativa italiana sull'acqua potabile. Pur essendo stato in larga parte superato dalle direttive europee e dal recente D.Lgs. 18/2023, conosce ancora oggi un'applicazione residuale e resta un riferimento culturale importante per capire come si è arrivati all'attuale sistema di tutela. In questa guida ricostruiamo la sua logica, le definizioni che ha introdotto, i requisiti di qualità che ha codificato e il modo in cui dialoga con il quadro normativo vigente, evitando semplificazioni e segnalando esplicitamente i punti in cui la disciplina è stata aggiornata.",
    sections: [
      {
        heading: "Il contesto storico del DM 26 marzo 1991",
        paragraphs: [
          "Il DM 26 marzo 1991 fu adottato dal Ministero della Sanità per dare attuazione alle prime direttive comunitarie sulle acque destinate al consumo umano, in particolare la direttiva 80/778/CEE. È un decreto che riflette la cultura tecnica dell'epoca: forte attenzione ai parametri chimici di base, controlli centrati sulle reti acquedottistiche pubbliche e un linguaggio ancora ispirato alle vecchie 'norme di buona tecnica' degli anni Settanta.",
          "All'epoca della sua entrata in vigore conviveva con il [DPR 236/1988](https://www.gazzettaufficiale.it/eli/id/1988/06/30/088G0277/sg), che era il provvedimento quadro per le acque potabili. Il DM specificava aspetti tecnici, dalle modalità di prelievo dei campioni alla frequenza dei controlli da parte delle autorità sanitarie locali.",
          "Conoscere questo decreto aiuta a comprendere perché ancora oggi gli operatori parlino di 'acque a destinazione umana' come categoria distinta da quelle minerali naturali, dalle acque di processo industriale e dalle acque irrigue, ciascuna con un proprio regime.",
        ],
      },
      {
        heading: "Le tre grandi categorie di acque destinate al consumo umano",
        paragraphs: [
          "Il decreto del 1991, insieme al DPR 236/1988, ha consolidato una distinzione che è rimasta nel linguaggio tecnico. Le acque destinate al consumo umano comprendono sia quelle erogate dalla rete pubblica sia quelle utilizzate dalle imprese alimentari per la produzione, e questa estensione è stata poi confermata dalla normativa europea successiva.",
          "Le acque minerali naturali e le acque di sorgente seguono un regime separato, regolato dal D.Lgs. 176/2011 e dalle norme di etichettatura. Le acque di balneazione, infine, restano disciplinate dal D.Lgs. 116/2008. Il DM 26 marzo 1991 contribuì a chiarire i confini fra questi mondi normativi.",
        ],
        bullets: [
          "Acque del rubinetto erogate da gestori del Servizio Idrico Integrato.",
          "Acque utilizzate dalle imprese alimentari nei processi produttivi.",
          "Acque imbottigliate non minerali, oggi disciplinate da norme specifiche.",
          "Acque di approvvigionamento privato (pozzi domestici), con regole semplificate ma non assenti.",
        ],
      },
      {
        heading: "Parametri di qualità: l'impianto del 1991",
        paragraphs: [
          "Il DM definiva limiti per parametri organolettici (odore, sapore, torbidità), chimici (nitrati, cloruri, metalli pesanti) e microbiologici (coliformi totali e fecali, streptococchi). Molti di questi valori sono stati successivamente rivisti, ma la struttura del sistema, basata su tre macrocategorie di parametri, è rimasta sostanzialmente la stessa.",
          "Una particolarità del 1991 era l'attenzione ai cosiddetti 'valori guida' e 'concentrazioni massime ammissibili'. La distinzione, oggi semplificata in 'valori di parametro' nel D.Lgs. 18/2023, serviva a separare obiettivi di qualità da soglie cogenti.",
        ],
      },
      {
        heading: "Il passaggio al D.Lgs. 31/2001 e al D.Lgs. 18/2023",
        paragraphs: [
          "Il DM 26 marzo 1991 è stato progressivamente sostituito dal D.Lgs. 31/2001, di recepimento della direttiva 98/83/CE, e oggi dal [D.Lgs. 23 febbraio 2023, n. 18](https://www.gazzettaufficiale.it/eli/id/2023/03/06/23G00025/sg), attuazione della direttiva (UE) 2020/2184.",
          "Questo non significa che il DM del 1991 sia stato cancellato senza eredità: molte modalità operative dei laboratori ATS e ARPA derivano da prassi consolidatesi in quel periodo. Per chi voglia approfondire come l'acqua del rubinetto arriva sicura a casa, una panoramica divulgativa è disponibile su [123acqua.com](https://123acqua.com/), una risorsa italiana dedicata ai temi della qualità e del trattamento dell'acqua potabile.",
        ],
      },
      {
        heading: "Cosa resta utile sapere oggi del DM 1991",
        paragraphs: [
          "Anche se non costituisce più la disciplina vigente, il DM 26 marzo 1991 viene ancora citato in alcune controversie e in atti tecnici che riguardano impianti storici. Conoscerlo aiuta a leggere documentazione di lunga data, capitolati di vecchi acquedotti e referti d'archivio.",
          "Per chi opera in laboratorio o nella distribuzione, riconoscere la genesi della normativa permette di valutare correttamente la coerenza fra storia degli impianti e nuove prescrizioni, anche in vista degli aggiornamenti dei piani di sicurezza dell'acqua (Water Safety Plans) richiesti dalla direttiva 2020/2184.",
        ],
      },
      {
        heading: "Come orientarsi nella catena normativa",
        paragraphs: [
          "Per ricostruire la cornice attuale conviene partire dalla direttiva (UE) 2020/2184, scendere al D.Lgs. 18/2023 e consultare le linee guida operative dell'Istituto Superiore di Sanità. Il riferimento ai DM più datati va fatto solo quando rilevante per il caso specifico.",
        ],
        bullets: [
          "Direttiva (UE) 2020/2184: cornice europea vigente.",
          "D.Lgs. 18/2023: recepimento nazionale.",
          "Linee guida ISS: applicazione tecnica.",
          "Regolamenti regionali: aspetti gestionali e ATS.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il DM 26 marzo 1991 è ancora in vigore?",
        a: "In larga parte no: è stato superato dal D.Lgs. 31/2001 e oggi dal D.Lgs. 18/2023. Alcune sue prescrizioni tecniche restano un riferimento storico utile per documentazione d'archivio.",
      },
      {
        q: "Riguarda anche l'acqua minerale in bottiglia?",
        a: "No. Le acque minerali naturali seguono una disciplina propria, oggi contenuta principalmente nel D.Lgs. 176/2011 e nei decreti attuativi.",
      },
      {
        q: "Quali parametri introduceva il decreto?",
        a: "Parametri organolettici, chimici (metalli, nitrati, cloruri) e microbiologici (coliformi, streptococchi). I valori sono stati aggiornati più volte dalla normativa successiva.",
      },
      {
        q: "Si applica anche ai pozzi privati?",
        a: "All'epoca le acque ad uso umano da pozzo privato erano disciplinate in modo più leggero. Oggi, in molte Regioni, restano in capo al privato gli obblighi di controllo periodico.",
      },
      {
        q: "Dove trovo il testo originale?",
        a: "Sul portale della Gazzetta Ufficiale e nelle raccolte ufficiali del Ministero della Salute. Le banche dati giuridiche italiane lo conservano integrale.",
      },
    ],
    relatedSlugs: ['dlgs-152-2006-tutela-acqua-ambiente', 'iss-istituto-superiore-sanita-acqua'],
    ctaContext: 'normativa storica acqua potabile e classificazione',
  },
  {
    slug: 'dlgs-152-2006-tutela-acqua-ambiente',
    title: "D.Lgs. 152/2006: il Testo Unico ambientale e la tutela delle acque in Italia",
    shortTitle: "D.Lgs. 152/2006: tutela delle acque",
    metaDescription:
      "Come il D.Lgs. 152/2006, il Testo Unico ambientale, disciplina la tutela delle acque superficiali e sotterranee in Italia: ambiti, autorità coinvolte e principali strumenti.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 9,
    searchKeywords: [
      'D.Lgs. 152/2006',
      'Testo Unico ambientale',
      'tutela delle acque',
      'scarichi normativa',
      'acque sotterranee',
    ],
    excerpt:
      "Il D.Lgs. 152/2006, noto come Testo Unico ambientale o Codice dell'Ambiente, è la cornice principale della tutela delle acque in Italia. Disciplina la qualità dei corpi idrici, gli scarichi, il servizio idrico integrato e le competenze amministrative tra Stato, Regioni ed enti locali. In questa guida ne ricostruiamo l'architettura, ci concentriamo sulla Parte Terza dedicata alla difesa del suolo e alla tutela delle acque, e mettiamo in fila i principali strumenti operativi, dalle autorizzazioni allo scarico ai piani di tutela regionali, fino al rapporto con la Direttiva Quadro Acque 2000/60/CE.",
    sections: [
      {
        heading: "Cos'è il Testo Unico ambientale",
        paragraphs: [
          "Il [D.Lgs. 3 aprile 2006, n. 152](https://www.gazzettaufficiale.it/eli/id/2006/04/14/006G0171/sg) è una raccolta organica della normativa ambientale italiana. Si compone di sei Parti, di cui la Terza è interamente dedicata alla difesa del suolo, alla lotta alla desertificazione, alla tutela delle acque dall'inquinamento e alla gestione delle risorse idriche.",
          "Il decreto attua e armonizza diverse direttive europee, fra cui la Direttiva Quadro Acque 2000/60/CE, la direttiva 91/271/CEE sulle acque reflue urbane e la direttiva 91/676/CEE sui nitrati di origine agricola. La sua impostazione è sistemica: parla di bacini idrografici, distretti, autorità di bacino e piani di gestione.",
        ],
      },
      {
        heading: "L'architettura della Parte Terza",
        paragraphs: [
          "La Parte Terza si articola in sezioni dedicate alla difesa del suolo, alla tutela delle acque dall'inquinamento e alla gestione delle risorse idriche. Ne discendono norme tecniche su scarichi, fognature, depurazione e qualità ambientale dei corpi idrici superficiali e sotterranei.",
          "Le competenze sono ripartite fra Stato (indirizzo e standard nazionali), Regioni (pianificazione locale e autorizzazioni), Province (in molte materie residuali) e Comuni, oltre agli Ambiti Territoriali Ottimali (ATO) per la gestione del Servizio Idrico Integrato.",
        ],
        bullets: [
          "Tutela qualitativa: limiti agli scarichi e standard di qualità ambientale.",
          "Tutela quantitativa: bilancio idrico e concessioni.",
          "Pianificazione: piani di tutela regionali e piani di gestione di distretto.",
          "Sanzioni: amministrative e penali per scarichi non autorizzati o in violazione.",
        ],
      },
      {
        heading: "Gli scarichi: cuore operativo del Codice",
        paragraphs: [
          "Il Titolo III della Parte Terza disciplina gli scarichi: il principio è che ogni scarico deve essere autorizzato dall'autorità competente e rispettare valori limite tabellari. Le tabelle dell'Allegato 5 distinguono fra scarichi in acque superficiali, in pubblica fognatura e sul suolo.",
          "Per gli impianti più rilevanti si applica l'Autorizzazione Integrata Ambientale (AIA), mentre per le altre attività vale l'autorizzazione ordinaria allo scarico. La giurisprudenza ha sviluppato una casistica ricca sulle definizioni di 'scarico', 'rifiuto liquido' e 'acque meteoriche di dilavamento'.",
        ],
      },
      {
        heading: "Il Servizio Idrico Integrato",
        paragraphs: [
          "Il D.Lgs. 152/2006 conferma il modello dell'Ambito Territoriale Ottimale e dell'affidamento a gestori unici per acquedotto, fognatura e depurazione. Le tariffe sono regolate a livello nazionale dall'Autorità di Regolazione per Energia Reti e Ambiente (ARERA).",
          "Sul piano della qualità del servizio, le indicazioni del decreto si combinano con i regolamenti ARERA e con il D.Lgs. 18/2023 sull'acqua potabile, formando un quadro complesso ma coerente. Per i cittadini interessati a capire da dove arriva l'acqua del rubinetto e come viene gestita, sintesi divulgative come quelle pubblicate da [123acqua.com sulla qualità dell'acqua in Italia](https://123acqua.com/) possono aiutare a leggere bollette e ordinanze.",
        ],
      },
      {
        heading: "Rapporto con la Direttiva Quadro Acque",
        paragraphs: [
          "La Direttiva 2000/60/CE ha introdotto l'obbligo di pianificazione per distretto idrografico, con l'obiettivo del 'buono stato' dei corpi idrici. Il D.Lgs. 152/2006 ne è il principale strumento di recepimento, e ha portato alla nascita dei distretti idrografici italiani e dei relativi piani di gestione, oggi aggiornati ogni sei anni.",
          "Le ARPA regionali svolgono il monitoraggio chimico, biologico ed ecologico necessario per la classificazione dei corpi idrici, mentre il Ministero dell'Ambiente coordina la reportistica verso l'Unione europea.",
        ],
      },
      {
        heading: "Sanzioni e responsabilità",
        paragraphs: [
          "Il Codice prevede sia sanzioni amministrative sia reati ambientali. Lo scarico senza autorizzazione di sostanze pericolose può configurare il reato previsto dall'art. 137. Le successive modifiche, in particolare quelle introdotte dalla L. 68/2015 sui delitti ambientali, hanno integrato la disciplina con reati come l'inquinamento ambientale e il disastro ambientale.",
        ],
        bullets: [
          "Scarico senza autorizzazione: reato in molti casi.",
          "Superamento dei limiti tabellari: sanzioni amministrative o penali.",
          "Inquinamento ambientale (art. 452-bis c.p.): introdotto nel 2015.",
          "Bonifica: obbligo a carico del responsabile.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il D.Lgs. 152/2006 riguarda solo le acque?",
        a: "No. È un Codice ambientale che disciplina VIA/VAS/AIA, rifiuti, aria, danno ambientale e acque. La Parte Terza è quella più specificamente dedicata all'acqua.",
      },
      {
        q: "Chi rilascia l'autorizzazione allo scarico?",
        a: "Dipende dal tipo di scarico e dal corpo recettore: in genere la Provincia o la Regione, oppure l'ente gestore se lo scarico è in pubblica fognatura.",
      },
      {
        q: "Cosa sono i piani di tutela delle acque?",
        a: "Strumenti regionali previsti dal Codice che individuano misure per raggiungere e mantenere gli obiettivi di qualità ambientale dei corpi idrici, in coerenza con i piani di distretto.",
      },
      {
        q: "Il decreto si applica all'acqua del rubinetto?",
        a: "Sulla parte qualità potabile no, perché quella è disciplinata dal D.Lgs. 18/2023. Sulla parte di tutela della risorsa e infrastrutture, sì.",
      },
      {
        q: "Come tiene il passo con l'Unione europea?",
        a: "Il Codice viene aggiornato periodicamente per recepire nuove direttive, fra cui quelle su reflui, nitrati, sostanze prioritarie e riuso delle acque depurate.",
      },
    ],
    relatedSlugs: ['dm-26-marzo-1991-classificazione-acque', 'struttura-arpa-regionali-controlli-acqua'],
    ctaContext: 'tutela ambientale acque e Servizio Idrico Integrato',
  },
  {
    slug: 'struttura-arpa-regionali-controlli-acqua',
    title: "ARPA regionali e controlli sull'acqua: chi fa cosa nel sistema italiano",
    shortTitle: "ARPA: i controlli ambientali sull'acqua",
    metaDescription:
      "Come funzionano le Agenzie Regionali per la Protezione dell'Ambiente (ARPA) nei controlli sull'acqua: ruoli, rapporti con ISPRA e ATS, monitoraggi e accesso ai dati.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 8,
    searchKeywords: [
      'ARPA',
      'controlli acqua Italia',
      'monitoraggio acque ARPA',
      'agenzie regionali ambiente',
      'SNPA',
    ],
    excerpt:
      "Quando si parla di controlli sull'acqua in Italia il riferimento più frequente sono le ARPA, le Agenzie Regionali per la Protezione dell'Ambiente. Sono però parte di un sistema più ampio, lo SNPA, che comprende ISPRA e le agenzie delle Province autonome. Il loro ruolo è distinto da quello delle ATS/ASL sanitarie. In questa guida facciamo ordine: chi sono le ARPA, da quali norme nascono, quali competenze hanno sull'acqua potabile, sui corpi idrici e sugli scarichi, come si relazionano con il livello centrale e come si possono consultare i loro dati pubblici.",
    sections: [
      {
        heading: "Da dove nascono le ARPA",
        paragraphs: [
          "Le ARPA sono state istituite a partire dalla Legge 61/1994, che ha creato l'ANPA (poi ISPRA) e ha previsto la nascita delle agenzie regionali. La Legge 132/2016 ha poi definito il [Sistema Nazionale per la Protezione dell'Ambiente (SNPA)](https://www.snpambiente.it/), che mette in rete ISPRA, le ARPA e le APPA delle Province autonome di Trento e Bolzano.",
          "Lo SNPA garantisce standard tecnici omogenei sul territorio, livelli essenziali delle prestazioni tecniche ambientali (LEPTA) e una rete di laboratori che parla la stessa lingua. Questo punto è cruciale per la confrontabilità dei dati di monitoraggio dell'acqua tra Regioni.",
        ],
      },
      {
        heading: "Cosa fanno le ARPA sull'acqua",
        paragraphs: [
          "Le ARPA monitorano i corpi idrici superficiali (fiumi, laghi, acque marino-costiere) e sotterranei secondo i piani di monitoraggio derivanti dalla Direttiva 2000/60/CE e dal D.Lgs. 152/2006. Si occupano anche dei controlli sugli scarichi industriali e su quelli derivanti dagli impianti di depurazione comunali.",
          "Sulle acque destinate al consumo umano la titolarità sanitaria resta in capo alle ATS/ASL, ma le ARPA forniscono supporto tecnico, in particolare nei laboratori e nelle indagini sugli inquinanti emergenti.",
        ],
        bullets: [
          "Monitoraggio chimico, biologico ed ecologico dei corpi idrici.",
          "Controlli sugli scarichi e sulle pressioni industriali.",
          "Indagini su contaminanti emergenti (PFAS, microplastiche, residui farmaceutici).",
          "Supporto tecnico ai procedimenti autorizzativi regionali.",
        ],
      },
      {
        heading: "Le ARPA e i piani di tutela",
        paragraphs: [
          "I piani di tutela delle acque, previsti dal D.Lgs. 152/2006, si basano sui dati raccolti dalle ARPA. Queste contribuiscono alla classificazione dello stato chimico ed ecologico dei corpi idrici e alle valutazioni di rischio richieste dalla pianificazione di distretto.",
          "La qualità di questo lavoro è cruciale: tutte le decisioni successive su autorizzazioni, deroghe e finanziamenti per le bonifiche poggiano su quei dati.",
        ],
      },
      {
        heading: "Rapporto con le ATS e con il gestore idrico",
        paragraphs: [
          "Il sistema italiano distingue il controllo ambientale (ARPA) dal controllo sanitario (ATS/ASL) e dal controllo interno del gestore. Sul rubinetto, l'utente trova quindi tre livelli: il gestore monitora la propria rete come previsto dal D.Lgs. 18/2023, l'ATS esegue controlli esterni, l'ARPA fornisce dati sulle fonti.",
          "Per chi vuole orientarsi tra etichette di analisi e referti, una panoramica divulgativa su [come leggere i dati di qualità dell'acqua su 123acqua.com](https://123acqua.com/) può essere un punto di partenza per cittadini e amministratori condominiali.",
        ],
      },
      {
        heading: "Trasparenza e accesso ai dati",
        paragraphs: [
          "Le ARPA pubblicano report periodici sullo stato delle acque, dati georeferenziati e bollettini specifici. Il portale SNPA aggrega molte di queste informazioni e consente confronti tra Regioni. Esiste inoltre il diritto di accesso ai dati ambientali ai sensi del [D.Lgs. 195/2005](https://www.gazzettaufficiale.it/eli/id/2005/09/19/005G0220/sg).",
          "Questo regime di accesso facilitato è particolarmente rilevante per gruppi di cittadini, ricercatori e comitati che vogliono monitorare situazioni di criticità locale.",
        ],
      },
      {
        heading: "Limiti e prospettive",
        paragraphs: [
          "Le ARPA operano con risorse molto diverse fra le Regioni, e questo può tradursi in capacità analitiche disomogenee. Lo SNPA, anche attraverso i LEPTA, sta lavorando per ridurre le distanze, ma è un processo di lungo periodo.",
          "Le nuove sfide riguardano i microinquinanti, i PFAS, i farmaci e i prodotti per la cura della persona: parametri non sempre già tabellati ma sempre più al centro del dibattito tecnico e politico.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le ARPA controllano l'acqua del rubinetto?",
        a: "Principalmente forniscono dati sulle fonti e supporto tecnico. I controlli sanitari sull'acqua del rubinetto spettano a ATS/ASL e ai gestori del servizio idrico.",
      },
      {
        q: "Posso chiedere io alle ARPA un'analisi della mia acqua di pozzo?",
        a: "Generalmente le ARPA non fanno analisi private. Per pozzi domestici occorre rivolgersi a laboratori privati accreditati o, in alcuni casi, ai laboratori delle ATS.",
      },
      {
        q: "Cos'è lo SNPA?",
        a: "Il Sistema Nazionale per la Protezione dell'Ambiente, istituito dalla L. 132/2016, che mette in rete ISPRA, ARPA e APPA delle Province autonome.",
      },
      {
        q: "Dove trovo i report ARPA della mia Regione?",
        a: "Sui siti istituzionali della singola ARPA, oltre che sul portale dello SNPA. Molte agenzie pubblicano dataset in formato aperto.",
      },
      {
        q: "Le ARPA fanno anche controlli sull'aria e sui rifiuti?",
        a: "Sì, sono agenzie multi-matrice. L'acqua è uno dei loro ambiti, accanto ad aria, suolo, rumore, campi elettromagnetici e rifiuti.",
      },
    ],
    relatedSlugs: ['dlgs-152-2006-tutela-acqua-ambiente', 'ats-asl-competenze-acqua-potabile'],
    ctaContext: 'controlli ambientali acque superficiali e sotterranee',
  },
  {
    slug: 'ats-asl-competenze-acqua-potabile',
    title: "ATS e ASL: chi controlla l'acqua potabile in Italia",
    shortTitle: "ATS/ASL: chi controlla l'acqua potabile",
    metaDescription:
      "ATS e ASL nei controlli sanitari sull'acqua potabile: competenze, ispezioni, deroghe, ordinanze di non potabilità e rapporti con gestori e Regioni.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 8,
    searchKeywords: [
      'ATS acqua potabile',
      'ASL controlli acqua',
      'ordinanza non potabilità',
      'competenze sanitarie acqua',
      'controllo esterno acqua',
    ],
    excerpt:
      "Le Aziende di Tutela della Salute (ATS) lombarde e le Aziende Sanitarie Locali (ASL) delle altre Regioni hanno un ruolo centrale nella tutela della salute dei cittadini sull'acqua potabile. Sono loro che eseguono il 'controllo esterno' previsto dalla normativa, autorizzano alcune deroghe, propongono al sindaco le ordinanze di non potabilità e gestiscono la cornice sanitaria dei consumi idrici. In questa guida ricostruiamo il quadro normativo, distinguiamo competenze sanitarie e ambientali e mettiamo in fila i casi tipici, da un superamento del valore di parametro a un episodio di torbidità improvvisa.",
    sections: [
      {
        heading: "ATS e ASL: cosa sono e come si organizzano",
        paragraphs: [
          "Le Aziende Sanitarie Locali sono il livello territoriale del Servizio Sanitario Nazionale, regolato in via generale dal [D.Lgs. 502/1992](https://www.gazzettaufficiale.it/eli/id/1993/01/07/093G0007/sg) e dalle leggi regionali. In Lombardia la riforma del 2015 ha riorganizzato il sistema in ATS e ASST, ma il quadro funzionale sulla tutela igienico-sanitaria è coerente con quello delle altre Regioni.",
          "Sull'acqua potabile la cornice tecnica è dettata dal D.Lgs. 18/2023, che ridefinisce ruoli e responsabilità del gestore e dell'autorità sanitaria competente. Quest'ultima coincide, in genere, con il Dipartimento di Igiene e Prevenzione Sanitaria dell'ATS o dell'ASL.",
        ],
      },
      {
        heading: "Controllo interno e controllo esterno",
        paragraphs: [
          "Il sistema si fonda su due livelli di controllo. Il controllo interno è in capo al gestore del servizio idrico, che esegue analisi periodiche secondo un piano. Il controllo esterno è in capo all'autorità sanitaria competente, che verifica con propri campionamenti la conformità dell'acqua alle prescrizioni.",
          "L'ATS/ASL pianifica i campionamenti tenendo conto della popolazione servita, della tipologia delle reti e dei rischi specifici, in coordinamento con il gestore e con il piano di sicurezza dell'acqua quando già implementato.",
        ],
        bullets: [
          "Controllo interno: a carico del gestore, su tutta la filiera.",
          "Controllo esterno: a carico di ATS/ASL, con campionamenti indipendenti.",
          "Coordinamento: previsto da norme nazionali e linee guida regionali.",
          "Trasparenza: report e dati di sintesi pubblicati periodicamente.",
        ],
      },
      {
        heading: "Le deroghe ai valori di parametro",
        paragraphs: [
          "Quando un parametro supera il valore previsto, la Regione, su istruttoria dell'ATS/ASL, può concedere una deroga temporanea ai sensi del D.Lgs. 18/2023, a condizione che non vi sia rischio per la salute. È uno strumento eccezionale che richiede informazione alla popolazione e misure di intervento sull'impianto.",
          "Le deroghe storicamente più note hanno riguardato l'arsenico in alcune zone del Lazio e i nitrati in alcuni areali agricoli. La trasparenza sulla gestione di queste deroghe è essenziale per la fiducia dei cittadini.",
        ],
      },
      {
        heading: "Ordinanze di non potabilità e gestione delle emergenze",
        paragraphs: [
          "Quando il rischio sanitario è concreto, l'ATS/ASL propone al sindaco l'ordinanza di non potabilità o di non uso. Il sindaco, in qualità di autorità sanitaria locale ai sensi della L. 833/1978, emette il provvedimento e attiva le misure di tutela: divieto di consumo, distribuzione di acqua in autobotte, ripristino tecnico, informazione capillare.",
          "Per i cittadini è importante sapere come reagire correttamente in queste situazioni: una sintesi divulgativa è disponibile in articoli generalisti come quelli ospitati su [123acqua.com sulla gestione domestica dell'acqua potabile](https://123acqua.com/), utili per non confondere segnali tecnici con allarmismi.",
        ],
      },
      {
        heading: "Pozzi privati e autoapprovvigionamento",
        paragraphs: [
          "Per le acque potabili da pozzo privato non destinate al pubblico l'ATS/ASL può essere coinvolta su segnalazione o per situazioni di rischio. In molte Regioni esistono linee guida che chiedono al privato di eseguire periodicamente analisi chimiche e microbiologiche.",
          "Nelle imprese alimentari, anche se utilizzano acqua di pozzo, l'autocontrollo HACCP impone verifiche periodiche, e l'ATS può esercitare i propri poteri ispettivi sia in fase ordinaria sia su segnalazione.",
        ],
      },
      {
        heading: "Rapporto con ARPA e con il livello centrale",
        paragraphs: [
          "L'ATS/ASL si occupa di salute, l'ARPA dell'ambiente. La distinzione è netta ma le aree di lavoro si toccano, in particolare sui contaminanti emergenti e sugli inquinamenti diffusi. Il Ministero della Salute e l'Istituto Superiore di Sanità forniscono linee guida e supporto tecnico in materia.",
        ],
      },
    ],
    faqs: [
      {
        q: "Posso chiedere all'ATS di analizzare l'acqua di casa mia?",
        a: "Di regola no, perché l'ATS si occupa di acque destinate al pubblico. Per analisi private occorre rivolgersi a laboratori accreditati.",
      },
      {
        q: "Chi emette l'ordinanza di non potabilità?",
        a: "Il sindaco, su proposta dell'ATS/ASL, in qualità di autorità sanitaria locale.",
      },
      {
        q: "Cos'è una deroga ai valori di parametro?",
        a: "Una autorizzazione temporanea, prevista dal D.Lgs. 18/2023, a fornire acqua con un parametro superiore al limite a condizione che non vi sia rischio sanitario e si attivino interventi.",
      },
      {
        q: "ATS e ARPA fanno lo stesso lavoro?",
        a: "No. ATS/ASL controllano la salute pubblica, ARPA l'ambiente. Le due competenze si integrano nei casi complessi.",
      },
      {
        q: "Come faccio a sapere se ci sono ordinanze nel mio Comune?",
        a: "Sull'albo pretorio comunale online, sulla sezione 'avvisi alla cittadinanza' e tramite comunicati stampa dell'ente locale.",
      },
    ],
    relatedSlugs: ['struttura-arpa-regionali-controlli-acqua', 'ministero-salute-linee-guida-legionella-2015'],
    ctaContext: 'controlli sanitari acqua potabile e ordinanze comunali',
  },
  {
    slug: 'accordo-stato-regioni-piscine-2003',
    title: "Accordo Stato-Regioni del 16 gennaio 2003: la disciplina delle piscine in Italia",
    shortTitle: "Accordo Stato-Regioni piscine 2003",
    metaDescription:
      "L'Accordo Stato-Regioni del 16 gennaio 2003 sulle piscine: definizioni, requisiti igienico-sanitari, parametri dell'acqua e applicazione nelle Regioni.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 8,
    searchKeywords: [
      'Accordo Stato-Regioni piscine 2003',
      'normativa piscine Italia',
      'requisiti igienici piscine',
      'qualità acqua piscina',
      'gestione piscine pubbliche',
    ],
    excerpt:
      "L'Accordo Stato-Regioni del 16 gennaio 2003 è il riferimento principale per la disciplina igienico-sanitaria delle piscine in Italia. Non è una legge in senso stretto ma un atto di intesa che ha guidato i regolamenti regionali e ha definito un linguaggio tecnico comune. In questa guida ricostruiamo i contenuti dell'Accordo, le categorie di piscine, i parametri di qualità dell'acqua, gli obblighi gestionali per i titolari e l'evoluzione successiva, con particolare attenzione al ruolo delle ATS/ASL e alle responsabilità nelle strutture sportive, turistiche e condominiali.",
    sections: [
      {
        heading: "Cos'è l'Accordo Stato-Regioni del 16 gennaio 2003",
        paragraphs: [
          "L'Accordo, sancito ai sensi dell'art. 4 del [D.Lgs. 281/1997](https://www.gazzettaufficiale.it/eli/id/1997/08/30/097G0349/sg) sulla Conferenza Stato-Regioni, ha definito gli aspetti igienico-sanitari per la costruzione, la manutenzione e la vigilanza delle piscine ad uso natatorio. È un atto rilevante perché ha riempito il vuoto lasciato dall'assenza di una legge nazionale specifica.",
          "Le Regioni hanno poi recepito l'Accordo con leggi e regolamenti propri, sviluppando soluzioni adattate al proprio contesto. Per chi gestisce una piscina, conoscere sia l'Accordo sia la normativa regionale è essenziale.",
        ],
      },
      {
        heading: "Le categorie di piscine",
        paragraphs: [
          "L'Accordo distingue diverse categorie: piscine pubbliche, piscine ad uso collettivo (alberghiere, condominiali, di campeggi e villaggi, di palestre e centri sportivi) e piscine ad uso esclusivamente privato. Le piscine a finalità terapeutica e quelle ad acqua di mare seguono regole specifiche.",
          "La distinzione non è formale: cambia in modo significativo il livello degli obblighi gestionali, la frequenza dei controlli e i requisiti tecnici degli impianti.",
        ],
        bullets: [
          "Piscine pubbliche di tipo A: aperte al pubblico in modo generalizzato.",
          "Piscine di tipo B: ad uso collettivo (hotel, campeggi, condominî, palestre).",
          "Piscine di tipo C: ad uso esclusivamente privato.",
          "Piscine speciali: terapeutiche, di balneazione marina, parchi acquatici.",
        ],
      },
      {
        heading: "I parametri dell'acqua di piscina",
        paragraphs: [
          "L'Accordo individua parametri chimici, microbiologici e organolettici dell'acqua di vasca e dell'acqua di approvvigionamento. Tra i parametri chiave figurano cloro libero attivo, cloro combinato, pH, sottoprodotti della disinfezione, carica batterica totale, Pseudomonas aeruginosa e Legionella.",
          "Per il bagnante, il rispetto di questi parametri si traduce in acqua chiara, senza eccessivo odore di cloro e con pH compatibile con la pelle e gli occhi. Sintesi divulgative come quelle pubblicate su [123acqua.com sulla qualità e il trattamento dell'acqua](https://123acqua.com/) aiutano a capire la differenza fra acqua di rete e acqua di piscina e perché non vanno confuse.",
        ],
      },
      {
        heading: "Obblighi del gestore",
        paragraphs: [
          "Il responsabile della piscina deve dotarsi di un piano di autocontrollo, registrare i parametri rilevati più volte al giorno, mantenere efficiente l'impianto di trattamento (filtrazione, disinfezione, ricircolo) e garantire la formazione del personale tecnico. È un sistema concettualmente analogo all'HACCP per gli alimenti.",
          "I controlli esterni sono affidati alle ATS/ASL, che possono ispezionare in qualunque momento e disporre la chiusura temporanea in caso di non conformità gravi.",
        ],
      },
      {
        heading: "Responsabilità e profili giuridici",
        paragraphs: [
          "Sul piano della responsabilità, il gestore risponde sia in via amministrativa, per le sanzioni previste dai regolamenti regionali, sia in via civile e penale in caso di lesioni o malattie connesse a non conformità igieniche. La gestione del rischio Legionella, ad esempio, è una delle aree più sensibili nei centri benessere con vasche idromassaggio.",
        ],
      },
      {
        heading: "Evoluzione e prospettive",
        paragraphs: [
          "Diverse Regioni hanno aggiornato le proprie norme tecniche dopo il 2003 con linee guida per impianti specifici (vasche idromassaggio, spray park, vasche per neonati). Il dibattito attuale verte sull'esigenza di una norma nazionale aggiornata e più organica, anche per allineare i requisiti ai progressi tecnologici nei sistemi di disinfezione.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'Accordo del 2003 è una legge?",
        a: "No. È un atto della Conferenza Stato-Regioni che fornisce un quadro tecnico comune. La forza vincolante deriva dai regolamenti regionali di recepimento.",
      },
      {
        q: "Quali parametri devo controllare se gestisco una piscina condominiale?",
        a: "Almeno cloro libero, cloro combinato, pH, temperatura e parametri microbiologici previsti dall'Accordo, secondo la frequenza fissata dalla normativa regionale.",
      },
      {
        q: "Chi vigila sul rispetto delle regole?",
        a: "L'ATS/ASL territorialmente competente, che può eseguire ispezioni e campionamenti.",
      },
      {
        q: "Le piscine private familiari rientrano nell'Accordo?",
        a: "Sono trattate come categoria C, con vincoli minimi rispetto alle piscine pubbliche e collettive.",
      },
      {
        q: "Esistono regole specifiche per le vasche idromassaggio?",
        a: "Sì. Diverse Regioni hanno linee guida specifiche, in particolare per il rischio Legionella. Si rinvia in genere alle Linee guida nazionali del Ministero della Salute.",
      },
    ],
    relatedSlugs: ['ministero-salute-linee-guida-legionella-2015', 'ats-asl-competenze-acqua-potabile'],
    ctaContext: 'igiene e qualità acqua piscine e centri benessere',
  },
  {
    slug: 'ministero-salute-linee-guida-legionella-2015',
    title: "Linee guida nazionali per la prevenzione della legionellosi (2015)",
    shortTitle: "Linee guida legionellosi 2015",
    metaDescription:
      "Le Linee guida del Ministero della Salute del 2015 sulla prevenzione della legionellosi: ambito di applicazione, valutazione del rischio e piani di controllo.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 9,
    searchKeywords: [
      'Linee guida legionella',
      'prevenzione legionellosi',
      'valutazione rischio Legionella',
      'piano controllo Legionella',
      'Ministero Salute legionella 2015',
    ],
    excerpt:
      "Le Linee guida nazionali per la prevenzione e il controllo della legionellosi, approvate dalla Conferenza Stato-Regioni nel 2015, sono il riferimento di base per chi gestisce strutture sanitarie, alberghi, centri benessere e qualunque impianto idrico complesso. Senza essere una legge in senso formale, sono richiamate da numerosi atti regionali e da pronunce di responsabilità. In questa guida ripercorriamo il loro impianto, le categorie di rischio, gli obblighi di valutazione e i piani di controllo, soffermandoci sulle attese pratiche di un'ispezione.",
    sections: [
      {
        heading: "Il quadro normativo della legionellosi",
        paragraphs: [
          "Le Linee guida del 7 maggio 2015 sostituiscono le precedenti versioni del 2000 e del 2005. Sono state approvate dalla Conferenza Stato-Regioni e pubblicate dal [Ministero della Salute](https://www.salute.gov.it/portale/temi/legionellosi.jsp). Forniscono un quadro tecnico-scientifico per la prevenzione e il controllo della malattia nei contesti più a rischio.",
          "La legionellosi è una infezione respiratoria causata dal batterio Legionella, che prolifera in impianti idrici complessi quando temperatura, stagnazione e materiali concorrono. Il riferimento normativo principale, oltre alle Linee guida, è il sistema di sorveglianza dell'Istituto Superiore di Sanità.",
        ],
      },
      {
        heading: "A chi si applicano",
        paragraphs: [
          "Le Linee guida si applicano in particolare a strutture sanitarie e socio-sanitarie, strutture turistico-ricettive, navi e impianti termali, impianti sportivi, scuole, edifici pubblici con torri di raffreddamento e impianti tecnologici a rischio.",
          "Il principio guida è la valutazione del rischio caso per caso: non esiste un protocollo unico per tutte le strutture, ma esistono criteri minimi che ogni gestore deve documentare nel proprio piano.",
        ],
        bullets: [
          "Strutture sanitarie e RSA: massima attenzione, popolazione fragile.",
          "Alberghi e B&B: rischio collegato alla stagionalità e alla stagnazione.",
          "Centri benessere e piscine con vasche idromassaggio.",
          "Edifici pubblici con torri evaporative.",
        ],
      },
      {
        heading: "La valutazione del rischio",
        paragraphs: [
          "Il primo passo è la valutazione documentale del rischio Legionella, che ricostruisce la rete idrica, i materiali, le temperature, i punti morti, le aree di stagnazione e i potenziali aerosol. Da questa valutazione discende il piano di controllo, con frequenza di campionamenti, soglie di azione e responsabilità interne.",
          "Per i cittadini che vogliono una panoramica divulgativa sui rischi domestici legati a impianti caldi e stagnanti, materiali introduttivi come quelli di [123acqua.com sull'acqua sicura in casa](https://123acqua.com/) possono essere un primo orientamento, da affiancare alle Linee guida quando si gestiscono strutture aperte al pubblico.",
        ],
      },
      {
        heading: "Il piano di controllo",
        paragraphs: [
          "Il piano di controllo prevede misure preventive (mantenimento della temperatura dell'acqua calda sanitaria sopra valori critici, eliminazione delle stagnazioni, scelta dei materiali), misure di monitoraggio (campionamenti microbiologici periodici, controlli di temperatura) e misure correttive (shock termico, disinfezione chimica, interventi strutturali).",
          "Tutto il sistema deve essere tracciato in registri, e in caso di evento sanitario (caso di malattia attribuibile alla struttura), l'ATS può richiedere il piano e i registri come prova della diligenza adottata.",
        ],
      },
      {
        heading: "Responsabilità del gestore",
        paragraphs: [
          "La giurisprudenza ha più volte ribadito che le Linee guida costituiscono una regola tecnica di riferimento. Discostarsene senza una valida ragione documentata espone il gestore a responsabilità civile e penale in caso di danni alla salute degli utenti.",
          "Per le strutture sanitarie il vincolo è ancora più stretto, perché la popolazione assistita è particolarmente vulnerabile. Per le altre strutture, in caso di evento epidemico, le ATS attivano indagini ambientali rapide nei punti d'uso.",
        ],
      },
      {
        heading: "Aggiornamenti e prospettive",
        paragraphs: [
          "Diverse Regioni hanno emanato linee guida proprie successive al 2015 e aggiornato i protocolli locali. Il quadro europeo, con la direttiva (UE) 2020/2184, ha rafforzato l'attenzione sulla Legionella negli edifici prioritari, integrando la prevenzione nei piani di sicurezza dell'acqua. Aggiornamenti tecnici sono periodicamente pubblicati anche dall'ISS.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le Linee guida del 2015 sono obbligatorie?",
        a: "Non sono una legge, ma sono richiamate da norme regionali e costituiscono una regola tecnica di riferimento. Scostamenti non motivati espongono a responsabilità in caso di danno.",
      },
      {
        q: "Chi deve fare la valutazione del rischio Legionella?",
        a: "Il gestore o titolare della struttura, in particolare per strutture sanitarie, turistico-ricettive, sportive e con impianti tecnologici a rischio.",
      },
      {
        q: "Ogni quanto si campiona l'acqua?",
        a: "Dipende dalla categoria di struttura e dalla valutazione del rischio. Le Linee guida danno indicazioni minime, ma il piano interno deve specificare le frequenze.",
      },
      {
        q: "Una piscina con idromassaggio è considerata a rischio?",
        a: "Sì, le vasche idromassaggio sono fra le aree più sensibili per il rischio Legionella, per la produzione di aerosol e le temperature dell'acqua.",
      },
      {
        q: "L'acqua del rubinetto domestico è a rischio?",
        a: "Negli impianti privati il rischio è generalmente basso se l'acqua calda sanitaria viene mantenuta a temperature adeguate e non ci sono lunghe stagnazioni.",
      },
    ],
    relatedSlugs: ['accordo-stato-regioni-piscine-2003', 'iss-istituto-superiore-sanita-acqua'],
    ctaContext: 'prevenzione Legionella in impianti idrici e strutture pubbliche',
  },
  {
    slug: 'reg-ue-852-2004-igiene-alimentare-acqua',
    title: "Regolamento (CE) 852/2004 e acqua nelle imprese alimentari italiane",
    shortTitle: "Reg. 852/2004: acqua e imprese alimentari",
    metaDescription:
      "Come il Regolamento (CE) 852/2004 disciplina l'uso dell'acqua nelle imprese alimentari italiane: requisiti, HACCP, acqua potabile e acqua pulita.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 8,
    searchKeywords: [
      'Regolamento 852/2004',
      'acqua imprese alimentari',
      'HACCP acqua',
      'acqua potabile alimentare',
      'igiene degli alimenti',
    ],
    excerpt:
      "Il Regolamento (CE) 852/2004 è il cardine della disciplina europea dell'igiene degli alimenti. Per le imprese alimentari italiane, dal ristorante al panificio, dall'industria conserviera al laboratorio artigianale, fissa i requisiti generali, fra cui quelli sull'acqua. In questa guida vediamo come si articola, quale acqua si può usare in produzione, cosa significa 'acqua pulita', come si integra con l'HACCP e con il D.Lgs. 18/2023 sull'acqua potabile.",
    sections: [
      {
        heading: "Il contesto del Reg. 852/2004",
        paragraphs: [
          "Il [Regolamento (CE) n. 852/2004](https://eur-lex.europa.eu/eli/reg/2004/852/oj) è parte del cosiddetto 'pacchetto igiene' insieme ai regolamenti 853, 854 (oggi 625) e 882 (oggi 625). Stabilisce norme generali in materia di igiene dei prodotti alimentari destinate agli operatori del settore.",
          "Si applica a tutte le fasi di produzione, trasformazione e distribuzione, con poche eccezioni (uso domestico privato, produzioni primarie destinate all'uso domestico).",
        ],
      },
      {
        heading: "Acqua potabile, acqua pulita e ghiaccio",
        paragraphs: [
          "Il Regolamento richiede che l'acqua utilizzata negli alimenti sia acqua potabile (drinkable water), conforme alla direttiva europea sull'acqua potabile e quindi, in Italia, al [D.Lgs. 18/2023](https://www.gazzettaufficiale.it/eli/id/2023/03/06/23G00025/sg). Solo per alcune attività della pesca e della produzione primaria si può utilizzare 'acqua pulita', cioè acqua di mare o dolce non contaminante per il prodotto.",
          "Il ghiaccio destinato a venire a contatto con alimenti, o utilizzato per il loro raffreddamento, deve essere prodotto con acqua potabile.",
        ],
      },
      {
        heading: "HACCP e piano di autocontrollo",
        paragraphs: [
          "L'art. 5 del Regolamento impone alle imprese alimentari di mettere in atto procedure basate sui principi del sistema HACCP (Hazard Analysis and Critical Control Points). L'acqua entra come materia prima ed è uno dei punti che il piano di autocontrollo deve presidiare con analisi periodiche e controllo delle reti interne.",
          "Per le imprese che si approvvigionano dalla rete pubblica, il primo riferimento è la conformità della rete cittadina, ma resta a carico dell'operatore il controllo a valle del contatore, soprattutto per evitare problemi causati da impianti interni vetusti o stagnanti.",
        ],
        bullets: [
          "Identificazione dei pericoli legati all'acqua (microbiologici e chimici).",
          "Determinazione dei punti critici di controllo (CCP) sulle reti interne.",
          "Definizione di limiti e procedure di monitoraggio.",
          "Verifiche periodiche e tenuta dei registri.",
        ],
      },
      {
        heading: "Approvvigionamento autonomo e analisi",
        paragraphs: [
          "Le imprese che usano acqua di pozzo o di sorgente devono garantire la conformità ai requisiti di potabilità con analisi periodiche, in funzione della valutazione del rischio. Le ATS/ASL possono richiedere i risultati delle analisi e ispezionare gli impianti.",
          "Per chi vuole una visione divulgativa sul perché l'acqua del rubinetto è considerata sicura quando i controlli sono ben fatti, articoli generalisti come quelli di [123acqua.com sulla cultura dell'acqua potabile](https://123acqua.com/) aiutano a contestualizzare l'enorme lavoro tecnico che sta dietro a un bicchiere d'acqua nei pubblici esercizi.",
        ],
      },
      {
        heading: "Trattamenti interni e qualità",
        paragraphs: [
          "Molte imprese alimentari adottano trattamenti interni dell'acqua, come addolcimento per produzioni di pasta o bevande, deferrizzazione per industrie alimentari, demineralizzazione per impianti di bottiglie. Tutti questi trattamenti rientrano nella valutazione HACCP e devono essere sottoposti a manutenzione e verifiche periodiche.",
          "Il principio cardine è che il trattamento non deve introdurre contaminanti né modificare la conformità ai parametri dell'acqua potabile.",
        ],
      },
      {
        heading: "Controlli ufficiali e sanzioni",
        paragraphs: [
          "I controlli ufficiali sulle imprese alimentari sono regolati dal Reg. (UE) 2017/625. In Italia gli organi di vigilanza sono prevalentemente ATS/ASL e NAS dei Carabinieri. Le non conformità relative all'acqua possono portare a prescrizioni, sospensioni dell'attività, sanzioni amministrative e, nei casi più gravi, conseguenze penali.",
        ],
      },
    ],
    faqs: [
      {
        q: "Posso usare acqua di pozzo nella mia attività di ristorazione?",
        a: "Sì, ma solo se garantisce i requisiti di potabilità e se inserita correttamente nel piano di autocontrollo, con analisi periodiche e segnalazioni alle autorità sanitarie ove previsto.",
      },
      {
        q: "Cosa si intende per acqua pulita?",
        a: "Per il Regolamento è acqua di mare o dolce naturale non contaminante, utilizzabile in specifiche attività della pesca e della produzione primaria. Non sostituisce l'acqua potabile per la generalità degli alimenti.",
      },
      {
        q: "Il ghiaccio per le bevande deve essere fatto con acqua potabile?",
        a: "Sì. Sia il ghiaccio a contatto con alimenti sia quello usato per raffreddarli deve essere prodotto con acqua potabile.",
      },
      {
        q: "L'HACCP riguarda anche l'acqua?",
        a: "Sì. L'acqua è una materia prima e va valutata nel piano di autocontrollo con frequenze e parametri proporzionati al rischio.",
      },
      {
        q: "Chi controlla l'igiene dell'acqua nelle imprese alimentari?",
        a: "ATS/ASL e altri organi di vigilanza (es. NAS), nell'ambito dei controlli ufficiali previsti dal Reg. (UE) 2017/625.",
      },
    ],
    relatedSlugs: ['ats-asl-competenze-acqua-potabile', 'iss-istituto-superiore-sanita-acqua'],
    ctaContext: 'acqua nelle imprese alimentari e HACCP',
  },
  {
    slug: 'iss-istituto-superiore-sanita-acqua',
    title: "Istituto Superiore di Sanità: il ruolo dell'ISS sull'acqua potabile",
    shortTitle: "ISS: il ruolo sull'acqua potabile",
    metaDescription:
      "Come l'Istituto Superiore di Sanità (ISS) contribuisce alla disciplina dell'acqua potabile in Italia: pareri, linee guida, metodi analitici e sorveglianza.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 8,
    searchKeywords: [
      'ISS acqua potabile',
      'Istituto Superiore di Sanità',
      'rapporti ISTISAN acqua',
      'metodi analitici acqua',
      'sorveglianza sanitaria acqua',
    ],
    excerpt:
      "L'Istituto Superiore di Sanità (ISS) è l'organo tecnico-scientifico del Servizio Sanitario Nazionale. Sull'acqua potabile il suo contributo è meno noto al grande pubblico, ma fondamentale: pareri, rapporti ISTISAN, metodi analitici standard, supporto agli atti normativi e formazione del personale sanitario. In questa guida ripercorriamo il ruolo dell'ISS, le principali pubblicazioni di riferimento, l'interazione con il Ministero della Salute, con ARPA e ATS, e l'impatto sulla pratica quotidiana di chi controlla l'acqua.",
    sections: [
      {
        heading: "Chi è l'ISS e qual è il suo statuto",
        paragraphs: [
          "L'[Istituto Superiore di Sanità](https://www.iss.it/) è un ente pubblico nato nel 1934, regolato dal D.Lgs. 106/2012 e dal proprio statuto. È riconosciuto come organo tecnico-scientifico del SSN, con funzioni di ricerca, sperimentazione, controllo, consulenza e formazione in materia di salute pubblica.",
          "Sull'acqua potabile l'ISS opera attraverso il Reparto Qualità dell'acqua e salute, che ha un ruolo strategico nelle linee guida e nella sorveglianza.",
        ],
      },
      {
        heading: "Rapporti ISTISAN e metodi analitici",
        paragraphs: [
          "I [rapporti ISTISAN](https://www.iss.it/rapporti-istisan) sono una collana editoriale ufficiale che raccoglie metodi analitici, linee guida e indagini scientifiche. Per i laboratori di ATS, ARPA e gestori, costituiscono lo standard tecnico di riferimento per molti parametri dell'acqua potabile.",
          "L'ISS contribuisce inoltre alla definizione dei metodi analitici nazionali, in coordinamento con l'UNI e con gli standard ISO, fondamentali per garantire confrontabilità e accuratezza dei risultati.",
        ],
        bullets: [
          "Linee guida per il Piano di Sicurezza dell'Acqua (Water Safety Plan).",
          "Rapporti su contaminanti emergenti (PFAS, microplastiche).",
          "Metodi analitici di riferimento per parametri chimici e microbiologici.",
          "Sorveglianza nazionale di patologie idro-trasmesse.",
        ],
      },
      {
        heading: "Piani di sicurezza dell'acqua",
        paragraphs: [
          "La direttiva (UE) 2020/2184 e il D.Lgs. 18/2023 hanno introdotto formalmente i Water Safety Plans (WSP), già raccomandati dall'OMS. L'ISS coordina la strategia nazionale e fornisce strumenti operativi ai gestori per analizzare la filiera dalla captazione al rubinetto secondo un approccio risk-based.",
          "Per il cittadino interessato a comprendere come si costruisce la sicurezza dell'acqua dalla sorgente al bicchiere, riferimenti divulgativi come [123acqua.com sui temi di qualità e trattamento dell'acqua](https://123acqua.com/) offrono una panoramica accessibile, complementare alle pubblicazioni tecniche dell'ISS.",
        ],
      },
      {
        heading: "Pareri e supporto al Ministero",
        paragraphs: [
          "L'ISS fornisce pareri al Ministero della Salute su questioni di rilievo sanitario, comprese le richieste di deroga ai valori di parametro dell'acqua potabile presentate dalle Regioni. È un passaggio chiave che garantisce un confronto tecnico-scientifico indipendente prima delle decisioni amministrative.",
          "L'Istituto contribuisce inoltre alla risposta in casi di emergenza ambientale, come gli episodi di contaminazione da PFAS, fornendo supporto agli enti locali e alle ATS/ASL coinvolte.",
        ],
      },
      {
        heading: "Sorveglianza epidemiologica e ricerca",
        paragraphs: [
          "L'ISS gestisce diversi sistemi di sorveglianza, fra cui quello della legionellosi. Per molte malattie idro-trasmesse i dati nazionali sono raccolti e analizzati centralmente, e poi restituiti come rapporti scientifici utili a valutare l'efficacia delle politiche di prevenzione.",
          "La ricerca dell'ISS sull'acqua tocca tematiche di frontiera come i microinquinanti, le interazioni fra disinfezione e formazione di sottoprodotti, le tecnologie di trattamento e gli inquinanti emergenti.",
        ],
      },
      {
        heading: "Trasparenza e formazione",
        paragraphs: [
          "L'ISS pubblica online molti dei propri documenti tecnici e organizza periodicamente corsi di formazione per il personale degli enti territoriali. Questo lavoro contribuisce ad armonizzare le pratiche operative su tutto il territorio nazionale.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'ISS controlla direttamente l'acqua del rubinetto?",
        a: "No. L'ISS è organo tecnico-scientifico: definisce metodi, dà pareri e fa ricerca. I controlli operativi sono in capo a gestori, ATS/ASL e ARPA.",
      },
      {
        q: "Cosa sono i rapporti ISTISAN?",
        a: "Una collana editoriale ufficiale dell'ISS, che contiene linee guida, metodi analitici e indagini scientifiche, spesso usati come standard tecnici di riferimento.",
      },
      {
        q: "Posso consultare i documenti ISS gratuitamente?",
        a: "Sì. Molti rapporti e linee guida sono pubblicati in open access sul sito istituzionale dell'ISS.",
      },
      {
        q: "L'ISS si occupa anche di PFAS e microplastiche?",
        a: "Sì. È fra gli enti più attivi sulla ricerca nazionale relativa ai contaminanti emergenti nelle acque potabili.",
      },
      {
        q: "Che ruolo ha l'ISS sulle deroghe?",
        a: "Esprime pareri tecnici utilizzati dal Ministero della Salute e dalle Regioni nelle decisioni sulle deroghe ai valori di parametro.",
      },
    ],
    relatedSlugs: ['ats-asl-competenze-acqua-potabile', 'ministero-salute-linee-guida-legionella-2015'],
    ctaContext: 'pareri tecnico-scientifici e sorveglianza acqua potabile',
  },
  {
    slug: 'autorita-rifiuti-acqua-energia-arera',
    title: "ARERA e Servizio Idrico Integrato: regolazione, tariffe e qualità del servizio",
    shortTitle: "ARERA: regolazione del servizio idrico",
    metaDescription:
      "Cosa fa ARERA, l'Autorità di Regolazione per Energia Reti e Ambiente, nel Servizio Idrico Integrato: tariffe, qualità tecnica e contrattuale, tutela degli utenti.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 8,
    searchKeywords: [
      'ARERA acqua',
      'Servizio Idrico Integrato',
      'tariffe acqua Italia',
      'qualità servizio idrico',
      'autorità di regolazione acqua',
    ],
    excerpt:
      "L'Autorità di Regolazione per Energia Reti e Ambiente (ARERA) è l'autorità indipendente che regola il Servizio Idrico Integrato in Italia. Si occupa di tariffe, qualità tecnica, qualità contrattuale, trasparenza e tutela degli utenti. Capirne il ruolo è utile per leggere correttamente le bollette dell'acqua, capire come si formano i prezzi del Servizio Idrico Integrato e conoscere i propri diritti come utenti. In questa guida ricostruiamo le competenze di ARERA e il suo dialogo con Regioni, ATO e gestori.",
    sections: [
      {
        heading: "Da AEEG ad ARERA: il percorso normativo",
        paragraphs: [
          "ARERA è stata istituita come Autorità per l'Energia Elettrica e il Gas (AEEG) con la [Legge 481/1995](https://www.gazzettaufficiale.it/eli/id/1995/11/18/095G0508/sg). Le competenze sul Servizio Idrico Integrato le sono state attribuite con il [DL 201/2011](https://www.gazzettaufficiale.it/eli/id/2011/12/06/011G0247/sg) (art. 21) ed è stata rinominata, prima ARERA, poi ARERA dopo l'attribuzione delle competenze ambientali sui rifiuti urbani.",
          "Si tratta di un'autorità amministrativa indipendente, con poteri di regolazione, sanzione e vigilanza in mercati di interesse generale.",
        ],
      },
      {
        heading: "Il metodo tariffario per l'acqua",
        paragraphs: [
          "ARERA definisce il Metodo Tariffario Idrico (MTI), che stabilisce come si calcola la tariffa del Servizio Idrico Integrato a partire dai costi efficienti dei gestori. La tariffa è poi approvata dagli Enti di Governo dell'Ambito (EGATO) e dalle Regioni, con verifica finale di ARERA.",
          "Il metodo viene aggiornato periodicamente: l'evoluzione recente, MTI-3 e versioni successive, ha integrato incentivi alla riduzione delle perdite e alla qualità del servizio.",
        ],
        bullets: [
          "Costi operativi efficienti del gestore.",
          "Costi finanziari riconosciuti.",
          "Costi ambientali e della risorsa.",
          "Incentivi a riduzione perdite, qualità tecnica e contrattuale.",
        ],
      },
      {
        heading: "Qualità tecnica e contrattuale",
        paragraphs: [
          "ARERA ha emanato due regolazioni chiave: la qualità tecnica del servizio idrico (RQTI) e la qualità contrattuale del servizio idrico (RQSII). La prima si occupa di indicatori come perdite idriche, interruzioni del servizio, controlli sull'acqua. La seconda riguarda tempi di attivazione, gestione reclami, fatturazione, sportelli.",
          "Per gli utenti, queste regolazioni significano standard minimi obbligatori e indennizzi automatici in caso di non rispetto da parte del gestore.",
        ],
      },
      {
        heading: "Tutela degli utenti",
        paragraphs: [
          "ARERA gestisce, attraverso Acquirente Unico, lo Sportello del consumatore, a cui gli utenti possono rivolgersi per reclami e informazioni. Esistono anche procedure di conciliazione obbligatorie prima di accedere alla giustizia ordinaria per le controversie con il gestore idrico.",
          "Sul fronte tariffario, ARERA disciplina anche il bonus sociale idrico per le famiglie in disagio economico, parallelo a quello elettrico e del gas. Per orientarsi su bollette e diritti, sintesi divulgative come quelle pubblicate da [123acqua.com sulle questioni pratiche legate alla fornitura di acqua](https://123acqua.com/) possono affiancare i materiali ufficiali ARERA.",
        ],
      },
      {
        heading: "Rapporti con altri attori istituzionali",
        paragraphs: [
          "ARERA non sostituisce le Regioni e gli ATO: la pianificazione del territorio resta agli Enti di Governo dell'Ambito, mentre la regolazione economica e di qualità è uniforme a livello nazionale. Sul piano sanitario, ARERA non interferisce con ATS/ASL e con il D.Lgs. 18/2023.",
          "Il dialogo con il Ministero dell'Ambiente e con la Cabina di Regia per il Servizio Idrico Integrato consente di coordinare investimenti e programmi nazionali con i piani d'ambito territoriali.",
        ],
      },
      {
        heading: "Prospettive future",
        paragraphs: [
          "Le sfide della regolazione idrica nei prossimi anni includono il finanziamento degli investimenti per ammodernare reti vetuste, la gestione di crisi idriche legate ai cambiamenti climatici e l'integrazione fra Servizio Idrico Integrato e riuso delle acque depurate. ARERA è chiamata a tradurre questi obiettivi in regole concrete che reggano il confronto con gli utenti e con i territori.",
        ],
      },
    ],
    faqs: [
      {
        q: "ARERA stabilisce la tariffa che pago in bolletta?",
        a: "Definisce il metodo tariffario. La tariffa applicata viene poi proposta dall'ente d'ambito e approvata da Regione e ARERA stessa.",
      },
      {
        q: "Posso reclamare contro il mio gestore idrico?",
        a: "Sì. Esiste lo Sportello del consumatore di ARERA e procedure di conciliazione, oltre ai reclami diretti al gestore.",
      },
      {
        q: "Esiste un bonus sociale idrico?",
        a: "Sì, regolato da ARERA. Riguarda famiglie in disagio economico in base agli stessi requisiti del bonus elettrico e gas (in genere ISEE).",
      },
      {
        q: "ARERA controlla la qualità dell'acqua?",
        a: "Si occupa della qualità del servizio (continuità, perdite, tempi) e dei controlli interni del gestore. La qualità sanitaria resta in capo a ATS/ASL.",
      },
      {
        q: "Chi gestisce realmente il servizio idrico?",
        a: "I gestori del Servizio Idrico Integrato, scelti negli Ambiti Territoriali Ottimali secondo le forme previste dalla normativa.",
      },
    ],
    relatedSlugs: ['dlgs-152-2006-tutela-acqua-ambiente', 'ats-asl-competenze-acqua-potabile'],
    ctaContext: 'tariffe e qualità del Servizio Idrico Integrato',
  },
  {
    slug: 'costituzione-italiana-art-44-bene-comune-acqua',
    title: "Costituzione, beni comuni e acqua: principi giuridici di fondo",
    shortTitle: "Costituzione e acqua come bene comune",
    metaDescription:
      "Come la Costituzione italiana, in particolare gli artt. 9, 32, 41 e 44, fa da cornice alla disciplina dell'acqua come risorsa, servizio essenziale e bene comune.",
    category: 'normativa',
    publishedAt: '2026-06-23',
    readingMinutes: 9,
    searchKeywords: [
      'Costituzione acqua',
      'acqua bene comune',
      'art. 44 Costituzione',
      'art. 9 Costituzione ambiente',
      'diritto acqua Italia',
    ],
    excerpt:
      "Quando si parla di acqua in Italia, sotto le norme di settore c'è uno strato costituzionale che dà senso a tutto il resto. La Costituzione non contiene un articolo specifico sull'acqua, ma diversi suoi principi e disposizioni (artt. 9, 32, 41, 42, 44 e 117) la attraversano. La giurisprudenza costituzionale ha più volte trattato il tema dell'acqua come risorsa essenziale e servizio di rilevanza generale. In questa guida ricostruiamo la cornice costituzionale e il dibattito sull'acqua come bene comune, evitando semplificazioni ideologiche.",
    sections: [
      {
        heading: "L'acqua nella Costituzione: nessun articolo dedicato, molti principi pertinenti",
        paragraphs: [
          "La [Costituzione italiana](https://www.senato.it/istituzione/la-costituzione) non cita esplicitamente l'acqua, ma diverse disposizioni la riguardano direttamente. L'art. 9 tutela il paesaggio e l'ambiente; l'art. 32 garantisce il diritto alla salute; l'art. 41 disciplina l'iniziativa economica privata che non può svolgersi in contrasto con utilità sociale o danno alla salute e all'ambiente; l'art. 42 distingue la proprietà pubblica da quella privata.",
          "L'art. 44 si occupa specificamente del razionale sfruttamento del suolo e ha un riflesso indiretto sull'uso delle risorse idriche per fini agricoli e di bonifica. L'art. 117 ripartisce le competenze fra Stato e Regioni anche in materia di tutela dell'ambiente e di gestione delle risorse.",
        ],
      },
      {
        heading: "L'acqua come risorsa pubblica nella legislazione",
        paragraphs: [
          "Sotto il livello costituzionale, la legge ordinaria ha chiarito che le acque superficiali e sotterranee, ovunque ubicate, sono pubbliche (legge Galli del 1994, poi confluita nel D.Lgs. 152/2006). Questo significa che il prelievo è soggetto a concessione e non lascia libera disponibilità ai privati.",
          "La giurisprudenza ha consolidato il principio per cui l'acqua è una risorsa pubblica essenziale, anche se il modello di gestione del servizio può prevedere il coinvolgimento di soggetti privati nelle modalità autorizzate dalla legge.",
        ],
      },
      {
        heading: "Il dibattito sui beni comuni",
        paragraphs: [
          "Dopo il rapporto della cosiddetta 'Commissione Rodotà' (2007), il dibattito giuridico ha sviluppato la categoria dei beni comuni, includendovi l'acqua. Non è una categoria positiva del diritto vigente, ma un orientamento dottrinale e politico che ha avuto effetti concreti nel referendum del 2011 e nelle leggi regionali successive.",
          "Il referendum del 2011 ha confermato che il legislatore non può imporre come unica via la gestione a fini di profitto del servizio idrico. Resta tuttavia un ampio margine di scelta sulle forme di gestione, fra società in house, miste e affidamenti.",
        ],
        bullets: [
          "Acqua pubblica nella sua dimensione di risorsa naturale.",
          "Servizio idrico come servizio pubblico essenziale.",
          "Pluralismo di forme di gestione consentite dalla legge.",
          "Pressione referendaria del 2011 e suoi effetti normativi.",
        ],
      },
      {
        heading: "Il diritto all'acqua nel quadro internazionale",
        paragraphs: [
          "L'Assemblea Generale delle Nazioni Unite, con la Risoluzione 64/292 del 28 luglio 2010, ha riconosciuto il diritto umano all'acqua potabile sicura e ai servizi igienici come diritto essenziale al pieno godimento della vita. L'Italia ha votato a favore, e diversi atti normativi e regolatori interni richiamano questo principio.",
          "Per orientare cittadini e amministratori sulle implicazioni quotidiane di questo principio, materiali divulgativi italiani come quelli ospitati su [123acqua.com sull'accesso e la qualità dell'acqua](https://123acqua.com/) possono accompagnare le letture costituzionali e internazionali, dando esempi concreti di vita quotidiana.",
        ],
      },
      {
        heading: "Riparto di competenze fra Stato e Regioni",
        paragraphs: [
          "L'art. 117 affida allo Stato la tutela dell'ambiente, dell'ecosistema e dei beni culturali, mentre molte materie di gestione (governo del territorio, agricoltura) sono concorrenti o regionali. La Corte costituzionale ha spesso ribadito che la tutela ambientale non può essere derogata in pejus dalle Regioni, mentre la valorizzazione della risorsa idrica può essere modulata localmente.",
          "Questo equilibrio è cruciale nella gestione delle crisi idriche e nei programmi di investimento dei piani di gestione di distretto.",
        ],
      },
      {
        heading: "Cosa significa nel concreto",
        paragraphs: [
          "Sul piano pratico, la cornice costituzionale orienta il legislatore a non trattare l'acqua come una merce qualsiasi e a riconoscere alla collettività un controllo sui modi in cui viene gestita e tariffata. Le norme di settore, dal D.Lgs. 152/2006 al D.Lgs. 18/2023, traducono questi principi in regole tecniche e amministrative.",
          "Conoscere il livello costituzionale aiuta a leggere meglio il senso delle regolazioni di ARERA, dei piani di tutela regionali e delle scelte di affidamento del servizio, evitando di ridurre il dibattito sull'acqua a una pura questione tariffaria.",
        ],
      },
    ],
    faqs: [
      {
        q: "Esiste un articolo della Costituzione che cita l'acqua?",
        a: "Non esplicitamente. Diversi articoli (9, 32, 41, 42, 44 e 117) toccano i temi della risorsa, della salute, dell'ambiente e del servizio pubblico.",
      },
      {
        q: "L'acqua è un bene comune secondo il diritto italiano?",
        a: "Non come categoria formale positiva. È però una risorsa pubblica e un servizio essenziale, e parte della dottrina la classifica come bene comune.",
      },
      {
        q: "Cosa ha stabilito il referendum del 2011?",
        a: "Ha abrogato disposizioni che imponevano modelli di gestione orientati al profitto del servizio idrico e ha riaffermato la rilevanza pubblica del servizio.",
      },
      {
        q: "Il diritto all'acqua è riconosciuto a livello internazionale?",
        a: "Sì, dalla Risoluzione ONU 64/292 del 2010, sostenuta dall'Italia, oltre che da numerosi atti dell'OMS e delle agenzie ONU sui diritti umani.",
      },
      {
        q: "Le Regioni possono avere regole più severe dello Stato?",
        a: "In materia di valorizzazione e gestione sì, nei limiti previsti dall'art. 117. In materia di tutela dell'ambiente non possono derogare in pejus rispetto agli standard nazionali.",
      },
    ],
    relatedSlugs: ['dlgs-152-2006-tutela-acqua-ambiente', 'autorita-rifiuti-acqua-energia-arera'],
    ctaContext: 'principi costituzionali e cornice giuridica acqua',
  },
];
