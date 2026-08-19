import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";

const C = {
  section: "section-y bg-palm-900 text-shell",
  grid: "container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16",
  copy: "lg:col-span-5",
  title: "mt-4 text-4xl leading-[1.1] md:text-5xl",
  body: "mt-6 space-y-5 text-base leading-relaxed text-palm-100 md:text-lg",
  list: "mt-9 space-y-4 border-t border-palm-800 pt-8",
  row: "flex items-baseline justify-between gap-6",
  meal: "font-display text-xl",
  when: "text-xs tracking-[0.14em] text-clay-400 uppercase",
  note: "mt-1.5 text-sm leading-relaxed text-palm-100",
  cta: "mt-9 inline-block rounded-full bg-shell px-8 py-4 text-sm font-medium tracking-wide text-palm-900 transition-colors hover:bg-sand-200",
  media: "lg:col-span-6 lg:col-start-7",
  big: "relative aspect-[3/2] overflow-hidden rounded-sm",
  small: "relative mt-6 ml-auto aspect-square w-2/5 overflow-hidden rounded-sm",
};

const meals = [
  {
    meal: "Breakfast",
    when: "7 – 10 am",
    note: "Cooked to order. String hoppers and pol sambol, or eggs however you want them, with whatever fruit came in that morning.",
  },
  {
    meal: "Lunch",
    when: "On request",
    note: "Light and cold, usually eaten by the pool. Salads, grilled fish, and a jug of lime and ginger.",
  },
  {
    meal: "Dinner",
    when: "From 7 pm",
    note: "Three courses at $28 a head, built around the morning's catch. Tell us before four and it appears at seven.",
  },
];

export default function Dining() {
  return (
    <section id="dining" className={C.section}>
      <div className={C.grid}>
        <Reveal className={C.copy}>
          <p className="eyebrow text-clay-400">The kitchen</p>
          <h2 className={C.title}>Nilanthi has run this kitchen since 2011</h2>
          <div className={C.body}>
            <p>
              Fish arrives from the Talpe market before seven each morning.
              Vegetables come from a grower in Ahangama who has been supplying
              the house for a decade. Nothing is frozen and nothing is bought in
              bulk, which is why we ask about dinner in the afternoon rather
              than handing you a printed menu.
            </p>
          </div>

          <dl className={C.list}>
            {meals.map((m) => (
              <div key={m.meal}>
                <div className={C.row}>
                  <dt className={C.meal}>{m.meal}</dt>
                  <span className={C.when}>{m.when}</span>
                </div>
                <dd className={C.note}>{m.note}</dd>
              </div>
            ))}
          </dl>

          <Link href="/#contact" className={C.cta}>
            Ask about dinner
          </Link>
        </Reveal>

        <Reveal delay={0.1} className={C.media}>
          <div className={C.big}>
            <Image
              src={images.dining.table.src}
              alt={images.dining.table.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className={C.small}>
            <Image
              src={images.dining.dish.src}
              alt={images.dining.dish.alt}
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}