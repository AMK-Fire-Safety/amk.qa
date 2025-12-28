import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us on WhatsApp | Instant Fire Safety Solutions Qatar',
  description: 'Get instant fire protection advice on WhatsApp. Connect with AMK Safety experts in Doha, Qatar for fire alarm systems, suppression systems, and emergency services. Fast response guaranteed.',
  keywords: ['WhatsApp fire safety Qatar', 'instant fire protection consultation Doha', 'fire safety WhatsApp Qatar', 'emergency fire service contact Qatar'],
  openGraph: {
    title: 'WhatsApp Instant Fire Safety Solutions | AMK Qatar',
    description: 'Chat with our fire protection experts on WhatsApp. Get instant quotes and consultations.',
    url: 'https://amk.qa/contact-us/whatsapp',
  },
  alternates: {
    canonical: 'https://amk.qa/contact-us/whatsapp',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WhatsAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
