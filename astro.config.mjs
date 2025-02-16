import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://finnbuick.com', 
  integrations: [sitemap()],
  compressHTML: true,
  vite: {
    build: {
      cssCodeSplit: true
    }
  }
});
