import { NextResponse } from "next/server";

type ContactPayload = { name?: string; company?: string; role?: string; email?: string; phone?: string; topic?: string; details?: string; website?: string };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function safeText(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function escapeHtml(value: string) { return value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char] || char); }

export async function POST(request: Request) {
  let body: ContactPayload;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "提交内容格式不正确。" }, { status: 400 }); }
  if (safeText(body.website, 200)) return NextResponse.json({ ok: true });

  const data = {
    name: safeText(body.name, 80), company: safeText(body.company, 120), role: safeText(body.role, 100),
    email: safeText(body.email, 160), phone: safeText(body.phone, 40), topic: safeText(body.topic, 80), details: safeText(body.details, 3000),
  };
  if (!data.name || !data.company || !data.role || !emailPattern.test(data.email) || !data.topic || !data.details) return NextResponse.json({ message: "请检查必填内容和邮箱格式。" }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "LINK-HR 官网 <onboarding@resend.dev>";
  if (!apiKey || !to) return NextResponse.json({ message: "咨询邮件功能正在配置中，请暂时发送邮件至 contact@link-hr.com。" }, { status: 503 });

  const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", signal: controller.signal,
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: data.email, subject: `[LINK-HR 官网咨询] ${data.topic} · ${data.company}`,
        html: `<h2>新的官网业务咨询</h2><p><strong>姓名：</strong>${escapeHtml(data.name)}</p><p><strong>公司：</strong>${escapeHtml(data.company)}</p><p><strong>职位：</strong>${escapeHtml(data.role)}</p><p><strong>邮箱：</strong>${escapeHtml(data.email)}</p><p><strong>电话：</strong>${escapeHtml(data.phone || "未填写")}</p><p><strong>沟通方向：</strong>${escapeHtml(data.topic)}</p><p><strong>需求描述：</strong></p><p>${escapeHtml(data.details).replace(/\n/g, "<br>")}</p>` }),
    });
    if (!response.ok) throw new Error("email-provider-error");
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ message: "暂时无法发送，请稍后再试或直接邮件联系 contact@link-hr.com。" }, { status: 502 }); }
  finally { clearTimeout(timer); }
}
