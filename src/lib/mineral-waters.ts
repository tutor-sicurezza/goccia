// ============================================================================
// Acque minerali italiane in bottiglia — schede tecniche e analisi in etichetta
// ----------------------------------------------------------------------------
// I valori riportati provengono dall'analisi chimico-fisica stampata
// sull'etichetta (o pubblicata dal produttore). Sono dati pubblici, imposti
// per legge dal D.Lgs. 176/2011 (recepimento della direttiva 2009/54/CE).
// L'analisi di un'acqua minerale è stabile nel tempo perché la fonte è
// protetta, ma il produttore può aggiornarla: fa fede l'etichetta della
// bottiglia che hai in mano.
// ============================================================================

export type WaterClassification =
  | 'minimamente-mineralizzata'
  | 'oligominerale'
  | 'mediominerale'
  | 'ricca-di-sali';

export type WaterType = 'naturale' | 'frizzante' | 'effervescente-naturale';

/** Valori dell'analisi chimico-fisica in etichetta. `null` = non dichiarato. */
export interface MineralWaterAnalysis {
  /** Residuo fisso a 180 °C, in mg/L. È il parametro-chiave di classificazione. */
  residuoFisso: number | null;
  ph: number | null;
  /** Conducibilità elettrica specifica a 20 °C, µS/cm. */
  conducibilita: number | null;
  /** Durezza totale in gradi francesi (°F). */
  durezza: number | null;
  bicarbonato: number | null; // HCO3-
  calcio: number | null; // Ca2+
  magnesio: number | null; // Mg2+
  sodio: number | null; // Na+
  potassio: number | null; // K+
  solfati: number | null; // SO4 2-
  cloruri: number | null; // Cl-
  nitrati: number | null; // NO3-
  fluoruri: number | null; // F-
  silice: number | null; // SiO2
}

export interface MineralWaterSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface MineralWaterFAQ {
  q: string;
  a: string;
}

export interface MineralWater {
  id: string;
  brand: string;
  slug: string;
  producer: string;
  sorgente: string;
  comune: string;
  provincia: string; // sigla, es. "BI"
  regione: string;
  altitudine: number | null; // m s.l.m. della sorgente, se noto
  type: WaterType;
  classification: WaterClassification;
  analysis: MineralWaterAnalysis;
  /** Anno o data dell'analisi riportata in etichetta, se dichiarata. */
  analysisRef: string | null;
  tagline: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  sections: MineralWaterSection[];
  /** Profili/usi per cui l'acqua risulta indicata. */
  bestFor: string[];
  /** Attenzioni/limiti d'uso, se rilevanti. */
  cautions: string[];
  faqs: MineralWaterFAQ[];
  relatedIds: string[];
}

// ---------------------------------------------------------------------------
// Registro
// ---------------------------------------------------------------------------

export const MINERAL_WATERS: MineralWater[] = [];
const WATER_INDEX = new Map<string, MineralWater>();
const SLUG_INDEX = new Map<string, MineralWater>();

function register(w: MineralWater): void {
  MINERAL_WATERS.push(w);
  WATER_INDEX.set(w.id, w);
  SLUG_INDEX.set(w.slug, w);
}

export function getWaterBySlug(slug: string): MineralWater | undefined {
  return SLUG_INDEX.get(slug);
}

export function getWaterById(id: string): MineralWater | undefined {
  return WATER_INDEX.get(id);
}

// ---------------------------------------------------------------------------
// Classificazione legale per residuo fisso (D.Lgs. 176/2011, art. 12)
// ---------------------------------------------------------------------------

export interface ClassificationInfo {
  key: WaterClassification;
  label: string;
  range: string;
  short: string;
}

export const CLASSIFICATIONS: ClassificationInfo[] = [
  {
    key: 'minimamente-mineralizzata',
    label: 'Minimamente mineralizzata',
    range: 'residuo fisso ≤ 50 mg/L',
    short: 'Pochissimi sali disciolti: leggera, spesso indicata per i lattanti.',
  },
  {
    key: 'oligominerale',
    label: 'Oligominerale',
    range: 'residuo fisso 50–500 mg/L',
    short: 'La categoria più diffusa in Italia: equilibrata e adatta all’uso quotidiano.',
  },
  {
    key: 'mediominerale',
    label: 'Mediominerale',
    range: 'residuo fisso 500–1500 mg/L',
    short: 'Ricca di minerali specifici (calcio, magnesio, bicarbonati): usi mirati.',
  },
  {
    key: 'ricca-di-sali',
    label: 'Ricca di sali minerali',
    range: 'residuo fisso > 1500 mg/L',
    short: 'Fortemente mineralizzata: si usa a scopo funzionale, non come acqua da tavola.',
  },
];

