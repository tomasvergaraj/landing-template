/* ============================================
   CONFIGURACIÓN DEL SITIO
   ============================================
   Edita SOLO este archivo para personalizar
   toda la landing page para cualquier empresa.
   ============================================ */

// ─── Datos de la Empresa ─────────────────────
export const SITE_CONFIG = {
  companyName: 'Tu Empresa',
  tagline: 'Soluciones profesionales para tu negocio',
  slogan: 'Innovación, calidad y compromiso en cada proyecto',
  logoPath: '/logo.png',
};

// ─── Contacto ────────────────────────────────
export const CONTACT_INFO = {
  phone: '+56 9 1234 5678',
  phoneClean: '56912345678',
  whatsapp: '56912345678',
  whatsappMessage: 'Hola, me gustaría solicitar información sobre sus servicios.',
  email: 'contacto@tuempresa.cl',
  address: 'Av. Principal 1234, Ciudad, País',
  city: 'Ciudad',
  region: 'Región',
  schedule: 'Lunes a Viernes: 09:00 - 18:00 | Sábados: 09:00 - 13:00',
};

// ─── Redes Sociales ──────────────────────────
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/tuempresa',
  instagram: 'https://www.instagram.com/tuempresa',
  tiktok: 'https://www.tiktok.com/@tuempresa',
  linkedin: 'https://www.linkedin.com/company/tuempresa',
};

// ─── Hero ────────────────────────────────────
export const HERO_CONFIG = {
  badge: 'Líder en Soluciones Profesionales',
  titleLine1: 'Transformamos',
  titleAccent: 'Ideas',
  titleLine2: 'en Resultados',
  subtitle:
    'Más de una década entregando soluciones de calidad. Atendemos empresas y particulares con la excelencia que tu proyecto necesita.',
  ctaPrimary: 'Cotizar por WhatsApp',
  ctaSecondary: 'Ver Servicios',
  stats: [
    { number: '500+', label: 'Proyectos Entregados' },
    { number: '10+', label: 'Años de Experiencia' },
    { number: '100%', label: 'Compromiso' },
  ],
};

// ─── About / Nosotros ────────────────────────
export const ABOUT_CONFIG = {
  label: 'Quiénes Somos',
  title: 'Más de una década construyendo',
  titleAccent: 'confianza',
  paragraphs: [
    `<strong>${SITE_CONFIG.companyName}</strong> es una empresa especializada en entregar soluciones profesionales de alta calidad. Con más de 10 años de experiencia, nos hemos consolidado como un referente confiable para empresas y particulares.`,
    'Nuestro compromiso va más allá de entregar un producto: ofrecemos una experiencia completa de servicio, desde la asesoría inicial hasta el seguimiento posterior a la entrega.',
    'Nos diferenciamos por nuestra puntualidad, flexibilidad y atención personalizada. Entendemos que cada proyecto tiene necesidades únicas, y adaptamos nuestro servicio para garantizar resultados.',
  ],
  highlights: [
    { icon: 'Shield', label: 'Calidad Garantizada' },
    { icon: 'Award', label: 'Experiencia Comprobada' },
    { icon: 'Users', label: 'Atención Personalizada' },
    { icon: 'Clock', label: 'Entregas Puntuales' },
  ],
};

// ─── Servicios ───────────────────────────────
export const SERVICES_CONFIG = {
  label: 'Nuestros Servicios',
  title: 'Soluciones Completas para Tu Proyecto',
  subtitle: 'Ofrecemos un servicio integral que cubre todas las necesidades de tu negocio, desde la asesoría inicial hasta la entrega final.',
  items: [
    {
      icon: 'Warehouse',
      title: 'Servicio Premium',
      description: 'Soluciones de alta calidad adaptadas a los requerimientos específicos de cada proyecto.',
    },
    {
      icon: 'Truck',
      title: 'Entrega Rápida',
      description: 'Servicio de transporte y entrega con coordinación precisa para que tu proyecto no se detenga.',
    },
    {
      icon: 'Building2',
      title: 'Proyectos Corporativos',
      description: 'Soluciones integrales para empresas con volúmenes ajustados a cada etapa.',
    },
    {
      icon: 'HardHat',
      title: 'Proyectos a Medida',
      description: 'Desde proyectos pequeños hasta los de gran envergadura. Nos adaptamos a tu escala.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Asesoría Técnica',
      description: 'Orientación profesional para seleccionar la solución más adecuada a tu proyecto.',
    },
    {
      icon: 'UsersRound',
      title: 'Atención Integral',
      description: 'Servicio personalizado para empresas y particulares. Cada cliente recibe atención directa.',
    },
  ],
};

