"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

const epkPhotos = [
  { src: "/images/fynnimage.png", alt: "EPK Foto 1" },
  { src: "/images/xbarbild.png", alt: "EPK Foto 2" },
  { src: "/images/jakesax.png", alt: "EPK Foto 3" },
  { src: "/images/gruppenbild.png", alt: "EPK Foto 4" },
];

const musicVideos = [
  // TODO: Ersetze diese YouTube-Links durch eure Musik-Videos.
  { src: "https://www.youtube.com/embed/uPR02K2Q7Us", title: "Curves" },
  { src: "https://www.youtube.com/embed/E9c_FGkbVc0", title: "KTP" },
  { src: "https://www.youtube.com/embed/asJbd2Nx6Nk", title: "Winter Demo" },
];

export default function EpkPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "sent"
  >("idle");

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  function scrollPhotos(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;

    const amount = Math.max(240, el.clientWidth * 0.75);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  const initialForm = useMemo(
    () => ({
      name: "",
      email: "",
      message: "",
    }),
    [],
  );
  const [form, setForm] = useState(initialForm);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (formStatus !== "idle") return;

    // Aktuell ohne Backend: nur lokale Bestätigung.
    setFormStatus("submitting");
    await new Promise((r) => setTimeout(r, 600));
    setFormStatus("sent");
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-8">
      <header className="mb-10">
        <div className="flex justify-center">
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
        </div>

        <div className="inline-flex items-center gap-3 rounded border-4 border-black bg-[#f2ead6] px-4 py-3 shadow-[8px_8px_0_#0f0f0f]">
          <span className="text-3xl font-black uppercase tracking-[0.08em]">
            EPK
          </span>
          <span className="text-sm font-semibold sm:text-base">
            Electronic Press Kit
          </span>
        </div>
      </header>

      <section className="space-y-8">
        <div className="rounded-lg border-2 border-black/80 bg-white/60 p-5 shadow-sm">
          <h2 className="text-2xl font-black uppercase tracking-[0.06em] sm:text-3xl">
            Über Uns 
          </h2>
          <p className="mt-3 text-sm leading-relaxed sm:text-base">
              Wir sind die cacbratzen, eine mischung aus Punk, Blues und vielem mehr.
              Gegründet in 2023, haben wir schnell einen einzigartigen Sound entwickelt, mit dem wir schon über 20 Shows spielen konnten. 
              Die größte Bühne die wir bespielen durften war das Strom in München. bla bla TODO diese Bio hier mal richitg zende schreiben
          </p>
        </div>

        <div className="rounded-lg border-2 border-black/80 bg-white/60 p-5">
          <h2 className="text-2xl font-black uppercase tracking-[0.06em] sm:text-3xl">
            Pics
          </h2>
          <div className="relative mt-4">
            <button
              type="button"
              onClick={() => scrollPhotos("left")}
              aria-label="Fotos nach links"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-black/80 bg-white/80 px-3 py-2 text-black shadow-sm hover:bg-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollPhotos("right")}
              aria-label="Fotos nach rechts"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-black/80 bg-white/80 px-3 py-2 text-black shadow-sm hover:bg-white"
            >
              →
            </button>

            <div ref={scrollerRef} className="overflow-x-auto pb-2 pt-1">
              <div className="flex gap-4 pr-10">
                {epkPhotos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="w-[70vw] max-w-[340px] flex-none rounded-lg bg-black/5 p-2 shadow-sm"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="rounded-md object-contain"
                        unoptimized
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-black/80 bg-white/60 p-5">
          <h2 className="text-2xl font-black uppercase tracking-[0.06em] sm:text-3xl">
            Musik Videos
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            {musicVideos.map((v) => (
              <div key={v.src} className="w-full">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 h-full w-full rounded-lg"
                    src={v.src}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="mt-2 text-center text-sm font-semibold">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border-2 border-black/80 bg-white/60 p-5">
          <h2 className="text-2xl font-black uppercase tracking-[0.06em] sm:text-3xl">
            Kontakt
          </h2>

          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-semibold">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded border-2 border-black/60 bg-white/80 px-3 py-2"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold">E-Mail</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded border-2 border-black/60 bg-white/80 px-3 py-2"
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold">Nachricht</span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                className="w-full rounded border-2 border-black/60 bg-white/80 px-3 py-2"
                required
              />
            </label>

            {formStatus === "sent" ? (
              <p className="rounded border-2 border-black/60 bg-white px-3 py-2 text-sm font-semibold">
                Danke! Deine Nachricht ist abgeschickt (Demo).
              </p>
            ) : (
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="inline-flex w-full items-center justify-center rounded bg-black px-4 py-3 text-sm font-black uppercase tracking-[0.06em] text-white transition-opacity disabled:opacity-60 sm:w-auto"
              >
                {formStatus === "submitting" ? "Senden…" : "Nachricht senden"}
              </button>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

