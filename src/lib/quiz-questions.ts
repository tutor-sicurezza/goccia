export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
  explanation: string;
}

export type QuizCategory = 'normativa' | 'salute' | 'chimica' | 'pratica' | 'ambiente';

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  question: string;
  options: QuizOption[];
  source?: string;
  difficulty: 'facile' | 'medio' | 'difficile';
}

export interface QuizProfile {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  emoji: string;
  cta: 'tool' | 'lab' | 'guide';
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ---------------- NORMATIVA ----------------
  {
    id: 'q01',
    category: 'normativa',
    question: "Qual è il decreto italiano che recepisce la direttiva UE 2020/2184 sull'acqua destinata al consumo umano?",
    difficulty: 'medio',
    source: 'D.Lgs. 23 febbraio 2023, n. 18',
    options: [
      {
        id: 'a',
        text: 'D.Lgs. 31/2001',
        correct: false,
        explanation: "Il D.Lgs. 31/2001 era la precedente normativa, oggi abrogata: recepiva la direttiva 98/83/CE, non la 2020/2184."
      },
      {
        id: 'b',
        text: 'D.Lgs. 18/2023',
        correct: true,
        explanation: "Esatto: il D.Lgs. 18/2023 ha recepito la direttiva (UE) 2020/2184 ed è oggi la cornice normativa per l'acqua potabile in Italia."
      },
      {
        id: 'c',
        text: 'D.Lgs. 152/2006',
        correct: false,
        explanation: "Il D.Lgs. 152/2006 è il Testo Unico Ambientale: tutela le acque dall'inquinamento ma non disciplina i parametri di potabilità."
      },
      {
        id: 'd',
        text: 'Regolamento UE 2019/1009',
        correct: false,
        explanation: "Quel regolamento riguarda i prodotti fertilizzanti, non l'acqua potabile."
      }
    ]
  },
  {
    id: 'q02',
    category: 'normativa',
    question: "Qual è il limite di legge per i nitrati (NO3-) nell'acqua potabile in Italia?",
    difficulty: 'facile',
    source: 'D.Lgs. 18/2023, Allegato I',
    options: [
      { id: 'a', text: '10 mg/L', correct: false, explanation: "10 mg/L è il limite indicativo per l'azoto nitrico in alcune raccomandazioni, ma non è il limite normativo italiano per i nitrati come NO3-." },
      { id: 'b', text: '25 mg/L', correct: false, explanation: "25 mg/L è un valore guida prudenziale spesso suggerito per neonati, ma non è il limite di legge." },
      { id: 'c', text: '50 mg/L', correct: true, explanation: "Esatto: il D.Lgs. 18/2023 fissa il limite a 50 mg/L, in linea con le linee guida OMS." },
      { id: 'd', text: '100 mg/L', correct: false, explanation: "100 mg/L è oltre il limite di legge: rappresenterebbe un'acqua non conforme." }
    ]
  },
  {
    id: 'q03',
    category: 'normativa',
    question: "Chi effettua i controlli sull'acqua del rubinetto in Italia?",
    difficulty: 'medio',
    source: 'D.Lgs. 18/2023',
    options: [
      { id: 'a', text: 'Solo il gestore idrico', correct: false, explanation: "Il gestore esegue i controlli interni, ma la legge prevede anche un controllo esterno indipendente." },
      { id: 'b', text: 'Solo i Carabinieri del NAS', correct: false, explanation: "I NAS intervengono su segnalazione o per indagini specifiche, non sono il sistema ordinario di controllo." },
      { id: 'c', text: 'Gestore idrico (controlli interni) e ASL/ATS con ARPA (controlli esterni)', correct: true, explanation: "Esatto: il gestore controlla in autocontrollo, ASL/ATS effettua i controlli esterni e ARPA fornisce supporto analitico e ambientale." },
      { id: 'd', text: 'Solo il Ministero della Salute', correct: false, explanation: "Il Ministero coordina e indirizza ma non esegue i controlli puntuali sulla rete." }
    ]
  },
  {
    id: 'q04',
    category: 'normativa',
    question: "Quali enti pubblicano linee guida scientifiche di riferimento internazionale sui contaminanti dell'acqua potabile?",
    difficulty: 'medio',
    source: 'OMS (WHO) Guidelines for Drinking-water Quality; EFSA Scientific Opinions',
    options: [
      { id: 'a', text: 'OMS (WHO) ed EFSA', correct: true, explanation: "Esatto: l'OMS pubblica le Guidelines for Drinking-water Quality, mentre EFSA fornisce le valutazioni di rischio per contaminanti rilevanti per la sicurezza alimentare europea." },
      { id: 'b', text: 'FAO e UNESCO', correct: false, explanation: "FAO e UNESCO si occupano di agricoltura e cultura/scienza in senso ampio, non di linee guida tecniche sui parametri di potabilità." },
      { id: 'c', text: 'OCSE e G7', correct: false, explanation: "Sono organismi economici e politici, non scientifici-sanitari di riferimento per i contaminanti dell'acqua." },
      { id: 'd', text: 'Greenpeace e WWF', correct: false, explanation: "Sono organizzazioni ambientaliste autorevoli nella divulgazione, ma non pubblicano linee guida normative di riferimento." }
    ]
  },

