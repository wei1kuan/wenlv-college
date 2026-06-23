# 文旅创意学院主页技术架构文档

## 1. 架构设计
采用纯前端架构，使用React框架构建单页应用，通过组件化开发实现页面复用和模块化管理。

```mermaid
flowchart TD
    "前端层" --> "React应用"
    "React应用" --> "页面组件"
    "页面组件" --> "主页"
    "页面组件" --> "学院概况页"
    "页面组件" --> "党群工作页"
    "页面组件" --> "专业设置页"
    "页面组件" --> "数字非遗详情页"
    "页面组件" --> "教学科研页"
    "页面组件" --> "学生天地页"
    "页面组件" --> "产教融合页"
    "页面组件" --> "下载中心页"
    "React应用" --> "公共组件"
    "公共组件" --> "导航栏"
    "公共组件" --> "轮播横幅"
    "公共组件" --> "底部信息"
    "公共组件" --> "卡片组件"
    "React应用" --> "样式系统"
    "样式系统" --> "Tailwind CSS"
    "样式系统" --> "自定义CSS"
```

## 2. 技术说明
- **前端框架**: React@18 + TypeScript
- **样式方案**: Tailwind CSS@3 + 自定义CSS（非遗文化样式）
- **构建工具**: Vite@5
- **路由管理**: React Router@6
- **动画库**: Framer Motion（页面过渡和交互动画）
- **图标库**: Lucide React（基础图标）+ 自定义SVG（非遗元素图标）
- **数据管理**: 本地Mock数据（JSON格式）
- **图片处理**: 使用API生成图片，SVG装饰元素

## 3. 路由定义
| 路由路径 | 页面名称 | 功能说明 |
|----------|----------|----------|
| `/` | 主页 | 学院主页，展示导航、轮播、简介、新闻、项目、底部 |
| `/about` | 学院概况 | 学院简介、领导团队、组织架构、荣誉展示 |
| `/party` | 党群工作 | 党建工作、团学活动、工会活动栏目 |
| `/majors` | 专业设置 | 7个专业介绍，重点突出数字非遗专业 |
| `/majors/digital-heritage` | 数字非遗详情 | 专业介绍、特色课程展示 |
| `/teaching` | 教学科研 | 教学成果、科研项目、学术交流 |
| `/students` | 学生天地 | 学生活动、社团风采、获奖荣誉 |
| `/industry` | 产教融合 | 校企合作、实习基地、创新创业 |
| `/downloads` | 下载中心 | 文件分类、资料下载列表 |

## 4. 组件结构
### 4.1 公共组件
| 组件名称 | 功能说明 | 使用页面 |
|----------|----------|----------|
| `Navbar` | 顶部导航栏，包含Logo、导航菜单、汉堡菜单 | 所有页面 |
| `Carousel` | 轮播横幅组件，自动播放和手动切换 | 主页 |
| `Footer` | 底部信息组件，联系方式和版权信息 | 所有页面 |
| `Card` | 通用卡片组件，支持图片、标题、描述 | 主页、专业设置、特色课程等 |
| `SectionTitle` | 区域标题组件，带装饰元素 | 所有页面内容区域 |
| `NewsCard` | 新闻卡片组件，包含标题、日期、摘要 | 主页新闻动态 |
| `MajorCard` | 专业卡片组件，突出显示重点专业 | 专业设置页 |
| `CourseCard` | 课程卡片组件，展示特色课程 | 数字非遗详情页 |

### 4.2 页面组件
| 组件名称 | 包含模块 |
|----------|----------|
| `HomePage` | Navbar, Carousel, IntroSection, NewsSection, ProjectsSection, Footer |
| `AboutPage` | Navbar, IntroSection, LeadershipSection, StructureSection, HonorsSection, Footer |
| `PartyPage` | Navbar, PartyWorkSection, StudentActivitiesSection, UnionSection, Footer |
| `MajorsPage` | Navbar, MajorsGridSection, Footer |
| `DigitalHeritagePage` | Navbar, MajorIntroSection, CoursesGridSection, Footer |
| `TeachingPage` | Navbar, AchievementsSection, ResearchSection, ExchangeSection, Footer |
| `StudentsPage` | Navbar, ActivitiesSection, ClubsSection, HonorsSection, Footer |
| `IndustryPage` | Navbar, CooperationSection, InternshipSection, InnovationSection, Footer |
| `DownloadsPage` | Navbar, FileCategoriesSection, Footer |

## 5. 数据模型
### 5.1 Mock数据结构
采用JSON格式的本地Mock数据，包含以下数据类型：

```typescript
// 新闻数据
interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

// 专业数据
interface Major {
  id: string;
  name: string;
  description: string;
  image: string;
  featured: boolean; // 是否为重点专业
}

// 特色课程数据
interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

// 项目数据
interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

// 下载文件数据
interface DownloadFile {
  id: string;
  name: string;
  category: string;
  size: string;
  date: string;
  url: string;
}
```

### 5.2 数据文件
- `mock/news.json`: 新闻动态数据
- `mock/majors.json`: 专业设置数据
- `mock/courses.json`: 特色课程数据
- `mock/projects.json`: 特色项目数据
- `mock/downloads.json`: 下载文件数据

## 6. 样式系统
### 6.1 Tailwind配置
扩展Tailwind配置，添加自定义颜色和字体：

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'heritage-red': '#C8553D', // 赭红色
        'heritage-blue': '#2C3E50', // 深蓝色
        'heritage-gold': '#D4AF37', // 金色
        'heritage-cream': '#F5F5DC', // 米白色
        'heritage-green': '#4A5D23', // 墨绿色
      },
      fontFamily: {
        'display': ['方正清刻本悦宋', 'serif'], // 标题字体
        'body': ['思源黑体', 'sans-serif'], // 正文字体
      },
    },
  },
}
```

### 6.2 自定义CSS
创建自定义CSS文件，添加非遗文化装饰元素：

- `styles/heritage-patterns.css`: 文化纹样背景
- `styles/animations.css`: 页面过渡和交互动画
- `styles/components.css`: 组件特定样式