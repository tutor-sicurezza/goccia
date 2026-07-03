// Dove ogni gestore pubblica le analisi ufficiali dell'acqua potabile.
//
// GoccIA non ripubblica i valori dei gestori: rimanda alla fonte ufficiale,
// che è l'unico riferimento fedefacente, e aiuta a leggerla (e a trasformarla
// in un punteggio con lo strumento di scoring).
//
// Gli URL sono stati individuati a luglio 2026 tramite ricerca su fonti
// pubbliche (siti dei gestori, comuni, stampa locale). I siti possono
// cambiare: il campo `confidence` indica quanto è solido il riferimento e
// la pagina mostra sempre un suggerimento di ricerca alternativo.

export type SourceConfidence = 'alta' | 'media' | 'bassa';

export interface OfficialSource {
  citySlug: string;
  utility: string;
  officialUrl: string;
  /** Come arrivare ai dati una volta sul sito del gestore. */
  pathHint?: string;
  /** Eventuale portale regionale/sovracomunale con gli stessi dati. */
  regionalPortal?: { name: string; url: string };
  confidence: SourceConfidence;
  /** Cosa si trova sulla pagina, in breve. */
  note: string;
}

export const OFFICIAL_SOURCES: OfficialSource[] = [
  // ——— Nord-Ovest ———
  {
    citySlug: 'milano',
    utility: 'MM S.p.A. (Milano Blu)',
    officialUrl: 'https://www.milanoblu.com/la-tua-acqua/controlla-le-analisi/',
    pathHint: 'Sezione "La tua acqua → Controlla le analisi": valori medi per zona della città.',
    confidence: 'alta',
    note: 'MM pubblica le analisi dell\'acqua di Milano con i valori medi dei parametri principali, consultabili online.',
  },
  {
    citySlug: 'torino',
    utility: 'SMAT S.p.A.',
    officialUrl: 'https://www.smatorino.it/qualita-dellacqua-del-tuo-comune/',
    pathHint: 'Pagina "Qualità dell\'acqua del tuo comune": seleziona Torino per i valori medi (periodo gennaio–dicembre).',
    confidence: 'alta',
    note: 'SMAT pubblica i valori medi annuali per ciascun comune servito, aggiornati periodicamente nella sezione monitoraggio acque.',
  },
  {
    citySlug: 'genova',
    utility: 'Ireti S.p.A. (Gruppo Iren)',
    officialUrl: 'https://www.gruppoiren.it/it/i-nostri-servizi/servizio-idrico-integrato/qualita-dell-acqua.html',
    pathHint: 'Pagina "Qualità dell\'acqua" del Gruppo Iren: consultazione delle analisi per comune (laboratori IrenLab).',
    confidence: 'alta',
    note: 'I dati di qualità dell\'acqua distribuita a Genova sono consultabili per comune dalla pagina dedicata del Gruppo Iren.',
  },
  {
    citySlug: 'cuneo',
    utility: 'ACDA S.p.A.',
    officialUrl: 'https://www.acda.it',
    pathHint: 'Sezione "Analisi delle acque" del sito ACDA.',
    confidence: 'media',
    note: 'ACDA gestisce l\'acquedotto del Cuneese e pubblica le analisi delle acque nella sezione dedicata del proprio sito.',
  },
  {
    citySlug: 'aosta',
    utility: 'SEV S.r.l. — Services des Eaux Valdôtaines (gestore unico regionale dal 2026)',
    officialUrl: 'https://www.sev.vda.it/',
    pathHint: 'Dal 1° gennaio 2025 SEV è subentrata al Comune di Aosta; dal 2026 è gestore unico regionale.',
    regionalPortal: { name: 'BIM Valle d\'Aosta — gestore unico SEV', url: 'https://www.bimvda.it/ega/gestore-unico-sev' },
    confidence: 'media',
    note: 'La gestione è passata di recente a SEV: il sito è in evoluzione e una pagina strutturata con i valori medi per comune non risulta ancora pubblicata.',
  },
  {
    citySlug: 'la-spezia',
    utility: 'Acam Acque S.p.A. (Gruppo Iren)',
    officialUrl: 'https://www.gruppoiren.it/it/i-nostri-servizi/servizio-idrico-integrato/qualita-dell-acqua.html',
    pathHint: 'Pagina "Qualità dell\'acqua" del Gruppo Iren: consultazione delle analisi per comune.',
    confidence: 'alta',
    note: 'Acam Acque serve 31 comuni dello Spezzino; le analisi dei laboratori IrenLab sono consultabili per comune dal portale Iren.',
  },

  // ——— Lombardia / Nord ———
  {
    citySlug: 'brescia',
    utility: 'A2A Ciclo Idrico S.p.A.',
    officialUrl: 'https://www.a2acicloidrico.it/it/servizi/verifica-qualita-acqua',
    pathHint: 'Servizio "Verifica qualità acqua": seleziona il comune di Brescia.',
    confidence: 'alta',
    note: 'A2A Ciclo Idrico pubblica online le analisi dell\'acqua per i comuni serviti nel Bresciano.',
  },
  {
    citySlug: 'bergamo',
    utility: 'Uniacque S.p.A.',
    officialUrl: 'https://www.uniacque.bg.it/qualita-dellacqua/i-parametri-del-tuo-comune/',
    pathHint: 'Pagina "I parametri del tuo comune": seleziona Bergamo.',
    confidence: 'alta',
    note: 'Uniacque pubblica i parametri dell\'acqua per ciascun comune servito della provincia di Bergamo.',
  },
  {
    citySlug: 'trento',
    utility: 'Novareti S.p.A. (Gruppo Dolomiti Energia)',
    officialUrl: 'https://www.novareti.eu',
    pathHint: 'Cerca la sezione dedicata alla qualità dell\'acqua distribuita a Trento e Rovereto.',
    confidence: 'media',
    note: 'Novareti gestisce l\'acquedotto di Trento; le informazioni sulla qualità dell\'acqua sono pubblicate sul sito del gestore.',
  },
  {
    citySlug: 'bolzano',
    utility: 'SEAB S.p.A.',
    officialUrl: 'https://www.seab.bz.it/it/privati/lacqua-di-bolzano',
    pathHint: 'Pagina "L\'acqua di Bolzano" con caratteristiche e valori dell\'acqua distribuita.',
    confidence: 'alta',
    note: 'SEAB pubblica le caratteristiche dell\'acqua di Bolzano, storicamente leggera (durezza indicativa 13–16 °F secondo il gestore).',
  },
  {
    citySlug: 'udine',
    utility: 'CAFC S.p.A.',
    officialUrl: 'https://www.cafcspa.com/it/15356/qualita-dell-acqua',
    pathHint: 'Sezione "Qualità dell\'acqua": consultazione delle analisi per comune e via.',
    confidence: 'alta',
    note: 'CAFC serve 83 comuni del Friuli con laboratorio interno; le analisi sono consultabili per comune e punto di prelievo.',
  },
  {
    citySlug: 'vicenza',
    utility: 'Viacqua S.p.A.',
    officialUrl: 'https://www.viacqua.it/it/clienti/acquedotto/qualita-dell-acqua/',
    pathHint: 'Sezione "Qualità dell\'acqua": etichetta dell\'acqua con i valori medi (D.Lgs. 18/2023).',
    confidence: 'alta',
    note: 'Viacqua pubblica l\'etichetta dell\'acqua con i valori medi annuali per i 66 comuni serviti nel Vicentino.',
  },

  // ——— Triveneto ———
  {
    citySlug: 'venezia',
    utility: 'Veritas S.p.A.',
    officialUrl: 'https://www.gruppoveritas.it/area-dati-acqua/venezia',
    pathHint: 'Area "Dati acqua" di Venezia: PDF con le medie della rete e la durezza per zona (Centro storico, Lido, Terraferma).',
    confidence: 'alta',
    note: 'Veritas pubblica i valori medi della rete e documenti semestrali per zona; la durezza cambia tra centro storico, isole e terraferma.',
  },
  {
    citySlug: 'verona',
    utility: 'Acque Veronesi S.c.a r.l.',
    officialUrl: 'https://acqueveronesi.it/cosa-facciamo/sicurezza-acqua/qualita-acqua/',
    pathHint: 'Pagina "Qualità acqua": seleziona comune e indirizzo per scaricare il PDF con i dati medi (aggiornamento semestrale).',
    confidence: 'alta',
    note: 'Acque Veronesi pubblica i dati medi con frequenza semestrale, consultabili per comune e indirizzo tramite selettore.',
  },
  {
    citySlug: 'padova',
    utility: 'AcegasApsAmga S.p.A. (Gruppo Hera)',
    officialUrl: 'https://www.acegasapsamga.it/servizi/acqua/qualita-acqua-potabile/qualita-acqua-di-padova',
    pathHint: 'Pagina "Qualità acqua di Padova": PDF mensili con le analisi medie, con archivio degli anni precedenti.',
    confidence: 'alta',
    note: 'AcegasApsAmga pubblica per Padova rapporti mensili con le analisi medie e il report annuale "In buone acque".',
  },
  {
    citySlug: 'trieste',
    utility: 'AcegasApsAmga S.p.A. (Gruppo Hera)',
    officialUrl: 'https://www.acegasapsamga.it/servizi/acqua/qualita-dell-acqua-potabile/qualita-acqua-a-trieste',
    pathHint: 'Pagina "Qualità acqua a Trieste": rapporto mensile "Caratteristiche di qualità medie dell\'acqua distribuita" in PDF.',
    confidence: 'alta',
    note: 'AcegasApsAmga pubblica rapporti mensili con i valori medi dell\'acqua distribuita nella rete di Trieste.',
  },

  // ——— Emilia-Romagna ———
  {
    citySlug: 'bologna',
    utility: 'Hera S.p.A.',
    officialUrl: 'https://www.gruppohera.it/offerte-e-servizi/casa/acqua/che-acqua-bevi',
    pathHint: 'Strumento "Che acqua bevi": seleziona il comune di Bologna per i valori medi.',
    confidence: 'alta',
    note: 'Hera pubblica per ogni comune servito l\'etichetta dell\'acqua con valori medi, aggiornata almeno ogni semestre, e il report annuale "In buone acque".',
  },
  {
    citySlug: 'modena',
    utility: 'Hera S.p.A.',
    officialUrl: 'https://www.gruppohera.it/offerte-e-servizi/casa/acqua/che-acqua-bevi',
    pathHint: 'Strumento "Che acqua bevi": seleziona il comune di Modena.',
    confidence: 'alta',
    note: 'I valori medi dell\'acqua di Modena sono pubblicati nello strumento per comune di Hera e nel report "In buone acque".',
  },
  {
    citySlug: 'parma',
    utility: 'Ireti S.p.A. (Gruppo Iren)',
    officialUrl: 'https://www.gruppoiren.it/it/i-nostri-servizi/servizio-idrico-integrato/qualita-dell-acqua.html',
    pathHint: 'Consultazione analisi per comune (portale Acqua Emilia di Ireti); il Comune di Parma pubblica una pagina con i dati di qualità.',
    confidence: 'media',
    note: 'Ireti gestisce il servizio idrico di Parma; i risultati delle analisi per zona sono consultabili tramite il portale del gruppo.',
  },
  {
    citySlug: 'reggio-emilia',
    utility: 'Ireti S.p.A. (Gruppo Iren)',
    officialUrl: 'https://www.gruppoiren.it/it/i-nostri-servizi/servizio-idrico-integrato/qualita-dell-acqua.html',
    pathHint: 'Consultazione analisi per comune e zona (portale Acqua Emilia di Ireti).',
    confidence: 'media',
    note: 'Ireti pubblica i valori delle analisi per le diverse zone della rete di Reggio Emilia.',
  },
  {
    citySlug: 'rimini',
    utility: 'Hera S.p.A.',
    officialUrl: 'https://www.gruppohera.it/offerte-e-servizi/casa/acqua/che-acqua-bevi',
    pathHint: 'Strumento "Che acqua bevi": seleziona il comune di Rimini.',
    regionalPortal: { name: 'Romagna Acque — qualità delle fonti', url: 'https://www.romagnacque.it/acqua/analisi-e-controlli-la-qualita-dellacqua/' },
    confidence: 'alta',
    note: 'Oltre all\'etichetta per comune di Hera, Romagna Acque pubblica i dati di qualità delle fonti che alimentano la rete riminese.',
  },
  {
    citySlug: 'forli',
    utility: 'Hera S.p.A.',
    officialUrl: 'https://www.gruppohera.it/offerte-e-servizi/casa/acqua/che-acqua-bevi',
    pathHint: 'Strumento "Che acqua bevi": seleziona il comune di Forlì.',
    regionalPortal: { name: 'Romagna Acque — qualità delle fonti', url: 'https://www.romagnacque.it/acqua/analisi-e-controlli-la-qualita-dellacqua/' },
    confidence: 'alta',
    note: 'I valori medi per comune sono pubblicati da Hera; le fonti romagnole sono monitorate da Romagna Acque.',
  },
  {
    citySlug: 'cesena',
    utility: 'Hera S.p.A.',
    officialUrl: 'https://www.gruppohera.it/offerte-e-servizi/casa/acqua/che-acqua-bevi',
    pathHint: 'Strumento "Che acqua bevi": seleziona il comune di Cesena. Dati anche nell\'app Acquologo.',
    regionalPortal: { name: 'Romagna Acque — qualità delle fonti', url: 'https://www.romagnacque.it/acqua/analisi-e-controlli-la-qualita-dellacqua/' },
    confidence: 'alta',
    note: 'Hera pubblica l\'etichetta dell\'acqua di Cesena con valori medi aggiornati almeno ogni semestre.',
  },
  {
    citySlug: 'ravenna',
    utility: 'Hera S.p.A.',
    officialUrl: 'https://www.gruppohera.it/offerte-e-servizi/casa/acqua/che-acqua-bevi',
    pathHint: 'Strumento "Che acqua bevi": seleziona il comune di Ravenna.',
    regionalPortal: { name: 'Romagna Acque — qualità delle fonti', url: 'https://www.romagnacque.it/acqua/analisi-e-controlli-la-qualita-dellacqua/' },
    confidence: 'alta',
    note: 'Nel report "In buone acque" Hera segnala per Ravenna cloriti mediamente più alti, legati alla disinfezione con biossido di cloro.',
  },

  // ——— Centro ———
  {
    citySlug: 'firenze',
    utility: 'Publiacqua S.p.A.',
    officialUrl: 'https://www.publiacqua.it/qualita/firenze',
    pathHint: 'Pagina "Qualità" dedicata a Firenze con i valori medi dell\'acqua distribuita.',
    confidence: 'alta',
    note: 'Publiacqua pubblica una pagina per comune con i valori medi dei parametri principali dell\'acqua fiorentina.',
  },
  {
    citySlug: 'prato',
    utility: 'Publiacqua S.p.A.',
    officialUrl: 'https://www.publiacqua.it/qualita/prato',
    pathHint: 'Pagina "Qualità" dedicata a Prato.',
    confidence: 'alta',
    note: 'Come per Firenze, Publiacqua pubblica i valori medi dell\'acqua distribuita a Prato su una pagina dedicata.',
  },
  {
    citySlug: 'lucca',
    utility: 'GEAL S.p.A.',
    officialUrl: 'https://www.geal-lucca.it/analisi-di-laboratorio-per-acque-potabili/',
    pathHint: 'Pagina "Analisi di laboratorio per acque potabili".',
    confidence: 'alta',
    note: 'GEAL pubblica le analisi di laboratorio dell\'acqua potabile distribuita nel comune di Lucca.',
  },
  {
    citySlug: 'roma',
    utility: 'ACEA Ato 2 S.p.A.',
    officialUrl: 'https://www.gruppoacea.it/al-servizio-delle-persone/acqua/acea-ato-2/la-qualita-della-tua-acqua',
    pathHint: 'Servizio "La qualità della tua acqua": valori medi per municipio/zona, scaricabili in PDF.',
    confidence: 'alta',
    note: 'ACEA Ato 2 pubblica i valori medi per municipio e zona di Roma, con schede scaricabili per il proprio indirizzo.',
  },
  {
    citySlug: 'latina',
    utility: 'Acqualatina S.p.A.',
    officialUrl: 'https://www.acqualatina.it/qualita-dellacqua-per-comune/',
    pathHint: 'Pagina "Qualità dell\'acqua per comune": seleziona Latina. L\'arsenico è aggiornato con frequenza maggiore.',
    confidence: 'alta',
    note: 'Acqualatina pubblica le medie annuali per comune, con aggiornamenti più frequenti per i parametri sensibili del territorio.',
  },
  {
    citySlug: 'perugia',
    utility: 'Umbra Acque S.p.A.',
    officialUrl: 'https://www.umbraacque.com/territorio-e-sostenibilita/qualita-dell-acqua',
    pathHint: 'Sezione "Qualità dell\'acqua".',
    regionalPortal: { name: 'L\'acqua che bevo (portale regionale umbro)', url: 'https://www.lacquachebevo.it' },
    confidence: 'alta',
    note: 'Oltre alla pagina di Umbra Acque, l\'Umbria ha un portale regionale dedicato ai controlli sull\'acqua potabile.',
  },
  {
    citySlug: 'ancona',
    utility: 'Viva Servizi S.p.A.',
    officialUrl: 'https://www.vivaservizi.it/qualit%C3%A0-dell-acqua/analisi-acqua-del-tuo-comune',
    pathHint: 'Sezione "Qualità dell\'acqua → Analisi acqua del tuo comune".',
    confidence: 'alta',
    note: 'Viva Servizi pubblica le analisi per ciascuno dei 43 comuni serviti tra Ancona e Macerata.',
  },
  {
    citySlug: 'pescara',
    utility: 'ACA S.p.A.',
    officialUrl: 'https://www.aca.pescara.it/area-tecnica/laboratorio-ed-analisi/qualita-acqua.html',
    pathHint: 'Pagina "Qualità acqua": mappa e PDF con i valori medi degli ultimi 12 mesi per zona.',
    confidence: 'alta',
    note: 'ACA pubblica i valori medi degli ultimi 12 mesi per zona di distribuzione, scaricabili in PDF.',
  },
  {
    citySlug: 'campobasso',
    utility: 'GRIM S.c.a r.l. — Gestione Risorse Idriche Molisane',
    officialUrl: 'https://grimolise.it/qualita-dellacqua/',
    pathHint: 'Sezione "Qualità dell\'acqua". Anche il Comune di Campobasso pubblica una pagina dedicata.',
    confidence: 'media',
    note: 'GRIM gestisce il servizio idrico di Campobasso dal 2023; la sezione qualità riporta le informazioni sui controlli.',
  },

  // ——— Sud ———
  {
    citySlug: 'napoli',
    utility: 'ABC — Acqua Bene Comune Napoli',
    officialUrl: 'https://www.abc.napoli.it',
    pathHint: 'Sezione "Qualità dell\'acqua": tabella dei dati medi settimanali su 51 punti di prelievo in città.',
    confidence: 'media',
    note: 'ABC Napoli pubblica dati medi settimanali della rete cittadina: una delle frequenze di aggiornamento più alte in Italia.',
  },
  {
    citySlug: 'salerno',
    utility: 'Sistemi Salerno — Servizi Idrici S.p.A.',
    officialUrl: 'https://serviziidrici.grupposistemisalerno.it/qualita-dellacqua/',
    pathHint: 'Pagina "Qualità dell\'acqua".',
    confidence: 'alta',
    note: 'Il gruppo Sistemi Salerno pubblica le informazioni e i controlli sulla qualità dell\'acqua distribuita a Salerno.',
  },
  {
    citySlug: 'bari',
    utility: 'Acquedotto Pugliese S.p.A. (AQP)',
    officialUrl: 'https://www.aqp.it/scopri-acquedotto/qualita-acqua',
    pathHint: 'Sezione "Qualità acqua → Caratteristiche dell\'acqua": cerca il comune di Bari. Bollettini semestrali con i valori medi.',
    confidence: 'alta',
    note: 'AQP pubblica per ogni comune pugliese i bollettini con i valori medi dei parametri previsti dal D.Lgs. 18/2023.',
  },
  {
    citySlug: 'taranto',
    utility: 'Acquedotto Pugliese S.p.A. (AQP)',
    officialUrl: 'https://www.aqp.it/scopri-acquedotto/qualita-acqua',
    pathHint: 'Sezione "Qualità acqua → Caratteristiche dell\'acqua": cerca il comune di Taranto.',
    confidence: 'alta',
    note: 'Stesso strumento per comune di AQP, con laboratorio territoriale anche a Taranto.',
  },
  {
    citySlug: 'foggia',
    utility: 'Acquedotto Pugliese S.p.A. (AQP)',
    officialUrl: 'https://www.aqp.it/scopri-acquedotto/qualita-acqua',
    pathHint: 'Sezione "Qualità acqua → Caratteristiche dell\'acqua": cerca il comune di Foggia.',
    confidence: 'alta',
    note: 'AQP è il gestore unico regionale pugliese; i valori per Foggia si consultano dallo stesso strumento per comune.',
  },
  {
    citySlug: 'lecce',
    utility: 'Acquedotto Pugliese S.p.A. (AQP)',
    officialUrl: 'https://www.aqp.it/scopri-acquedotto/qualita-acqua',
    pathHint: 'Sezione "Qualità acqua → Caratteristiche dell\'acqua": cerca il comune di Lecce.',
    confidence: 'alta',
    note: 'I valori medi per Lecce sono pubblicati nello strumento per comune di AQP.',
  },
  {
    citySlug: 'potenza',
    utility: 'Acquedotto Lucano S.p.A.',
    officialUrl: 'https://www.acquedottolucano.it/qualita-dellacqua-2',
    pathHint: 'Sezione "La tua acqua": valori medi annui per ciascuno dei 130 comuni serviti.',
    confidence: 'alta',
    note: 'Acquedotto Lucano pubblica i valori medi annui delle analisi per ogni comune servito della Basilicata.',
  },
  {
    citySlug: 'catanzaro',
    utility: 'Sorical S.p.A. (gestore unico regionale)',
    officialUrl: 'https://www.soricalspa.com/acqua/',
    pathHint: 'Sezione "L\'acqua". Non risulta ancora una pagina con i valori medi per comune.',
    confidence: 'media',
    note: 'Sorical è subentrata al Comune nella gestione del servizio idrico di Catanzaro; i controlli sono svolti dal laboratorio di Germaneto, ma la pubblicazione per comune è in evoluzione.',
  },
  {
    citySlug: 'reggio-calabria',
    utility: 'Sorical S.p.A. (gestore unico regionale)',
    officialUrl: 'https://www.soricalspa.com/acqua/',
    pathHint: 'Sezione "L\'acqua". Il Comune mantiene un ufficio di monitoraggio della qualità delle acque potabili.',
    confidence: 'media',
    note: 'La gestione è passata dal Comune a Sorical; per i dati puntuali può essere utile anche il canale del Comune di Reggio Calabria.',
  },
  {
    citySlug: 'crotone',
    utility: 'Sorical S.p.A. (dal 1° gennaio 2025, subentrata a Congesi)',
    officialUrl: 'https://www.soricalspa.com/',
    pathHint: 'Sezione "L\'acqua" del sito Sorical.',
    confidence: 'media',
    note: 'Dal 2025 Sorical gestisce il servizio idrico di Crotone e di altri 13 comuni del Crotonese; la transizione da Congesi è recente.',
  },

  // ——— Isole ———
  {
    citySlug: 'palermo',
    utility: 'AMAP S.p.A.',
    officialUrl: 'https://www.amapspa.it',
    pathHint: 'Cerca la "Carta d\'identità dell\'acqua" e la sezione con le analisi.',
    confidence: 'media',
    note: 'AMAP pubblica la carta d\'identità dell\'acqua di Palermo e le informazioni sui controlli di qualità.',
  },
  {
    citySlug: 'catania',
    utility: 'SIDRA S.p.A.',
    officialUrl: 'https://sidraspa.it/area-comunicazione/analisi-dell-acqua/',
    pathHint: 'Sezione "Analisi dell\'acqua": rapporti PDF annuali, con archivio storico che risale almeno al 2015.',
    confidence: 'alta',
    note: 'SIDRA (interamente del Comune di Catania) pubblica i rapporti di analisi annuali con un archivio storico consultabile.',
  },
  {
    citySlug: 'messina',
    utility: 'AMAM S.p.A. — Azienda Meridionale Acque Messina',
    officialUrl: 'https://www.amam.it/lacqua/le-analisi/',
    pathHint: 'Sezione "L\'acqua → Le analisi": referti per l\'acquedotto Fiumefreddo, Santissima e i pozzi cittadini.',
    confidence: 'alta',
    note: 'AMAM pubblica i referti delle analisi per le diverse fonti che alimentano Messina (Fiumefreddo copre circa l\'80% della città).',
  },
  {
    citySlug: 'siracusa',
    utility: 'Aretusacque S.c.p.A. (da giugno 2026; in precedenza SIAM)',
    officialUrl: 'https://www.aretusacque.a-acqua.it/',
    pathHint: 'Gestore subentrato a metà giugno 2026: il sito è appena avviato e la pagina con le analisi potrebbe non essere ancora pubblicata.',
    confidence: 'bassa',
    note: 'Il servizio idrico di Siracusa è passato ad Aretusacque a giugno 2026; in attesa della nuova pagina analisi, i referti storici erano pubblicati da SIAM.',
  },
  {
    citySlug: 'trapani',
    utility: 'Comune di Trapani (gestione in economia)',
    officialUrl: 'https://comune.trapani.it/novita/servizio-idrico-integrato/',
    pathHint: 'Pagina "Servizio idrico integrato" e avvisi sulla potabilità nella sezione novità del sito comunale.',
    confidence: 'bassa',
    note: 'A Trapani il servizio idrico è gestito direttamente dal Comune, che pubblica certificati di potabilità e ordinanze ma non una pagina strutturata con i valori medi.',
  },
  {
    citySlug: 'cagliari',
    utility: 'Abbanoa S.p.A.',
    officialUrl: 'https://www.abbanoa.it/Documenti-e-dati/Dataset/La-qualita-dell-acqua',
    pathHint: 'Sezione "Documenti e dati → Dataset → La qualità dell\'acqua": dati per comune.',
    confidence: 'alta',
    note: 'Abbanoa, gestore unico della Sardegna, pubblica un dataset con i parametri di qualità dell\'acqua distribuita (circa 12.000 campionamenti l\'anno).',
  },
  {
    citySlug: 'sassari',
    utility: 'Abbanoa S.p.A.',
    officialUrl: 'https://www.abbanoa.it/Documenti-e-dati/Dataset/La-qualita-dell-acqua',
    pathHint: 'Sezione "Documenti e dati → Dataset → La qualità dell\'acqua": dati per comune.',
    confidence: 'alta',
    note: 'I dati per Sassari sono nel dataset per comune di Abbanoa, che ha un laboratorio certificato anche in città.',
  },
];

export function getOfficialSource(citySlug: string): OfficialSource | undefined {
  return OFFICIAL_SOURCES.find((s) => s.citySlug === citySlug);
}

export const CONFIDENCE_LABEL: Record<SourceConfidence, string> = {
  alta: 'Fonte verificata',
  media: 'Fonte indicativa',
  bassa: 'Situazione in evoluzione',
};