  // ---------------- SALUTE ----------------
  {
    id: 'q05',
    category: 'salute',
    question: "Quale parametro microbiologico ha tolleranza zero nell'acqua potabile italiana?",
    difficulty: 'facile',
    source: 'D.Lgs. 18/2023, Allegato I, Parte A',
    options: [
      { id: 'a', text: 'Carica batterica totale a 22°C', correct: false, explanation: "Per la carica batterica totale non è fissato un limite numerico stringente: serve come indicatore di processo." },
      { id: 'b', text: 'Escherichia coli', correct: true, explanation: "Esatto: per E. coli il limite è 0 UFC/100 mL. È l'indicatore principale di contaminazione fecale." },
      { id: 'c', text: 'Pseudomonas aeruginosa', correct: false, explanation: "È monitorato nelle acque confezionate; nell'acqua di rete non è il parametro a tolleranza zero generalizzata previsto dal decreto." },
      { id: 'd', text: 'Legionella', correct: false, explanation: "Legionella è oggetto di linee guida specifiche per impianti e reti interne, ma non rientra tra i parametri 'zero' generali del D.Lgs. 18/2023 in distribuzione." }
    ]
  },
  {
    id: 'q06',
    category: 'salute',
    question: "Quale metallo è considerato particolarmente pericoloso per lo sviluppo neurologico dei bambini, anche a basse dosi?",
    difficulty: 'facile',
    source: 'OMS, Lead in drinking-water',
    options: [
      { id: 'a', text: 'Ferro', correct: false, explanation: "Il ferro è un parametro principalmente organolettico (sapore, colore): non è considerato un rischio neurotossico tipico dell'acqua potabile." },
      { id: 'b', text: 'Calcio', correct: false, explanation: "Il calcio è un nutriente essenziale; non rappresenta un rischio per il neurosviluppo." },
      { id: 'c', text: 'Piombo', correct: true, explanation: "Esatto: il piombo è neurotossico, soprattutto in età pediatrica. L'OMS sottolinea che non esiste una soglia sicura nota; il D.Lgs. 18/2023 sta abbassando il limite a 5 µg/L." },
      { id: 'd', text: 'Magnesio', correct: false, explanation: "Il magnesio è un minerale utile, non un contaminante neurotossico." }
    ]
  },
  {
    id: 'q07',
    category: 'salute',
    question: "I nitrati nell'acqua sono ritenuti particolarmente rischiosi soprattutto per quale categoria?",
    difficulty: 'medio',
    source: 'EFSA Scientific Opinion on nitrate; OMS',
    options: [
      { id: 'a', text: 'Sportivi adulti', correct: false, explanation: "Per gli adulti sani, entro i limiti di legge, i nitrati non rappresentano il rischio acuto principale." },
      { id: 'b', text: 'Neonati e lattanti', correct: true, explanation: "Esatto: nei lattanti i nitrati possono convertirsi in nitriti e causare metaemoglobinemia (sindrome del bambino blu). Per questo è prudente usare acque a basso contenuto di nitrati per il biberon." },
      { id: 'c', text: 'Persone anziane', correct: false, explanation: "Non è la categoria di rischio specifica per i nitrati alimentari/idrici, salvo patologie particolari." },
      { id: 'd', text: 'Donne in menopausa', correct: false, explanation: "Non è una categoria di rischio identificata per i nitrati nell'acqua." }
    ]
  },
  {
    id: 'q08',
    category: 'salute',
    question: "Quale famiglia di composti è soprannominata 'forever chemicals' per la sua estrema persistenza?",
    difficulty: 'medio',
    source: 'EFSA Scientific Opinion on PFAS (2020); OMS',
    options: [
      { id: 'a', text: 'Nitrati', correct: false, explanation: "I nitrati sono persistenti in falda ma non rientrano nella definizione di 'forever chemicals'." },
      { id: 'b', text: 'Trialometani', correct: false, explanation: "I trialometani sono sottoprodotti della disinfezione: si formano e si trasformano, non sono 'eterni'." },
      { id: 'c', text: 'PFAS (sostanze poli- e perfluoroalchiliche)', correct: true, explanation: "Esatto: i PFAS sono chiamati 'forever chemicals' perché il legame C-F li rende estremamente resistenti a degradazione ambientale e biologica." },
      { id: 'd', text: 'Cloruri', correct: false, explanation: "I cloruri sono sali naturalmente presenti, non composti di sintesi persistenti." }
    ]
  },

