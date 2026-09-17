import type { Metadata } from "next";
import Link from "next/link";
import { getAboutContent } from "@/sanity/lib/content";

export const metadata: Metadata = { title: "关于我们", description: "LINK-HR 是一家专注于具身智能与机器人领域的精品高端人才寻访与人才咨询机构。", alternates: { canonical: "/about" } };

export default async function AboutPage() {
  const content = await getAboutContent();
  const paragraphs = content?.paragraphs?.length ? content.paragraphs : ["我们专注于具身智能、机器人、人工智能与 Deep Tech 领域，提供高端人才寻访、核心技术人才寻访、Talent Mapping、人才市场研究、候选人评估与长期人才咨询。", "我们保持克制的项目规模，投入时间理解客户所处的业务阶段、技术路径与组织挑战。我们的工作从需求定义开始，延伸至寻访、评估、面试、Offer、入职及后续跟踪。", "对客户而言，我们希望成为可以长期讨论人才与组织问题的合作伙伴；对候选人而言，我们尊重每一次职业选择背后的复杂性与私密性。"];
  return <main><section className="page-hero"><div className="shell"><p className="eyebrow">{content?.eyebrow || "关于我们"}</p><h1>{(content?.title || "为技术判断，\n加入人才视角。").split("\n").map((line) => <span style={{ display: "block" }} key={line}>{line}</span>)}</h1><p className="lead">{content?.lead || "LINK-HR 邻客咨询服务于定义物理智能未来的企业和团队。我们相信，关键人才不是一份简历，而是技术方向、组织能力与长期愿景的交点。"}</p></div></section><section className="content-section"><div className="shell content-grid"><h2>{(content?.sectionTitle || "精品模式，\n长期合作。").split("\n").map((line) => <span style={{ display: "block" }} key={line}>{line}</span>)}</h2><div className="content-prose">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section><section className="cta-section"><div className="shell cta-inner"><p className="eyebrow">建立长期联系</p><h2><span>从一次深入的</span><span>对话开始。</span></h2><Link className="button button-dark" href="/contact">与我们沟通 <span aria-hidden="true">↗</span></Link></div></section></main>;
}
