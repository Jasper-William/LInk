"use client";

import { FormEvent, useState } from "react";

const topics = ["高端人才寻访", "核心技术人才", "人才 Mapping", "人才咨询", "其他"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "提交失败");
      setStatus("success"); setMessage("感谢你的信任。我们已收到咨询，会谨慎处理并尽快联系你。"); form.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "暂时无法提交，请稍后再试。");
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="field"><label htmlFor="name">姓名</label><input id="name" name="name" autoComplete="name" required maxLength={80} /></div>
    <div className="field"><label htmlFor="company">公司</label><input id="company" name="company" autoComplete="organization" required maxLength={120} /></div>
    <div className="field"><label htmlFor="role">职位</label><input id="role" name="role" autoComplete="organization-title" required maxLength={100} /></div>
    <div className="field"><label htmlFor="email">商务邮箱</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={160} /></div>
    <div className="field field-full"><label htmlFor="phone">联系电话 <span style={{ color: "#777", fontWeight: 400 }}>选填</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} /></div>
    <fieldset className="choices"><legend className="choice-label">希望沟通</legend><div className="choice-grid">{topics.map((topic, index) => <label className="choice" key={topic}><input type="radio" name="topic" value={topic} required defaultChecked={index === 0} /><span>{topic}</span></label>)}</div></fieldset>
    <div className="field field-full"><label htmlFor="details">需求描述</label><textarea id="details" name="details" required maxLength={3000} placeholder="请简要描述团队阶段、人才方向或希望讨论的问题。" /></div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">网站</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="confidential-note">我们会对所有业务咨询及相关信息严格保密。请勿通过此表单发送候选人简历、客户内部资料或人才数据库。</p>
    <div className="form-actions"><button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "正在提交…" : "提交咨询"}<span aria-hidden="true">↗</span></button><p className="form-message" role="status" aria-live="polite">{message}</p></div>
  </form>;
}
