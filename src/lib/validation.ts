import { z } from "zod";

export const inquirySchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name").max(80),
    email: z.string().trim().email("Please enter a valid email").max(120),
    checkIn: z.string().optional().or(z.literal("")),
    checkOut: z.string().optional().or(z.literal("")),
    guests: z.coerce.number().int().min(1).max(12).default(2),
    suite: z.string().max(60).optional().or(z.literal("")),
    message: z.string().trim().max(1500).optional().or(z.literal("")),
    company: z.string().max(0, "Rejected"), // honeypot — හිස්ව තියෙන්න ඕනේ
  })
  .refine(
    (d) => !d.checkIn || !d.checkOut || new Date(d.checkOut) > new Date(d.checkIn),
    { message: "Departure must be after arrival", path: ["checkOut"] }
  );

export type InquiryInput = z.infer<typeof inquirySchema>;