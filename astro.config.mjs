import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://saadiconstructiongroup.com',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
  output: 'server',
  adapter: vercel(),
});
