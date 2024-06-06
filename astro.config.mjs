import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://flowmodor.com',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      lastmod: new Date('2024-06-06'),
    }),
  ],
  trailingSlash: 'never',
});
