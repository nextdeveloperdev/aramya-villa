import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { Resend } from "resend";
import { db } from "@/lib/db";
import { inquirySchema } from "@/lib/validation";
import { guestEmail, notifyEmail } from "@/lib/emails";
import { site } from "@/lib/site";

const hits = new Map<string, number[]>();
const LIMIT = 5;
const WINDOW = 10 * 60 * 1000;

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > LIMIT;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const ipHash = createHash("sha256").update(ip).digest("hex").slice(0, 32);

  if (rateLimited(ipHash)) {
    return NextResponse.json(
      { error: "Too many enquiries. Please try again later." },
      { status: 429 }
    );
  }

  const parsed = inquirySchema.safeParse(await req.json().catch(() => ({})));

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

    const { company, checkIn, checkOut, ...d } = parsed.data;

  let inquiry;
  try {
    inquiry = await db.inquiry.create({
      data: {
        ...d,
        suite: d.suite || null,
        message: d.message || null,
        checkIn: checkIn ? new Date(checkIn) : null,
        checkOut: checkOut ? new Date(checkOut) : null,
        ipHash,
      },
    });
  } catch (err) {
    console.error("DB write failed:", err);
    return NextResponse.json(
      {
        error: "Could not save enquiry",
        detail: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }

  // Email අසාර්ථක වුණත් enquiry එක save වෙලා තියෙනවා
    // Email අසාර්ථක වුණත් enquiry එක save වෙලා තියෙනවා
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.MAIL_FROM ?? `${site.name} <onboarding@resend.dev>`;
    const owner = process.env.NOTIFY_EMAIL!;

    // Domain එකක් verify කරලා නැති නම් Resend test mode: owner එකට විතරයි යවන්න පුළුවන්
    const verified = Boolean(process.env.MAIL_FROM);
    const guestTo = verified ? d.email : owner;
    const guestSubject = verified
      ? `Your enquiry at ${site.name}`
      : `[test → ${d.email}] Your enquiry at ${site.name}`;

    const results = await Promise.allSettled([
      resend.emails.send({
        from,
        to: guestTo,
        subject: guestSubject,
        html: guestEmail(d.name),
      }),
      resend.emails.send({
        from,
        to: owner,
        replyTo: d.email,
        subject: `Enquiry — ${d.name}, ${d.guests} guests`,
        html: notifyEmail({ ...d, checkIn, checkOut }),
      }),
    ]);

    results
      .filter((r) => r.status === "rejected")
      .forEach((r) => console.error("Email failed:", (r as PromiseRejectedResult).reason));
  } catch (err) {
    console.error("Email delivery failed:", err);
  }

  return NextResponse.json({ ok: true, id: inquiry.id }, { status: 201 });
}