import type { Metadata } from "next";
import Link from "next/link";
import { getHomepageData } from "@/payload/content";

export const metadata: Metadata = { title: "我们的专注", description: "LINK-HR 专注于机器人、具身智能、AI 基础设施、核心工程与技术领导力人才。", alternates: { canonical: "/focus" } };

export default async function FocusPage() {
  const { focusAreas } = await getHomepageData();
  return <main><section className="page-hero"><div className="shell"><p className="eyebrow">我们的专注</p><h1>理解技术，<br />才能理解关键人才。</h1><p className="lead">我们长期专注于具身智能、机器人与人工智能生态，理解技术路线、组织阶段与人才市场之间的真实联系。</p></div></section><section className="content-section"><div className="shell service-list">{focusAreas.map((area) => <article className="service-row" key={`${area.number}-${area.title}`}><span className="index">{area.number}</span><div><h2>{area.title}</h2><p>{area.items.join(" · ")}</p></div></article>)}</div></section><section className="cta-section"><div className="shell cta-inner"><p className="eyebrow">寻找关键人才</p><h2><span>谈谈你的</span><span>下一支团队。</span></h2><Link className="button button-dark" href="/contact">开启沟通 <span aria-hidden="true">↗</span></Link></div></section></main>;
}
