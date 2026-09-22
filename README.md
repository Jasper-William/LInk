# LINK-HR 官网

现有 LINK-HR Next.js 官网，内置 Payload CMS 管理后台。公开页面、路由与原有视觉保持不变。

## 技术结构

- Next.js 16 App Router + TypeScript
- Payload CMS 3：`/admin`
- Neon Postgres：内容数据库
- Vercel Blob：后台图片存储
- Vercel：网站部署
- Resend：联系表单邮件

## 必需环境变量

复制 `.env.example` 为 `.env.local`，填写：

- `DATABASE_URL`：Neon Postgres 连接地址
- `PAYLOAD_SECRET`：至少 32 位随机字符
- `BLOB_READ_WRITE_TOKEN`：Vercel Blob 读写 Token
- `NEXT_PUBLIC_SITE_URL`：正式环境使用 `https://link-hr.com`

邮件表单还需要 `RESEND_API_KEY`、`CONTACT_TO_EMAIL` 和 `CONTACT_FROM_EMAIL`。

所有 Secret 只能存放在本地 `.env.local` 或 Vercel Environment Variables，禁止提交到 GitHub。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000/admin` 使用 Payload 后台。

## 验证

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

## 内容安全

后台只用于准备公开的官网宣传内容。禁止存放候选人简历、客户项目、Talent Mapping 数据、候选人联系方式或客户内部资料。
