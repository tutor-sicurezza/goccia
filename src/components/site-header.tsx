import Link from 'next/link';

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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="absolute inset-0 -z-10 bg-brand-deep/60 backdrop-blur-xl border-b border-white/5" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <DropletLogo />
          <span>
            Gocc<span className="text-gradient">IA</span>
          </span>
        </Link>
        <nav aria-label="Navigazione principale">
          <ul className="flex items-center gap-1 text-sm">
            <li>
              <Link
                href="/come-funziona"
                className="rounded-full px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Come funziona
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="rounded-full px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                Privacy
              </Link>
            </li>
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
        </nav>
      </div>
    </header>
  );
}
