/**
 * DigitalHeritagePattern — 数字非遗纹饰系统
 *
 * 设计理念：
 * - 核心纹样：凤鸟纹、云气纹 → 点阵像素化重构
 * - 结构理念：榫卯模块、漆器层次
 * - 数字赋能：几何模块化、立体空间感
 * - 年轻化：「守核改形」— 传统灵魂，现代形态
 */

interface PatternProps {
  className?: string;
  color?: string;
  size?: number;
}

/* ══════ 点阵凤鸟纹 — 像素化重构 ══════ */
export function PixelPhoenix({ className = "", color = "#E8C547", size = 16 }: PatternProps) {
  const c = color;
  const s = size;
  const u = s / 16; // unit
  return (
    <svg viewBox="0 0 16 16" className={className} width={s} height={s}>
      {/* 凤冠 — 顶部三簇 */}
      <rect x="7" y="0" width="2" height="2" fill={c} opacity="0.9" />
      <rect x="5" y="1" width="2" height="1" fill={c} opacity="0.7" />
      <rect x="9" y="1" width="2" height="1" fill={c} opacity="0.7" />
      {/* 凤首 */}
      <rect x="6" y="2" width="4" height="2" fill={c} opacity="0.95" />
      <rect x="7" y="4" width="2" height="1" fill={c} opacity="0.8" />
      {/* 凤眼 */}
      <rect x="7" y="3" width="1" height="1" fill={c === "#E8C547" ? "#8B2E2E" : "#1a1a1a"} opacity="0.9" />
      <rect x="8" y="3" width="1" height="1" fill={c === "#E8C547" ? "#8B2E2E" : "#1a1a1a"} opacity="0.9" />
      {/* 凤身 */}
      <rect x="5" y="5" width="6" height="3" fill={c} opacity="0.7" />
      {/* 凤翼 — 展开 */}
      <rect x="2" y="6" width="3" height="1" fill={c} opacity="0.6" />
      <rect x="11" y="6" width="3" height="1" fill={c} opacity="0.6" />
      <rect x="1" y="7" width="2" height="1" fill={c} opacity="0.5" />
      <rect x="13" y="7" width="2" height="1" fill={c} opacity="0.5" />
      <rect x="3" y="5" width="2" height="1" fill={c} opacity="0.5" />
      <rect x="11" y="5" width="2" height="1" fill={c} opacity="0.5" />
      {/* 凤尾 — 长拖尾 */}
      <rect x="6" y="8" width="4" height="1" fill={c} opacity="0.6" />
      <rect x="5" y="9" width="2" height="1" fill={c} opacity="0.5" />
      <rect x="9" y="9" width="2" height="1" fill={c} opacity="0.5" />
      <rect x="4" y="10" width="2" height="1" fill={c} opacity="0.4" />
      <rect x="10" y="10" width="2" height="1" fill={c} opacity="0.4" />
      <rect x="5" y="11" width="1" height="1" fill={c} opacity="0.3" />
      <rect x="10" y="11" width="1" height="1" fill={c} opacity="0.3" />
    </svg>
  );
}

/* ══════ 点阵云气纹 — 像素化重构 ══════ */
export function PixelCloud({ className = "", color = "#E8C547", size = 14 }: PatternProps) {
  const c = color;
  return (
    <svg viewBox="0 0 14 8" className={className} width={size} height={size * 0.57}>
      {/* 云头 — 螺旋点阵 */}
      <rect x="0" y="4" width="2" height="2" fill={c} opacity="0.6" />
      <rect x="2" y="3" width="2" height="1" fill={c} opacity="0.7" />
      <rect x="2" y="6" width="2" height="1" fill={c} opacity="0.5" />
      <rect x="4" y="2" width="3" height="1" fill={c} opacity="0.8" />
      <rect x="4" y="7" width="2" height="1" fill={c} opacity="0.4" />
      <rect x="7" y="1" width="2" height="1" fill={c} opacity="0.7" />
      <rect x="7" y="3" width="3" height="2" fill={c} opacity="0.9" />
      <rect x="10" y="2" width="2" height="1" fill={c} opacity="0.6" />
      <rect x="10" y="5" width="2" height="2" fill={c} opacity="0.6" />
      <rect x="12" y="3" width="2" height="2" fill={c} opacity="0.5" />
    </svg>
  );
}

/* ══════ 榫卯模块连接点 ══════ */
export function TenonJoint({ className = "", color = "#E8C547", size = 12 }: PatternProps) {
  const c = color;
  return (
    <svg viewBox="0 0 12 12" className={className} width={size} height={size}>
      {/* 外框 — 榫头 */}
      <rect x="0" y="3" width="5" height="6" fill="none" stroke={c} strokeWidth="1.2" opacity="0.7" />
      {/* 卯眼 */}
      <rect x="5" y="0" width="7" height="5" fill="none" stroke={c} strokeWidth="1.2" opacity="0.7" />
      {/* 插接点 — 高亮 */}
      <rect x="7" y="5" width="3" height="3" fill="none" stroke={c} strokeWidth="1.2" opacity="0.8" />
      {/* 中心点 */}
      <rect x="5" y="5" width="2" height="2" fill={c} opacity="0.6" />
    </svg>
  );
}

/* ══════ 像素化装饰带 — 凤鸟+云气+榫卯交错 ══════ */
export function DigitalHeritageBand({ className = "", color = "#E8C547" }: PatternProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="hidden sm:flex items-center gap-1.5">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={`ph-${i}`} className="opacity-70" style={{ opacity: 0.4 + i * 0.08 }}>
            <PixelPhoenix color={color} size={12} />
          </div>
        ))}
      </div>
      <TenonJoint color={color} size={14} />
      <PixelCloud color={color} size={16} />
      <PixelPhoenix color={color} size={16} />
      <PixelCloud color={color} size={16} />
      <TenonJoint color={color} size={14} />
      <div className="hidden sm:flex items-center gap-1.5">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={`ph2-${i}`} style={{ opacity: 0.4 + i * 0.08 }}>
            <PixelPhoenix color={color} size={12} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════ 像素化标题装饰 — 左右对称 ══════ */
export function DigitalTitleDecor({ className = "", color = "#E8C547" }: PatternProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-heritage-gold/30 to-heritage-gold/50" />
      <div className="flex items-center gap-2 shrink-0">
        <TenonJoint color={color} size={12} />
        <PixelPhoenix color={color} size={16} />
        <PixelCloud color={color} size={14} />
        <div className="w-2 h-2 rotate-45 bg-heritage-gold/40" />
        <PixelCloud color={color} size={14} />
        <PixelPhoenix color={color} size={16} />
        <TenonJoint color={color} size={12} />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-heritage-gold/30 to-heritage-gold/50" />
    </div>
  );
}

export default { PixelPhoenix, PixelCloud, TenonJoint, DigitalHeritageBand, DigitalTitleDecor };
