import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Calendar, Users, Trophy, Sparkles } from "lucide-react";

// 页面淡入动画配置
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const sectionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

// 学生活动数据
const studentActivities = [
  {
    id: 1,
    title: "荆楚文化节",
    date: "2024年5月",
    description: "一年一度的荆楚文化节，展示学生非遗作品，传承传统文化精髓，吸引众多师生参与。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=大学生文化节活动现场，传统非遗展示，学生表演，热闹氛围，中国文化元素&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "非遗技艺大赛",
    date: "2024年4月",
    description: "学生展示剪纸、刺绣、陶艺等非遗技艺，传承匠人精神，弘扬传统文化。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=大学生非遗技艺比赛现场，剪纸刺绣展示，传统工艺，专注认真&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "文创设计周",
    date: "2024年3月",
    description: "学生文创设计作品展览，融合荆楚文化元素与现代设计理念，展现创意才华。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=文创设计展览现场，学生作品展示，现代设计风格，艺术氛围&image_size=landscape_4_3",
  },
  {
    id: 4,
    title: "社会实践调研",
    date: "2024年2月",
    description: "深入荆楚地区开展文化调研，了解非遗传承现状，撰写调研报告。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=大学生社会实践调研，乡村走访，记录访谈，团队合作&image_size=landscape_4_3",
  },
  {
    id: 5,
    title: "元旦晚会",
    date: "2023年12月",
    description: "师生共庆新年，精彩节目纷呈，展现学生才艺与青春活力。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=大学元旦晚会现场，舞台表演，灯光璀璨，青春活力&image_size=landscape_4_3",
  },
  {
    id: 6,
    title: "志愿服务活动",
    date: "2023年11月",
    description: "走进社区开展文化志愿服务，传播非遗知识，服务社会大众。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=大学生志愿服务活动，社区服务，文化传播，热情服务&image_size=landscape_4_3",
  },
];

