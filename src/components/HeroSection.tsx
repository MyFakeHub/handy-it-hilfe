import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/useGeolocation";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const { city, loading } = useGeolocation();

  const locationText = loading
    ? "Wir sind für Sie da – überall in Deutschland"
    : city
    ? `Wir sind für Sie in ${city} da`
    : "Wir sind für Sie da – überall in Deutschland";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent to-accent-hover min-h-[90vh] flex items-center" aria-label="Hauptbereich">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Freundlicher IT-Helfer unterstützt Oma und Opa bei Computer-Problemen zu Hause"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl py-20">
        <div className="max-w-2xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-accent/30">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-base font-semibold text-background">{locationText}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-background mb-6 leading-tight">
            IT-Hilfe für <br />
            <span className="text-accent">Oma & Opa</span>
          </h1>

          <p className="text-xl text-background/85 mb-10 max-w-lg leading-relaxed">
            Wir kommen zu Ihnen nach Hause und helfen bei Computer, Internet, Handy und mehr. Einfach, geduldig und freundlich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Button variant="cta" size="xl" asChild>
              <a href="tel:+4915112345678">
                <Phone className="w-6 h-6" />
                Jetzt anrufen
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/4915112345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                WhatsApp schreiben
              </a>
            </Button>
            <Button variant="ctaOutline" size="xl" className="border-background/40 text-background hover:bg-background hover:text-foreground" asChild>
              <a href="mailto:hilfe@oma-opa-online.de">  {/* ← UPDATED EMAIL */}
                <Mail className="w-6 h-6" />
                E-Mail schreiben
              </a>
            </Button>
          </div>

          <p className="text-background/60 mt-6 text-base">
            ✓ Kostenlose Erstberatung &nbsp; ✓ Faire Preise &nbsp; ✓ Inkl. Anfahrt
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
