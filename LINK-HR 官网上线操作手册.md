# LINK-HR 官网上线操作手册

这份手册用于第一次上线和以后维护。按照顺序操作，一次完成一章即可。任何密码、Token 或 API Key 都不要发到聊天群、邮件正文或公开文档中。

## 一、你将使用的四个网站

1. GitHub：保存网站代码，类似网站的安全文件柜。
2. Vercel：把 GitHub 中的网站变成公开网址，并在代码更新后自动重新发布。
3. Sanity：以后修改官网文字、图片和团队成员的后台。
4. Resend：把官网联系表单安全地发送到 LINK-HR 指定邮箱。

## 二、建立 GitHub 代码仓库

1. 打开 [GitHub](https://github.com)。
2. 登录；没有账号时点击“Sign up”注册。
3. 登录后点击右上角“＋”。
4. 点击“New repository”。
5. 在 Repository name 输入 `link-hr-website`。
6. 选择“Private”，这样源代码默认不公开。
7. 不要勾选“Add a README file”，当前项目已经有完整文件。
8. 点击“Create repository”。
9. 创建完成后会看到一个仓库地址，形式类似 `https://github.com/你的名字/link-hr-website`。
10. 保存这个地址，交给 Codex 即可完成第一次上传。不要自己复制不理解的命令。

以后 Codex 把修改提交到这个仓库后，Vercel 会自动重新发布网站。

## 三、创建 Sanity 官网后台

1. 打开 [Sanity 管理页面](https://www.sanity.io/manage)。
2. 点击“Log in”或“Get started”。
3. 推荐使用你长期保管的公司 Google 账号或公司邮箱登录。
4. 登录后点击“Create project”。
5. 项目名称输入 `LINK-HR Website`。
6. 如果页面要求选择组织，可以选择你的个人组织或 LINK-HR 组织。
7. Dataset 名称输入 `production`。
8. Dataset 可见性选择“Public”。这里只存放准备公开的官网宣传内容，不放任何客户或候选人资料。
9. 完成创建。
10. 打开项目设置，找到“Project ID”。本项目的 Project ID 是 `2do2fcr6`。Project ID 可以公开，但不要随意修改。

### 允许官网后台访问 Sanity

1. 在 Sanity 项目设置中点击“API”。
2. 找到“CORS origins”，点击“Add CORS origin”。
3. Origin 输入 `https://link-hr.work`。
4. 勾选“Allow credentials”。
5. 点击“Save”。

### 添加管理员

1. 在 Sanity 项目中点击“Members”或“成员”。
2. 点击“Invite member”。
3. 输入管理员邮箱。
4. 角色选择可以编辑并发布内容的角色。
5. 点击“Send invite”。
6. 对方需要打开邀请邮件并接受。

不要把 Sanity 登录密码交给其他人。每个人使用自己的账号。

## 四、在 Vercel 创建正式网站

1. 打开 [Vercel](https://vercel.com)。
2. 点击“Sign Up”或“Log In”。
3. 推荐选择“Continue with GitHub”。
4. 如果 GitHub 询问是否允许 Vercel 访问仓库，允许它访问 `link-hr-website`。
5. 进入 Vercel 后点击“Add New…” → “Project”。
6. 在仓库列表找到 `link-hr-website`，点击右侧“Import”。
7. Project Name 输入 `link-hr`。
8. Framework Preset 应自动显示“Next.js”。如果不是，手动选择“Next.js”。
9. Root Directory 保持默认，不要修改。
10. 暂时不要点击 Deploy，先完成下一章的 Environment Variables。

## 五、添加 Environment Variables

Environment Variables 是网站使用但不应写进公开代码的设置。

在 Vercel 项目创建页面展开“Environment Variables”。如果项目已经创建：打开 Vercel → 点击 `link-hr` 项目 → 点击顶部“Settings” → 左侧点击“Environment Variables”。

逐条添加下面的内容。每添加一条，都点击“Save”或“Add”。

### 可以公开的设置

`NEXT_PUBLIC_SITE_URL`

- Value 输入：`https://link-hr.work`
- 用途：告诉网站正式域名。

`NEXT_PUBLIC_SANITY_PROJECT_ID`

- Value 输入：`2do2fcr6`
- Project ID 本身不是密码。

`NEXT_PUBLIC_SANITY_DATASET`

- Value 输入：`production`

### 必须保密的设置

`SANITY_REVALIDATE_SECRET`

- 自己输入一串至少 32 位、别人猜不到的随机英文和数字。
- 用途：证明“刷新网站内容”的请求来自你自己的后台。
- 不要发送给别人，不要写进 GitHub。

`RESEND_API_KEY`

- 在 Resend 创建的邮件密钥。
- 绝对不能公开或发送给别人。

`CONTACT_TO_EMAIL`

- Value 输入用于接收官网咨询的 LINK-HR 内部邮箱。

`CONTACT_FROM_EMAIL`

- 第一次测试可以输入：`LINK-HR 官网 <onboarding@resend.dev>`
- 完成 Resend 域名验证后，建议改为：`LINK-HR 官网 <website@link-hr.work>`

所有变量的环境范围请选择 Production、Preview、Development 三项，或选择“All Environments”。

## 六、完成第一次 Vercel 发布

1. 检查上面的设置已全部保存。
2. 回到 Vercel 项目的部署页面。
3. 点击“Deploy”。
4. 等待页面显示烟花或“Congratulations”。
5. 点击“Continue to Dashboard”。
6. 页面顶部会显示一个以 `.vercel.app` 结尾的网址。
7. 点击这个网址，确认首页能够打开。
8. 打开网址后，在末尾加 `/admin`，确认能看到 Sanity 登录页面。

以后 GitHub 中的 `main` 分支更新后，Vercel 会自动重新发布，不需要手动点击 Deploy。

## 七、让 Sanity 发布后立即更新网站

即使不设置这一项，网站也会在大约 1 分钟内读取新内容。设置 Webhook 后，发布内容会更快更新。

1. 打开 [Sanity 管理页面](https://www.sanity.io/manage)。
2. 进入 `LINK-HR Website` 项目。
3. 点击“API”。
4. 找到“Webhooks”，点击“Create webhook”。
5. Name 输入 `更新 LINK-HR 官网`。
6. URL 输入：`https://link-hr.work/api/revalidate?secret=你在Vercel中设置的SANITY_REVALIDATE_SECRET`
7. Dataset 选择 `production`。
8. Trigger on 选择 Create、Update、Delete。
9. Projection 保持空白。
10. 点击“Save”。

这条 URL 包含保密文字，不要截图发给别人。

## 八、配置 Resend 联系表单邮件

1. 打开 [Resend](https://resend.com) 并登录或注册。
2. 点击左侧“Domains”。
3. 点击“Add Domain”。
4. 输入 `link-hr.work`。
5. Resend 会显示需要添加的 DNS 记录。
6. 不要自己猜 DNS 数值，逐条复制 Resend 当前页面显示的 Type、Name 和 Value。
7. DNS 添加方法见下一章。
8. Resend 显示域名已验证后，点击左侧“API Keys”。
9. 点击“Create API Key”。
10. 名称输入 `LINK-HR Website`，权限只选择发送邮件需要的权限。
11. 点击创建后，密钥通常只显示一次。复制并立即粘贴到 Vercel 的 `RESEND_API_KEY`。
12. 回到 Vercel，把 `CONTACT_FROM_EMAIL` 改成 `LINK-HR 官网 <website@link-hr.work>`。
13. 在 Vercel 的“Deployments”中打开最新部署右侧菜单，点击“Redeploy”。

## 九、绑定 link-hr.work 域名

### 在 Vercel 添加域名

1. 打开 Vercel。
2. 点击 `link-hr` 项目。
3. 点击顶部“Settings”。
4. 点击左侧“Domains”。
5. 输入 `link-hr.work`，点击“Add”。
6. 再输入 `www.link-hr.work`，点击“Add”。
7. Vercel 会显示需要添加的 DNS 记录。

重要：不要自己猜 DNS 数值，复制 Vercel 当前页面显示的 Type、Name 和 Value。Vercel 可能根据账号和时间给出不同值。

### 在域名购买平台添加 DNS

你在阿里云购买了域名，可以按下面的方式操作：

1. 打开 [阿里云控制台](https://home.console.aliyun.com)。
2. 使用购买 `link-hr.work` 时的账号登录。
3. 在顶部搜索框搜索“域名”。
4. 点击“域名”进入域名列表。
5. 找到 `link-hr.work`，点击右侧“解析”。
6. 点击“添加 DNS 记录”或“添加记录”。
7. 回到 Vercel 的 Domains 页面。
8. 按 Vercel 当前显示的内容逐项复制：
   - Vercel 的 Type 对应阿里云的“记录类型”。
   - Vercel 的 Name 对应阿里云的“主机记录”。
   - Vercel 的 Value 对应阿里云的“记录值”。
9. TTL 保持阿里云默认值。
10. 点击“确定”。
11. 如果 Vercel 为根域名和 www 显示两条记录，两条都要分别添加。
12. 回到 Vercel，等待状态变成绿色或显示“Valid Configuration”。通常几分钟生效，少数情况下可能需要 24–48 小时。

不要删除你不认识的 MX、TXT 或企业邮箱记录。删除这些记录可能导致公司邮箱停止工作。

## 十、设置主域名和 www

建议把 `link-hr.work` 设为主域名，让 `www.link-hr.work` 自动跳转到它。

1. 在 Vercel 项目打开 Settings → Domains。
2. 找到 `link-hr.work`，打开右侧菜单。
3. 选择“Set as Primary”或类似选项。
4. 找到 `www.link-hr.work`。
5. 如果页面提供 Redirect，选择重定向到 `link-hr.work`。
6. 保存。

## 十一、确认 HTTPS

1. 等待 Vercel 的两个域名都显示配置正确。
2. 打开 `https://link-hr.work`。
3. 看浏览器地址栏是否有锁形图标，或地址是否以 `https://` 开头。
4. 再打开 `http://link-hr.work`，它应该自动跳转到 `https://link-hr.work`。
5. 打开 `https://www.link-hr.work`，它应该自动跳转到主域名。

Vercel 会自动申请和续期 HTTPS 证书，不需要另外购买证书。

## 十二、上线前检查

逐项打开并检查：

- `https://link-hr.work/`
- `/focus`
- `/approach`
- `/team`
- `/about`
- `/contact`
- `/privacy`
- `/admin`
- 一个不存在的地址，例如 `/test-404`，应该显示 404 页面

再检查：

1. 手机打开首页，标题没有被截断。
2. 手机菜单可以打开和关闭。
3. 团队人物可以左右滑动。
4. 联系表单可以收到邮件。
5. 表单失败时会显示清楚的提示，网站不会崩溃。
6. 后台修改一个字并发布，1 分钟内官网能看到变化。
7. 搜索 `https://link-hr.work/robots.txt` 可以打开。
8. 搜索 `https://link-hr.work/sitemap.xml` 可以打开。

## 十三、连接 Google Search Console

1. 打开 [Google Search Console](https://search.google.com/search-console)。
2. 使用 LINK-HR 长期管理的 Google 账号登录。
3. 点击“添加资源”。
4. 选择“网域”。
5. 输入 `link-hr.work`。
6. Google 会显示一条 TXT DNS 记录。
7. 打开阿里云域名解析，点击“添加记录”。
8. 按 Google 当前页面显示的 Name 和 Value 原样复制，不要自己猜。
9. 保存后回到 Google，点击“验证”。
10. 验证成功后，在“Sitemaps”输入 `https://link-hr.work/sitemap.xml` 并提交。

## 十四、环境变量保密表

| 名称 | 可以公开吗 | 去哪里找 |
| --- | --- | --- |
| NEXT_PUBLIC_SITE_URL | 可以 | 正式域名 |
| NEXT_PUBLIC_SANITY_PROJECT_ID | 可以 | Sanity 项目设置 |
| NEXT_PUBLIC_SANITY_DATASET | 可以 | 固定为 production |
| SANITY_REVALIDATE_SECRET | 不可以 | 由你自己生成 |
| RESEND_API_KEY | 绝对不可以 | Resend → API Keys |
| CONTACT_TO_EMAIL | 不建议公开 | LINK-HR 内部决定 |
| CONTACT_FROM_EMAIL | 可以 | 已验证的发件邮箱 |

任何 Secret 都不要写入 GitHub，不要粘贴到聊天窗口，也不要放进 Sanity 官网后台。

## 十五、出现问题时先看哪里

1. 网站打不开：打开 Vercel → link-hr → Deployments，看最新一项是否显示 Ready。
2. 域名打不开：打开 Vercel → Settings → Domains，看是否显示 Invalid Configuration。
3. 后台打不开：检查 Vercel 的 Sanity Project ID 和 Dataset 是否填写正确。
4. 发布后没变化：等待 1 分钟并刷新；再检查 Sanity 是否真的点击了“发布”。
5. 收不到表单邮件：检查 Vercel 中的 RESEND_API_KEY、CONTACT_TO_EMAIL 和 CONTACT_FROM_EMAIL；再检查 Resend Domains 是否显示 Verified。
6. 不要反复删除项目。保留错误页面截图，再交给维护人员判断。
