import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, '..', 'src');

let counter = 0;

function getPicsumUrl(originalUrl, index) {
  const isPortrait = originalUrl.includes('portrait_4_3');
  const seed = `wenlv-${index}`;
  if (isPortrait) {
    return `https://picsum.photos/seed/${seed}/400/533`;
  }
  return `https://picsum.photos/seed/${seed}/600/400`;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const traePattern = /https:\/\/trae-api-cn\.mchost\.guru\/api\/ide\/v1\/text_to_image\?prompt=[^&"']*&image_size=[^"')\s]+/g;
  
  let newContent = content;
  let match;
  let fileCount = 0;
  
  while ((match = traePattern.exec(content)) !== null) {
    counter++;
    fileCount++;
    const replacement = getPicsumUrl(match[0], counter);
    newContent = newContent.replace(match[0], replacement);
  }
  
  if (fileCount > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ ${path.relative(srcDir, filePath)}: 替换了 ${fileCount} 张图片`);
  }
  
  return fileCount;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let total = 0;
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      total += walkDir(fullPath);
    } else if (entry.isFile() && /\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      total += processFile(fullPath);
    }
  }
  
  return total;
}

console.log('🔍 开始扫描并替换Trae API图片...\n');
const total = walkDir(srcDir);
console.log(`\n🎉 完成！共替换了 ${total} 张图片`);
