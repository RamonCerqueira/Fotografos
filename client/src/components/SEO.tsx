import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  structuredData?: Record<string, any>;
}

export function SEO({ 
  title = "Sistema de Landing Page para Fotógrafos | Aumente seus Orçamentos", 
  description = "Transforme seu portfólio em uma máquina de vendas. Tenha um site profissional, rápido e otimizado para fotógrafos que querem fechar mais contratos.", 
  keywords = "site para fotografo, landing page fotografia, portfolio online, sistema para fotógrafos", 
  image = "/social-images/overview.png",
  url = "https://fotografos-beta.vercel.app/",
  structuredData
}: SEOProps) {
  
  const siteTitle = title;
  const fullUrl = url;
  const fullImage = image.startsWith('http') ? image : `${url}${image.startsWith('/') ? image.slice(1) : image}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
