import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NewsItem } from '@/data/mockData';

interface TabConfig {
  key: string;
  label: string;
  items: NewsItem[];
}

interface TabNewsLayoutProps {
  tabs: TabConfig[];
  defaultTab?: string;
}

/**
 * TabNewsLayout — 目录 + 新闻流双栏布局
 * 左侧竖向目录切换，右侧新闻列表
 * 移动端目录变为横向 Tab 栏
 */
export default function TabNewsLayout({ tabs, defaultTab }: TabNewsLayoutProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.key || '');
  const currentItems = tabs.find((t) => t.key === activeTab)?.items || [];

  return (
    <div className="flex flex-col lg:flex-row gap-0 mt-6">
      {/* ── 左侧目录（桌面竖排 / 移动横排）── */}
      <div className="lg:w-60 shrink-0">
        {/* 移动端：横向滚动 Tab */}
        <div className="flex lg:hidden overflow-x-auto gap-1 pb-2 mb-4 border-b border-heritage-gold/20">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab.key
                  ? 'bg-heritage-primary text-white'
                  : 'text-gray-600 hover:bg-heritage-cream hover:text-heritage-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 桌面端：竖向目录 */}
        <nav className="hidden lg:block bg-white rounded-xl shadow-sm border border-heritage-gold/10 overflow-hidden sticky top-28">
          <div className="bg-heritage-primary text-white text-base font-bold px-5 py-4 text-center">
            目录导航
          </div>
          {tabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full text-left px-5 py-4 text-base transition-colors duration-200 border-b border-heritage-gold/5 last:border-b-0 flex items-center gap-2.5 ${
                activeTab === tab.key
                  ? 'bg-heritage-cream text-heritage-primary font-bold border-r-2 border-r-heritage-primary'
                  : 'text-gray-600 hover:bg-heritage-cream/50 hover:text-heritage-primary'
              }`}
            >
              <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                activeTab === tab.key ? 'bg-heritage-primary' : 'bg-heritage-gold/40'
              }`} />
              {tab.label}
              <span className="ml-auto text-sm text-gray-400">
                {tab.items.length}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* ── 右侧新闻列表 ── */}
      <div className="flex-1 lg:ml-6 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {/* 当前分类标题 */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-heritage-primary">
              <div className="w-1 h-5 bg-heritage-primary rounded-full" />
              <h3 className="text-xl font-display font-bold text-heritage-primary">
                {tabs.find((t) => t.key === activeTab)?.label || ''}
              </h3>
              <span className="text-xs text-gray-400 ml-auto">
                共 {currentItems.length} 条
              </span>
            </div>

            {/* 新闻条目列表 */}
            <div className="bg-white rounded-xl shadow-sm border border-heritage-gold/10 overflow-hidden">
              {currentItems.length === 0 ? (
                <div className="py-16 text-center text-gray-400">暂无内容</div>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {currentItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between px-6 py-5 hover:bg-heritage-cream/50 transition-colors group"
                    >
                      <a
                        href="#"
                        className="flex items-center gap-3 min-w-0 flex-1 group-hover:text-heritage-primary transition-colors"
                      >
                        {/* 金色圆点 */}
                        <span className="w-2 h-2 rounded-full bg-heritage-gold/50 shrink-0 group-hover:bg-heritage-gold transition-colors" />
                        {/* 标题 */}
                        <span className="text-base text-gray-700 truncate group-hover:text-heritage-primary transition-colors">
                          {item.title}
                        </span>
                      </a>
                      {/* 日期 */}
                      <span className="text-sm text-gray-400 shrink-0 ml-4">
                        {item.date}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 底部分页示意 */}
            {currentItems.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-6 text-base">
                <button className="px-3 py-1.5 rounded border border-gray-200 text-gray-400 hover:border-heritage-primary hover:text-heritage-primary transition-colors">
                  上一页
                </button>
                <button className="px-3 py-1.5 rounded bg-heritage-primary text-white">1</button>
                <button className="px-3 py-1.5 rounded border border-gray-200 text-gray-500 hover:border-heritage-primary hover:text-heritage-primary transition-colors">
                  2
                </button>
                <button className="px-3 py-1.5 rounded border border-gray-200 text-gray-500 hover:border-heritage-primary hover:text-heritage-primary transition-colors">
                  下一页
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
