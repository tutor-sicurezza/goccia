import type { Metadata } from 'next';
import { AnalysisForm } from '@/components/analysis-form';

export const metadata: Metadata = {
  title: 'GoccIA — Il punteggio della tua acqua del rubinetto',
  description:
    "Inserisci i valori del tuo referto e scopri in 30 secondi quanto è buona l'acqua del rubinetto. Punteggio 1–99, gratuito, anonimo.",
  alternates: { canonical: '/' },
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Devo essere cliente di 123Acqua?',
    a: 'No. GoccIA funziona con il referto di qualsiasi laboratorio o gestore idrico. Basta inserire i valori che trovi sul rapporto di prova.',
  },
  {
    q: 'Come viene calcolato il punteggio?',
    a: 'Il punteggio finale 1–99 è una media pesata di tre sotto-punteggi: Salute (50%), Estetica (25%) e Impianti (25%). Ogni parametro contribuisce in base al suo scostamento dal valore ideale e dal limite di legge previsto dal D.Lgs. 18/2023.',
  },
  {
    q: 'I miei dati sono al sicuro?',
    a: 'GoccIA è anonimo: non richiede registrazione. Conserviamo solo i valori del referto, il CAP eventuale e — se lo fornisci — un’email per ritrovare il risultato. Nessun dato viene venduto a terzi.',
  },
  {
    q: 'Il punteggio sostituisce un rapporto di prova?',
    a: 'No. GoccIA è uno strumento informativo e non sostituisce il rapporto di prova di laboratorio. Per esigenze legali, sanitarie o tecniche serve sempre un’analisi formale.',
  },
];

export default function HomePage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'GoccIA',
      description:
        "Strumento gratuito per calcolare un punteggio 1–99 sull'acqua del rubinetto, a partire dai valori del referto.",
      url: siteUrl,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      inLanguage: 'it',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 sm:pt-24">
        <div className="relative">
          <FloatingDroplets />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Strumento gratuito · D.Lgs. 18/2023
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              La tua acqua
              <br />
              è buona?
            </h1>
            <p className="mt-4 font-display text-3xl font-medium tracking-tight text-gradient sm:text-4xl">
              Scoprilo in 30 secondi.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Inserisci i valori del referto della tua acqua del rubinetto e
              ottieni un punteggio sintetico da 1 a 99, basato sul D.Lgs.
              18/2023. Funziona con il rapporto di prova di qualsiasi
              laboratorio o del tuo gestore idrico.
            </p>

            {/* Trust strip */}
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { t: 'Gratuito', s: 'Nessun pagamento, nessun limite.' },
                { t: 'Senza login', s: 'Nessuna registrazione richiesta.' },
                { t: 'Anonimo', s: 'Solo i valori del referto.' },
              ].map((b) => (
                <li key={b.t} className="glass hover-lift p-4">
                  <p className="font-display text-sm font-semibold text-white">
                    {b.t}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{b.s}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tre sotto-punteggi,
              <br />
              un solo numero.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-400">
              Ogni parametro contribuisce a tre dimensioni distinte. Il
              punteggio finale è una media pesata che riflette ciò che conta
              davvero.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <HealthIcon />,
              label: 'Salute',
              weight: '50%',
              copy: 'Metalli, nitrati, microbiologia, PFAS. Pesa il doppio rispetto agli altri.',
              tone: 'from-emerald-400/30 to-emerald-500/10',
            },
            {
              icon: <DropIcon />,
              label: 'Estetica',
              weight: '25%',
              copy: 'Sapore, odore, colore, torbidità. Ciò che percepisci nel bicchiere.',
              tone: 'from-sky-400/30 to-sky-500/10',
            },
            {
              icon: <PipeIcon />,
              label: 'Impianti',
              weight: '25%',
              copy: 'pH, durezza, conducibilità. Effetti su tubature, elettrodomestici, caldaia.',
              tone: 'from-violet-400/30 to-violet-500/10',
            },
          ].map((c) => (
            <div key={c.label} className="glass hover-lift p-6">
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.tone} text-white ring-1 ring-white/10`}
              >
                {c.icon}
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold text-white">
                  {c.label}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {c.weight}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{c.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section
        id="calcola"
        className="mx-auto mt-24 max-w-5xl px-5 scroll-mt-24"
      >
        <div className="glass-strong relative overflow-hidden p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
          />
          <div className="relative">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Calcolatore
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Inserisci i valori del tuo referto
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                Lascia vuoti i parametri che non hai. Bastano pochi valori per
                ottenere un punteggio indicativo. I parametri di salute pesano
                di più.
              </p>
            </div>
            <div className="mt-8">
              <AnalysisForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-24 max-w-4xl px-5">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Domande frequenti
        </h2>
        <div className="mt-8 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="glass group p-5 transition open:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="font-display text-base font-semibold text-white">
                  {f.q}
                </span>
                <span
                  className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Soft CTA */}
      <section className="mx-auto mt-24 max-w-4xl px-5">
        <div className="glass relative overflow-hidden p-8 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Vuoi un rapporto di prova ufficiale?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                123Acqua è il laboratorio qualificato che opera con metodi
                validati conformi a norme tecniche.
              </p>
            </div>
            <a
              href="https://123acqua.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Apri 123acqua.com
              <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      <div className="h-16" />
    </>
  );
}

function FloatingDroplets() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 right-0 hidden h-72 w-72 lg:block"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full animate-float">
        <defs>
          <linearGradient id="hero-drop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M100 20 C 60 70 40 100 40 130 a 60 60 0 0 0 120 0 c 0 -30 -20 -60 -60 -110 z"
          fill="url(#hero-drop)"
        />
      </svg>
    </div>
  );
}

function HealthIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function DropIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PipeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12h7m4 0h7M10 6v12h4V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5l-9 9M5 5h5v0M5 19h14v-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
