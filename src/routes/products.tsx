import { createFileRoute } from "@tanstack/react-router";
import { images, products } from "@/content/site";
import { Btn, CtaBand, Field, PageHero, Reveal } from "@/components/site/primitives";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/products")({
  head: () => pageHead("Products & Capabilities | Bhuvana Exports", "Finished leather, hides, leather goods, industrial leather and custom export requirements from Bhuvana Exports.", "/products"),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero image={images.texture} eyebrow="Products & Capabilities" title={<>What we<br />work with.</>} intro="An overview of our leather capabilities. Detailed specifications are shared on request." />
      <div className="py-12 md:py-20">
        {products.map((p, i) => (
          <section key={p.slug} id={p.slug} className="scroll-mt-24 py-16 md:py-24">
            <div className="container-x grid gap-12 md:grid-cols-12 md:items-center">
              <Reveal className={`md:col-span-7 ${i % 2 ? "md:order-last md:col-start-6" : ""}`}>
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.name} loading={i === 0 ? "eager" : "lazy"} className="aspect-[5/4] w-full object-cover" />
                </div>
              </Reveal>
              <Reveal className={i % 2 ? "md:col-span-4" : "md:col-span-4 md:col-start-9"} delay={120}>
                <p className="font-serif text-6xl font-light text-cognac">0{i + 1}</p>
                <h2 className="display-md mt-6">{p.name}</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground"><Field value={p.description} /></p>
                <dl className="mt-10 border-t border-border">
                  {([["Available specifications", p.specifications], ["Applications", p.applications], ["Markets", p.markets]] as const).map(([k, v]) => (
                    <div key={k} className="border-b border-border py-4">
                      <dt className="eyebrow text-muted-foreground">{k}</dt>
                      <dd className="mt-2"><Field value={v} /></dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10"><Btn to="/contact" search={{ requirement: p.name }}>Enquire About This Product</Btn></div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
