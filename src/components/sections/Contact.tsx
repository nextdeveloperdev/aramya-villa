"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { suites } from "@/lib/content";
import { site } from "@/lib/site";

const C = {
  section: "section-y bg-sand-100",
  grid: "container-x grid gap-14 lg:grid-cols-12 lg:gap-16",
  aside: "lg:col-span-4",
  title: "mt-4 text-4xl leading-[1.1] md:text-5xl",
  body: "mt-5 text-base leading-relaxed text-ink-muted",
  block: "mt-9 space-y-6 border-t border-sand-300 pt-8",
  label: "text-xs tracking-[0.14em] text-clay-600 uppercase",
  val: "mt-1.5 block text-base text-ink transition-colors hover:text-clay-600",
  form: "lg:col-span-7 lg:col-start-6",
  row: "grid gap-5 sm:grid-cols-2",
  field: "flex flex-col gap-2",
  lbl: "text-sm font-medium text-ink",
  input: "rounded-sm border border-sand-300 bg-shell px-4 py-3 text-base text-ink transition-colors placeholder:text-ink-muted/50 focus:border-clay-500 focus:outline-none",
  submit: "mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-palm-900 px-9 py-4 text-sm font-medium tracking-wide text-shell transition-colors hover:bg-palm-800 disabled:opacity-60",
  note: "mt-4 text-xs leading-relaxed text-ink-muted",
  ok: "mt-7 flex items-start gap-3 rounded-sm border border-palm-200 bg-palm-50 p-5",
  hp: "absolute -left-[9999px] h-px w-px overflow-hidden",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // await එකට කලින් capture කරනවා
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={C.section}>
      <div className={C.grid}>
        <Reveal className={C.aside}>
          <p className="eyebrow">Enquire</p>
          <h2 className={C.title}>Tell us when, and we will check</h2>
          <p className={C.body}>
            We reply to every enquiry within one working day, usually the same
            morning. If your dates are tight, WhatsApp is faster.
          </p>

          <div className={C.block}>
            <div>
              <p className={C.label}>WhatsApp</p>
              <a href={site.whatsappHref} className={C.val} target="_blank" rel="noopener noreferrer">
                {site.whatsapp}
              </a>
            </div>
            <div>
              <p className={C.label}>Email</p>
              <a href={`mailto:${site.email}`} className={C.val}>
                {site.email}
              </a>
            </div>
            <div>
              <p className={C.label}>Find us</p>
              <p className="mt-1.5 text-base leading-relaxed text-ink">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.country}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className={C.form}>
          {status === "sent" ? (
            <div className={C.ok}>
              <Check size={20} className="mt-0.5 shrink-0 text-palm-700" />
              <div>
                <p className="font-medium text-ink">Enquiry received</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  A confirmation is on its way to your inbox. We will come back
                  with availability and a rate within one working day.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className={C.row}>
                <div className={C.field}>
                  <label htmlFor="name" className={C.lbl}>Name</label>
                  <input id="name" name="name" required autoComplete="name" className={C.input} placeholder="Your full name" />
                </div>
                <div className={C.field}>
                  <label htmlFor="email" className={C.lbl}>Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={C.input} placeholder="you@example.com" />
                </div>
              </div>

              <div className={`${C.row} mt-5`}>
                <div className={C.field}>
                  <label htmlFor="checkIn" className={C.lbl}>Arriving</label>
                  <input id="checkIn" name="checkIn" type="date" className={C.input} />
                </div>
                <div className={C.field}>
                  <label htmlFor="checkOut" className={C.lbl}>Leaving</label>
                  <input id="checkOut" name="checkOut" type="date" className={C.input} />
                </div>
              </div>

              <div className={`${C.row} mt-5`}>
                <div className={C.field}>
                  <label htmlFor="guests" className={C.lbl}>Guests</label>
                  <select id="guests" name="guests" defaultValue="2" className={C.input}>
                    {[1, 2, 3, 4, 6, 8, 12].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </div>
                <div className={C.field}>
                  <label htmlFor="suite" className={C.lbl}>Preferred suite</label>
                  <select id="suite" name="suite" defaultValue="" className={C.input}>
                    <option value="">No preference</option>
                    {suites.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={`${C.field} mt-5`}>
                <label htmlFor="message" className={C.lbl}>Anything we should know</label>
                <textarea id="message" name="message" rows={4} className={C.input} placeholder="Dietary needs, flight times, a special occasion" />
              </div>

              <div className={C.hp} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <button type="submit" disabled={status === "sending"} className={C.submit}>
                {status === "sending" && <Loader2 size={16} className="animate-spin" />}
                {status === "sending" ? "Sending" : "Send enquiry"}
              </button>

              {status === "error" && (
                <p className="mt-4 text-sm text-clay-600">
                  Something went wrong. Please try WhatsApp on {site.whatsapp}.
                </p>
              )}

              <p className={C.note}>
                We only use your details to answer this enquiry. No newsletter,
                no third parties.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}