// ─── Beneficios ──────────────────────────────
export const BENEFITS_CONFIG = {
  label: '¿Por Qué Elegirnos?',
  title: 'Tu Proyecto Merece el Mejor Respaldo',
  subtitle: 'Cada detalle cuenta cuando se trata de la base de tu proyecto. Con nosotros, tienes la certeza de un servicio sólido y profesional.',
  items: [
    {
      icon: 'ShieldCheck',
      title: 'Calidad Certificada',
      desc: 'Cumplimos con los más altos estándares de calidad y durabilidad para cada tipo de proyecto.',
    },
    {
      icon: 'Timer',
      title: 'Puntualidad Garantizada',
      desc: 'Cumplimos con los plazos de entrega acordados. Sabemos que el tiempo es dinero.',
    },
    {
      icon: 'HeartHandshake',
      title: 'Atención Personalizada',
      desc: 'Cada cliente recibe un trato directo y cercano. Nos involucramos en tu proyecto.',
    },
    {
      icon: 'Target',
      title: 'Experiencia Comprobada',
      desc: 'Más de una década en el rubro nos respalda con cientos de proyectos realizados.',
    },
    {
      icon: 'Zap',
      title: 'Respuesta Rápida',
      desc: 'Cotizaciones ágiles y coordinación eficiente desde el primer contacto.',
    },
    {
      icon: 'CheckCircle2',
      title: 'Compromiso Total',
      desc: 'Trabajamos con responsabilidad y transparencia de principio a fin.',
    },
  ],
};

// ─── Proceso ─────────────────────────────────
export const PROCESS_CONFIG = {
  label: 'Cómo Trabajamos',
  title: 'Un Proceso Simple, Eficiente y Confiable',
  subtitle: 'Desde tu primer contacto hasta la entrega final, cada paso está diseñado para que tu experiencia sea fluida.',
  steps: [
    {
      icon: 'MessageSquare',
      number: '01',
      title: 'Contacto',
      desc: 'Comunícate con nosotros por WhatsApp, teléfono o correo. Cuéntanos sobre tu proyecto.',
    },
    {
      icon: 'FileSearch',
      number: '02',
      title: 'Evaluación',
      desc: 'Analizamos tus requerimientos y te entregamos una cotización detallada y transparente.',
    },
    {
      icon: 'CalendarClock',
      number: '03',
      title: 'Coordinación',
      desc: 'Planificamos la logística según los tiempos y condiciones de tu proyecto.',
    },
    {
      icon: 'Truck',
      number: '04',
      title: 'Ejecución',
      desc: 'Entregamos el servicio en las condiciones óptimas pactadas.',
    },
    {
      icon: 'ThumbsUp',
      number: '05',
      title: 'Seguimiento',
      desc: 'Realizamos seguimiento para asegurar tu satisfacción total.',
    },
  ],
};

// ─── Testimonios ─────────────────────────────
export const TESTIMONIALS_CONFIG = {
  label: 'Confianza y Respaldo',
  title: 'Lo Que Dicen Nuestros Clientes',
  subtitle: 'La satisfacción de nuestros clientes es el mejor reflejo de nuestro trabajo.',
  items: [
    {
      text: 'Excelente servicio y puntualidad. El equipo fue muy profesional en todo momento. Sin duda volveremos a trabajar con ellos.',
      author: 'Carlos M.',
      role: 'Gerente de Proyectos',
      rating: 5,
    },
    {
      text: 'Nos han acompañado en varios proyectos. Su compromiso con la calidad los convierte en un proveedor confiable para nuestra empresa.',
      author: 'Daniela R.',
      role: 'Directora Comercial',
      rating: 5,
    },
    {
      text: 'La asesoría que nos dieron fue clave para elegir la solución correcta. Muy buena comunicación. Totalmente recomendados.',
      author: 'Roberto L.',
      role: 'Jefe de Operaciones',
      rating: 5,
    },
  ],
};

