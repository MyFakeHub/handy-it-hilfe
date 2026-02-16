import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 max-w-4xl py-20">
        <h1 className="text-4xl font-bold font-heading mb-8">Impressum</h1>

        <section className="space-y-6 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Oma-Opa Online<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Kontakt</h2>
            <p>
              Telefon: +49 (0) 151 1234 5678<br />
              E-Mail: hilfe@oma-opa-online.de<br />
              Website: https://oma-opa-online.de
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Verantwortlich für den Inhalt</h2>
            <p>
              Max Mustermann<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Haftungsausschluss</h2>
            <h3 className="text-xl font-semibold mb-2">Haftung für Inhalte</h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="text-xl font-semibold mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
