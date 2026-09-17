"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/focus", label: "我们的专注" },
  { href: "/approach", label: "服务方式" },
  { href: "/about", label: "关于我们" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="LINK-HR 邻客咨询首页"><span>LINK-HR</span><small>邻客咨询</small></Link>
        <nav className="desktop-nav" aria-label="主要导航">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <Link className="header-contact" href="/contact">联系我们</Link>
        <button type="button" className="menu-button" aria-label={open ? "关闭菜单" : "打开菜单"} aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /></button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="shell" aria-label="移动端导航">
          {[...links, { href: "/team", label: "团队" }, { href: "/contact", label: "联系我们" }].map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}
        </nav>
      </div>
    </header>
  );
}
