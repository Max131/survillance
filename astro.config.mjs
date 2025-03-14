// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://webbolt.fast-page.org',
  base: '/security',
  compressHTML: false,
  server: { port: 3000 },
  build: {
    assets: 'assets',
    // assetsPrefix: {
    //   'css': 'css/',
    //   'fallback': '/'
    // },
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

  integrations: [alpinejs()],
});
