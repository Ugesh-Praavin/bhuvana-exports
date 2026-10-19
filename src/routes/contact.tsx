import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { company, images } from "@/content/site";
import { Eyebrow, Field, Reveal } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/ContactForm";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ requirement: z.string().max(150).optional() }),
  head: () => pageHead("Contact | Bhuvana Exports", "Send an enquiry to Bhuvana Exports about leather products, specifications and export requirements.", "/contact"),
  component: Contact,
});

function Contact() {
  const { requirement } = Route.useSearch();
  const details: [string, string][] = [["Phone", company.phone], ["Email", company.email], ["Address", company.address], ["Website", company.website]];
  return (
    <>
      <section className="relative h-[46vh] overflow-hidden bg-espresso md:h-[56vh]">
        <img src={images.hands} alt="" className="hero-zoom h-full w-full object-cover object-[50%_60%]" />
        <div className="img-veil absolute inset-0" />
      </section>
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow className="text-muted-foreground">Contact</Eyebrow>
              <h1 className="display-lg mt-8">Let's discuss your next requirement.</h1>
              <p className="mt-8 text-lg text-muted-foreground">Tell us what you're looking for and our team will get back to you.</p>
            </Reveal>
            <dl className="mt-14 border-t border-border">
              {details.map(([k, v]) => (
                <div key={k} className="border-b border-border py-5">
                  <dt className="eyebrow text-muted-foreground">{k}</dt>
                  <dd className="mt-2 font-serif text-xl"><Field value={v} /></dd>
                </div>
              ))}
            </dl>
          </div>
          <Reveal className="md:col-span-7 md:col-start-6" delay={150}>
            <ContactForm initialRequirement={requirement} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
