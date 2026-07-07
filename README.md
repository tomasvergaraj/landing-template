<div align="center">

# Landing Template · Estilo _Jitter_

**Plantilla de landing page profesional, _playful_ y ultra‑optimizada para SEO — construida con [Astro](https://astro.build).**

Lienzo claro y acolchado, formas tipo píldora, bloques de color saturado y micro‑animaciones con profundidad 3D. Todo el contenido se edita desde **un solo archivo**.

<br/>

![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-Optimizado-2ea44f?style=for-the-badge&logo=google&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-100%25-00b2ff?style=for-the-badge)
![Zero JS](https://img.shields.io/badge/JS-cero%20por%20defecto-f5ff63?style=for-the-badge&logoColor=black)
![Licencia](https://img.shields.io/badge/Licencia-MIT-19171c?style=for-the-badge)

<br/>

![Vista previa del template](docs/preview.png)

</div>

---

## 📋 Tabla de contenidos

- [Características](#-características)
- [Inicio rápido](#-inicio-rápido)
- [Personalización](#️-personalización)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Sistema de diseño](#-sistema-de-diseño)
- [Animaciones y movimiento](#-animaciones-y-movimiento)
- [SEO](#-seo)
- [Accesibilidad](#-accesibilidad)
- [Rendimiento](#-rendimiento)
- [Compatibilidad](#-compatibilidad-de-navegadores)
- [Despliegue](#-despliegue)
- [Scripts](#-scripts)
- [Stack](#-stack)
- [Licencia](#-licencia)

---

## ✨ Características

### 🎨 Diseño
- **Estética _playful_ "Jitter"** — lienzo _off‑white_, tarjetas blancas acolchadas que flotan con sombras difusas, formas tipo píldora (radios 20–40 px) y bloques de color saturado (violeta de marca + azul eléctrico + _volt_).
- **Palabras resaltadas con marcador**, chips de icono de colores y etiquetas técnicas monoespaciadas (estilo HUD).
- **Modo claro** pulido y coherente en todas las secciones.
- **11 secciones completas**: navbar flotante, hero, marquesina de logos, servicios, beneficios, proceso, testimonios, showcase (bento), FAQ, CTA y footer, más botón flotante de WhatsApp.

### 🧩 Editable
- **Un solo archivo de configuración** (`src/config.ts`): empresa, contacto, redes, navegación y el contenido de **todas** las secciones.
- **Tokens de diseño** centralizados: cambia toda la paleta editando una variable CSS.
- **Iconos Lucide** por nombre (más de 1000 iconos disponibles).

### ⚡ Rendimiento y SEO
- **Astro / SSG** — HTML estático, **cero JavaScript por defecto** (solo se envía el mínimo para las animaciones).
- **SEO completo**: `<title>`, meta description, Open Graph, Twitter Cards, canonical, **JSON‑LD** (`LocalBusiness`), **sitemap** automático y `robots.txt`.
- **Imagen social** 1200×630 lista para compartir.

### 🎬 Movimiento
- **Animación de hiperespacio (warp)** en `<canvas>` — sutil en el hero, protagonista en el CTA.
- **Entrada 3D de secciones al hacer scroll** (sensación de "atravesar el espacio").
- **Inclinación 3D al cursor** con brillo especular en las tarjetas.
- **Contadores animados** (count‑up) y revelado progresivo al hacer scroll.
- Todo respeta **`prefers-reduced-motion`**.

### ♿ Calidad
- HTML **semántico**, foco visible, `aria-label`s y contraste cuidado.
- **100 % responsive** (escritorio, tablet y móvil).
- Sin dependencias de CSS pesadas: **CSS con variables**, fácil de leer y mantener.

---

## 🚀 Inicio rápido

**Requisitos:** [Node.js](https://nodejs.org) 18 o superior.

```bash
# 1. Instalar dependencias
npm install

# 2. Entorno de desarrollo → http://localhost:4321
npm run dev

# 3. Build de producción → /dist
npm run build

# 4. Previsualizar el build de producción
npm run preview
```

---

## ✏️ Personalización

Casi todo se personaliza sin tocar los componentes.

### 1. Contenido de la empresa

Edita **`src/config.ts`**. Está dividido por secciones y comentado:

| Export | Controla |
|---|---|
| `SITE` | Nombre, tagline, dominio, logo, imagen OG |
| `CONTACT` | Teléfono, WhatsApp, email, dirección, horario |
| `SOCIAL` | Enlaces a redes sociales |
| `NAV_LINKS` | Enlaces del menú |
| `HERO` | Título, subtítulo, CTAs y estadísticas |
| `LOGOS` | Marquesina de clientes |
| `SERVICES` · `BENEFITS` · `PROCESS` | Grillas de contenido |
| `TESTIMONIALS` · `SHOWCASE` · `FAQ` | Testimonios, proyectos y preguntas |
| `CTA` · `FOOTER` | Llamado a la acción y pie de página |

```ts
export const SITE = {
  companyName: 'Tu Empresa',
  tagline: 'Soluciones profesionales para tu negocio',
  url: 'https://tuempresa.cl',   // ⚠️ cámbialo por tu dominio real
  logoPath: '/logo.png',
};
```

### 2. Marca y colores

Cambia la paleta desde `:root` en **`src/styles/global.css`**. El color de marca es una sola variable:

```css
:root {
  --violet: #7a40ed;  /* 🎨 tu color de marca */
  --blue:   #00b2ff;  /* acento secundario   */
  --volt:   #f5ff63;  /* acento terciario    */
}
```

### 3. Tipografía

Se cargan **Space Grotesk** (títulos), **Space Mono** (etiquetas técnicas) e **Inter** (texto) desde Google Fonts en `src/layouts/Layout.astro`. Cambia el `<link>` y las variables `--font-display` / `--font-body` / `--font-mono`.

### 4. Dominio y SEO

Actualiza el dominio en **dos** lugares: `SITE.url` (`src/config.ts`) y `SITE_URL` (`astro.config.mjs`). Afecta canonical, Open Graph y sitemap.

### 5. Imágenes

Reemplaza en `public/`:
- `logo.png` — tu logotipo.
- `og-image.png` — imagen social (1200×630).

---

## 📂 Estructura del proyecto

```
├── astro.config.mjs         # Config de Astro (sitemap, dominio)
├── public/
│   ├── logo.png             # Logo
│   ├── og-image.png         # Imagen social 1200×630
│   └── robots.txt           # SEO
└── src/
    ├── config.ts            # ⭐ TODO el contenido se edita aquí
    ├── styles/global.css    # Tokens + primitivos de diseño
    ├── layouts/Layout.astro # <head>, SEO, fuentes, JSON-LD, scripts
    ├── pages/index.astro    # Compone la página
    └── components/
        ├── Navbar.astro     Hero.astro       Logos.astro
        ├── Services.astro   Benefits.astro   Process.astro
        ├── Testimonials.astro  Showcase.astro  Faq.astro
        ├── Cta.astro        Footer.astro     WhatsAppFloat.astro
        ├── Warp.astro       # Animación de hiperespacio (canvas)
        └── WhatsAppIcon.astro
```

---

## 🎨 Sistema de diseño

Todo el look se define con **tokens CSS** en `src/styles/global.css`.

**Paleta**

| Token | Uso |
|---|---|
| `--off-white` `--white` `--ink` | Fondo, tarjetas, texto |
| `--violet` | Color de marca (CTAs, acentos) |
| `--blue` `--volt` | Acentos secundarios |
| `--slate` `--hairline` | Texto secundario, bordes |

**Primitivos reutilizables:** `.btn` (variantes `--primary` · `--dark` · `--ghost` · `--white` · `--volt`), `.card` (+ bloques de color `--violet/--blue/--volt/--sky/…`), `.eyebrow`, `.mark` (resaltado), `.icon-chip`, `.tag`, `.hud-tag`, `.mono`, `.reveal` y utilidades de grilla.

**Radios y sombras:** escala de radios tipo píldora (`--r-pill` → `--r-sm`) y sombras difusas de varias capas (`--shadow-xs` → `--shadow-lg`) para el efecto "flotante".

---

## 🎬 Animaciones y movimiento

| Efecto | Descripción | Dónde |
|---|---|---|
| **Warp / hiperespacio** | Estelas de luz radiando desde un punto de fuga (canvas, sin librerías). | Hero (sutil), CTA (protagonista) |
| **Entrada 3D al scroll** | Las secciones emergen desde la profundidad al entrar en pantalla. | Todas las secciones |
| **Tilt 3D al cursor** | La tarjeta se inclina hacia el puntero + brillo especular. | Servicios, Showcase |
| **Count‑up** | Las estadísticas suben desde 0 al hacerse visibles. | Hero |
| **Revelado progresivo** | Aparición suave escalonada. | Toda la página |
| **Micro‑interacciones** | Lifts, anillos HUD, cursores parpadeantes, marquesina. | Global |

> Todas las animaciones se desactivan automáticamente si el usuario activa **"reducir movimiento"** en su sistema. El warp se pausa cuando está fuera de pantalla y el tilt solo se activa en punteros finos (mouse/trackpad).

---

## 🔎 SEO

Configurado en `src/layouts/Layout.astro` y `astro.config.mjs`:

- ✅ `<title>`, meta description y `theme-color` dinámicos
- ✅ **Open Graph** + **Twitter Cards** con imagen 1200×630
- ✅ URL **canonical**
- ✅ **JSON‑LD** `LocalBusiness` (datos estructurados enriquecidos)
- ✅ **Sitemap** automático (`@astrojs/sitemap`) + `robots.txt`
- ✅ HTML semántico con jerarquía de encabezados correcta
- ✅ Precarga de fuentes con `preconnect`

---

## ♿ Accesibilidad

- HTML semántico (`<header>`, `<main>`, `<section>`, `<footer>`) y jerarquía de `<h1>`–`<h3>`.
- Estados de **foco visibles** en todos los elementos interactivos.
- `aria-label`s en iconos y enlaces sin texto.
- Respeto total a **`prefers-reduced-motion`**.
- FAQ con `<details>`/`<summary>` nativos (funciona sin JavaScript).

---

## 🚀 Rendimiento

- **Astro SSG**: se sirve HTML estático — sin _hydration_ de framework.
- **Cero JS por defecto**; solo un script mínimo y liviano para animaciones.
- CSS crítico en línea y fuentes con `preconnect`.
- Animaciones aceleradas por GPU (`transform` / `opacity`) y `canvas` pausado fuera de vista.

---

## 🌐 Compatibilidad de navegadores

| | Chrome / Edge | Firefox / Safari | Móvil |
|---|:---:|:---:|:---:|
| Diseño, SEO, responsive | ✅ | ✅ | ✅ |
| Warp, count‑up, tilt, hover | ✅ | ✅ | ✅¹ |
| **Entrada 3D al scroll** | ✅ | ↩️ fallback² | ✅ |

¹ El tilt requiere puntero fino; en táctil se omite (por diseño).
² La entrada 3D usa `animation-timeline: view()`. En navegadores que aún no lo soportan, las secciones se revelan con un desvanecido suave (sin el efecto 3D). Progressive enhancement, nunca se rompe.

---

## 📦 Despliegue

El sitio es **100 % estático** (`/dist`). Funciona en cualquier hosting de archivos:

| Plataforma | Build command | Output |
|---|---|---|
| **Vercel** | `npm run build` | `dist` |
| **Netlify** | `npm run build` | `dist` |
| **Cloudflare Pages** | `npm run build` | `dist` |
| **GitHub Pages** | `npm run build` | `dist` |

En Vercel/Netlify/Cloudflare basta con conectar el repositorio: detectan Astro automáticamente. Recuerda actualizar `SITE.url` y `SITE_URL` con tu dominio final.

---

## 📜 Scripts

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en vivo |
| `npm run build` | Compila el sitio a `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run astro` | Ejecuta comandos de la CLI de Astro |

---

## 🧱 Stack

| | |
|---|---|
| **Framework** | [Astro](https://astro.build) (SSG) |
| **Estilos** | CSS con variables (sin frameworks) |
| **Iconos** | [astro-icon](https://github.com/natemoo-re/astro-icon) + [Lucide](https://lucide.dev) |
| **Tipografía** | Space Grotesk · Space Mono · Inter (Google Fonts) |
| **SEO** | `@astrojs/sitemap` · JSON‑LD · OG/Twitter |
| **Animación** | Canvas + CSS scroll-driven (sin librerías) |

---

## 📄 Licencia

Distribuido bajo licencia **MIT** — úsalo libremente en proyectos personales o comerciales. Consulta el archivo [`LICENSE`](LICENSE). _(Puedes cambiarla por la que prefieras.)_

---

<div align="center">

Hecho con 💜 en Chile · Diseño inspirado en el estilo _Jitter_

</div>
