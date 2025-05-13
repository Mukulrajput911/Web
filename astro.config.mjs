import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/Web/', // 👈 Update with your actual repo name
  build: {
    assetsPrefix: '/Web/', // 👈 Must match `base`
    outDir: './dist', // 👈 required for peaceiris GH pages action
  },
  output: 'static', // 👈 required for GH Pages
  integrations: [tailwind()],
});
