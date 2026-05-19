export const prerender = true;

import { allServices } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { publishedBlogPosts } from '@/data/blogPosts';

const SITE = 'https://www.saadiconstructiongroup.com';

// Stable dates — update when you meaningfully change a page.
// Using new Date() here would mark every page as "just changed" on every
// build, which erodes crawl-budget trust and confuses Google's freshness
// signals. Only flip these when content actually changes.

const LAUNCH_DATE = '2025-10-01'; // site launch / last significant overhaul

const staticPages: { url: string; lastmod: string }[] = [
  { url: '/',               lastmod: '2026-03-01' },
  { url: '/about',          lastmod: LAUNCH_DATE },
  { url: '/contact',        lastmod: LAUNCH_DATE },
  { url: '/services',       lastmod: '2025-12-01' },
  { url: '/service-areas',  lastmod: LAUNCH_DATE },
  { url: '/projects',       lastmod: '2026-01-15' },
  { url: '/blog',           lastmod: '2026-04-01' },
  { url: '/tools',                           lastmod: LAUNCH_DATE },
  { url: '/tools/build-cost-calculator',     lastmod: LAUNCH_DATE },
  { url: '/tools/timeline-estimator',        lastmod: LAUNCH_DATE },
  { url: '/tools/houston-permit-guide',      lastmod: LAUNCH_DATE },
  { url: '/tools/lot-feasibility-checklist', lastmod: LAUNCH_DATE },
];

const servicePages = allServices.map((s) => ({
  url: `/services/${s.slug}`,
  lastmod: '2025-12-01',
}));

const areaPages = serviceAreas.map((a) => ({
  url: `/service-areas/${a.slug}`,
  lastmod: LAUNCH_DATE,
}));

const blogPages = publishedBlogPosts.map((p) => ({
  url: `/blog/${p.slug}`,
  lastmod: p.publishDate, // stable: the actual publish date from the data
}));

const allPages = [...staticPages, ...servicePages, ...areaPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

export async function GET() {
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
