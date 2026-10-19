import { Link } from "@tanstack/react-router";
import { advantages, images, markets, process, products, projects, qualityItems, team, values, type Project } from "@/content/site";
import { Btn, Eyebrow, Field, Reveal, SectionHead } from "./primitives";

export function ValuesSection() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-x">
        <SectionHead index="02" label="Our Values" title="Principles that shape every order." />
        <div className="mt-20 grid border-t border-border md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120} className="border-b border-border py-10 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
              <p className="font-serif text-7xl font-light text-cognac md:text-8xl">0{i + 1}</p>
              <h3 className="mt-8 font-serif text-2xl">{v.title}</h3>
              <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductsGrid({ limit }: { limit?: number }) {
  const list = limit ? products.slice(0, limit) : products;
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="container-x">
        <SectionHead index="03" label="Capabilities" title="What We Work With" />
        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 120} className={i % 3 === 1 ? "lg:mt-24" : ""}>
              <Link to="/products" hash={p.slug} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
                  <img src={p.image} alt={p.name} loading="lazy" width={1200} height={1500} className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-espresso/0 transition-colors duration-700 group-hover:bg-espresso/25" />
                </div>
                <div className="mt-6 flex items-baseline gap-5 transition-transform duration-700 group-hover:translate-x-2">
                  <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-3xl">{p.name}</h3>
                    <p className="mt-2 text-muted-foreground">{p.short}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20"><Btn to="/products" variant="outline">View All Capabilities</Btn></Reveal>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-espresso py-28 text-on-dark md:py-40">
      <div className="container-x">
        <SectionHead index="04" label="Process" title="From Material to Market" light />
        <ol className="relative mt-24 grid gap-0 lg:grid-cols-5">
          <span className="absolute left-[0.3rem] top-0 h-full w-px bg-line-dark lg:left-0 lg:top-[0.3rem] lg:h-px lg:w-full" aria-hidden />
          {process.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 140} className="relative pb-12 pl-10 lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-14">
              <span className="absolute left-0 top-1.5 h-[0.65rem] w-[0.65rem] bg-brass lg:top-0" aria-hidden />
              <p className="eyebrow text-brass">Step 0{i + 1}</p>
              <h3 className="mt-4 font-serif text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-[16rem] text-on-dark-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-24 grid gap-4 md:grid-cols-12">
          <img src={images.hands} alt="Hands cutting leather on a workbench" loading="lazy" className="aspect-[16/10] w-full object-cover md:col-span-7 md:aspect-auto md:h-[30rem]" />
          <img src={images.stitching} alt="Leather being hand stitched" loading="lazy" className="aspect-[16/10] w-full object-cover md:col-span-5 md:aspect-auto md:h-[30rem]" />
        </Reveal>
      </div>
    </section>
  );
}

export function QualitySection() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-x grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <div className="overflow-hidden">
            <img src={images.inspection} alt="A leather hide being inspected and measured" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
        </Reveal>
        <div className="md:col-span-5 md:col-start-8 md:pt-16">
          <Reveal>
            <Eyebrow className="text-muted-foreground">05 Quality</Eyebrow>
            <h2 className="display-lg mt-8">Quality is not a final step.</h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              From material selection to final dispatch, every stage is approached with consistency, attention to detail and clear quality expectations.
            </p>
          </Reveal>
          <dl className="mt-14 border-t border-border">
            {qualityItems.map((q, i) => (
              <Reveal key={q.title} delay={i * 60} className="flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:justify-between">
                <dt className="font-serif text-xl">{q.title}</dt>
                <dd className="text-sm text-muted-foreground"><Field value={q.value} /></dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
      <Reveal className="mt-28">
        <img src={images.texture} alt="Close-up of full-grain leather texture" loading="lazy" className="h-[46vh] w-full object-cover md:h-[60vh]" />
      </Reveal>
    </section>
  );
}

export function ProjectRow({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal>
      <Link to="/projects/$slug" params={{ slug: p.slug }} className="group grid gap-8 border-t border-border py-12 md:grid-cols-12 md:items-center">
        <span className="font-serif text-6xl font-light text-cognac md:col-span-1">{p.number}</span>
        <div className={`overflow-hidden md:col-span-6 ${i % 2 ? "md:order-last md:col-start-7" : ""}`}>
          <img src={p.hero} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]" />
        </div>
        <div className="transition-transform duration-700 group-hover:translate-x-2 md:col-span-5">
          <p className="eyebrow text-muted-foreground"><Field value={p.category} /> · <Field value={p.market} /> · <Field value={p.year} /></p>
          <h3 className="display-md mt-4"><Field value={p.name} /></h3>
          <p className="mt-4 max-w-md text-muted-foreground"><Field value={p.short} /></p>
          <p className="eyebrow mt-8 inline-flex items-center gap-4">View Case Study <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-12" /></p>
        </div>
      </Link>
    </Reveal>
  );
}

