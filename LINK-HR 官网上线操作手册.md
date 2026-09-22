# LINK-HR 官网 Vercel + Payload 上线操作手册

当前项目是在原有官网中加入 Payload CMS，没有重新创建或重新设计网站。正式官网为 `https://link-hr.com`，后台为 `https://link-hr.com/admin`。

## 一、项目使用的服务

1. GitHub：保存网站代码。
2. Vercel：部署 Next.js 网站。
3. Neon：保存 Payload 的文字与后台账号。
4. Vercel Blob：保存 Payload 上传的图片。
5. Resend：发送官网联系表单邮件。

## 二、在 Vercel 创建 Neon 数据库

1. 登录 Vercel，打开 LINK-HR 网站项目。
2. 点击顶部“Storage”。
3. 点击“Create Database”或“Browse Marketplace”。
4. 选择 Neon Postgres。
5. 点击“Create”或“Add Integration”。
6. 连接到当前 LINK-HR 项目。
7. 环境范围选择 Production、Preview、Development。
8. 创建后打开 Vercel → Settings → Environment Variables。
9. 确认存在 `DATABASE_URL`。

不要复制或公开 `DATABASE_URL` 的值。

## 三、创建 Vercel Blob

1. 回到 LINK-HR 项目的“Storage”。
2. 点击“Create”。
3. 选择 Blob。
4. 创建 Blob Store，并连接到当前项目。
5. 在 Settings → Environment Variables 确认存在 `BLOB_READ_WRITE_TOKEN`。

这个 Token 只能保存在 Vercel，不能写进代码或发给别人。

## 四、添加 Payload Secret

1. 打开 LINK-HR 项目。
2. 点击 Settings。
3. 点击 Environment Variables。
4. 新建 `PAYLOAD_SECRET`。
5. Value 填写至少 32 位随机英文、数字和符号。
6. 环境选择 Production、Preview、Development。
7. 点击 Save。

同一项目以后应继续使用这个 Secret，不要频繁更换，否则现有管理员登录会失效。

## 五、设置正式域名

在 Vercel Environment Variables 中添加：

```text
NEXT_PUBLIC_SITE_URL=https://link-hr.com
```

然后在 Settings → Domains 中添加 `link-hr.com` 和 `www.link-hr.com`，按 Vercel 页面显示的 DNS 记录到域名服务商配置。不要自行猜测 DNS 值，也不要删除不认识的 MX 或企业邮箱记录。

## 六、第一次部署

1. 将代码上传到 GitHub 私有仓库。
2. 在 Vercel 中导入或继续使用现有 LINK-HR 项目。
3. Framework Preset 保持 Next.js。
4. Install Command 保持 `pnpm install`。
5. Build Command 保持 `pnpm build`。
6. 点击 Deploy。
7. 部署成功后打开 `https://link-hr.com/admin`。
8. 按页面提示创建第一位管理员。

## 七、后台栏目

- 页面设置：首页设置、服务方式、关于我们、联系方式、SEO 设置
- 内容管理：我们的专注、团队管理、媒体库
- 系统管理：管理员

后台数据为空时，公开官网会继续显示原有静态内容，不会白屏。

## 八、联系表单

联系表单还需要：

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

完成 Resend 对 `link-hr.com` 的域名验证后，再把正式发件邮箱填入 Vercel。

## 九、上线检查

逐项打开：

- `https://link-hr.com/`
- `/focus`
- `/approach`
- `/team`
- `/about`
- `/contact`
- `/privacy`
- `/admin`
- `/robots.txt`
- `/sitemap.xml`

再检查手机菜单、联系表单、后台保存文字、后台上传图片和 404 页面。

## 十、安全规则

不要把 `DATABASE_URL`、`PAYLOAD_SECRET`、`BLOB_READ_WRITE_TOKEN` 或邮件密钥写进 GitHub、聊天窗口或公开文档。Payload 后台只允许存放准备公开的官网内容。
