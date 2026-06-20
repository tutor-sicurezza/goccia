export type ParameterGroupKey =
  | 'salute'
  | 'estetica'
  | 'impianti'
  | 'microbiologia';

export interface ParameterGroup {
  key: ParameterGroupKey;
  label: string;
  description: string;
  parameterIds: string[];
}

export const PARAMETER_GROUPS: ParameterGroup[] = [
  {
    key: 'salute',
    label: 'Salute',
    description:
      'Parametri che possono incidere sulla salute se fuori dai limiti di legge.',
    parameterIds: [
      'nitrati',
      'nitriti',
      'arsenico',
      'piombo',
      'cadmio',
      'nichel',
      'cromo',
      'fluoruri',
      'pfas_totali',
      'sodio',
      'ammonio',
      'rame',
    ],
  },
  {
    key: 'estetica',
    label: 'Estetica',
    description:
      'Aspetti come sapore, odore, colore e torbidità dell’acqua.',
    parameterIds: [
      'cloro_residuo',
      'ferro',
      'manganese',
      'solfati',
      'cloruri',
      'torbidita',
    ],
  },
  {
    key: 'impianti',
    label: 'Impianti',
    description:
      'Parametri che influenzano tubature, elettrodomestici e incrostazioni.',
    parameterIds: ['ph', 'durezza_totale', 'conducibilita'],
  },
  {
    key: 'microbiologia',
    label: 'Microbiologia',
    description:
      'Indicatori microbiologici: devono essere assenti per legge.',
    parameterIds: ['e_coli', 'coliformi_totali', 'enterococchi'],
  },
];

export const RISK_NOTES: Record<string, string> = {
  piombo:
    'Il piombo può rilasciarsi da vecchie tubature in piombo o saldature; l’esposizione cronica è sconsigliata, in particolare per bambini e donne in gravidanza.',
  arsenico:
    'L’arsenico è un contaminante naturale di origine geologica. Concentrazioni elevate vanno evitate nel lungo periodo.',
  nitrati:
    'I nitrati possono indicare contaminazione agricola o da reflui. Valori elevati sono particolarmente sconsigliati per i lattanti.',
  nitriti:
    'I nitriti sono intermedi instabili e indicano possibili problemi di trattamento o contaminazione. Da evitare valori sopra il limite.',
  e_coli:
    'Escherichia coli è un indicatore di contaminazione fecale recente: per legge deve essere sempre assente nell’acqua potabile.',
  coliformi_totali:
    'I coliformi totali indicano una possibile criticità microbiologica della rete o del punto di prelievo.',
  enterococchi:
    'Gli enterococchi intestinali sono indicatori di contaminazione fecale: per legge devono essere assenti.',
  pfas_totali:
    'I PFAS sono composti persistenti di origine industriale. Esposizione prolungata oltre i limiti è sconsigliata.',
  cloro_residuo:
    'Un cloro residuo elevato non è pericoloso ma altera sapore e odore. Può aumentare la formazione di sottoprodotti di disinfezione.',
  ferro:
    'Concentrazioni elevate di ferro causano colorazioni rossastre, macchie su sanitari e bucato e sapore metallico.',
  manganese:
    'Il manganese può macchiare di nero sanitari ed elettrodomestici e dare un sapore sgradevole.',
  fluoruri:
    'Quantità elevate di fluoruri nel lungo periodo possono interessare denti e ossa. Limite di legge: 1,5 mg/L.',
  sodio:
    'Un sodio elevato non è pericoloso per la maggior parte delle persone, ma è da considerare in caso di diete iposodiche.',
};

export const GENERIC_RISK_NOTE =
  'Valore oltre il limite di legge. Si consiglia un secondo prelievo a distanza di qualche giorno e di contattare il gestore idrico.';
