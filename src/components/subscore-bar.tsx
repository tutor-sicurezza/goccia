import type { GaugeTone } from './score-gauge';

interface SubscoreBarProps {
  label: string;
  value: number | null;
  tone: GaugeTone;
  weight: string;
  description?: string;
}

const TONE_GRADIENT: Record<GaugeTone, string> = {
  emerald: 'from-emerald-400 to-emerald-500',
  green: 'from-green-300 to-green-500',
  amber: 'from-amber-300 to-amber-500',
  orange: 'from-orange-300 to-orange-500',
  red: 'from-rose-300 to-rose-500',
};

export function SubscoreBar({
  label,
  value,
  tone,
  weight,
  description,
}: SubscoreBarProps) {
  const pct = value === null ? 0 : Math.max(0, Math.min(99, value));
  const widthPct = `${(pct / 99) * 100}%`;
  return (
    <div className="glass p-5 hover-lift">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h3 className="font-display text-base font-semibold text-white">
            {label}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Peso {weight}
          </p>
        </div>
        <div className="text-right">
          <span className="font-display text-2xl font-semibold tabular-nums text-white">
            {value === null ? '—' : value}
          </span>
          <span className="ml-1 text-xs text-slate-500">/ 99</span>
        </div>
      </div>
      <div
        className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-white/5"
        role="progressbar"
        aria-valuenow={value ?? 0}
        aria-valuemin={1}
        aria-valuemax={99}
        aria-label={`${label}: ${value === null ? 'non valutato' : value + ' su 99'}`}
      >
        <div
          className={`h-full rounded-full bg-gradient-to-r ${TONE_GRADIENT[tone]} transition-[width] duration-1000 ease-out`}
          style={{ width: value === null ? '0%' : widthPct }}
        />
      </div>
      {description ? (
        <p className="mt-3 text-xs text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
