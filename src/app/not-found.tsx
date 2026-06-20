import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina non trovata — GoccIA',
  description: 'La pagina che cercavi non esiste o è stata spostata.',
};

export default function NotFound() {
  return (
    <main className="relative mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="glass w-full rounded-2xl p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Errore 404
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight sm:text-6xl">
          <span className="text-gradient">Pagina non trovata</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          La pagina che stavi cercando non esiste, è stata spostata oppure il
          link è scaduto.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </main>
  );
}
