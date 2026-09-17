import { defineField, defineType } from "sanity";
export const contactSettings = defineType({ name: "contactSettings", title: "联系方式", type: "document", fields: [
  defineField({ name: "email", title: "联系邮箱", type: "string" }), defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
  defineField({ name: "cities", title: "办公城市或服务范围", type: "string" }), defineField({ name: "note", title: "联系说明", type: "text", rows: 3 }),
], preview: { prepare: () => ({ title: "联系方式" }) } });
