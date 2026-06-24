import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

// 党建工作数据
const partyBuildingActivities = [
  {
    id: 1,
    title: "学习贯彻党的二十大精神专题讲座",
    date: "2026-07-15",
    summary: "学院党委组织全体师生党员深入学习党的二十大精神，推动党的创新理论入脑入心。",
    image: "https://picsum.photos/seed/wenlv-39/600/400",
  },
  {
    id: 2,
    title: "党员志愿服务进社区活动",
    date: "2026-07-10",
    summary: "学院党员志愿者走进社区，开展非遗文化宣传与体验活动，服务群众文化生活。",
    image: "https://picsum.photos/seed/wenlv-40/600/400",
  },
  {
    id: 3,
    title: "主题党日活动——红色教育基地参观",
    date: "2026-06-28",
    summary: "组织党员前往红色教育基地参观学习，缅怀革命先烈，传承红色基因。",
    image: "https://picsum.photos/seed/wenlv-41/600/400",
  },
];

// 团学活动数据
const youthActivities = [
  {
    id: 1,
    title: "非遗文化传承青年论坛",
    date: "2026-07-20",
    summary: "学院团委举办青年论坛，邀请非遗传承人与学生面对面交流，激发青年传承热情。",
    image: "https://picsum.photos/seed/wenlv-42/600/400",
  },
  {
    id: 2,
    title: "迎七一志愿服务月活动",
    date: "2026-07-05",
    summary: "团学组织开展迎七一志愿服务系列活动，践行志愿服务精神，展现青年担当。",
    image: "https://picsum.photos/seed/wenlv-43/600/400",
  },
  {
    id: 3,
    title: "荆楚文化青年创意大赛",
    date: "2026-06-20",
    summary: "举办创意设计大赛，鼓励青年学生以创新方式传承和弘扬荆楚文化。",
    image: "https://picsum.photos/seed/wenlv-44/600/400",
  },
];

// 活动卡片组件
interface ActivityCardProps {
  title: string;
  date: string;
  summary: string;
  image: string;
  index: number;
}

function ActivityCard({ title, date, summary, image, index }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-heritage-gold/10 group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/80 via-heritage-primary/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-heritage-primary text-sm font-semibold rounded-full shadow-sm">
            {date}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-display font-bold text-heritage-primary mb-3 line-clamp-2 hover:text-heritage-primary/80 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {summary}
        </p>
      </div>
      <div className="h-1 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
    </motion.div>
  );
}

export default function Party() {
  return (
    <div className="min-h-screen bg-heritage-cream font-body">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* 党建工作区域 */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <SectionTitle
            title="党建工作"
            subtitle="坚持党建引领，推动学院高质量发展"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {partyBuildingActivities.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                title={activity.title}
                date={activity.date}
                summary={activity.summary}
                image={activity.image}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* 团学活动区域 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white/60">
          <SectionTitle
            title="团学活动"
            subtitle="青春心向党，建功新时代"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {youthActivities.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                title={activity.title}
                date={activity.date}
                summary={activity.summary}
                image={activity.image}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
