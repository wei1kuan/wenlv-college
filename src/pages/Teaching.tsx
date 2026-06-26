import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutList, LayoutGrid } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import TabNewsLayout from '@/components/TabNewsLayout';
import { teachingNews } from '@/data/mockData';

type ViewMode = 'card' | 'list';

/** Hash → Tab 映射 */
const hashTabMap: Record<string, string> = {
  'teaching-achievements': 'teaching',
  'research-projects': 'research',
  'academic-exchanges': 'academic',
};

export default function Teaching() {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hashTabMap[hash] || 'teaching';
  });

  // 每次渲染同步 URL hash → activeTab
  const hashFromUrl = location.hash.replace('#', '');
  const derivedTab = hashTabMap[hashFromUrl] || activeTab;
  useEffect(() => {
    if (hashFromUrl && hashTabMap[hashFromUrl]) {
      setActiveTab(hashTabMap[hashFromUrl]);
    }
  });

  // 浏览器原生 hashchange 兜底
  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash.replace('#', '');
      if (h && hashTabMap[h]) setActiveTab(hashTabMap[h]);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const tabs = [
    { key: 'teaching', label: '教学成果', items: teachingNews.teaching },
    { key: 'research', label: '科研项目', items: teachingNews.research },
    { key: 'academic', label: '学术交流', items: teachingNews.academic },
  ];

  const currentItems = tabs.find((t) => t.key === activeTab)?.items || [];

  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="教学科研" />

          {/* ── 视图切换按钮 ── */}
          <div className="flex items-center justify-end gap-1 mb-6">
            <span className="text-xs text-gray-400 mr-2">视图：</span>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-heritage-primary text-white'
                  : 'text-gray-500 hover:bg-heritage-cream hover:text-heritage-primary'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              列表
            </button>
            <button
              onClick={() => setViewMode('card')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${
                viewMode === 'card'
                  ? 'bg-heritage-primary text-white'
                  : 'text-gray-500 hover:bg-heritage-cream hover:text-heritage-primary'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              卡片
            </button>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'list' ? (
              /* ── 列表模式：目录 + 新闻流 ── */
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <TabNewsLayout tabs={tabs} defaultTab={activeTab} />
              </motion.div>
            ) : (
              /* ── 卡片模式：Tab 切换 + 卡片网格 ── */
              <motion.div
                key="card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* 卡片模式下的简易 Tab */}
                <div className="flex gap-2 mb-6 border-b border-heritage-gold/20 pb-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-5 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                        activeTab === tab.key
                          ? 'bg-white text-heritage-primary border-t-2 border-heritage-primary -mb-[1px]'
                          : 'text-gray-500 hover:text-heritage-primary hover:bg-heritage-cream/50'
                      }`}
                    >
                      {tab.label}
                      <span className="ml-1.5 text-xs text-gray-400">({tab.items.length})</span>
                    </button>
                  ))}
                </div>

                {/* 卡片网格 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {currentItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-gold/10 overflow-hidden group transition-all"
                    >
                      {/* 卡片顶部色条 + 渐变装饰 */}
                      <div className="relative h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                          <span className="w-1 h-1 rounded-full bg-heritage-gold/60" />
                          {item.date}
                        </div>
                        <h4 className="text-lg font-display font-bold text-heritage-primary mb-2 line-clamp-2 group-hover:text-heritage-secondary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-base text-gray-500 leading-relaxed line-clamp-2">
                          {item.summary}
                        </p>
                        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                          <span className="text-sm text-heritage-gold hover:text-heritage-primary transition-colors cursor-pointer">
                            查看详情 →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 空状态 */}
                {currentItems.length === 0 && (
                  <div className="py-16 text-center text-gray-400">暂无内容</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
