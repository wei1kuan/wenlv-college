import fs from 'fs';
import path from 'path';

const distPath = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✅ 404.html 已创建，SPA 路由刷新问题已解决');
} else {
  console.error('❌ 未找到 index.html，请先运行构建命令');
  process.exit(1);
}