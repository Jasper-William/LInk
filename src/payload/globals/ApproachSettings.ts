import type { GlobalConfig } from "payload";
import { globalAccess } from "../access";

export const ApproachSettings: GlobalConfig = {
  slug: "approach-settings",
  label: "服务方式",
  access: globalAccess,
  admin: { group: "页面设置" },
  fields: [
    { name: "eyebrow", type: "text", label: "小标题", defaultValue: "我们的方式" },
    { name: "title", type: "textarea", label: "主标题", defaultValue: "私密。\n专注。\n为下一步而建。" },
    { name: "description", type: "textarea", label: "说明文字", defaultValue: "从人才 Mapping 到最终录用，再到入职后的长期跟踪，我们以高度保密的标准提供端到端人才服务。" },
    { name: "cta", type: "text", label: "按钮文字", defaultValue: "了解我们的方式" },
    {
      name: "steps",
      type: "array",
      label: "三个服务步骤",
      maxRows: 3,
      defaultValue: [
        { number: "01", title: "理解", description: "深入理解行业、组织、岗位与业务阶段，定义真实的人才需求。" },
        { number: "02", title: "交付", description: "通过行业 Mapping、定向寻访与专业评估，触达真正匹配且难以接触的人才。" },
        { number: "03", title: "陪伴", description: "覆盖沟通、面试、Offer、入职及后续跟踪，不止于一次招聘。" },
      ],
      fields: [
        { name: "number", type: "text", label: "编号", required: true },
        { name: "title", type: "text", label: "步骤名称", required: true },
        { name: "description", type: "textarea", label: "步骤说明", required: true },
      ],
    },
  ],
};
