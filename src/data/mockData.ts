// 导航菜单项类型
export interface NavItem {
  id: number;
  name: string;
  path: string;
  children?: { id: number; name: string; path: string }[];
}

// 导航菜单数据
export const navItems: NavItem[] = [
  {
    id: 1,
    name: "学院概况",
    path: "/about",
  },
  {
    id: 2,
    name: "党建工作",
    path: "/party",
  },
  {
    id: 3,
    name: "专业设置",
    path: "/majors",
    children: [
      { id: 31, name: "数字非遗设计与制作", path: "/majors/digital-heritage" },
      { id: 32, name: "环境艺术设计", path: "/majors" },
      { id: 33, name: "产品艺术设计", path: "/majors" },
      { id: 34, name: "旅游管理", path: "/majors" },
      { id: 35, name: "酒店管理与数字化运营", path: "/majors" },
      { id: 36, name: "播音与主持", path: "/majors" },
      { id: 37, name: "表演艺术", path: "/majors" },
    ],
  },
  {
    id: 4,
    name: "教学科研",
    path: "/teaching",
  },
  {
    id: 5,
    name: "产教融合",
    path: "/industry",
  },
  {
    id: 6,
    name: "学团工作",
    path: "/students",
  },
  {
    id: 7,
    name: "招生就业",
    path: "/admission",
  },
  {
    id: 8,
    name: "下载中心",
    path: "/downloads",
  },
];

// 底部链接数据
export const footerLinks = [
  { id: 1, name: "学院概况", path: "/about" },
  { id: 2, name: "专业设置", path: "/majors" },
  { id: 3, name: "教学科研", path: "/teaching" },
  { id: 4, name: "学生工作", path: "/students" },
  { id: 5, name: "校企合作", path: "/industry" },
  { id: 6, name: "下载中心", path: "/downloads" },
];

// 联系方式数据
export const contactInfo = [
  { label: "地址", icon: "📍", value: "湖北省武汉市洪山区雄楚大道918号" },
  { label: "电话", icon: "📞", value: "027-87170290" },
  { label: "邮箱", icon: "📧", value: "wenlv@cjxy.edu.cn" },
  { label: "邮编", icon: "✉️", value: "430074" },
];

// 招生信息数据
export const admissionInfo = [
  {
    id: 1,
    icon: "📋",
    title: "招生计划",
    description: "了解各专业招生人数、录取要求及填报指南",
    link: "#",
    linkText: "查看详情",
  },
  {
    id: 2,
    icon: "🎓",
    title: "专业介绍",
    description: "深入了解各专业培养目标、课程设置及就业方向",
    link: "#",
    linkText: "了解更多",
  },
  {
    id: 3,
    icon: "💰",
    title: "奖助学金",
    description: "国家奖学金、助学金及学院专项奖学金政策",
    link: "#",
    linkText: "申请指南",
  },
];

// 招生动态数据
export const recruitNews = [
  {
    id: 1,
    title: "2026年文旅创意学院招生简章发布",
    summary: "我院2026年招生计划已公布，共计划招收各类专业学生500余人...",
    date: "2026-07-05",
    tag: "重要通知",
    image: "https://picsum.photos/seed/admission1/400/300",
  },
  {
    id: 2,
    title: "湖北省技能高考报名开始",
    summary: "2026年湖北省技能高考报名工作已启动，请符合条件的考生按时报名...",
    date: "2026-06-28",
    tag: "报名信息",
    image: "https://picsum.photos/seed/admission2/400/300",
  },
  {
    id: 3,
    title: "学院举办招生咨询会",
    summary: "为帮助考生了解学院，我院将举办多场线上线下招生咨询活动...",
    date: "2026-06-20",
    tag: "校园动态",
    image: "https://picsum.photos/seed/admission3/400/300",
  },
  {
    id: 4,
    title: "数字非遗设计专业新增招生方向",
    summary: "我院数字非遗设计与制作专业新增数字化设计方向，培养复合型人才...",
    date: "2026-06-15",
    tag: "专业动态",
    image: "https://picsum.photos/seed/admission4/400/300",
  },
  {
    id: 5,
    title: "校企合作订单班开始报名",
    summary: "我院与多家知名企业合作开设订单班，学生入学即就业...",
    date: "2026-06-10",
    tag: "校企合作",
    image: "https://picsum.photos/seed/admission5/400/300",
  },
  {
    id: 6,
    title: "单招考试时间安排",
    summary: "2026年单独招生考试时间已确定，请考生做好准备...",
    date: "2026-06-05",
    tag: "考试安排",
    image: "https://picsum.photos/seed/admission6/400/300",
  },
];

