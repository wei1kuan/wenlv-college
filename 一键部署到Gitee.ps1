# 一键部署到 Gitee Pages 脚本
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  一键部署到 Gitee Pages" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 配置信息
$repoUrl = "https://gitee.com/wei1kuan/wenlvcollage.git"
$branch = "master"

# 进入 dist 目录
$distPath = Join-Path $PSScriptRoot "dist"
Set-Location $distPath -ErrorAction Stop

Write-Host "📂 当前目录: $distPath" -ForegroundColor White
Write-Host ""

# 初始化 git
Write-Host "🔧 初始化 Git..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    git init
    git config user.name "wei1kuan"
    git config user.email "wei1kuanxg@gmail.com"
}

# 添加远程仓库
Write-Host "🔗 配置远程仓库..." -ForegroundColor Yellow
git remote remove origin -ErrorAction SilentlyContinue
git remote add origin $repoUrl

# 添加所有文件
Write-Host "📦 添加文件..." -ForegroundColor Yellow
git add -A

# 提交
Write-Host "📝 提交更改..." -ForegroundColor Yellow
git commit -m "部署网站 - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 推送
Write-Host "🚀 推送到 Gitee..." -ForegroundColor Yellow
git push -f origin $branch

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ 部署成功！" -ForegroundColor Green
    Write-Host ""
    Write-Host "接下来：" -ForegroundColor Yellow
    Write-Host "1. 打开 Gitee 仓库页面" -ForegroundColor White
    Write-Host "2. 点击 '服务' → 'Gitee Pages'" -ForegroundColor White
    Write-Host "3. 选择 master 分支，点击 '启动'" -ForegroundColor White
    Write-Host ""
    Write-Host "访问地址: https://wei1kuan.gitee.io/wenlvcollage/" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ 部署失败，请检查网络或 Git 配置" -ForegroundColor Red
}

Write-Host ""
Read-Host "按回车键退出"