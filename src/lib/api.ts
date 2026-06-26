const BASE = 'http://localhost:3001/api';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  category?: string;
  imageUrl?: string;
}

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const api = {
  /** 获取全部新闻，可按分类筛选 */
  getNews: (category?: string) =>
    request<NewsItem[]>(`/news${category ? `?category=${encodeURIComponent(category)}` : ''}`),

  /** 获取单条 */
  getNewsItem: (id: number) => request<NewsItem>(`/news/${id}`),

  /** 新增 */
  createNews: (data: Omit<NewsItem, 'id'>) =>
    request<NewsItem>('/news', { method: 'POST', body: JSON.stringify(data) }),

  /** 修改 */
  updateNews: (id: number, data: Partial<NewsItem>) =>
    request<NewsItem>(`/news/${id}`, { method: 'PUT', body: JSON.stringify(data) }),

  /** 删除 */
  deleteNews: (id: number) =>
    request<{ success: boolean }>(`/news/${id}`, { method: 'DELETE' }),

  /** 图片上传 */
  uploadImage: async (file: File): Promise<string> => {
    const form = new FormData();
    form.append('image', file);
    const res = await fetch('http://localhost:3001/api/upload', { method: 'POST', body: form });
    if (!res.ok) throw new Error('Upload failed');
    const data = await res.json();
    return `http://localhost:3001${data.url}`;
  },
};
