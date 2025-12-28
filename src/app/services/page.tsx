import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Fire Fighting System supply and installation",
    description: "We provide comprehensive fire fighting system, including installation, and maintenance. Our fire fighting systems are designed to efficiently combat different types of fires.",
    image: "/services_amk1.jpg"
  },
  {
    title: "Fire Suppression Systems",
    description: "We design, install, and maintain advanced fire suppression systems, including FM-200, sprinkler systems, deluge systems, and kitchen hood suppression systems. Our solutions are tailored to your building's unique requirements to ensure optimal fire protection.",
    image: "/services_amk2.jpg"
  },
  {
    title: "Risk Assessment & Consultation",
    description: "Our experts conduct thorough risk assessments and offer consultation services to identify potential fire hazards and recommend the best fire protection strategies for your premises. We ensure that all solutions meet safety codes and regulations.",
    image: "/services_amk3.jpg"
  },
  {
    title: "Fire Detection & Alarm Systems",
    description: "We offer fire alarm systems, including addressable and conventional alarms, designed to provide quick and accurate detection of fires. Our maintenance and testing services ensure that your systems are always in top condition and ready to alert when needed.",
    image: "/services_amk4.jpg"
  },
  {
    title: "Annual Maintenance Services",
    description: "We offer annual maintenance packages to ensure that your fire protection systems remain compliant and functional. Our routine inspections and preventive maintenance keep your systems in optimal working order.",
    image: "/services_amk5.jpg"
  },
  {
    title: "24x7 Emergency Technical Support",
    description: "For on-demand needs, AMK provide Emergency technical support for fire protection systems. Our team is available to conduct repairs, tests, and other services as required to keep your property safe.",
    image: "/services_amk6.jpg"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
        {/* Hero Image */}
        <section className="w-full py-3 md:py-6">
          <div className="container px-2 md:px-4">
            <div className="relative h-[35vh] md:h-[50vh] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 animate-fade-in">
              <Image
                src="/c_3.jpg"
                alt="AMK Safety and Security Services"
                fill
                className="object-cover md:object-contain hover-scale transition-smooth"
                priority
              />
            </div>
          </div>
        </section>

        <div className="container py-12 md:py-24">
        <div className="text-center mb-16 animate-fade-in-down">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Key Services</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            We provide a comprehensive range of professional fire protection services. Our commitment is to ensure the safety and security of your assets, people, and property.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
            <Card key={index} className={`overflow-hidden group shadow-md hover:shadow-xl hover-lift transition-smooth animate-fade-in-up animate-delay-${Math.min((index % 3) * 100 + 100, 500)}`}>
                <CardHeader className="p-0">
                <div className="relative h-60">
                    <Image src={service.image} alt={service.title} fill className="object-cover hover-scale transition-smooth" />
                </div>
                </CardHeader>
                <CardContent className="p-6">
                <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                <CardDescription className="mt-2 leading-relaxed">
                    {service.description}
                </CardDescription>
                <Button asChild variant="secondary" className="mt-4 w-full hover-lift transition-smooth">
                    <Link href="/contact-us">Get a Quote</Link>
                </Button>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </div>
  );
}
