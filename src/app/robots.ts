import type { MetadataRoute } from 'next';

const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Googlebot',
  'Bingbot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'CCBot',
  'YandexBot',
  'YouBot',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'cohere-ai',
  'Bytespider',
  'Diffbot',
  'FacebookBot',
  'meta-externalagent',
  'PetalBot',
  'DuckAssistBot',
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org').replace(
    /\/$/,
    '',
  );

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 0,
      })),
    ],
    sitemap: [
      `${base}/sitemap.xml`,
      `${base}/blog/feed.xml`,
    ],
    host: base,
  };
}
