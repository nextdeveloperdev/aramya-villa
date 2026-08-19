import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";

const C = {
  section: "section-y bg-shell",
  grid: "container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20",
  left: "lg:col-span-5",
  frame: "relative aspect-[4/5] overflow-hidden rounded-sm",
  inset: "absolute -bottom-10 -right-6 hidden aspect-square w-40 overflow-hidden rounded-sm border-4 border-shell md:block lg:w-48",
  right: "lg:col-span-6 lg:col-start-7",
  title: "mt-4 text-4xl leading-[1.1] md:text-5xl",
  body: "mt-6 space-y-5 text-base leading-relaxed text-ink-muted md:text-lg",
  stats: "mt-10 grid grid-cols-3 gap-6 border-t border-sand-300 pt-8",
  num: "font-display text-3xl text-palm-900 md:text-4xl",
  label: "mt-1 text-xs tracking-[0.14em] text-ink-muted uppercase",
};

const stats = [
  { num: "6", label: "Suites" },
  { num: "14 m", label: "To the sea" },
  { num: "2011", label: "Opened" },
];

export default function About() {
  return (
    <section id="about" className={C.section}>
      <div className={C.grid}>
        <Reveal className={C.left}>
          <div className="relative">
            <div className={C.frame}>
              <Image
                src={images.about.courtyard.src}
                alt={images.about.courtyard.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className={C.inset}>
              <Image
                src={images.about.detail.src}
                alt={images.about.detail.alt}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className={C.right}>
          <p className="eyebrow">The villa</p>
          <h2 className={C.title}>
            A house on the rocks, run like a home
          </h2>
          <div className={C.body}>
            <p>
              Aramya was a family holiday house before it was anything else.
              The bones are 1970s coastal Sri Lankan — deep verandas, teak
              posts, a courtyard cut through the middle to pull the sea breeze
              inland. We kept all of it and added six bedrooms.
            </p>
            <p>
              What that means in practice is that the place runs small. Nilanthi
              cooks breakfast to order rather than laying out a buffet. There is
              no reception desk. If you want dinner you tell someone by four in
              the afternoon and it appears at seven.
            </p>
          </div>

          <dl className={C.stats}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className={C.num}>{s.num}</dd>
                <p className={C.label}>{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}