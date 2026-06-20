import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie policy — GoccIA',
  description:
    "Questo sito non utilizza cookie di profilazione né di terze parti. Spiegazione tecnica completa.",
};

export default function CookiePolicyPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Cookie policy
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Cookie? Nessuno.</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Questo sito <strong>non utilizza cookie</strong>. Non ne installa,
          non ne legge, non ne condivide con terze parti. Lo abbiamo testato e
          puoi verificarlo tu stesso con gli strumenti di sviluppo del browser.
        </p>
      </header>

      <article className="glass space-y-8 rounded-2xl p-6 sm:p-8">
        <section>
          <h2 className="font-display text-2xl font-semibold">
            Verifica indipendente
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-300">
            <li>Apri questo sito in una scheda nuova (in incognito è meglio)</li>
            <li>Apri gli strumenti di sviluppo (F12) → tab <em>Application</em> → <em>Cookies</em></li>
            <li>Selezione <code>goccia.org</code> nella sidebar: <strong>la lista è vuota</strong></li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Cosa NON usiamo
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Nessun cookie tecnico (non c'è autenticazione né carrello)</li>
            <li>Nessun cookie analitico (no Google Analytics, no Plausible, no Matomo)</li>
            <li>Nessun cookie di profilazione</li>
            <li>Nessun cookie di terze parti</li>
            <li>Nessun pixel pubblicitario (no Meta, no TikTok, no LinkedIn Insight)</li>
            <li>Nessun fingerprinting del browser</li>
            <li>Nessuna integrazione embed che setti cookie (no YouTube, no Twitter, no Instagram)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Cosa usiamo invece
          </h2>
          <p className="mt-3 text-slate-300">
            Per ricordare la chiusura dell'informativa privacy nel banner di
            primo accesso usiamo <code>localStorage</code> del browser (chiave{' '}
            <code>goccia-notice-dismissed</code>). Si tratta di archiviazione
            locale lato utente, non di un cookie, e non viene mai inviata al
            server. Puoi cancellarla dagli strumenti di sviluppo del browser in
            qualsiasi momento.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Perché nessun cookie?
          </h2>
          <p className="mt-3 text-slate-300">
            Perché non ne abbiamo bisogno. Il sito è stateless: tu inserisci i
            valori, noi calcoliamo il punteggio, ti mostriamo il risultato. Non
            usiamo analytics terze perché il valore per l'utente è zero e il
            costo per la sua privacy è alto.
          </p>
          <p className="mt-3 text-slate-300">
            Per i dettagli completi sul trattamento dei dati (anonimi) di
            submission, consulta l'{' '}
            <Link href="/privacy" className="text-gradient font-semibold hover:underline">
              informativa privacy
            </Link>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
