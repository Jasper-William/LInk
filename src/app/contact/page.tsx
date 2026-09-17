import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { getContactContent } from "@/sanity/lib/content";

export const metadata: Metadata = { title: "联系我们", description: "与 LINK-HR 沟通具身智能、机器人与人工智能领域的高端人才寻访及人才咨询需求。", alternates: { canonical: "/contact" } };

export default async function ContactPage() {
  const contactInfo = await getContactContent();
  return <main><div className="shell contact-layout"><section className="contact-intro"><p className="eyebrow">联系我们</p><h1>重要的合作，<br />从理解开始。</h1><p>告诉我们你正在思考的人才或组织问题。我们会以谨慎、保密的方式评估并回复。</p><div className="contact-details"><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a><span>{contactInfo.cities}</span><a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section><section aria-label="业务咨询表单"><ContactForm /></section></div></main>;
}
