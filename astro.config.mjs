// @ts-check
import { defineConfig } from 'astro/config';


import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: []
  },
  site:"https://antoniomrtz.github.io/MayorOpticaWeb/",
  integrations: [sitemap()]
});
