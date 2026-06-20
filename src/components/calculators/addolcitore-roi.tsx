'use client';

import { useMemo, useState } from 'react';

function nf(n: number, digits = 0): string {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('it-IT', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function applianceSavingPerYear(durezzaF: number): number {
  if (durezzaF < 25) return 50;
  if (durezzaF <= 40) return 150;
  return 250;
}

function detergentSavingPerYear(durezzaF: number): number {
  if (durezzaF < 25) return 30;
  if (durezzaF <= 40) return 55;
  return 80;
}

export function AddolcitoreROICalc() {
  const [durezza, setDurezza] = useState<number>(32);
  const [persone, setPersone] = useState<number>(3);
  const [costoIniziale, setCostoIniziale] = useState<number>(1200);
  const [costoSale, setCostoSale] = useState<number>(80);
  const [costoManutenzione, setCostoManutenzione] = useState<number>(60);
  const [anni, setAnni] = useState<number>(10);

  const result = useMemo(() => {
    const annualRecurring = costoSale + costoManutenzione;
    const totalCost = costoIniziale + annualRecurring * anni;

    // Risparmi proporzionati al numero di persone (più persone = più carichi lavatrice, più docce)
    const personScale = Math.max(0.6, Math.min(1.6, persone / 3));
    const applianceSaving = applianceSavingPerYear(durezza) * personScale;
    const detergentSaving = detergentSavingPerYear(durezza) * personScale;
    const totalAnnualSaving = applianceSaving + detergentSaving;
    const totalSaving = totalAnnualSaving * anni;

    const net = totalSaving - totalCost;
    const breakEvenYears =
      totalAnnualSaving > annualRecurring
        ? costoIniziale / (totalAnnualSaving - annualRecurring)
        : Infinity;

    return {
      totalCost,
      totalSaving,
      net,
      breakEvenYears,
      verdict:
        net > 200
          ? 'positivo'
          : net < -200
            ? 'negativo'
            : 'neutro',
      annualRecurring,
      totalAnnualSaving,
    };
  }, [
    durezza,
    persone,
    costoIniziale,
    costoSale,
    costoManutenzione,
    anni,
  ]);

  const verdictTone =
    result.verdict === 'positivo'
      ? 'text-emerald-300'
      : result.verdict === 'negativo'
        ? 'text-rose-300'
        : 'text-amber-300';

  const verdictLabel =
    result.verdict === 'positivo'
      ? 'ROI positivo'
      : result.verdict === 'negativo'
        ? 'ROI negativo'
        : 'ROI neutro';

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr,1.3fr]">
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
          aria-labelledby="roi-title"
        >
          <p
            id="roi-title"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Inserisci i tuoi parametri
          </p>

          {[
            {
              label: 'Durezza attuale (°F)',
              value: durezza,
              set: setDurezza,
              min: 0,
              max: 100,
              step: 1,
            },
            {
              label: 'Persone in famiglia',
              value: persone,
              set: setPersone,
              min: 1,
              max: 12,
              step: 1,
            },
            {
              label: 'Costo iniziale addolcitore (€)',
              value: costoIniziale,
              set: setCostoIniziale,
              min: 0,
              max: 10000,
              step: 50,
            },
            {
              label: 'Costo sale annuo (€)',
              value: costoSale,
              set: setCostoSale,
              min: 0,
              max: 1000,
              step: 10,
            },
            {
              label: 'Costo manutenzione annua (€)',
              value: costoManutenzione,
              set: setCostoManutenzione,
              min: 0,
              max: 1000,
              step: 10,
            },
            {
              label: 'Anni di proiezione',
              value: anni,
              set: setAnni,
              min: 1,
              max: 25,
              step: 1,
            },
          ].map((field) => (
            <label key={field.label} className="block">
              <span className="text-sm font-semibold text-slate-200">
                {field.label}
              </span>
              <input
                type="number"
                min={field.min}
                max={field.max}
                step={field.step}
                value={field.value}
                onChange={(e) =>
                  field.set(Number(e.target.value) || 0)
                }
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
              />
            </label>
          ))}

          <p className="text-xs text-slate-400">
            Stima conservativa basata su intervalli tipici di mercato. Varia per
            famiglia, marca degli elettrodomestici, costi locali e qualità
            dell&apos;installazione.
          </p>
        </form>

        <div aria-live="polite" className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="glass rounded-2xl border border-rose-400/20 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Costo totale a {anni} anni
              </p>
              <p className="mt-2 font-display text-3xl text-rose-200">
                € {nf(result.totalCost)}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Iniziale + {nf(result.annualRecurring)} €/anno ricorrenti
              </p>
            </div>

            <div className="glass rounded-2xl border border-emerald-400/20 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Risparmio totale a {anni} anni
              </p>
              <p className="mt-2 font-display text-3xl text-emerald-200">
                € {nf(result.totalSaving)}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Elettrodomestici + detergenti
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/15 via-sky-500/10 to-emerald-500/10 p-6 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-300">
              Verdetto economico
            </p>
            <p
              className={`mt-2 font-display text-4xl font-bold ${verdictTone}`}
            >
              {verdictLabel}
            </p>
            <p className="mt-2 text-base text-slate-200">
              {result.net >= 0 ? 'Guadagno netto: ' : 'Perdita netta: '}
              <span className="font-semibold">
                € {nf(Math.abs(result.net))}
              </span>
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {Number.isFinite(result.breakEvenYears)
                ? `Punto di pareggio stimato: ${nf(result.breakEvenYears, 1)} anni`
                : 'Con questa durezza il risparmio annuo non copre i costi ricorrenti'}
            </p>
          </div>

          <p className="text-xs text-slate-400">
            La stima è conservativa: con acqua dolce (&lt; 15 °F) un addolcitore
            è spesso superfluo, con acqua molto dura (&gt; 40 °F) il ritorno
            economico è più probabile ma resta condizionato da abitudini e
            consumi reali.
          </p>
        </div>
      </div>
    </div>
  );
}
