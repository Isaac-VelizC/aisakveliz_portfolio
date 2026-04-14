// Structured Data para SEO (JSON-LD)

import type { ProjectsInterface } from "../interface/Project";

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Isaac Veliz",
  "jobTitle": "Full-Stack Developer",
  "description": "Ingeniero de Sistemas y Desarrollador Full-Stack especializado en aplicaciones web modernas",
  "url": import.meta.env.VITE_URL_APP || window.location.href,
  "image": "/banner.png",
  "sameAs": [
    "https://linkedin.com/in/isaac-veliz",
    "https://github.com/isaac-veliz",
    "https://twitter.com/isaac_veliz"
  ],
  "knowsAbout": [
    "React",
    "Django", 
    "Laravel",
    "Flutter",
    "TypeScript",
    "Python",
    "JavaScript",
    "Node.js"
  ],
  "offers": {
    "@type": "Offer",
    "description": "Servicios de desarrollo web y móvil",
    "serviceType": "Desarrollo de Software"
  }
};

export const webSiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AISAKVELIZ - Portafolio de Desarrollo Full Stack",
  "description": "Portafolio profesional de Isaac Veliz, Ingeniero de Sistemas y Desarrollador Full-Stack",
  "url": import.meta.env.VITE_URL_APP || window.location.href,
  "image": "/banner.png",
  "author": {
    "@type": "Person",
    "name": "Isaac Veliz"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": import.meta.env.VITE_URL_APP + "/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desarrollo de Software Full-Stack",
  "description": "Servicios completos de desarrollo web y móvil",
  "provider": {
    "@type": "Person",
    "name": "Isaac Veliz"
  },
  "serviceType": "Desarrollo de Software",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Desarrollo",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desarrollo Web",
          "description": "Aplicaciones web modernas con React y Django/Laravel"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Desarrollo Móvil",
          "description": "Aplicaciones móviles nativas y multiplataforma"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Consultoría Técnica",
          "description": "Asesoramiento en arquitectura de software"
        }
      }
    ]
  }
};

export const projectStructuredData = (project: ProjectsInterface) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "image": project.image,
  "url": project.demo_url || `${import.meta.env.VITE_URL_APP}/projects/${project.slug}`,
  "dateCreated": project.date || project.created_at,
  "author": {
    "@type": "Person",
    "name": "Isaac Veliz"
  },
  "programmingLanguage": project.technologies?.map((tech: { name: string }) => tech.name) || [],
  "isBasedOn": project.repository_url,
  "applicationCategory": "Software Application"
});
