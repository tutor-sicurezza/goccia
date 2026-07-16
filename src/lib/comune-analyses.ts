// Analisi reali per comune, estratte dai referti pubblici dei gestori idrici
// (report PDF ufficiali) tramite la pipeline di scraping in `scripts/scrape_comune.py`.
//
// Regola fondamentale: qui NON si inventano valori. Ogni record proviene da un
// referto pubblico verificabile (campo `sourcePdfUrl`) ed è associato a una data
// di campionamento. Il punteggio 1–99 è ricalcolato in modo deterministico con lo
// stesso motore `aquascore` usato dallo strumento pubblico, così da restare
// coerente con il resto del sito.
//
// Publishing "data-gated": una pagina comune con tabella e punteggio viene
// generata solo quando esiste almeno un report reale. Nessun dato → nessuna
// pagina fittizia (niente doorway pages).

import rawReports from '@/data/comuni-analyses.json';
import {
  computeAquaScore,
  scoreVerdict,
  type AquaScoreResult,
  type ParameterInput,
  type ParameterStatus,
} from '@aquascore/index';

/** Un singolo valore misurato in un referto. */
export interface ComuneAnalysisSample {
  /** id parametro nel motore aquascore (es. "nitrati", "arsenico", "durezza_totale"). */
  parameterId: string;
  /** etichetta originale come compare sul referto del gestore. */
  label: string;
  /** valore numerico usato per lo scoring; null per microbiologici "assente". */
  value: number | null;
  unit: string;
  /**
   * valore da mostrare così com'è sul referto (es. "<2", "<0,10"), quando differisce
   * dal numerico usato per il calcolo (sotto il limite di rilevabilità). Fedeltà alla fonte.
   */
  display?: string;
  /** per i microbiologici: true se conforme ("assente"/0), false se rilevato. */
  compliant?: boolean | null;
}

/** Un referto pubblico di un gestore per un comune e una data. */
export interface ComuneAnalysisReport {
  comuneSlug: string;
  comuneName: string;
  /** sigla provincia, es. "RM". */
  province: string;
  region: string;
  gestore: string;
  /**
   * data/periodo di riferimento del dato in formato ISO (YYYY-MM-DD), se il gestore
   * la dichiara. Assente per le "carte d'identità" con valori medi non datati.
   */
  samplingDate?: string;
  /** punto/zona di prelievo, se indicato sul referto. */
  puntoPrelievo?: string;
  /** URL del PDF/pagina ufficiale da cui provengono i dati. */
  sourcePdfUrl: string;
  /** etichetta leggibile della fonte, es. "ACEA Ato 2 — referto Q1 2026". */
  sourceLabel: string;
  /** quando la pipeline ha estratto il dato (ISO). */
  scrapedAt?: string;
  samples: ComuneAnalysisSample[];
}

export const COMUNE_ANALYSES: ComuneAnalysisReport[] = rawReports as ComuneAnalysisReport[];

// ————————————————————————————————————————————————————————————————
// Indici e lookup
// ————————————————————————————————————————————————————————————————

const BY_SLUG = new Map<string, ComuneAnalysisReport[]>();
for (const r of COMUNE_ANALYSES) {
  const list = BY_SLUG.get(r.comuneSlug) ?? [];
  list.push(r);
  BY_SLUG.set(r.comuneSlug, list);
}
// report più recente per primo (i report senza data vanno in fondo)
for (const list of BY_SLUG.values()) {
  list.sort((a, b) => (b.samplingDate ?? '').localeCompare(a.samplingDate ?? ''));
}

/** Tutti i report di un comune, dal più recente al più vecchio. */
export function getReportsForComune(slug: string): ComuneAnalysisReport[] {
  return BY_SLUG.get(slug) ?? [];
}

/** Il report più recente di un comune, se esiste. */
export function getLatestReport(slug: string): ComuneAnalysisReport | null {
  return BY_SLUG.get(slug)?.[0] ?? null;
}

/** Slug di tutti i comuni per cui esistono dati reali (per sitemap e static params). */
export function getComuniWithData(): string[] {
  return [...BY_SLUG.keys()];
}

