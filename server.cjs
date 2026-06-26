const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'data', 'news.json');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// ── 图片上传 ──
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public', 'uploads'),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// ── 读写工具 ──
function readNews() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeNews(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// ── 路由 ──
app.get('/api/news', (req, res) => {
  const news = readNews();
  const { category, limit } = req.query;
  let result = news;
  if (category) result = result.filter(n => n.category === category);
  if (limit) result = result.slice(0, parseInt(limit));
  res.json(result);
});

app.get('/api/news/:id', (req, res) => {
  const news = readNews();
  const item = news.find(n => n.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

app.post('/api/news', (req, res) => {
  const news = readNews();
  const { title, date, summary, category, imageUrl } = req.body;
  const newItem = {
    id: news.length > 0 ? Math.max(...news.map(n => n.id)) + 1 : 1,
    title: title || '',
    date: date || new Date().toISOString().slice(0, 10),
    summary: summary || '',
    category: category || '',
    imageUrl: imageUrl || '',
  };
  news.push(newItem);
  writeNews(news);
  res.status(201).json(newItem);
});

app.put('/api/news/:id', (req, res) => {
  const news = readNews();
  const idx = news.findIndex(n => n.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  news[idx] = { ...news[idx], ...req.body, id: news[idx].id };
  writeNews(news);
  res.json(news[idx]);
});

app.delete('/api/news/:id', (req, res) => {
  const news = readNews();
  const filtered = news.filter(n => n.id !== parseInt(req.params.id));
  if (filtered.length === news.length) return res.status(404).json({ error: 'Not found' });
  writeNews(filtered);
  res.json({ success: true });
});

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  res.json({ url: `/uploads/${req.file.filename}` });
});

app.listen(PORT, () => {
  console.log(`📰 新闻管理后台: http://localhost:${PORT}`);
});
