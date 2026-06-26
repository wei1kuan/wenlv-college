import React from 'react';

interface HuiwenProps {
  className?: string;
  color?: string;
}

export const HuiwenHorizontal: React.FC<HuiwenProps & { count?: number }> = ({ 
  className = "", 
  color = "#E8C547",
  count = 20
}) => {
  const units = [];
  for (let i = 0; i < count; i++) {
    units.push(
      <g key={i} transform={`translate(${i * 20}, 0)`}>
        <path 
          d="M2 18 L2 6 L14 6 L14 14 L6 14 L6 10 L10 10" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        <path 
          d="M18 2 L18 14 L6 14 L6 6 L14 6 L14 10 L10 10" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
          strokeLinecap="square"
          opacity="0"
        />
      </g>
    );
  }
  return (
    <svg 
      viewBox={`0 0 ${count * 20} 20`} 
      className={className}
      preserveAspectRatio="none"
    >
      {units}
    </svg>
  );
};

export const HuiwenCorner: React.FC<HuiwenProps & { position?: 'tl' | 'tr' | 'bl' | 'br' }> = ({ 
  className = "", 
  color = "#E8C547",
  position = 'tl'
}) => {
  // 左上角(tl)：开角朝外；右上角(tr)、左下角(bl)、右下角(br)：开角朝内
  const corners: Record<string, React.ReactNode> = {
    tl: (
      <>
        <path d="M2 22 L2 2 L22 2" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
        <path d="M6 18 L6 6 L18 6" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
      </>
    ),
    tr: (
      <>
        <path d="M22 22 L22 2 L2 2" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
        <path d="M18 18 L18 6 L6 6" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
      </>
    ),
    bl: (
      <>
        <path d="M2 2 L2 22 L22 22" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
        <path d="M6 6 L6 18 L18 18" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
      </>
    ),
    br: (
      <>
        <path d="M22 2 L22 22 L2 22" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
        <path d="M18 6 L18 18 L6 18" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
      </>
    ),
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
    >
      {corners[position]}
    </svg>
  );
};

export const HuiwenSingle: React.FC<HuiwenProps & { size?: number }> = ({ 
  className = "", 
  color = "#E8C547",
  size = 24
}) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      width={size}
      height={size}
    >
      <rect 
        x="3" y="3" 
        width="18" height="18" 
        fill="none" 
        stroke={color} 
        strokeWidth="1.5"
      />
      <rect 
        x="7" y="7" 
        width="10" height="10" 
        fill="none" 
        stroke={color} 
        strokeWidth="1.2"
      />
      <rect 
        x="10" y="10" 
        width="4" height="4" 
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
};

export const HuiwenBorder: React.FC<{ className?: string; color?: string }> = ({ 
  className = "", 
  color = "#E8C547"
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-6 h-6">
        <HuiwenCorner color={color} position="tl" className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-6 h-6">
        <HuiwenCorner color={color} position="tr" className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-6 h-6">
        <HuiwenCorner color={color} position="bl" className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-6">
        <HuiwenCorner color={color} position="br" className="w-full h-full" />
      </div>
    </div>
  );
};

/** 回纹背景纹理 — 传统连续回纹暗纹 */
export const HuiwenBgTexture: React.FC<{ className?: string; color?: string; opacity?: number }> = ({
  className = "", color = "#E8C547", opacity = 0.12
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" style={{ opacity }}>
        <defs>
          <pattern id="huiwen-bg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* 外框 */}
            <rect x="4" y="4" width="32" height="32" fill="none" stroke={color} strokeWidth="0.9" rx="1" />
            {/* 内框 — 形成"回"字形 */}
            <rect x="12" y="12" width="16" height="16" fill="none" stroke={color} strokeWidth="0.7" rx="1" />
            {/* 连接线 — 水平 */}
            <line x1="0" y1="20" x2="4" y2="20" stroke={color} strokeWidth="0.7" />
            <line x1="36" y1="20" x2="40" y2="20" stroke={color} strokeWidth="0.7" />
            {/* 连接线 — 垂直 */}
            <line x1="20" y1="0" x2="20" y2="4" stroke={color} strokeWidth="0.7" />
            <line x1="20" y1="36" x2="20" y2="40" stroke={color} strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#huiwen-bg)" />
      </svg>
    </div>
  );
};

export default { HuiwenHorizontal, HuiwenCorner, HuiwenSingle, HuiwenBorder, HuiwenBgTexture };
