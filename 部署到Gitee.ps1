# Gitee Pages 一键部署脚本
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  文旅创意学院网站 - Gitee Pages 部署" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Node.js
Write-Host "📋 检查环境..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ 未找到 Node.js，请先安装 Node.js" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit
}

# 检查 npm
try {
    $npmVersion = npm -v
    Write-Host "✅ npm: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ 未找到 npm" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit
}

Write-Host ""

# 构建项目
Write-Host "🔨 开始构建项目..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ 构建失败，请检查代码错误" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit
}

Write-Host ""
Write-Host "✅ 构建成功！" -ForegroundColor Green
Write-Host ""

# 显示后续步骤
Write-Host "📝 后续部署步骤：" -ForegroundColor Yellow
Write-Host ""
Write-Host "方式一：手动上传（推荐新手）" -ForegroundColor White
Write-Host "  1. 打开 Gitee 仓库页面"
Write-Host "  2. 点击 '上传文件'"
Write-Host "  3. 将 dist 文件夹内的所有文件拖拽上传"
Write-Host "  4. 提交后，进入 '服务' → 'Gitee Pages'"
Write-Host "  5. 选择 master 分支，点击 '更新'"
Write-Host ""
Write-Host "方式二：Git 命令部署" -ForegroundColor White
Write-Host "  需要先配置好 Git 和 Gitee SSH 密钥"
Write-Host ""
Write-Host "方式三：使用 gh-pages 工具（推荐）" -ForegroundColor White
Write-Host "  运行: npm install -D gh-pages"
Write-Host "  然后: npx gh-pages -d dist"
Write-Host ""

# 打开 dist 文件夹
Write-Host "📂 正在打开 dist 文件夹..." -ForegroundColor Yellow
explorer.exe (Join-Path $PSScriptRoot "dist")

Write-Host ""
Write-Host "✅ 部署准备完成！" -ForegroundColor Green
Write-Host ""
Read-Host "按回车键退出"