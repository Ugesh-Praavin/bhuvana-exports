import { Link } from "@tanstack/react-router";
import { company } from "@/content/site";
import { Field } from "./primitives";

const links = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-espresso text-on-dark">
      <div className="container-x border-t border-line-dark pb-10 pt-24">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-4xl tracking-[0.18em] md:text-5xl">BHUVANA<br />EXPORTS</p>
            <p className="eyebrow mt-6 text-on-dark-muted">{company.tagline}</p>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow text-on-dark-muted">Navigate</p>
            <ul className="mt-6 space-y-3">
              {links.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-on-dark/85 transition-colors hover:text-brass">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-on-dark-muted">Contact</p>
            <ul className="mt-6 space-y-3 text-on-dark/85">
              <li><Field value={company.phone} /></li>
              <li><Field value={company.email} /></li>
              <li><Field value={company.address} /></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow text-on-dark-muted">Follow</p>
            <ul className="mt-6 space-y-3">
              {company.social.map((s) => (
                <li key={s.label}><a href={s.href} className="text-on-dark/85 transition-colors hover:text-brass"><Field value={s.label} /></a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-24 flex flex-col gap-4 border-t border-line-dark pt-8 text-sm text-on-dark-muted md:flex-row md:justify-between">
          <p>© 2026 Bhuvana Exports. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-on-dark">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-on-dark">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
