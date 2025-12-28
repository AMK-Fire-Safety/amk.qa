import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://amk.qa'),
  title: {
    default: 'AMK Safety & Security Services - Fire Protection Solutions in Doha, Qatar',
    template: '%s | AMK Safety & Security Qatar',
  },
  description: 'Leading fire protection and safety solutions provider in Doha, Qatar. Authorized dealer for Honeywell, Simplex, Siemens, Tyco, Notifier fire alarm systems, fire suppression systems, and fire fighting equipment. 24/7 emergency service across Qatar.',
  keywords: [
    'fire alarm system Qatar',
    'fire protection Qatar',
    'fire suppression system Doha',
    'fire fighting equipment Qatar',
    'Honeywell fire alarm Qatar',
    'Simplex fire alarm Doha',
    'fire safety services Qatar',
    'emergency fire system Qatar',
    'fire detection system Doha',
    'AMK safety Qatar',
    'Siemens fire alarm Qatar',
    'Tyco fire protection Qatar',
    'Notifier fire alarm Qatar',
    'fire safety equipment Doha',
    'fire alarm installation Qatar',
    'fire system maintenance Qatar',
  ],
  authors: [{ name: 'AMK Safety & Security Services' }],
  creator: 'AMK Safety & Security Services',
  publisher: 'AMK Safety & Security Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_QA',
    url: 'https://amk.qa',
    siteName: 'AMK Safety & Security Services',
    title: 'AMK Safety & Security - Fire Protection Solutions in Doha, Qatar',
    description: 'Leading fire protection and safety solutions provider in Doha, Qatar. Authorized dealer for Honeywell, Simplex, Siemens fire alarm and suppression systems.',
    images: [
      {
        url: '/Logo_amk.png',
        width: 1200,
        height: 630,
        alt: 'AMK Safety & Security Services Qatar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMK Safety & Security - Fire Protection Solutions in Qatar',
    description: 'Leading fire protection and safety solutions provider in Doha, Qatar.',
    images: ['/Logo_amk.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://amk.qa',
  },
  verification: {
    google: 'G-W42E2Y40LC',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://amk.qa",
              "name": "AMK Safety & Security Services",
              "image": "https://amk.qa/Logo_amk.png",
              "logo": "https://amk.qa/Logo_amk.png",
              "url": "https://amk.qa",
              "telephone": "+974-7043-4631",
              "email": "info@amk.qa",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Building Number 17, Zone 51 Street 620, Maan Bin Addi St",
                "addressLocality": "Doha",
                "addressRegion": "Doha",
                "postalCode": "2213",
                "addressCountry": "QA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2854,
                "longitude": 51.5310
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Doha"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "Qatar"
              },
              "sameAs": [
                "https://www.facebook.com/amksafety",
                "https://www.linkedin.com/company/amk-safety"
              ],
              "description": "Leading fire protection and safety solutions provider in Doha, Qatar. Authorized dealer for Honeywell, Simplex, Siemens, Tyco, Notifier fire alarm systems and fire suppression systems.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fire Protection Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fire Alarm System Installation",
                      "description": "Professional fire alarm system installation and maintenance in Qatar"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fire Suppression System",
                      "description": "Advanced fire suppression system installation for commercial and industrial facilities"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fire Fighting Equipment",
                      "description": "Supply and installation of fire fighting equipment and safety systems"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AMK Safety & Security Services",
              "url": "https://amk.qa",
              "logo": "https://amk.qa/Logo_amk.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+974-7043-4631",
                "contactType": "customer service",
                "areaServed": "QA",
                "availableLanguage": ["English", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Building Number 17, Zone 51 Street 620, Maan Bin Addi St",
                "addressLocality": "Doha",
                "addressCountry": "QA"
              }
            })
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="flex-1 page-enter">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
