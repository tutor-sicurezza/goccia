export interface MythSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface MythFAQ {
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

export interface MythPage {
  slug: string;
  myth: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  verdict: 'falso' | 'parzialmente-vero' | 'vero-ma-fraintendimento' | 'dipende' | 'vero';
  verdictSummary: string;
  intro: string;
  sections: MythSection[];
  faqs: MythFAQ[];
  scientificReferences: string[];
  ctaVariant: CTAVariant;
  ctaContext: string;
  relatedSlugs?: string[];
}

export const MYTH_PAGES: MythPage[] = [
  {
    slug: 'calcare-causa-calcoli-renali',
    myth: 'Il calcare nell’acqua del rubinetto causa i calcoli renali',
    shortTitle: 'Il calcare nell’acqua causa i calcoli renali? La verità',
    metaDescription:
      'Il calcare nell’acqua del rubinetto causa calcoli renali? Falso: nessuna evidenza scientifica solida lo conferma. Cosa dicono WHO, EFSA e la letteratura medica.',
    searchKeywords: [
      'calcare calcoli renali',
      'acqua dura calcoli renali',
      'calcio acqua calcoli',
      'acqua del rubinetto calcoli',
      'durezza acqua calcoli renali',
      'calcare fa male reni',
    ],
    verdict: 'falso',
    verdictSummary:
      'Falso. Nessuna evidenza scientifica solida collega l’assunzione di calcio dall’acqua del rubinetto allo sviluppo di calcoli renali. Anzi, diverse meta‑analisi suggeriscono che un apporto adeguato di calcio nella dieta sia un fattore protettivo.',
    intro:
      'C’è un’idea molto diffusa in Italia secondo cui il calcare presente nell’acqua del rubinetto — cioè i sali di calcio e magnesio responsabili della cosiddetta durezza — sarebbe una causa diretta dei calcoli renali. Questa convinzione è spesso usata come argomento per acquistare acqua in bottiglia o addolcitori domestici. La realtà scientifica racconta una storia diversa: il calcio assunto con l’acqua e con il cibo non si comporta come quello che precipita su una resistenza dello scaldabagno, e le linee guida internazionali non identificano l’acqua dura come fattore di rischio per la nefrolitiasi.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Il mito nasce da una semplice analogia visiva: se il calcare incrosta tubature, caldaie e bollitori, il pensiero immediato è che possa fare lo stesso all’interno dei reni. È una deduzione intuitiva ma sbagliata, perché ignora due fatti basilari di fisiologia: il calcio dell’acqua è disciolto in forma ionica e viene gestito dal nostro organismo come qualsiasi altro calcio dietetico (per esempio quello del latte), mentre i calcoli renali sono cristalli che si formano a partire dalle urine e dipendono soprattutto dalla concentrazione urinaria di ossalati, acido urico, citrato e dal pH.',
          'A rinforzare il mito ha contribuito anche il linguaggio commerciale di addolcitori e brocche filtranti, che da decenni associa l’immagine del calcare a un generico problema di salute. In assenza di un’informazione divulgativa chiara, il messaggio implicito “calcare = pericoloso per i reni” ha attecchito nella cultura popolare, sostenuto anche da un certo passaparola medico non aggiornato.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'Le Linee Guida WHO per la qualità dell’acqua potabile (4ª edizione, aggiornamenti successivi) non fissano alcun limite massimo di durezza per ragioni sanitarie e ricordano che un certo contenuto di calcio e magnesio può contribuire positivamente all’apporto giornaliero di questi minerali. L’European Food Safety Authority (EFSA) ha pubblicato pareri scientifici sui valori dietetici di riferimento per il calcio (Scientific Opinion, EFSA Journal 2015) che indicano l’importanza di un’assunzione adeguata per la salute ossea.',
          'Sul fronte clinico, gli studi di riferimento per la prevenzione della nefrolitiasi — in particolare il classico lavoro di Curhan e collaboratori sul New England Journal of Medicine — hanno mostrato che una dieta con normale apporto di calcio riduce il rischio di calcoli rispetto a una dieta povera di calcio, perché il calcio dietetico lega gli ossalati a livello intestinale e ne riduce l’assorbimento. La Mayo Clinic e il National Kidney Foundation indicano nelle proprie raccomandazioni che non si deve ridurre il calcio per prevenire i calcoli, e l’Istituto Superiore di Sanità ribadisce che la durezza dell’acqua non rappresenta un parametro di rilevanza sanitaria nella normativa italiana.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'Il calcare non causa calcoli renali. Chi non ha già una predisposizione clinica nota può bere serenamente acqua del rubinetto anche se “dura”. I veri fattori di rischio per la nefrolitiasi sono ben altri: scarsa idratazione, dieta ricca di sodio e proteine animali, eccesso di ossalati (spinaci, rabarbaro, cioccolato in grandi quantità), obesità, familiarità, alcune patologie metaboliche.',
          'Chi soffre già di calcoli ricorrenti deve farsi valutare da un nefrologo o urologo, che può prescrivere un esame metabolico delle urine delle 24 ore: solo così si individuano i meccanismi specifici (ipercalciuria, iperossaluria, ipocitraturia) e si imposta una dieta personalizzata. La risposta non passa quasi mai dall’eliminazione del calcio dall’acqua, ma da una strategia clinica complessiva.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'Se l’acqua di casa è percepita come molto dura e si vuole avere un quadro oggettivo, la cosa più utile non è installare un addolcitore alla cieca, ma misurare. Un’analisi di laboratorio sui parametri di base — durezza totale, calcio, magnesio, conducibilità, residuo a 180°C, oltre a parametri sanitari come nitrati e metalli — chiarisce in poche righe se l’acqua rientra nei limiti del D.Lgs. 18/2023 e qual è il suo profilo minerale reale.',
        ],
        bullets: [
          'Verifica la durezza reale con un kit di analisi o un rapporto di prova di laboratorio.',
          'Aumenta l’idratazione: 2–2,5 litri di acqua al giorno sono il singolo fattore protettivo più importante.',
          'Riduci il sodio e bilancia gli ossalati, non il calcio.',
          'Se hai già avuto calcoli, chiedi al nefrologo un esame metabolico delle urine 24h.',
        ],
      },
      {
        heading: 'Quando preoccuparsi davvero',
        paragraphs: [
          'I parametri da tenere d’occhio in un’analisi dell’acqua, dal punto di vista sanitario, non sono il calcare ma altri: piombo nelle vecchie tubature interne, nitrati nelle zone agricole, trialometani in alcuni acquedotti, eventuali contaminanti emergenti come PFAS in aree note. Se uno di questi parametri risulta fuori norma, allora sì è il caso di intervenire — ma sono problemi tecnicamente molto diversi dalla “durezza” e richiedono soluzioni diverse.',
        ],
      },
    ],
    faqs: [
      {
        q: 'L’acqua dura fa venire i calcoli renali?',
        a: 'No. Gli studi epidemiologici disponibili non hanno mostrato una correlazione causale tra durezza dell’acqua e incidenza di calcoli renali. Il calcio assunto con l’acqua è metabolizzato come quello degli alimenti e un suo apporto adeguato è anzi considerato protettivo.',
      },
      {
        q: 'Se ho già avuto un calcolo devo bere acqua a basso residuo?',
        a: 'Non necessariamente. La scelta dell’acqua dipende dal tipo di calcolo e dal profilo metabolico, da valutare con il nefrologo. La regola generale più utile resta bere molto (almeno 2 litri al giorno), indipendentemente dal residuo fisso.',
      },
      {
        q: 'L’addolcitore domestico previene i calcoli?',
        a: 'No, non c’è evidenza che lo faccia. L’addolcitore serve a proteggere tubature ed elettrodomestici dall’incrostazione di calcare, non ha finalità sanitarie. Inoltre sostituisce calcio e magnesio con sodio, che in eccesso non è desiderabile.',
      },
      {
        q: 'Come capisco se la mia acqua è nei limiti di legge?',
        a: 'La durezza in Italia non ha un limite sanitario stretto: il D.Lgs. 18/2023 indica un valore consigliato tra 15 e 50 °F. Per avere un quadro completo serve un’analisi di laboratorio che riporti durezza, calcio, magnesio e i parametri sanitari prioritari.',
      },
    ],
    scientificReferences: [
      'WHO, Guidelines for Drinking-water Quality, 4th edition incorporating the first and second addenda (2022).',
      'EFSA Panel on Dietetic Products, Nutrition and Allergies, Scientific Opinion on Dietary Reference Values for calcium, EFSA Journal 2015;13(5):4101.',
      'Curhan GC et al., A prospective study of dietary calcium and other nutrients and the risk of symptomatic kidney stones, NEJM 1993;328:833–838.',
      'Istituto Superiore di Sanità, Acque destinate al consumo umano — informazioni tecniche e sanitarie.',
    ],
    ctaVariant: 'kit-analisi',
    ctaContext:
      'Vuoi conoscere la durezza reale e il profilo minerale dell’acqua di casa? Un kit di analisi dell’acqua del rubinetto con rapporto di prova di laboratorio qualificato ti dà valori misurati su calcio, magnesio, durezza, residuo fisso e parametri sanitari prioritari.',
    relatedSlugs: ['acqua-zero-residuo-fisso-piu-pura', 'caraffa-filtrante-elimina-tutto'],
  },

  {
    slug: 'acqua-rubinetto-ti-fa-ingrassare',
    myth: 'L’acqua del rubinetto fa ingrassare per via del sodio',
    shortTitle: 'L’acqua del rubinetto fa ingrassare? Verità e numeri',
    metaDescription:
      'L’acqua del rubinetto fa ingrassare per il sodio? Falso: l’acqua ha zero calorie e il sodio negli acquedotti italiani è di solito molto basso. I dati.',
    searchKeywords: [
      'acqua del rubinetto fa ingrassare',
      'acqua sodio dieta',
      'acqua rubinetto sodio',
      'acqua fa ingrassare',
      'acqua del rubinetto e ritenzione idrica',
      'sodio acqua potabile',
    ],
    verdict: 'falso',
    verdictSummary:
      'Falso. L’acqua non contiene calorie e quindi non può far ingrassare. Il sodio nell’acqua del rubinetto italiana è di norma molto basso, ben sotto i limiti di legge, e incide in modo trascurabile sulla quota giornaliera assunta con la dieta.',
    intro:
      'C’è un’idea che gira soprattutto nei forum di diete e benessere: l’acqua del rubinetto “gonfierebbe” e farebbe ingrassare a causa del sodio o degli altri sali disciolti. È una convinzione comprensibile sul piano emotivo ma errata su quello fisiologico. L’acqua — qualunque acqua potabile — ha zero calorie. Il sodio presente nell’acqua di rete in Italia è quasi sempre una piccola frazione di quello introdotto con i cibi confezionati, il pane e il sale da cucina. Vediamo perché questo mito è nato e cosa dicono davvero i numeri.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Il mito nasce dalla confusione tra due fenomeni diversi: l’aumento di peso (cioè l’accumulo di tessuto adiposo, che dipende dal bilancio calorico) e la ritenzione idrica (cioè l’accumulo temporaneo di liquidi nei tessuti, che dipende da fattori ormonali, posturali e di equilibrio sodio-potassio). Sui social la parola “ingrassare” viene usata in modo intercambiabile con “gonfiarsi”, anche se in fisiologia significano cose molto diverse.',
          'A questo si somma il marketing storico delle acque minerali, che da decenni segmenta i prodotti in base al residuo fisso e al contenuto di sodio, lasciando intendere che l’acqua “leggera” sia automaticamente “dimagrante”. Una promessa che non ha base scientifica: tutte le acque potabili contribuiscono in modo identico al bilancio calorico, cioè con zero kcal per litro.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'L’European Food Safety Authority, nei suoi Scientific Opinions sui valori dietetici di riferimento per acqua e sodio, indica un’assunzione adeguata di acqua di circa 2 litri al giorno per le donne e 2,5 litri per gli uomini, includendo acqua, bevande e alimenti. Lo stesso EFSA ha pubblicato un parere scientifico sul sodio (EFSA Journal 2019) che fissa un livello adeguato di assunzione di 2 g al giorno per gli adulti, sottolineando che la maggior parte di questo sodio arriva dagli alimenti trasformati e dal sale aggiunto.',
          'L’Organizzazione Mondiale della Sanità raccomanda di non superare i 2 g/die di sodio (equivalenti a circa 5 g di sale) per la prevenzione di ipertensione e malattie cardiovascolari. Sull’acqua del rubinetto, il D.Lgs. 18/2023 (recepimento della Direttiva UE 2020/2184) fissa un valore di parametro per il sodio di 200 mg/L, ma la stragrande maggioranza degli acquedotti italiani eroga acqua con valori di sodio nell’ordine di pochi mg/L o poche decine di mg/L. In un litro tipico si introducono molti meno milligrammi di sodio rispetto a una porzione di pane o a un piatto di pasta condita.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'L’acqua del rubinetto, di per sé, non fa ingrassare. Anzi, sostituire bevande zuccherate con acqua è una delle strategie più efficaci raccomandate dalle linee guida nutrizionali per il controllo del peso. La sensazione di gonfiore che alcune persone associano all’acqua del rubinetto dipende quasi sempre da fattori diversi: ciclo ormonale, eccesso di sale nella dieta complessiva, postura, riposo, stato intestinale.',
          'Se proprio si vuole tenere il sodio dell’acqua sotto controllo — per esempio per dieta iposodica indicata dal medico in caso di ipertensione — il modo corretto è conoscere il valore reale del proprio acquedotto, non eliminare a priori l’acqua di rete.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'La prima cosa utile è leggere l’etichetta dell’acqua del proprio comune: ogni gestore pubblica i valori medi di sodio, durezza, nitrati e altri parametri sul proprio sito. Se servono dati più puntuali sul punto di uscita del rubinetto di casa, un’analisi di laboratorio permette di misurare direttamente sodio, calcio, magnesio e residuo fisso, eliminando ogni dubbio.',
        ],
        bullets: [
          'Controlla il valore di sodio nel report del tuo acquedotto.',
          'Confronta il dato con i 2 g/die di sodio raccomandati: in genere l’acqua ne fornisce una frazione minima.',
          'Riduci il sale aggiunto e i cibi processati prima di cambiare l’acqua.',
          'In caso di dieta iposodica prescritta, parla con il medico anche del contenuto di sodio dell’acqua.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Bere acqua del rubinetto fa ingrassare?',
        a: 'No. L’acqua ha zero calorie e non può contribuire all’accumulo di tessuto adiposo. Può al massimo dare una temporanea sensazione di gonfiore se assunta in grandi quantità in poco tempo, ma non è ingrassare.',
      },
      {
        q: 'Quanto sodio c’è nell’acqua del rubinetto italiana?',
        a: 'Il limite di legge è 200 mg/L (D.Lgs. 18/2023), ma in moltissimi acquedotti italiani i valori reali sono ben inferiori, spesso sotto i 20–30 mg/L. Per dati puntuali si può consultare il sito del gestore o richiedere un’analisi.',
      },
      {
        q: 'Allora perché mi sento gonfio dopo aver bevuto molta acqua?',
        a: 'Può dipendere da fattori posturali, ormonali (ad esempio ciclo mestruale), eccesso di sodio nella dieta o aerofagia. La sensazione di gonfiore non corrisponde a un aumento reale del peso corporeo.',
      },
      {
        q: 'L’acqua oligominerale in bottiglia fa dimagrire?',
        a: 'No. Nessuna acqua, oligominerale o di rete, ha effetto dimagrante intrinseco. Il dimagrimento dipende dal bilancio calorico e dallo stile di vita complessivo.',
      },
    ],
    scientificReferences: [
      'EFSA Panel on Nutrition, Novel Foods and Food Allergens, Scientific Opinion on the Tolerable Upper Intake Level for sodium, EFSA Journal 2019;17(9):5778.',
      'WHO, Guideline: Sodium intake for adults and children (2012).',
      'D.Lgs. 23 febbraio 2023, n. 18 — attuazione della Direttiva UE 2020/2184 sulle acque destinate al consumo umano.',
      'EFSA, Scientific Opinion on Dietary Reference Values for water, EFSA Journal 2010;8(3):1459.',
    ],
    ctaVariant: 'kit-analisi',
    ctaContext:
      'Vuoi sapere quanto sodio c’è davvero nell’acqua di casa tua? Un kit di analisi misura sodio, durezza, residuo fisso e parametri sanitari di base, con rapporto di prova di laboratorio qualificato.',
    relatedSlugs: ['acqua-zero-residuo-fisso-piu-pura', 'acqua-rubinetto-italia-tra-le-peggiori-europa'],
  },

  {
    slug: 'bollire-acqua-elimina-tutto',
    myth: 'Basta bollire l’acqua del rubinetto per renderla sicura',
    shortTitle: 'Bollire l’acqua del rubinetto la rende sicura? Verità e limiti',
    metaDescription:
      'Bollire l’acqua del rubinetto elimina tutti i contaminanti? Solo in parte: uccide i microrganismi ma non rimuove metalli, nitrati e PFAS, anzi li concentra.',
    searchKeywords: [
      'bollire acqua sicura',
      'bollitura elimina contaminanti',
      'bollire acqua rubinetto',
      'acqua bollita microbiologica',
      'bollire acqua nitrati',
      'bollire acqua piombo',
    ],
    verdict: 'parzialmente-vero',
    verdictSummary:
      'Parzialmente vero. La bollitura disattiva i microrganismi patogeni ed è utile in caso di ordinanza non potabilità microbiologica, ma non rimuove metalli, nitrati, PFAS o pesticidi: questi contaminanti chimici si concentrano per evaporazione.',
    intro:
      'In molte case italiane la bollitura è considerata una sorta di “disinfezione universale” dell’acqua: si pensa che far bollire l’acqua per qualche minuto basti a renderla sicura in qualunque condizione. La verità è più sfumata. La bollitura è efficacissima contro i microrganismi — batteri, virus, protozoi — ed è infatti la prima misura raccomandata da WHO e autorità sanitarie in caso di contaminazione microbiologica. Per i contaminanti chimici invece non solo non funziona, ma può anche peggiorare la situazione concentrandoli.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'L’idea che “bollire purifica” è radicata nella memoria storica delle epidemie idriche: per oltre un secolo, di fronte a colera, tifo, dissenteria, la bollitura ha rappresentato lo strumento più semplice ed efficace per prevenire contagi. Questa associazione culturale fra acqua bollita e acqua sicura si è sedimentata in modo profondo, soprattutto nelle generazioni che hanno vissuto situazioni di emergenza idrica.',
          'Nel XXI secolo però il profilo dei rischi è cambiato: gli acquedotti moderni controllano efficacemente i patogeni con potabilizzazione e disinfezione, mentre i problemi emergenti riguardano contaminanti chimici (PFAS, pesticidi, nitrati, metalli pesanti residui in vecchie tubazioni). La bollitura, strumento perfetto contro un problema, è sostanzialmente inutile contro l’altro.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'Le Linee Guida WHO per la qualità dell’acqua potabile spiegano che la bollitura per almeno un minuto a piena ebollizione (tre minuti ad alta quota) inattiva virus, batteri e protozoi, ed è raccomandata come trattamento di emergenza in caso di guasti, eventi alluvionali o ordinanze del sindaco per non potabilità. È il principio per cui i Centers for Disease Control degli USA raccomandano la cosiddetta “boil water advisory”.',
          'Lo stesso WHO chiarisce però che la bollitura non rimuove sostanze chimiche disciolte. Metalli pesanti come piombo e arsenico, nitrati, sostanze perfluoroalchiliche (PFAS), pesticidi, prodotti farmaceutici a tracce non evaporano insieme al vapore acqueo. Anzi: poiché l’acqua evapora e i soluti restano, la loro concentrazione nel residuo aumenta. EFSA, ECDC e l’Istituto Superiore di Sanità indicano per questi rischi soluzioni diverse: controllo a monte nell’acquedotto, trattamenti di filtrazione specifici (osmosi inversa, carbone attivo, scambio ionico) e analisi periodiche.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'La bollitura va vista per quello che è: un eccellente trattamento microbiologico di emergenza, non una soluzione generale alla qualità dell’acqua. Se il problema dell’acqua del tuo rubinetto è microbiologico (per esempio dopo una rottura di rete o un’ordinanza comunale) bollirla almeno un minuto è la cosa giusta. Se il problema è o si sospetta sia di natura chimica (vecchio impianto domestico, zona agricola, area PFAS, sospetto piombo) bollirla non risolve nulla.',
          'Il passaggio decisivo è sempre lo stesso: capire qual è il rischio reale dell’acqua di casa, e farlo con dati. Un’analisi di laboratorio permette di sapere se serve un trattamento, e quale.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'Se vuoi capire se l’acqua del rubinetto presenta criticità, l’approccio razionale è dividere il problema in due piani: microbiologico e chimico. Per il primo, in condizioni ordinarie e in assenza di ordinanze del Sindaco, l’acqua di rete italiana è generalmente sicura grazie ai trattamenti di acquedotto. Per il secondo, conta molto la zona geografica, l’età e il tipo di impianto interno.',
        ],
        bullets: [
          'In caso di ordinanza di non potabilità microbiologica: bolli per almeno 1 minuto e segui le indicazioni del Comune.',
          'Per sospetti chimici (metalli, nitrati, PFAS): la bollitura non serve, occorre un’analisi di laboratorio mirata.',
          'Per impianti interni vecchi: valuta un’analisi al punto di uscita del rubinetto (non solo al contatore).',
          'In aree note per PFAS o agricole: chiedi analisi specifiche su PFAS e nitrati.',
        ],
      },
      {
        heading: 'Quando preoccuparsi davvero',
        paragraphs: [
          'Il caso in cui la bollitura ha un ruolo preciso è quello dell’emergenza microbiologica, segnalata dalle autorità sanitarie locali. Negli altri casi i segnali di allarme sono diversi: odori metallici o di solvente, schiuma persistente, depositi colorati, residenti in aree con storia documentata di contaminazione. In queste situazioni la risposta corretta non è lo scaldare l’acqua, ma fare un’analisi chimica completa e, se necessario, installare un trattamento adatto al contaminante specifico.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Bollire l’acqua elimina il calcare?',
        a: 'No. La bollitura fa precipitare parte del calcio in forma di carbonato (la “patina” nel bollitore), ma non elimina la durezza in modo affidabile. Soprattutto, non rimuove sodio, nitrati, metalli, PFAS.',
      },
      {
        q: 'Bollire elimina il cloro?',
        a: 'Riduce in parte il cloro libero residuo per evaporazione, ma non garantisce la rimozione dei sottoprodotti di disinfezione già formati (come i trialometani). Per il cloro è più efficace un filtro a carbone attivo o lasciare l’acqua a riposo in una caraffa per qualche ora.',
      },
      {
        q: 'Bollire elimina i PFAS?',
        a: 'No. I PFAS sono molto stabili e non si rimuovono con il calore: tendono anzi a concentrarsi se l’acqua evapora. Per i PFAS servono trattamenti specifici (osmosi inversa, carboni attivi a grano fine, resine selettive).',
      },
      {
        q: 'Per quanto tempo devo bollire l’acqua in caso di ordinanza?',
        a: 'Le linee guida internazionali (WHO, CDC) indicano di portare l’acqua a ebollizione vivace e mantenerla per almeno un minuto (tre minuti sopra i 2000 metri di quota) per inattivare in modo affidabile patogeni batterici, virali e protozoari.',
      },
    ],
    scientificReferences: [
      'WHO, Guidelines for Drinking-water Quality, 4th edition incorporating the first and second addenda (2022) — chapter on emergency treatment.',
      'CDC, Making Water Safe in an Emergency (technical guidance).',
      'D.Lgs. 23 febbraio 2023, n. 18 — acque destinate al consumo umano.',
      'EFSA, Scientific Opinion on the risks to human health related to PFAS in food, EFSA Journal 2020;18(9):6223.',
    ],
    ctaVariant: 'completa',
    ctaContext:
      'Vuoi sapere se l’acqua del rubinetto a casa tua presenta criticità chimiche che la bollitura non risolverebbe? Un’analisi completa di laboratorio su metalli, nitrati, parametri microbiologici e indicatori chimici ti dà un quadro reale e azionabile.',
    relatedSlugs: ['acqua-rubinetto-piombo-tutti-i-vecchi-palazzi', 'caraffa-filtrante-elimina-tutto'],
  },

  {
    slug: 'acqua-microplastiche-bottiglia-meglio',
    myth: 'L’acqua in bottiglia ha meno microplastiche dell’acqua del rubinetto',
    shortTitle: 'Microplastiche: bottiglia o rubinetto? Cosa dicono gli studi',
    metaDescription:
      'L’acqua in bottiglia ha meno microplastiche del rubinetto? Falso: gli studi più noti indicano il contrario. Cosa rivelano Mason 2018 e Schwabl 2019.',
    searchKeywords: [
      'microplastiche acqua bottiglia rubinetto',
      'acqua bottiglia microplastiche',
      'microplastiche acqua potabile',
      'microplastiche acqua del rubinetto',
      'plastica acqua minerale',
      'studio mason microplastiche',
    ],
    verdict: 'falso',
    verdictSummary:
      'Falso. Diversi studi peer‑reviewed (Mason et al. 2018, Schwabl et al. 2019, Kosuth et al. 2018) hanno trovato in media più microplastiche nell’acqua in bottiglia che in quella del rubinetto, dovute principalmente al rilascio dal contenitore stesso e dal tappo.',
    intro:
      'Si tende a pensare che l’acqua in bottiglia, essendo “sigillata”, sia automaticamente più “pulita” sul fronte delle microplastiche rispetto a quella di rete. Gli studi pubblicati negli ultimi anni raccontano l’opposto: il contenitore in PET o le bottiglie in HDPE, sommati al tappo, sono di per sé una fonte significativa di micro‑ e nanoplastiche, soprattutto dopo trasporto, esposizione al calore e tempo di stoccaggio. L’acqua del rubinetto non è esente da microplastiche, ma in genere ne contiene meno.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Il mito si appoggia su un’intuizione semplice: la bottiglia è “chiusa”, l’acquedotto invece passa per migliaia di chilometri di tubature potenzialmente contaminate. Il marketing dell’acqua minerale ha rafforzato questo immaginario per decenni, presentando il prodotto come “purezza imbottigliata alla fonte”, in contrapposizione implicita all’acqua di rete.',
          'Negli ultimi anni la diffusione mediatica del tema microplastiche ha alimentato la stessa narrazione: si è parlato molto delle microplastiche trovate nell’acqua potabile, ma raramente è stato chiarito il confronto quantitativo con l’acqua in bottiglia, che secondo gli studi più citati ne contiene tipicamente di più.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'Lo studio più noto è quello di Sherri Mason e collaboratori, pubblicato nel 2018 in collaborazione con Orb Media: ha analizzato 259 bottiglie di acqua in PET di 11 marchi internazionali, trovando in media 325 particelle di microplastica per litro, con punte molto più elevate. Il successivo lavoro di Schwabl et al. (Annals of Internal Medicine, 2019) ha confermato la presenza diffusa di microplastiche in matrici biologiche umane, identificando le acque in bottiglia come una delle vie di esposizione.',
          'Sul fronte dell’acqua del rubinetto, lo studio Kosuth et al. (PLoS ONE, 2018) ha riportato concentrazioni medie inferiori, con marcata variabilità geografica. L’OMS, in un rapporto del 2019 (“Microplastics in drinking-water”), ha concluso che il livello attuale di rischio per la salute dalle microplastiche nell’acqua potabile è considerato basso sulla base dell’evidenza disponibile, raccomandando però di proseguire la ricerca, ridurre l’inquinamento da plastica e ottimizzare la rimozione nei trattamenti.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'L’idea che la bottiglia “sigillata” sia di per sé garanzia di assenza di microplastiche è sbagliata: è la bottiglia stessa, insieme al tappo e al processo di imbottigliamento, una delle principali sorgenti di micro‑ e nanoplastiche. L’esposizione al calore (auto, magazzino estivo, dispenser non condizionati) peggiora la situazione perché favorisce il rilascio di particelle dal PET.',
          'Questo non significa che l’acqua del rubinetto sia priva di microplastiche, ma in confronto medio risulta in quantità inferiori. Ridurre l’uso quotidiano di bottiglie monouso è quindi una scelta sensata sia in termini ambientali sia in termini di esposizione personale alle microplastiche.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'Sul tema microplastiche manca ancora un metodo analitico standardizzato per uso domestico routinario: non esiste oggi un “kit microplastiche” affidabile alla pari delle analisi chimico‑fisiche classiche. Ciò che si può fare è ridurre l’esposizione complessiva e tenere sotto controllo i parametri sanitari classici dell’acqua di casa.',
        ],
        bullets: [
          'Preferisci l’acqua del rubinetto in bicchieri di vetro o borracce in acciaio inox.',
          'Evita di lasciare bottiglie in PET al sole o in auto.',
          'Per una filtrazione aggiuntiva valuta sistemi a carbone attivo o ultrafiltrazione/osmosi (rimuovono particolato fine).',
          'Controlla i parametri classici dell’acqua di casa con un’analisi periodica.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Allora bere acqua in bottiglia è pericoloso?',
        a: 'Sulla base dell’evidenza attuale (incluso il rapporto WHO 2019) il rischio sanitario diretto delle microplastiche nelle acque è considerato basso. È però sensato ridurre l’esposizione complessiva e l’impatto ambientale, preferendo l’acqua di rete.',
      },
      {
        q: 'L’acqua del rubinetto non ha proprio microplastiche?',
        a: 'No, ne contiene tipicamente in quantità minore rispetto alla bottiglia, ma non zero. Gli studi mostrano valori variabili a seconda dell’acquedotto, della rete e dell’età delle tubazioni.',
      },
      {
        q: 'I filtri domestici eliminano le microplastiche?',
        a: 'I sistemi a osmosi inversa e l’ultrafiltrazione spinta rimuovono efficacemente particelle nell’ordine micrometrico e sub‑micrometrico. I filtri a carbone attivo standard ne trattengono solo una parte. Per le nanoparticelle la ricerca è ancora in corso.',
      },
      {
        q: 'Posso misurare le microplastiche nell’acqua di casa?',
        a: 'Esistono protocolli di analisi in laboratori specializzati, ma non sono ancora standardizzati né a basso costo come le analisi chimico‑fisiche tradizionali. Per il consumatore le scelte più utili restano ridurre la plastica e tenere sotto controllo i parametri sanitari classici.',
      },
    ],
    scientificReferences: [
      'Mason SA, Welch VG, Neratko J, Synthetic polymer contamination in bottled water, Frontiers in Chemistry 2018;6:407.',
      'Schwabl P et al., Detection of various microplastics in human stool, Annals of Internal Medicine 2019;171:453–457.',
      'Kosuth M, Mason SA, Wattenberg EV, Anthropogenic contamination of tap water, beer, and sea salt, PLoS ONE 2018;13(4):e0194970.',
      'WHO, Microplastics in drinking-water (2019).',
    ],
    ctaVariant: 'completa',
    ctaContext:
      'Vuoi avere un quadro oggettivo dei parametri chimici e dei contaminanti tipici dell’acqua del rubinetto di casa? Un’analisi completa di laboratorio qualifica metalli, nitrati, durezza e parametri sanitari prioritari.',
    relatedSlugs: ['acqua-rubinetto-italia-tra-le-peggiori-europa', 'caraffa-filtrante-elimina-tutto'],
  },

  {
    slug: 'fluoro-acqua-fa-male-tiroide',
    myth: 'Il fluoro nell’acqua del rubinetto danneggia la tiroide',
    shortTitle: 'Il fluoro nell’acqua danneggia la tiroide? Verità e contesto',
    metaDescription:
      'Il fluoro nell’acqua del rubinetto danneggia la tiroide? Dipende dai valori. In Italia non viene aggiunto e i livelli naturali sono in genere sotto soglia.',
    searchKeywords: [
      'fluoro acqua tiroide',
      'fluoruri acqua salute',
      'fluoro acqua rubinetto italia',
      'fluoro acqua quanto',
      'tiroide acqua del rubinetto',
      'fluoruri tiroide',
    ],
    verdict: 'dipende',
    verdictSummary:
      'Dipende. In Italia il fluoro non viene aggiunto artificialmente all’acqua potabile. Le concentrazioni naturali sono di solito basse, ma in alcune zone (es. aree vulcaniche del Lazio) possono avvicinarsi o superare il limite di 1,5 mg/L del D.Lgs. 18/2023.',
    intro:
      'Il fluoro nell’acqua è un tema delicato perché spesso si confonde la situazione italiana con quella statunitense o britannica, dove l’aggiunta di fluoro all’acqua potabile è una pratica diffusa di salute pubblica. In Italia non è così: il fluoro presente è di origine naturale, dovuto al passaggio dell’acqua attraverso rocce contenenti fluoruri. Nella maggior parte del territorio i livelli sono molto bassi; in alcune zone vulcaniche, soprattutto nel Lazio, i valori naturali possono però essere significativi e richiedere attenzione.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Il mito del “fluoro nell’acqua che fa male alla tiroide” è importato dal dibattito anglosassone, dove la fluorizzazione artificiale dell’acqua è oggetto di discussione da decenni. Negli ultimi anni è stato amplificato sui social italiani senza chiarire la differenza chiave: la fluorizzazione artificiale qui non esiste come politica nazionale.',
          'A questa importazione di narrativa si è sommata una preoccupazione legittima ma localizzata: in alcune zone italiane di origine vulcanica le falde possono contenere fluoruri di origine geologica in concentrazioni elevate. Sono casi specifici, non la regola, ma vanno gestiti con dati.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'EFSA ha pubblicato un parere scientifico sui valori di riferimento dietetici per il fluoro (EFSA Journal 2013) e un’opinione sulla sicurezza, indicando un livello di assunzione adeguato dell’ordine di 0,05 mg/kg di peso corporeo al giorno e un Tolerable Upper Intake Level di 0,1 mg/kg/die nei bambini e 7 mg/die negli adulti, per prevenire fluorosi dentaria e scheletrica.',
          'WHO indica nelle sue Linee Guida un valore guida di 1,5 mg/L nell’acqua potabile e la stessa soglia è stata recepita dal D.Lgs. 18/2023 come valore di parametro in Italia. La letteratura sulla relazione tra fluoro ed esiti tiroidei mostra segnali in studi epidemiologici condotti in zone con concentrazioni naturali molto elevate (es. India, Cina), mentre i risultati sono più incerti e contestati a concentrazioni vicine ai limiti europei. L’Istituto Superiore di Sanità e il National Toxicology Program statunitense hanno valutato il tema con conclusioni prudenti: a dosi entro i limiti normativi europei l’evidenza di danno tiroideo significativo è limitata, ma il tema è oggetto di ricerca continua.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'Per la maggior parte degli italiani il fluoro dell’acqua del rubinetto non rappresenta un rischio sanitario reale, perché le concentrazioni sono molto inferiori al limite di 1,5 mg/L e non viene aggiunto artificialmente. La preoccupazione è invece pertinente in aree geologicamente “calde” (zone vulcaniche del Lazio, alcune aree del Sud Italia) dove la concentrazione naturale può superare 1 mg/L e dove un controllo analitico vale la pena.',
          'Chi ha già una patologia tiroidea diagnosticata e vuole minimizzare ogni esposizione può valutare un’analisi mirata, ma il primo passo razionale è conoscere il valore reale dell’acqua del proprio comune.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'Il modo per uscire dal “dipende” è misurare. I report annuali del gestore idrico riportano i valori medi di fluoro; per un dato più puntuale, soprattutto in zone vulcaniche o di pozzo privato, un’analisi di laboratorio sui parametri chimico‑fisici, inclusi i fluoruri, fornisce il valore reale al punto di consumo.',
        ],
        bullets: [
          'Controlla il valore di fluoruri nel report del tuo acquedotto.',
          'In zone vulcaniche o con pozzo privato, fai analizzare specificamente i fluoruri.',
          'Se hai una patologia tiroidea, parlane con l’endocrinologo e considera un’analisi mirata.',
          'Ricorda che il fluoro nei dentifrici è a uso topico, non sistemico, e segue logiche diverse.',
        ],
      },
      {
        heading: 'Quando preoccuparsi davvero',
        paragraphs: [
          'I casi reali di preoccupazione riguardano valori naturali persistenti sopra 1,5 mg/L, situazione documentata in alcune zone laziali e individuabile sui report ARPA o del gestore. In quei casi può essere opportuno adottare un sistema di trattamento domestico capace di abbattere i fluoruri (osmosi inversa, allumina attivata) o, in alternativa, integrare per le esigenze quotidiane con un’acqua a basso contenuto. Anche in queste situazioni la prima azione utile rimane misurare e parlarne con il medico.',
        ],
      },
    ],
    faqs: [
      {
        q: 'In Italia mettono il fluoro nell’acqua del rubinetto?',
        a: 'No. La fluorizzazione artificiale dell’acqua potabile non è una pratica adottata in Italia. Il fluoro eventualmente presente è di origine naturale, legato alla geologia del territorio.',
      },
      {
        q: 'Qual è il limite di legge per il fluoro nell’acqua potabile?',
        a: 'In Italia il D.Lgs. 18/2023, recependo la Direttiva UE 2020/2184, fissa un valore di parametro di 1,5 mg/L per i fluoruri, allineato alle linee guida WHO.',
      },
      {
        q: 'Il fluoro nell’acqua influisce sulla tiroide?',
        a: 'A concentrazioni molto elevate (ben oltre i limiti europei) la letteratura segnala effetti sulla tiroide. Entro i limiti italiani, l’evidenza di un effetto significativo è limitata e dibattuta. La ricerca prosegue.',
      },
      {
        q: 'Come faccio a sapere quanto fluoro c’è nella mia acqua?',
        a: 'Puoi consultare il report del gestore idrico del tuo comune oppure richiedere un’analisi di laboratorio dei fluoruri, particolarmente consigliata in zone vulcaniche o se hai un pozzo privato.',
      },
    ],
    scientificReferences: [
      'WHO, Guidelines for Drinking-water Quality, 4th edition (2022) — fluoride chapter.',
      'EFSA Panel on Dietetic Products, Nutrition and Allergies, Scientific Opinion on Dietary Reference Values for fluoride, EFSA Journal 2013;11(8):3332.',
      'D.Lgs. 23 febbraio 2023, n. 18 — valore di parametro fluoruri 1,5 mg/L.',
      'National Toxicology Program (NTP), Monograph on the State of the Science Concerning Fluoride Exposure and Neurodevelopmental and Cognitive Health Effects (2024).',
    ],
    ctaVariant: 'kit-analisi',
    ctaContext:
      'Vivi in una zona vulcanica o con pozzo privato e vuoi misurare i fluoruri al rubinetto? Un kit di analisi dell’acqua con rapporto di prova di laboratorio qualificato fornisce il valore reale, insieme agli altri parametri chimico‑fisici.',
    relatedSlugs: ['acqua-rubinetto-piombo-tutti-i-vecchi-palazzi', 'acqua-rubinetto-italia-tra-le-peggiori-europa'],
  },

  {
    slug: 'acqua-rubinetto-piombo-tutti-i-vecchi-palazzi',
    myth: 'Tutti i vecchi palazzi italiani hanno tubazioni in piombo',
    shortTitle: 'Vecchi palazzi e piombo nell’acqua: quanto è reale il rischio?',
    metaDescription:
      'Tutti i vecchi palazzi italiani hanno tubature in piombo? Parzialmente vero: può esserci negli edifici pre‑1960, soprattutto nei collegamenti interni. Si verifica analizzando.',
    searchKeywords: [
      'piombo tubature italia',
      'vecchio palazzo piombo',
      'piombo acqua rubinetto',
      'tubature piombo casa',
      'analisi piombo acqua',
      'piombo acqua bambini',
    ],
    verdict: 'parzialmente-vero',
    verdictSummary:
      'Parzialmente vero. Le tubazioni pubbliche moderne non usano piombo, ma in edifici pre‑1960 possono ancora esistere tratti di collegamento privato (allacci, alimentazione ai contatori, montanti interni) in piombo. Si individua solo con un’analisi al punto di uscita del rubinetto.',
    intro:
      'Tra le frasi più ripetute c’è: “di sicuro nei palazzi vecchi ci sono ancora tubi di piombo, quindi non si può bere l’acqua del rubinetto”. La realtà è più sfumata. Le tubazioni pubbliche moderne degli acquedotti italiani non sono in piombo, e la normativa europea ha imposto da tempo limiti molto severi al piombo nell’acqua potabile. Il punto debole reale, quando c’è, è a valle del contatore: gli impianti privati degli edifici più vecchi, in particolare quelli costruiti prima degli anni ’60, possono contenere tratti residui di piombo.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Il piombo è stato usato per secoli per le tubature dell’acqua per la sua duttilità e durata. In Italia il suo impiego nelle nuove costruzioni è stato progressivamente abbandonato a partire dal dopoguerra, ed è oggi vietato per le tubazioni pubbliche. Tuttavia la memoria storica del piombo è rimasta forte, complice anche il caso‑studio internazionale di Flint, Michigan, che ha riportato il tema sotto i riflettori.',
          'Da qui nasce la generalizzazione: “tutti i palazzi vecchi hanno piombo”. Una semplificazione utile per scopi divulgativi ma imprecisa: la realtà varia molto in base all’epoca di costruzione, alla zona, al tipo di impianto interno, agli interventi di ristrutturazione già eseguiti.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'WHO classifica il piombo come metallo pesante con effetti neurotossici cumulativi, particolarmente pericoloso per i bambini in età evolutiva e per le donne in gravidanza. Non esiste un “livello sicuro”: la WHO raccomanda di mantenere l’esposizione il più bassa possibile. Sul fronte normativo, la Direttiva UE 2020/2184, recepita in Italia dal D.Lgs. 18/2023, ha abbassato il valore di parametro per il piombo nell’acqua potabile a 5 µg/L (da raggiungere gradualmente entro il 2036), uno dei più stringenti al mondo.',
          'L’Istituto Superiore di Sanità e l’ARPA hanno più volte ricordato che la principale fonte di piombo nell’acqua al rubinetto italiana, quando presente, è l’impianto privato a valle del contatore: vecchi tubi, raccordi, saldature al piombo. Per questo i controlli più utili si fanno al punto di uscita reale dell’acqua (rubinetto di cucina), non solo alla fonte.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'L’affermazione “tutti i vecchi palazzi hanno piombo” è troppo generica. Più corretto dire che in edifici costruiti prima degli anni ’60 (e in qualche caso fino agli anni ’70), specie se mai ristrutturati a fondo, esiste una probabilità non trascurabile che alcuni tratti di tubazione privata siano in piombo. Negli edifici recenti il rischio è sostanzialmente assente.',
          'L’unico modo per uscire dalla congettura è misurare. Un’analisi del piombo al rubinetto, fatta secondo un protocollo coerente (prelievo dopo stagnazione e dopo flusso), dice se c’è un problema reale e quanto è grave. È una valutazione importante soprattutto se in casa ci sono bambini piccoli, donne in gravidanza o anziani.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'Se vivi in un edificio costruito prima del 1970 e non sei sicuro dello stato dell’impianto, il modo razionale di affrontare la questione è in due passi: prima un’analisi mirata sui metalli pesanti (in particolare piombo, ma anche rame e nichel, che spesso vanno insieme), poi, in base ai valori, decidere se intervenire.',
        ],
        bullets: [
          'Edifici pre‑1960 o pre‑1970 mai ristrutturati: priorità alta per analisi metalli pesanti al rubinetto.',
          'Lascia scorrere l’acqua per qualche minuto dopo una stagnazione notturna prima di berla.',
          'Se in casa ci sono bambini o donne in gravidanza, considera un’analisi del piombo dedicata.',
          'In caso di valori non conformi, sostituisci i tratti incriminati o installa un trattamento idoneo.',
        ],
      },
      {
        heading: 'Quando preoccuparsi davvero',
        paragraphs: [
          'I segnali oggettivi da non sottovalutare sono: aspetto plumbeo o grigio delle tubature in vista, residui scuri nei filtri dei rubinetti, sapore metallico, dati storici di non conformità segnalati dal gestore o dall’amministratore di condominio. In quei casi la priorità è un’analisi specifica sui metalli pesanti, possibilmente con prelievo standardizzato che includa anche il “primo getto” dopo stagnazione, perché è nel primo getto che si concentra il piombo rilasciato durante la notte.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Come capisco se ho tubature in piombo?',
        a: 'Visivamente le tubature in piombo appaiono morbide, opache, di colore grigio scuro e si rigano facilmente. La conferma però si ha solo con un’analisi del piombo all’uscita del rubinetto.',
      },
      {
        q: 'L’acqua del rubinetto può essere pericolosa per i bambini per il piombo?',
        a: 'Se c’è piombo nell’impianto privato, sì: i bambini sono più sensibili al piombo perché è neurotossico in età evolutiva. Per questo è prudente fare un’analisi se l’edificio è vecchio.',
      },
      {
        q: 'Far scorrere l’acqua per qualche minuto al mattino aiuta?',
        a: 'Sì, riduce la quota di piombo accumulata durante la stagnazione notturna nei tratti potenzialmente a rischio. È un’accortezza utile ma non sostituisce un’analisi e gli eventuali interventi sull’impianto.',
      },
      {
        q: 'Qual è il limite di legge per il piombo in Italia?',
        a: 'Il D.Lgs. 18/2023 fissa il valore di parametro a 5 µg/L, da raggiungere gradualmente entro il 2036. È uno dei limiti più stringenti al mondo.',
      },
    ],
    scientificReferences: [
      'WHO, Lead in drinking-water — background document for development of WHO Guidelines for Drinking-water Quality (2022).',
      'Direttiva UE 2020/2184 sulla qualità delle acque destinate al consumo umano.',
      'D.Lgs. 23 febbraio 2023, n. 18 — valore di parametro piombo 5 µg/L (con periodo transitorio).',
      'Istituto Superiore di Sanità — documenti tecnici sul piombo nell’acqua potabile.',
    ],
    ctaVariant: 'metalli-pesanti',
    ctaContext:
      'Abiti in un edificio storico o in un palazzo costruito prima degli anni ’70? Un’analisi metalli pesanti su acqua del rubinetto — piombo, rame, nichel, ferro — chiarisce in poche righe se l’impianto privato rilascia contaminanti.',
    relatedSlugs: ['bollire-acqua-elimina-tutto', 'acqua-rubinetto-causa-cancro'],
  },

  {
    slug: 'acqua-zero-residuo-fisso-piu-pura',
    myth: 'L’acqua a basso residuo fisso è la più pura e migliore per la salute',
    shortTitle: 'Acqua a basso residuo fisso: è davvero la migliore?',
    metaDescription:
      'L’acqua a basso residuo fisso è davvero la più pura e salutare? Falso: residuo basso non significa migliore. WHO mette in guardia da acque demineralizzate.',
    searchKeywords: [
      'acqua residuo fisso basso',
      'acqua pura migliore',
      'oligominerale meglio',
      'acqua a basso residuo',
      'acqua demineralizzata salute',
      'qual è la migliore acqua da bere',
    ],
    verdict: 'falso',
    verdictSummary:
      'Falso. “Residuo fisso basso” non equivale a “più sana”. Il residuo include calcio, magnesio e altri minerali utili. La WHO ha esplicitamente messo in guardia contro l’uso esclusivo di acque demineralizzate per il consumo umano prolungato.',
    intro:
      'Il “residuo fisso” è forse il parametro più letto e meno compreso delle etichette delle acque in bottiglia: indica la massa di sali disciolti che resta dopo aver evaporato un litro d’acqua a 180°C. Un’intera narrazione di marketing ha trasformato il “residuo basso” in sinonimo di “purezza” e “salute”. La scienza dice qualcosa di diverso: tra quei sali ci sono calcio e magnesio, minerali importanti per ossa, muscoli e funzioni metaboliche. Acqua con residuo molto basso non è di per sé “più sana”, e in alcuni casi l’OMS la sconsiglia come fonte unica.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Il mito si è costruito nei decenni di pubblicità delle acque minerali oligominerali, in cui “leggera”, “pura”, “residuo basso” sono diventati slogan dominanti, spesso associati a immagini di sport e benessere. Il pubblico ha finito per identificare il residuo fisso basso con un certificato di qualità, mentre tecnicamente è solo un parametro fisico‑chimico tra molti.',
          'A questo si è sommata la confusione con la diuresi e con la prevenzione dei calcoli: “l’acqua leggera fa fare pipù, quindi pulisce i reni” è un’affermazione semplificata. La quantità di acqua introdotta conta molto più della sua composizione per la prevenzione della nefrolitiasi.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'WHO ha pubblicato un rapporto dedicato (“Health risks from drinking demineralised water”, 2005, aggiornato successivamente) in cui chiarisce che l’uso continuativo di acque a contenuto minerale molto basso, o demineralizzate per osmosi inversa senza remineralizzazione, non è raccomandato come unica fonte di idratazione. I motivi includono ridotto apporto di calcio e magnesio (associati a effetti protettivi cardiovascolari e ossei), maggior tendenza a “sciogliere” altri sali e potenziale impatto sull’equilibrio elettrolitico.',
          'EFSA, nei suoi Scientific Opinion sui valori dietetici di riferimento, indica fabbisogni precisi per calcio e magnesio, e riconosce all’acqua un contributo significativo a questi apporti, soprattutto quando ha una mineralizzazione medio‑elevata. La normativa italiana sulle acque minerali (D.Lgs. 176/2011) classifica le acque per residuo fisso a fini commerciali, non a fini di salute: “oligominerale” e “minerale” sono categorie merceologiche, non gerarchie di qualità sanitaria.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'Per una persona sana, in assenza di particolari prescrizioni mediche, non c’è nessuna evidenza che acque a basso residuo siano “migliori” di acque a mineralizzazione medio‑alta, anzi queste ultime contribuiscono al fabbisogno di calcio e magnesio. Le acque a basso residuo possono essere indicate in situazioni specifiche (alcuni casi di calcoli da calcio, dieta povera di sodio nel caso di acque a basso sodio) ma su prescrizione e con criterio.',
          'L’acqua del rubinetto in molte aree italiane ha una mineralizzazione medio‑alta che dal punto di vista sanitario è un valore aggiunto, non un difetto. Il problema reale, semmai, non è il residuo ma la presenza eventuale di contaminanti specifici, che si individuano con analisi mirate.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'La domanda utile da farsi non è “qual è il residuo fisso?” ma “qual è il profilo complessivo della mia acqua e quali contaminanti potrebbero esserci?”. Un’analisi chimico‑fisica di base risponde alla prima parte (calcio, magnesio, sodio, residuo, conducibilità); un’analisi sui parametri sanitari prioritari (metalli, nitrati, microbiologia) risponde alla seconda.',
        ],
        bullets: [
          'Non scegliere l’acqua solo in base al residuo fisso più basso.',
          'Valuta il contributo di calcio e magnesio dell’acqua nella tua dieta complessiva.',
          'Su prescrizione medica (es. alcuni calcoli) chiedi indicazioni specifiche.',
          'Per l’acqua di casa, fai un’analisi che includa anche i parametri sanitari, non solo i “minerali”.',
        ],
      },
      {
        heading: 'Quando preoccuparsi davvero',
        paragraphs: [
          'Le situazioni in cui il profilo minerale dell’acqua diventa rilevante sono quelle cliniche: dieta iposodica prescritta, alcune forme di calcolosi renale, alimentazione del lattante, insufficienza renale. In tutti questi casi la scelta va fatta con il medico, in modo personalizzato, basandosi sui valori reali dell’acqua disponibile e non sull’aggettivo “leggera” della pubblicità.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Qual è il residuo fisso ideale per un adulto sano?',
        a: 'Non c’è un valore “ideale” unico. Le indicazioni dietetiche generali considerano accettabile un intervallo molto ampio. Conta più il contesto: bere abbastanza, in modo regolare, con un’acqua sicura e con buoni apporti di calcio e magnesio.',
      },
      {
        q: 'L’acqua a basso residuo aiuta a dimagrire o a depurare?',
        a: 'No, l’acqua non ha potere dimagrante né “depurativo” magico. Il rene fa il suo lavoro con qualunque acqua sicura, a patto di assumerne quantità adeguate (2–2,5 L al giorno per gli adulti, secondo EFSA).',
      },
      {
        q: 'L’acqua osmotizzata domestica fa male?',
        a: 'Non fa male di per sé, ma se diventa l’unica fonte di idratazione per anni andrebbe valutato l’impatto sul bilancio di calcio e magnesio. Alcuni sistemi a osmosi prevedono fasi di remineralizzazione proprio per questo motivo.',
      },
      {
        q: 'Devo cambiare l’acqua del rubinetto perché ha residuo “alto”?',
        a: 'Non necessariamente. Un residuo medio‑alto non è un problema sanitario in sé. Più importante è verificare se l’acqua rispetta i parametri sanitari del D.Lgs. 18/2023 e, in caso di sospetti, fare analisi mirate.',
      },
    ],
    scientificReferences: [
      'WHO, Health risks from drinking demineralised water (2005, in Nutrients in drinking-water).',
      'EFSA Panel on Dietetic Products, Nutrition and Allergies, Scientific Opinion on Dietary Reference Values for water, EFSA Journal 2010;8(3):1459.',
      'EFSA, Scientific Opinion on Dietary Reference Values for calcium and magnesium, EFSA Journal 2015.',
      'D.Lgs. 8 ottobre 2011, n. 176 — classificazione commerciale acque minerali.',
    ],
    ctaVariant: 'kit-analisi',
    ctaContext:
      'Vuoi conoscere il profilo minerale e sanitario completo dell’acqua di casa, non solo il residuo fisso? Un kit di analisi misura calcio, magnesio, sodio, residuo, conducibilità e parametri sanitari prioritari, con rapporto di prova di laboratorio qualificato.',
    relatedSlugs: ['calcare-causa-calcoli-renali', 'caraffa-filtrante-elimina-tutto'],
  },

  {
    slug: 'caraffa-filtrante-elimina-tutto',
    myth: 'Una caraffa filtrante elimina tutto, posso bere tranquillamente',
    shortTitle: 'Una caraffa filtrante elimina davvero tutto? Cosa non rimuove',
    metaDescription:
      'Le caraffe filtranti eliminano tutto dall’acqua del rubinetto? Falso: riducono cloro e parte dei metalli, ma non PFAS, nitrati, microbiologia. Cosa sapere.',
    searchKeywords: [
      'caraffa filtrante elimina contaminanti',
      'caraffa brita rimuove',
      'caraffa filtrante cosa filtra',
      'caraffa filtrante pfas',
      'caraffa filtrante nitrati',
      'caraffa filtrante batteri',
    ],
    verdict: 'falso',
    verdictSummary:
      'Falso. Le caraffe filtranti (a carbone attivo e resine a scambio ionico) riducono cloro, sapore e parte dei metalli, ma non eliminano in modo affidabile PFAS, nitrati, microbiologia e molti contaminanti chimici. Se la cartuccia non viene cambiata, possono favorire crescita batterica.',
    intro:
      'Le caraffe filtranti sono uno degli accessori più venduti in Italia per chi vuole “migliorare” l’acqua del rubinetto. Funzionano e hanno un loro utilizzo legittimo, ma l’idea che “filtrano tutto” è sbagliata. La tecnologia tipica — carbone attivo + resine a scambio ionico — è progettata per ridurre cloro, sapori, odori e in parte alcuni metalli e durezza. Non è progettata per rimuovere contaminanti chimici complessi come PFAS o nitrati, e non disinfetta l’acqua: anzi, se la cartuccia non è sostituita regolarmente, può diventare un substrato di proliferazione batterica.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Il claim “filtra il 99% dei contaminanti” è stato a lungo usato dai brand di caraffe filtranti in modo ambiguo, lasciando intendere una capacità universale di purificazione. In realtà le percentuali pubblicizzate si riferiscono a specifici parametri testati (tipicamente cloro, alcuni metalli, calcare) in condizioni di laboratorio, non a “tutti i contaminanti possibili”. La sintesi mediatica ha trasformato questo dato tecnico in una promessa generale.',
          'A questo si aggiunge l’immagine positiva legata al “gesto”: filtrare l’acqua è percepito come una scelta di salute consapevole, e il bias di conferma fa il resto. Molti utenti non sostituiscono la cartuccia alla frequenza consigliata, pensando comunque di stare facendo qualcosa di utile.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'Le caraffe filtranti certificate secondo standard come NSF/ANSI 42 (effetti estetici: cloro, sapore, odore) e NSF/ANSI 53 (effetti sulla salute: piombo, alcuni VOC, mercurio) sono testate solo per i parametri specifici dichiarati. La capacità di rimozione di PFAS, nitrati e altri inquinanti emergenti è generalmente limitata o nulla per le caraffe domestiche standard.',
          'L’Istituto Superiore di Sanità ha pubblicato pareri tecnici sui dispositivi di trattamento delle acque destinate al consumo umano in ambito domestico, ricordando che l’efficacia dipende dal contaminante, dal dispositivo, dal flusso e dalla manutenzione. Uno studio noto sui dispositivi POU (point of use) ha mostrato che cartucce non sostituite oltre la durata prevista possono diventare colonizzate da biofilm batterico, aumentando la carica microbica all’uscita rispetto all’acqua di rete in ingresso. È un fenomeno descritto in letteratura su più marche e tecnologie.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'Una caraffa filtrante è utile per ridurre il sapore di cloro, smorzare leggermente la durezza percepita, abbattere una quota di alcuni metalli. Non è una soluzione a problemi seri come piombo elevato, nitrati alti, PFAS, contaminazione microbiologica. E richiede manutenzione disciplinata: sostituzione della cartuccia secondo l’intervallo dichiarato dal produttore, pulizia regolare del corpo caraffa, conservazione in frigorifero dopo il riempimento.',
          'In altre parole: la caraffa va vista come un piccolo “migliorativo organolettico”, non come un purificatore universale. Se il problema dell’acqua è reale e specifico, va prima identificato con analisi e poi affrontato con il trattamento corretto, che può essere completamente diverso (osmosi inversa, carbone a blocco, resine selettive, ecc.).',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'Il modo razionale per usare una caraffa filtrante è: 1) sapere se serve davvero (analisi dell’acqua); 2) scegliere un modello certificato per i parametri rilevanti per la propria situazione; 3) sostituire la cartuccia con disciplina; 4) non considerarla una protezione contro contaminanti per cui non è progettata.',
        ],
        bullets: [
          'Fai prima un’analisi dell’acqua di casa per capire qual è il problema reale.',
          'Scegli caraffe certificate NSF/ANSI per i parametri che ti interessano.',
          'Sostituisci la cartuccia rispettando la durata indicata, non “ad occhio”.',
          'Per PFAS, nitrati o contaminazioni serie servono tecnologie diverse (osmosi inversa, carboni a blocco specifici).',
        ],
      },
      {
        heading: 'Quando preoccuparsi davvero',
        paragraphs: [
          'I segnali che indicano un problema oltre la portata di una caraffa: residenza in aree note per PFAS, edificio vecchio con sospetto piombo, acqua di pozzo privato, zone agricole con nitrati alti, ordinanze microbiologiche del Comune. In tutti questi casi affidarsi a una caraffa filtrante è falso senso di sicurezza. La risposta corretta passa da un’analisi mirata e dalla scelta di un trattamento adeguato al contaminante specifico.',
        ],
      },
    ],
    faqs: [
      {
        q: 'La caraffa filtrante rimuove i PFAS?',
        a: 'Generalmente no, o in misura limitata. I PFAS sono molecole molto stabili e per la loro rimozione affidabile servono tecnologie come osmosi inversa, carboni attivi a grano fine specifici o resine selettive, dimensionate per il volume e il tempo di contatto giusto.',
      },
      {
        q: 'La caraffa filtrante elimina il calcare?',
        a: 'Riduce in parte la durezza grazie alle resine a scambio ionico, ma non la elimina. Inoltre lo “scambio” cede sodio in cambio del calcio rimosso, da considerare per chi segue diete iposodiche.',
      },
      {
        q: 'Se non cambio la cartuccia che succede?',
        a: 'La cartuccia esaurita perde efficacia su cloro e metalli e può diventare un substrato per la crescita batterica. In casi documentati la conta microbica in uscita può superare quella in ingresso. Va sostituita secondo la frequenza indicata dal produttore.',
      },
      {
        q: 'La caraffa rende potabile un’acqua non potabile?',
        a: 'No. Le caraffe filtranti partono dal presupposto che l’acqua in ingresso sia già potabile ai sensi del D.Lgs. 18/2023. Non sono dispositivi di disinfezione e non vanno usate per rendere bevibili acque non sicure.',
      },
    ],
    scientificReferences: [
      'NSF/ANSI 42 — Drinking Water Treatment Units — Aesthetic Effects.',
      'NSF/ANSI 53 — Drinking Water Treatment Units — Health Effects.',
      'Istituto Superiore di Sanità — pareri tecnici sui dispositivi di trattamento dell’acqua destinata al consumo umano in ambito domestico.',
      'D.Lgs. 23 febbraio 2023, n. 18 — acque destinate al consumo umano.',
    ],
    ctaVariant: 'completa',
    ctaContext:
      'Prima di scegliere una caraffa filtrante o un sistema più evoluto, sapere cosa c’è davvero nell’acqua del rubinetto fa la differenza. Un’analisi completa di laboratorio chiarisce quali parametri sono in regola e quali eventualmente vanno gestiti con un trattamento specifico.',
    relatedSlugs: ['acqua-zero-residuo-fisso-piu-pura', 'acqua-rubinetto-piombo-tutti-i-vecchi-palazzi'],
  },

  {
    slug: 'acqua-rubinetto-causa-cancro',
    myth: 'L’acqua del rubinetto può causare il cancro per via dei trialometani',
    shortTitle: 'L’acqua del rubinetto causa il cancro? Trialometani e rischio reale',
    metaDescription:
      'L’acqua del rubinetto causa il cancro per i trialometani? Vero a fraintendimento: i limiti italiani sono molto sotto la soglia di rischio. Cosa dicono IARC e WHO.',
    searchKeywords: [
      'acqua rubinetto cancro',
      'trialometani cancro',
      'cloro cancro',
      'sottoprodotti disinfezione',
      'cloroformio acqua rubinetto',
      'rischio cancerogeno acqua',
    ],
    verdict: 'vero-ma-fraintendimento',
    verdictSummary:
      'Vero ma fraintendimento. I trialometani (sottoprodotti della clorazione) sono classificati IARC come possibili cancerogeni (gruppo 2B) per esposizione prolungata ad alte concentrazioni. I limiti italiani (D.Lgs. 18/2023) sono fissati molto al di sotto delle soglie di rischio identificate negli studi.',
    intro:
      'Il sospetto che “l’acqua del rubinetto causi il cancro” nasce da un dato reale ma spesso travisato: la disinfezione con cloro genera sottoprodotti, tra cui i trialometani (THM), e alcuni di questi sono classificati come possibili cancerogeni. La differenza tra “classificato come possibile cancerogeno” e “provoca il cancro alle dosi a cui sei esposto” è enorme. I limiti normativi europei e italiani sono stati fissati molto al di sotto delle concentrazioni a cui gli studi hanno osservato segnali di rischio, con un ampio margine di sicurezza.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Negli anni ’70 alcuni studi epidemiologici negli Stati Uniti iniziarono a osservare una possibile associazione tra esposizione prolungata a sottoprodotti di disinfezione dell’acqua e alcune neoplasie (in particolare vescica). Da allora il tema è stato studiato in modo intenso, l’Agenzia Internazionale per la Ricerca sul Cancro (IARC) ha classificato vari trialometani in categoria 2B (“possibly carcinogenic to humans”) e sono stati introdotti limiti normativi sempre più stringenti.',
          'Nel passaggio dai dati scientifici alla narrativa pubblica, la classificazione 2B — che indica “prove limitate” e non certezza — viene spesso letta come “provoca il cancro”. È lo stesso fraintendimento che si fa con altri 2B noti, come per esempio il caffè nei suoi precedenti aggiornamenti. La conseguenza è una percezione di rischio sproporzionata rispetto all’esposizione reale.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'WHO, nelle sue Linee Guida per la qualità dell’acqua potabile, ricorda che la disinfezione è una conquista sanitaria fondamentale e che il rischio di non disinfettare è di gran lunga maggiore del rischio dei sottoprodotti. Allo stesso tempo fissa valori guida per i trialometani totali e singoli (cloroformio, bromoformio, BDCM, DBCM) tali da minimizzare l’esposizione cronica.',
          'La Direttiva UE 2020/2184, recepita dal D.Lgs. 18/2023, fissa per i trialometani totali un valore di parametro di 100 µg/L. La maggior parte degli acquedotti italiani opera con valori medi nettamente inferiori a questa soglia. IARC ha classificato il cloroformio come gruppo 2B; il D.Lgs. 18/2023 ha inoltre ridotto limiti su clorito, clorato e bromato, in linea con un approccio precauzionale. Studi recenti (es. lavori europei coordinati da ricercatori IS Global) hanno stimato la quota di tumori della vescica attribuibile ai THM nella popolazione europea — quota non zero, ma molto piccola, soprattutto al di sotto dei limiti normativi.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'L’acqua del rubinetto entro i limiti normativi italiani non rappresenta un rischio cancerogeno significativo. Le concentrazioni tipiche dei THM sono nell’ordine di poche decine di µg/L, mantenute sotto controllo grazie a una disinfezione gestita con attenzione e a rete in buono stato. Eliminare la disinfezione per evitare i THM sarebbe un errore sanitario clamoroso: il rischio microbiologico evitato dalla clorazione è di un ordine di grandezza superiore al rischio dei sottoprodotti.',
          'Detto questo, per chi vuole minimizzare l’esposizione — ad esempio per scelta precauzionale durante la gravidanza o per bambini piccoli — esistono soluzioni semplici: l’uso di un filtro a carbone attivo a punto d’uso riduce sensibilmente i THM, perché questi sono molecole volatili e affini al carbone. Anche lasciare l’acqua in caraffa aperta in frigorifero per qualche ora favorisce l’allontanamento di parte dei composti più volatili.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'Se il dubbio riguarda i sottoprodotti della disinfezione del proprio acquedotto, il modo per uscire dal dubbio è verificarne i valori reali. I report annuali del gestore idrico riportano i valori medi dei THM; per un dato puntuale, un’analisi di laboratorio sui parametri “disinfezione e suoi sottoprodotti” misura cloro residuo, trialometani e altri composti.',
        ],
        bullets: [
          'Controlla i valori di trialometani nel report del tuo gestore idrico.',
          'Se vuoi ridurli ulteriormente, usa un filtro a carbone attivo a punto d’uso.',
          'Non eliminare la disinfezione del rubinetto: il rischio microbiologico evitato è enormemente maggiore.',
          'In gravidanza o con bambini piccoli puoi adottare un approccio precauzionale (filtro, caraffa aperta in frigo).',
        ],
      },
      {
        heading: 'Quando preoccuparsi davvero',
        paragraphs: [
          'Le situazioni in cui i THM possono effettivamente raggiungere valori elevati riguardano acque ad alta concentrazione di sostanza organica naturale (zone con falde superficiali), acquedotti in cui la disinfezione è dosata in eccesso o tratti di rete con tempi di permanenza molto lunghi. In questi casi un’analisi mirata e un confronto con il gestore aiutano a chiarire la situazione. Ma anche in questi scenari, parlare di “cancro causato dall’acqua” è una semplificazione: il rischio si misura su esposizioni a vita, e i margini di sicurezza dei limiti normativi sono stati pensati proprio per coprirlo.',
        ],
      },
    ],
    faqs: [
      {
        q: 'I trialometani sono cancerogeni?',
        a: 'IARC li classifica nel gruppo 2B (“possibili” cancerogeni), che indica evidenza limitata negli umani. Il rischio dipende dall’entità e dalla durata dell’esposizione: ai livelli consentiti dalla normativa il rischio individuale stimato è molto basso.',
      },
      {
        q: 'Il cloro nell’acqua del rubinetto è dannoso?',
        a: 'Il cloro residuo ai dosaggi usati dagli acquedotti italiani è considerato sicuro dalla WHO e necessario per proteggere la rete dalla contaminazione microbiologica. Il sapore può risultare sgradevole, ma si può ridurre con un filtro a carbone attivo o lasciando l’acqua a riposo.',
      },
      {
        q: 'Devo bere acqua in bottiglia per evitare i trialometani?',
        a: 'No, non c’è un razionale sanitario forte per farlo. L’acqua del rubinetto entro i limiti italiani è sicura; in alternativa, se si vuole ridurre ulteriormente l’esposizione, un filtro a carbone attivo è una soluzione efficace.',
      },
      {
        q: 'I filtri a carbone attivo riducono davvero i trialometani?',
        a: 'Sì, i trialometani sono molecole volatili e affini ai carboni attivi: un filtro a punto d’uso con carbone in blocco riduce significativamente la loro concentrazione in uscita.',
      },
    ],
    scientificReferences: [
      'WHO, Guidelines for Drinking-water Quality, 4th edition (2022) — chapter on disinfection by-products.',
      'IARC Monographs Vol. 73, Chloroform and trihalomethanes (1999) e aggiornamenti successivi.',
      'D.Lgs. 23 febbraio 2023, n. 18 — valore di parametro trialometani totali 100 µg/L.',
      'Villanueva CM et al., Trihalomethanes in drinking water and bladder cancer burden in the European Union, Environmental Health Perspectives 2017;125:056001.',
    ],
    ctaVariant: 'completa',
    ctaContext:
      'Vuoi conoscere i valori reali di trialometani, cloro residuo e altri parametri di disinfezione nell’acqua del tuo rubinetto? Un’analisi di laboratorio sui sottoprodotti della disinfezione fornisce dati misurati con metodi validati conformi a norme tecniche.',
    relatedSlugs: ['acqua-rubinetto-piombo-tutti-i-vecchi-palazzi', 'bollire-acqua-elimina-tutto'],
  },

  {
    slug: 'acqua-rubinetto-italia-tra-le-peggiori-europa',
    myth: 'L’acqua del rubinetto in Italia è tra le peggiori d’Europa',
    shortTitle: 'L’acqua del rubinetto italiana è davvero tra le peggiori d’Europa?',
    metaDescription:
      'L’acqua del rubinetto in Italia è tra le peggiori d’Europa? Falso: la qualità è generalmente alta e conforme alle norme UE. Il paradosso è culturale, non tecnico.',
    searchKeywords: [
      'acqua italia peggio europa',
      'qualità acqua italia europa',
      'acqua rubinetto italia sicura',
      'classifica acqua europa',
      'acqua italiana sicura da bere',
      'qualità acquedotto italiano',
    ],
    verdict: 'falso',
    verdictSummary:
      'Falso. La qualità dell’acqua del rubinetto in Italia è ampiamente conforme ai limiti UE secondo i dati Eurostat, EurEau e Commissione Europea. L’Italia primeggia in Europa per consumo di acqua in bottiglia, ma per ragioni culturali, non per qualità dell’acqua di rete.',
    intro:
      'L’Italia è il Paese europeo con il più alto consumo pro capite di acqua in bottiglia, e questo dato genera spesso una conclusione affrettata: “se gli italiani comprano così tanta acqua in bottiglia, vuol dire che quella del rubinetto fa schifo”. È una sillogismo intuitivo ma sbagliato. I rapporti europei sulla qualità dell’acqua potabile mostrano un’Italia con un livello di conformità ai parametri sanitari del tutto comparabile alla media UE, con molte aree di eccellenza. Il consumo di bottiglia è un fenomeno culturale e commerciale, non un voto di sfiducia tecnico sulla rete.',
    sections: [
      {
        heading: 'Da dove nasce il mito',
        paragraphs: [
          'Il mito si appoggia su tre pilastri narrativi: l’immagine dei “tubi vecchi” delle grandi città storiche, il marketing pesante delle acque minerali, e la copertura mediatica selettiva degli episodi di non conformità (PFAS in Veneto, contaminazioni locali, ordinanze comunali). Questi singoli casi, pur reali e da affrontare, vengono spesso generalizzati come se fossero rappresentativi dell’intero Paese.',
          'A questo si aggiunge il paragone con i Paesi del Nord Europa, dove la cultura del rubinetto è dominante: la percezione è che “là si beva il rubinetto perché è più buona” e qui no perché è “peggio”. In realtà è una differenza prevalentemente sociologica e di abitudine, non di qualità sanitaria.',
        ],
      },
      {
        heading: 'Cosa dice la scienza',
        paragraphs: [
          'La Commissione Europea pubblica periodicamente rapporti sull’attuazione della Direttiva sulle acque destinate al consumo umano: le rilevazioni indicano per l’Italia tassi di conformità ai parametri microbiologici e chimici molto alti, comparabili o superiori alla media UE. EurEau, la federazione europea dei gestori idrici, nel suo Country Profiles 2023 fotografa un’Italia con infrastrutture eterogenee ma con qualità erogata in linea con gli standard europei.',
          'Eurostat riporta i dati di consumo di acqua in bottiglia per Paese: l’Italia è stabilmente ai primi posti al mondo. ISTAT “Il benessere e la sostenibilità” e il Rapporto Acque — raccolta dei dati ARPA — confermano però che la qualità dell’acqua di rete in Italia è generalmente alta: la quota di campioni non conformi sui parametri sanitari critici è contenuta. L’Istituto Superiore di Sanità fornisce dati di monitoraggio sui parametri prioritari e identifica zone specifiche da attenzionare (es. PFAS in alcune province venete, arsenico in alcune aree del Lazio), ma queste sono eccezioni geografiche, non la regola nazionale.',
        ],
      },
      {
        heading: 'Il verdetto, in pratica',
        paragraphs: [
          'L’acqua del rubinetto in Italia non è tra le peggiori d’Europa. È generalmente conforme ai limiti normativi e in molte zone presenta un profilo qualitativo eccellente. Il “paradosso italiano” — alta qualità di rete + altissimo consumo di bottiglia — è spiegato da fattori culturali, di abitudine, di marketing, di sfiducia diffusa (anche se infondata) verso il “pubblico”.',
          'Questo non significa che ogni rubinetto italiano sia identico al successivo: la qualità effettiva al consumo dipende dall’acquedotto, dalla rete di distribuzione locale, dallo stato dell’impianto interno dell’edificio. Per questo le analisi locali e mirate hanno senso: trasformano il discorso da “nazionale” a “mia casa”, dove la decisione di bere o filtrare diventa razionale.',
        ],
      },
      {
        heading: 'Cosa fare se sei preoccupato',
        paragraphs: [
          'Il modo razionale di uscire dal dibattito generale e calarlo nella propria realtà è in due passi: 1) leggere la scheda qualità dell’acqua del proprio gestore (pubblicata online e aggiornata almeno annualmente); 2) fare un’analisi sui parametri sanitari prioritari al rubinetto di casa, soprattutto se l’edificio è datato o si vive in una zona segnalata per criticità specifiche (PFAS, nitrati, arsenico, ecc.).',
        ],
        bullets: [
          'Consulta la scheda qualità dell’acqua del tuo gestore.',
          'Verifica eventuali criticità note nella tua zona (PFAS, arsenico, nitrati).',
          'Fai un’analisi al rubinetto se l’edificio è pre‑1970 o se hai un pozzo privato.',
          'Decidi su dati misurati, non su percezioni generali.',
        ],
      },
      {
        heading: 'Quando preoccuparsi davvero',
        paragraphs: [
          'Le situazioni in cui è sensato preoccuparsi sono quelle documentate: aree note per contaminazione PFAS (alcune province venete), zone con falde ad arsenico naturale (alcune aree del Lazio), aree agricole intensive con nitrati elevati, edifici molto vecchi con sospetto piombo. In questi casi la risposta corretta non è “l’Italia ha brutta acqua”, ma “nel mio specifico contesto serve un’analisi mirata e, se necessario, un trattamento adeguato”.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Ma allora perché in Italia si beve così tanta acqua in bottiglia?',
        a: 'Per ragioni storiche e culturali: tradizione delle acque minerali, marketing pluridecennale, sfiducia diffusa verso i servizi pubblici, abitudine. Non perché l’acqua di rete sia di scarsa qualità in sé.',
      },
      {
        q: 'Posso bere l’acqua del rubinetto a Roma, Milano, Napoli?',
        a: 'In linea generale sì: i gestori delle principali città erogano acqua conforme ai parametri di legge e pubblicano i report di qualità. Possono esserci differenze su singoli quartieri o impianti privati interni, che si valutano con analisi.',
      },
      {
        q: 'L’acqua del rubinetto è controllata?',
        a: 'Sì, in modo intensivo: il gestore esegue controlli interni e le ASL effettuano controlli ufficiali sui punti di rete e di consegna. I dati sono in larga parte pubblici.',
      },
      {
        q: 'Allora non serve mai un’analisi privata?',
        a: 'I controlli pubblici certificano l’acqua al contatore o ai punti di rete. L’acqua che esce dal tuo rubinetto può essere influenzata dall’impianto interno (età, materiali, manutenzione). Un’analisi privata risponde proprio alla domanda “che acqua bevo io qui?”.',
      },
    ],
    scientificReferences: [
      'Commissione Europea, Report on the quality of drinking water in the EU — most recent implementation reports.',
      'EurEau, Europe’s Water in Figures 2021 / Country Profiles 2023.',
      'Eurostat, Bottled water consumption per capita — dataset aggiornati.',
      'Istituto Superiore di Sanità, Rapporti tecnici sul monitoraggio dei parametri prioritari nelle acque potabili in Italia.',
    ],
    ctaVariant: 'completa',
    ctaContext:
      'Vuoi sapere com’è davvero l’acqua del rubinetto a casa tua, oltre i luoghi comuni nazionali? Un’analisi completa di laboratorio sui parametri sanitari prioritari fornisce un quadro misurato e azionabile, con rapporto di prova di laboratorio qualificato.',
    relatedSlugs: ['acqua-microplastiche-bottiglia-meglio', 'acqua-rubinetto-causa-cancro'],
  },
];

const MYTH_PAGES_BY_SLUG: Map<string, MythPage> = new Map(
  MYTH_PAGES.map((page) => [page.slug, page] as const),
);

export function getMythBySlug(slug: string): MythPage | undefined {
  return MYTH_PAGES_BY_SLUG.get(slug);
}
