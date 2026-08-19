"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks, site } from "@/lib/site";

const C = {
  header: "fixed inset-x-0 top-0 z-50 transition-all duration-500",
  solid: "border-b border-sand-200 bg-shell/90 text-ink backdrop-blur-md",
  clear: "border-b border-transparent bg-transparent text-shell",
  bar: "container-x flex h-20 items-center justify-between md:h-24",
  nav: "relative text-sm tracking-wide transition-opacity hover:opacity-70",
  cta: "rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-colors",
  ctaSolid: "bg-palm-900 text-shell hover:bg-palm-800",
  ctaClear: "bg-shell text-palm-900 hover:bg-sand-200",
  phone: "hidden text-sm tracking-wide transition-opacity hover:opacity-70 xl:block",
  drawer: "overflow-hidden border-t border-sand-200 bg-shell lg:hidden",
  dLink: "block border-b border-sand-100 py-4 font-display text-2xl text-ink",
  dCta: "block rounded-full bg-palm-900 py-3.5 text-center text-sm font-medium text-shell",
};

const anim = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const headerClass = C.header + " " + (solid ? C.solid : C.clear);
  const ctaClass = "hidden sm:inline-block " + C.cta + " " + (solid ? C.ctaSolid : C.ctaClear);
  const phoneClass = C.phone + " " + (solid ? "text-ink-muted" : "text-shell/80");
  const tel = "tel:" + site.phoneHref;

  return (
    <header className={headerClass}>
      <div className={C.bar}>
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={C.nav}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={tel} className={phoneClass}>
            {site.phone}
          </a>
          <Link href="/#contact" className={ctaClass}>
            Book a Stay
          </Link>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} className="-mr-2 p-2 lg:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-nav" aria-label="Mobile" className={C.drawer} {...anim}>
            <ul className="container-x flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setOpen(false)} className={C.dLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-6 pb-2">
                <Link href="/#contact" onClick={() => setOpen(false)} className={C.dCta}>
                  Book a Stay
                </Link>
              </li>
              <li className="pb-4 text-center">
                <a href={tel} className="text-sm text-ink-muted">
                  {site.phone}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}