// ─── Galería ─────────────────────────────────
export const GALLERY_CONFIG = {
  label: 'Proyectos y Operación',
  title: 'Nuestro Trabajo en Acción',
  subtitle: 'Cada imagen refleja nuestro compromiso con la calidad y la capacidad operativa que nos respalda.',
  items: [
    { icon: 'Truck', label: 'Operación', caption: 'Logística profesional' },
    { icon: 'Building', label: 'Proyecto en Curso', caption: 'Proyectos corporativos' },
    { icon: 'HardHat', label: 'Equipo en Terreno', caption: 'Personal capacitado' },
    { icon: 'Camera', label: 'Entrega', caption: 'Puntualidad garantizada' },
    { icon: 'Building', label: 'Proyecto Finalizado', caption: 'Resultados que hablan' },
    { icon: 'Truck', label: 'Logística', caption: 'Coordinación eficiente' },
  ],
};

// ─── FAQ ─────────────────────────────────────
export const FAQ_CONFIG = {
  label: 'Preguntas Frecuentes',
  title: 'Resuelve tus Dudas',
  subtitle: 'Encuentra respuesta a las consultas más comunes sobre nuestros servicios.',
  items: [
    {
      q: '¿Qué servicios ofrecen?',
      a: 'Ofrecemos una gama completa de servicios profesionales adaptados a las necesidades específicas de cada cliente y proyecto.',
    },
    {
      q: '¿Cuál es el tiempo de entrega?',
      a: 'Coordinamos las entregas según las necesidades de tu proyecto. Trabajamos con plazos ajustados y nos comprometemos con la puntualidad.',
    },
    {
      q: '¿Atienden a particulares o solo a empresas?',
      a: 'Atendemos tanto a empresas como a clientes particulares. Cada proyecto, sin importar su tamaño, recibe la misma calidad de atención.',
    },
    {
      q: '¿Cómo puedo solicitar una cotización?',
      a: 'Puedes contactarnos directamente por WhatsApp, llamada telefónica o correo electrónico. Te responderemos a la brevedad.',
    },
    {
      q: '¿Cuál es su zona de cobertura?',
      a: 'Operamos en toda la región. Consulta con nuestro equipo la disponibilidad para tu ubicación específica.',
    },
    {
      q: '¿Ofrecen asesoría?',
      a: 'Sí, nuestro equipo puede orientarte en la selección de la solución más adecuada para tu proyecto.',
    },
  ],
};

// ─── CTA ─────────────────────────────────────
export const CTA_CONFIG = {
  label: '¿Listo Para Comenzar?',
  title: 'Cotiza Hoy Tu Proyecto',
  subtitle: 'Contáctanos ahora y recibe atención rápida y personalizada. Estamos listos para ayudarte.',
};

// ─── Footer Links ────────────────────────────
export const FOOTER_CONFIG = {
  quickLinks: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Proyectos', href: '#proyectos' },
  ],
  serviceLinks: [
    'Servicio Premium',
    'Entrega Rápida',
    'Proyectos Corporativos',
    'Asesoría Técnica',
    'Atención Integral',
  ],
};

// ─── Helpers ─────────────────────────────────
export const getWhatsAppLink = (message) => {
  const msg = encodeURIComponent(message || CONTACT_INFO.whatsappMessage);
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${msg}`;
};

export const getPhoneLink = () => `tel:${CONTACT_INFO.phoneClean}`;
export const getEmailLink = () => `mailto:${CONTACT_INFO.email}`;
