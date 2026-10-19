import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("Terms & Conditions | Bhuvana Exports", "Terms and conditions for using the Bhuvana Exports website.", "/terms"),
  component: () => (
    <section className="container-x max-w-3xl py-48">
      <p className="eyebrow text-muted-foreground">Legal</p>
      <h1 className="display-lg mt-6">Terms &amp; Conditions</h1>
      <p className="mt-10 text-lg leading-relaxed text-muted-foreground">The full terms and conditions will be published here once finalised.</p>
    </section>
  ),
});
