# 文旅创意学院网站 - Gitee Pages 部署指南

## 一、Gitee Pages 简介

Gitee Pages 是 Gitee（码云）提供的免费静态网站托管服务，国内访问速度快，完全免费。

**免费子域名格式**：
- 个人/组织主页：`https://用户名.gitee.io/`
- 项目仓库页面：`https://用户名.gitee.io/仓库名/`

---

## 二、准备工作

### 1. 注册 Gitee 账号

访问 https://gitee.com 注册账号（需要实名认证）。

### 2. 创建 Git 仓库

1. 登录 Gitee
2. 点击右上角 "+" → "新建仓库"
3. 填写仓库名称（例如：`wenlv-college`）
4. 选择 "公开"
5. 点击 "创建"

---

## 三、部署步骤（手动方式，推荐）

### 第1步：构建项目

在项目目录下运行：
```bash
npm run build
```

构建完成后，`dist` 文件夹就是完整的网站文件。

### 第2步：上传到 Gitee 仓库

**方式一：直接上传文件（最简单）**

1. 进入你的 Gitee 仓库页面
2. 点击 "上传文件"
3. 将 `dist` 文件夹里的**所有文件**（注意是文件夹里面的内容，不是 dist 文件夹本身）拖拽到上传区域
4. 填写提交信息，点击 "提交"

**方式二：使用 Git 命令**

```bash
# 初始化 git（如果还没有）
git init
git remote add origin https://gitee.com/你的用户名/你的仓库名.git

# 构建
npm run build

# 进入 dist 目录并提交
cd dist
git init
git add -A
git commit -m "deploy"
git push -f https://gitee.com/你的用户名/你的仓库名.git master:gh-pages
cd ..
```

### 第3步：开启 Gitee Pages

1. 进入 Gitee 仓库页面
2. 点击 "服务" → "Gitee Pages"
3. 选择部署分支：
   - 如果用方式一上传到 master：选择 "master" 分支，部署目录填 "/"
   - 如果用方式二推到 gh-pages：选择 "gh-pages" 分支，部署目录填 "/"
4. 点击 "启动" 或 "更新"
5. 等待几秒，就能看到你的访问地址了

---

## 四、一键部署脚本方式（推荐给经常更新的用户）

### 1. 安装 gh-pages 工具

```bash
npm install -D gh-pages
```

### 2. 配置仓库地址

修改 `package.json` 中的 `homepage` 字段（如果没有就添加）：

```json
{
  "homepage": "https://你的用户名.gitee.io/你的仓库名/"
}
```

### 3. 添加部署命令

在 `package.json` 的 `scripts` 中添加：

```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

### 4. 执行部署

```bash
npm run build
npm run deploy
```

### 5. 在 Gitee 上开启 Pages

部署完成后，在 Gitee 仓库的 "服务" → "Gitee Pages" 中：
- 选择 `gh-pages` 分支
- 点击 "更新"

---

## 五、常见问题

### 1. 刷新子页面出现 404

**原因**：Gitee Pages 不支持 SPA 路由的 history 模式，刷新子页面会找不到文件。

**解决方案**：本项目已经配置了 `404.html` 解决方案，构建时会自动将 `index.html` 复制为 `404.html`。Gitee Pages 遇到找不到的页面时会显示 `404.html`，这样路由就能正常工作了。

### 2. 样式和图片不显示

**原因**：路径配置不正确。

**解决方案**：
- 检查 `vite.config.ts` 中的 `base` 配置
- 如果是项目仓库页面（`https://用户名.gitee.io/仓库名/`），需要设置 `base: '/仓库名/'`
- 本项目已设置为 `base: './'`（相对路径），通常可以正常工作

### 3. 更新后页面不变化

**原因**：浏览器缓存。

**解决方案**：
- 按 `Ctrl + F5` 强制刷新
- 或者在 Gitee Pages 页面点击 "更新" 按钮

### 4. 国内访问速度

Gitee Pages 在国内访问速度很快，适合学院网站使用。

---

## 六、绑定自定义域名（可选）

Gitee Pages 支持绑定自定义域名：

1. 进入 Gitee Pages 设置页面
2. 在 "自定义域名" 处填写你的域名
3. 在你的域名 DNS 解析中添加 CNAME 记录：
   - 主机记录：@ 或 www
   - 记录值：`gitee.io`（或 Gitee 提供的具体地址）
4. 等待 DNS 生效
5. 可以申请 HTTPS 证书

---

## 七、更新网站的流程

每次修改网站内容后：

```bash
# 1. 构建
npm run build

# 2. 部署（根据你选择的方式）
# 方式一：手动上传 dist 到 Gitee
# 方式二：npm run deploy
```

然后到 Gitee Pages 页面点击 "更新" 按钮。

---

## 八、PowerShell 一键部署脚本

项目中已提供 `部署到Gitee.ps1` 脚本，使用方法：

1. 先修改脚本中的仓库地址
2. 右键脚本 → "使用 PowerShell 运行"
3. 按照提示操作

---

## 九、对比其他平台

| 平台 | 国内速度 | 免费 | 自定义域名 | 部署难度 |
|------|---------|------|-----------|---------|
| Gitee Pages | ⭐⭐⭐⭐⭐ 很快 | ✅ | ✅ | 简单 |
| Netlify | ⭐⭐ 慢 | ✅ | ✅ | 简单 |
| GitHub Pages | ⭐ 很慢 | ✅ | ✅ | 简单 |
| Vercel | ⭐⭐ 一般 | ✅ | ✅ | 简单 |
| Cloudflare Pages | ⭐⭐⭐ 较快 | ✅ | ✅ | 中等 |