import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Building2, Briefcase, MapPin, Award, Users, Lightbulb } from "lucide-react";

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

// 校企合作企业数据
const partnerCompanies = [
  {
    id: 1,
    name: "湖北省博物馆",
    type: "文化机构",
    description: "共同开展荆楚非遗文化研究与传承项目，为学生提供实习实训平台。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=湖北省博物馆建筑外观，现代博物馆设计，庄重大气，蓝天白云&image_size=landscape_4_3",
  },
  {
    id: 2,
    name: "武汉文旅集团",
    type: "文旅企业",
    description: "合作开发文创产品，推动文旅融合项目落地，培养文旅策划人才。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=现代文旅企业大楼，玻璃幕墙，城市景观，专业商务氛围&image_size=landscape_4_3",
  },
  {
    id: 3,
    name: "荆楚文创设计公司",
    type: "设计企业",
    description: "联合开展文创设计项目，提供设计实习岗位，共同孵化创业项目。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=创意设计公司办公空间，现代简约风格，设计师工作环境&image_size=landscape_4_3",
  },
  {
    id: 4,
    name: "数字传媒科技",
    type: "科技企业",
    description: "数字媒体技术合作，VR/AR项目开发，新媒体人才培养基地。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=科技公司办公环境，现代化数字媒体工作室，科技感&image_size=landscape_4_3",
  },
];

// 校企合作项目数据
const cooperationProjects = [
  {
    id: 1,
    title: "荆楚非遗数字保护工程",
    partner: "湖北省博物馆",
    status: "进行中",
    description: "运用数字化技术对荆楚地区非物质文化遗产进行采集、记录和保护。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=非遗数字化保护工作现场，技术人员操作设备，文化遗产记录&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "文旅IP形象设计项目",
    partner: "武汉文旅集团",
    status: "已完成",
    description: "设计武汉城市文旅IP形象及系列文创产品，提升城市文化影响力。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=文旅IP形象设计展示，卡通形象，文创产品周边，创意设计&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "沉浸式非遗体验展",
    partner: "荆楚文创设计公司",
    status: "进行中",
    description: "打造沉浸式非遗文化体验展览，融合科技与传统工艺展示。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=沉浸式展览空间，光影效果，观众互动体验，现代展示技术&image_size=landscape_4_3",
  },
];

