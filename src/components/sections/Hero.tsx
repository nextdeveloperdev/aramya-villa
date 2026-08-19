import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const C = {
  section: "relative flex min-h-[100svh] items-end overflow-hidden bg-palm-950",
  img: "object-cover",
  scrim: "absolute inset-0 bg-gradient-to-t from-palm-950 via-palm-950/45 to-palm-950/60",
  inner: "container-x relative z-10 pb-20 md:pb-28",
  title: "mt-5 max-w-3xl text-5xl leading-[1.03] text-shell md:text-7xl xl:text-8xl",
  lead: "mt-6 max-w-lg text-base leading-relaxed text-palm-100 md:text-lg",
  row: "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
  primary: "rounded-full bg-shell px-8 py-4 text-center text-sm font-medium tracking-wide text-palm-900 transition-colors hover:bg-sand-200",
  ghost: "rounded-full border border-shell/35 px-8 py-4 text-center text-sm font-medium tracking-wide text-shell transition-colors hover:border-shell hover:bg-shell/10",
  meta: "mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-shell/15 pt-6 text-xs tracking-[0.14em] text-palm-100/80 uppercase",
};

const meta = ["Six suites", "Ocean front", "Talpe · Galle"];

export default function Hero() {
  return (
    <section className={C.section}>
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        quality={80}
        className={C.img}
      />
      <div className={C.scrim} />

      <div className={C.inner}>
        <p className="eyebrow text-clay-400">
          {site.address.city} · Sri Lanka
        </p>
        <h1 className={C.title}>{site.tagline}</h1>
        <p className={C.lead}>
          A six-suite villa on the rocks at Talpe, fourteen metres from the
          water. Breakfast cooked to order, a driver who tracks your flight,
          and no one else at the pool.
        </p>

        <div className={C.row}>
          <Link href="/#contact" className={C.primary}>
            Check availability
          </Link>
          <Link href="/#suites" className={C.ghost}>
            View the suites
          </Link>
        </div>

        <ul className={C.meta}>
          {meta.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}