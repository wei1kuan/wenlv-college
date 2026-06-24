import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.jpg';

interface CarouselSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    imageUrl: banner2,
    title: '非遗文化展示馆',
    subtitle: '传承荆楚文脉 弘扬非遗技艺'
  },
  {
    id: 2,
    imageUrl: banner1,
    title: '叶画特色展厅',
    subtitle: '匠心独具 一叶一世界'
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].imageUrl}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              {/* 左侧装饰 */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-px bg-white/80" />
                <div className="w-2 h-2 border-t border-l border-white/60 rotate-45 ml-3" />
              </div>
              
              <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white drop-shadow-lg tracking-wider mb-3">
                {slides[currentIndex].title}
              </motion.h2>
              
              {/* 分隔线 */}
              <div className="w-24 h-px bg-gradient-to-r from-white/80 to-white/30 mb-3" />
              
              <motion.p className="text-base md:text-lg text-white/90 font-body tracking-wide">
                {slides[currentIndex].subtitle}
              </motion.p>
              
              {/* 底部装饰 */}
              <div className="flex items-center mt-4">
                <div className="w-2 h-2 border-b border-r border-white/60 rotate-45" />
                <div className="w-12 h-px bg-white/80 ml-3" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-heritage-gold w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}