# 文旅创意学院网站 - 构建脚本
# 使用方法：右键点击此文件，选择"使用 PowerShell 运行"

# 设置控制台编码为UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 项目路径
$projectPath = "D:\文旅学院主页"

# 检查Node.js是否可用
$nodeCmd = if (Test-Path "C:\Program Files\nodejs\node.exe") { "C:\Program Files\nodejs\node.exe" } else { "node" }
$npmCmd = if (Test-Path "C:\Program Files\nodejs\npm.cmd") { "C:\Program Files\nodejs\npm.cmd" } else { "npm" }

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  文旅创意学院网站 - 构建脚本" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# 进入项目目录
Set-Location -Path $projectPath
Write-Host "当前目录: $projectPath" -ForegroundColor Yellow
Write-Host ""

# 执行构建
Write-Host "正在构建项目..." -ForegroundColor Yellow
& $npmCmd run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "构建成功！" -ForegroundColor Green
    Write-Host "构建产物位于: $projectPath\dist" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "可使用以下命令启动静态服务器预览：" -ForegroundColor Yellow
    Write-Host "  npx serve dist" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "构建失败！" -ForegroundColor Red
}

Read-Host "按任意键退出"
