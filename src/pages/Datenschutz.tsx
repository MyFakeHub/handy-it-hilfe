import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 max-w-4xl py-20">
        <h1 className="text-4xl font-bold font-heading mb-8">Datenschutzerklärung</h1>

        <section className="space-y-6 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie unsere Website oma-opa-online.de besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber
              Oma-Opa Online. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h3 className="text-xl font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
              Hierbei kann es sich z.B. um Daten handeln, die Sie per E-Mail oder Telefon
              an uns übermitteln.
            </p>

            <h3 className="text-xl font-semibold mb-2">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
              zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden,
              wenn Sie dem zugestimmt haben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Kontaktaufnahme</h2>
            <p className="mb-4">
              Wenn Sie uns per E-Mail (hilfe@oma-opa-online.de) oder Telefon kontaktieren,
              werden die von Ihnen mitgeteilten Daten (E-Mail-Adresse, Name, Telefonnummer)
              von uns gespeichert, um Ihre Anfrage zu bearbeiten.
            </p>
            <p>
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer
              Erhebung nicht mehr erforderlich sind. Dies ist in der Regel nach vollständiger
              Bearbeitung Ihrer Anfrage der Fall.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung.
            </p>
            <p>
              Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
              zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum
              angegebenen Adresse an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Hosting</h2>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert. Das Hosting erfolgt zum
              Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden und
              im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres
              Online-Angebots durch einen professionellen Anbieter.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
