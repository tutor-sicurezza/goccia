export interface TopicGuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TopicGuideFAQ {
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

export interface TopicGuide {
  slug: string;
  itName: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  ctaVariant: CTAVariant;
  ctaContext: string;
  sections: TopicGuideSection[];
  faqs: TopicGuideFAQ[];
  relatedParameters?: string[];
  relatedTopics?: string[];
}

export const TOPIC_GUIDES: TopicGuide[] = [
  {
    slug: 'acqua-neonati',
    itName: 'Acqua per neonati',
    shortTitle: "Acqua del rubinetto per neonati: biberon e latte in polvere",
    metaDescription:
      "Acqua del rubinetto per neonati: si può usare per biberon e latte in polvere? Parametri da controllare (nitrati, sodio, microbiologia) e quando preferire un'oligominerale.",
    searchKeywords: [
      'acqua neonati',
      'acqua rubinetto neonati',
      'acqua per biberon',
      'acqua per latte in polvere',
      'che acqua dare ai neonati',
      'acqua oligominerale neonati',
    ],
    intro:
      "Una delle prime domande che ogni neogenitore si pone è quale acqua usare per il biberon e per ricostituire il latte in polvere. Online si trovano risposte contrastanti: chi demonizza il rubinetto, chi al contrario lo presenta come sempre sicuro. La verità è più sfumata e dipende dal Comune in cui vivi, dall'edificio, dalla salute del bambino e dai parametri specifici dell'acqua. In questa guida vediamo cosa serve davvero nell'acqua per un neonato, come si comporta in pratica l'acqua del rubinetto in Italia e quando ha senso preferire un'oligominerale o procedere a un'analisi.",
    ctaVariant: 'completa',
    ctaContext:
      "Per analizzare l'acqua del rubinetto destinata a un neonato con un pannello pediatrico (nitrati, sodio, microbiologia, metalli) in un laboratorio qualificato:",
    sections: [
      {
        heading: "Cosa serve nell'acqua per un neonato",
        paragraphs: [
          "Nei primi mesi di vita l'apparato digerente e i reni del lattante stanno ancora maturando. Ciò significa che il bambino è meno efficiente nel gestire un carico di sali e di sostanze indesiderate, e che reagisce in modo più sensibile a contaminazioni che per un adulto sarebbero trascurabili. Per questo i pediatri suggeriscono, quando si ricostituisce il latte in polvere, di privilegiare acque povere di sali (bassi residui fissi e bassi nitrati) e prive di contaminazioni microbiologiche.",
          "I parametri di riferimento principali sono il sodio, che deve essere molto basso per non sovraccaricare il rene immaturo, e i nitrati, perché in presenza della flora batterica intestinale del lattante possono trasformarsi in nitriti e ridurre il trasporto di ossigeno nel sangue (metaemoglobinemia). Anche i metalli pesanti come il piombo e l'arsenico vanno tenuti sotto controllo, perché si accumulano e perché il bambino piccolo ne assorbe una quota maggiore rispetto all'adulto.",
          "Sul piano microbiologico l'acqua dovrebbe essere priva di Escherichia coli, di coliformi e di enterococchi. Nel dubbio i pediatri raccomandano comunque di bollire l'acqua del biberon nei primi mesi: la bollitura non rimuove i contaminanti chimici, ma annulla il rischio biologico.",
        ],
        bullets: [
          'Sodio basso (rene immaturo)',
          'Nitrati molto bassi (rischio metaemoglobinemia)',
          'Assenza di contaminazione microbiologica',
          'Metalli pesanti (piombo, arsenico) ridotti al minimo',
        ],
      },
      {
        heading: "Acqua del rubinetto: sì o no?",
        paragraphs: [
          "In molte zone d'Italia l'acqua del rubinetto rispetta ampiamente i limiti del D.Lgs. 18/2023 e risulta perfettamente idonea anche per i neonati, soprattutto se ricostituita previa bollitura. Negli acquedotti delle grandi città, dove i controlli del gestore sono frequenti, i valori medi di sodio e nitrati sono spesso bassi. In questi casi il rubinetto è una scelta valida, economica e sostenibile.",
          "Esistono però aree del Paese in cui l'acqua di rete supera o sfiora i limiti per parametri rilevanti in età pediatrica: nitrati nella pianura padana e in zone ad agricoltura intensiva, arsenico nel Lazio nord e in alcune aree vulcaniche del Centro Italia, PFAS in parte del Veneto, fluoruri in alcune province. In queste situazioni la scelta del rubinetto va ponderata e supportata dai dati pubblicati dal gestore (relazione annuale sulla qualità dell'acqua) o da un'analisi indipendente sul tuo specifico punto di prelievo.",
          "Un secondo aspetto da non trascurare è il tratto domestico: anche se l'acqua arriva ottima al contatore, tubazioni vecchie in piombo, raccordi in ottone con piombo, o cisterne non pulite possono peggiorare la qualità al rubinetto. In dubbio, in caso di neonato in casa, conviene fare un'analisi mirata.",
        ],
      },
      {
        heading: "Quando preferire un'acqua minerale oligominerale",
        paragraphs: [
          "Quando l'acqua del rubinetto presenta valori non ottimali per un lattante, oppure semplicemente quando si preferisce un margine di sicurezza in più, la scelta tipica è un'acqua minerale oligominerale o minimamente mineralizzata. Sull'etichetta si parla di oligominerale quando il residuo fisso a 180 °C è inferiore a 500 mg/L, e di minimamente mineralizzata quando è inferiore a 50 mg/L.",
          "Per il neonato si preferiscono acque con residuo fisso basso, sodio inferiore a 20 mg/L, nitrati inferiori a 10 mg/L (alcuni pediatri sono ancora più cauti e suggeriscono sotto 5 mg/L), e assenza dichiarata di contaminazioni. Vanno bene molte acque comunemente in vendita; la dicitura indicativa per l'uso pediatrico è spesso esplicitata in etichetta.",
          "Vale la pena ricordare che l'acqua minerale in bottiglia non è esente da criticità: il trasporto, lo stoccaggio al sole e i tempi lunghi possono favorire migrazioni dalla plastica e proliferazione di microrganismi una volta aperta. Una bottiglia aperta va consumata entro 24-48 ore e conservata in frigorifero, soprattutto se usata per il biberon.",
        ],
      },
      {
        heading: 'Parametri chiave: nitrati, sodio, microbiologia',
        paragraphs: [
          "I nitrati sono il parametro più discusso quando si parla di acqua per neonati. Il limite di legge per l'acqua potabile è 50 mg/L, ma per il bambino piccolo molti pediatri suggeriscono valori prudenziali ben più bassi. Il problema è la possibile conversione in nitriti da parte della flora intestinale del lattante e l'ossidazione dell'emoglobina, con rischio di cianosi nei casi più seri. È un rischio raro ma documentato e giustifica la prudenza.",
          "Il sodio entra in gioco perché il rene del neonato non ha ancora la capacità di concentrare le urine come quello di un adulto. Un'acqua con sodio molto alto, soprattutto se usata per ricostituire latte in polvere già contenente sodio, sovraccarica il bambino. Si predilige quindi un sodio inferiore a 20 mg/L.",
          "Sul fronte microbiologico, il D.Lgs. 18/2023 prevede l'assenza di Escherichia coli ed enterococchi in 100 ml e l'assenza di coliformi nella rete. Per il neonato, anche in caso di acqua regolarmente conforme, la bollitura del biberon nei primi mesi resta una raccomandazione di buon senso, soprattutto se l'acqua proviene da un pozzo privato, da una cisterna o da impianti domestici di cui non si conosce lo stato di pulizia.",
        ],
      },
      {
        heading: "Bollire l'acqua del rubinetto serve?",
        paragraphs: [
          "La bollitura è una pratica antica e ancora oggi raccomandata da molti pediatri per la preparazione del biberon nei primi mesi. La sua efficacia è limitata al rischio microbiologico: portando l'acqua a ebollizione per 1-3 minuti si abbattono praticamente tutti i batteri e i virus eventualmente presenti, comprese le forme più resistenti come i coliformi e gli enterococchi. È quindi un margine di sicurezza utile quando si ha qualche dubbio sull'integrità della rete domestica o sulla cisterna.",
          "La bollitura non rimuove invece i contaminanti chimici. Nitrati, metalli pesanti, PFAS e fluoruri non vengono toccati dall'ebollizione; anzi, prolungando la bollitura per molti minuti l'acqua evapora e i sali si concentrano leggermente. Questo significa che bollire un'acqua con nitrati a 60 mg/L non la rende idonea per il neonato: la peggiora, semmai.",
          "In sintesi: la bollitura è utile contro i microbi, inutile o peggiorativa sui contaminanti chimici. Se il problema dell'acqua di rete è chimico (nitrati, arsenico, PFAS, piombo) la bollitura non è la risposta; servono trattamento domestico (osmosi inversa, in genere) o un'acqua minerale adatta.",
        ],
      },
      {
        heading: 'Cosa fare se vivi in area con superamenti documentati',
        paragraphs: [
          "Esistono in Italia alcune aree con problemi di qualità noti e ricorrenti, dove la scelta dell'acqua per il neonato merita un'attenzione in più. In Veneto, nelle province di Vicenza, Padova e Verona, è documentata da anni una contaminazione da PFAS che, nonostante i provvedimenti di filtrazione del gestore, suggerisce ancora prudenza in alcune zone. Nel Lazio nord e in alcune province campane e toscane, l'origine vulcanica delle falde può portare arsenico in quantità rilevanti. Nella pianura padana e in vaste aree agricole, i nitrati sono il problema cronico.",
          "In tutti questi casi, il primo passo è consultare la relazione annuale sulla qualità dell'acqua pubblicata dal gestore del tuo Comune: per legge deve essere accessibile online o su richiesta. Il secondo passo, se vivi in un edificio storico o se hai una cisterna o un pozzo, è far analizzare l'acqua al tuo punto di prelievo in un laboratorio qualificato, con un pannello che includa nitrati, sodio, microbiologia e metalli pesanti.",
          "Se i valori sono critici, le opzioni sono due: per la preparazione del biberon ricorrere a un'acqua minerale oligominerale dedicata; oppure installare un impianto a osmosi inversa al punto d'uso, che riduce in modo significativo nitrati, PFAS, arsenico e metalli. In caso di dubbio sull'approccio più adatto al singolo bambino, è sempre opportuno parlarne con il pediatra, che valuta la situazione complessiva.",
        ],
      },
    ],
    faqs: [
      {
        q: "Posso usare l'acqua del rubinetto per il biberon?",
        a: "In molte zone d'Italia sì, soprattutto se previa bollitura nei primi mesi e se i parametri del tuo acquedotto (consultabili nella relazione annuale del gestore) mostrano nitrati bassi e sodio contenuto. In aree con criticità note (PFAS, arsenico, nitrati elevati) o se vivi in un edificio con tubazioni vecchie è preferibile un'analisi mirata, e in caso di dubbio rivolgersi al pediatra.",
      },
      {
        q: "Quali sono i valori massimi consigliati per i nitrati nell'acqua dei neonati?",
        a: "Il limite di legge generale per l'acqua potabile è 50 mg/L (D.Lgs. 18/2023). Per i lattanti, molti pediatri suggeriscono prudenzialmente valori sotto 10 mg/L, alcuni anche sotto 5 mg/L. Le acque minerali commercialmente indicate per uso pediatrico hanno in genere nitrati molto bassi.",
      },
      {
        q: "La bollitura elimina i nitrati?",
        a: "No. La bollitura serve a inattivare batteri e virus, ma non rimuove nitrati, metalli pesanti, PFAS o fluoruri. Anzi, bollendo a lungo l'acqua evapora e i sali si concentrano leggermente. Per i contaminanti chimici servono altre soluzioni: acqua minerale adatta oppure un impianto a osmosi inversa.",
      },
      {
        q: 'Meglio acqua oligominerale o minimamente mineralizzata per il latte in polvere?',
        a: "Entrambe vanno bene se sono povere di sodio (sotto 20 mg/L) e nitrati. Le minimamente mineralizzate (residuo fisso sotto 50 mg/L) sono ancora più leggere e spesso indicate in etichetta come adatte alla preparazione degli alimenti per lattanti. Variarle ciclicamente è prassi comune.",
      },
      {
        q: "Vivo in zona PFAS: cosa posso fare per il biberon?",
        a: "Verifica i valori di PFAS nella tua zona consultando la relazione del gestore e i monitoraggi regionali. Per la preparazione del biberon, finché la situazione non è chiarita, è prudente usare un'acqua minerale oligominerale con PFAS non rilevabili oppure installare un'osmosi inversa al punto d'uso, che riduce significativamente queste sostanze. In caso di dubbio rivolgersi al pediatra.",
      },
      {
        q: "Quanto costa fare analizzare l'acqua del rubinetto per un uso pediatrico?",
        a: "Un pannello mirato che include parametri microbiologici, nitrati, sodio, durezza e metalli pesanti principali ha un costo tipico di 100-200 €, in funzione del numero di parametri. Un laboratorio qualificato fornisce un rapporto di prova con i valori reali del tuo punto di prelievo, che è poi la base oggettiva per decidere se affidarsi al rubinetto o cercare alternative.",
      },
    ],
    relatedParameters: ['nitrati', 'nitriti', 'arsenico', 'sodio', 'e_coli'],
    relatedTopics: ['acqua-gravidanza', 'pulizia-cisterna-acqua', 'depuratore-casa-conviene'],
  },
  {
    slug: 'acqua-gravidanza',
    itName: 'Acqua in gravidanza',
    shortTitle: 'Acqua in gravidanza: cosa controllare nel rubinetto',
    metaDescription:
      "Acqua in gravidanza: idratazione, parametri da monitorare (nitrati, piombo, arsenico, microbiologia), edifici storici e quando ha senso analisi prima del parto.",
    searchKeywords: [
      'acqua gravidanza',
      'acqua rubinetto gravidanza',
      'che acqua bere in gravidanza',
      'fluoruri gravidanza',
      'piombo gravidanza acqua',
    ],
    intro:
      "In gravidanza l'acqua diventa improvvisamente uno dei temi su cui si concentra l'attenzione delle future mamme: quanta berne, di che tipo, se preferire la minerale o il rubinetto, se servono attenzioni particolari in caso di edificio vecchio. La risposta non è univoca e dipende da diversi fattori, fra cui la zona in cui vivi, lo stato dell'impianto idrico domestico e i parametri della tua acqua. Qui vediamo cosa è sensato controllare, come interpretare i dati del gestore e quando vale la pena fare un'analisi indipendente, sempre tenendo a mente che ogni decisione clinica va condivisa con il proprio ginecologo.",
    ctaVariant: 'metalli-pesanti',
    ctaContext:
      "Per un'analisi mirata dei metalli pesanti e dei contaminanti rilevanti in gravidanza con un laboratorio qualificato:",
    sections: [
      {
        heading: "L'idratazione in gravidanza",
        paragraphs: [
          "Durante la gravidanza il fabbisogno idrico aumenta in modo significativo: il volume plasmatico cresce, si forma il liquido amniotico, il feto e i suoi tessuti hanno bisogno di un costante apporto di nutrienti e di un efficace allontanamento dei cataboliti. Le linee guida nutrizionali italiane suggeriscono in genere un'assunzione di almeno 2-2,3 litri al giorno di acqua per la donna gravida, da regolare in base alla stagione, all'attività fisica e all'allattamento.",
          "Una buona idratazione contribuisce alla prevenzione delle infezioni urinarie, frequenti in gravidanza, e alla gestione della stitichezza, altrettanto comune nei trimestri avanzati. Aiuta anche il controllo della temperatura corporea e la regolarità della pressione. Bere acqua in quantità adeguate è quindi una delle abitudini più semplici ed efficaci che una futura mamma può adottare; il punto è scegliere un'acqua di qualità affidabile.",
          "Sul tipo di acqua, non c'è una raccomandazione universale che imponga il rubinetto o la minerale. Esiste invece una raccomandazione generale di prediligere acque con valori contenuti di sodio, di nitrati e libere da contaminazioni chimiche e microbiologiche. Tutte caratteristiche che l'acqua del rubinetto può possedere o meno, a seconda del Comune e dell'edificio.",
        ],
      },
      {
        heading: 'Acqua del rubinetto: cosa dicono i ginecologi',
        paragraphs: [
          "I ginecologi italiani non sconsigliano in linea generale l'acqua del rubinetto durante la gravidanza. Anzi, in molte realtà urbane l'acqua di rete è controllata con grande frequenza dal gestore e rispetta ampiamente i limiti del D.Lgs. 18/2023. Per le donne in gravidanza che vivono in queste zone l'acqua di rubinetto è una scelta del tutto accettabile, oltre che ecologica ed economica.",
          "Tuttavia, alcune indicazioni di prudenza sono diffuse. Se l'edificio in cui vivi è degli anni '60-'70 o precedente e sospetti tubazioni vecchie (piombo, raccordi in ottone), può essere sensato far scorrere l'acqua qualche secondo al mattino prima di berla, oppure preferire bottiglie minerali per la sola acqua da bere e cucinare nelle settimane di gestazione. Lo stesso vale se hai cisterne o serbatoi domestici che non vengono manutenuti, dove può svilupparsi contaminazione microbiologica.",
          "In presenza di patologie specifiche (ipertensione gestazionale, gestosi, diabete gestazionale) il medico potrebbe consigliare acque a basso contenuto di sodio o con composizione mirata. Su questi aspetti la regola è una sola: rivolgersi al proprio ginecologo, che valuta il caso clinico nel suo insieme.",
        ],
      },
      {
        heading: 'Parametri da monitorare',
        paragraphs: [
          "I parametri che meritano attenzione in gravidanza, oltre a quelli generici di potabilità, sono in particolare i nitrati, il piombo, l'arsenico, i fluoruri e la microbiologia. I nitrati elevati sono associati a un rischio teorico per il feto, oltre a essere un indicatore di contaminazione agricola della falda; il limite di legge è 50 mg/L. Il piombo è una sostanza neurotossica per il feto, anche a basse dosi, ed è regolamentato dal D.Lgs. 18/2023 a 10 µg/L con tendenza a abbassamento progressivo dei limiti.",
          "L'arsenico, presente in alcune aree di origine vulcanica del Centro Italia, ha effetti cumulativi e teratogeni documentati ed è limitato a 10 µg/L. I fluoruri in eccesso possono avere ripercussioni sulla mineralizzazione ossea fetale; il limite è 1,5 mg/L. Sul fronte microbiologico, l'assenza di Escherichia coli, coliformi ed enterococchi è essenziale per evitare infezioni urinarie e gastrointestinali, particolarmente delicate in gravidanza.",
          "Conoscere questi valori non richiede strumenti speciali: il gestore del tuo acquedotto pubblica una relazione annuale con i parametri medi della rete, accessibile online o su richiesta. Se vivi in zone considerate critiche per uno di questi parametri (PFAS in Veneto, arsenico nel Lazio nord, nitrati in pianura padana), oppure se l'edificio è storico, ha senso un'analisi indipendente al tuo punto di prelievo.",
        ],
        bullets: [
          'Nitrati (limite 50 mg/L)',
          'Piombo (limite 10 µg/L, in calo)',
          'Arsenico (limite 10 µg/L)',
          'Fluoruri (limite 1,5 mg/L)',
          'Microbiologia (E. coli, coliformi, enterococchi)',
        ],
      },
      {
        heading: 'Edifici storici e tubazioni vecchie',
        paragraphs: [
          "In Italia una quota rilevante del patrimonio edilizio è precedente agli anni '70, quando il piombo era ancora utilizzato sia per le tubazioni di adduzione sia per saldature e raccordi. Anche le tubazioni in ottone di vecchia generazione contenevano percentuali significative di piombo. Quando l'acqua stagna durante la notte nei tubi, può lisciviare piccole quantità di piombo, con concentrazioni che si riducono drasticamente facendo scorrere il rubinetto per qualche decina di secondi.",
          "Per una donna in gravidanza che vive in un edificio storico la raccomandazione più semplice è: al primo prelievo del mattino, lasciar scorrere il rubinetto per 30-60 secondi prima di prendere l'acqua da bere o da usare in cucina; in alternativa, raccogliere l'acqua scartando il primo bicchiere. Un'analisi mirata sul piombo al tuo punto d'uso ti dà la fotografia esatta della situazione.",
          "Se l'analisi mostra valori critici, le opzioni sono diverse: alcune amministrazioni condominiali stanno avviando programmi di sostituzione delle tubazioni, mentre per il singolo appartamento un'osmosi inversa al punto d'uso riduce il piombo in modo molto efficace. In ogni caso, in gravidanza è opportuno parlarne con il ginecologo per inquadrare la situazione.",
        ],
      },
      {
        heading: 'Acqua minerale: quali tipologie evitare o preferire',
        paragraphs: [
          "Per la donna gravida che predilige l'acqua minerale, le tipologie da preferire sono le oligominerali e le minimamente mineralizzate (residuo fisso rispettivamente sotto 500 e sotto 50 mg/L), con sodio contenuto e nitrati molto bassi. Sono acque leggere, ben tollerate, che non aggiungono carico di sali in fasi della gravidanza in cui la ritenzione idrica può essere già un tema.",
          "Le acque molto mineralizzate (residuo fisso sopra 1500 mg/L) e ricche di sodio sono in genere meno consigliate, soprattutto in caso di ipertensione gestazionale o di gestosi. Per chi soffre di stitichezza alcune acque solfato-magnesiache possono dare un beneficio, ma non vanno utilizzate in modo indiscriminato senza consultare il proprio medico.",
          "Un'attenzione operativa: le bottiglie aperte vanno consumate in poche ore e tenute al fresco; quelle esposte al sole o lasciate in auto possono subire un'alterazione organolettica e microbiologica. Per chi usa il vetro, la conservazione è migliore. La carica plastica delle PET in gravidanza è oggetto di discussione: per minimizzarla è prudente evitare bottiglie esposte a calore, riusi prolungati e periodi di stoccaggio lunghi.",
        ],
      },
      {
        heading: "Quando ha senso un'analisi prima del parto",
        paragraphs: [
          "Un'analisi indipendente dell'acqua del rubinetto ha senso, in gravidanza, in alcuni scenari ben precisi. Il primo è la casa in edificio storico, dove il piombo non si esclude a priori. Il secondo è il pozzo privato o la cisterna, dove la microbiologia e i nitrati sono spesso variabili e non controllati ufficialmente. Il terzo è una zona con criticità note: PFAS in Veneto, arsenico nel Lazio nord, nitrati in pianura padana.",
          "Il momento ideale per analizzare è prima del parto, in modo da arrivare alla nascita con la situazione chiara: se l'acqua è ottima, useremo serenamente il rubinetto per il biberon dopo i primi mesi; se ci sono criticità, abbiamo il tempo di pianificare un'alternativa (oligominerale dedicata, osmosi inversa). Un pannello mirato che copre microbiologia, nitrati, piombo, arsenico e altri metalli rappresenta una spesa contenuta a fronte della tranquillità che dà.",
          "I risultati vanno sempre letti nel contesto: un piombo a 8 µg/L rispetta il limite di legge ma in gravidanza alcuni ginecologi preferiscono ridurre l'esposizione. La discussione del rapporto di prova con il proprio medico è il passo finale che mette le decisioni nelle mani giuste.",
        ],
      },
    ],
    faqs: [
      {
        q: "Posso bere acqua del rubinetto in gravidanza?",
        a: "In linea generale sì, soprattutto se l'acquedotto del tuo Comune mostra valori conformi al D.Lgs. 18/2023 e l'edificio non ha tubazioni storiche sospette. In caso di dubbio, una relazione del gestore o un'analisi indipendente al tuo punto di prelievo aiutano a decidere. Per qualsiasi indicazione personale è sempre opportuno rivolgersi al proprio ginecologo.",
      },
      {
        q: 'Quanta acqua devo bere al giorno in gravidanza?',
        a: "Le indicazioni nutrizionali generali parlano di 2-2,3 litri al giorno in gravidanza, con incrementi in allattamento, da calibrare in base a stagione, attività e condizioni cliniche. La quantità precisa va concordata con il ginecologo.",
      },
      {
        q: 'Il piombo nelle vecchie tubazioni è davvero un problema?',
        a: "Può esserlo, soprattutto al primo prelievo del mattino quando l'acqua è stagnata. La buona prassi è lasciar scorrere il rubinetto per 30-60 secondi al primo utilizzo. Un'analisi mirata sul piombo al tuo punto d'uso chiarisce in modo oggettivo la situazione.",
      },
      {
        q: 'Quali acque minerali sono più indicate in gravidanza?',
        a: "In genere oligominerali o minimamente mineralizzate, con sodio basso e nitrati molto bassi. In caso di ipertensione gestazionale o gestosi il ginecologo può consigliare scelte specifiche; in caso di dubbio rivolgersi al proprio medico.",
      },
      {
        q: 'I PFAS in gravidanza sono un rischio reale?',
        a: "Gli studi disponibili mostrano correlazioni con effetti sulla salute riproduttiva e sullo sviluppo fetale, motivo per cui le autorità sanitarie hanno fissato limiti sempre più restrittivi. In aree di contaminazione documentata (Veneto in particolare) è prudente verificare i valori di rete e, se necessario, ricorrere a un'osmosi inversa o ad acque minerali con PFAS non rilevabili.",
      },
      {
        q: "Quando è meglio fare un'analisi prima del parto?",
        a: "Idealmente nel secondo o all'inizio del terzo trimestre, in modo da avere i risultati e poter pianificare eventuali alternative per il biberon. Un pannello mirato con microbiologia, nitrati, piombo, arsenico e metalli ha costo contenuto e fornisce un quadro chiaro.",
      },
    ],
    relatedParameters: ['piombo', 'arsenico', 'nitrati', 'fluoruri', 'e_coli'],
    relatedTopics: ['acqua-neonati', 'depuratore-casa-conviene', 'pulizia-cisterna-acqua'],
  },
  {
    slug: 'acqua-cani-gatti',
    itName: 'Acqua per cani e gatti',
    shortTitle: 'Acqua del rubinetto per cani e gatti: cosa sapere',
    metaDescription:
      "Acqua del rubinetto per cani e gatti: si può dare? Durezza, calcare, cristalli urinari nel gatto, cloro e parametri da controllare per la salute degli animali domestici.",
    searchKeywords: [
      'acqua per cani',
      'acqua per gatti',
      'acqua del rubinetto cane',
      'calcare acqua gatto',
      'cristalli urinari gatto acqua',
    ],
    intro:
      "Cani e gatti bevono ogni giorno una quantità di acqua proporzionalmente molto superiore alla nostra, e per molti proprietari diventa naturale chiedersi se l'acqua del rubinetto sia adatta. La risposta nella grande maggioranza dei casi è sì, ma con alcune attenzioni che riguardano in particolare la durezza, il cloro e specifiche patologie urinarie tipiche del gatto. In questa guida vediamo come si comportano i due animali, quali parametri dell'acqua contano davvero e quando può essere utile filtrare o analizzare.",
    ctaVariant: 'kit-analisi',
    ctaContext:
      "Per analizzare l'acqua che bevono i tuoi animali domestici con un laboratorio qualificato:",
    sections: [
      {
        heading: 'I cani possono bere acqua del rubinetto?',
        paragraphs: [
          "Il cane è generalmente un bevitore poco esigente: la sua tolleranza alla qualità dell'acqua è ampia, e nella stragrande maggioranza dei casi l'acqua del rubinetto del nostro acquedotto è perfettamente idonea. Il cane adulto sano beve indicativamente 50-60 ml di acqua per kg di peso al giorno, valore che cresce con la temperatura ambientale, con l'attività fisica e con l'alimentazione secca.",
          "La principale criticità su cui i veterinari attirano l'attenzione è la microbiologia: ciotole non pulite, fontanelle non manutenute o cisterne sporche possono diventare focolaio di proliferazione batterica. L'acqua va sostituita più volte al giorno e la ciotola va lavata con regolarità con acqua e detergente neutro, risciacquando bene. Per i cuccioli, gli anziani e gli animali immunodepressi questa attenzione è ancora più importante.",
          "Sul fronte chimico, il cane tollera bene un'acqua con durezza media e con il normale residuo di cloro tipico dell'acqua di rete. Se l'animale rifiuta sistematicamente l'acqua del rubinetto, può essere un segnale di un odore di cloro forte o di un sapore alterato: in quel caso una semplice caraffa filtrante o lasciare l'acqua a decantare qualche ora abbatte sensibilmente il cloro.",
        ],
      },
      {
        heading: 'I gatti e la durezza: cristalli urinari',
        paragraphs: [
          "Il gatto è un caso particolare. Anatomicamente è un animale che beve poco e che ha vie urinarie sensibili: i problemi di cristalli e calcoli urinari (struvite, ossalato di calcio) sono fra le patologie veterinarie più comuni nei gatti domestici. La domanda che si fanno molti proprietari è se la durezza dell'acqua, ossia la quantità di calcio e magnesio disciolti, possa contribuire al problema.",
          "Le evidenze veterinarie indicano che il principale fattore di rischio non è la durezza in sé, ma il volume totale di urine prodotto: gatti che bevono poco concentrano l'urina e favoriscono la cristallizzazione. Tuttavia, in soggetti predisposti o già diagnosticati, ridurre l'apporto di calcio e magnesio attraverso un'acqua a bassa durezza o filtrata può essere parte di una strategia complessiva indicata dal veterinario.",
          "Per il gatto sano senza patologie urinarie, l'acqua del rubinetto è in genere ben tollerata: l'obiettivo principale rimane farlo bere di più, con fontanelle, più ciotole nella casa, cibo umido. Per il gatto con cristalli, il veterinario può consigliare un'acqua a bassissimo residuo fisso o un'osmosi inversa al punto d'uso.",
        ],
      },
      {
        heading: 'Parametri importanti per gli animali',
        paragraphs: [
          "I parametri dell'acqua che hanno un impatto pratico sulla salute degli animali domestici sono principalmente tre: la microbiologia (batteri patogeni e proliferazione nella ciotola), il cloro residuo (sapore e odore che possono far rifiutare l'acqua, oltre a un possibile effetto di lieve irritazione gastrica in soggetti sensibili) e la durezza (rilevante soprattutto per i gatti con storia di cristalli urinari).",
          "I nitrati, in concentrazioni vicine al limite di legge di 50 mg/L, non rappresentano in genere un problema per il cane adulto sano, ma per i cuccioli appena svezzati valgono le stesse cautele dei lattanti umani per la possibile metaemoglobinemia. I metalli pesanti, in particolare il piombo da vecchie tubazioni domestiche, possono accumularsi negli animali con esiti analoghi a quelli sull'uomo: la stessa attenzione che dedichiamo a noi vale per loro.",
          "Sul fronte normativo, l'acqua destinata agli animali domestici non ha limiti propri: si fa riferimento agli stessi del D.Lgs. 18/2023 per l'acqua destinata al consumo umano. Un'acqua idonea per noi è in genere idonea anche per cani e gatti, con le eccezioni cliniche che il veterinario può indicare.",
        ],
        bullets: [
          'Microbiologia (E. coli, coliformi, enterococchi)',
          'Cloro residuo (sapore e rifiuto)',
          'Durezza (rilevante per gatti con cristalli)',
          'Nitrati (cuccioli appena svezzati)',
        ],
      },
      {
        heading: 'Quando preferire acqua filtrata',
        paragraphs: [
          "Esistono situazioni in cui una semplice filtrazione domestica migliora sensibilmente l'esperienza dell'animale. Se il cane o il gatto rifiutano l'acqua del rubinetto per via dell'odore di cloro, una caraffa filtrante a carbone attivo è in genere sufficiente a rendere l'acqua più gradevole. Lo stesso vale per impianti vecchi con sapore metallico avvertibile.",
          "Per gatti con storia di cristalli o calcoli urinari, su indicazione del veterinario può essere utile un'acqua a bassa durezza. Le opzioni sono diverse: acqua minerale oligominerale, caraffa con cartuccia decalcificante (con limiti di efficacia) oppure un piccolo impianto a osmosi inversa al punto d'uso, che fornisce un'acqua a residuo fisso molto basso.",
          "Per le fontanelle elettriche, oggi molto diffuse per stimolare il gatto a bere di più, vale una raccomandazione di buon senso: la pompa e il filtro vanno puliti con frequenza (settimanale per la pompa, mensile per il filtro a carbone) per evitare biofilm e proliferazione batterica. Una fontanella sporca peggiora la qualità dell'acqua più di quanto la migliori.",
        ],
      },
      {
        heading: 'Casi specifici: cuccioli, anziani, patologie',
        paragraphs: [
          "I cuccioli appena svezzati e gli anziani sono i gruppi più vulnerabili. Nei cuccioli i nitrati alti possono essere un rischio analogo a quello dei lattanti umani, e la microbiologia gioca un ruolo importante perché il sistema immunitario non è ancora completamente sviluppato. Per loro l'attenzione alla pulizia della ciotola e l'eventuale bollitura preventiva dell'acqua, soprattutto se proveniente da pozzo privato, sono prassi sensate.",
          "Negli animali anziani, soprattutto in quelli con insufficienza renale cronica, l'apporto di sali tramite l'acqua diventa rilevante. Il veterinario può consigliare un'acqua oligominerale a basso sodio. Anche la disponibilità costante di acqua fresca è fondamentale: questi soggetti tendono a bere quantità maggiori per compensare la ridotta capacità di concentrare le urine.",
          "Per animali con patologie urinarie (cristalli, calcoli, cistite) il piano dietetico-idrico viene definito dal veterinario e l'acqua è una variabile fra le altre. Una fontanella, più ciotole sparse in casa, alimenti umidi e un'acqua adeguata possono insieme aumentare il volume di urina e ridurre il rischio di recidive. Un'analisi della durezza dell'acqua che usi in casa fornisce un dato oggettivo al tuo veterinario.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Il calcare fa male a cani e gatti?',
        a: "Il calcare è il deposito che lascia un'acqua dura, ricca di calcio e magnesio. Nei cani in genere non è un problema. Nei gatti, soprattutto se predisposti a cristalli o calcoli urinari, una durezza alta può essere un fattore da considerare insieme ad altri; la valutazione va fatta dal veterinario.",
      },
      {
        q: 'Il cloro nel rubinetto è pericoloso per i cani?',
        a: "Alle concentrazioni residue tipiche dell'acqua di rete (sotto 0,2 mg/L) il cloro non è pericoloso. Può essere percepito come sgradevole nel sapore e portare a rifiuto dell'acqua. Lasciare l'acqua a decantare per qualche ora o usare una caraffa con carbone attivo elimina sensibilmente il problema.",
      },
      {
        q: 'Cosa fare se il mio gatto ha avuto cristalli urinari?',
        a: "La gestione spetta al veterinario, che imposta dieta, alimentazione umida, eventuali integratori e indicazioni sull'acqua. Sulla parte idrica le strategie più comuni sono aumentare il volume di acqua bevuta (fontanelle, più ciotole) e, in soggetti selezionati, usare acqua a bassa durezza.",
      },
      {
        q: "Devo bollire l'acqua per cuccioli?",
        a: "Non in generale, se l'acqua di rete è di qualità nota. Se vivi con un pozzo privato o una cisterna che non viene manutenuta, una bollitura nei primi mesi di vita del cucciolo è una cautela ragionevole. Vale lo stesso principio della preparazione del biberon umano.",
      },
      {
        q: 'Posso usare la caraffa filtrante per la ciotola del cane?',
        a: 'Sì, una caraffa filtrante a carbone migliora il sapore e riduce il cloro. Attenzione alla sostituzione regolare della cartuccia: una cartuccia esaurita può anzi diventare un terreno di proliferazione batterica.',
      },
    ],
    relatedParameters: ['durezza_totale', 'cloro_residuo', 'nitrati'],
    relatedTopics: ['caraffa-filtrante-serve', 'addolcitore-conviene', 'pulizia-cisterna-acqua'],
  },
  {
    slug: 'pulizia-cisterna-acqua',
    itName: 'Pulizia cisterna acqua',
    shortTitle: 'Pulizia cisterna acqua: come si fa, ogni quanto, normativa',
    metaDescription:
      "Pulizia e sanificazione della cisterna acqua potabile: frequenza consigliata, procedura, normativa di riferimento e analisi microbiologica post-intervento.",
    searchKeywords: [
      'pulizia cisterna acqua',
      'sanificazione cisterna',
      'ogni quanto pulire cisterna',
      'normativa cisterne acqua potabile',
      'ripristino cisterna',
    ],
    intro:
      "La cisterna domestica è ancora oggi un elemento molto diffuso negli edifici italiani, soprattutto nelle case singole, nei piccoli condomini e nelle zone con pressione di rete bassa. È un serbatoio che ci garantisce continuità di servizio quando l'acquedotto ha problemi, ma è anche un punto critico per la qualità dell'acqua: se non manutenuta sviluppa sedimenti, biofilm e contaminazioni microbiologiche. In questa guida vediamo perché va pulita, con quale frequenza, come si fa correttamente e cosa controllare con un'analisi dopo l'intervento.",
    ctaVariant: 'microbiologica',
    ctaContext:
      "Per un'analisi microbiologica dell'acqua dopo la pulizia della cisterna in un laboratorio qualificato:",
    sections: [
      {
        heading: "Cos'è una cisterna domestica e perché va pulita",
        paragraphs: [
          "Una cisterna domestica è un serbatoio di accumulo dell'acqua potabile, in genere posto al piano interrato o sul tetto, che assicura la disponibilità di acqua anche quando la rete pubblica ha pressione insufficiente o subisce interruzioni. Può essere in cemento, in acciaio inox, in polietilene o in vetroresina. La capacità varia da poche centinaia di litri per una casa singola a diversi metri cubi per condomini grandi.",
          "Il motivo per cui va pulita è semplice: l'acqua che entra in cisterna porta con sé sedimenti, sabbia, materiale organico e tracce di sali. Nel tempo questi materiali si depositano sul fondo e si attaccano alle pareti, creando un substrato in cui possono proliferare batteri, alghe e biofilm. Il calore estivo e la stagnazione in periodi di basso consumo accelerano il processo. Una cisterna non manutenuta da anni può facilmente diventare il punto in cui l'acqua, ottima alla rete, peggiora prima di arrivare al tuo rubinetto.",
          "In Italia la responsabilità della manutenzione della cisterna è del proprietario dell'immobile o, nei condomini, dell'amministratore: il gestore dell'acquedotto è responsabile fino al contatore, e ciò che succede a valle ricade sull'utenza. Una cisterna ben tenuta protegge la qualità dell'acqua e prolunga la vita dell'intero impianto idrico.",
        ],
      },
      {
        heading: 'Frequenza consigliata: annuale di norma',
        paragraphs: [
          "La buona prassi consolidata suggerisce una pulizia e sanificazione completa della cisterna almeno una volta all'anno, con un'ispezione visiva ogni 6 mesi. La frequenza esatta dipende dalla qualità dell'acqua in ingresso, dalla materia del serbatoio, dalle condizioni di temperatura e dal grado di utilizzo. In aree con acqua molto sedimentaria o con cisterne esposte al sole può essere necessario intervenire ogni 8-10 mesi.",
          "Alcune normative regionali e di gestione di strutture ricettive prevedono frequenze più strette (in genere semestrali per alberghi, ristoranti, mense e strutture sanitarie). Per le case private la cadenza annuale è considerata adeguata, purché si proceda anche a una verifica intermedia in caso di episodi sospetti: cambio di sapore dell'acqua, odore strano, intorbidimento dopo interruzioni di servizio o lavori in strada.",
          "Una cisterna nuova, appena installata, va sanificata prima del primo riempimento utile. Lo stesso vale dopo riparazioni o sostituzioni di componenti. Tenere un piccolo registro con le date degli interventi e delle analisi è una pratica utile per condomini e amministratori, e tutela in caso di contestazioni.",
        ],
      },
      {
        heading: 'Procedura tecnica di pulizia e sanificazione',
        paragraphs: [
          "La procedura standard prevede alcune fasi ben definite. Innanzitutto si svuota completamente la cisterna, deviando temporaneamente l'alimentazione idrica o usando l'acqua disponibile. Si rimuove a mano o con aspirazione il fango di fondo, che può essere costituito da sedimenti, sabbia, calcare staccato dalle pareti e residui organici. La parete interna va spazzolata meccanicamente per asportare il biofilm e gli incrostazioni.",
          "Segue il lavaggio con acqua pulita in pressione, ripetuto fino a quando l'acqua di scarico esce limpida. La sanificazione vera e propria si fa con prodotti specifici per uso alimentare/potabile, di norma a base di ipoclorito di sodio in concentrazione controllata, lasciato agire per il tempo indicato dal produttore (in genere alcune ore). Dopo la sanificazione si effettuano risciacqui ripetuti fino alla scomparsa dell'odore di cloro e si riporta in servizio la cisterna.",
          "L'intervento richiede dispositivi di protezione adeguati per chi entra nel serbatoio (in particolare in spazi confinati), conoscenza dei prodotti chimici utilizzati e attenzione allo smaltimento delle acque di lavaggio. Per cisterne di volume rilevante è opportuno affidarsi a una ditta specializzata; per piccole cisterne domestiche un proprietario informato può procedere autonomamente, con la consapevolezza dei rischi.",
        ],
        bullets: [
          'Svuotamento e rimozione fanghi di fondo',
          'Spazzolatura meccanica delle pareti',
          'Lavaggio in pressione fino a limpidezza',
          'Sanificazione con prodotti per uso potabile',
          'Risciacqui multipli prima del riavvio',
        ],
      },
      {
        heading: 'Quando rivolgersi a una ditta specializzata',
        paragraphs: [
          "Per cisterne di volume superiore ai 1000 litri, per cisterne interrate non facilmente accessibili o per spazi confinati che richiedono entrata in sicurezza, è obbligatorio o fortemente raccomandato l'intervento di una ditta specializzata. Le normative sulla sicurezza nei luoghi di lavoro (D.Lgs. 81/08) impongono precise procedure per chi accede a spazi confinati: rilevazione gas, presenza di assistente esterno, dispositivi di protezione individuale.",
          "Una ditta specializzata fornisce in genere il verbale di intervento, le schede tecniche dei prodotti utilizzati e, in alcuni casi, organizza un'analisi di laboratorio post-intervento. Questo è particolarmente importante in condominio, dove l'amministratore ha l'esigenza di documentare l'operato verso i condomini.",
          "Il costo tipico in Italia per una cisterna condominiale di medie dimensioni varia da poche centinaia a oltre mille euro, a seconda del volume e dell'accessibilità. Per una cisterna domestica di piccole dimensioni il costo è in genere contenuto. È bene farsi rilasciare un preventivo dettagliato che includa anche lo smaltimento dei rifiuti di lavaggio.",
        ],
      },
      {
        heading: "Analisi dopo la pulizia: perché è fondamentale",
        paragraphs: [
          "Una pulizia ben fatta non significa automaticamente acqua sicura: solo un'analisi di laboratorio fornisce la prova oggettiva che la sanificazione ha funzionato e che il serbatoio è tornato a essere conforme. È una verifica che dovrebbe essere parte integrante della procedura, e che in alcuni contesti (ristorazione, sanità) è obbligatoria.",
          "L'analisi minima prevede i parametri microbiologici principali: Escherichia coli, enterococchi intestinali, coliformi totali, conta delle colonie a 22 e 36 °C. È utile aggiungere parametri organolettici come torbidità, odore e sapore, oltre al cloro residuo per verificare che non siano rimasti residui del prodotto sanificante. Il prelievo va fatto dopo aver lasciato circolare l'acqua per qualche giorno, in modo da rappresentare l'esercizio normale.",
          "Il D.Lgs. 18/2023 prevede l'assenza di Escherichia coli ed enterococchi in 100 ml e l'assenza di coliformi nella rete di distribuzione. Se l'analisi mostra superamenti, va programmato un secondo intervento di sanificazione e una nuova analisi. Conservare i rapporti di prova per almeno cinque anni è una buona pratica gestionale.",
        ],
      },
      {
        heading: 'Cosa controllare nel referto',
        paragraphs: [
          "Quando ricevi il rapporto di prova, alcuni elementi vanno guardati con attenzione. Il primo è la modalità di prelievo: deve essere fatto da personale qualificato con bottiglie sterili e attivazione del rubinetto dopo flussaggio. Il secondo è la lista dei parametri microbiologici, che deve includere Escherichia coli, enterococchi, coliformi totali e la conta delle colonie.",
          "Per ciascun parametro il rapporto riporta il valore misurato, il limite di legge, l'unità di misura, il metodo analitico usato e l'incertezza di misura. Tutti questi parametri microbiologici nel D.Lgs. 18/2023 sono espressi come UFC (unità formanti colonia) per 100 ml di campione. L'esito conforme è il prerequisito per dichiarare la cisterna idonea.",
          "Sulla parte chimica, oltre al cloro residuo (che dopo i risciacqui dovrebbe essere intorno ai valori di rete, sotto 0,2 mg/L), conviene guardare la torbidità (sotto 1 NTU) e l'aspetto generale. Una persistenza di torbidità o di valori di colonie elevati indica che la sanificazione non è stata completa, oppure che c'è una contaminazione a monte o nei pressi della cisterna.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Ogni quanto si deve pulire la cisterna?',
        a: "La buona prassi prevede una pulizia e sanificazione completa almeno una volta all'anno, con ispezione visiva ogni 6 mesi. Per strutture ricettive e sanitarie la frequenza è spesso semestrale. Una cisterna in zona con acqua sedimentaria o esposta al sole può richiedere intervento più frequente.",
      },
      {
        q: 'Devo per forza chiamare una ditta specializzata?',
        a: 'Per cisterne grandi, interrate o in spazi confinati sì, sia per ragioni di sicurezza (D.Lgs. 81/08) sia per ottenere un verbale di intervento. Per piccole cisterne domestiche accessibili un proprietario informato può procedere autonomamente, ma deve usare prodotti per uso potabile e gestire correttamente lo smaltimento.',
      },
      {
        q: "Quali analisi devo fare dopo la pulizia?",
        a: "Almeno un pannello microbiologico con Escherichia coli, enterococchi intestinali, coliformi totali e conta delle colonie a 22 e 36 °C. È utile aggiungere torbidità, cloro residuo e parametri organolettici. Il prelievo va fatto in normale esercizio, dopo aver fatto circolare l'acqua per alcuni giorni.",
      },
      {
        q: 'Quanto costa pulire una cisterna domestica?',
        a: "Per una cisterna domestica di piccole dimensioni il costo è in genere contenuto. Per una cisterna condominiale di volume medio si parla di qualche centinaio fino a oltre mille euro, in funzione del volume, dell'accessibilità e dello smaltimento dei reflui di lavaggio.",
      },
      {
        q: 'Posso usare candeggina normale per sanificare?',
        a: "No: vanno usati prodotti dichiarati idonei al contatto con acqua destinata al consumo umano. La candeggina comune contiene tensioattivi e additivi non compatibili. Sono disponibili ipocloriti di sodio formulati esplicitamente per uso potabile.",
      },
      {
        q: 'Come riconosco una cisterna da pulire?',
        a: "Segnali tipici sono il cambio di sapore o odore dell'acqua, l'intorbidamento dopo eventi di pressione, depositi visibili sul fondo o sulle pareti, e analisi che mostrano valori microbiologici fuori soglia. Anche in assenza di sintomi, la cadenza annuale è la regola.",
      },
    ],
    relatedParameters: ['e_coli', 'coliformi_totali', 'enterococchi', 'torbidita'],
    relatedTopics: ['acqua-neonati', 'acqua-gravidanza', 'depuratore-casa-conviene'],
  },
  {
    slug: 'addolcitore-conviene',
    itName: 'Addolcitore: conviene?',
    shortTitle: "Addolcitore d'acqua: conviene davvero? Analisi onesta",
    metaDescription:
      "Addolcitore d'acqua casa: quando conviene, costi totali a 10 anni, svantaggi, aumento del sodio e alternative. Come misurare la durezza prima di acquistare.",
    searchKeywords: [
      'addolcitore conviene',
      'addolcitore acqua casa',
      'costo addolcitore',
      'addolcitore svantaggi',
      'addolcitore sale',
      'addolcitore conviene davvero',
    ],
    intro:
      "L'addolcitore è uno dei trattamenti dell'acqua più venduti in Italia, e anche uno dei più sopravvalutati. Per molte famiglie risolve un vero problema (caldaie incrostate, lavatrici che si rompono, calcare ovunque); per altre rappresenta una spesa importante e poco utile, e in qualche caso porta più svantaggi che benefici. In questa guida cerchiamo di dare risposte chiare e oneste: come funziona, quando conviene davvero, quanto costa nel tempo, quali sono i suoi limiti e come capire prima dell'acquisto se ti serve.",
    ctaVariant: 'laboratorio',
    ctaContext:
      "Per misurare la durezza esatta della tua acqua con strumentazione di laboratorio prima di acquistare un addolcitore:",
    sections: [
      {
        heading: 'Cos’è un addolcitore e come funziona',
        paragraphs: [
          "Un addolcitore è un dispositivo che riduce la durezza dell'acqua, cioè la quantità di calcio e magnesio disciolti, sostituendoli con sodio attraverso un processo di scambio ionico. Il cuore dell'apparecchio è una bombola contenente una resina cationica: l'acqua attraversa la resina, gli ioni calcio e magnesio si attaccano a essa e in cambio vengono rilasciati ioni sodio. Il risultato è un'acqua morbida, che non lascia più incrostazioni di calcare.",
          "Periodicamente la resina si satura e va rigenerata: una soluzione di sale (cloruro di sodio) viene fatta passare attraverso la resina, scaccia gli ioni calcio e magnesio e ripristina la capacità di scambio. Il sale viene caricato manualmente in un serbatoio di servizio, in genere ogni mese o due. La rigenerazione produce acqua di scarico salina, che viene scaricata in fognatura.",
          "L'addolcitore agisce solo sulla durezza: non rimuove cloro, nitrati, metalli pesanti, microbiologia, PFAS o pesticidi. Non è quindi un depuratore in senso ampio, ma uno strumento mirato a un solo parametro. La regolazione tipica prevede di non azzerare completamente la durezza ma di portarla a un valore residuo (di norma 15-20 °F) per evitare un'acqua troppo corrosiva.",
        ],
      },
      {
        heading: 'Quando conviene installarlo',
        paragraphs: [
          "L'addolcitore ha senso quando la tua acqua è effettivamente molto dura, indicativamente sopra i 30-35 gradi francesi (°F), e quando i danni del calcare sono concreti nella tua casa: caldaia che perde efficienza ogni 1-2 anni, scambiatori e resistenze che si incrostano rapidamente, rubinetterie e docce con depositi continui, lavatrice e lavastoviglie che richiedono molto sale o disincrostanti.",
          "Una durezza alta è tipica di vaste zone d'Italia, soprattutto in pianura padana, lungo l'Appennino calcareo e in alcune aree del Sud. Misurare la durezza esatta della tua acqua, con strumentazione di laboratorio o con kit attendibili, è il primo passo razionale prima di pensare all'addolcitore. Se la durezza è 25 °F o inferiore, l'investimento difficilmente si ripaga.",
          "Un altro caso in cui l'addolcitore conviene è la presenza di un impianto di riscaldamento centralizzato a piastre o a serpentino, particolarmente sensibile al calcare, oppure di una pompa di calore con scambiatori delicati. In questi casi il risparmio sui costi di manutenzione e sulla durata degli impianti giustifica l'investimento iniziale.",
        ],
        bullets: [
          'Durezza sopra 30-35 °F (zone tipicamente calcaree)',
          'Caldaia con incrostazioni frequenti',
          'Impianti di riscaldamento sensibili al calcare',
          'Lavatrici e lavastoviglie che richiedono molto sale',
        ],
      },
      {
        heading: 'Quando NON serve',
        paragraphs: [
          "Se la tua acqua è già morbida o moderatamente dura (sotto i 20-25 °F), l'addolcitore è un acquisto inutile. In molte zone d'Italia (es. acque alpine, alcune coste tirreniche) la durezza naturale è bassa e gli elettrodomestici non hanno problemi. Spendere 1500-3000 € per addolcire un'acqua già adatta è semplicemente uno spreco.",
          "L'addolcitore non risolve problemi di gusto, di odore di cloro, di nitrati alti o di metalli pesanti. Se il tuo problema è il sapore dell'acqua del rubinetto, ti servono altre soluzioni (caraffa a carbone, osmosi inversa). Se invece il problema è la presenza di contaminanti (nitrati, arsenico, piombo, PFAS), l'addolcitore non li tocca e può anche dare un falso senso di sicurezza.",
          "Va valutato con attenzione anche nelle famiglie in cui qualcuno deve limitare l'apporto di sodio per ragioni di salute (ipertensione, insufficienza renale, gravidanza con problemi pressori): l'acqua addolcita aumenta il sodio in modo proporzionale al calcio e magnesio rimossi, e in caso di durezza elevata l'incremento può essere significativo. In questi casi si tende a non addolcire la linea dedicata all'acqua da bere, oppure si predilige un'acqua minerale.",
        ],
      },
      {
        heading: 'Costi totali a 10 anni',
        paragraphs: [
          "Il prezzo di acquisto di un addolcitore domestico va indicativamente da 800 a 2500 € per i modelli più diffusi, con punte oltre i 4000 € per impianti di taglio superiore o con elettronica avanzata. A questo si aggiunge l'installazione idraulica, che varia da 200 a 500 € a seconda dell'accessibilità del punto di intervento. Già al primo giorno parliamo quindi di 1000-3000 € usciti dalle tasche.",
          "Il sale di rigenerazione è la voce di costo ricorrente: una famiglia di 4 persone consuma indicativamente 100-200 kg di sale all'anno, per una spesa annua di 30-80 €. La manutenzione (controllo settaggi, sanificazione resine, eventuali ricariche) ha un costo annuo di 50-150 € se affidata a un tecnico, gratuita se fatta in autonomia.",
          "Su un orizzonte di 10 anni, considerando una vita media dell'impianto pari proprio a quel periodo, il costo totale di possesso si aggira fra 1500 e 4000 €. A questi vanno aggiunti i consumi di acqua e di corrente per le rigenerazioni, modesti ma non nulli. Confrontare questo costo con il risparmio reale su caldaia, elettrodomestici e prodotti anti-calcare è il calcolo che ogni famiglia dovrebbe fare prima dell'acquisto.",
        ],
      },
      {
        heading: 'Svantaggi: sodio, manutenzione, spazio',
        paragraphs: [
          "Il principale svantaggio dell'addolcitore è l'aumento del sodio nell'acqua: per ogni grado francese di durezza rimosso si aggiungono circa 4,6 mg/L di sodio. Un'acqua a 40 °F portata a 15 °F vede crescere il sodio di circa 115 mg/L. Per persone sane non è un problema acuto, ma per chi soffre di ipertensione o di patologie renali può essere rilevante: di norma si preferisce mantenere la linea da bere e cucinare con acqua non addolcita.",
          "La manutenzione è un secondo punto da non sottovalutare. Le resine vanno sanificate periodicamente per evitare proliferazione batterica al loro interno, il sale va caricato con regolarità, le sonde e l'elettronica vanno controllate. Un addolcitore trascurato per anni può diventare una fonte di contaminazione anziché di beneficio. Lo spazio richiesto è significativo: una bombola da 25-50 litri di resine più il serbatoio del sale occupano spesso un metro quadro al piano interrato o in lavanderia.",
          "Infine, l'acqua addolcita è leggermente più aggressiva nei confronti delle tubazioni metalliche, soprattutto se la durezza residua è impostata troppo bassa. Per questo si tende a mantenere una durezza residua di 15-20 °F, che protegge gli impianti senza riportare problemi di calcare.",
        ],
      },
      {
        heading: 'Alternative: caraffa, osmosi inversa, anti-calcare elettronici',
        paragraphs: [
          "L'addolcitore non è l'unica risposta al problema della durezza. Per chi vuole un'acqua morbida solo da bere, una caraffa filtrante con resina decalcificante riduce parzialmente calcio e magnesio, a un costo iniziale di 30-60 € e cartucce da 10-15 € ogni 1-2 mesi. Non protegge però gli impianti e gli elettrodomestici, perché agisce solo sul punto d'uso.",
          "Un impianto a osmosi inversa al punto d'uso (in genere sottolavello) produce acqua a residuo fisso molto basso, quindi anche con durezza praticamente azzerata. È una soluzione mirata per l'acqua da bere e per la cucina, ma non protegge l'impianto domestico nel suo insieme. Il costo è simile a quello di un addolcitore di fascia media.",
          "Esistono infine i cosiddetti dispositivi anti-calcare elettronici o magnetici, che pretendono di trasformare la struttura cristallina del calcio senza rimuoverlo. La letteratura scientifica indipendente è molto cauta sulla loro efficacia reale: per quanto possano produrre qualche effetto in scenari specifici, non sono assimilabili a un vero addolcitore e non rimuovono il calcio dall'acqua. Vanno valutati con scetticismo, soprattutto se promessi come soluzione miracolosa.",
        ],
      },
      {
        heading: 'Come misurare la durezza prima di decidere',
        paragraphs: [
          "Misurare con precisione la durezza della tua acqua è il presupposto razionale per decidere. I gradi francesi (°F) sono l'unità più usata in Italia: 1 °F equivale a 10 mg/L di carbonato di calcio. Le classi più comuni: acqua molto dolce sotto 7 °F, dolce 7-14, mediamente dura 14-22, dura 22-32, molto dura sopra 32.",
          "I metodi più affidabili sono due. Il primo è consultare la relazione annuale sulla qualità dell'acqua del tuo gestore, che riporta valori medi di durezza per zona. È una stima rapida e gratuita, ma non considera variazioni stagionali e differenze di edificio. Il secondo è un'analisi di laboratorio sul tuo punto di prelievo, che fornisce il valore preciso in °F della tua acqua al rubinetto, con strumentazione tarata e metodi validati.",
          "Esistono anche kit di test fai-da-te con strisce reattive, dal costo di pochi euro: forniscono un'indicazione di larga massima ma non sono adatti per decisioni di investimento importanti. Considerato che parliamo di una scelta da 2000-4000 € su 10 anni, un'analisi di laboratorio a 30-50 € per la sola durezza è un costo trascurabile a fronte della decisione che ti aiuta a prendere.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'addolcitore conviene sempre?",
        a: "No. Conviene quando la tua durezza è realmente alta (sopra 30-35 °F) e i danni del calcare nella tua casa sono concreti. Sotto i 25 °F l'investimento difficilmente si ripaga; in queste situazioni esistono alternative più mirate (caraffa, osmosi al punto d'uso).",
      },
      {
        q: "Un addolcitore aumenta davvero il sodio nell'acqua?",
        a: "Sì, in modo proporzionale alla durezza rimossa: circa 4,6 mg/L di sodio per ogni grado francese tolto. Per persone con ipertensione, patologie renali o gravidanze con problemi pressori è prassi non addolcire la linea da bere e cucinare; in caso di dubbio rivolgersi al medico.",
      },
      {
        q: "Quanto costa un addolcitore tutto compreso?",
        a: "Il prezzo di acquisto va da 800 a 2500 € per i modelli più diffusi, con punte oltre i 4000 €. Aggiungendo installazione (200-500 €), sale (30-80 €/anno) e manutenzione (50-150 €/anno), il costo totale a 10 anni si colloca fra 1500 e 4000 € a seconda del modello.",
      },
      {
        q: "Gli anti-calcare elettronici funzionano?",
        a: "Le evidenze scientifiche indipendenti sono molto caute: per quanto possano avere qualche effetto in scenari specifici, non rimuovono il calcio dall'acqua e non sono assimilabili a un vero addolcitore. Vanno valutati con scetticismo, soprattutto se proposti come soluzione universale.",
      },
      {
        q: "Posso bere l'acqua addolcita?",
        a: "Sì, in linea generale, se la regolazione dell'addolcitore mantiene una durezza residua di 15-20 °F. Tuttavia, per persone con ipertensione o patologie renali è prassi non addolcire la linea destinata al consumo umano, per evitare l'aumento di sodio.",
      },
      {
        q: "Come faccio a sapere se la mia acqua è dura?",
        a: "Il modo più semplice è consultare la relazione annuale del gestore del tuo acquedotto, che riporta la durezza media. Per un valore preciso al tuo punto di prelievo conviene un'analisi di laboratorio, che a costo contenuto evita di spendere migliaia di euro su un addolcitore eventualmente non necessario.",
      },
    ],
    relatedParameters: ['durezza_totale', 'sodio'],
    relatedTopics: ['depuratore-casa-conviene', 'caraffa-filtrante-serve', 'acqua-cani-gatti'],
  },
  {
    slug: 'depuratore-casa-conviene',
    itName: 'Depuratore casa: serve?',
    shortTitle: "Depuratore d'acqua per casa: serve davvero?",
    metaDescription:
      "Depuratore acqua per casa: tipologie (caraffa, sottolavello, osmosi inversa), quando serve davvero, quando è inutile e come verificare l'efficacia con un'analisi.",
    searchKeywords: [
      'depuratore acqua casa',
      'depuratore conviene',
      'depuratore acqua rubinetto',
      'sistemi depurazione casa',
      'depuratore osmosi inversa',
    ],
    intro:
      "Negli ultimi anni il mercato dei depuratori domestici è cresciuto enormemente, spinto sia dal desiderio di ridurre il consumo di plastica sia dalla diffidenza verso l'acqua di rete. Il rovescio della medaglia è che molte vendite si basano più su paure generiche che su dati oggettivi: tantissime famiglie installano un sistema che non serve davvero. In questa guida cerchiamo di dare una bussola: cosa fa un depuratore, quali tipologie esistono, quando ha senso davvero installarne uno e come verificare con un'analisi che faccia ciò che promette.",
    ctaVariant: 'rapporto-prova',
    ctaContext:
      "Per verificare l'efficacia di un depuratore confrontando l'acqua prima e dopo l'installazione con un laboratorio qualificato:",
    sections: [
      {
        heading: 'Cosa fa un depuratore domestico',
        paragraphs: [
          "Il termine depuratore è un cappello generico che raccoglie sistemi molto diversi fra loro: caraffe a carbone attivo, microfiltri a sedimenti, sistemi a carbone in linea, lampade UV, scambiatori ionici, fino agli impianti a osmosi inversa. Ogni tecnologia agisce su contaminanti specifici e ha limiti precisi. Non esiste un depuratore universale che fa tutto.",
          "I sistemi più semplici, come caraffe e microfiltri, intervengono soprattutto su gusto, odore e cloro residuo: rendono l'acqua più piacevole da bere ma non eliminano contaminanti come nitrati, metalli pesanti o PFAS. I sistemi più complessi, come gli impianti a osmosi inversa, agiscono su un'ampia gamma di contaminanti disciolti ma hanno costi e ingombro maggiori, oltre a produrre acqua di scarto.",
          "La scelta del depuratore razionale parte da una domanda: cosa devo togliere dall'acqua? Se non lo sai, qualunque acquisto è alla cieca. Un'analisi di laboratorio sull'acqua di partenza è il primo passo, perché ti dice se hai un problema, dove ce l'hai, e quanto è grave. Solo allora si sceglie il sistema giusto.",
        ],
      },
      {
        heading: 'Tipologie principali',
        paragraphs: [
          "Le caraffe filtranti con cartuccia a carbone attivo e resina decalcificante sono il sistema più economico (30-60 € di partenza, 10-15 € per cartuccia ogni 1-2 mesi). Riducono cloro, parte della durezza temporanea, alcuni metalli leggermente. Non agiscono su nitrati, microbiologia, PFAS. Sono adatte a chi vuole solo migliorare il sapore.",
          "I microfiltri sottolavello a carbone attivo, con installazione fissa sulla linea fredda, hanno una capacità maggiore (3000-6000 litri per cartuccia) e prestazioni simili o leggermente superiori alle caraffe. Costano 100-300 € di impianto. Sono efficaci su gusto, cloro e composti organici volatili. Restano inefficaci su nitrati e altri contaminanti disciolti.",
          "Gli impianti a osmosi inversa al punto d'uso (sottolavello) producono acqua a residuo fisso molto basso (sotto 30 mg/L), rimuovono efficacemente nitrati, fluoruri, arsenico, metalli pesanti, PFAS, sali. Costano 250-900 € di impianto più installazione. Producono acqua di scarto e richiedono manutenzione (filtri ogni 6-12 mesi, membrana ogni 2-3 anni). Sono la scelta quando i contaminanti chimici disciolti sono il problema.",
          "Le lampade UV intervengono solo sulla microbiologia, abbattendo batteri e virus. Sono indicate per acque da pozzo privato o da cisterne. Non rimuovono nulla di chimico. Costano 200-600 € di impianto e richiedono sostituzione della lampada ogni 12 mesi.",
        ],
        bullets: [
          'Caraffe: cloro e gusto, basso costo',
          'Microfiltri carbone sottolavello: cloro e organici',
          'Osmosi inversa: contaminanti disciolti, alto investimento',
          'Lampade UV: solo microbiologia',
        ],
      },
      {
        heading: 'Quando serve davvero',
        paragraphs: [
          "Un depuratore ha senso reale in alcune situazioni precise. La prima è la presenza documentata di contaminanti chimici nell'acqua di rete (nitrati alti in pianura padana, arsenico nel Lazio nord, PFAS in Veneto): in questi casi un'osmosi inversa al punto d'uso riduce il rischio e migliora la qualità dell'acqua da bere. Il presupposto è un'analisi che evidenzi il problema specifico.",
          "Una seconda situazione è la casa in edificio storico con tubazioni vecchie e possibile rilascio di piombo: anche qui l'osmosi inversa è la risposta più solida, perché agisce direttamente sul problema. Una terza è la casa servita da pozzo privato o cisterna, dove la microbiologia è una variabile incerta: una lampada UV a valle, eventualmente in combinazione con altri trattamenti, fornisce una garanzia in più.",
          "Infine, ci sono motivazioni di gusto e di stile di vita: chi non sopporta il sapore di cloro o chi vuole eliminare l'acquisto delle bottiglie minerali (per costo, ingombro, plastica) trova in un depuratore semplice un'ottima risposta. Il calcolo del costo-beneficio rispetto alle bottiglie è in genere favorevole già nei primi 2-3 anni di utilizzo.",
        ],
      },
      {
        heading: "Quando è un acquisto inutile",
        paragraphs: [
          "Se la tua acqua di rete rispetta ampiamente i limiti del D.Lgs. 18/2023, non ha sapori sgradevoli e tu non hai esigenze cliniche particolari, un depuratore è in genere superfluo. La paura generica del rubinetto, alimentata da pubblicità aggressive, porta molte famiglie a installare impianti costosi che non risolvono alcun problema reale.",
          "Un secondo errore frequente è scegliere il depuratore sbagliato per il problema che si ha. Installare un addolcitore o una caraffa per risolvere un problema di nitrati o di arsenico non funziona: serve un'osmosi inversa. Viceversa, mettere un impianto a osmosi inversa con tutte le sue complicazioni quando il problema è solo il sapore di cloro è eccessivo: una caraffa a 50 € basta e avanza.",
          "Un terzo caso di acquisto inutile sono i sistemi venduti porta a porta con analisi domestiche sommarie e prezzi gonfiati. Le promesse miracolose (acqua antiossidante, alcalina, biodinamica, energizzata) non hanno fondamento scientifico riconosciuto e non riguardano la potabilità. Prima di firmare qualunque contratto, fai un'analisi in un laboratorio qualificato e indipendente.",
        ],
      },
      {
        heading: 'Come scegliere tra le tecnologie',
        paragraphs: [
          "La scelta razionale parte dal risultato dell'analisi e dall'obiettivo che vuoi raggiungere. Se l'analisi non evidenzia problemi e tu vuoi solo migliorare il sapore, una caraffa filtrante o un microfiltro a carbone bastano. Se ci sono problemi puntuali di gusto e organici volatili, un sistema a carbone sottolavello è una buona scelta.",
          "Se l'analisi mostra contaminanti chimici disciolti (nitrati, arsenico, fluoruri, metalli pesanti, PFAS), la risposta tecnologica adeguata è l'osmosi inversa, eventualmente con rimineralizzazione per chi non gradisce un'acqua a residuo fisso molto basso. È la tecnologia più completa, più costosa, più ingombrante e quella che spreca più acqua di scarto.",
          "Se il problema è microbiologico (pozzo, cisterna sospetta), una lampada UV in linea, eventualmente con pre-filtrazione, è la soluzione mirata. Spesso le situazioni reali combinano più problemi: pozzo con nitrati e microbiologia richiede sia un'osmosi sia un UV. Un tecnico qualificato e indipendente, sulla base dei risultati di analisi, è la figura giusta per progettare la combinazione.",
        ],
      },
      {
        heading: "Verificare l'efficacia: analisi pre/post",
        paragraphs: [
          "Una volta installato il depuratore, la sua efficacia non va data per scontata. La verifica oggettiva è un'analisi pre e post: fai analizzare l'acqua di rete prima dell'installazione (così sai da dove parti) e una seconda analisi sulla stessa rete e sull'acqua trattata dopo qualche settimana di esercizio. Confrontando i due rapporti di prova vedi se il sistema fa davvero ciò che promette.",
          "I parametri da analizzare dipendono dal sistema e dall'obiettivo. Per un'osmosi inversa: nitrati, residuo fisso, durezza, sodio, metalli pesanti, fluoruri ed eventualmente PFAS. Per un sistema a carbone: cloro residuo e indicatori di gusto. Per una lampada UV: indicatori microbiologici. È un investimento di 100-200 € che ti dice in modo oggettivo se hai speso bene 500-2000 € di impianto.",
          "La verifica andrebbe ripetuta periodicamente, almeno una volta all'anno per gli impianti a osmosi inversa, per intercettare cali di prestazioni dovuti a membrane esauste o a pre-filtri mai sostituiti. È molto frequente trovare impianti installati anni fa che oggi producono acqua peggiore di quella di partenza, semplicemente perché nessuno ha più toccato i filtri.",
        ],
      },
    ],
    faqs: [
      {
        q: "Mi serve davvero un depuratore in casa?",
        a: "Dipende dalla qualità della tua acqua di rete e dalle tue esigenze. Se l'acqua è conforme e di buon sapore, in genere no. Se hai contaminanti documentati, tubazioni vecchie o un pozzo, può servire. La risposta razionale parte sempre da un'analisi di laboratorio.",
      },
      {
        q: 'Una caraffa filtrante basta?',
        a: "Basta se il problema è solo cloro e gusto. Non basta se hai nitrati, arsenico, piombo o PFAS: la caraffa non agisce su questi contaminanti. In caso di dubbio sulla composizione della tua acqua un'analisi mirata chiarisce.",
      },
      {
        q: 'Osmosi inversa o sottolavello a carbone?',
        a: "Dipende dai contaminanti. Per nitrati, arsenico, fluoruri, PFAS e metalli pesanti serve l'osmosi inversa. Per cloro, composti organici volatili e gusto basta un sistema a carbone, molto meno costoso e ingombrante.",
      },
      {
        q: "Quanto costa mantenere un impianto a osmosi inversa?",
        a: "I pre-filtri vanno cambiati ogni 6-12 mesi (40-80 €), la membrana ogni 2-3 anni (80-150 €). A questo si aggiunge la sanificazione annuale del serbatoio e l'acqua di scarto. Il costo annuo di esercizio si aggira fra 80 e 150 €.",
      },
      {
        q: 'I depuratori venduti porta a porta sono affidabili?',
        a: "Molti sono onesti ma alcuni operatori spingono prodotti costosi sulla base di analisi domestiche sommarie e di paure generiche. Prima di firmare un contratto importante, conviene sempre un'analisi indipendente in un laboratorio qualificato che mostri se il problema c'è davvero.",
      },
      {
        q: "Come verifico che il depuratore funzioni?",
        a: "Con un'analisi prima dell'installazione e una seconda dopo qualche settimana di esercizio, sullo stesso punto di prelievo. Confrontando i due rapporti vedi se il sistema riduce davvero i parametri target. È una verifica da ripetere almeno una volta all'anno.",
      },
    ],
    relatedParameters: ['cloro_residuo', 'piombo', 'nitrati', 'pfas_totali'],
    relatedTopics: ['caraffa-filtrante-serve', 'addolcitore-conviene', 'acqua-neonati'],
  },
  {
    slug: 'caraffa-filtrante-serve',
    itName: 'Caraffa filtrante: serve?',
    shortTitle: 'Caraffa filtrante: serve davvero? Pro e contro',
    metaDescription:
      "Caraffa filtrante: come funziona, cosa riduce davvero (cloro, durezza), cosa NON elimina (nitrati, PFAS, microbi), costi e quando ha senso usarla.",
    searchKeywords: [
      'caraffa filtrante serve',
      'caraffa filtrante',
      'filtri caraffa funzionano',
      'caraffa filtrante svantaggi',
      'brita acqua',
    ],
    intro:
      "La caraffa filtrante è uno degli strumenti di trattamento dell'acqua più diffusi in Italia: economica, semplice, immediatamente disponibile in qualsiasi supermercato. Le pubblicità promettono spesso molto: acqua più pura, più leggera, più sana. La realtà tecnica è più sfumata: la caraffa risolve alcuni problemi specifici, ma è del tutto inefficace su altri. In questa guida vediamo come funziona davvero, cosa riduce, cosa non elimina, quanto costa nel tempo e quando ha senso scegliere altre soluzioni.",
    ctaVariant: 'kit-analisi',
    ctaContext:
      "Per verificare quali contaminanti la tua caraffa riduce davvero con un'analisi di laboratorio:",
    sections: [
      {
        heading: 'Come funziona una caraffa filtrante',
        paragraphs: [
          "Una caraffa filtrante è composta da un serbatoio superiore in cui versi l'acqua di rete, una cartuccia filtrante centrale e un serbatoio inferiore di raccolta. L'acqua scorre per gravità attraverso la cartuccia, che contiene in genere una combinazione di carbone attivo granulare e una resina a scambio ionico. Il carbone attivo, grazie alla sua enorme superficie specifica, adsorbe il cloro libero residuo, alcuni composti organici volatili e parte delle sostanze responsabili di sapori e odori. La resina a scambio ionico cattura alcuni cationi, fra cui parte del calcio e del magnesio (durezza temporanea) e quantità limitate di alcuni metalli.",
          "La portata è bassa: una caraffa standard impiega 2-5 minuti per filtrare un litro, in funzione della cartuccia e del livello di saturazione. La capacità tipica di una cartuccia è 100-200 litri d'acqua, dichiarata dal produttore, in genere corrispondenti a 4-6 settimane di utilizzo domestico. Dopo questo periodo la cartuccia va sostituita: il carbone si satura e la resina perde efficacia.",
          "Le caraffe di buona qualità riportano sull'etichetta una serie di prestazioni rispetto a parametri specifici, spesso normate da standard internazionali. Vale la pena leggere queste schede tecniche: dichiarano in modo trasparente cosa riducono e di quanto, e cosa non agiscono.",
        ],
      },
      {
        heading: 'Cosa riduce realmente',
        paragraphs: [
          "I parametri che una caraffa filtrante riduce con efficacia comprovata sono pochi ma utili. Il cloro libero residuo, responsabile dell'odore e del sapore di disinfettante, viene abbattuto in modo significativo grazie al carbone attivo, con riduzioni tipiche del 90-99 per cento già dai primi litri filtrati. Questo è il principale vero motivo per cui una caraffa migliora la percezione organolettica dell'acqua.",
          "La durezza temporanea, dovuta principalmente ai bicarbonati di calcio e magnesio, viene parzialmente ridotta dalla resina a scambio ionico: tipicamente del 20-50 per cento, con valori che decrescono nel corso dell'utilizzo della cartuccia. È una riduzione percepibile, soprattutto su acque molto dure dove la formazione di calcare nel bollitore o nella moka è marcata.",
          "Alcuni metalli pesanti, fra cui il piombo e il rame, possono essere ridotti in modo apprezzabile, soprattutto da cartucce evolute che includono resine specifiche. I valori dichiarati variano molto fra produttori e fra modelli. Anche su alcuni composti organici (residui di pesticidi a basso peso molecolare, residui farmaceutici) i carboni attivi mostrano una certa efficacia, anche se non garantita a livello quantitativo.",
        ],
        bullets: [
          'Cloro libero residuo (riduzione 90-99 per cento)',
          'Durezza temporanea (20-50 per cento, decrescente)',
          'Piombo e altri metalli (riduzione parziale, varia per modello)',
          'Alcuni composti organici (riduzione apprezzabile, non quantificata)',
        ],
      },
      {
        heading: 'Cosa NON elimina',
        paragraphs: [
          "Sui contaminanti più preoccupanti dell'acqua di rete italiana, la caraffa filtrante è in larga parte inefficace. I nitrati, principale problema delle aree agricole e della pianura padana, non vengono praticamente toccati: né il carbone né la resina standard hanno affinità per il nitrato. Le acque con nitrati al limite di 50 mg/L o vicine non vengono migliorate dalla caraffa.",
          "I PFAS (sostanze perfluoroalchiliche), problema serio in alcune aree del Veneto e in monitoraggio in altre regioni, non sono il bersaglio delle caraffe convenzionali. Alcuni carboni attivi possono trattenere parzialmente certi PFAS a catena lunga, ma le prestazioni sono variabili e non garantite. Per chi vive in aree con PFAS la caraffa non è la risposta.",
          "Sul fronte microbiologico, la caraffa non è un disinfettante: non elimina batteri, virus, parassiti. Anzi, se la cartuccia non viene sostituita ai tempi previsti, il carbone bagnato a temperatura ambiente diventa un substrato in cui i batteri eterotrofi possono proliferare, peggiorando la qualità dell'acqua filtrata rispetto a quella di rete. Anche l'arsenico e i fluoruri non vengono affrontati dalle caraffe standard. Per tutti questi contaminanti servono tecnologie diverse, in primis l'osmosi inversa.",
        ],
      },
      {
        heading: 'Il costo reale a 5 anni',
        paragraphs: [
          "La caraffa è economica all'acquisto (20-50 €) ma le cartucce hanno un costo ricorrente che a 5 anni diventa significativo. Una famiglia che usa la caraffa per tutta l'acqua da bere e per la cucina consuma indicativamente una cartuccia ogni 4-6 settimane. Il costo per cartuccia varia da 6 a 15 € a seconda del modello e della marca.",
          "Su 5 anni il consumo è di 40-60 cartucce, con un costo totale di 250-900 € solo per le cartucce, più la caraffa iniziale. È una spesa che molte famiglie sottostimano e che si avvicina, o supera, il costo di un microfiltro sottolavello a carbone, soluzione tecnicamente superiore e con manutenzione meno frequente.",
          "Per chi consuma solo qualche litro al giorno di acqua filtrata, esclusivamente per il sapore, la caraffa rimane comunque la scelta più semplice e flessibile. Non richiede installazione, è portatile, occupa poco spazio. È la classica soluzione a basso impegno per un problema percepito come minore.",
        ],
      },
      {
        heading: 'Confronto con osmosi inversa e altri sistemi',
        paragraphs: [
          "Rispetto a un microfiltro sottolavello a carbone, la caraffa ha prestazioni simili sul cloro e sul gusto ma capacità molto inferiore (litri filtrati per cartuccia) e flessibilità minore. Il microfiltro sottolavello costa 100-300 € di impianto e 30-60 € l'anno di cartucce: a 5 anni il bilancio è in molti casi favorevole rispetto alle caraffe.",
          "Rispetto all'osmosi inversa la differenza è abissale dal punto di vista tecnico: l'osmosi rimuove nitrati, PFAS, arsenico, metalli pesanti, sali e produce acqua a residuo fisso bassissimo. La caraffa non fa nulla di tutto questo. Per problemi seri di qualità dell'acqua di rete l'osmosi è la risposta, la caraffa è solo un palliativo.",
          "Rispetto all'acqua minerale in bottiglia, la caraffa fa risparmiare molto in termini di plastica, di trasporto e di costo, anche considerando le cartucce. Per chi è motivato dalla riduzione dell'impatto ambientale è una scelta sensata. Il rovescio della medaglia è che il sapore può cambiare con la cartuccia che invecchia, mentre la bottiglia dà uno standard più costante.",
        ],
      },
      {
        heading: 'Manutenzione e rischi',
        paragraphs: [
          "La principale criticità delle caraffe filtranti è la manutenzione che spesso viene trascurata. La cartuccia va sostituita ai tempi indicati dal produttore (in genere 4-6 settimane), indipendentemente da quanti litri si sono filtrati. Una cartuccia esaurita non solo perde efficacia ma può rilasciare quanto adsorbito, peggiorando l'acqua filtrata rispetto a quella di partenza.",
          "L'umidità permanente all'interno della cartuccia a temperatura ambiente è un terreno favorevole alla proliferazione batterica. Studi indipendenti hanno mostrato che caraffe non manutenute possono presentare cariche microbiche elevate, soprattutto se l'acqua filtrata stagna a lungo nel serbatoio inferiore. La caraffa va svuotata e lavata regolarmente, e l'acqua filtrata consumata in 1-2 giorni.",
          "Una cartuccia nuova va attivata seguendo le istruzioni del produttore: in genere si filtra e si scarta un certo numero di litri iniziali, per allontanare polveri di carbone e residui. Saltare questo passaggio significa bere acqua con tracce indesiderate. Tenere conto di queste piccole accortezze fa la differenza fra una caraffa utile e una caraffa che peggiora le cose.",
        ],
      },
    ],
    faqs: [
      {
        q: 'La caraffa filtrante elimina i nitrati?',
        a: "No, le caraffe standard non agiscono praticamente sui nitrati. Per chi vive in zone con nitrati alti (pianura padana, aree agricole) la caraffa non è la risposta: serve un impianto a osmosi inversa al punto d'uso.",
      },
      {
        q: 'La caraffa elimina il calcare?',
        a: "Lo riduce parzialmente, soprattutto nella durezza temporanea, grazie alla resina a scambio ionico. La riduzione è tipicamente del 20-50 per cento e decresce nel corso della vita della cartuccia. Per un'eliminazione efficace del calcare nell'impianto domestico serve un addolcitore, non una caraffa.",
      },
      {
        q: "Ogni quanto devo cambiare la cartuccia?",
        a: "I produttori indicano in genere 4-6 settimane, indipendentemente dai litri filtrati. La data di scadenza è anche legata alla saturazione del carbone e al rischio di proliferazione batterica. Rispettare il calendario di sostituzione è cruciale.",
      },
      {
        q: 'La caraffa filtrante è meglio dell’acqua del rubinetto?',
        a: "Dipende. Migliora sapore e odore (cloro), e in casi specifici riduce parzialmente alcuni metalli. Non migliora l'acqua su nitrati, PFAS, microbiologia. Se l'acqua di rete è già conforme e di buon sapore, il vantaggio è marginale; se hai problemi seri, la caraffa non basta.",
      },
      {
        q: "Posso usare una caraffa per acqua di pozzo?",
        a: "Sconsigliato come unico trattamento: la caraffa non disinfetta e non rimuove nitrati. Per il pozzo servono soluzioni dedicate (osmosi inversa, lampada UV, microfiltrazione), eventualmente combinate, con monitoraggio analitico periodico.",
      },
      {
        q: 'Conviene la caraffa o un microfiltro sottolavello?',
        a: "Sul lungo periodo il microfiltro sottolavello a carbone ha in genere costi totali simili o inferiori e prestazioni paragonabili o migliori, oltre a non occupare il frigorifero. La caraffa rimane più flessibile e non richiede installazione.",
      },
    ],
    relatedParameters: ['cloro_residuo', 'durezza_totale'],
    relatedTopics: ['depuratore-casa-conviene', 'addolcitore-conviene', 'acqua-cani-gatti'],
  },
  {
    slug: 'acqua-allenamento-palestra',
    itName: 'Acqua in palestra e sport',
    shortTitle: 'Acqua in palestra e sport: minerale, rubinetto o filtrata?',
    metaDescription:
      "Acqua durante l'allenamento: rubinetto, minerale o filtrata? Sodio, elettroliti, durezza, qualità delle borracce e quando ha senso un'analisi.",
    searchKeywords: [
      'acqua sport',
      'acqua palestra',
      'acqua durante allenamento',
      'acqua minerale sport',
      'elettroliti acqua',
      'che acqua bere quando ci si allena',
    ],
    intro:
      "Per chi si allena con costanza, il tema dell'idratazione non è secondario. Tantissimi consigli circolano fra appassionati: bere acqua del rubinetto, scegliere una minerale ricca di sali, comprare bevande sportive, evitare le borracce di plastica. La verità è che per la maggior parte degli sportivi amatoriali l'acqua del rubinetto, integrata con un'alimentazione equilibrata, è perfettamente adeguata. Le scelte cambiano quando gli allenamenti diventano intensi e prolungati. In questa guida vediamo cosa dice davvero la scienza dell'idratazione applicata allo sport e dove sta la differenza fra mito e dato.",
    ctaVariant: 'completa',
    ctaContext:
      "Per analizzare l'acqua del rubinetto che utilizzi quotidianamente per gli allenamenti con un laboratorio qualificato:",
    sections: [
      {
        heading: "Fabbisogno idrico durante l'attività fisica",
        paragraphs: [
          "Durante l'attività fisica il corpo perde liquidi attraverso la sudorazione, con tassi che variano da 0,5 a oltre 2 litri all'ora in funzione di intensità, temperatura, umidità e caratteristiche individuali. Una disidratazione del 2 per cento del peso corporeo è sufficiente a ridurre sensibilmente la performance, e una disidratazione maggiore può portare a crampi, vertigini e nei casi estremi a colpo di calore.",
          "La regola pratica è bere prima, durante e dopo l'allenamento. Prima: 400-600 ml nelle 2 ore precedenti. Durante: 150-250 ml ogni 15-20 minuti per allenamenti che superano i 60 minuti. Dopo: 1-1,5 litri per ogni kg di peso perso. Per allenamenti brevi e di intensità moderata, l'acqua del rubinetto è in genere sufficiente; per allenamenti lunghi e intensi, soprattutto al caldo, l'integrazione con sali diventa importante.",
          "L'acqua è il veicolo principale di reidratazione, ma con la sudorazione si perdono anche elettroliti: sodio in primis, poi cloro, potassio e in minor misura magnesio. La perdita di sodio è quella che determina la maggior parte dei sintomi da iponatremia in atleti che bevono solo acqua durante eventi molto lunghi (oltre 3-4 ore).",
        ],
      },
      {
        heading: 'Acqua del rubinetto con sali o minerale sportiva?',
        paragraphs: [
          "Per la maggior parte degli sportivi amatoriali (palestra, corsa fino a 1-2 ore, ciclismo amatoriale) l'acqua del rubinetto è perfettamente adeguata se l'alimentazione quotidiana fornisce un normale apporto di sodio e di altri elettroliti. La paura di rimanere senza sali durante un'ora di lezione di crossfit è spesso esagerata: dopo l'allenamento un pasto normale ricostituisce le riserve.",
          "Per allenamenti più lunghi (corsa oltre 90 minuti, ciclismo oltre 2 ore, sport di squadra al caldo) può avere senso aggiungere all'acqua una miscela di sali (sodio in primis) per compensare le perdite. Esistono formulazioni in polvere o effervescenti adatte allo scopo; in alternativa si scelgono acque minerali ricche di sodio e di bicarbonati, identificate in etichetta come adatte allo sport.",
          "Acqua del rubinetto più sali, oppure minerale sportiva: sono due strade equivalenti in termini di efficacia. La differenza è di costo (l'acqua di rete è infinitamente più economica), di praticità (la minerale è pronta all'uso) e di gusto (alcune minerali sportive risultano più gradevoli durante lo sforzo). La scelta è personale.",
        ],
      },
      {
        heading: 'Sodio: amico negli sforzi lunghi, attenzione altrove',
        paragraphs: [
          "Il sodio è l'elettrolita più importante da reintegrare in allenamenti prolungati. La perdita media per litro di sudore è di 500-1500 mg di sodio, con variabilità individuale legata anche all'allenamento (i soggetti allenati perdono meno sodio per litro di sudore). In gare di lunga durata (maratone, triathlon, trail) un'integrazione di sodio è considerata essenziale per evitare crampi e iponatremia.",
          "Fuori dall'allenamento, però, il sodio è anche il nutriente di cui l'italiano medio assume troppo: la dieta tipica fornisce 8-12 grammi di sale al giorno, contro le 5 raccomandate dall'Organizzazione Mondiale della Sanità. Aggiungere indiscriminatamente sodio all'acqua quotidiana (anche fuori allenamento) non è una buona idea per la salute cardiovascolare a lungo termine.",
          "La regola sensata è distinguere: durante e immediatamente dopo allenamenti lunghi, una bevanda con sodio (45-100 mg per 100 ml è una concentrazione tipica delle isotoniche) ha senso. Nelle restanti ore della giornata, l'acqua a basso sodio (rubinetto in moltissime aree d'Italia, oligominerali) è la scelta più equilibrata.",
        ],
        bullets: [
          'Allenamenti sotto 60 minuti: acqua del rubinetto basta',
          'Allenamenti 60-90 minuti caldi: utile sale aggiunto',
          'Allenamenti oltre 90 minuti: integrazione di sodio importante',
          'Sodio fuori allenamento: già troppo nella dieta media italiana',
        ],
      },
      {
        heading: "Acqua del rubinetto in borraccia: qualità della borraccia",
        paragraphs: [
          "Riempire una borraccia con l'acqua del rubinetto e portarla in palestra o in bici è una pratica ecologica ed economica, ma la qualità dell'acqua dipende anche dalla borraccia. Le borracce mal lavate diventano in pochi giorni un terreno di proliferazione batterica: residui di saliva, di zuccheri di bevande precedenti e l'umidità costante creano un biofilm interno che peggiora gusto e sicurezza.",
          "Le borracce vanno lavate dopo ogni utilizzo con acqua calda e detergente neutro, con scovolino per le superfici interne curve. Quelle in plastica vanno sostituite quando mostrano segni di usura (graffi, opacità, odori persistenti), perché i graffi diventano nicchie per batteri. Le borracce in acciaio inox sono più igieniche e durano molto più a lungo, anche se costano di più.",
          "Un'altra accortezza: le borracce lasciate in macchina al sole estivo possono raggiungere temperature elevate, peggiorando sia gli aspetti microbiologici sia, per le plastiche di bassa qualità, la migrazione di sostanze. È preferibile portare la borraccia con sé e svuotarla a fine giornata.",
        ],
      },
      {
        heading: "Quando ha senso un’analisi",
        paragraphs: [
          "Per uno sportivo amatoriale che usa acqua di rete o minerali comuni un'analisi specifica non è in genere necessaria: i parametri rilevanti (sodio, durezza) sono in larga parte già accessibili tramite la relazione del gestore o l'etichetta della bottiglia. La situazione cambia per chi si allena in modo intensivo e quotidiano usando acqua di rete in una zona con caratteristiche particolari.",
          "Un'analisi al proprio punto di prelievo ha senso, per esempio, per chi vive in zona PFAS e si idrata con grandi volumi di acqua quotidianamente: l'esposizione cumulata è proporzionale al volume bevuto. Lo stesso vale per chi vive in zone con sodio molto alto e segue una dieta povera di sale per ragioni di salute: l'acqua diventa una variabile da quantificare.",
          "Per atleti professionisti o agonisti il quadro analitico fa parte degli strumenti del nutrizionista sportivo, che integra dati sull'acqua, sulla composizione corporea e sulla pianificazione dell'allenamento. Per l'amatore, una buona conoscenza dei valori medi del proprio acquedotto e dell'acqua minerale di riferimento è in genere sufficiente.",
        ],
      },
      {
        heading: 'Idratazione, sport agonistico e qualità',
        paragraphs: [
          "Nel mondo agonistico l'idratazione è una scienza a sé. La pesata pre e post allenamento è la pratica standard per calcolare il tasso di sudorazione individuale e calibrare l'apporto idrico. Le bevande sportive sono formulate con precisione su carboidrati e sodio per ottimizzare l'assorbimento (concentrazione di carboidrati intorno al 6-8 per cento, sodio 45-100 mg per 100 ml). La temperatura della bevanda incide sull'assorbimento: meglio fresca (10-15 °C) ma non gelata.",
          "La qualità dell'acqua di partenza diventa più rilevante nel monte ore di allenamento alto: chi beve 3-4 litri al giorno di acqua di rete sta accumulando l'esposizione a qualsiasi contaminante presente. Per questo le squadre professionistiche curano spesso la qualità dell'acqua nei centri di allenamento, anche installando sistemi di filtrazione.",
          "Per l'amatore evoluto la regola pratica è: privilegia un'acqua di buona qualità per l'idratazione quotidiana (rubinetto in zone con parametri buoni, minerali oligominerali in alternativa), integra sodio nei lavori lunghi e caldi, gestisci con cura le borracce e ascolta il tuo corpo. Sete, colore delle urine e variazione di peso sono i tre indicatori più semplici e affidabili dell'idratazione.",
        ],
      },
    ],
    faqs: [
      {
        q: "Posso bere acqua del rubinetto in palestra?",
        a: "Sì, nella stragrande maggioranza dei casi è perfettamente adeguata per allenamenti di durata fino a 60-90 minuti. Per allenamenti più lunghi e al caldo può essere utile integrare con sodio. Verifica la qualità della tua acqua di rete con la relazione annuale del gestore o, in caso di dubbio, con un'analisi mirata.",
      },
      {
        q: "Devo bere acqua minerale ricca di sodio se mi alleno?",
        a: "Dipende dalla durata e intensità. Per sessioni brevi in palestra non serve. Per allenamenti oltre 90 minuti o sport endurance, una bevanda con sodio aiuta a prevenire crampi e iponatremia. Fuori allenamento, attenzione a non eccedere: la dieta media italiana ne contiene già troppo.",
      },
      {
        q: 'Le bevande sportive sono meglio dell’acqua?',
        a: "Solo in contesti specifici: allenamenti lunghi, sport endurance, sudorazione abbondante. Per attività brevi o moderate l'acqua è sufficiente e le bevande sportive aggiungono solo zuccheri inutili. La scelta razionale si fa in base a durata, intensità e temperatura ambientale.",
      },
      {
        q: 'La borraccia in plastica è sicura per lo sport?',
        a: "Sì se di qualità alimentare, non graffiata, ben lavata e non esposta al sole o al caldo. Le borracce in acciaio inox sono igienicamente superiori e più durature. In tutti i casi la pulizia quotidiana è essenziale per evitare proliferazione batterica.",
      },
      {
        q: "Quanto devo bere durante un allenamento di un'ora?",
        a: "Mediamente 400-700 ml, distribuiti in piccole assunzioni frequenti (150-250 ml ogni 15-20 minuti). Il dato esatto dipende da intensità, temperatura e dalla tua sudorazione personale. Pesarsi prima e dopo è il metodo più semplice per calibrarsi.",
      },
      {
        q: "Se mi alleno tutti i giorni, devo analizzare l'acqua di casa?",
        a: "Per uno sportivo amatoriale in genere no, se non vivi in zona con criticità note. Se invece bevi grandi volumi (3-4 litri al giorno) e vivi in zona con PFAS, sodio alto o altri parametri di interesse, un'analisi al tuo punto di prelievo dà valore aggiunto e permette scelte informate.",
      },
    ],
    relatedParameters: ['sodio', 'durezza_totale', 'ph'],
    relatedTopics: ['acqua-gravidanza', 'caraffa-filtrante-serve', 'depuratore-casa-conviene'],
  },
];

const TOPIC_GUIDE_INDEX: Map<string, TopicGuide> = new Map(
  TOPIC_GUIDES.map((guide) => [guide.slug, guide]),
);

export function getTopicBySlug(slug: string): TopicGuide | undefined {
  return TOPIC_GUIDE_INDEX.get(slug);
}
