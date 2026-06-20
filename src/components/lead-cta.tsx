import Link from 'next/link';

export type LeadCTAVariant =
  | 'kit-analisi'
  | 'laboratorio'
  | 'rapporto-prova'
  | 'metalli-pesanti'
  | 'microbiologica'
  | 'pfas'
  | 'completa'
  | 'parametro';

interface LeadCTAProps {
  variant: LeadCTAVariant;
  parameter?: string;
  context?: string;
  tone?: 'soft' | 'prominent';
}

const ANCHOR: Record<Exclude<LeadCTAVariant, 'parametro'>, string> = {
  'kit-analisi': "Kit di analisi dell'acqua del rubinetto",
  laboratorio: 'Analisi acqua in laboratorio qualificato',
  'rapporto-prova': "Rapporto di prova dell'acqua con metodi validati",
  'metalli-pesanti': "Analisi dei metalli pesanti nell'acqua",
  microbiologica: "Analisi microbiologica dell'acqua del rubinetto",
  pfas: "Analisi PFAS nell'acqua del rubinetto",
  completa: "Analisi completa dell'acqua del rubinetto",
};

const URL_123 = 'https://123acqua.com';

function anchorText(variant: LeadCTAVariant, parameter?: string): string {
  if (variant === 'parametro') {
    const p = (parameter ?? 'parametro').trim();
    return `Analisi di ${p} nell'acqua del rubinetto`;
  }
  return ANCHOR[variant];
}

function DropletIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3.5c-2.8 4.2-5.5 6.8-5.5 10a5.5 5.5 0 0 0 11 0c0-3.2-2.7-5.8-5.5-10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="url(#g)"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LeadCTA({
  variant,
  parameter,
  context,
  tone = 'soft',
}: LeadCTAProps) {
  const anchor = anchorText(variant, parameter);
  const isProminent = tone === 'prominent';

  return (
    <aside
      className={
        isProminent
          ? 'glass mt-10 rounded-2xl border-2 border-violet-400/30 p-6 shadow-[0_0_60px_-20px_rgba(139,92,246,0.4)] sm:p-8'
          : 'glass mt-8 rounded-2xl p-5 sm:p-6'
      }
    >
      {context ? (
        <p className="text-sm text-slate-300 sm:text-base">{context}</p>
      ) : null}
      <div className={isProminent ? 'mt-4' : 'mt-3'}>
        <Link
          href={URL_123}
          target="_blank"
          rel="noreferrer"
          className={
            isProminent
              ? 'group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-sky-400'
              : 'group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-violet-400/40 hover:bg-white/[0.07]'
          }
        >
          <DropletIcon />
          <span>{anchor} — su 123acqua.com</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12h14m0 0-5-5m5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <p className="mt-3 text-xs text-slate-400">
        Servizio di <strong>Labservice S.r.l.</strong> — laboratorio qualificato
        con metodi validati conformi a norme tecniche.
      </p>
    </aside>
  );
}
