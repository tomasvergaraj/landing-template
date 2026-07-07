import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// ⚙️  Cambia esta URL por el dominio real de tu empresa (afecta sitemap, canonical y OG).
const SITE_URL = 'https://tuempresa.cl';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [icon(), sitemap()],
});
