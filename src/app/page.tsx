'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const carouselImages = PlaceHolderImages.filter(img => img.id.startsWith('carousel'));
  const serviceImages = PlaceHolderImages.filter(img => img.id.startsWith('service')).slice(0, 4);
  const productImages = PlaceHolderImages.filter(img => img.id.startsWith('product')).slice(0, 4);
  const brandLogos = PlaceHolderImages.filter(img => img.id.startsWith('brand'));

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <>
      <section className="w-full py-3 md:py-6">
        <div className="container px-2 md:px-4">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[40vh] md:h-[50vh] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover md:object-contain"
                      data-ai-hint={image.imageHint}
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
          </Carousel>
        </div>
      </section>

      <section id="services" className="py-12 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl animate-slide-in-left">
              <Image
                src="/Services_thumbnail_amk.jpg"
                alt="AMK Safety and Security Services"
                fill
                className="object-cover hover-scale transition-smooth"
              />
            </div>
            <div className="space-y-6 animate-slide-in-right animate-delay-200">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At AMK Safety and Security Services, we provide top-tier fire protection solutions, including <span className="font-semibold text-foreground">fire suppression systems</span> like sprinklers, hydrants, FM-200, kitchen hood suppression, and deluge systems. Our <span className="font-semibold text-foreground">fire detection services</span> include advanced fire alarm systems and regular maintenance. We also offer <span className="font-semibold text-foreground">specialized services</span> such as fire extinguisher refilling, room integrity testing, and foam conductivity testing. Additionally, we supply <span className="font-semibold text-foreground">fire-rated doors</span> and <span className="font-semibold text-foreground">structured cabling</span> for enhanced safety and security. With our expert solutions, we ensure reliable fire protection for homes, businesses, and industries.
              </p>
              <Button asChild size="lg" className="mt-4 hover-lift transition-smooth">
                <Link href="/services">View Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-12 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1 animate-slide-in-left animate-delay-200">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our products</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At AMK Safety and Security Services, we offer a wide range of high-quality fire protection and safety products to safeguard lives and property. As an authorized distributor, we provide <span className="font-semibold text-foreground">Defender DA Series Aerosol Fire Fighting Systems</span>, <span className="font-semibold text-foreground">Finder 500 Series Addressable Fire Alarm Systems</span>, <span className="font-semibold text-foreground">Finder FF-XT Fire Control Panels</span> for FM200 and aerosol systems, and <span className="font-semibold text-foreground">Viva Kitchen Hood Suppression Systems</span>. Additionally, we supply trusted brands like <span className="font-semibold text-foreground">FireClass, Simplex, Notifier, Tyco, and Honeywell</span>. Our products are designed for reliability, efficiency, and compliance with safety standards, ensuring optimal fire prevention and protection for various applications.
              </p>
              <Button asChild size="lg" className="mt-4 hover-lift transition-smooth">
                <Link href="/products">Our Products <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl order-1 md:order-2 bg-white animate-slide-in-right">
              <Image
                src="/Products_thumbnail_amk.jpg"
                alt="AMK Safety and Security Products"
                fill
                className="object-contain p-2 md:p-4 hover-scale transition-smooth"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="py-12 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Brands we provide</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, idx) => (
              <div key={num} className={`flex items-center justify-center p-10 bg-white rounded-lg hover:shadow-lg hover-lift transition-smooth animate-scale-in animate-delay-${Math.min((idx % 4) * 100 + 100, 500)}`}>
                <div className="relative h-36 w-full">
                  <Image
                    src={`/${num}.jpg`}
                    alt={`Brand ${num}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
