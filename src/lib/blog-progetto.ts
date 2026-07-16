import type { BlogPost } from './blog-posts';

// Articoli "making of": cosa abbiamo costruito con la mappatura per comune.
export const BLOG_PROGETTO: BlogPost[] = [
  {
    slug: 'come-abbiamo-mappato-acqua-comuni-italiani',
    title:
      "Come abbiamo mappato l'acqua del rubinetto di oltre 1.400 comuni italiani",
    shortTitle: 'Come abbiamo mappato l’acqua di 1.400+ comuni',
    metaDescription:
      "Il dietro le quinte di GoccIA: come abbiamo estratto dai referti pubblici dei gestori i valori reali dell'acqua del rubinetto per oltre 1.400 comuni, con punteggio 1–99 e fonti verificabili.",
    category: 'scienza',
    publishedAt: '2026-07-16',
    readingMinutes: 8,
    searchKeywords: [
      'analisi acqua per comune',
      'qualità acqua comuni italiani',
      'mappa acqua rubinetto italia',
      'dati acqua potabile open data',
      'valori acqua rubinetto comune',
    ],
    excerpt:
      "Per mesi la domanda più frequente di chi arriva su GoccIA è stata la stessa: «ma nel MIO comune com'è l'acqua?». Fino a poco tempo fa potevamo solo rimandare al sito del gestore. Oggi, per oltre 1.400 comuni, pubblichiamo direttamente i valori reali delle analisi — tabella parametri, punteggio 1–99 e link alla fonte. In questo articolo raccontiamo come ci siamo arrivati: da dove vengono i dati, perché non inventiamo nulla, come funziona la pipeline che legge i referti dei gestori e quali scelte abbiamo fatto per non trasformare tutto in pagine vuote buone solo per i motori di ricerca.",
    sections: [
      {
        heading: 'Il problema: i dati esistono, ma sono sparsi e illeggibili',
        paragraphs: [
          "In Italia l'acqua del rubinetto è tra gli alimenti più controllati: ogni gestore del servizio idrico integrato esegue migliaia di analisi all'anno secondo il D.Lgs. 18/2023, e molti pubblicano i risultati. Il problema non è la mancanza di dati, ma la loro frammentazione: ogni gestore usa un formato diverso — pagine web, PDF, tabelle Excel, moduli di ricerca per comune — e i valori sono spesso poco leggibili per chi non è un tecnico.",
          "Risultato: un cittadino che cerca «analisi acqua» più il nome del proprio comune spesso non trova nulla di utile, oppure finisce su siti commerciali che vendono depuratori. Volevamo colmare questo vuoto con una fonte neutrale, gratuita e verificabile.",
        ],
      },
      {
        heading: 'La regola numero uno: nessun valore inventato',
        paragraphs: [
          "Prima ancora di scrivere una riga di codice abbiamo fissato un principio inderogabile: GoccIA non inventa né stima i valori. Ogni numero che vedi su una scheda comune proviene da un referto pubblico del gestore, e ogni scheda cita la fonte con un link diretto e la data di riferimento.",
          "Questo vincolo ha guidato tutte le scelte tecniche. Dove un dato non era estraibile in modo affidabile, abbiamo preferito non pubblicarlo piuttosto che riempire una tabella con approssimazioni. Un parametro che il laboratorio riporta come «sotto il limite di rilevabilità» resta tale anche da noi: non lo trasformiamo in un numero preciso che non esiste.",
        ],
      },
      {
        heading: 'La pipeline: leggere i referti come farebbe una persona',
        paragraphs: [
          "Il cuore del progetto è una pipeline che, gestore per gestore, sa dove trovare i dati e come tradurli in una struttura comune. Alcune fonti sono open data (un file CSV o Excel con tutti i comuni), altre sono pagine web una per comune, altre ancora rispondono a un modulo di ricerca. Per ciascuna abbiamo scritto un «adattatore» dedicato che scarica il dato reale e lo normalizza.",
          "La parte più delicata è la normalizzazione dei nomi: un gestore scrive «Conc. ioni idrogeno», un altro «pH», un altro ancora «Concentrazione ioni idrogeno», ma è sempre lo stesso parametro. Lo stesso vale per i valori scritti all'italiana, con la virgola decimale, o come «< 2» per indicare una misura sotto soglia. La pipeline riconduce tutto a un formato coerente, con gli stessi parametri e le stesse unità di misura.",
        ],
        bullets: [
          'Open data (CSV/Excel): un file con tutti i comuni serviti, es. per la Sardegna.',
          'Pagine per comune: una scheda web per ciascun comune, con la tabella dei valori medi.',
          'API e moduli di ricerca: risposte in formato dati o frammenti di tabella, un comune alla volta.',
        ],
      },
      {
        heading: 'Il punteggio 1–99: dagli stessi valori, sempre lo stesso risultato',
        paragraphs: [
          "Una volta estratti i valori, li diamo in pasto allo stesso motore di calcolo che alimenta lo strumento pubblico di GoccIA. Ogni parametro viene confrontato con il limite di legge (D.Lgs. 18/2023) e con l'intervallo ideale suggerito dalla letteratura (WHO/EFSA), e contribuisce a un punteggio sintetico da 1 a 99, ponderato su tre aree: Salute (50%), Estetica (25%) e Impianti (25%).",
          "Il motore è deterministico: a parità di valori in ingresso restituisce sempre lo stesso punteggio. Non c'è intelligenza artificiale che «interpreta» i numeri, non ci sono pesi che cambiano nel tempo. Questo rende il punteggio riproducibile e confrontabile tra comuni diversi.",
        ],
      },
      {
        heading: 'Perché non abbiamo creato una pagina per ogni comune d’Italia',
        paragraphs: [
          "La tentazione, per un progetto così, è generare subito 8.000 pagine — una per ogni comune italiano — per coprire ogni possibile ricerca. Abbiamo scelto la strada opposta: una pagina comune nasce solo quando abbiamo un referto reale da mostrare. Lo chiamiamo publishing «data-gated».",
          "È una scelta di qualità e di onestà: pagine vuote o riempite di testo generico non aiutano nessuno e vengono giustamente penalizzate dai motori di ricerca. Meglio poche schede ricche di dati veri che migliaia di scatole vuote. La copertura cresce comune per comune, man mano che aggiungiamo nuovi gestori.",
        ],
      },
      {
        heading: 'Cosa trovi oggi, e cosa arriverà',
        paragraphs: [
          "Oggi la mappatura copre oltre 1.400 comuni, distribuiti tra grandi gestori come SMAT (area di Torino), il Gruppo IREN, Uniacque (Bergamo), Abbanoa (Sardegna), ACEA ATO 2 (Roma e provincia), Acquedotto Pugliese, Padania Acque, GAIA e Publiacqua. Puoi sfogliarli tutti, regione per regione, dalla pagina Acqua per comune, oppure vedere la classifica dei comuni più a rischio.",
          "Nei prossimi mesi aggiungeremo altri gestori. Alcune fonti richiedono lavoro extra — PDF senza tabelle, portali che espongono i dati solo via JavaScript, certificati mal configurati — ma l'obiettivo resta chiaro: rendere leggibile, comune per comune, l'acqua che esce dal rubinetto di casa.",
        ],
      },
    ],
    faqs: [
      {
        q: 'I valori pubblicati sono reali o stimati?',
        a: 'Sono reali. Ogni valore proviene da un referto pubblico del gestore idrico ed è accompagnato dal link alla fonte e dalla data di riferimento. Dove un dato non è estraibile in modo affidabile, non lo pubblichiamo.',
      },
      {
        q: 'Ogni quanto vengono aggiornati?',
        a: "Aggiorniamo i dati eseguendo di nuovo la pipeline sui portali dei gestori. La cadenza dipende da quanto spesso il singolo gestore pubblica: molti aggiornano i valori medi ogni semestre o trimestre.",
      },
      {
        q: 'Il mio comune non c’è: perché?',
        a: "Probabilmente il suo gestore non è ancora tra le fonti che abbiamo integrato, oppure pubblica i dati in un formato che non riusciamo ancora a leggere in modo affidabile. La copertura cresce nel tempo. Nel frattempo puoi calcolare il punteggio inserendo i valori del tuo referto.",
      },
      {
        q: 'Il punteggio sostituisce il referto di laboratorio?',
        a: 'No. Il punteggio 1–99 è uno strumento informativo che aiuta a leggere i valori, ma non sostituisce il rapporto di prova ufficiale né costituisce parere medico o legale.',
      },
    ],
    relatedSlugs: ['analisi-acqua-comune-come-leggere-scheda'],
    ctaContext:
      "Vuoi i valori esatti del tuo rubinetto, non solo la media del comune? Un'analisi in laboratorio qualificato con metodi validati conformi a norme tecniche misura metalli, nitrati, durezza e PFAS di casa tua:",
  },
  {
    slug: 'analisi-acqua-comune-come-leggere-scheda',
    title:
      "Analisi acqua del tuo comune: come leggere la scheda e il punteggio 1–99",
    shortTitle: 'Come leggere la scheda acqua del tuo comune',
    metaDescription:
      "Guida pratica alla scheda comune di GoccIA: cosa significano durezza, nitrati, arsenico, PFAS e gli altri parametri, come si legge il punteggio 1–99 e cosa farne.",
    category: 'casa',
    publishedAt: '2026-07-16',
    readingMinutes: 7,
    searchKeywords: [
      'come leggere analisi acqua',
      'punteggio acqua rubinetto',
      'durezza nitrati arsenico acqua',
      'valori acqua comune significato',
      'scheda qualità acqua comune',
    ],
    excerpt:
      "Hai aperto la scheda dell'acqua del tuo comune e ti sei trovato davanti a una tabella di parametri e un numero grande da 1 a 99. Cosa significano davvero? In questa guida spieghiamo, in parole semplici, come è fatta la scheda comune di GoccIA: come si legge il punteggio e i tre sotto-punteggi, cosa dicono i parametri più importanti (durezza, nitrati, arsenico, sodio, PFAS), perché alcuni valori compaiono come «< 2» o «assente», e soprattutto cosa conviene fare in base a ciò che leggi.",
    sections: [
      {
        heading: 'Il punteggio 1–99 e i tre sotto-punteggi',
        paragraphs: [
          "In alto nella scheda trovi il punteggio complessivo, da 1 a 99: più è alto, meglio è. Non esiste il 100 (nessuna acqua è «perfetta») né lo zero (nessuna acqua distribuita è per definizione inutilizzabile). Il punteggio nasce dal confronto di ogni valore col limite di legge e con l'intervallo ideale.",
          "Accanto trovi tre sotto-punteggi che spiegano da dove viene il voto complessivo: Salute (peso 50%) riguarda i parametri con rilevanza sanitaria come nitrati, arsenico, piombo; Estetica (25%) riguarda gusto, odore e aspetto, ad esempio cloro residuo e torbidità; Impianti (25%) riguarda gli effetti sulle tubature ed elettrodomestici, in primis la durezza.",
        ],
      },
      {
        heading: 'La tabella dei parametri: come si legge',
        paragraphs: [
          "Sotto il punteggio c'è la tabella con, per ogni parametro: il valore misurato, il limite di legge e uno stato colorato. «Ottimale» significa dentro l'intervallo ideale; «Nella norma» significa entro i limiti ma non ottimale; «Oltre soglia» segnala un valore sopra il limite di legge.",
          "Alcuni valori compaiono come «< 2» o «assente»: vuol dire che il laboratorio non ha rilevato quantità misurabili di quella sostanza, cioè un risultato positivo. Li mostriamo così come sono sul referto, senza trasformarli in numeri che non esistono.",
        ],
      },
      {
        heading: 'I parametri che contano di più',
        paragraphs: [
          "Non serve capire tutti i parametri: alcuni raccontano quasi tutta la storia. Ecco i più utili da guardare, con il senso pratico di ciascuno.",
        ],
        bullets: [
          'Durezza (°F): quanto è «calcarea» l’acqua. Alta durezza significa più calcare su caldaie e lavastoviglie, ma non è un problema di salute.',
          'Nitrati (mg/L): indicatore di contaminazione agricola o civile. Limite di legge 50 mg/L; sotto i 10 è ideale, importante soprattutto per i neonati.',
          'Arsenico (µg/L): di origine spesso naturale in alcune aree vulcaniche. Limite 10 µg/L; è tra i parametri sanitari più sorvegliati.',
          'Sodio (mg/L): rilevante per chi segue diete iposodiche; limite 200 mg/L.',
          'PFAS (µg/L): i «forever chemicals». I nuovi limiti UE si applicano dal 2026; dove il gestore li pubblica, li riportiamo.',
          'Microbiologici (E. coli, enterococchi): devono risultare assenti. Se lo sono, è il segnale che l’acqua è sicura dal punto di vista batteriologico.',
        ],
      },
      {
        heading: 'Media del comune contro valore del tuo rubinetto',
        paragraphs: [
          "Un punto importante: la scheda comune mostra valori medi o rappresentativi della rete pubblica, riferiti a uno o più punti di prelievo. È un'ottima fotografia dell'acqua che arriva al tuo quartiere, ma non racconta cosa succede negli ultimi metri, dentro casa tua.",
          "La differenza può contare soprattutto negli edifici più datati: vecchie tubazioni interne possono rilasciare metalli come piombo, rame o nichel, che la rete pubblica a monte non presenta. Per questo, se abiti in un palazzo antecedente agli anni Sessanta o dopo una ristrutturazione, ha senso un controllo al rubinetto.",
        ],
      },
      {
        heading: 'Cosa fare in base a quello che leggi',
        paragraphs: [
          "Se il punteggio del tuo comune è alto e i parametri sanitari sono a posto, la notizia è semplice: puoi bere l'acqua del rubinetto con serenità, risparmiando denaro e plastica. Se la durezza è alta, il tema è solo pratico (calcare): eventualmente un addolcitore per gli impianti, non per la salute.",
          "Se invece vedi parametri sanitari vicini o oltre i limiti, o se vivi in un edificio vecchio, il passo giusto è un'analisi del tuo rubinetto in un laboratorio qualificato, con metodi validati conformi a norme tecniche. È l'unico modo per sapere con certezza cosa esce da casa tua — e da lì, se serve, scegliere il trattamento giusto.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Un punteggio alto vuol dire che posso bere l’acqua?',
        a: "Un punteggio alto indica che i valori pubblicati dal gestore sono buoni. È un ottimo segnale, ma riguarda la rete pubblica: negli edifici datati conviene comunque verificare il rubinetto, dove le tubazioni interne possono incidere.",
      },
      {
        q: 'Perché alcuni valori sono scritti come «< 1» o «assente»?',
        a: "Significa che la sostanza è sotto il limite di rilevabilità dello strumento, cioè praticamente non rilevata: un risultato positivo. Riportiamo il dato così com'è sul referto.",
      },
      {
        q: 'La durezza alta fa male alla salute?',
        a: "No. La durezza indica calcio e magnesio disciolti: influisce su calcare, gusto ed elettrodomestici, ma non è un rischio per la salute. Anzi, calcio e magnesio dell'acqua contribuiscono all'apporto giornaliero.",
      },
      {
        q: 'Come faccio a sapere i valori esatti di casa mia?',
        a: "Serve un'analisi al tuo rubinetto: la scheda comune è una media della rete, mentre solo un prelievo a casa misura l'effetto delle tubazioni interne. Puoi poi inserire quei valori su GoccIA per ottenere il tuo punteggio personale.",
      },
    ],
    relatedSlugs: ['come-abbiamo-mappato-acqua-comuni-italiani'],
    ctaContext:
      "Per conoscere i valori reali del tuo rubinetto (non la media del comune) affidati a un’analisi in laboratorio qualificato con metodi validati conformi a norme tecniche:",
  },
];
