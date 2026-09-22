import config from "@payload-config";
import { getPayload } from "payload";
import {
  approachSteps,
  contactInfo,
  focusAreas,
  placeholderTeam,
  siteCopy,
  type ApproachStep,
  type FocusArea,
  type TeamMember,
} from "@/data/fallback";

type MediaValue = { url?: string | null } | number | string | null | undefined;

const hasDatabase = Boolean(process.env.DATABASE_URL);

async function payloadClient() {
  if (!hasDatabase) return null;
  try {
    return await getPayload({ config });
  } catch (error) {
    console.error("[Payload] 初始化失败，公开页面将使用静态备用内容。", error);
    return null;
  }
}

function mediaURL(value: MediaValue) {
  return typeof value === "object" && value?.url ? value.url : undefined;
}

export async function getHomepageData() {
  const payload = await payloadClient();

  if (!payload) {
    return {
      hero: { ...siteCopy.hero, imageUrl: "/images/robotic-hand-hero.jpg" },
      focusIntro: siteCopy.focus,
      focusAreas,
      approach: siteCopy.approach,
      approachSteps,
      teamIntro: siteCopy.team,
      team: placeholderTeam,
      cta: siteCopy.cta,
    };
  }

  try {
    const [home, focusResult, approach, team] = await Promise.all([
      payload.findGlobal({ slug: "home-page", depth: 1 }),
      payload.find({ collection: "focus-areas", sort: "order", limit: 100 }),
      payload.findGlobal({ slug: "approach-settings" }),
      getTeamMembers(),
    ]);

    const managedFocus: FocusArea[] = focusResult.docs.map((item) => ({
      number: item.number,
      title: item.title,
      description: item.description || undefined,
      items: item.items?.map((entry) => entry.item) || [],
    }));

    const managedSteps: ApproachStep[] =
      approach.steps?.map((step) => ({
        number: step.number,
        title: step.title,
        description: step.description,
      })) || [];

    return {
      hero: {
        ...siteCopy.hero,
        eyebrow: home.heroEyebrow || siteCopy.hero.eyebrow,
        title: home.heroTitle || siteCopy.hero.title,
        description: home.heroDescription || siteCopy.hero.description,
        cta: home.heroCta || siteCopy.hero.cta,
        imageUrl: mediaURL(home.heroImage) || "/images/robotic-hand-hero.jpg",
      },
      focusIntro: {
        ...siteCopy.focus,
        eyebrow: home.focusEyebrow || siteCopy.focus.eyebrow,
        title: home.focusTitle || siteCopy.focus.title,
        description: home.focusDescription || siteCopy.focus.description,
      },
      focusAreas: managedFocus.length ? managedFocus : focusAreas,
      approach: {
        ...siteCopy.approach,
        eyebrow: approach.eyebrow || siteCopy.approach.eyebrow,
        title: approach.title || siteCopy.approach.title,
        description: approach.description || siteCopy.approach.description,
        cta: approach.cta || siteCopy.approach.cta,
      },
      approachSteps: managedSteps.length ? managedSteps : approachSteps,
      teamIntro: {
        ...siteCopy.team,
        eyebrow: home.teamEyebrow || siteCopy.team.eyebrow,
        title: home.teamTitle || siteCopy.team.title,
        description: home.teamDescription || siteCopy.team.description,
      },
      team,
      cta: {
        ...siteCopy.cta,
        eyebrow: home.ctaEyebrow || siteCopy.cta.eyebrow,
        title: home.ctaTitle || siteCopy.cta.title,
        button: home.ctaButton || siteCopy.cta.button,
      },
    };
  } catch (error) {
    console.error("[Payload] 首页内容读取失败，正在使用静态备用内容。", error);
    return {
      hero: { ...siteCopy.hero, imageUrl: "/images/robotic-hand-hero.jpg" },
      focusIntro: siteCopy.focus,
      focusAreas,
      approach: siteCopy.approach,
      approachSteps,
      teamIntro: siteCopy.team,
      team: placeholderTeam,
      cta: siteCopy.cta,
    };
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const payload = await payloadClient();
  if (!payload) return placeholderTeam;

  try {
    const result = await payload.find({
      collection: "team-members",
      where: { visible: { not_equals: false } },
      sort: "order",
      depth: 1,
      limit: 100,
    });

    const members = result.docs.map((item) => ({
      name: item.name,
      role: item.role,
      slug: item.slug,
      bio: item.bio || "",
      linkedin: item.linkedin || undefined,
      email: item.email || undefined,
      imageUrl: mediaURL(item.photo),
    }));

    return members.length ? members : placeholderTeam;
  } catch (error) {
    console.error("[Payload] 团队内容读取失败，正在使用静态备用内容。", error);
    return placeholderTeam;
  }
}

export async function getAboutContent() {
  const payload = await payloadClient();
  if (!payload) return null;
  try {
    const result = await payload.findGlobal({ slug: "about-page" });
    return {
      eyebrow: result.eyebrow || undefined,
      title: result.title || undefined,
      lead: result.lead || undefined,
      sectionTitle: result.sectionTitle || undefined,
      paragraphs: result.paragraphs?.map((item) => item.text) || undefined,
    };
  } catch (error) {
    console.error("[Payload] 关于我们读取失败，正在使用静态备用内容。", error);
    return null;
  }
}

export async function getContactContent() {
  const payload = await payloadClient();
  if (!payload) return contactInfo;
  try {
    const result = await payload.findGlobal({ slug: "contact-settings" });
    return {
      ...contactInfo,
      email: result.email || contactInfo.email,
      linkedin: result.linkedin || contactInfo.linkedin,
      cities: result.cities || contactInfo.cities,
    };
  } catch (error) {
    console.error("[Payload] 联系方式读取失败，正在使用静态备用内容。", error);
    return contactInfo;
  }
}

export async function getSeoContent() {
  const payload = await payloadClient();
  if (!payload) return null;
  try {
    const result = await payload.findGlobal({ slug: "seo-settings", depth: 1 });
    return {
      title: result.title || undefined,
      description: result.description || undefined,
      ogImageUrl: mediaURL(result.ogImage),
    };
  } catch (error) {
    console.error("[Payload] SEO 设置读取失败，正在使用静态备用内容。", error);
    return null;
  }
}
