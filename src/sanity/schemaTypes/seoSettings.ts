import { defineField, defineType } from "sanity";
export const seoSettings = defineType({ name: "seoSettings", title: "SEO 设置", type: "document", fields: [
  defineField({ name: "title", title: "网站标题", type: "string", validation: (rule) => rule.max(65) }),
  defineField({ name: "description", title: "网站说明", type: "text", rows: 3, validation: (rule) => rule.max(170) }),
  defineField({ name: "ogImage", title: "分享预览图片", type: "image", description: "建议尺寸 1200 × 630 像素。" }),
], preview: { prepare: () => ({ title: "SEO 设置" }) } });
