import { defineField, defineType } from "sanity";
export const aboutPage = defineType({ name: "aboutPage", title: "关于我们", type: "document", fields: [
  defineField({ name: "eyebrow", title: "页面小标题", type: "string" }), defineField({ name: "title", title: "页面主标题", type: "text", rows: 3 }),
  defineField({ name: "lead", title: "公司介绍", type: "text", rows: 5 }), defineField({ name: "sectionTitle", title: "品牌理念标题", type: "text", rows: 3 }),
  defineField({ name: "paragraphs", title: "服务与品牌介绍", type: "array", of: [{ type: "text", rows: 4 }] }),
], preview: { prepare: () => ({ title: "关于我们" }) } });
