import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { benefits } from "@/lib/content";

const C = {
  section: "section-y bg-sand-100",
  head: "container-x",
  grid: "container-x mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2",
  num: "font-display text-2xl text-clay-500",
  title: "mt-3 font-display text-2xl leading-snug text-ink",
  body: "mt-3 text-base leading-relaxed text-ink-muted",
  rule: "mt-5 h-px w-12 bg-clay-500",
};

export default function WhyUs() {
  return (
    <section id="why" className={C.section}>
      <div className={C.head}>
        <SectionHead
          eyebrow="Why Aramya"
          title="What actually makes the difference"
          lead="Not a list of amenities. These are the four things guests mention when they write to us afterwards."
        />
      </div>

      <div className={C.grid}>
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={(i % 2) * 0.08}>
            <p className={C.num}>0{i + 1}</p>
            <h3 className={C.title}>{b.title}</h3>
            <div className={C.rule} />
            <p className={C.body}>{b.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}