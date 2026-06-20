import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, {
  breadcrumbJsonLd,
  organizationJsonLd,
} from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Chi siamo — GoccIA e Labservice S.r.l.',
  description:
    "Chi c'è dietro GoccIA: Labservice S.r.l. (123Acqua), laboratorio italiano qualificato. Perché abbiamo fatto un tool gratuito sull'acqua del rubinetto e cosa offriamo a pagamento.",
  alternates: { canonical: 'https://goccia.org/chi-siamo' },
};

const PAGE_URL = 'https://goccia.org/chi-siamo';

function aboutPageJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: PAGE_URL,
    inLanguage: 'it-IT',
    name: 'Chi siamo — GoccIA e Labservice S.r.l.',
    description:
      'Pagina istituzionale di GoccIA: il progetto è di Labservice S.r.l., laboratorio italiano qualificato noto al pubblico come 123Acqua.',
    about: { '@id': 'https://123acqua.com#organization' },
    publisher: { '@id': 'https://123acqua.com#organization' },
    mainEntity: { '@id': 'https://123acqua.com#organization' },
  };
}

export default function ChiSiamoPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={aboutPageJsonLd()} />
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Chi siamo', url: PAGE_URL },
        ])}
      />

      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <article>
        <header className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
            Chi siamo
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="text-gradient">GoccIA è di Labservice S.r.l.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            GoccIA non è un progetto anonimo: dietro al sito c'è un'azienda con
            nome, partita IVA, sede e responsabili. Riteniamo che, per uno
            strumento che parla di salute pubblica, sapere chi lo gestisce sia
            la prima forma di trasparenza.
          </p>
        </header>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">Il laboratorio</h2>
          <p className="mt-4 text-slate-300">
            <strong>Labservice S.r.l.</strong> nasce come laboratorio di analisi
            chimiche e microbiologiche, con sede ad Anguillara Sabazia (RM). Si
            occupa di analisi sulle acque destinate al consumo umano, sui
            prodotti alimentari e su matrici ambientali. Il laboratorio opera
            con metodi validati conformi a norme tecniche e con processi
            tecnici documentati. Verso il pubblico Labservice si presenta con
            il marchio <strong>123Acqua</strong>, all'indirizzo{' '}
            <a
              href="https://123acqua.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
            >
              123acqua.com
            </a>
            .
          </p>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">Perché GoccIA</h2>
          <p className="mt-4 text-slate-300">
            Negli anni abbiamo visto migliaia di cittadini arrivare in
            laboratorio con un referto in mano e una domanda semplice:
            «scusi, ma questa acqua va bene?». Le strisce reattive da banco
            sono qualitative: dicono «c'è» o «non c'è», non «quanto». I kit
            casalinghi misurano due o tre parametri. I rapporti di prova veri
            sono completi ma difficili da leggere senza un minimo di
            background tecnico.
          </p>
          <p className="mt-4 text-slate-300">
            Mancava una via di mezzo: uno strumento <strong>gratuito</strong>,{' '}
            <strong>deterministico</strong>, in <strong>italiano</strong>, che
            partisse dai numeri di un referto reale e restituisse
            un'indicazione sintetica, leggibile a chiunque. GoccIA nasce per
            coprire esattamente questo gap.
          </p>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Cosa offriamo gratis
          </h2>
          <p className="mt-4 text-slate-300">
            Su goccia.org tutto quello che vedi è e resta gratuito: il
            calcolatore del punteggio 1–99, le guide su ciascun parametro, le
            schede sulle principali città italiane, i confronti
            rubinetto-vs-minerale, il glossario, il calcolatore dell'impatto
            CO₂ delle bottiglie di plastica. Niente login, niente cookie di
            profilazione, niente banner pubblicitari, niente vendita di dati.
          </p>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Cosa offriamo a pagamento
          </h2>
          <p className="mt-4 text-slate-300">
            Su 123acqua.com il laboratorio Labservice offre analisi reali
            dell'acqua del rubinetto: kit di prelievo recapitati a domicilio,
            analisi in laboratorio, rapporto di prova firmato e supporto
            interpretativo. È il passaggio per chi vuole muoversi
            dall'indicazione (GoccIA) alla certezza tecnica (un rapporto di
            prova). Sono due livelli diversi e li teniamo separati anche nella
            comunicazione: GoccIA non vende analisi, 123Acqua non regala
            punteggi.
          </p>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">Trasparenza</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-200 marker:text-sky-400">
            <li>
              <Link
                href="/metodo-scientifico"
                className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                Il metodo scientifico, le fonti e i limiti dichiarati
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/tutor-sicurezza/goccia"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                Il codice del motore di scoring su GitHub (MIT)
              </a>
            </li>
            <li>
              <Link
                href="/privacy"
                className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/cookie-policy"
                className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                Cookie policy
              </Link>
            </li>
          </ul>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">Contatti</h2>
          <ul className="mt-4 space-y-2 text-slate-200">
            <li>
              Email progetto:{' '}
              <a
                href="mailto:privacy@goccia.org"
                className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                privacy@goccia.org
              </a>
            </li>
            <li>
              Laboratorio:{' '}
              <a
                href="https://123acqua.com"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                123acqua.com
              </a>
            </li>
            <li>
              Sede legale: Labservice S.r.l., Via di Santo Stefano 6/B, 00061
              Anguillara Sabazia (RM).
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
