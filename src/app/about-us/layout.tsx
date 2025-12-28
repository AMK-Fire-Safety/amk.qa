import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About AMK Safety & Security | Leading Fire Protection Company in Qatar',
  description: 'AMK Safety & Security Services is Qatar\'s trusted fire protection partner. Authorized dealer for Honeywell, Simplex, Siemens. Serving Doha and all of Qatar with professional fire safety solutions since establishment.',
  keywords: ['AMK Safety Qatar', 'fire protection company Doha', 'fire safety company Qatar', 'authorized Honeywell dealer Qatar', 'fire system company Doha'],
  openGraph: {
    title: 'About AMK Safety & Security Qatar',
    description: 'Leading fire protection and safety solutions provider in Doha, Qatar.',
    url: 'https://amk.qa/about-us',
  },
  alternates: {
    canonical: 'https://amk.qa/about-us',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
