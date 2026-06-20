'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'goccia-sticky-cta-dismissed';

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEY);
      if (dismissed) return;
    } catch {
      return;
    }

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 1.5) {
        setVisible(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Suggerimento analisi"
      className="fixed inset-x-3 bottom-3 z-40 sm:inset-x-auto sm:left-1/2 sm:bottom-4 sm:-translate-x-1/2 sm:max-w-xl"
    >
      <div className="glass-strong flex items-center gap-3 rounded-2xl border border-violet-400/30 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-sky-500/30 sm:flex">
          <svg className="h-5 w-5 text-sky-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3.5c-2.8 4.2-5.5 6.8-5.5 10a5.5 5.5 0 0 0 11 0c0-3.2-2.7-5.8-5.5-10Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="flex-1 text-sm">
          <p className="font-semibold text-white">Vuoi una misurazione strumentale?</p>
          <p className="text-xs text-slate-300 sm:text-sm">
            Analisi dell'acqua del rubinetto con un laboratorio qualificato.
          </p>
        </div>
        <Link
          href="https://123acqua.com"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-3 py-2 text-xs font-semibold text-white shadow-md transition hover:opacity-90 sm:px-4 sm:text-sm"
        >
          123acqua.com
        </Link>
        <button
          type="button"
          aria-label="Chiudi"
          onClick={dismiss}
          className="shrink-0 rounded-lg p-1.5 text-slate-400 transition hover:bg-white/5 hover:text-slate-200"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6l-6.01 6.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
