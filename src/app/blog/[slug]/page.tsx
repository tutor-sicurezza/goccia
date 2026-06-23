import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog-posts';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import { renderText } from '@/lib/render-text';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/json-ld';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getPostBySlug(slug);
  if (!p) return { title: 'Articolo non trovato' };
  const url = `https://goccia.org/blog/${p.slug}`;
  return {
    title: p.shortTitle,
    description: p.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: p.shortTitle,
      description: p.metaDescription,
      locale: 'it_IT',
      publishedTime: p.publishedAt,
    },
  };
}

const CATEGORY_LABEL: Record<string, string> = {
  salute: 'Salute',
  casa: 'Casa',
  ambiente: 'Ambiente',
  normativa: 'Normativa',
  scienza: 'Scienza',
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const p = getPostBySlug(slug);
  if (!p) notFound();

  const url = `https://goccia.org/blog/${p.slug}`;
  const related = (p.relatedSlugs ?? [])
    .map((s) => BLOG_POSTS.find((b) => b.slug === s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const formattedDate = new Date(p.publishedAt).toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: p.shortTitle,
          description: p.metaDescription,
          url,
          datePublished: p.publishedAt,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Blog', url: 'https://goccia.org/blog' },
          { name: p.title, url },
        ])}
      />
      <JsonLd data={faqJsonLd(p.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">Home</Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/blog" className="hover:text-slate-200">Blog</Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{p.title}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          <span>{CATEGORY_LABEL[p.category] ?? p.category}</span>
          <span aria-hidden>·</span>
          <time dateTime={p.publishedAt}>{formattedDate}</time>
          <span aria-hidden>·</span>
          <span>{p.readingMinutes} min</span>
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{p.title}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{p.excerpt}</p>
      </header>

      <article className="prose-invert space-y-10">
        {p.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4 text-slate-300">
              {section.paragraphs.map((para, pi) => (
                <p key={pi}>{renderText(para)}</p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="list-disc space-y-1.5 pl-5">
                  {section.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </article>

      <div className="mt-10">
        <SponsorBanner variant="compact" />
      </div>

      <LeadCTA
        variant="completa"
        context={
          p.ctaContext ??
          "Per un'analisi completa dell'acqua del rubinetto con un laboratorio qualificato che utilizza metodi validati conformi alle norme tecniche:"
        }
        tone="prominent"
      />

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-slate-100">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {p.faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-slate-100">Articoli correlati</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                    {r.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                    {r.metaDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-6">
        <p className="text-sm text-slate-300">
          Hai un referto?{' '}
          <Link href="/" className="font-semibold text-sky-300 underline-offset-2 hover:underline">
            Calcola il punteggio della tua acqua con GoccIA
          </Link>{' '}
          in 30 secondi.
        </p>
      </section>
    </main>
  );
}
