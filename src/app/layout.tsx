import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { DropletBlob } from '@/components/droplet-blob';
import JsonLd, { websiteJsonLd, organizationJsonLd, serviceJsonLd } from '@/components/json-ld';
import { PrivacyNotice } from '@/components/privacy-notice';
import { StickyCTA } from '@/components/sticky-cta';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | GoccIA',
    default: 'GoccIA — Il punteggio della tua acqua del rubinetto',
  },
  description:
    "Inserisci i valori del tuo referto e scopri in 30 secondi il punteggio 1–99 della tua acqua del rubinetto. Gratuito, anonimo, in italiano.",
  applicationName: 'GoccIA',
  keywords: [
    'acqua del rubinetto',
    'analisi acqua',
    'punteggio acqua',
    'qualità acqua potabile',
    'referto acqua',
    'D.Lgs. 18/2023',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteUrl,
    siteName: 'GoccIA',
    title: 'GoccIA — Il punteggio della tua acqua del rubinetto',
    description:
      "Scopri in 30 secondi quanto è buona l'acqua del tuo rubinetto. Gratuito, anonimo, in italiano.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoccIA — Il punteggio della tua acqua del rubinetto',
    description:
      "Scopri in 30 secondi quanto è buona l'acqua del tuo rubinetto.",
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/blog/feed.xml`,
      'text/plain': `${siteUrl}/llms.txt`,
    },
  },
  other: {
    'ai-content-declaration': 'human-authored',
    'rating': 'general',
    'llms': `${siteUrl}/llms.txt`,
    'llms-full': `${siteUrl}/llms-full.txt`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-brand-deep text-slate-100 font-sans antialiased min-h-screen relative overflow-x-hidden">
        {/* Decorative background layers */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <DropletBlob />
          <div className="noise absolute inset-0" aria-hidden="true" />
        </div>

        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={serviceJsonLd()} />
        <PrivacyNotice />
        <StickyCTA />
      </body>
    </html>
  );
}