// 社团风采数据
const clubs = [
  {
    id: 1,
    name: "非遗传承社",
    members: 86,
    description: "致力于非遗技艺学习与传承，定期开展剪纸、刺绣、陶艺等传统技艺培训。",
    activities: ["剪纸工坊", "刺绣体验", "陶艺制作"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=学生社团活动，非遗传承，传统手工艺，学生认真学习&image_size=landscape_4_3",
  },
  {
    id: 2,
    name: "文创设计社",
    members: 120,
    description: "融合传统文化与现代设计，开展文创产品设计、品牌策划等活动。",
    activities: ["文创设计大赛", "品牌策划", "产品开发"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=文创设计社团活动，学生讨论设计，创意氛围，现代工作室&image_size=landscape_4_3",
  },
  {
    id: 3,
    name: "数字媒体社",
    members: 95,
    description: "探索数字技术与文化融合，开展影视制作、动画设计、新媒体运营等。",
    activities: ["短片拍摄", "动画制作", "新媒体运营"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数字媒体社团活动，学生操作设备，影视拍摄，专业氛围&image_size=landscape_4_3",
  },
  {
    id: 4,
    name: "汉服文化社",
    members: 150,
    description: "弘扬汉服文化，开展汉服展示、传统礼仪学习、古风摄影等活动。",
    activities: ["汉服展示", "礼仪学习", "古风摄影"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=汉服社团活动，学生穿汉服，传统文化展示，优雅古典&image_size=landscape_4_3",
  },
  {
    id: 5,
    name: "书法绘画社",
    members: 78,
    description: "传承书法绘画艺术，开展书法、国画、篆刻等传统艺术学习与创作。",
    activities: ["书法练习", "国画创作", "篆刻体验"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=书法绘画社团活动，学生练习书法，传统艺术氛围，文房四宝&image_size=landscape_4_3",
  },
  {
    id: 6,
    name: "茶艺社",
    members: 65,
    description: "学习茶艺文化，开展茶道表演、茶文化讲座、茶叶品鉴等活动。",
    activities: ["茶道表演", "茶文化讲座", "茶叶品鉴"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=茶艺社团活动，学生学习茶艺，茶道表演，优雅氛围&image_size=landscape_4_3",
  },
];

// 获奖荣誉数据
const awards = [
  {
    id: 1,
    title: "全国大学生文创设计大赛金奖",
    student: "李明华",
    project: "楚韵流芳系列文创产品",
    year: "2024",
    level: "国家级",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=金奖奖杯，荣誉证书，颁奖典礼，庄重氛围&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "湖北省非遗传承创新大赛一等奖",
    student: "王小雨",
    project: "荆楚刺绣数字化保护项目",
    year: "2024",
    level: "省级",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=一等奖奖牌，获奖证书，荣誉展示，红色背景&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "全国职业院校技能大赛一等奖",
    student: "张文博、陈思琪",
    project: "非遗文创产品设计",
    year: "2023",
    level: "国家级",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=技能大赛颁奖现场，学生领奖，荣誉时刻，热烈氛围&image_size=landscape_4_3",
  },
  {
    id: 4,
    title: "全国大学生创新创业大赛银奖",
    student: "刘佳怡团队",
    project: "非遗文化数字传播平台",
    year: "2023",
    level: "国家级",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=创新创业大赛颁奖，团队领奖，银奖奖杯，现代氛围&image_size=landscape_4_3",
  },
  {
    id: 5,
    title: "湖北省大学生艺术节一等奖",
    student: "汉服文化社",
    project: "楚风汉韵服饰展演",
    year: "2023",
    level: "省级",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=艺术节表演现场，汉服展示，舞台表演，精彩瞬间&image_size=landscape_4_3",
  },
  {
    id: 6,
    title: "全国数字媒体艺术大赛二等奖",
    student: "数字媒体社",
    project: "荆楚非遗数字纪录片",
    year: "2023",
    level: "国家级",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数字媒体大赛获奖证书，二等奖奖牌，专业氛围&image_size=landscape_4_3",
  },
  {
    id: 7,
    title: "湖北省书法篆刻大赛一等奖",
    student: "周雅婷",
    project: "楚辞书法作品",
    year: "2022",
    level: "省级",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=书法作品展览，获奖作品展示，传统文化氛围&image_size=landscape_4_3",
  },
  {
    id: 8,
    title: "全国茶艺技能大赛三等奖",
    student: "茶艺社",
    project: "楚茶茶艺表演",
    year: "2022",
    level: "国家级",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=茶艺表演比赛，优雅茶道，传统文化展示&image_size=landscape_4_3",
  },
];

// 统计数据
const stats = [
  { icon: Calendar, label: "年度活动", count: "50+" },
  { icon: Users, label: "社团数量", count: "20+" },
  { icon: Trophy, label: "获奖项目", count: "100+" },
  { icon: Sparkles, label: "优秀学生", count: "500+" },
];

export default function Students() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-heritage-light font-body"
    >
      <Navbar />
      <main className="pt-16">
        {/* 页面头部 */}
        <section className="py-16 bg-gradient-to-br from-heritage-red via-heritage-red/90 to-heritage-blue relative overflow-hidden">
          {/* 装饰元素 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rotate-45" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                学生天地
              </h1>
              <p className="text-xl text-white/90 mb-8">
                青春飞扬 · 匠心传承 · 筑梦未来
              </p>

              {/* 统计数据 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-heritage-gold" />
                    <div className="text-2xl font-bold text-white">{stat.count}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 学生活动区域 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="学生活动"
              subtitle="丰富多彩的校园生活"
            />

            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {studentActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-heritage-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* 图片区域 */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.imageUrl}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-blue/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-heritage-gold text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {activity.date}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {activity.title}
                      </h3>
                    </div>
                  </div>

                  {/* 内容区域 */}
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {activity.description}
                    </p>
                  </div>

                  {/* 底部装饰 */}
                  <div className="h-1 bg-gradient-to-r from-heritage-red via-heritage-gold to-heritage-blue" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 社团风采区域 */}
        <section className="py-20 bg-heritage-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="社团风采"
              subtitle="百花齐放 各展所长"
            />

            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {clubs.map((club) => (
                <motion.div
                  key={club.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* 图片区域 */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={club.imageUrl}
                      alt={club.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-blue/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {club.name}
                      </h3>
                      <div className="flex items-center text-heritage-gold text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {club.members} 名成员
                      </div>
                    </div>
                  </div>

                  {/* 内容区域 */}
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {club.description}
                    </p>

                    {/* 活动标签 */}
                    <div className="flex flex-wrap gap-2">
                      {club.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-heritage-red/10 text-heritage-red text-xs rounded-full border border-heritage-red/20"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 底部装饰 */}
                  <div className="h-1 bg-gradient-to-r from-heritage-gold via-heritage-red to-heritage-blue" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 获奖荣誉区域 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="获奖荣誉"
              subtitle="硕果累累 荣耀时刻"
            />

            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            >
              {awards.map((award) => (
                <motion.div
                  key={award.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-heritage-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* 图片区域 */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={award.imageUrl}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-blue/80 to-transparent" />
                    
                    {/* 级别标签 */}
                    <div
                      className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold ${
                        award.level === "国家级"
                          ? "bg-heritage-gold text-heritage-blue"
                          : "bg-heritage-red text-white"
                      }`}
                    >
                      {award.level}
                    </div>

                    {/* 年份标签 */}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-heritage-blue font-medium">
                      {award.year}年
                    </div>
                  </div>

                  {/* 内容区域 */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-heritage-blue mb-2 line-clamp-2 leading-tight">
                      {award.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Trophy className="w-4 h-4 mr-1 text-heritage-gold" />
                      <span className="font-medium">{award.student}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {award.project}
                    </p>
                  </div>

                  {/* 底部装饰 */}
                  <div className="h-1 bg-gradient-to-r from-heritage-blue via-heritage-gold to-heritage-red" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 底部号召区域 */}
        <section className="py-16 bg-gradient-to-br from-heritage-blue to-heritage-blue/90 relative overflow-hidden">
          {/* 装饰元素 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-5 right-10 w-40 h-40 border-2 border-white rounded-full" />
            <div className="absolute bottom-5 left-10 w-32 h-32 border-2 border-white rotate-45" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                加入我们，共创精彩
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                在文旅创意学院，每一位学子都能找到属于自己的舞台，传承文化、展现才华、成就梦想
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="px-8 py-3 bg-heritage-gold text-heritage-blue font-bold rounded-lg hover:bg-heritage-gold/90 transition-colors duration-300 shadow-lg"
                >
                  了解更多
                </a>
                <a
                  href="#"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  联系我们
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}