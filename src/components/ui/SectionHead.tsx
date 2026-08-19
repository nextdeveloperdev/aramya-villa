import Reveal from "./Reveal";

const C = {
  wrap: "max-w-2xl",
  title: "mt-4 text-4xl leading-[1.1] md:text-5xl",
  lead: "mt-5 text-base leading-relaxed text-ink-muted md:text-lg",
};

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
};

export default function SectionHead({ eyebrow, title, lead, light }: Props) {
  return (
    <Reveal className={C.wrap}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={C.title}>{title}</h2>
      {lead && (
        <p className={light ? C.lead + " text-palm-100" : C.lead}>{lead}</p>
      )}
    </Reveal>
  );
}