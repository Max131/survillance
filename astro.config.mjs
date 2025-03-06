// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://webbolt.fast-page.org',
  base: '/security',
  compressHTML: false,

  build: {
    inlineStylesheets: 'never'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte()]
});