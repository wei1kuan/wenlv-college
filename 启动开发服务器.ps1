# 文旅创意学院网站 - 前端启动脚本
# 使用方法：右键点击此文件，选择"使用 PowerShell 运行"

# 设置控制台编码为UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 项目路径
$projectPath = "D:\文旅学院主页"

# 检查Node.js是否可用
$nodeCmd = if (Test-Path "C:\Program Files\nodejs\node.exe") { "C:\Program Files\nodejs\node.exe" } else { "node" }
$npmCmd = if (Test-Path "C:\Program Files\nodejs\npm.cmd") { "C:\Program Files\nodejs\npm.cmd" } else { "npm" }

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  文旅创意学院网站 - 开发服务器" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# 进入项目目录
Set-Location -Path $projectPath
Write-Host "当前目录: $projectPath" -ForegroundColor Yellow
Write-Host ""

# 检查依赖是否已安装
if (-not (Test-Path "node_modules")) {
    Write-Host "正在安装项目依赖..." -ForegroundColor Yellow
    & $npmCmd install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "依赖安装失败！" -ForegroundColor Red
        Read-Host "按任意键退出"
        exit 1
    }
    Write-Host "依赖安装完成！" -ForegroundColor Green
    Write-Host ""
}

# 启动开发服务器
Write-Host "正在启动开发服务器..." -ForegroundColor Yellow
Write-Host "访问地址: http://localhost:5173/" -ForegroundColor Cyan
Write-Host ""
Write-Host "按 Ctrl+C 可停止服务器" -ForegroundColor Gray
Write-Host ""

& $npmCmd run dev

# 保持窗口
Read-Host "服务器已停止，按任意键退出"
