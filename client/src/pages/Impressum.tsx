import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#BF953F]/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[#BF953F]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-[#AA771C]/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 container max-w-3xl mx-auto py-8 px-4">
        <Button variant="ghost" className="mb-6 text-white hover:text-[#BF953F]" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
          </Link>
        </Button>

        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-heading font-bold text-white mb-8">Impressum</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                Online Network Vision S.L.<br />
                Vertreten durch: Mathias Vinzing<br />
                Santanyi, Spanien
              </p>
              <p className="text-sm italic mt-2">
                Diese Website wird von selbständigen LR-Partnern betrieben und ist keine offizielle Seite der LR Health & Beauty SE & Co. KG.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Kontakt</h2>
              <p>
                E-Mail: info@lr-lifestyle.info<br />
                Telefon: +49 171 5060008
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Mathias Vinzing<br />
                Santanyi, Spanien
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Einkommenshinweis</h2>
              <p>
                Die auf dieser Webseite genannten Einkommensbeispiele und Verdienstmöglichkeiten stellen keine Garantie oder Versprechen für zukünftige Einkommen dar. Jeder Erfolg im Network Marketing hängt von individuellen Faktoren wie persönlichem Einsatz, Engagement, Marktbedingungen und den aktuellen Vergütungsplänen von LR Health & Beauty ab. Es besteht keine Garantie, dass Sie ähnliche Ergebnisse erzielen werden.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
