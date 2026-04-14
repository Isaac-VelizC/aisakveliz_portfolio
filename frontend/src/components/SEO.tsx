import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
  noindex?: boolean;
  structuredData?: Record<string, any>;
}

const SEO = ({
  title = 'AISAKVELIZ | Portafolio de Desarrollo Full Stack',
  description = 'Soy Ingeniero de Sistemas y Desarrollador Full-Stack especializado en aplicaciones web modernas, móviles y soluciones digitales. Descubre mis proyectos y servicios de desarrollo.',
  image = '/banner.png',
  url = import.meta.env.VITE_URL_APP || window.location.href,
  type = 'website',
  keywords = ['desarrollador web', 'full-stack', 'ingeniero de sistemas', 'desarrollo de software', 'aplicaciones web', 'react', 'django', 'laravel', 'flutter'],
  author = 'Isaac Veliz',
  noindex = false,
  structuredData
}: SEOProps) => {
  const siteTitle = title.includes('AISAKVELIZ') ? title : `${title} | AISAKVELIZ`;
  const jsonLd = structuredData ? JSON.stringify(structuredData) : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="AISAKVELIZ" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="twitter:creator" content="@isaac_veliz" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {jsonLd}
        </script>
      )}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Helmet>
  );
};

export default SEO;
