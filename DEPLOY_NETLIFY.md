# 文旅创意学院网站 - Netlify 部署指南

## 一、准备工作

项目已经构建完成，构建产物在 `dist` 文件夹中。

## 二、Netlify 部署步骤（拖拽上传，最简单）

### 第1步：注册 Netlify 账号

1. 访问 https://www.netlify.com
2. 点击 "Sign up" 注册
3. 可以使用 GitHub / GitLab / Bitbucket / 邮箱注册

### 第2步：拖拽上传部署

1. 登录后进入 Netlify 控制台：https://app.netlify.com
2. 在页面中找到 "Sites" 区域
3. 将项目根目录下的 `dist` 文件夹直接拖拽到页面中（显示 "Drop your site folder here" 的区域）
4. 等待上传和部署完成

### 第3步：获取访问链接

部署完成后，Netlify 会自动分配一个免费域名，格式为：
```
https://随机名称.netlify.app
```

你可以在站点设置中修改这个子域名。

### 第4步：修改项目名称（可选）

1. 进入站点的 "Site settings"
2. 找到 "Site details" → "Site name"
3. 点击 "Change site name"
4. 输入你想要的名称（例如：wenlv-college）
5. 保存后，访问地址变为：`https://wenlv-college.netlify.app`

## 三、绑定自定义域名（可选）

如果你有自己的域名，可以按以下步骤绑定：

### 第1步：添加自定义域名

1. 进入站点的 "Domain settings"
2. 点击 "Add custom domain"
3. 输入你的域名（例如：www.example.com）
4. 点击 "Verify" → "Yes, add domain"

### 第2步：配置 DNS 解析

Netlify 会提示你需要配置的 DNS 记录：

1. 登录你的域名注册商（如阿里云、腾讯云等）
2. 找到 DNS 解析设置
3. 添加一条 CNAME 记录：
   - 主机记录：www（或你想用的子域名）
   - 记录值：你的-netlify-site.netlify.app
4. 等待 DNS 生效（通常几分钟到几小时）

### 第3步：启用 HTTPS

Netlify 会自动为你的域名申请免费的 SSL 证书：
1. 进入 "Domain settings" → "HTTPS"
2. 等待证书自动颁发
3. 启用 "Force HTTPS"

## 四、更新部署（后续更新网站时）

每次修改网站内容后，需要重新构建并上传：

### 方法一：重新拖拽上传

1. 在项目目录下运行构建命令：
```bash
npm run build
```
2. 进入 Netlify 站点的 "Deploys" 页面
3. 将新的 `dist` 文件夹拖拽到 "Drag and drop your site output folder here" 区域

### 方法二：使用 Netlify CLI（推荐）

1. 安装 Netlify CLI：
```bash
npm install -g netlify-cli
```

2. 登录 Netlify：
```bash
netlify login
```

3. 关联到现有项目（首次）：
```bash
netlify link
```

4. 部署：
```bash
netlify deploy --prod
```

## 五、常用命令

```bash
# 构建项目
npm run build

# 本地预览
npm run dev

# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 部署到生产环境
netlify deploy --prod

# 预览部署（不会影响生产环境）
netlify deploy
```

## 六、注意事项

1. **免费额度**：Netlify 免费版每月有 100GB 流量和 300 分钟构建时间，对于普通学院网站完全足够
2. **国内访问**：Netlify 服务器在国外，国内访问速度可能一般，如果需要更快的国内访问，可以考虑使用国内 CDN 加速
3. **图片资源**：确保所有图片路径正确，本地图片在 `public` 目录下的会自动打包到 `dist` 中
4. **SPA 路由**：React SPA 项目在刷新子页面时可能出现 404，需要在 Netlify 中配置重定向规则

## 七、SPA 路由配置（重要！）

React Router 的单页应用在 Netlify 上刷新子页面会出现 404 错误，需要添加重定向规则：

在项目根目录的 `public` 文件夹中创建 `_redirects` 文件，内容如下：
```
/*    /index.html   200
```

然后重新构建部署即可。