import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTeamMembers } from "@/sanity/lib/content";

export const metadata: Metadata = { title: "团队", description: "认识 LINK-HR 兼具产业理解与长期主义视角的多元团队。", alternates: { canonical: "/team" } };

export default async function TeamPage() {
  const team = await getTeamMembers();
  return <main><section className="page-hero"><div className="shell"><p className="eyebrow">我们的团队</p><h1>全球视野，<br />共同信念。</h1><p className="lead">我们是一支兼具产业理解与长期主义视角的多元团队。真实成员信息将在获得本人授权后由管理员发布。</p></div></section><section className="content-section"><div className="shell team-page-grid">{team.map((member, index) => <article className="team-card" key={member.slug}><Link href={`/team/${member.slug}`}>{member.imageUrl ? <div className="portrait-placeholder"><Image src={member.imageUrl} alt={`${member.name}肖像`} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover" }} /></div> : <div className={`portrait-placeholder tone-${(index % 4) + 1}`}><span>照片待上传</span></div>}<div className="team-meta"><div><h3>{member.name}</h3><p>{member.role}</p></div><span className="plus" aria-hidden="true">＋</span></div></Link></article>)}</div></section></main>;
}
