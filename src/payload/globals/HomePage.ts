import type { GlobalConfig } from "payload";
import { globalAccess } from "../access";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "首页设置",
  access: globalAccess,
  admin: { group: "页面设置" },
  fields: [
    { name: "heroEyebrow", type: "text", label: "首页小标题", defaultValue: "人才推动智能实体向前" },
    { name: "heroTitle", type: "textarea", label: "首页主标题", defaultValue: "为更具行动力的物理世界，\n找到对的人才。" },
    { name: "heroDescription", type: "textarea", label: "首页副标题", defaultValue: "LINK-HR 邻客咨询是一家专注于具身智能与机器人领域的高端人才寻访与人才咨询机构，帮助前瞻企业组建定义下一阶段竞争力的团队。" },
    { name: "heroCta", type: "text", label: "首页按钮文字", defaultValue: "与我们合作" },
    { name: "heroImage", type: "upload", relationTo: "media", label: "Hero 图片" },
    { name: "focusEyebrow", type: "text", label: "专注领域小标题", defaultValue: "我们的专注领域" },
    { name: "focusTitle", type: "text", label: "专注领域标题", defaultValue: "站在具身智能背后的团队。" },
    { name: "focusDescription", type: "textarea", label: "专注领域说明", defaultValue: "我们与行业领军企业、科研实验室和高潜团队合作，覆盖机器人与 AI 生态。" },
    { name: "teamEyebrow", type: "text", label: "团队小标题", defaultValue: "我们的团队" },
    { name: "teamTitle", type: "text", label: "团队标题", defaultValue: "全球视野，共同信念。" },
    { name: "teamDescription", type: "textarea", label: "团队说明", defaultValue: "我们是一支兼具产业理解与长期主义视角的多元团队。" },
    { name: "ctaEyebrow", type: "text", label: "最终区域小标题", defaultValue: "更长远的视角" },
    { name: "ctaTitle", type: "textarea", label: "最终区域标题", defaultValue: "用对的人，\n构建更强的未来。" },
    { name: "ctaButton", type: "text", label: "最终区域按钮文字", defaultValue: "开启沟通" },
  ],
};
