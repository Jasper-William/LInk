import { defineField, defineType } from "sanity";
export const teamMember = defineType({ name: "teamMember", title: "团队管理", type: "document", fields: [
  defineField({ name: "name", title: "姓名", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "slug", title: "个人页面地址", type: "slug", options: { source: "name", maxLength: 80 }, description: "点击“生成”即可。", validation: (rule) => rule.required() }),
  defineField({ name: "role", title: "职位", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "photo", title: "照片", type: "image", options: { hotspot: true }, description: "建议上传黑白或低饱和竖版肖像，并确认已获得本人授权。" }),
  defineField({ name: "bio", title: "个人简介", type: "text", rows: 6 }), defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
  defineField({ name: "email", title: "Email", type: "string" }), defineField({ name: "order", title: "排序", type: "number", description: "数字越小越靠前。" }),
  defineField({ name: "visible", title: "是否显示", type: "boolean", initialValue: true }),
], preview: { select: { title: "name", subtitle: "role", media: "photo" } } });
