'use client';

import { useMemo, useState } from 'react';

function todayISO(): string {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function oneYearAgoISO(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 1);
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function addMonthsISO(base: Date, months: number): Date {
  const d = new Date(base);
  d.setMonth(d.getMonth() + months);
  return d;
}

function formatIT(d: Date): string {
  return d.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function AnalisiTimingCalc() {
  const [annoEdificio, setAnnoEdificio] = useState<number>(1970);
  const [ultimaAnalisi, setUltimaAnalisi] = useState<string>(oneYearAgoISO());
  const [neonati, setNeonati] = useState<boolean>(false);
  const [gravidanza, setGravidanza] = useState<boolean>(false);
  const [zonaPFAS, setZonaPFAS] = useState<boolean>(false);
  const [zonaArsenico, setZonaArsenico] = useState<boolean>(false);

  const result = useMemo(() => {
    // Mesi base per età edificio
    let baseMonths: number;
    if (annoEdificio < 1960) baseMonths = 12;
    else if (annoEdificio < 1990) baseMonths = 24;
    else baseMonths = 36;

    const reasons: string[] = [];
    reasons.push(
      annoEdificio < 1960
        ? `Edificio pre-1960 (${annoEdificio}): tubazioni potenzialmente in piombo o ferro zincato → base 12 mesi`
        : annoEdificio < 1990
          ? `Edificio ${annoEdificio}: rete privata di età media → base 24 mesi`
          : `Edificio post-1990 (${annoEdificio}): tubazioni moderne → base 36 mesi`,
    );

    let months = baseMonths;
    if (neonati) {
      months -= 6;
      reasons.push('Presenza neonati: −6 mesi (più sensibili a nitrati e metalli)');
    }
    if (gravidanza) {
      months -= 6;
      reasons.push('Gravidanza in corso: −6 mesi (controllo nitrati e contaminanti)');
    }
    if (zonaPFAS) {
      months -= 12;
      reasons.push('Zona a rischio PFAS: −12 mesi (es. Veneto, Lombardia)');
    }
    if (zonaArsenico) {
      months -= 12;
      reasons.push('Zona ad arsenico (Lazio, Viterbese, vulcanico): −12 mesi');
    }

    if (months < 6) {
      months = 6;
      reasons.push('Minimo applicato: 6 mesi tra due analisi consecutive');
    }

    const last = new Date(ultimaAnalisi);
    if (Number.isNaN(last.getTime())) {
      return {
        months,
        reasons,
        nextDate: null,
        overdueDays: 0,
        isOverdue: false,
        isImminent: false,
      };
    }
    const next = addMonthsISO(last, months);
    const today = new Date(todayISO());
    const diffMs = next.getTime() - today.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    return {
      months,
      reasons,
      nextDate: next,
      overdueDays: -diffDays,
      isOverdue: diffDays < 0,
      isImminent: diffDays >= 0 && diffDays <= 60,
    };
  }, [annoEdificio, ultimaAnalisi, neonati, gravidanza, zonaPFAS, zonaArsenico]);

  const verdictTone = result.isOverdue
    ? { color: 'text-rose-300', border: 'border-rose-400/30', label: 'Analisi in ritardo' }
    : result.isImminent
      ? { color: 'text-amber-300', border: 'border-amber-400/30', label: 'Analisi imminente' }
      : { color: 'text-emerald-300', border: 'border-emerald-400/30', label: 'Tempistica adeguata' };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr,1.3fr]">
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
          aria-labelledby="timing-title"
        >
          <p
            id="timing-title"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Dati personali e abitativi
          </p>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Anno di costruzione edificio
            </span>
            <input
              type="number"
              min={1800}
              max={new Date().getFullYear()}
              step={1}
              value={annoEdificio}
              onChange={(e) => setAnnoEdificio(Number(e.target.value) || 0)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-200">
              Data ultima analisi
            </span>
            <input
              type="date"
              max={todayISO()}
              value={ultimaAnalisi}
              onChange={(e) => setUltimaAnalisi(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-base text-white focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            />
          </label>

          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-slate-200">
              Fattori di rischio personali
            </legend>
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={neonati}
                onChange={(e) => setNeonati(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-black/40 text-violet-500 focus:ring-2 focus:ring-violet-400"
              />
              Neonati o bambini &lt; 3 anni in casa
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={gravidanza}
                onChange={(e) => setGravidanza(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-black/40 text-violet-500 focus:ring-2 focus:ring-violet-400"
              />
              Gravidanza in corso
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={zonaPFAS}
                onChange={(e) => setZonaPFAS(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-black/40 text-violet-500 focus:ring-2 focus:ring-violet-400"
              />
              Zona a rischio PFAS (es. Veneto, Lombardia)
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={zonaArsenico}
                onChange={(e) => setZonaArsenico(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-black/40 text-violet-500 focus:ring-2 focus:ring-violet-400"
              />
              Zona ad arsenico (Lazio/Viterbese vulcanico)
            </label>
          </fieldset>

          <p className="text-xs text-slate-400">
            La raccomandazione è prudenziale: anche un&apos;acqua pubblica
            conforme può deteriorarsi nell&apos;ultimo tratto privato.
          </p>
        </form>

        <div aria-live="polite" className="space-y-4">
          <div
            className={`rounded-2xl border ${verdictTone.border} bg-gradient-to-br from-violet-500/15 via-sky-500/10 to-emerald-500/10 p-6 text-center`}
          >
            <p className="text-xs uppercase tracking-wide text-slate-300">
              Prossima analisi consigliata
            </p>
            <p className="mt-2 font-display text-3xl font-bold text-white">
              {result.nextDate ? formatIT(result.nextDate) : '—'}
            </p>
            <p className={`mt-2 text-sm font-semibold ${verdictTone.color}`}>
              {verdictTone.label}
              {result.isOverdue
                ? ` (in ritardo di ${result.overdueDays} giorni)`
                : ''}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Intervallo applicato: {result.months} mesi
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Fattori considerati
            </p>
            <ul className="mt-2 space-y-2 text-sm text-slate-200">
              {result.reasons.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-0.5 text-violet-300">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-slate-400">
            Le frequenze sono indicazioni di buon senso, non un obbligo
            normativo: l&apos;obbligo del gestore copre solo la rete pubblica
            fino al contatore.
          </p>
        </div>
      </div>
    </div>
  );
}
