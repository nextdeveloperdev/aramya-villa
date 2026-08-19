"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";

const C = {
  section: "section-y bg-palm-900 text-shell",
  inner: "container-x max-w-4xl text-center",
  quote: "mt-8 font-display text-2xl leading-[1.35] md:text-3xl lg:text-4xl",
  name: "mt-8 text-sm font-medium tracking-wide",
  origin: "mt-1 text-xs tracking-[0.14em] text-clay-400 uppercase",
  stay: "mt-1 text-xs text-palm-100/70",
  nav: "mt-12 flex items-center justify-center gap-5",
  btn: "rounded-full border border-palm-700 p-3 transition-colors hover:border-clay-500 hover:text-clay-400",
  dots: "flex gap-2",
  dot: "h-1.5 w-1.5 rounded-full transition-colors",
};

const anim = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) =>
    setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className={C.section}>
      <div className={C.inner}>
        <p className="eyebrow text-clay-400">Guests</p>

        <div className="min-h-[16rem] md:min-h-[15rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote key={i} {...anim}>
              <p className={C.quote}>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <p className={C.name}>{t.name}</p>
                <p className={C.origin}>{t.origin}</p>
                <p className={C.stay}>{t.stay}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className={C.nav}>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className={C.btn}
          >
            <ChevronLeft size={18} />
          </button>

          <div className={C.dots}>
            {testimonials.map((_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => setI(n)}
                aria-label={`Review ${n + 1}`}
                aria-current={n === i}
                className={`${C.dot} ${n === i ? "bg-clay-500" : "bg-palm-700"}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className={C.btn}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}