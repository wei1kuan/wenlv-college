import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Users, GraduationCap } from "lucide-react";

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

// 教学成果数据
const teachingAchievements = [
  {
    id: 1,
    title: "国家级精品在线开放课程",
    year: "2026",
    category: "课程建设",
    description: "《荆楚非遗文化传承与创新》课程获批国家级精品在线开放课程，累计学习人数超过10万人。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=在线课程界面，现代化教学平台，电脑屏幕显示课程内容，专业教育氛围&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "全国职业院校教学能力大赛一等奖",
    year: "2026",
    category: "教学竞赛",
    description: "教学团队在全国职业院校教学能力大赛中荣获一等奖，展现了学院教师的教学水平和创新能力。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=教学比赛颁奖现场，教师团队领奖，荣誉证书，热烈氛围&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "省级教学成果奖特等奖",
    year: "2026",
    category: "教学成果",
    description: "'非遗传承与现代设计融合人才培养模式'获湖北省高等教育教学成果特等奖。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=教学成果奖证书，红色封面，金色文字，庄重典雅&image_size=landscape_4_3",
  },
  {
    id: 4,
    title: "国家级规划教材",
    year: "2026",
    category: "教材建设",
    description: "《文创产品设计与实践》入选'十四五'职业教育国家规划教材，被多所院校采用。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=专业教材书籍封面，文创设计主题，精美装帧，学术氛围&image_size=landscape_4_3",
  },
  {
    id: 5,
    title: "学生创新创业大赛金奖",
    year: "2026",
    category: "学生成果",
    description: "学生创业项目'楚韵文创工作室'在'互联网+'大学生创新创业大赛中斩获金奖。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=大学生创新创业大赛现场，学生展示项目，金奖奖杯，青春活力&image_size=landscape_4_3",
  },
  {
    id: 6,
    title: "省级优秀教学团队",
    year: "2026",
    category: "团队建设",
    description: "非遗传承与创新教学团队被评为湖北省优秀教学团队，团队成员包括省级教学名师3人。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=教师团队合影，专业正装，学术氛围，团队协作精神&image_size=landscape_4_3",
  },
];

// 科研项目数据
const researchProjects = [
  {
    id: 1,
    title: "荆楚非物质文化遗产数字化保护与传承研究",
    level: "国家级",
    category: "社科基金",
    leader: "张明远",
    year: "2026-2029",
    status: "在研",
    description: "研究荆楚地区非物质文化遗产的数字化保护技术，建立非遗数字资源库，探索数字化传承新模式。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数字化保护技术，非遗文化展示，现代科技与传统工艺结合，学术研究氛围&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "文旅融合背景下文创产品设计创新研究",
    level: "省部级",
    category: "艺术基金",
    leader: "陈晓燕",
    year: "2026-2028",
    status: "在研",
    description: "研究文旅融合背景下文创产品的设计创新方法，开发具有荆楚特色的文创产品系列。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=文创产品设计工作室，设计师工作场景，创意产品展示，现代设计氛围&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "虚拟现实技术在非遗展示中的应用研究",
    level: "省部级",
    category: "科技计划",
    leader: "王建国",
    year: "2026-2028",
    status: "在研",
    description: "研究VR/AR技术在非遗展示中的应用，开发沉浸式非遗体验系统，提升非遗传播效果。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=VR虚拟现实技术应用，非遗文化展示，科技感，现代博物馆场景&image_size=landscape_4_3",
  },
  {
    id: 4,
    title: "荆楚传统手工艺传承人口述史研究",
    level: "省部级",
    category: "社科基金",
    leader: "李雅琴",
    year: "2026.06",
    status: "已启动",
    description: "对荆楚地区传统手工艺传承人进行口述史调研，记录和保存珍贵的非遗传承资料。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=传统手工艺人工作场景，口述史访谈，文化传承氛围，温馨画面&image_size=landscape_4_3",
  },
  {
    id: 5,
    title: "数字媒体艺术在文旅推广中的应用研究",
    level: "市厅级",
    category: "软科学",
    leader: "刘思远",
    year: "2026-2027",
    status: "在研",
    description: "研究数字媒体艺术在文旅推广中的应用策略，为地方文旅发展提供技术支持。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数字媒体艺术展示，文旅宣传场景，创意设计，现代科技感&image_size=landscape_4_3",
  },
  {
    id: 6,
    title: "产教融合背景下非遗人才培养模式研究",
    level: "市厅级",
    category: "教育规划",
    leader: "赵文华",
    year: "2026.06",
    status: "已立项",
    description: "探索产教融合背景下非遗传承人才的培养模式，形成可推广的人才培养方案。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=产教融合教学场景，学生实践学习，校企合作，现代教育氛围&image_size=landscape_4_3",
  },
];

