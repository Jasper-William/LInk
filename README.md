# LINK-HR 官网

LINK-HR 邻客咨询正式公司官网，面向具身智能、机器人、人工智能与 Deep Tech 领域的客户和人才。

## 技术结构

- Next.js App Router + TypeScript
- Tailwind CSS 4 与项目级 Design System
- Sanity 嵌入式中文内容后台（`/admin`）
- Vercel 部署
- Resend 服务器端咨询邮件

## 本地开发

复制 `.env.example` 为 `.env.local` 并填写必要设置，然后运行：

```bash
pnpm install
pnpm dev
```

## 验证

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## 内容与隐私边界

Sanity 仅用于公开官网宣传内容。禁止存储候选人数据库、客户项目、Talent Mapping 数据、候选人联系方式或客户内部资料。

面向非技术管理员的说明见：

- `LINK-HR 官网管理员使用手册.md`
- `LINK-HR 官网上线操作手册.md`
