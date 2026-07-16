'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function DropletLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]"
    >
      <defs>
        <linearGradient id="drop-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="55%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </linearGradient>
      </defs>
      <path
        d="M16 2 C 9 12 5 18 5 22 a 11 11 0 0 0 22 0 c 0 -4 -4 -10 -11 -20 z"
        fill="url(#drop-grad)"
      />
      <ellipse cx="12.5" cy="20" rx="2.5" ry="3.5" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: '/analisi-acqua', label: 'Acqua per comune' },
  { href: '/analisi-ufficiali', label: 'Analisi ufficiali' },
  { href: '/parametri', label: 'Parametri' },
  { href: '/acque-minerali', label: 'Acque minerali' },
  { href: '/come-funziona', label: 'Come funziona' },
  { href: '/glossario', label: 'Glossario' },
  { href: '/press-kit', label: 'Press kit' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Chiudi il drawer con Escape (a11y).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="absolute inset-0 -z-10 bg-brand-deep/60 backdrop-blur-xl border-b border-white/5" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <DropletLogo />
          <span>
            Gocc<span className="text-gradient">IA</span>
          </span>
        </Link>

        <nav aria-label="Navigazione principale">
          {/* Desktop */}
          <ul className="hidden items-center gap-1 text-sm sm:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="hidden sm:block">
                <Link
                  href={l.href}
                  className="rounded-full px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://123acqua.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-slate-100 transition hover:border-white/25 hover:bg-white/10"
              >
                123Acqua
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-100 transition hover:border-white/25 hover:bg-white/10 sm:hidden"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="border-b border-white/5 bg-brand-deep/95 backdrop-blur-xl sm:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="https://123acqua.com"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-center text-slate-100 transition hover:border-white/25 hover:bg-white/10"
              >
                123Acqua
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
