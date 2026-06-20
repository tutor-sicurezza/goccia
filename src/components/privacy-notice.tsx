'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'goccia-notice-dismissed';

export function PrivacyNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch {
      /* localStorage non disponibile (es. ITP/strict): non mostriamo */
    }
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
      role="dialog"
      aria-live="polite"
      aria-labelledby="privacy-notice-title"
      className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md"
    >
      <div className="glass rounded-2xl border border-white/10 p-4 shadow-2xl backdrop-blur-xl">
        <p
          id="privacy-notice-title"
          className="font-display text-sm font-semibold text-slate-100"
        >
          Nessun cookie, nessun tracker.
        </p>
        <p className="mt-1 text-sm text-slate-300">
          GoccIA non usa cookie di profilazione né analytics di terze parti. Le
          submission sono anonime e l'IP è salvato solo come hash salato.{' '}
          <Link
            href="/privacy"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            Informativa
          </Link>
          {' · '}
          <Link
            href="/cookie-policy"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            Cookie policy
          </Link>
        </p>
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg bg-gradient-to-r from-purple-500 to-sky-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Ho capito
          </button>
        </div>
      </div>
    </div>
  );
}
