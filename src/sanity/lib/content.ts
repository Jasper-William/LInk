import { approachSteps, contactInfo, focusAreas, placeholderTeam, siteCopy, type ApproachStep, type FocusArea, type TeamMember } from "@/data/fallback";
import { sanityClient } from "./client";

type HomeDocument = {
  heroEyebrow?: string; heroTitle?: string; heroDescription?: string; heroCta?: string; heroImageUrl?: string;
  focusEyebrow?: string; focusTitle?: string; focusDescription?: string;
  teamEyebrow?: string; teamTitle?: string; teamDescription?: string;
  ctaEyebrow?: string; ctaTitle?: string; ctaButton?: string;
};

async function fetchContent<T>(query: string): Promise<T | null> {
  if (!sanityClient) return null;
  try { return await sanityClient.fetch<T>(query, {}, { next: { revalidate: 60 } }); } catch { return null; }
}

export async function getHomepageData() {
  const [home, focus, approach, team] = await Promise.all([
    fetchContent<HomeDocument>(`*[_type == "homePage"][0]{heroEyebrow,heroTitle,heroDescription,heroCta,"heroImageUrl":heroImage.asset->url,focusEyebrow,focusTitle,focusDescription,teamEyebrow,teamTitle,teamDescription,ctaEyebrow,ctaTitle,ctaButton}`),
    fetchContent<FocusArea[]>(`*[_type == "focusArea"]|order(order asc){"number":coalesce(number,"01"),title,description,"items":items[]}`),
    fetchContent<{ eyebrow?: string; title?: string; description?: string; cta?: string; steps?: ApproachStep[] }>(`*[_type == "approachSettings"][0]{eyebrow,title,description,cta,"steps":steps[]{number,title,description}}`),
    getTeamMembers(),
  ]);
  return {
    hero: { ...siteCopy.hero, eyebrow: home?.heroEyebrow || siteCopy.hero.eyebrow, title: home?.heroTitle || siteCopy.hero.title, description: home?.heroDescription || siteCopy.hero.description, cta: home?.heroCta || siteCopy.hero.cta, imageUrl: home?.heroImageUrl || "/images/robotic-hand-hero.jpg" },
    focusIntro: { ...siteCopy.focus, eyebrow: home?.focusEyebrow || siteCopy.focus.eyebrow, title: home?.focusTitle || siteCopy.focus.title, description: home?.focusDescription || siteCopy.focus.description },
    focusAreas: focus?.length ? focus : focusAreas,
    approach: { ...siteCopy.approach, eyebrow: approach?.eyebrow || siteCopy.approach.eyebrow, title: approach?.title || siteCopy.approach.title, description: approach?.description || siteCopy.approach.description, cta: approach?.cta || siteCopy.approach.cta },
    approachSteps: approach?.steps?.length ? approach.steps : approachSteps,
    teamIntro: { ...siteCopy.team, eyebrow: home?.teamEyebrow || siteCopy.team.eyebrow, title: home?.teamTitle || siteCopy.team.title, description: home?.teamDescription || siteCopy.team.description },
    team,
    cta: { ...siteCopy.cta, eyebrow: home?.ctaEyebrow || siteCopy.cta.eyebrow, title: home?.ctaTitle || siteCopy.cta.title, button: home?.ctaButton || siteCopy.cta.button },
  };
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const team = await fetchContent<TeamMember[]>(`*[_type == "teamMember" && visible != false]|order(order asc){name,role,"slug":slug.current,bio,linkedin,email,"imageUrl":photo.asset->url}`);
  return team?.length ? team.filter((item) => item.name && item.slug) : placeholderTeam;
}

export async function getAboutContent() {
  const result = await fetchContent<{ eyebrow?: string; title?: string; lead?: string; sectionTitle?: string; paragraphs?: string[] }>(`*[_type == "aboutPage"][0]{eyebrow,title,lead,sectionTitle,paragraphs}`);
  return result;
}

export async function getContactContent() {
  const result = await fetchContent<{ email?: string; linkedin?: string; cities?: string }>(`*[_type == "contactSettings"][0]{email,linkedin,cities}`);
  return { ...contactInfo, ...result };
}

export async function getSeoContent() {
  return fetchContent<{ title?: string; description?: string; ogImageUrl?: string }>(`*[_type == "seoSettings"][0]{title,description,"ogImageUrl":ogImage.asset->url}`);
}
