/**
 * Bhuvana Exports — central content configuration.
 *
 * Every value wrapped in square brackets, e.g. "[Phone Number]", is a
 * placeholder. The UI renders these as a discreet "to be confirmed" note
 * instead of exposing bracket syntax. Replace the string with verified
 * information and it will display as normal text everywhere.
 */
import hero from "@/assets/hero.jpg";
import hands from "@/assets/hands.jpg";
import texture from "@/assets/texture.jpg";
import hides from "@/assets/hides.jpg";
import goods from "@/assets/goods.jpg";
import stitching from "@/assets/stitching.jpg";
import industrial from "@/assets/industrial.jpg";
import inspection from "@/assets/inspection.jpg";
import founder from "@/assets/founder.jpg";

export const images = { hero, hands, texture, hides, goods, stitching, industrial, inspection, founder };

export const isPlaceholder = (v: string) => v.trim().startsWith("[") && v.trim().endsWith("]");
export const placeholderLabel = (v: string) => v.trim().replace(/^\[|\]$/g, "");

export const company = {
  name: "Bhuvana Exports",
  tagline: "Leather Manufacturing & Export",
  founder: "Naresh",
  phone: "[+91 XXXXX XXXXX]",
  email: "[info@bhuvanaexports.com]",
  address: "[Business Address]",
  website: "[Website]",
  location: "[City, India]",
  yearsOfExperience: "[Years of Experience]",
  description:
    "Bhuvana Exports is a leather-focused export business built around craftsmanship, consistency and dependable business relationships. Founded and led by Naresh, the company works to connect quality leather products with buyers and businesses across international markets.",
  mission: "[Company Mission Statement]",
  vision: "[Company Vision Statement]",
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "[Other Profile]", href: "#" },
  ],
};

export const values = [
  { title: "Craftsmanship", text: "Respect for the material and for the skill required to work it well, at every stage of handling." },
  { title: "Consistency", text: "Clear specifications and repeatable standards, so each order meets the expectations set by the last." },
  { title: "Reliability", text: "Straightforward communication, realistic commitments and dependable follow-through for every buyer." },
  { title: "Global Standards", text: "Working towards the quality, documentation and packaging expectations of international markets." },
];

export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  specifications: string;
  applications: string;
  markets: string;
};

export const products: Product[] = [
  { slug: "finished-leather", name: "Finished Leather", image: hero, short: "Finished leathers prepared for goods manufacturers.", description: "[Product Description] — finished leather in a range of grains, finishes and colours, prepared to buyer specifications.", specifications: "[Thickness, finish, colour range]", applications: "[Footwear, bags, upholstery]", markets: "[Export Markets]" },
  { slug: "leather-hides", name: "Leather Hides", image: hides, short: "Selected hides sourced and graded with care.", description: "[Product Description] — hides selected, graded and inspected before dispatch.", specifications: "[Grade, size, substance]", applications: "[Tanneries, processors]", markets: "[Export Markets]" },
  { slug: "leather-goods", name: "Leather Goods", image: goods, short: "Finished goods made with attention to detail.", description: "[Product Description] — finished leather goods produced to agreed designs and quality levels.", specifications: "[Product types, materials, finishing]", applications: "[Retail, private label, corporate]", markets: "[Export Markets]" },
  { slug: "industrial-leather", name: "Industrial Leather", image: industrial, short: "Durable leathers for demanding applications.", description: "[Product Description] — heavier leathers suited to industrial and functional uses.", specifications: "[Substance, tensile requirements]", applications: "[Belting, safety, equipment]", markets: "[Export Markets]" },
  { slug: "custom-requirements", name: "Custom Requirements", image: stitching, short: "Leather sourced or made to your specification.", description: "[Product Description] — tailored requirements discussed and agreed directly with each buyer.", specifications: "[Agreed with buyer]", applications: "[As required]", markets: "[Export Markets]" },
  { slug: "export-solutions", name: "Export Solutions", image: inspection, short: "Inspection, packing and documentation support.", description: "[Service Description] — support with inspection, packing and export documentation for each shipment.", specifications: "[Packing standards, documentation]", applications: "[All product lines]", markets: "[Export Markets]" },
];

