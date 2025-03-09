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
    assets: 'assets',
    assetsPrefix: {
      'css': 'css/',
      'fallback': '/'
    },
    inlineStylesheets: 'never'
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // cssCodeSplit: false,
      // cssMinify: false,
      // minify: false,
      // target: 'esnext'
      // rollupOptions: {
      //   output: {
      //     entryFileNames: '[name].js',
      //     assetFileNames: '[name].[ext]'
      //   }
      // }
    }
  },

  integrations: [svelte()]
});
