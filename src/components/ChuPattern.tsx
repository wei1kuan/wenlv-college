/**
 * ChuPattern — 楚式传统纹饰组件集
 * 包含：云雷纹装饰带、凤鸟简化纹、菱形勾连纹边框
 * 用于页面分隔、卡片镶边、区块点缀
 */

interface PatternProps {
  className?: string;
  color?: string;
  count?: number;
}

/** 云雷纹装饰带 — 横向连续回旋纹，常用于青铜器/漆器边缘 */
export function CloudThunderBand({ className = "", color = "#E8C547", count = 30 }: PatternProps) {
  const units = [];
  const unitWidth = 24;
  for (let i = 0; i < count; i++) {
    units.push(
      <g key={i} transform={`translate(${i * unitWidth}, 0)`}>
        <path
          d="M4 12 L4 4 L12 4 L12 12 L8 8"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12 L20 20 L12 20 L12 12 L16 16"
          fill="none"
          stroke={color}
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </g>
    );
  }
  return (
    <svg
      viewBox={`0 0 ${count * unitWidth} 24`}
      className={className}
      preserveAspectRatio="none"
    >
      {units}
    </svg>
  );
}

/** 凤鸟简化纹 — 菱形+圆点构成的抽象凤鸟排列，用于重点区块装饰 */
export function PhoenixBand({ className = "", color = "#E8C547", count = 16 }: PatternProps) {
  const units = [];
  const unitWidth = 36;
  for (let i = 0; i < count; i++) {
    const cx = i * unitWidth + 18;
    units.push(
      <g key={i} transform={`translate(${i * unitWidth}, 0)`}>
        {/* 菱形（凤鸟身体简化） */}
        <path
          d="M18 3 L24 12 L18 21 L12 12 Z"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.7"
        />
        {/* 圆点（凤眼） */}
        <circle cx="18" cy="12" r="2" fill={color} opacity="0.8" />
        {/* 两侧羽翼简化 */}
        <path d="M12 6 L6 3 L8 9" fill="none" stroke={color} strokeWidth="0.7" opacity="0.5" />
        <path d="M24 6 L30 3 L28 9" fill="none" stroke={color} strokeWidth="0.7" opacity="0.5" />
        <path d="M12 18 L6 21 L8 15" fill="none" stroke={color} strokeWidth="0.7" opacity="0.5" />
        <path d="M24 18 L30 21 L28 15" fill="none" stroke={color} strokeWidth="0.7" opacity="0.5" />
      </g>
    );
  }
  return (
    <svg
      viewBox={`0 0 ${count * unitWidth} 24`}
      className={className}
      preserveAspectRatio="none"
    >
      {units}
    </svg>
  );
}

/** 菱形勾连纹边框 — 四角装饰，用于卡片四角 */
export function DiamondCorner({ className = "", color = "#E8C547", size = 32 }: PatternProps & { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" className={className} width={size} height={size}>
      {/* 外菱形框 */}
      <path
        d="M16 2 L30 16 L16 30 L2 16 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.6"
      />
      {/* 内菱形 */}
      <path
        d="M16 8 L24 16 L16 24 L8 16 Z"
        fill="none"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.4"
      />
      {/* 中心点 */}
      <circle cx="16" cy="16" r="2" fill={color} opacity="0.7" />
    </svg>
  );
}

/** 漆器风格区块分隔带 — 双层鎏金线 + 中央菱形纹 */
export function LacquerDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 上金线 */}
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-px bg-gradient-to-r from-transparent via-heritage-gold/60 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-heritage-gold/30 to-transparent" />
      </div>
      {/* 中央菱形装饰 */}
      <div className="shrink-0 flex items-center gap-2">
        <div className="w-2 h-2 border border-heritage-gold/60 rotate-45" />
        <div className="w-1.5 h-1.5 bg-heritage-gold/70 rotate-45" />
        <div className="w-2 h-2 border border-heritage-gold/60 rotate-45" />
      </div>
      {/* 下金线 */}
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-px bg-gradient-to-l from-transparent via-heritage-gold/60 to-transparent" />
        <div className="h-px bg-gradient-to-l from-transparent via-heritage-gold/30 to-transparent" />
      </div>
    </div>
  );
}

/** 漆器卡片镶边 — 四条边 + 四角菱形纹，仿楚式漆器盒效果 */
export function LacquerFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* 上边鎏金线 */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-heritage-gold/70 to-transparent" />
      {/* 下边鎏金线 */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-heritage-gold/70 to-transparent" />
      {/* 左边鎏金线 */}
      <div className="absolute top-4 bottom-4 left-0 w-px bg-gradient-to-b from-transparent via-heritage-gold/70 to-transparent" />
      {/* 右边鎏金线 */}
      <div className="absolute top-4 bottom-4 right-0 w-px bg-gradient-to-b from-transparent via-heritage-gold/70 to-transparent" />
      {/* 四角菱形纹 */}
      <DiamondCorner className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" color="#E8C547" size={20} />
      <DiamondCorner className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" color="#E8C547" size={20} />
      <DiamondCorner className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2" color="#E8C547" size={20} />
      <DiamondCorner className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" color="#E8C547" size={20} />
      {/* 内容 */}
      {children}
    </div>
  );
}

export default { CloudThunderBand, PhoenixBand, DiamondCorner, LacquerDivider, LacquerFrame };