// 学术交流数据
const academicExchanges = [
  {
    id: 1,
    title: "2026荆楚非遗传承与创新国际学术研讨会",
    type: "国际会议",
    date: "2026年7月",
    location: "武汉",
    description: "邀请国内外非遗研究专家学者，共同探讨非遗传承与创新的路径与方法。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国际学术研讨会现场，专家学者演讲，现代化会议厅，学术氛围浓厚&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "中日韩文化遗产保护技术交流会",
    type: "国际交流",
    date: "2026年6月",
    location: "韩国首尔",
    description: "学院代表团赴韩国参加中日韩文化遗产保护技术交流会，分享非遗数字化保护经验。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国际文化交流活动现场，多国学者合影，友好交流氛围，现代化会场&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "湖北省高校文创设计教育论坛",
    type: "学术论坛",
    date: "2026年7月",
    location: "武汉",
    description: "主办湖北省高校文创设计教育论坛，探讨文创设计人才培养的创新模式。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=高校教育论坛现场，专家学者讨论，现代化会议设施，学术交流氛围&image_size=landscape_4_3",
  },
  {
    id: 4,
    title: "非遗传承人进校园系列活动",
    type: "校园活动",
    date: "2026年6月",
    location: "学院",
    description: "邀请多位国家级、省级非遗传承人进校园，开展技艺展示和传承教学活动。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=非遗传承人教学现场，学生围观学习，传统工艺展示，校园文化活动&image_size=landscape_4_3",
  },
  {
    id: 5,
    title: "数字艺术与传统文化融合工作坊",
    type: "工作坊",
    date: "2026年7月",
    location: "学院",
    description: "举办数字艺术与传统文化融合工作坊，探索传统文化与现代技术的创新结合。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=艺术工作坊现场，学生动手实践，数字艺术创作，创意设计氛围&image_size=landscape_4_3",
  },
  {
    id: 6,
    title: "台湾高校文化创意产业交流访问",
    type: "两岸交流",
    date: "2026年6月",
    location: "台湾",
    description: "学院代表团赴台湾高校进行文化创意产业交流访问，深化两岸教育合作。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=两岸文化交流活动，高校访问场景，友好合作氛围，文化创意展示&image_size=landscape_4_3",
  },
];

export default function Teaching() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-heritage-cream font-body"
    >
      <Navbar />
      <main className="pt-24 pb-20">
        {/* 教学成果区域 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="教学成果"
              subtitle="教学相长 硕果累累"
            />

            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {teachingAchievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-heritage-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-heritage-gold/10"
                >
                  {/* 图片区域 */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/80 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/95 backdrop-blur-sm text-heritage-primary px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                        {achievement.category}
                      </span>
                    </div>
                  </div>

                  {/* 内容区域 */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-heritage-primary mb-3 line-clamp-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {achievement.description}
                    </p>
                  </div>

                  {/* 底部装饰 */}
                  <div className="h-1 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 科研项目区域 */}
        <section className="py-20 bg-heritage-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="科研项目"
              subtitle="科研创新 服务社会"
            />

            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            >
              {researchProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row border border-heritage-gold/10"
                >
                  {/* 图片区域 */}
                  <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  </div>

                  {/* 内容区域 */}
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.level === "国家级"
                            ? "bg-heritage-primary text-white"
                            : project.level === "省部级"
                            ? "bg-heritage-primary/80 text-white"
                            : "bg-heritage-gold text-heritage-primary"
                        }`}>
                          {project.level}
                        </span>
                      </div>

                      {/* 标题 */}
                      <h3 className="text-lg font-bold text-heritage-primary mb-2 line-clamp-2">
                        {project.title}
                      </h3>

                      {/* 描述 */}
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                        {project.description}
                      </p>
                    </div>

                    {/* 底部信息 */}
                    <div className="flex items-center justify-end text-sm text-gray-500 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4 text-heritage-primary" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 学术交流区域 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="学术交流"
              subtitle="开放合作 共同进步"
            />

            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {academicExchanges.map((exchange) => (
                <motion.div
                  key={exchange.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-heritage-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-heritage-gold/10"
                >
                  {/* 图片区域 */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={exchange.imageUrl}
                      alt={exchange.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/80 to-transparent" />
                  </div>

                  {/* 内容区域 */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-heritage-primary mb-3 line-clamp-2">
                      {exchange.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                      {exchange.description}
                    </p>

                    {/* 时间地点 */}
                    <div className="flex items-center justify-between text-sm text-gray-600 pt-3 border-t border-heritage-gold/20">
                      <span className="font-medium text-heritage-primary">{exchange.date}</span>
                      <span className="text-heritage-primary/70">{exchange.location}</span>
                    </div>
                  </div>

                  {/* 底部装饰 */}
                  <div className="h-1 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
