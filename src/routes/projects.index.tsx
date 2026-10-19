import { createFileRoute } from "@tanstack/react-router";
import { images, projects } from "@/content/site";
import { CtaBand, PageHero } from "@/components/site/primitives";
import { ProjectRow } from "@/components/site/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () => pageHead("Projects | Bhuvana Exports", "Case studies from Bhuvana Exports: leather supply and export projects presented in detail.", "/projects"),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero image={images.inspection} eyebrow="Projects" title={<>Case studies<br />in leather.</>} intro="Each project is presented as an individual story: the requirement, the approach and the result." />
      <section className="py-24 md:py-32">
        <div className="container-x border-b border-border">
          {projects.map((p, i) => <ProjectRow key={p.slug} p={p} i={i} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
