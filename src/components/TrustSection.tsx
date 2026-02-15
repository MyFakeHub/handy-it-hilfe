import { CheckCircle2 } from "lucide-react";

const points = [
  "Persönlicher Service bei Ihnen zu Hause",
  "Einfache Erklärungen, keine Fachsprache",
  "Faire Preise, keine versteckten Kosten",
  "Deutschlandweit verfügbar (inkl. Anfahrt)",
  "Geduldig und freundlich – garantiert",
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background" id="ueber-uns">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading text-foreground">
          Warum uns vertrauen?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
          Wir wissen, dass Technik manchmal frustrierend sein kann. Deshalb machen wir es Ihnen so einfach wie möglich.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-4 p-4">
              <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-lg text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
