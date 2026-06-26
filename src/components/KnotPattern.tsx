/**
 * KnotPattern — 中国传统结艺纹饰组件集
 * 包含：盘长结(中国结)、如意纹带、交织纹边框
 * 用于红色背景区域的装饰叠加
 */

interface KnotProps {
  className?: string;
  color?: string;
  opacity?: number;
}

/** 盘长结简化纹 — 经典中国结图案，可用于背景水印或角标 */
export function EndlessKnot({ className = "", color = "#E8C547", opacity = 0.25 }: KnotProps) {
  const c = color;
  return (
    <svg viewBox="0 0 64 64" className={className} style={{ opacity }}>
      {/* 外框菱形 */}
      <path d="M32 4 L60 32 L32 60 L4 32 Z" fill="none" stroke={c} strokeWidth="1.2" />
      {/* 交织线条 — 模拟盘长结的穿插结构 */}
      {/* 上横 */}
      <path d="M20 20 L44 20" fill="none" stroke={c} strokeWidth="1" />
      <path d="M20 28 L44 28" fill="none" stroke={c} strokeWidth="0.8" />
      {/* 下横 */}
      <path d="M20 36 L44 36" fill="none" stroke={c} strokeWidth="0.8" />
      <path d="M20 44 L44 44" fill="none" stroke={c} strokeWidth="1" />
      {/* 左竖 */}
      <path d="M20 20 L20 44" fill="none" stroke={c} strokeWidth="1" />
      <path d="M28 20 L28 44" fill="none" stroke={c} strokeWidth="0.8" />
      {/* 右竖 */}
      <path d="M36 20 L36 44" fill="none" stroke={c} strokeWidth="0.8" />
      <path d="M44 20 L44 44" fill="none" stroke={c} strokeWidth="1" />
      {/* 中央菱形 */}
      <path d="M32 24 L40 32 L32 40 L24 32 Z" fill="none" stroke={c} strokeWidth="0.8" />
      {/* 四角结点 */}
      <circle cx="20" cy="20" r="2" fill={c} />
      <circle cx="44" cy="20" r="2" fill={c} />
      <circle cx="20" cy="44" r="2" fill={c} />
      <circle cx="44" cy="44" r="2" fill={c} />
      {/* 流苏暗示线 */}
      <path d="M30 58 L30 48 M34 58 L34 48" fill="none" stroke={c} strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
}

/** 盘长结小徽章 — 用于标题栏装饰的小型中国结 */
export function KnotBadge({ className = "", color = "#E8C547" }: KnotProps) {
  const c = color;
  return (
    <svg viewBox="0 0 24 24" className={className} width="20" height="20">
      {/* 菱形外框 */}
      <path d="M12 1 L22 12 L12 23 L2 12 Z" fill="none" stroke={c} strokeWidth="1.2" />
      {/* 内部十字交织 */}
      <path d="M8 8 L16 8 M8 12 L16 12 M8 16 L16 16" fill="none" stroke={c} strokeWidth="0.8" />
      <path d="M8 8 L8 16 M12 8 L12 16 M16 8 L16 16" fill="none" stroke={c} strokeWidth="0.8" />
      {/* 中心菱形 */}
      <path d="M12 10 L14 12 L12 14 L10 12 Z" fill={c} opacity="0.5" />
      {/* 四角点缀 */}
      <circle cx="8" cy="8" r="1.2" fill={c} />
      <circle cx="16" cy="8" r="1.2" fill={c} />
      <circle cx="8" cy="16" r="1.2" fill={c} />
      <circle cx="16" cy="16" r="1.2" fill={c} />
    </svg>
  );
}

/** 如意纹装饰带 — 连续如意云头纹，用于横幅镶边 */
export function RuyiBand({ className = "", color = "#E8C547", count = 20 }: KnotProps & { count?: number }) {
  const units = [];
  const uw = 32;
  const c = color;
  for (let i = 0; i < count; i++) {
    units.push(
      <g key={i} transform={`translate(${i * uw}, 0)`}>
        {/* 如意云头 — 简化三瓣造型 */}
        <path
          d="M16 2 C10 2 6 6 6 10 C6 14 10 18 16 18 C22 18 26 14 26 10 C26 6 22 2 16 2"
          fill="none" stroke={c} strokeWidth="0.8"
        />
        <path d="M10 10 L10 22 M16 12 L16 22 M22 10 L22 22" fill="none" stroke={c} strokeWidth="0.5" opacity="0.5" />
        {/* 底部连线 */}
        <path d="M6 22 L26 22" fill="none" stroke={c} strokeWidth="0.6" opacity="0.4" />
      </g>
    );
  }
  return (
    <svg viewBox={`0 0 ${count * uw} 24`} className={className} preserveAspectRatio="none">
      {units}
    </svg>
  );
}

/** 红色区域背景纹 — 中国结+菱形网格叠加，用于 TopBar/Footer 等深色背景 */
export function KnotBgTexture({ className = "", color = "#E8C547", opacity = 0.12 }: KnotProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* 网格背景 */}
      <svg width="100%" height="100%" style={{ opacity }}>
        <defs>
          <pattern id="knot-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* 菱形网格 */}
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke={color} strokeWidth="0.5" />
            {/* 十字 */}
            <path d="M20 20 L40 20 M20 28 L40 28 M20 36 L40 36 M20 44 L40 44" fill="none" stroke={color} strokeWidth="0.3" />
            <path d="M20 20 L20 44 M28 20 L28 44 M36 20 L36 44 M40 20 L40 44" fill="none" stroke={color} strokeWidth="0.3" />
            {/* 中心点 */}
            <circle cx="30" cy="30" r="1" fill={color} opacity="0.5" />
          </pattern>
          <pattern id="knot-grid-dense" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M15 0 L30 15 L15 30 L0 15 Z" fill="none" stroke={color} strokeWidth="0.3" />
            <circle cx="15" cy="15" r="0.8" fill={color} opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#knot-grid)" />
        <rect width="100%" height="100%" fill="url(#knot-grid-dense)" opacity="0.5" />
      </svg>
    </div>
  );
}

/** 红色区域角装饰 — 中国结纹样角花 */
export function KnotCorner({ className = "", color = "#E8C547", size = 48 }: KnotProps & { size?: number }) {
  const c = color;
  return (
    <svg viewBox="0 0 48 48" className={className} width={size} height={size}>
      {/* L形外框 */}
      <path d="M4 44 L4 4 L44 4" fill="none" stroke={c} strokeWidth="1" />
      {/* 内层 L */}
      <path d="M10 38 L10 10 L38 10" fill="none" stroke={c} strokeWidth="0.6" opacity="0.6" />
      {/* 角点菱形 */}
      <path d="M4 4 L10 10 L4 16 L-2 10 Z" fill="none" stroke={c} strokeWidth="0.8" opacity="0.7" />
      {/* 结饰圆点 */}
      <circle cx="4" cy="4" r="3" fill={c} opacity="0.7" />
      <circle cx="12" cy="4" r="1.5" fill={c} opacity="0.4" />
      <circle cx="4" cy="12" r="1.5" fill={c} opacity="0.4" />
    </svg>
  );
}

export default { EndlessKnot, KnotBadge, RuyiBand, KnotBgTexture, KnotCorner };
