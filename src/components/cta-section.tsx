import Link from "next/link";
import { siteCopy } from "@/data/fallback";
import { Reveal } from "./reveal";

export function CTASection({ content = siteCopy.cta }: { content?: typeof siteCopy.cta }) {
  return <section className="cta-section"><Reveal className="shell cta-inner"><p className="eyebrow">{content.eyebrow}</p><h2>{content.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><Link className="button button-dark" href="/contact">{content.button}<span aria-hidden="true">↗</span></Link></Reveal></section>;
}
