import Link from 'next/link';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="glass p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-slate-300">
            <span className="font-medium text-slate-100">
              Strumento informativo:
            </span>{' '}
            non sostituisce il rapporto di prova di laboratorio e non
            costituisce parere medico o legale. <strong>GoccIA</strong> è un
            marchio commerciale di <strong>Labservice S.r.l.</strong>{' '}
            (anche noto come 123Acqua) — laboratorio qualificato con metodi
            validati conformi a norme tecniche. Sede legale: Via di Santo
            Stefano 6/B, 00061 Anguillara Sabazia (RM) · P.IVA IT09433191005.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {year} GoccIA · Servizio di{' '}
            <a
              href="https://123acqua.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 underline decoration-white/20 underline-offset-4 transition hover:decoration-white/60"
            >
              123acqua.com
            </a>
          </p>
          <nav aria-label="Navigazione legale">
            <ul className="flex gap-4">
              <li>
                <Link href="/privacy" className="hover:text-slate-100">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-slate-100">
                  Cookie
                </Link>
              </li>
              <li>
                <Link
                  href="/come-funziona"
                  className="hover:text-slate-100"
                >
                  Come funziona
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
