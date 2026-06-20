'use client';

import { useMemo, useState } from 'react';

const SITE_URL = 'https://goccia.org/impatto-bottiglie-plastica';

const CO2_PER_BOTTLE_KG = 0.085;
const PLASTIC_PER_BOTTLE_KG = 0.035;
const BOTTLE_SIZE_L = 1.5;
const TAP_WATER_COST_PER_L = 0.003;

function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat('it-IT', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatMass(kg: number): string {
  if (kg >= 1000) {
    return `${formatNumber(kg / 1000, 2)} t`;
  }
  return `${formatNumber(kg, 1)} kg`;
}

interface NumberFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  hint?: string;
}

function NumberField({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  hint,
}: NumberFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={Number.isFinite(value) ? value : ''}
          onChange={(e) => {
            const parsed = parseFloat(e.target.value.replace(',', '.'));
            if (Number.isNaN(parsed)) {
              onChange(0);
              return;
            }
            onChange(Math.min(max, Math.max(min, parsed)));
          }}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 pr-14 text-base font-semibold text-slate-50 outline-none transition focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/30"
        />
        {suffix ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400"
          >
            {suffix}
          </span>
        ) : null}
      </div>
      {hint ? <p className="text-xs text-slate-400">{hint}</p> : null}
    </div>
  );
}

interface ResultCardProps {
  icon: string;
  label: string;
  value: string;
  sub?: string;
  accent: 'violet' | 'sky' | 'emerald' | 'amber';
}

const ACCENTS: Record<ResultCardProps['accent'], string> = {
  violet: 'from-violet-500/20 to-violet-500/0 ring-violet-400/30',
  sky: 'from-sky-500/20 to-sky-500/0 ring-sky-400/30',
  emerald: 'from-emerald-500/20 to-emerald-500/0 ring-emerald-400/30',
  amber: 'from-amber-500/20 to-amber-500/0 ring-amber-400/30',
};

function ResultCard({ icon, label, value, sub, accent }: ResultCardProps) {
  return (
    <div
      className={`glass relative overflow-hidden rounded-2xl p-5 ring-1 transition hover:-translate-y-0.5 hover:shadow-xl sm:p-6 ${ACCENTS[accent]}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ACCENTS[accent]} opacity-60`}
      />
      <div className="relative">
        <div className="text-3xl" aria-hidden="true">
          {icon}
        </div>
        <div className="mt-3 text-xs uppercase tracking-wider text-slate-300">
          {label}
        </div>
        <div className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {value}
        </div>
        {sub ? (
          <div className="mt-1 text-xs text-slate-300">{sub}</div>
        ) : null}
      </div>
    </div>
  );
}

function ShareButton({
  href,
  label,
  external = true,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-violet-400/40"
    >
      {label}
    </a>
  );
}