  // ---------------- CHIMICA ----------------
  {
    id: 'q09',
    category: 'chimica',
    question: "Qual è il valore di pH considerato neutro a temperatura ambiente?",
    difficulty: 'facile',
    options: [
      { id: 'a', text: '5', correct: false, explanation: "pH 5 è leggermente acido (es. caffè o pioggia)." },
      { id: 'b', text: '6', correct: false, explanation: "pH 6 è ancora leggermente acido, non neutro." },
      { id: 'c', text: '7', correct: true, explanation: "Esatto: a 25°C il pH neutro è 7. Il D.Lgs. 18/2023 indica per l'acqua potabile un intervallo di accettabilità tra 6,5 e 9,5." },
      { id: 'd', text: '8', correct: false, explanation: "pH 8 è leggermente basico, non neutro." }
    ]
  },
  {
    id: 'q10',
    category: 'chimica',
    question: "Qual è l'unità di misura tipicamente usata in Italia per esprimere la durezza dell'acqua?",
    difficulty: 'facile',
    options: [
      { id: 'a', text: 'Gradi francesi (°F)', correct: true, explanation: "Esatto: in Italia la durezza si esprime in gradi francesi (°F), dove 1°F = 10 mg/L di CaCO3." },
      { id: 'b', text: 'Parti per milione (ppm) di cloro', correct: false, explanation: "Le ppm di cloro misurano la disinfezione, non la durezza." },
      { id: 'c', text: 'Microsiemens (µS/cm)', correct: false, explanation: "I microsiemens misurano la conducibilità elettrica, non direttamente la durezza." },
      { id: 'd', text: 'Gradi Brix', correct: false, explanation: "I gradi Brix misurano gli zuccheri disciolti, ad esempio nei mosti, non la durezza dell'acqua." }
    ]
  },
  {
    id: 'q11',
    category: 'chimica',
    question: "Cosa indica la conducibilità elettrica di un'acqua?",
    difficulty: 'medio',
    options: [
      { id: 'a', text: 'La presenza di batteri', correct: false, explanation: "I batteri non incidono significativamente sulla conducibilità: per loro servono analisi microbiologiche dedicate." },
      { id: 'b', text: 'La quantità complessiva di sali (ioni) disciolti', correct: true, explanation: "Esatto: la conducibilità è proporzionale alla concentrazione di ioni disciolti; è un indicatore generale del residuo fisso." },
      { id: 'c', text: 'Il grado di acidità', correct: false, explanation: "L'acidità si misura con il pH, non con la conducibilità." },
      { id: 'd', text: 'Il contenuto di ossigeno disciolto', correct: false, explanation: "L'ossigeno disciolto si misura con appositi sensori (mg/L O2), non tramite la conducibilità." }
    ]
  },
  {
    id: 'q12',
    category: 'chimica',
    question: "Su quale principio si basa l'osmosi inversa usata nei depuratori domestici?",
    difficulty: 'difficile',
    options: [
      { id: 'a', text: "Filtrazione meccanica con un setaccio molto fine", correct: false, explanation: "L'osmosi inversa non è un setaccio: opera a livello molecolare grazie a una membrana semipermeabile e a una pressione applicata." },
      { id: 'b', text: "Reazione chimica che neutralizza i sali", correct: false, explanation: "Non avviene alcuna reazione chimica: l'osmosi inversa è un processo fisico di separazione." },
      { id: 'c', text: "Membrana semipermeabile attraversata dall'acqua sotto pressione, che trattiene la maggior parte dei soluti", correct: true, explanation: "Esatto: applicando una pressione superiore a quella osmotica, l'acqua attraversa la membrana mentre sali, metalli e molte molecole organiche vengono trattenuti nel concentrato." },
      { id: 'd', text: "Evaporazione e ricondensazione del vapore", correct: false, explanation: "Quello descritto è il principio della distillazione, non dell'osmosi inversa." }
    ]
  },

