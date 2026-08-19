import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { navLinks, site } from "@/lib/site";

const C = {
  heading: "font-sans text-xs font-medium tracking-[0.18em] text-clay-400 uppercase",
  link: "text-sm text-palm-100 transition-colors hover:text-clay-400",
  social: "text-sm text-palm-200 underline-offset-4 transition-colors hover:text-clay-400",
  bottom: "mt-14 flex flex-col gap-3 border-t border-palm-800 pt-8 text-xs text-palm-200 sm:flex-row sm:items-center sm:justify-between",
};

export default function Footer() {
  const year = new Date().getFullYear();
  const tel = "tel:" + site.phoneHref;
  const mail = "mailto:" + site.email;

  return (
    <footer className="bg-palm-950 text-shell">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo className="text-shell" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-palm-200">{site.description}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className={C.heading}>Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={C.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#contact" className={C.link}>
                  Enquire
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className={C.heading}>Visit</h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-palm-100">
              <p className="leading-relaxed">
                {site.address.street}
                <br />
                {site.address.city} {site.address.postalCode}
                <br />
                {site.address.country}
              </p>
              <p>
                <a href={tel} className={C.link}>
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={mail} className={C.link}>
                  {site.email}
                </a>
              </p>
            </address>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={C.social}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={C.bottom}>
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p className="text-palm-200/70">A fictional property created for a web development assessment.</p>
        </div>
      </div>
    </footer>
  );
}