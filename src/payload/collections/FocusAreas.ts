import type { CollectionConfig } from "payload";
import { authenticated, publicRead } from "../access";

export const FocusAreas: CollectionConfig = {
  slug: "focus-areas",
  labels: { singular: "专注领域", plural: "我们的专注" },
  access: {
    read: publicRead,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    group: "内容管理",
    useAsTitle: "title",
    defaultColumns: ["number", "title", "order"],
  },
  defaultSort: "order",
  fields: [
    { name: "number", type: "text", label: "编号", required: true },
    { name: "title", type: "text", label: "领域名称", required: true },
    { name: "description", type: "textarea", label: "领域介绍" },
    {
      name: "items",
      type: "array",
      label: "子方向",
      required: true,
      fields: [{ name: "item", type: "text", label: "子方向", required: true }],
    },
    { name: "order", type: "number", label: "显示顺序", defaultValue: 0 },
  ],
};
