import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTeamMembers } from "@/sanity/lib/content";

export async function generateStaticParams() { return (await getTeamMembers()).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const member = (await getTeamMembers()).find((item) => item.slug === slug);
  return { title: member ? member.name : "团队成员", robots: member ? undefined : { index: false, follow: false } };
}

export default async function MemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const team = await getTeamMembers(); const member = team.find((item) => item.slug === slug); if (!member) notFound();
  const index = team.findIndex((item) => item.slug === slug);
  return <main className="member-detail"><section className="page-hero"><div className="shell content-grid">{member.imageUrl ? <div className="portrait-placeholder"><Image src={member.imageUrl} alt={`${member.name}肖像`} fill sizes="(max-width: 767px) 100vw, 40vw" style={{ objectFit: "cover" }} /></div> : <div className={`portrait-placeholder tone-${(index % 4) + 1}`}><span>照片待上传</span></div>}<div><p className="eyebrow">我们的团队</p><h1>{member.name}</h1><p className="lead">{member.role}</p><div className="content-prose" style={{ marginTop: 42 }}><p>{member.bio}</p>{member.linkedin && <p><a className="text-link" href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></p>}<Link className="text-link" href="/team">返回团队 <span aria-hidden="true">←</span></Link></div></div></div></section></main>;
}
