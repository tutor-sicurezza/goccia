'use client';

import { useMemo, useState } from 'react';

type Activity = 'sedentaria' | 'leggera' | 'moderata' | 'intensa';

const ACTIVITY_FACTOR: Record<Activity, number> = {
  sedentaria: 30,
  leggera: 35,
  moderata: 40,
  intensa: 45,
};

const ACTIVITY_LABEL: Record<Activity, string> = {
  sedentaria: 'Sedentaria',
  leggera: 'Leggera (camminate)',
  moderata: 'Moderata (sport 2-3v/sett.)',
  intensa: 'Intensa (sport quotidiano)',
};

function nf(n: number, digits = 1): string {
  return n.toLocaleString('it-IT', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function HydrationCalculator() {
  const [weight, setWeight] = useState<number>(70);
  const [activity, setActivity] = useState<Activity>('moderata');
  const [hotClimate, setHotClimate] = useState<boolean>(false);
  const [pregnant, setPregnant] = useState<boolean>(false);

  const result = useMemo(() => {
    let baseMl = weight * ACTIVITY_FACTOR[activity];
    if (hotClimate) baseMl += 500;
    if (pregnant) baseMl += 300;
    const liters = baseMl / 1000;
    const glasses = Math.round(liters / 0.25);
    const tapCost = liters * 0.003;
    const bottleCost = liters * 0.30;
    return {
      liters,
      glasses,
      yearlyLiters: liters * 365,
      yearlyTapCost: tapCost * 365,
      yearlyBottleCost: bottleCost * 365,
      yearlyBottles15: Math.round((liters * 365) / 1.5),
    };
  }, [weight, activity, hotClimate, pregnant]);

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
          aria-labelledby="hydration-title"
        >
          <p
            id="hydration-title"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Inserisci i tuoi dati
          </p>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">Peso (kg)</span>
            <input
              type="number"
              min={20}
              max={250}
              step={1}
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">Attività fisica</span>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value as Activity)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none"
            >
              {(Object.keys(ACTIVITY_LABEL) as Activity[]).map((a) => (
                <option key={a} value={a} className="bg-slate-900">
                  {ACTIVITY_LABEL[a]}
                </option>
              ))}
            </select>
          </label>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={hotClimate}
                onChange={(e) => setHotClimate(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-black/40 text-violet-500 focus:ring-violet-400"
              />
              Clima caldo o umido / sudorazione abbondante
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={pregnant}
                onChange={(e) => setPregnant(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-black/40 text-violet-500 focus:ring-violet-400"
              />
              Gravidanza o allattamento
            </label>
          </div>

          <p className="text-xs text-slate-400">
            Stima basata su linee guida EFSA/SINU. Non sostituisce parere medico
            individuale.
          </p>
        </form>

        <div aria-live="polite" className="space-y-4">
          <div className="rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/15 via-sky-500/10 to-emerald-500/10 p-6 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-300">
              Fabbisogno idrico quotidiano
            </p>
            <p className="mt-2 font-display text-5xl font-bold text-white">
              {nf(result.liters)} L
            </p>
            <p className="mt-1 text-sm text-slate-300">
              circa {result.glasses} bicchieri da 250 ml
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="glass rounded-xl p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">In un anno</p>
              <p className="mt-1 font-display text-lg text-slate-100">{nf(result.yearlyLiters, 0)} L</p>
            </div>
            <div className="glass rounded-xl p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Bottiglie 1,5 L/anno</p>
              <p className="mt-1 font-display text-lg text-slate-100">{result.yearlyBottles15}</p>
            </div>
            <div className="glass rounded-xl p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Costo/anno acqua rubinetto</p>
              <p className="mt-1 font-display text-lg text-emerald-300">
                € {nf(result.yearlyTapCost, 2)}
              </p>
            </div>
            <div className="glass rounded-xl p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Costo/anno acqua minerale</p>
              <p className="mt-1 font-display text-lg text-rose-300">
                € {nf(result.yearlyBottleCost, 2)}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Stima conservativa: 0,003 €/L rubinetto, 0,30 €/L minerale 1,5 L. Il
            costo reale varia per fornitura locale, marca e formato.
          </p>
        </div>
      </div>
    </div>
  );
}
