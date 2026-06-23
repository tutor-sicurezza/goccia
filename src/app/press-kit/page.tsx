import type { Metadata } from 'next';
import Link from 'next/link';
import { PRESS_KIT } from '@/lib/press-kit';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: PRESS_KIT.metaTitle,
  description: PRESS_KIT.metaDescription,
  alternates: { canonical: 'https://goccia.org/press-kit' },
  openGraph: {
    type: 'website',
    url: 'https://goccia.org/press-kit',
    title: PRESS_KIT.metaTitle,
    description: PRESS_KIT.metaDescription,
    locale: 'it_IT',
  },
};

function CopyableBlock({ label, content }: { label: string; content: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-lg bg-black/40 p-4 text-sm text-slate-100">
        {content}
      </pre>
    </div>
  );
}

export default function PressKitPage() {
  const k = PRESS_KIT;
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Press kit', url: 'https://goccia.org/press-kit' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">{k.hero.eyebrow}</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">{k.hero.title}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{k.hero.intro}</p>
      </header>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Sintesi in una riga</h2>
        <CopyableBlock label="One-liner citabile" content={k.oneliner} />
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Biografia tecnica</h2>
        <p className="mt-1 text-sm text-slate-400">Estendibile in un articolo. CC-BY 4.0 — basta citare la fonte.</p>
        <CopyableBlock label="Long description" content={k.longDescription} />
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Fatti citabili</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {k.facts.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">{f.label}</p>
              <p className="mt-1 font-display text-sm font-semibold text-slate-100">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Storia del progetto</h2>
        <p className="mt-3 text-slate-300">{k.founderStory}</p>
      </section>

      {[k.positioning, k.scientificMethod, k.legalNotice].map((s, i) => (
        <section key={i} className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-slate-100">{s.heading}</h2>
          <div className="mt-3 space-y-3 text-slate-300">
            {s.paragraphs.map((p, pi) => <p key={pi}>{p}</p>)}
            {s.bullets && s.bullets.length > 0 ? (
              <ul className="list-disc space-y-1.5 pl-5">
                {s.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Contatti stampa</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {k.contacts.map((c, i) => (
            <li key={i} className="glass rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">{c.role}</p>
              <p className="mt-1 font-display text-sm font-semibold text-slate-100">{c.name}</p>
              <p className="mt-1 text-sm">
                <a href={`mailto:${c.email}`} className="text-sky-300 underline-offset-2 hover:underline">{c.email}</a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Asset visivi</h2>
        <p className="mt-1 text-sm text-slate-400">Tutti gli asset sono distribuiti con licenza CC-BY 4.0. Cita "GoccIA" o "Labservice S.r.l." come fonte.</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {k.mediaAssets.map((m, i) => (
            <li key={i} className="glass rounded-2xl p-4">
              <p className="font-display text-sm font-semibold text-slate-100">{m.label}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{m.format}</p>
              <p className="mt-1 text-xs text-slate-300">{m.description}</p>
              <a
                href={m.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xs font-semibold text-sky-300 underline-offset-2 hover:underline"
              >
                Apri / scarica
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Embed e widget</h2>
        <p className="mt-1 text-sm text-slate-400">Copia-incolla sul tuo sito o blog: ci linki automaticamente.</p>
        <div className="mt-5 space-y-4">
          {k.embedSnippets.map((e, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <p className="font-display text-base font-semibold text-slate-100">{e.label}</p>
              <p className="mt-1 text-sm text-slate-400">{e.description}</p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-black/40 p-4 text-xs text-slate-100">
                <code>{e.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 glass rounded-2xl border border-violet-400/30 p-6">
        <h2 className="font-display text-xl font-semibold text-slate-100">Per chi sviluppa</h2>
        <p className="mt-2 text-sm text-slate-300">
          Abbiamo una API REST pubblica con i metadati dei 24 parametri secondo D.Lgs. 18/2023. Documentazione su{' '}
          <Link href="/api-docs" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
            /api-docs
          </Link>
          . Endpoint:{' '}
          <code className="text-emerald-300">https://goccia.org/api/v1/parameters</code>.
          Licenza dati: CC-BY 4.0. Nessuna chiave richiesta. Rate limit ragionevole.
        </p>
      </section>
    </main>
  );
}
