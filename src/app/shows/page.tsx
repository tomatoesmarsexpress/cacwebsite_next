import Image from "next/image";
import Link from "next/link";

export default function ShowsPage() {
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
          src="/images/shows.png"
          alt="Shows"
          width={900}
          height={280}
          priority
          className="h-auto w-auto max-w-full sm:max-w-2xl object-contain"
        />
      </section>

      <section className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
        <p className="max-w-xl text-xl font-semibold sm:text-3xl">
          Seid gespannt auf updates! Hier wird noch einiges kommen.
        </p>
      </section>
    </main>
  );
}
