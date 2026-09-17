import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/data/fallback";

export function Hero({ hero = { ...siteCopy.hero, imageUrl: "/images/robotic-hand-hero.png" } }: { hero?: typeof siteCopy.hero & { imageUrl: string } }) {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-description">{hero.description}</p>
          <Link className="button button-dark" href="/contact">{hero.cta}<span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-visual"><Image src={hero.imageUrl} alt="白色与银色机械手的工业设计摄影" fill priority sizes="(max-width: 768px) 100vw, 58vw" /></div>
      </div>
      <a className="scroll-cue" href="#focus" aria-label="向下浏览"><span />浏览</a>
    </section>
  );
}
