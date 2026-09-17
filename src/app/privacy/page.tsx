import type { Metadata } from "next";

export const metadata: Metadata = { title: "隐私政策", description: "LINK-HR 官网隐私政策与信息处理说明。", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <main><section className="page-hero"><div className="shell"><p className="eyebrow">隐私政策</p><h1>谨慎对待<br />每一份信息。</h1><p className="lead">更新日期：2026 年 9 月 17 日</p></div></section><section className="content-section"><div className="shell legal"><p>LINK-HR 邻客咨询重视客户、候选人和网站访问者的隐私。本政策说明本官网如何处理您主动提交的信息。</p><h2>我们收集的信息</h2><p>当您通过联系表单与我们沟通时，我们可能收到姓名、公司、职位、商务邮箱、联系电话及需求描述。我们不会通过公开官网建立候选人数据库或客户人才库。</p><h2>信息用途</h2><p>这些信息仅用于回复业务咨询、判断服务需求、安排后续沟通及履行必要的合规义务。未经授权，我们不会在官网公开您的信息。</p><h2>信息存储与安全</h2><p>联系表单信息通过服务器端邮件服务发送给 LINK-HR，不直接暴露在网页代码中。我们采用合理措施限制访问，但任何互联网传输方式均无法保证绝对安全。</p><h2>第三方服务</h2><p>本网站可能使用 Vercel 提供托管、Sanity 提供内容管理、Resend 提供邮件发送。相关服务可能根据各自政策处理提供服务所必需的有限数据。</p><h2>您的选择</h2><p>如需查询、更正或删除您曾主动提供的信息，请通过 contact@link-hr.com 与我们联系。我们会在合理范围内核实并处理请求。</p><h2>政策更新</h2><p>我们可能根据服务或法律要求更新本政策。更新后的版本将在本页面发布并注明日期。</p></div></section></main>;
}
