// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://biggan.me',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      filter: (page) => page !== 'https://biggan.me/' && !page.includes('/404'),
      serialize(item) {
        item.lastmod = new Date();
        const url = item.url;
        if (url === 'https://biggan.me/bn/' || url === 'https://biggan.me/en/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.includes('/tools/') || url.includes('/formulas/') || url.includes('/periodic-table/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.includes('/curriculum/') || url.includes('/articles/') || url.includes('/my-progress/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (url.includes('/glossary/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.4;
          item.changefreq = 'monthly';
        }

        const isBn = url.includes('/bn/');
        const altUrl = isBn ? url.replace('/bn/', '/en/') : url.replace('/en/', '/bn/');
        item.links = [
          { url: isBn ? url : altUrl, lang: 'bn' },
          { url: isBn ? altUrl : url, lang: 'en' },
          { url: isBn ? url : altUrl, lang: 'x-default' },
        ];
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  i18n: {
    defaultLocale: 'bn',
    locales: ['bn', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
