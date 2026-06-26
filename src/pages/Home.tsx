import Carousel from '@/components/Carousel';
import InfoColumns from '@/components/InfoColumns';
import { HuiwenSingle } from '@/components/HuiwenPattern';
import { HuiwenBgTexture } from '@/components/HuiwenPattern';

/** 菱形镂空 */
function DiamondCutout({ size = 10 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size + 6, height: size + 6 }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-sm"
        style={{
          width: size, height: size,
          background: '#C4A882',
          boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.4), 1px 1px 0 rgba(232,197,71,0.2), -1px -1px 0 rgba(0,0,0,0.25)',
        }}
      />
    </div>
  );
}

function OpenworkBand() {
  return (
    <div className="flex items-center justify-center gap-1 overflow-hidden py-1.5">
      {Array.from({ length: 45 }, (_, i) => <DiamondCutout key={i} size={i % 5 === 0 ? 8 : 6} />)}
    </div>
  );
}

function OpenworkColumn() {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 py-2 overflow-hidden">
      {Array.from({ length: 10 }, (_, i) => <DiamondCutout key={i} size={i % 4 === 0 ? 6 : 4} />)}
    </div>
  );
}

/** 漆器橱窗：红色全宽背景 + 镂空柱 + 轮播图 */
function LacquerShowcase({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-b-xl overflow-hidden bg-heritage-primary">
      <HuiwenBgTexture color="#E8C547" opacity={0.14} />
      <OpenworkBand />
      <div className="flex items-center mx-4 gap-2">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-heritage-gold/40 to-heritage-gold/60" />
        <HuiwenSingle color="#E8C547" size={14} className="opacity-50 shrink-0" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-heritage-gold/40 to-heritage-gold/60" />
      </div>

      <div className="flex">
        <div className="shrink-0 flex items-center overflow-hidden" style={{ width: '22px' }}>
          <OpenworkColumn />
        </div>
        <div className="flex-1 relative rounded-md overflow-hidden"
          style={{
            boxShadow: 'inset 0 3px 14px rgba(0,0,0,0.7), 0 0 0 1.5px rgba(232,197,71,0.5), 0 0 0 5px rgba(58,16,16,0.85)',
          }}
        >
          {children}
        </div>
        <div className="shrink-0 flex items-center overflow-hidden" style={{ width: '22px' }}>
          <OpenworkColumn />
        </div>
      </div>

      <div className="flex items-center mx-4 gap-2">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-heritage-gold/40 to-heritage-gold/60" />
        <HuiwenSingle color="#E8C547" size={14} className="opacity-50 shrink-0" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-heritage-gold/40 to-heritage-gold/60" />
      </div>
      <OpenworkBand />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <LacquerShowcase>
          <Carousel />
        </LacquerShowcase>
      </div>

      <InfoColumns />
    </>
  );
}
