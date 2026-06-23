export interface GlossaryTerm {
  term: string;
  category:
    | 'chimica'
    | 'microbiologia'
    | 'strumenti'
    | 'normativa'
    | 'idrogeologia'
    | 'epidemiologia';
  definition: string;
  source?: string;
}

export const ADVANCED_GLOSSARY: GlossaryTerm[] = [
  // ============== CHIMICA (10) ==============
  {
    term: 'Detection limit (LOD)',
    category: 'chimica',
    definition:
      "Limit of Detection, ovvero la minima concentrazione di un analita che lo strumento è in grado di distinguere dal rumore di fondo con un livello di confidenza definito (tipicamente 3 sigma sul bianco). Non implica una quantificazione affidabile: indica solo che la sostanza è presente sopra zero. Per parametri come piombo, arsenico o PFAS, il LOD del metodo deve essere significativamente inferiore al valore di parametro normativo, di norma almeno un decimo, per garantire un controllo conforme alle prescrizioni del D.Lgs. 18/2023 e della Direttiva UE 2020/2184.",
    source: 'ISO 11843 / IUPAC',
  },
  {
    term: 'Limit of Quantification (LOQ)',
    category: 'chimica',
    definition:
      "Concentrazione minima alla quale un analita può essere quantificato con un'incertezza accettabile, convenzionalmente fissata a 10 sigma sul bianco o a tre volte il LOD. È il vero spartiacque operativo del referto analitico: sotto il LOQ il risultato viene espresso come «<LOQ» o «n.q.», mentre sopra il LOQ il dato è quantitativo. La normativa europea sull'acqua potabile richiede LOQ del metodo non superiori al 30 per cento del valore di parametro per i contaminanti chimici regolamentati.",
    source: 'IUPAC / Direttiva UE 2020/2184 All. III',
  },
  {
    term: 'Incertezza di misura',
    category: 'chimica',
    definition:
      "Parametro non negativo associato al risultato di una misurazione che caratterizza la dispersione dei valori ragionevolmente attribuibili al misurando. Comprende contributi da taratura, ripetibilità, recupero, omogeneità del campione e matrice. Si esprime come incertezza estesa U = k·u con fattore di copertura k=2 (livello di confidenza ~95 per cento). Sul rapporto di prova un valore di 5,0 ± 0,4 µg/L significa che il valore vero ricade con elevata probabilità nell'intervallo 4,6–5,4 µg/L. È elemento essenziale per dichiarare la conformità rispetto a un limite.",
    source: 'GUM JCGM 100:2008',
  },
  {
    term: 'Bianco di campo',
    category: 'chimica',
    definition:
      "Campione di acqua ultrapura trasportato in bottiglia identica a quella usata per il prelievo, aperta sul punto di campionamento e richiusa senza prelevare acqua reale. Serve a smascherare contaminazioni introdotte da contenitori, conservanti, trasporto o ambiente di prelievo. È distinto dal bianco di metodo (analizzato in laboratorio) e dal bianco strumentale. La presenza di un analita sopra il LOQ nel bianco di campo invalida i dati associati per quel parametro e impone reanalisi.",
    source: 'APAT IRSA-CNR 1030',
  },
  {
    term: 'Taratura strumentale',
    category: 'chimica',
    definition:
      "Operazione che stabilisce la relazione fra il segnale dello strumento e la concentrazione di un analita usando standard certificati a concentrazione nota. Per spettrometria e cromatografia si costruisce una retta di calibrazione con almeno cinque punti, valutata tramite coefficiente di determinazione R² (richiesto > 0,995) e linearità dei residui. È prerequisito alla quantificazione e va verificata a ogni sessione analitica con standard di controllo intermedi.",
    source: 'ISO/IEC Guide 99 (VIM)',
  },
  {
    term: 'Validazione del metodo',
    category: 'chimica',
    definition:
      "Procedura documentata con cui un laboratorio dimostra che un metodo analitico è adatto allo scopo previsto. Si valutano linearità, LOD, LOQ, accuratezza, precisione (ripetibilità e riproducibilità intermedia), recupero, selettività, robustezza ed effetto matrice. Per le acque destinate al consumo umano i parametri minimi di prestazione sono fissati nell'Allegato III della Direttiva UE 2020/2184. La validazione è prerequisito all'accreditamento secondo lo standard tecnico generale per i laboratori di prova.",
    source: 'Eurachem Guide / ISO 17025',
  },
  {
    term: 'Recupero (recovery)',
    category: 'chimica',
    definition:
      "Rapporto, espresso in percentuale, fra la concentrazione misurata e quella aggiunta in un campione fortificato (spike). Misura la capacità del metodo di restituire l'analita attraverso tutta la procedura: preparazione, estrazione, eventuale derivatizzazione e lettura strumentale. Valori accettabili per le acque sono tipicamente 70–120 per cento per contaminanti in tracce. Recuperi sistematicamente fuori range indicano perdita per adsorbimento, evaporazione, degradazione o interferenze di matrice.",
    source: 'Eurachem/CITAC Guide',
  },
  {
    term: 'Ripetibilità',
    category: 'chimica',
    definition:
      "Precisione ottenuta su prove ripetute dello stesso campione nelle medesime condizioni: stesso operatore, stesso strumento, stesso reagente, breve intervallo di tempo. Si esprime come deviazione standard relativa (RSD) e rappresenta la variabilità intrinseca minima del metodo. È un parametro distinto e più stringente rispetto alla riproducibilità ed è uno dei criteri di accettazione richiesti in fase di validazione del metodo per acque potabili.",
    source: 'ISO 5725',
  },
  {
    term: 'Riproducibilità',
    category: 'chimica',
    definition:
      "Precisione ottenuta su prove dello stesso campione in condizioni variate: operatori diversi, strumenti diversi, laboratori diversi, tempi diversi. È sempre maggiore o uguale alla ripetibilità e fornisce una stima realistica della variabilità che si osserverebbe nel confronto di referti emessi da laboratori distinti. Si stima tramite circuiti interlaboratorio organizzati da provider accreditati e costituisce evidenza oggettiva di affidabilità del dato analitico.",
    source: 'ISO 5725 / ISO 13528',
  },
  {
    term: 'NOAEL',
    category: 'chimica',
    definition:
      "No Observed Adverse Effect Level: massima dose o concentrazione di una sostanza somministrata in studi tossicologici per la quale non si osservano effetti avversi statisticamente o biologicamente significativi rispetto al controllo. Dal NOAEL, applicando fattori di sicurezza che tengono conto della variabilità interspecie e interindividuale (tipicamente 100), si derivano le dosi giornaliere tollerabili (TDI) e i valori guida per acqua potabile pubblicati da WHO ed EFSA per contaminanti chimici e residui di pesticidi.",
    source: 'EFSA / WHO IPCS',
  },

  // ============== MICROBIOLOGIA (10) ==============
  {
    term: 'Filtrazione su membrana',
    category: 'microbiologia',
    definition:
      "Tecnica di riferimento per la conta di microrganismi indicatori nelle acque: 100 mL di campione vengono filtrati attraverso una membrana sterile in esteri di cellulosa con porosità 0,45 µm, che trattiene le cellule batteriche vitali. La membrana viene poi deposta su terreno di coltura selettivo e incubata a temperatura controllata. Le colonie sviluppate vengono contate e il risultato è espresso come UFC/100 mL. È il metodo prescritto per E. coli, coliformi totali ed enterococchi intestinali.",
    source: 'ISO 9308-1 / ISO 7899-2',
  },
  {
    term: 'Terreno di coltura selettivo',
    category: 'microbiologia',
    definition:
      "Substrato nutritivo formulato per favorire la crescita di un gruppo microbico specifico inibendo gli altri tramite antibiotici, sali biliari, indicatori cromogeni o pH controllato. Per le acque si usano CCA (Chromogenic Coliform Agar) per coliformi ed E. coli, Slanetz-Bartley per enterococchi, R2A per la conta batterica eterotrofa, mCP per Clostridium perfringens. La selettività non è mai assoluta: occorrono conferme biochimiche o molecolari sui dubbi.",
    source: 'ISO 9308-1',
  },
  {
    term: 'MPN (Most Probable Number)',
    category: 'microbiologia',
    definition:
      "Metodo statistico per stimare la densità microbica in un campione quando la crescita viene rilevata in forma binaria (presente/assente) in serie di tubi o pozzetti con diluizioni decimali. La concentrazione più probabile si ricava da tabelle precalcolate o dalla statistica di Poisson sui pattern positivi/negativi. È alternativo alla filtrazione su membrana ed è utilizzato in metodi commerciali tipo Colilert per E. coli e coliformi totali, con tempi di risposta più rapidi.",
    source: 'ISO 9308-2',
  },
  {
    term: 'Biofilm',
    category: 'microbiologia',
    definition:
      "Comunità strutturata di microrganismi adesa a una superficie e immersa in una matrice extracellulare di polisaccaridi, proteine e DNA. Nelle reti idriche si sviluppa sulle pareti di tubazioni, serbatoi e raccordi, fungendo da serbatoio di patogeni opportunisti (Legionella, Pseudomonas, micobatteri non tubercolari) e proteggendoli dal cloro residuo. La gestione richiede flussaggi, controllo della temperatura e mantenimento del disinfettante residuo lungo l'intera rete fino al punto d'uso.",
    source: 'WHO Water Safety Plan',
  },
  {
    term: 'Pseudomonas aeruginosa',
    category: 'microbiologia',
    definition:
      "Batterio Gram negativo, ubiquitario in ambienti umidi, patogeno opportunista responsabile di infezioni cutanee, polmonari e nosocomiali. Negli impianti idrici colonizza biofilm, guarnizioni, rubinetti e doccette, soprattutto a basse portate. È parametro obbligatorio per acque imbottigliate (assenza in 250 mL) e per acque erogate in strutture sanitarie con pazienti immunocompromessi. La ricerca avviene per filtrazione su membrana con terreno cromogeno selettivo e conferma con ossidasi e fluorescenza UV.",
    source: 'ISO 16266',
  },
  {
    term: 'Legionella pneumophila',
    category: 'microbiologia',
    definition:
      "Batterio Gram negativo aerobio, agente eziologico della legionellosi (malattia del legionario e febbre di Pontiac), trasmesso esclusivamente per inalazione di aerosol contaminato. Colonizza acque calde sanitarie, torri evaporative, fontane decorative e impianti di climatizzazione fra 25 e 45 °C. La normativa italiana (Linee guida 2015) impone monitoraggio periodico e azioni correttive (shock termico a 70 °C o iperclorazione) al superamento di 1000 UFC/L nelle strutture turistico-ricettive e sanitarie.",
    source: 'ISO 11731 / Linee guida nazionali 2015',
  },
  {
    term: 'Clostridium perfringens',
    category: 'microbiologia',
    definition:
      "Batterio Gram positivo, anaerobio sporigeno, indicatore di contaminazione fecale remota o persistente grazie alla resistenza ambientale delle sue spore alla disinfezione con cloro e ai trattamenti termici. La sua presenza segnala possibile passaggio di parassiti resistenti come Cryptosporidium e Giardia, anch'essi insensibili al cloro. Valore di parametro: assenza in 100 mL. La ricerca avviene per filtrazione su membrana con incubazione anaerobica su terreno mCP a 44 °C.",
    source: 'ISO 14189',
  },
  {
    term: 'Cryptosporidium',
    category: 'microbiologia',
    definition:
      "Protozoo parassita intestinale a trasmissione fecale-orale tramite oocisti altamente resistenti al cloro alle concentrazioni d'uso. È responsabile di epidemie idriche documentate (Milwaukee 1993, oltre 400.000 casi). La rimozione efficace richiede filtrazione fine (< 1 µm), coagulazione-flocculazione o trattamento UV ad alta dose. La direttiva UE 2020/2184 impone valutazione del rischio anche per parametri non quantitativi come Cryptosporidium nei sistemi che attingono da acque superficiali.",
    source: 'WHO GDWQ',
  },
  {
    term: 'Sporogenesi batterica',
    category: 'microbiologia',
    definition:
      "Processo differenziativo in cui alcuni batteri Gram positivi (Bacillus, Clostridium) producono endospore in risposta a condizioni avverse (carenza nutrizionale, disidratazione). Le spore sono strutture metabolicamente inattive con resistenza estrema a calore, disinfettanti chimici, radiazioni e disseccamento, potendo sopravvivere per decenni. Nelle acque potabili la presenza di spore di solfito-riduttori (Clostridium perfringens) è indicatore di inefficacia dei trattamenti contro patogeni resistenti come protozoi parassiti.",
    source: 'WHO GDWQ',
  },
  {
    term: 'Conta batterica eterotrofa a 22 °C',
    category: 'microbiologia',
    definition:
      "Stima generica della carica microbica non patogena vitale nell'acqua, ottenuta per inclusione in agar nutritivo (Yeast Extract Agar) e incubazione a 22 °C per 72 ore. Non è indicatore sanitario diretto ma indicatore di processo: variazioni significative rispetto al valore atteso al punto di consegna segnalano malfunzionamento di trattamenti, stagnazione, eccessiva permanenza in rete o rotture. Il D.Lgs. 18/2023 non fissa un valore di parametro numerico ma richiede l'assenza di cambiamenti anomali.",
    source: 'ISO 6222',
  },

  // ============== STRUMENTI (8) ==============
  {
    term: 'LC-MS/MS (Liquid Chromatography Tandem Mass)',
    category: 'strumenti',
    definition:
      "Accoppiamento di cromatografia liquida ad alta prestazione con spettrometria di massa a triplo quadrupolo. È la tecnica di riferimento per la determinazione di PFAS, residui di farmaci, pesticidi polari (glifosato, AMPA) e metaboliti nelle acque potabili a concentrazioni dell'ordine dei ng/L. La selettività deriva dalla scansione MRM (Multiple Reaction Monitoring) che monitora transizioni ione precursore → ione prodotto specifiche per ciascun analita, garantendo identificazione robusta anche in matrici complesse.",
    source: 'EPA Method 537.1 / ISO 21675',
  },
  {
    term: 'HRMS (High Resolution Mass Spectrometry)',
    category: 'strumenti',
    definition:
      "Spettrometria di massa ad alta risoluzione (risoluzione > 30.000 FWHM) con analizzatori Orbitrap o tempo di volo (TOF). Permette la determinazione della massa esatta degli ioni con accuratezza sotto 5 ppm, consentendo l'attribuzione univoca della formula molecolare. È strumento chiave nella ricerca non-target di contaminanti emergenti nelle acque: si registra l'intero spettro e l'identificazione avviene a posteriori, anche su composti non previsti, contro database di librerie spettrali.",
    source: 'NORMAN Network',
  },
  {
    term: 'AAS (Spettroscopia di Assorbimento Atomico)',
    category: 'strumenti',
    definition:
      "Tecnica analitica per la determinazione di metalli basata sull'assorbimento di radiazione monocromatica da parte di atomi liberi allo stato fondamentale, prodotti per atomizzazione in fiamma (FAAS) o fornetto di grafite (GFAAS). La fiamma raggiunge LOD nell'ordine dei mg/L (utile per calcio, magnesio, sodio), mentre il fornetto di grafite scende a µg/L per metalli in tracce. Largamente sostituita da ICP-OES e ICP-MS per analisi multielemento, resta diffusa in laboratori dedicati a pochi parametri.",
    source: 'ISO 15586',
  },
  {
    term: 'Voltammetria a stripping anodico',
    category: 'strumenti',
    definition:
      "Tecnica elettroanalitica in cui i metalli in tracce vengono pre-concentrati per riduzione su un elettrodo di lavoro (mercurio, oro, bismuto) e successivamente ossidati durante una scansione anodica. La corrente di picco è proporzionale alla concentrazione. Raggiunge LOD nell'ordine dei ng/L per piombo, cadmio, rame e zinco con strumentazione economica, ma è sensibile a interferenze e sostanze organiche; richiede pretrattamento del campione con digestione UV o acidificazione.",
    source: 'Standard Methods 3130',
  },
  {
    term: 'Fluorimetria',
    category: 'strumenti',
    definition:
      "Tecnica di misura basata sull'emissione di luce da parte di molecole eccitate a lunghezza d'onda specifica. Nel monitoraggio dell'acqua è impiegata per quantificare sostanza organica naturale (CDOM, fluorescent dissolved organic matter), idrocarburi policiclici aromatici (IPA) e per saggi di tossicità con batteri bioluminescenti (Vibrio fischeri). Sonde di fluorescenza in continuo sono usate negli impianti di potabilizzazione come early warning per intrusione di scarichi o eventi di runoff.",
    source: 'Standard Methods 5530',
  },
  {
    term: 'Elettrodo iono-selettivo (ISE)',
    category: 'strumenti',
    definition:
      "Sensore potenziometrico la cui differenza di potenziale rispetto a un elettrodo di riferimento è proporzionale al logaritmo dell'attività di uno specifico ione in soluzione (equazione di Nernst). Disponibili per fluoruro, nitrato, ammonio, cloruro, sodio, calcio. Utilizzati in campo per misure rapide a costi contenuti, con LOD tipici di 0,1 mg/L. Richiedono taratura frequente, correzione della forza ionica con tampone TISAB e attenzione agli ioni interferenti.",
    source: 'Standard Methods 4500',
  },
  {
    term: 'TOC analyzer',
    category: 'strumenti',
    definition:
      "Strumento per la misura del carbonio organico totale (Total Organic Carbon) nell'acqua. Il campione viene acidificato per rimuovere il carbonio inorganico, poi ossidato (combustione catalitica a 680–950 °C o ossidazione UV/persolfato) e la CO₂ generata viene quantificata con rivelatore IR non dispersivo. Il TOC è parametro indicatore di sostanza organica naturale, predittore della formazione di sottoprodotti di disinfezione e indicatore di efficienza dei trattamenti di chiarificazione e adsorbimento su carbone attivo.",
    source: 'EN 1484',
  },
  {
    term: 'Torbidimetro nefelometrico',
    category: 'strumenti',
    definition:
      "Strumento ottico che misura la torbidità rilevando la luce diffusa a 90° dal fascio incidente da parte delle particelle in sospensione. Il segnale è espresso in NTU (Nephelometric Turbidity Units) usando come riferimento sospensioni di formazina certificate. Sonde in linea continua sono installate all'uscita dei filtri rapidi negli impianti di potabilizzazione: variazioni improvvise sopra 0,3 NTU sono indicatore precoce di passaggio di Cryptosporidium o di rottura del processo di filtrazione.",
    source: 'ISO 7027',
  },

  // ============== NORMATIVA (8) ==============
  {
    term: 'ISO 17025',
    category: 'normativa',
    definition:
      "Standard tecnico internazionale che specifica i requisiti generali per la competenza dei laboratori di prova e taratura. Definisce requisiti per gestione del personale, locali e condizioni ambientali, metodi di prova, equipaggiamento, tracciabilità delle misure, gestione dei campioni, controllo dei dati e rapporto di prova. È la base su cui gli enti nazionali (in Italia Accredia) concedono l'accreditamento ai singoli metodi analitici. Citato qui esclusivamente come standard tecnico generale di riferimento per i laboratori di analisi delle acque.",
    source: 'UNI CEI EN ISO/IEC 17025:2018',
  },
  {
    term: 'BAT (Best Available Techniques)',
    category: 'normativa',
    definition:
      "Migliori tecniche disponibili: insieme di tecnologie e metodologie definite a livello europeo (BREF, BAT Reference Documents) come benchmark per prevenire o ridurre le emissioni industriali. Sono il riferimento per le autorizzazioni integrate ambientali (AIA, ex IPPC) rilasciate agli impianti che possono impattare sulle acque superficiali e sotterranee. Le BAT Conclusions, vincolanti, fissano i livelli di emissione associati (BAT-AEL) che gli impianti devono rispettare con scadenze predeterminate.",
    source: 'Direttiva 2010/75/UE (IED)',
  },
  {
    term: 'Regolamento REACH',
    category: 'normativa',
    definition:
      "Registration, Evaluation, Authorisation and Restriction of Chemicals: regolamento europeo che disciplina la produzione, importazione e uso delle sostanze chimiche nell'Unione. Le sostanze SVHC (Substances of Very High Concern) inserite nella candidate list e nell'allegato XIV sono progressivamente vietate o soggette ad autorizzazione. Numerosi contaminanti idrici emergenti (PFOA, PFHxS, bisfenoli) sono stati ristretti tramite REACH, riducendone l'immissione ambientale a monte rispetto agli interventi sui processi di potabilizzazione.",
    source: 'Regolamento (CE) 1907/2006',
  },
  {
    term: 'Direttiva Quadro Acque 2000/60/CE',
    category: 'normativa',
    definition:
      "Direttiva europea che istituisce un quadro per l'azione comunitaria in materia di acque. Introduce la pianificazione per bacino idrografico, l'obiettivo di buono stato ecologico e chimico dei corpi idrici, la valutazione delle pressioni antropiche e l'analisi economica dei servizi idrici. Le sostanze prioritarie (Allegato X) e i relativi standard di qualità ambientale (EQS) condizionano direttamente la qualità delle acque superficiali utilizzate per la produzione di acqua potabile.",
    source: 'Direttiva 2000/60/CE',
  },
  {
    term: 'Linee guida WHO sulle acque potabili',
    category: 'normativa',
    definition:
      "Documento tecnico dell'Organizzazione Mondiale della Sanità (Guidelines for Drinking-water Quality, 4ª edizione + addenda) che fornisce valori guida sanitari per oltre 200 sostanze chimiche e linee guida microbiologiche. I valori derivano da TDI o ARfD applicando un'allocazione (tipicamente 10–20 per cento) della dose all'acqua. Non sono giuridicamente vincolanti ma costituiscono la base scientifica più autorevole utilizzata da UE, EPA e autorità nazionali per fissare i propri valori di parametro.",
    source: 'WHO GDWQ 4th ed.',
  },
  {
    term: 'Water Safety Plan (WSP)',
    category: 'normativa',
    definition:
      "Piano di sicurezza dell'acqua: approccio risk-based introdotto dalla WHO e reso obbligatorio dalla Direttiva UE 2020/2184 e dal D.Lgs. 18/2023 per tutti i sistemi di fornitura. Prevede l'identificazione dei pericoli e degli eventi pericolosi lungo l'intera filiera (captazione → distribuzione → punto d'uso), la valutazione del rischio, l'individuazione delle misure di controllo, il monitoraggio operativo e la verifica. Supera la logica del solo controllo analitico finale a favore della prevenzione sistemica.",
    source: 'WHO/IWA / D.Lgs. 18/2023 art. 7-8',
  },
  {
    term: 'Watch list UE',
    category: 'normativa',
    definition:
      "Elenco di sostanze emergenti per le quali la Commissione europea richiede agli Stati Membri un monitoraggio armonizzato finalizzato a raccogliere dati di occorrenza utili a decidere se inserirle stabilmente fra i parametri regolamentati. La watch list per le acque destinate al consumo umano è stata istituita dall'art. 13 della Direttiva 2020/2184 e ha incluso fino ad oggi composti come 17-beta-estradiolo, nonilfenolo, bisfenolo A e PFAS specifici, con valori indicativi di riferimento.",
    source: 'Decisione UE 2022/679',
  },
  {
    term: 'Punto di conformità',
    category: 'normativa',
    definition:
      "Punto della filiera idrica in cui l'acqua deve rispettare i valori di parametro. Per le forniture pubbliche il D.Lgs. 18/2023 fissa la conformità al rubinetto utilizzato dal consumatore per il consumo umano (punto d'uso), responsabilizzando il gestore fino al contatore e il proprietario dell'impianto interno per il tratto successivo. Per le acque imbottigliate il punto di conformità è la bottiglia. Lo spostamento del punto al rubinetto, rispetto alla precedente normativa, ha implicazioni rilevanti su rischi da piombo, nichel e Legionella.",
    source: 'D.Lgs. 18/2023 art. 6',
  },

  // ============== IDROGEOLOGIA (7) ==============
  {
    term: 'Falda confinata',
    category: 'idrogeologia',
    definition:
      "Acquifero saturo compreso fra due strati impermeabili (acquicludi) in cui l'acqua si trova in pressione superiore a quella atmosferica. La piezometria, misurata in pozzi che intercettano l'acquifero, può risalire spontaneamente sopra il piano campagna generando pozzi artesiani. Le falde confinate sono in genere meglio protette da contaminazioni superficiali rispetto alle falde libere e costituiscono risorsa idropotabile pregiata, ma hanno ricarica lenta e rischio elevato di sovrasfruttamento e subsidenza.",
    source: 'ISPRA',
  },
  {
    term: 'Falda libera (freatica)',
    category: 'idrogeologia',
    definition:
      "Acquifero la cui superficie superiore (tavola d'acqua) è in equilibrio con la pressione atmosferica e libera di oscillare in funzione della ricarica meteorica. È direttamente alimentata dalle infiltrazioni e dunque vulnerabile alla contaminazione da nitrati di origine agricola, pesticidi, idrocarburi da sversamenti e cromo esavalente da attività industriali. Costituisce la principale fonte idropotabile in molte aree di pianura italiane, con necessità di stringenti aree di salvaguardia.",
    source: 'ISPRA',
  },
  {
    term: 'Ricarica dell\'acquifero',
    category: 'idrogeologia',
    definition:
      "Quantità di acqua che, in un dato intervallo di tempo, raggiunge la zona satura dell'acquifero alimentandone le riserve. La ricarica naturale avviene per infiltrazione efficace delle precipitazioni, da corsi d'acqua influenti e da acquiferi adiacenti. La ricarica artificiale (Managed Aquifer Recharge) ricorre a bacini di infiltrazione o pozzi di iniezione per stoccare acqua superficiale o trattata. È strategia chiave di adattamento ai cambiamenti climatici nelle aree mediterranee soggette a siccità prolungata.",
    source: 'EEA / ISPRA',
  },
  {
    term: 'Intrusione salina',
    category: 'idrogeologia',
    definition:
      "Avanzamento del cuneo di acqua di mare verso l'entroterra negli acquiferi costieri, dovuto al sovrasfruttamento delle falde dolci e all'innalzamento del livello del mare. Si manifesta con aumento progressivo di cloruri, sodio e conducibilità nei pozzi prossimi alla costa, fino a rendere l'acqua inadatta al consumo umano e all'irrigazione. Aree italiane particolarmente colpite includono il Salento, le pianure costiere romagnole e adriatiche, e numerose aree della Sardegna meridionale.",
    source: 'CNR-IRSA',
  },
  {
    term: 'Subsidenza da emungimento',
    category: 'idrogeologia',
    definition:
      "Abbassamento del piano campagna causato dalla compattazione irreversibile degli strati argillosi degli acquiferi multifalda in seguito all'eccessivo prelievo da pozzi. La riduzione della pressione interstiziale trasferisce il carico al sedimento, che si consolida. In Italia ha colpito storicamente la pianura veneta (oltre 3 metri a Marghera), l'area bolognese e ampie zone della pianura padana. Compromette infrastrutture, aumenta il rischio idraulico e riduce permanentemente la capacità di stoccaggio degli acquiferi.",
    source: 'ARPAE / INGV',
  },
  {
    term: 'Sorgente carsica',
    category: 'idrogeologia',
    definition:
      "Punto di emergenza di acque sotterranee che circolano in rocce solubili (calcari, dolomie, gessi) attraverso un reticolo di condotti e fratture allargati per dissoluzione. Le sorgenti carsiche alimentano molti acquedotti italiani (Acquedotto Pugliese, Sorgenti del Peschiera, Gran Sasso) con portate elevate e qualità chimica generalmente buona, ma sono vulnerabili a contaminazioni rapide e a torbidità intensa post-eventi piovosi a causa della scarsa capacità filtrante del sistema carsico.",
    source: 'ISPRA',
  },
  {
    term: 'Area di salvaguardia',
    category: 'idrogeologia',
    definition:
      "Zona perimetrata attorno a captazioni idropotabili (pozzi, sorgenti, prese da corpi superficiali) in cui sono imposte limitazioni alle attività antropiche per prevenire la contaminazione della risorsa. Il D.Lgs. 152/2006 e il D.Lgs. 18/2023 distinguono zona di tutela assoluta (raggio minimo 10 m, recintata), zona di rispetto (200 m attorno alla captazione) e zona di protezione (a scala di bacino), con vincoli decrescenti su agricoltura, allevamento, stoccaggio idrocarburi, fitosanitari e fognature.",
    source: 'D.Lgs. 152/2006 art. 94',
  },

  // ============== EPIDEMIOLOGIA (7) ==============
  {
    term: 'Meta-analisi',
    category: 'epidemiologia',
    definition:
      "Tecnica statistica che combina quantitativamente i risultati di studi indipendenti sullo stesso quesito di ricerca per ottenere una stima riassuntiva (pooled estimate) con potenza statistica superiore. Si applica a esiti continui (differenze medie) o binari (odds ratio, risk ratio) usando modelli a effetti fissi o casuali. Eterogeneità fra studi si valuta con I² e test Q. È pilastro della medicina basata sulle evidenze ed è la base degli aggiornamenti dei valori guida WHO per i contaminanti idrici cancerogeni.",
    source: 'Cochrane Handbook',
  },
  {
    term: 'Studio caso-controllo',
    category: 'epidemiologia',
    definition:
      "Disegno epidemiologico osservazionale che confronta soggetti con una determinata patologia (casi) e soggetti privi della stessa (controlli), valutando retrospettivamente l'esposizione a un fattore di rischio. La misura di associazione è l'odds ratio. È efficiente per patologie rare e periodi di latenza lunghi (tumori), ma vulnerabile a bias di selezione e di richiamo. Numerosi studi caso-controllo hanno documentato l'associazione fra arsenico inorganico nell'acqua potabile e tumori vescicali e polmonari.",
    source: 'IARC Monographs',
  },
  {
    term: 'Studio di coorte',
    category: 'epidemiologia',
    definition:
      "Disegno epidemiologico in cui un gruppo di soggetti esposti e uno di non esposti vengono seguiti nel tempo (coorte prospettica) o ricostruiti tramite registri (coorte retrospettiva) per misurare l'incidenza di un esito. Permette di calcolare rischi assoluti, relativi e tassi di incidenza. Le coorti residenziali (es. studi su PFAS in Veneto e Ohio) hanno fornito evidenze sull'associazione fra esposizione cronica via acqua potabile e patologie tiroidee, renali, ipertensione gravidica e dislipidemia.",
    source: 'IARC / EFSA',
  },
  {
    term: 'Intervallo di confidenza al 95 per cento',
    category: 'epidemiologia',
    definition:
      "Intervallo di valori che, applicando il metodo di stima a un numero infinito di campioni dalla stessa popolazione, conterrebbe il vero valore del parametro nel 95 per cento dei casi. Più stretto è l'IC, più precisa è la stima. Un IC 95 per cento che include il valore nullo (1 per OR e RR, 0 per differenze) indica assenza di associazione statisticamente significativa al livello del 5 per cento. È sempre da preferire al solo p-value nella comunicazione di evidenze sanitarie.",
    source: 'STROBE Statement',
  },
  {
    term: 'Odds Ratio (OR)',
    category: 'epidemiologia',
    definition:
      "Misura di associazione utilizzata negli studi caso-controllo: rapporto fra le odds di esposizione nei casi e le odds di esposizione nei controlli. OR > 1 indica associazione positiva fra esposizione ed esito, OR < 1 effetto protettivo, OR = 1 nessuna associazione. Per eventi rari approssima il rischio relativo. Va sempre interpretato congiuntamente al suo intervallo di confidenza al 95 per cento e valutato per potenziali bias e confondenti residui prima di trarre inferenze causali.",
    source: 'Rothman, Modern Epidemiology',
  },
  {
    term: 'GRADE',
    category: 'epidemiologia',
    definition:
      "Grading of Recommendations, Assessment, Development and Evaluation: sistema standardizzato per valutare la qualità delle evidenze scientifiche e la forza delle raccomandazioni cliniche e di sanità pubblica. La qualità è classificata su quattro livelli (alta, moderata, bassa, molto bassa) considerando rischio di bias, inconsistenza, indirectness, imprecisione e publication bias. È adottato da WHO, Cochrane e linee guida internazionali per giustificare la fissazione dei valori guida per contaminanti dell'acqua potabile.",
    source: 'GRADE Working Group',
  },
  {
    term: 'Frazione attribuibile di popolazione',
    category: 'epidemiologia',
    definition:
      "Proporzione di casi di malattia in una popolazione che sarebbe eliminata se l'esposizione a uno specifico fattore di rischio venisse rimossa, assumendo causalità. Si calcola combinando rischio relativo e prevalenza dell'esposizione. È strumento chiave per quantificare il burden di malattia attribuibile a contaminanti idrici (arsenico, sottoprodotti di disinfezione, nitrati) e per supportare analisi costi-benefici degli interventi di potabilizzazione e di abbattimento delle fonti di contaminazione.",
    source: 'WHO Burden of Disease',
  },
];
