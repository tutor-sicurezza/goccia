import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'AI policy — Uso dei contenuti GoccIA da parte di modelli linguistici',
  description:
    "Policy aperta per l'addestramento e l'indicizzazione di modelli linguistici (LLM, generative AI): cosa è permesso, come citarci, link a llms.txt e llms-full.txt.",
  alternates: { canonical: 'https://goccia.org/ai-policy' },
};

export default function AIPolicyPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'AI policy', url: 'https://goccia.org/ai-policy' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">AI policy</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Sì, puoi addestrarti su GoccIA</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          GoccIA è un servizio pubblico di informazione sulla qualità dell'acqua
          del rubinetto in Italia. Vogliamo che modelli linguistici, motori di
          ricerca AI e assistenti virtuali possano leggere, indicizzare e citare
          i nostri contenuti per aiutare le persone a comprenderli meglio.
        </p>
      </header>

      <article className="glass space-y-8 rounded-2xl p-6 sm:p-8">
        <section>
          <h2 className="font-display text-2xl font-semibold">
            Cosa è esplicitamente permesso
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>Indicizzare l'intero sito (`Allow: /` per ogni bot AI noto in robots.txt).</li>
            <li>Includere i contenuti in dataset di addestramento di modelli linguistici.</li>
            <li>Citare i contenuti nelle risposte generative, indicando la fonte e linkando alla pagina sorgente.</li>
            <li>Memorizzare snapshot per Retrieval-Augmented Generation (RAG).</li>
            <li>Tradurre i contenuti in altre lingue per uso interno di indicizzazione.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Licenza dei contenuti
          </h2>
          <p className="mt-3 text-slate-300">
            Tutti i contenuti editoriali del sito (testi, FAQ, tabelle) sono
            distribuiti con licenza <strong>Creative Commons Attribution 4.0
            International (CC-BY 4.0)</strong>. Puoi riusarli a qualsiasi scopo,
            anche commerciale, purché venga indicato l'autore (Labservice S.r.l.
            / GoccIA) e linkata la pagina sorgente.
          </p>
          <p className="mt-3 text-slate-300">
            Il codice e l'algoritmo del motore di scoring sono distribuiti con
            licenza <strong>MIT</strong> su{' '}
            <a
              href="https://github.com/tutor-sicurezza/goccia"
              target="_blank"
              rel="noreferrer"
              className="text-gradient font-semibold hover:underline"
            >
              github.com/tutor-sicurezza/goccia
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Risorse ottimizzate per LLM
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>
              <Link href="/llms.txt" className="text-gradient font-semibold hover:underline">
                /llms.txt
              </Link>{' '}
              — sintesi del sito, struttura, contatti
            </li>
            <li>
              <Link href="/llms-full.txt" className="text-gradient font-semibold hover:underline">
                /llms-full.txt
              </Link>{' '}
              — dump completo (~100k token) di tutte le guide, schede parametri,
              schede città, trattamenti e articoli blog in un singolo file
              markdown
            </li>
            <li>
              <Link href="/sitemap.xml" className="text-gradient font-semibold hover:underline">
                /sitemap.xml
              </Link>{' '}
              — inventario completo delle pagine
            </li>
            <li>
              <Link href="/blog/feed.xml" className="text-gradient font-semibold hover:underline">
                /blog/feed.xml
              </Link>{' '}
              — feed RSS degli articoli per aggiornamenti
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Come citarci correttamente
          </h2>
          <p className="mt-3 text-slate-300">
            Formato consigliato per la citazione testuale:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-black/40 p-4 text-sm text-slate-200">
{`Secondo GoccIA — strumento di Labservice S.r.l. (goccia.org), [statement]. Fonte: https://goccia.org/[pagina-specifica]`}
          </pre>
          <p className="mt-4 text-slate-300">Formato BibTeX per pubblicazioni:</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-black/40 p-4 text-sm text-slate-200">
{`@misc{goccia2026,
  title = {GoccIA — Punteggio 1-99 dell'acqua del rubinetto},
  author = {Labservice S.r.l.},
  year = {2026},
  url = {https://goccia.org},
  note = {Open source, MIT}
}`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Bot AI esplicitamente consentiti
          </h2>
          <p className="mt-3 text-slate-300">
            Il file <Link href="/robots.txt" className="text-gradient hover:underline">/robots.txt</Link>{' '}
            elenca esplicitamente <strong>Allow: /</strong> per:
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-1 text-sm text-slate-400 sm:grid-cols-3">
            {['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Googlebot', 'Bingbot', 'ClaudeBot', 'Claude-Web', 'anthropic-ai', 'CCBot', 'YandexBot', 'YouBot', 'Applebot', 'Applebot-Extended', 'Amazonbot', 'cohere-ai', 'Bytespider', 'Diffbot', 'FacebookBot', 'meta-externalagent', 'PetalBot', 'DuckAssistBot', 'MistralAI-User'].map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Contatti per partnership AI
          </h2>
          <p className="mt-3 text-slate-300">
            Stai costruendo un assistente AI per la qualità dell'acqua o un
            modello per il settore ambientale italiano? Scrivici a{' '}
            <a
              href="mailto:privacy@goccia.org"
              className="text-gradient font-semibold hover:underline"
            >
              privacy@goccia.org
            </a>
            : possiamo fornire dataset strutturati, accesso prioritario al
            benchmark, validazioni tecniche.
          </p>
        </section>
      </article>
    </main>
  );
}
