import type { APIRoute } from 'astro';
import { PAGES, SITE } from '../data/site';
import { absolute } from '../lib/urls';

/**
 * Hand-rolled sitemap so the file lands at exactly /sitemap.xml under the
 * base path — not sitemap-index.xml or sitemap-0.xml.
 *
 * The URL list is built from the page registry, so it can never drift from the
 * pages that exist, and every <loc> is produced by the same absolute() helper
 * that writes each page's <link rel="canonical">, so the two always match.
 *
 * The notes are reached from the Study Notes section of marcogrimaldi29.com,
 * whose single domain-level robots.txt lives in the marcogrimaldi29.github.io
 * repository; this sitemap covers the pages under /gh-200-study-notes/ only.
 */

function priority(slug: string): string {
  if (slug === '') return '1.0';
  const page = PAGES.find((p) => p.slug === slug);
  if (page?.group === 'skills' || page?.group === 'start') return '0.9';
  return '0.8';
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = PAGES.map(
    (page) => `  <url>
    <loc>${absolute(SITE.origin, page.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority(page.slug)}</priority>
  </url>`,
  ).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
