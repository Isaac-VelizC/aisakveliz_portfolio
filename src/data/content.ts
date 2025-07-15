// src/data/content.ts
export const content = {
  header: {
    logo: "sakRoi",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
  hero: {
    greeting: "Soy Isak",
    role: "Desarrollador Full Stack",
    description:
      "Construyo soluciones digitales usando React, Django y Laravel.",
    view_projects: "Ver Proyectos",
  },
  about: {
    title: "Sobre mí",
    content:
      "Soy ingeniero en sistemas con más de dos años de experiencia desarrollando soluciones tecnológicas robustas y escalables. He trabajado en diseño de sistemas, desarrollo web y móvil, y gestión de bases de datos. Me especializo en Python, PHP y JavaScript, utilizando frameworks como Laravel, Django, Flutter y React. Me motiva transformar ideas complejas en aplicaciones funcionales, eficientes y centradas en el usuario.",
    buttonDonwload: "Descargar CV",

    // Sección de habilidades técnicas (resumen breve)
    expertise_title: "Conocimientos",
    about_intro:
      "Stack Full Stack moderno con experiencia en frontend, backend y bases de datos.",
  },
  portfolio: {
    title: "Trabajos recientes",
    description:
      "Explora algunos de mis proyectos recientes: soluciones escalables, pensadas para usuarios reales y desarrolladas con pasión por el detalle.",
  },
  contact: {
    title: "Contáctame",
    emailPlaceholder: "aisakvelizdc@gmail.com",
    whatsapp_link: "https://wa.me/59169625120?text=Hola,%20me%20interesa%20tu%20trabajo%20como%20desarrollador.",
    button: "Enviar",
    contact_message:
      "¿Tienes una idea, proyecto o desafío digital? Estoy listo para ayudarte a convertirlo en una solución real. ¡Hablemos!",
    contact_datas: "Información de contacto",
    contact_button_text: "Escríbeme por WhatsApp",
    copied_email_message: "Correo copiado exitosamente",
  },
};

export type Content = typeof content;
