import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { isPlaceholder, placeholderLabel, projects } from "@/content/site";
import { Btn, CtaBand, Eyebrow, Field, Reveal } from "@/components/site/primitives";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ params, loaderData }) => {
    const p = projects.find((x) => x.slug === loaderData?.slug);
    if (!p) return { meta: [{ title: "Project not found | Bhuvana Exports" }, { name: "robots", content: "noindex" }] };
    const name = isPlaceholder(p.name) ? `Project ${p.number}` : p.name;
    return pageHead(`${name} | Projects | Bhuvana Exports`, `Case study ${p.number} from Bhuvana Exports: ${name}.`, `/projects/${params.slug}`, "article");
  },
  notFoundComponent: () => (
    <div className="container-x py-48"><h1 className="display-lg">Project not found.</h1><div className="mt-10"><Btn to="/projects" variant="outline">All Projects</Btn></div></div>
  ),
  component: ProjectDetail,
});

function Block({ n, label, text }: { n: string; label: string; text: string }) {
  return (
    <Reveal className="grid gap-6 border-t border-border py-14 md:grid-cols-12">
      <p className="eyebrow text-muted-foreground md:col-span-4"><span className="text-cognac">{n}</span> {label}</p>
      <p className="font-serif text-2xl leading-snug md:col-span-8 md:text-3xl"><Field value={text} /></p>
    </Reveal>
  );
}

function ProjectDetail() {
  const { slug } = Route.useParams();
  const p = projects.find((x) => x.slug === slug)!;
  const related = projects.filter((x) => x.slug !== slug).slice(0, 2);
  const meta: [string, string][] = [["Category", p.category], ["Client", p.client], ["Market", p.market], ["Scope", p.scope], ["Year", p.year]];

  return (
    <>
      <section className="relative flex min-h-[90svh] items-end overflow-hidden bg-espresso text-on-dark">
        <img src={p.hero} alt="" className="hero-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="img-veil absolute inset-0" />
        <div className="container-x relative pb-16 pt-40 md:pb-24">
          <Link to="/projects" className="eyebrow text-on-dark-muted hover:text-on-dark">All Projects</Link>
          <p className="eyebrow mt-10 text-brass">Project {p.number}</p>
          <h1 className="display-xl mask-up mt-6 max-w-5xl">{isPlaceholder(p.name) ? placeholderLabel(p.name) : p.name}</h1>
        </div>
      </section>

      <section className="border-b border-border">
        <dl className="container-x grid grid-cols-2 md:grid-cols-5">
          {meta.map(([k, v]) => (
            <div key={k} className="border-r border-border py-8 pr-4 last:border-r-0 md:px-6 md:first:pl-0">
              <dt className="eyebrow text-muted-foreground">{k}</dt>
              <dd className="mt-3"><Field value={v} /></dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Block n="01" label="Overview" text={p.overview} />
          <Block n="02" label="Challenge" text={p.challenge} />
          <Block n="03" label="Our Approach" text={p.approach} />
        </div>
      </section>

      <Reveal><img src={p.gallery[0]} alt="" loading="lazy" className="h-[60vh] w-full object-cover md:h-[85vh]" /></Reveal>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Block n="04" label="Material Details" text={p.material} />
          <Block n="05" label="Process" text={p.processText} />
          <Block n="06" label="Quality Control" text={p.quality} />
          <Block n="07" label="Final Result" text={p.result} />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Eyebrow className="text-muted-foreground">Gallery</Eyebrow>
          <div className="mt-10 grid gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-7"><img src={p.gallery[1]} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover" /></Reveal>
            <Reveal className="md:col-span-5 md:mt-40" delay={150}><img src={p.gallery[2]} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover" /></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4"><Eyebrow className="text-muted-foreground">Project Details</Eyebrow><h2 className="display-md mt-6">Specifications</h2></Reveal>
          <dl className="grid border-t border-border sm:grid-cols-2 md:col-span-8">
            {p.specs.map((s) => (
              <div key={s.label} className="border-b border-border py-6 sm:pr-8">
                <dt className="eyebrow text-muted-foreground">{s.label}</dt>
                <dd className="mt-2 font-serif text-xl"><Field value={s.value} /></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Eyebrow className="text-muted-foreground">Related Projects</Eyebrow>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} to="/projects/$slug" params={{ slug: r.slug }} className="group block">
                <div className="overflow-hidden"><img src={r.hero} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.04]" /></div>
                <p className="eyebrow mt-6 text-cognac">Project {r.number}</p>
                <h3 className="mt-2 font-serif text-3xl"><Field value={r.name} /></h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
