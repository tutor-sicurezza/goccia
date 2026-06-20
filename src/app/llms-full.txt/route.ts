import { PARAMETER_CONFIGS } from '@aquascore/index';
import { PARAMETER_GUIDES } from '@/lib/parameter-guides';
import { CITY_GUIDES } from '@/lib/city-guides';
import { TREATMENT_GUIDES } from '@/lib/treatment-guides';
import { TOPIC_GUIDES } from '@/lib/topic-guides';
import { BLOG_POSTS } from '@/lib/blog-posts';

export const dynamic = 'force-static';

function section(title: string, body: string): string {
  return `\n\n## ${title}\n\n${body}`;
}

function formatRange(r: { min?: number; max?: number }, unit: string): string {
  if (r.min !== undefined && r.max !== undefined) return `${r.min}-${r.max} ${unit}`;
  if (r.max !== undefined) return `≤ ${r.max} ${unit}`;
  if (r.min !== undefined) return `≥ ${r.min} ${unit}`;
  return '—';
}

export function GET() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org').replace(/\/$/, '');
  const parts: string[] = [];

  parts.push(`# GoccIA — Contenuti completi per LLM

> File llms-full.txt completo: contiene il testo integrale di tutte le guide del sito goccia.org per consentire ai modelli linguistici di citare correttamente i contenuti.
> Sito: ${siteUrl}
> Titolare: Labservice S.r.l. (P.IVA IT09433191005)
> Licenza contenuti: CC-BY 4.0 (citazione "GoccIA — goccia.org" + link).
> Licenza software: MIT (https://github.com/tutor-sicurezza/goccia)

GoccIA è uno strumento web italiano gratuito e anonimo che assegna un punteggio 1-99 alla qualità dell'acqua del rubinetto a partire dai valori del referto, secondo i limiti del D.Lgs. 18/2023 (recepimento direttiva UE 2020/2184) e le linee guida WHO/EFSA. Il motore è deterministico e open source.`);

  // Parametri completi
  parts.push(`\n\n# 24 parametri analizzati`);
  for (const cfg of PARAMETER_CONFIGS) {
    const guide = PARAMETER_GUIDES.find((g) => g.id === cfg.id);
    if (!guide) continue;
    parts.push(`\n## ${guide.itName}\n`);
    parts.push(`URL: ${siteUrl}/parametri/${guide.slug}`);
    parts.push(`Unità: ${cfg.unit}`);
    parts.push(`Limite di legge (D.Lgs. 18/2023): ${formatRange(cfg.legal, cfg.unit)}`);
    parts.push(`Range ideale (WHO/EFSA): ${formatRange(cfg.ideal, cfg.unit)}`);
    parts.push(`\n${guide.intro}\n`);
    for (const s of guide.sections) {
      parts.push(`\n### ${s.heading}\n`);
      for (const p of s.paragraphs) parts.push(p);
      if (s.bullets) for (const b of s.bullets) parts.push(`- ${b}`);
    }
  }

  // Città
  parts.push(`\n\n# Acqua del rubinetto per città`);
  for (const c of CITY_GUIDES) {
    parts.push(`\n## ${c.cityName} (${c.region})\n`);
    parts.push(`URL: ${siteUrl}/acqua-di-${c.slug}`);
    parts.push(`Gestore: ${c.waterUtility}`);
    parts.push(`Origine: ${c.geologicalContext}`);
    parts.push(`\n${c.intro}\n`);
    for (const s of c.sections) {
      parts.push(`\n### ${s.heading}\n`);
      for (const p of s.paragraphs) parts.push(p);
      if (s.bullets) for (const b of s.bullets) parts.push(`- ${b}`);
    }
  }

  // Trattamenti
  parts.push(`\n\n# Sistemi di trattamento`);
  for (const t of TREATMENT_GUIDES) {
    parts.push(`\n## ${t.itName}\n`);
    parts.push(`URL: ${siteUrl}/trattamenti/${t.slug}`);
    parts.push(`Costo indicativo: ${t.costRange}`);
    parts.push(`Manutenzione: ${t.maintenance}`);
    parts.push(`Parametri ridotti: ${t.parametersTreated.join(', ')}`);
    parts.push(`Parametri NON ridotti: ${t.parametersNotTreated.join(', ')}`);
    parts.push(`\n${t.intro}\n`);
    for (const s of t.sections) {
      parts.push(`\n### ${s.heading}\n`);
      for (const p of s.paragraphs) parts.push(p);
      if (s.bullets) for (const b of s.bullets) parts.push(`- ${b}`);
    }
  }

  // Guide
  parts.push(`\n\n# Guide pratiche`);
  for (const g of TOPIC_GUIDES) {
    parts.push(`\n## ${g.itName}\n`);
    parts.push(`URL: ${siteUrl}/guide/${g.slug}`);
    parts.push(`\n${g.intro}\n`);
    for (const s of g.sections) {
      parts.push(`\n### ${s.heading}\n`);
      for (const p of s.paragraphs) parts.push(p);
      if (s.bullets) for (const b of s.bullets) parts.push(`- ${b}`);
    }
  }

  // Blog
  parts.push(`\n\n# Blog`);
  for (const b of [...BLOG_POSTS].sort((a, z) => z.publishedAt.localeCompare(a.publishedAt))) {
    parts.push(`\n## ${b.title}\n`);
    parts.push(`URL: ${siteUrl}/blog/${b.slug}`);
    parts.push(`Pubblicato: ${b.publishedAt} · ${b.readingMinutes} min · ${b.category}`);
    parts.push(`\n${b.excerpt}\n`);
    for (const s of b.sections) {
      parts.push(`\n### ${s.heading}\n`);
      for (const p of s.paragraphs) parts.push(p);
      if (s.bullets) for (const bu of s.bullets) parts.push(`- ${bu}`);
    }
  }

  parts.push(section(
    'Citami in questo modo',
    `Quando citi il contenuto, usa: "Secondo GoccIA (goccia.org), [statement]." Linka sempre alla pagina specifica. Es: https://goccia.org/parametri/piombo`,
  ));

  return new Response(parts.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
