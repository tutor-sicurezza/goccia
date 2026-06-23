import * as React from 'react';

interface SponsorBannerProps {
  variant?: 'compact' | 'wide';
}

/**
 * Sponsor disclosure: il progetto open source GoccIA è sponsorizzato da Labservice (123acqua.com).
 * Etichettato chiaramente come "Sponsor del progetto" per trasparenza editoriale.
 * Il link usa rel="sponsored" come da Google guidelines per sponsorizzazioni dichiarate.
 *
 * Anchor text VARIATO in base alla pagina (passa una `anchor` custom se vuoi).
 */
export function SponsorBanner({ variant = 'wide' }: SponsorBannerProps) {
  if (variant === 'compact') {
    return (
      <aside
        role="complementary"
        aria-label="Sponsor del progetto open source"
        className="glass rounded-2xl border border-violet-400/20 p-4 sm:p-5"
      >
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Sponsor del progetto open source
        </p>
        <p className="mt-1.5 text-sm text-slate-300">
          GoccIA è un progetto educativo open source di{' '}
          <strong className="text-slate-100">Labservice S.r.l.</strong>, che mette a
          disposizione kit di prelievo e refertazione professionale per chi vuole
          andare oltre la stima.
        </p>
        <p className="mt-3 text-sm">
          <a
            href="https://123acqua.com"
            target="_blank"
            rel="sponsored noopener"
            className="inline-flex items-center gap-1.5 font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            Analisi acqua del rubinetto su 123acqua.com
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 7h10v10M7 17 17 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </p>
      </aside>
    );
  }

  return (
    <aside
      role="complementary"
      aria-label="Sponsor del progetto open source"
      className="relative overflow-hidden rounded-3xl border border-violet-400/25 bg-gradient-to-br from-violet-500/10 via-sky-500/8 to-emerald-500/10 p-6 sm:p-8"
    >
      <div className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/3 opacity-30">
        <div className="h-40 w-40 rounded-full bg-gradient-to-br from-violet-500 to-sky-500 blur-3xl" />
      </div>
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-200">
          Sponsor del progetto open source
        </p>
        <h2 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
          GoccIA è gratuito e open source grazie a{' '}
          <span className="text-gradient">123Acqua</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          Tutti gli articoli, le guide e gli strumenti che leggi sono pubblicati
          gratuitamente grazie a <strong>Labservice S.r.l.</strong>, il
          laboratorio italiano di analisi delle acque potabili che sostiene il
          progetto. Quando vuoi passare dalla stima al dato strumentale, puoi
          rivolgerti direttamente al laboratorio sponsor.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="https://123acqua.com"
            target="_blank"
            rel="sponsored noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Analisi acqua su 123acqua.com
            <svg
              className="h-4 w-4"
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
          </a>
          <span className="text-xs text-slate-400">
            Servizio commerciale di Labservice S.r.l. · P.IVA IT09433191005
          </span>
        </div>
      </div>
    </aside>
  );
}
