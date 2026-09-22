import type { GlobalConfig } from "payload";
import { globalAccess } from "../access";

export const ContactSettings: GlobalConfig = {
  slug: "contact-settings",
  label: "联系方式",
  access: globalAccess,
  admin: { group: "页面设置" },
  fields: [
    { name: "email", type: "email", label: "联系邮箱" },
    { name: "linkedin", type: "text", label: "LinkedIn" },
    { name: "cities", type: "text", label: "办公城市或服务范围" },
    { name: "note", type: "textarea", label: "联系说明" },
  ],
};
