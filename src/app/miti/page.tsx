import type { Metadata } from 'next';
import Link from 'next/link';
import { MYTH_PAGES } from '@/lib/myth-pages';
import { LeadCTA } from '@/components/lead-cta';
import { SponsorBanner } from '@/components/sponsor-banner';
import JsonLd, { breadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: "10 miti sull'acqua del rubinetto: la verità basata sulla scienza",
  description:
    "Calcare e calcoli renali, microplastiche in bottiglia, fluoro e tiroide, residuo fisso e altri miti diffusi sull'acqua del rubinetto verificati su evidenze WHO/EFSA/ISS.",
  alternates: { canonical: 'https://goccia.org/miti' },
};

const VERDICT_TONE: Record<string, string> = {
  falso: 'bg-rose-400/15 text-rose-200',
  'parzialmente-vero': 'bg-amber-400/15 text-amber-200',
  'vero-ma-fraintendimento': 'bg-amber-400/15 text-amber-200',
  dipende: 'bg-sky-400/15 text-sky-200',
  vero: 'bg-emerald-400/15 text-emerald-200',
};
const VERDICT_LABEL: Record<string, string> = {
  falso: 'Falso',
  'parzialmente-vero': 'Parzialmente vero',
  'vero-ma-fraintendimento': 'Vero ma frainteso',
  dipende: 'Dipende',
  vero: 'Vero',
};

export default function MythsIndexPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'Miti', url: 'https://goccia.org/miti' },
      ])} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <header className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Miti e verità</p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">10 miti sull'acqua del rubinetto</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Quello che si dice al bar è spesso diverso da quello che dicono WHO,
          EFSA, ISS. Passiamo in rassegna 10 affermazioni diffuse e diamo il
          verdetto onesto basato sulle fonti.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {MYTH_PAGES.map((m) => (
          <li key={m.slug}>
            <Link href={`/miti/${m.slug}`} className="glass group block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/40">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${VERDICT_TONE[m.verdict] ?? ''}`}>
                {VERDICT_LABEL[m.verdict] ?? m.verdict}
              </span>
              <p className="mt-3 font-display text-base font-semibold text-slate-100 group-hover:text-white">
                "{m.myth}"
              </p>
              <p className="mt-2 text-sm text-slate-400 line-clamp-2">{m.verdictSummary}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12"><SponsorBanner /></div>
      <LeadCTA
        variant="completa"
        context="Per andare oltre i miti e ottenere dati reali sulla TUA acqua, considera un'analisi con un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
