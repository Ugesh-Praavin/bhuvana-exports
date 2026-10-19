import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("Privacy Policy | Bhuvana Exports", "How Bhuvana Exports handles information submitted through this website.", "/privacy"),
  component: () => (
    <section className="container-x max-w-3xl py-48">
      <p className="eyebrow text-muted-foreground">Legal</p>
      <h1 className="display-lg mt-6">Privacy Policy</h1>
      <p className="mt-10 text-lg leading-relaxed text-muted-foreground">Information you send through the enquiry form is used only to respond to your enquiry. The full privacy policy will be published here once finalised.</p>
    </section>
  ),
});
