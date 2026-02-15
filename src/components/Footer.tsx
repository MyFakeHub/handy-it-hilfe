import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading text-background">SeniorenTech Hilfe</h3>
            <p className="text-background/70 mt-1">IT-Service für Senioren – deutschlandweit</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="tel:+4915112345678"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              0151 1234 5678
            </a>
            <a
              href="mailto:hilfe@seniorentech.de"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-lg"
            >
              <Mail className="w-5 h-5" />
              hilfe@seniorentech.de
            </a>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-6 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} SeniorenTech Hilfe. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
