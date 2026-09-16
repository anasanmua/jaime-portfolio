export type Locale = "es" | "en"

export interface Localized {
  es: string
  en: string
}

/** Pick the translation for a locale, falling back to en. */
export function pick(locale: Locale, text: Localized): string {
  return text[locale] ?? text.en ?? ""
}

/** Detect locale from an Accept-Language header value. */
export function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "en"
  const primary = header.split(",")[0]?.trim().toLowerCase() ?? ""
  return primary.startsWith("es") ? "es" : "en"
}

export const dictionary = {
  nav: {
    about: { es: "Sobre mí", en: "About" },
    work: { es: "Trabajo", en: "Work" },
    contact: { es: "Contacto", en: "Contact" },
    getInTouch: { es: "Hablemos", en: "Get in Touch" },
    madeWith: { es: "Hecho con", en: "Made with" },
    by: { es: "por", en: "by" },
  },
  hero: {
    role: {
      es: "Artista 3D & Director Técnico",
      en: "3D Artist & Technical Director",
    },
    tagline: {
      es: "Creo experiencias digitales inmersivas con VFX, animación y 3D en tiempo real, uniendo imaginación y precisión técnica.",
      en: "Crafting immersive digital experiences through VFX, animation and real-time 3D — bringing imagination to life with technical precision.",
    },
    viewWork: { es: "Ver trabajo", en: "View Work" },
    contactMe: { es: "Contactarme", en: "Contact Me" },
    scroll: { es: "Desplaza", en: "Scroll" },
    capabilities: {
      vfx: { es: "VFX", en: "VFX" },
      animation: { es: "Animación", en: "Animation" },
      rigging: { es: "Rigging", en: "Rigging" },
      modeling: { es: "Modelado", en: "Modeling" },
      realTime: { es: "Tiempo real", en: "Real-time" },
    },
  },
  about: {
    label: { es: "Sobre mí", en: "About" },
    bio1: {
      es: "Soy artista 3D y director técnico apasionado por crear experiencias digitales inmersivas. Con experiencia en VFX, animación de personajes, rigging y gráficos en tiempo real, doy vida a visiones creativas con precisión técnica.",
      en: "I am a 3D artist and technical director with a passion for creating immersive digital experiences. With expertise spanning VFX, character animation, rigging, and real-time graphics, I bring creative visions to life with technical precision.",
    },
    bio2: {
      es: "Mi trabajo ha contribuido a desarrollo de videojuegos, visualización arquitectónica y producción audiovisual. Me especializado en cerrar la distancia entre visión artística y ejecución técnica, siempre empujando los límites de lo posible.",
      en: "My work has contributed to game development, architectural visualization, and film production. I specialize in bridging the gap between artistic vision and technical execution, always pushing the boundaries of what is possible.",
    },
    bio3: {
      es: "Cuando no estoy creando mundos digitales, explorando las últimas tecnologías de render en tiempo real o experimentando con herramientas de generación procedural.",
      en: "When I am not creating digital worlds, you can find me exploring the latest in real-time rendering technology or experimenting with procedural generation tools.",
    },
    skillsTitle: { es: "Habilidades y herramientas", en: "Skills & Tools" },
    skillCategories: {
      software: { es: "Software 3D", en: "3D Software" },
      engines: { es: "Motores de juego", en: "Game Engines" },
      vfx: { es: "VFX y Compresión", en: "VFX & Compositing" },
      texturing: { es: "Texturizado", en: "Texturing" },
    },
    stats: {
      years: { es: "Años de experiencia", en: "Years Experience" },
      projects: { es: "Proyectos", en: "Projects" },
      clients: { es: "Clientes", en: "Clients" },
    },
  },
  work: {
    label: { es: "Portfolio", en: "Portfolio" },
    title: { es: "Trabajo seleccionado", en: "Selected Work" },
    desc: {
      es: "Una selección de proyectos que abarcan VFX, animación, rigging, modelado y más. Cada pieza representa un reto único y una solución creativa.",
      en: "A curated selection of projects spanning VFX, animation, rigging, modeling, and more. Each piece represents a unique challenge and creative solution.",
    },
    viewProject: { es: "Ver proyecto", en: "View Project" },
    categories: {
      All: { es: "Todos", en: "All" },
      Tools: { es: "Herramientas", en: "Tools" },
      Technical: { es: "Técnico", en: "Technical" },
      VFX: { es: "VFX", en: "VFX" },
      Animation: { es: "Animación", en: "Animation" },
      Shaders: { es: "Shaders", en: "Shaders" },
      "Real Time": { es: "Tiempo real", en: "Real Time" },
      DemoReel: { es: "Demo Reel", en: "DemoReel" },
    } as const,
  },
  contact: {
    label: { es: "Contacto", en: "Contact" },
    title: { es: "Información de contacto", en: "Contact Information" },
    desc: {
      es: "Puedes contactarme directamente a través de cualquiera de estos medios.",
      en: "You can reach out to me directly through any of these channels.",
    },
    name: { es: "Nombre", en: "Name" },
    phone: { es: "Teléfono", en: "Phone" },
    email: { es: "Email", en: "Email" },
    whatsapp: { es: "WhatsApp", en: "WhatsApp" },
    linkedin: { es: "LinkedIn", en: "LinkedIn" },
    github: { es: "GitHub", en: "GitHub" },
    location: { es: "Ubicación", en: "Location" },
    copyEmail: { es: "Copiar email", en: "Copy email" },
    copied: { es: "✓ ¡Copiado!", en: "✓ Copied!" },
    whatsappCta: {
      es: "Enviar mensaje por WhatsApp",
      en: "Send a WhatsApp message",
    },
  },
  footer: {
    rights: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
    },
  },
  project: {
    back: { es: "Volver al portfolio", en: "Back to Portfolio" },
    aboutThis: { es: "Sobre este proyecto", en: "About This Project" },
    gallery: { es: "Galería", en: "Gallery" },
    tools: { es: "Herramientas y software", en: "Tools & Software" },
    ctaTitle: {
      es: "¿Interesado en un proyecto similar?",
      en: "Interested in similar work?",
    },
    ctaDesc: {
      es: "Hablemos de tu proyecto y veamos cómo puedo ayudarte.",
      en: "Let's discuss your project and see how I can help.",
    },
    cta: { es: "Hablemos", en: "Get in Touch" },
    related: { es: "Proyectos relacionados", en: "Related Projects" },
    notFound: { es: "Proyecto no encontrado", en: "Project Not Found" },
  },
  lightbox: {
    close: { es: "Cerrar", en: "Close" },
    zoomIn: { es: "Acercar", en: "Zoom in" },
    zoomOut: { es: "Alejar", en: "Zoom out" },
    reset: { es: "Reiniciar", en: "Reset" },
    previous: { es: "Anterior", en: "Previous" },
    next: { es: "Siguiente", en: "Next" },
    of: { es: "de", en: "of" },
    hint: {
      es: "Scroll para zoom | Arrastra para mover | Doble click para reiniciar",
      en: "Scroll to zoom | Drag to move | Double click to reset",
    },
  },
  cv: {
    download: { es: "Descargar PDF", en: "Download PDF" },
  },
} as const

export type Dict = typeof dictionary
