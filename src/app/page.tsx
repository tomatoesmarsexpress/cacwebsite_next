import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const sections = [
    {
      href: "/videos",
      image: "/images/videos.png",
      alt: "Videos",
    },
    {
      href: "/shows",
      image: "/images/shows.png",
      alt: "Shows",
    },
    {
      href: "/das-team",
      image: "/images/team.png",
      alt: "Das Team",
    },
  ];

  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 overflow-hidden p-4 sm:p-8 lg:p-10">
      <Image
        src="/images/fly.png"
        alt="Fly"
        width={260}
        height={260}
        priority
        className="pointer-events-none absolute bottom-1 -right-3 z-20 hidden h-auto w-16 object-contain md:block lg:w-32"
      />

      <Image
        src="/images/character.png"
        alt="Character"
        width={680}
        height={680}
        priority
        className="pointer-events-none absolute left-1 top-[22%] z-20 hidden h-auto w-36 object-contain md:block lg:w-72"
      />

      <section className="flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Band Logo"
          width={800}
          height={300}
          priority
          sizes="(max-width: 640px) 100%, (max-width: 1024px) 90%, 800px"
          className="h-auto w-auto max-w-full sm:max-w-2xl object-contain"
        />
      </section>

      <section className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="inline-block transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="w-full aspect-square flex items-center justify-center">
              <Image
                src={section.image}
                alt={section.alt}
                width={900}
                height={900}
                className="h-auto w-auto max-w-full object-contain"
              />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
