export interface TreatmentGuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TreatmentGuideFAQ {
  q: string;
  a: string;
}

export interface TreatmentGuide {
  slug: string;
  itName: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  parametersTreated: string[];
  parametersNotTreated: string[];
  costRange: string;
  maintenance: string;
  sections: TreatmentGuideSection[];
  faqs: TreatmentGuideFAQ[];
  relatedTreatments: string[];
  ctaContext: string;
}

export const TREATMENT_GUIDES: TreatmentGuide[] = [
  {
    slug: "osmosi-inversa",
    itName: "Osmosi inversa",
    shortTitle: "Osmosi inversa: cos'è, come funziona e quando installarla",
    metaDescription:
      "Guida onesta all'osmosi inversa domestica: principio fisico, contaminanti rimossi e non rimossi, costi reali e come verificare l'efficacia con analisi di laboratorio.",
    searchKeywords: [
      "osmosi inversa cosa è",
      "osmosi inversa come funziona",
      "depuratore osmosi inversa casa",
      "osmosi inversa sottolavello",
      "osmosi inversa contro nitrati",
      "osmosi inversa rimuove arsenico",
      "osmosi inversa svantaggi",
    ],
    intro:
      "L'osmosi inversa è oggi il trattamento domestico con la più alta capacità di rimozione di contaminanti disciolti: spinge l'acqua attraverso una membrana semipermeabile che lascia passare quasi solo le molecole d'acqua, trattenendo sali, metalli pesanti, nitrati, fluoruri e molte sostanze organiche con efficienze tipiche tra il 90 e il 99 per cento. È anche il sistema più costoso, più ingombrante e quello che spreca più acqua di scarto. In questa guida vediamo quando ha realmente senso installarlo, quando invece è eccessivo, e soprattutto come verificare che dopo l'installazione l'acqua sia davvero conforme.",
    parametersTreated: [
      "Nitrati (riduzione tipica 85-95 per cento)",
      "Fluoruri (85-95 per cento)",
      "Arsenico (90-99 per cento)",
      "Piombo, rame, cadmio (95-99 per cento)",
      "Sodio e cloruri (90-98 per cento)",
      "Solidi disciolti totali (TDS, 90-99 per cento)",
      "PFAS e PFOA (riduzione significativa con membrana integra)",
      "Durezza temporanea (calcio e magnesio)",
    ],
    parametersNotTreated: [
      "Cloro libero residuo (deve essere rimosso a monte da carbone attivo, altrimenti danneggia la membrana)",
      "Batteri e virus (la membrana li trattiene fisicamente ma non sterilizza: tossine e biofilm possono comunque proliferare a valle senza lampada UV)",
      "Gas disciolti (anidride carbonica, idrogeno solforato)",
      "Pesticidi non polari di piccole dimensioni (parzialmente)",
    ],
    costRange: "250-900 € per impianto sottolavello + 100-300 € installazione idraulica",
    maintenance:
      "Sostituzione dei pre-filtri (sedimenti e carbone) ogni 6-12 mesi, sostituzione della membrana ogni 24-36 mesi, sanificazione annuale del serbatoio di accumulo.",
    sections: [
      {
        heading: "Cos'è e come funziona",
        paragraphs: [
          "L'osmosi inversa è un processo di separazione a membrana che inverte il fenomeno naturale dell'osmosi. In natura, se due soluzioni a diversa concentrazione salina sono separate da una membrana semipermeabile, l'acqua si sposta spontaneamente dal lato meno concentrato verso quello più concentrato per equilibrare la pressione osmotica. Applicando una pressione superiore a quella osmotica nel lato concentrato, il flusso si inverte: l'acqua attraversa la membrana, mentre i sali e le molecole più grandi vengono respinti.",
          "Negli impianti domestici la pressione di rete acquedottistica (in genere 2,5-4 bar) è sufficiente a far funzionare la membrana, che ha pori dell'ordine di 0,0001 micron. La membrana è di norma in poliammide composito (TFC) avvolto a spirale. A monte si trovano un filtro sedimenti e uno o due stadi a carbone attivo che proteggono la membrana dal cloro (che la danneggia in modo irreversibile) e dai particolati. A valle, un secondo carbone attivo affina il gusto. L'acqua trattata si raccoglie in un serbatoio in pressione da 4-12 litri.",
          "Il rovescio della medaglia è che per produrre un litro di permeato l'impianto scarta tre o quattro litri di acqua concentrata (reiezione). Gli impianti con pompa booster e recupero migliorano il rapporto fino a 1:1, ma costano e consumano corrente. Il permeato risulta molto puro: con TDS spesso sotto 30 mg/L, sapore neutro, talvolta percepito come piatto. Alcuni utenti aggiungono un rimineralizzatore finale per restituire calcio e magnesio.",
        ],
      },
      {
        heading: "Quali contaminanti riduce",
        paragraphs: [
          "L'osmosi inversa è il trattamento di riferimento per le contaminazioni chimiche disciolte. Nelle prove di laboratorio e nelle certificazioni NSF/ANSI 58, gli impianti correttamente dimensionati riducono i nitrati dell'85-95 per cento, l'arsenico totale del 90-99 per cento (con efficienze maggiori sulla forma pentavalente As(V) rispetto a quella trivalente As(III)), i fluoruri dell'85-95 per cento, il piombo e gli altri metalli pesanti tipicamente sopra il 95 per cento.",
          "È efficace anche su sodio, cloruri, solfati e sulla durezza (calcio e magnesio vengono rimossi insieme agli altri cationi). Le membrane di ultima generazione mostrano rimozioni significative anche per PFAS, PFOA e PFOS, sostanze di crescente preoccupazione nelle falde di alcune aree italiane. Le sostanze organiche di medio-alto peso molecolare (residui di farmaci, ormoni, alcuni pesticidi) vengono trattenute in modo apprezzabile, anche se non quantificabile con la stessa precisione dei sali.",
          "L'efficienza reale dipende dalla pressione di esercizio, dalla temperatura dell'acqua (sotto i 10 °C la portata cala sensibilmente), dallo stato della membrana e dal corretto dimensionamento dei pre-filtri. Una membrana esausta o danneggiata da cloro può mostrare rendimenti drasticamente inferiori senza che l'utente se ne accorga: per questo la verifica analitica periodica è parte integrante della tecnologia.",
        ],
      },
      {
        heading: "Quali contaminanti NON elimina",
        paragraphs: [
          "Nonostante la fama di sistema totale, l'osmosi inversa ha dei limiti precisi che chi vende impianti spesso omette. Il cloro libero non è un suo bersaglio: anzi, deve essere rimosso prima dalla membrana, perché la ossida e ne riduce drasticamente la vita utile. Per questo i pre-filtri a carbone non sono opzionali, e la loro sostituzione puntuale è critica.",
          "Sul fronte microbiologico la membrana trattiene fisicamente batteri e virus per dimensione, ma non li uccide. Se a monte arriva acqua contaminata, il biofilm può svilupparsi sul lato concentrato, e in caso di micro-difetti della membrana o di contaminazione del serbatoio di accumulo si rischia un passaggio. Per acque microbiologicamente sospette (pozzo privato, cisterna) l'osmosi va abbinata a una lampada UV di disinfezione finale.",
          "I gas disciolti, come l'anidride carbonica e l'idrogeno solforato responsabile dell'odore di uova marce, attraversano la membrana senza essere trattenuti. Alcuni pesticidi a basso peso molecolare e non polari non vengono respinti con la stessa efficienza dei sali. Infine, l'osmosi inversa non agisce su radon e radioattività in modo affidabile per tutti gli isotopi, anche se sul radio mostra buone rese.",
        ],
      },
      {
        heading: "Quando ha senso installarlo",
        paragraphs: [
          "L'osmosi inversa è la scelta razionale quando l'analisi dell'acqua mostra contaminazioni chimiche disciolte non eliminabili con altri trattamenti più semplici. Tipici scenari: nitrati sopra il limite di 50 mg/L o vicini ad esso, frequenti in pianura padana e nelle aree agricole; arsenico nelle zone di origine vulcanica del Lazio, della Toscana e di alcune aree campane; fluoruri elevati in alcune province; intrusione salina nelle falde costiere con sodio e cloruri alti.",
          "Ha senso anche in caso di contaminazione documentata da PFAS, dove il carbone attivo da solo non garantisce continuità di prestazione nel tempo. Per famiglie con neonati o persone immunodepresse che vogliono ridurre al minimo l'esposizione a metalli pesanti, l'osmosi offre un margine di sicurezza che i sistemi a filtrazione semplice non raggiungono.",
          "Va valutato infine in chi consuma molta acqua in bottiglia per ragioni di gusto o di durezza: in quei casi il confronto economico, fatto su 5-10 anni e includendo manutenzione e acqua di scarto, può risultare favorevole all'osmosi.",
        ],
        bullets: [
          "Nitrati alti o intermittenti (zone agricole)",
          "Arsenico geologico (zone vulcaniche)",
          "Falde costiere con intrusione salina",
          "Contaminazione PFAS accertata",
          "Forte consumo di acqua in bottiglia per gusto",
        ],
      },
      {
        heading: "Quando NON conviene",
        paragraphs: [
          "Se l'acqua dell'acquedotto è già conforme su tutti i parametri rilevanti, installare un'osmosi inversa è spesso una spesa sproporzionata al beneficio. Un'analisi recente con TDS sotto 400 mg/L, nitrati ben sotto soglia, assenza di metalli pesanti e nessun problema microbiologico rende il sistema sostanzialmente inutile.",
          "C'è poi una questione nutrizionale spesso sottovalutata. L'acqua osmotizzata è povera di calcio e magnesio: per chi assume una dieta varia non è un problema, ma per persone con ridotto apporto alimentare di minerali (anziani, diete restrittive) un consumo esclusivo di acqua iperdemineralizzata può contribuire a carenze. L'Organizzazione Mondiale della Sanità ha pubblicato linee guida che raccomandano una rimineralizzazione minima per le acque destinate al consumo continuativo.",
          "Il sistema ha anche costi ambientali e operativi non trascurabili: l'acqua di scarto va in fognatura, il consumo di cartucce è continuo, e una manutenzione trascurata porta rapidamente a un peggioramento della qualità microbiologica del serbatoio. Chi non è disposto a programmare cambi cartuccia e sanificazioni dovrebbe orientarsi su soluzioni più semplici.",
        ],
      },
      {
        heading: "Costi (acquisto + installazione + manutenzione)",
        paragraphs: [
          "Un impianto sottolavello di buona qualità si colloca tra i 250 e i 900 euro, con i modelli a flusso diretto senza serbatoio in fascia alta. L'installazione idraulica da parte di un tecnico aggiunge tipicamente 100-300 euro, a seconda della complessità del collegamento allo scarico e della rubinetteria dedicata. I modelli con pompa booster o con rimineralizzatore costano di più.",
          "La manutenzione annuale ricorrente comprende la sostituzione dei pre-filtri (20-60 euro l'anno) e la sostituzione della membrana ogni 2-3 anni (80-180 euro). Va aggiunta la sanificazione del serbatoio almeno una volta l'anno, con kit dedicati o intervento tecnico. La bolletta dell'acqua aumenta in modo proporzionale al rapporto di reiezione: con un impianto 1:3 e un consumo di 5 litri di permeato al giorno per famiglia, si parla di 20-30 metri cubi l'anno di acqua di scarto.",
          "Su un orizzonte di 5 anni una stima realistica si colloca tra 700 e 2000 euro complessivi tra ammortamento, consumabili e acqua aggiuntiva. È un costo che ha senso confrontare con quello dell'acqua minerale acquistata, ma anche con quello di alternative meno invasive se il problema da risolvere è circoscritto a un solo parametro.",
        ],
      },
      {
        heading: "Come verificare che funzioni davvero",
        paragraphs: [
          "Un impianto a osmosi inversa va valutato sempre con un'analisi prima e una dopo l'installazione, sugli stessi parametri. È l'unico modo per dimostrare un beneficio reale e per individuare malfunzionamenti silenziosi: una membrana esausta o fessurata può continuare a erogare acqua dal sapore identico ma con conducibilità e TDS molto più alti del previsto.",
          "I kit fai-da-te a strisce reattive misurano la durezza in modo grossolano, mentre i tester TDS a penna sono utili per un controllo settimanale ma non sostituiscono un'analisi: il TDS è una somma indistinta, non dice quanto nitrato, quanto arsenico o quanto piombo c'è. Se il TDS post-osmosi è sotto i 30-40 mg/L l'impianto sta lavorando, se sale stabilmente sopra i 60 mg/L è ora di sostituire la membrana.",
          "L'analisi di laboratorio accreditato sui parametri chimici specifici del proprio acquedotto, ripetuta dopo l'installazione e poi con cadenza annuale, è l'unico strumento per chiudere il cerchio: garantisce che il sistema acquistato stia effettivamente facendo ciò per cui è stato venduto, e produce una documentazione utile in caso di contestazioni con l'installatore.",
        ],
      },
    ],
    faqs: [
      {
        q: "Costa di più un impianto a osmosi inversa o continuare a comprare acqua in bottiglia?",
        a: "Per una famiglia di quattro persone con consumo medio di 6-8 litri al giorno, la spesa annua in bottiglie da supermercato si colloca tra 200 e 400 euro. L'osmosi inversa, ammortizzata su cinque anni e includendo manutenzione, costa indicativamente 140-400 euro l'anno. Il pareggio arriva di solito tra il secondo e il terzo anno. Se però l'acqua dell'acquedotto è buona e si compra bottiglia solo per abitudine, il calcolo cambia.",
      },
      {
        q: "Posso installare l'osmosi inversa da solo?",
        a: "Tecnicamente sì: gli impianti sottolavello sono venduti con kit di collegamento e istruzioni. Servono però attacchi rapidi compatibili, uno scarico per la salamoia, un foro nel lavello per il rubinetto dedicato e la verifica della pressione di rete. Un errore comune è non collegare correttamente lo scarico, con rischio di reflusso. Se non avete dimestichezza con idraulica, l'intervento di un tecnico è prudente.",
      },
      {
        q: "Quando devo sostituire la membrana e i filtri?",
        a: "I pre-filtri sedimenti e carbone vanno cambiati ogni 6-12 mesi a seconda della qualità dell'acqua in ingresso. La membrana ha una vita tipica di 24-36 mesi, ma può durare meno se i pre-filtri non vengono rispettati o se l'acqua è particolarmente carica. Un segnale concreto è l'aumento del TDS del permeato misurato con un tester economico.",
      },
      {
        q: "Come verifico che il mio impianto stia funzionando davvero?",
        a: "Il controllo casalingo con tester TDS dà un'indicazione di massima della prestazione complessiva. Per sapere se i parametri critici (nitrati, arsenico, piombo, fluoruri) sono effettivamente sotto i limiti di legge serve un'analisi di laboratorio accreditato, da fare alla messa in funzione e poi ogni 12-24 mesi sui parametri rilevanti per la vostra zona.",
      },
      {
        q: "L'osmosi inversa elimina tutti i contaminanti dell'acqua?",
        a: "No. Rimuove con alta efficienza la maggior parte dei sali, dei metalli pesanti e di molte sostanze organiche, ma non agisce in modo affidabile sui gas disciolti, su alcuni pesticidi a basso peso molecolare e non sterilizza dal punto di vista microbiologico. Per pozzi privati o acque sospette serve una lampada UV in aggiunta.",
      },
      {
        q: "L'acqua dell'osmosi inversa è povera di minerali, fa male?",
        a: "L'OMS raccomanda valori minimi di calcio e magnesio nelle acque potabili. Per una dieta varia non è un problema, ma chi consuma quasi esclusivamente acqua osmotizzata può valutare un post-filtro rimineralizzante o l'integrazione tramite dieta. È una scelta di abitudine di consumo, non un'emergenza sanitaria.",
      },
    ],
    relatedTreatments: ["carbone-attivo", "disinfezione-uv", "resine-scambio-ionico"],
    ctaContext:
      "Hai installato un impianto a osmosi inversa e vuoi sapere se sta davvero abbattendo nitrati, arsenico e metalli pesanti come promesso? Un'analisi di laboratorio accreditato pre e post installazione è l'unico modo per documentarlo.",
  },
  {
    slug: "addolcitore",
    itName: "Addolcitore",
    shortTitle: "Addolcitore acqua: conviene davvero? Guida onesta 2026",
    metaDescription:
      "Quando l'addolcitore a scambio ionico ha senso, quali parametri abbatte e quali no, costi reali e come verificare la durezza residua con analisi di laboratorio.",
    searchKeywords: [
      "addolcitore acqua conviene",
      "addolcitore a scambio ionico",
      "addolcitore casa costi",
      "addolcitore acqua svantaggi",
      "addolcitore e sodio",
      "durezza acqua gradi francesi",
      "addolcitore calcare lavatrice",
    ],
    intro:
      "L'addolcitore a scambio ionico è la soluzione tecnica più diffusa per ridurre la durezza dell'acqua e contenere i depositi di calcare in caldaie, lavatrici, lavastoviglie e tubazioni. È un dispositivo importante per chi vive in zone con acque dure o molto dure, ma è anche frequentemente venduto a chi non ne ha realmente bisogno. In questa guida vediamo cosa fa esattamente, cosa non fa nonostante le promesse di certi venditori, quando il costo è giustificato e quando un'analisi della durezza basterebbe per evitare l'acquisto.",
    parametersTreated: [
      "Durezza totale (calcio e magnesio sostituiti da sodio, abbattimento fino al 95-99 per cento)",
      "Depositi di calcare su scambiatori, resistenze e tubazioni",
      "Consumi di detersivi e ammorbidenti (riduzione del fabbisogno)",
    ],
    parametersNotTreated: [
      "Nitrati e altri sali (concentrazione invariata)",
      "Metalli pesanti (piombo, arsenico, cadmio)",
      "Cloro residuo e sottoprodotti della disinfezione",
      "Sostanze organiche e pesticidi",
      "Batteri e virus",
      "PFAS",
    ],
    costRange: "800-2500 € apparecchio domestico + 150-400 € installazione",
    maintenance:
      "Ricarica del sale rigenerante ogni 4-8 settimane (sacco 25 kg, 5-12 euro), igienizzazione annuale, controllo della valvola e della resina ogni 2-3 anni.",
    sections: [
      {
        heading: "Cos'è e come funziona",
        paragraphs: [
          "L'addolcitore a scambio ionico è un serbatoio contenente una resina cationica forte, costituita da piccole sfere polimeriche che portano gruppi funzionali carichi negativamente. In stato di esercizio la resina è satura di ioni sodio (Na+). Quando l'acqua dura attraversa il letto di resina, gli ioni calcio (Ca2+) e magnesio (Mg2+) responsabili della durezza vengono trattenuti dalla resina, che in cambio rilascia in soluzione due ioni sodio per ogni ione divalente catturato.",
          "Il risultato è acqua dolce (durezza vicina a zero) ma con un contenuto di sodio aumentato in misura proporzionale alla durezza iniziale. La resina ha una capacità finita: dopo aver scambiato una certa quantità di ioni si esaurisce. A quel punto interviene la fase di rigenerazione, durante la quale una salamoia satura di sale (NaCl) attraversa la resina in controcorrente: l'eccesso di sodio scaccia il calcio e il magnesio accumulati, che vengono scaricati in fognatura insieme all'acqua di lavaggio.",
          "Le unità domestiche moderne sono volumetriche o cronometriche: rigenerano in base al volume effettivamente trattato (più efficienti) o a intervalli fissi (più semplici ma sprecano sale). Una rigenerazione consuma indicativamente 1-3 kg di sale e diverse centinaia di litri di acqua. La durezza residua è regolabile tramite una valvola di bypass.",
        ],
      },
      {
        heading: "Quali contaminanti riduce",
        paragraphs: [
          "L'addolcitore agisce esclusivamente sulla durezza, ovvero sui sali di calcio e magnesio espressi in genere come gradi francesi (1 °F = 10 mg/L di carbonato di calcio equivalente). La riduzione è quasi totale quando la resina è in piena funzionalità: si passa da 35-50 °F a valori sotto 5 °F.",
          "Il beneficio principale è la protezione degli apparecchi di riscaldamento e degli elettrodomestici dai depositi di carbonato di calcio, che riducono lo scambio termico, accorciano la vita delle resistenze e aumentano i consumi energetici. Un boiler che lavora con acqua di 40 °F può accumulare in pochi anni strati di calcare che peggiorano del 10-20 per cento il rendimento. Anche lavatrici e lavastoviglie durano più a lungo con acqua addolcita, e il fabbisogno di detersivo cala in modo apprezzabile, perché la durezza neutralizza i tensioattivi.",
          "Sul piano del comfort, l'acqua addolcita schiuma di più nella doccia e lascia meno aloni su piatti e vetri. Sulla pelle l'effetto è soggettivo: alcune persone lo trovano gradevole, altre percepiscono una sensazione di pelle scivolosa che non amano.",
        ],
      },
      {
        heading: "Quali contaminanti NON elimina",
        paragraphs: [
          "L'addolcitore non è un depuratore. Non rimuove nitrati, fluoruri, arsenico, piombo o altri metalli pesanti, non agisce sul cloro residuo né sui sottoprodotti della disinfezione, non riduce in alcun modo le sostanze organiche o i pesticidi e non ha alcun effetto sulla carica microbiologica. Anzi, una resina mal manutenuta può diventare essa stessa un substrato per la crescita batterica.",
          "Anche sul fronte dei sali totali il bilancio è particolare: l'addolcitore non rimuove sali, semplicemente li scambia. La conducibilità dell'acqua resta sostanzialmente invariata, ma cambia la sua composizione: meno calcio e magnesio, più sodio. Per ogni grado francese di durezza rimossa si aggiungono circa 4,6 mg/L di sodio. Su un'acqua di partenza 40 °F l'incremento è di circa 180 mg/L, valore che porta il sodio totale ben oltre quello tipicamente desiderato per chi segue una dieta iposodica.",
          "Per questo il D.M. 31/2001 fissa un limite di 200 mg/L di sodio per l'acqua potabile: un'acqua molto dura addolcita totalmente può superarlo. La buona pratica è impostare una durezza residua di 12-15 °F e installare un rubinetto bypassato per l'acqua da bere e da cucina.",
        ],
      },
      {
        heading: "Quando ha senso installarlo",
        paragraphs: [
          "L'addolcitore ha un ritorno tangibile quando la durezza dell'acqua di rete supera stabilmente i 30-35 gradi francesi. In quel range si verifica una rapida formazione di calcare nelle caldaie e nei boiler, con perdita di efficienza e necessità di disincrostazioni periodiche costose. In zone dell'Italia centrale e meridionale con acque di provenienza calcarea sono frequenti durezze di 40-60 °F, che giustificano pienamente l'investimento.",
          "Ha senso anche nelle abitazioni con impianto di riscaldamento a pavimento o con scambiatori in cui anche pochi millimetri di calcare provocano cali di resa, e nelle case con consumi elevati di acqua calda. In ambito condominiale centralizzato la convenienza è ancora maggiore, perché l'impatto economico del calcare si moltiplica per gli utenti serviti.",
          "Va valutato infine in chi soffre dei tipici disagi estetici da acqua dura: vetri opachi, aloni su rubinetterie, schiuma scarsa di shampoo e bagnoschiuma. Sono fastidi reali, anche se non sanitari.",
        ],
        bullets: [
          "Durezza stabilmente sopra 35 °F",
          "Caldaie e boiler con storia di guasti da calcare",
          "Impianti radianti a pavimento",
          "Lavatrici, lavastoviglie soggette a incrostazioni",
          "Edifici condominiali con consumi elevati",
        ],
      },
      {
        heading: "Quando NON conviene",
        paragraphs: [
          "Sotto i 15 gradi francesi l'acqua è già considerata dolce: installare un addolcitore è inutile e introduce sodio senza alcun beneficio tecnico. Tra 15 e 25 °F l'acqua è mediamente dura ma raramente causa problemi rilevanti se non in presenza di scambiatori molto sensibili: in genere basta impostare correttamente la temperatura del boiler sotto 55 °C per evitare la precipitazione del carbonato di calcio.",
          "L'addolcitore non conviene a chi vuole risolvere problemi di gusto, odore di cloro, dubbi sui nitrati o sui metalli: per quei problemi serve un trattamento di tipo completamente diverso (carbone attivo per il cloro, osmosi inversa o resine selettive per i contaminanti chimici). Chi acquista un addolcitore aspettandosi acqua più sana scopre presto di aver speso 1500 euro senza alcun miglioramento sui parametri sanitari.",
          "Anche le persone in dieta iposodica per ipertensione o patologie cardiache devono valutare con il proprio medico l'impatto del sodio aggiunto e prevedere comunque un rubinetto di acqua non addolcita per il consumo alimentare. Infine, in abitazioni con consumi idrici molto bassi (singole persone, seconde case) l'ammortamento non si raggiunge mai.",
        ],
      },
      {
        heading: "Costi (acquisto + installazione + manutenzione)",
        paragraphs: [
          "Gli addolcitori domestici si collocano in una fascia indicativa di 800-2500 euro per il solo apparecchio, con variazioni legate alla portata, al volume di resina, alla qualità della valvola di rigenerazione e all'eventuale display di gestione. L'installazione idraulica, che include il collegamento al circuito di ingresso dopo il contatore, il bypass e il collegamento allo scarico per la salamoia, costa tipicamente 150-400 euro.",
          "I costi ricorrenti comprendono il sale rigenerante (un sacco da 25 kg di sale a cubetti costa 5-12 euro e dura tipicamente 1-3 mesi a famiglia), l'energia elettrica per la centralina (trascurabile) e una manutenzione annuale di igienizzazione che, se affidata al tecnico, costa 80-180 euro. Ogni 8-15 anni la resina può andare sostituita.",
          "Sul lungo periodo il calcolo economico si basa sul confronto tra il costo annuo (consumabili più ammortamento, 150-350 euro) e i risparmi su detersivi, disincrostazioni della caldaia, vita utile degli elettrodomestici e bolletta del gas per il riscaldamento dell'acqua. In presenza di acque molto dure il bilancio è in genere positivo entro pochi anni; con acque solo moderatamente dure il pareggio non arriva mai.",
        ],
      },
      {
        heading: "Come verificare che funzioni davvero",
        paragraphs: [
          "Il primo controllo è la misura della durezza in ingresso e in uscita. Esistono kit colorimetrici a goccia (titolazione con EDTA) venduti a 10-20 euro che misurano la durezza in gradi francesi con buona precisione: vanno usati periodicamente per controllare che la durezza residua dopo l'addolcitore sia coerente con quanto impostato (di solito 12-15 °F) e che non risalga improvvisamente, sintomo di una resina esausta o di un malfunzionamento della rigenerazione.",
          "Per misurare l'effettivo aumento di sodio e verificare che non si superino i 200 mg/L imposti dal D.M. 31/2001 serve invece un'analisi di laboratorio, perché il sodio non è misurabile in modo affidabile con kit casalinghi. Lo stesso vale per il controllo periodico della carica microbiologica: una resina trascurata può sviluppare biofilm e aumentare la conta batterica all'uscita.",
          "L'analisi accreditata pre e post installazione documenta la durezza effettiva, il sodio residuo e la conformità del trattamento. Una verifica annuale è raccomandata, soprattutto se nella famiglia ci sono persone con restrizioni alimentari sul sodio o se l'apparecchio è installato da più di 5 anni.",
        ],
      },
    ],
    faqs: [
      {
        q: "Costa di più installare un addolcitore o pagare le disincrostazioni della caldaia ogni anno?",
        a: "Una disincrostazione della caldaia da parte di un tecnico costa 80-200 euro ogni 12-24 mesi, oltre alla minore efficienza energetica nel frattempo. Un addolcitore con manutenzione costa indicativamente 150-300 euro l'anno ammortizzato. Con acque oltre 35 °F e una caldaia in uso intensivo, il pareggio arriva entro 3-5 anni. Sotto 25 °F raramente conviene.",
      },
      {
        q: "Posso installare l'addolcitore da solo?",
        a: "L'installazione richiede tagli sulla tubazione di alimentazione, un bypass meccanico, il collegamento allo scarico per la salamoia e spesso una presa elettrica nelle vicinanze. È un lavoro alla portata di un idraulico esperto ma non banale per un non addetto. Errori comuni sono il montaggio in posizione errata rispetto al gruppo di carico della caldaia o lo scarico non sifonato.",
      },
      {
        q: "Quando devo cambiare il sale e la resina?",
        a: "Il sale va rabboccato non appena il livello nel tinozzo scende sotto metà, in genere ogni 4-8 settimane per una famiglia di quattro persone. La resina ha una vita utile di 8-15 anni se la rigenerazione è regolare e l'acqua in ingresso non è particolarmente sporca; va sostituita quando la durezza in uscita non scende più ai valori impostati nonostante rigenerazioni recenti.",
      },
      {
        q: "Come faccio a sapere se l'addolcitore sta funzionando davvero?",
        a: "Un kit colorimetrico di misura della durezza a 15 euro permette controlli mensili. Per verificare che il sodio residuo resti sotto i 200 mg/L del D.M. 31/2001 e che non ci siano problemi microbiologici serve un'analisi di laboratorio accreditato, da ripetere ogni 12-18 mesi.",
      },
      {
        q: "L'addolcitore elimina nitrati, cloro o batteri?",
        a: "No, su nessuno di questi parametri ha effetto. Agisce solo sulla durezza scambiando calcio e magnesio con sodio. Se il problema è il gusto di cloro serve un carbone attivo; se sono i nitrati serve un'osmosi inversa o una resina selettiva; se è la microbiologia serve una disinfezione UV.",
      },
      {
        q: "L'acqua addolcita fa male a chi soffre di pressione alta?",
        a: "L'acqua addolcita contiene più sodio di quella di partenza, in misura proporzionale alla durezza rimossa. Per chi segue una dieta iposodica può non essere irrilevante, soprattutto se si bevono diversi litri al giorno. La pratica corretta è installare un rubinetto bypassato di acqua non addolcita per bere e cucinare, e usare l'acqua addolcita per il resto degli usi domestici.",
      },
    ],
    relatedTreatments: ["osmosi-inversa", "resine-scambio-ionico", "carbone-attivo"],
    ctaContext:
      "Hai installato un addolcitore e vuoi verificare la durezza residua, il sodio aggiunto e la conformità al D.M. 31/2001? Un'analisi di laboratorio accreditato misura ciò che i kit casalinghi non possono.",
  },
  {
    slug: "carbone-attivo",
    itName: "Carbone attivo",
    shortTitle: "Carbone attivo per acqua: cosa toglie davvero e cosa no",
    metaDescription:
      "Filtri a carbone attivo (GAC) per acqua potabile: meccanismo di adsorbimento, contaminanti realmente rimossi, limiti e come verificare l'efficacia con analisi.",
    searchKeywords: [
      "carbone attivo acqua",
      "filtro carbone attivo cosa toglie",
      "carbone attivo cloro acqua",
      "filtro GAC sottolavello",
      "carbone attivo pesticidi acqua",
      "filtro carbone attivo manutenzione",
      "block carbon filter",
    ],
    intro:
      "I filtri a carbone attivo sono il trattamento più diffuso al mondo per migliorare gusto e odore dell'acqua potabile. Sfruttano un fenomeno fisico-chimico chiamato adsorbimento per catturare molecole organiche e cloro libero su una superficie enorme rispetto al volume occupato. Sono efficaci, economici e relativamente semplici da gestire, ma non sono onnipotenti: lasciano passare sali disciolti, metalli pesanti, nitrati e microbiologia. Vediamo nel dettaglio quando un filtro a carbone è la scelta giusta e quando va integrato con altri trattamenti.",
    parametersTreated: [
      "Cloro libero residuo (riduzione 90-99 per cento)",
      "Trialometani (THM) e sottoprodotti della disinfezione",
      "Sostanze organiche volatili (VOC)",
      "Pesticidi e diserbanti (in misura variabile, fino al 70-90 per cento per molti)",
      "Composti che danno cattivo odore e sapore",
      "PFAS (riduzione apprezzabile, ma con saturazione rapida del letto)",
      "Tracce di residui farmaceutici e ormoni (con efficienza variabile)",
    ],
    parametersNotTreated: [
      "Nitrati e nitriti",
      "Durezza (calcio, magnesio)",
      "Metalli pesanti pesanti tipo arsenico (non in modo affidabile; solo alcuni carboni speciali sul piombo)",
      "Sali disciolti in genere (TDS)",
      "Batteri e virus (anzi, il carbone esausto può ospitarne la crescita)",
      "Fluoruri",
    ],
    costRange: "30-100 € caraffa e cartucce iniziali; 100-300 € impianto sottolavello",
    maintenance:
      "Sostituzione della cartuccia ogni 1-2 mesi per caraffa, ogni 6-12 mesi per sottolavello, in base ai litri trattati o al tempo trascorso (non superare mai le indicazioni del produttore per evitare rilascio batterico).",
    sections: [
      {
        heading: "Cos'è e come funziona",
        paragraphs: [
          "Il carbone attivo è ottenuto carbonizzando materiali organici (gusci di noce di cocco, legno, torba, carbone fossile) e poi attivandoli con vapore o sostanze chimiche a temperature di 800-1100 °C. Il processo crea una struttura porosa interna con una superficie specifica enorme: un solo grammo di carbone attivo di qualità ha una superficie di 800-1500 metri quadrati, comparabile a un campo da calcio compresso in un cucchiaino.",
          "Il meccanismo di funzionamento è l'adsorbimento: le molecole presenti nell'acqua, soprattutto quelle organiche non polari, aderiscono fisicamente alla superficie interna dei pori grazie a forze di van der Waals e interazioni idrofobiche. Le molecole d'acqua e i sali disciolti, essendo polari o ionici, non vengono trattenuti in modo significativo. Le sostanze a peso molecolare medio-alto e con bassa polarità sono i bersagli ideali: cloro, trialometani, pesticidi, sostanze organiche volatili.",
          "Esistono due grandi famiglie di filtri: il GAC (granular activated carbon), in cui il carbone è in granuli sciolti attraverso cui l'acqua scorre, e il carbon block, in cui la polvere di carbone è agglomerata in un blocco poroso compatto con tempi di contatto più lunghi e prestazioni più costanti. I carbon block di buona qualità raggiungono certificazioni NSF 53 anche per piombo e altri specifici contaminanti.",
        ],
      },
      {
        heading: "Quali contaminanti riduce",
        paragraphs: [
          "Il bersaglio primario del carbone attivo è il cloro libero residuo dell'acquedotto, abbattuto del 90-99 per cento già con cartucce di modesta qualità. Con il cloro vengono ridotti i sottoprodotti della disinfezione (trialometani, acidi aloacetici) che si formano nella reazione tra cloro e sostanze organiche e che sono associati a effetti cronici di salute.",
          "Sui pesticidi e i diserbanti l'efficienza dipende dalla molecola: atrazine, simazine, alachlor sono adsorbiti con buona efficienza, glifosato meno. In generale per le sostanze organiche di sintesi i carboni block certificati NSF 53 garantiscono riduzioni superiori al 95 per cento per i composti elencati nelle prove. I VOC (benzene, toluene, MTBE) sono adsorbiti molto bene.",
          "Sui PFAS i dati sono incoraggianti ma vanno letti con attenzione: il carbone attivo riduce in modo significativo PFOA e PFOS, ma il letto si satura relativamente in fretta perché si tratta di molecole presenti spesso a concentrazioni in tracce ma con elevata affinità per la fase acquosa. Per contaminazioni note da PFAS serve un dimensionamento dedicato e un monitoraggio analitico ravvicinato. Sui residui di farmaci e ormoni il carbone ha un certo effetto ma non garantisce abbattimenti predicibili.",
        ],
      },
      {
        heading: "Quali contaminanti NON elimina",
        paragraphs: [
          "Il carbone attivo non agisce in modo significativo sui sali disciolti. La conducibilità, il TDS, la durezza, il sodio, i nitrati e i fluoruri attraversano il filtro praticamente invariati. Chi compra un filtro a carbone aspettandosi di ridurre la durezza per proteggere la caldaia dal calcare scopre presto di aver scelto la tecnologia sbagliata.",
          "Sui metalli pesanti la situazione è più sfumata. I carboni standard non sono dimensionati per arsenico, cromo, cadmio o nichel. Esistono carbon block certificati specificamente per piombo (NSF 53), che lo riducono efficacemente, ma è una funzionalità da verificare puntualmente, non implicita in ogni filtro a carbone. Su arsenico e fluoruri il carbone non è la tecnologia di riferimento: per quei parametri servono resine selettive o osmosi inversa.",
          "Sul piano microbiologico il carbone attivo non è una barriera: anzi, una cartuccia trattenendo sostanze organiche e creando un ambiente umido può favorire la proliferazione batterica. Per questo molte cartucce contengono argento ionico come batteriostatico, e per questo è critico rispettare i tempi di sostituzione: una cartuccia tenuta oltre il dovuto può rilasciare più batteri di quanti ne fermi.",
        ],
      },
      {
        heading: "Quando ha senso installarlo",
        paragraphs: [
          "Un filtro a carbone è la soluzione naturale per chi percepisce un forte gusto di cloro nell'acqua di rete e vuole migliorarlo senza affrontare l'investimento di un'osmosi. È particolarmente utile nei periodi estivi, quando gli acquedotti aumentano la clorazione per ragioni microbiologiche, e in alcune città dove il cloro residuo arriva al rubinetto a concentrazioni di 0,5-1 mg/L sgradevoli al palato.",
          "Ha senso anche come pretrattamento di altre tecnologie: a monte di una membrana di osmosi inversa per proteggerla dal cloro, a monte di una lampada UV per ridurre la torbidità organica che ne abbatte l'efficacia. È una scelta pertinente per acquedotti con storia di contaminazioni occasionali da pesticidi nelle zone agricole, dove l'analisi rivela picchi stagionali sotto i limiti di legge ma sgradevoli.",
          "Infine, in formato caraffa è il primo trattamento per chi vuole iniziare a migliorare la propria acqua con un investimento minimo, ed è perfettamente adeguato se l'unico problema è il gusto.",
        ],
        bullets: [
          "Gusto e odore di cloro fastidioso",
          "Pretrattamento prima di osmosi inversa o UV",
          "Acquedotti con cloroderivati elevati (THM)",
          "Picchi stagionali di pesticidi in zone agricole",
          "Soluzione entry-level via caraffa",
        ],
      },
      {
        heading: "Quando NON conviene",
        paragraphs: [
          "Se il problema dichiarato dall'analisi è la durezza, i nitrati, l'arsenico o un altro parametro chimico disciolto, il carbone attivo non è la risposta. Spendere 200 euro in cartucce sperando di abbattere i nitrati per la pappa del neonato è semplicemente un autoinganno tecnico.",
          "Anche per acque microbiologicamente sospette il carbone da solo non basta: trattiene meccanicamente alcune particelle ma non sterilizza, e può addirittura peggiorare la situazione se la cartuccia non viene sostituita per tempo. Su acque di pozzo o di cisterna senza altra disinfezione, il carbone va sempre abbinato a un UV finale.",
          "Sul fronte economico, l'utilizzo di una caraffa con consumi domestici significativi diventa rapidamente costoso in cartucce: oltre i 5-6 litri al giorno conviene un impianto sottolavello, che a parità di prestazione ha un costo per litro nettamente inferiore.",
        ],
      },
      {
        heading: "Costi (acquisto + installazione + manutenzione)",
        paragraphs: [
          "Le caraffe a carbone attivo costano 30-80 euro, le cartucce di ricambio 3-8 euro l'una e durano tipicamente 100-150 litri, ovvero 4-6 settimane in una famiglia di quattro persone. Il costo annuo si colloca intorno ai 60-150 euro, dominato dai consumabili più che dall'apparecchio.",
          "Un impianto sottolavello con uno o più stadi a carbone (sedimenti + GAC + carbon block) costa 100-300 euro all'acquisto più 50-150 euro di installazione idraulica. Le cartucce di ricambio costano 20-50 euro ciascuna e vanno cambiate ogni 6-12 mesi. Il costo annuo a regime è 30-100 euro.",
          "In entrambi i casi la spesa principale è il consumabile, ed è critico rispettare i tempi di sostituzione: una cartuccia esausta lascia passare tutto ciò che dovrebbe fermare e può rilasciare microbiologia. Risparmiare sulla cadenza dei cambi è la fonte numero uno di insoddisfazione su questa tecnologia.",
        ],
      },
      {
        heading: "Come verificare che funzioni davvero",
        paragraphs: [
          "Il primo segnale empirico di efficienza è il gusto: se l'acqua filtrata torna a sapere di cloro, la cartuccia è esausta. È un indicatore grossolano ma utile su questo specifico parametro. Per misurare la riduzione effettiva del cloro libero esistono kit colorimetrici a 10-15 euro usati anche per le piscine, sensibili sotto 0,1 mg/L.",
          "Per verificare la riduzione di pesticidi, sottoprodotti della clorazione, PFAS e metalli pesanti specifici dichiarati dal produttore (es. piombo nei carbon block NSF 53) non esistono kit casalinghi affidabili: serve un'analisi di laboratorio sui parametri di interesse, da fare a cartuccia nuova e a fine vita dichiarata per confrontare i risultati.",
          "Per acque di pozzo o cisterne, è consigliabile aggiungere alla verifica chimica una conta microbiologica all'uscita del filtro: una cartuccia mal manutenuta può rilasciare batteri ben oltre i limiti normativi. L'analisi accreditata pre e post filtro, ripetuta dopo 6-12 mesi, è il modo onesto per sapere se il filtro a carbone sta facendo il suo lavoro.",
        ],
      },
    ],
    faqs: [
      {
        q: "Costa di più un filtro a carbone o l'acqua in bottiglia?",
        a: "Per consumi medi (6-8 litri al giorno per famiglia) una caraffa costa 80-150 euro l'anno in cartucce, un sottolavello a carbone 40-100 euro. L'acqua in bottiglia costa indicativamente 200-400 euro l'anno. Il carbone è quasi sempre più economico, ma offre una protezione qualitativamente diversa: ottima sul gusto, limitata su molti contaminanti.",
      },
      {
        q: "Posso installare un sottolavello a carbone da solo?",
        a: "Sì, è il trattamento domestico più semplice da installare. Servono un attacco a T sull'alimentazione fredda e un rubinetto dedicato. Molti kit includono tutti i componenti. Errori comuni: non chiudere l'acqua prima dell'intervento e non sostituire periodicamente le guarnizioni delle cartucce, che possono dare microfiltrazioni.",
      },
      {
        q: "Quando devo cambiare la cartuccia?",
        a: "Le indicazioni del produttore sono espresse in litri trattati o in mesi: vanno rispettate, non superate. Una caraffa standard arriva a 100-150 litri (4-6 settimane per una famiglia), un sottolavello GAC 2000-5000 litri (6-12 mesi). Anche se ne resta capacità adsorbente, dopo 12 mesi va comunque sostituita per evitare rilascio batterico.",
      },
      {
        q: "Come verifico che il filtro a carbone stia funzionando?",
        a: "Sul cloro è facile: il gusto e i kit colorimetrici economici lo dicono subito. Sui pesticidi, sui sottoprodotti della clorazione, sui PFAS e sui metalli pesanti specifici servono analisi di laboratorio, da ripetere a cartuccia nuova e a cartuccia esausta, sui parametri di interesse della propria zona.",
      },
      {
        q: "Il carbone attivo elimina tutti i contaminanti?",
        a: "No. È molto efficace sul cloro, sui sottoprodotti della clorazione e su molte sostanze organiche, ma non agisce sui sali disciolti (nitrati, durezza, sodio, TDS) e non sterilizza. Per la microbiologia serve UV o ultrafiltrazione, per nitrati e metalli serve osmosi inversa o resine selettive.",
      },
      {
        q: "Il carbone attivo può rilasciare batteri?",
        a: "Una cartuccia esausta o tenuta oltre i mesi previsti diventa un substrato favorevole alla crescita batterica, perché ha trattenuto sostanze organiche e ha un ambiente umido. Per questo molti carboni contengono argento ionico batteriostatico, e per questo è critico rispettare la cadenza di sostituzione.",
      },
    ],
    relatedTreatments: ["osmosi-inversa", "ultrafiltrazione", "filtro-caraffa"],
    ctaContext:
      "Hai installato un filtro a carbone attivo e vuoi sapere se riduce davvero pesticidi, trialometani o piombo come dichiarato? Un'analisi di laboratorio accreditato pre e post cartuccia è l'unico modo per documentarlo.",
  },
  {
    slug: "ultrafiltrazione",
    itName: "Ultrafiltrazione",
    shortTitle: "Ultrafiltrazione acqua: barriera fisica contro batteri e virus",
    metaDescription:
      "Ultrafiltrazione a membrana per acqua potabile: principio di funzionamento, capacità di rimozione microbiologica, limiti sui contaminanti chimici e verifica analitica.",
    searchKeywords: [
      "ultrafiltrazione acqua",
      "filtro ultrafiltrazione casa",
      "membrana ultrafiltrazione batteri",
      "ultrafiltrazione vs osmosi",
      "ultrafiltrazione pozzo privato",
      "filtro UF sottolavello",
      "ultrafiltrazione PFAS",
    ],
    intro:
      "L'ultrafiltrazione è una tecnica di separazione a membrana con pori di 0,01-0,1 micrometri, sufficiente a trattenere fisicamente batteri, virus, cisti protozoarie e particelle in sospensione, ma abbastanza aperta da lasciare passare i sali disciolti. È un buon compromesso tra l'efficienza microbiologica delle membrane più strette e il basso consumo idrico ed energetico: non spreca acqua come l'osmosi inversa e mantiene il contenuto minerale naturale. Vediamo quando è la scelta più razionale e quando invece serve qualcosa di diverso.",
    parametersTreated: [
      "Batteri (riduzione log 6-7, oltre 99,9999 per cento)",
      "Virus (riduzione log 4-6 con membrane di taglio 0,01 µm)",
      "Cisti protozoarie (Giardia, Cryptosporidium, abbattimento totale)",
      "Particolato e torbidità (sotto 0,1 NTU)",
      "Macromolecole organiche, alghe, colloidi",
    ],
    parametersNotTreated: [
      "Sali disciolti (nitrati, sodio, cloruri, fluoruri)",
      "Durezza",
      "Metalli pesanti in forma disciolta",
      "Cloro residuo",
      "Sostanze organiche di basso peso molecolare (pesticidi, VOC)",
      "PFAS",
    ],
    costRange: "200-600 € impianto domestico + 100-200 € installazione",
    maintenance:
      "Lavaggio in controcorrente periodico, sostituzione della membrana ogni 12-24 mesi a seconda della qualità dell'acqua, eventuale sanificazione con soluzioni dedicate.",
    sections: [
      {
        heading: "Cos'è e come funziona",
        paragraphs: [
          "L'ultrafiltrazione è un processo di filtrazione a membrana che utilizza membrane semipermeabili con pori nominali nell'intervallo 0,01-0,1 micrometri, circa cento volte più piccoli di quelli della microfiltrazione e cento volte più grandi di quelli dell'osmosi inversa. La separazione avviene per pura esclusione dimensionale: tutto ciò che è più grande del poro viene trattenuto, tutto ciò che è più piccolo passa.",
          "A differenza dell'osmosi inversa, l'ultrafiltrazione non richiede alte pressioni: lavora bene a 1-3 bar, quindi può essere alimentata direttamente dalla rete acquedottistica senza pompe. Il consumo energetico è trascurabile e il rapporto di reiezione è molto basso (in genere meno di 5-10 per cento di acqua di scarto durante il lavaggio in controcorrente), il che la rende molto più sostenibile sul fronte idrico.",
          "Le membrane più diffuse sono in fibra cava (hollow fiber), realizzate in polietersulfone o polivinilfluoruro, e organizzate in moduli a cartuccia. L'acqua entra dall'esterno o dall'interno delle fibre e attraversa la parete porosa. Il lavaggio in controcorrente periodico stacca i depositi accumulati e ripristina la portata.",
        ],
      },
      {
        heading: "Quali contaminanti riduce",
        paragraphs: [
          "Il punto di forza dell'ultrafiltrazione è l'abbattimento microbiologico per via puramente fisica. Una membrana con taglio di 0,02-0,03 micrometri trattiene tutti i batteri patogeni di interesse sanitario (Escherichia coli, Salmonella, Legionella, enterococchi) con riduzioni log 6-7, ovvero meglio di 1 superstite per milione. Trattiene anche i protozoi (Giardia, Cryptosporidium) che sono notoriamente resistenti al cloro e una delle cause più frequenti di gastroenteriti epidemiche.",
          "Sui virus la situazione dipende dal taglio reale della membrana: con tagli sotto 0,01 micrometri (membrane UF strette o UF-NF) si raggiungono riduzioni log 4-6 anche su virus enterici come norovirus e rotavirus. Membrane più larghe lasciano passare una frazione di virus e devono essere abbinate a un'ulteriore barriera (UV o cloro).",
          "L'ultrafiltrazione è efficacissima anche su torbidità, particolato, colloidi e macromolecole organiche. L'acqua in uscita è limpida sotto 0,1 NTU. Questo la rende un ottimo pretrattamento per impianti UV (che richiedono bassa torbidità per essere efficaci) e per filtri a carbone (che vengono protetti dal precoce intasamento).",
        ],
      },
      {
        heading: "Quali contaminanti NON elimina",
        paragraphs: [
          "La membrana di ultrafiltrazione non ferma nulla che sia disciolto come ione. Sali, sodio, cloruri, nitrati, fluoruri, calcio, magnesio passano integralmente. La conducibilità e il TDS dell'acqua restano sostanzialmente invariati. Per la stessa ragione, i metalli pesanti in forma disciolta (la più comune per piombo, arsenico, cadmio) non vengono trattenuti.",
          "Non agisce sul cloro residuo né sui suoi sottoprodotti, né sui pesticidi o sui composti organici di basso peso molecolare. Sui PFAS la prestazione è in genere modesta: le molecole sono troppo piccole per essere intercettate dimensionalmente. Per acque chimicamente contaminate l'ultrafiltrazione va integrata con carbone attivo o con osmosi inversa.",
          "Va inoltre tenuto presente che il pretrattamento è importante: una membrana UF si sporca rapidamente in presenza di ferro, manganese o alta torbidità in ingresso. Senza un filtro sedimenti a monte la frequenza di sostituzione cresce e i costi salgono.",
        ],
      },
      {
        heading: "Quando ha senso installarlo",
        paragraphs: [
          "L'ultrafiltrazione è la scelta razionale per chi si serve di pozzi privati o di cisterne con rischio microbiologico documentato: garantisce una barriera fisica continua contro batteri, protozoi e particelle in sospensione, senza chimica e senza consumo energetico significativo. È particolarmente adatta in case di campagna, agriturismi e abitazioni con captazione propria.",
          "Ha senso anche per chi vuole una protezione microbiologica aggiuntiva su acquedotti pubblici considerati borderline o soggetti a interruzioni del servizio (lavori sulla rete, allagamenti, contaminazioni temporanee), come barriera di sicurezza in famiglia con neonati o immunodepressi.",
          "Funziona benissimo come pretrattamento prima di una lampada UV, abbattendo torbidità e particelle che riducono l'efficacia germicida dei raggi UV, o come stadio iniziale di un treno di trattamento più complesso. È anche apprezzata da chi vuole conservare il contenuto minerale dell'acqua e non vuole l'esperienza dell'acqua osmotizzata, percepita come piatta.",
        ],
        bullets: [
          "Pozzi privati e cisterne",
          "Captazioni proprie con dubbi microbiologici",
          "Famiglie con neonati o immunodepressi",
          "Pretrattamento per UV",
          "Chi vuole mantenere il contenuto minerale naturale",
        ],
      },
      {
        heading: "Quando NON conviene",
        paragraphs: [
          "Se l'unico problema dichiarato dall'analisi è chimico (nitrati, durezza, metalli, pesticidi) l'ultrafiltrazione non offre alcun beneficio rilevante: si comprerebbe un sistema sofisticato per non risolvere il problema. La soluzione corretta in quel caso è osmosi inversa o resine selettive.",
          "Anche su acquedotti pubblici cittadini sempre conformi e ben disinfettati il valore aggiunto è marginale: il rischio microbiologico è già abbattuto a monte. L'unica ragione razionale è la protezione contro guasti improvvisi della rete, e va valutata caso per caso.",
          "L'ultrafiltrazione non sostituisce inoltre la disinfezione UV su acque con virus enterici potenzialmente presenti: membrane con taglio troppo largo possono lasciar passare una frazione virale. Per acque di pozzo con elevato rischio sanitario la combinazione UF + UV è la prassi più sicura.",
        ],
      },
      {
        heading: "Costi (acquisto + installazione + manutenzione)",
        paragraphs: [
          "Un impianto domestico di ultrafiltrazione si colloca tra 200 e 600 euro per il modulo principale, con prezzi più alti per le configurazioni multistadio che includono sedimenti, carbone e UF nella stessa centralina. L'installazione idraulica costa 100-200 euro a seconda della complessità.",
          "La manutenzione è semplice e relativamente economica: la membrana UF dura tipicamente 12-24 mesi se la qualità dell'acqua in ingresso è buona e il lavaggio in controcorrente avviene regolarmente, e costa al ricambio 50-150 euro. I pre-filtri sedimenti a monte vanno cambiati ogni 6-12 mesi con un costo di 15-40 euro l'anno. Il consumo idrico di scarto è limitato al lavaggio periodico.",
          "Su un orizzonte di cinque anni la spesa cumulata si attesta tra 500 e 1300 euro, costo competitivo rispetto a soluzioni più complesse e con il vantaggio di una protezione microbiologica continua senza chimica.",
        ],
      },
      {
        heading: "Come verificare che funzioni davvero",
        paragraphs: [
          "L'efficacia di un'ultrafiltrazione si valuta sostanzialmente con analisi microbiologiche: conta batterica totale a 22 °C e 37 °C, ricerca di coliformi totali e di Escherichia coli, ricerca di enterococchi. Un kit casalingo a piastra con terreno cromogeno può dare un'indicazione qualitativa (presenza/assenza), ma per la conformità al D.M. 31/2001 servono analisi di laboratorio accreditato.",
          "Va anche misurata periodicamente la torbidità (ideale sotto 0,1 NTU) e la pressione differenziale sul modulo: un aumento progressivo della differenza di pressione indica intasamento della membrana e necessità di lavaggio in controcorrente o sostituzione.",
          "Una verifica analitica completa pre e post installazione, e poi ripetuta ogni 6-12 mesi durante l'esercizio, è essenziale soprattutto per gli impianti che servono pozzi privati. È anche l'unico modo per dimostrare la conformità sanitaria dell'acqua in caso di richiesta da parte dell'ASL o di ospiti in strutture ricettive.",
        ],
      },
    ],
    faqs: [
      {
        q: "Costa di più un'ultrafiltrazione o continuare a far bollire l'acqua per uso alimentare?",
        a: "La bollitura uccide microrganismi ma è scomoda, consuma energia e non funziona per il consumo abituale di acqua fresca dal rubinetto. Un'ultrafiltrazione costa 100-260 euro l'anno ammortizzata e fornisce acqua microbiologicamente sicura in modo continuo. Per pozzi privati o famiglie con vulnerabili è una soluzione molto più pratica della bollitura.",
      },
      {
        q: "Posso installare l'ultrafiltrazione da solo?",
        a: "Il montaggio idraulico è simile a quello di un sottolavello a carbone, alla portata di un installatore esperto. Per impianti centralizzati su pozzo serve invece intervento professionale, perché vanno gestiti il dimensionamento della portata, i pre-filtri sedimenti e i sistemi di lavaggio in controcorrente. Le installazioni fai-da-te su pozzo spesso falliscono per intasamento prematuro.",
      },
      {
        q: "Quando devo sostituire la membrana?",
        a: "Dipende dalla qualità dell'acqua: in genere ogni 12-24 mesi. Segnali di esaurimento sono il calo costante della portata, l'aumento della pressione differenziale e, soprattutto, il riscontro di contaminazione microbiologica in uscita. Un'analisi annuale è il modo migliore per sapere quando intervenire.",
      },
      {
        q: "Come faccio a sapere se la membrana sta davvero fermando i batteri?",
        a: "Solo con analisi microbiologiche di laboratorio. I kit casalinghi possono dare indicazioni qualitative, ma per la conformità ai parametri del D.M. 31/2001 (coliformi, E. coli, enterococchi, conte batteriche) serve un'analisi accreditata. Su pozzi privati va ripetuta almeno una volta all'anno.",
      },
      {
        q: "L'ultrafiltrazione elimina tutti i contaminanti?",
        a: "No. Trattiene fisicamente batteri, virus (con membrane sotto 0,01 µm), protozoi, particolato e torbidità. Non agisce sui sali disciolti, sui metalli, sui nitrati, sul cloro né sui pesticidi. Per problemi chimici serve un altro trattamento, in genere a valle del modulo UF.",
      },
      {
        q: "Mi serve anche una lampada UV oltre all'ultrafiltrazione?",
        a: "Su acquedotti pubblici l'UF da sola è in genere sufficiente. Su pozzi privati con rischio virale o protozoario alto, la combinazione UF + UV è la prassi raccomandata, perché l'UV inattiva anche eventuali microrganismi sfuggiti per imperfezioni della membrana o per contaminazioni a valle.",
      },
    ],
    relatedTreatments: ["disinfezione-uv", "microfiltrazione-sedimentazione", "osmosi-inversa"],
    ctaContext:
      "Hai installato un impianto di ultrafiltrazione su un pozzo privato e vuoi verificare l'efficacia microbiologica? Un'analisi di laboratorio accreditato sui parametri del D.M. 31/2001 è obbligatoria per acque destinate al consumo umano.",
  },
  {
    slug: "disinfezione-uv",
    itName: "Disinfezione UV",
    shortTitle: "Disinfezione UV per acqua: come funziona e quando serve",
    metaDescription:
      "Lampada UV per acqua potabile: principio germicida, dose UV, parametri inattivati, limiti su contaminanti chimici e verifica analitica della carica microbiologica.",
    searchKeywords: [
      "disinfezione UV acqua",
      "lampada UV acqua potabile",
      "raggi UV acqua pozzo",
      "sterilizzazione UV casa",
      "disinfezione UV vs cloro",
      "lampada UV dose",
      "UV legionella acqua",
    ],
    intro:
      "La disinfezione con raggi ultravioletti è la tecnologia di inattivazione microbica più diffusa al mondo accanto alla clorazione, ma a differenza del cloro non lascia residui chimici, non altera gusto o composizione dell'acqua e non produce sottoprodotti tossici. Una lampada UV a 254 nanometri colpisce il DNA dei microrganismi impedendone la riproduzione: in pochi secondi batteri, virus e protozoi diventano innocui. Vediamo quando questa tecnologia è la scelta corretta, quando va integrata con altri trattamenti e come si verifica che la lampada stia effettivamente facendo il suo lavoro.",
    parametersTreated: [
      "Batteri (Escherichia coli, Salmonella, Legionella, Pseudomonas) inattivati con dose 10-40 mJ/cm²",
      "Virus enterici (rotavirus, norovirus) con dosi 20-40 mJ/cm²",
      "Protozoi (Giardia, Cryptosporidium) con dosi 5-15 mJ/cm²",
      "Muffe, lieviti, alghe",
    ],
    parametersNotTreated: [
      "Sostanze chimiche disciolte (nitrati, metalli, fluoruri, sodio)",
      "Pesticidi e composti organici",
      "Durezza, cloro residuo, sali",
      "Particolato e torbidità (anzi, schermano la luce UV riducendone l'efficacia)",
      "Endotossine batteriche già rilasciate",
      "Eventuali ricontaminazioni a valle della lampada",
    ],
    costRange: "300-800 € apparecchio domestico + 150-300 € installazione idraulica ed elettrica",
    maintenance:
      "Sostituzione della lampada ogni 9-12 mesi (perde intensità anche se sembra accesa), pulizia della camicia di quarzo ogni 6-12 mesi, sostituzione dei pre-filtri sedimenti.",
    sections: [
      {
        heading: "Cos'è e come funziona",
        paragraphs: [
          "La disinfezione UV utilizza la radiazione ultravioletta nello spettro germicida (UV-C) con lunghezza d'onda intorno ai 254 nanometri. Questa radiazione viene assorbita dagli acidi nucleici (DNA e RNA) dei microrganismi formando dimeri di timina che bloccano la replicazione. I batteri, i virus e i protozoi colpiti non muoiono immediatamente, ma diventano incapaci di riprodursi e quindi di causare infezione.",
          "Il parametro di riferimento è la dose UV, espressa in millijoule per centimetro quadrato (mJ/cm²), pari al prodotto tra l'intensità della radiazione e il tempo di esposizione. Le linee guida internazionali raccomandano dose minima di 40 mJ/cm² per il trattamento di acqua potabile, sufficiente a inattivare la quasi totalità dei patogeni microbiologici di interesse. I sistemi residenziali certificati NSF 55 classe A raggiungono questa dose.",
          "L'apparecchio è costituito da una camera in acciaio inox dentro cui scorre l'acqua, attraversata longitudinalmente da una lampada UV racchiusa in una camicia protettiva di quarzo che la separa fisicamente dal flusso. La portata e l'intensità della lampada determinano il tempo di contatto e quindi la dose. Una caratteristica importante è che la disinfezione UV non lascia alcun residuo: l'acqua all'uscita non contiene la lampada e ricontaminazioni a valle non vengono prevenute.",
        ],
      },
      {
        heading: "Quali contaminanti riduce",
        paragraphs: [
          "L'UV è efficacissimo contro un ampio spettro di microrganismi patogeni. Su Escherichia coli e gli altri coliformi le dosi necessarie sono basse (5-10 mJ/cm²) e l'inattivazione è praticamente totale. Su Salmonella, Shigella, Pseudomonas, Legionella e gli altri batteri di interesse sanitario le dosi di riferimento (10-30 mJ/cm²) sono ampiamente comprese nei sistemi correttamente dimensionati.",
          "I protozoi Giardia e Cryptosporidium, che resistono al cloro, sono particolarmente sensibili all'UV con dosi anche più basse di quelle utili per i batteri. È uno dei principali punti di forza della tecnologia: la clorazione non è efficace contro questi patogeni, mentre l'UV li inattiva con dosi modeste.",
          "I virus enterici (rotavirus, norovirus, virus dell'epatite A) richiedono dosi più alte (20-40 mJ/cm²) ma vengono inattivati efficacemente da un sistema correttamente dimensionato. Sui virus a doppia capsula la dose va aumentata: per questo la dose di 40 mJ/cm² è considerata standard di sicurezza generale.",
        ],
      },
      {
        heading: "Quali contaminanti NON elimina",
        paragraphs: [
          "La radiazione UV non ha alcun effetto sulle sostanze chimiche disciolte. Nitrati, fluoruri, metalli pesanti, sali, cloro, pesticidi attraversano la camera UV senza variazioni. Per chi cerca soluzioni a problemi chimici l'UV è inutile.",
          "La torbidità e i solidi sospesi sono il punto debole dell'UV: schermano fisicamente i microrganismi dalla radiazione, riducendone l'efficacia. Un'acqua con torbidità superiore a 1-2 NTU richiede un pretrattamento di filtrazione, altrimenti una frazione dei microrganismi resta nell'ombra di particelle più grandi e sfugge alla disinfezione. Per questo i sistemi UV vanno sempre preceduti da filtri sedimenti e, spesso, da carbone attivo.",
          "Anche le endotossine batteriche, ovvero i frammenti tossici di pareti batteriche già morte, non vengono eliminate: l'UV uccide le cellule ma non rimuove ciò che è già rilasciato. Inoltre, l'UV non crea alcun residuo disinfettante: se a valle della lampada c'è una contaminazione (un raccordo non pulito, un serbatoio di accumulo) i microrganismi possono ricrescere. La disinfezione UV deve quindi essere installata il più vicino possibile al punto di consumo.",
        ],
      },
      {
        heading: "Quando ha senso installarlo",
        paragraphs: [
          "L'UV è la scelta naturale per il trattamento microbiologico delle captazioni private (pozzi, sorgenti, cisterne) dove la clorazione non è praticabile o non desiderata. Garantisce una barriera continua contro patogeni senza alterare gusto e composizione dell'acqua, senza chimica, senza sottoprodotti. È particolarmente apprezzato da chi vuole acqua di pozzo con minerali naturali ma microbiologicamente sicura.",
          "Ha senso anche come stadio finale di trattamento dopo un'osmosi inversa o un'ultrafiltrazione, per garantire l'integrità microbiologica del serbatoio di accumulo e delle tubazioni a valle. È raccomandato in strutture ricettive, agriturismi, B&B serviti da pozzo, dove la responsabilità sanitaria sull'acqua erogata agli ospiti è del gestore.",
          "Trova applicazione anche in contesti specifici come i sistemi di accumulo a serbatoio per il post-trattamento, dove la stagnazione potrebbe consentire crescite batteriche, e nei sistemi di acqua calda sanitaria a rischio Legionella, ma in questi casi va dimensionato da progettisti esperti.",
        ],
        bullets: [
          "Pozzi privati, sorgenti, cisterne",
          "Strutture ricettive e agriturismi serviti da captazione propria",
          "Post-trattamento dopo osmosi inversa o UF",
          "Acque potenzialmente contaminate da batteri o virus",
          "Soluzioni preferite per chi vuole acqua minerale naturale ma sicura",
        ],
      },
      {
        heading: "Quando NON conviene",
        paragraphs: [
          "Sulle reti acquedottistiche pubbliche urbane, già clorate e monitorate, l'aggiunta di una lampada UV è una ridondanza in genere non giustificata: la disinfezione è già garantita dal gestore. L'unica ragione è la diffidenza personale o la presenza di soggetti immunodepressi in famiglia.",
          "L'UV è inutile per chi ha problemi chimici: chi installa una lampada UV sperando di abbattere i nitrati o i metalli sta semplicemente sbagliando tecnologia. Anche per acque torbide o ricche di ferro la lampada da sola non basta: serve un treno di pretrattamenti per portare l'acqua nelle condizioni di trasmittanza richieste.",
          "Infine, su acque con TDS molto basso ma con sostanze organiche elevate, l'UV può non essere sufficiente: l'efficacia germicida cala con l'assorbimento UV dell'acqua. In questi casi serve una combinazione UV + ossidazione avanzata.",
        ],
      },
      {
        heading: "Costi (acquisto + installazione + manutenzione)",
        paragraphs: [
          "Un sistema UV domestico residenziale costa indicativamente 300-800 euro per il solo apparecchio, con prezzi più alti per i modelli con monitoraggio dell'intensità UV in tempo reale e allarmi automatici. L'installazione idraulica ed elettrica costa tipicamente 150-300 euro.",
          "Il consumabile principale è la lampada UV, che ha una vita utile di 9000-12000 ore (circa 12 mesi di funzionamento continuo) e va sostituita anche se all'apparenza continua ad accendersi: l'intensità germicida cala progressivamente, e dopo 12-15 mesi può essere insufficiente. Il costo di una lampada di ricambio è 80-200 euro. La camicia di quarzo va pulita con regolarità (incrostazioni di calcare o di sostanze organiche riducono la trasmissione UV) e sostituita ogni 3-5 anni.",
          "Il consumo elettrico è di poche decine di watt, una spesa di pochi euro l'anno. Il costo annuo a regime è dominato dalla lampada e si aggira tra 100 e 250 euro. Su un orizzonte di cinque anni la spesa cumulata si attesta tra 800 e 2000 euro, costo ragionevole per una barriera microbiologica continua su pozzo privato.",
        ],
      },
      {
        heading: "Come verificare che funzioni davvero",
        paragraphs: [
          "La verifica di efficacia di un sistema UV avviene in due modi complementari. Il primo è il monitoraggio dell'intensità UV: i modelli professionali integrano un sensore che misura in tempo reale l'irraggiamento e segnala quando scende sotto la soglia minima. Sui modelli base, l'utente vede solo se la lampada è accesa, non se sta erogando dose sufficiente: per questo il rispetto della cadenza annuale di sostituzione è critico.",
          "Il secondo metodo, indispensabile, è l'analisi microbiologica all'uscita: conta batterica a 22 e 37 °C, coliformi totali, Escherichia coli, enterococchi. È l'unico modo per dimostrare che il sistema sta erogando acqua conforme ai limiti del D.M. 31/2001. Va eseguita all'avviamento (per validare il dimensionamento), dopo la prima sostituzione della lampada e poi con cadenza almeno annuale.",
          "Su pozzi privati che servono strutture ricettive è obbligatorio per legge tenere un registro analitico delle acque, e l'analisi accreditata è l'unico documento valido in caso di controlli ASL. Anche per uso familiare, una verifica annuale è una pratica di buon senso che, per il costo modesto, dà sicurezza concreta sulla salute della famiglia.",
        ],
      },
    ],
    faqs: [
      {
        q: "Costa di più un sistema UV o continuare a clorare l'acqua del pozzo?",
        a: "La clorazione di un pozzo richiede un dosatore proporzionale e prodotti chimici da rabboccare, oltre a un eventuale post-trattamento per togliere il cloro residuo dal gusto. L'UV ha investimento iniziale più alto ma manutenzione semplice (una lampada all'anno), nessun residuo chimico e nessuna alterazione del sapore. Sul lungo periodo i costi sono comparabili e l'UV è in genere più gradito.",
      },
      {
        q: "Posso installare la lampada UV da solo?",
        a: "L'installazione richiede competenze idrauliche (taglio della tubazione di alimentazione, raccordi a tenuta) ed elettriche (presa protetta, eventuale differenziale dedicato). Per impianti su pozzo serve anche dimensionare correttamente i pre-filtri sedimenti e il carbone, altrimenti la lampada si sporca rapidamente. È un intervento che conviene affidare a un installatore esperto.",
      },
      {
        q: "Quando devo sostituire la lampada UV?",
        a: "Ogni 9-12 mesi di funzionamento continuo, anche se all'apparenza continua ad accendersi. L'intensità germicida cala progressivamente per invecchiamento del catodo e perde efficacia, ma a occhio nudo non si vede. Tenere un calendario di sostituzione è critico per la sicurezza microbiologica.",
      },
      {
        q: "Come verifico che la lampada UV stia davvero disinfettando?",
        a: "L'unico modo affidabile è l'analisi microbiologica di laboratorio accreditato all'uscita del sistema. Va fatta all'avviamento, dopo ogni sostituzione di lampada, e poi con cadenza almeno annuale. Per strutture ricettive è obbligatoria per legge tenere un registro di queste analisi.",
      },
      {
        q: "La disinfezione UV elimina anche nitrati e metalli pesanti?",
        a: "No, assolutamente. L'UV agisce solo sui microrganismi (batteri, virus, protozoi) inattivandone il DNA. Sulle sostanze chimiche disciolte non ha alcun effetto. Per nitrati, metalli, fluoruri o pesticidi serve un altro trattamento dedicato (osmosi inversa, resine selettive, carbone attivo).",
      },
      {
        q: "Devo preoccuparmi della Legionella nell'acqua calda di casa?",
        a: "La Legionella si sviluppa nelle reti dell'acqua calda sanitaria quando la temperatura è compresa tra 25 e 50 °C. Il modo più semplice di prevenirla è mantenere il boiler sopra 60 °C. I sistemi UV possono essere installati sul ricircolo dell'acqua calda in contesti complessi (strutture sanitarie, alberghi) ma per uso residenziale standard la gestione termica è in genere sufficiente.",
      },
    ],
    relatedTreatments: ["ultrafiltrazione", "carbone-attivo", "osmosi-inversa"],
    ctaContext:
      "Hai installato una lampada UV sul tuo pozzo e vuoi verificare la conformità microbiologica al D.M. 31/2001? Un'analisi di laboratorio accreditato è l'unico documento valido per dimostrare l'efficacia del trattamento.",
  },
  {
    slug: "filtro-caraffa",
    itName: "Filtro caraffa",
    shortTitle: "Filtro caraffa: serve davvero? Cosa toglie e cosa no",
    metaDescription:
      "Filtro a caraffa: come funziona, cosa rimuove davvero (cloro, durezza temporanea, metalli in tracce), limiti reali e quando conviene rispetto a sottolavello o osmosi.",
    searchKeywords: [
      "filtro caraffa serve",
      "filtro caraffa cosa toglie",
      "caraffa filtrante acqua",
      "filtro caraffa vs sottolavello",
      "cartuccia caraffa quanto dura",
      "caraffa filtrante recensioni oneste",
      "filtro caraffa nitrati",
    ],
    intro:
      "Il filtro a caraffa è il sistema di trattamento dell'acqua più venduto in Italia, percepito come scelta naturale ed economica per chi vuole un'acqua migliore senza opere idrauliche. La tecnologia è semplice: l'acqua attraversa per gravità una cartuccia che combina carbone attivo e una resina a scambio ionico. È un buon compromesso entry-level per il gusto, ma è anche una delle tecnologie più sopravvalutate dal marketing. In questa guida vediamo cosa fa davvero, cosa non fa nonostante le promesse, e quando vale la pena passare a una soluzione più seria.",
    parametersTreated: [
      "Cloro libero residuo (riduzione 70-95 per cento)",
      "Durezza temporanea (riduzione apprezzabile finché la resina è fresca)",
      "Tracce di alcuni metalli (rame, piombo in misura limitata)",
      "Sostanze che causano cattivo odore o sapore",
    ],
    parametersNotTreated: [
      "Nitrati (l'efficacia dichiarata è trascurabile o nulla)",
      "Fluoruri, arsenico",
      "PFAS",
      "Pesticidi (riduzione limitata per i carboni di piccola taglia)",
      "Microbiologia (anzi, le cartucce scadute possono rilasciare batteri)",
      "Durezza permanente totale (effetto temporaneo, non strutturale)",
    ],
    costRange: "20-80 € caraffa + cartucce ricorrenti (3-8 € l'una, ogni 4-6 settimane)",
    maintenance:
      "Sostituzione della cartuccia ogni 100-150 litri o massimo 4-6 settimane (anche se ne resta capacità adsorbente), lavaggio settimanale della caraffa con acqua e bicarbonato.",
    sections: [
      {
        heading: "Cos'è e come funziona",
        paragraphs: [
          "Una caraffa filtrante è composta da un serbatoio superiore in cui si versa l'acqua del rubinetto e un serbatoio inferiore di raccolta dell'acqua filtrata. Tra i due si trova la cartuccia, che l'acqua attraversa per gravità in un tempo dell'ordine di 3-5 minuti per un litro. La cartuccia contiene tipicamente uno strato di carbone attivo (tritato o in blocchetti) e una resina a scambio ionico (cationica acida forte) impregnata con sodio o protoni.",
          "Il carbone attivo agisce per adsorbimento, trattenendo cloro libero, sottoprodotti della disinfezione, alcune sostanze organiche e gli agenti di cattivo odore. La resina a scambio ionico scambia gli ioni calcio e magnesio dell'acqua dura con altri ioni: nella maggior parte delle cartucce comuni si scambia con protoni (H+), riducendo apparentemente la durezza ma producendo anche una leggera acidificazione iniziale. Le cartucce più moderne combinano anche granuli minerali per neutralizzare l'acidità o agenti batteriostatici come argento ionico.",
          "Il processo non è un trattamento serio nel senso tecnico del termine: il tempo di contatto è breve, la massa adsorbente è piccola (in genere 100-200 grammi), e la cinetica chimica è lenta. Funziona come miglioramento qualitativo soft, non come barriera contro contaminazioni significative.",
        ],
      },
      {
        heading: "Quali contaminanti riduce",
        paragraphs: [
          "Il bersaglio principale e onesto del filtro a caraffa è il cloro libero residuo: i carboni attivi presenti, anche in piccola quantità, sono efficaci nel ridurlo del 70-95 per cento nelle prime decine di litri filtrati. Si tratta del beneficio più tangibile e meglio documentato: l'acqua sa di meno di cloro, è più piacevole al palato e più idonea per tè e caffè.",
          "La resina a scambio ionico riduce in modo apprezzabile la durezza temporanea (quella legata a bicarbonati di calcio e magnesio) finché è fresca. L'effetto si attenua progressivamente man mano che la resina si satura, fino a diventare trascurabile dopo i litri dichiarati. Va inoltre osservato che la riduzione della durezza non è strutturale: l'acqua filtrata in caraffa non protegge le tubazioni di casa né gli elettrodomestici, perché l'effetto è confinato al volume nella caraffa.",
          "Su alcuni metalli in tracce (rame derivante da tubature obsolete, piombo nelle vecchie reti) le cartucce di buona qualità mostrano riduzioni modeste ma non trascurabili. Le prestazioni dichiarate variano molto in base al modello e devono essere lette nelle schede tecniche, non nei claim pubblicitari.",
        ],
      },
      {
        heading: "Quali contaminanti NON elimina",
        paragraphs: [
          "Il filtro a caraffa è inadeguato per qualsiasi problema chimico serio. Sui nitrati l'efficacia dichiarata è in genere nulla o trascurabile: non c'è massa di resina selettiva sufficiente. Su arsenico, fluoruri, PFAS le prestazioni sono insignificanti. Chi pensa di proteggere la propria famiglia dai nitrati con una caraffa filtrante sta semplicemente acquistando una falsa sicurezza.",
          "Sui pesticidi e sui sottoprodotti della clorazione il piccolo carbone della cartuccia satura rapidamente, e dopo poche decine di litri non ha più capacità di adsorbire. Le prestazioni dichiarate nei test sono in genere relative ai primi litri di funzionamento, non al ciclo medio.",
          "Sul piano microbiologico la caraffa non è una barriera. Anzi, l'ambiente umido e la materia organica trattenuta favoriscono la crescita batterica: dopo qualche giorno dalla messa in funzione, una cartuccia mal manutenuta può rilasciare in uscita più batteri di quanti ne abbia in ingresso. Per questo molte cartucce contengono argento ionico, ma il margine di sicurezza è limitato, ed è critico cambiare la cartuccia entro la scadenza dichiarata.",
        ],
      },
      {
        heading: "Quando ha senso installarlo",
        paragraphs: [
          "La caraffa è una scelta sensata se il solo problema reale è il gusto di cloro e si vuole evitare un investimento maggiore. È perfetta per single, coppie senza figli, seconde case dove il consumo è limitato e il problema è quasi esclusivamente organolettico. In quel contesto il rapporto qualità/prezzo è competitivo.",
          "Ha senso anche come scelta entry-level per chi vuole iniziare a migliorare l'acqua di casa senza affrontare opere idrauliche, prima di valutare se passare a un sottolavello o a un'osmosi inversa. È utile per uso ridotto come acqua per tè, caffè e bevande, mentre per il consumo generale i costi cumulati delle cartucce salgono rapidamente.",
          "Una volta verificata con un'analisi che l'acqua dell'acquedotto è conforme su tutti i parametri rilevanti e che l'unico problema è il sapore, la caraffa è economicamente e tecnicamente coerente.",
        ],
        bullets: [
          "Consumo limitato (single, coppie)",
          "Problema solo organolettico (cloro)",
          "Scelta entry-level a basso investimento",
          "Acque già conformi salvo gusto",
          "Uso specifico per tè, caffè e bevande",
        ],
      },
      {
        heading: "Quando NON conviene",
        paragraphs: [
          "La caraffa è inadeguata per qualsiasi contaminazione chimica seria. Per nitrati, fluoruri, arsenico, PFAS, metalli pesanti elevati l'acquisto di una caraffa filtrante è un autoinganno: si paga una soluzione che non risolve il problema dichiarato. Per quei contesti servono osmosi inversa o resine selettive.",
          "Su grandi famiglie con consumi alti (oltre 5-6 litri al giorno) il costo cumulato delle cartucce supera rapidamente quello di un sottolavello a carbone: si finisce per spendere di più per un risultato qualitativamente inferiore. In quei casi l'investimento iniziale in un sottolavello è ammortizzato in pochi mesi.",
          "La caraffa è anche sconsigliata per chi non rispetta la cadenza di sostituzione delle cartucce: la dimenticanza di un mese può trasformare la cartuccia in un substrato batterico. Persone con scarsa propensione alla manutenzione regolare dovrebbero preferire un sottolavello con cartucce di durata semestrale.",
        ],
      },
      {
        heading: "Costi (acquisto + installazione + manutenzione)",
        paragraphs: [
          "Le caraffe si trovano a 20-80 euro a seconda del marchio e del volume del serbatoio. Non c'è installazione idraulica e non servono attacchi: si può iniziare a usarla in pochi minuti. È il vantaggio principale della tecnologia.",
          "Le cartucce di ricambio costano 3-8 euro l'una a seconda del modello, e durano in genere 100-150 litri, ovvero 4-6 settimane in una famiglia di tre o quattro persone. Il costo annuo di consumabili si colloca tra 40 e 110 euro, dominante rispetto al costo della caraffa stessa.",
          "Per consumi alti (oltre 2-3 litri al giorno di sola acqua filtrata bevuta) il costo per litro è competitivo con l'acqua minerale ma ben più alto rispetto a un sottolavello a carbone, che a parità di prestazione sul gusto costa circa la metà al litro su orizzonte pluriennale.",
        ],
      },
      {
        heading: "Come verificare che funzioni davvero",
        paragraphs: [
          "Il primo controllo è soggettivo: il gusto del cloro. Se l'acqua filtrata torna a sapere di cloro come prima, la cartuccia è esausta. È un segnale empirico ma utile su questo specifico parametro. Per misurazioni un po' più oggettive esistono kit colorimetrici economici per cloro libero.",
          "Per i parametri chimici che la caraffa dichiara di ridurre (alcuni metalli, durezza temporanea) servono analisi di laboratorio sui campioni prima e dopo filtrazione. È utile per smentire o confermare i claim del produttore, specie su acque potenzialmente problematiche. In molti casi i risultati confermano che la caraffa non agisce in modo apprezzabile sui contaminanti chimici critici.",
          "Su famiglie con vulnerabili (neonati, anziani, immunodepressi) è raccomandabile far analizzare anche la microbiologia all'uscita della caraffa: un'analisi periodica della carica batterica totale a 22 e 37 °C dà la misura della qualità della manutenzione e dello stato della cartuccia. In presenza di valori anomali la cartuccia va sostituita immediatamente.",
        ],
      },
    ],
    faqs: [
      {
        q: "Costa di più una caraffa filtrante o l'acqua in bottiglia?",
        a: "Per consumi medi (4-6 litri al giorno) la caraffa filtrante costa 40-110 euro l'anno in cartucce, mentre l'acqua in bottiglia costa 200-400 euro. Il risparmio è reale, ma il livello di trattamento è molto inferiore rispetto a un sottolavello. Se il problema è solo il cloro, la caraffa è ragionevole. Se sono nitrati o metalli, è denaro sprecato.",
      },
      {
        q: "Posso installare la caraffa filtrante da solo?",
        a: "Non c'è installazione: si compra, si lava, si inserisce la cartuccia e si inizia a usarla. È il vantaggio principale della tecnologia. L'unica operazione critica è il rispetto del 'condizionamento' iniziale della cartuccia (i primi 1-2 litri vanno scartati per eliminare polveri di carbone).",
      },
      {
        q: "Quando devo cambiare la cartuccia?",
        a: "In genere ogni 100-150 litri trattati, ovvero ogni 4-6 settimane per una famiglia di tre o quattro persone. Le caraffe moderne hanno un indicatore elettronico o cartaceo. Anche se la cartuccia sembra ancora funzionare, non va mai usata oltre le 6 settimane: il rischio batteriologico cresce in modo importante.",
      },
      {
        q: "La caraffa filtrante elimina nitrati e metalli pesanti?",
        a: "No, non in misura significativa. Il bersaglio onesto è il cloro e in piccola parte la durezza temporanea. Per nitrati, arsenico, fluoruri o PFAS la caraffa non è la tecnologia adatta: serve un'osmosi inversa o una resina selettiva. Chi compra una caraffa pensando di proteggersi dai nitrati sta acquistando una falsa sicurezza.",
      },
      {
        q: "Come verifico che la caraffa stia funzionando davvero?",
        a: "Sul cloro si vede e si sente: il gusto cambia. Sui parametri chimici critici (metalli, nitrati) servono analisi di laboratorio sui campioni prima e dopo, che spesso smentiscono i claim pubblicitari del produttore. Su famiglie con vulnerabili è anche utile un controllo microbiologico annuale sull'acqua filtrata.",
      },
      {
        q: "La caraffa è meglio di un sottolavello a carbone?",
        a: "No, è una soluzione più semplice e meno costosa all'acquisto, ma il sottolavello ha molta più massa adsorbente, tempi di contatto migliori, cartucce di durata semestrale e costi per litro inferiori per famiglie con consumi medi. La caraffa è una scelta entry-level, il sottolavello è una soluzione strutturale.",
      },
    ],
    relatedTreatments: ["carbone-attivo", "osmosi-inversa", "resine-scambio-ionico"],
    ctaContext:
      "Hai una caraffa filtrante e vuoi sapere se l'acqua di rubinetto della tua zona ha problemi che la caraffa non può risolvere? Un'analisi di laboratorio accreditato sui parametri reali è il punto di partenza per qualsiasi decisione razionale.",
  },
  {
    slug: "resine-scambio-ionico",
    itName: "Resine a scambio ionico selettive",
    shortTitle: "Resine selettive per nitrati e arsenico: come funzionano",
    metaDescription:
      "Resine a scambio ionico selettive per acqua potabile: principi di funzionamento, contaminanti rimossi (nitrati, arsenico, fluoruri), costi e verifica analitica.",
    searchKeywords: [
      "resine a scambio ionico",
      "resine selettive nitrati",
      "filtro nitrati casa",
      "filtro arsenico acqua",
      "resina anionica nitrati",
      "filtro fluoruri acqua",
      "abbattimento nitrati domestico",
    ],
    intro:
      "Le resine a scambio ionico selettive sono la tecnologia più mirata per abbattere un singolo parametro problematico nell'acqua potabile, senza ricorrere al trattamento più costoso e dispendioso dell'osmosi inversa. Esistono resine selettive per nitrati, per arsenico, per fluoruri, per metalli pesanti specifici: ognuna progettata per catturare in modo preferenziale uno o pochi contaminanti, lasciando inalterato il resto. Vediamo quando questa scelta tecnicamente raffinata ha senso e quando invece, di fronte a contaminazioni multiple, conviene tornare a una soluzione più completa.",
    parametersTreated: [
      "Nitrati (resine anioniche selettive, riduzione 85-95 per cento)",
      "Arsenico (resine specifiche per As(V), riduzione 90-98 per cento)",
      "Fluoruri (resine all'allumina attivata o specifiche, riduzione 80-95 per cento)",
      "Specifici metalli pesanti (piombo, cromo) con resine dedicate",
    ],
    parametersNotTreated: [
      "Parametri diversi da quello per cui la resina è dimensionata",
      "Cloro residuo (anzi, danneggia molte resine)",
      "Sostanze organiche, pesticidi, PFAS",
      "Durezza (a meno di resine cationiche da addolcimento)",
      "Microbiologia",
    ],
    costRange: "500-1500 € impianto sottolavello selettivo + 150-400 € installazione",
    maintenance:
      "Rigenerazione periodica con salamoia (per resine rigenerabili) o sostituzione della carica esausta ogni 6-24 mesi a seconda della carica idraulica e della concentrazione del contaminante.",
    sections: [
      {
        heading: "Cos'è e come funziona",
        paragraphs: [
          "Le resine a scambio ionico sono polimeri reticolati funzionalizzati con gruppi carichi positivamente (resine anioniche) o negativamente (resine cationiche). Ogni gruppo funzionale può ospitare un controione mobile che, in fase di esercizio, viene scambiato con ioni presenti nella soluzione acquosa che attraversa il letto.",
          "La selettività di una resina dipende dalla natura chimica dei gruppi funzionali e dal modo in cui i diversi ioni competono per i siti di scambio. Una resina anionica forte standard scambierebbe preferenzialmente solfati e cloruri rispetto ai nitrati. Le resine selettive per nitrati hanno invece gruppi funzionali progettati per legarli con maggiore affinità: anche in presenza di solfati abbondanti, i nitrati vengono catturati. Le resine per arsenico sfruttano la formazione di complessi specifici con la forma pentavalente As(V) (la trivalente As(III) deve essere prima ossidata).",
          "L'impianto domestico tipico è un sottolavello con una bombola di resina dimensionata sulla concentrazione del contaminante e sul volume di acqua giornaliera. A monte si trovano un filtro sedimenti e, spesso, un carbone attivo per togliere il cloro residuo (che danneggia molte resine). La rigenerazione, quando prevista, avviene con salamoia di sale o con soluzioni dedicate.",
        ],
      },
      {
        heading: "Quali contaminanti riduce",
        paragraphs: [
          "Le resine selettive per nitrati abbattono il parametro tipicamente dell'85-95 per cento, riportando concentrazioni di partenza tra 70 e 100 mg/L (sopra il limite di legge di 50 mg/L) a valori molto inferiori a soglia. È una tecnologia molto pertinente per zone agricole italiane dove i nitrati sono il problema principale di una falda altrimenti buona.",
          "Le resine per arsenico, basate su matrici di idrossidi di ferro o materiali ibridi, catturano efficacemente As(V) con riduzioni del 90-98 per cento, riportando concentrazioni di 20-50 µg/L (sopra il limite di 10 µg/L) a valori conformi. Sono usate in particolare nel Lazio, in Toscana e in alcune zone vulcaniche del centro-sud. Per essere efficaci richiedono un controllo sul pH e talvolta un pre-ossidazione dell'arsenico trivalente.",
          "Le resine per fluoruri, spesso in allumina attivata, abbattono il parametro dell'80-95 per cento. Sono più di nicchia in Italia, dove i fluoruri elevati sono meno diffusi, ma utili in alcune captazioni con caratteristiche geologiche specifiche. Esistono inoltre resine dedicate al piombo e ad altri metalli per situazioni particolari di reti vecchie o industriali.",
        ],
      },
      {
        heading: "Quali contaminanti NON elimina",
        paragraphs: [
          "Il limite strutturale di queste resine è la loro stessa specificità. Una resina selettiva per nitrati non riduce l'arsenico né i pesticidi né il cloro né i metalli. Una resina per arsenico non riduce i nitrati. Se la propria acqua ha più di un problema chimico, il vantaggio della selettività si trasforma in un limite: serviranno più stadi e i costi possono superare quelli di una semplice osmosi inversa.",
          "Le resine non agiscono sulla microbiologia. Anzi, la carica trattenuta su una resina esausta può diventare ambiente di crescita batterica, soprattutto se l'esercizio è discontinuo o la rigenerazione è trascurata. È raccomandata una verifica microbiologica periodica e, in alcuni casi, un post-trattamento UV.",
          "Anche sul fronte del bilancio chimico ci sono attenzioni: la rimozione di un anione comporta tipicamente il rilascio di un altro ione (cloruro o bicarbonato) per mantenere l'elettroneutralità. L'acqua in uscita ha una composizione leggermente diversa da quella in ingresso, ma di norma entro limiti di potabilità.",
        ],
      },
      {
        heading: "Quando ha senso installarlo",
        paragraphs: [
          "Le resine selettive sono la scelta corretta quando l'analisi dell'acqua mostra un singolo parametro fuori norma o vicino al limite, mentre il resto della composizione è buono. Tipico caso: nitrati a 60-80 mg/L in una zona agricola con acqua altrimenti conforme. Installare un'osmosi inversa per togliere solo i nitrati sarebbe sovradimensionato e demineralizzerebbe inutilmente l'acqua; una resina selettiva fa il lavoro in modo mirato.",
          "Lo stesso vale per l'arsenico nelle zone vulcaniche del Lazio e della Toscana: una resina dedicata mantiene l'acqua nella sua composizione naturale di calcio, magnesio e bicarbonati, riducendo solo il contaminante problematico. Per uso familiare con consumo standard è una soluzione razionale, sostenibile e con un consumo idrico molto inferiore all'osmosi inversa.",
          "Sono usate anche in contesti professionali (zootecnia, agriturismi, piccole comunità) dove serve un'acqua a norma su un parametro specifico senza modificare il resto.",
        ],
        bullets: [
          "Nitrati alti in zone agricole con resto della composizione buono",
          "Arsenico geologico (zone vulcaniche)",
          "Fluoruri specifici",
          "Captazioni con un solo parametro fuori norma",
          "Acquedotti con caratteristiche locali particolari",
        ],
      },
      {
        heading: "Quando NON conviene",
        paragraphs: [
          "Se l'analisi mostra più parametri fuori norma o vicini al limite (nitrati alti, durezza elevata, qualche metallo, sospetti su pesticidi), installare una resina selettiva risolve solo una parte del problema. In questi casi un'osmosi inversa ben dimensionata copre tutti i parametri con un investimento comparabile e una manutenzione più semplice.",
          "Le resine selettive non sono nemmeno la scelta giusta se non si è disposti a programmare le rigenerazioni o le sostituzioni regolari: una resina esaurita lascia passare il contaminante come se non ci fosse il sistema, senza segnali esterni evidenti. Servono analisi periodiche e disciplina manutentiva.",
          "Va inoltre considerato il costo di smaltimento della resina esausta o della salamoia di rigenerazione: nel caso di arsenico la resina concentra il contaminante e va smaltita come rifiuto speciale, con costi e procedure non trascurabili.",
        ],
      },
      {
        heading: "Costi (acquisto + installazione + manutenzione)",
        paragraphs: [
          "Gli impianti sottolavello con resina selettiva costano indicativamente 500-1500 euro, con prezzi più alti per le resine all'arsenico (che richiedono materiali dedicati e dimensionamenti accurati). L'installazione costa 150-400 euro.",
          "La manutenzione varia molto in base alla tecnologia. Le resine rigenerabili con salamoia (tipiche delle resine per nitrati) hanno consumi di sale e acqua simili a un addolcitore, oltre alla manodopera per la rigenerazione. Le resine non rigenerabili (tipiche delle resine per arsenico) vanno sostituite ogni 6-24 mesi a seconda del carico, con costi unitari di 100-400 euro a carica.",
          "Su un orizzonte di cinque anni la spesa cumulata si attesta tra 1000 e 3500 euro, paragonabile a un'osmosi inversa di buona qualità. La differenza è qualitativa: la resina selettiva mantiene il contenuto minerale naturale, l'osmosi lo abbassa drasticamente.",
        ],
      },
      {
        heading: "Come verificare che funzioni davvero",
        paragraphs: [
          "La verifica di una resina selettiva è ineludibilmente analitica. Non esistono kit casalinghi affidabili per misurare nitrati a basse concentrazioni o arsenico in tracce: servono analisi di laboratorio sui campioni in ingresso e in uscita, sul parametro specifico per cui la resina è installata.",
          "L'analisi va fatta all'avviamento per validare il dimensionamento, dopo poche settimane per confermare la stabilità del trattamento, e poi con cadenza ravvicinata (semestrale o quadrimestrale) durante l'esercizio, perché una resina può esaurirsi senza segnali esterni evidenti. È critico capire il punto di breakthrough e programmare la sostituzione o la rigenerazione prima che il contaminante riappaia nell'acqua erogata.",
          "Per impianti su pozzi privati e per strutture con responsabilità sanitaria pubblica (agriturismi, B&B, refettori) le analisi devono essere svolte da laboratori accreditati e tenute a registro. È anche l'unico documento utile in caso di controlli ASL o di contestazioni con l'installatore.",
        ],
      },
    ],
    faqs: [
      {
        q: "Costa di più una resina selettiva o un'osmosi inversa?",
        a: "L'investimento iniziale è comparabile (500-1500 euro per resine selettive di buona qualità, 250-900 per un'osmosi più 100-300 di installazione). I costi pluriennali dipendono dal contaminante: per arsenico le resine non rigenerabili possono costare di più dell'osmosi nel medio periodo. Per nitrati le resine rigenerabili sono in genere più economiche.",
      },
      {
        q: "Posso installare una resina selettiva da solo?",
        a: "L'installazione idraulica è simile a quella di altri sottolavello, ma il dimensionamento corretto richiede competenza: una resina sottodimensionata si esaurisce in poche settimane, una sovradimensionata costa inutilmente. Serve la concentrazione esatta del contaminante (analisi recente) e il consumo idrico giornaliero. È un intervento da affidare a tecnico esperto.",
      },
      {
        q: "Quando devo cambiare o rigenerare la resina?",
        a: "Per resine rigenerabili con salamoia, la rigenerazione è volumetrica o cronometrica (simile all'addolcitore). Per resine non rigenerabili, la sostituzione avviene ogni 6-24 mesi a seconda del carico. L'unico modo per non sbagliare è programmare analisi periodiche del contaminante in uscita e intervenire prima del punto di breakthrough.",
      },
      {
        q: "Come verifico che la resina stia ancora abbattendo il contaminante?",
        a: "Solo con analisi di laboratorio accreditato sul parametro specifico (nitrati, arsenico, fluoruri). Non esistono kit casalinghi affidabili sulle concentrazioni in tracce di questi parametri. Vanno fatte all'avviamento, dopo qualche settimana e poi ogni 4-6 mesi durante l'esercizio.",
      },
      {
        q: "La resina selettiva elimina tutti i contaminanti?",
        a: "No, solo quello per cui è dimensionata. Una resina per nitrati non riduce arsenico, metalli, cloro, pesticidi o microbiologia. Per contaminazioni multiple serve un'osmosi inversa o un treno di trattamento, non una singola resina selettiva.",
      },
      {
        q: "Le resine selettive sono sicure?",
        a: "Sì se di qualità certificata (NSF 61 sui materiali a contatto con acqua potabile) e correttamente installate. Vanno fatte attenzioni allo smaltimento della carica esausta (per arsenico è rifiuto speciale) e alla manutenzione, perché una resina trascurata può rilasciare microbiologia.",
      },
    ],
    relatedTreatments: ["osmosi-inversa", "addolcitore", "carbone-attivo"],
    ctaContext:
      "Hai installato una resina selettiva per nitrati o arsenico e vuoi verificare l'abbattimento effettivo del parametro? Un'analisi di laboratorio accreditato sui campioni pre e post trattamento è l'unico modo per dimostrare il funzionamento.",
  },
  {
    slug: "microfiltrazione-sedimentazione",
    itName: "Microfiltrazione e sedimentazione",
    shortTitle: "Microfiltrazione e filtri sedimenti: pretrattamento essenziale",
    metaDescription:
      "Filtri a sedimenti e microfiltrazione: rimozione di sabbia, particolato, ferro e manganese ossidati, ruolo di pretrattamento, limiti su contaminanti disciolti.",
    searchKeywords: [
      "filtro sedimenti acqua",
      "microfiltrazione acqua",
      "filtro sabbia acqua",
      "filtro ferro manganese",
      "filtro a maglia metallica acqua",
      "filtro pre-trattamento sottolavello",
      "filtro torbidità acqua",
    ],
    intro:
      "La microfiltrazione e la sedimentazione sono i trattamenti più semplici e meno glamour del mondo dell'acqua, ma sono anche tra i più indispensabili. Il loro compito è rimuovere ciò che è fisicamente sospeso: sabbia, ruggine, particolato, fanghi, ferro e manganese ossidati. Non agiscono su nulla che sia disciolto, ma proteggono tutti gli altri trattamenti a valle (carbone, resine, osmosi, UV) dall'intasamento prematuro, e migliorano la qualità organolettica e visiva dell'acqua. Sono pretrattamento essenziale di praticamente ogni impianto domestico serio.",
    parametersTreated: [
      "Sabbia, sedimenti, particolato grossolano (filtri a 50-100 µm)",
      "Particolato fine (filtri a 5-25 µm)",
      "Ferro e manganese ossidati e precipitati",
      "Ruggine e scaglie da tubature obsolete",
      "Torbidità visibile",
    ],
    parametersNotTreated: [
      "Tutti i contaminanti disciolti (sali, metalli ionici, nitrati, fluoruri, sodio)",
      "Cloro residuo",
      "Sostanze organiche disciolte e pesticidi",
      "Batteri (alcuni filtri da 0,5-1 µm trattengono parte dei batteri ma non sterilizzano)",
      "Virus",
      "Durezza, PFAS",
    ],
    costRange:
      "50-200 € filtro sedimenti standard + 100-300 € per filtrazione multistadio centralizzata",
    maintenance:
      "Lavaggio o sostituzione della cartuccia ogni 3-6 mesi (filtri sedimenti standard), pulizia del filtro autopulente ogni 1-3 mesi, sostituzione della cartuccia di microfiltrazione fine ogni 6 mesi.",
    sections: [
      {
        heading: "Cos'è e come funziona",
        paragraphs: [
          "La filtrazione di sedimenti e la microfiltrazione si basano su un principio puramente meccanico: l'acqua attraversa un mezzo poroso che ferma per esclusione dimensionale tutto ciò che è più grande dei pori, mentre lascia passare il resto. È la più antica tecnica di trattamento dell'acqua, applicata oggi con materiali e geometrie molto raffinate ma con il principio identico.",
          "I filtri si distinguono per il taglio di filtrazione, ovvero per la dimensione minima delle particelle trattenute. I filtri a sedimenti standard hanno tagli di 25-100 micrometri e trattengono sabbia e particolato visibile. La microfiltrazione propriamente detta lavora tra 0,1 e 10 micrometri, ed entra nel territorio in cui iniziano ad essere trattenuti anche parte dei batteri (di solito sotto 0,5 µm), pur senza sterilizzare.",
          "I formati più comuni sono cartucce avvolte in polipropilene, cartucce plissettate, filtri a sacco, filtri a rete metallica autopulenti (idrocicloni o a flusso). I filtri autopulenti hanno una valvola di scarico che permette di espellere i sedimenti senza smontare il modulo, riducendo notevolmente la manutenzione. Sono adatti a punto-rete (subito dopo il contatore) e proteggono l'intera distribuzione domestica.",
        ],
      },
      {
        heading: "Quali contaminanti riduce",
        paragraphs: [
          "Il bersaglio principale è il particolato visibile e quello fine: sabbia, fanghi, ruggine, scaglie da tubature obsolete, residui da lavori sulla rete acquedottistica. Un filtro da 50-100 µm risolve la quasi totalità dei sedimenti grossolani che fanno apparire l'acqua torbida e che si accumulano sui rompigetto dei rubinetti e nei filtri delle lavatrici.",
          "Un secondo stadio da 5-25 µm trattiene il particolato fine, riduce sensibilmente la torbidità e rimuove ferro e manganese precipitati. Nelle acque di pozzo con ferro in forma ferrosa (Fe2+ disciolto), il ferro si ossida a contatto con l'aria diventando Fe3+ e precipitando come ossido rossastro: il filtro sedimenti lo trattiene efficacemente. Lo stesso vale per il manganese ossidato.",
          "Un terzo stadio di microfiltrazione fine (1-5 µm) protegge eventuali stadi successivi (carbone, osmosi, UV) e raggiunge una bassa torbidità (<1 NTU), utile per l'efficacia dei trattamenti a valle.",
        ],
      },
      {
        heading: "Quali contaminanti NON elimina",
        paragraphs: [
          "Tutto ciò che è disciolto attraversa il filtro senza modificazione. Nitrati, fluoruri, sodio, sali, durezza, cloro, pesticidi, PFAS, metalli pesanti in forma ionica (e quindi la quasi totalità dei metalli pesanti in acque acquedottistiche) non vengono toccati. Chi compra un filtro a sedimenti aspettandosi un trattamento sanitario si sbaglia.",
          "Sul fronte microbiologico, i filtri a sedimenti standard non sono una barriera. I filtri di microfiltrazione fine (sotto 1 µm) trattengono parte dei batteri ma non sono garantiti come barriera microbiologica: i virus passano sicuramente e batteri più piccoli o flessibili possono attraversare i pori. Per la disinfezione servono UV o ultrafiltrazione con tagli sotto 0,1 µm.",
          "Il ferro e il manganese in forma disciolta (non ancora ossidati) non vengono trattenuti: per quelle situazioni serve un'ossidazione preventiva (con clorazione, aria, o specifici reagenti) che porti il ferro a precipitare prima del filtro. Senza ossidazione, il filtro a sedimenti su acqua ferrosa di pozzo non risolve.",
        ],
      },
      {
        heading: "Quando ha senso installarlo",
        paragraphs: [
          "Il filtro a sedimenti centralizzato, montato subito dopo il contatore, è raccomandato in tutte le abitazioni: protegge rubinetterie, lavatrici, lavastoviglie, boiler e caldaie da sabbia e ruggine, in particolare dopo lavori sulla rete acquedottistica che possono mobilitare sedimenti. Il costo modesto e i benefici pratici lo rendono una scelta razionale.",
          "Diventa indispensabile in tutte le abitazioni con pozzo o cisterna privata: lì il particolato in ingresso è strutturalmente maggiore, e senza filtrazione le tubazioni e gli elettrodomestici si danneggiano rapidamente. È anche pretrattamento essenziale di ogni impianto di trattamento più avanzato (osmosi, UV, ultrafiltrazione, resine), che senza filtro sedimenti a monte si intasa prematuramente.",
          "In acque di rete con ferro o manganese ossidato il filtro riduce sensibilmente le colorazioni rossastre o nerastre sulle rubinetterie e nelle vasche. È utile anche in palazzi con tubazioni vecchie in ferro o zinco, dove la ruggine interna si stacca periodicamente e arriva all'utente.",
        ],
        bullets: [
          "Abitazioni servite da pozzo o cisterna",
          "Edifici con tubazioni vecchie soggette a ruggine",
          "Pretrattamento per osmosi, UV, UF, carbone",
          "Acque con ferro o manganese ossidato",
          "Protezione di caldaie, elettrodomestici, rubinetterie",
        ],
      },
      {
        heading: "Quando NON conviene",
        paragraphs: [
          "Se il problema dichiarato è di natura chimica (nitrati, durezza, metalli disciolti, cloro) il filtro a sedimenti non risolve niente. Acquistarlo come unica risposta a un'acqua chimicamente problematica è un errore di scelta tecnologica. Risolve un altro tipo di problema e va combinato con altri trattamenti, non sostituito a essi.",
          "Anche su acque acquedottistiche pulite e in case con tubazioni recenti il valore aggiunto è marginale: il particolato presente è trascurabile e il filtro va sostituito periodicamente comunque, generando una spesa senza beneficio percepibile. È una scelta razionale solo se c'è un beneficio concreto.",
          "Va anche tenuto presente che un filtro sedimenti trascurato (non sostituito per molti mesi) può diventare esso stesso un problema: il deposito accumulato favorisce la crescita batterica e può aumentare la perdita di carico riducendo la pressione di rete domestica.",
        ],
      },
      {
        heading: "Costi (acquisto + installazione + manutenzione)",
        paragraphs: [
          "Un filtro a sedimenti standard a cartuccia costa 50-150 euro all'acquisto, con installazione tipica di 50-100 euro se si tratta di un montaggio dopo contatore. Un filtro autopulente con valvola di scarico costa 150-400 euro ma riduce drasticamente la manutenzione.",
          "Le cartucce sedimenti costano 5-15 euro l'una e durano 3-6 mesi a seconda del carico in ingresso, per una spesa annua di 15-50 euro. Sui filtri autopulenti la manutenzione si riduce a uno scarico periodico, manuale o automatico, senza cartucce da sostituire. Sui filtri multistadio (sedimenti + microfiltrazione fine) la manutenzione cumulata è di 40-100 euro l'anno.",
          "È il trattamento con il miglior rapporto investimento/beneficio per chi ha problemi di particolato. Su un orizzonte di cinque anni la spesa cumulata resta sotto i 500 euro per un sistema standard, e dà benefici tangibili sulla durata di tutto l'impianto domestico.",
        ],
      },
      {
        heading: "Come verificare che funzioni davvero",
        paragraphs: [
          "La verifica del filtro a sedimenti è in larga misura visiva. Una cartuccia trasparente permette di vedere a occhio quanto si è sporcata. Cambiamenti nel colore dell'acqua, comparsa di sedimenti nei lavandini, intasamento dei rompigetto sono segnali di una cartuccia esausta.",
          "Misurazioni più oggettive si fanno con un torbidimetro (strumento che misura la torbidità in NTU): per uso domestico esistono modelli portatili economici. Un'acqua ben filtrata dovrebbe essere sotto 1 NTU, un'acqua filtrata male può essere sopra 5 NTU. La perdita di carico crescente attraverso il filtro è un altro indicatore di intasamento.",
          "Per gli impianti su pozzo, dove il filtro sedimenti è anche pretrattamento di altri stadi sanitari, è raccomandata un'analisi periodica completa dell'acqua erogata: una conta batterica anomala può essere segnale di un filtro sedimenti tenuto troppo a lungo e diventato substrato di biofilm. L'analisi accreditata a uso periodico è la forma più seria di controllo.",
        ],
      },
    ],
    faqs: [
      {
        q: "Costa di più un filtro a sedimenti o continuare a pulire i rompigetto e cambiare le valvole intasate?",
        a: "Il costo di un filtro a sedimenti centralizzato (50-150 euro più 50-100 di installazione) è quasi sempre inferiore al costo cumulato di rubinetterie sostituite, elettrodomestici danneggiati e interventi idraulici nell'arco di 5-10 anni in case con problemi di particolato. È la spesa con il miglior ritorno tra tutti i trattamenti.",
      },
      {
        q: "Posso installare un filtro a sedimenti da solo?",
        a: "Sì se si tratta di un sottolavello con attacchi rapidi: è alla portata di un installatore esperto. L'installazione centralizzata subito dopo contatore richiede taglio della tubazione principale e qualche competenza idraulica in più. I filtri autopulenti hanno installazione simile ai filtri a cartuccia.",
      },
      {
        q: "Quando devo cambiare la cartuccia?",
        a: "I filtri a cartuccia standard vanno sostituiti ogni 3-6 mesi a seconda del carico di particolato in ingresso. Una cartuccia trasparente lo fa vedere a occhio. Sui filtri autopulenti non si cambia nulla: si scarica periodicamente. Sui filtri multistadio i tempi variano per ciascuno stadio.",
      },
      {
        q: "Come verifico che il filtro stia funzionando?",
        a: "A occhio: cartuccia visibilmente sporca, miglioramento della pulizia dei rompigetto, assenza di sedimenti nei lavandini. Con un torbidimetro portatile per misure più oggettive (sotto 1 NTU è il target di buon funzionamento). Per impianti su pozzo, con analisi periodiche complete dell'acqua erogata.",
      },
      {
        q: "Il filtro a sedimenti elimina tutti i contaminanti?",
        a: "No. Trattiene solo particolato visibile e fine, ferro e manganese ossidati. Tutto ciò che è disciolto (nitrati, sodio, cloro, metalli ionici, pesticidi) passa senza modificazione. Per problemi chimici servono altri trattamenti, con il filtro a sedimenti come pretrattamento.",
      },
      {
        q: "Mi serve un filtro a sedimenti se ho già un'osmosi inversa?",
        a: "Sì, e di solito è già integrato nel sistema osmotico come primo stadio. Il filtro sedimenti protegge sia il successivo carbone attivo sia la membrana di osmosi dall'usura da particelle, allungando la vita utile dei consumabili più costosi. Senza pretrattamento sedimenti, qualsiasi sistema avanzato dura meno.",
      },
    ],
    relatedTreatments: ["carbone-attivo", "ultrafiltrazione", "osmosi-inversa"],
    ctaContext:
      "Hai installato un filtro a sedimenti come pretrattamento e vuoi verificare che l'acqua erogata sia conforme su tutti i parametri rilevanti (microbiologici e chimici)? Un'analisi di laboratorio accreditato dà una valutazione completa e indipendente.",
  },
];

const TREATMENT_GUIDE_INDEX: Map<string, TreatmentGuide> = new Map(
  TREATMENT_GUIDES.map((guide) => [guide.slug, guide]),
);

export function getTreatmentBySlug(slug: string): TreatmentGuide | undefined {
  return TREATMENT_GUIDE_INDEX.get(slug);
}
