import Link from "next/link";
import { getContactContent } from "@/payload/content";

export async function Footer() {
  const contactInfo = await getContactContent();
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <div><Link href="/" className="footer-mark">LINK-HR</Link><p>为更具行动力的物理世界寻找人才。</p></div>
        <nav aria-label="页脚导航"><Link href="/contact">联系我们</Link><Link href="/privacy">隐私政策</Link><a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></nav>
      </div>
      <div className="shell footer-bottom"><span>© 2026 LINK-HR. All Rights Reserved.</span><span>私密 · 专业 · 长期主义</span></div>
    </footer>
  );
}
