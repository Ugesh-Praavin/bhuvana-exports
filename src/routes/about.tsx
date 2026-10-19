import { createFileRoute } from "@tanstack/react-router";
import { company, images, team } from "@/content/site";
import { Btn, CtaBand, Eyebrow, Field, PageHero, Reveal } from "@/components/site/primitives";
import { GlobalSection, ProductsGrid, QualitySection, ValuesSection } from "@/components/site/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About | Bhuvana Exports", "The story, philosophy and founder behind Bhuvana Exports, a leather-focused export business led by Naresh.", "/about"),
  component: About,
});

function About() {
  const founder = team[0]!;
  return (
    <>
      <PageHero image={images.hides} eyebrow="About Bhuvana Exports" title={<>A business built<br />around leather.</>} intro="Craftsmanship, consistency and dependable relationships with buyers across international markets." />

      <section className="py-28 md:py-40">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4"><Eyebrow className="text-muted-foreground">Company Story</Eyebrow></Reveal>
          <Reveal className="md:col-span-8">
            <p className="font-serif text-3xl leading-snug md:text-4xl">{company.description}</p>
            <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
              <div><p className="eyebrow text-muted-foreground">Mission</p><p className="mt-4 text-lg"><Field value={company.mission} /></p></div>
              <div><p className="eyebrow text-muted-foreground">Vision</p><p className="mt-4 text-lg"><Field value={company.vision} /></p></div>
              <div><p className="eyebrow text-muted-foreground">Based in</p><p className="mt-4 text-lg"><Field value={company.location} /></p></div>
              <div><p className="eyebrow text-muted-foreground">Experience</p><p className="mt-4 text-lg"><Field value={company.yearsOfExperience} /></p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-espresso text-on-dark">
        <div className="grid md:grid-cols-2">
          <img src={founder.image} alt={`Portrait of ${founder.name}`} loading="lazy" className="aspect-[4/5] h-full w-full object-cover" />
          <Reveal className="flex flex-col justify-center px-6 py-20 md:px-16 lg:px-24">
            <Eyebrow className="text-on-dark-muted">Founder</Eyebrow>
            <h2 className="display-lg mt-8">{founder.name}</h2>
            <p className="eyebrow mt-4 text-brass">{founder.role}</p>
            <p className="mt-10 max-w-lg text-lg leading-relaxed text-on-dark-muted">{founder.bio}</p>
            <p className="mt-6 max-w-lg text-on-dark-muted"><Field value="[Founder background and personal message]" /></p>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-40">
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Eyebrow className="justify-center text-muted-foreground">Our Philosophy</Eyebrow>
            <p className="display-lg mt-10">"Good leather is patient work. We would rather do it properly than do it quickly."</p>
            <p className="eyebrow mt-10 text-muted-foreground">Guiding principle — wording to be confirmed</p>
          </Reveal>
        </div>
      </section>

      <ValuesSection />
      <ProductsGrid limit={3} />
      <QualitySection />
      <GlobalSection />
      <section className="py-20"><div className="container-x"><Btn to="/team" variant="outline">Meet the Team</Btn></div></section>
      <CtaBand />
    </>
  );
}
