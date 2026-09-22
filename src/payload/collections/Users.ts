import type { CollectionConfig } from "payload";
import { isAuthenticated } from "../access";

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "管理员", plural: "管理员" },
  auth: true,
  access: {
    admin: isAuthenticated,
    create: isAuthenticated,
    read: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  admin: {
    group: "系统管理",
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "姓名",
    },
  ],
};
