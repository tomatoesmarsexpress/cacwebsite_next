import Image from "next/image";
import Link from "next/link";

const videoItems = [
  {
    id: "ktp",
    title: "KTP Demo",
    image: "/images/ktp_frame.png",
    embedUrl: "https://www.youtube.com/embed/E9c_FGkbVc0",
  },
  {
    id: "curves",
    title: "Curves Demo",
    image: "/images/curves_demo_frame.png",
    embedUrl: "https://www.youtube.com/embed/uPR02K2Q7Us",
  },
  {
    id: "winter",
    title: "Winter Demo",
    image: "/images/winter_demo_frame.png",
    embedUrl: "https://www.youtube.com/embed/asJbd2Nx6Nk",
  },
];

export default function VideosPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-6 pb-16 pt-24">
      <Link
        href="/"
        className="absolute left-6 top-6 text-slate-500 transition-colors hover:text-slate-800"
        aria-label="Zurueck zur Startseite"
      >
        ←
      </Link>

      <section className="flex justify-center">
        <Image
          src="/images/videos.png"
          alt="Videos"
          width={900}
          height={280}
          priority
          className="mb-6 h-auto w-full max-w-[12rem] object-contain md:max-w-[15rem]"
        />
      </section>

      <section className="mt-10 w-full max-w-6xl space-y-10">
        {videoItems.map((item) => (
          <details key={item.id} className="group w-full">
            <summary className="list-none cursor-pointer">
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">{item.title}</h2>
                <div className="w-full max-w-4xl group-open:hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Thumbnail`}
                    width={1920}
                    height={1080}
                    unoptimized
                    className="h-auto w-full rounded-lg object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </summary>
            <div className="mt-4">
              <div className="relative mx-auto w-full max-w-4xl pt-[56.25%]">
                <iframe
                  src={item.embedUrl}
                  title={item.title}
                  className="absolute inset-0 h-full w-full rounded-lg"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </details>
        ))}
      </section>
    </main>
  );
}
