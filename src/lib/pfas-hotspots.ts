export type PFASSeverity = 'critica' | 'alta' | 'media' | 'monitorata';

export interface PFASHotspot {
  id: string;
  name: string;
  region: string;
  provinces: string[];
  severity: PFASSeverity;
  shortDescription: string;
  description: string;
  knownSince: string;
  responsibleSource?: string;
  affectedPopulationEstimate?: string;
  approxLatitude: number;
  approxLongitude: number;
  officialReferences: { label: string; url: string }[];
  whatToDo: string[];
}

export interface PFASGeneralInfo {
  euLimitTotalPfasUgL: number;
  euLimitSumPfasUgL: number;
  italyTransposition: string;
  newLimitsEnforcement: string;
  description: string;
}

export const PFAS_INFO: PFASGeneralInfo = {
  euLimitTotalPfasUgL: 0.5,
  euLimitSumPfasUgL: 0.1,
  italyTransposition: 'D.Lgs. 18/2023',
  newLimitsEnforcement:
    'I parametri PFAS introdotti dalla Direttiva (UE) 2020/2184 e recepiti in Italia con il D.Lgs. 18/2023 si applicano alle acque destinate al consumo umano a partire dal 12 gennaio 2026. È previsto un periodo transitorio fino al 12 gennaio 2028 per consentire l\'adeguamento degli impianti di potabilizzazione e l\'aggiornamento dei programmi di monitoraggio da parte dei gestori e delle ARPA regionali.',
  description:
    'I PFAS (sostanze per- e polifluoroalchiliche) sono una vasta famiglia di composti chimici di sintesi caratterizzati da uno o più legami carbonio-fluoro, fra i più stabili della chimica organica. Per questa stabilità sono noti come "forever chemicals": non si degradano facilmente in natura, si accumulano nelle acque, nei suoli e negli organismi viventi. Sono stati impiegati per decenni in numerose applicazioni industriali e di consumo: trattamenti antimacchia e impermeabilizzanti per tessuti, carta e pelle, rivestimenti antiaderenti per pentolame, schiume antincendio AFFF, lavorazioni galvaniche, produzione di fluoropolimeri, fitofarmaci e dispositivi medici. Le principali vie di immissione nell\'ambiente sono gli scarichi industriali in corpi idrici, le emissioni atmosferiche, la dispersione di schiume antincendio in aree di esercitazione e aeroporti, il percolato di discariche e lo smaltimento improprio di prodotti contenenti PFAS. Studi epidemiologici e tossicologici condotti da enti come ISS, EFSA e IARC associano l\'esposizione cronica a determinati PFAS (in particolare PFOA e PFOS) a effetti su fegato, sistema immunitario, tiroide, colesterolo, fertilità, sviluppo fetale e a un possibile aumento del rischio di alcune patologie tumorali. Per questo motivo la normativa europea ha introdotto limiti specifici nelle acque potabili e diverse autorità nazionali hanno avviato programmi di monitoraggio e bonifica delle aree contaminate.',
};

