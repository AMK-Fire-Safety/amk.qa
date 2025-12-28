import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AMK Safety & Security Services - Fire Protection Solutions Qatar',
    short_name: 'AMK Safety',
    description: 'Leading fire protection and safety solutions provider in Doha, Qatar. Authorized dealer for Honeywell, Simplex, Siemens fire alarm and suppression systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F26A2E',
    icons: [
      {
        src: '/Logo_amk.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
