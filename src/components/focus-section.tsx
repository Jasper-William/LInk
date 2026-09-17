import Link from "next/link";
import { focusAreas as fallbackAreas, siteCopy, type FocusArea } from "@/data/fallback";
import { Reveal } from "./reveal";

export function FocusSection({ intro = siteCopy.focus, areas = fallbackAreas }: { intro?: typeof siteCopy.focus; areas?: FocusArea[] }) {
  return (
    <section className="section focus-section" id="focus"><div className="shell">
      <Reveal className="section-heading split-heading"><div><p className="eyebrow">{intro.eyebrow}</p><h2>{intro.title}</h2></div><p>{intro.description}</p></Reveal>
      <div className="focus-grid">{areas.map((area) => <Reveal className="focus-column" key={`${area.number}-${area.title}`}><span className="index">{area.number}</span><h3>{area.title}</h3><ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>)}</div>
      <Link className="text-link" href="/focus">深入了解专注领域 <span aria-hidden="true">↗</span></Link>
    </div></section>
  );
}
