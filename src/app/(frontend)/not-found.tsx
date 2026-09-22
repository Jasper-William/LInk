import Link from "next/link";

export default function NotFound() { return <main className="not-found"><div><h1>404</h1><p>你访问的页面不存在，或已经移动。</p><Link className="button button-dark" href="/">返回首页 <span aria-hidden="true">↗</span></Link></div></main>; }
