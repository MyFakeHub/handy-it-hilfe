import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold font-heading text-foreground">
              Oma-Opa<span className="text-accent">.Online</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("leistungen")}
              className="text-lg text-foreground hover:text-accent transition-colors font-medium"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("ueber-uns")}
              className="text-lg text-foreground hover:text-accent transition-colors font-medium"
            >
              Über uns
            </button>
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+4915112345678">
                <Phone className="w-5 h-5" />
                0151 1234 5678
              </a>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2">
            <div className="flex flex-col gap-4 px-2">
              <button
                onClick={() => scrollToSection("leistungen")}
                className="text-xl text-foreground hover:text-accent transition-colors font-medium text-left py-3"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection("ueber-uns")}
                className="text-xl text-foreground hover:text-accent transition-colors font-medium text-left py-3"
              >
                Über uns
              </button>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <a href="tel:+4915112345678">
                  <Phone className="w-5 h-5 mr-2" />
                  0151 1234 5678 anrufen
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
