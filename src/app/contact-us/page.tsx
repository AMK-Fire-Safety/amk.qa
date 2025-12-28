import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactUsPage() {

  return (
    <div className="bg-background">
        <div className="container py-12 md:py-24">
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get in Touch</h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            At AMK Safety and Security Services, we are committed to providing top-quality fire protection solutions tailored to your needs. Whether you require expert advice, product inquiries, or service support, our team is ready to assist you. Contact us today to learn more about our <span className="font-semibold text-foreground">fire alarm system, fire fighting system, fire suppression system</span> and related safety products from leading brands like <span className="font-semibold text-foreground">Honeywell, Simplex, Siemens, Tyco, Defender, Finder, Viva, FireClass and Notifier</span>. Your safety is our priority—reach out to us for reliable fire protection solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4 animate-fade-in-up animate-delay-100">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">ADDRESS:</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AMK Safety & Security Services, PB No: 2213, Buiding Number 17, Zone 51 Street 620, Maan Bin Addi St, Doha
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 animate-fade-in-up animate-delay-200">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">EMAIL:</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="mailto:info@amk.qa" className="hover:text-primary transition-smooth">info@amk.qa</a><br />
                  <a href="mailto:sales@amk.qa" className="hover:text-primary transition-smooth">sales@amk.qa</a>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 animate-fade-in-up animate-delay-300">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">PHONE:</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:+97433141155" className="hover:text-primary transition-smooth">+974 - 3314 1155</a><br />
                  <a href="tel:+97430001739" className="hover:text-primary transition-smooth">+974 - 3000 1739</a><br />
                  <a href="tel:+97430034148" className="hover:text-primary transition-smooth">+974 - 3003 4148</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[500px] md:h-[700px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0925395387726!2d51.4406708762193!3d25.334675577622765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db46d02661bb%3A0x5713141864cc4bbc!2sAMK%20Safety%20%26%20Security%20Services!5e0!3m2!1sen!2sqa!4v1763465131200!5m2!1sen!2sqa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AMK Safety & Security Services Location"
            />
          </div>
        </div>

        {/* Why Choose AMK Section */}
        <div className="max-w-4xl mx-auto mt-16 animate-fade-in-up animate-delay-200">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 text-center">Why Choose AMK?</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                With years of experience in fire protection and safety, we provide comprehensive solutions from installation to maintenance. Our expert team ensures your property is protected with the latest technology and industry standards.
              </p>
              <p>
                We are committed to delivering excellence in fire safety services across Qatar. Our professional team is available 24/7 to address your fire protection needs and ensure your complete safety.
              </p>
              <p>
                Contact us today via phone, email, or visit our office in Doha. We look forward to serving you with the best fire safety solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
