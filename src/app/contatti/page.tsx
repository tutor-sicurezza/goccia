import type { Metadata } from 'next';
import Link from 'next/link';
import { pageTitle } from '@/lib/seo';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

const PAGE_URL = 'https://goccia.org/contatti';

export const metadata: Metadata = {
  title: pageTitle('Contatti'),
  description:
    'Scrivi a GoccIA (Labservice S.r.l.): domande sul punteggio dell’acqua, segnalazioni sui contenuti o richieste di analisi. Rispondiamo via email.',
  alternates: { canonical: PAGE_URL },
};

const input =
  'mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-violet-400/60 focus:outline-none';
const label = 'block text-sm font-medium text-slate-200';

/**
 * Modulo contatti: POST HTML classico verso /api/contatti (funziona anche senza
 * JavaScript). L'API inoltra il messaggio via email e reindirizza a
 * /contatti/inviato solo se l'invio riesce, altrimenti a /contatti/errore.
 */
export default function ContattiPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Contatti', url: PAGE_URL },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Contatti</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Scrivici</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Domande sul punteggio, segnalazioni sui contenuti o richieste di analisi di
          laboratorio: compila il modulo e ti rispondiamo all&apos;indirizzo email che indichi.
        </p>
      </header>

      <form method="post" action="/api/contatti" className="glass space-y-4 rounded-2xl p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="nome" className={label}>Nome e cognome *</label>
            <input id="nome" name="nome" type="text" required minLength={2} maxLength={120} autoComplete="name" className={input} />
          </div>
          <div>
            <label htmlFor="email" className={label}>Email *</label>
            <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={input} />
          </div>
          <div>
            <label htmlFor="telefono" className={label}>Telefono</label>
            <input id="telefono" name="telefono" type="tel" maxLength={40} autoComplete="tel" className={input} />
          </div>
          <div>
            <label htmlFor="azienda" className={label}>Azienda</label>
            <input id="azienda" name="azienda" type="text" maxLength={160} autoComplete="organization" className={input} />
          </div>
        </div>
        <div>
          <label htmlFor="messaggio" className={label}>Messaggio *</label>
          <textarea id="messaggio" name="messaggio" required minLength={5} maxLength={4000} rows={6} className={input} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
          <label htmlFor="website">Non compilare questo campo</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <input type="hidden" name="t" id="contatti-t" defaultValue="" />
        <label className="flex items-start gap-2 text-xs text-slate-300">
          <input
            name="privacy"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-black/40 text-violet-500 focus:ring-violet-400"
          />
          <span>
            Ho letto l&apos;
            <Link href="/privacy" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
              informativa privacy
            </Link>{' '}
            e acconsento al trattamento dei miei dati per ricevere una risposta a questa richiesta. *
          </span>
        </label>
        <p className="text-xs text-slate-500">* campi obbligatori</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Invia il messaggio
        </button>
      </form>
      <script
        dangerouslySetInnerHTML={{
          __html: "document.getElementById('contatti-t').value=String(Date.now());",
        }}
      />
    </main>
  );
}
