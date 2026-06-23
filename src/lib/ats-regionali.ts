export interface ATSRegionale {
  slug: string;
  region: string;
  name: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  competenze: string[];
  procedureCittadino: string[];
  contattiPubblici: { label: string; value: string }[];
  ufficialURL: string;
  faqs: { q: string; a: string }[];
  relatedSlugs?: string[];
}

export const ATS_REGIONALI: ATSRegionale[] = [
  {
    slug: 'ats-lombardia',
    region: 'Lombardia',
    name: 'ATS della Lombardia',
    shortTitle: 'ATS Lombardia: controllo acqua potabile e competenze sanitarie',
    metaDescription:
      'Le ATS lombarde (Milano, Brescia, Bergamo, Insubria, Brianza, Pavia, Val Padana, Montagna) vigilano sull acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'ats lombardia acqua',
      'ats milano acqua potabile',
      'ats brescia controllo acqua',
      'sorveglianza legionella lombardia',
    ],
    intro:
      'In Lombardia la sorveglianza sanitaria delle acque destinate al consumo umano è ripartita fra otto Agenzie di Tutela della Salute: ATS Città Metropolitana di Milano, ATS Brescia, ATS Bergamo, ATS Insubria, ATS Brianza, ATS Pavia, ATS Val Padana e ATS Montagna. Le ATS hanno sostituito le vecchie ASL nel 2015 con la L.R. 23/2015. Operano in stretto raccordo con ARPA Lombardia per i controlli analitici e con i gestori del Servizio Idrico Integrato (es. MM SpA a Milano, A2A Ciclo Idrico a Brescia). Si occupano del controllo esterno previsto dal D.Lgs. 18/2023, della sorveglianza sulla legionellosi negli impianti collettivi e della valutazione del rischio sanitario lungo l intera filiera idro-potabile, dalla captazione al rubinetto del consumatore.',
    competenze: [
      'Controllo esterno acqua potabile ai sensi del D.Lgs. 18/2023 (parametri chimici, microbiologici, indicatori)',
      'Sorveglianza sanitaria legionella negli impianti idrici collettivi (alberghi, RSA, ospedali, palestre)',
      'Gestione delle non conformità e delle deroghe sui parametri di qualità dell acqua',
      'Pareri igienico-sanitari su nuovi pozzi privati ad uso potabile e captazioni',
      'Valutazione dei Piani di Sicurezza dell Acqua (PSA) presentati dai gestori',
      'Vigilanza sugli edifici a uso collettivo per il rischio amianto e materiali a contatto con acqua',
    ],
    procedureCittadino: [
      'Segnalare anomalie organolettiche (odore, colore, sapore) dell acqua di rete al gestore e per conoscenza all ATS competente',
      'Richiedere il referto analitico ufficiale dell ultimo campionamento al servizio Igiene e Sanità Pubblica della propria ATS',
      'Presentare istanza per autorizzazione sanitaria di pozzo privato ad uso umano (modulistica scaricabile dai siti ATS)',
      'Richiedere sopralluogo igienico-sanitario in caso di sospetta contaminazione (sversamenti, lavori, scarichi)',
      'Consultare il portale ATS per il calendario dei controlli e i parametri rilevati nel proprio comune',
    ],
    contattiPubblici: [
      { label: 'ATS Milano - URP', value: 'vedi centralino ufficiale su ats-milano.it' },
      { label: 'ATS Brescia - Igiene Pubblica', value: 'vedi sito ats-brescia.it sezione contatti' },
      { label: 'ATS Insubria - Sanità Pubblica', value: 'vedi sito ats-insubria.it' },
    ],
    ufficialURL: 'https://www.ats-milano.it',
    faqs: [
      {
        q: 'Quante ATS ci sono in Lombardia?',
        a: 'Otto: Milano Città Metropolitana, Brescia, Bergamo, Insubria, Brianza, Pavia, Val Padana e Montagna. Coprono tutto il territorio regionale.',
      },
      {
        q: 'Qual è la differenza fra ATS e ASST in Lombardia?',
        a: 'Le ATS programmano e vigilano (compresa la sorveglianza acque), mentre le ASST erogano servizi clinici e ospedalieri. La distinzione è stata introdotta dalla L.R. 23/2015.',
      },
      {
        q: 'A chi devo chiedere il referto dell acqua del rubinetto?',
        a: 'Il gestore (es. MM, A2A, BrianzAcque, Padania Acque) pubblica i dati per comune. L ATS detiene i referti del controllo esterno e può rilasciarli su istanza.',
      },
      {
        q: 'L ATS si occupa di pozzi privati?',
        a: 'Sì, rilascia il parere igienico-sanitario per i pozzi destinati a consumo umano e vigila sui materiali a contatto con l acqua potabile.',
      },
      {
        q: 'Cosa succede in caso di non conformità di un parametro?',
        a: 'L ATS notifica al gestore l obbligo di azione correttiva e, se necessario, dispone misure di limitazione d uso (es. non potabile) informando i sindaci.',
      },
    ],
    relatedSlugs: ['ats-piemonte', 'ats-veneto', 'ats-emilia-romagna'],
  },
  {
    slug: 'ats-lazio',
    region: 'Lazio',
    name: 'ASL del Lazio',
    shortTitle: 'ASL Lazio: vigilanza acqua potabile e sorveglianza sanitaria',
    metaDescription:
      'Le ASL del Lazio (Roma 1-6, Frosinone, Latina, Rieti, Viterbo) effettuano il controllo esterno delle acque ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'asl lazio acqua',
      'asl roma controllo acqua',
      'sorveglianza legionella lazio',
      'pozzi privati lazio autorizzazione',
    ],
    intro:
      'Nel Lazio la sorveglianza igienico-sanitaria sull acqua destinata al consumo umano è competenza delle Aziende Sanitarie Locali: ASL Roma 1, Roma 2, Roma 3, Roma 4, Roma 5, Roma 6, ASL Frosinone, ASL Latina, ASL Rieti e ASL Viterbo. I controlli sono coordinati con ARPA Lazio per le analisi chimiche e microbiologiche, e con i gestori del Servizio Idrico Integrato come ACEA ATO 2 (Roma e provincia) e ACEA ATO 5 (Frosinone). I Servizi di Igiene e Sanità Pubblica (SISP) delle ASL valutano i Piani di Sicurezza dell Acqua, rilasciano pareri sui pozzi privati a uso potabile, gestiscono le non conformità e vigilano sulla legionellosi negli impianti collettivi.',
    competenze: [
      'Applicazione del D.Lgs. 18/2023 sui controlli esterni di qualità dell acqua potabile',
      'Sorveglianza dei casi di legionellosi e controllo degli impianti idro-sanitari a rischio',
      'Pareri tecnico-sanitari su autorizzazioni di pozzi privati ad uso umano',
      'Gestione di non conformità e deroghe regionali sui parametri (es. arsenico, fluoruri, vanadio in alcune aree vulcaniche)',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
      'Collaborazione con ARPA Lazio per il monitoraggio ambientale delle captazioni',
    ],
    procedureCittadino: [
      'Segnalare alterazioni dell acqua di rete al gestore (ACEA, Talete, Acqualatina) e in copia al SISP della propria ASL',
      'Richiedere copia degli esiti analitici del controllo esterno alla ASL competente per territorio',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato ad uso potabile',
      'Chiedere sopralluogo igienico-sanitario in caso di sospetta contaminazione',
      'Consultare il bollettino regionale qualità acque sul sito istituzionale della Regione Lazio',
    ],
    contattiPubblici: [
      { label: 'ASL Roma 1 - SISP', value: 'vedi centralino ufficiale su aslroma1.it' },
      { label: 'ASL Roma 2 - URP', value: 'vedi sito aslroma2.it sezione contatti' },
      { label: 'Regione Lazio - Sanità', value: 'vedi portale salutelazio.it' },
    ],
    ufficialURL: 'https://www.regione.lazio.it/cittadini/sanita',
    faqs: [
      {
        q: 'Chi controlla l acqua del rubinetto a Roma?',
        a: 'Il gestore ACEA ATO 2 effettua i controlli interni; ASL Roma 1, 2, 3, 4, 5 e 6 svolgono il controllo esterno previsto dal D.Lgs. 18/2023.',
      },
      {
        q: 'Nel Lazio ci sono problemi di arsenico?',
        a: 'Sì, in alcune aree di origine vulcanica (province di Viterbo e parte di Roma) sono stati attivati impianti di dearsenificazione per rientrare nel limite di 10 µg/L.',
      },
      {
        q: 'Come ottengo il referto dell acqua?',
        a: 'È sufficiente presentare richiesta scritta al SISP della ASL competente, indicando il comune e il punto di prelievo di interesse.',
      },
      {
        q: 'Devo perforare un pozzo per uso potabile: a chi mi rivolgo?',
        a: 'Serve il parere igienico-sanitario della ASL e la concessione per derivazione idrica della Regione Lazio.',
      },
      {
        q: 'Cosa fa la ASL quando un parametro supera i limiti?',
        a: 'Notifica al gestore l obbligo di azione correttiva, può disporre divieto di uso potabile e informa il sindaco quale autorità sanitaria locale.',
      },
    ],
    relatedSlugs: ['ats-campania', 'ats-toscana', 'ats-umbria'],
  },
  {
    slug: 'ats-piemonte',
    region: 'Piemonte',
    name: 'ASL del Piemonte',
    shortTitle: 'ASL Piemonte: controllo acqua e sorveglianza igienico-sanitaria',
    metaDescription:
      'Le ASL del Piemonte (Torino Città, TO3-TO5, Alessandria, Asti, Biella, Cuneo, Novara, VCO, Vercelli) vigilano sull acqua potabile.',
    searchKeywords: [
      'asl piemonte acqua',
      'asl torino controllo acqua',
      'sorveglianza legionella piemonte',
      'pozzi privati piemonte',
    ],
    intro:
      'In Piemonte la sorveglianza sulle acque destinate al consumo umano spetta alle Aziende Sanitarie Locali: ASL Città di Torino, ASL TO3, ASL TO4, ASL TO5, ASL AL (Alessandria), ASL AT (Asti), ASL BI (Biella), ASL CN1 e CN2 (Cuneo), ASL NO (Novara), ASL VCO (Verbano-Cusio-Ossola) e ASL VC (Vercelli). I Servizi di Igiene degli Alimenti e della Nutrizione (SIAN) o i SISP, a seconda dell organizzazione locale, applicano il D.Lgs. 18/2023 in stretta collaborazione con ARPA Piemonte e con i gestori del Servizio Idrico Integrato come SMAT (Torino), AMAG (Alessandria) e Acquedotto Valtiglione. Si occupano della valutazione dei Piani di Sicurezza dell Acqua, della sorveglianza legionella e dei pozzi privati.',
    competenze: [
      'Controllo esterno acqua potabile secondo D.Lgs. 18/2023 (chimico, microbiologico, radiologico)',
      'Sorveglianza legionellosi e ispezioni su impianti idrici collettivi',
      'Pareri igienico-sanitari per pozzi privati e captazioni autonome',
      'Gestione di non conformità e proposta di azioni correttive ai gestori',
      'Vigilanza nelle aree con problematiche specifiche (arsenico, cromo VI, nitrati in pianura)',
      'Valutazione dei Piani di Sicurezza dell Acqua presentati da SMAT e altri gestori',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore (SMAT, Acquedotto Monferrato, Alpi Acque) e per conoscenza al SISP/SIAN della propria ASL',
      'Chiedere copia del referto analitico ufficiale del controllo esterno',
      'Presentare istanza per autorizzazione sanitaria di pozzo privato a uso umano',
      'Richiedere sopralluogo in caso di sospetta contaminazione di rete o pozzo',
      'Consultare i bollettini di qualità acqua pubblicati dai gestori e dalla Regione',
    ],
    contattiPubblici: [
      { label: 'ASL Città di Torino - SISP', value: 'vedi centralino ufficiale su aslcittaditorino.it' },
      { label: 'ASL TO3 - Igiene Pubblica', value: 'vedi sito aslto3.piemonte.it' },
      { label: 'Regione Piemonte - Sanità', value: 'vedi portale regione.piemonte.it/web/temi/sanita' },
    ],
    ufficialURL: 'https://www.regione.piemonte.it/web/temi/sanita',
    faqs: [
      {
        q: 'Chi vigila sull acqua di SMAT a Torino?',
        a: 'L ASL Città di Torino effettua il controllo esterno previsto dal D.Lgs. 18/2023; SMAT è il gestore responsabile dei controlli interni.',
      },
      {
        q: 'In Piemonte ci sono problemi di cromo esavalente?',
        a: 'Sì, alcune aree della provincia di Alessandria hanno registrato presenza di cromo VI; le ASL e ARPA Piemonte mantengono monitoraggi mirati.',
      },
      {
        q: 'Come si ottiene il referto dell acqua del rubinetto?',
        a: 'Con richiesta scritta al SISP o SIAN della ASL competente, indicando il comune e l indirizzo di prelievo.',
      },
      {
        q: 'Serve l autorizzazione per un pozzo privato?',
        a: 'Sì, è necessario il parere igienico-sanitario dell ASL e la concessione per derivazione della Regione Piemonte.',
      },
      {
        q: 'Cosa succede se l acqua supera i limiti per un parametro?',
        a: 'L ASL prescrive azioni correttive al gestore e, nei casi più gravi, dispone il divieto temporaneo di uso potabile.',
      },
    ],
    relatedSlugs: ['ats-lombardia', 'ats-valle-aosta', 'ats-liguria'],
  },
  {
    slug: 'ats-veneto',
    region: 'Veneto',
    name: 'ULSS del Veneto',
    shortTitle: 'ULSS Veneto: controllo acqua potabile e PFAS',
    metaDescription:
      'Le ULSS del Veneto (Dolomiti, Marca Trevigiana, Serenissima, Euganea, Polesana, Vicenza, Scaligera, Berica, Pedemontana) controllano l acqua.',
    searchKeywords: [
      'ulss veneto acqua',
      'azienda zero veneto acqua',
      'pfas veneto controllo',
      'sorveglianza legionella veneto',
    ],
    intro:
      'In Veneto la sorveglianza sulle acque destinate al consumo umano è di competenza delle Aziende ULSS: ULSS 1 Dolomiti, ULSS 2 Marca Trevigiana, ULSS 3 Serenissima, ULSS 4 Veneto Orientale, ULSS 5 Polesana, ULSS 6 Euganea, ULSS 7 Pedemontana, ULSS 8 Berica, ULSS 9 Scaligera. Operano sotto il coordinamento di Azienda Zero e in raccordo con ARPAV per i controlli analitici, in particolare per la nota area di contaminazione da PFAS che interessa province di Vicenza, Verona e Padova. I Servizi Igiene degli Alimenti e Nutrizione applicano il D.Lgs. 18/2023, valutano i Piani di Sicurezza dell Acqua dei gestori (Acque Veronesi, Viacqua, ETRA, Veritas) e sorvegliano il rischio legionella negli impianti collettivi.',
    competenze: [
      'Controllo esterno acque potabili ai sensi del D.Lgs. 18/2023',
      'Sorveglianza specifica sull area di contaminazione PFAS in coordinamento con Regione e ARPAV',
      'Sorveglianza legionellosi e ispezioni su impianti idrici di strutture collettive',
      'Pareri sanitari per pozzi privati e captazioni indipendenti',
      'Gestione delle non conformità sui parametri di qualità dell acqua',
      'Valutazione dei Piani di Sicurezza dell Acqua presentati dai gestori del SII',
    ],
    procedureCittadino: [
      'Segnalare alterazioni al gestore (Viacqua, Acque Veronesi, ETRA, Veritas) e in copia al SIAN della propria ULSS',
      'Richiedere referto analitico ufficiale del controllo esterno alla ULSS competente',
      'Aderire al Piano di Sorveglianza Sanitaria PFAS se residente nei comuni dell area rossa/arancione',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato a uso umano',
      'Consultare il portale regionale qualità acque della Regione Veneto',
    ],
    contattiPubblici: [
      { label: 'ULSS 8 Berica - SIAN', value: 'vedi centralino ufficiale su aulss8.veneto.it' },
      { label: 'ULSS 9 Scaligera - URP', value: 'vedi sito aulss9.veneto.it sezione contatti' },
      { label: 'Regione Veneto - Sanità PFAS', value: 'vedi portale regione.veneto.it/web/sanita/pfas' },
    ],
    ufficialURL: 'https://www.regione.veneto.it/web/sanita',
    faqs: [
      {
        q: 'Quante ULSS ci sono in Veneto?',
        a: 'Nove ULSS più Azienda Zero, l ente di governance regionale che coordina amministrazione e logistica sanitaria.',
      },
      {
        q: 'Chi gestisce il piano PFAS in Veneto?',
        a: 'La Regione Veneto coordina il Piano di Sorveglianza Sanitaria PFAS, attuato dalle ULSS 8, 9 e 6 in collaborazione con ARPAV.',
      },
      {
        q: 'Come ottengo il referto dell acqua nel mio comune?',
        a: 'Tramite richiesta al SIAN della ULSS competente o consultando i bollettini pubblicati dai gestori (es. Viacqua, Acque Veronesi).',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione della Regione e parere igienico-sanitario della ULSS competente sul punto di prelievo.',
      },
      {
        q: 'Cosa fa la ULSS in caso di superamento di un parametro?',
        a: 'Prescrive azioni correttive al gestore, può disporre divieto di uso potabile e informa il sindaco.',
      },
    ],
    relatedSlugs: ['ats-friuli-venezia-giulia', 'ats-trentino-alto-adige', 'ats-emilia-romagna'],
  },
  {
    slug: 'ats-campania',
    region: 'Campania',
    name: 'ASL della Campania',
    shortTitle: 'ASL Campania: vigilanza acqua potabile',
    metaDescription:
      'Le ASL della Campania (Napoli 1-3, Caserta, Salerno, Benevento, Avellino) controllano la qualità dell acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'asl campania acqua',
      'asl napoli controllo acqua',
      'sorveglianza legionella campania',
      'acqua potabile salerno caserta',
    ],
    intro:
      'In Campania la sorveglianza sulle acque destinate al consumo umano è affidata alle ASL: ASL Napoli 1 Centro, ASL Napoli 2 Nord, ASL Napoli 3 Sud, ASL Caserta, ASL Salerno, ASL Benevento e ASL Avellino. I controlli esterni sono svolti in raccordo con ARPA Campania e con i gestori del Servizio Idrico Integrato, fra cui ABC Napoli, GORI (area vesuviana e sorrentina), GESESA (Benevento) e altri operatori provinciali. I Servizi Igiene e Sanità Pubblica e i SIAN delle ASL applicano il D.Lgs. 18/2023, gestiscono le non conformità, sorvegliano il rischio legionella e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza sui casi di legionellosi negli impianti idrici collettivi',
      'Gestione delle non conformità e proposta delle azioni correttive al gestore',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori del SII',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore (ABC Napoli, GORI, GESESA) e per conoscenza alla ASL competente',
      'Richiedere copia del referto analitico ufficiale del controllo esterno',
      'Presentare istanza per autorizzazione sanitaria di pozzo privato',
      'Chiedere sopralluogo igienico-sanitario in caso di sospetta contaminazione',
      'Consultare il bollettino qualità acque della Regione Campania e dei gestori',
    ],
    contattiPubblici: [
      { label: 'ASL Napoli 1 Centro - SISP', value: 'vedi centralino ufficiale su aslnapoli1centro.it' },
      { label: 'ASL Salerno - URP', value: 'vedi sito aslsalerno.it sezione contatti' },
      { label: 'Regione Campania - Salute', value: 'vedi portale regione.campania.it/regione/it/tematiche/salute' },
    ],
    ufficialURL: 'https://www.regione.campania.it/regione/it/tematiche/salute',
    faqs: [
      {
        q: 'Quante ASL ci sono in Campania?',
        a: 'Sette: tre nell area di Napoli (1 Centro, 2 Nord, 3 Sud), più Caserta, Salerno, Benevento e Avellino.',
      },
      {
        q: 'Chi controlla l acqua a Napoli?',
        a: 'Il gestore ABC Napoli effettua i controlli interni; ASL Napoli 1 Centro svolge il controllo esterno previsto dal D.Lgs. 18/2023.',
      },
      {
        q: 'Come ottengo il referto dell acqua nel mio comune?',
        a: 'Con richiesta al servizio Igiene e Sanità Pubblica della ASL competente per territorio.',
      },
      {
        q: 'Devo perforare un pozzo per uso potabile?',
        a: 'È necessario il parere igienico-sanitario della ASL e la concessione idrica della Regione Campania.',
      },
      {
        q: 'Cosa succede in caso di non conformità?',
        a: 'La ASL prescrive azioni correttive al gestore e, se necessario, dispone misure di limitazione d uso informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-lazio', 'ats-puglia', 'ats-molise'],
  },
  {
    slug: 'ats-toscana',
    region: 'Toscana',
    name: 'Aziende USL della Toscana',
    shortTitle: 'USL Toscana: controllo acqua potabile e sorveglianza',
    metaDescription:
      'Le Aziende USL Toscana Centro, Nord Ovest e Sud Est vigilano sull acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'asl toscana acqua',
      'usl toscana centro acqua',
      'controllo acqua firenze pisa siena',
      'sorveglianza legionella toscana',
    ],
    intro:
      'In Toscana la sorveglianza igienico-sanitaria delle acque destinate al consumo umano è competenza di tre grandi Aziende USL: Toscana Centro (province di Firenze, Prato e Pistoia), Toscana Nord Ovest (Lucca, Massa-Carrara, Pisa, Livorno) e Toscana Sud Est (Arezzo, Siena, Grosseto). I controlli esterni vengono svolti in raccordo con ARPAT e con il gestore unico Publiacqua, Acque SpA, ASA, GAIA e Acquedotto del Fiora a seconda dell ATO di riferimento. I SISP e i SIAN delle USL applicano il D.Lgs. 18/2023, gestiscono le non conformità (in particolare in aree con tracce di arsenico o boro di origine geotermica), sorvegliano la legionellosi e rilasciano pareri sui pozzi privati.',
    competenze: [
      'Controllo esterno qualità acqua ai sensi del D.Lgs. 18/2023',
      'Vigilanza specifica in aree con problematiche geotermiche (arsenico, boro)',
      'Sorveglianza legionellosi in alberghi, terme, ospedali e strutture collettive',
      'Gestione di non conformità e deroghe sui parametri di qualità',
      'Pareri sanitari per pozzi privati ad uso potabile e captazioni',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori del SII toscani',
    ],
    procedureCittadino: [
      'Segnalare alterazioni al gestore (Publiacqua, Acque SpA, ASA, GAIA, Fiora) e per conoscenza alla USL',
      'Richiedere copia dei referti analitici alla USL competente',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Chiedere sopralluogo in caso di sospetta contaminazione di rete o pozzo',
      'Consultare il portale qualità acque della Regione Toscana e dei gestori',
    ],
    contattiPubblici: [
      { label: 'USL Toscana Centro - URP', value: 'vedi centralino ufficiale su uslcentro.toscana.it' },
      { label: 'USL Toscana Nord Ovest - SISP', value: 'vedi sito uslnordovest.toscana.it' },
      { label: 'USL Toscana Sud Est - URP', value: 'vedi sito uslsudest.toscana.it' },
    ],
    ufficialURL: 'https://www.regione.toscana.it/salute',
    faqs: [
      {
        q: 'Quante USL ci sono in Toscana?',
        a: 'Tre: Toscana Centro, Nord Ovest e Sud Est, istituite dalla riforma regionale del 2015 (L.R. 84/2015).',
      },
      {
        q: 'In Toscana ci sono problemi di arsenico nell acqua?',
        a: 'Sì, alcune aree dell Amiata e del Grossetano hanno acque di origine geotermica con arsenico; sono attivi impianti di trattamento e deroghe regolamentate.',
      },
      {
        q: 'Come ottengo il referto dell acqua?',
        a: 'Con richiesta scritta al SISP/SIAN dell Azienda USL competente per il proprio comune.',
      },
      {
        q: 'Posso usare un pozzo privato per bere?',
        a: 'Solo previa autorizzazione sanitaria della USL competente e concessione idrica della Regione.',
      },
      {
        q: 'Cosa fa la USL in caso di superamento di un parametro?',
        a: 'Prescrive al gestore le azioni correttive e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-umbria', 'ats-emilia-romagna', 'ats-marche'],
  },
  {
    slug: 'ats-emilia-romagna',
    region: 'Emilia-Romagna',
    name: 'AUSL dell Emilia-Romagna',
    shortTitle: 'AUSL Emilia-Romagna: controllo acqua potabile',
    metaDescription:
      'Le AUSL dell Emilia-Romagna (Piacenza, Parma, Reggio, Modena, Bologna, Imola, Ferrara, Romagna) vigilano sull acqua potabile.',
    searchKeywords: [
      'ausl emilia romagna acqua',
      'ausl bologna controllo acqua',
      'sorveglianza legionella emilia',
      'pozzi privati emilia romagna',
    ],
    intro:
      'In Emilia-Romagna la sorveglianza sulle acque destinate al consumo umano è competenza delle AUSL: Piacenza, Parma, Reggio Emilia, Modena, Bologna, Imola, Ferrara e AUSL della Romagna (comprendente Ravenna, Forlì, Cesena e Rimini). I controlli esterni sono svolti in coordinamento con ARPAE Emilia-Romagna e con i gestori del Servizio Idrico Integrato, principalmente HERA (gran parte del territorio), IRETI (Reggio e Parma) e Romagna Acque. I Dipartimenti di Sanità Pubblica delle AUSL applicano il D.Lgs. 18/2023, valutano i Piani di Sicurezza dell Acqua, gestiscono le non conformità, sorvegliano la legionellosi e rilasciano pareri sui pozzi privati.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza legionellosi in strutture turistiche, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso potabile',
      'Gestione delle non conformità (es. nitrati in pianura, arsenico in alcune zone collinari)',
      'Valutazione dei Piani di Sicurezza dell Acqua di HERA, IRETI e Romagna Acque',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie organolettiche al gestore (HERA, IRETI, Romagna Acque) e per conoscenza al DSP della AUSL',
      'Richiedere referto analitico ufficiale alla AUSL competente per territorio',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato a uso umano',
      'Richiedere sopralluogo igienico-sanitario in caso di sospetta contaminazione',
      'Consultare il portale qualità acque della Regione e dei gestori',
    ],
    contattiPubblici: [
      { label: 'AUSL Bologna - DSP', value: 'vedi centralino ufficiale su ausl.bologna.it' },
      { label: 'AUSL Romagna - URP', value: 'vedi sito auslromagna.it sezione contatti' },
      { label: 'Regione Emilia-Romagna - Salute', value: 'vedi portale salute.regione.emilia-romagna.it' },
    ],
    ufficialURL: 'https://salute.regione.emilia-romagna.it',
    faqs: [
      {
        q: 'Quante AUSL ci sono in Emilia-Romagna?',
        a: 'Otto: Piacenza, Parma, Reggio Emilia, Modena, Bologna, Imola, Ferrara e Romagna (unione di Ravenna, Forlì, Cesena, Rimini).',
      },
      {
        q: 'Chi controlla l acqua di HERA?',
        a: 'HERA esegue i controlli interni come gestore; le AUSL effettuano il controllo esterno previsto dal D.Lgs. 18/2023.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con istanza al Dipartimento di Sanità Pubblica della AUSL competente per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione regionale e parere igienico-sanitario della AUSL competente.',
      },
      {
        q: 'Cosa fa la AUSL in caso di non conformità?',
        a: 'Notifica al gestore le azioni correttive e può imporre limitazioni d uso, informando il sindaco quale autorità sanitaria locale.',
      },
    ],
    relatedSlugs: ['ats-lombardia', 'ats-veneto', 'ats-toscana'],
  },
  {
    slug: 'ats-puglia',
    region: 'Puglia',
    name: 'ASL della Puglia',
    shortTitle: 'ASL Puglia: controllo acqua potabile',
    metaDescription:
      'Le ASL della Puglia (Bari, BAT, Brindisi, Foggia, Lecce, Taranto) vigilano sull acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'asl puglia acqua',
      'asl bari controllo acqua',
      'acquedotto pugliese controlli',
      'sorveglianza legionella puglia',
    ],
    intro:
      'In Puglia la sorveglianza sulle acque destinate al consumo umano è affidata alle sei ASL provinciali: ASL Bari, ASL Barletta-Andria-Trani (BAT), ASL Brindisi, ASL Foggia, ASL Lecce e ASL Taranto. Il principale gestore del Servizio Idrico Integrato è Acquedotto Pugliese (AQP), che alimenta tutta la regione e parte di Campania e Basilicata. I controlli esterni vengono svolti in raccordo con ARPA Puglia e con AQP. I Servizi Igiene e Sanità Pubblica e i SIAN applicano il D.Lgs. 18/2023, gestiscono le non conformità (storicamente: salinità, trialometani), sorvegliano la legionellosi negli impianti collettivi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza legionellosi nelle strutture ricettive, RSA e ospedali',
      'Gestione delle non conformità sui sottoprodotti di disinfezione (trialometani)',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Valutazione del Piano di Sicurezza dell Acqua di Acquedotto Pugliese',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore Acquedotto Pugliese (AQP) e per conoscenza al SISP della ASL',
      'Richiedere copia del referto analitico ufficiale del controllo esterno',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Chiedere sopralluogo igienico-sanitario in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità pubblicati da AQP e dalla Regione Puglia',
    ],
    contattiPubblici: [
      { label: 'ASL Bari - SISP', value: 'vedi centralino ufficiale su sanita.puglia.it/web/asl-bari' },
      { label: 'ASL Lecce - URP', value: 'vedi sito sanita.puglia.it/web/asl-lecce' },
      { label: 'Regione Puglia - Salute', value: 'vedi portale sanita.puglia.it' },
    ],
    ufficialURL: 'https://www.sanita.puglia.it',
    faqs: [
      {
        q: 'Quante ASL ci sono in Puglia?',
        a: 'Sei: Bari, BAT (Barletta-Andria-Trani), Brindisi, Foggia, Lecce e Taranto.',
      },
      {
        q: 'Chi è il gestore dell acqua in Puglia?',
        a: 'Il gestore unico regionale è Acquedotto Pugliese (AQP), che opera anche in alcune aree di Campania e Basilicata.',
      },
      {
        q: 'Come ottengo il referto dell acqua nel mio comune?',
        a: 'Con richiesta al SISP della ASL competente o consultando i bollettini pubblici di AQP.',
      },
      {
        q: 'Posso scavare un pozzo per uso potabile?',
        a: 'Sì, ma serve il parere igienico-sanitario della ASL e la concessione idrica della Regione Puglia.',
      },
      {
        q: 'Cosa succede in caso di non conformità?',
        a: 'La ASL impone al gestore azioni correttive e può disporre divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-campania', 'ats-basilicata', 'ats-molise'],
  },
  {
    slug: 'ats-sicilia',
    region: 'Sicilia',
    name: 'ASP della Sicilia',
    shortTitle: 'ASP Sicilia: vigilanza acqua potabile',
    metaDescription:
      'Le ASP della Sicilia (Palermo, Catania, Messina, Trapani, Agrigento, Caltanissetta, Enna, Ragusa, Siracusa) controllano l acqua potabile.',
    searchKeywords: [
      'asp sicilia acqua',
      'asp palermo controllo acqua',
      'sorveglianza legionella sicilia',
      'acqua potabile catania messina',
    ],
    intro:
      'In Sicilia la sorveglianza sulle acque destinate al consumo umano è competenza delle Aziende Sanitarie Provinciali (ASP): ASP Palermo, ASP Catania, ASP Messina, ASP Trapani, ASP Agrigento, ASP Caltanissetta, ASP Enna, ASP Ragusa e ASP Siracusa. I controlli sono svolti in raccordo con ARPA Sicilia e con i gestori del Servizio Idrico Integrato (es. AMAP a Palermo, Acoset/SIE a Catania, AcquaEnna). I Servizi di Igiene e Sanità Pubblica e i SIAN applicano il D.Lgs. 18/2023, gestiscono le non conformità (storicamente cloruri elevati in alcune zone costiere), sorvegliano la legionellosi negli impianti idrici collettivi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile secondo D.Lgs. 18/2023',
      'Sorveglianza legionellosi nelle strutture ricettive turistiche, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione di non conformità (cloruri, sodio in aree costiere, trialometani)',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori siciliani',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore (AMAP, Acoset, AcquaEnna, Siciliacque) e per conoscenza alla ASP',
      'Richiedere copia del referto analitico ufficiale alla ASP competente',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato a uso potabile',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità pubblicati dai gestori e dalla Regione Sicilia',
    ],
    contattiPubblici: [
      { label: 'ASP Palermo - SISP', value: 'vedi centralino ufficiale su asppalermo.org' },
      { label: 'ASP Catania - URP', value: 'vedi sito aspct.it sezione contatti' },
      { label: 'Regione Sicilia - Salute', value: 'vedi portale regione.sicilia.it/istituzioni/regione/strutture-regionali/assessorato-salute' },
    ],
    ufficialURL: 'https://www.regione.sicilia.it',
    faqs: [
      {
        q: 'Quante ASP ci sono in Sicilia?',
        a: 'Nove, una per provincia: Palermo, Catania, Messina, Trapani, Agrigento, Caltanissetta, Enna, Ragusa, Siracusa.',
      },
      {
        q: 'Chi gestisce l acqua a Palermo?',
        a: 'AMAP SpA è il gestore del Servizio Idrico Integrato per la città di Palermo e parte della provincia.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al SISP/SIAN della ASP competente per il proprio comune.',
      },
      {
        q: 'Posso usare un pozzo privato per uso potabile?',
        a: 'Solo previa autorizzazione sanitaria della ASP e concessione idrica della Regione Sicilia.',
      },
      {
        q: 'Cosa succede in caso di non conformità?',
        a: 'La ASP impone azioni correttive al gestore e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-calabria', 'ats-sardegna', 'ats-puglia'],
  },
  {
    slug: 'ats-sardegna',
    region: 'Sardegna',
    name: 'ASL della Sardegna',
    shortTitle: 'ASL Sardegna: controllo acqua potabile',
    metaDescription:
      'Le ASL della Sardegna (Sassari, Gallura, Nuoro, Ogliastra, Oristano, Medio Campidano, Cagliari, Sulcis) vigilano sull acqua potabile.',
    searchKeywords: [
      'asl sardegna acqua',
      'ats sardegna acqua',
      'abbanoa controlli',
      'sorveglianza legionella sardegna',
    ],
    intro:
      'In Sardegna la sorveglianza sulle acque destinate al consumo umano è competenza delle ASL territoriali, riorganizzate dalla L.R. 24/2020 in otto Aziende Sanitarie Locali: Sassari, Gallura, Nuoro, Ogliastra, Oristano, Medio Campidano, Cagliari e Sulcis. Il gestore unico regionale del Servizio Idrico Integrato è Abbanoa SpA, che alimenta la quasi totalità dei comuni. I controlli esterni sono svolti in raccordo con ARPAS. I Servizi di Igiene e Sanità Pubblica delle ASL applicano il D.Lgs. 18/2023, gestiscono le non conformità (storicamente: trialometani, durezza, arsenico in alcune captazioni), sorvegliano la legionellosi negli impianti collettivi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza legionellosi in strutture ricettive turistiche, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità su trialometani, durezza, arsenico in aree specifiche',
      'Valutazione del Piano di Sicurezza dell Acqua di Abbanoa',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie organolettiche al gestore Abbanoa e per conoscenza alla ASL competente',
      'Richiedere copia del referto analitico ufficiale del controllo esterno alla ASL',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità pubblicati da Abbanoa per il proprio comune',
    ],
    contattiPubblici: [
      { label: 'ASL Cagliari - SISP', value: 'vedi centralino ufficiale su aslcagliari.it' },
      { label: 'ASL Sassari - URP', value: 'vedi sito aslsassari.it sezione contatti' },
      { label: 'Regione Sardegna - Sanità', value: 'vedi portale regione.sardegna.it/regione/assessorati/sanita' },
    ],
    ufficialURL: 'https://www.regione.sardegna.it',
    faqs: [
      {
        q: 'Quante ASL ci sono in Sardegna?',
        a: 'Otto, istituite con L.R. 24/2020 che ha riorganizzato la sanità regionale superando ATS Sardegna.',
      },
      {
        q: 'Chi gestisce l acqua in Sardegna?',
        a: 'Abbanoa SpA è il gestore unico regionale del Servizio Idrico Integrato per la quasi totalità dei comuni.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al SISP della ASL competente o consultando i bollettini di Abbanoa per ogni comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario della ASL competente.',
      },
      {
        q: 'Cosa fa la ASL in caso di superamento di un parametro?',
        a: 'Prescrive azioni correttive al gestore e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-sicilia', 'ats-liguria', 'ats-toscana'],
  },
  {
    slug: 'ats-liguria',
    region: 'Liguria',
    name: 'ASL della Liguria',
    shortTitle: 'ASL Liguria: controllo acqua potabile',
    metaDescription:
      'Le ASL della Liguria (Imperiese, Savonese, Genovese, Chiavarese, Spezzino) vigilano sull acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'asl liguria acqua',
      'asl 3 genova controllo acqua',
      'sorveglianza legionella liguria',
      'pozzi privati liguria',
    ],
    intro:
      'In Liguria la sorveglianza sulle acque destinate al consumo umano è competenza delle cinque ASL territoriali: ASL 1 Imperiese, ASL 2 Savonese, ASL 3 Genovese (con A.Li.Sa. come agenzia regionale di coordinamento), ASL 4 Chiavarese e ASL 5 Spezzino. I controlli esterni vengono svolti in raccordo con ARPAL e con i principali gestori del Servizio Idrico Integrato, fra cui IRETI (Genova), AMAT, AMTER e altri operatori locali. I Servizi Igiene e Sanità Pubblica delle ASL applicano il D.Lgs. 18/2023, gestiscono le non conformità (in alcune zone trialometani e nitrati), sorvegliano la legionellosi negli impianti idrici collettivi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza legionellosi nelle strutture ricettive della riviera, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione di non conformità su trialometani, nitrati e sodio in zone specifiche',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori liguri',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore (IRETI, AMAT, AMTER) e per conoscenza al SISP della ASL',
      'Richiedere copia del referto analitico ufficiale alla ASL competente',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità dei gestori e di A.Li.Sa.',
    ],
    contattiPubblici: [
      { label: 'ASL 3 Genovese - SISP', value: 'vedi centralino ufficiale su asl3.liguria.it' },
      { label: 'A.Li.Sa. - URP', value: 'vedi sito alisa.liguria.it sezione contatti' },
      { label: 'Regione Liguria - Salute', value: 'vedi portale regione.liguria.it/temi/salute' },
    ],
    ufficialURL: 'https://www.alisa.liguria.it',
    faqs: [
      {
        q: 'Quante ASL ci sono in Liguria?',
        a: 'Cinque: ASL 1 Imperiese, ASL 2 Savonese, ASL 3 Genovese, ASL 4 Chiavarese, ASL 5 Spezzino, coordinate da A.Li.Sa.',
      },
      {
        q: 'Cos è A.Li.Sa.?',
        a: 'Azienda Ligure Sanitaria, l ente regionale che coordina la programmazione e la sorveglianza sanitaria delle ASL liguri.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al SISP della ASL competente per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario della ASL competente.',
      },
      {
        q: 'Cosa fa la ASL in caso di non conformità?',
        a: 'Prescrive al gestore azioni correttive e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-piemonte', 'ats-toscana', 'ats-emilia-romagna'],
  },
  {
    slug: 'ats-marche',
    region: 'Marche',
    name: 'AST delle Marche',
    shortTitle: 'AST Marche: controllo acqua potabile',
    metaDescription:
      'Le AST delle Marche (Pesaro-Urbino, Ancona, Macerata, Fermo, Ascoli Piceno) vigilano sull acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'ast marche acqua',
      'asur marche acqua',
      'sorveglianza legionella marche',
      'pozzi privati marche',
    ],
    intro:
      'Nelle Marche la sorveglianza sulle acque destinate al consumo umano è competenza delle cinque Aziende Sanitarie Territoriali (AST), istituite con la L.R. 19/2022 in sostituzione dell ASUR: AST Pesaro-Urbino, AST Ancona, AST Macerata, AST Fermo e AST Ascoli Piceno. I controlli esterni sono svolti in raccordo con ARPAM e con i gestori del Servizio Idrico Integrato (Marche Multiservizi a Pesaro, Multiservizi Spa ad Ancona, ASTEA, CIIP, ecc.). I Servizi Igiene e Sanità Pubblica e i SIAN applicano il D.Lgs. 18/2023, gestiscono le non conformità, sorvegliano la legionellosi negli impianti collettivi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza legionellosi nelle strutture ricettive della riviera, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità sui parametri di qualità',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori marchigiani',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore (Multiservizi, Marche Multiservizi, ASTEA, CIIP) e per conoscenza alla AST',
      'Richiedere copia del referto analitico ufficiale alla AST competente',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato a uso potabile',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità dei gestori e della Regione Marche',
    ],
    contattiPubblici: [
      { label: 'AST Ancona - SISP', value: 'vedi centralino ufficiale su ast-an.sanita.marche.it' },
      { label: 'AST Pesaro-Urbino - URP', value: 'vedi sito ast-pu.sanita.marche.it' },
      { label: 'Regione Marche - Salute', value: 'vedi portale regione.marche.it/Regione-Utile/Salute' },
    ],
    ufficialURL: 'https://www.regione.marche.it/Regione-Utile/Salute',
    faqs: [
      {
        q: 'Cosa è cambiato con la riforma ASUR?',
        a: 'La L.R. 19/2022 ha sostituito ASUR e le sue Aree Vaste con cinque AST provinciali, con compiti di assistenza e sorveglianza igienico-sanitaria.',
      },
      {
        q: 'Quante AST ci sono nelle Marche?',
        a: 'Cinque, una per ciascuna provincia: Pesaro-Urbino, Ancona, Macerata, Fermo, Ascoli Piceno.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta scritta al SISP/SIAN della AST competente per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario della AST competente.',
      },
      {
        q: 'Cosa fa la AST in caso di non conformità?',
        a: 'Prescrive azioni correttive al gestore e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-umbria', 'ats-abruzzo', 'ats-emilia-romagna'],
  },
  {
    slug: 'ats-abruzzo',
    region: 'Abruzzo',
    name: 'ASL dell Abruzzo',
    shortTitle: 'ASL Abruzzo: controllo acqua potabile',
    metaDescription:
      'Le ASL dell Abruzzo (Avezzano-Sulmona-L Aquila, Chieti, Lanciano-Vasto-Chieti, Pescara, Teramo) controllano la qualità dell acqua.',
    searchKeywords: [
      'asl abruzzo acqua',
      'asl pescara controllo acqua',
      'sorveglianza legionella abruzzo',
      'pozzi privati abruzzo',
    ],
    intro:
      'In Abruzzo la sorveglianza sulle acque destinate al consumo umano è competenza delle quattro ASL territoriali: ASL 1 Avezzano-Sulmona-L Aquila, ASL 2 Lanciano-Vasto-Chieti, ASL 3 Pescara e ASL 4 Teramo. I controlli esterni sono svolti in raccordo con ARTA Abruzzo e con i gestori del Servizio Idrico Integrato (Ruzzo Reti a Teramo, ACA a Pescara, SACA, SASI, GSA per le altre aree). I Servizi Igiene e Sanità Pubblica delle ASL applicano il D.Lgs. 18/2023, gestiscono le non conformità (storicamente si è registrato il problema delle captazioni del Gran Sasso e dei laboratori INFN), sorvegliano la legionellosi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Vigilanza specifica sulle captazioni del Gran Sasso in raccordo con ARTA',
      'Sorveglianza legionellosi nelle strutture ricettive, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità sui parametri di qualità',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori abruzzesi',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore (Ruzzo Reti, ACA, SASI, SACA) e per conoscenza al SISP della ASL',
      'Richiedere copia del referto analitico ufficiale del controllo esterno alla ASL',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità dei gestori e della Regione Abruzzo',
    ],
    contattiPubblici: [
      { label: 'ASL Pescara - SISP', value: 'vedi centralino ufficiale su asl.pe.it' },
      { label: 'ASL Teramo - URP', value: 'vedi sito aslteramo.it sezione contatti' },
      { label: 'Regione Abruzzo - Salute', value: 'vedi portale sanita.regione.abruzzo.it' },
    ],
    ufficialURL: 'https://sanita.regione.abruzzo.it',
    faqs: [
      {
        q: 'Quante ASL ci sono in Abruzzo?',
        a: 'Quattro: ASL 1 L Aquila-Avezzano-Sulmona, ASL 2 Lanciano-Vasto-Chieti, ASL 3 Pescara, ASL 4 Teramo.',
      },
      {
        q: 'Esiste un rischio per le captazioni del Gran Sasso?',
        a: 'Sì, le interazioni con i laboratori INFN sono monitorate da ARTA e dalle ASL competenti con piani specifici.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al SISP della ASL competente per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario della ASL competente.',
      },
      {
        q: 'Cosa fa la ASL in caso di non conformità?',
        a: 'Prescrive al gestore azioni correttive e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-marche', 'ats-molise', 'ats-lazio'],
  },
  {
    slug: 'ats-molise',
    region: 'Molise',
    name: 'ASReM - Azienda Sanitaria Regionale del Molise',
    shortTitle: 'ASReM Molise: controllo acqua potabile',
    metaDescription:
      'L Azienda Sanitaria Regionale del Molise (ASReM) vigila sull acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'asrem molise acqua',
      'controllo acqua campobasso',
      'sorveglianza legionella molise',
      'pozzi privati molise',
    ],
    intro:
      'In Molise la sorveglianza sulle acque destinate al consumo umano è competenza dell ASReM, Azienda Sanitaria Regionale del Molise, unica azienda sanitaria regionale articolata sui distretti di Campobasso, Termoli, Isernia e Larino. I controlli esterni sono svolti in raccordo con ARPA Molise e con i gestori del Servizio Idrico Integrato come Molise Acque, l ente regionale che gestisce gli adduttori principali, e i gestori comunali per le reti di distribuzione. Il Dipartimento di Prevenzione di ASReM, attraverso il SISP e il SIAN, applica il D.Lgs. 18/2023, gestisce le non conformità, sorveglia la legionellosi negli impianti collettivi e rilascia i pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile secondo D.Lgs. 18/2023',
      'Sorveglianza legionellosi in strutture ricettive, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità sui parametri di qualità',
      'Valutazione dei Piani di Sicurezza dell Acqua di Molise Acque e gestori comunali',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore comunale e per conoscenza al SISP di ASReM',
      'Richiedere copia del referto analitico ufficiale al Dipartimento di Prevenzione di ASReM',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità di Molise Acque e dei gestori comunali',
    ],
    contattiPubblici: [
      { label: 'ASReM - Dipartimento Prevenzione', value: 'vedi centralino ufficiale su asrem.org' },
      { label: 'Molise Acque', value: 'vedi sito moliseacque.com' },
      { label: 'Regione Molise - Sanità', value: 'vedi portale regione.molise.it/web/grm/sanita' },
    ],
    ufficialURL: 'https://www.asrem.org',
    faqs: [
      {
        q: 'Quante ASL ci sono in Molise?',
        a: 'Una sola, ASReM (Azienda Sanitaria Regionale del Molise), articolata sui distretti di Campobasso, Termoli, Isernia e Larino.',
      },
      {
        q: 'Chi gestisce l acqua in Molise?',
        a: 'Molise Acque gestisce gli adduttori regionali; la distribuzione comunale è in capo ai singoli gestori locali.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al Dipartimento di Prevenzione di ASReM per il distretto competente.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario di ASReM.',
      },
      {
        q: 'Cosa fa ASReM in caso di non conformità?',
        a: 'Prescrive al gestore le azioni correttive e può disporre divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-abruzzo', 'ats-campania', 'ats-puglia'],
  },
  {
    slug: 'ats-basilicata',
    region: 'Basilicata',
    name: 'ASL della Basilicata',
    shortTitle: 'ASL Basilicata: controllo acqua potabile',
    metaDescription:
      'Le ASL della Basilicata (ASP Potenza e ASM Matera) vigilano sull acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'asl basilicata acqua',
      'asp potenza acqua',
      'asm matera acqua',
      'sorveglianza legionella basilicata',
    ],
    intro:
      'In Basilicata la sorveglianza sulle acque destinate al consumo umano è competenza delle due Aziende Sanitarie regionali: ASP - Azienda Sanitaria Locale di Potenza, e ASM - Azienda Sanitaria Locale di Matera. I controlli esterni vengono svolti in raccordo con ARPA Basilicata e con il gestore del Servizio Idrico Integrato Acquedotto Lucano SpA, che alimenta la quasi totalità dei comuni della regione. I Servizi Igiene e Sanità Pubblica e i SIAN applicano il D.Lgs. 18/2023, valutano i Piani di Sicurezza dell Acqua, gestiscono le non conformità, sorvegliano la legionellosi negli impianti collettivi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza legionellosi nelle strutture ricettive, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità sui parametri di qualità dell acqua',
      'Valutazione del Piano di Sicurezza dell Acqua di Acquedotto Lucano',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore Acquedotto Lucano e per conoscenza al SISP della ASL',
      'Richiedere copia del referto analitico ufficiale alla ASP Potenza o ASM Matera',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità di Acquedotto Lucano per il proprio comune',
    ],
    contattiPubblici: [
      { label: 'ASP Potenza - SISP', value: 'vedi centralino ufficiale su aspbasilicata.it' },
      { label: 'ASM Matera - URP', value: 'vedi sito asmbasilicata.it sezione contatti' },
      { label: 'Regione Basilicata - Sanità', value: 'vedi portale regione.basilicata.it' },
    ],
    ufficialURL: 'https://www.aspbasilicata.it',
    faqs: [
      {
        q: 'Quante ASL ci sono in Basilicata?',
        a: 'Due: ASP Potenza e ASM Matera, una per ciascuna provincia.',
      },
      {
        q: 'Chi gestisce l acqua in Basilicata?',
        a: 'Acquedotto Lucano SpA è il gestore unico regionale del Servizio Idrico Integrato.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al SISP della ASL competente per il proprio comune (ASP per la provincia di Potenza, ASM per quella di Matera).',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario della ASL competente.',
      },
      {
        q: 'Cosa fa la ASL in caso di non conformità?',
        a: 'Prescrive al gestore azioni correttive e può disporre divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-puglia', 'ats-calabria', 'ats-campania'],
  },
  {
    slug: 'ats-calabria',
    region: 'Calabria',
    name: 'ASP della Calabria',
    shortTitle: 'ASP Calabria: controllo acqua potabile',
    metaDescription:
      'Le ASP della Calabria (Catanzaro, Cosenza, Crotone, Reggio Calabria, Vibo Valentia) vigilano sull acqua potabile.',
    searchKeywords: [
      'asp calabria acqua',
      'controllo acqua cosenza catanzaro',
      'sorveglianza legionella calabria',
      'pozzi privati calabria',
    ],
    intro:
      'In Calabria la sorveglianza sulle acque destinate al consumo umano è competenza delle cinque Aziende Sanitarie Provinciali (ASP): ASP Catanzaro, ASP Cosenza, ASP Crotone, ASP Reggio Calabria e ASP Vibo Valentia. I controlli esterni sono svolti in raccordo con ARPACAL e con il gestore Sorical SpA per gli adduttori regionali, oltre ai gestori comunali per la distribuzione. I Servizi Igiene e Sanità Pubblica e i SIAN delle ASP applicano il D.Lgs. 18/2023, gestiscono le non conformità (storicamente: ferro, manganese e parametri microbiologici in alcune aree interne), sorvegliano la legionellosi negli impianti collettivi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza legionellosi nelle strutture ricettive, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità su ferro, manganese e parametri microbiologici',
      'Valutazione dei Piani di Sicurezza dell Acqua di Sorical e gestori comunali',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore comunale e per conoscenza al SISP della ASP competente',
      'Richiedere copia del referto analitico ufficiale alla ASP competente',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità pubblicati dai gestori e dalla Regione Calabria',
    ],
    contattiPubblici: [
      { label: 'ASP Cosenza - SISP', value: 'vedi centralino ufficiale su asp.cosenza.it' },
      { label: 'ASP Catanzaro - URP', value: 'vedi sito asp.cz.it sezione contatti' },
      { label: 'Regione Calabria - Salute', value: 'vedi portale regione.calabria.it/website/portalmedia/area-tematica-salute' },
    ],
    ufficialURL: 'https://www.regione.calabria.it',
    faqs: [
      {
        q: 'Quante ASP ci sono in Calabria?',
        a: 'Cinque, una per provincia: Catanzaro, Cosenza, Crotone, Reggio Calabria e Vibo Valentia.',
      },
      {
        q: 'Chi gestisce gli adduttori in Calabria?',
        a: 'Sorical SpA gestisce gli schemi idrici regionali; la distribuzione comunale è in capo ai singoli gestori locali.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al SISP della ASP competente per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario della ASP competente.',
      },
      {
        q: 'Cosa fa la ASP in caso di non conformità?',
        a: 'Prescrive al gestore azioni correttive e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-sicilia', 'ats-basilicata', 'ats-puglia'],
  },
  {
    slug: 'ats-umbria',
    region: 'Umbria',
    name: 'USL dell Umbria',
    shortTitle: 'USL Umbria: controllo acqua potabile',
    metaDescription:
      'Le USL Umbria 1 e Umbria 2 vigilano sull acqua potabile ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'usl umbria acqua',
      'usl umbria 1 controllo acqua',
      'sorveglianza legionella umbria',
      'pozzi privati umbria',
    ],
    intro:
      'In Umbria la sorveglianza sulle acque destinate al consumo umano è competenza delle due Aziende USL regionali: USL Umbria 1 (province di Perugia, Alto Tevere, Trasimeno, Assisano) e USL Umbria 2 (province di Terni, Foligno, Spoleto, Orvieto). I controlli esterni sono svolti in raccordo con ARPA Umbria e con i gestori del Servizio Idrico Integrato Umbra Acque (ATO 1 e 2) e Servizio Idrico Integrato di Terni. I Servizi Igiene e Sanità Pubblica e i SIAN applicano il D.Lgs. 18/2023, gestiscono le non conformità (in alcune zone: arsenico di origine geologica, soprattutto nell area di Castel Giorgio-Bagnoregio), sorvegliano la legionellosi negli impianti collettivi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Vigilanza specifica sull arsenico di origine geologica nelle aree vulcaniche umbre',
      'Sorveglianza legionellosi nelle strutture ricettive, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Valutazione dei Piani di Sicurezza dell Acqua di Umbra Acque e SII Terni',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore (Umbra Acque o SII Terni) e per conoscenza al SISP della USL',
      'Richiedere copia del referto analitico ufficiale alla USL competente',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità dei gestori e della Regione Umbria',
    ],
    contattiPubblici: [
      { label: 'USL Umbria 1 - SISP', value: 'vedi centralino ufficiale su uslumbria1.gov.it' },
      { label: 'USL Umbria 2 - URP', value: 'vedi sito uslumbria2.it sezione contatti' },
      { label: 'Regione Umbria - Salute', value: 'vedi portale regione.umbria.it' },
    ],
    ufficialURL: 'https://www.regione.umbria.it',
    faqs: [
      {
        q: 'Quante USL ci sono in Umbria?',
        a: 'Due: USL Umbria 1 (Perugia e provincia) e USL Umbria 2 (Terni e provincia).',
      },
      {
        q: 'In Umbria ci sono problemi di arsenico?',
        a: 'Sì, in alcune aree di origine vulcanica (Castel Giorgio, Orvietano) sono attive procedure di dearsenificazione per rientrare nei limiti di legge.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al SISP della USL competente per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario della USL competente.',
      },
      {
        q: 'Cosa fa la USL in caso di non conformità?',
        a: 'Prescrive al gestore azioni correttive e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-marche', 'ats-toscana', 'ats-lazio'],
  },
  {
    slug: 'ats-trentino-alto-adige',
    region: 'Trentino-Alto Adige',
    name: 'APSS Trento e Azienda Sanitaria Alto Adige',
    shortTitle: 'APSS e ASAA: controllo acqua potabile',
    metaDescription:
      'APSS Trento e Azienda Sanitaria Alto Adige (Sabes) vigilano sull acqua potabile in Trentino e Alto Adige.',
    searchKeywords: [
      'apss trento acqua',
      'azienda sanitaria alto adige acqua',
      'sabes acqua bolzano',
      'sorveglianza legionella trentino',
    ],
    intro:
      'In Trentino-Alto Adige la sorveglianza sulle acque destinate al consumo umano è competenza delle due aziende sanitarie provinciali autonome: APSS - Azienda Provinciale per i Servizi Sanitari di Trento e Azienda Sanitaria dell Alto Adige (Sabes-ASAA) di Bolzano. Le due Province autonome legiferano in materia sanitaria con norme proprie integrative del D.Lgs. 18/2023. I controlli esterni sono svolti in raccordo con APPA Trento e APPA Bolzano e con i numerosi gestori del Servizio Idrico, spesso comuni o consorzi BIM. I servizi igiene pubblica applicano la normativa, valutano i Piani di Sicurezza dell Acqua, gestiscono non conformità, sorvegliano la legionellosi e rilasciano pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023 e norme provinciali',
      'Sorveglianza legionellosi nelle strutture ricettive turistiche, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità sui parametri di qualità',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori comunali e consorziati',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore comunale o consorzio e per conoscenza al servizio igiene pubblica',
      'Richiedere copia del referto analitico ufficiale ad APSS o Sabes-ASAA',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità delle Province autonome e dei gestori',
    ],
    contattiPubblici: [
      { label: 'APSS Trento - Igiene Pubblica', value: 'vedi centralino ufficiale su apss.tn.it' },
      { label: 'Sabes-ASAA Bolzano - URP', value: 'vedi sito sabes.it sezione contatti' },
      { label: 'Provincia Autonoma di Trento - Salute', value: 'vedi portale provincia.tn.it/Argomenti/Salute' },
    ],
    ufficialURL: 'https://www.apss.tn.it',
    faqs: [
      {
        q: 'Perché in Trentino-Alto Adige ci sono due aziende sanitarie?',
        a: 'Perché le due Province autonome di Trento e Bolzano hanno potestà legislativa in materia sanitaria e ciascuna ha la propria azienda.',
      },
      {
        q: 'Cosa è Sabes?',
        a: 'Sabes (Südtiroler Sanitätsbetrieb) è l Azienda Sanitaria dell Alto Adige, unica azienda della Provincia autonoma di Bolzano.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al servizio igiene pubblica di APSS (Trento) o Sabes (Bolzano) per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione della Provincia autonoma competente e parere igienico-sanitario.',
      },
      {
        q: 'Cosa succede in caso di non conformità?',
        a: 'Il servizio igiene pubblica prescrive azioni correttive al gestore e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-veneto', 'ats-friuli-venezia-giulia', 'ats-lombardia'],
  },
  {
    slug: 'ats-friuli-venezia-giulia',
    region: 'Friuli-Venezia Giulia',
    name: 'ASUFC, ASUGI e ASFO',
    shortTitle: 'Aziende sanitarie FVG: controllo acqua potabile',
    metaDescription:
      'ASUFC (Udine), ASUGI (Trieste-Gorizia) e ASFO (Pordenone) vigilano sull acqua potabile in Friuli-Venezia Giulia.',
    searchKeywords: [
      'asufc udine acqua',
      'asugi trieste acqua',
      'asfo pordenone acqua',
      'sorveglianza legionella friuli',
    ],
    intro:
      'In Friuli-Venezia Giulia la sorveglianza sulle acque destinate al consumo umano è competenza delle tre Aziende sanitarie regionali: ASUFC - Azienda Sanitaria Universitaria Friuli Centrale (Udine), ASUGI - Azienda Sanitaria Universitaria Giuliano Isontina (Trieste e Gorizia) e ASFO - Azienda Sanitaria Friuli Occidentale (Pordenone). I controlli esterni sono svolti in raccordo con ARPA FVG e con i gestori del Servizio Idrico Integrato: CAFC (Friuli Centrale), AcegasApsAmga (Trieste), HydroGEA (Pordenone), Acquedotto Poiana. I Dipartimenti di Prevenzione applicano il D.Lgs. 18/2023, valutano i Piani di Sicurezza dell Acqua, gestiscono non conformità, sorvegliano la legionellosi e rilasciano pareri sui pozzi privati.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023',
      'Sorveglianza legionellosi nelle strutture ricettive, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità (storicamente solventi clorurati in parte della bassa friulana)',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori del SII regionali',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore (CAFC, AcegasApsAmga, HydroGEA) e per conoscenza al Dipartimento di Prevenzione',
      'Richiedere copia del referto analitico ufficiale all azienda sanitaria competente',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità dei gestori e della Regione FVG',
    ],
    contattiPubblici: [
      { label: 'ASUFC Udine - Dip. Prevenzione', value: 'vedi centralino ufficiale su asufc.sanita.fvg.it' },
      { label: 'ASUGI Trieste - URP', value: 'vedi sito asugi.sanita.fvg.it sezione contatti' },
      { label: 'ASFO Pordenone - URP', value: 'vedi sito asfo.sanita.fvg.it' },
    ],
    ufficialURL: 'https://www.regione.fvg.it/rafvg/cms/RAFVG/salute-sociale',
    faqs: [
      {
        q: 'Quante aziende sanitarie ci sono in FVG?',
        a: 'Tre: ASUFC (Udine), ASUGI (Trieste e Gorizia) e ASFO (Pordenone), istituite dalla L.R. 27/2018.',
      },
      {
        q: 'Esiste un problema di solventi clorurati in Friuli?',
        a: 'Sì, in alcune zone della bassa friulana e dell area pordenonese sono state rilevate contaminazioni storiche, oggi monitorate con piani specifici.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al Dipartimento di Prevenzione dell azienda sanitaria competente per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario dell azienda sanitaria competente.',
      },
      {
        q: 'Cosa fa l azienda sanitaria in caso di non conformità?',
        a: 'Prescrive al gestore azioni correttive e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-veneto', 'ats-trentino-alto-adige', 'ats-emilia-romagna'],
  },
  {
    slug: 'ats-valle-aosta',
    region: 'Valle d Aosta',
    name: 'Azienda USL della Valle d Aosta',
    shortTitle: 'USL Valle d Aosta: controllo acqua potabile',
    metaDescription:
      'L Azienda USL della Valle d Aosta vigila sull acqua potabile in tutti i comuni della regione ai sensi del D.Lgs. 18/2023.',
    searchKeywords: [
      'usl valle aosta acqua',
      'controllo acqua aosta',
      'sorveglianza legionella valle aosta',
      'pozzi privati valle aosta',
    ],
    intro:
      'In Valle d Aosta la sorveglianza sulle acque destinate al consumo umano è competenza dell unica Azienda USL della Valle d Aosta, articolata su tutto il territorio regionale. La Regione autonoma legifera in materia sanitaria con norme proprie integrative del D.Lgs. 18/2023. I controlli esterni sono svolti in raccordo con ARPA Valle d Aosta e con i numerosi gestori comunali e consortili del Servizio Idrico, in particolare il BIM e i sub-ambiti del SII regionale. Il servizio igiene pubblica del Dipartimento di Prevenzione applica la normativa, valuta i Piani di Sicurezza dell Acqua, gestisce le non conformità, sorveglia la legionellosi negli impianti collettivi e rilascia i pareri sui pozzi privati ad uso potabile.',
    competenze: [
      'Controllo esterno qualità acqua potabile ai sensi del D.Lgs. 18/2023 e norme regionali',
      'Sorveglianza legionellosi nelle strutture ricettive turistiche, RSA e ospedali',
      'Pareri sanitari per autorizzazione di pozzi privati ad uso umano',
      'Gestione delle non conformità sui parametri di qualità',
      'Valutazione dei Piani di Sicurezza dell Acqua dei gestori comunali',
      'Vigilanza sui materiali a contatto con acqua destinata al consumo umano',
    ],
    procedureCittadino: [
      'Segnalare anomalie al gestore comunale o consorziato e per conoscenza al servizio igiene pubblica USL',
      'Richiedere copia del referto analitico ufficiale all Azienda USL della Valle d Aosta',
      'Presentare istanza di autorizzazione sanitaria per pozzo privato',
      'Richiedere sopralluogo in caso di sospetta contaminazione',
      'Consultare i bollettini di qualità della Regione Autonoma Valle d Aosta',
    ],
    contattiPubblici: [
      { label: 'USL Valle d Aosta - Igiene Pubblica', value: 'vedi centralino ufficiale su ausl.vda.it' },
      { label: 'Regione Valle d Aosta - Sanità', value: 'vedi portale regione.vda.it/sanita' },
    ],
    ufficialURL: 'https://www.ausl.vda.it',
    faqs: [
      {
        q: 'Quante USL ci sono in Valle d Aosta?',
        a: 'Una sola, l Azienda USL della Valle d Aosta, che copre l intero territorio della Regione autonoma.',
      },
      {
        q: 'Chi gestisce l acqua nei comuni valdostani?',
        a: 'In genere i comuni stessi o consorzi (BIM e sub-ambiti del SII regionale), data la frammentazione orografica del territorio.',
      },
      {
        q: 'Come ottengo il referto dell acqua del rubinetto?',
        a: 'Con richiesta al servizio igiene pubblica dell Azienda USL Valle d Aosta per il proprio comune.',
      },
      {
        q: 'Posso perforare un pozzo per uso potabile?',
        a: 'Sì, previa concessione idrica regionale e parere igienico-sanitario dell Azienda USL.',
      },
      {
        q: 'Cosa fa la USL in caso di non conformità?',
        a: 'Prescrive al gestore azioni correttive e può disporre il divieto di uso potabile informando il sindaco.',
      },
    ],
    relatedSlugs: ['ats-piemonte', 'ats-lombardia', 'ats-trentino-alto-adige'],
  },
];

const ATS_BY_SLUG: Map<string, ATSRegionale> = new Map(
  ATS_REGIONALI.map((ats) => [ats.slug, ats]),
);

export function getATSBySlug(slug: string): ATSRegionale | undefined {
  return ATS_BY_SLUG.get(slug);
}
