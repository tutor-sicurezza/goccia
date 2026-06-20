export interface CityGuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CityGuideFAQ {
  q: string;
  a: string;
}

export interface CityGuide {
  slug: string;
  cityName: string;
  province: string;
  region: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  waterUtility: string;
  geologicalContext: string;
  typicalParameters: {
    durezza: string;
    fluoruri?: string;
    arsenico?: string;
    pfas?: string;
    piombo?: string;
    cromo?: string;
  };
  sections: CityGuideSection[];
  faqs: CityGuideFAQ[];
  relatedCities: string[];
  ctaContext: string;
}

export const CITY_GUIDES: CityGuide[] = [
  {
    slug: "roma",
    cityName: "Roma",
    province: "RM",
    region: "Lazio",
    shortTitle: "Acqua del rubinetto a Roma: composizione, gestore ACEA e qualità",
    metaDescription:
      "Acqua di Roma: gestore ACEA Ato 2, sorgenti dei Colli Albani, parametri tipici (durezza, fluoruri, eventuale piombo edifici storici) e come verificarla.",
    searchKeywords: [
      "acqua di roma",
      "acqua rubinetto roma",
      "qualità acqua roma",
      "gestore acqua roma",
      "roma acqua dura",
      "fluoruri acqua roma",
      "acqua acea roma",
    ],
    intro:
      "L'acqua del rubinetto a Roma arriva in gran parte da sorgenti collegate al sistema vulcanico dei Colli Albani e ai grandi acquedotti laziali, gestiti da ACEA Ato 2. Storicamente la rete capitolina è una delle più articolate d'Europa, alimentata dalle Capore, dal Peschiera e da fonti minori. La qualità complessiva è considerata buona, ma esistono specificità locali: durezza medio-alta, presenza naturale di fluoruri legati all'origine vulcanica e, negli edifici storici del centro, possibili tracce di piombo dovute a vecchie tubazioni interne ai palazzi.",
    waterUtility: "ACEA Ato 2 S.p.A.",
    geologicalContext:
      "Roma è alimentata prevalentemente da sorgenti carbonatiche e vulcaniche del sistema appenninico e dei Colli Albani, area di origine magmatica che caratterizza chimicamente l'acqua con valori di fluoruri e potassio più elevati rispetto alla media nazionale.",
    typicalParameters: {
      durezza: "medio-alta (tipicamente 25-40 °F a seconda del distretto)",
      fluoruri: "frequentemente sopra il range ideale per origine vulcanica, comunque entro i limiti di legge",
      piombo: "potenziale nelle abitazioni storiche del centro con tubazioni pre-1960",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Roma",
        paragraphs: [
          "La rete idrica di Roma è alimentata principalmente dalle sorgenti del Peschiera-Capore (in Lazio e al confine con l'Abruzzo), integrate da campi pozzi e da fonti dei Colli Albani. Si tratta di uno dei più grandi sistemi acquedottistici d'Europa per portata e lunghezza.",
          "Storicamente, Roma è servita anche dagli acquedotti dell'Acqua Marcia, dell'Acqua Vergine e dell'Appia Antica, alcuni ancora attivi per usi specifici (fontane monumentali, nasoni). La gestione moderna del servizio idrico integrato è in capo ad ACEA Ato 2.",
        ],
        bullets: [
          "Sorgenti Peschiera-Capore: principale fonte di approvvigionamento",
          "Sistema Colli Albani: contributo significativo, soprattutto a sud della città",
          "Reti storiche: ancora in uso per fontane pubbliche e nasoni",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Roma",
        paragraphs: [
          "I controlli sull'acqua di Roma sono ripartiti tra più soggetti: ACEA Ato 2 svolge autocontrolli lungo l'intera filiera (sorgente, adduzione, distribuzione), la ASL Roma esegue i controlli ufficiali in distribuzione e ARPA Lazio supporta le attività di monitoraggio ambientale a monte.",
          "I parametri analizzati seguono il D.Lgs. 18/2023 (recepimento Direttiva UE 2020/2184) e includono indicatori microbiologici, chimici e indicatori. ACEA pubblica i referti per quartiere/distretto sul proprio sito istituzionale.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Roma è classificabile come mediamente dura, ricca di calcio e bicarbonati. I valori di fluoruri sono mediamente più alti rispetto alla media nazionale per ragioni geologiche (origine vulcanica). I residuati di disinfezione (clorito, trialometani) sono in generale bassi.",
          "Nelle abitazioni con impianti interni datati, vale la pena verificare il piombo a rubinetto: il problema non è la rete pubblica, ma le tubazioni private antecedenti agli anni Sessanta.",
        ],
        bullets: [
          "Durezza: medio-alta, tipicamente 25-40 °F",
          "Fluoruri: tendenzialmente più alti della media italiana",
          "Calcio e magnesio: presenti in quantità apprezzabili",
          "Piombo: rischio confinato a impianti privati molto datati",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Nel Lazio si sono storicamente registrate criticità su arsenico e fluoruri in alcuni Comuni di origine vulcanica (in particolare nel viterbese e in parti della provincia di Roma), oggetto di deroghe oggi progressivamente rientrate grazie a interventi di miscelazione e dearsenificazione.",
          "A Roma capitale il tema più discusso resta il piombo nelle tubazioni interne di edifici storici del centro, su cui ACEA e ASL hanno raccomandato verifiche puntuali al rubinetto utente.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Roma",
        paragraphs: [
          "Per avere un'idea immediata di come si colloca il tuo rubinetto rispetto ai limiti normativi, puoi usare GoccIA: bastano pochi dati per ottenere una lettura comprensibile dei parametri chiave.",
          "Se vivi in un edificio storico del centro o vuoi un quadro completo, può avere senso un'analisi di laboratorio mirata, soprattutto su piombo, durezza e fluoruri.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Roma è sicura?",
        a: "In generale sì: l'acqua distribuita da ACEA Ato 2 rispetta i limiti normativi previsti dal D.Lgs. 18/2023. La sicurezza ‘a casa tua' dipende anche dall'impianto interno: in edifici molto datati può valere la pena verificare il piombo al rubinetto.",
      },
      {
        q: "L'acqua di Roma è troppo dura?",
        a: "L'acqua di Roma è mediamente dura, con valori tipici tra 25 e 40 °F a seconda del distretto. Non è un problema sanitario, ma può favorire incrostazioni su elettrodomestici e sanitari.",
      },
      {
        q: "I fluoruri nell'acqua di Roma sono un problema?",
        a: "I fluoruri a Roma sono mediamente più alti rispetto alla media italiana per ragioni geologiche, ma di norma restano entro i limiti di legge. Per neonati e bambini piccoli può essere utile valutare il dato del proprio distretto.",
      },
      {
        q: "Come faccio a sapere se la mia acqua contiene piombo?",
        a: "Il piombo nella rete pubblica romana non è un problema diffuso; può invece esserlo in edifici antecedenti agli anni Sessanta con tubazioni interne in piombo. L'unico modo per saperlo è un'analisi di laboratorio prelevata al rubinetto di casa, prima possibile al mattino.",
      },
      {
        q: "Dove trovo i referti pubblici sull'acqua di Roma?",
        a: "ACEA pubblica i dati di qualità dell'acqua per distretto/quartiere sul proprio sito istituzionale. La ASL Roma e ARPA Lazio mettono a disposizione report periodici di sintesi.",
      },
    ],
    relatedCities: ["napoli", "firenze", "bologna", "genova"],
    ctaContext:
      "Per analizzare i parametri tipici dell'acqua di Roma — fluoruri, durezza, eventuali tracce di piombo negli edifici storici — con un laboratorio qualificato:",
  },
  {
    slug: "milano",
    cityName: "Milano",
    province: "MI",
    region: "Lombardia",
    shortTitle: "Acqua del rubinetto a Milano: gestore MM, falda e qualità",
    metaDescription:
      "Acqua di Milano: gestore MM SpA, falda lombarda, durezza elevata, attenzione al piombo negli edifici storici e PFAS in Lombardia. Tutti i parametri da conoscere.",
    searchKeywords: [
      "acqua di milano",
      "acqua rubinetto milano",
      "qualità acqua milano",
      "gestore acqua milano",
      "milano acqua dura",
      "acqua mm milano",
      "pfas acqua lombardia",
    ],
    intro:
      "L'acqua del rubinetto a Milano è gestita da MM S.p.A. (Metropolitana Milanese) e proviene quasi interamente dalla falda sotterranea sotto la città, captata da oltre 500 pozzi distribuiti in tutta l'area urbana. La qualità è considerata buona e costantemente monitorata, ma l'acqua milanese è mediamente dura e in alcune zone si possono rilevare residui di solventi o nitrati legati alla storia industriale e agricola della pianura padana. Nei palazzi più antichi può esistere un rischio residuo di piombo dovuto agli impianti interni.",
    waterUtility: "MM S.p.A. (Metropolitana Milanese — Servizio Idrico Integrato)",
    geologicalContext:
      "Milano è alimentata dalla grande falda di pianura padana, che riceve apporti dai sistemi alpini e prealpini e attraversa terreni alluvionali ricchi di carbonati, determinando un'acqua naturalmente calcica.",
    typicalParameters: {
      durezza: "alta (tipicamente 30-45 °F)",
      pfas: "monitoraggio attivo a livello regionale, con superamenti documentati in alcune aree lombarde non urbane",
      piombo: "potenziale negli edifici storici del centro con impianti privati molto datati",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Milano",
        paragraphs: [
          "L'acqua di Milano è di origine sotterranea: viene estratta da pozzi che intercettano la falda freatica e le falde profonde sotto la città, gestiti da MM. Non esiste un singolo grande acquedotto: la rete è alimentata in maniera distribuita da pozzi locali.",
          "Le falde milanesi ricevono contributi dal sistema alpino-prealpino e dai fiumi pedemontani. Le falde più profonde sono più protette dalle pressioni di superficie.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Milano",
        paragraphs: [
          "MM SpA esegue autocontrolli quotidiani su pozzi e rete; ATS Milano Città Metropolitana effettua i controlli ufficiali in distribuzione; ARPA Lombardia svolge attività di monitoraggio ambientale sulle falde.",
          "I dati di qualità per quartiere sono pubblicati dal gestore con aggiornamento periodico e sono consultabili online.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Milano è classificabile come dura: i valori di durezza si collocano tipicamente tra 30 e 45 °F. È un'acqua bicarbonato-calcica, con calcio e magnesio ben rappresentati.",
          "Sui parametri di interesse rientrano i nitrati (storica pressione agricola in pianura padana), i composti organoalogenati e, più recentemente, i PFAS, oggetto di monitoraggio regionale.",
        ],
        bullets: [
          "Durezza: alta, 30-45 °F",
          "Nitrati: monitorati, in genere entro i limiti di legge",
          "PFAS: monitoraggio attivo a livello regionale",
          "Piombo: rischio limitato a impianti privati antecedenti agli anni Sessanta",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "In Lombardia sono noti episodi di contaminazione di alcune falde non urbane, in particolare per solventi clorurati e PFAS, monitorati da ARPA Lombardia. A Milano città, MM ha più volte comunicato i risultati delle attività di trattamento e bonifica dei pozzi interessati.",
          "Nei palazzi storici del centro, come in altre grandi città italiane, il tema del piombo riguarda le tubazioni interne più datate, non la rete pubblica.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Milano",
        paragraphs: [
          "Per capire come si posiziona la tua acqua rispetto ai limiti, GoccIA offre una lettura immediata dei parametri chiave a partire da pochi dati di base.",
          "Se vivi in un edificio storico in centro o in zone con storica pressione industriale, un'analisi di laboratorio mirata su durezza, nitrati e piombo è un buon investimento.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Milano è sicura?",
        a: "Sì, l'acqua distribuita da MM SpA rispetta i limiti del D.Lgs. 18/2023 ed è sottoposta a controlli quotidiani. Il punto di attenzione è l'impianto interno di casa, soprattutto negli edifici storici.",
      },
      {
        q: "L'acqua di Milano è davvero molto dura?",
        a: "Sì, l'acqua di Milano è classificabile come dura, con valori tipici tra 30 e 45 °F. Non è un problema sanitario, ma giustifica l'uso di addolcitori e anticalcare per elettrodomestici.",
      },
      {
        q: "C'è il rischio PFAS nell'acqua di Milano?",
        a: "I PFAS in Lombardia sono oggetto di monitoraggio regionale. A Milano città non risultano emergenze diffuse, ma il gestore e ARPA pubblicano i risultati delle analisi.",
      },
      {
        q: "Posso usare l'acqua di Milano per preparare il latte del neonato?",
        a: "In generale sì, ma per i primi mesi molte famiglie preferiscono un'acqua a basso residuo fisso o effettuano un'analisi specifica del proprio rubinetto, soprattutto su nitrati e durezza.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Milano?",
        a: "MM SpA pubblica i dati sul proprio sito, distretto per distretto. ATS Milano e ARPA Lombardia mettono a disposizione report periodici.",
      },
    ],
    relatedCities: ["brescia", "bergamo", "verona", "padova"],
    ctaContext:
      "Per analizzare la durezza, i nitrati ed eventuali tracce di piombo nell'acqua di Milano con un laboratorio qualificato:",
  },
  {
    slug: "napoli",
    cityName: "Napoli",
    province: "NA",
    region: "Campania",
    shortTitle: "Acqua del rubinetto a Napoli: gestore ABC, sorgenti del Serino",
    metaDescription:
      "Acqua di Napoli: gestore ABC, sorgenti del Serino e dell'Appennino campano, qualità mediamente buona. Parametri tipici e come verificare la propria acqua.",
    searchKeywords: [
      "acqua di napoli",
      "acqua rubinetto napoli",
      "qualità acqua napoli",
      "gestore acqua napoli",
      "napoli acqua dura",
      "acqua abc napoli",
      "acqua serino napoli",
    ],
    intro:
      "L'acqua del rubinetto a Napoli è gestita da ABC Napoli (Acqua Bene Comune) e arriva in larga parte dalle storiche sorgenti del Serino, in provincia di Avellino, integrate da altre fonti dell'Appennino campano. Si tratta di acque di buona qualità, con durezza medio-bassa rispetto ad altre grandi città italiane. La rete è oggetto di un costante lavoro di ammodernamento per ridurre le perdite e tutelare le sorgenti.",
    waterUtility: "ABC Napoli Acqua Bene Comune Azienda Speciale",
    geologicalContext:
      "Napoli è alimentata principalmente da sorgenti calcaree dell'Appennino campano (gruppo del Terminio e del Cervialto), con acque a circolazione profonda mineralizzate ma di buona qualità chimica e batteriologica all'origine.",
    typicalParameters: {
      durezza: "medio-bassa (tipicamente 15-25 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Napoli",
        paragraphs: [
          "L'acqua di Napoli è alimentata storicamente dall'acquedotto del Serino, una delle infrastrutture idriche più antiche d'Italia, oggi affiancato da fonti dell'Appennino campano. Le sorgenti sono in larga parte gestite tramite il sistema regionale.",
          "ABC Napoli si occupa del servizio idrico in città: distribuzione, manutenzione della rete e controlli di qualità lungo tutta la filiera.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Napoli",
        paragraphs: [
          "I controlli a Napoli sono svolti da ABC Napoli (autocontrolli), ASL Napoli 1 Centro per i controlli ufficiali e ARPA Campania per il monitoraggio ambientale a monte e per i parametri ad alta complessità analitica.",
          "I referti sono in linea con quanto previsto dal D.Lgs. 18/2023 e i dati sintetici sono pubblicati periodicamente sul sito del gestore.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Napoli ha una durezza generalmente medio-bassa, è un'acqua bicarbonato-calcica leggera. Sodio e cloruri sono di norma bassi.",
          "I parametri da seguire sono quelli classici di reti urbane molto estese: trialometani (sottoprodotti di disinfezione), piombo a rubinetto solo in caso di impianti interni molto datati e indicatori microbiologici.",
        ],
        bullets: [
          "Durezza: medio-bassa, 15-25 °F",
          "Sodio: contenuto basso",
          "Trialometani: monitorati, in genere ben sotto i limiti",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Non si segnalano problematiche storiche di rilievo sui parametri normati per la fornitura urbana del capoluogo. Le maggiori criticità della Campania (es. alcuni comuni del litorale) riguardano contesti diversi da Napoli centro.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Napoli",
        paragraphs: [
          "Per una lettura immediata dei parametri chiave dell'acqua di casa tua, puoi usare GoccIA inserendo pochi dati.",
          "Per chi vive in palazzi storici del centro o vuole un quadro più approfondito, un'analisi di laboratorio mirata su piombo, durezza e indicatori microbiologici è una buona scelta.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Napoli è sicura?",
        a: "Sì, l'acqua distribuita da ABC Napoli rispetta i limiti normativi e proviene da sorgenti appenniniche storicamente di buona qualità. Eventuali criticità sono in genere legate all'impianto interno dell'edificio.",
      },
      {
        q: "L'acqua di Napoli è dura?",
        a: "No, è considerata medio-bassa come durezza: tipicamente 15-25 °F. È un'acqua leggera e ben tollerata anche per il consumo quotidiano.",
      },
      {
        q: "Si può bere l'acqua del Serino al rubinetto?",
        a: "Sì: l'acqua del Serino è una delle fonti tradizionali dell'acquedotto napoletano e arriva in città dopo i normali trattamenti di potabilizzazione e disinfezione.",
      },
      {
        q: "Come verificare il piombo nell'acqua di un palazzo storico a Napoli?",
        a: "Serve un'analisi di laboratorio prelevata al rubinetto, idealmente al primo getto del mattino. Il piombo eventualmente presente non viene dalla rete pubblica, ma dalle tubazioni interne datate.",
      },
      {
        q: "Dove trovo i dati pubblici dell'acqua di Napoli?",
        a: "ABC Napoli pubblica i dati sul proprio sito istituzionale; ASL Napoli 1 e ARPA Campania mettono a disposizione report periodici di monitoraggio.",
      },
    ],
    relatedCities: ["roma", "bari", "palermo", "catania"],
    ctaContext:
      "Per analizzare i parametri dell'acqua del rubinetto a Napoli — durezza, eventuale piombo da impianti interni, indicatori microbiologici — con un laboratorio qualificato:",
  },
  {
    slug: "torino",
    cityName: "Torino",
    province: "TO",
    region: "Piemonte",
    shortTitle: "Acqua del rubinetto a Torino: gestore SMAT, acqua alpina",
    metaDescription:
      "Acqua di Torino: gestore SMAT, acque alpine dalle valli, durezza media, storico cromo VI zona Acerbi. Parametri tipici e come verificare la tua acqua.",
    searchKeywords: [
      "acqua di torino",
      "acqua rubinetto torino",
      "qualità acqua torino",
      "gestore acqua torino",
      "torino acqua dura",
      "acqua smat torino",
      "cromo esavalente acqua torino",
    ],
    intro:
      "L'acqua del rubinetto a Torino è gestita da SMAT (Società Metropolitana Acque Torino) e proviene in larga parte dalle valli alpine piemontesi e dai campi pozzi della pianura. Si tratta di acque di buona qualità, generalmente fresche e con durezza medio-bassa. Storicamente, in alcuni quartieri della cintura torinese si è registrata attenzione per la presenza di cromo esavalente di origine industriale, tuttora monitorato. Il piombo a rubinetto può essere rilevato negli edifici storici con impianti interni datati.",
    waterUtility: "SMAT — Società Metropolitana Acque Torino S.p.A.",
    geologicalContext:
      "Torino è alimentata da sorgenti alpine delle valli del Po e dai campi pozzi del bacino di Torino, in un contesto idrogeologico complesso che unisce acque di origine glaciale e falde di pianura.",
    typicalParameters: {
      durezza: "medio-bassa (tipicamente 15-25 °F)",
      cromo: "monitorato storicamente, con interventi mirati in alcuni campi pozzi",
      piombo: "potenziale negli edifici storici del centro",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Torino",
        paragraphs: [
          "L'acqua di Torino arriva in parte dalle sorgenti delle valli alpine (in particolare Pian della Mussa, Sangone, Lemina) e in parte dai campi pozzi situati nell'area metropolitana.",
          "SMAT gestisce l'intero ciclo idrico integrato, dalla captazione alla depurazione, e mantiene un laboratorio di analisi tra i più strutturati d'Italia.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Torino",
        paragraphs: [
          "Gli autocontrolli sono svolti dal Centro Ricerche SMAT; i controlli ufficiali sono in capo all'ASL Città di Torino. ARPA Piemonte effettua le attività di monitoraggio ambientale, anche su parametri emergenti come PFAS e cromo VI.",
          "SMAT pubblica i dati di qualità per quartiere/distretto sul proprio sito istituzionale, con aggiornamenti periodici.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Torino, soprattutto quella di derivazione alpina, è leggera e a basso residuo fisso. La durezza tipica si colloca tra 15 e 25 °F.",
          "I parametri da seguire includono cromo esavalente (in alcune zone monitorato attivamente), nitrati nei campi pozzi e residui di disinfezione.",
        ],
        bullets: [
          "Durezza: medio-bassa, 15-25 °F",
          "Residuo fisso: contenuto per le acque di derivazione alpina",
          "Cromo VI: monitorato in alcune aree storiche",
          "Piombo: rischio confinato a impianti privati datati",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Nella cintura torinese (zona Acerbi e altri ambiti industriali) sono storicamente documentati casi di contaminazione di falda da cromo esavalente di origine antropica, oggetto di interventi di trattamento da parte di SMAT e di monitoraggi ARPA.",
          "Come a Roma e Milano, il piombo nelle abitazioni storiche del centro deriva dagli impianti interni datati, non dalla rete pubblica.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Torino",
        paragraphs: [
          "GoccIA permette di ottenere una lettura comprensibile dei principali parametri della tua acqua di casa a partire da pochi dati di base.",
          "Per chi vive nelle zone storicamente interessate da cromo VI o in edifici molto datati, ha senso un'analisi di laboratorio mirata.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Torino è sicura?",
        a: "Sì, l'acqua distribuita da SMAT rispetta i limiti del D.Lgs. 18/2023 ed è tra le più analizzate d'Italia. Il punto di attenzione principale resta l'impianto interno di casa nei palazzi storici.",
      },
      {
        q: "C'è cromo esavalente nell'acqua di Torino?",
        a: "In alcune aree della cintura torinese è documentata una contaminazione storica della falda da cromo VI di origine industriale. SMAT effettua trattamenti specifici per i campi pozzi interessati e ARPA Piemonte monitora il parametro.",
      },
      {
        q: "L'acqua di Torino è dura?",
        a: "No, è generalmente medio-bassa, soprattutto per la quota di acqua alpina (Pian della Mussa). I valori tipici sono tra 15 e 25 °F.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a Torino in gravidanza?",
        a: "In generale sì, la qualità complessiva è buona. Per chi vive in edifici storici o in zone storicamente interessate da cromo VI, può essere prudente un'analisi al rubinetto, soprattutto su piombo e cromo.",
      },
      {
        q: "Dove trovo i referti dell'acqua di Torino?",
        a: "SMAT pubblica i dati per quartiere sul proprio sito. ASL Città di Torino e ARPA Piemonte mettono a disposizione report periodici.",
      },
    ],
    relatedCities: ["milano", "genova", "brescia", "parma"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Torino — durezza, eventuale cromo esavalente, piombo da impianti interni — con un laboratorio qualificato:",
  },
  {
    slug: "palermo",
    cityName: "Palermo",
    province: "PA",
    region: "Sicilia",
    shortTitle: "Acqua del rubinetto a Palermo: gestore AMAP, invasi e sorgenti",
    metaDescription:
      "Acqua di Palermo: gestore AMAP, invasi e sorgenti calcaree, durezza alta e cloruri. Parametri tipici e come verificare la qualità del tuo rubinetto.",
    searchKeywords: [
      "acqua di palermo",
      "acqua rubinetto palermo",
      "qualità acqua palermo",
      "gestore acqua palermo",
      "palermo acqua dura",
      "acqua amap palermo",
      "cloruri acqua palermo",
    ],
    intro:
      "L'acqua del rubinetto a Palermo è distribuita da AMAP S.p.A. e arriva da un mix di invasi (Poma, Rosamarina, Piana degli Albanesi) e sorgenti carsiche dei rilievi che circondano la città. Si tratta tipicamente di acque medio-dure, ricche di calcio e con valori di cloruri non trascurabili nelle zone più vicine alla costa. La qualità complessiva è in linea con la normativa, anche se la rete soffre storicamente di razionamenti e perdite.",
    waterUtility: "AMAP S.p.A.",
    geologicalContext:
      "Palermo è alimentata da bacini calcarei dei Monti di Palermo e da invasi superficiali. La componente carsica conferisce all'acqua mineralizzazione bicarbonato-calcica, con possibili contributi di cloruri nelle aree costiere.",
    typicalParameters: {
      durezza: "medio-alta (tipicamente 25-40 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Palermo",
        paragraphs: [
          "AMAP gestisce l'approvvigionamento idrico cittadino, alimentato in parte dagli invasi di Poma, Rosamarina e Piana degli Albanesi e in parte da sorgenti e pozzi locali.",
          "L'integrazione fra acque superficiali e sotterranee comporta che la composizione dell'acqua possa variare a seconda del periodo dell'anno e della disponibilità degli invasi.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Palermo",
        paragraphs: [
          "I controlli sono svolti da AMAP (autocontrolli), ASP Palermo (controlli ufficiali) e ARPA Sicilia (monitoraggio ambientale). I parametri analizzati seguono il D.Lgs. 18/2023.",
          "I dati sintetici di qualità sono pubblicati da AMAP sul proprio sito istituzionale.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Palermo è tipicamente bicarbonato-calcica, con durezza medio-alta (25-40 °F). I cloruri possono essere superiori alla media nelle zone vicino al mare, mentre i nitrati sono in genere contenuti.",
          "Un'attenzione particolare va a torbidità e indicatori microbiologici nelle fasi di alimentazione da invasi superficiali.",
        ],
        bullets: [
          "Durezza: medio-alta, 25-40 °F",
          "Cloruri: possibili valori superiori alla media in zone costiere",
          "Indicatori microbiologici: monitorati con attenzione nelle fasi di alimentazione da invasi",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Non si segnalano problematiche storiche di rilievo per i parametri normati di sicurezza sanitaria. Le criticità più note riguardano continuità del servizio e perdite di rete, non la qualità sanitaria dell'acqua immessa in distribuzione.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Palermo",
        paragraphs: [
          "Con GoccIA puoi ottenere una lettura immediata dei principali parametri della tua acqua di casa a partire da pochi dati di base.",
          "Per un quadro completo, soprattutto su durezza, cloruri e indicatori microbiologici, può essere utile un'analisi di laboratorio dedicata.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Palermo è sicura?",
        a: "L'acqua distribuita da AMAP rispetta i limiti normativi. Le principali criticità storiche della rete riguardano continuità e perdite, non la sicurezza sanitaria dell'acqua immessa in distribuzione.",
      },
      {
        q: "L'acqua di Palermo è dura?",
        a: "Sì, è generalmente medio-dura, con valori tipici tra 25 e 40 °F per la presenza di calcio e bicarbonati.",
      },
      {
        q: "Perché l'acqua di Palermo a volte sembra ‘salata'?",
        a: "Nelle zone costiere si possono registrare valori di cloruri più alti, derivanti dal contesto idrogeologico. In genere restano entro i limiti, ma possono influenzare il sapore.",
      },
      {
        q: "Posso bere l'acqua di Palermo per preparare il latte ai neonati?",
        a: "In linea generale sì, ma molte famiglie preferiscono per i primi mesi un'acqua a basso residuo fisso, vista la durezza medio-alta dell'acqua di rete.",
      },
      {
        q: "Dove trovo i referti pubblici di AMAP?",
        a: "AMAP pubblica i dati di qualità dell'acqua sul proprio sito istituzionale. Ulteriori dati sono disponibili tramite ASP Palermo e ARPA Sicilia.",
      },
    ],
    relatedCities: ["catania", "messina", "bari", "napoli"],
    ctaContext:
      "Per analizzare l'acqua di Palermo — durezza, cloruri, indicatori microbiologici — con un laboratorio qualificato:",
  },
  {
    slug: "genova",
    cityName: "Genova",
    province: "GE",
    region: "Liguria",
    shortTitle: "Acqua del rubinetto a Genova: gestore Iren, acque appenniniche",
    metaDescription:
      "Acqua di Genova: gestore Iren, acque appenniniche e invasi liguri, durezza media, qualità complessivamente buona. Parametri tipici e verifica della propria acqua.",
    searchKeywords: [
      "acqua di genova",
      "acqua rubinetto genova",
      "qualità acqua genova",
      "gestore acqua genova",
      "genova acqua dura",
      "acqua iren genova",
    ],
    intro:
      "L'acqua del rubinetto a Genova è gestita da Iren (tramite la società Ireti) e arriva principalmente dagli invasi e dalle sorgenti dell'entroterra appenninico ligure. La qualità complessiva è considerata buona, con durezza tipicamente media e basso contenuto di sodio. La conformazione orografica di Genova rende il servizio complesso: l'acqua viaggia tra crinali, vallate e pompaggi, ma i controlli sono fitti lungo tutta la filiera.",
    waterUtility: "Iren S.p.A. (Gruppo Iren — Servizio Idrico Integrato)",
    geologicalContext:
      "Genova è alimentata da acquiferi e invasi dell'Appennino ligure, in un contesto geologico misto fra rocce calcaree e formazioni argillose, che dà acque mediamente bicarbonato-calciche.",
    typicalParameters: {
      durezza: "media (tipicamente 20-30 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Genova",
        paragraphs: [
          "L'approvvigionamento di Genova si basa sugli invasi del Brugneto e di Val Noci, integrati da sorgenti dell'entroterra appenninico.",
          "Iren gestisce captazione, potabilizzazione e distribuzione, con un sistema articolato su molti serbatoi e impianti di sollevamento per servire i quartieri lungo la costa e le vallate.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Genova",
        paragraphs: [
          "I controlli sono svolti da Iren (autocontrolli), ASL 3 Genovese (controlli ufficiali) e ARPAL (monitoraggio ambientale). I parametri analizzati seguono il D.Lgs. 18/2023.",
          "I report sintetici sono pubblicati periodicamente dal gestore.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Genova è tipicamente bicarbonato-calcica, con durezza media (20-30 °F) e basso contenuto di sodio.",
          "I parametri da seguire sono quelli classici delle acque di origine superficiale: torbidità in caso di piogge intense, indicatori microbiologici e sottoprodotti di disinfezione.",
        ],
        bullets: [
          "Durezza: media, 20-30 °F",
          "Sodio: tipicamente basso",
          "Torbidità: monitorata, può variare con le condizioni meteo",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Non si segnalano problematiche storiche di rilievo sui parametri sanitari normati. Le criticità maggiori riguardano la gestione del servizio in caso di eventi meteo estremi o frane, non la qualità sanitaria dell'acqua distribuita.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Genova",
        paragraphs: [
          "GoccIA permette una lettura immediata dei parametri principali della tua acqua a partire da pochi dati di base.",
          "Per un quadro completo, soprattutto in caso di abitazioni in palazzi storici del centro storico genovese, una verifica di laboratorio è una buona scelta.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Genova è sicura?",
        a: "Sì, l'acqua distribuita da Iren rispetta i limiti normativi previsti dal D.Lgs. 18/2023. Eventuali criticità sono in genere legate agli impianti interni di edifici storici.",
      },
      {
        q: "L'acqua di Genova è dura?",
        a: "È classificabile come media: valori tipici 20-30 °F. Una durezza che non crea criticità sanitarie ma può favorire piccole incrostazioni.",
      },
      {
        q: "L'acqua del Brugneto è quella che esce dal mio rubinetto?",
        a: "Il sistema Brugneto-Val Noci è una delle principali fonti per Genova, ma l'acqua distribuita è il risultato di una miscela con altri invasi e sorgenti, in base ai consumi e alle disponibilità.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a Genova senza filtrarla?",
        a: "Sì, l'acqua è potabile e conforme ai limiti di legge. Filtri o brocche filtranti sono una scelta di gusto/comfort, non un'esigenza sanitaria.",
      },
      {
        q: "Dove trovo i referti dell'acqua di Genova?",
        a: "Iren pubblica i dati sul proprio sito; ASL 3 Genovese e ARPAL mettono a disposizione report periodici di sintesi.",
      },
    ],
    relatedCities: ["torino", "parma", "bologna", "firenze"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Genova — durezza, indicatori microbiologici, eventuale piombo da impianti interni — con un laboratorio qualificato:",
  },
  {
    slug: "bologna",
    cityName: "Bologna",
    province: "BO",
    region: "Emilia-Romagna",
    shortTitle: "Acqua del rubinetto a Bologna: gestore Hera, acque appenniniche",
    metaDescription:
      "Acqua di Bologna: gestore Hera, mix di acque appenniniche e di falda, durezza media. Parametri tipici e come verificare la propria acqua di rete.",
    searchKeywords: [
      "acqua di bologna",
      "acqua rubinetto bologna",
      "qualità acqua bologna",
      "gestore acqua bologna",
      "bologna acqua dura",
      "acqua hera bologna",
    ],
    intro:
      "L'acqua del rubinetto a Bologna è gestita dal Gruppo Hera e proviene da un mix bilanciato di acque superficiali appenniniche (in particolare dal sistema del Reno-Setta) e da falde di pianura. La qualità è considerata buona e i controlli sono fitti. La durezza è media, in linea con l'area emiliana, e i parametri tipici della pianura padana — nitrati e sottoprodotti di disinfezione — sono monitorati con attenzione.",
    waterUtility: "Hera S.p.A. (Gruppo Hera — Servizio Idrico Integrato)",
    geologicalContext:
      "Bologna è alimentata da una combinazione di acque superficiali del bacino del Reno-Setta e da falde della pianura padana, in terreni alluvionali ricchi di calcare e con presenze di sedimenti agricoli.",
    typicalParameters: {
      durezza: "media (tipicamente 20-32 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Bologna",
        paragraphs: [
          "Bologna è servita in larga parte dall'impianto di potabilizzazione di Val di Setta, che tratta acque superficiali dell'Appennino, e da campi pozzi situati in pianura.",
          "Hera gestisce il servizio idrico integrato e la rete cittadina, garantendo i controlli lungo l'intera filiera.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Bologna",
        paragraphs: [
          "I controlli sono ripartiti tra Hera (autocontrolli), AUSL Bologna (controlli ufficiali) e ARPAE Emilia-Romagna (monitoraggio ambientale).",
          "Hera pubblica per quartiere i parametri principali sul proprio sito, con aggiornamenti periodici.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Bologna è tipicamente bicarbonato-calcica, con durezza media (20-32 °F). I nitrati sono monitorati nei campi pozzi di pianura, dove la pressione agricola è storica.",
          "I sottoprodotti di disinfezione (trialometani) sono monitorati con attenzione, specie quando aumenta la quota di acqua superficiale trattata.",
        ],
        bullets: [
          "Durezza: media, 20-32 °F",
          "Nitrati: monitorati nei campi pozzi di pianura",
          "Trialometani: tenuti sotto controllo",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "In Pianura Padana è documentata una pressione storica da nitrati di origine agricola sulle falde, oggetto di monitoraggio costante. Hera e ARPAE pubblicano i dati che mostrano nel tempo le tendenze nei principali campi pozzi.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Bologna",
        paragraphs: [
          "Con GoccIA puoi ottenere rapidamente un'idea della qualità della tua acqua di casa a partire da pochi dati di base.",
          "Se vivi in centro storico in un palazzo molto datato, o desideri un dettaglio analitico più fine, un'analisi di laboratorio mirata è una scelta valida.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Bologna è sicura?",
        a: "Sì, l'acqua distribuita da Hera rispetta i limiti normativi previsti dal D.Lgs. 18/2023 ed è sottoposta a controlli quotidiani.",
      },
      {
        q: "L'acqua di Bologna è dura?",
        a: "L'acqua di Bologna è classificabile come media: tipicamente 20-32 °F, in linea con la media emiliana.",
      },
      {
        q: "I nitrati nell'acqua di Bologna sono un problema?",
        a: "I nitrati sono il parametro più rappresentativo della pressione agricola in Pianura Padana. Hera li monitora costantemente nei campi pozzi e i valori riportati restano entro i limiti normativi.",
      },
      {
        q: "Posso usare l'acqua del rubinetto di Bologna per il neonato?",
        a: "In generale sì, soprattutto se la zona di residenza ha valori di nitrati lontani dai limiti. Per il primo periodo molte famiglie scelgono comunque acque a basso residuo o effettuano un'analisi dedicata.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Bologna?",
        a: "Hera pubblica i dati per quartiere sul proprio sito; AUSL Bologna e ARPAE pubblicano report periodici.",
      },
    ],
    relatedCities: ["parma", "reggio-emilia", "firenze", "padova"],
    ctaContext:
      "Per analizzare l'acqua di Bologna — durezza, nitrati ed eventuali sottoprodotti di disinfezione — con un laboratorio qualificato:",
  },
  {
    slug: "firenze",
    cityName: "Firenze",
    province: "FI",
    region: "Toscana",
    shortTitle: "Acqua del rubinetto a Firenze: gestore Publiacqua, acque del Mugello",
    metaDescription:
      "Acqua di Firenze: gestore Publiacqua, acque del Mugello e dell'Arno trattate, durezza media, qualità generalmente buona. Parametri tipici da conoscere.",
    searchKeywords: [
      "acqua di firenze",
      "acqua rubinetto firenze",
      "qualità acqua firenze",
      "gestore acqua firenze",
      "firenze acqua dura",
      "acqua publiacqua firenze",
    ],
    intro:
      "L'acqua del rubinetto a Firenze è gestita da Publiacqua e arriva principalmente da fonti del Mugello e dall'Arno, dopo un processo di potabilizzazione presso l'impianto dell'Anconella, uno dei più grandi d'Italia. La qualità complessiva è considerata buona, con durezza media e parametri stabili. La rete è oggetto di costante ammodernamento per ridurre le perdite.",
    waterUtility: "Publiacqua S.p.A.",
    geologicalContext:
      "Firenze è alimentata dal sistema del Mugello (sorgenti e bacini) e dal trattamento delle acque dell'Arno, in un contesto geologico misto fra rocce calcaree appenniniche e depositi alluvionali del bacino fiorentino.",
    typicalParameters: {
      durezza: "media (tipicamente 20-32 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Firenze",
        paragraphs: [
          "L'acqua di Firenze proviene in larga parte dall'impianto dell'Anconella, che tratta le acque dell'Arno, e da fonti del Mugello (compresi gli invasi di Bilancino).",
          "Publiacqua gestisce l'intera filiera, dalla captazione alla distribuzione, e mantiene una rete di controllo capillare.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Firenze",
        paragraphs: [
          "Gli autocontrolli sono svolti da Publiacqua; i controlli ufficiali da AUSL Toscana Centro; il monitoraggio ambientale da ARPAT.",
          "I dati sintetici di qualità per ciascun comune servito sono pubblicati sul sito di Publiacqua.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Firenze è tipicamente bicarbonato-calcica con durezza media (20-32 °F). Sodio e cloruri sono in genere contenuti.",
          "Da seguire i sottoprodotti di disinfezione (trialometani), legati ai processi di trattamento delle acque superficiali, e gli indicatori microbiologici.",
        ],
        bullets: [
          "Durezza: media, 20-32 °F",
          "Sodio: contenuto",
          "Trialometani: monitorati, in genere entro i limiti",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Non si segnalano problematiche storiche di rilievo sui parametri normati per la fornitura del capoluogo. Le criticità della rete toscana riguardano in genere altri ambiti e altre province.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Firenze",
        paragraphs: [
          "GoccIA offre una lettura immediata dei parametri principali a partire da pochi dati di base.",
          "Per un quadro completo, soprattutto nei palazzi storici del centro, un'analisi di laboratorio mirata è una buona scelta.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Firenze è sicura?",
        a: "Sì, l'acqua distribuita da Publiacqua rispetta i limiti normativi previsti dal D.Lgs. 18/2023. I controlli sono quotidiani lungo l'intera filiera.",
      },
      {
        q: "L'acqua di Firenze è dura?",
        a: "È classificabile come media: tipicamente 20-32 °F. Non rappresenta un problema sanitario.",
      },
      {
        q: "Posso bere l'acqua dell'Anconella senza filtrarla?",
        a: "Sì, è acqua potabile a tutti gli effetti. I filtri sono una scelta di gusto/comfort, non un'esigenza sanitaria.",
      },
      {
        q: "Come verificare la qualità dell'acqua in un palazzo storico fiorentino?",
        a: "L'unico modo è un'analisi di laboratorio prelevata al rubinetto, idealmente al primo getto del mattino, specie su piombo e durezza.",
      },
      {
        q: "Dove trovo i referti pubblici di Publiacqua?",
        a: "Publiacqua pubblica i dati per comune e periodo sul proprio sito istituzionale; AUSL Toscana Centro e ARPAT pubblicano report periodici.",
      },
    ],
    relatedCities: ["bologna", "prato", "genova", "roma"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Firenze — durezza, sottoprodotti di disinfezione, eventuale piombo negli edifici storici — con un laboratorio qualificato:",
  },
  {
    slug: "bari",
    cityName: "Bari",
    province: "BA",
    region: "Puglia",
    shortTitle: "Acqua del rubinetto a Bari: Acquedotto Pugliese, acque dalla Basilicata",
    metaDescription:
      "Acqua di Bari: gestore Acquedotto Pugliese, fonti dalla Basilicata, durezza media, qualità in linea con i limiti. Parametri tipici e verifica del rubinetto.",
    searchKeywords: [
      "acqua di bari",
      "acqua rubinetto bari",
      "qualità acqua bari",
      "gestore acqua bari",
      "bari acqua dura",
      "acqua acquedotto pugliese",
    ],
    intro:
      "L'acqua del rubinetto a Bari è gestita da Acquedotto Pugliese (AQP), il più esteso acquedotto d'Europa, che porta in Puglia acque captate in larga parte dalla Basilicata (Sele-Calore, Pertusillo, Sinni). La qualità complessiva è in linea con la normativa, con durezza media e parametri stabili. La storia dell'acquedotto pugliese è una delle grandi opere idrauliche italiane del Novecento.",
    waterUtility: "Acquedotto Pugliese S.p.A. (AQP)",
    geologicalContext:
      "Bari riceve acque prevalentemente da sorgenti e invasi della Basilicata e della Campania orientale, dopo trasporto attraverso reti di grande adduzione. L'acquifero carsico pugliese contribuisce in misura limitata e con caratteristiche più mineralizzate.",
    typicalParameters: {
      durezza: "media (tipicamente 20-35 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Bari",
        paragraphs: [
          "Le principali fonti di approvvigionamento per Bari sono lo schema Sele-Calore (sorgenti in Campania) e gli invasi del Pertusillo e del Sinni in Basilicata.",
          "Acquedotto Pugliese gestisce captazione, adduzione, potabilizzazione e distribuzione, con migliaia di chilometri di rete.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Bari",
        paragraphs: [
          "Gli autocontrolli sono svolti da AQP; i controlli ufficiali da ASL Bari; il monitoraggio ambientale da ARPA Puglia.",
          "I dati sintetici per comune sono pubblicati sul sito di AQP.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Bari è tipicamente bicarbonato-calcica, con durezza media (20-35 °F). Il sodio è generalmente contenuto.",
          "I parametri da seguire sono quelli classici per reti di grande adduzione: indicatori microbiologici e sottoprodotti di disinfezione.",
        ],
        bullets: [
          "Durezza: media, 20-35 °F",
          "Sodio: contenuto",
          "Sottoprodotti di disinfezione: monitorati con attenzione",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Non si segnalano problematiche storiche di rilievo per i parametri normati nella fornitura del capoluogo. Le maggiori criticità storiche della Puglia hanno riguardato la disponibilità della risorsa, più che la sua qualità sanitaria.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Bari",
        paragraphs: [
          "GoccIA permette una lettura immediata dei principali parametri della tua acqua a partire da pochi dati di base.",
          "Per un quadro più completo, soprattutto su edifici datati, un'analisi di laboratorio mirata è una scelta valida.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Bari è sicura?",
        a: "Sì, l'acqua distribuita da Acquedotto Pugliese rispetta i limiti del D.Lgs. 18/2023.",
      },
      {
        q: "L'acqua di Bari arriva davvero dalla Basilicata?",
        a: "Sì, in larga parte. Lo schema Sele-Calore e gli invasi lucani forniscono storicamente la quota più importante dell'approvvigionamento pugliese.",
      },
      {
        q: "L'acqua di Bari è dura?",
        a: "È classificabile come media: tipicamente 20-35 °F. Non rappresenta una criticità sanitaria.",
      },
      {
        q: "Posso bere l'acqua del rubinetto di Bari senza filtri?",
        a: "Sì, è potabile e conforme. Filtri o caraffe sono una scelta di gusto, non un'esigenza sanitaria.",
      },
      {
        q: "Dove trovo i referti pubblici di AQP per Bari?",
        a: "Acquedotto Pugliese pubblica i dati per comune sul proprio sito istituzionale; ASL Bari e ARPA Puglia mettono a disposizione report periodici.",
      },
    ],
    relatedCities: ["taranto", "napoli", "palermo", "catania"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Bari — durezza, sottoprodotti di disinfezione ed eventuale piombo negli edifici datati — con un laboratorio qualificato:",
  },
  {
    slug: "catania",
    cityName: "Catania",
    province: "CT",
    region: "Sicilia",
    shortTitle: "Acqua del rubinetto a Catania: gestore Sidra, acque etnee",
    metaDescription:
      "Acqua di Catania: gestore Sidra, acque etnee vulcaniche, durezza medio-alta. Parametri tipici e come verificare la qualità del proprio rubinetto.",
    searchKeywords: [
      "acqua di catania",
      "acqua rubinetto catania",
      "qualità acqua catania",
      "gestore acqua catania",
      "catania acqua dura",
      "acqua sidra catania",
      "acqua etnea catania",
    ],
    intro:
      "L'acqua del rubinetto a Catania è gestita da Sidra S.p.A. e proviene quasi interamente dal sistema idrogeologico dell'Etna, una delle più importanti riserve d'acqua del Mediterraneo. Le acque etnee sono storicamente apprezzate per la loro qualità, con un caratteristico profilo chimico legato alle rocce vulcaniche e una durezza tipicamente medio-alta.",
    waterUtility: "Sidra S.p.A. (Sistema Idrico Catania)",
    geologicalContext:
      "Catania è alimentata da sorgenti e pozzi del sistema vulcanico etneo, con acque che attraversano basalti e prodotti piroclastici. Le concentrazioni di calcio, magnesio e bicarbonati sono in genere apprezzabili, con possibile presenza di fluoruri e altri elementi tipici del vulcanico.",
    typicalParameters: {
      durezza: "medio-alta (tipicamente 25-40 °F)",
      fluoruri: "presenti, legati all'origine vulcanica delle acque",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Catania",
        paragraphs: [
          "Catania è alimentata da sorgenti e campi pozzi dell'Etna, gestiti da Sidra. Le acque etnee sono note storicamente per qualità organolettica e ricchezza minerale.",
          "Sidra cura captazione e distribuzione cittadina, in coordinamento con il sistema regionale.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Catania",
        paragraphs: [
          "Gli autocontrolli sono in capo a Sidra; i controlli ufficiali a ASP Catania; il monitoraggio ambientale a ARPA Sicilia.",
          "I dati sintetici sono pubblicati sul sito di Sidra.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Catania è tipicamente bicarbonato-calcica con apporti tipici del vulcanico. La durezza è medio-alta (25-40 °F) e i fluoruri sono presenti in concentrazioni in genere entro i limiti, ma più elevate rispetto alla media nazionale.",
          "Parametri da seguire: fluoruri, durezza, eventualmente vanadio e altri elementi tipici degli acquiferi vulcanici.",
        ],
        bullets: [
          "Durezza: medio-alta, 25-40 °F",
          "Fluoruri: tipici dell'acqua etnea",
          "Vanadio: parametro caratteristico delle acque vulcaniche",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Per la fornitura urbana del capoluogo non si segnalano problematiche storiche di rilievo sui parametri sanitari normati. Eventuali criticità storiche siciliane su altre province hanno riguardato infrastrutture e disponibilità, più che la qualità delle acque etnee.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Catania",
        paragraphs: [
          "Con GoccIA puoi ottenere una lettura immediata dei parametri principali a partire da pochi dati di base.",
          "Per un quadro più completo, soprattutto su fluoruri e durezza, un'analisi di laboratorio mirata è una scelta valida.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Catania è sicura?",
        a: "Sì, l'acqua distribuita da Sidra rispetta i limiti normativi previsti dal D.Lgs. 18/2023.",
      },
      {
        q: "L'acqua etnea è davvero così particolare?",
        a: "Sì, ha una composizione tipica delle acque vulcaniche: ricca di minerali, con fluoruri e durezza medio-alta. È storicamente apprezzata per le qualità organolettiche.",
      },
      {
        q: "L'acqua di Catania è dura?",
        a: "Sì, è classificabile come medio-alta, tipicamente 25-40 °F.",
      },
      {
        q: "I fluoruri etnei sono un problema per i bambini?",
        a: "Di norma rientrano nei limiti di legge, ma per i bambini piccoli può essere prudente verificare il dato del proprio distretto, evitando un'esposizione cumulativa eccessiva (acqua + dentifrici fluorati).",
      },
      {
        q: "Dove trovo i referti pubblici di Sidra?",
        a: "Sidra pubblica i dati sul proprio sito; ASP Catania e ARPA Sicilia mettono a disposizione report periodici.",
      },
    ],
    relatedCities: ["palermo", "messina", "napoli", "roma"],
    ctaContext:
      "Per analizzare l'acqua etnea di Catania — fluoruri, durezza e altri parametri tipici delle acque vulcaniche — con un laboratorio qualificato:",
  },
  {
    slug: "venezia",
    cityName: "Venezia",
    province: "VE",
    region: "Veneto",
    shortTitle: "Acqua del rubinetto a Venezia: gestore Veritas, acque alpine",
    metaDescription:
      "Acqua di Venezia: gestore Veritas, acque alpine e prealpine, durezza media, monitoraggio PFAS in Veneto. Parametri tipici e verifica della propria acqua.",
    searchKeywords: [
      "acqua di venezia",
      "acqua rubinetto venezia",
      "qualità acqua venezia",
      "gestore acqua venezia",
      "venezia acqua dura",
      "acqua veritas venezia",
      "pfas acqua veneto",
    ],
    intro:
      "L'acqua del rubinetto a Venezia è gestita da Veritas e proviene da fonti alpine e prealpine, oltre che da campi pozzi della pianura veneta. La qualità complessiva è in linea con la normativa e la rete è oggetto di costanti controlli. Il Veneto è la regione italiana al centro del tema PFAS dopo il caso Miteni (Vicenza, 2013): per Venezia il monitoraggio è continuo e i risultati pubblicati dal gestore e da ARPAV mostrano una situazione presidiata.",
    waterUtility: "Veritas S.p.A.",
    geologicalContext:
      "Venezia è alimentata da fonti del sistema alpino e prealpino veneto e da falde della pianura, in terreni alluvionali calcarei. Le acque distribuite sono di norma bicarbonato-calciche.",
    typicalParameters: {
      durezza: "media (tipicamente 20-32 °F)",
      pfas: "monitoraggio attivo a livello regionale dopo il caso Miteni; valori in distribuzione sotto i limiti",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Venezia",
        paragraphs: [
          "Veritas attinge da sorgenti delle Prealpi venete e da campi pozzi di pianura per servire Venezia e i comuni della Riviera del Brenta e del litorale.",
          "La gestione è particolarmente complessa per le caratteristiche del territorio (laguna, isole, centri storici).",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Venezia",
        paragraphs: [
          "Gli autocontrolli sono in capo a Veritas; i controlli ufficiali a ULSS 3 Serenissima; il monitoraggio ambientale (compresi i PFAS) a ARPAV.",
          "I dati sintetici sono pubblicati sul sito del gestore e di ARPAV.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Venezia è tipicamente bicarbonato-calcica con durezza media (20-32 °F). I PFAS sono il parametro emergente più sorvegliato in Veneto.",
          "Da seguire anche nitrati, sottoprodotti di disinfezione e indicatori microbiologici.",
        ],
        bullets: [
          "Durezza: media, 20-32 °F",
          "PFAS: monitoraggio costante a livello regionale",
          "Nitrati: monitorati nei campi pozzi di pianura",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Il tema PFAS in Veneto è documentato a livello pubblico dal 2013, in seguito alla contaminazione dell'area Miteni (Trissino, VI). Le aree più colpite sono nelle province di Vicenza, Verona e Padova; per Venezia il monitoraggio è attivo e i valori in distribuzione sono entro i limiti normativi.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Venezia",
        paragraphs: [
          "GoccIA permette una lettura immediata dei principali parametri della tua acqua a partire da pochi dati di base.",
          "Per chi vive nei centri storici o vuole un dettaglio su PFAS e piombo, un'analisi di laboratorio mirata è una scelta valida.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Venezia è sicura?",
        a: "Sì, l'acqua distribuita da Veritas rispetta i limiti del D.Lgs. 18/2023 ed è oggetto di monitoraggio costante anche per i PFAS.",
      },
      {
        q: "Ci sono PFAS nell'acqua di Venezia?",
        a: "Il monitoraggio regionale è continuo. I valori in distribuzione risultano entro i limiti normativi; le zone più colpite del Veneto sono concentrate in altre province (Vicenza, Verona, Padova).",
      },
      {
        q: "L'acqua di Venezia è dura?",
        a: "È classificabile come media: tipicamente 20-32 °F.",
      },
      {
        q: "Posso bere l'acqua del rubinetto in un appartamento storico a Venezia?",
        a: "Sì, ma se l'impianto interno è molto datato è prudente verificare il piombo al rubinetto con un'analisi.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Venezia?",
        a: "Veritas pubblica i dati sul proprio sito; ULSS 3 Serenissima e ARPAV pubblicano report periodici, compresi i dati PFAS.",
      },
    ],
    relatedCities: ["padova", "verona", "trieste", "bologna"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Venezia — durezza, PFAS, eventuale piombo da impianti interni — con un laboratorio qualificato:",
  },
  {
    slug: "verona",
    cityName: "Verona",
    province: "VR",
    region: "Veneto",
    shortTitle: "Acqua del rubinetto a Verona: gestore Acque Veronesi e tema PFAS",
    metaDescription:
      "Acqua di Verona: gestore Acque Veronesi, area lambita dalla contaminazione PFAS veneta, monitoraggio attivo. Parametri tipici e verifica della propria acqua.",
    searchKeywords: [
      "acqua di verona",
      "acqua rubinetto verona",
      "qualità acqua verona",
      "gestore acqua verona",
      "verona acqua dura",
      "pfas acqua verona",
      "acque veronesi",
    ],
    intro:
      "L'acqua del rubinetto a Verona è gestita da Acque Veronesi e proviene principalmente da fonti del sistema prealpino e da campi pozzi di pianura. La provincia di Verona è in parte ricompresa nella zona di attenzione PFAS del Veneto (area rossa parziale), con misure di filtrazione e sostituzione delle fonti adottate da anni. I controlli sono fitti e i risultati periodicamente pubblicati.",
    waterUtility: "Acque Veronesi S.c.a.r.l.",
    geologicalContext:
      "Verona è alimentata da fonti dei Lessini e da falde di pianura, in terreni alluvionali calcarei. La presenza di acquiferi sotterranei in pianura comporta sensibilità ai contaminanti diffusi a livello agricolo e industriale.",
    typicalParameters: {
      durezza: "media (tipicamente 20-32 °F)",
      pfas: "monitoraggio attivo, con impianti di filtrazione a carboni attivi nelle aree interessate",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Verona",
        paragraphs: [
          "L'acqua di Verona arriva in parte dalle sorgenti dei Lessini e in parte dai campi pozzi della pianura veronese, gestiti da Acque Veronesi.",
          "Sulle linee di campo pozzi in zona di attenzione PFAS sono stati installati impianti di filtrazione a carboni attivi.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Verona",
        paragraphs: [
          "Gli autocontrolli sono svolti da Acque Veronesi; i controlli ufficiali da ULSS 9 Scaligera; il monitoraggio ambientale (compresi i PFAS) da ARPAV.",
          "Acque Veronesi pubblica periodicamente i dati per comune sul proprio sito.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Verona è tipicamente bicarbonato-calcica, con durezza media. I parametri da tenere d'occhio includono PFAS (storica criticità veneta), nitrati nei campi pozzi di pianura e sottoprodotti di disinfezione.",
        ],
        bullets: [
          "Durezza: media, 20-32 °F",
          "PFAS: monitoraggio attivo, filtrazione su parte della rete",
          "Nitrati: monitorati nei campi pozzi di pianura",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Parte della provincia di Verona ricade nell'area di attenzione PFAS del Veneto (dal 2013, caso Miteni di Trissino, VI). Sono stati realizzati interventi di filtrazione e cambio di fonte; ARPAV e Acque Veronesi pubblicano i dati di monitoraggio.",
          "Sui campi pozzi di pianura è anche storicamente presente una pressione da nitrati di origine agricola.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Verona",
        paragraphs: [
          "Con GoccIA puoi ottenere una lettura immediata dei principali parametri della tua acqua a partire da pochi dati di base.",
          "Se vivi in un'area storicamente coinvolta nel monitoraggio PFAS, un'analisi di laboratorio mirata è una buona scelta.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Verona è sicura?",
        a: "Sì, l'acqua distribuita da Acque Veronesi rispetta i limiti del D.Lgs. 18/2023. Per i PFAS sono attivi impianti di filtrazione nei punti necessari.",
      },
      {
        q: "Verona rientra nella zona PFAS?",
        a: "Sì, in parte. Alcuni comuni della provincia rientrano nell'area di attenzione PFAS del Veneto. Le contromisure (filtrazione, cambio di fonte) sono in atto da anni.",
      },
      {
        q: "L'acqua di Verona è dura?",
        a: "È classificabile come media: tipicamente 20-32 °F.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a Verona durante la gravidanza?",
        a: "In generale sì, ma chi vive nelle zone storicamente interessate dai PFAS può scegliere di verificare i dati pubblicati o effettuare un'analisi del proprio rubinetto.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Verona?",
        a: "Acque Veronesi pubblica i dati per comune sul proprio sito; ULSS 9 Scaligera e ARPAV pubblicano report periodici, compresi i dati PFAS.",
      },
    ],
    relatedCities: ["padova", "venezia", "brescia", "milano"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Verona — PFAS, nitrati, durezza ed eventuali tracce di piombo — con un laboratorio qualificato:",
  },
  {
    slug: "messina",
    cityName: "Messina",
    province: "ME",
    region: "Sicilia",
    shortTitle: "Acqua del rubinetto a Messina: gestore AMAM, sorgenti peloritane",
    metaDescription:
      "Acqua di Messina: gestore AMAM, sorgenti dei Peloritani, qualità in linea con i limiti. Parametri tipici e come verificare il proprio rubinetto.",
    searchKeywords: [
      "acqua di messina",
      "acqua rubinetto messina",
      "qualità acqua messina",
      "gestore acqua messina",
      "messina acqua dura",
      "acqua amam messina",
    ],
    intro:
      "L'acqua del rubinetto a Messina è gestita da AMAM (Azienda Meridionale Acque Messina) e proviene principalmente da sorgenti e pozzi del sistema appenninico peloritano. La qualità complessiva è considerata discreta e in linea con la normativa, con durezza tipicamente media. La rete cittadina è oggetto di costanti interventi di manutenzione.",
    waterUtility: "AMAM S.p.A. (Azienda Meridionale Acque Messina)",
    geologicalContext:
      "Messina è alimentata da sorgenti dei Monti Peloritani e da campi pozzi nell'area dello Stretto, in un contesto geologico cristallino con apporti calcarei.",
    typicalParameters: {
      durezza: "media (tipicamente 20-30 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Messina",
        paragraphs: [
          "L'acqua di Messina arriva dalle sorgenti dei Peloritani (in particolare dall'area dell'acquedotto di Fiumefreddo e da altre fonti locali) e da campi pozzi nell'area dello Stretto.",
          "AMAM gestisce captazione, adduzione e distribuzione cittadina.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Messina",
        paragraphs: [
          "Gli autocontrolli sono in capo a AMAM; i controlli ufficiali a ASP Messina; il monitoraggio ambientale a ARPA Sicilia.",
          "I dati sintetici sono pubblicati sul sito del gestore.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Messina è tipicamente bicarbonato-calcica con durezza media. Sodio e cloruri sono in genere contenuti.",
          "I parametri da seguire sono quelli classici di reti urbane: torbidità, indicatori microbiologici e sottoprodotti di disinfezione.",
        ],
        bullets: [
          "Durezza: media, 20-30 °F",
          "Sodio: contenuto",
          "Torbidità: monitorata, può variare con le condizioni meteo",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Non si segnalano problematiche storiche di rilievo sui parametri sanitari normati per la fornitura urbana. Le criticità storiche di Messina hanno riguardato soprattutto la continuità del servizio nei periodi di siccità.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Messina",
        paragraphs: [
          "GoccIA permette una lettura immediata dei principali parametri della tua acqua di casa a partire da pochi dati di base.",
          "Per un quadro più completo, un'analisi di laboratorio è una scelta valida, soprattutto in edifici datati.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Messina è sicura?",
        a: "Sì, l'acqua distribuita da AMAM rispetta i limiti del D.Lgs. 18/2023.",
      },
      {
        q: "L'acqua di Messina è dura?",
        a: "È classificabile come media: tipicamente 20-30 °F.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a Messina senza filtri?",
        a: "Sì, è potabile e conforme. I filtri sono una scelta di gusto/comfort.",
      },
      {
        q: "Cosa fare nelle giornate in cui l'acqua arriva con un po' di torbidità?",
        a: "In caso di torbidità anomala, conviene lasciar scorrere il rubinetto qualche minuto e consultare le comunicazioni del gestore prima di consumarla per il bere.",
      },
      {
        q: "Dove trovo i referti pubblici di AMAM?",
        a: "AMAM pubblica i dati sul proprio sito istituzionale; ASP Messina e ARPA Sicilia mettono a disposizione report periodici.",
      },
    ],
    relatedCities: ["catania", "palermo", "napoli", "bari"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Messina — durezza, indicatori microbiologici, eventuale piombo da impianti datati — con un laboratorio qualificato:",
  },
  {
    slug: "padova",
    cityName: "Padova",
    province: "PD",
    region: "Veneto",
    shortTitle: "Acqua del rubinetto a Padova: gestore AcegasApsAmga e tema PFAS",
    metaDescription:
      "Acqua di Padova: gestore AcegasApsAmga, falde alpine, parte della provincia interessata dal monitoraggio PFAS. Parametri tipici e verifica del rubinetto.",
    searchKeywords: [
      "acqua di padova",
      "acqua rubinetto padova",
      "qualità acqua padova",
      "gestore acqua padova",
      "padova acqua dura",
      "pfas acqua padova",
      "acegasapsamga padova",
    ],
    intro:
      "L'acqua del rubinetto a Padova è gestita da AcegasApsAmga (Gruppo Hera) e arriva principalmente da falde alimentate dai sistemi alpini e prealpini veneti. La qualità complessiva è in linea con la normativa. Parte della provincia padovana è ricompresa nell'area di attenzione PFAS del Veneto (caso Miteni di Trissino, VI, dal 2013), con misure di filtrazione e cambio fonte adottate sui campi pozzi interessati.",
    waterUtility: "AcegasApsAmga S.p.A. (Gruppo Hera)",
    geologicalContext:
      "Padova è alimentata da falde di pianura ricaricate dai sistemi alpini e prealpini, in terreni alluvionali calcarei.",
    typicalParameters: {
      durezza: "media (tipicamente 20-35 °F)",
      pfas: "monitoraggio attivo a livello regionale, con misure mitigative nelle aree interessate",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Padova",
        paragraphs: [
          "L'acqua di Padova proviene principalmente da campi pozzi della pianura veneta, alimentati dagli apporti dei sistemi alpini.",
          "AcegasApsAmga gestisce captazione, potabilizzazione e distribuzione, in stretto coordinamento con Hera per i sistemi tecnologici.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Padova",
        paragraphs: [
          "Gli autocontrolli sono in capo ad AcegasApsAmga; i controlli ufficiali a ULSS 6 Euganea; il monitoraggio ambientale (compresi i PFAS) a ARPAV.",
          "I dati sintetici sono pubblicati periodicamente sul sito del gestore.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Padova è tipicamente bicarbonato-calcica, con durezza media. Tra i parametri da monitorare ci sono PFAS, nitrati nei campi pozzi e sottoprodotti di disinfezione.",
        ],
        bullets: [
          "Durezza: media, 20-35 °F",
          "PFAS: monitoraggio attivo, misure mitigative nelle aree interessate",
          "Nitrati: monitorati in pianura",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Parte del padovano ricade nell'area di attenzione PFAS del Veneto, definita pubblicamente a partire dal 2013 dopo la rilevazione della contaminazione legata all'azienda Miteni di Trissino (VI). Sui campi pozzi interessati sono attivi sistemi di filtrazione e cambi di fonte.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Padova",
        paragraphs: [
          "GoccIA offre una lettura immediata dei parametri principali della tua acqua a partire da pochi dati di base.",
          "Se vivi in un'area storicamente coinvolta nel monitoraggio PFAS, un'analisi di laboratorio mirata è una buona scelta.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Padova è sicura?",
        a: "Sì, l'acqua distribuita da AcegasApsAmga rispetta i limiti del D.Lgs. 18/2023. Per i PFAS sono attive misure di controllo e filtrazione.",
      },
      {
        q: "Padova rientra nella zona PFAS del Veneto?",
        a: "In parte sì: alcuni comuni della provincia sono nell'area di attenzione PFAS. ARPAV e il gestore pubblicano i dati di monitoraggio.",
      },
      {
        q: "L'acqua di Padova è dura?",
        a: "È classificabile come media: tipicamente 20-35 °F.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a Padova per il neonato?",
        a: "In generale sì. Chi vive in aree storicamente interessate dai PFAS può preferire un controllo aggiuntivo o un'acqua a basso residuo nei primi mesi.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Padova?",
        a: "AcegasApsAmga pubblica i dati sul proprio sito; ULSS 6 Euganea e ARPAV pubblicano report periodici, compresi i dati PFAS.",
      },
    ],
    relatedCities: ["venezia", "verona", "trieste", "bologna"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Padova — PFAS, nitrati, durezza e indicatori microbiologici — con un laboratorio qualificato:",
  },
  {
    slug: "trieste",
    cityName: "Trieste",
    province: "TS",
    region: "Friuli-Venezia Giulia",
    shortTitle: "Acqua del rubinetto a Trieste: gestore AcegasApsAmga, sorgenti del Carso",
    metaDescription:
      "Acqua di Trieste: gestore AcegasApsAmga, sorgenti del Carso, durezza alta per il calcare. Parametri tipici e come verificare il proprio rubinetto.",
    searchKeywords: [
      "acqua di trieste",
      "acqua rubinetto trieste",
      "qualità acqua trieste",
      "gestore acqua trieste",
      "trieste acqua dura",
      "acqua carso trieste",
    ],
    intro:
      "L'acqua del rubinetto a Trieste è gestita da AcegasApsAmga (Gruppo Hera) e arriva principalmente dalle sorgenti del Carso e dal fiume Isonzo. È un'acqua tipicamente calcica, con durezza medio-alta legata alle formazioni calcaree del Carso. La qualità complessiva è considerata buona e i controlli sono fitti.",
    waterUtility: "AcegasApsAmga S.p.A. (Gruppo Hera)",
    geologicalContext:
      "Trieste è alimentata da sorgenti carsiche e dall'Isonzo, in un contesto geologico dominato dalle formazioni calcaree del Carso che conferiscono all'acqua un profilo bicarbonato-calcico marcato.",
    typicalParameters: {
      durezza: "medio-alta (tipicamente 25-40 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Trieste",
        paragraphs: [
          "L'acqua di Trieste arriva da sorgenti carsiche del Randaccio e da prelievi dall'Isonzo, dopo trattamento di potabilizzazione.",
          "AcegasApsAmga gestisce captazione, potabilizzazione e distribuzione cittadina.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Trieste",
        paragraphs: [
          "Gli autocontrolli sono in capo ad AcegasApsAmga; i controlli ufficiali a ASUGI; il monitoraggio ambientale a ARPA FVG.",
          "I dati sintetici sono pubblicati sul sito del gestore.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Trieste è tipicamente bicarbonato-calcica, con durezza medio-alta. Calcio e bicarbonati sono ben presenti per via dell'origine carsica.",
          "Parametri da seguire: torbidità in caso di forti piogge sul Carso (acque a circolazione rapida), indicatori microbiologici e sottoprodotti di disinfezione.",
        ],
        bullets: [
          "Durezza: medio-alta, 25-40 °F",
          "Calcio: contenuto apprezzabile per origine carsica",
          "Torbidità: monitorata, possibili oscillazioni in caso di piogge intense sul Carso",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Non si segnalano problematiche storiche di rilievo per i parametri sanitari normati. La specificità delle acque del Carso è la rapidità di circolazione, che richiede attenzione nei trattamenti dopo eventi meteo importanti.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Trieste",
        paragraphs: [
          "GoccIA permette una lettura immediata dei principali parametri della tua acqua di casa a partire da pochi dati di base.",
          "Per un quadro completo su durezza ed eventuali tracce di piombo (edifici molto datati del centro), un'analisi di laboratorio mirata è una buona scelta.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Trieste è sicura?",
        a: "Sì, l'acqua distribuita da AcegasApsAmga rispetta i limiti del D.Lgs. 18/2023.",
      },
      {
        q: "L'acqua di Trieste è dura?",
        a: "Sì, è classificabile come medio-alta: tipicamente 25-40 °F, per via dell'origine carsica.",
      },
      {
        q: "Posso bere l'acqua del Carso senza filtrarla?",
        a: "Sì, è potabile e conforme. I filtri sono una scelta di comfort, non un'esigenza sanitaria.",
      },
      {
        q: "Cosa succede dopo piogge intense?",
        a: "In acque a circolazione rapida come quelle carsiche può aumentare temporaneamente la torbidità: il gestore intensifica i controlli e adegua i trattamenti.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Trieste?",
        a: "AcegasApsAmga pubblica i dati sul proprio sito; ASUGI e ARPA FVG mettono a disposizione report periodici.",
      },
    ],
    relatedCities: ["padova", "venezia", "verona", "bologna"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Trieste — durezza, indicatori microbiologici, eventuali tracce di piombo da impianti interni — con un laboratorio qualificato:",
  },
  {
    slug: "brescia",
    cityName: "Brescia",
    province: "BS",
    region: "Lombardia",
    shortTitle: "Acqua del rubinetto a Brescia: gestore A2A, cromo VI e PFAS",
    metaDescription:
      "Acqua di Brescia: gestore A2A, contaminazione storica cromo esavalente Caffaro e PFAS in area, monitoraggio attivo. Parametri tipici e verifica del rubinetto.",
    searchKeywords: [
      "acqua di brescia",
      "acqua rubinetto brescia",
      "qualità acqua brescia",
      "gestore acqua brescia",
      "brescia acqua dura",
      "cromo esavalente acqua brescia",
      "pfas acqua brescia",
      "caffaro brescia",
    ],
    intro:
      "L'acqua del rubinetto a Brescia è gestita da A2A Ciclo Idrico e arriva da pozzi che intercettano la falda della pianura bresciana. Il territorio è interessato da una contaminazione storica e ben documentata da cromo esavalente legata all'area Caffaro (zona industriale a sud della città), oggetto da anni di monitoraggi, interventi di bonifica e trattamenti specifici sui pozzi pubblici. È inoltre presente attenzione su PFAS e altri composti industriali.",
    waterUtility: "A2A Ciclo Idrico S.p.A.",
    geologicalContext:
      "Brescia è alimentata da falde della pianura padana, in terreni alluvionali permeabili e storicamente esposti a pressioni industriali (area Caffaro) e agricole.",
    typicalParameters: {
      durezza: "media (tipicamente 25-35 °F)",
      cromo: "monitoraggio attivo per cromo esavalente in area Caffaro, con trattamenti dedicati",
      pfas: "monitoraggio attivo nell'area",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Brescia",
        paragraphs: [
          "L'acqua di Brescia arriva da pozzi che attingono alla falda della pianura bresciana, gestiti da A2A Ciclo Idrico.",
          "Su parte dei pozzi situati nell'area Caffaro sono attivi trattamenti di abbattimento del cromo esavalente.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Brescia",
        paragraphs: [
          "Gli autocontrolli sono in capo ad A2A; i controlli ufficiali a ATS Brescia; il monitoraggio ambientale (cromo VI, PFAS, ecc.) a ARPA Lombardia.",
          "I dati sono pubblicati dal gestore e sono oggetto di reportistica specifica anche da parte di ARPA Lombardia per il sito Caffaro.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Brescia è tipicamente bicarbonato-calcica con durezza media. I parametri storicamente più sorvegliati sono cromo esavalente, PFAS e nitrati.",
        ],
        bullets: [
          "Durezza: media, 25-35 °F",
          "Cromo VI: monitoraggio dedicato in area Caffaro",
          "PFAS: monitoraggio attivo",
          "Nitrati: pressione agricola di pianura",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Il Sito di Interesse Nazionale Caffaro a Brescia è uno dei casi più documentati di contaminazione storica del suolo e delle acque sotterranee da PCB, diossine e cromo esavalente. Sui pozzi pubblici interessati sono attivi trattamenti specifici e ATS Brescia e ARPA Lombardia pubblicano dati di monitoraggio.",
          "Nel bresciano è presente anche un'attenzione su PFAS, con monitoraggio attivo da parte di ARPA Lombardia.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Brescia",
        paragraphs: [
          "GoccIA permette una lettura immediata dei principali parametri della tua acqua di casa a partire da pochi dati di base.",
          "Vista la storia del territorio, un'analisi di laboratorio specifica su cromo esavalente, PFAS e nitrati è una scelta sensata, soprattutto se vivi nelle aree storicamente più sensibili.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Brescia è sicura?",
        a: "L'acqua distribuita rispetta i limiti del D.Lgs. 18/2023, anche grazie ai trattamenti specifici sui pozzi interessati dalla contaminazione storica. ARPA Lombardia e ATS Brescia pubblicano dati di monitoraggio dedicati.",
      },
      {
        q: "C'è ancora cromo esavalente nell'acqua di Brescia?",
        a: "La contaminazione storica del sito Caffaro è documentata e per questo i pozzi pubblici interessati sono dotati di sistemi di trattamento. I dati di monitoraggio sono pubblicati periodicamente.",
      },
      {
        q: "Cosa è il sito Caffaro?",
        a: "È un sito industriale dismesso classificato come SIN (Sito di Interesse Nazionale) per la contaminazione storica del suolo e della falda da PCB, diossine e cromo esavalente.",
      },
      {
        q: "L'acqua di Brescia è dura?",
        a: "Sì, è classificabile come media: tipicamente 25-35 °F.",
      },
      {
        q: "Dove trovo i dati pubblici dell'acqua di Brescia?",
        a: "A2A pubblica i dati sul proprio sito; ATS Brescia e ARPA Lombardia pubblicano report periodici e, per il sito Caffaro, reportistica dedicata.",
      },
    ],
    relatedCities: ["milano", "verona", "parma", "reggio-emilia"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Brescia — cromo esavalente, PFAS, nitrati e durezza — con un laboratorio qualificato:",
  },
  {
    slug: "taranto",
    cityName: "Taranto",
    province: "TA",
    region: "Puglia",
    shortTitle: "Acqua del rubinetto a Taranto: Acquedotto Pugliese e contesto ex-ILVA",
    metaDescription:
      "Acqua di Taranto: gestore Acquedotto Pugliese, fonti dalla Basilicata, contesto ambientale ex-ILVA. Parametri tipici e come verificare il rubinetto.",
    searchKeywords: [
      "acqua di taranto",
      "acqua rubinetto taranto",
      "qualità acqua taranto",
      "gestore acqua taranto",
      "taranto acqua dura",
      "acqua acquedotto pugliese taranto",
    ],
    intro:
      "L'acqua del rubinetto a Taranto è gestita da Acquedotto Pugliese e proviene principalmente, come per il resto della Puglia, da sorgenti e invasi della Basilicata. La qualità sanitaria dell'acqua in distribuzione è in linea con la normativa. Il contesto ambientale di Taranto è segnato dalla presenza dello stabilimento ex-ILVA, ma le criticità ambientali documentate dell'area riguardano in misura prevalente aria e suolo, non l'acqua distribuita per il consumo umano, che è prelevata e trattata altrove.",
    waterUtility: "Acquedotto Pugliese S.p.A. (AQP)",
    geologicalContext:
      "Taranto è servita da acque convogliate dalla Basilicata (invasi del Pertusillo e del Sinni, sorgenti appenniniche), integrate da contributi locali. Le componenti geologiche di trasporto sono lontane dai bacini direttamente esposti alle pressioni industriali locali.",
    typicalParameters: {
      durezza: "media (tipicamente 20-35 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Taranto",
        paragraphs: [
          "Anche Taranto, come Bari, è alimentata in larga parte dagli invasi del Pertusillo e del Sinni e da sorgenti appenniniche, attraverso la rete di Acquedotto Pugliese.",
          "AQP gestisce captazione, adduzione, potabilizzazione e distribuzione.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Taranto",
        paragraphs: [
          "Gli autocontrolli sono in capo ad AQP; i controlli ufficiali a ASL Taranto; il monitoraggio ambientale a ARPA Puglia, particolarmente attiva sull'area per le note criticità ambientali industriali.",
          "I dati sintetici sull'acqua distribuita sono pubblicati sul sito di AQP.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Taranto è tipicamente bicarbonato-calcica, con durezza media. Sodio e cloruri sono in genere contenuti.",
          "I parametri da seguire sono quelli classici di reti di grande adduzione: indicatori microbiologici, sottoprodotti di disinfezione.",
        ],
        bullets: [
          "Durezza: media, 20-35 °F",
          "Sodio: contenuto",
          "Sottoprodotti di disinfezione: monitorati",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "La situazione ambientale di Taranto, legata storicamente allo stabilimento ex-ILVA, è oggetto di numerosi studi pubblici e di monitoraggi ARPA Puglia. Le criticità riguardano principalmente la qualità dell'aria e la contaminazione di suoli e sedimenti marini; l'acqua in distribuzione, proveniente da fonti esterne all'area industriale, rientra nei limiti normativi.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Taranto",
        paragraphs: [
          "GoccIA offre una lettura rapida dei parametri principali della tua acqua a partire da pochi dati di base.",
          "Per un quadro completo, soprattutto in edifici datati, un'analisi di laboratorio è una scelta valida.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Taranto è sicura?",
        a: "Sì, l'acqua distribuita da AQP rispetta i limiti del D.Lgs. 18/2023. Le note criticità ambientali dell'area riguardano principalmente aria e suolo, non l'acqua in distribuzione.",
      },
      {
        q: "L'acqua di Taranto è contaminata dall'ex-ILVA?",
        a: "Le criticità documentate dell'ex-ILVA riguardano in prevalenza la qualità dell'aria e la contaminazione di suoli e sedimenti. L'acqua in distribuzione, prelevata in larga parte in Basilicata e trattata da AQP, rientra nei limiti normativi.",
      },
      {
        q: "L'acqua di Taranto è dura?",
        a: "È classificabile come media: tipicamente 20-35 °F.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a Taranto in gravidanza?",
        a: "In generale sì, l'acqua è conforme. Per chi vuole un controllo aggiuntivo, un'analisi del proprio rubinetto è un'opzione prudente, soprattutto su piombo in edifici molto datati.",
      },
      {
        q: "Dove trovo i referti pubblici per Taranto?",
        a: "AQP pubblica i dati per comune sul proprio sito; ASL Taranto e ARPA Puglia mettono a disposizione report periodici.",
      },
    ],
    relatedCities: ["bari", "napoli", "palermo", "catania"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Taranto — durezza, sottoprodotti di disinfezione, eventuale piombo da impianti interni — con un laboratorio qualificato:",
  },
  {
    slug: "prato",
    cityName: "Prato",
    province: "PO",
    region: "Toscana",
    shortTitle: "Acqua del rubinetto a Prato: gestore Publiacqua e distretto tessile",
    metaDescription:
      "Acqua di Prato: gestore Publiacqua, falda pratese e contesto del distretto tessile. Parametri tipici e come verificare la qualità del rubinetto.",
    searchKeywords: [
      "acqua di prato",
      "acqua rubinetto prato",
      "qualità acqua prato",
      "gestore acqua prato",
      "prato acqua dura",
      "acqua publiacqua prato",
    ],
    intro:
      "L'acqua del rubinetto a Prato è gestita da Publiacqua e proviene da campi pozzi nella conca pratese e da fonti dell'Appennino. La qualità complessiva è conforme ai limiti normativi. Il territorio pratese ha storicamente subito pressioni industriali legate al distretto tessile, per cui le falde sono oggetto di un monitoraggio attento.",
    waterUtility: "Publiacqua S.p.A.",
    geologicalContext:
      "Prato è alimentata da falde della piana di Prato-Firenze-Pistoia, in terreni alluvionali soggetti storicamente a pressioni industriali (distretto tessile).",
    typicalParameters: {
      durezza: "media (tipicamente 20-32 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Prato",
        paragraphs: [
          "L'acqua di Prato arriva da campi pozzi locali e da approvvigionamenti integrati con il sistema Publiacqua, comprese le fonti del Mugello.",
          "La distribuzione è gestita da Publiacqua, che coordina captazione, potabilizzazione e rete cittadina.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Prato",
        paragraphs: [
          "Gli autocontrolli sono in capo a Publiacqua; i controlli ufficiali a AUSL Toscana Centro; il monitoraggio ambientale a ARPAT.",
          "I dati sintetici sono pubblicati sul sito di Publiacqua.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Prato è tipicamente bicarbonato-calcica, con durezza media. Sono monitorati con attenzione composti di natura industriale, in coerenza con la storia produttiva del distretto.",
        ],
        bullets: [
          "Durezza: media, 20-32 °F",
          "Composti organici volatili: monitorati nei campi pozzi",
          "Sottoprodotti di disinfezione: monitorati",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Nel distretto tessile pratese sono storicamente documentate pressioni industriali sulla falda, monitorate da ARPAT con report periodici. Sui campi pozzi pubblici interessati sono attivi presidi specifici e nei dati pubblicati dal gestore i parametri rientrano nei limiti.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Prato",
        paragraphs: [
          "GoccIA offre una lettura immediata dei parametri principali della tua acqua a partire da pochi dati di base.",
          "Per un quadro più approfondito, soprattutto su composti organici e durezza, un'analisi di laboratorio è una scelta valida.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Prato è sicura?",
        a: "Sì, l'acqua distribuita da Publiacqua rispetta i limiti del D.Lgs. 18/2023, anche grazie ai presidi attivi su parametri sensibili dell'area.",
      },
      {
        q: "Il distretto tessile influisce sull'acqua del rubinetto?",
        a: "Le pressioni storiche sulla falda sono documentate, ma sui pozzi pubblici interessati operano controlli e trattamenti specifici. I dati pubblicati mostrano valori entro i limiti normativi.",
      },
      {
        q: "L'acqua di Prato è dura?",
        a: "È classificabile come media: tipicamente 20-32 °F.",
      },
      {
        q: "Posso bere l'acqua del rubinetto a Prato senza filtri?",
        a: "Sì, è potabile e conforme. I filtri sono una scelta di gusto, non un'esigenza sanitaria.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Prato?",
        a: "Publiacqua pubblica i dati sul proprio sito; AUSL Toscana Centro e ARPAT pubblicano report periodici, anche sui contesti industriali.",
      },
    ],
    relatedCities: ["firenze", "bologna", "parma", "genova"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Prato — durezza, composti organici volatili e sottoprodotti di disinfezione — con un laboratorio qualificato:",
  },
  {
    slug: "parma",
    cityName: "Parma",
    province: "PR",
    region: "Emilia-Romagna",
    shortTitle: "Acqua del rubinetto a Parma: gestori Emiliambiente/Iren, falda padana",
    metaDescription:
      "Acqua di Parma: gestori Emiliambiente e Iren, falda padana, nitrati area agricola. Parametri tipici e come verificare la qualità del proprio rubinetto.",
    searchKeywords: [
      "acqua di parma",
      "acqua rubinetto parma",
      "qualità acqua parma",
      "gestore acqua parma",
      "parma acqua dura",
      "nitrati acqua parma",
    ],
    intro:
      "L'acqua del rubinetto a Parma e provincia è gestita dal sistema integrato che vede operare Emiliambiente (parte dell'area provinciale) e Iren per altre porzioni del territorio, in coordinamento con ATERSIR. L'acqua arriva da campi pozzi della pianura parmense e da fonti appenniniche. La qualità complessiva è in linea con la normativa. Il principale parametro da seguire è quello dei nitrati, vista la storica pressione agricola dell'area.",
    waterUtility: "Emiliambiente S.p.A. / Iren S.p.A. (a seconda dell'ambito)",
    geologicalContext:
      "Parma è alimentata da falde della pianura padana, alimentate dai sistemi appenninici. I terreni alluvionali sono soggetti storicamente a pressione agricola, con presenza di nitrati monitorati.",
    typicalParameters: {
      durezza: "media (tipicamente 20-35 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Parma",
        paragraphs: [
          "L'acqua di Parma proviene da campi pozzi locali e, in parte, da fonti appenniniche. Il sistema acquedottistico è organizzato a livello d'ambito e gestito da operatori diversi (Emiliambiente, Iren) a seconda della zona.",
          "ATERSIR è l'autorità di regolazione regionale del servizio idrico in Emilia-Romagna.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Parma",
        paragraphs: [
          "Gli autocontrolli sono in capo ai gestori; i controlli ufficiali ad AUSL Parma; il monitoraggio ambientale a ARPAE Emilia-Romagna.",
          "I dati sintetici sono pubblicati sui siti dei gestori.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Parma è tipicamente bicarbonato-calcica, con durezza media. Il parametro più rappresentativo da seguire è quello dei nitrati, dato il contesto agricolo.",
        ],
        bullets: [
          "Durezza: media, 20-35 °F",
          "Nitrati: parametro chiave, monitorato nei campi pozzi",
          "Sottoprodotti di disinfezione: monitorati",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "L'area parmense, come altre zone della Pianura Padana, è interessata da una pressione storica da nitrati di origine agricola sulla falda. ARPAE Emilia-Romagna e i gestori pubblicano i dati di monitoraggio.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Parma",
        paragraphs: [
          "GoccIA offre una lettura immediata dei principali parametri della tua acqua di casa a partire da pochi dati di base.",
          "Per chi vive in aree storicamente sensibili ai nitrati, un'analisi di laboratorio mirata è una buona scelta.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Parma è sicura?",
        a: "Sì, l'acqua distribuita rispetta i limiti del D.Lgs. 18/2023, con monitoraggio continuo sui nitrati.",
      },
      {
        q: "I nitrati nell'acqua di Parma sono un problema?",
        a: "I nitrati sono il parametro più rappresentativo dell'area, vista la pressione agricola della Pianura Padana. I valori in distribuzione restano entro i limiti normativi grazie al monitoraggio costante.",
      },
      {
        q: "L'acqua di Parma è dura?",
        a: "È classificabile come media: tipicamente 20-35 °F.",
      },
      {
        q: "Posso usare l'acqua del rubinetto di Parma per il latte del neonato?",
        a: "In generale sì, se i nitrati sono lontani dai limiti. Per il primo periodo molte famiglie scelgono un'acqua a basso residuo o effettuano un'analisi dedicata.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Parma?",
        a: "Emiliambiente e Iren pubblicano i dati per comune sui propri siti; AUSL Parma e ARPAE pubblicano report periodici.",
      },
    ],
    relatedCities: ["reggio-emilia", "bologna", "brescia", "milano"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Parma — nitrati, durezza, eventuali sottoprodotti di disinfezione — con un laboratorio qualificato:",
  },
  {
    slug: "reggio-emilia",
    cityName: "Reggio Emilia",
    province: "RE",
    region: "Emilia-Romagna",
    shortTitle: "Acqua del rubinetto a Reggio Emilia: gestore IRETI, falda padana",
    metaDescription:
      "Acqua di Reggio Emilia: gestore IRETI (Gruppo Iren), falda padana, nitrati area agricola. Parametri tipici e verifica della propria acqua di rete.",
    searchKeywords: [
      "acqua di reggio emilia",
      "acqua rubinetto reggio emilia",
      "qualità acqua reggio emilia",
      "gestore acqua reggio emilia",
      "reggio emilia acqua dura",
      "nitrati acqua reggio emilia",
    ],
    intro:
      "L'acqua del rubinetto a Reggio Emilia è gestita da IRETI (Gruppo Iren) e proviene principalmente da campi pozzi della pianura reggiana e da fonti appenniniche. La qualità complessiva è in linea con la normativa. Come nel resto della Pianura Padana, il parametro più rappresentativo da seguire è quello dei nitrati, vista la storica pressione agricola del territorio.",
    waterUtility: "IRETI S.p.A. (Gruppo Iren)",
    geologicalContext:
      "Reggio Emilia è alimentata da falde della pianura padana, in terreni alluvionali soggetti a pressione agricola, con apporti dai sistemi appenninici.",
    typicalParameters: {
      durezza: "media (tipicamente 20-35 °F)",
    },
    sections: [
      {
        heading: "Da dove arriva l'acqua di Reggio Emilia",
        paragraphs: [
          "L'approvvigionamento di Reggio Emilia si basa su campi pozzi di pianura, integrati con sorgenti dell'Appennino reggiano.",
          "IRETI gestisce il servizio idrico integrato; ATERSIR svolge il ruolo di autorità di regolazione regionale.",
        ],
      },
      {
        heading: "I controlli sull'acqua del rubinetto a Reggio Emilia",
        paragraphs: [
          "Gli autocontrolli sono in capo a IRETI; i controlli ufficiali ad AUSL Reggio Emilia; il monitoraggio ambientale a ARPAE Emilia-Romagna.",
          "I dati sintetici sono pubblicati sul sito del gestore.",
        ],
      },
      {
        heading: "Composizione tipica e parametri da tenere d'occhio",
        paragraphs: [
          "L'acqua di Reggio Emilia è tipicamente bicarbonato-calcica, con durezza media. Tra i parametri da seguire ci sono nitrati e sottoprodotti di disinfezione.",
        ],
        bullets: [
          "Durezza: media, 20-35 °F",
          "Nitrati: monitorati nei campi pozzi di pianura",
          "Sottoprodotti di disinfezione: monitorati",
        ],
      },
      {
        heading: "Casi noti e problematiche storiche",
        paragraphs: [
          "Anche per Reggio Emilia vale la storica pressione da nitrati di origine agricola tipica della Pianura Padana. ARPAE e IRETI pubblicano i dati di monitoraggio dei campi pozzi.",
        ],
      },
      {
        heading: "Cosa fare se vuoi verificare la TUA acqua di Reggio Emilia",
        paragraphs: [
          "GoccIA permette una lettura immediata dei principali parametri della tua acqua di casa a partire da pochi dati di base.",
          "Per chi vive in aree storicamente sensibili ai nitrati, un'analisi di laboratorio mirata è una buona scelta.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'acqua del rubinetto a Reggio Emilia è sicura?",
        a: "Sì, l'acqua distribuita da IRETI rispetta i limiti del D.Lgs. 18/2023, con monitoraggio continuo dei parametri sensibili.",
      },
      {
        q: "I nitrati a Reggio Emilia sono un problema?",
        a: "Sono il parametro più rappresentativo dell'area, ma i valori in distribuzione restano entro i limiti normativi grazie alla gestione attiva delle fonti.",
      },
      {
        q: "L'acqua di Reggio Emilia è dura?",
        a: "È classificabile come media: tipicamente 20-35 °F.",
      },
      {
        q: "Posso usare l'acqua del rubinetto per preparare il latte del neonato?",
        a: "In generale sì, soprattutto se i valori di nitrati nella tua zona sono lontani dai limiti. In caso di dubbio, un'analisi dedicata è prudente.",
      },
      {
        q: "Dove trovo i referti pubblici dell'acqua di Reggio Emilia?",
        a: "IRETI pubblica i dati sul proprio sito; AUSL Reggio Emilia e ARPAE pubblicano report periodici.",
      },
    ],
    relatedCities: ["parma", "bologna", "brescia", "milano"],
    ctaContext:
      "Per analizzare l'acqua del rubinetto a Reggio Emilia — nitrati, durezza e sottoprodotti di disinfezione — con un laboratorio qualificato:",
  },
];

const CITY_GUIDE_MAP: Map<string, CityGuide> = new Map(
  CITY_GUIDES.map((guide) => [guide.slug, guide]),
);

export function getCityBySlug(slug: string): CityGuide | undefined {
  return CITY_GUIDE_MAP.get(slug);
}
