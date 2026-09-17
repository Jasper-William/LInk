export type FocusArea = { number: string; title: string; description?: string; items: string[] };
export type ApproachStep = { number: string; title: string; description: string };
export type TeamMember = { name: string; role: string; slug: string; bio: string; linkedin?: string; email?: string; imageUrl?: string };

export const siteCopy = {
  hero: {
    eyebrow: "人才推动智能实体向前",
    title: "为更具行动力的物理世界，\n找到对的人才。",
    description: "LINK-HR 邻客咨询是一家专注于具身智能与机器人领域的高端人才寻访与人才咨询机构，帮助前瞻企业组建定义下一阶段竞争力的团队。",
    cta: "与我们合作",
  },
  focus: {
    eyebrow: "我们的专注领域",
    title: "站在具身智能背后的团队。",
    description: "我们与行业领军企业、科研实验室和高潜团队合作，覆盖机器人与 AI 生态。",
  },
  approach: {
    eyebrow: "我们的方式",
    title: "私密。\n专注。\n为下一步而建。",
    description: "从人才 Mapping 到最终录用，再到入职后的长期跟踪，我们以高度保密的标准提供端到端人才服务。",
    cta: "了解我们的方式",
  },
  team: {
    eyebrow: "我们的团队",
    title: "全球视野，共同信念。",
    description: "我们是一支兼具产业理解与长期主义视角的多元团队。",
  },
  cta: { eyebrow: "更长远的视角", title: "用对的人，\n构建更强的未来。", button: "开启沟通" },
};

export const focusAreas: FocusArea[] = [
  { number: "01", title: "机器人与具身智能", items: ["人形机器人", "灵巧操作", "运动控制", "感知与 SLAM"] },
  { number: "02", title: "AI 基础设施", items: ["基础模型", "VLA / World Model", "仿真与数据", "边缘计算", "面向物理系统的 AI"] },
  { number: "03", title: "核心工程", items: ["机械", "电子", "嵌入式", "软件", "系统集成"] },
  { number: "04", title: "领导力与战略", items: ["CTO / VP / Director", "技术创始人", "研发负责人", "核心技术专家", "跨职能核心人才"] },
];

export const approachSteps: ApproachStep[] = [
  { number: "01", title: "理解", description: "深入理解行业、组织、岗位与业务阶段，定义真实的人才需求。" },
  { number: "02", title: "交付", description: "通过行业 Mapping、定向寻访与专业评估，触达真正匹配且难以接触的人才。" },
  { number: "03", title: "陪伴", description: "覆盖沟通、面试、Offer、入职及后续跟踪，不止于一次招聘。" },
];

export const placeholderTeam: TeamMember[] = [
  { name: "团队成员", role: "职位待更新", slug: "member-1", bio: "该团队成员的信息将在获得本人授权后由管理员更新。" },
  { name: "团队成员", role: "职位待更新", slug: "member-2", bio: "该团队成员的信息将在获得本人授权后由管理员更新。" },
  { name: "团队成员", role: "职位待更新", slug: "member-3", bio: "该团队成员的信息将在获得本人授权后由管理员更新。" },
  { name: "团队成员", role: "职位待更新", slug: "member-4", bio: "该团队成员的信息将在获得本人授权后由管理员更新。" },
];

export const contactInfo = { email: "contact@link-hr.com", linkedin: "https://www.linkedin.com", cities: "中国 · 服务全球" };
