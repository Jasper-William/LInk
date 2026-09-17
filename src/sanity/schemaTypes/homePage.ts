import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage", title: "首页设置", type: "document",
  initialValue: {
    heroEyebrow: "人才推动智能实体向前", heroTitle: "为更具行动力的物理世界，\n找到对的人才。", heroDescription: "LINK-HR 邻客咨询是一家专注于具身智能与机器人领域的高端人才寻访与人才咨询机构，帮助前瞻企业组建定义下一阶段竞争力的团队。", heroCta: "与我们合作",
    focusEyebrow: "我们的专注领域", focusTitle: "站在具身智能背后的团队。", focusDescription: "我们与行业领军企业、科研实验室和高潜团队合作，覆盖机器人与 AI 生态。",
    teamEyebrow: "我们的团队", teamTitle: "全球视野，共同信念。", teamDescription: "我们是一支兼具产业理解与长期主义视角的多元团队。",
    ctaEyebrow: "更长远的视角", ctaTitle: "用对的人，\n构建更强的未来。", ctaButton: "开启沟通",
  },
  fields: [
    defineField({ name: "heroEyebrow", title: "首页小标题", type: "string" }),
    defineField({ name: "heroTitle", title: "首页主标题", type: "text", rows: 3 }),
    defineField({ name: "heroDescription", title: "首页说明文字", type: "text", rows: 4 }),
    defineField({ name: "heroCta", title: "首页按钮文字", type: "string" }),
    defineField({ name: "heroImage", title: "首页机器人图片", type: "image", options: { hotspot: true }, description: "建议使用横向、浅色背景、主体在右侧的高质量图片。" }),
    defineField({ name: "focusEyebrow", title: "专注领域小标题", type: "string" }),
    defineField({ name: "focusTitle", title: "专注领域标题", type: "string" }),
    defineField({ name: "focusDescription", title: "专注领域说明", type: "text", rows: 3 }),
    defineField({ name: "teamEyebrow", title: "团队小标题", type: "string" }),
    defineField({ name: "teamTitle", title: "团队标题", type: "string" }),
    defineField({ name: "teamDescription", title: "团队说明", type: "text", rows: 3 }),
    defineField({ name: "ctaEyebrow", title: "最终区域小标题", type: "string" }),
    defineField({ name: "ctaTitle", title: "最终区域标题", type: "text", rows: 2 }),
    defineField({ name: "ctaButton", title: "最终区域按钮文字", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "首页设置" }) },
});
