import type { GlobalConfig } from "payload";
import { globalAccess } from "../access";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
  label: "关于我们",
  access: globalAccess,
  admin: { group: "页面设置" },
  fields: [
    { name: "eyebrow", type: "text", label: "页面小标题" },
    { name: "title", type: "textarea", label: "页面主标题" },
    { name: "lead", type: "textarea", label: "公司介绍" },
    { name: "sectionTitle", type: "textarea", label: "品牌理念标题" },
    {
      name: "paragraphs",
      type: "array",
      label: "服务与品牌介绍",
      fields: [{ name: "text", type: "textarea", label: "段落", required: true }],
    },
  ],
};
