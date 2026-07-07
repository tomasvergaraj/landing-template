/* ============================================================
   CONFIGURACIÓN DEL SITIO — edita SOLO este archivo
   ============================================================
   Todo el contenido de la landing sale de aquí. Cambia textos,
   datos de contacto y secciones sin tocar los componentes.
   Los iconos usan nombres de lucide: https://lucide.dev/icons
   ============================================================ */

export const SITE = {
  companyName: 'Tu Empresa',
  /** Se usa como sufijo en el <title> y en el logo */
  brandShort: 'Tu Empresa',
  tagline: 'Soluciones profesionales para tu negocio',
  slogan: 'Innovación, calidad y compromiso en cada proyecto',
  /** Dominio real (para canonical, OG y sitemap). También en astro.config.mjs */
  url: 'https://tuempresa.cl',
  locale: 'es_CL',
  logoPath: '/logo.png',
  /** Imagen social 1200x630 en /public */
  ogImage: '/og-image.png',
};

export const CONTACT = {
  phone: '+56 9 1234 5678',
  phoneClean: '56912345678',
  whatsapp: '56912345678',
  whatsappMessage: 'Hola, me gustaría solicitar información sobre sus servicios.',
  email: 'contacto@tuempresa.cl',
  address: 'Av. Principal 1234, Ciudad',
  city: 'Ciudad',
  region: 'Región',
  schedule: 'Lun a Vie: 09:00–18:00 · Sáb: 09:00–13:00',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/tuempresa',
  facebook: 'https://www.facebook.com/tuempresa',
  linkedin: 'https://www.linkedin.com/company/tuempresa',
  tiktok: 'https://www.tiktok.com/@tuempresa',
};

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Preguntas', href: '#faq' },
];

export const HERO = {
  badge: 'Líder en soluciones profesionales',
  // El título se arma con partes: texto normal + palabra resaltada
  titlePre: 'Transformamos ideas en',
  titleMark: 'resultados',
  titlePost: 'reales.',
  subtitle:
    'Más de una década entregando soluciones de calidad para empresas y particulares, con la excelencia que tu proyecto necesita.',
  ctaPrimary: 'Cotizar por WhatsApp',
  ctaSecondary: 'Ver servicios',
  stats: [
    { number: '500+', label: 'Proyectos entregados' },
    { number: '10+', label: 'Años de experiencia' },
    { number: '100%', label: 'Compromiso' },
  ],
};

export const LOGOS = {
  title: 'Empresas y personas que confían en nosotros',
  // Como es un template, usamos nombres genéricos (reemplázalos por logos reales)
  items: ['Nord', 'Vértice', 'Altura', 'Lumina', 'Praxis', 'Onda', 'Cima', 'Delta'],
};

export const SERVICES = {
  eyebrow: 'Nuestros servicios',
  title: 'Todo lo que tu proyecto necesita',
  subtitle:
    'Un servicio integral que cubre cada etapa: desde la asesoría inicial hasta la entrega final.',
  items: [
    {
      icon: 'sparkles',
      title: 'Servicio Premium',
      description: 'Soluciones de alta calidad adaptadas a los requerimientos de cada proyecto.',
      variant: 'violet',
    },
    {
      icon: 'truck',
      title: 'Entrega Rápida',
      description: 'Transporte y entrega con coordinación precisa para que nada se detenga.',
      variant: 'white',
    },
    {
      icon: 'building-2',
      title: 'Proyectos Corporativos',
      description: 'Soluciones integrales para empresas, ajustadas a cada etapa y volumen.',
      variant: 'white',
    },
    {
      icon: 'hard-hat',
      title: 'Proyectos a Medida',
      description: 'De lo pequeño a lo de gran envergadura: nos adaptamos a tu escala.',
      variant: 'blue',
    },
    {
      icon: 'clipboard-check',
      title: 'Asesoría Técnica',
      description: 'Orientación profesional para elegir la solución más adecuada.',
      variant: 'white',
    },
    {
      icon: 'users-round',
      title: 'Atención Integral',
      description: 'Servicio personalizado para empresas y particulares. Trato directo.',
      variant: 'volt',
    },
  ],
};

export const BENEFITS = {
  eyebrow: '¿Por qué elegirnos?',
  title: 'Detalles que marcan la diferencia',
  subtitle:
    'Cada detalle cuenta. Con nosotros tienes la certeza de un servicio sólido y profesional.',
  items: [
    { icon: 'shield-check', title: 'Calidad certificada', desc: 'Cumplimos los más altos estándares de calidad y durabilidad.' },
    { icon: 'timer', title: 'Puntualidad garantizada', desc: 'Respetamos los plazos acordados. El tiempo es dinero.' },
    { icon: 'heart-handshake', title: 'Atención personalizada', desc: 'Trato directo y cercano. Nos involucramos en tu proyecto.' },
    { icon: 'target', title: 'Experiencia comprobada', desc: 'Más de una década y cientos de proyectos nos respaldan.' },
    { icon: 'zap', title: 'Respuesta rápida', desc: 'Cotizaciones ágiles y coordinación eficiente desde el primer contacto.' },
    { icon: 'badge-check', title: 'Compromiso total', desc: 'Trabajamos con responsabilidad y transparencia de principio a fin.' },
  ],
};

