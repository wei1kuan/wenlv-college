import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { newsData, NewsItem } from "@/data/mockData";

interface NewsCardProps {
  news: NewsItem;
}

function NewsCard({ news }: NewsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="h-1.5 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time>{news.date}</time>
        </div>
        
        <h3 className="text-lg font-display font-bold text-heritage-primary mb-3 line-clamp-2 hover:text-heritage-primary transition-colors cursor-pointer">
          {news.title}
        </h3>
        
        <p className="text-heritage-primary/80 text-sm leading-relaxed line-clamp-3 font-body">
          {news.summary}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="text-heritage-primary text-sm font-medium hover:text-heritage-primary/80 transition-colors flex items-center gap-1">
            阅读更多
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function NewsSection() {
  return (
    <section className="py-20 bg-heritage-cream">
      <div className="max-w-[1600px] mx-auto px-4">
        <SectionTitle title="新闻动态" subtitle="了解学院最新资讯" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-heritage-secondary text-white rounded-full font-medium hover:bg-heritage-secondary/90 transition-colors shadow-lg hover:shadow-xl">
            查看全部新闻
          </button>
        </div>
      </div>
    </section>
  );
}