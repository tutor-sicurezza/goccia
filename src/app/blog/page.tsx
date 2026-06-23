import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-posts';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "Blog GoccIA: articoli, approfondimenti, scienza dell'acqua del rubinetto",
  description:
    "Articoli evergreen sulla qualità dell'acqua del rubinetto in Italia: PFAS, piombo, microplastiche, durezza, normativa D.Lgs. 18/2023 e direttiva UE 2020/2184.",
  alternates: { canonical: 'https://goccia.org/blog' },
};

const CATEGORY_LABEL: Record<string, string> = {
  salute: 'Salute',
  casa: 'Casa',
  ambiente: 'Ambiente',
  normativa: 'Normativa',
  scienza: 'Scienza',
};

export default function BlogIndexPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Blog', url: 'https://goccia.org/blog' },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Blog</p>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="text-gradient">Approfondimenti sull'acqua</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Articoli divulgativi e fattuali su qualità, normativa, casa e
            scienza dell'acqua del rubinetto. Niente clickbait, niente miti.
          </p>
        </div>
        <Link
          href="/blog/feed.xml"
          prefetch={false}
          className="self-start rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs uppercase tracking-wide text-slate-200 hover:border-violet-400/40"
        >
          RSS
        </Link>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {sorted.map((p) => {
          const date = new Date(p.publishedAt).toLocaleDateString('it-IT', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          });
          return (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="glass group flex h-full flex-col rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {CATEGORY_LABEL[p.category] ?? p.category} · {date} ·{' '}
                  {p.readingMinutes} min
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-slate-100 group-hover:text-white">
                  {p.title}
                </p>
                <p className="mt-2 text-sm text-slate-400 line-clamp-3">
                  {p.metaDescription}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-12">
        <SponsorBanner />
      </div>

      <LeadCTA
        variant="completa"
        context="Per un'analisi accurata dei parametri di cui leggi negli articoli con un laboratorio qualificato che utilizza metodi validati conformi alle norme tecniche:"
        tone="prominent"
      />
    </main>
  );
}
