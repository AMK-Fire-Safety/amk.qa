import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fire Safety Products Qatar | Honeywell, Simplex, Siemens Fire Alarms',
  description: 'Premium fire safety products in Qatar. Authorized dealer for Honeywell, Simplex, Siemens, Tyco, Notifier, Finder fire alarm systems, control panels, detectors, and fire fighting equipment.',
  keywords: ['Honeywell fire alarm Qatar', 'Simplex fire system Doha', 'Siemens fire alarm Qatar', 'Tyco fire protection Qatar', 'Notifier fire alarm Doha', 'fire safety products Qatar', 'fire control panel Qatar'],
  openGraph: {
    title: 'Fire Safety Products Qatar | AMK Safety',
    description: 'Premium fire safety products from leading brands. Authorized dealer for Honeywell, Simplex, Siemens in Qatar.',
    url: 'https://amk.qa/products',
  },
  alternates: {
    canonical: 'https://amk.qa/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