  // ---------------- PRATICA ----------------
  {
    id: 'q13',
    category: 'pratica',
    question: "Bollire l'acqua del rubinetto elimina il piombo eventualmente presente?",
    difficulty: 'medio',
    source: 'OMS, Lead in drinking-water',
    options: [
      { id: 'a', text: "Sì, lo elimina completamente", correct: false, explanation: "Falso: la bollitura non rimuove i metalli. Il piombo non evapora con l'acqua." },
      { id: 'b', text: "No, anzi può aumentarne leggermente la concentrazione per evaporazione dell'acqua", correct: true, explanation: "Corretto: la bollitura uccide molti patogeni ma concentra i soluti non volatili, piombo incluso. Per i metalli servono altri trattamenti (es. osmosi inversa)." },
      { id: 'c', text: "Sì, ma solo dopo almeno 30 minuti", correct: false, explanation: "Non esiste un tempo di bollitura che rimuova il piombo: il principio fisico non lo consente." },
      { id: 'd', text: "Solo se si aggiunge succo di limone", correct: false, explanation: "L'acidificazione può addirittura solubilizzare di più alcuni metalli, non rimuoverli." }
    ]
  },
  {
    id: 'q14',
    category: 'pratica',
    question: "Le strisce reattive da banco forniscono un valore quantitativo certificato dell'acqua?",
    difficulty: 'facile',
    options: [
      { id: 'a', text: "Sì, equivalgono a un'analisi di laboratorio", correct: false, explanation: "Falso: le strisce hanno scale colorimetriche grossolane e sono soggette a interferenze." },
      { id: 'b', text: "No, sono indicative e qualitative: utili per uno screening, non per valori certificati", correct: true, explanation: "Esatto: vanno usate come prima indagine; per un dato affidabile serve un'analisi in laboratorio con strumentazione tarata e metodi normati." },
      { id: 'c', text: "Sì, se usate da personale formato", correct: false, explanation: "Anche con tecnica corretta, il limite è intrinseco al metodo colorimetrico: resta una stima." },
      { id: 'd', text: "Sì, ma solo per i nitrati", correct: false, explanation: "Anche per i nitrati le strisce restano una misura indicativa, non un valore certificato." }
    ]
  },
  {
    id: 'q15',
    category: 'pratica',
    question: "Far scorrere l'acqua del rubinetto qualche decina di secondi al mattino, a cosa serve principalmente?",
    difficulty: 'medio',
    source: 'OMS, raccomandazioni su stagnazione in impianti domestici',
    options: [
      { id: 'a', text: "A risparmiare acqua", correct: false, explanation: "Al contrario: si consuma un po' più acqua. L'obiettivo è sanitario, non di risparmio." },
      { id: 'b', text: "A ridurre eventuali tracce di metalli rilasciati dalle tubature durante la stagnazione notturna", correct: true, explanation: "Esatto: dopo molte ore di ristagno, l'acqua a contatto con tubazioni e rubinetterie può arricchirsi di piccole quantità di metalli (es. piombo, rame). Far scorrere prima dell'uso alimentare è una buona pratica." },
      { id: 'c', text: "Ad aumentare il cloro residuo", correct: false, explanation: "Il cloro residuo tende anzi a diminuire con la stagnazione: lo scorrimento aiuta a rinnovare l'acqua, non ad arricchirla di disinfettante." },
      { id: 'd', text: "A migliorare il sapore facendo entrare aria", correct: false, explanation: "L'aerazione può aiutare il gusto, ma non è il motivo igienico principale di questa pratica." }
    ]
  },
  {
    id: 'q16',
    category: 'pratica',
    question: "Quale tra questi trattamenti è generalmente considerato più efficace per ridurre i nitrati in acqua potabile?",
    difficulty: 'difficile',
    source: 'OMS; ISS, trattamenti per acque destinate al consumo umano',
    options: [
      { id: 'a', text: "Caraffa filtrante a carbone attivo", correct: false, explanation: "Il carbone attivo è efficace soprattutto su cloro, gusto e alcune molecole organiche, ma non è la tecnologia di riferimento per i nitrati." },
      { id: 'b', text: "Bollitura prolungata", correct: false, explanation: "Falso: la bollitura non rimuove i nitrati e, anzi, può concentrarli per evaporazione." },
      { id: 'c', text: "Osmosi inversa o scambio ionico selettivo", correct: true, explanation: "Esatto: l'osmosi inversa e le resine a scambio ionico specifiche per nitrati sono le tecnologie generalmente più efficaci a livello domestico. Vanno scelte in base alla qualità dell'acqua di partenza." },
      { id: 'd', text: "Disinfezione UV", correct: false, explanation: "I raggi UV agiscono sui microrganismi: non rimuovono ioni come i nitrati." }
    ]
  },

