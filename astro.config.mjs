import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';

// Single source of truth for the canonical URL. In pitch mode this is the
// <slug>.pages.dev preview URL; on a sale, update siteUrl in src/data/site.json
// to the real domain and redeploy.
const site = JSON.parse(readFileSync(new URL('./src/data/site.json', import.meta.url), 'utf8'));

export default defineConfig({
  site: site.siteUrl || 'https://example.pages.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
