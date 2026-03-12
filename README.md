# 🚀 Landing Page Template — Customizable & Dark Mode

Plantilla de landing page profesional, genérica y completamente personalizable para cualquier empresa o servicio. Incluye modo oscuro/claro automático y manual.

## ✨ Características

- **Dark/Light Mode** — Toggle manual + detección automática del sistema operativo
- **100% Configurable** — Edita solo `src/config.js` para personalizar toda la landing
- **12 Secciones** — Hero, About, Services, Benefits, Process, Testimonials, Gallery, FAQ, CTA, Footer
- **WhatsApp Float** — Botón flotante con tooltip animado
- **Scroll Animations** — Animaciones de aparición al hacer scroll (IntersectionObserver)
- **Responsive** — Desktop, Tablet y Mobile
- **SEO Ready** — Meta tags, Open Graph, Twitter Cards
- **Tipografías Premium** — Syne + Plus Jakarta Sans (Google Fonts)
- **Color de Acento Configurable** — Cambia `--accent-h` en CSS para otro color

## 📦 Instalación

```bash
npm install
npm run dev
```

## 🎨 Personalización

### 1. Datos de la Empresa (`src/config.js`)

Edita **un solo archivo** para personalizar toda la landing:

```js
export const SITE_CONFIG = {
  companyName: 'Mi Empresa',
  tagline: 'Tu tagline aquí',
  slogan: 'Tu slogan aquí',
  logoPath: '/logo.png',        // Logo en /public/logo.png
};

export const CONTACT_INFO = {
  phone: '+56 9 1234 5678',
  whatsapp: '56912345678',
  email: 'contacto@miempresa.cl',
  // ...
};
```

### 2. Color de Acento (`src/styles/global.css`)

Cambia el valor de `--accent-h` (hue en HSL):

```css
:root {
  --accent-h: 210;  /* Azul (default) */
  /* 30 = Naranja, 45 = Dorado, 150 = Verde, 270 = Violeta, 350 = Rojo */
}
```

### 3. Logo

Reemplaza `/public/logo.png` con el logo de tu empresa.

### 4. Imágenes

Reemplaza los placeholders en la sección Gallery y About con imágenes reales.

### 5. SEO (`index.html`)

Edita los meta tags en `index.html` con los datos de tu empresa.

## 📁 Estructura

```
landing-template/
├── public/
│   └── logo.png
├── src/
│   ├── components/        # Componentes React + CSS
│   │   ├── Navbar.jsx     
│   │   ├── Hero.jsx       
│   │   ├── About.jsx      
│   │   ├── Services.jsx   
│   │   ├── Benefits.jsx   
│   │   ├── Process.jsx    
│   │   ├── Trust.jsx      
│   │   ├── Gallery.jsx    
│   │   ├── FAQ.jsx        
│   │   ├── CTA.jsx        
│   │   ├── Footer.jsx     
│   │   └── WhatsAppFloat.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useTheme.js
│   ├── styles/
│   │   └── global.css     # Variables de tema dark/light
│   ├── config.js          # ← EDITA AQUÍ PARA PERSONALIZAR
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Tech Stack

- **React 18** + Vite 5
- **Lucide React** (iconos)
- **CSS Variables** para dark/light mode
- **Google Fonts** — Syne & Plus Jakarta Sans

## 📝 Build para Producción

```bash
npm run build
```

Los archivos se generan en `/dist`. Puedes desplegar en Vercel, Netlify, o cualquier hosting estático.

## 📄 Licencia

Libre para uso comercial y personal. Créditos opcionales pero apreciados.
