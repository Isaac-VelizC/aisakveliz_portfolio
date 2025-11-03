export const navigationItems = [
  // { name: "Inicio", ref: "#hero", activeClass: "home" },
  { name: "Sobre mí", ref: "#aboutMe", activeClass: "aboutMe" },
  { name: "Servicios", ref: "#services", activeClass: "services" },
  { name: "Habilidades", ref: "#technologies", activeClass: "technologies" },
  { name: "Proyectos", ref: "#projects", activeClass: "projects" },
  { name: "Contacto", ref: "#contactMe", activeClass: "contactMe" },
];

// src/data/content.ts
export const contentText = {
  hero: {
    greeting: "Hola, soy Isak",
    profession: "Ingeniero en Sistemas",
    role: "Desarrollador Full Stack",
    description:
      "Construyo soluciones digitales eficientes y centradas en el usuario, impulsando proyectos que transforman ideas en productos tecnológicos de alto impacto.",
    buttons_CTA: "Ver Proyectos",
    buttons_CTA_2: "Trabajemos Juntos",
  },
  about: {
    title: "Sobre mí",
    content:
      "Soy ingeniero en sistemas apasionado por transformar ideas en productos digitales que generan impacto. Mi enfoque está en crear soluciones que combinan eficiencia, diseño y experiencia de usuario. \n\nCuento con más de dos años de experiencia en desarrollo de software, trabajando en proyectos de sistemas web, móviles y gestión de bases de datos. Mi stack principal incluye Python, PHP y JavaScript, con frameworks como Laravel, Django, Flutter y React.",
    buttonDownload: "Descargar CV",
    buttonCTA: "Hablemos",
  },
  portfolio: {
    title: "Proyectos Destacados",
    description:
      "Explora una selección de proyectos recientes en desarrollo web, móvil y sistemas de gestión. Cada solución fue creada para resolver necesidades reales, con un enfoque en escalabilidad, diseño intuitivo y resultados de alto impacto.",
  },
  contact: {
    title: "Contáctame",
    emailPlaceholder: "aisakvelizdc@gmail.com",
    whatsapp: "+591 (696) 25120",
    whatsapp_link:
      "https://wa.me/59169625120?text=Hola,%20me%20interesa%20tu%20trabajo%20como%20desarrollador.",
    button: "Enviar mensaje",
    contact_message:
      "¿Tienes una idea, proyecto o desafío digital? Estoy aquí para ayudarte a transformarlo en una solución tecnológica eficiente y funcional. ¡Escríbeme y demos el primer paso!",
    contact_datas: "Información de contacto",
    contact_button_text: "Chatea conmigo en WhatsApp",
    copied_email_message: "Correo copiado exitosamente",
  },
};

export type ContentText = typeof contentText;
