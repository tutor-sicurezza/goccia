import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PARAMETER_GUIDES, getGuideById } from '@/lib/parameter-guides';
import { PARAMETER_CONFIGS } from '@aquascore/index';
import { formatRange } from '@/lib/format';
import { LeadCTA, type LeadCTAVariant } from '@/components/lead-cta';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/json-ld';

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PARAMETER_GUIDES.map((g) => ({ id: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const guide = getGuideById(id);
  if (!guide) return { title: 'Parametro non trovato' };
  const url = `https://goccia.org/parametri/${guide.slug}`;
  return {
    title: guide.shortTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: guide.shortTitle,
      description: guide.metaDescription,
      locale: 'it_IT',
    },
  };
}

const CATEGORY_LABEL: Record<string, string> = {
  salute: 'Salute',
  estetica: 'Estetica',
  impianti: 'Impianti',
  microbiologia: 'Microbiologia',
};

const CTA_VARIANT_BY_CATEGORY: Record<string, LeadCTAVariant> = {
  salute: 'metalli-pesanti',
  microbiologia: 'microbiologica',
  estetica: 'kit-analisi',
  impianti: 'laboratorio',
};

export default async function ParameterGuidePage({ params }: PageProps) {
  const { id } = await params;
  const guide = getGuideById(id);
  if (!guide) notFound();

  const config = PARAMETER_CONFIGS.find((c) => c.id === guide.id);
  const related = guide.relatedIds
    .map((rid) => PARAMETER_GUIDES.find((g) => g.id === rid))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const url = `https://goccia.org/parametri/${guide.slug}`;
  const ctaVariantSpecial: LeadCTAVariant | null =
    guide.id === 'pfas_totali' ? 'pfas' : null;
  const ctaVariant: LeadCTAVariant =
    ctaVariantSpecial ?? CTA_VARIANT_BY_CATEGORY[guide.category] ?? 'completa';

  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: guide.shortTitle,
          description: guide.metaDescription,
          url,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Parametri', url: 'https://goccia.org/parametri' },
          { name: guide.itName, url },
        ])}
      />
      <JsonLd
        data={faqJsonLd(guide.faqs.map((f) => ({ q: f.q, a: f.a })))}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <nav aria-label="Briciole di pane" className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <span className="mx-2 text-slate-600">·</span>
        <Link href="/parametri" className="hover:text-slate-200">
          Parametri
        </Link>
        <span className="mx-2 text-slate-600">·</span>
        <span className="text-slate-300">{guide.itName}</span>
      </nav>

      <header className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          {CATEGORY_LABEL[guide.category]}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{guide.shortTitle.split(':')[0]}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{guide.intro}</p>
      </header>

      {config ? (
        <aside className="glass mb-10 rounded-2xl p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Valori di riferimento
          </p>
          <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-400">Limite di legge (D.Lgs. 18/2023)</dt>
              <dd className="mt-0.5 font-display text-lg text-slate-100">
                {formatRange(config.legal, config.unit)}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-400">Range ideale (WHO/EFSA)</dt>
              <dd className="mt-0.5 font-display text-lg text-slate-100">
                {formatRange(config.ideal, config.unit)}
              </dd>
            </div>
          </dl>
        </aside>
      ) : null}

      <article className="prose-invert space-y-10">
        {guide.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-display text-2xl font-semibold text-slate-100">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4 text-slate-300">
              {section.paragraphs.map((p, pi) => (
                <p key={pi}>{p}</p>
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

      <LeadCTA
        variant={ctaVariant}
        parameter={guide.itName.toLowerCase()}
        context={guide.ctaContext}
        tone="prominent"
      />

      {guide.faqs.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Domande frequenti
          </h2>
          <dl className="mt-5 space-y-5">
            {guide.faqs.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <dt className="font-display text-base font-semibold text-slate-100">
                  {f.q}
                </dt>
                <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-slate-100">
            Parametri correlati
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/parametri/${r.slug}`}
                  className="glass group block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <p className="font-display text-base font-semibold text-slate-100 group-hover:text-white">
                    {r.itName}
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
          Hai i valori del referto? Calcola subito il{' '}
          <Link
            href="/"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            punteggio della tua acqua del rubinetto
          </Link>{' '}
          con GoccIA — gratuito, anonimo, in italiano.
        </p>
      </section>
    </main>
  );
}
