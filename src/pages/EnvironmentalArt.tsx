import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { majorNews } from "@/data/mockData";

const courses = [
  { name: "室内设计原理", desc: "室内空间设计理论与方法", icon: "🏠" },
  { name: "景观规划设计", desc: "室外环境景观规划与设计", icon: "🌳" },
  { name: "展示空间设计", desc: "展览展示空间创意设计", icon: "🖼️" },
  { name: "装饰材料与构造", desc: "装饰材料特性与施工工艺", icon: "🧱" },
  { name: "环境色彩设计", desc: "环境空间中色彩的运用", icon: "🎨" },
  { name: "计算机辅助设计", desc: "CAD/3DMAX/SU 等软件应用", icon: "💻" },
  { name: "人体工程学", desc: "空间设计中的人体尺度研究", icon: "📐" },
  { name: "模型制作", desc: "环境空间模型制作实践", icon: "✂️" },
];

type ViewMode = "card" | "list";

export default function EnvironmentalArt() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = majorNews["environmental-art"];
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="环境艺术设计" subtitle="营造美好空间，设计宜居环境" />
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/40 via-heritage-secondary/30 to-heritage-gold/40 h-64 md:h-80 flex items-center justify-center">
            <span className="text-6xl">🏛️</span>
          </div>
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-gold/10 p-8">
            <h3 className="text-2xl font-display font-bold text-heritage-primary mb-6">专业简介</h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700 leading-relaxed text-base">
              <div><p>环境艺术设计专业培养具有艺术素养和设计创新能力的环境艺术设计人才。专业涵盖室内设计、景观设计、展示设计等多个方向，注重理论与实践相结合。</p></div>
              <div><p>学生将系统学习空间设计原理、装饰材料与构造、计算机辅助设计等核心课程，掌握从方案构思到施工落地的完整设计流程。</p></div>
              <div><p>毕业生可在建筑设计院、室内设计公司、景观规划设计机构、展览展示公司等单位从事环境空间的设计与规划工作。</p></div>
            </div>
          </div>
          <div className="mt-12">
            <SectionTitle title="核心课程" subtitle="理论与实践并重" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {courses.map((c, i) => (
                <motion.div key={i} whileHover={{ y: -4 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-gold/10 overflow-hidden transition-all">
                  <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                  <div className="p-5"><div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-display font-bold text-heritage-primary">{c.name}</h4>
                    <span className="text-2xl">{c.icon}</span></div>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* 专业新闻 */}
          <div className="mt-12">
            <SectionTitle title="专业新闻" subtitle="最新动态" />

            <div className="flex items-center justify-end gap-1 mb-6">
              <span className="text-xs text-gray-400 mr-2">视图：</span>
              <button onClick={() => setViewMode("list")} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${viewMode === "list" ? "bg-heritage-primary text-white" : "text-gray-500 hover:bg-heritage-cream hover:text-heritage-primary"}`}>
                <LayoutList className="w-3.5 h-3.5" />列表
              </button>
              <button onClick={() => setViewMode("card")} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${viewMode === "card" ? "bg-heritage-primary text-white" : "text-gray-500 hover:bg-heritage-cream hover:text-heritage-primary"}`}>
                <LayoutGrid className="w-3.5 h-3.5" />卡片
              </button>
            </div>

            <AnimatePresence mode="wait">
              {viewMode === "list" ? (
                <motion.div key="list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className="bg-white rounded-xl shadow-sm border border-heritage-gold/10 overflow-hidden">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-heritage-cream/30 transition-colors">
                        <span className="text-sm text-gray-700">● {item.title}</span>
                        <span className="text-xs text-gray-400 shrink-0 ml-4">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, i) => (
                      <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-gold/10 overflow-hidden group transition-all">
                        <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                        <div className="p-5">
                          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2"><span className="w-1 h-1 rounded-full bg-heritage-gold/60" />{item.date}</div>
                          <h4 className="text-base font-display font-bold text-heritage-primary mb-2 line-clamp-2 group-hover:text-heritage-secondary transition-colors">{item.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{item.summary}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
