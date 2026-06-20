import { findParameterConfig } from './parameters';
import type { AquaScoreResult, ParameterConfig, ParameterInput, ParameterRange, ParameterScoreDetail, ParameterStatus, SubscoreKey } from './types';

const SUBSCORE_WEIGHTS: Record<SubscoreKey, number> = { health: 0.5, aesthetic: 0.25, pipe: 0.25 };
const SUBSCORE_KEYS: SubscoreKey[] = ['health', 'aesthetic', 'pipe'];

const toScore01 = (n: number) => Math.max(0, Math.min(1, n));
const to1_99 = (s: number) => Math.max(1, Math.min(99, Math.round(s * 98 + 1)));

function withinRange(value: number, range: ParameterRange): boolean {
  if (range.min !== undefined && value < range.min) return false;
  if (range.max !== undefined && value > range.max) return false;
  return true;
}

function scoreNumeric(value: number, cfg: ParameterConfig): { score: number; status: ParameterStatus } {
  const { legal, ideal } = cfg;
  if (withinRange(value, ideal)) return { score: 1, status: 'ideal' };
  if (legal.max !== undefined && value > legal.max) {
    const excess = (value - legal.max) / Math.max(legal.max, 1e-9);
    return { score: Math.max(0, 0.3 - excess * 0.6), status: 'over_limit' };
  }
  if (legal.min !== undefined && value < legal.min) {
    const deficit = (legal.min - value) / Math.max(legal.min, 1e-9);
    return { score: Math.max(0, 0.3 - deficit * 0.6), status: 'over_limit' };
  }
  if (ideal.max !== undefined && legal.max !== undefined && value > ideal.max) {
    const ratio = (value - ideal.max) / (legal.max - ideal.max);
    return { score: toScore01(0.9 - ratio * 0.5), status: 'acceptable' };
  }
  if (ideal.min !== undefined && legal.min !== undefined && value < ideal.min) {
    const ratio = (ideal.min - value) / (ideal.min - legal.min);
    return { score: toScore01(0.9 - ratio * 0.5), status: 'acceptable' };
  }
  return { score: 0.7, status: 'acceptable' };
}

function scoreMicrobiological(value: number, compliantFlag: boolean | null | undefined): { score: number; status: ParameterStatus } {
  if (value <= 0 || compliantFlag === true) return { score: 1, status: 'ideal' };
  if (value === 1) return { score: 0.2, status: 'over_limit' };
  return { score: 0, status: 'over_limit' };
}

export function computeAquaScore(inputs: ParameterInput[]): AquaScoreResult {
  const details: ParameterScoreDetail[] = [];
  const unmatched: string[] = [];

  for (const input of inputs) {
    const cfg = findParameterConfig(input.parameter_id, input.parameter_name);
    if (!cfg) { unmatched.push(input.parameter_id); continue; }
    const v = input.numeric_value;
    if (v === null || v === undefined || Number.isNaN(v)) {
      if (cfg.microbiological && input.compliant !== null && input.compliant !== undefined) {
        const { score, status } = scoreMicrobiological(0, input.compliant);
        details.push({ parameterId: cfg.id, parameterName: input.parameter_name || cfg.id, numericValue: null, score, status, legal: cfg.legal, ideal: cfg.ideal, weights: cfg.weights });
      }
      continue;
    }
    const { score, status } = cfg.microbiological ? scoreMicrobiological(v, input.compliant) : scoreNumeric(v, cfg);
    details.push({ parameterId: cfg.id, parameterName: input.parameter_name || cfg.id, numericValue: v, score, status, legal: cfg.legal, ideal: cfg.ideal, weights: cfg.weights });
  }

  const subscores: Record<SubscoreKey, number | null> = { health: null, aesthetic: null, pipe: null };
  for (const key of SUBSCORE_KEYS) {
    let weightedSum = 0, totalWeight = 0;
    for (const d of details) { const w = d.weights[key]; if (w > 0) { weightedSum += d.score * w; totalWeight += w; } }
    subscores[key] = totalWeight > 0 ? to1_99(weightedSum / totalWeight) : null;
  }

  let overallSum = 0, overallWeight = 0;
  for (const key of SUBSCORE_KEYS) {
    const sub = subscores[key];
    if (sub !== null) { overallSum += ((sub - 1) / 98) * SUBSCORE_WEIGHTS[key]; overallWeight += SUBSCORE_WEIGHTS[key]; }
  }
  const overall = overallWeight > 0 ? to1_99(overallSum / overallWeight) : 1;

  return { overall, health: subscores.health, aesthetic: subscores.aesthetic, pipe: subscores.pipe, matchedCount: details.length, unmatchedParameters: unmatched, parameterScores: details };
}

export function scoreVerdict(score: number): { label: string; tone: 'green' | 'emerald' | 'amber' | 'orange' | 'red'; buona: boolean } {
  if (score >= 85) return { label: 'Eccellente', tone: 'green', buona: true };
  if (score >= 70) return { label: 'Buona', tone: 'emerald', buona: true };
  if (score >= 50) return { label: 'Discreta', tone: 'amber', buona: true };
  if (score >= 30) return { label: 'Da migliorare', tone: 'orange', buona: false };
  return { label: 'Critica', tone: 'red', buona: false };
}
