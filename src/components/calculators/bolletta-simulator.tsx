'use client';

import { useMemo, useState } from 'react';

function nf(n: number, digits = 2): string {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('it-IT', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function BollettaSimulatorCalc() {
  const [persone, setPersone] = useState<number>(3);
  const [litri, setLitri] = useState<number>(200);
  const [tariffa, setTariffa] = useState<number>(1.9);

  const result = useMemo(() => {
    const consumoAnnuoM3 = (persone * litri * 365) / 1000;
    const costoAnnuo = consumoAnnuoM3 * tariffa;
    const costoMensile = costoAnnuo / 12;
    const costoGiornaliero = costoAnnuo / 365;
    const litriAnnui = persone * litri * 365;
    const costoBottiglia = litriAnnui * 0.3; // 0,30 €/L bottiglia
    const risparmioVsBottiglia = costoBottiglia - costoAnnuo;
    const percentRisparmio =
      costoBottiglia > 0 ? (risparmioVsBottiglia / costoBottiglia) * 100 : 0;

    return {
      consumoAnnuoM3,
      costoAnnuo,
      costoMensile,
      costoGiornaliero,
      costoBottiglia,
      risparmioVsBottiglia,
      percentRisparmio,
    };
  }, [persone, litri, tariffa]);

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr,1.4fr]">
        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
          aria-labelledby="bolletta-title"
        >
          <p
            id="bolletta-title"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Parametri famiglia e tariffa
          </p>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Persone in casa
            </span>
            <input
              type="number"
              min={1}
              max={15}
              step={1}
              value={persone}
              onChange={(e) => setPersone(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Litri al giorno per persona
            </span>
            <input
              type="number"
              min={50}
              max={500}
              step={10}
              value={litri}
              onChange={(e) => setLitri(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
            <span className="mt-1 block text-xs text-slate-400">
              Media italiana ISTAT: 215 L/persona/giorno
            </span>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Tariffa media €/m³
            </span>
            <input
              type="number"
              min={0.3}
              max={6}
              step={0.05}
              value={tariffa}
              onChange={(e) => setTariffa(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
            <span className="mt-1 block text-xs text-slate-400">
              Media nazionale 2024: 1,90 €/m³ comprensivi di fognatura e
              depurazione
            </span>
          </label>

          <p className="text-xs text-slate-400">
            Stima indicativa: la bolletta reale dipende da quote fisse,
            scaglioni, IVA e fondi regionali, che variano per gestore.
          </p>
        </form>

        <div aria-live="polite" className="space-y-4">
          <div className="rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/15 via-sky-500/10 to-emerald-500/10 p-6 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-300">
              Costo annuo bolletta acqua
            </p>
            <p className="mt-2 font-display text-5xl font-bold text-white">
              € {nf(result.costoAnnuo)}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              su {nf(result.consumoAnnuoM3, 1)} m³ consumati
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="glass rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Costo mensile
              </p>
              <p className="mt-1 font-display text-xl text-slate-100">
                € {nf(result.costoMensile)}
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Costo al giorno
              </p>
              <p className="mt-1 font-display text-xl text-slate-100">
                € {nf(result.costoGiornaliero)}
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Stesso volume in bottiglia
              </p>
              <p className="mt-1 font-display text-xl text-rose-200">
                € {nf(result.costoBottiglia, 0)}
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Risparmio vs bottiglia
              </p>
              <p className="mt-1 font-display text-xl text-emerald-200">
                {nf(result.percentRisparmio, 1)}%
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Riferimento prezzo bottiglia: 0,30 €/L (acqua minerale formato 1,5
            L). Il rubinetto resta in media oltre 100 volte più economico anche
            quando la tariffa locale è alta.
          </p>
        </div>
      </div>
    </div>
  );
}
