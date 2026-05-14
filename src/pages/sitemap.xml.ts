export const prerender = true;

import { allServices } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { publishedBlogPosts } from '@/data/blogPosts';

const SITE = 'https://saadiconstructiongroup.com';
const LASTMOD = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/service-areas', priority: '0.9', changefreq: 'monthly' },
  { url: '/projects', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools', priority: '0.7', changefreq: 'monthly' },
  { url: '/tools/build-cost-calculator', priority: '0.7', changefreq: 'monthly' },
  { url: '/tools/timeline-estimator', priority: '0.7', changefreq: 'monthly' },
  { url: '/tools/houston-permit-guide', priority: '0.7', changefreq: 'monthly' },
  { url: '/tools/lot-feasibility-checklist', priority: '0.7', changefreq: 'monthly' },
];

const servicePages = allServices.map((s) => ({
  url: `/services/${s.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const areaPages = serviceAreas.map((a) => ({
  url: `/service-areas/${a.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const blogPages = publishedBlogPosts.map((p) => ({
  url: `/blog/${p.slug}`,
  priority: '0.7',
  changefreq: 'yearly',
}));

const allPages = [...staticPages, ...servicePages, ...areaPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE}${page.url}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
