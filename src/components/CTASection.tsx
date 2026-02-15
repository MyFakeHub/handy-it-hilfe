import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-4">
          Brauchen Sie Hilfe mit Ihrer Technik?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Rufen Sie uns einfach an – wir beraten Sie kostenlos und kommen dann zu Ihnen nach Hause.
        </p>
        <Button variant="cta" size="xl" asChild>
          <a href="tel:+4915112345678">
            <Phone className="w-6 h-6" />
            Jetzt kostenlos anrufen
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