export function FeaturedProjects() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="container-x">
        <SectionHead index="06" label="Projects" title="Selected work, told in detail." />
        <div className="mt-20 border-b border-border">
          {projects.map((p, i) => <ProjectRow key={p.slug} p={p} i={i} />)}
        </div>
        <Reveal className="mt-16"><Btn to="/projects" variant="outline">All Projects</Btn></Reveal>
      </div>
    </section>
  );
}

function WorldMap() {
  // Minimal dotted world silhouette built from coarse lat/long bands.
  const rows: [number, number, number][] = [
    [14, 18, 32], [14, 44, 60], [14, 62, 86],
    [18, 12, 34], [18, 44, 58], [18, 60, 90],
    [22, 10, 32], [22, 44, 56], [22, 58, 88],
    [26, 14, 30], [26, 44, 54], [26, 56, 86],
    [30, 16, 30], [30, 44, 52], [30, 54, 84],
    [34, 18, 28], [34, 42, 60], [34, 62, 80],
    [38, 20, 27], [38, 44, 62], [38, 66, 76],
    [42, 22, 26], [42, 46, 60], [42, 66, 72], [42, 76, 80],
    [46, 25, 28], [46, 48, 58], [46, 68, 71], [46, 76, 82],
    [50, 27, 33], [50, 50, 58], [50, 78, 82],
    [54, 28, 36], [54, 50, 57], [54, 80, 84],
    [58, 29, 36], [58, 51, 56], [58, 82, 88],
    [62, 29, 34], [62, 52, 55], [62, 80, 89],
    [66, 30, 33], [66, 82, 88],
    [70, 30, 32],
  ];
  const dots: [number, number][] = [];
  rows.forEach(([y, a, b]) => { for (let x = a; x <= b; x += 1.2) dots.push([x, y]); });
  return (
    <svg viewBox="0 0 100 80" className="h-auto w-full" role="img" aria-label="Minimal world map showing India and placeholder export markets">
      {dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={0.32} className="fill-on-dark/25" />)}
      {markets.map((m, i) => (
        <g key={i}>
          {i > 0 && <line x1={markets[0]!.x} y1={markets[0]!.y} x2={m.x} y2={m.y} className="stroke-brass/40" strokeWidth={0.12} strokeDasharray="0.6 0.6" />}
          <circle cx={m.x} cy={m.y} r={i === 0 ? 0.9 : 0.6} className="fill-brass" />
        </g>
      ))}
    </svg>
  );
}

export function GlobalSection() {
  return (
    <section className="bg-espresso py-28 text-on-dark md:py-40">
      <div className="container-x">
        <SectionHead index="07" label="Global Presence" title="From our production floor to global markets." light />
        <div className="mt-20 grid gap-16 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-8"><WorldMap /></Reveal>
          <Reveal className="md:col-span-4" delay={150}>
            <ul className="border-t border-line-dark">
              {markets.map((m, i) => (
                <li key={i} className="flex items-baseline justify-between border-b border-line-dark py-5">
                  <span className="font-serif text-2xl"><Field value={m.name} /></span>
                  <span className="eyebrow text-on-dark-muted">{m.note || `Market 0${i}`}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-on-dark-muted">Export destinations will be listed here once confirmed.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  const lead = team[0]!; const rest = team.slice(1);
  return (
    <section className="py-28 md:py-40">
      <div className="container-x">
        <SectionHead index="08" label="Our Team" title="The people behind the work." />
        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <img src={lead.image} alt={`Portrait of ${lead.name}`} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8 md:self-end" delay={150}>
            <p className="eyebrow text-muted-foreground">{lead.role}</p>
            <h3 className="display-lg mt-4">{lead.name}</h3>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{lead.bio}</p>
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8">
              {rest.map((m, i) => (
                <div key={i}>
                  <div className="aspect-[4/5] bg-cream" aria-hidden />
                  <p className="mt-4 font-serif text-xl"><Field value={m.name} /></p>
                  <p className="text-sm text-muted-foreground"><Field value={m.role} /></p>
                </div>
              ))}
            </div>
            <div className="mt-12"><Btn to="/team" variant="outline">Meet the Team</Btn></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="container-x">
        <SectionHead index="09" label="Why Bhuvana" title="Why businesses work with Bhuvana Exports" />
        <div className="mt-20 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 100} className="border-b border-r border-border p-8 md:p-12">
              <p className="eyebrow text-cognac">0{i + 1}</p>
              <h3 className="mt-6 font-serif text-3xl">{a.title}</h3>
              <p className="mt-4 text-muted-foreground">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
