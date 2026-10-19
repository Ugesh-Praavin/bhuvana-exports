# Bhuvana Exports — Premium Leather Export Website

A quiet-luxury, editorial website for Bhuvana Exports (founder: Naresh). Typography, photography, whitespace and restraint do the work: no gradients, glass, emoji, icons-as-decoration, rounded cards or invented claims.

## Pages
1. **Home** — Hero, About intro, Values (01–04), What We Work With (6 image tiles), From Material to Market (5-step timeline), Quality, Featured Projects, Global Export (subtle dotted world map, placeholder markets), Our Team, Why Bhuvana Exports, Contact CTA.
2. **About** — Hero, Company Story, Founder (Naresh), Philosophy, Values, Capabilities, Quality Approach, Global Vision, CTA.
3. **Products** — Alternating large image/text sections per category with Specifications / Applications / Markets placeholders and "Enquire About This Product" (opens the contact page with that product selected).
4. **Projects** — Case-study archive: large images, number, name, category, market, year, short description.
5. **Project Detail** — Hero image, metadata, Overview, Challenge, Approach, Material Details, Process, Quality Control, Result, Gallery, Specifications, Enquiry CTA, Related Projects. Three placeholder projects to start.
6. **Our Team** — Editorial portrait layout: Naresh plus two placeholder members.
7. **Contact** — Contact details, full enquiry form (Name, Company, Email, Phone, Country, Requirement, Message) with validation and clear success/error states.
Plus simple Privacy Policy and Terms placeholder pages linked from the footer.

## Visual direction
- Palette: warm ivory background, natural cream, deep espresso dark sections, charcoal text, muted tan, cognac accent, a trace of brass for thin rules.
- Type: Cormorant Garamond (serif headlines, light weights, tight leading) + Hanken Grotesk (body/navigation), small tracked uppercase labels.
- Layout: wide margins, asymmetric editorial grids, full-bleed photo bands, thin hairline separators, square image edges.
- Motion: slow fade/rise reveals on scroll, image mask reveals in the hero, 1.03 scale on image hover, navigation that changes from transparent to solid on scroll. Respects reduced-motion.
- Photography: about 14 generated, natural-light editorial photos (hides, tannery floor, hands cutting/stitching, texture close-ups, export crating, a neutral founder portrait placeholder).

## Placeholder content system
One content file holding company name, founder, phone, email, address, website, social links, description, mission, vision, products and specifications, markets, certifications, quality standards, team and projects. Visitors see neat, styled "To be confirmed" values instead of bracket syntax. No fake statistics, clients, certifications or years.

## Enquiries
Form submissions are saved with Lovable Cloud so they can be reviewed later (email notifications can be added afterwards).

## Technical details
- Stack: TanStack Start + React + TypeScript + Tailwind v4 (Next.js is not available on this platform; same production qualities: server rendering, per-page metadata).
- Routes: `/`, `/about`, `/products`, `/projects`, `/projects/$slug`, `/team`, `/contact`, `/privacy`, `/terms`.
- Reusable components: Navbar, Footer, SectionLabel/Heading, EditorialImage, Reveal, ProjectCard, ProductSection, ProcessTimeline, WorldMap (inline SVG dots), ContactForm, Button.
- Data in `src/content/site.ts`, products and projects arrays drive all listings.
- Form: zod validation client and server; a server function inserts into an `enquiries` table (insert-only for the public).
- SEO: per-route head() titles/descriptions/OG/Twitter, canonical tags, robots.txt; the sitemap waits until the site has a public address.
- Images lazy-loaded except the hero; no animation libraries (IntersectionObserver + CSS).
