import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://denismalovany.github.io',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    assets: 'assets',
  },
  image: {
    domains: ['images.unsplash.com'],
  },
});
