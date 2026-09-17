import { ApproachSection } from "@/components/approach-section";
import { CTASection } from "@/components/cta-section";
import { FocusSection } from "@/components/focus-section";
import { Hero } from "@/components/hero";
import { TeamSection } from "@/components/team-section";
import { getHomepageData } from "@/sanity/lib/content";

export default async function HomePage() {
  const data = await getHomepageData();
  return <main><Hero hero={data.hero} /><FocusSection intro={data.focusIntro} areas={data.focusAreas} /><ApproachSection approach={data.approach} steps={data.approachSteps} /><TeamSection intro={data.teamIntro} members={data.team} /><CTASection content={data.cta} /></main>;
}
