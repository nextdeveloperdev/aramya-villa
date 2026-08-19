import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { suites } from "@/lib/content";

const C = {
  section: "section-y bg-sand-100",
  head: "container-x",
  grid: "container-x mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
  card: "group flex h-full flex-col",
  frame: "relative aspect-[3/2] overflow-hidden rounded-sm bg-sand-200",
  img: "object-cover transition-transform duration-700 group-hover:scale-[1.04]",
  rate: "absolute bottom-3 left-3 rounded-full bg-shell/92 px-3.5 py-1.5 text-xs font-medium tracking-wide text-palm-900 backdrop-blur-sm",
  name: "font-display text-2xl text-ink transition-colors group-hover:text-clay-600",
  tagline: "mt-1 text-sm text-clay-600",
  intro: "mt-3 text-sm leading-relaxed text-ink-muted",
  specs: "mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-wide text-ink-muted",
  cta: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-palm-900",
};

export default function Suites() {
  return (
    <section id="suites" className={C.section}>
      <div className={C.head}>
        <SectionHead
          eyebrow="Rooms"
          title="Six suites, no two the same"
          lead="Every room was a different part of the original house, so they differ in size, outlook and temperature. Here is what each one is actually like."
        />
      </div>

      <div className={C.grid}>
        {suites.map((suite, i) => (
          <Reveal key={suite.slug} delay={(i % 3) * 0.08}>
            <Link href={`/suites/${suite.slug}`} className={C.card}>
              <div className={C.frame}>
                <Image
                  src={suite.image.src}
                  alt={suite.image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className={C.img}
                />
                <span className={C.rate}>from ${suite.rate} / night</span>
              </div>

              <h3 className={`mt-5 ${C.name}`}>{suite.name}</h3>
              <p className={C.tagline}>{suite.tagline}</p>
              <p className={C.intro}>{suite.intro}</p>

              <ul className={C.specs}>
                <li>{suite.size}</li>
                <li>{suite.bed}</li>
                <li>Sleeps {suite.sleeps}</li>
              </ul>

              <span className={C.cta}>
                View suite
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}