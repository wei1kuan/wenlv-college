import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { recruitNews } from "@/data/mockData";
import { Calendar } from "lucide-react";

export default function Admission() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20">
        {/* 招生动态 */}
        <SectionTitle title="招生动态" subtitle="最新招生资讯" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {recruitNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-heritage-gold/10 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-heritage-primary text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                    {news.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm font-medium">
                      <Calendar className="w-4 h-4 mr-1 text-heritage-gold" />
                      {news.date}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-heritage-primary mb-3 line-clamp-2 group-hover:text-heritage-primary/80 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{news.summary}</p>
                  <div className="flex justify-end">
                    <a href="#" className="text-heritage-primary text-sm font-medium hover:text-heritage-primary/80 transition-colors flex items-center gap-1">
                      查看详情
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