const CLASSIFICATION_BY_KEY = new Map(CLASSIFICATIONS.map((c) => [c.key, c]));

export function classificationInfo(key: WaterClassification): ClassificationInfo {
  return CLASSIFICATION_BY_KEY.get(key)!;
}

/** Classificazione derivata dal residuo fisso, per verifica di coerenza. */
export function classifyByResidue(residuo: number): WaterClassification {
  if (residuo <= 50) return 'minimamente-mineralizzata';
  if (residuo <= 500) return 'oligominerale';
  if (residuo <= 1500) return 'mediominerale';
  return 'ricca-di-sali';
}

export const TYPE_LABEL: Record<WaterType, string> = {
  naturale: 'Naturale',
  frizzante: 'Frizzante (addizionata di CO₂)',
  'effervescente-naturale': 'Effervescente naturale',
};

// ---------------------------------------------------------------------------
// Menzioni consentite in etichetta (DM 10 febbraio 2015, Allegato)
// ---------------------------------------------------------------------------
// Le soglie sotto derivano dalla normativa: se un'acqua le supera, il
// produttore può (non deve) riportare la menzione corrispondente. Ricostruirle
// dai valori dell'analisi è un modo trasparente per leggere l'etichetta.

export interface LabelMention {
  label: string;
  rule: string;
}

export function derivedMentions(a: MineralWaterAnalysis): LabelMention[] {
  const m: LabelMention[] = [];
  const has = (v: number | null): v is number => typeof v === 'number';

  if (has(a.residuoFisso) && a.residuoFisso <= 50)
    m.push({ label: 'Contenuto di sali minerali molto basso', rule: 'residuo fisso ≤ 50 mg/L' });
  if (has(a.residuoFisso) && a.residuoFisso <= 500)
    m.push({ label: 'Oligominerale', rule: 'residuo fisso ≤ 500 mg/L' });
  if (has(a.residuoFisso) && a.residuoFisso > 1500)
    m.push({ label: 'Ricca di sali minerali', rule: 'residuo fisso > 1500 mg/L' });
  if (has(a.bicarbonato) && a.bicarbonato > 600)
    m.push({ label: 'Bicarbonata', rule: 'bicarbonati > 600 mg/L' });
  if (has(a.solfati) && a.solfati > 200)
    m.push({ label: 'Solfata', rule: 'solfati > 200 mg/L' });
  if (has(a.cloruri) && a.cloruri > 200)
    m.push({ label: 'Clorurata', rule: 'cloruri > 200 mg/L' });
  if (has(a.calcio) && a.calcio > 150)
    m.push({ label: 'Calcica', rule: 'calcio > 150 mg/L' });
  if (has(a.magnesio) && a.magnesio > 50)
    m.push({ label: 'Magnesiaca', rule: 'magnesio > 50 mg/L' });
  if (has(a.fluoruri) && a.fluoruri > 1)
    m.push({ label: 'Fluorata', rule: 'fluoruri > 1 mg/L' });
  if (has(a.sodio) && a.sodio > 200)
    m.push({ label: 'Sodica', rule: 'sodio > 200 mg/L' });
  if (has(a.sodio) && a.sodio < 20)
    m.push({ label: 'Indicata per diete povere di sodio', rule: 'sodio < 20 mg/L' });

  return m;
}

/** Numero di parametri dell'analisi effettivamente dichiarati. */
export function declaredParameters(a: MineralWaterAnalysis): number {
  return Object.values(a).filter((v) => typeof v === 'number').length;
}

// ---------------------------------------------------------------------------
// Le schede
// ---------------------------------------------------------------------------

// I dati vengono caricati da un modulo separato per tenere questo file leggibile.
import { WATER_ENTRIES } from './mineral-waters-data';

for (const w of WATER_ENTRIES) register(w);

// Ordinamento predefinito: per residuo fisso crescente (più leggere prima).
MINERAL_WATERS.sort((x, y) => {
  const rx = x.analysis.residuoFisso ?? Number.POSITIVE_INFINITY;
  const ry = y.analysis.residuoFisso ?? Number.POSITIVE_INFINITY;
  return rx - ry;
});
