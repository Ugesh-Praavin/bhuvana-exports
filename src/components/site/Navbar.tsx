import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { nav } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid ? "border-b border-border bg-ivory text-foreground" : "bg-transparent text-on-dark",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ivory focus:px-4 focus:py-2 focus:text-espresso">
        Skip to content
      </a>
      <div className={cn("container-x flex items-center justify-between transition-all duration-700", solid ? "h-18 py-5" : "h-24 py-7")}>
        <Link to="/" className="font-serif text-xl tracking-[0.22em] md:text-[1.35rem]" aria-label="Bhuvana Exports — home">
          BHUVANA <span className="opacity-70">EXPORTS</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="eyebrow relative py-1 opacity-85 transition-opacity hover:opacity-100 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100"
              activeProps={{ className: "opacity-100 after:scale-x-100" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "eyebrow border px-5 py-3 transition-colors duration-500",
              solid ? "border-espresso bg-espresso text-on-dark hover:bg-cognac hover:border-cognac" : "border-on-dark/50 hover:bg-ivory hover:text-espresso",
            )}
          >
            Enquire Now
          </Link>
        </nav>
        <button
          type="button"
          className="eyebrow lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-ivory lg:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col py-10">
            {nav.map((n, i) => (
              <Link key={n.to} to={n.to} className="flex items-baseline gap-6 border-b border-border py-6 font-serif text-4xl">
                <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="eyebrow mt-10 bg-espresso px-6 py-5 text-center text-on-dark">
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
