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
    id: 0,
    name: "首页",
    path: "/",
  },
  {
    id: 1,
    name: "学院概况",
    path: "/about",
    children: [
      { id: 11, name: "学院简介", path: "/about#college-intro" },
      { id: 12, name: "领导团队", path: "/about#leadership" },
	      { id: 13, name: "师资团队", path: "/about#faculty" },
    ],
  },
  {
    id: 2,
    name: "党建工作",
    path: "/party",
    children: [
      { id: 21, name: "总支概况", path: "/party#general-branch" },
      { id: 22, name: "党建动态", path: "/party#party-dynamics" },
    ],
  },
  {
    id: 3,
    name: "专业设置",
    path: "/majors",
    children: [
      { id: 31, name: "数字非遗设计与制作", path: "/majors/digital-heritage" },
      { id: 32, name: "环境艺术设计", path: "/majors/environmental-art" },
      { id: 33, name: "产品艺术设计", path: "/majors/product-design" },
      { id: 34, name: "旅游管理", path: "/majors/tourism-management" },
      { id: 35, name: "酒店管理与数字化运营", path: "/majors/hotel-management" },
      { id: 36, name: "播音与主持", path: "/majors/broadcasting-hosting" },
      { id: 37, name: "表演艺术", path: "/majors/performing-arts" },
    ],
  },
  {
    id: 4,
    name: "教学科研",
    path: "/teaching",
    children: [
      { id: 41, name: "教学成果", path: "/teaching#teaching-achievements" },
      { id: 42, name: "科研项目", path: "/teaching#research-projects" },
      { id: 43, name: "学术交流", path: "/teaching#academic-exchanges" },
    ],
  },
  {
    id: 5,
    name: "产教融合",
    path: "/industry",
    children: [
      { id: 51, name: "合作企业", path: "/industry#partner-companies" },
      { id: 52, name: "合作项目", path: "/industry#cooperation-projects" },
      { id: 53, name: "实习基地", path: "/industry#internship-bases" },
      { id: 54, name: "创新创业", path: "/industry#innovation-entrepreneurship" },
    ],
  },
  {
    id: 6,
    name: "学团工作",
    path: "/students",
    children: [
      { id: 61, name: "学生活动", path: "/students#student-activities" },
      { id: 62, name: "社团风采", path: "/students#club-showcase" },
      { id: 63, name: "获奖荣誉", path: "/students#awards-honors" },
    ],
  },
  {
    id: 7,
    name: "招生就业",
    path: "/admission",
    children: [
      { id: 71, name: "招生动态", path: "/admission#admission-news" },
      { id: 72, name: "就业信息", path: "/admission#employment-info" },
    ],
  },
  {
    id: 8,
    name: "下载中心",
    path: "/downloads",
    children: [
      { id: 81, name: "下载中心", path: "/downloads#form-downloads" },
    ],
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

// 就业信息数据
export const jobListings = [
  {
    id: 1,
    title: "文创产品设计师",
    company: "湖北省博物馆文创中心",
    location: "武汉",
    salary: "6k-10k",
    type: "全职",
    date: "2026-07-15",
    tag: "热招",
    image: "https://picsum.photos/seed/job1/400/300",
  },
  {
    id: 2,
    title: "旅游策划经理",
    company: "武汉文旅集团",
    location: "武汉",
    salary: "8k-15k",
    type: "全职",
    date: "2026-07-12",
    tag: "热招",
    image: "https://picsum.photos/seed/job2/400/300",
  },
  {
    id: 3,
    title: "室内设计师",
    company: "湖北楚风设计有限公司",
    location: "武汉",
    salary: "7k-12k",
    type: "全职",
    date: "2026-07-10",
    tag: "急聘",
    image: "https://picsum.photos/seed/job3/400/300",
  },
  {
    id: 4,
    title: "酒店管理培训生",
    company: "万达酒店管理集团",
    location: "武汉",
    salary: "5k-8k",
    type: "全职",
    date: "2026-07-08",
    tag: "校招",
    image: "https://picsum.photos/seed/job4/400/300",
  },
  {
    id: 5,
    title: "新媒体运营专员",
    company: "荆楚非遗传承中心",
    location: "武汉",
    salary: "6k-9k",
    type: "全职",
    date: "2026-07-05",
    tag: "热招",
    image: "https://picsum.photos/seed/job5/400/300",
  },
  {
    id: 6,
    title: "产品设计师",
    company: "武汉光谷文创园",
    location: "武汉",
    salary: "8k-13k",
    type: "全职",
    date: "2026-07-03",
    tag: "校招",
    image: "https://picsum.photos/seed/job6/400/300",
  },
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

// 通知公告示例数据
export const noticeData: NewsItem[] = [
  {
    id: 1,
    title: "2026年文旅创意学院招生简章正式发布",
    date: "2026-07-05",
    summary: "我院2026年招生计划已公布，共计划招收各类专业学生500余人，欢迎广大考生报考。",
  },
  {
    id: 2,
    title: "关于2026届毕业生离校手续办理的通知",
    date: "2026-06-28",
    summary: "2026届毕业生请于7月10日前完成离校手续办理，具体流程及所需材料请查看详情。",
  },
  {
    id: 3,
    title: "学院2025-2026学年第二学期期末考试安排",
    date: "2026-06-20",
    summary: "本学期期末考试将于7月15日至7月25日进行，请各位同学做好复习准备。",
  },
  {
    id: 4,
    title: "关于举办非遗技艺体验周活动的通知",
    date: "2026-06-15",
    summary: "学院将于7月8日至12日举办非遗技艺体验周，涵盖叶画、缠花、汉绣等特色项目。",
  },
  {
    id: 5,
    title: "2026年暑假放假及秋季学期开学安排",
    date: "2026-06-10",
    summary: "学生暑假自7月26日开始，秋季学期9月1日正式上课，请提前做好行程安排。",
  },
  {
    id: 6,
    title: "关于开展2026年大学生创新创业项目申报的通知",
    date: "2026-06-05",
    summary: "2026年度大学生创新创业训练计划项目申报工作已启动，截止日期为6月30日。",
  },
  {
    id: 7,
    title: "学院图书馆暑假开放时间调整通知",
    date: "2026-05-28",
    summary: "暑假期间图书馆开放时间调整为每周一、三、五上午9:00-下午4:00，请相互转告。",
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
    detailPath: "/majors/environmental-art",
  },
  {
    id: 3,
    name: "产品艺术设计",
    description: "培养具有创新设计思维和实践能力的产品设计人才，学习产品设计理论、材料工艺、人机工程学等知识，能够进行产品外观设计、结构设计和包装设计。",
    imageUrl: "https://picsum.photos/seed/wenlv-7/600/400",
    detailPath: "/majors/product-design",
  },
  {
    id: 4,
    name: "旅游管理",
    description: "培养具备现代旅游管理理论和实践能力的专业人才，学习旅游规划、景区管理、旅游营销等知识，能够在旅游企业、景区、文旅机构从事管理工作。",
    imageUrl: "https://picsum.photos/seed/wenlv-8/600/400",
    detailPath: "/majors/tourism-management",
  },
  {
    id: 5,
    name: "酒店管理与数字化运营",
    description: "培养掌握现代酒店管理理论和数字化运营技能的专业人才，学习酒店运营、客户服务、收益管理等知识，能够胜任星级酒店管理岗位。",
    imageUrl: "https://picsum.photos/seed/wenlv-9/600/400",
    detailPath: "/majors/hotel-management",
  },
  {
    id: 6,
    name: "播音与主持",
    description: "培养具有良好语言表达能力和艺术素养的播音主持人才，学习播音发声、节目主持、新闻采编等专业技能，能够从事广播电视、新媒体主持工作。",
    imageUrl: "https://picsum.photos/seed/wenlv-10/600/400",
    detailPath: "/majors/broadcasting-hosting",
  },
  {
    id: 7,
    name: "表演艺术",
    description: "培养具有扎实表演功底和艺术创造力的表演人才，学习表演技巧、形体训练、声乐等课程，能够在文艺团体、影视机构从事表演工作。",
    imageUrl: "https://picsum.photos/seed/wenlv-11/600/400",
    detailPath: "/majors/performing-arts",
  },
];

// 学院简介数据
export const introData = {
  title: "文旅创意学院",
  subtitle: "传承文化 创意未来",
  description: `学院紧扣文化强省建设总体任务，抢抓数字文旅融合创新发展时代趋势，依托湖北省高水平高职院校建设平台和荆楚非遗传承与创新实践中心特色载体，发挥光谷片区、武汉新城区位优势，践行专业集群协调发展、跨专业交叉融合育人建设路径，打造彰显荆楚文脉、赋能数字文旅的特色办学品牌。

学院秉承"数创智行、以文塑旅、以旅彰文"的办学理念，聚焦设计数字化、非遗产业化、服务智慧化、文旅全域化，培育厚德精技复合型人才，主动对接武汉都市圈发展建设，以集群育人优势助推湖北文旅转型升级，持续输送优质人才与创新动能，以职教之力护航区域文旅融合高质量发展。`,
  imageUrl: "https://picsum.photos/seed/wenlv-12/800/500",
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

// ── 教学科研 ── 各分类新闻数据
export const teachingNews: Record<string, NewsItem[]> = {
  teaching: [
    { id: 1, title: "《荆楚非遗文化传承与创新》课程获批国家级精品在线开放课程", date: "2026-07-15", summary: "我院申报的《荆楚非遗文化传承与创新》课程成功获批国家级精品在线开放课程，累计学习人数突破10万人。" },
    { id: 2, title: "全国职业院校教学能力大赛一等奖", date: "2026-07-08", summary: "我院教学团队在全国职业院校教学能力大赛中凭借出色的教学设计和课堂表现荣获一等奖。" },
    { id: 3, title: "学院举办2026年度青年教师教学竞赛", date: "2026-06-28", summary: "为进一步提升青年教师教学水平，学院组织开展了2026年度青年教师教学竞赛活动。" },
    { id: 4, title: "数字非遗设计课程获评省级一流课程", date: "2026-06-20", summary: "我院数字非遗设计与制作专业核心课程获评湖北省省级一流本科课程。" },
    { id: 5, title: "学院召开2026版人才培养方案修订研讨会", date: "2026-06-10", summary: "各专业负责人汇报了人才培养方案修订情况，与会专家提出了建设性意见。" },
    { id: 6, title: "校企合作开发教材《荆楚非遗概论》正式出版", date: "2026-05-25", summary: "由我院教师与湖北省博物馆专家联合编写的《荆楚非遗概论》教材正式出版发行。" },
    { id: 7, title: "学院完成2026届毕业设计答辩工作", date: "2026-05-18", summary: "2026届毕业生毕业设计答辩圆满结束，作品质量获答辩委员会高度评价。" },
    { id: 8, title: "实践教学基地建设取得新进展", date: "2026-05-05", summary: "学院新增3个校外实践教学基地，为学生提供更丰富的实践学习平台。" },
  ],
  research: [
    { id: 11, title: "我院获批2026年度国家社科基金艺术学项目", date: "2026-07-10", summary: "由我院汪帆教授主持申报的'荆楚非遗数字化保护与活态传承研究'获批国家社科基金艺术学项目。" },
    { id: 12, title: "学院教师在核心期刊发表非遗研究论文3篇", date: "2026-07-02", summary: "我院教师团队在《装饰》《民族艺术》等核心期刊发表非遗保护与创新设计相关研究论文。" },
    { id: 13, title: "'楚式漆器传统工艺与现代设计融合研究'项目通过中期检查", date: "2026-06-15", summary: "省级科研项目顺利通过中期检查，专家组对项目进展和阶段性成果给予充分肯定。" },
    { id: 14, title: "学院举办荆楚非遗保护学术研讨会", date: "2026-06-01", summary: "来自全国各地的非遗研究专家齐聚我院，共同探讨非遗数字化保护的前沿问题。" },
    { id: 15, title: "横向课题'武汉城市文旅IP开发设计'签约启动", date: "2026-05-20", summary: "我院与武汉文旅集团签署横向课题合作协议，为武汉城市文旅品牌建设提供智力支持。" },
    { id: 16, title: "学院获2026年度湖北省教育科学规划课题立项", date: "2026-05-10", summary: "我院申报的'高职院校非遗传承人才培养模式研究'等2项课题获省级立项。" },
    { id: 17, title: "教师科研成果获湖北省社科优秀成果奖", date: "2026-04-28", summary: "我院教师的研究成果荣获湖北省社会科学优秀成果奖三等奖。" },
    { id: 18, title: "学院启动'荆楚非遗口述史'研究项目", date: "2026-04-15", summary: "项目将对荆楚地区非遗传承人进行系统性口述史采集，建立非遗传承人口述档案。" },
  ],
  academic: [
    { id: 21, title: "日本京都精华大学学者来访交流", date: "2026-07-12", summary: "日本京都精华大学传统工艺研究学者一行来我院访问，双方就非遗保护与创新进行深入交流。" },
    { id: 22, title: "我院教师参加2026全国非遗保护学术年会", date: "2026-07-05", summary: "我院3名教师应邀参加全国非遗保护学术年会，并在分论坛作主题报告。" },
    { id: 23, title: "学院举办'非遗进校园'系列讲座第四期", date: "2026-06-22", summary: "邀请国家级非遗传承人来院开展汉绣技艺专题讲座，师生反响热烈。" },
    { id: 24, title: "海峡两岸文创设计学术交流活动在我院举行", date: "2026-06-08", summary: "来自台湾艺术大学的师生与我院师生开展为期一周的文创设计交流活动。" },
    { id: 25, title: "学院与湖北省博物馆联合举办学术沙龙", date: "2026-05-30", summary: "围绕'博物馆文创产品开发'主题，双方专家学者进行了深入研讨。" },
    { id: 26, title: "我院教师赴意大利参加国际传统工艺博览会", date: "2026-05-15", summary: "展示荆楚非遗技艺和文创产品，获得国际同行高度关注和好评。" },
    { id: 27, title: "学院举办2026年学术活动月系列活动", date: "2026-05-01", summary: "学术活动月涵盖学术讲座、论文报告会、研究生论坛等多项学术交流活动。" },
    { id: 28, title: "湖南工艺美术职业学院来我院考察交流", date: "2026-04-20", summary: "双方就非遗专业建设、人才培养模式等进行了深入交流，达成多项合作意向。" },
  ],
};

// ── 七个专业新闻数据 ──
export const majorNews: Record<string, NewsItem[]> = {
  'digital-heritage': [
    { id: 1, title: "数字非遗专业学生作品亮相武汉国际文创博览会", date: "2026-07-10", summary: "学生创作的叶画、缠花等作品在武汉国际文创博览会上展出，获广泛好评。" },
    { id: 2, title: "非遗数字化保护技术培训在我院举办", date: "2026-06-25", summary: "湖北省非遗保护中心与我院联合举办非遗数字化保护技术培训。" },
    { id: 3, title: "数字非遗专业师生赴荆州博物馆考察学习", date: "2026-06-10", summary: "师生团队深入荆州博物馆，对楚式漆器、丝织品等文物进行数字化采集实践。" },
  ],
  'environmental-art': [
    { id: 1, title: "环境艺术设计专业举办2026届毕业设计展", date: "2026-07-08", summary: "以'荆楚新韵'为主题的毕业设计作品展在校美术馆开幕。" },
    { id: 2, title: "我院师生在省级环艺设计大赛中获佳绩", date: "2026-06-20", summary: "师生团队在湖北省高校环境艺术设计大赛中获得一等奖2项。" },
    { id: 3, title: "校企合作实践项目——社区微更新设计完成", date: "2026-05-15", summary: "与武汉城市规划设计院合作的社区微更新设计项目顺利结项。" },
  ],
  'product-design': [
    { id: 1, title: "产品设计专业学生作品入选全国工业设计展", date: "2026-07-05", summary: "3件学生作品入选2026全国工业设计展览会。" },
    { id: 2, title: "文创产品设计工作坊圆满结束", date: "2026-06-18", summary: "'楚风新造'文创产品设计工作坊顺利结课，完成文创方案20余套。" },
    { id: 3, title: "3D打印技术在产品设计中的应用讲座举办", date: "2026-05-20", summary: "邀请企业专家来院开展3D打印与产品设计专题讲座。" },
  ],
  'tourism-management': [
    { id: 1, title: "旅游管理专业学生圆满完成东湖景区实训", date: "2026-07-12", summary: "学生赴东湖风景区开展为期一周的景区管理综合实训。" },
    { id: 2, title: "文旅融合专题研讨会在学院召开", date: "2026-06-22", summary: "围绕湖北文旅产业转型升级举办文旅融合专题研讨会。" },
    { id: 3, title: "旅游管理专业新增智慧旅游方向课程", date: "2026-05-28", summary: "新增旅游大数据分析、智慧景区管理等课程模块。" },
  ],
  'hotel-management': [
    { id: 1, title: "酒店管理专业学生赴万达酒店开展岗位实训", date: "2026-07-08", summary: "学生赴武汉万达瑞华酒店开展为期两周的岗位实训。" },
    { id: 2, title: "数字化运营课程引入酒店管理系统实操平台", date: "2026-06-15", summary: "建成酒店数字化运营实训室，引入主流PMS系统。" },
    { id: 3, title: "校企合作订单班签约仪式举行", date: "2026-05-10", summary: "与万达酒店管理集团签署订单班合作协议。" },
  ],
  'broadcasting-hosting': [
    { id: 1, title: "播音专业学生获省大学生主持人大赛金奖", date: "2026-07-05", summary: "学生在湖北省大学生主持人大赛中斩获金奖和最佳台风奖。" },
    { id: 2, title: "学院演播厅升级改造完成", date: "2026-06-20", summary: "投资200万元的专业演播厅升级改造工程竣工，配备4K摄录系统。" },
    { id: 3, title: "新媒体主播训练营开营", date: "2026-05-25", summary: "面向播音专业学生的新媒体主播训练营正式开营。" },
  ],
  'performing-arts': [
    { id: 1, title: "表演艺术专业原创剧目《楚凤》成功首演", date: "2026-07-10", summary: "以楚文化为背景的原创舞台剧《楚凤》获得师生和专家一致好评。" },
    { id: 2, title: "舞蹈作品入选全国大学生艺术展演", date: "2026-06-15", summary: "学生创作的舞蹈作品入选2026年全国大学生艺术展演。" },
    { id: 3, title: "表演艺术专业举办期末汇报演出", date: "2026-05-30", summary: "涵盖戏剧、舞蹈、声乐等方向的期末汇报演出精彩呈现。" },
  ],
};

// ── 党建工作新闻数据 ──
export const partyNews: Record<string, NewsItem[]> = {
  overview: [
    { id: 1, title: "学院党总支概况", date: "2026-07-01", summary: "文旅创意学院党总支下设4个党支部，共有党员156名，其中教师党员42名，学生党员114名。" },
    { id: 2, title: "党总支组织架构调整通知", date: "2026-06-15", summary: "经上级党委批准，学院党总支对下设支部进行调整优化，新增学生第二党支部。" },
    { id: 3, title: "学院党总支荣获先进基层党组织称号", date: "2026-06-01", summary: "在2026年度党建工作评选中，我院党总支荣获'先进基层党组织'荣誉称号。" },
    { id: 4, title: "党总支召开2026年上半年工作总结会", date: "2026-05-20", summary: "全面总结上半年党建工作成效，部署下半年重点任务。" },
  ],
  dynamics: [
    { id: 11, title: "学习贯彻党的二十大精神专题讲座", date: "2026-07-15", summary: "学院党委组织全体师生党员深入学习党的二十大精神，推动党的创新理论入脑入心。" },
    { id: 12, title: "党员志愿服务进社区活动", date: "2026-07-10", summary: "学院党员志愿者走进社区，开展非遗文化宣传与体验活动，服务群众文化生活。" },
    { id: 13, title: "学院召开党风廉政建设专题会议", date: "2026-06-25", summary: "贯彻落实全面从严治党要求，加强党风廉政建设和反腐败工作。" },
    { id: 14, title: "红色教育基地参观学习活动", date: "2026-06-18", summary: "组织党员赴红色教育基地参观学习，重温入党誓词，坚定理想信念。" },
    { id: 15, title: "党总支开展主题党日活动", date: "2026-06-05", summary: "以'传承非遗文化、坚定文化自信'为主题开展党日活动。" },
    { id: 16, title: "党员发展对象培训班圆满结束", date: "2026-05-28", summary: "2026年第一期党员发展对象培训班顺利完成，共有35名发展对象参训。" },
    { id: 17, title: "支部书记抓党建工作述职评议会", date: "2026-05-15", summary: "各党支部书记就抓基层党建工作进行述职，接受评议考核。" },
    { id: 18, title: "学院开展'我为群众办实事'主题实践活动", date: "2026-05-01", summary: "聚焦师生急难愁盼问题，开展系列办实事活动。" },
  ],
};

// ── 产教融合新闻数据 ──
export const industryNews: Record<string, NewsItem[]> = {
  companies: [
    { id: 1, title: "学院与湖北省博物馆签署战略合作协议", date: "2026-07-12", summary: "双方将在文创产品开发、人才培养、展览策划等领域开展深度合作。" },
    { id: 2, title: "武汉文旅集团成为学院产教融合战略合作伙伴", date: "2026-06-28", summary: "共建文旅人才培养基地，推动文旅融合项目落地。" },
    { id: 3, title: "荆楚文创设计公司与我院共建设计工作室", date: "2026-06-10", summary: "校企共建文创设计工作室，为学生提供真实项目实践平台。" },
    { id: 4, title: "数字传媒科技公司来院洽谈合作", date: "2026-05-22", summary: "双方就VR/AR非遗展示项目合作达成初步意向。" },
    { id: 5, title: "新增3家校企合作单位", date: "2026-05-08", summary: "学院与光谷文创园等3家企业签署校企合作协议。" },
  ],
  projects: [
    { id: 11, title: "荆楚非遗数字保护工程项目启动", date: "2026-07-08", summary: "与湖北省博物馆合作的非遗数字化保护工程项目正式启动。" },
    { id: 12, title: "武汉城市文旅IP形象设计项目交付", date: "2026-06-20", summary: "为武汉文旅集团设计的城市文旅IP形象及系列文创产品正式交付。" },
    { id: 13, title: "沉浸式非遗体验展项目获省级立项", date: "2026-05-15", summary: "我院与荆楚文创联合申报的非遗体验展项目获批省级文化产业发展专项。" },
    { id: 14, title: "校企合作横向课题到账经费突破100万元", date: "2026-04-28", summary: "2026年度校企合作横向课题经费较去年增长30%。" },
  ],
  internship: [
    { id: 21, title: "湖北省博物馆实习基地挂牌成立", date: "2026-07-05", summary: "为学生提供文物修复、展览策划、社教活动等实习岗位。" },
    { id: 22, title: "黄鹤楼文创实习基地2026年实习生招募", date: "2026-06-15", summary: "面向2024级学生招募文创设计实习生15名。" },
    { id: 23, title: "东湖风景区实习基地获评省级示范", date: "2026-05-20", summary: "东湖风景区产教融合实习基地被评为湖北省职业教育示范性实训基地。" },
    { id: 24, title: "数字媒体产业园实习基地新增岗位", date: "2026-05-01", summary: "新增视频制作、新媒体运营等实习岗位20个。" },
  ],
  innovation: [
    { id: 31, title: "'楚韵工坊'创业项目获省级创业扶持", date: "2026-07-10", summary: "学生创业项目楚韵工坊获湖北省大学生创业扶持资金10万元。" },
    { id: 32, title: "非遗数字博物馆项目入驻创业孵化园", date: "2026-06-22", summary: "学生团队打造的非遗数字博物馆项目正式入驻学校创业孵化园。" },
    { id: 33, title: "全国大学生创新创业大赛金奖", date: "2026-06-05", summary: "楚韵工坊项目荣获全国大学生创新创业大赛金奖。" },
    { id: 34, title: "荆楚手作直播平台粉丝突破5万", date: "2026-05-18", summary: "学生创业团队运营的荆楚手作直播平台累计粉丝突破5万人。" },
    { id: 35, title: "学院举办创新创业训练营第二期", date: "2026-05-01", summary: "围绕商业模式设计、项目路演技巧等开展为期一周的创业培训。" },
  ],
};

// ── 学团工作新闻数据 ──
export const studentNews: Record<string, NewsItem[]> = {
  activities: [
    { id: 1, title: "2026年荆楚文化节隆重开幕", date: "2026-07-15", summary: "一年一度的荆楚文化节盛大开幕，展示学生非遗作品，传承传统文化精髓。" },
    { id: 2, title: "非遗技艺大赛决赛圆满落幕", date: "2026-07-05", summary: "学生展示剪纸、刺绣、陶艺等非遗技艺，传承匠人精神。" },
    { id: 3, title: "文创设计周作品展吸引千余人参观", date: "2026-06-20", summary: "学生文创设计作品展融合荆楚文化与现代设计，展现创意才华。" },
    { id: 4, title: "暑期社会实践调研团出征", date: "2026-06-10", summary: "5支社会实践团队将深入荆楚各地开展非遗文化调研。" },
    { id: 5, title: "毕业季文艺晚会精彩上演", date: "2026-06-01", summary: "师生共庆毕业季，精彩节目纷呈，展现青春活力。" },
    { id: 6, title: "志愿服务活动走进阳光社区", date: "2026-05-20", summary: "学生志愿者走进社区开展非遗文化宣传与体验服务。" },
  ],
  clubs: [
    { id: 11, title: "非遗传承社举办'匠心手作'体验活动", date: "2026-07-10", summary: "非遗传承社开展传统技艺体验活动，吸引众多同学参与。" },
    { id: 12, title: "文创设计社作品获省级表彰", date: "2026-06-25", summary: "社团成员设计的荆楚文化系列文创产品获省级优秀作品奖。" },
    { id: 13, title: "汉服文化社举办'楚风雅韵'展示活动", date: "2026-06-10", summary: "汉服文化社开展传统服饰展示与礼仪体验活动。" },
    { id: 14, title: "茶艺社在省级茶艺技能大赛中获佳绩", date: "2026-05-28", summary: "茶艺社成员在湖北省大学生茶艺技能大赛中获二等奖。" },
    { id: 15, title: "数字媒体社出品非遗纪录片上线", date: "2026-05-15", summary: "社团制作的荆楚非遗系列纪录片在校内平台上线，反响热烈。" },
    { id: 16, title: "书法绘画社春季作品展开展", date: "2026-05-01", summary: "展出社团成员书法、国画作品80余幅，展现传统艺术魅力。" },
  ],
  awards: [
    { id: 21, title: "全国大学生文创设计大赛金奖", date: "2026-07-01", summary: "李明华同学设计的'楚韵流芳'系列文创产品荣获全国金奖。" },
    { id: 22, title: "湖北省非遗传承创新大赛一等奖", date: "2026-06-20", summary: "王小雨同学的荆楚刺绣数字化保护项目获省级一等奖。" },
    { id: 23, title: "全国职业院校技能大赛一等奖", date: "2026-06-05", summary: "张文博、陈思琪团队在非遗文创产品设计赛项中获一等奖。" },
    { id: 24, title: "全国大学生创新创业大赛银奖", date: "2026-05-22", summary: "刘佳怡团队的非遗文化数字传播平台项目获国家级银奖。" },
    { id: 25, title: "湖北省大学生艺术节一等奖", date: "2026-05-10", summary: "汉服文化社的'楚风汉韵'服饰展演获省级艺术节一等奖。" },
    { id: 26, title: "全国数字媒体艺术大赛二等奖", date: "2026-04-25", summary: "数字媒体社的荆楚非遗数字纪录片获国家级二等奖。" },
    { id: 27, title: "湖北省书法篆刻大赛一等奖", date: "2026-04-15", summary: "周雅婷同学的楚辞书法作品获省级一等奖。" },
    { id: 28, title: "全国茶艺技能大赛三等奖", date: "2026-04-01", summary: "茶艺社的楚茶茶艺表演获国家级三等奖。" },
  ],
};