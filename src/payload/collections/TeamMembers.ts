import type { CollectionConfig } from "payload";
import { isAuthenticated, publicRead } from "../access";

const slugify = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  labels: { singular: "团队成员", plural: "团队管理" },
  access: {
    read: publicRead,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  admin: {
    group: "内容管理",
    useAsTitle: "name",
    defaultColumns: ["name", "role", "visible", "order"],
  },
  defaultSort: "order",
  fields: [
    { name: "name", type: "text", label: "姓名", required: true },
    {
      name: "slug",
      type: "text",
      label: "个人页面地址",
      required: true,
      unique: true,
      index: true,
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => value || slugify(String(siblingData?.name || "member")),
        ],
      },
    },
    { name: "role", type: "text", label: "职位", required: true },
    { name: "photo", type: "upload", relationTo: "media", label: "头像" },
    { name: "bio", type: "textarea", label: "个人简介" },
    { name: "linkedin", type: "text", label: "LinkedIn" },
    { name: "email", type: "email", label: "Email" },
    { name: "order", type: "number", label: "显示顺序", defaultValue: 0 },
    { name: "visible", type: "checkbox", label: "是否显示", defaultValue: true },
  ],
};
