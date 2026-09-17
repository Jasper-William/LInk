"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import type { StructureBuilder } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

const singleton = (S: StructureBuilder, title: string, schemaType: string, documentId: string) => S.listItem().title(title).child(S.document().schemaType(schemaType).documentId(documentId));

export default defineConfig({
  name: "link-hr", title: "LINK-HR 官网后台",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "replace-me",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/admin",
  plugins: [structureTool({ structure: (S) => S.list().title("网站内容").items([
    singleton(S, "首页设置", "homePage", "homePage"),
    S.divider(),
    S.documentTypeListItem("focusArea").title("我们的专注"),
    singleton(S, "服务方式", "approachSettings", "approachSettings"),
    S.documentTypeListItem("teamMember").title("团队管理"),
    singleton(S, "关于我们", "aboutPage", "aboutPage"),
    singleton(S, "联系方式", "contactSettings", "contactSettings"),
    singleton(S, "SEO 设置", "seoSettings", "seoSettings"),
  ]) })],
  schema: { types: schemaTypes },
});