// 就业统计数据
export const employmentStats = [
  { id: 1, value: "96%", label: "学院整体就业率" },
  { id: 2, value: "200+", label: "合作企业" },
  { id: 3, value: "15%", label: "升学深造" },
];

// 新闻数据类型
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
}

// 项目数据类型
export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

// 新闻动态示例数据
export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "文旅创意学院举办非遗文化传承论坛",
    date: "2026-07-12",
    summary: "学院成功举办首届荆楚非遗文化传承与创新论坛，邀请多位非遗传承人分享经验，探讨传统工艺与现代设计的融合发展路径。",
  },
  {
    id: 2,
    title: "学院与湖北省博物馆达成战略合作",
    date: "2026-07-05",
    summary: "文旅创意学院与湖北省博物馆签署战略合作协议，双方将在文创产品开发、人才培养、展览策划等领域开展深度合作。",
  },
  {
    id: 3,
    title: "学生作品荣获全国文创设计大赛金奖",
    date: "2026-06-28",
    summary: "我院学生团队设计的'楚韵流芳'系列文创产品在全国大学生文创设计大赛中脱颖而出，荣获金奖殊荣。",
  },
];

// 特色项目示例数据
export const projectsData: ProjectItem[] = [
  {
    id: 1,
    name: "荆楚漆艺创新设计",
    description: "将传统楚式漆艺与现代家居设计相结合，打造具有荆楚特色的当代生活美学产品。",
    imageUrl: "https://picsum.photos/seed/wenlv-1/400/533",
  },
  {
    id: 2,
    name: "汉绣文化传承计划",
    description: "系统整理汉绣技艺，培养新一代传承人，开发汉绣文创产品，让传统刺绣焕发新生。",
    imageUrl: "https://picsum.photos/seed/wenlv-2/400/533",
  },
  {
    id: 3,
    name: "非遗数字博物馆",
    description: "运用数字技术建设虚拟博物馆，让珍贵的非遗文物以数字化形式永久保存并广泛传播。",
    imageUrl: "https://picsum.photos/seed/wenlv-3/400/533",
  },
  {
    id: 4,
    name: "文旅IP形象设计",
    description: "以荆楚文化元素为灵感，设计系列文旅IP形象，打造具有地域特色的文化品牌。",
    imageUrl: "https://picsum.photos/seed/wenlv-4/400/533",
  },
];

// 专业数据类型
export interface MajorItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  isFeatured?: boolean;
  detailPath?: string;
}

