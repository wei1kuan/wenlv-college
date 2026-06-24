import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-12"
    >
      {/* 顶部装饰线条 */}
      <div className="absolute -top-3 left-0 right-0 flex items-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-heritage-secondary to-transparent" />
        <div className="w-3 h-3 border-t-2 border-l-2 border-heritage-primary rotate-45 mx-4" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-heritage-secondary to-transparent" />
      </div>
      
      {/* 标题内容 */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-heritage-primary tracking-wide">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-heritage-secondary font-body">
            {subtitle}
          </p>
        )}
        
        {/* 底部装饰线条 */}
        <div className={`flex items-center justify-center gap-3 ${subtitle ? 'mt-4' : 'mt-6'}`}>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-heritage-secondary" />
          <div className="w-2 h-2 bg-heritage-secondary rounded-full" />
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-heritage-secondary" />
        </div>
      </div>
      
      {/* 底部装饰线条 */}
      <div className="absolute -bottom-3 left-0 right-0 flex items-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-heritage-secondary to-transparent" />
        <div className="w-3 h-3 border-b-2 border-r-2 border-heritage-primary rotate-45 mx-4" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-heritage-secondary to-transparent" />
      </div>
    </motion.div>
  );
}