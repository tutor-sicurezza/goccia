import * as React from 'react';

interface JsonLdProps {
  data: object;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org').replace(
    /\/$/,
    '',
  );
}

export function webApplicationJsonLd(): object {
  const url = siteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'GoccIA',
    url,
    inLanguage: 'it-IT',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    isAccessibleForFree: true,
    description:
      "GoccIA assegna un punteggio 1–99 all'acqua del rubinetto a partire dai valori del referto. Anonimo, gratuito, motore deterministico.",
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    provider: organizationJsonLd(),
  };
}

export function organizationJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://123acqua.com#organization',
    name: '123Acqua',
    legalName: 'Labservice S.r.l.',
    url: 'https://123acqua.com',
    vatID: 'IT09433191005',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via di Santo Stefano 6/B',
      postalCode: '00061',
      addressLocality: 'Anguillara Sabazia',
      addressRegion: 'RM',
      addressCountry: 'IT',
    },
    logo: 'https://123acqua.com/logo.png',
    sameAs: [
      'https://goccia.org',
      'https://123acqua.com',
      'https://www.linkedin.com/company/labservice-analytica',
      'https://www.facebook.com/123acqua',
      'https://www.instagram.com/123acqua',
    ],
    description:
      'Laboratorio qualificato di analisi delle acque potabili con metodi validati conformi a norme tecniche.',
    areaServed: 'IT',
  };
}

export function websiteJsonLd(): object {
  const url = siteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${url}#website`,
    url,
    name: 'GoccIA',
    alternateName: 'Goccia.org',
    inLanguage: 'it-IT',
    publisher: { '@id': 'https://123acqua.com#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function speakableJsonLd(args: { url: string; cssSelectors?: string[] }): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: args.url,
    inLanguage: 'it-IT',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: args.cssSelectors ?? ['h1', '.text-gradient', 'p.text-slate-300'],
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function datasetJsonLd(): object {
  const url = siteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'GoccIA — Benchmark anonimo qualità acqua del rubinetto in Italia',
    description:
      "Dataset aggregato e anonimo delle submission GoccIA: distribuzione dei verdetti (Eccellente/Buona/Discreta/Da migliorare/Critica) e punteggio medio 1–99 raggruppati per giorno.",
    url: `${url}/benchmark`,
    isAccessibleForFree: true,
    creator: { '@id': 'https://123acqua.com#organization' },
    license: 'https://opensource.org/licenses/MIT',
    inLanguage: 'it-IT',
    keywords: [
      'acqua potabile',
      'qualità acqua',
      'D.Lgs. 18/2023',
      'Italia',
      'benchmark anonimo',
      'open data',
    ],
    spatialCoverage: { '@type': 'Place', name: 'Italia' },
    distribution: [
      {
        '@type': 'DataDownload',
        contentUrl: `${url}/benchmark`,
        encodingFormat: 'text/html',
      },
    ],
  };
}

export function howToJsonLd(): object {
  const url = siteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Come calcolare il punteggio dell'acqua del rubinetto con GoccIA",
    description:
      "Procedura per ottenere un punteggio 1–99 deterministico sulla qualità della propria acqua del rubinetto a partire dai valori di un referto di laboratorio.",
    totalTime: 'PT30S',
    inLanguage: 'it-IT',
    image: `${url}/opengraph-image`,
    supply: [
      { '@type': 'HowToSupply', name: 'Referto di analisi dell\'acqua del rubinetto' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'Browser web' }],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Recupera il referto',
        text: 'Procurati il rapporto di prova dell\'analisi dell\'acqua del rubinetto. Funziona con qualsiasi laboratorio, non serve essere clienti di 123Acqua.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Inserisci i valori',
        text: 'Apri goccia.org e inserisci i valori dei parametri (pH, durezza, nitrati, piombo, E.coli, ecc.). Tutti i campi sono opzionali: compila solo quelli presenti sul tuo referto.',
        url: `${url}/`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Ottieni il punteggio',
        text: 'GoccIA confronta ogni valore col limite di legge (D.Lgs. 18/2023) e col range ideale (WHO/EFSA) e calcola un punteggio 1–99 ponderato su Salute (50%), Estetica (25%), Impianti (25%).',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Leggi il verdetto',
        text: 'Verdetto a fasce: ≥85 Eccellente, 70–84 Buona, 50–69 Discreta, 30–49 Da migliorare, <30 Critica. Vedi i parametri oltre soglia evidenziati.',
      },
    ],
  };
}

export function serviceJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Analisi acqua del rubinetto in laboratorio qualificato',
    description:
      "Analisi chimico-fisica, microbiologica, metalli pesanti e PFAS dell'acqua del rubinetto con metodi validati conformi alle norme tecniche. Kit di prelievo a domicilio e refertazione firmata.",
    serviceType: 'Water quality testing',
    provider: { '@id': 'https://123acqua.com#organization' },
    areaServed: { '@type': 'Country', name: 'Italia' },
    audience: { '@type': 'Audience', name: 'Famiglie, condomini, gestori idrici, piccole imprese' },
    url: 'https://123acqua.com',
    inLanguage: 'it-IT',
  };
}

export function articleJsonLd(args: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: args.headline,
    description: args.description,
    inLanguage: 'it-IT',
    url: args.url,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    image: `${siteUrl()}/opengraph-image`,
    author: { '@id': 'https://123acqua.com#organization' },
    publisher: { '@id': 'https://123acqua.com#organization' },
    mainEntityOfPage: args.url,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
