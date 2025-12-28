import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Logo } from '@/components/logo';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-background">
      {/* Social Media Bar */}
      <div className="bg-[#3d3d3d] py-6">
        <div className="container">
          <div className="flex justify-center items-center gap-8">
            <Link href="https://www.facebook.com/amkfireqa/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-primary transition-colors">
              <Facebook className="h-7 w-7"/>
            </Link>
            <Link href="https://www.instagram.com/amkfireqa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-primary transition-colors">
              <Instagram className="h-7 w-7"/>
            </Link>
            <Link href="https://www.linkedin.com/company/amkfireqa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-primary transition-colors">
              <Linkedin className="h-7 w-7"/>
            </Link>
            <Link href="https://www.tiktok.com/@amkfireqa" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-primary transition-colors">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </Link>
            <Link href="https://g.page/r/CbxLzGQYFBNXEBM/review" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className="text-white hover:text-primary transition-colors">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#f5f5f5] py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo Section */}
            <div className="flex flex-col gap-6">
              <Logo />
            </div>

            {/* Navigation Links */}
            <div>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={link.label === 'Home' ? 'text-primary font-medium hover:text-primary/80 transition-colors' : 'text-muted-foreground hover:text-primary transition-colors'}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us Section */}
            <div>
              <h3 className="font-bold mb-4 text-foreground text-lg">About Us</h3>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  The development of new, cutting-edge technology in the fire protection sector is at its height, and AMK SAFETY & SECURITY SERVICES makes it a point to stay current with these developments.
                </p>
                <p>
                  The development of new, cutting-edge technology in the fire protection sector is at its height, and AMK SAFETY & SECURITY SERVICES makes it a point to stay current with these developments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#3d3d3d] py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm">
            <p>Copyright © 2025 AMK Safety & Security Services</p>
            <p>
              Powered by{' '}
              <Link href="https://www.siyadmohmd.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                siyadmohmd.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
