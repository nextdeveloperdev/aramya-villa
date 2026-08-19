"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { images } from "@/lib/images";

const C = {
  section: "section-y bg-shell",
  head: "container-x",
  grid: "container-x mt-14 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4",
  tile: "group relative aspect-square overflow-hidden rounded-sm bg-sand-200",
  tall: "row-span-2 aspect-[3/4] lg:aspect-[3/4]",
  img: "object-cover transition-transform duration-700 group-hover:scale-[1.05]",
  overlay: "fixed inset-0 z-[90] flex items-center justify-center bg-palm-950/95 p-4 backdrop-blur-sm",
  stage: "relative h-[80vh] w-full max-w-5xl",
  btn: "absolute z-10 rounded-full bg-shell/12 p-3 text-shell transition-colors hover:bg-shell/25",
  caption: "absolute inset-x-0 -bottom-9 text-center text-xs tracking-wide text-palm-100",
};

const tiles = images.gallery;

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? null : (i + dir + tiles.length) % tiles.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const active = open === null ? null : tiles[open];

  return (
    <section id="gallery" className={C.section}>
      <div className={C.head}>
        <SectionHead
          eyebrow="The house"
          title="A few corners worth showing"
          lead="Photographed over one week in February, unstyled and unedited beyond colour."
        />
      </div>

      <div className={C.grid}>
        {tiles.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 0.06}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open image: ${img.alt}`}
              className={`${C.tile} w-full ${i === 1 ? C.tall : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 24vw, 48vw"
                className={C.img}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className={C.overlay}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className={`${C.btn} top-5 right-5`}
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className={`${C.btn} left-4 md:left-8`}
          >
            <ChevronLeft size={22} />
          </button>

          <div className={C.stage} onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <p className={C.caption}>
              {active.alt} · {open! + 1} of {tiles.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className={`${C.btn} right-4 md:right-8`}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}