import { Monitor, Wifi, ShieldCheck, Smartphone, HelpCircle, Printer } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Computer-Einrichtung",
    desc: "Neuen PC oder Laptop? Wir richten alles für Sie ein – einfach und verständlich.",
  },
  {
    icon: Wifi,
    title: "Internet & WLAN",
    desc: "Wir sorgen dafür, dass Ihr Internet stabil läuft und helfen bei allen Problemen.",
  },
  {
    icon: ShieldCheck,
    title: "Sicherheit & Virenschutz",
    desc: "Schutz vor Viren, Betrug und unerwünschten Programmen – für Ihre Sicherheit.",
  },
  {
    icon: Smartphone,
    title: "Smartphone & Tablet",
    desc: "Hilfe bei der Einrichtung und Nutzung Ihres Handys oder Tablets.",
  },
  {
    icon: Printer,
    title: "Drucker & Geräte",
    desc: "Installation und Einrichtung von Druckern, Scannern und anderen Geräten.",
  },
  {
    icon: HelpCircle,
    title: "Persönliche Schulung",
    desc: "Wir erklären Ihnen geduldig alles, was Sie über Ihre Technik wissen möchten.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-secondary/50" id="leistungen">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading text-foreground">
          Unsere Leistungen
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
          Wir helfen Ihnen bei allen technischen Fragen – persönlich, geduldig und bei Ihnen zu Hause.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
