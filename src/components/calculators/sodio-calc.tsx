'use client';

import { useMemo, useState } from 'react';

const WHO_LIMIT_MG = 2000; // 2 g sodio = 5 g sale al giorno

function nf(n: number, digits = 0): string {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('it-IT', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function SodioCalc() {
  const [naAcqua, setNaAcqua] = useState<number>(30);
  const [litri, setLitri] = useState<number>(2.0);
  const [saleCibo, setSaleCibo] = useState<number>(6);

  const result = useMemo(() => {
    const fromWater = litri * naAcqua; // mg
    const fromFood = saleCibo * 1000 * 0.4; // mg (40% di NaCl è sodio)
    const total = fromWater + fromFood;
    const percentLimit = (total / WHO_LIMIT_MG) * 100;
    const waterShare = total > 0 ? (fromWater / total) * 100 : 0;
    return {
      fromWater,
      fromFood,
      total,
      percentLimit,
      waterShare,
    };
  }, [naAcqua, litri, saleCibo]);

  const tone =
    result.total < 2000
      ? { color: 'text-emerald-300', border: 'border-emerald-400/30', label: 'Entro il limite WHO' }
      : result.total <= 2500
        ? { color: 'text-amber-300', border: 'border-amber-400/30', label: 'Oltre il limite raccomandato' }
        : { color: 'text-rose-300', border: 'border-rose-400/30', label: 'Significativamente oltre il limite' };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr,1.4fr]">
        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
          aria-labelledby="sodio-title"
        >
          <p
            id="sodio-title"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Acqua e cibo quotidiani
          </p>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Sodio nell&apos;acqua (mg/L)
            </span>
            <input
              type="number"
              min={0}
              max={500}
              step={1}
              value={naAcqua}
              onChange={(e) => setNaAcqua(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
            <span className="mt-1 block text-xs text-slate-400">
              Valore in etichetta: oligominerali ~1-10 mg/L, mediominerali
              ~10-50 mg/L
            </span>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Litri bevuti al giorno
            </span>
            <input
              type="number"
              min={0.2}
              max={6}
              step={0.1}
              value={litri}
              onChange={(e) => setLitri(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Sale assunto da cibo (g/giorno)
            </span>
            <input
              type="number"
              min={0}
              max={30}
              step={0.5}
              value={saleCibo}
              onChange={(e) => setSaleCibo(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
            <span className="mt-1 block text-xs text-slate-400">
              Media italiana adulti (CUORE/ISS): circa 9-10 g/giorno; WHO
              raccomanda &lt; 5 g
            </span>
          </label>

          <p className="text-xs text-slate-400">
            Calcolo educativo: il sodio totale dipende anche da alimenti
            trasformati e abitudini. Non sostituisce parere medico per chi segue
            dieta iposodica.
          </p>
        </form>

        <div aria-live="polite" className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="glass rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Sodio dall&apos;acqua
              </p>
              <p className="mt-1 font-display text-2xl text-sky-200">
                {nf(result.fromWater)} mg
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {nf(result.waterShare, 1)}% del totale
              </p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Sodio dal cibo
              </p>
              <p className="mt-1 font-display text-2xl text-amber-200">
                {nf(result.fromFood)} mg
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {nf(100 - result.waterShare, 1)}% del totale
              </p>
            </div>
            <div
              className={`rounded-2xl border ${tone.border} bg-black/30 p-4 sm:col-span-1 col-span-2`}
            >
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Sodio totale
              </p>
              <p className={`mt-1 font-display text-2xl ${tone.color}`}>
                {nf(result.total)} mg
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {nf(result.percentLimit, 0)}% del limite WHO
              </p>
            </div>
          </div>

          <div
            className={`rounded-2xl border ${tone.border} bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-5 text-center`}
          >
            <p className="text-xs uppercase tracking-wide text-slate-300">
              Valutazione complessiva
            </p>
            <p className={`mt-2 font-display text-2xl font-bold ${tone.color}`}>
              {tone.label}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Limite WHO: 2.000 mg di sodio (≈ 5 g di sale) al giorno
            </p>
          </div>

          <p className="text-xs text-slate-400">
            Per la maggior parte degli adulti l&apos;acqua contribuisce poco al
            sodio quotidiano: il vero margine di miglioramento è ridurre cibi
            molto salati (pane, salumi, formaggi stagionati, snack confezionati).
          </p>
        </div>
      </div>
    </div>
  );
}
