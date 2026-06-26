import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit3, Trash2, X, Save, Upload } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { api, NewsItem } from '@/lib/api';

const emptyForm = { title: '', date: '', summary: '', category: '', imageUrl: '' };

export default function Admin() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);

  const loadNews = useCallback(async () => {
    try {
      const data = await api.getNews();
      setNews(data);
    } catch (e) {
      console.error('加载新闻失败，请确保后端已启动', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadNews(); }, [loadNews]);

  const handleSave = async () => {
    if (!form.title.trim()) return;
    try {
      if (editing) {
        await api.updateNews(editing.id, form);
      } else {
        await api.createNews(form);
      }
      setShowForm(false);
      setEditing(null);
      setForm(emptyForm);
      loadNews();
    } catch (e) {
      alert('保存失败，请检查后端服务');
    }
  };

  const handleEdit = (item: NewsItem) => {
    setEditing(item);
    setForm({ title: item.title, date: item.date, summary: item.summary, category: item.category || '', imageUrl: item.imageUrl || '' });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('确定删除该新闻？')) return;
    try { await api.deleteNews(id); loadNews(); }
    catch { alert('删除失败'); }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await api.uploadImage(file);
      setForm(prev => ({ ...prev, imageUrl: url }));
    } catch { alert('上传失败'); }
    finally { setUploading(false); }
  };

  const categories = ['notice', 'news', 'recruit', 'teaching', 'research', 'academic', 'party', 'industry', 'student', 'other'];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="新闻管理" subtitle="增删查改内容管理" />

          {/* 新增按钮 */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => { setEditing(null); setForm(emptyForm); setShowForm(true); }}
              className="flex items-center gap-2 px-5 py-2.5 bg-heritage-primary text-white rounded-lg hover:bg-heritage-secondary transition-colors"
            >
              <Plus className="w-4 h-4" /> 新增新闻
            </button>
          </div>

          {/* 编辑 Modal */}
          <AnimatePresence>
            {showForm && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between p-6 border-b">
                    <h3 className="text-xl font-display font-bold text-heritage-primary">
                      {editing ? '编辑新闻' : '新增新闻'}
                    </h3>
                    <button onClick={() => { setShowForm(false); setEditing(null); }}
                      className="p-1 hover:bg-gray-100 rounded"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">标题 *</label>
                      <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-heritage-primary outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">日期</label>
                        <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-heritage-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">分类</label>
                        <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-heritage-primary outline-none">
                          <option value="">无分类</option>
                          {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">摘要</label>
                      <textarea rows={4} value={form.summary} onChange={e => setForm(p => ({ ...p, summary: e.target.value }))}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-heritage-primary outline-none resize-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">图片</label>
                      <div className="flex items-center gap-3">
                        <input value={form.imageUrl} onChange={e => setForm(p => ({ ...p, imageUrl: e.target.value }))}
                          placeholder="图片URL"
                          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-heritage-primary outline-none" />
                        <label className="flex items-center gap-1 px-4 py-2 bg-heritage-gold/10 text-heritage-primary rounded-lg cursor-pointer hover:bg-heritage-gold/20 transition-colors">
                          <Upload className="w-4 h-4" />{uploading ? '上传中...' : '上传'}
                          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
                        </label>
                      </div>
                      {form.imageUrl && (
                        <img src={form.imageUrl} alt="预览" className="mt-2 h-32 rounded-lg object-cover" />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 p-6 border-t">
                    <button onClick={() => { setShowForm(false); setEditing(null); }}
                      className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">取消</button>
                    <button onClick={handleSave}
                      className="flex items-center gap-2 px-5 py-2 bg-heritage-primary text-white rounded-lg hover:bg-heritage-secondary transition-colors">
                      <Save className="w-4 h-4" />保存
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 新闻列表 */}
          <div className="bg-white rounded-xl shadow-sm border border-heritage-gold/10 overflow-hidden">
            {loading ? (
              <div className="py-16 text-center text-gray-400">加载中...</div>
            ) : news.length === 0 ? (
              <div className="py-16 text-center text-gray-400">暂无新闻，点击上方按钮新增</div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heritage-primary">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heritage-primary">标题</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heritage-primary">日期</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heritage-primary">分类</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-heritage-primary">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map(item => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-heritage-cream/30 transition-colors">
                      <td className="px-6 py-3 text-sm text-gray-500">{item.id}</td>
                      <td className="px-6 py-3 text-sm text-gray-700 max-w-md truncate">{item.title}</td>
                      <td className="px-6 py-3 text-sm text-gray-500">{item.date}</td>
                      <td className="px-6 py-3 text-sm text-gray-500">{item.category || '-'}</td>
                      <td className="px-6 py-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => handleEdit(item)}
                            className="p-1.5 text-heritage-gold hover:bg-heritage-gold/10 rounded transition-colors">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(item.id)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