// 专业设置数据
export const majorsData: MajorItem[] = [
  {
    id: 1,
    name: "数字非遗设计与制作",
    description: "本专业是学院重点建设专业，融合数字技术与非遗文化传承，培养具备传统工艺数字化保护、非遗文创产品设计、数字展示交互设计能力的复合型人才。学生将学习3D建模、虚拟现实、数字影像等前沿技术，同时深入掌握荆楚传统工艺精髓。",
    imageUrl: "https://picsum.photos/seed/wenlv-5/600/400",
    detailPath: "/majors/digital-heritage",
  },
  {
    id: 2,
    name: "环境艺术设计",
    description: "培养具有艺术素养和设计创新能力的环境艺术设计人才，掌握室内设计、景观设计、展示设计等专业技能，能够从事各类空间环境的设计与规划工作。",
    imageUrl: "https://picsum.photos/seed/wenlv-6/600/400",
  },
  {
    id: 3,
    name: "产品艺术设计",
    description: "培养具有创新设计思维和实践能力的产品设计人才，学习产品设计理论、材料工艺、人机工程学等知识，能够进行产品外观设计、结构设计和包装设计。",
    imageUrl: "https://picsum.photos/seed/wenlv-7/600/400",
  },
  {
    id: 4,
    name: "旅游管理",
    description: "培养具备现代旅游管理理论和实践能力的专业人才，学习旅游规划、景区管理、旅游营销等知识，能够在旅游企业、景区、文旅机构从事管理工作。",
    imageUrl: "https://picsum.photos/seed/wenlv-8/600/400",
  },
  {
    id: 5,
    name: "酒店管理与数字化运营",
    description: "培养掌握现代酒店管理理论和数字化运营技能的专业人才，学习酒店运营、客户服务、收益管理等知识，能够胜任星级酒店管理岗位。",
    imageUrl: "https://picsum.photos/seed/wenlv-9/600/400",
  },
  {
    id: 6,
    name: "播音与主持",
    description: "培养具有良好语言表达能力和艺术素养的播音主持人才，学习播音发声、节目主持、新闻采编等专业技能，能够从事广播电视、新媒体主持工作。",
    imageUrl: "https://picsum.photos/seed/wenlv-10/600/400",
  },
  {
    id: 7,
    name: "表演艺术",
    description: "培养具有扎实表演功底和艺术创造力的表演人才，学习表演技巧、形体训练、声乐等课程，能够在文艺团体、影视机构从事表演工作。",
    imageUrl: "https://picsum.photos/seed/wenlv-11/600/400",
  },
];

// 学院简介数据
export const introData = {
  title: "文旅创意学院",
  subtitle: "传承文化 创意未来",
  description: `学院紧扣文化强省建设总体任务，抢抓数字文旅融合创新发展时代趋势，依托湖北省高水平高职院校建设平台和荆楚非遗传承与创新实践中心特色载体，发挥光谷片区、武汉新城区位优势，践行专业集群协调发展、跨专业交叉融合育人建设路径，打造彰显荆楚文脉、赋能数字文旅的特色办学品牌。

学院秉承"数创智行、以文塑旅、以旅彰文"的办学理念，聚焦设计数字化、非遗产业化、服务智慧化、文旅全域化，培育厚德精技复合型人才，主动对接武汉都市圈发展建设，以集群育人优势助推湖北文旅转型升级，持续输送优质人才与创新动能，以职教之力护航区域文旅融合高质量发展。`,
  imageUrl: "https://picsum.photos/seed/wenlv-12/400/533",
};

// 领导团队数据
export interface Leader {
  id: number;
  name: string;
  position: string;
  photoUrl: string;
}

export const leadershipData: Leader[] = [
  {
    id: 1,
    name: "汪帆",
    position: "学院院长",
    photoUrl: "https://picsum.photos/seed/wenlv-13/400/533",
  },
  {
    id: 2,
    name: "滕亚东",
    position: "党总支书记",
    photoUrl: "https://picsum.photos/seed/wenlv-14/400/533",
  },
  {
    id: 3,
    name: "石焰",
    position: "总支副书记",
    photoUrl: "https://picsum.photos/seed/wenlv-15/400/533",
  },
  {
    id: 4,
    name: "欧阳琼",
    position: "教学副院长",
    photoUrl: "https://picsum.photos/seed/wenlv-16/400/533",
  },
];

// 数字非遗课程数据类型
export interface DigitalHeritageCourse {
  id: number;
  name: string;
  category: string;
  description: string;
  duration: string;
  icon: string;
  imageUrl: string;
}

