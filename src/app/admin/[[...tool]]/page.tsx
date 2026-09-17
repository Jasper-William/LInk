import type { Metadata } from "next";
import { AdminStudio } from "@/components/admin-studio";
import { isSanityConfigured } from "@/sanity/lib/client";

export const metadata: Metadata = { title: "网站后台", robots: { index: false, follow: false } };

export default function AdminPage() {
  if (!isSanityConfigured) return <main className="admin-page admin-setup"><div><p className="eyebrow">LINK-HR 官网后台</p><h1>后台等待首次连接</h1><p>网站已经准备好 Sanity 中文后台。完成《LINK-HR 官网上线操作手册》中的“连接 Sanity”步骤后，这里会自动变成登录页面。</p></div></main>;
  return <main className="admin-page"><AdminStudio /></main>;
}
