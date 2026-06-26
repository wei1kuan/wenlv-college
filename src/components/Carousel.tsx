import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '@/assets/banner1.png';
import banner2 from '@/assets/banner2.jpg';

interface CarouselSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  { id: 1, imageUrl: banner2, title: '非遗文化展示馆', subtitle: '传承荆楚文脉　弘扬非遗技艺' },
  { id: 2, imageUrl: banner1, title: '叶画特色展厅', subtitle: '匠心独具　一叶一世界' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[440px] md:h-[580px] overflow-hidden bg-gray-900 rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].imageUrl}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
          />
          {/* 轻量渐变 — 仅底部微暗保证文字可读 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {/* 文字区域 — 贴底居中，传统排版 */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-6 md:pb-8 px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              {/* 金色装饰线 */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-px bg-heritage-gold/60" />
                <div className="w-1.5 h-1.5 rotate-45 border border-heritage-gold/60" />
                <div className="w-8 h-px bg-heritage-gold/60" />
              </div>

              {/* 主标题 — 书法体 */}
              <h2
                className="text-2xl md:text-4xl font-chinese font-bold text-white tracking-[0.25em] drop-shadow-lg"
                style={{ textShadow: '1px 2px 6px rgba(0,0,0,0.6)' }}
              >
                {slides[currentIndex].title}
              </h2>

              {/* 副标题 — 衬线体 */}
              <p
                className="mt-3 text-sm md:text-lg text-heritage-gold font-display tracking-[0.2em] drop-shadow"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
              >
                {slides[currentIndex].subtitle}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 左右切换 — 金色半透明 */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-heritage-gold/20 hover:bg-heritage-gold/40 hover:scale-110 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="上一张"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-heritage-gold/20 hover:bg-heritage-gold/40 hover:scale-110 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="下一张"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 底部金色圆点指示器 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? 'bg-heritage-gold w-6 h-2.5 animate-pulse-gold'
                : 'bg-white/40 hover:bg-heritage-gold/60 w-2.5 h-2.5'
            }`}
            aria-label={`切换到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
}