export const process = [
  { title: "Sourcing", text: "Identifying suitable material for each requirement." },
  { title: "Selection & Inspection", text: "Grading and checking material before work begins." },
  { title: "Processing", text: "Preparing and finishing to the agreed specification." },
  { title: "Quality Control", text: "Checks against specification before packing." },
  { title: "Export & Delivery", text: "Packing, documentation and coordinated dispatch." },
];

export const qualityItems = [
  { title: "Quality Standards", value: "[Quality Standards]" },
  { title: "Inspection Process", value: "[Inspection Process]" },
  { title: "Certifications", value: "[Certification Name]" },
  { title: "Compliance", value: "[Compliance Details]" },
  { title: "Packaging", value: "[Packaging Standards]" },
  { title: "Export Documentation", value: "[Documentation Provided]" },
];

export const markets = [
  { name: "India", note: "Base of operations", x: 69.5, y: 47 },
  { name: "[Export Market]", note: "", x: 49, y: 28 },
  { name: "[Export Market]", note: "", x: 25, y: 33 },
  { name: "[Export Market]", note: "", x: 62, y: 42 },
];

export const advantages = [
  { title: "Consistent Quality", text: "Agreed specifications applied with care, order after order." },
  { title: "Reliable Communication", text: "Direct, timely updates from enquiry to delivery." },
  { title: "Export-Focused Operations", text: "Processes organised around the needs of international buyers." },
  { title: "Flexible Requirements", text: "Open to discussing volumes, finishes and custom specifications." },
  { title: "Attention to Detail", text: "Small details checked, because they matter to the final product." },
  { title: "Long-Term Relationships", text: "A preference for steady partnerships over one-off transactions." },
];

export type TeamMember = { name: string; role: string; bio: string; image?: string };

export const team: TeamMember[] = [
  { name: "Naresh", role: "Founder / Owner", image: founder, bio: "Naresh leads Bhuvana Exports with a focus on building reliable business relationships and delivering consistent leather solutions for export markets." },
  { name: "[Team Member]", role: "[Role]", bio: "[Short biography]" },
  { name: "[Team Member]", role: "[Role]", bio: "[Short biography]" },
];

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  client: string;
  market: string;
  year: string;
  scope: string;
  short: string;
  hero: string;
  gallery: string[];
  overview: string;
  challenge: string;
  approach: string;
  material: string;
  processText: string;
  quality: string;
  result: string;
  specs: { label: string; value: string }[];
};

const projectBase = (n: number, name: string, category: string, heroImg: string, gallery: string[]): Project => ({
  slug: `project-${String(n).padStart(2, "0")}`,
  number: String(n).padStart(2, "0"),
  name,
  category,
  client: "[Client Name]",
  market: "[Country / Region]",
  year: "[Year]",
  scope: "[Project Scope]",
  short: "[Short project description summarising the requirement and outcome.]",
  hero: heroImg,
  gallery,
  overview: "[Project overview — a short introduction to the buyer, the requirement and why it mattered.]",
  challenge: "[The challenge — specification, timeline or market requirements the project needed to meet.]",
  approach: "[Our approach — how the requirement was understood, planned and agreed with the buyer.]",
  material: "[Leather / material details — type, grade, finish, thickness and colour.]",
  processText: "[Production or sourcing process — the key stages followed for this order.]",
  quality: "[Quality control — the checks carried out before packing and dispatch.]",
  result: "[Final outcome — what was delivered and how the project concluded.]",
  specs: [
    { label: "Material", value: "[Material]" },
    { label: "Finish", value: "[Finish]" },
    { label: "Quantity", value: "[Quantity]" },
    { label: "Packaging", value: "[Packaging]" },
    { label: "Lead Time", value: "[Lead Time]" },
    { label: "Destination", value: "[Destination]" },
  ],
});

export const projects: Project[] = [
  projectBase(1, "Premium Leather Supply", "Leather Export", hero, [hides, texture, inspection]),
  projectBase(2, "[Project Name]", "[Category]", stitching, [hands, goods, texture]),
  projectBase(3, "[Project Name]", "[Category]", industrial, [hides, inspection, hands]),
];

export const nav = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/team", label: "Our Team" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;
