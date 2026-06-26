import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SectionTitle from "@/components/SectionTitle";
import { HuiwenBorder } from "@/components/HuiwenPattern";
import { majorsData } from "@/data/mockData";
import { ArrowRight } from "lucide-react";

export default function Majors() {
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

      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="专业设置" subtitle="传承荆楚文化，培养创新人才" />

          {/* 单列竖向排列，每排一个 */}
          <div className="grid grid-cols-1 gap-6 mt-6">
            {orderedMajors.map((major) => (
              <motion.div
                key={major.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex relative"
              >
                <HuiwenBorder color="rgba(122, 42, 42, 0.3)" />
                <div className="w-1/2 min-w-[200px] relative overflow-hidden flex-shrink-0 bg-gradient-to-br from-heritage-primary/40 via-heritage-secondary/30 to-heritage-gold/40">
                  <div className="absolute inset-0 bg-gradient-to-r from-heritage-primary/40 to-transparent" />
                </div>

                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-heritage-primary mb-3">
                    {major.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {major.description}
                  </p>
                  {major.detailPath && (
                    <Link 
                      to={major.detailPath} 
                      className="mt-4 flex items-center text-heritage-primary text-sm font-medium hover:underline self-start"
                    >
                      <span>了解更多</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
