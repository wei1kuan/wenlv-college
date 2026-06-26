import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutList, LayoutGrid } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { majorNews } from "@/data/mockData";

const courses = [
  { name: "表演基础训练", desc: "表演基本元素与技巧训练", icon: "🎭" },
  { name: "形体训练", desc: "身体表达与舞台形体", icon: "💃" },
  { name: "声乐", desc: "歌唱技巧与声乐表演", icon: "🎵" },
  { name: "台词", desc: "语言表达与台词功底", icon: "🗣️" },
  { name: "剧目排练", desc: "经典剧目排练与演出", icon: "🎪" },
  { name: "舞蹈基础", desc: "舞蹈基本功与表现力", icon: "🩰" },
  { name: "导演基础", desc: "舞台导演基本理论与方法", icon: "🎬" },
  { name: "舞台美术", desc: "舞台设计与灯光基础", icon: "🎨" },
];

type ViewMode = "card" | "list";

export default function PerformingArts() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const items = majorNews["performing-arts"];
  return (
    <div className="min-h-screen bg-heritage-cream">
      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="表演艺术" subtitle="演绎人生百态，绽放艺术光芒" />
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-heritage-primary/40 via-heritage-secondary/30 to-heritage-gold/40 h-64 md:h-80 flex items-center justify-center">
            <span className="text-6xl">🎭</span>
          </div>
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-heritage-gold/10 p-8">
            <h3 className="text-2xl font-display font-bold text-heritage-primary mb-6">专业简介</h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-700 leading-relaxed text-base">
              <div><p>表演艺术专业培养具有扎实表演功底和艺术创造力的表演人才。专业涵盖戏剧表演、舞蹈表演、声乐表演等多个方向，注重学生综合素质的培养。</p></div>
              <div><p>学生将系统学习表演基础训练、形体训练、声乐、台词、剧目排练等核心课程，通过舞台实践和演出项目积累表演经验。</p></div>
              <div><p>毕业生可在文艺团体、影视机构、文化馆、艺术培训机构、文旅演艺企业等单位从事表演、教学和艺术管理工作。</p></div>
            </div>
          </div>
          <div className="mt-12">
            <SectionTitle title="核心课程" subtitle="技艺兼修，全面发展" />
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
