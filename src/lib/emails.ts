import { site } from "@/lib/site";

const wrap = (body: string) => `
<div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#1A1815;background:#FAF7F2">
  <p style="font-size:13px;letter-spacing:0.22em;text-transform:uppercase;color:#0F2E28;margin:0 0 28px">${site.name}</p>
  ${body}
  <p style="margin-top:32px;padding-top:20px;border-top:1px solid #E8DFD2;font-family:Helvetica,sans-serif;font-size:12px;line-height:1.7;color:#5C574F">
    ${site.address.street}, ${site.address.city}<br>
    ${site.phone} · ${site.email}
  </p>
</div>`;

export const guestEmail = (name: string) =>
  wrap(`
    <p style="font-size:20px;line-height:1.5;margin:0 0 18px">Thank you, ${name}.</p>
    <p style="font-family:Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#5C574F;margin:0">
      We have your enquiry and will come back with availability and a rate within one working day, usually the same morning.
      If your dates are tight, WhatsApp us on ${site.whatsapp} for a faster answer.
    </p>`);

export const notifyEmail = (d: Record<string, unknown>) =>
  wrap(`
    <p style="font-size:20px;margin:0 0 18px">New enquiry</p>
    <table style="font-family:Helvetica,sans-serif;font-size:14px;color:#1A1815;border-collapse:collapse">
      ${Object.entries(d)
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 20px 6px 0;color:#5C574F;text-transform:capitalize">${k}</td><td style="padding:6px 0">${v}</td></tr>`
        )
        .join("")}
    </table>`);