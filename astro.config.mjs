import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import react from '@astrojs/react'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
    react(),
  ],
  site: 'https://hayatann.net',
  output: 'server',
  adapter: vercel(),
})