// 数字非遗特色课程数据
export const digitalHeritageCourses: DigitalHeritageCourse[] = [
  {
    id: 1,
    name: "叶画",
    category: "传统绘画艺术",
    description: "叶画是一种独特的传统艺术形式，以天然树叶为载体，运用传统绘画技法在叶片上创作精美图案。课程教授叶材处理、构图设计、上色技法等核心技能。",
    duration: "32学时",
    icon: "🍃",
    imageUrl: "https://picsum.photos/seed/wenlv-17/400/533",
  },
  {
    id: 2,
    name: "缠花",
    category: "传统手工艺",
    description: "缠花是荆楚地区传统手工艺，以丝线缠绕金属丝制作花卉造型。课程涵盖缠花基础技法、花卉造型设计、色彩搭配等内容，培养学员创作精美缠花作品的能力。",
    duration: "48学时",
    icon: "🌸",
    imageUrl: "https://picsum.photos/seed/wenlv-18/400/533",
  },
  {
    id: 3,
    name: "西兰卡普",
    category: "土家族织锦",
    description: "西兰卡普是土家族传统织锦技艺，被誉为'土家之花'。课程系统传授织锦工艺、图案设计、配色技巧，让学员掌握这一国家级非物质文化遗产的核心技艺。",
    duration: "64学时",
    icon: "🧵",
    imageUrl: "https://picsum.photos/seed/wenlv-19/400/533",
  },
  {
    id: 4,
    name: "雕花剪纸",
    category: "传统剪纸艺术",
    description: "雕花剪纸是荆楚地区特色剪纸艺术，以精细的雕刻技艺著称。课程教授剪纸设计、刀法运用、图案创作等技法，传承这一独特的民间艺术形式。",
    duration: "40学时",
    icon: "✂️",
    imageUrl: "https://picsum.photos/seed/wenlv-20/400/533",
  },
  {
    id: 5,
    name: "汉绣",
    category: "传统刺绣工艺",
    description: "汉绣是江汉地区传统刺绣工艺，以色彩艳丽、针法多变著称。课程涵盖汉绣历史、针法技法、图案设计等内容，培养学员传承和创新汉绣技艺的能力。",
    duration: "72学时",
    icon: "🪡",
    imageUrl: "https://picsum.photos/seed/wenlv-21/400/533",
  },
  {
    id: 6,
    name: "书法",
    category: "传统书法艺术",
    description: "书法是中国传统文化瑰宝，课程系统教授楷书、行书、隶书等书体技法，结合荆楚书法特色，培养学员的书法创作能力和艺术鉴赏水平。",
    duration: "48学时",
    icon: "🖌️",
    imageUrl: "https://picsum.photos/seed/wenlv-22/400/533",
  },
  {
    id: 7,
    name: "漆扇",
    category: "传统漆艺工艺",
    description: "漆扇制作融合传统漆艺与扇艺，课程教授漆艺基础、扇面设计、装饰技法等，让学员掌握漆扇制作的完整工艺流程，创作具有艺术价值的漆扇作品。",
    duration: "56学时",
    icon: "🪭",
    imageUrl: "https://picsum.photos/seed/wenlv-23/400/533",
  },
  {
    id: 8,
    name: "茶艺",
    category: "传统茶道文化",
    description: "茶艺课程系统传授中国茶文化知识、泡茶技艺、茶道礼仪等内容，结合荆楚茶文化特色，培养学员的茶艺表演能力和茶文化传播素养。",
    duration: "32学时",
    icon: "🍵",
    imageUrl: "https://picsum.photos/seed/wenlv-24/400/533",
  },
];

// 下载文件类型
export type FileCategory = "form" | "document" | "material";
export type FileType = "pdf" | "word" | "excel" | "ppt" | "zip" | "other";

// 下载文件数据类型
export interface DownloadFile {
  id: number;
  name: string;
  category: FileCategory;
  fileType: FileType;
  fileSize: string;
  publishDate: string;
  downloadUrl: string;
  description?: string;
}

