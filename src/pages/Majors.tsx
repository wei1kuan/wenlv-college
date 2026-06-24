import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { majorsData } from "@/data/mockData";
import { ArrowRight } from "lucide-react";

export default function Majors() {
  // 按指定顺序排列专业
  const orderedMajors = [
    "数字非遗设计与制作",
    "环境艺术设计", 
    "产品艺术设计",
    "旅游管理",
    "酒店管理与数字化运营",
    "播音与主持",
    "表演艺术"
  ].map(name => majorsData.find(m => m.name === name)).filter(Boolean);

  return (
    <div className="min-h-screen bg-heritage-cream">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="专业设置" subtitle="传承荆楚文化，培养创新人才" />

          {/* 单列竖向排列 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderedMajors.map((major, index) => (
              <motion.div
                key={major.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {major.detailPath && (
                  <Link to={major.detailPath} className="block group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={major.imageUrl}
                        alt={major.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/30 to-transparent" />
                    </div>
                  </Link>
                )}
                {!major.detailPath && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={major.imageUrl}
                      alt={major.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/30 to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-heritage-primary mb-3">
                    {major.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {major.description}
                  </p>
                  {major.detailPath && (
                    <Link 
                      to={major.detailPath} 
                      className="mt-3 flex items-center text-heritage-primary text-sm font-medium hover:underline"
                    >
                      <span>了解更多</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-white rounded-lg shadow-md px-8 py-6">
              <p className="text-heritage-primary font-medium mb-2">
                欢迎报考文旅创意学院
              </p>
              <p className="text-gray-600 text-sm">
                各专业招生详情请咨询招生办公室：027-XXXXXXXX
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
