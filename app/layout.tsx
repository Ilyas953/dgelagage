import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components";
import { data } from "./data";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(data.url),
  title: {
    default: "DG Élagage – Élagueur & Paysagiste à Viarmes, Val-d'Oise (95)",
    template: "%s | DG Élagage – Élagueur Paysagiste Val-d'Oise",
  },
  description:
    "DG Élagage, votre élagueur et paysagiste professionnel à Viarmes (95760). Élagage, abattage, taille de haies et entretien de jardins dans le Val-d'Oise et l'Oise. Devis gratuit.",
  keywords: [
    "élagueur Viarmes",
    "paysagiste Val-d'Oise",
    "élagage 95",
    "abattage arbres Viarmes",
    "taille haies Val-d'Oise",
    "entretien jardin Viarmes",
    "élagueur professionnel",
    "DG Élagage",
    "paysagiste Oise",
    "élagage Île-de-France",
  ],
  authors: [{ name: data.entreprise, url: data.url }],
  creator: data.entreprise,
  publisher: data.entreprise,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DG Élagage – Élagueur & Paysagiste à Viarmes, Val-d'Oise (95)",
    description:
      "Élagueur et paysagiste professionnel à Viarmes (95). Élagage, abattage, taille de haies, entretien de jardins. Devis gratuit et rapide.",
    url: data.url,
    siteName: data.entreprise,
    images: [
      {
        url: "/imagehero.jpg",
        width: 1200,
        height: 630,
        alt: "DG Élagage – Élagueur professionnel à Viarmes dans le Val-d'Oise",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DG Élagage – Élagueur & Paysagiste à Viarmes, Val-d'Oise (95)",
    description:
      "Élagueur et paysagiste professionnel à Viarmes (95). Élagage, abattage, taille de haies, entretien de jardins. Devis gratuit.",
    images: ["/imagehero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: data.url,
  },
};

export function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: data.entreprise,
    url: data.url,
    logo: `${data.url}/Logo.png`,
    image: `${data.url}/imagehero.jpg`,
    description:
      "Élagueur et paysagiste professionnel à Viarmes dans le Val-d'Oise. Élagage, abattage d'arbres, taille de haies et entretien de jardins pour particuliers et professionnels.",
    telephone: data.numero,
    email: data.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 Bis rue de la Garenne",
      addressLocality: "Viarmes",
      addressRegion: "Val-d'Oise",
      postalCode: "95760",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.1167,
      longitude: 2.3667,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    areaServed: [
      { "@type": "Place", name: "Viarmes" },
      { "@type": "Place", name: "Val-d'Oise" },
      { "@type": "Place", name: "Oise" },
      { "@type": "Place", name: "Île-de-France" },
    ],
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services DG Élagage",
      itemListElement: data.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.titre,
          description: service.description,
        },
      })),
    },
    review: data.avis.map((avis) => ({
      "@type": "Review",
      author: { "@type": "Person", name: avis.nom },
      reviewBody: avis.commentaire,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: data.avis.length,
    },
  };

  return (
    <Script
      type="application/ld+json"
      id="schema-localbusiness"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
        <meta name="google-site-verification" content="Tkzgg6QoI_QizN-eUsyTSnjHtXrLavHtvSQcVWOUS_E" />
      </head>
      <body
        className={`${inter} antialiased text-text overflow-x-hidden bg-fond1`}
      >
        <Schema />
        {children}
        <Footer />
      </body>
    </html>
  );
}
