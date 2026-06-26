import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { majorNews } from "@/data/mockData";

const courses = [
  { name: "产品造型设计", desc: "产品外观形态与结构设计", icon: "📦" },
  { name: "人机工程学", desc: "产品与人体的适配性研究", icon: "🪑" },
  { name: "材料与工艺", desc: "产品材料特性与加工工艺", icon: "🔧" },
  { name: "设计表现技法", desc: "手绘与数字表现技能", icon: "✏️" },
  { name: "文创产品设计", desc: "文化创意产品开发设计", icon: "🎁" },
  { name: "计算机辅助设计", desc: "Rhino/Keyshot 等软件", icon: "💻" },
  { name: "模型制作", desc: "产品模型制作与验证", icon: "🛠️" },
  { name: "包装设计", desc: "产品包装视觉与结构设计", icon: "📋" },
];

type ViewMode = "card" | "list";

export default function ProductDesign() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = majorNews["product-design"];
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="产品艺术设计" subtitle="创意赋能产品，设计改变生活" />
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/40 via-heritage-secondary/30 to-heritage-gold/40 h-64 md:h-80 flex items-center justify-center">
            <span className="text-6xl">💡</span>
          </div>
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-gold/10 p-8">
            <h3 className="text-2xl font-display font-bold text-heritage-primary mb-6">专业简介</h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700 leading-relaxed text-base">
              <div><p>产品艺术设计专业培养具有创新设计思维和实践能力的产品设计人才。专业注重艺术与技术的融合，培养能够进行产品外观设计、结构设计和包装设计的复合型人才。</p></div>
              <div><p>学生将学习产品造型设计、人机工程学、材料与工艺等核心知识，掌握从市场调研、概念设计到产品落地的完整设计流程。</p></div>
              <div><p>毕业生可在工业设计公司、文创产品企业、家居用品企业、消费电子企业等领域从事产品设计与开发工作。</p></div>
            </div>
          </div>
          <div className="mt-12">
            <SectionTitle title="核心课程" subtitle="创意与实践并行" />
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
