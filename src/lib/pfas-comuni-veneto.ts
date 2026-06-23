export interface PFASComune {
  slug: string;
  name: string;
  province: 'VI' | 'VR' | 'PD';
  zone: 'rossa' | 'arancione' | 'gialla';
  population: number;
  shortTitle: string;
  metaDescription: string;
  intro: string;
  publicReferences: { label: string; url: string }[];
}

const REGIONE_VENETO_PFAS = 'https://www.regione.veneto.it/web/sanita/pfas';
const ISS_PFAS = 'https://www.iss.it/inquinamento-da-pfas';
const ARPAV_PFAS = 'https://www.arpa.veneto.it/temi-ambientali/acqua/pfas';
const MASTRANTONIO_2018 =
  'https://pubmed.ncbi.nlm.nih.gov/29216971/';
const PIANO_SORVEGLIANZA_VENETO =
  'https://www.regione.veneto.it/web/sanita/piano-sorveglianza-pfas';

export const PFAS_COMUNI: PFASComune[] = [
  // ============== AREA ROSSA ==============
  {
    slug: 'comune-brendola',
    name: 'Brendola',
    province: 'VI',
    zone: 'rossa',
    population: 6800,
    shortTitle: 'Acqua a Brendola (VI): contaminazione PFAS area rossa',
    metaDescription:
      'Brendola (VI) rientra nell\'area rossa PFAS del Veneto. Dati di contaminazione, fonti ufficiali e indicazioni per i residenti.',
    intro:
      'Brendola è un comune della provincia di Vicenza di circa 6.800 abitanti, situato nella zona occidentale della provincia. Il territorio rientra nell\'area rossa individuata dalla Regione del Veneto a seguito della contaminazione da sostanze perfluoroalchiliche (PFAS) emersa nel 2013 dalle indagini del CNR-IRSA. La sorgente della contaminazione è stata documentata nello stabilimento Miteni S.p.A. di Trissino. La rete idrica è gestita da Acque del Chiampo e successivamente integrata con filtri a carboni attivi a partire dal 2014. Il piano di sorveglianza sanitaria regionale ha incluso la popolazione residente nei monitoraggi biennali.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
      { label: 'Mastrantonio et al. 2018', url: MASTRANTONIO_2018 },
    ],
  },
  {
    slug: 'comune-lonigo',
    name: 'Lonigo',
    province: 'VI',
    zone: 'rossa',
    population: 16200,
    shortTitle: 'Acqua a Lonigo (VI): contaminazione PFAS area rossa',
    metaDescription:
      'Lonigo (VI) è uno dei comuni più colpiti dalla contaminazione PFAS in area rossa. Dati ufficiali, sorveglianza sanitaria e fonti.',
    intro:
      'Lonigo è un comune di circa 16.200 abitanti nella bassa vicentina, storicamente tra i più esposti alla contaminazione da PFAS. La presenza di concentrazioni anomale nelle acque potabili è stata documentata a partire dal 2013, con origine identificata nello stabilimento Miteni S.p.A. di Trissino. Il pozzo Almisano, fonte primaria dell\'acquedotto gestito da Acque del Chiampo, è stato dotato di sistemi di filtraggio a carboni attivi. La popolazione è inserita nel piano di sorveglianza sanitaria della Regione Veneto, che prevede dosaggi ematici periodici per i residenti nati tra il 1951 e il 2014.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
      { label: 'ISS - inquinamento PFAS', url: ISS_PFAS },
    ],
  },
  {
    slug: 'comune-sarego',
    name: 'Sarego',
    province: 'VI',
    zone: 'rossa',
    population: 6500,
    shortTitle: 'Acqua a Sarego (VI): contaminazione PFAS area rossa',
    metaDescription:
      'Sarego (VI) rientra nell\'area rossa PFAS. Informazioni su contaminazione, gestore idrico e sorveglianza sanitaria regionale.',
    intro:
      'Sarego è un comune della provincia di Vicenza di circa 6.500 abitanti, ricadente nell\'area rossa della contaminazione da PFAS riconosciuta dalla Regione Veneto. La rete idrica, gestita da Acque del Chiampo, è stata interessata dalla presenza di sostanze perfluoroalchiliche provenienti dallo stabilimento Miteni S.p.A. di Trissino, fatto documentato a partire dal 2013. Dal 2014 sono attivi sistemi di filtrazione a carboni attivi sui pozzi che servono il comune. I residenti rientrano nel piano di sorveglianza sanitaria con prelievi periodici e accesso al biomonitoraggio gratuito promosso dalla Regione.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-sossano',
    name: 'Sossano',
    province: 'VI',
    zone: 'rossa',
    population: 4400,
    shortTitle: 'Acqua a Sossano (VI): contaminazione PFAS area rossa',
    metaDescription:
      'Sossano (VI) è incluso nell\'area rossa PFAS del Veneto. Dati di contaminazione, fonti ufficiali e gestione idrica.',
    intro:
      'Sossano è un piccolo comune di circa 4.400 abitanti della bassa vicentina, incluso nell\'area rossa della contaminazione da PFAS. Le indagini avviate nel 2013 hanno individuato concentrazioni anomale nelle acque sotterranee del bacino del fiume Fratta-Gorzone, con origine documentata nello stabilimento Miteni S.p.A. di Trissino. La rete idropotabile è gestita da Acque del Chiampo e dotata di trattamenti a carboni attivi. I residenti partecipano al piano regionale di sorveglianza sanitaria, che prevede prelievi periodici e accesso al biomonitoraggio gratuito per le coorti più esposte.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Mastrantonio et al. 2018', url: MASTRANTONIO_2018 },
    ],
  },
  {
    slug: 'comune-orgiano',
    name: 'Orgiano',
    province: 'VI',
    zone: 'rossa',
    population: 3100,
    shortTitle: 'Acqua a Orgiano (VI): contaminazione PFAS area rossa',
    metaDescription:
      'Orgiano (VI) è incluso nell\'area rossa PFAS del Veneto. Informazioni ufficiali su contaminazione, gestore idrico e sorveglianza.',
    intro:
      'Orgiano è un comune di circa 3.100 abitanti della bassa vicentina, alle pendici dei Berici. Il territorio rientra nell\'area rossa della contaminazione da PFAS individuata dalla Regione del Veneto a partire dal 2013, con origine documentata nello stabilimento Miteni S.p.A. di Trissino. L\'acquedotto, gestito da Acque del Chiampo, è stato adeguato con filtri a carboni attivi. La popolazione residente, in particolare le coorti nate tra il 1951 e il 2014, è inserita nel piano di sorveglianza sanitaria regionale che prevede dosaggi ematici e visite mediche dedicate.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-asigliano-veneto',
    name: 'Asigliano Veneto',
    province: 'VI',
    zone: 'rossa',
    population: 900,
    shortTitle: 'Acqua a Asigliano Veneto (VI): PFAS area rossa',
    metaDescription:
      'Asigliano Veneto (VI) è inserito nell\'area rossa PFAS. Dati ufficiali su contaminazione idrica e sorveglianza sanitaria regionale.',
    intro:
      'Asigliano Veneto è un piccolo comune di circa 900 abitanti della bassa vicentina, incluso nell\'area rossa della contaminazione da PFAS riconosciuta dalla Regione Veneto. La contaminazione delle falde sotterranee, documentata a partire dal 2013, ha origine nello stabilimento Miteni S.p.A. di Trissino. La rete idrica è gestita da Acque del Chiampo, con filtraggio a carboni attivi attivato negli anni successivi. La popolazione è inserita nel piano regionale di sorveglianza sanitaria, con accesso gratuito al biomonitoraggio per i nati tra il 1951 e il 2014.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-pojana-maggiore',
    name: 'Pojana Maggiore',
    province: 'VI',
    zone: 'rossa',
    population: 4400,
    shortTitle: 'Acqua a Pojana Maggiore (VI): PFAS area rossa',
    metaDescription:
      'Pojana Maggiore (VI) rientra nell\'area rossa PFAS del Veneto. Informazioni ufficiali su contaminazione e gestione idrica.',
    intro:
      'Pojana Maggiore è un comune di circa 4.400 abitanti della bassa vicentina, ricadente nell\'area rossa della contaminazione da PFAS. Le analisi condotte a partire dal 2013 hanno rilevato concentrazioni anomale di sostanze perfluoroalchiliche nelle acque sotterranee del bacino Agno-Fratta-Gorzone, con origine documentata nello stabilimento Miteni S.p.A. di Trissino. L\'acquedotto è gestito da Acque del Chiampo e dotato di trattamenti di filtrazione a carboni attivi. I residenti partecipano al piano regionale di sorveglianza sanitaria con prelievi periodici e visite gratuite.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Mastrantonio et al. 2018', url: MASTRANTONIO_2018 },
    ],
  },
  {
    slug: 'comune-alonte',
    name: 'Alonte',
    province: 'VI',
    zone: 'rossa',
    population: 1700,
    shortTitle: 'Acqua a Alonte (VI): contaminazione PFAS area rossa',
    metaDescription:
      'Alonte (VI) è incluso nell\'area rossa PFAS del Veneto. Dati ufficiali su contaminazione, gestore idrico e sorveglianza sanitaria.',
    intro:
      'Alonte è un piccolo comune di circa 1.700 abitanti della provincia di Vicenza, situato ai piedi dei Colli Berici. Il territorio rientra nell\'area rossa della contaminazione da PFAS riconosciuta dalla Regione del Veneto, con problema emerso nel 2013 e origine documentata nello stabilimento Miteni S.p.A. di Trissino. La rete idrica, gestita da Acque del Chiampo, è stata adeguata con filtri a carboni attivi. La popolazione è inserita nel piano regionale di sorveglianza sanitaria, con dosaggi ematici e accesso al biomonitoraggio gratuito.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-albaredo-d-adige',
    name: "Albaredo d'Adige",
    province: 'VR',
    zone: 'rossa',
    population: 5200,
    shortTitle: "Acqua ad Albaredo d'Adige (VR): PFAS area rossa",
    metaDescription:
      "Albaredo d'Adige (VR) rientra nell\'area rossa PFAS. Informazioni su contaminazione, gestore idrico e sorveglianza regionale.",
    intro:
      "Albaredo d'Adige è un comune di circa 5.200 abitanti della pianura veronese, incluso nell\'area rossa della contaminazione da PFAS individuata dalla Regione Veneto. Le indagini avviate nel 2013 hanno documentato la presenza di sostanze perfluoroalchiliche nelle acque sotterranee del bacino Fratta-Gorzone-Adige, con origine nello stabilimento Miteni S.p.A. di Trissino. La gestione del servizio idrico è affidata ad Acque Veronesi, che ha installato sistemi di filtrazione a carboni attivi sui pozzi più esposti. La popolazione è inclusa nel piano regionale di sorveglianza sanitaria.",
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-bonavigo',
    name: 'Bonavigo',
    province: 'VR',
    zone: 'rossa',
    population: 2000,
    shortTitle: 'Acqua a Bonavigo (VR): contaminazione PFAS area rossa',
    metaDescription:
      'Bonavigo (VR) è incluso nell\'area rossa PFAS del Veneto. Dati ufficiali su contaminazione idrica e sorveglianza sanitaria.',
    intro:
      'Bonavigo è un comune di circa 2.000 abitanti della bassa veronese, ricadente nell\'area rossa della contaminazione da PFAS riconosciuta dalla Regione Veneto. Le acque sotterranee del territorio sono state interessate dalla diffusione di sostanze perfluoroalchiliche provenienti dallo stabilimento Miteni S.p.A. di Trissino, fatto documentato dal 2013. La rete idrica è gestita da Acque Veronesi, con installazione di filtri a carboni attivi sui pozzi sensibili. I residenti partecipano al piano regionale di sorveglianza sanitaria con biomonitoraggio gratuito per le coorti nate tra il 1951 e il 2014.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-roveredo-di-gua',
    name: 'Roveredo di Guà',
    province: 'VR',
    zone: 'rossa',
    population: 1500,
    shortTitle: 'Acqua a Roveredo di Guà (VR): PFAS area rossa',
    metaDescription:
      'Roveredo di Guà (VR) rientra nell\'area rossa PFAS del Veneto. Dati ufficiali su contaminazione e sorveglianza sanitaria.',
    intro:
      'Roveredo di Guà è un piccolo comune di circa 1.500 abitanti della bassa veronese, attraversato dal fiume Guà, principale veicolo di diffusione delle sostanze perfluoroalchiliche verso valle. Il territorio è incluso nell\'area rossa della contaminazione da PFAS, con sorgente documentata nello stabilimento Miteni S.p.A. di Trissino e problema emerso nel 2013. La rete idrica, gestita da Acque Veronesi, è stata adeguata con filtri a carboni attivi. La popolazione è inserita nel piano regionale di sorveglianza sanitaria con prelievi periodici e biomonitoraggio gratuito.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-veronella',
    name: 'Veronella',
    province: 'VR',
    zone: 'rossa',
    population: 4500,
    shortTitle: 'Acqua a Veronella (VR): contaminazione PFAS area rossa',
    metaDescription:
      'Veronella (VR) è incluso nell\'area rossa PFAS del Veneto. Informazioni ufficiali su contaminazione idrica e sorveglianza.',
    intro:
      'Veronella è un comune di circa 4.500 abitanti della bassa veronese, incluso nell\'area rossa della contaminazione da PFAS riconosciuta dalla Regione Veneto. Le indagini condotte dal 2013 hanno evidenziato la presenza di concentrazioni anomale di sostanze perfluoroalchiliche nelle falde acquifere, con sorgente documentata nello stabilimento Miteni S.p.A. di Trissino. La gestione del servizio idrico è affidata ad Acque Veronesi, che ha installato impianti di filtrazione a carboni attivi. I residenti rientrano nel piano regionale di sorveglianza sanitaria con dosaggi ematici periodici.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-cologna-veneta',
    name: 'Cologna Veneta',
    province: 'VR',
    zone: 'rossa',
    population: 8400,
    shortTitle: 'Acqua a Cologna Veneta (VR): PFAS area rossa',
    metaDescription:
      'Cologna Veneta (VR) rientra nell\'area rossa PFAS del Veneto. Dati ufficiali su contaminazione idrica e sorveglianza sanitaria.',
    intro:
      'Cologna Veneta è un comune di circa 8.400 abitanti della bassa veronese, storicamente uno dei centri più rilevanti dell\'area rossa della contaminazione da PFAS. Il territorio è attraversato dal fiume Guà e dalla rete di canali che hanno veicolato le sostanze perfluoroalchiliche provenienti dallo stabilimento Miteni S.p.A. di Trissino, fatto documentato dal 2013. La rete idrica, gestita da Acque Veronesi, è dotata di filtri a carboni attivi. La popolazione è inclusa nel piano regionale di sorveglianza sanitaria, con prelievi e visite mediche gratuite.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Mastrantonio et al. 2018', url: MASTRANTONIO_2018 },
      { label: 'ISS - inquinamento PFAS', url: ISS_PFAS },
    ],
  },
  {
    slug: 'comune-zimella',
    name: 'Zimella',
    province: 'VR',
    zone: 'rossa',
    population: 4900,
    shortTitle: 'Acqua a Zimella (VR): contaminazione PFAS area rossa',
    metaDescription:
      'Zimella (VR) è incluso nell\'area rossa PFAS del Veneto. Dati ufficiali su contaminazione, gestore idrico e sorveglianza.',
    intro:
      'Zimella è un comune di circa 4.900 abitanti della bassa veronese, al confine con la provincia di Vicenza. Il territorio rientra nell\'area rossa della contaminazione da PFAS individuata dalla Regione Veneto, con problema emerso nel 2013 e sorgente documentata nello stabilimento Miteni S.p.A. di Trissino. La rete idropotabile è gestita da Acque Veronesi, con adeguamento dei pozzi mediante filtri a carboni attivi. La popolazione residente è inserita nel piano regionale di sorveglianza sanitaria, con biomonitoraggio gratuito per le coorti nate tra il 1951 e il 2014.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },

  // ============== AREA ARANCIONE ==============
  {
    slug: 'comune-montagnana',
    name: 'Montagnana',
    province: 'PD',
    zone: 'arancione',
    population: 9100,
    shortTitle: 'Acqua a Montagnana (PD): PFAS area arancione',
    metaDescription:
      'Montagnana (PD) rientra nell\'area arancione PFAS del Veneto. Esposizione lieve, dati ufficiali e sorveglianza sanitaria.',
    intro:
      'Montagnana è un comune di circa 9.100 abitanti della bassa padovana, noto per la cinta muraria medievale. Il territorio è incluso nell\'area arancione della contaminazione da PFAS riconosciuta dalla Regione Veneto, caratterizzata da esposizione lieve della popolazione. La contaminazione del bacino sotterraneo è stata documentata a partire dal 2013, con sorgente nello stabilimento Miteni S.p.A. di Trissino. Il servizio idrico è gestito da Acquevenete, che ha attivato i necessari controlli e adeguamenti tecnici. La popolazione ha accesso al piano regionale di sorveglianza sanitaria su base volontaria.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-megliadino-san-vitale',
    name: 'Megliadino San Vitale',
    province: 'PD',
    zone: 'arancione',
    population: 2000,
    shortTitle: 'Acqua a Megliadino San Vitale (PD): PFAS area arancione',
    metaDescription:
      'Megliadino San Vitale (PD) rientra nell\'area arancione PFAS. Dati ufficiali su esposizione lieve e sorveglianza sanitaria.',
    intro:
      'Megliadino San Vitale è un comune di circa 2.000 abitanti della bassa padovana, incluso nell\'area arancione della contaminazione da PFAS individuata dalla Regione Veneto. La caratterizzazione delle acque ha evidenziato livelli di esposizione lieve della popolazione, con origine documentata nello stabilimento Miteni S.p.A. di Trissino e problema emerso dal 2013. Il servizio idrico è gestito da Acquevenete. La popolazione ha accesso al piano regionale di sorveglianza sanitaria su base volontaria, con biomonitoraggio gratuito per le coorti più esposte.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-megliadino-san-fidenzio',
    name: 'Megliadino San Fidenzio',
    province: 'PD',
    zone: 'arancione',
    population: 1900,
    shortTitle: 'Acqua a Megliadino San Fidenzio (PD): PFAS area arancione',
    metaDescription:
      'Megliadino San Fidenzio (PD) rientra nell\'area arancione PFAS. Esposizione lieve, dati ufficiali e sorveglianza sanitaria.',
    intro:
      'Megliadino San Fidenzio è un piccolo comune di circa 1.900 abitanti della bassa padovana, ricadente nell\'area arancione della contaminazione da PFAS. Le analisi avviate dal 2013 hanno documentato livelli di esposizione lieve della popolazione, con sorgente identificata nello stabilimento Miteni S.p.A. di Trissino. La gestione del servizio idrico è affidata ad Acquevenete, che ha attivato i controlli previsti dal piano regionale. I residenti possono aderire al programma di sorveglianza sanitaria volontaria con accesso al biomonitoraggio gratuito.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-saletto',
    name: 'Saletto',
    province: 'PD',
    zone: 'arancione',
    population: 2700,
    shortTitle: 'Acqua a Saletto (PD): PFAS area arancione',
    metaDescription:
      'Saletto (PD) rientra nell\'area arancione PFAS del Veneto. Esposizione lieve, dati ufficiali e sorveglianza sanitaria.',
    intro:
      'Saletto è un comune di circa 2.700 abitanti della bassa padovana, incluso nell\'area arancione della contaminazione da PFAS individuata dalla Regione Veneto. Il territorio è interessato da una contaminazione lieve delle falde acquifere, documentata dal 2013 e originata nello stabilimento Miteni S.p.A. di Trissino. Il servizio idrico è gestito da Acquevenete. La popolazione può accedere al piano regionale di sorveglianza sanitaria su base volontaria, che prevede biomonitoraggio e visite mediche dedicate.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-casale-di-scodosia',
    name: 'Casale di Scodosia',
    province: 'PD',
    zone: 'arancione',
    population: 4700,
    shortTitle: 'Acqua a Casale di Scodosia (PD): PFAS area arancione',
    metaDescription:
      'Casale di Scodosia (PD) rientra nell\'area arancione PFAS. Esposizione lieve, dati ufficiali e sorveglianza sanitaria regionale.',
    intro:
      'Casale di Scodosia è un comune di circa 4.700 abitanti della bassa padovana, incluso nell\'area arancione della contaminazione da PFAS riconosciuta dalla Regione Veneto. Le indagini sulle acque sotterranee, condotte dal 2013, hanno documentato una contaminazione di livello lieve originata nello stabilimento Miteni S.p.A. di Trissino. Il servizio idrico è gestito da Acquevenete, che ha attivato i controlli previsti dalle disposizioni regionali. La popolazione ha accesso al piano regionale di sorveglianza sanitaria volontaria con biomonitoraggio gratuito.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-urbana',
    name: 'Urbana',
    province: 'PD',
    zone: 'arancione',
    population: 2100,
    shortTitle: 'Acqua a Urbana (PD): PFAS area arancione',
    metaDescription:
      'Urbana (PD) rientra nell\'area arancione PFAS del Veneto. Esposizione lieve, dati ufficiali e sorveglianza sanitaria.',
    intro:
      'Urbana è un piccolo comune di circa 2.100 abitanti della bassa padovana, ricadente nell\'area arancione della contaminazione da PFAS. La presenza di sostanze perfluoroalchiliche nelle falde sotterranee, documentata dal 2013, ha origine nello stabilimento Miteni S.p.A. di Trissino. Il livello di esposizione della popolazione è classificato come lieve dalla Regione Veneto. Il servizio idrico è gestito da Acquevenete. I residenti possono aderire al programma di sorveglianza sanitaria volontaria della Regione, con accesso al biomonitoraggio gratuito.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-merlara',
    name: 'Merlara',
    province: 'PD',
    zone: 'arancione',
    population: 2700,
    shortTitle: 'Acqua a Merlara (PD): PFAS area arancione',
    metaDescription:
      'Merlara (PD) rientra nell\'area arancione PFAS del Veneto. Esposizione lieve, dati ufficiali e sorveglianza sanitaria.',
    intro:
      'Merlara è un comune di circa 2.700 abitanti della bassa padovana, al confine con la provincia di Verona, incluso nell\'area arancione della contaminazione da PFAS. Le analisi avviate dal 2013 hanno documentato un\'esposizione lieve della popolazione alle sostanze perfluoroalchiliche, con origine nello stabilimento Miteni S.p.A. di Trissino. Il servizio idrico è gestito da Acquevenete. La popolazione ha accesso al piano regionale di sorveglianza sanitaria su base volontaria, con biomonitoraggio gratuito per le coorti più esposte.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-castelbaldo',
    name: 'Castelbaldo',
    province: 'PD',
    zone: 'arancione',
    population: 1700,
    shortTitle: 'Acqua a Castelbaldo (PD): PFAS area arancione',
    metaDescription:
      'Castelbaldo (PD) rientra nell\'area arancione PFAS del Veneto. Esposizione lieve, dati ufficiali e sorveglianza sanitaria.',
    intro:
      'Castelbaldo è un piccolo comune di circa 1.700 abitanti della bassa padovana, sulle rive dell\'Adige. Il territorio è incluso nell\'area arancione della contaminazione da PFAS riconosciuta dalla Regione Veneto, caratterizzata da esposizione lieve. La presenza di sostanze perfluoroalchiliche nelle falde, documentata dal 2013, ha origine nello stabilimento Miteni S.p.A. di Trissino. Il servizio idrico è gestito da Acquevenete. La popolazione può accedere al programma regionale di sorveglianza sanitaria volontaria con biomonitoraggio gratuito.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-bovolone',
    name: 'Bovolone',
    province: 'VR',
    zone: 'arancione',
    population: 16000,
    shortTitle: 'Acqua a Bovolone (VR): PFAS area arancione',
    metaDescription:
      'Bovolone (VR) rientra nell\'area arancione PFAS del Veneto. Esposizione lieve, dati ufficiali e sorveglianza sanitaria.',
    intro:
      'Bovolone è un comune di circa 16.000 abitanti della pianura veronese, incluso nell\'area arancione della contaminazione da PFAS individuata dalla Regione Veneto. Le indagini ambientali condotte dal 2013 hanno documentato livelli di esposizione lieve della popolazione alle sostanze perfluoroalchiliche, con sorgente nello stabilimento Miteni S.p.A. di Trissino. Il servizio idrico è gestito da Acque Veronesi, che ha attivato i controlli e gli interventi tecnici previsti dalle disposizioni regionali. I residenti possono aderire al piano regionale di sorveglianza sanitaria volontaria.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-salizzole',
    name: 'Salizzole',
    province: 'VR',
    zone: 'arancione',
    population: 3700,
    shortTitle: 'Acqua a Salizzole (VR): PFAS area arancione',
    metaDescription:
      'Salizzole (VR) rientra nell\'area arancione PFAS del Veneto. Esposizione lieve, dati ufficiali e sorveglianza sanitaria.',
    intro:
      'Salizzole è un comune di circa 3.700 abitanti della pianura veronese, incluso nell\'area arancione della contaminazione da PFAS riconosciuta dalla Regione Veneto. La presenza di sostanze perfluoroalchiliche nelle acque sotterranee, documentata dal 2013, ha origine nello stabilimento Miteni S.p.A. di Trissino. Il livello di esposizione della popolazione è classificato come lieve. Il servizio idrico è gestito da Acque Veronesi. I residenti hanno accesso al piano regionale di sorveglianza sanitaria volontaria, con biomonitoraggio gratuito per le coorti più esposte.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },

  // ============== AREA GIALLA ==============
  {
    slug: 'comune-padova',
    name: 'Padova',
    province: 'PD',
    zone: 'gialla',
    population: 209000,
    shortTitle: 'Acqua a Padova: PFAS area gialla di sorveglianza',
    metaDescription:
      'Padova città rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali, gestore idrico e monitoraggio ARPAV.',
    intro:
      'Padova è il capoluogo di provincia con circa 209.000 abitanti. Il territorio comunale è incluso nell\'area gialla della contaminazione da PFAS, classificata dalla Regione Veneto come zona di sorveglianza con esposizione contenuta. Le acque del bacino idrico provinciale sono state interessate dalla diffusione di sostanze perfluoroalchiliche provenienti dallo stabilimento Miteni S.p.A. di Trissino, fatto documentato dal 2013. Il servizio idrico è gestito da AcegasApsAmga, con monitoraggio continuo dei parametri PFAS sui pozzi cittadini. Il piano regionale prevede sorveglianza sanitaria per le aree del territorio comunale più prossime alle falde interessate.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
      { label: 'ISS - inquinamento PFAS', url: ISS_PFAS },
    ],
  },
  {
    slug: 'comune-vicenza',
    name: 'Vicenza',
    province: 'VI',
    zone: 'gialla',
    population: 110000,
    shortTitle: 'Acqua a Vicenza: PFAS area gialla di sorveglianza',
    metaDescription:
      'Vicenza città rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali ARPAV, gestore idrico e monitoraggio.',
    intro:
      'Vicenza è il capoluogo di provincia con circa 110.000 abitanti. Il territorio comunale rientra nell\'area gialla della contaminazione da PFAS individuata dalla Regione Veneto, classificata come zona di sorveglianza. Il bacino idrogeologico provinciale è stato interessato dalla diffusione di sostanze perfluoroalchiliche originate nello stabilimento Miteni S.p.A. di Trissino, fatto documentato dal 2013. La gestione del servizio idrico in città è affidata ad Acque Vicentine e Viacqua, con monitoraggio continuo dei parametri PFAS. La sorveglianza sanitaria regionale è attiva per le porzioni di territorio più prossime alla sorgente di contaminazione.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-arzignano',
    name: 'Arzignano',
    province: 'VI',
    zone: 'gialla',
    population: 25400,
    shortTitle: 'Acqua a Arzignano (VI): PFAS area gialla',
    metaDescription:
      'Arzignano (VI) rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali ARPAV su contaminazione e gestione idrica.',
    intro:
      'Arzignano è un comune di circa 25.400 abitanti della provincia di Vicenza, situato nella Val Chiampo. Il territorio è incluso nell\'area gialla della contaminazione da PFAS individuata dalla Regione Veneto, classificata come zona di sorveglianza. La vicinanza geografica alla sorgente documentata, lo stabilimento Miteni S.p.A. di Trissino, ha reso necessario un monitoraggio costante delle acque sotterranee del bacino del fiume Agno-Fratta-Gorzone fin dal 2013. Il servizio idrico è gestito da Acque del Chiampo, con sistemi di filtrazione a carboni attivi installati sui pozzi a servizio del comune.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-trissino',
    name: 'Trissino',
    province: 'VI',
    zone: 'gialla',
    population: 8700,
    shortTitle: 'Acqua a Trissino (VI): PFAS area gialla, sito Miteni',
    metaDescription:
      'Trissino (VI) ospita il sito Miteni, sorgente documentata della contaminazione PFAS. Area gialla di sorveglianza.',
    intro:
      'Trissino è un comune di circa 8.700 abitanti della provincia di Vicenza, in Val Chiampo. Sul suo territorio sorge lo stabilimento Miteni S.p.A., azienda chimica documentata come sorgente della contaminazione da PFAS del bacino idrico veneto, problema emerso dal 2013. Il comune rientra nell\'area gialla di sorveglianza definita dalla Regione Veneto. La rete idrica, gestita da Acque del Chiampo, è dotata di filtri a carboni attivi sui pozzi a rischio. Il sito industriale è oggetto di un articolato procedimento di bonifica e procedimenti giudiziari, oltre ad attività permanenti di monitoraggio da parte di ARPAV.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
      { label: 'ISS - inquinamento PFAS', url: ISS_PFAS },
    ],
  },
  {
    slug: 'comune-montecchio-maggiore',
    name: 'Montecchio Maggiore',
    province: 'VI',
    zone: 'gialla',
    population: 23800,
    shortTitle: 'Acqua a Montecchio Maggiore (VI): PFAS area gialla',
    metaDescription:
      'Montecchio Maggiore (VI) rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali, gestore idrico e monitoraggio.',
    intro:
      'Montecchio Maggiore è un comune di circa 23.800 abitanti della provincia di Vicenza, situato lungo l\'asta del fiume Agno. Il territorio è incluso nell\'area gialla della contaminazione da PFAS individuata dalla Regione Veneto, ovvero zona di sorveglianza. La vicinanza geografica allo stabilimento Miteni S.p.A. di Trissino, sorgente documentata della contaminazione emersa dal 2013, ha reso il monitoraggio delle acque sotterranee particolarmente intensivo. La rete idrica è gestita da Acque del Chiampo, con filtri a carboni attivi installati sui pozzi più esposti del territorio comunale.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-montebello-vicentino',
    name: 'Montebello Vicentino',
    province: 'VI',
    zone: 'gialla',
    population: 6500,
    shortTitle: 'Acqua a Montebello Vicentino (VI): PFAS area gialla',
    metaDescription:
      'Montebello Vicentino (VI) rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali e monitoraggio ARPAV.',
    intro:
      'Montebello Vicentino è un comune di circa 6.500 abitanti della provincia di Vicenza, attraversato dal fiume Chiampo. Il territorio rientra nell\'area gialla della contaminazione da PFAS riconosciuta dalla Regione Veneto, classificata come zona di sorveglianza. La presenza di sostanze perfluoroalchiliche nelle falde sotterranee, documentata dal 2013, ha origine nello stabilimento Miteni S.p.A. di Trissino, situato pochi chilometri a monte. La rete idrica è gestita da Acque del Chiampo, con monitoraggio continuo dei pozzi e adeguamenti tecnici sui sistemi di filtrazione.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-noventa-vicentina',
    name: 'Noventa Vicentina',
    province: 'VI',
    zone: 'gialla',
    population: 8800,
    shortTitle: 'Acqua a Noventa Vicentina (VI): PFAS area gialla',
    metaDescription:
      'Noventa Vicentina (VI) rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali su monitoraggio e gestione idrica.',
    intro:
      'Noventa Vicentina è un comune di circa 8.800 abitanti della bassa vicentina, incluso nell\'area gialla della contaminazione da PFAS definita dalla Regione Veneto. Il territorio è soggetto a sorveglianza permanente delle acque sotterranee a seguito della diffusione documentata di sostanze perfluoroalchiliche provenienti dallo stabilimento Miteni S.p.A. di Trissino, problema emerso dal 2013. La rete idrica è gestita da Acque del Chiampo, con monitoraggio continuo dei parametri PFAS sui pozzi a servizio del comune e adeguamento tecnico ove necessario.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-legnago',
    name: 'Legnago',
    province: 'VR',
    zone: 'gialla',
    population: 25000,
    shortTitle: 'Acqua a Legnago (VR): PFAS area gialla',
    metaDescription:
      'Legnago (VR) rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali ARPAV su contaminazione e gestione idrica.',
    intro:
      'Legnago è un comune di circa 25.000 abitanti della bassa veronese, principale centro della zona. Il territorio rientra nell\'area gialla della contaminazione da PFAS individuata dalla Regione Veneto, classificata come zona di sorveglianza. Il bacino idrico è stato interessato dalla diffusione di sostanze perfluoroalchiliche originate nello stabilimento Miteni S.p.A. di Trissino, fatto documentato dal 2013. La gestione del servizio idrico è affidata ad Acque Veronesi, con monitoraggio continuo dei pozzi e adeguamenti tecnici sui sistemi di filtrazione ove richiesto.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
      { label: 'Piano sorveglianza sanitaria', url: PIANO_SORVEGLIANZA_VENETO },
    ],
  },
  {
    slug: 'comune-este',
    name: 'Este',
    province: 'PD',
    zone: 'gialla',
    population: 16300,
    shortTitle: 'Acqua a Este (PD): PFAS area gialla',
    metaDescription:
      'Este (PD) rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali ARPAV su contaminazione e gestione idrica.',
    intro:
      'Este è un comune di circa 16.300 abitanti della bassa padovana, ai piedi dei Colli Euganei. Il territorio è incluso nell\'area gialla della contaminazione da PFAS riconosciuta dalla Regione Veneto, classificata come zona di sorveglianza. Le acque sotterranee del bacino idrico locale sono state interessate dalla diffusione di sostanze perfluoroalchiliche provenienti dallo stabilimento Miteni S.p.A. di Trissino, fatto documentato dal 2013. Il servizio idrico è gestito da Acquevenete, con monitoraggio continuo dei parametri PFAS sui pozzi a servizio della popolazione.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
  {
    slug: 'comune-monselice',
    name: 'Monselice',
    province: 'PD',
    zone: 'gialla',
    population: 17500,
    shortTitle: 'Acqua a Monselice (PD): PFAS area gialla',
    metaDescription:
      'Monselice (PD) rientra nell\'area gialla PFAS di sorveglianza. Dati ufficiali ARPAV e gestione idrica.',
    intro:
      'Monselice è un comune di circa 17.500 abitanti della bassa padovana, ai piedi dei Colli Euganei. Il territorio rientra nell\'area gialla della contaminazione da PFAS individuata dalla Regione Veneto, classificata come zona di sorveglianza. Le falde acquifere locali sono state interessate dalla diffusione delle sostanze perfluoroalchiliche originate nello stabilimento Miteni S.p.A. di Trissino, problema emerso dal 2013. Il servizio idrico è gestito da Acquevenete, con monitoraggio continuo dei pozzi e attuazione dei controlli previsti dalle disposizioni regionali sui parametri PFAS.',
    publicReferences: [
      { label: 'Regione Veneto - Piano PFAS', url: REGIONE_VENETO_PFAS },
      { label: 'ARPAV - monitoraggio acque', url: ARPAV_PFAS },
    ],
  },
];

const COMUNI_BY_SLUG: ReadonlyMap<string, PFASComune> = new Map(
  PFAS_COMUNI.map((c) => [c.slug, c] as const),
);

export function getComuneBySlug(slug: string): PFASComune | undefined {
  return COMUNI_BY_SLUG.get(slug);
}
