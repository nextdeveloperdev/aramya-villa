import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { experiences } from "@/lib/content";

const C = {
  section: "section-y bg-shell",
  head: "container-x",
  list: "container-x mt-16 space-y-16 md:space-y-24",
  row: "grid items-center gap-8 md:grid-cols-12 md:gap-14",
  frame: "relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-7",
  copy: "md:col-span-5",
  flip: "md:col-start-6",
  flipCopy: "md:col-start-1 md:row-start-1",
  title: "mt-3 font-display text-3xl leading-tight text-ink md:text-4xl",
  blurb: "mt-4 text-base leading-relaxed text-ink-muted",
  meta: "mt-6 flex gap-x-6 border-t border-sand-300 pt-4 text-xs tracking-[0.14em] text-ink-muted uppercase",
};

export default function Experiences() {
  return (
    <section id="experiences" className={C.section}>
      <div className={C.head}>
        <SectionHead
          eyebrow="Beyond the villa"
          title="Four things worth leaving the pool for"
          lead="We do not sell a tour desk of forty options. These are the four we do ourselves, with people we have worked with for years."
        />
      </div>

      <div className={C.list}>
        {experiences.map((exp, i) => {
          const flipped = i % 2 === 1;
          return (
            <Reveal key={exp.title}>
              <article className={C.row}>
                <div className={`${C.frame} ${flipped ? C.flip : ""}`}>
                  <Image
                    src={exp.image.src}
                    alt={exp.image.alt}
                    fill
                    sizes="(min-width: 768px) 55vw, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className={`${C.copy} ${flipped ? C.flipCopy : ""}`}>
                  <p className="eyebrow">0{i + 1}</p>
                  <h3 className={C.title}>{exp.title}</h3>
                  <p className={C.blurb}>{exp.blurb}</p>
                  <ul className={C.meta}>
                    <li>{exp.duration}</li>
                    <li>{exp.from}</li>
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}