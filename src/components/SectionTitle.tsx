interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

/**
 * SectionTitle — 简洁大气的区块标题
 * 极简鎏金线 + 中心菱形点缀
 */
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      {/* 标题内容 */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-heritage-primary tracking-wide">
          {title}
        </h2>

        {/* 装饰线 */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="w-48 h-px bg-gradient-to-r from-transparent to-heritage-gold/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-heritage-gold/60" />
          <div className="w-48 h-px bg-gradient-to-l from-transparent to-heritage-gold/50" />
        </div>

        {subtitle && (
          <p className="mt-4 text-lg text-heritage-secondary/70 font-body tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
