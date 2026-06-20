import type { MetadataRoute } from 'next';
import { PARAMETER_GUIDES } from '@/lib/parameter-guides';
import { CITY_GUIDES } from '@/lib/city-guides';
import { TREATMENT_GUIDES } from '@/lib/treatment-guides';
import { TOPIC_GUIDES } from '@/lib/topic-guides';
import { BLOG_POSTS } from '@/lib/blog-posts';

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
    ...parameterUrls,
    ...cityUrls,
    ...treatmentUrls,
    ...topicUrls,
    ...blogUrls,
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
  ];
}
