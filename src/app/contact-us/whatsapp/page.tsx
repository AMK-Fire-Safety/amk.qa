'use client';

import { MessageCircle, CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import Script from "next/script";

export default function WhatsAppLandingPage() {
  // WhatsApp business number
  const whatsappNumber = "97470434631"; // Format: country code + number (no + or spaces)
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in AMK Safety & Security Services. I'd like to learn more about your fire protection solutions.");
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Track page view
  useEffect(() => {
    // Track landing page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', { 
        page_title: 'WhatsApp Landing Page',
        page_location: window.location.href,
        page_path: '/contact-us/whatsapp'
      });
    }
  }, []);

  const handleWhatsAppClick = () => {
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'WhatsApp Landing Page Conversion',
        value: 1
      });
      
      // Track as conversion
      window.gtag('event', 'conversion', {
        send_to: 'G-W42E2Y40LC',
        event_callback: () => {
          window.open(whatsappLink, '_blank');
        }
      });
    } else {
      window.open(whatsappLink, '_blank');
    }
  };

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-W42E2Y40LC"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W42E2Y40LC');
          `,
        }}
      />
      
      <div className="bg-gradient-to-b from-background to-primary/5 min-h-screen">
      <div className="container py-12 md:py-20 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
            <MessageCircle className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">
            Get Instant Fire Safety Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with our fire protection experts on WhatsApp and get immediate assistance with your safety needs
          </p>

          {/* Main CTA Button */}
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animate-delay-100"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Chat on WhatsApp Now
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            ⚡ Average response time: Under 5 minutes
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center animate-fade-in-up animate-delay-200 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500/10 rounded-full mb-4">
              <Clock className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Response</h3>
            <p className="text-sm text-muted-foreground">
              Get quick answers from our fire safety experts
            </p>
          </Card>

          <Card className="p-6 text-center animate-fade-in-up animate-delay-300 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
            <p className="text-sm text-muted-foreground">
              Professional advice on fire alarm & suppression systems
            </p>
          </Card>

          <Card className="p-6 text-center animate-fade-in-up animate-delay-400 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
              <CheckCircle className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
            <p className="text-sm text-muted-foreground">
              No obligation quote for your safety requirements
            </p>
          </Card>
        </div>

        {/* What You Can Ask Section */}
        <Card className="p-8 md:p-10 mb-12 animate-fade-in-up animate-delay-500 bg-card/50 backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            How We Can Help You Today
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Fire Alarm System Installation',
              'Fire Suppression Systems',
              'Emergency Service & Repairs',
              'System Maintenance & Inspection',
              'Product Recommendations',
              'Custom Safety Solutions',
              'Compliance & Certification',
              'Price Quotes & Packages'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Trust Indicators */}
        <div className="text-center mb-12 animate-fade-in-up animate-delay-600">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted partner for fire protection solutions in Qatar
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="px-4 py-2 bg-primary/10 rounded-full">Honeywell Authorized</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Simplex Partner</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">24/7 Support</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Licensed & Certified</span>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="text-center animate-fade-in-up animate-delay-700">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Secure Your Property?
            </h3>
            <p className="text-green-50 mb-6 text-lg">
              Start a conversation with our team right now
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              variant="secondary"
              className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Open WhatsApp Chat
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            Prefer a call?
            {' '} call us at{' '}
            <a href="tel:+97470434631" className="text-primary hover:underline">
              +974 7043 4631
            </a>
          </p>
          <p className="text-xs mt-4">
            AMK Safety & Security Services - Your trusted fire protection partner in Qatar
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