export const PROCESS = {
  eyebrow: 'Cómo trabajamos',
  title: 'Un proceso simple y confiable',
  subtitle: 'Desde el primer contacto hasta la entrega, cada paso está pensado para que todo fluya.',
  steps: [
    { num: '01', title: 'Contacto', desc: 'Escríbenos por WhatsApp, teléfono o correo. Cuéntanos tu proyecto.' },
    { num: '02', title: 'Evaluación', desc: 'Analizamos tus requerimientos y entregamos una cotización clara.' },
    { num: '03', title: 'Coordinación', desc: 'Planificamos la logística según tus tiempos y condiciones.' },
    { num: '04', title: 'Ejecución', desc: 'Entregamos el servicio en las condiciones óptimas pactadas.' },
    { num: '05', title: 'Seguimiento', desc: 'Hacemos seguimiento para asegurar tu satisfacción total.' },
  ],
};

export const TESTIMONIALS = {
  eyebrow: 'Confianza y respaldo',
  title: 'Lo que dicen nuestros clientes',
  subtitle: 'La satisfacción de quienes confían en nosotros es el mejor reflejo de nuestro trabajo.',
  featured: {
    quote:
      'El equipo fue impecable de principio a fin. Puntualidad, comunicación clara y un resultado que superó lo que esperábamos.',
    author: 'Carla Muñoz',
    role: 'Gerente de Operaciones',
    company: 'Vértice',
  },
  items: [
    { text: 'Excelente servicio y puntualidad. Muy profesionales en todo momento. Volveremos a trabajar con ellos.', author: 'Carlos M.', role: 'Gerente de Proyectos', rating: 5 },
    { text: 'Nos han acompañado en varios proyectos. Su compromiso con la calidad los hace un proveedor confiable.', author: 'Daniela R.', role: 'Directora Comercial', rating: 5 },
    { text: 'La asesoría fue clave para elegir la solución correcta. Muy buena comunicación. Totalmente recomendados.', author: 'Roberto L.', role: 'Jefe de Operaciones', rating: 5 },
  ],
};

export const SHOWCASE = {
  eyebrow: 'Proyectos y operación',
  title: 'Nuestro trabajo en acción',
  subtitle: 'Cada proyecto refleja nuestro compromiso con la calidad y la capacidad que nos respalda.',
  items: [
    { icon: 'truck', label: 'Logística profesional', tag: 'Operación', variant: 'violet' },
    { icon: 'building', label: 'Proyectos corporativos', tag: 'En curso', variant: 'white' },
    { icon: 'hard-hat', label: 'Personal capacitado', tag: 'En terreno', variant: 'sky' },
    { icon: 'camera', label: 'Puntualidad garantizada', tag: 'Entrega', variant: 'volt' },
    { icon: 'building-2', label: 'Resultados que hablan', tag: 'Finalizado', variant: 'white' },
    { icon: 'route', label: 'Coordinación eficiente', tag: 'Logística', variant: 'blue' },
  ],
};

export const FAQ = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Resolvemos tus dudas',
  subtitle: 'Las consultas más comunes sobre nuestros servicios.',
  items: [
    { q: '¿Qué servicios ofrecen?', a: 'Ofrecemos una gama completa de servicios profesionales adaptados a las necesidades específicas de cada cliente y proyecto.' },
    { q: '¿Cuál es el tiempo de entrega?', a: 'Coordinamos las entregas según las necesidades de tu proyecto, con plazos ajustados y compromiso con la puntualidad.' },
    { q: '¿Atienden a particulares o solo a empresas?', a: 'Atendemos tanto a empresas como a particulares. Cada proyecto, sin importar su tamaño, recibe la misma calidad de atención.' },
    { q: '¿Cómo puedo solicitar una cotización?', a: 'Puedes contactarnos por WhatsApp, teléfono o correo electrónico. Te responderemos a la brevedad.' },
    { q: '¿Cuál es su zona de cobertura?', a: 'Operamos en toda la región. Consulta con nuestro equipo la disponibilidad para tu ubicación específica.' },
    { q: '¿Ofrecen asesoría?', a: 'Sí. Nuestro equipo puede orientarte para elegir la solución más adecuada para tu proyecto.' },
  ],
};

export const CTA = {
  eyebrow: '¿Listo para comenzar?',
  title: 'Cotiza hoy tu proyecto',
  subtitle: 'Contáctanos ahora y recibe atención rápida y personalizada. Estamos listos para ayudarte.',
  ctaPrimary: 'Hablar por WhatsApp',
  ctaSecondary: 'Llamar ahora',
};

export const FOOTER = {
  about: 'Compromiso, experiencia y servicio profesional para cada proyecto, de principio a fin.',
  columns: [
    {
      title: 'Navegación',
      links: [
        { label: 'Servicios', href: '#servicios' },
        { label: 'Beneficios', href: '#beneficios' },
        { label: 'Proceso', href: '#proceso' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Preguntas', href: '#faq' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Servicio Premium', href: '#servicios' },
        { label: 'Entrega Rápida', href: '#servicios' },
        { label: 'Proyectos Corporativos', href: '#servicios' },
        { label: 'Asesoría Técnica', href: '#servicios' },
        { label: 'Atención Integral', href: '#servicios' },
      ],
    },
  ],
};

/* ── Helpers ─────────────────────────────────────────────────── */
export const waLink = (message?: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message || CONTACT.whatsappMessage)}`;
export const telLink = () => `tel:${CONTACT.phoneClean}`;
export const mailLink = () => `mailto:${CONTACT.email}`;
