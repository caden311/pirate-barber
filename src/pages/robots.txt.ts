import type { APIRoute } from 'astro';

// Generated at build time so the Sitemap URL always matches the configured site.
export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? new URL('sitemap-index.xml', site).href : '/sitemap-index.xml';
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
