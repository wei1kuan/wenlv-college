import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HuiwenBgTexture } from '@/components/HuiwenPattern';

/**
 * TopBar — 顶部欢迎条（漆器红底 + 中国结暗纹）
 */
export default function TopBar() {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      return `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${weekDays[now.getDay()]}`;
    };
    setDateStr(formatDate());
  }, []);

  return (
    <div className="bg-heritage-cream text-sm">
      <div className="max-w-[1600px] mx-auto bg-heritage-primary text-white relative overflow-hidden">
        <HuiwenBgTexture color="#E8C547" opacity={0.18} />
        <div className="px-4 flex items-center justify-between h-9 relative z-10">
        {/* 左侧：欢迎语 + 日期 */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="hidden sm:inline whitespace-nowrap">
            欢迎访问长江职业学院文旅创意学院！
          </span>
          <span className="text-white/80 text-xs whitespace-nowrap">{dateStr}</span>
        </div>

        {/* 右侧：学校首页链接 */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="http://www.cjxy.edu.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-gold-lacquer transition-colors"
          >
            学校首页
          </a>
          <span className="text-white/30">|</span>
          <Link
            to="/"
            className="text-white/90 hover:text-gold-lacquer transition-colors"
          >
            学院首页
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
