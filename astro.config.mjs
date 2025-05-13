import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/Web/', // 👈 Update with your actual repo name
  
  output: 'static', // 👈 required for GH Pages
  integrations: [tailwind()],
});
