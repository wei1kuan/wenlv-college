/**
 * CollegeLogo — 文旅创意学院院徽
 * 设计理念：以「文」字为核，融合楚式凤鸟纹、回纹、建筑空间线条
 * 故宫红 + 鎏金配色
 */
interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function CollegeLogo({ className = "", size = 80, showText = true }: LogoProps) {
  const s = size;
  const primary = "#8B2E2E";
  const gold = "#E8C547";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* 徽章图形 */}
      <svg width={s} height={s} viewBox="0 0 100 100" className="shrink-0">
        {/* 外层回纹方框 — 中国传统纹样 */}
        <rect x="2" y="2" width="96" height="96" rx="8" fill="none" stroke={primary} strokeWidth="3" />
        <rect x="8" y="8" width="84" height="84" rx="5" fill="none" stroke={gold} strokeWidth="1" opacity="0.6" />

        {/* 内层圆 — 天圆地方 */}
        <circle cx="50" cy="50" r="34" fill="none" stroke={primary} strokeWidth="1.5" opacity="0.5" />
        <circle cx="50" cy="50" r="30" fill={primary} />

        {/* 「文」字 — 主体 */}
        <text x="50" y="66" textAnchor="middle" fill={gold}
          fontFamily="'Noto Serif SC', 'SimSun', serif" fontSize="42" fontWeight="700"
          letterSpacing="0">
          文
        </text>

        {/* 顶部凤鸟简化纹 — 代表荆楚非遗 */}
        <path d="M50 4 L46 12 L42 10 L44 14 L38 16 L42 18 L38 22 L46 18 L50 24 L54 18 L62 22 L58 18 L62 16 L56 14 L58 10 L54 12 Z"
          fill={gold} opacity="0.8" />

        {/* 底部弧线 — 环境空间/建筑屋檐 */}
        <path d="M20 76 Q50 86 80 76" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.6" />
        <path d="M24 80 Q50 89 76 80" fill="none" stroke={gold} strokeWidth="1" opacity="0.4" />

        {/* 左右竖线 — 产品设计/柱式结构 */}
        <line x1="16" y1="30" x2="16" y2="70" stroke={gold} strokeWidth="1" opacity="0.35" />
        <line x1="84" y1="30" x2="84" y2="70" stroke={gold} strokeWidth="1" opacity="0.35" />
      </svg>

      {/* 右侧文字区 — 等宽两端对齐 */}
      {showText && (
        <div className="flex flex-col justify-center" style={{ width: '220px' }}>
          <h2 className="text-2xl font-display font-bold text-heritage-primary text-justify leading-tight"
            style={{ textAlignLast: 'justify', textJustify: 'inter-character' }}>
            文旅创意学院
          </h2>
          <p className="text-[11px] font-display text-heritage-secondary/70 mt-1 text-justify"
            style={{ textAlignLast: 'justify', textJustify: 'inter-character' }}>
            荆楚非遗传承与创新实践中心
          </p>
        </div>
      )}
    </div>
  );
}
