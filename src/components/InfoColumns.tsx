import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { noticeData, newsData, recruitNews } from '@/data/mockData';
import type { NewsItem } from '@/data/mockData';
import { LacquerFrame } from '@/components/ChuPattern';

/** 信息列面板的配置项 */
interface ColumnConfig {
  icon: string;
  title: string;
  moreLink: string;
  data: NewsItem[];
}

/** 三栏面板 — 通知公告、新闻动态、招生就业信息 */
const columns: ColumnConfig[] = [
  { icon: '📋', title: '通知公告', moreLink: '/admission#admission-news', data: noticeData },
  { icon: '📰', title: '新闻动态', moreLink: '/about', data: newsData },
  { icon: '🎓', title: '招生就业信息', moreLink: '/admission#employment-info', data: recruitNews },
];

/**
 * InfoColumns — 三栏信息面板
 * 漆器边框镶金，楚式华美质感
 */
export default function InfoColumns() {
  return (
    <section className="py-6 bg-heritage-cream">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col, colIndex) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: colIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* 漆器镶边卡片 */}
              <LacquerFrame className="bg-white rounded-lg p-4">
                {/* 标题栏 */}
                <div className="flex items-center justify-between border-b-2 border-heritage-gold/40 pb-2 mb-3">
                  <h3 className="flex items-center gap-2 text-xl font-display font-bold text-heritage-primary">
                    <span className="text-xl">{col.icon}</span>
                    {col.title}
                  </h3>
                  <Link
                    to={col.moreLink}
                    className="text-sm text-heritage-gold hover:text-heritage-primary transition-colors shrink-0"
                  >
                    更多 &gt;
                  </Link>
                </div>

                {/* 列表区域 */}
                <ul className="space-y-0 flex-1">
                  {col.data.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between py-2.5 border-b border-heritage-gold/10 last:border-b-0 hover:bg-heritage-cream/60 transition-colors rounded px-1 group"
                    >
                      <Link
                        to={col.moreLink}
                        className="flex items-center gap-2 min-w-0 flex-1 group-hover:text-heritage-primary transition-colors"
                      >
                        {/* 鎏金圆点 */}
                        <span className="w-2 h-2 rounded-full bg-heritage-gold/60 shrink-0 group-hover:bg-heritage-gold transition-colors" />
                        <span className="text-base text-gray-700 truncate group-hover:text-heritage-primary transition-colors">
                          {item.title}
                        </span>
                      </Link>
                      <span className="text-sm text-gray-400 shrink-0 ml-2">
                        {item.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </LacquerFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
