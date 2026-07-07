# Landing Template · Estilo "Jitter" (playful)

Plantilla de **landing page** moderna y *playful* construida con **Astro**, optimizada para **SEO** y rendimiento. Estética inspirada en el estilo _Jitter_: lienzo claro y acolchado, formas tipo píldora, tarjetas que flotan con sombras difusas y toques de color saturado (violeta de marca + azul eléctrico + "volt").

Toda la información es **genérica** y se edita desde un solo archivo.

## ✨ Características

- ⚡ **Astro** — cero JS por defecto, HTML estático rapidísimo, ideal para SEO.
- 🎨 **Diseño playful "Jitter"** — botones/píldora, tarjetas acolchadas, bloques de color, palabras resaltadas con marcador, micro-animaciones.
- 🧩 **1 archivo de configuración** (`src/config.ts`) — cambia empresa, contacto, servicios, textos y secciones sin tocar componentes.
- 🔎 **SEO completo** — meta tags, Open Graph, Twitter Card, canonical, **JSON-LD** (LocalBusiness), **sitemap** y `robots.txt`.
- ♿ **Accesible** — HTML semántico, foco visible, `prefers-reduced-motion`.
- 📱 **Responsive** — se ve impecable en escritorio, tablet y móvil.
- 🎯 **Tokens de diseño** — cambia la paleta desde variables CSS en `src/styles/global.css`.

## 🚀 Uso

```bash
npm install
npm run dev      # servidor de desarrollo → http://localhost:4321
npm run build    # build de producción → dist/
npm run preview  # previsualiza el build
```

## ✏️ Personalización

1. **Contenido** → edita `src/config.ts` (empresa, contacto, redes, servicios, beneficios, proceso, testimonios, FAQ, footer…).
2. **Dominio/SEO** → cambia `SITE.url` en `src/config.ts` y `SITE_URL` en `astro.config.mjs`.
3. **Marca / colores** → ajusta los tokens en `:root` de `src/styles/global.css` (empezando por `--violet`).
4. **Logo e imágenes** → reemplaza `public/logo.png` y añade `public/og-image.jpg` (1200×630).

## 🧱 Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) |
| Estilos | CSS con tokens (sin frameworks) |
| Iconos | [astro-icon](https://github.com/natemoo-re/astro-icon) + [Lucide](https://lucide.dev) |
| Tipografía | Space Grotesk (display) + Inter (texto) — Google Fonts |
| SEO | `@astrojs/sitemap`, JSON-LD, meta OG/Twitter |

## 📂 Estructura

```
src/
  config.ts            ← edita aquí todo el contenido
  layouts/Layout.astro ← <head>, SEO, fuentes, JSON-LD
  styles/global.css    ← tokens + primitivos de diseño
  components/           ← Navbar, Hero, Services, Benefits, …
  pages/index.astro    ← compone la página
public/                ← logo, robots.txt, imágenes
```
