import Image from "next/image";
import Link from "next/link";

export default function DasTeamPage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col p-4 sm:p-8">
      <Link
        href="/"
        className="absolute left-6 top-6 text-slate-700 text-4xl font-black leading-none transition-colors hover:text-slate-900"
        aria-label="Zurueck zur Startseite"
      >
        ←
      </Link>
      <section className="mb-8 flex justify-center">
        <Image
          src="/images/team.png"
          alt="Das Team"
          width={1100}
          height={340}
          priority
          className="h-auto w-auto max-w-full sm:max-w-3xl object-contain"
        />
      </section>
      
      <section className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
        <p className="max-w-xl text-xl font-semibold sm:text-3xl">
          Hier kommen noch die Bilder von Fynns Kamera und so
        </p>
      </section>

      <section className="mb-10 flex justify-center">
        <Image
          src="/images/gruppenbild.png"
          alt="Gruppenbild"
          width={1300}
          height={500}
          priority
          className="h-auto w-auto max-w-full sm:max-w-4xl object-contain"
        />
      </section>

    </main>
  );
}
