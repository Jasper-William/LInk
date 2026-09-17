import Link from "next/link";
import { siteCopy } from "@/data/fallback";
import { Reveal } from "./reveal";
import { TeamCarousel } from "./team-carousel";
import type { TeamMember } from "@/data/fallback";

export function TeamSection({ intro = siteCopy.team, members }: { intro?: typeof siteCopy.team; members?: TeamMember[] }) {
  return <section className="section team-section"><div className="shell"><Reveal className="section-heading split-heading team-heading"><div><p className="eyebrow">{intro.eyebrow}</p><h2>{intro.title}</h2></div><p>{intro.description}</p></Reveal><TeamCarousel members={members} /><Link className="text-link" href="/team">认识我们的团队 <span aria-hidden="true">↗</span></Link></div></section>;
}
