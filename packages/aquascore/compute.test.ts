import { describe, expect, it } from 'vitest';
import { computeAquaScore, scoreVerdict } from './compute';
import type { ParameterInput } from './types';

const baseline: ParameterInput[] = [
  { parameter_id: 'ph', numeric_value: 7.5 },
  { parameter_id: 'durezza_totale', numeric_value: 20 },
  { parameter_id: 'conducibilita', numeric_value: 400 },
  { parameter_id: 'cloro_residuo', numeric_value: 0.02 },
  { parameter_id: 'nitrati', numeric_value: 5 },
  { parameter_id: 'piombo', numeric_value: 0.5 },
  { parameter_id: 'arsenico', numeric_value: 0.5 },
  { parameter_id: 'e_coli', numeric_value: 0, compliant: true },
];

describe('computeAquaScore', () => {
  it('acqua eccellente: tutti i parametri ideali → overall ≥ 85', () => {
    const r = computeAquaScore(baseline);
    expect(r.overall).toBeGreaterThanOrEqual(85);
    expect(scoreVerdict(r.overall).buona).toBe(true);
    expect(r.matchedCount).toBe(baseline.length);
  });

  it('piombo 30 µg/L oltre limite → score parametro = 0, overall < baseline', () => {
    const base = computeAquaScore(baseline);
    const bad = computeAquaScore([
      ...baseline.filter((p) => p.parameter_id !== 'piombo'),
      { parameter_id: 'piombo', numeric_value: 30 },
    ]);
    const piombo = bad.parameterScores.find((p) => p.parameterId === 'piombo');
    expect(piombo).toBeDefined();
    expect(piombo!.status).toBe('over_limit');
    expect(piombo!.score).toBe(0);
    expect(bad.overall).toBeLessThan(base.overall);
    expect(bad.health).not.toBeNull();
    expect(bad.health!).toBeLessThan(base.health!);
  });

  it('E.coli presente con un solo parametro → verdetto Critica', () => {
    const r = computeAquaScore([{ parameter_id: 'e_coli', numeric_value: 1 }]);
    const ec = r.parameterScores.find((p) => p.parameterId === 'e_coli');
    expect(ec!.status).toBe('over_limit');
    expect(r.overall).toBeLessThan(50);
    expect(scoreVerdict(r.overall).buona).toBe(false);
  });

  it('piombo 8 µg/L conforme-ma-non-ideale → status acceptable, score < 1', () => {
    const r = computeAquaScore([
      ...baseline.filter((p) => p.parameter_id !== 'piombo'),
      { parameter_id: 'piombo', numeric_value: 8 },
    ]);
    const piombo = r.parameterScores.find((p) => p.parameterId === 'piombo');
    expect(piombo!.status).toBe('acceptable');
    expect(piombo!.score).toBeGreaterThan(0.3);
    expect(piombo!.score).toBeLessThan(1);
  });

  it('input vuoto → overall = 1', () => {
    const r = computeAquaScore([]);
    expect(r.overall).toBe(1);
    expect(r.matchedCount).toBe(0);
  });

  it('parametro sconosciuto → unmatchedParameters', () => {
    const r = computeAquaScore([{ parameter_id: 'xenon_42', numeric_value: 1 }]);
    expect(r.unmatchedParameters).toContain('xenon_42');
    expect(r.matchedCount).toBe(0);
  });

  it('determinismo: stesso input → stesso output', () => {
    const a = computeAquaScore(baseline);
    const b = computeAquaScore(baseline);
    expect(a).toEqual(b);
  });

  it('verdetto a fasce', () => {
    expect(scoreVerdict(90).label).toBe('Eccellente');
    expect(scoreVerdict(75).label).toBe('Buona');
    expect(scoreVerdict(60).label).toBe('Discreta');
    expect(scoreVerdict(40).label).toBe('Da migliorare');
    expect(scoreVerdict(15).label).toBe('Critica');
  });
});
