import { defineArrayMember, defineField, defineType } from "sanity";
export const approachSettings = defineType({ name: "approachSettings", title: "服务方式", type: "document", initialValue: { eyebrow: "我们的方式", title: "私密。\n专注。\n为下一步而建。", description: "从人才 Mapping 到最终录用，再到入职后的长期跟踪，我们以高度保密的标准提供端到端人才服务。", cta: "了解我们的方式", steps: [{ _type: "step", number: "01", title: "理解", description: "深入理解行业、组织、岗位与业务阶段，定义真实的人才需求。" }, { _type: "step", number: "02", title: "交付", description: "通过行业 Mapping、定向寻访与专业评估，触达真正匹配且难以接触的人才。" }, { _type: "step", number: "03", title: "陪伴", description: "覆盖沟通、面试、Offer、入职及后续跟踪，不止于一次招聘。" }] }, fields: [
  defineField({ name: "eyebrow", title: "小标题", type: "string" }), defineField({ name: "title", title: "主标题", type: "text", rows: 3 }),
  defineField({ name: "description", title: "说明文字", type: "text", rows: 4 }), defineField({ name: "cta", title: "按钮文字", type: "string" }),
  defineField({ name: "steps", title: "三个服务步骤", type: "array", validation: (rule) => rule.max(3), of: [defineArrayMember({ type: "object", name: "step", title: "服务步骤", fields: [
    defineField({ name: "number", title: "编号", type: "string" }), defineField({ name: "title", title: "步骤名称", type: "string" }), defineField({ name: "description", title: "步骤说明", type: "text", rows: 3 }),
  ], preview: { select: { title: "title", subtitle: "number" } } })] }),
], preview: { prepare: () => ({ title: "服务方式" }) } });
