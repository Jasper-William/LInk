import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";
import { getSeoContent } from "@/sanity/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://link-hr.work";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoContent();
  const title = seo?.title || "LINK-HR | 具身智能与机器人高端人才寻访";
  const description = seo?.description || "LINK-HR 专注于具身智能、机器人及人工智能领域的高端人才寻访、Talent Mapping 与人才咨询服务。";
  const image = seo?.ogImageUrl || "/images/robotic-hand-hero.jpg";
  return { metadataBase: new URL(siteUrl), title: { default: title, template: "%s | LINK-HR" }, description, alternates: { canonical: "/" }, openGraph: { type: "website", locale: "zh_CN", url: siteUrl, siteName: "LINK-HR 邻客咨询", title, description, images: [{ url: image, width: 1200, height: 630, alt: "LINK-HR 邻客咨询" }] }, robots: { index: true, follow: true } };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><a className="skip-link" href="#main-content">跳到主要内容</a><Header /><div id="main-content">{children}</div><Footer /></body></html>;
}
