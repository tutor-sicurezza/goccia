import type { Metadata } from 'next';
import Link from 'next/link';
import { HistoryDashboard } from '@/components/history-dashboard';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Il tuo storico analisi acqua — trend e confronto nel tempo | GoccIA',
  description:
    'Lo storico personale delle tue analisi dell\'acqua del rubinetto: trend del punteggio 1–99, parametri nel tempo e confronto tra due referti. Salvato solo nel tuo browser, senza account.',
  alternates: { canonical: 'https://goccia.org/storico' },
};

const FAQS = [
  {
    q: 'Dove vengono salvate le mie analisi?',
    a: "Esclusivamente nella memoria locale (localStorage) del browser che stai usando: non vengono inviate a nessun server, non serve un account e nessuno oltre a te può vederle. Se cambi browser o dispositivo, lo storico non ti segue.",
  },
  {
    q: 'Come aggiungo una nuova analisi allo storico?',
    a: "Calcola un punteggio con GoccIA inserendo i valori del tuo referto (o della pagina 'qualità dell'acqua' del tuo gestore): il risultato viene salvato automaticamente nello storico di questo browser.",
  },
  {
    q: 'Posso cancellare lo storico?',
    a: 'Sì, in qualsiasi momento: puoi eliminare le singole analisi o svuotare tutto lo storico con un clic. Cancellando i dati di navigazione del browser lo storico viene rimosso comunque.',
  },
  {
    q: 'A cosa serve confrontare due analisi?',
    a: "A capire se la tua acqua sta migliorando o peggiorando: ad esempio dopo l'installazione di un addolcitore, la sostituzione di tubazioni, un intervento del gestore o semplicemente tra estate e inverno. Il confronto mostra parametro per parametro i valori e l'esito (migliorato, stabile, peggiorato).",
  },
];

export default function StoricoPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Storico', url: 'https://goccia.org/storico' },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">Storico</span>
      </nav>

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Le tue analisi nel tempo
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">Il tuo storico dell&apos;acqua</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          La qualità dell&apos;acqua non è una fotografia: cambia con le stagioni,
          con gli interventi sulla rete e con l&apos;impianto di casa. Qui trovi la
          linea del tempo dei tuoi punteggi, l&apos;andamento dei singoli parametri
          e il confronto diretto tra due analisi. Tutto resta{' '}
          <strong>solo su questo browser</strong>.
        </p>
      </header>

      <HistoryDashboard />

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Domande frequenti sullo storico
        </h2>
        <dl className="mt-5 space-y-5">
          {FAQS.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-6">
        <p className="text-sm text-slate-300">
          Non sai dove trovare i valori della tua acqua?{' '}
          <Link
            href="/analisi-ufficiali"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            Scopri dove il tuo gestore pubblica le analisi ufficiali
          </Link>{' '}
          oppure{' '}
          <Link href="/" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
            calcola subito un punteggio
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
