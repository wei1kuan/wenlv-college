import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

// 党建工作数据
const partyBuildingActivities = [
  {
    id: 1,
    title: "学习贯彻党的二十大精神专题讲座",
    date: "2024-03-15",
    summary: "学院党委组织全体师生党员深入学习党的二十大精神，推动党的创新理论入脑入心。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=party%20meeting%20lecture%20hall%20red%20flag%20professional&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "党员志愿服务进社区活动",
    date: "2024-03-10",
    summary: "学院党员志愿者走进社区，开展非遗文化宣传与体验活动，服务群众文化生活。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=volunteers%20community%20service%20warm%20smile&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "主题党日活动——红色教育基地参观",
    date: "2024-02-28",
    summary: "组织党员前往红色教育基地参观学习，缅怀革命先烈，传承红色基因。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=red%20memorial%20hall%20solemn%20atmosphere&image_size=landscape_4_3",
  },
];

// 团学活动数据
const youthActivities = [
  {
    id: 1,
    title: "非遗文化传承青年论坛",
    date: "2024-03-20",
    summary: "学院团委举办青年论坛，邀请非遗传承人与学生面对面交流，激发青年传承热情。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=youth%20forum%20discussion%20modern%20bright&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "学雷锋志愿服务月活动",
    date: "2024-03-05",
    summary: "团学组织开展学雷锋系列活动，践行志愿服务精神，展现青年担当。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=students%20volunteering%20helping%20others&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "荆楚文化青年创意大赛",
    date: "2024-02-20",
    summary: "举办创意设计大赛，鼓励青年学生以创新方式传承和弘扬荆楚文化。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20competition%20art%20design%20youth&image_size=landscape_4_3",
  },
];

// 工会活动数据
const unionActivities = [
  {
    id: 1,
    title: "教职工趣味运动会",
    date: "2024-03-08",
    summary: "学院工会举办趣味运动会，丰富教职工文化生活，增强团队凝聚力。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sports%20day%20fun%20games%20teachers&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "三八妇女节主题活动",
    date: "2024-03-08",
    summary: "组织女教职工开展非遗手工体验活动，庆祝国际劳动妇女节。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=women%20celebration%20craft%20workshop%20flowers&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "教职工书法绘画比赛",
    date: "2024-02-15",
    summary: "举办书法绘画比赛，展示教职工艺术才华，弘扬中华传统文化。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=calligraphy%20painting%20exhibition%20traditional%20art&image_size=landscape_4_3",
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
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-blue/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-block px-2 py-1 bg-heritage-gold text-heritage-blue text-xs font-medium rounded">
            {date}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-display font-bold text-heritage-blue mb-2 line-clamp-2 hover:text-heritage-red transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {summary}
        </p>
      </div>
    </motion.div>
  );
}

export default function Party() {
  return (
    <div className="min-h-screen bg-heritage-light font-body">
      <Navbar />
      
      <main className="pt-16">
        {/* 页面头部横幅 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 bg-gradient-to-r from-heritage-red via-heritage-blue to-heritage-red overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                党群工作
              </h1>
              <div className="w-24 h-1 bg-heritage-gold mx-auto" />
              <p className="mt-4 text-white/90 text-lg">
                凝心聚力 · 共创未来
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* 党建工作区域 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <SectionTitle
            title="党建工作"
            subtitle="坚持党建引领，推动学院高质量发展"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white/50">
          <SectionTitle
            title="团学活动"
            subtitle="青春心向党，建功新时代"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* 工会活动区域 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <SectionTitle
            title="工会活动"
            subtitle="关爱教职工，共建和谐校园"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unionActivities.map((activity, index) => (
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