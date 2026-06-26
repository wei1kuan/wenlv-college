import { useState } from 'react';
import { Search } from 'lucide-react';

/**
 * Header — Logo 区域 + 搜索栏
 * 参考 shae.cjxy.edu.cn 的 .header 区域设计
 * 左侧：学校 Logo + 分隔线 + 学院 Logo 占位符
 * 右侧：搜索输入框
 */
export default function Header() {
  const [searchKeyword, setSearchKeyword] = useState('');

  /** 提交搜索 — 使用百度站内搜索（暂为展示用途，正式上线可接入真实搜索接口） */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKeyword.trim()) return;
    // 百度站内搜索：限定在当前域名下搜索
    const searchUrl = `https://www.baidu.com/s?wd=site:shae.cjxy.edu.cn ${encodeURIComponent(searchKeyword)}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="bg-heritage-cream">
      <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between py-5">
        {/* 左侧：学校 Logo + 分隔 + 学院 Logo 占位符 */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* 长江职业学院 Logo */}
          <a
            href="http://www.cjxy.edu.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <img
              src="/cjxy-logo.png"
              alt="长江职业学院"
              className="h-16 md:h-[78px] w-auto object-contain"
            />
          </a>

          {/* 分隔竖线 */}
          <div className="hidden sm:block w-px h-12 bg-gray-300 shrink-0" />

          {/* 文旅创意学院 Logo 占位符 */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <div className="w-[78px] h-[78px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
              <span className="text-gray-400 text-xs text-center leading-tight">
                文旅学院<br />Logo
              </span>
            </div>
            <div className="hidden lg:block" style={{ width: '220px' }}>
              <h2 className="text-2xl font-display font-bold text-heritage-primary text-justify" style={{ textAlignLast: 'justify', textJustify: 'inter-character' }}>
                文旅创意学院
              </h2>
              <p className="text-[11px] font-display text-heritage-secondary/70 mt-1 text-justify" style={{ textAlignLast: 'justify', textJustify: 'inter-character' }}>
                荆楚非遗传承与创新实践中心
              </p>
            </div>
          </div>
        </div>

        {/* 右侧：搜索栏 */}
        <form
          onSubmit={handleSearch}
          className="flex items-center shrink-0 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          style={{
            width: '300px',
            border: '1.5px solid rgba(139,46,46,0.25)',
            background: 'rgba(245,240,235,0.6)',
          }}
        >
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="搜索..."
            className="flex-1 px-5 py-2.5 text-sm outline-none bg-transparent text-gray-500 placeholder-gray-400"
          />
          <div className="w-px h-5 bg-heritage-gold/30" />
          <button
            type="submit"
            className="px-4 py-2.5 text-heritage-gold hover:text-heritage-primary hover:bg-heritage-gold/5 transition-colors"
            aria-label="搜索"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
