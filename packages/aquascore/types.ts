export type SubscoreKey = 'health' | 'aesthetic' | 'pipe';
export type ParameterStatus = 'ideal' | 'acceptable' | 'over_limit' | 'unknown';

export interface ParameterRange {
  min?: number;
  max?: number;
}

export interface ParameterConfig {
  id: string;
  aliases: string[];
  unit: string;
  legal: ParameterRange;
  ideal: ParameterRange;
  weights: Record<SubscoreKey, number>;
  microbiological?: boolean;
}

export interface ParameterInput {
  parameter_id: string;
  parameter_name?: string;
  numeric_value: number | null;
  unit?: string | null;
  compliant?: boolean | null;
}

export interface ParameterScoreDetail {
  parameterId: string;
  parameterName: string;
  numericValue: number | null;
  score: number;
  status: ParameterStatus;
  legal: ParameterRange;
  ideal: ParameterRange;
  weights: Record<SubscoreKey, number>;
}

export interface AquaScoreResult {
  overall: number;
  health: number | null;
  aesthetic: number | null;
  pipe: number | null;
  matchedCount: number;
  unmatchedParameters: string[];
  parameterScores: ParameterScoreDetail[];
}
