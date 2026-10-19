import { createFileRoute } from "@tanstack/react-router";
import { company, images } from "@/content/site";
import { Btn, CtaBand, Eyebrow, Reveal } from "@/components/site/primitives";
import { FeaturedProjects, GlobalSection, ProcessSection, ProductsGrid, QualitySection, TeamSection, ValuesSection, WhySection } from "@/components/site/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Bhuvana Exports | Leather Manufacturing & Export",
      "Bhuvana Exports is a leather-focused export business providing quality leather solutions for businesses and international markets.",
      "/",
    ),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso text-on-dark">
        <img src={images.hero} alt="Stacks of finished leather hides in a warehouse" width={1920} height={1088} fetchPriority="high" className="hero-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="img-veil absolute inset-0" />
        <div className="container-x relative grid gap-12 pb-20 pt-40 md:grid-cols-12 md:pb-28">
          <div className="md:col-span-9">
            <Eyebrow className="text-on-dark-muted">Leather Manufacturing &amp; Export</Eyebrow>
            <h1 className="display-xl mask-up mt-8">Leather,<br />crafted with<br /><em className="font-light">purpose.</em></h1>
          </div>
          <div className="md:col-span-3 md:self-end">
            <p className="leading-relaxed text-on-dark-muted">Bhuvana Exports connects refined leather craftsmanship with businesses and markets across the world.</p>
          </div>
          <div className="flex flex-wrap gap-4 md:col-span-12">
            <Btn to="/products" variant="light">Explore Our Capabilities</Btn>
            <Btn to="/contact" variant="ghost-light">Start an Enquiry</Btn>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 hidden flex-col items-center gap-4 md:right-12 md:flex" aria-hidden>
          <span className="eyebrow text-[0.6rem] text-on-dark-muted [writing-mode:vertical-rl]">Scroll</span>
          <span className="block h-14 w-px overflow-hidden bg-line-dark"><span className="scroll-line block h-full w-full bg-on-dark" /></span>
        </div>
      </section>

      <section className="py-28 md:py-40">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <img src={images.hands} alt="Craftsman cutting leather by hand" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7 md:pt-24">
            <Reveal>
              <Eyebrow className="text-muted-foreground">01 About Bhuvana Exports</Eyebrow>
              <h2 className="display-lg mt-8">Built on craftsmanship. Driven by global standards.</h2>
              <p className="mt-10 text-lg leading-relaxed text-muted-foreground">{company.description}</p>
              <div className="mt-12"><Btn to="/about" variant="outline">Our Story</Btn></div>
            </Reveal>
          </div>
        </div>
      </section>

      <ValuesSection />
      <ProductsGrid />
      <ProcessSection />
      <QualitySection />
      <FeaturedProjects />
      <GlobalSection />
      <TeamSection />
      <WhySection />
      <CtaBand />
    </>
  );
}