// 实习基地数据
const internshipBases = [
  {
    id: 1,
    name: "湖北省博物馆实习基地",
    location: "武汉市武昌区",
    type: "文化遗产类",
    description: "提供文物修复、展览策划、社教活动等实习岗位，年接纳实习生50余人。",
    features: ["文物修复", "展览策划", "社教活动"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=博物馆实习基地，学生在工作，专业设备，学习氛围&image_size=landscape_4_3",
  },
  {
    id: 2,
    name: "黄鹤楼文创实习基地",
    location: "武汉市武昌区",
    type: "文创设计类",
    description: "专注于文创产品设计与开发，学生参与从创意到产品的全流程实践。",
    features: ["产品设计", "市场调研", "品牌推广"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=黄鹤楼景区，学生文创实习，产品设计工作坊&image_size=landscape_4_3",
  },
  {
    id: 3,
    name: "东湖风景区实习基地",
    location: "武汉市洪山区",
    type: "文旅运营类",
    description: "景区运营管理、活动策划执行、游客服务等综合实习平台。",
    features: ["景区运营", "活动策划", "游客服务"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=东湖风景区，学生实习工作，景区管理，湖光山色&image_size=landscape_4_3",
  },
  {
    id: 4,
    name: "数字媒体产业园实习基地",
    location: "武汉市东湖高新区",
    type: "数字媒体类",
    description: "数字内容制作、新媒体运营、短视频创作等新媒体实习实践。",
    features: ["视频制作", "新媒体运营", "内容创作"],
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=数字媒体产业园，学生实习，视频拍摄制作，现代办公环境&image_size=landscape_4_3",
  },
];

// 创新创业项目数据
const innovationProjects = [
  {
    id: 1,
    title: "楚韵工坊",
    category: "文创产品",
    leader: "张小明",
    description: "将荆楚传统工艺与现代设计结合，开发系列文创产品，已获得省级创业扶持。",
    status: "已孵化",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=文创工坊，传统工艺品展示，现代设计产品，创业团队&image_size=landscape_4_3",
  },
  {
    id: 2,
    title: "非遗数字博物馆",
    category: "数字平台",
    leader: "李文华",
    description: "运用VR/AR技术打造线上非遗博物馆，实现非遗文化的数字化传播。",
    status: "运营中",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=VR虚拟博物馆体验，数字技术展示非遗，科技感&image_size=landscape_4_3",
  },
  {
    id: 3,
    title: "荆楚手作直播平台",
    category: "新媒体",
    leader: "王艺琳",
    description: "专注荆楚传统手工艺直播推广，连接手艺人与消费者，助力非遗传承。",
    status: "运营中",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=手工艺直播现场，传统工艺展示，新媒体工作室&image_size=landscape_4_3",
  },
];

// 创新创业成果数据
const innovationAchievements = [
  {
    id: 1,
    title: "全国大学生创新创业大赛金奖",
    year: "2024",
    project: "楚韵工坊文创项目",
    description: "在第十届全国大学生创新创业大赛中荣获金奖。",
  },
  {
    id: 2,
    title: "湖北省互联网+大赛一等奖",
    year: "2023",
    project: "非遗数字博物馆",
    description: "在湖北省互联网+大学生创新创业大赛中获得一等奖。",
  },
  {
    id: 3,
    title: "文创产品专利授权",
    year: "2023",
    project: "荆楚纹样系列设计",
    description: "学生设计的荆楚纹样文创产品获得外观设计专利授权。",
  },
  {
    id: 4,
    title: "创业孵化成功",
    year: "2023",
    project: "荆楚手作工作室",
    description: "学生创业团队成功孵化，成立荆楚手作文化传播工作室。",
  },
];

// 统计数据
const statistics = [
  { icon: Building2, label: "合作企业", count: "50+" },
  { icon: Briefcase, label: "合作项目", count: "120+" },
  { icon: MapPin, label: "实习基地", count: "30+" },
  { icon: Award, label: "创新成果", count: "80+" },
];

export default function Industry() {
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
        {/* 页面头部横幅 */}
        <section className="relative h-64 bg-gradient-to-r from-heritage-blue to-heritage-blue/80 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMC4zIi8+PC9nPjwvc3ZnPg==')]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            >
              产教融合
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-heritage-gold font-body"
            >
              校企协同育人 · 实践创新成长
            </motion.p>
          </div>
        </section>

        {/* 统计数据展示 */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-heritage-light p-6 rounded-lg text-center border border-heritage-gold/20 hover:border-heritage-gold transition-colors duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-heritage-red" />
                  <div className="text-2xl font-bold text-heritage-blue mb-1">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 校企合作区域 */}
        <section className="py-20 bg-heritage-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="校企合作" subtitle="携手共建 融合发展" />

            {/* 合作企业 */}
            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-display font-bold text-heritage-blue mb-8 text-center">
                <Building2 className="inline-block w-6 h-6 mr-2 text-heritage-red" />
                合作企业
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnerCompanies.map((company) => (
                  <motion.div
                    key={company.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={company.imageUrl}
                        alt={company.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-heritage-blue/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block px-2 py-1 bg-heritage-gold text-heritage-blue text-xs font-medium rounded">
                          {company.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-heritage-blue mb-2">
                        {company.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 合作项目 */}
            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-display font-bold text-heritage-blue mb-8 text-center">
                <Briefcase className="inline-block w-6 h-6 mr-2 text-heritage-red" />
                合作项目
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cooperationProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === "已完成"
                              ? "bg-green-500 text-white"
                              : "bg-heritage-red text-white"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-heritage-blue mb-2">
                        {project.title}
                      </h4>
                      <p className="text-heritage-gold text-sm mb-3">
                        合作单位：{project.partner}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-heritage-red via-heritage-gold to-heritage-blue" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 实习基地区域 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="实习基地" subtitle="实践育人 知行合一" />

            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            >
              {internshipBases.map((base) => (
                <motion.div
                  key={base.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-heritage-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-heritage-gold/20"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* 图片区域 */}
                    <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                      <img
                        src={base.imageUrl}
                        alt={base.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-heritage-light/30 md:block hidden" />
                    </div>

                    {/* 内容区域 */}
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-heritage-red" />
                        <span className="text-sm text-gray-500">{base.location}</span>
                      </div>
                      <h4 className="text-xl font-bold text-heritage-blue mb-2">
                        {base.name}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-heritage-red/10 text-heritage-red text-sm rounded-full mb-3">
                        {base.type}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {base.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {base.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-heritage-gold/20 text-heritage-blue text-xs rounded-full border border-heritage-gold/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 创新创业区域 */}
        <section className="py-20 bg-heritage-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="创新创业" subtitle="激发潜能 成就梦想" />

            {/* 创新创业项目 */}
            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-display font-bold text-heritage-blue mb-8 text-center">
                <Lightbulb className="inline-block w-6 h-6 mr-2 text-heritage-red" />
                创新创业项目
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {innovationProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-heritage-blue/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === "已孵化"
                              ? "bg-heritage-gold text-heritage-blue"
                              : "bg-heritage-red text-white"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-heritage-blue">
                          {project.title}
                        </h4>
                        <span className="text-xs text-heritage-gold bg-heritage-gold/10 px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-3">
                        负责人：{project.leader}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 创新创业成果 */}
            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-display font-bold text-heritage-blue mb-8 text-center">
                <Award className="inline-block w-6 h-6 mr-2 text-heritage-red" />
                创新创业成果
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {innovationAchievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-heritage-gold"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-heritage-blue">
                        {achievement.title}
                      </h4>
                      <span className="text-heritage-gold font-bold text-sm bg-heritage-gold/10 px-3 py-1 rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-heritage-red text-sm mb-2">
                      项目：{achievement.project}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 合作意向区域 */}
        <section className="py-20 bg-gradient-to-br from-heritage-blue to-heritage-blue/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                携手共创未来
              </h2>
              <p className="text-xl text-heritage-gold mb-8 font-body">
                诚邀各界企业、机构开展产教融合合作
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-heritage-gold" />
                  <span>人才培养合作</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-heritage-gold rounded-full" />
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-heritage-gold" />
                  <span>项目研发合作</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-heritage-gold rounded-full" />
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-heritage-gold" />
                  <span>实习基地共建</span>
                </div>
              </div>
              <p className="mt-8 text-gray-300 text-sm">
                联系电话：027-XXXXXXXX | 邮箱：industry@wlcyxy.edu.cn
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}