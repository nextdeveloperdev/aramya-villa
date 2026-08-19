import Link from "next/link";
import { site } from "@/lib/site";

const MARK = "h-8 w-8 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5";
const WORD = "font-display text-[1.35rem] leading-none tracking-[0.22em] uppercase";

type Props = {
  className?: string;
  markOnly?: boolean;
};

export default function Logo({ className = "", markOnly = false }: Props) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className={MARK}>
        <path
          d="M3.5 29V16a12.5 12.5 0 0 1 25 0v13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10.5 29V16.5a5.5 5.5 0 0 1 11 0V29"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16" cy="15.5" r="2.2" fill="currentColor" />
      </svg>

      {!markOnly && <span className={WORD}>{site.name}</span>}
    </Link>
  );
}