export const PFAS_HOTSPOTS: PFASHotspot[] = [
  {
    id: 'veneto-miteni',
    name: 'Area Rossa Veneto (Miteni - Trissino)',
    region: 'Veneto',
    provinces: ['VI', 'VR', 'PD'],
    severity: 'critica',
    shortDescription:
      'La più estesa contaminazione da PFAS documentata in Europa, originata dallo stabilimento Miteni di Trissino (VI) e diffusasi nella falda di Vicenza, Verona e Padova.',
    description:
      'La contaminazione da PFAS in Veneto è stata identificata ufficialmente nel 2013, quando uno studio del CNR-IRSA commissionato dal Ministero dell\'Ambiente rilevò concentrazioni anomale di PFOA, PFOS e altri PFAS nelle acque superficiali e nelle falde delle province di Vicenza, Verona e Padova. Le indagini ricondussero la fonte principale allo stabilimento chimico Miteni S.p.A. di Trissino (VI), attivo dal 1964 nella produzione di intermedi fluorurati. La Regione Veneto ha perimetrato l\'area interessata in zone di sorveglianza: la cosiddetta "area rossa", in cui la falda è utilizzata o è stata utilizzata per l\'approvvigionamento idropotabile, comprende decine di comuni e circa 350.000 abitanti; l\'area arancione e l\'area gialla coprono ulteriori porzioni di territorio. Le Aziende ULSS competenti (in particolare ULSS 8 Berica) hanno avviato dal 2017 un piano di sorveglianza sanitaria con dosaggio sierico dei PFAS sulla popolazione residente nei comuni più esposti, coordinato dall\'Istituto Superiore di Sanità e dalla Regione Veneto. I gestori del servizio idrico hanno installato impianti di filtrazione a carboni attivi sui principali pozzi e campi-pozzi interessati, riportando i valori al rubinetto entro i limiti di performance fissati dalla Regione. Sul piano giudiziario, nel 2018 Miteni S.p.A. è stata dichiarata fallita; nel 2021 si è aperto a Vicenza il processo penale a carico di ex dirigenti e manager delle società che si sono succedute nella gestione dello stabilimento, con capi d\'accusa che includono avvelenamento di acque e disastro ambientale.',
    knownSince: '2013',
    responsibleSource: 'Miteni S.p.A. (Trissino, VI) - stabilimento chiuso nel 2018',
    affectedPopulationEstimate:
      'Circa 350.000 persone in area rossa, ~125.000 in area arancione, ulteriore popolazione in area gialla',
    approxLatitude: 45.55,
    approxLongitude: 11.39,
    officialReferences: [
      {
        label: 'Regione Veneto - Sezione PFAS sanità',
        url: 'https://www.regione.veneto.it/web/sanita/pfas',
      },
      {
        label: 'ARPA Veneto - Monitoraggio PFAS',
        url: 'https://www.arpa.veneto.it/temi-ambientali/acqua/pfas',
      },
      {
        label: 'Istituto Superiore di Sanità - Inquinamento da PFAS',
        url: 'https://www.iss.it/inquinamento-da-pfas',
      },
      {
        label: 'Ministero della Salute - PFAS acque potabili',
        url: 'https://www.salute.gov.it/portale/acquePotabili/dettaglioContenutiAcquePotabili.jsp?lingua=italiano&id=5574',
      },
    ],
    whatToDo: [
      'Verificare se il proprio comune rientra nelle aree rossa, arancione o gialla consultando le mappe ufficiali della Regione Veneto.',
      'Richiedere al gestore del servizio idrico integrato (Acque del Chiampo, Viacqua, Acque Veronesi, ecc.) i bollettini di analisi PFAS aggiornati relativi al proprio acquedotto.',
      'Aderire, se residenti nei comuni inclusi, al piano di sorveglianza sanitaria regionale per il dosaggio sierico dei PFAS tramite la propria ULSS.',
      'In caso di approvvigionamento da pozzo privato, far analizzare l\'acqua da un laboratorio accreditato per PFOA, PFOS e PFAS totali, e valutare un trattamento di potabilizzazione domestico a carboni attivi specifici o osmosi inversa.',
      'Per dubbi clinici rivolgersi al proprio medico di medicina generale e ai centri PFAS individuati dalla Regione Veneto.',
    ],
  },
  {
    id: 'piemonte-spinetta-marengo',
    name: 'Spinetta Marengo (Alessandria)',
    region: 'Piemonte',
    provinces: ['AL'],
    severity: 'critica',
    shortDescription:
      'Polo chimico storico di Spinetta Marengo, sede di produzioni fluorurate, con contaminazione documentata da PFAS della falda e dei corsi d\'acqua circostanti.',
    description:
      'Lo stabilimento chimico di Spinetta Marengo, frazione di Alessandria, è un polo industriale attivo dalla prima metà del Novecento e oggi gestito dalla società Syensqo (spin-off di Solvay dal 2023). Nell\'area sono stati prodotti per decenni intermedi fluorurati, fluoropolimeri e tensioattivi perfluorurati. ARPA Piemonte conduce dagli anni 2000 un programma di monitoraggio dei contaminanti storici della falda (cromo esavalente, solventi clorurati, PFAS), che ha documentato la presenza di PFOA, ADV (acido dicloroesafluoropropanico, noto come C6O4) e altri composti fluorurati nelle acque sotterranee a valle del sito e nel fiume Bormida. La vicenda è oggetto di procedimenti giudiziari: nel 2019 la Cassazione ha confermato condanne per disastro ambientale colposo a carico di ex dirigenti per la contaminazione storica del sito. Sono in corso ulteriori indagini, anche penali, sulle emissioni più recenti di nuovi PFAS a catena corta. La Regione Piemonte e ARPA hanno disposto barriere idrauliche di contenimento, prescrizioni di monitoraggio rafforzato sui pozzi a uso potabile e limiti di emissione progressivamente più stringenti. I gestori del servizio idrico locale (Gestione Acqua, AMAG Reti Idriche) monitorano i pozzi acquedottistici utilizzati per la città di Alessandria e i comuni vicini per garantire la conformità ai parametri di legge.',
    knownSince: '2008',
    responsibleSource: 'Stabilimento chimico di Spinetta Marengo (storicamente Montedison/Ausimont, poi Solvay, oggi Syensqo)',
    approxLatitude: 44.88,
    approxLongitude: 8.66,
    officialReferences: [
      {
        label: 'ARPA Piemonte - PFAS',
        url: 'https://www.arpa.piemonte.it/approfondimenti/temi-ambientali/acqua/pfas',
      },
      {
        label: 'Regione Piemonte - Bonifiche ambientali',
        url: 'https://www.regione.piemonte.it/web/temi/ambiente-territorio/ambiente/bonifiche',
      },
      {
        label: 'Comune di Alessandria - Documenti Spinetta Marengo',
        url: 'https://www.comune.alessandria.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/12239',
      },
    ],
    whatToDo: [
      'Consultare i bollettini ARPA Piemonte sulla qualità delle acque sotterranee nell\'area alessandrina.',
      'Richiedere al gestore idrico locale i dati di monitoraggio PFAS sui pozzi acquedottistici della propria zona.',
      'In caso di pozzo privato a uso potabile o irriguo, far eseguire analisi specifiche per PFOA, PFOS, C6O4 e PFAS totali presso laboratori accreditati.',
      'Valutare l\'installazione di sistemi di filtrazione domestici (carboni attivi a letto profondo o osmosi inversa) per l\'acqua destinata al consumo.',
      'Seguire gli aggiornamenti del Comune di Alessandria e della Regione Piemonte sulle prescrizioni di bonifica e sulle ordinanze relative all\'uso delle acque.',
    ],
  },
  {
    id: 'lombardia-bergamasca-galvaniche',
    name: 'Aree industriali e galvaniche della Lombardia orientale',
    region: 'Lombardia',
    provinces: ['BG', 'BS', 'MI'],
    severity: 'media',
    shortDescription:
      'Superamenti puntuali di PFAS rilevati da ARPA Lombardia in falde di alcuni distretti industriali storici, in particolare nelle zone di antica vocazione galvanica e tessile.',
    description:
      'ARPA Lombardia ha intensificato dal 2020 il monitoraggio dei PFAS nelle acque sotterranee della regione, includendo i parametri PFOA, PFOS e altri composti perfluoroalchilici nei piani regionali di sorveglianza. I report pubblici evidenziano che la maggior parte dei punti di monitoraggio presenta valori inferiori ai limiti normativi, ma sono stati registrati superamenti puntuali in alcune falde poste a valle di distretti industriali storici delle province di Bergamo, Brescia e Milano, in particolare in aree con presenza pregressa di lavorazioni galvaniche, trattamenti superficiali dei metalli e attività tessili. La Regione Lombardia, attraverso il piano regionale di tutela delle acque, ha previsto l\'integrazione dei PFAS nei programmi di controllo degli scarichi industriali e degli acquedotti. I gestori del servizio idrico (Uniacque, A2A Ciclo Idrico, Gruppo CAP, MM Spa) effettuano campionamenti periodici sui pozzi di approvvigionamento e pubblicano i risultati delle analisi nelle proprie etichette d\'acqua. La situazione è classificata come "monitorata e media" perché i superamenti documentati sono localizzati e non hanno determinato, allo stato, perimetrazioni di emergenza analoghe a quelle del Veneto.',
    knownSince: '2020',
    approxLatitude: 45.55,
    approxLongitude: 9.78,
    officialReferences: [
      {
        label: 'ARPA Lombardia - Acque sotterranee e PFAS',
        url: 'https://www.arpalombardia.it/temi-ambientali/acqua/acque-sotterranee/',
      },
      {
        label: 'Regione Lombardia - Tutela delle acque',
        url: 'https://www.regione.lombardia.it/wps/portal/istituzionale/HP/DettaglioRedazionale/servizi-e-informazioni/cittadini/tutela-ambientale/tutela-acque',
      },
    ],
    whatToDo: [
      'Consultare l\'etichetta dell\'acqua pubblicata dal proprio gestore idrico per verificare i valori PFAS più recenti.',
      'Per chi utilizza pozzi privati nelle aree industriali storiche, eseguire analisi PFAS presso laboratori accreditati.',
      'Segnalare ad ARPA Lombardia eventuali anomalie organolettiche o sospette contaminazioni di acque superficiali.',
      'Valutare sistemi di filtrazione domiciliare certificati per la rimozione dei PFAS se si rilevano valori prossimi ai limiti.',
    ],
  },
  {
    id: 'lombardia-brescia-caffaro',
    name: 'SIN Brescia-Caffaro',
    region: 'Lombardia',
    provinces: ['BS'],
    severity: 'monitorata',
    shortDescription:
      'Sito di Interesse Nazionale di Brescia-Caffaro, noto per la contaminazione storica da PCB e diossine, oggi soggetto anche al monitoraggio di PFAS nelle acque sotterranee.',
    description:
      'L\'area dello stabilimento Caffaro di Brescia, attivo dalla fine dell\'Ottocento, è classificata come Sito di Interesse Nazionale (SIN) per la grave contaminazione storica da policlorobifenili (PCB), diossine e mercurio, documentata a partire dagli anni Novanta. Il caso principale resta quello dei PCB, che hanno interessato terreni agricoli, corsi d\'acqua e catena alimentare a sud della città. Con l\'aggiornamento normativo introdotto dal D.Lgs. 18/2023 e con l\'inclusione dei PFAS nei programmi regionali di monitoraggio, ARPA Lombardia e il Ministero dell\'Ambiente e della Sicurezza Energetica hanno esteso le caratterizzazioni del sito anche al monitoraggio dei PFAS nelle acque sotterranee, in coerenza con la natura di area industriale dismessa e con il rischio teorico di residui di sostanze fluorurate. Allo stato attuale non sono pubblicate evidenze di superamenti diffusi dei limiti PFAS riconducibili al SIN, ma l\'area resta sotto sorveglianza nell\'ambito del progetto di bonifica e messa in sicurezza coordinato dagli enti competenti.',
    knownSince: 'Anni \'90 per PCB; monitoraggio PFAS introdotto negli anni 2020',
    responsibleSource: 'Stabilimento chimico Caffaro (SIN - bonifica in corso)',
    approxLatitude: 45.54,
    approxLongitude: 10.21,
    officialReferences: [
      {
        label: 'Ministero dell\'Ambiente e della Sicurezza Energetica - SIN',
        url: 'https://www.mase.gov.it/pagina/siti-di-interesse-nazionale-sin',
      },
      {
        label: 'ARPA Lombardia - Sito Brescia-Caffaro',
        url: 'https://www.arpalombardia.it/temi-ambientali/suolo/siti-contaminati/',
      },
      {
        label: 'Comune di Brescia - Caffaro',
        url: 'https://www.comune.brescia.it/servizi/ambienteeverde/Pagine/sito-caffaro.aspx',
      },
    ],
    whatToDo: [
      'Consultare le ordinanze comunali in vigore nelle aree perimetrate del SIN Caffaro, in particolare quelle relative all\'uso agricolo dei suoli e dell\'acqua di pozzo.',
      'Rivolgersi al gestore A2A Ciclo Idrico per i bollettini di analisi dell\'acquedotto cittadino.',
      'Per pozzi privati ricadenti nell\'area, far eseguire un\'analisi completa che includa PCB, metalli pesanti e PFAS.',
      'Seguire gli aggiornamenti del Comune di Brescia sui lavori di bonifica e messa in sicurezza.',
    ],
  },
  {
    id: 'toscana-distretto-prato',
    name: 'Distretto tessile di Prato e Vaiano',
    region: 'Toscana',
    provinces: ['PO', 'FI'],
    severity: 'monitorata',
    shortDescription:
      'Distretto industriale tessile storico oggetto di monitoraggio ARPAT per PFAS nelle acque superficiali e di scarico.',
    description:
      'Il distretto tessile di Prato e dell\'alta Val di Bisenzio è uno dei principali poli manifatturieri italiani per la lavorazione di lana, cotone e tessuti tecnici. Trattamenti idro-oleorepellenti e antimacchia hanno storicamente utilizzato sostanze perfluorurate. ARPAT (Agenzia Regionale per la Protezione Ambientale della Toscana) include i PFAS nei programmi di monitoraggio dei corpi idrici superficiali e degli scarichi industriali del distretto, in coerenza con gli indirizzi nazionali ed europei. I report pubblicati indicano che il monitoraggio è in fase di consolidamento, con dati che mostrano in alcuni punti la presenza di PFAS in concentrazioni misurabili ma generalmente inferiori ai limiti di legge per le acque destinate al consumo umano. La Regione Toscana, nell\'ambito del piano di tutela delle acque, ha richiesto ai distretti industriali un censimento delle sostanze fluorurate utilizzate e una progressiva sostituzione delle stesse, in linea con il regolamento REACH e con la proposta europea di restrizione universale dei PFAS. Il gestore Publiacqua effettua controlli periodici sull\'acqua distribuita.',
    knownSince: '2020',
    approxLatitude: 43.88,
    approxLongitude: 11.10,
    officialReferences: [
      {
        label: 'ARPAT - Sostanze perfluoroalchiliche',
        url: 'https://www.arpat.toscana.it/temi-ambientali/acqua/sostanze-perfluoroalchiliche',
      },
      {
        label: 'Regione Toscana - Acqua',
        url: 'https://www.regione.toscana.it/-/acqua',
      },
    ],
    whatToDo: [
      'Verificare l\'etichetta dell\'acqua del gestore Publiacqua per i valori PFAS più recenti.',
      'Per le imprese del distretto, censire le sostanze fluorurate utilizzate nei trattamenti e pianificarne la progressiva sostituzione secondo le indicazioni REACH.',
      'Per pozzi privati ad uso potabile, far eseguire analisi PFAS presso laboratori accreditati.',
      'Consultare i report periodici di ARPAT sui corpi idrici del Bisenzio e dell\'Ombrone Pistoiese.',
    ],
  },
  {
    id: 'lazio-areale-tiberino',
    name: 'Areale del Tevere e falde laziali',
    region: 'Lazio',
    provinces: ['RM', 'VT', 'RI', 'LT', 'FR'],
    severity: 'monitorata',
    shortDescription:
      'Monitoraggio ARPA Lazio dei PFAS nelle acque superficiali e sotterranee del bacino del Tevere, con valori generalmente sotto i limiti normativi.',
    description:
      'ARPA Lazio conduce un programma di monitoraggio dei PFAS nei corpi idrici superficiali e sotterranei della regione, con particolare attenzione al bacino del Tevere e alle falde utilizzate per l\'approvvigionamento idropotabile dell\'area metropolitana di Roma e delle province limitrofe. I dati pubblicati nei report annuali mostrano valori di PFOA, PFOS e PFAS totali generalmente inferiori ai limiti previsti dal D.Lgs. 18/2023, con sporadici punti di rilievo in corrispondenza di scarichi industriali e aree con attività di smaltimento rifiuti. Il gestore Acea Ato 2, responsabile del servizio idrico per Roma e gran parte della provincia, ha implementato il monitoraggio PFAS nei propri impianti di potabilizzazione e nei pozzi di emungimento, pubblicando i dati nelle etichette d\'acqua per ciascun comune servito. La situazione è classificata come "monitorata" perché non sono attualmente note perimetrazioni di emergenza, ma l\'estensione dei controlli prosegue in coerenza con l\'entrata in vigore dei nuovi limiti europei.',
    knownSince: '2020',
    approxLatitude: 42.0,
    approxLongitude: 12.5,
    officialReferences: [
      {
        label: 'ARPA Lazio - Acque',
        url: 'https://www.arpalazio.it/acqua',
      },
      {
        label: 'Regione Lazio - Ambiente',
        url: 'https://www.regione.lazio.it/cittadini/ambiente',
      },
    ],
    whatToDo: [
      'Consultare l\'etichetta dell\'acqua di Acea Ato 2 o del gestore idrico competente per il proprio comune.',
      'Per chi utilizza pozzi privati, far eseguire analisi PFAS presso laboratori accreditati.',
      'Seguire i report annuali di ARPA Lazio sullo stato delle acque superficiali e sotterranee.',
      'Per dubbi clinici rivolgersi al proprio medico curante e ai dipartimenti di prevenzione delle ASL.',
    ],
  },
  {
    id: 'emilia-romagna-distretto-ceramico',
    name: 'Distretto ceramico di Sassuolo (Modena - Reggio Emilia)',
    region: 'Emilia-Romagna',
    provinces: ['MO', 'RE'],
    severity: 'monitorata',
    shortDescription:
      'Monitoraggio di ARPAE Emilia-Romagna sui PFAS nelle acque del distretto ceramico, polo industriale di rilievo internazionale.',
    description:
      'Il distretto ceramico fra Modena e Reggio Emilia, con epicentro Sassuolo, è il maggiore polo italiano per la produzione di piastrelle e ceramica tecnica. Le lavorazioni industriali del distretto coinvolgono numerose sostanze chimiche utilizzate nei processi di smaltatura, lucidatura e trattamento superficiale. ARPAE Emilia-Romagna include i PFAS nei piani di monitoraggio delle acque superficiali e sotterranee del territorio, nei controlli degli scarichi industriali e nella verifica dei pozzi acquedottistici gestiti da Hera ed Iren. I dati pubblicati nei report ambientali non documentano, allo stato, superamenti diffusi dei nuovi limiti del D.Lgs. 18/2023, ma evidenziano la necessità di proseguire la sorveglianza in considerazione della densità industriale dell\'area e della complessità delle filiere produttive coinvolte. La Regione Emilia-Romagna ha sostenuto progetti di ricerca e censimento delle sostanze fluorurate utilizzate dalle imprese e ha integrato i PFAS nel piano regionale di tutela delle acque.',
    knownSince: '2021',
    approxLatitude: 44.55,
    approxLongitude: 10.78,
    officialReferences: [
      {
        label: 'ARPAE Emilia-Romagna - Acqua',
        url: 'https://www.arpae.it/it/temi-ambientali/acqua',
      },
      {
        label: 'Regione Emilia-Romagna - Ambiente',
        url: 'https://ambiente.regione.emilia-romagna.it/it/acque',
      },
    ],
    whatToDo: [
      'Consultare l\'etichetta dell\'acqua di Hera o Iren per i valori PFAS più recenti del proprio comune.',
      'Per pozzi privati, eseguire analisi PFAS presso laboratori accreditati.',
      'Per le imprese del distretto, partecipare ai progetti di censimento e sostituzione delle sostanze fluorurate promossi da Regione e Camere di Commercio.',
      'Seguire i report annuali di ARPAE sullo stato delle acque della Provincia di Modena e Reggio Emilia.',
    ],
  },
  {
    id: 'lombardia-bacino-lambro',
    name: 'Bacino del fiume Lambro (Brianza e Milano)',
    region: 'Lombardia',
    provinces: ['MB', 'MI', 'LC'],
    severity: 'media',
    shortDescription:
      'Bacino fluviale fortemente urbanizzato e industrializzato, con rilievi storici di PFAS nelle acque superficiali documentati da ARPA Lombardia.',
    description:
      'Il fiume Lambro attraversa una delle aree più densamente urbanizzate e industrializzate d\'Italia, scorrendo dalla Brianza fino al Po attraverso le province di Lecco, Monza-Brianza e Milano. ARPA Lombardia monitora storicamente la qualità delle sue acque, caratterizzate da pressioni multiple: scarichi urbani, depuratori, attività manifatturiere e residui di distretti industriali storici (galvaniche, tessili, chimici). I report di ARPA Lombardia hanno documentato in più punti del bacino la presenza di PFAS in concentrazioni misurabili nelle acque superficiali, con superamenti puntuali degli standard di qualità ambientale per PFOS, parametro per il quale la normativa europea prevede limiti particolarmente stringenti nei corpi idrici superficiali. Il bacino del Lambro non è utilizzato direttamente per l\'approvvigionamento potabile, ma i suoi affluenti e la falda sottostante intercettano pozzi di gestori come Brianzacque, Gruppo CAP e MM Spa, che monitorano i PFAS sui pozzi acquedottistici e applicano, dove necessario, trattamenti specifici. La Regione Lombardia ha inserito il bacino del Lambro fra le priorità del piano di tutela delle acque per la riduzione delle pressioni inquinanti.',
    knownSince: '2019',
    approxLatitude: 45.66,
    approxLongitude: 9.32,
    officialReferences: [
      {
        label: 'ARPA Lombardia - Acque superficiali',
        url: 'https://www.arpalombardia.it/temi-ambientali/acqua/acque-superficiali/',
      },
      {
        label: 'Regione Lombardia - Piano di tutela delle acque',
        url: 'https://www.regione.lombardia.it/wps/portal/istituzionale/HP/DettaglioRedazionale/servizi-e-informazioni/cittadini/tutela-ambientale/tutela-acque',
      },
    ],
    whatToDo: [
      'Consultare l\'etichetta dell\'acqua del proprio gestore (Brianzacque, Gruppo CAP, MM Spa) per i valori PFAS aggiornati.',
      'Evitare l\'uso non controllato di acque superficiali del bacino del Lambro per orti e abbeveraggio.',
      'Per chi utilizza pozzi privati, far eseguire analisi PFAS presso laboratori accreditati.',
      'Segnalare ad ARPA Lombardia eventuali scarichi sospetti o anomalie nelle acque del bacino.',
      'Seguire i report periodici di ARPA Lombardia sullo stato di qualità dei corpi idrici lombardi.',
    ],
  },
];

export function getHotspotsByRegion(region: string): PFASHotspot[] {
  const normalized = region.trim().toLowerCase();
  return PFAS_HOTSPOTS.filter((hotspot) => hotspot.region.toLowerCase() === normalized);
}
