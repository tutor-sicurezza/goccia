'use client';

import { useMemo, useState } from 'react';

type Unit = 'fr' | 'dh' | 'ppm' | 'gpg';

const UNIT_LABEL: Record<Unit, string> = {
  fr: '°F (gradi francesi)',
  dh: '°dH (gradi tedeschi)',
  ppm: 'ppm di CaCO₃ (mg/L)',
  gpg: 'gpg (grani per gallone)',
};

const UNIT_SHORT: Record<Unit, string> = {
  fr: '°F',
  dh: '°dH',
  ppm: 'ppm',
  gpg: 'gpg',
};

// Conversione: tutto passa per ppm di CaCO3 (mg/L)
// 1 °F = 10 ppm
// 1 °dH = 17,848 ppm
// 1 gpg = 17,118 ppm
const TO_PPM: Record<Unit, number> = {
  fr: 10,
  dh: 17.848,
  ppm: 1,
  gpg: 17.118,
};

function nf(n: number, digits = 2): string {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('it-IT', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function classify(ppm: number): { label: string; tone: string } {
  if (ppm < 75) return { label: 'Acqua dolce', tone: 'text-emerald-300' };
  if (ppm < 150)
    return { label: 'Mediamente dura', tone: 'text-sky-300' };
  if (ppm < 300) return { label: 'Dura', tone: 'text-amber-300' };
  return { label: 'Molto dura', tone: 'text-rose-300' };
}

export function DurezzaConverterCalc() {
  const [value, setValue] = useState<number>(25);
  const [unit, setUnit] = useState<Unit>('fr');

  const results = useMemo(() => {
    const ppm = value * TO_PPM[unit];
    return {
      fr: ppm / TO_PPM.fr,
      dh: ppm / TO_PPM.dh,
      ppm: ppm,
      gpg: ppm / TO_PPM.gpg,
      classification: classify(ppm),
    };
  }, [value, unit]);

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr,1.4fr]">
        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
          aria-labelledby="durezza-title"
        >
          <p
            id="durezza-title"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Inserisci il valore di partenza
          </p>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Valore durezza
            </span>
            <input
              type="number"
              min={0}
              max={10000}
              step={0.1}
              value={value}
              onChange={(e) => setValue(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Unità di partenza
            </span>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as Unit)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            >
              {(Object.keys(UNIT_LABEL) as Unit[]).map((u) => (
                <option key={u} value={u} className="bg-slate-900">
                  {UNIT_LABEL[u]}
                </option>
              ))}
            </select>
          </label>

          <p className="text-xs text-slate-400">
            Riferimenti: 1 °F = 10 ppm di CaCO₃ · 1 °dH = 17,848 ppm · 1 gpg =
            17,118 ppm. Equivalenze derivate dalla massa molare del carbonato di
            calcio.
          </p>
        </form>

        <div aria-live="polite" className="space-y-4">
          <div className="rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/15 via-sky-500/10 to-emerald-500/10 p-5 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-300">
              Classificazione
            </p>
            <p
              className={`mt-1 font-display text-2xl font-bold ${results.classification.tone}`}
            >
              {results.classification.label}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {(Object.keys(UNIT_SHORT) as Unit[]).map((u) => {
              const v = results[u];
              const isInput = u === unit;
              return (
                <div
                  key={u}
                  className={`glass rounded-xl p-4 ${
                    isInput
                      ? 'ring-2 ring-violet-400/40 bg-violet-500/10'
                      : ''
                  }`}
                >
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {UNIT_LABEL[u]}
                  </p>
                  <p className="mt-1 font-display text-2xl text-slate-100">
                    {nf(v, u === 'ppm' ? 1 : 2)}{' '}
                    <span className="text-sm text-slate-400">
                      {UNIT_SHORT[u]}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-slate-400">
            I gradi francesi (°F) sono lo standard nei rapporti di analisi
            italiani: in etichetta, sotto i 15 °F l'acqua è considerata dolce,
            sopra i 30 °F dura.
          </p>
        </div>
      </div>
    </div>
  );
}
