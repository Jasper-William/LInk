import type { CollectionConfig } from "payload";
import { isAuthenticated, publicRead } from "../access";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "图片", plural: "媒体库" },
  access: {
    read: publicRead,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  admin: {
    group: "内容管理",
    useAsTitle: "alt",
  },
  upload: {
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "图片说明",
      required: true,
    },
  ],
};
