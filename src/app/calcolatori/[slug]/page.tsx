import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CALCULATORS_META } from '@/lib/calculators-meta';
import { DurezzaConverterCalc } from '@/components/calculators/durezza-converter';
import { AddolcitoreROICalc } from '@/components/calculators/addolcitore-roi';
import { BollettaSimulatorCalc } from '@/components/calculators/bolletta-simulator';
import { SodioCalc } from '@/components/calculators/sodio-calc';
import { AnalisiTimingCalc } from '@/components/calculators/analisi-timing';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, { articleJsonLd, breadcrumbJsonLd } from '@/components/json-ld';

interface PageProps { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return CALCULATORS_META.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = CALCULATORS_META.find((x) => x.slug === slug);
  if (!c) return { title: 'Calcolatore non trovato' };
  const url = `https://goccia.org/calcolatori/${c.slug}`;
  return {
    title: c.shortTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, title: c.shortTitle, description: c.metaDescription, locale: 'it_IT' },
  };
}

function renderCalc(componentName: string) {
  switch (componentName) {
    case 'DurezzaConverterCalc': return <DurezzaConverterCalc />;
    case 'AddolcitoreROICalc': return <AddolcitoreROICalc />;
    case 'BollettaSimulatorCalc': return <BollettaSimulatorCalc />;
    case 'SodioCalc': return <SodioCalc />;
    case 'AnalisiTimingCalc': return <AnalisiTimingCalc />;
    default: return null;
  }
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const c = CALCULATORS_META.find((x) => x.slug === slug);
  if (!c) notFound();
  const url = `https://goccia.org/calcolatori/${c.slug}`;

  return (
    <main className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd data={articleJsonLd({ headline: c.shortTitle, description: c.metaDescription, url, datePublished: '2026-06-21' })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: 'https://goccia.org/' },
        { name: 'Calcolatori', url: 'https://goccia.org/calcolatori' },
        { name: c.shortTitle, url },
      ])} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Calcolatore</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">{c.shortTitle}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">{c.intro}</p>
      </header>
      {renderCalc(c.componentName)}
      <LeadCTA
        variant="completa"
        context="Per andare oltre la stima e ottenere un dato strumentale firmato sulla tua acqua, considera un'analisi con un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
