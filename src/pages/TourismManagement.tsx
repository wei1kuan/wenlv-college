import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { majorNews } from "@/data/mockData";

const courses = [
  { name: "旅游学概论", desc: "旅游学科基础理论与方法", icon: "🌍" },
  { name: "旅游规划与开发", desc: "旅游资源规划与项目开发", icon: "📋" },
  { name: "景区服务与管理", desc: "旅游景区运营管理实务", icon: "🏯" },
  { name: "旅游市场营销", desc: "旅游产品营销策略与推广", icon: "📊" },
  { name: "导游业务", desc: "导游服务技能与规范", icon: "🎤" },
  { name: "文旅融合专题", desc: "文化与旅游融合发展研究", icon: "🏮" },
  { name: "旅游电子商务", desc: "在线旅游平台运营管理", icon: "💻" },
  { name: "旅游英语", desc: "旅游行业英语应用能力", icon: "🗣️" },
];

type ViewMode = "card" | "list";

export default function TourismManagement() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = majorNews["tourism-management"];
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="旅游管理" subtitle="以文塑旅，以旅彰文" />
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/40 via-heritage-secondary/30 to-heritage-gold/40 h-64 md:h-80 flex items-center justify-center">
            <span className="text-6xl">✈️</span>
          </div>
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-gold/10 p-8">
            <h3 className="text-2xl font-display font-bold text-heritage-primary mb-6">专业简介</h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700 leading-relaxed text-base">
              <div><p>旅游管理专业培养具备现代旅游管理理论和实践能力的专业人才，涵盖旅游规划、景区管理、旅游营销等核心领域。</p></div>
              <div><p>学生将学习旅游学概论、旅游规划与开发、景区服务与管理等课程，通过实地考察和项目实践提升综合管理能力。</p></div>
              <div><p>毕业生可在旅游行政管理部门、旅行社、旅游景区、文旅集团、在线旅游平台等单位从事管理与运营工作。</p></div>
            </div>
          </div>
          <div className="mt-12">
            <SectionTitle title="核心课程" subtitle="知行合一，学以致用" />
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
