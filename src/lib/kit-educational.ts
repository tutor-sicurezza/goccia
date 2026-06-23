export interface KitInfo {
  slug: string;
  itName: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  parametersIncluded: string[];
  typicalCost: string;
  typicalTurnaround: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  ctaContext: string;
  relatedSlugs?: string[];
}

export const KIT_EDU: KitInfo[] = [
  {
    slug: "kit-microbiologia-base",
    itName: "Kit microbiologia base per acqua potabile",
    shortTitle: "Kit microbiologia base",
    metaDescription:
      "Guida educativa al kit di analisi microbiologica base dell'acqua: parametri, modalità di prelievo, tempi di consegna e fascia di costo indicativa.",
    searchKeywords: [
      "kit microbiologico acqua",
      "analisi microbiologica acqua potabile",
      "Escherichia coli acqua",
      "coliformi totali acqua rubinetto",
      "analisi batteriologica acqua casa",
    ],
    intro:
      "Il kit microbiologico base è il pacchetto di analisi più comune quando si vuole capire se l'acqua del rubinetto, di un pozzo o di una cisterna sia stabile dal punto di vista batteriologico. Si tratta di un controllo finalizzato a verificare l'assenza dei principali indicatori di contaminazione fecale o ambientale, senza approfondire metalli o sostanze chimiche.",
    parametersIncluded: [
      "Escherichia coli",
      "Coliformi totali",
      "Enterococchi intestinali",
      "Conteggio colonie a 22 °C",
      "Conteggio colonie a 36 °C",
      "Pseudomonas aeruginosa (opzionale)",
    ],
    typicalCost: "100-140 € indicativi, in funzione del laboratorio",
    typicalTurnaround: "5-7 giorni lavorativi dal ricevimento campione",
    sections: [
      {
        heading: "A cosa serve un'analisi microbiologica di base",
        paragraphs: [
          "L'analisi microbiologica di base nasce per rispondere a una domanda semplice: l'acqua che bevo è stabile dal punto di vista batterico in questo momento? I parametri inclusi sono indicatori, non patogeni in senso stretto: la loro presenza segnala che qualcosa nel circuito di distribuzione o nella fonte non sta funzionando come dovrebbe.",
          "È il punto di partenza tipico per chi si trasferisce in una nuova casa, riapre una seconda abitazione dopo mesi, o nota cambiamenti di sapore e odore. Per un quadro più completo è opportuno affiancare un controllo chimico-fisico di base.",
        ],
      },
      {
        heading: "Come si esegue il prelievo",
        paragraphs: [
          "Il prelievo per la microbiologia richiede attenzioni che non servono per la chimica: si usano contenitori sterili, si flambano i rubinetti dove possibile e si evita qualsiasi contatto delle mani con la bocca della bottiglia. Il campione va consegnato refrigerato e analizzato entro tempi brevi, idealmente entro 24 ore dal prelievo.",
        ],
        bullets: [
          "Bottiglia sterile fornita nel kit, non riutilizzare contenitori propri",
          "Far scorrere l'acqua per circa 2-3 minuti prima del prelievo",
          "Riempire fino al collo senza toccare l'interno del tappo",
          "Trasportare in borsa termica con siberini",
        ],
      },
      {
        heading: "Come leggere il referto",
        paragraphs: [
          "Per le acque destinate al consumo umano i valori di riferimento prevedono assenza in 100 ml per E. coli, enterococchi e coliformi. Il conteggio colonie viene espresso come UFC/ml e non ha un limite numerico fisso nel D.Lgs. 18/2023, ma viene letto come segnale di stabilità: variazioni anomale rispetto a controlli precedenti meritano un approfondimento.",
        ],
      },
      {
        heading: "Quando ripetere il controllo",
        paragraphs: [
          "Per uso domestico in rete pubblica, una verifica annuale è generalmente più che sufficiente. Per pozzi privati o cisterne è ragionevole salire a due o tre controlli all'anno, distribuendoli su stagioni diverse, poiché piogge intense e siccità possono modificare il profilo microbiologico della falda.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il kit microbiologico rileva tutti i batteri presenti?",
        a: "No, vengono cercati indicatori specifici: la loro assenza non garantisce sterilità assoluta, ma è considerata un segnale affidabile di buona qualità.",
      },
      {
        q: "Posso prelevare il campione da solo?",
        a: "Sì, seguendo le istruzioni del kit. In caso di analisi per pratiche ufficiali può essere richiesto un prelievo eseguito da tecnico esterno.",
      },
      {
        q: "Quanto tempo passa fra prelievo e referto?",
        a: "Tipicamente 5-7 giorni lavorativi: i parametri batteriologici richiedono tempi di incubazione standard che non si possono accelerare.",
      },
      {
        q: "Se trovo coliformi devo bere acqua in bottiglia?",
        a: "È prudente sospendere il consumo per usi alimentari, individuare la causa (cisterna, ristagno, rete interna) e ripetere il controllo dopo l'intervento.",
      },
    ],
    ctaContext:
      "Confronta i pacchetti di analisi microbiologica base disponibili su [123acqua](/) e ordina il kit direttamente a casa con istruzioni passo passo.",
    relatedSlugs: ["kit-chimico-fisico-base", "kit-prelievo-pozzo-privato"],
  },
  {
    slug: "kit-chimico-fisico-base",
    itName: "Kit chimico-fisico base per acqua potabile",
    shortTitle: "Kit chimico-fisico base",
    metaDescription:
      "Cosa contiene un kit chimico-fisico base per l'acqua del rubinetto: parametri, costi indicativi, tempi e modalità di lettura del referto.",
    searchKeywords: [
      "analisi chimica acqua rubinetto",
      "kit analisi acqua casa",
      "durezza acqua nitrati",
      "conducibilità acqua potabile",
      "ph acqua di casa",
    ],
    intro:
      "Il kit chimico-fisico base copre i parametri che descrivono la natura dell'acqua: quanto è dura, quanto è salina, quanto è ricca di nitrati e nitriti, quale pH ha. Non sostituisce un'analisi microbiologica, ma fornisce la fotografia mineralogica della propria acqua e permette di interpretare gusto, formazione di calcare e idoneità ad alcuni usi domestici.",
    parametersIncluded: [
      "pH",
      "Conducibilità elettrica",
      "Durezza totale",
      "Cloruri",
      "Solfati",
      "Nitrati",
      "Nitriti",
      "Ammoniaca",
      "Residuo fisso a 180 °C",
    ],
    typicalCost: "110-160 € indicativi",
    typicalTurnaround: "5-7 giorni lavorativi",
    sections: [
      {
        heading: "Perché iniziare da un chimico-fisico base",
        paragraphs: [
          "I parametri chimico-fisici di base raccontano molto dell'origine dell'acqua: una conducibilità alta suggerisce un'acqua mineralizzata, nitrati elevati indicano pressione agricola sulla falda, ammoniaca e nitriti possono segnalare un problema acuto. È un controllo che spesso accompagna la scelta di una caraffa filtrante, di un addolcitore o di un sistema a osmosi.",
        ],
      },
      {
        heading: "Come si interpretano durezza e residuo fisso",
        paragraphs: [
          "La durezza si esprime in gradi francesi (°F): valori sotto 15 °F sono considerati di acqua dolce, sopra 30 °F di acqua dura. Il residuo fisso a 180 °C esprime la quantità di sali disciolti che rimangono dopo evaporazione: è il parametro usato per classificare le acque in oligominerali, mediominerali e così via.",
        ],
        bullets: [
          "0-15 °F: acqua dolce, poco calcare",
          "15-30 °F: acqua mediamente dura",
          "Oltre 30 °F: tendenza al calcare in caldaie ed elettrodomestici",
        ],
      },
      {
        heading: "Nitrati e nitriti: cosa osservare",
        paragraphs: [
          "Per le acque destinate al consumo umano il riferimento normativo italiano colloca il limite dei nitrati a 50 mg/L e dei nitriti a 0,50 mg/L. Valori prossimi al limite, soprattutto in pozzi privati, suggeriscono attenzione: la concentrazione può variare nel tempo con piogge e cicli agricoli.",
        ],
      },
      {
        heading: "Quando affiancare altri controlli",
        paragraphs: [
          "Se la zona è interessata da agricoltura intensiva o industrie storiche è ragionevole estendere l'analisi a metalli pesanti e PFAS. Se l'acqua proviene da pozzo, è opportuno abbinare un kit microbiologico per chiudere il quadro.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il kit chimico-fisico include i metalli pesanti?",
        a: "No, in genere il pacchetto base non li comprende: per piombo, arsenico, nichel esiste un kit specifico.",
      },
      {
        q: "Posso usare i risultati per scegliere un addolcitore?",
        a: "Sì, durezza, conducibilità e residuo fisso sono i tre parametri principali per dimensionare un addolcitore o un sistema a osmosi.",
      },
      {
        q: "Quanto incide il tempo che passa fra prelievo e analisi?",
        a: "Per i parametri chimici la sensibilità è inferiore rispetto al microbiologico, ma è comunque consigliato consegnare il campione entro 24-48 ore.",
      },
      {
        q: "Il pH dell'acqua deve essere neutro?",
        a: "Il range accettato è ampio: indicativamente 6,5-9,5. Valori fuori range richiedono approfondimento sulla rete interna.",
      },
    ],
    ctaContext:
      "Scopri il kit chimico-fisico base e i suoi parametri sulla scheda dedicata di [123acqua](/) per ordinare e ricevere il referto in pochi giorni.",
    relatedSlugs: ["kit-microbiologia-base", "kit-completo-condominio"],
  },
  {
    slug: "kit-metalli-pesanti",
    itName: "Kit analisi metalli pesanti nell'acqua",
    shortTitle: "Kit metalli pesanti",
    metaDescription:
      "Kit di analisi dei metalli pesanti nell'acqua: piombo, arsenico, nichel, cromo. Parametri, fasce di costo indicative e tempi di referto.",
    searchKeywords: [
      "analisi metalli pesanti acqua",
      "piombo acqua rubinetto",
      "arsenico acqua potabile",
      "nichel tubature",
      "kit metalli acqua casa",
    ],
    intro:
      "Il kit metalli pesanti è dedicato a chi sospetta una contaminazione dovuta a tubature vecchie, a falde naturalmente ricche di arsenico, o a una pressione industriale storica sul territorio. I metalli pesanti non si vedono e non si sentono al gusto: solo una misurazione strumentale può rivelarne la presenza.",
    parametersIncluded: [
      "Piombo",
      "Arsenico",
      "Nichel",
      "Cromo totale",
      "Cromo VI (opzionale)",
      "Rame",
      "Cadmio",
      "Ferro",
      "Manganese",
    ],
    typicalCost: "180-260 € indicativi",
    typicalTurnaround: "7-10 giorni lavorativi",
    sections: [
      {
        heading: "Da dove arrivano i metalli pesanti nell'acqua",
        paragraphs: [
          "I metalli pesanti possono entrare nell'acqua per due vie principali. La prima è la falda di origine: alcuni acquiferi italiani contengono naturalmente arsenico e manganese in concentrazioni significative. La seconda è la rete interna dell'edificio: tubazioni in piombo o saldature vecchie possono rilasciare piombo nei primi litri stagnanti, soprattutto in case anteriori agli anni '70.",
        ],
      },
      {
        heading: "Come prelevare correttamente per i metalli",
        paragraphs: [
          "Per la ricerca dei metalli legati alla rete interna si effettua tipicamente un primo prelievo a rubinetto chiuso da almeno 6 ore (primo getto), e talvolta un secondo prelievo dopo scorrimento. Questa modalità permette di distinguere il contributo della falda da quello delle tubature.",
        ],
        bullets: [
          "Primo getto: indica il contributo delle tubature di casa",
          "Dopo scorrimento: rappresenta meglio l'acqua di rete",
          "Contenitori dedicati: spesso acidificati e forniti dal laboratorio",
        ],
      },
      {
        heading: "Lettura dei valori",
        paragraphs: [
          "Il D.Lgs. 18/2023 fissa il limite del piombo a 5 µg/L, in attesa della riduzione a 5 µg/L già recepita a livello europeo, dell'arsenico a 10 µg/L, del nichel a 20 µg/L. Anche valori sotto soglia ma costantemente elevati nel tempo meritano un controllo della rete, soprattutto se ci sono bambini piccoli in casa.",
        ],
      },
      {
        heading: "Cosa fare in caso di superamento",
        paragraphs: [
          "Un risultato fuori limite va prima confermato con una seconda analisi, possibilmente in modalità di prelievo diversa. Se il problema è la rete interna, le strategie includono la sostituzione di tratti critici o l'installazione di sistemi di trattamento al punto d'uso. Se è la falda, può essere richiesto un confronto con il gestore o un sistema di filtrazione dedicato.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il piombo è ancora un problema reale nelle case italiane?",
        a: "In edifici molto vecchi o ristrutturati a metà può capitare di trovare ancora tratti o saldature contenenti piombo: il controllo è giustificato se si vive in centro storico o in palazzi anteriori agli anni '70.",
      },
      {
        q: "Le caraffe filtranti riducono i metalli pesanti?",
        a: "Le caraffe standard riducono parzialmente alcuni metalli, ma per piombo e arsenico è in genere necessario un sistema a osmosi inversa o filtri specifici.",
      },
      {
        q: "Posso fare il kit metalli da solo?",
        a: "Sì, il prelievo è semplice, ma è fondamentale rispettare le modalità del primo getto e usare i contenitori acidificati forniti.",
      },
      {
        q: "I metalli pesanti si sentono al gusto?",
        a: "No, in genere sono insapore alle concentrazioni di interesse: è uno dei motivi per cui l'analisi è importante.",
      },
    ],
    ctaContext:
      "Approfondisci il kit metalli pesanti per acqua potabile sulla pagina dedicata di [123acqua](/) e verifica la presenza di piombo, arsenico e nichel a casa tua.",
    relatedSlugs: ["kit-chimico-fisico-base", "kit-completo-condominio"],
  },
  {
    slug: "kit-pfas-completo",
    itName: "Kit analisi PFAS nell'acqua",
    shortTitle: "Kit PFAS completo",
    metaDescription:
      "Kit per la ricerca dei PFAS nell'acqua potabile: parametri inclusi, modalità di prelievo, fascia di costo indicativa e tempi di referto.",
    searchKeywords: [
      "analisi pfas acqua",
      "pfoa pfos acqua potabile",
      "kit pfas casa",
      "pfas rubinetto",
      "controllo pfas acqua veneto",
    ],
    intro:
      "Il kit PFAS è dedicato alla ricerca di sostanze poli- e perfluoroalchiliche, un gruppo di composti di sintesi a lunga persistenza ambientale. La normativa europea e il D.Lgs. 18/2023 hanno introdotto un nuovo riferimento per la somma PFAS, particolarmente rilevante nelle aree interessate da contaminazioni storiche di falda.",
    parametersIncluded: [
      "PFOA",
      "PFOS",
      "PFNA",
      "PFHxS",
      "PFBA",
      "PFBS",
      "PFHpA",
      "PFPeA",
      "Sommatoria 20 PFAS (PFAS-20)",
      "Sommatoria PFAS totali",
    ],
    typicalCost: "220-300 € indicativi",
    typicalTurnaround: "7-10 giorni lavorativi",
    sections: [
      {
        heading: "Cosa sono i PFAS e perché analizzarli",
        paragraphs: [
          "I PFAS sono utilizzati da decenni in moltissime applicazioni industriali per le loro proprietà idrorepellenti e antiaderenti. Una volta dispersi in ambiente, si accumulano in acqua e suoli e sono difficilmente degradabili. Le aree con storia industriale o militare, e in particolare alcune province del Veneto, hanno visto contaminazioni significative di falda.",
        ],
      },
      {
        heading: "Quali parametri include il pacchetto",
        paragraphs: [
          "Il kit PFAS completo copre in genere i singoli composti regolamentati come PFOA e PFOS e la sommatoria dei 20 composti indicati dalla normativa europea (PFAS-20), con un valore di riferimento di 0,10 µg/L per la somma. Un secondo riferimento riguarda la sommatoria totale di tutti i PFAS quantificati, fissata a 0,50 µg/L.",
        ],
        bullets: [
          "PFAS-20 ≤ 0,10 µg/L",
          "PFAS totali ≤ 0,50 µg/L",
          "PFOA e PFOS riportati anche come singoli composti",
        ],
      },
      {
        heading: "Come prelevare il campione",
        paragraphs: [
          "Il prelievo per i PFAS richiede contenitori dedicati, in genere in polipropilene, e l'esclusione di materiali contenenti politetrafluoroetilene durante tutta la filiera. Per questo motivo è importante usare esclusivamente il kit fornito dal laboratorio.",
        ],
      },
      {
        heading: "Cosa fare con il referto",
        paragraphs: [
          "Se i valori sono molto inferiori al riferimento normativo l'esito è considerato favorevole. Avvicinamenti ai limiti, soprattutto in aree storicamente coinvolte, possono motivare l'installazione di sistemi a carbone attivo o resine specifiche, ma la scelta va fatta caso per caso.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il filtro a carbone attivo elimina i PFAS?",
        a: "I carboni attivi possono ridurre i PFAS a catena lunga, ma l'efficacia dipende dal tipo di carbone, dal flusso e dalla manutenzione: serve sempre una verifica post-installazione.",
      },
      {
        q: "Vivo in zona non interessata: ha senso fare l'analisi PFAS?",
        a: "Per la maggior parte delle aree il rischio è basso, ma una verifica una tantum dà tranquillità, soprattutto vicino a poligoni militari o vecchie industrie chimiche.",
      },
      {
        q: "Esiste un valore di riferimento per i PFAS in acqua?",
        a: "Sì, il D.Lgs. 18/2023 introduce 0,10 µg/L per la somma di 20 PFAS e 0,50 µg/L per i PFAS totali.",
      },
      {
        q: "L'acqua bollita riduce i PFAS?",
        a: "No, la bollitura non rimuove i PFAS e in alcuni casi può aumentarne leggermente la concentrazione per evaporazione.",
      },
    ],
    ctaContext:
      "Verifica la concentrazione di PFAS nell'acqua di casa con il kit dedicato disponibile su [123acqua](/), spedito con istruzioni di prelievo per PFAS.",
    relatedSlugs: ["kit-metalli-pesanti", "kit-completo-condominio"],
  },
  {
    slug: "kit-legionella-impianto",
    itName: "Kit ricerca Legionella nell'impianto idrico",
    shortTitle: "Kit Legionella",
    metaDescription:
      "Kit per la ricerca della Legionella nell'impianto idrico: punti di prelievo, parametri, costi e tempi del referto.",
    searchKeywords: [
      "analisi legionella acqua calda",
      "kit legionella hotel",
      "controllo legionella condominio",
      "prelievo legionella rubinetto doccia",
      "legionella pneumophila acqua",
    ],
    intro:
      "Il kit Legionella è specifico per la ricerca del batterio Legionella spp. e in particolare Legionella pneumophila negli impianti di acqua calda sanitaria, nelle docce, nei serbatoi e nelle torri evaporative. È il controllo tipico richiesto in strutture ricettive, RSA, palestre e condomìni con autoclave o accumulo, ma può essere utile anche in abitazione singola dopo lunghi periodi di inutilizzo.",
    parametersIncluded: [
      "Ricerca e conteggio Legionella spp.",
      "Identificazione Legionella pneumophila",
      "Sierogruppo 1 di L. pneumophila",
      "Sierogruppi 2-14 (opzionale)",
      "Temperatura dell'acqua al punto di prelievo",
    ],
    typicalCost: "120-220 € indicativi per punto",
    typicalTurnaround: "8-10 giorni lavorativi (incubazione obbligatoria)",
    sections: [
      {
        heading: "Quando ha senso una ricerca Legionella",
        paragraphs: [
          "La Legionella prolifera tipicamente fra 20 e 50 °C, in presenza di ristagno e biofilm. I punti più a rischio sono accumuli di acqua calda mal coibentati, rami morti dell'impianto, soffioni doccia poco usati. Per le strutture ricettive le Linee Guida nazionali raccomandano controlli periodici, mentre in abitazione il controllo è motivato da riaperture stagionali o sintomi sospetti in famiglia.",
        ],
      },
      {
        heading: "Dove prelevare",
        paragraphs: [
          "I punti tipici di prelievo sono: la mandata del bollitore, il ritorno del ricircolo (se presente), i rubinetti più lontani dall'accumulo, le docce poco usate. La scelta dei punti è la parte più delicata di una campagna Legionella e va concordata con il laboratorio in funzione della struttura dell'impianto.",
        ],
        bullets: [
          "Bollitore o accumulo: mandata e fondo",
          "Ricircolo: punto di ritorno alla caldaia",
          "Rubinetti terminali con minore frequenza d'uso",
          "Soffioni doccia con accumulo periodico",
        ],
      },
      {
        heading: "Lettura del risultato",
        paragraphs: [
          "Il risultato è espresso in UFC/L. Le Linee Guida prevedono soglie di intervento differenziate per tipo di struttura: in ambito sanitario le soglie sono più stringenti rispetto a un albergo o un'abitazione. La presenza in sé non implica rischio immediato, ma richiede azioni di bonifica proporzionate alla carica e al sierogruppo identificato.",
        ],
      },
      {
        heading: "Strategie di prevenzione",
        paragraphs: [
          "Le strategie classiche di prevenzione includono: mantenere l'acqua calda sanitaria sopra 55 °C in accumulo, garantire ricircolo costante, eliminare rami morti, pulire e sostituire periodicamente i soffioni. Lo shock termico è una procedura specifica da pianificare con un tecnico abilitato.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il kit Legionella è obbligatorio in condominio?",
        a: "Non in tutti i casi: l'obbligo vero e proprio riguarda strutture sanitarie e ricettive, ma in condomìni con torri evaporative o autoclavi è una buona pratica di gestione del rischio.",
      },
      {
        q: "Quanto dura l'analisi Legionella?",
        a: "L'incubazione richiede circa 8-10 giorni: non è un esame accelerabile per ragioni biologiche.",
      },
      {
        q: "Posso prelevare io o serve un tecnico?",
        a: "Il prelievo per uso interno può essere fatto seguendo le istruzioni del kit, ma per relazioni a clienti o autorità è preferibile un prelievo eseguito da tecnico esterno.",
      },
      {
        q: "Quante volte all'anno controllare?",
        a: "Strutture ricettive: tipicamente 1-2 volte l'anno per punto critico. Condomìni con autoclave: indicativamente una volta l'anno.",
      },
    ],
    ctaContext:
      "Pianifica la ricerca Legionella in impianto con il kit dedicato di [123acqua](/), con istruzioni per la scelta dei punti di prelievo.",
    relatedSlugs: ["kit-controllo-haccp-annuale", "kit-completo-condominio"],
  },
  {
    slug: "kit-completo-condominio",
    itName: "Kit analisi acqua per condominio",
    shortTitle: "Kit completo condominio",
    metaDescription:
      "Kit completo per analisi acqua in condominio: parametri microbiologici, chimici e metalli per autoclavi e cisterne. Costi e tempi indicativi.",
    searchKeywords: [
      "analisi acqua condominio",
      "controllo acqua autoclave",
      "cisterna condominio analisi",
      "amministratore condominio acqua",
      "kit analisi condominiale",
    ],
    intro:
      "Il kit completo per condominio nasce per dare a un amministratore una fotografia ragionata della qualità dell'acqua nei punti critici di un edificio: ingresso dall'acquedotto, uscita dall'autoclave o dalla cisterna, alcuni appartamenti rappresentativi. Comprende parametri microbiologici, chimici di base e i metalli più legati alla rete interna.",
    parametersIncluded: [
      "Escherichia coli, coliformi totali, enterococchi",
      "Conteggio colonie a 22 °C e 36 °C",
      "pH, conducibilità, durezza",
      "Cloruri, solfati, nitrati, nitriti, ammoniaca",
      "Piombo, rame, ferro, nichel",
      "Cloro residuo libero (in punto di consegna)",
    ],
    typicalCost: "220-300 € indicativi per punto",
    typicalTurnaround: "7-10 giorni lavorativi",
    sections: [
      {
        heading: "Perché un controllo in condominio",
        paragraphs: [
          "Nelle proprietà condominiali la responsabilità sull'acqua si articola: il gestore risponde fino al contatore, da lì in poi il responsabile è il condominio. Un'analisi periodica permette di intercettare precocemente problemi di autoclave, cisterna sporca, ristagni nelle colonne montanti.",
        ],
      },
      {
        heading: "Punti di prelievo consigliati",
        paragraphs: [
          "Per un edificio medio si tende a campionare: un punto all'ingresso (contatore generale o subito dopo), un punto dopo l'autoclave o l'accumulo, due o tre appartamenti distribuiti su piani diversi, possibilmente compresi gli ultimi piani che subiscono più ristagno.",
        ],
        bullets: [
          "Ingresso acqua condominiale",
          "Uscita autoclave o cisterna",
          "Appartamenti rappresentativi (basso/medio/alto)",
          "Rubinetto di servizio in lavanderia o sala caldaie",
        ],
      },
      {
        heading: "Come comunicare i risultati ai condòmini",
        paragraphs: [
          "Una sintesi di una pagina, leggibile da non tecnici, accompagnata dal referto integrale, è la modalità più efficace. È utile indicare quali parametri sono entro i riferimenti normativi, quali meritano attenzione e quali azioni concrete vengono pianificate.",
        ],
      },
      {
        heading: "Tempistiche tipiche di una campagna",
        paragraphs: [
          "Una campagna completa in condominio si svolge in genere su 1-2 sopralluoghi e si chiude in due settimane: pochi giorni per prelievi e consegna al laboratorio, 7-10 giorni per il referto, qualche giorno per la relazione di sintesi all'amministratore.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'analisi in condominio è obbligatoria?",
        a: "Non in modo generalizzato come negli ambienti sanitari, ma rientra fra le buone pratiche di gestione: in caso di lamentele dei condòmini è una difesa importante per l'amministratore.",
      },
      {
        q: "Quanti punti servono per un palazzo da 8 appartamenti?",
        a: "Tipicamente 3-4 punti: ingresso, autoclave, due appartamenti su piani diversi.",
      },
      {
        q: "Posso ripartire la spesa fra i condòmini?",
        a: "Sì, in genere viene gestita come spesa ordinaria di manutenzione delle parti comuni, con criteri millesimali.",
      },
      {
        q: "Ogni quanto ripetere il controllo?",
        a: "Indicativamente una volta l'anno per l'edificio, con eventuale focus Legionella separato se sono presenti autoclavi e ricircolo caldo.",
      },
    ],
    ctaContext:
      "Richiedi il kit completo per condominio sulla pagina dedicata di [123acqua](/), con guida ai punti di prelievo e relazione di sintesi per l'amministratore.",
    relatedSlugs: ["kit-legionella-impianto", "kit-metalli-pesanti"],
  },
  {
    slug: "kit-prelievo-pozzo-privato",
    itName: "Kit analisi acqua di pozzo privato",
    shortTitle: "Kit prelievo pozzo privato",
    metaDescription:
      "Kit di analisi per pozzi privati: parametri batteriologici, chimici e ambientali, modalità di prelievo, costi indicativi e tempi di referto.",
    searchKeywords: [
      "analisi acqua pozzo",
      "kit pozzo privato",
      "pozzo artesiano analisi",
      "potabilità pozzo casa",
      "nitrati pozzo agricolo",
    ],
    intro:
      "Il kit per pozzo privato è pensato per chi attinge acqua direttamente dal sottosuolo per uso domestico, irriguo o misto. A differenza dell'acqua di rete, l'acqua di pozzo non è soggetta a controlli del gestore: la responsabilità è interamente del proprietario, che ha quindi un interesse diretto a un quadro analitico stabile nel tempo.",
    parametersIncluded: [
      "Escherichia coli, coliformi totali, enterococchi",
      "Conteggio colonie a 22 °C e 36 °C",
      "pH, conducibilità, durezza",
      "Nitrati, nitriti, ammoniaca, cloruri, solfati",
      "Ferro e manganese",
      "Arsenico (consigliato in molte zone)",
    ],
    typicalCost: "140-220 € indicativi",
    typicalTurnaround: "5-7 giorni lavorativi",
    sections: [
      {
        heading: "Le particolarità di un pozzo privato",
        paragraphs: [
          "Un pozzo è un sistema dinamico: la qualità dell'acqua dipende dalla falda, dalla profondità di pescaggio, dallo stato del rivestimento, dalla pressione agricola in superficie. È normale che alcuni parametri varino fra estate e inverno, fra periodi piovosi e siccitosi.",
        ],
      },
      {
        heading: "Cosa misurare e perché",
        paragraphs: [
          "Per un pozzo è opportuno coprire la microbiologia, perché la falda superficiale è esposta a contaminazioni da fognature o allevamenti, e i parametri chimici di base, con particolare attenzione a nitrati, ammoniaca, ferro, manganese e, in molte zone d'Italia, arsenico.",
        ],
        bullets: [
          "Microbiologia: indicatori fecali e conteggio colonie",
          "Nitrati e ammoniaca: pressione agricola e zootecnica",
          "Ferro e manganese: tipici di falde profonde",
          "Arsenico: in alcune aree geologiche specifiche",
        ],
      },
      {
        heading: "Frequenza dei controlli",
        paragraphs: [
          "Una buona pratica per pozzo a uso potabile prevede una verifica completa all'avvio, e poi controlli microbiologici 2-3 volte l'anno, integrati da un chimico annuale. Per uso solo irriguo i parametri rilevanti cambiano, ma è comunque utile monitorare nitrati e conducibilità.",
        ],
      },
      {
        heading: "Cosa fare in caso di problemi ricorrenti",
        paragraphs: [
          "Se il pozzo presenta problemi ricorrenti (microbiologia instabile, ferro alto), spesso non basta filtrare a valle: occorre valutare lo stato della testa pozzo, l'integrità del rivestimento e la presenza di possibili fonti di contaminazione superficiali nelle vicinanze.",
        ],
      },
    ],
    faqs: [
      {
        q: "Per il pozzo serve un'autorizzazione?",
        a: "L'iter dipende dalla regione e dall'uso (potabile, irriguo, misto): è opportuno informarsi al comune e al genio civile competente.",
      },
      {
        q: "Posso bere acqua di pozzo senza analisi?",
        a: "Tecnicamente sì, ma è una scelta a rischio: senza analisi non si conoscono nitrati, batteriologia e metalli, parametri che possono variare nel tempo.",
      },
      {
        q: "Quale è la profondità ideale per un pozzo a uso potabile?",
        a: "Non c'è una profondità ideale assoluta: in genere pozzi più profondi sono più protetti dalle contaminazioni superficiali, ma possono presentare ferro o arsenico naturalmente elevati.",
      },
      {
        q: "Posso fare il prelievo io stesso?",
        a: "Sì, seguendo le istruzioni del kit: per pratiche ufficiali può essere richiesto un prelievo eseguito da tecnico esterno.",
      },
    ],
    ctaContext:
      "Scegli il kit di analisi pensato per pozzi privati su [123acqua](/) e tieni sotto controllo la qualità della tua falda con cadenza regolare.",
    relatedSlugs: ["kit-microbiologia-base", "kit-asl-pratica"],
  },
  {
    slug: "kit-controllo-post-trattamento",
    itName: "Kit controllo acqua post-trattamento",
    shortTitle: "Kit controllo post-trattamento",
    metaDescription:
      "Kit di verifica dopo installazione di osmosi, addolcitore o filtri: parametri pre e post, costi e tempi del referto.",
    searchKeywords: [
      "verifica osmosi inversa",
      "controllo dopo addolcitore",
      "test filtro acqua",
      "kit post trattamento",
      "analisi acqua filtrata",
    ],
    intro:
      "Il kit post-trattamento è una verifica mirata che si fa dopo l'installazione di un sistema di trattamento dell'acqua: osmosi inversa, addolcitore, filtri a carbone attivo, sistemi UV. L'obiettivo è confrontare il profilo dell'acqua in ingresso con quello in uscita dal sistema, per valutare in modo oggettivo se il trattamento sta funzionando e se sta rispettando le aspettative.",
    parametersIncluded: [
      "Conducibilità in ingresso e in uscita",
      "Durezza in ingresso e in uscita",
      "pH",
      "Carica microbica totale (per sistemi UV o filtri)",
      "Sodio (utile dopo addolcitore)",
      "Cloro residuo (utile a monte di filtri a carbone)",
    ],
    typicalCost: "120-180 € indicativi",
    typicalTurnaround: "5-7 giorni lavorativi",
    sections: [
      {
        heading: "Perché serve un controllo dedicato",
        paragraphs: [
          "Un sistema di trattamento, anche dimensionato bene, può non funzionare come previsto per mille motivi: membrana stanca, resine non rigenerate, lampada UV a fine vita, by-pass aperti. Senza misurazione è facile dare per scontato che tutto vada bene quando in realtà l'effetto si è ridotto nel tempo.",
        ],
      },
      {
        heading: "Cosa cambia in base al sistema",
        paragraphs: [
          "Per un'osmosi inversa il parametro chiave è la conducibilità: in uscita ci si aspetta una riduzione marcata rispetto all'ingresso. Per un addolcitore il parametro chiave è la durezza, eventualmente affiancata dal sodio. Per i sistemi UV o microfiltrazione l'attenzione è sulla carica microbica.",
        ],
        bullets: [
          "Osmosi inversa: conducibilità ingresso vs uscita",
          "Addolcitore: durezza prima e dopo, eventuale sodio",
          "Carbone attivo: cloro residuo e organolettici",
          "UV / microfiltrazione: parametri microbiologici",
        ],
      },
      {
        heading: "Quando ripetere",
        paragraphs: [
          "È utile fare un controllo subito dopo l'installazione (come baseline), uno a 6 mesi per verificare la stabilità del sistema e poi uno annuale di mantenimento. In caso di cambi di membrana, resine o lampada è opportuno rifare la verifica.",
        ],
      },
      {
        heading: "Sicurezza dell'acqua trattata",
        paragraphs: [
          "Un trattamento non è una garanzia eterna: filtri non sostituiti possono diventare essi stessi sede di proliferazione microbica. Per questo, soprattutto per sistemi al punto d'uso, è importante affiancare al cambio cartucce un controllo analitico periodico.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quanto deve scendere la conducibilità dopo l'osmosi?",
        a: "Indicativamente una riduzione del 90-95% è tipica per una membrana in buono stato e a temperatura standard.",
      },
      {
        q: "Dopo l'addolcitore l'acqua è più salata?",
        a: "Il sodio può aumentare in proporzione alla durezza rimossa: in casi specifici è utile misurarlo, soprattutto per chi segue diete iposodiche.",
      },
      {
        q: "Quando il filtro non funziona più?",
        a: "Quando i parametri post-trattamento si avvicinano a quelli pre-trattamento: a quel punto il sistema sta lavorando senza effetto utile.",
      },
      {
        q: "Posso fare il prelievo da solo?",
        a: "Sì, il prelievo di confronto pre e post è uno dei più semplici, basta seguire le istruzioni del kit.",
      },
    ],
    ctaContext:
      "Verifica il rendimento del tuo impianto con il kit di controllo post-trattamento di [123acqua](/) e confronta i parametri prima e dopo il filtro.",
    relatedSlugs: ["kit-chimico-fisico-base", "kit-microbiologia-base"],
  },
  {
    slug: "kit-asl-pratica",
    itName: "Kit analisi acqua per pratica ASL",
    shortTitle: "Kit per pratica ASL",
    metaDescription:
      "Kit di analisi acqua utilizzato per pratiche presso ASL e enti locali: parametri tipici, costi indicativi e tempi del referto.",
    searchKeywords: [
      "analisi acqua asl",
      "pratica asl pozzo",
      "potabilità acqua casa asl",
      "agriturismo analisi acqua",
      "b&b analisi acqua asl",
    ],
    intro:
      "Il kit per pratica ASL è il pacchetto tipico richiesto per dimostrare la qualità dell'acqua a un ente locale: apertura di un agriturismo, di un bed and breakfast, di un'attività che usa acqua di pozzo, di una nuova abitazione su rete autonoma. Le ASL accettano referti che coprano specifici parametri minimi: la composizione del kit è pensata per coprire le richieste più frequenti.",
    parametersIncluded: [
      "Escherichia coli, coliformi totali, enterococchi",
      "Conteggio colonie a 22 °C e 36 °C",
      "Pseudomonas aeruginosa (se richiesto)",
      "pH, conducibilità, durezza",
      "Nitrati, nitriti, ammoniaca",
      "Cloruri, solfati, ferro, manganese",
      "Arsenico (se richiesto dalla ASL territoriale)",
    ],
    typicalCost: "180-280 € indicativi",
    typicalTurnaround: "7-10 giorni lavorativi",
    sections: [
      {
        heading: "Quando viene richiesto",
        paragraphs: [
          "La richiesta arriva tipicamente all'apertura di un'attività con somministrazione, in fase di SCIA o di volturazione, oppure quando si attiva un'utenza idrica autonoma (pozzo, sorgente). In alcuni casi il referto è richiesto periodicamente, con cadenza annuale.",
        ],
      },
      {
        heading: "Come è strutturato un kit ASL-friendly",
        paragraphs: [
          "Il pacchetto comprende i parametri batteriologici, i chimici di base e in molti casi un metallo critico per la zona (arsenico nelle aree vulcaniche, ferro/manganese in falde profonde). La modalità di prelievo è spesso il punto su cui le ASL chiedono attenzione: in molte province è richiesto un prelievo eseguito da tecnico esterno.",
        ],
        bullets: [
          "Verificare in anticipo i parametri richiesti dalla ASL locale",
          "Concordare un prelievo eseguito da tecnico, se richiesto",
          "Pianificare il prelievo in giorni utili al trasporto rapido",
          "Conservare copia del referto e della catena di custodia",
        ],
      },
      {
        heading: "Tempistiche",
        paragraphs: [
          "Considerando prelievo, analisi e refertazione, è ragionevole pianificare la pratica con almeno 2 settimane di anticipo. Per chi deve aprire un'attività è sempre meglio anticipare il controllo, in modo da avere margine per ripetere eventuali analisi non conformi.",
        ],
      },
      {
        heading: "In caso di non conformità",
        paragraphs: [
          "Un referto con superamento di un parametro non significa automaticamente impossibilità di aprire: si interviene sulla causa (pulizia cisterna, sostituzione tratto di rete, installazione di un trattamento) e si ripete l'analisi. Lo storico delle azioni intraprese è spesso valutato positivamente dall'ASL.",
        ],
      },
    ],
    faqs: [
      {
        q: "I parametri richiesti dalla ASL sono uguali in tutta Italia?",
        a: "No, c'è una base comune (microbiologia e chimica essenziale) ma ogni ASL territoriale può richiedere parametri aggiuntivi in base alla geologia locale e alla destinazione d'uso.",
      },
      {
        q: "Devo prelevare io o serve un tecnico?",
        a: "Dipende dalla ASL: per pratiche ufficiali in molte province è richiesto un prelievo eseguito da tecnico esterno, in altre è accettato il prelievo del proprietario con kit certificato.",
      },
      {
        q: "Quanto vale un referto?",
        a: "In genere ha validità annuale, ma alcune pratiche richiedono cadenze diverse: meglio verificare in fase di SCIA.",
      },
      {
        q: "Se devo aprire un agriturismo, basta una sola analisi?",
        a: "Per l'avvio in genere sì, ma è ragionevole pianificare almeno un controllo annuale di mantenimento.",
      },
    ],
    ctaContext:
      "Pianifica il controllo per la pratica ASL con il kit dedicato di [123acqua](/), con guida ai parametri richiesti dal tuo territorio.",
    relatedSlugs: ["kit-prelievo-pozzo-privato", "kit-controllo-haccp-annuale"],
  },
  {
    slug: "kit-controllo-haccp-annuale",
    itName: "Kit controllo acqua HACCP annuale",
    shortTitle: "Kit HACCP annuale",
    metaDescription:
      "Kit annuale di controllo acqua per attività HACCP: ristorazione, bar, panifici. Parametri, costi indicativi e tempi del referto.",
    searchKeywords: [
      "analisi acqua haccp",
      "controllo annuale ristorante",
      "kit acqua bar",
      "haccp acqua potabile",
      "manuale haccp acqua",
    ],
    intro:
      "Il kit HACCP annuale è il controllo periodico che molte attività di ristorazione, bar, panifici, gelaterie inseriscono nel proprio piano di autocontrollo. L'acqua è considerata a tutti gli effetti un ingrediente, quindi una verifica annuale documenta la qualità della materia prima utilizzata in cucina e dietro al bancone.",
    parametersIncluded: [
      "Escherichia coli, coliformi totali, enterococchi",
      "Conteggio colonie a 22 °C e 36 °C",
      "Pseudomonas aeruginosa (se previsto dal piano)",
      "pH, conducibilità, durezza",
      "Nitrati, nitriti",
      "Cloro residuo libero al punto di prelievo",
    ],
    typicalCost: "140-220 € indicativi",
    typicalTurnaround: "5-7 giorni lavorativi",
    sections: [
      {
        heading: "L'acqua come ingrediente",
        paragraphs: [
          "Nel sistema HACCP l'acqua usata per la preparazione di alimenti, per il lavaggio di stoviglie e superfici, per la produzione di ghiaccio e bevande deve avere le stesse caratteristiche dell'acqua destinata al consumo umano. Per questo motivo viene inserita fra le materie prime soggette a monitoraggio.",
        ],
      },
      {
        heading: "Quali punti di prelievo nel locale",
        paragraphs: [
          "I punti tipici in un locale di ristorazione sono: rubinetto di cucina, lavandino del bar, eventuale uscita filtrata usata per macchina del caffè, produttore di ghiaccio. È buona prassi variare il punto di prelievo nel tempo per coprire la rete interna.",
        ],
        bullets: [
          "Rubinetto principale di cucina",
          "Punto di prelievo per macchina caffè / acqua refrigerata",
          "Produttore di ghiaccio",
          "Lavello bagno personale (per verifica completezza)",
        ],
      },
      {
        heading: "Cosa documentare nel piano di autocontrollo",
        paragraphs: [
          "Il referto va archiviato insieme alla data di prelievo, al punto di prelievo, al nome di chi ha eseguito il campionamento e alle azioni correttive eventualmente attivate. Una rapida sintesi nel piano HACCP aiuta in caso di ispezione.",
        ],
      },
      {
        heading: "Sinergie con il controllo Legionella",
        paragraphs: [
          "Se nel locale ci sono accumuli di acqua calda significativi (cucina industriale, ricircolo, docce per personale), è opportuno valutare anche una ricerca Legionella separata, con frequenza coerente con il rischio dell'attività.",
        ],
      },
    ],
    faqs: [
      {
        q: "Il controllo HACCP annuale è obbligatorio?",
        a: "L'obbligo discende dal piano di autocontrollo della singola attività: in genere viene definito annuale come buona pratica, salvo frequenze diverse decise dal consulente.",
      },
      {
        q: "Posso fare il prelievo io o serve un tecnico?",
        a: "Per la maggior parte delle attività il prelievo può essere fatto dal titolare seguendo le istruzioni del kit; in caso di non conformità è preferibile coinvolgere un tecnico per il prelievo di conferma.",
      },
      {
        q: "Cosa fare se l'analisi annuale dà esito non conforme?",
        a: "Il manuale HACCP prevede l'attivazione di azioni correttive proporzionate: sospensione dell'uso, intervento sulla causa, ripetizione dell'analisi, registrazione delle azioni.",
      },
      {
        q: "Devo includere anche Legionella?",
        a: "Non è automaticamente parte del controllo HACCP acqua, ma è una valutazione consigliata in presenza di accumuli di acqua calda e ricircolo.",
      },
    ],
    ctaContext:
      "Inserisci nel tuo piano HACCP il kit di controllo annuale acqua proposto da [123acqua](/), con referto pronto da allegare al manuale.",
    relatedSlugs: ["kit-legionella-impianto", "kit-asl-pratica"],
  },
];

export function getKitBySlug(slug: string): KitInfo | undefined {
  return KIT_EDU.find((k) => k.slug === slug);
}