export function CO2Calculator() {
  const [people, setPeople] = useState<number>(4);
  const [litersPerDay, setLitersPerDay] = useState<number>(1.5);
  const [costPerLiter, setCostPerLiter] = useState<number>(0.3);
  const [years, setYears] = useState<number>(5);
  const [copied, setCopied] = useState<boolean>(false);

  const r = useMemo(() => {
    const totalLiters = people * litersPerDay * 365 * years;
    const bottles = totalLiters / BOTTLE_SIZE_L;
    const co2Kg = bottles * CO2_PER_BOTTLE_KG;
    const plasticKg = bottles * PLASTIC_PER_BOTTLE_KG;
    const bottleCost = totalLiters * costPerLiter;
    const tapCost = totalLiters * TAP_WATER_COST_PER_L;
    const savings = Math.max(0, bottleCost - tapCost);
    return { totalLiters, bottles, co2Kg, plasticKg, bottleCost, tapCost, savings };
  }, [people, litersPerDay, costPerLiter, years]);

  const shareText = `Scegliendo l'acqua del rubinetto, una famiglia di ${formatNumber(
    people,
  )} persone in ${formatNumber(years)} anni risparmia: ${formatNumber(
    r.bottles,
  )} bottiglie, ${formatNumber(r.co2Kg, 0)} kg CO2, ${formatCurrency(
    r.savings,
  )}. Calcola la tua: ${SITE_URL}`;

  async function handleShare() {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({
          title: 'Quanto inquino con l\'acqua in bottiglia?',
          text: shareText,
          url: SITE_URL,
        });
        return;
      } catch {
        // fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  const encoded = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(SITE_URL);

  return (
    <section
      aria-label="Calcolatore impatto bottiglie di plastica"
      className="glass relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="noise pointer-events-none absolute inset-0 opacity-30"
      />
      <div className="relative">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              <span className="text-gradient">Calcolatore impatto</span>{' '}
              <span className="text-white">bottiglie di plastica</span>
            </h2>
            <p className="mt-1 text-sm text-slate-300 sm:text-base">
              Inserisci i dati della tua famiglia: i risultati si aggiornano in tempo reale.
            </p>
          </div>
        </div>

        <form
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <NumberField
            id="people"
            label="Persone in famiglia"
            value={people}
            onChange={setPeople}
            min={1}
            max={20}
            step={1}
            suffix="pers."
            hint="Quante persone consumano acqua in casa"
          />
          <NumberField
            id="litersPerDay"
            label="Litri al giorno per persona"
            value={litersPerDay}
            onChange={setLitersPerDay}
            min={0.1}
            max={10}
            step={0.1}
            suffix="L"
            hint="Consumo medio raccomandato ~1,5–2 L"
          />
          <NumberField
            id="costPerLiter"
            label="Costo bottiglia"
            value={costPerLiter}
            onChange={setCostPerLiter}
            min={0.05}
            max={5}
            step={0.01}
            suffix="€/L"
            hint="Prezzo medio scaffale per litro"
          />
          <NumberField
            id="years"
            label="Anni di proiezione"
            value={years}
            onChange={setYears}
            min={1}
            max={20}
            step={1}
            suffix="anni"
            hint="Orizzonte temporale (max 20)"
          />
        </form>

        <div
          aria-live="polite"
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <ResultCard
            icon="🌍"
            label="CO2 evitata"
            value={formatMass(r.co2Kg)}
            sub={`stimati su ${formatNumber(r.bottles)} bottiglie`}
            accent="emerald"
          />
          <ResultCard
            icon="🧴"
            label="Bottiglie evitate"
            value={formatNumber(r.bottles)}
            sub={`${formatNumber(r.totalLiters)} litri totali`}
            accent="sky"
          />
          <ResultCard
            icon="💰"
            label="Risparmio"
            value={formatCurrency(r.savings)}
            sub={`vs ${formatCurrency(r.bottleCost)} in bottiglie`}
            accent="amber"
          />
          <ResultCard
            icon="⚖️"
            label="Plastica non prodotta"
            value={formatMass(r.plasticKg)}
            sub="peso PET vergine evitato"
            accent="violet"
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <div className="text-sm font-semibold text-white">
              Condividi il tuo risultato
            </div>
            <div className="text-xs text-slate-400">
              Aiuta altre famiglie a scoprire quanto incide la scelta dell&apos;acqua.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {copied ? 'Copiato negli appunti' : 'Condividi'}
            </button>
            <ShareButton
              href={`https://twitter.com/intent/tweet?text=${encoded}`}
              label="X / Twitter"
            />
            <ShareButton
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encoded}`}
              label="Facebook"
            />
            <ShareButton
              href={`https://api.whatsapp.com/send?text=${encoded}`}
              label="WhatsApp"
            />
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Stime conservative basate su letteratura LCA (Life Cycle Assessment)
          disponibile: 85 g CO2 e 35 g di PET per bottiglia da 1,5 L; 0,003 €/L
          come costo indicativo medio dell&apos;acqua del rubinetto in Italia.
        </p>
      </div>
    </section>
  );
}
