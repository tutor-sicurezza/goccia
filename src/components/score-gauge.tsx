'use client';

import { useEffect, useState } from 'react';

export type GaugeTone = 'green' | 'emerald' | 'amber' | 'orange' | 'red';

interface ScoreGaugeProps {
  score: number;
  tone: GaugeTone;
  label?: string;
}

const TONE_COLORS: Record<GaugeTone, { from: string; to: string; glow: string }> = {
  emerald: { from: '#34d399', to: '#10b981', glow: 'rgba(16,185,129,0.45)' },
  green: { from: '#86efac', to: '#22c55e', glow: 'rgba(34,197,94,0.4)' },
  amber: { from: '#fcd34d', to: '#f59e0b', glow: 'rgba(245,158,11,0.4)' },
  orange: { from: '#fdba74', to: '#f97316', glow: 'rgba(249,115,22,0.45)' },
  red: { from: '#fda4af', to: '#f43f5e', glow: 'rgba(244,63,94,0.5)' },
};

export function ScoreGauge({ score, tone, label }: ScoreGaugeProps) {
  const clamped = Math.max(1, Math.min(99, Math.round(score)));
  const radius = 110;
  const stroke = 18;
  const circumference = 2 * Math.PI * radius;
  // Score is 1-99 → fraction of full ring
  const pct = clamped / 99;
  const targetOffset = circumference * (1 - pct);

  const [offset, setOffset] = useState(circumference);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setOffset(targetOffset), 80);
    // Number count-up
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t2 = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t2, 3);
      setDisplayScore(Math.round(clamped * eased));
      if (t2 < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [clamped, targetOffset]);

  const color = TONE_COLORS[tone];
  const size = 280;

  return (
    <div
      className="relative flex items-center justify-center"
      role="img"
      aria-label={`Punteggio ${clamped} su 99${label ? `, ${label}` : ''}`}
      style={{ width: size, height: size }}
    >
      {/* Glow */}
      <div
        className="absolute inset-6 rounded-full blur-3xl opacity-60"
        style={{ background: `radial-gradient(closest-side, ${color.glow}, transparent 70%)` }}
        aria-hidden="true"
      />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="relative"
      >
        <defs>
          <linearGradient id={`gauge-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.from} />
            <stop offset="100%" stopColor={color.to} />
          </linearGradient>
        </defs>
        <circle
          className="gauge-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          className="gauge-fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#gauge-${tone})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transformOrigin: `${size / 2}px ${size / 2}px`, transform: 'rotate(-90deg)' }}
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-7xl font-semibold tracking-tight tabular-nums text-white drop-shadow">
          {displayScore}
        </span>
        <span className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">
          su 99
        </span>
        {label ? (
          <span className="mt-2 text-sm font-medium text-slate-200">{label}</span>
        ) : null}
      </div>
    </div>
  );
}
