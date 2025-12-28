import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fire Protection Projects in Qatar | AMK Safety Portfolio',
  description: 'View our completed fire protection projects across Qatar. Industrial, commercial, and residential fire alarm and suppression system installations in Doha and throughout Qatar.',
  keywords: ['fire protection projects Qatar', 'fire system installation Doha', 'fire alarm projects Qatar', 'commercial fire protection Qatar', 'industrial fire safety Qatar'],
  openGraph: {
    title: 'Fire Protection Projects in Qatar | AMK Safety',
    description: 'Explore our portfolio of successful fire protection projects across Qatar.',
    url: 'https://amk.qa/our-projects',
  },
  alternates: {
    canonical: 'https://amk.qa/our-projects',
  },
};

const projects = [
  {
    name: "Al maha tower- West bay",
    image: "/project_amk1.jpg"
  },
  {
    name: "Gewan Island - Retail Outlets",
    image: "/project_amk2.jpg"
  },
  {
    name: "INTERCOTINENTAL DOHA",
    image: "/project_amk3.jpg"
  },
  {
    name: "ABU SIDRA MALL - RETAIL OUTLETS",
    image: "/project_amk4.jpg"
  },
  {
    name: "Azzco supermarket- LA MAISON HOTEL- BIN MAHMOUD",
    image: "/project_amk5.jpg"
  },
  {
    name: "900 Park - Retail Outlets",
    image: "/project_amk6.jpg"
  },
  {
    name: "Msheireb Downtown Doha - Retail Outlets",
    image: "/project_amk7.jpg"
  },
  {
    name: "MK-1 RESIDENTIAL BUILDING- madina khalifa south",
    image: "/project_amk8.jpg"
  },
  {
    name: "MK -2 RESIDENTIAL BUILDING- madina khalifa south",
    image: "/project_amk9.jpg"
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            A showcase of our successfully completed projects, demonstrating our expertise and commitment to quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`overflow-hidden group shadow-md hover:shadow-xl hover-lift transition-smooth animate-fade-in-up animate-delay-${Math.min((index % 3) * 100 + 100, 500)}`}>
              <div className="relative h-80">
                  <Image src={project.image} alt={project.name} fill className="object-cover hover-scale transition-smooth"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
