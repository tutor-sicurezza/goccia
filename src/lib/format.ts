export interface RangeLike {
  min?: number;
  max?: number;
}

function formatNumber(n: number): string {
  // Italian decimal comma. Show up to 3 significant fractional digits for small numbers.
  const abs = Math.abs(n);
  let digits: number;
  if (abs === 0) digits = 0;
  else if (abs >= 100) digits = 0;
  else if (abs >= 10) digits = 1;
  else if (abs >= 1) digits = 2;
  else digits = 3;
  return n
    .toLocaleString('it-IT', {
      minimumFractionDigits: 0,
      maximumFractionDigits: digits,
    });
}

export function formatRange(r: RangeLike | undefined, unit: string): string {
  if (!r) return '—';
  const hasMin = typeof r.min === 'number';
  const hasMax = typeof r.max === 'number';
  const u = unit ? ` ${unit}` : '';
  if (hasMin && hasMax) {
    if (r.min === r.max) return `${formatNumber(r.min as number)}${u}`;
    return `${formatNumber(r.min as number)} – ${formatNumber(r.max as number)}${u}`;
  }
  if (hasMax) return `≤ ${formatNumber(r.max as number)}${u}`;
  if (hasMin) return `≥ ${formatNumber(r.min as number)}${u}`;
  return '—';
}

export function formatValue(n: number | null | undefined, unit?: string): string {
  if (n === null || n === undefined || Number.isNaN(n)) return '—';
  const u = unit ? ` ${unit}` : '';
  return `${formatNumber(n)}${u}`;
}

export type StatusKey =
  | 'ideal'
  | 'acceptable'
  | 'over_limit'
  | 'unknown';

export interface StatusBadge {
  label: string;
  tone: 'emerald' | 'amber' | 'rose' | 'slate';
}

export function statusBadge(status: StatusKey): StatusBadge {
  switch (status) {
    case 'ideal':
      return { label: 'Ideale', tone: 'emerald' };
    case 'acceptable':
      return { label: 'Accettabile', tone: 'amber' };
    case 'over_limit':
      return { label: 'Fuori limite', tone: 'rose' };
    default:
      return { label: 'N/D', tone: 'slate' };
  }
}

/**
 * Lightweight client-side bracketing that mirrors the engine's status
 * (used only for the per-input UI badge). The actual scoring is done
 * server-side via /api/score.
 */
export function localStatus(
  value: number | null,
  legal: RangeLike,
  ideal: RangeLike,
  microbiological?: boolean,
): StatusKey {
  if (value === null || Number.isNaN(value)) return 'unknown';
  if (microbiological) {
    return value > 0 ? 'over_limit' : 'ideal';
  }
  const aboveLegalMax =
    typeof legal.max === 'number' && value > legal.max;
  const belowLegalMin =
    typeof legal.min === 'number' && value < legal.min;
  if (aboveLegalMax || belowLegalMin) return 'over_limit';
  const inIdeal =
    (typeof ideal.min !== 'number' || value >= ideal.min) &&
    (typeof ideal.max !== 'number' || value <= ideal.max);
  if (inIdeal) return 'ideal';
  return 'acceptable';
}

export function prettyParameterName(id: string): string {
  switch (id) {
    case 'ph':
      return 'pH';
    case 'durezza_totale':
      return 'Durezza totale';
    case 'conducibilita':
      return 'Conducibilità';
    case 'cloro_residuo':
      return 'Cloro residuo';
    case 'nitrati':
      return 'Nitrati';
    case 'nitriti':
      return 'Nitriti';
    case 'ammonio':
      return 'Ammonio';
    case 'sodio':
      return 'Sodio';
    case 'solfati':
      return 'Solfati';
    case 'cloruri':
      return 'Cloruri';
    case 'fluoruri':
      return 'Fluoruri';
    case 'ferro':
      return 'Ferro';
    case 'manganese':
      return 'Manganese';
    case 'piombo':
      return 'Piombo';
    case 'arsenico':
      return 'Arsenico';
    case 'rame':
      return 'Rame';
    case 'cadmio':
      return 'Cadmio';
    case 'nichel':
      return 'Nichel';
    case 'cromo':
      return 'Cromo';
    case 'torbidita':
      return 'Torbidità';
    case 'e_coli':
      return 'Escherichia coli';
    case 'coliformi_totali':
      return 'Coliformi totali';
    case 'enterococchi':
      return 'Enterococchi intestinali';
    case 'pfas_totali':
      return 'PFAS totali';
    default:
      return id;
  }
}