export function hasComuneData(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export interface ComuneIndexEntry {
  slug: string;
  name: string;
  province: string;
  region: string;
  gestore: string;
}

/** Indice di tutti i comuni con dati (dal report più recente), per l'hub. */
export function getComuniIndex(): ComuneIndexEntry[] {
  const entries: ComuneIndexEntry[] = [];
  for (const slug of BY_SLUG.keys()) {
    const r = getLatestReport(slug);
    if (!r) continue;
    entries.push({
      slug,
      name: r.comuneName,
      province: r.province,
      region: r.region,
      gestore: r.gestore,
    });
  }
  return entries.sort((a, b) => a.name.localeCompare(b.name, 'it'));
}

/** Elenco dei gestori con il numero di comuni coperti, dal più esteso. */
export function getGestoriCoverage(): { gestore: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const slug of BY_SLUG.keys()) {
    const r = getLatestReport(slug);
    if (!r) continue;
    counts.set(r.gestore, (counts.get(r.gestore) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([gestore, count]) => ({ gestore, count }))
    .sort((a, b) => b.count - a.count);
}

// ————————————————————————————————————————————————————————————————
// Scoring deterministico (stesso motore dello strumento pubblico)
// ————————————————————————————————————————————————————————————————

function toParameterInputs(report: ComuneAnalysisReport): ParameterInput[] {
  return report.samples.map((s) => ({
    parameter_id: s.parameterId,
    parameter_name: s.label,
    numeric_value: s.value,
    unit: s.unit,
    compliant: s.compliant ?? null,
  }));
}

export interface ScoredReport {
  report: ComuneAnalysisReport;
  result: AquaScoreResult;
  verdict: ReturnType<typeof scoreVerdict>;
}

/** Ricalcola il punteggio 1–99 di un report con il motore aquascore. */
export function scoreReport(report: ComuneAnalysisReport): ScoredReport {
  const result = computeAquaScore(toParameterInputs(report));
  return { report, result, verdict: scoreVerdict(result.overall) };
}

// ————————————————————————————————————————————————————————————————
// Aggregazioni: comuni più a rischio · rischio per inquinante
// ————————————————————————————————————————————————————————————————

export interface ComuneRiskRow {
  slug: string;
  name: string;
  province: string;
  region: string;
  score: number;
  verdictLabel: string;
  /** parametri oltre il limite di legge nel report più recente. */
  overLimit: { parameterId: string; label: string; value: number | null; unit: string }[];
  samplingDate?: string;
}

/**
 * Comuni con dati reali ordinati dal più critico al migliore.
 * Utile per "comuni più a rischio".
 */
export function getComuniAtRisk(): ComuneRiskRow[] {
  const rows: ComuneRiskRow[] = [];
  for (const slug of BY_SLUG.keys()) {
    const latest = getLatestReport(slug);
    if (!latest) continue;
    const { result, verdict } = scoreReport(latest);
    const overLimit = latest.samples
      .map((s) => ({ s, detail: result.parameterScores.find((d) => d.parameterId === s.parameterId) }))
      .filter((x) => x.detail?.status === 'over_limit')
      .map((x) => ({ parameterId: x.s.parameterId, label: x.s.label, value: x.s.value, unit: x.s.unit }));
    rows.push({
      slug,
      name: latest.comuneName,
      province: latest.province,
      region: latest.region,
      score: result.overall,
      verdictLabel: verdict.label,
      overLimit,
      samplingDate: latest.samplingDate,
    });
  }
  return rows.sort((a, b) => a.score - b.score);
}

export interface PollutantRiskRow {
  parameterId: string;
  /** numero di comuni in cui il parametro risulta oltre il limite. */
  overLimitCount: number;
  comuni: {
    slug: string;
    name: string;
    province: string;
    value: number | null;
    unit: string;
    status: ParameterStatus;
  }[];
}

/**
 * Per ciascun inquinante, i comuni in cui risulta oltre il limite (o borderline),
 * ordinati per gravità. Utile per "rischio per tipo di inquinante".
 */
export function getRiskByPollutant(): PollutantRiskRow[] {
  const byParam = new Map<string, PollutantRiskRow>();
  for (const slug of BY_SLUG.keys()) {
    const latest = getLatestReport(slug);
    if (!latest) continue;
    const { result } = scoreReport(latest);
    for (const sample of latest.samples) {
      const detail = result.parameterScores.find((d) => d.parameterId === sample.parameterId);
      if (!detail || (detail.status !== 'over_limit' && detail.status !== 'acceptable')) continue;
      const row =
        byParam.get(sample.parameterId) ??
        { parameterId: sample.parameterId, overLimitCount: 0, comuni: [] };
      if (detail.status === 'over_limit') row.overLimitCount += 1;
      row.comuni.push({
        slug,
        name: latest.comuneName,
        province: latest.province,
        value: sample.value,
        unit: sample.unit,
        status: detail.status,
      });
      byParam.set(sample.parameterId, row);
    }
  }
  return [...byParam.values()]
    .map((r) => ({
      ...r,
      comuni: r.comuni.sort((a, b) =>
        a.status === b.status ? 0 : a.status === 'over_limit' ? -1 : 1,
      ),
    }))
    .sort((a, b) => b.overLimitCount - a.overLimitCount || b.comuni.length - a.comuni.length);
}

/** Numero totale di comuni con almeno un report reale. */
export function getComuniDataCount(): number {
  return BY_SLUG.size;
}