  // ---------------- AMBIENTE ----------------
  {
    id: 'q17',
    category: 'ambiente',
    question: "Secondo stime di ciclo di vita (LCA) prudenziali, quanta CO2 equivalente può essere associata in media a una bottiglia di acqua in PET da 1,5 L?",
    difficulty: 'difficile',
    options: [
      { id: 'a', text: "Circa 5 g", correct: false, explanation: "Stima troppo bassa: considera solo il peso del PET vuoto, ignorando trasporto e fine vita." },
      { id: 'b', text: "Circa 20 g", correct: false, explanation: "Resta una stima sottodimensionata rispetto agli studi LCA disponibili." },
      { id: 'c', text: "Intorno a 80-90 g (ordine di grandezza)", correct: true, explanation: "Le stime LCA variano molto, ma l'ordine di grandezza tipico è di alcune decine di grammi di CO2eq per bottiglia, includendo produzione, trasporto e gestione del rifiuto." },
      { id: 'd', text: "Più di 1 kg", correct: false, explanation: "Sovrastima: salvo casi estremi (trasporto intercontinentale), si resta nell'ordine di decine di grammi di CO2eq." }
    ]
  },
  {
    id: 'q18',
    category: 'ambiente',
    question: "L'Italia è tra i principali consumatori europei di acqua minerale in bottiglia pro capite?",
    difficulty: 'facile',
    source: 'ISTAT; Censis-Acque minerali',
    options: [
      { id: 'a', text: "No, è tra i Paesi con consumi più bassi", correct: false, explanation: "Falso: i dati ISTAT e di settore mostrano consumi medi pro capite molto elevati." },
      { id: 'b', text: "Sì, è storicamente ai primi posti in Europa", correct: true, explanation: "Esatto: l'Italia è da anni ai vertici europei per consumo di acqua minerale pro capite, nonostante la qualità diffusa dell'acqua di rete." },
      { id: 'c', text: "Solo nelle regioni del Sud", correct: false, explanation: "Il consumo è elevato su tutto il territorio nazionale, con differenze regionali ma non così nette." },
      { id: 'd', text: "Solo a partire dal 2020", correct: false, explanation: "Il consumo è strutturalmente elevato da decenni, non un fenomeno recente." }
    ]
  },
  {
    id: 'q19',
    category: 'ambiente',
    question: "Le caraffe filtranti a carbone attivo sono efficaci contro qualunque contaminazione dell'acqua?",
    difficulty: 'medio',
    options: [
      { id: 'a', text: "Sì, rimuovono tutto", correct: false, explanation: "Falso: hanno un campo d'azione limitato e specifico." },
      { id: 'b', text: "Sono utili soprattutto su cloro, gusto e alcune molecole organiche; non sono affidabili contro nitrati, PFAS o contaminazioni microbiologiche serie", correct: true, explanation: "Esatto: le caraffe domestiche aiutano su parametri organolettici e su alcuni composti organici, ma non sostituiscono trattamenti dedicati per nitrati, PFAS, metalli o sicurezza microbiologica. Vanno mantenute con cura per evitare ricontaminazioni." },
      { id: 'c', text: "Sì, se cambiate ogni 12 mesi", correct: false, explanation: "La cadenza di sostituzione è importante ma non amplia il tipo di contaminanti rimossi." },
      { id: 'd', text: "No, non hanno alcuna utilità", correct: false, explanation: "Non è vero: in molti contesti migliorano il gusto e riducono cloro libero, semplicemente non sono una soluzione universale." }
    ]
  },
  {
    id: 'q20',
    category: 'ambiente',
    question: "Qual è la principale fonte diffusa di nitrati nelle falde della Pianura Padana?",
    difficulty: 'medio',
    source: 'ISPRA, Rapporto Acque; ARPA regionali',
    options: [
      { id: 'a', text: "Le piogge", correct: false, explanation: "Le piogge contribuiscono al trasporto ma non sono la sorgente principale di nitrati." },
      { id: 'b', text: "Agricoltura intensiva e zootecnia (fertilizzanti azotati e reflui)", correct: true, explanation: "Esatto: la pressione di fertilizzanti azotati e dei reflui zootecnici è la principale fonte diffusa di nitrati in falda nella Pianura Padana, come documentato da ISPRA e dalle ARPA regionali." },
      { id: 'c', text: "Il traffico autostradale", correct: false, explanation: "Il traffico incide soprattutto su altri inquinanti atmosferici, non come fonte principale di nitrati in falda." },
      { id: 'd', text: "Gli impianti di potabilizzazione", correct: false, explanation: "Gli impianti trattano l'acqua per renderla potabile: non sono una sorgente di nitrati." }
    ]
  }
];

