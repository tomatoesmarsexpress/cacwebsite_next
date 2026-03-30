import Image from "next/image";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="relative mx-auto w-full max-w-4xl px-4 pb-16 pt-24 sm:px-8">
      <Link
        href="/"
        className="absolute left-6 top-6 text-slate-700 text-4xl font-black leading-none transition-colors hover:text-slate-900"
        aria-label="Zurueck zur Startseite"
      >
        ←
      </Link>

      <section className="mb-8 flex justify-center">
        <Link href="/" aria-label="Zur Startseite">
          <Image
            src="/images/logo.png"
            alt="Band Logo"
            width={900}
            height={320}
            priority
            className="h-auto w-auto max-w-[16rem] object-contain sm:max-w-[18rem]"
          />
        </Link>
      </section>

      <h1 className="mb-6 text-4xl font-black uppercase tracking-[0.08em] sm:text-6xl">
        Impressum
      </h1>

      <section className="space-y-8 text-sm sm:text-base leading-relaxed text-black^">
        {/* Gesetzliche Angaben */}
        <div>
          <h2 className="mb-2 text-xl font-bold text-black uppercase tracking-wider">
            Angaben gemäß § 5 TMG
          </h2>
          <div className="space-y-1">
            <p className="font-bold">CACBRATZEN</p>
            <p>für die Website verantworlich:</p>
            <p>Lucien Thomann</p>
            <p>Heidenheimerstraße 27</p>
            <p>85748 Garching</p>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <h2 className="mb-2 text-xl font-bold text-black uppercase tracking-wider">
            Kontakt
          </h2>
          <div className="space-y-1">
            <p>Telefon: +49 15735130299</p>
            <p>E-Mail: cacbusiness444@gmail.com</p>
          </div>
        </div>

        {/* Haftung für Inhalte & Links */}
{/* Haftung für Inhalte & Links */}
  <div className="space-y-4 text-xs text-black">
    <div>
      <h2 className="mb-2 text-xl font-bold text-black uppercase tracking-wider">
        Haftung für Inhalte
      </h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine
        Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder
        Informationen besteht nicht.
      </p>
    </div>
    <div>
      <h2 className="mb-2 text-xl font-bold text-black uppercase tracking-wider">
        Haftung für Links
      </h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
        ist stets der jeweilige Anbieter verantwortlich. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
      </p>
    </div>
  </div>
        </section>
    </main>
  );
}