import { BLOG_POSTS } from '@/lib/blog-posts';

export const dynamic = 'force-static';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org').replace(/\/$/, '');
  const sorted = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const items = sorted
    .map((p) => {
      const link = `${siteUrl}/blog/${p.slug}`;
      const pubDate = new Date(`${p.publishedAt}T08:00:00Z`).toUTCString();
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(p.category)}</category>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GoccIA — Blog</title>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Articoli sulla qualità dell'acqua del rubinetto in Italia: normativa, scienza, casa, salute.</description>
    <language>it-IT</language>
    <copyright>Labservice S.r.l. — MIT</copyright>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
