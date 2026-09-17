"use client";

import Link from "next/link";
import { useRef } from "react";
import { placeholderTeam, type TeamMember } from "@/data/fallback";
import Image from "next/image";

export function TeamCarousel({ members = placeholderTeam }: { members?: TeamMember[] }) {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  return (
    <div className="team-carousel-wrap">
      <div className="carousel-actions"><button onClick={() => move(-1)} aria-label="查看上一位团队成员">←</button><button onClick={() => move(1)} aria-label="查看下一位团队成员">→</button></div>
      <div className="team-track" ref={track}>{members.map((member, index) => <article className="team-card" key={member.slug}><Link href={`/team/${member.slug}`} aria-label={`查看${member.name}详情`}>{member.imageUrl ? <div className="portrait-placeholder"><Image src={member.imageUrl} alt={`${member.name}肖像`} fill sizes="(max-width: 767px) 82vw, 25vw" style={{ objectFit: "cover" }} /></div> : <div className={`portrait-placeholder tone-${(index % 4) + 1}`}><span>照片待上传</span></div>}<div className="team-meta"><div><h3>{member.name}</h3><p>{member.role}</p></div><span className="plus" aria-hidden="true">＋</span></div></Link></article>)}</div>
    </div>
  );
}
