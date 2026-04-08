import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Footer} from "./components";
import {data} from "./data"
import Script from "next/script";

export const metadata: Metadata = {
  title: "dgelagage - elagueur et paysagiste",
  metadataBase: new URL(data.url),
  description: "Élagueur et paysagiste dans le Val d'Oise et l'Oise",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "dgelagage - elagueur et paysagiste",
    description: "Élagueur et paysagiste dans le Val d'Oise et l'Oise",
    url: data.url,
    siteName: data.entreprise,
    images: [
      {
        url: "/LOGOMAYTEC.png",
        width: 1200,
        height: 630,
        alt: "Maytec - Électricien",
      },
    ],
    type: "website",
    
  },
};

export  function Schema() {
  return (
    <Script
      type="application/ld+json"
      id="schema"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "elagueur", // Type de l'entreprise
          "name": data.entreprise,
          "url": data.url,
          "logo": "/Logo.png",
          "image": "/Imagedesc.png",
          "description": "Élagueur et paysagiste dans le Val d'Oise et l'Oise",
          "telephone": data.numero,
          "email": data.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 Bis rue de la Garenne",
            "addressLocality": "Viarmes",
            "addressRegion": "Val-d'Oise",
            "postalCode": "95760",
            "addressCountry": "FR"
          },
          "areaServed": data.zone,
          "priceRange": "€€",
          "serviceType": data.fonction,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services dgelagage",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "elagage toute hauteur"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "taille et soin des arbres"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "tailles de haies"
                }
              }
             
            ]
          }
        })
      }}
    />
  );
}



const inter = Inter({
  
  subsets: ["latin"],
});

  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="" />
        <link rel="canonical" href={data.url} />
      </head>
      <body
        className={`${inter}  antialiased text-text overflow-x-hidden bg-fond1  `}
      >
        <Schema />
        {children}
        <Footer />
      </body>
    </html>
  );
}
