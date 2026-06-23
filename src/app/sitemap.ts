import type { MetadataRoute } from 'next';
import { PARAMETER_GUIDES } from '@/lib/parameter-guides';
import { CITY_GUIDES } from '@/lib/city-guides';
import { TREATMENT_GUIDES } from '@/lib/treatment-guides';
import { TOPIC_GUIDES } from '@/lib/topic-guides';
import { BLOG_POSTS } from '@/lib/blog-posts';
import { SECTOR_GUIDES } from '@/lib/sector-guides';
import { REGIONAL_COMPARISONS } from '@/lib/regional-comparisons';
import { NEIGHBORHOOD_GUIDES } from '@/lib/neighborhood-guides';
import { MYTH_PAGES } from '@/lib/myth-pages';
import { CALCULATORS_META } from '@/lib/calculators-meta';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org').replace(
    /\/$/,
    '',
  );
  const now = new Date();

  const parameterUrls: MetadataRoute.Sitemap = PARAMETER_GUIDES.map((g) => ({
    url: `${base}/parametri/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const cityUrls: MetadataRoute.Sitemap = CITY_GUIDES.map((g) => ({
    url: `${base}/acqua-di-${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const treatmentUrls: MetadataRoute.Sitemap = TREATMENT_GUIDES.map((g) => ({
    url: `${base}/trattamenti/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const topicUrls: MetadataRoute.Sitemap = TOPIC_GUIDES.map((g) => ({
    url: `${base}/guide/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));
  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));
  const sectorUrls: MetadataRoute.Sitemap = SECTOR_GUIDES.map((g) => ({
    url: `${base}/uso/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));
  const comparisonUrls: MetadataRoute.Sitemap = REGIONAL_COMPARISONS.map((c) => ({
    url: `${base}/confronto/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));
  const neighborhoodUrls: MetadataRoute.Sitemap = NEIGHBORHOOD_GUIDES.map((n) => ({
    url: `${base}/quartieri/${n.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));
  const mythUrls: MetadataRoute.Sitemap = MYTH_PAGES.map((m) => ({
    url: `${base}/miti/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));
  const calcUrls: MetadataRoute.Sitemap = CALCULATORS_META.map((c) => ({
    url: `${base}/calcolatori/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    {
      url: `${base}/parametri`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/acqua`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/trattamenti`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/guide`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/uso`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/idratazione-quanto-bere`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/confronto`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/pfas-italia-mappa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/quiz`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/quartieri`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/osmosi-inversa-confronto`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/dashboard`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${base}/miti`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/press-kit`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/api-docs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/calcolatori`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...parameterUrls,
    ...cityUrls,
    ...treatmentUrls,
    ...topicUrls,
    ...blogUrls,
    ...sectorUrls,
    ...comparisonUrls,
    ...neighborhoodUrls,
    ...mythUrls,
    ...calcUrls,
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/come-funziona`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/benchmark`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/cookie-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/glossario`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/rubinetto-vs-minerale`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/come-leggere-referto-acqua`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/quanto-costa-analisi-acqua`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/impatto-bottiglie-plastica`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/metodo-scientifico`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/chi-siamo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/ai-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
