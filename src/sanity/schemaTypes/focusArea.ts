import { defineField, defineType } from "sanity";
export const focusArea = defineType({ name: "focusArea", title: "我们的专注", type: "document", fields: [
  defineField({ name: "number", title: "编号", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "title", title: "领域名称", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "description", title: "领域介绍", type: "text", rows: 3 }),
  defineField({ name: "items", title: "子方向", type: "array", of: [{ type: "string" }], validation: (rule) => rule.required() }),
  defineField({ name: "order", title: "显示顺序", type: "number", description: "数字越小越靠前。" }),
], preview: { select: { title: "title", subtitle: "number" } } });
