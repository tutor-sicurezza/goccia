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
    legalName: 'Labservice Analytica S.r.l.',
    url: 'https://123acqua.com',
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
    inLanguage: 'it-IT',
    publisher: { '@id': 'https://123acqua.com#organization' },
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