// 下载文件示例数据
export const downloadFilesData: DownloadFile[] = [
  // 表格下载
  {
    id: 1,
    name: "学生实习申请表",
    category: "form",
    fileType: "word",
    fileSize: "45KB",
    publishDate: "2026-07-15",
    downloadUrl: "#",
    description: "学生实习申请表格，需填写实习单位、岗位等信息",
  },
  {
    id: 2,
    name: "毕业设计开题报告模板",
    category: "form",
    fileType: "word",
    fileSize: "52KB",
    publishDate: "2026-07-10",
    downloadUrl: "#",
    description: "毕业设计开题报告标准模板",
  },
  {
    id: 3,
    name: "课程免修申请表",
    category: "form",
    fileType: "word",
    fileSize: "38KB",
    publishDate: "2026-07-05",
    downloadUrl: "#",
    description: "申请课程免修的学生需填写此表格",
  },
  {
    id: 4,
    name: "奖学金申请表",
    category: "form",
    fileType: "word",
    fileSize: "42KB",
    publishDate: "2026-06-28",
    downloadUrl: "#",
    description: "各类奖学金申请标准表格",
  },
  {
    id: 5,
    name: "学生成绩登记表",
    category: "form",
    fileType: "excel",
    fileSize: "35KB",
    publishDate: "2026-06-22",
    downloadUrl: "#",
    description: "学生成绩登记标准表格",
  },
  {
    id: 6,
    name: "设备借用申请表",
    category: "form",
    fileType: "word",
    fileSize: "40KB",
    publishDate: "2026-06-15",
    downloadUrl: "#",
    description: "借用学院设备需填写此申请表",
  },
  // 文件下载
  {
    id: 7,
    name: "学院学生管理规定",
    category: "document",
    fileType: "pdf",
    fileSize: "1.2MB",
    publishDate: "2026-07-12",
    downloadUrl: "#",
    description: "学院学生管理相关规章制度",
  },
  {
    id: 8,
    name: "2026-2027学年校历",
    category: "document",
    fileType: "pdf",
    fileSize: "256KB",
    publishDate: "2026-07-08",
    downloadUrl: "#",
    description: "2026-2027学年教学日历安排",
  },
  {
    id: 9,
    name: "非遗传承人才培养方案",
    category: "document",
    fileType: "pdf",
    fileSize: "3.5MB",
    publishDate: "2026-07-02",
    downloadUrl: "#",
    description: "非遗传承专业人才培养方案",
  },
  {
    id: 10,
    name: "产教融合合作协议范本",
    category: "document",
    fileType: "word",
    fileSize: "85KB",
    publishDate: "2026-06-25",
    downloadUrl: "#",
    description: "校企合作产教融合协议范本",
  },
  {
    id: 11,
    name: "关于加强实践教学的通知",
    category: "document",
    fileType: "pdf",
    fileSize: "180KB",
    publishDate: "2026-06-18",
    downloadUrl: "#",
    description: "学院关于加强实践教学工作的通知",
  },
  {
    id: 12,
    name: "学生创新创业扶持政策",
    category: "document",
    fileType: "pdf",
    fileSize: "420KB",
    publishDate: "2026-06-10",
    downloadUrl: "#",
    description: "学生创新创业项目扶持政策文件",
  },
  // 资料下载
  {
    id: 13,
    name: "荆楚文化概论课件",
    category: "material",
    fileType: "ppt",
    fileSize: "15.6MB",
    publishDate: "2026-07-14",
    downloadUrl: "#",
    description: "荆楚文化概论课程教学课件",
  },
  {
    id: 14,
    name: "汉绣技法教程",
    category: "material",
    fileType: "pdf",
    fileSize: "8.2MB",
    publishDate: "2026-07-07",
    downloadUrl: "#",
    description: "汉绣基础技法与进阶教程",
  },
  {
    id: 15,
    name: "数字非遗设计素材包",
    category: "material",
    fileType: "zip",
    fileSize: "125MB",
    publishDate: "2026-07-01",
    downloadUrl: "#",
    description: "数字非遗设计常用素材资源包",
  },
  {
    id: 16,
    name: "文创产品设计案例集",
    category: "material",
    fileType: "pdf",
    fileSize: "22.5MB",
    publishDate: "2026-06-26",
    downloadUrl: "#",
    description: "优秀文创产品设计案例合集",
  },
  {
    id: 17,
    name: "3D建模基础教程",
    category: "material",
    fileType: "pdf",
    fileSize: "12.8MB",
    publishDate: "2026-06-20",
    downloadUrl: "#",
    description: "3D建模基础入门教程",
  },
  {
    id: 18,
    name: "非遗数字化保护技术指南",
    category: "material",
    fileType: "pdf",
    fileSize: "5.6MB",
    publishDate: "2026-06-12",
    downloadUrl: "#",
    description: "非遗数字化保护技术操作指南",
  },
];