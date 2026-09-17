import type { Metadata } from "next";
import Link from "next/link";
import { getHomepageData } from "@/sanity/lib/content";

export const metadata: Metadata = { title: "服务方式", description: "从人才 Mapping、定向寻访到录用与长期跟踪，LINK-HR 提供高度保密的端到端人才服务。", alternates: { canonical: "/approach" } };

export default async function ApproachPage() {
  const { approachSteps } = await getHomepageData();
  return <main><section className="page-hero"><div className="shell"><p className="eyebrow">服务方式</p><h1>私密、专注，<br />并肩走到更远。</h1><p className="lead">真正重要的人才决策，建立在深度理解、精准触达与长期信任之上。我们控制项目数量，以确保每一次合作都得到足够专注。</p></div></section><section className="content-section"><div className="shell content-grid"><h2>端到端，<br />但不止于流程。</h2><div className="service-list">{approachSteps.map((step) => <article className="service-row" key={step.number}><span className="index">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></article>)}</div></div></section><section className="content-section approach-section"><div className="shell content-grid"><div><p className="eyebrow eyebrow-light">保密原则</p><h2>谨慎处理每一份信任。</h2></div><div className="content-prose"><p>我们将客户、候选人及项目相关信息视为合作的基本边界。未经明确授权，不公开客户名称、岗位、组织信息或候选人资料。</p><p>公开内容只用于介绍 LINK-HR 的专业能力。官网后台与任何未来的人才业务系统严格分离。</p><Link className="button button-light" href="/privacy">查看隐私政策 <span aria-hidden="true">→</span></Link></div></div></section></main>;
}
