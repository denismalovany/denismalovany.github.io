import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://denismalovany.github.io',
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    assets: 'assets',
  },
});
