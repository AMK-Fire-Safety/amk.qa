'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AboutUsPage() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Process embeds if script already loaded
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[src="//www.instagram.com/embed.js"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <div className="bg-background">
      {/* Introduction Section */}
      <div className="container py-12 md:py-24">
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Us.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            At AMK Safety and Security Services, we are committed to providing comprehensive fire protection solutions with cutting-edge technology and industry expertise. As an authorized distributor of leading fire safety brands, we ensure top-quality products and services for various industries.
          </p>
        </div>

        {/* Our Expertise Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-16">
          <div className="relative h-[350px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-gray-100 animate-slide-in-left">
            <Image 
              src="/About_Amk.jpg" 
              alt="AMK Safety and Security Services" 
              fill 
              className="object-cover object-center hover-scale transition-smooth"
            />
          </div>
          <div className="space-y-6 animate-slide-in-right animate-delay-200">
            <h2 className="text-3xl md:text-4xl font-bold font-headline italic text-foreground">Our expertise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong focus on <span className="font-semibold text-foreground">innovation, safety, and compliance</span>, AMK Safety and Security Services is your <span className="font-semibold text-foreground">trusted partner in fire protection</span>. Contact us to secure your property with <span className="font-semibold text-foreground">industry-leading fire safety solutions</span>
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex gap-3 animate-fade-in-up animate-delay-300">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground italic">
                  <span className="font-semibold text-foreground">Authorized Distributor</span> – Supplying Defender, Finder, Viva, and other trusted brands like FireClass, Simplex, Notifier, Tyco, and Honeywell.
                </p>
              </div>
              <div className="flex gap-3 animate-fade-in-up animate-delay-400">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground italic">
                  <span className="font-semibold text-foreground">Customized Fire Safety Solutions</span> – Tailored systems designed to meet building codes and industry-specific requirements.
                </p>
              </div>
              <div className="flex gap-3 animate-fade-in-up animate-delay-500">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground italic">
                  <span className="font-semibold text-foreground">Technical Excellence</span> – A skilled team of professionals ensuring proper installation, maintenance, and compliance.
                </p>
              </div>
              <div className="flex gap-3 animate-fade-in-up animate-delay-500">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground italic">
                  <span className="font-semibold text-foreground">Reliable & Cost-Effective Services</span> – Providing top-tier solutions while maintaining affordability and efficiency.
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="mt-8 hover-lift transition-smooth">
              <Link href="/contact-us">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Chairman's Message Section */}
      <section className="py-12 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 animate-fade-in-down">Chairman's Message</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed animate-fade-in-up animate-delay-100">
              <p>
                Safety is the forefront priority of society and AMK safety and security services are insistent to improve it every day. I take immense pleasure to be a part of it and share with you our mission, vision, and values.
              </p>
              <p>
                We are a team of passionate individuals who set their sights on enhancing the ﬁre protection industry. Our mission is to be a complete and market-leading company as well as an innovative, professional, quality-driven, and fun place to work.
              </p>
              <p>
                To take our mission forward we have been sticking to this goal as we know how crucial it is to have a compliant system to protect people and property from the devastating effects of ﬁre.
              </p>
              <p>
                We assure to provide you with the best possible solution to ﬁre and safety concerns and the services are tailored to meet the needs of our clients.
              </p>
              <p className="text-right font-semibold text-foreground mt-8 text-lg">
                A.MALIK HAJI AM ALABDULMALIK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-down">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Follow Us on Instagram</h2>
            <p className="text-muted-foreground text-lg">Stay updated with our latest projects and fire safety solutions</p>
            <a 
              href="https://www.instagram.com/amkfireqa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-smooth font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @amkfireqa
            </a>
          </div>

          {/* Instagram Feed - Auto-updates with new posts */}
          <div className="max-w-6xl mx-auto animate-fade-in-up animate-delay-200">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/amkfireqa/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px auto',
                maxWidth: '100%',
                minWidth: '326px',
                padding: 0,
                width: 'calc(100% - 2px)'
              }}
            >
              <div style={{ padding: '16px' }}>
                <a 
                  href="https://www.instagram.com/amkfireqa/?utm_source=ig_embed&amp;utm_campaign=loading" 
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%'
                  }} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this profile on Instagram
                </a>
              </div>
            </blockquote>
          </div>

          <div className="text-center mt-8 animate-fade-in-up animate-delay-300">
            <Button asChild size="lg" className="hover-lift transition-smooth">
              <a 
                href="https://www.instagram.com/amkfireqa/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View More on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
