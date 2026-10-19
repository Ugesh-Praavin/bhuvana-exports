import { describe, expect, it } from "vitest";
import { enquirySchema } from "@/components/site/ContactForm";

const valid = { name: "A Buyer", company: "", email: "buyer@example.com", phone: "+91 99999 99999", country: "Germany", requirement: "Finished Leather", message: "Looking for finished leather samples." };

describe("enquiry form", () => {
  it("accepts a complete enquiry", () => expect(enquirySchema.safeParse(valid).success).toBe(true));
  it("rejects an invalid email", () => expect(enquirySchema.safeParse({ ...valid, email: "nope" }).success).toBe(false));
  it("requires a country", () => expect(enquirySchema.safeParse({ ...valid, country: " " }).success).toBe(false));
});
