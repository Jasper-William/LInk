import type { GlobalConfig } from "payload";
import { globalAccess } from "../access";

export const SeoSettings: GlobalConfig = {
  slug: "seo-settings",
  label: "SEO 设置",
  access: globalAccess,
  admin: { group: "页面设置" },
  fields: [
    { name: "title", type: "text", label: "网站标题", maxLength: 65 },
    { name: "description", type: "textarea", label: "网站说明", maxLength: 170 },
    { name: "ogImage", type: "upload", relationTo: "media", label: "分享预览图片" },
  ],
};
