import Link from "next/link";
import { approachSteps as fallbackSteps, siteCopy, type ApproachStep } from "@/data/fallback";
import { Reveal } from "./reveal";

export function ApproachSection({ approach = siteCopy.approach, steps = fallbackSteps }: { approach?: typeof siteCopy.approach; steps?: ApproachStep[] }) {
  return (
    <section className="section approach-section"><div className="shell approach-grid">
      <Reveal className="approach-intro"><p className="eyebrow eyebrow-light">{approach.eyebrow}</p><h2>{approach.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{approach.description}</p><Link className="button button-light" href="/approach">{approach.cta}<span aria-hidden="true">→</span></Link></Reveal>
      <div className="approach-steps">{steps.map((step) => <Reveal className="approach-step" key={`${step.number}-${step.title}`}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></Reveal>)}</div>
    </div></section>
  );
}