export const QUIZ_PROFILES: QuizProfile[] = [
  {
    minScore: 90,
    maxScore: 100,
    title: "Esperto/a dell'acqua",
    emoji: '🧪',
    cta: 'lab',
    description:
      "Complimenti: dimostri una conoscenza solida e aggiornata di normativa, chimica e buone pratiche legate all'acqua potabile. Sai distinguere fra parametri organolettici e parametri di rilievo sanitario, e non ti fai ingannare dai falsi miti più diffusi. A questo livello, il passo naturale è confrontare ciò che sai con dati reali sulla tua acqua: anche chi è preparato può scoprire situazioni locali peculiari, soprattutto su nitrati, durezza o impianti domestici datati. Considera di richiedere un'analisi di laboratorio della tua acqua per validare le tue percezioni con numeri certificati e capire se servono interventi mirati."
  },
  {
    minScore: 65,
    maxScore: 89,
    title: "Curioso/a informato/a",
    emoji: '💡',
    cta: 'tool',
    description:
      "Ottimo lavoro: hai una buona base di partenza e riconosci la maggior parte dei concetti chiave su qualità dell'acqua, limiti di legge e differenze tra trattamenti. Restano alcune zone d'ombra che è normale avere, soprattutto su parametri tecnici come durezza, conducibilità o efficacia dei filtri rispetto a contaminanti specifici. Il modo più rapido per consolidare ciò che sai è ragionare sui numeri della tua zona: usa il nostro strumento di calcolo per ottenere un punteggio sintetico della tua acqua e capire quali parametri meritano davvero attenzione nel tuo caso concreto."
  },
  {
    minScore: 40,
    maxScore: 64,
    title: "In esplorazione",
    emoji: '🔍',
    cta: 'guide',
    description:
      "Stai partendo da una base ancora in costruzione: hai intuizioni corrette ma anche alcuni miti tipici sull'acqua del rubinetto, sui filtri e sulla differenza con l'acqua in bottiglia. Va benissimo: il tema è tecnico e nessuno nasce esperto. Per orientarti senza dover diventare un chimico, parti dalle nostre guide divulgative su nitrati, durezza, piombo, PFAS e trattamenti domestici: sono pensate per capire cosa conta davvero per la salute, cosa è solo questione di gusto e quando vale la pena fare un'analisi. Dopo, prova a rifare il quiz: vedrai la differenza."
  },
  {
    minScore: 0,
    maxScore: 39,
    title: "Beginner totale",
    emoji: '🌱',
    cta: 'guide',
    description:
      "Ottimo punto di partenza: hai scelto di mettere alla prova le tue conoscenze, ed è già il primo passo per fare scelte più consapevoli su ciò che bevi. È normale non conoscere ancora normativa, parametri e trattamenti: sono argomenti tecnici che raramente vengono spiegati in modo chiaro. Ti consigliamo di leggere con calma le nostre guide introduttive sulla qualità dell'acqua del rubinetto: trovi spiegazioni semplici su come si controlla l'acqua in Italia, quali contaminanti contano davvero e come capire la situazione della tua zona. Poi torna qui e rifai il quiz: vedrai un netto miglioramento."
  }
];
