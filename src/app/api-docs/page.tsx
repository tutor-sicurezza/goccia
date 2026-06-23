import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'API GoccIA — open data sui parametri dell\'acqua del rubinetto',
  description:
    "Documentazione API REST pubblica e gratuita per i 24 parametri dell'acqua potabile italiana (D.Lgs. 18/2023). Licenza CC-BY 4.0, niente chiave richiesta.",
  alternates: { canonical: 'https://goccia.org/api-docs' },
};

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-black/40 p-4 text-xs text-slate-100">
      <code>{children}</code>
    </pre>
  );
}

export default function ApiDocsPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'API docs', url: 'https://goccia.org/api-docs' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Open data API</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">API GoccIA</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Endpoint REST pubblici per i 24 parametri dell'acqua potabile italiana
          analizzati dal motore GoccIA. Dati conformi al D.Lgs. 18/2023 e alle
          linee guida WHO/EFSA. Niente chiave API, niente registrazione,
          licenza <strong>CC-BY 4.0</strong>.
        </p>
      </header>

      <section className="glass mb-10 rounded-2xl p-5">
        <h2 className="font-display text-xl font-semibold text-slate-100">Base URL</h2>
        <p className="mt-2 text-sm text-slate-300">
          <code className="text-emerald-300">https://goccia.org/api/v1</code>
        </p>
        <p className="mt-3 text-xs text-slate-400">
          CORS aperto (<code>Access-Control-Allow-Origin: *</code>) · Cache 1h ·
          Risposta JSON. Rate limit non strict ma evita più di 60 richieste/minuto.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          GET /api/v1/parameters
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Restituisce l'elenco completo dei 24 parametri con limiti di legge,
          range ideali, pesi del subscore e link alla scheda divulgativa.
        </p>
        <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">Esempio cURL</p>
        <Code>{`curl -s https://goccia.org/api/v1/parameters | jq '.parameters[0]'`}</Code>
        <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">Esempio risposta (estratto)</p>
        <Code>{`{
  "api": "GoccIA Open Data",
  "version": "v1",
  "license": "CC-BY 4.0",
  "parameters": [
    {
      "id": "ph",
      "name_it": "pH",
      "aliases": ["ph", "p.h.", "concentrazione ioni idrogeno"],
      "unit": "unità pH",
      "legal_limit": { "min": 6.5, "max": 9.5 },
      "ideal_range": { "min": 7, "max": 8 },
      "weights": { "health": 0, "aesthetic": 0.3, "pipe": 0.7 },
      "microbiological": false,
      "guide_url": "https://goccia.org/parametri/ph",
      "source": {
        "legal": "D.Lgs. 18/2023 (recepimento Direttiva UE 2020/2184)",
        "ideal": "WHO Guidelines for Drinking-water Quality (4th ed.) — EFSA"
      }
    }
  ]
}`}</Code>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          GET /api/v1/parameters/{'{id}'}
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Restituisce i dettagli di un singolo parametro per id (es.{' '}
          <code className="text-emerald-300">piombo</code>,{' '}
          <code className="text-emerald-300">e_coli</code>,{' '}
          <code className="text-emerald-300">pfas_totali</code>).
        </p>
        <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">Esempio cURL</p>
        <Code>{`curl -s https://goccia.org/api/v1/parameters/piombo`}</Code>
        <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">Risposta</p>
        <Code>{`{
  "id": "piombo",
  "name_it": "Piombo",
  "aliases": ["piombo", "pb", "lead"],
  "unit": "µg/L",
  "legal_limit": { "max": 10 },
  "ideal_range": { "max": 1 },
  "weights": { "health": 1, "aesthetic": 0, "pipe": 0 },
  "microbiological": false,
  "guide_url": "https://goccia.org/parametri/piombo",
  "license": "CC-BY 4.0",
  "citation": "GoccIA — goccia.org — Labservice S.r.l."
}`}</Code>
      </section>

      <section className="mb-10 glass rounded-2xl p-5">
        <h2 className="font-display text-xl font-semibold text-slate-100">
          Come citare l'API
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          La licenza CC-BY 4.0 richiede solo che venga indicata la fonte.
          Formato consigliato:
        </p>
        <Code>{`Dati: GoccIA Open Data API — goccia.org — Labservice S.r.l. — CC-BY 4.0`}</Code>
        <p className="mt-3 text-xs text-slate-400">
          Per pubblicazioni accademiche:
        </p>
        <Code>{`@misc{goccia_api_2026,
  title = {GoccIA Open Data API: parametri dell'acqua potabile italiana},
  author = {{Labservice S.r.l.}},
  year = {2026},
  url = {https://goccia.org/api-docs},
  note = {CC-BY 4.0}
}`}</Code>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Esempi d'uso</h2>
        <div className="mt-5 space-y-4">
          <div className="glass rounded-2xl p-5">
            <p className="font-display text-base font-semibold text-slate-100">
              JavaScript / Node
            </p>
            <Code>{`const res = await fetch('https://goccia.org/api/v1/parameters/nitrati');
const data = await res.json();
console.log(data.legal_limit.max); // 50`}</Code>
          </div>
          <div className="glass rounded-2xl p-5">
            <p className="font-display text-base font-semibold text-slate-100">
              Python
            </p>
            <Code>{`import requests
data = requests.get('https://goccia.org/api/v1/parameters').json()
for p in data['parameters']:
    print(p['id'], p['legal_limit'])`}</Code>
          </div>
        </div>
      </section>

      <section className="glass rounded-2xl border border-violet-400/30 p-5">
        <h2 className="font-display text-xl font-semibold text-slate-100">Contatti developer</h2>
        <p className="mt-2 text-sm text-slate-300">
          Bug, feature request, integrazioni:{' '}
          <a
            href="mailto:dev@goccia.org"
            className="text-sky-300 underline-offset-2 hover:underline"
          >
            dev@goccia.org
          </a>{' '}
          o aprire una issue su{' '}
          <a
            href="https://github.com/tutor-sicurezza/goccia/issues"
            target="_blank"
            rel="noreferrer"
            className="text-sky-300 underline-offset-2 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
        <p className="mt-3 text-xs text-slate-400">
          Vedi anche il <Link href="/press-kit" className="text-sky-300 underline-offset-2 hover:underline">press kit</Link> per asset visivi, embed widget e contatti stampa.
        </p>
      </section>
    </main>
  );
}
