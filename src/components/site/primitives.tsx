import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { isPlaceholder, placeholderLabel } from "@/content/site";

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Renders verified text normally, and placeholders as a discreet "to be confirmed" note. */
export function Field({ value, className }: { value: string; className?: string }) {
  if (!isPlaceholder(value)) return <span className={className}>{value}</span>;
  return (
    <span className={cn("italic opacity-60", className)} title="Placeholder — to be confirmed">
      {placeholderLabel(value)}
      <span className="eyebrow ml-2 not-italic text-[0.6rem] opacity-80">TBC</span>
    </span>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-4", className)}>
      <span className="h-px w-8 bg-current opacity-50" aria-hidden />
      {children}
    </p>
  );
}

type BtnProps = { to: string; children: ReactNode; variant?: "solid" | "outline" | "light" | "ghost-light"; className?: string; search?: Record<string, string> };

const btnBase = "group inline-flex items-center gap-4 px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500";
const btnVariants = {
  solid: "bg-espresso text-on-dark hover:bg-cognac",
  outline: "border border-foreground/40 text-foreground hover:bg-espresso hover:text-on-dark hover:border-espresso",
  light: "bg-ivory text-espresso hover:bg-cream",
  "ghost-light": "border border-on-dark/40 text-on-dark hover:bg-ivory hover:text-espresso",
};

export function Btn({ to, children, variant = "solid", className, search }: BtnProps) {
  return (
    <Link to={to} search={search as never} className={cn(btnBase, btnVariants[variant], className)}>
      {children}
      <span className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-10" aria-hidden />
    </Link>
  );
}

export function PageHero({ image, eyebrow, title, intro }: { image: string; eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-espresso text-on-dark">
      <img src={image} alt="" className="hero-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="img-veil absolute inset-0" />
      <div className="container-x relative pb-16 pt-40 md:pb-24">
        <Eyebrow className="text-on-dark-muted">{eyebrow}</Eyebrow>
        <h1 className="display-xl mask-up mt-8 max-w-5xl">{title}</h1>
        {intro && <p className="mt-8 max-w-xl text-base leading-relaxed text-on-dark-muted md:text-lg">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ index, label, title, className, light }: { index?: string; label: string; title: ReactNode; className?: string; light?: boolean }) {
  return (
    <Reveal className={cn("grid gap-6 md:grid-cols-12", className)}>
      <div className="md:col-span-4">
        <Eyebrow className={light ? "text-on-dark-muted" : "text-muted-foreground"}>
          {index && <span className="tabular-nums">{index}</span>} {label}
        </Eyebrow>
      </div>
      <h2 className="display-lg md:col-span-8">{title}</h2>
    </Reveal>
  );
}

export function CtaBand() {
  return (
    <section className="bg-espresso py-28 text-on-dark md:py-40">
      <div className="container-x grid gap-12 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-8">
          <Eyebrow className="text-on-dark-muted">Enquiries</Eyebrow>
          <h2 className="display-lg mt-8">Let's discuss your next requirement.</h2>
        </Reveal>
        <Reveal className="md:col-span-4 md:justify-self-end" delay={150}>
          <Btn to="/contact" variant="light">Start an Enquiry</Btn>
        </Reveal>
      </div>
    </section>
  );
}
