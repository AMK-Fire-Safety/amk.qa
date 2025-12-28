'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const productInfo = [
  {
    title: "FINDER FF-XT FIRE CONTROL PANEL",
    description: "Finder FF-XT Fire Control Panel – Designed for FM-200 and aerosol systems, ensuring precise fire system control."
  },
  {
    title: "FINDER 500 SERIES",
    description: "Finder 500 Series Addressable Fire Alarm Systems – Intelligent fire alarm solutions for accurate detection and quick response."
  },
  {
    title: "DEFENDER DA SERIES AEROSOL SYSTEMS",
    description: "Defender DA Series Aerosol Fire Fighting Systems – Advanced, compact, and eco-friendly fire suppression technology."
  },
  {
    title: "KITCHEN HOOD FIRE SUPPRESSION SYSTEM",
    description: "A kitchen fire suppression system is a specialized type of fire suppression system designed to extinguish fires in commercial kitchens. These systems typically use a combination of wet chemicals and/or dry agents to quickly suppress fires and prevent reignition."
  }
];

export default function ProductsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background">
      {/* Hero Image */}
      <section className="w-full py-3 md:py-6">
        <div className="container px-2 md:px-4">
          <div className="relative h-[35vh] md:h-[50vh] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 animate-fade-in">
            <Image
              src="/producs_amk.jpg"
              alt="AMK Safety and Security Products"
              fill
              className="object-cover md:object-contain hover-scale transition-smooth"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-24 bg-[#f5f5f5]">
        <div className="container">
          {/* Intro Text */}
          <div className="text-center mb-12 px-4 animate-fade-in-down">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-6xl mx-auto">
              At AMK Safety and Security Services, we provide a <span className="font-semibold text-foreground">comprehensive range of fire protection and safety products</span> designed to meet the highest industry standards. As an <span className="font-semibold text-foreground">authorised distributor</span>, we offer top-tier fire safety solutions from globally recognised brands, ensuring <span className="font-semibold text-foreground">reliable, efficient, and compliant</span> fire detection and prevention systems for various applications.
            </p>
          </div>

          {/* Logo Carousel with Side Text */}
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
            {/* Left Text */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-foreground mb-2">{productInfo[0].title}</h3>
                <p className="text-sm text-muted-foreground italic">{productInfo[0].description}</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">{productInfo[1].title}</h3>
                <p className="text-sm text-muted-foreground italic">{productInfo[1].description}</p>
              </div>
            </div>

            {/* Center - Scrolling Logos */}
            <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 min-h-[400px]">
              <div className="relative w-full h-64">
                <Image
                  src={`/logo_scroll${currentIndex + 1}.jpg`}
                  alt={`Product Logo ${currentIndex + 1}`}
                  fill
                  className="object-contain transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-foreground mb-2">{productInfo[2].title}</h3>
                <p className="text-sm text-muted-foreground italic">{productInfo[2].description}</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">{productInfo[3].title}</h3>
                <p className="text-sm text-muted-foreground italic">{productInfo[3].description}</p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`View logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="w-full py-6">
        <div className="container">
          <Carousel
            setApi={setCarouselApi}
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {[1, 2, 3, 4].map((num, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[50vh] rounded-3xl overflow-hidden bg-gray-100">
                    <Image
                      src={`/c_${num}.jpg`}
                      alt={`Carousel Image ${num}`}
                      fill
                      className="object-contain"
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

      {/* Brands Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Brands we provide</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[3, 7, 1, 10, 5, 11, 2, 8, 4, 12, 6, 9].map((num) => (
              <div key={num} className="flex items-center justify-center p-10 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
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
    </div>
  );
}
