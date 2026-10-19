import { createFileRoute } from "@tanstack/react-router";
import { images, team } from "@/content/site";
import { CtaBand, Field, PageHero, Reveal } from "@/components/site/primitives";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () => pageHead("Our Team | Bhuvana Exports", "Meet Naresh, founder of Bhuvana Exports, and the team behind the company's leather export work.", "/team"),
  component: Team,
});

function Team() {
  return (
    <>
      <PageHero image={images.stitching} eyebrow="Our Team" title={<>The people<br />behind the work.</>} />
      <section className="py-28 md:py-40">
        <div className="container-x space-y-28 md:space-y-40">
          {team.map((m, i) => (
            <div key={i} className="grid gap-12 md:grid-cols-12 md:items-end">
              <Reveal className={`md:col-span-6 ${i % 2 ? "md:order-last md:col-start-7" : ""}`}>
                {m.image ? (
                  <img src={m.image} alt={`Portrait of ${m.name}`} loading={i ? "lazy" : "eager"} className="aspect-[4/5] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-end bg-cream p-8"><p className="eyebrow text-muted-foreground">Portrait to be added</p></div>
                )}
              </Reveal>
              <Reveal className={i % 2 ? "md:col-span-5" : "md:col-span-5 md:col-start-8"} delay={120}>
                <p className="font-serif text-6xl font-light text-cognac">0{i + 1}</p>
                <h2 className="display-lg mt-6"><Field value={m.name} /></h2>
                <p className="eyebrow mt-4 text-muted-foreground"><Field value={m.role} /></p>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground"><Field value={m.bio} /></p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
