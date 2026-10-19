import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { products } from "@/content/site";
import { cn } from "@/lib/utils";

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  company: z.string().trim().max(150, "Company name is too long"),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40, "Phone number is too long").regex(/^[0-9+()\-\s]*$/, "Use digits, spaces and + ( ) - only"),
  country: z.string().trim().min(1, "Please enter your country").max(100),
  requirement: z.string().trim().min(1, "Please choose a requirement").max(150),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000, "Message must be under 2000 characters"),
});
type Values = z.infer<typeof enquirySchema>;
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", company: "", email: "", phone: "", country: "", requirement: "", message: "" };

export function ContactForm({ initialRequirement }: { initialRequirement?: string | undefined }) {
  const [values, setValues] = useState<Values>({ ...empty, requirement: initialRequirement ?? "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as keyof Values] ??= i.message; });
      setErrors(errs);
      return;
    }
    setStatus("sending");
    const d = parsed.data;
    const { error } = await supabase.from("enquiries").insert({ ...d, company: d.company || null, phone: d.phone || null });
    if (error) { setStatus("error"); return; }
    setStatus("sent");
    setValues(empty);
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-t border-foreground/30 pt-12">
        <p className="eyebrow text-cognac">Enquiry received</p>
        <h3 className="display-md mt-6">Thank you. Your enquiry is with our team.</h3>
        <p className="mt-6 max-w-md text-muted-foreground">We will review your requirement and respond as soon as possible.</p>
        <button type="button" onClick={() => setStatus("idle")} className="eyebrow mt-10 border-b border-current pb-1">Send another enquiry</button>
      </div>
    );
  }

  const field = (k: keyof Values, label: string, opts: { type?: string; required?: boolean; autoComplete?: string } = {}) => (
    <div>
      <label htmlFor={k} className="eyebrow text-muted-foreground">{label}{opts.required && <span className="text-cognac"> *</span>}</label>
      <input
        id={k}
        type={opts.type ?? "text"}
        value={values[k]}
        onChange={set(k)}
        autoComplete={opts.autoComplete}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${k}-err` : undefined}
        className={cn("mt-3 w-full border-0 border-b bg-transparent py-3 text-lg outline-none transition-colors focus:border-espresso", errors[k] ? "border-destructive" : "border-input")}
      />
      {errors[k] && <p id={`${k}-err`} className="mt-2 text-sm text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-10 md:grid-cols-2">
      {field("name", "Name", { required: true, autoComplete: "name" })}
      {field("company", "Company", { autoComplete: "organization" })}
      {field("email", "Email", { type: "email", required: true, autoComplete: "email" })}
      {field("phone", "Phone", { type: "tel", autoComplete: "tel" })}
      {field("country", "Country", { required: true, autoComplete: "country-name" })}
      <div>
        <label htmlFor="requirement" className="eyebrow text-muted-foreground">Requirement<span className="text-cognac"> *</span></label>
        <select
          id="requirement"
          value={values.requirement}
          onChange={set("requirement")}
          aria-invalid={!!errors.requirement}
          aria-describedby={errors.requirement ? "requirement-err" : undefined}
          className={cn("mt-3 w-full border-0 border-b bg-transparent py-3 text-lg outline-none focus:border-espresso", errors.requirement ? "border-destructive" : "border-input")}
        >
          <option value="">Select a requirement</option>
          {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
          <option value="Other">Other</option>
        </select>
        {errors.requirement && <p id="requirement-err" className="mt-2 text-sm text-destructive">{errors.requirement}</p>}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className="eyebrow text-muted-foreground">Message<span className="text-cognac"> *</span></label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : undefined}
          className={cn("mt-3 w-full resize-none border-0 border-b bg-transparent py-3 text-lg outline-none focus:border-espresso", errors.message ? "border-destructive" : "border-input")}
        />
        {errors.message && <p id="message-err" className="mt-2 text-sm text-destructive">{errors.message}</p>}
      </div>
      <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">Fields marked * are required.</p>
        <button type="submit" disabled={status === "sending"} className="group inline-flex items-center justify-center gap-4 bg-espresso px-10 py-5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-on-dark transition-colors duration-500 hover:bg-cognac disabled:opacity-60">
          {status === "sending" ? "Sending" : "Send Enquiry"}
          <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="border-l-2 border-destructive pl-4 text-destructive md:col-span-2">
          Your enquiry could not be sent. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
