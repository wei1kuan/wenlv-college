import { motion } from "framer-motion";
import { Download, FileText, FileSpreadsheet, Presentation, Archive, File } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { downloadFilesData, type DownloadFile, type FileCategory, type FileType } from "@/data/mockData";

// 页面淡入动画配置
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const sectionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// 文件类型图标映射
const fileTypeIcons: Record<FileType, React.ReactNode> = {
  pdf: <FileText className="w-5 h-5 text-red-500" />,
  word: <FileText className="w-5 h-5 text-blue-600" />,
  excel: <FileSpreadsheet className="w-5 h-5 text-green-600" />,
  ppt: <Presentation className="w-5 h-5 text-orange-500" />,
  zip: <Archive className="w-5 h-5 text-purple-500" />,
  other: <File className="w-5 h-5 text-gray-500" />,
};

// 文件类型名称映射
const fileTypeNames: Record<FileType, string> = {
  pdf: "PDF",
  word: "Word",
  excel: "Excel",
  ppt: "PPT",
  zip: "压缩包",
  other: "其他",
};

// 分类配置
const categoryConfig: Record<FileCategory, { title: string; subtitle: string; icon: React.ReactNode }> = {
  form: {
    title: "表格下载",
    subtitle: "各类申请表格与模板",
    icon: <FileText className="w-6 h-6" />,
  },
  document: {
    title: "文件下载",
    subtitle: "政策文件与通知公告",
    icon: <File className="w-6 h-6" />,
  },
  material: {
    title: "资料下载",
    subtitle: "学习资料与教学课件",
    icon: <Archive className="w-6 h-6" />,
  },
};

// 文件列表项组件
function FileItem({ file, index }: { file: DownloadFile; index: number }) {
  return (
    <motion.tr
      variants={itemVariants}
      whileHover={{ backgroundColor: "rgba(200, 85, 61, 0.05)" }}
      className="border-b border-gray-100 hover:border-heritage-red/20 transition-colors duration-200"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
            {fileTypeIcons[file.fileType]}
          </div>
          <div>
            <div className="font-medium text-heritage-blue hover:text-heritage-red transition-colors duration-200">
              {file.name}
            </div>
            {file.description && (
              <div className="text-sm text-gray-500 mt-0.5 line-clamp-1">
                {file.description}
              </div>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
          {fileTypeNames[file.fileType]}
        </span>
      </td>
      <td className="px-6 py-4 text-center text-sm text-gray-600">
        {file.fileSize}
      </td>
      <td className="px-6 py-4 text-center text-sm text-gray-600">
        {file.publishDate}
      </td>
      <td className="px-6 py-4 text-center">
        <motion.a
          href={file.downloadUrl}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-heritage-red text-white rounded-lg hover:bg-heritage-red/90 transition-colors duration-200 text-sm font-medium"
        >
          <Download className="w-4 h-4" />
          下载
        </motion.a>
      </td>
    </motion.tr>
  );
}

// 文件分类区域组件
function FileCategorySection({
  category,
  files,
}: {
  category: FileCategory;
  files: DownloadFile[];
}) {
  const config = categoryConfig[category];

  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mb-16"
    >
      <SectionTitle title={config.title} subtitle={config.subtitle} />

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
      >
        {/* 表格头部 */}
        <div className="bg-gradient-to-r from-heritage-blue to-heritage-blue/90 px-6 py-4">
          <div className="flex items-center gap-3 text-white">
            {config.icon}
            <h3 className="text-lg font-bold">{config.title}</h3>
            <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full">
              共 {files.length} 个文件
            </span>
          </div>
        </div>

        {/* 表格内容 */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-3 text-left text-sm font-semibold text-heritage-blue">
                  文件名称
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-heritage-blue">
                  文件类型
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-heritage-blue">
                  文件大小
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-heritage-blue">
                  发布日期
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-heritage-blue">
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <FileItem key={file.id} file={file} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default function Downloads() {
  // 按分类分组文件
  const formsFiles = downloadFilesData.filter((file) => file.category === "form");
  const documentsFiles = downloadFilesData.filter((file) => file.category === "document");
  const materialsFiles = downloadFilesData.filter((file) => file.category === "material");

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
        <section className="relative bg-gradient-to-br from-heritage-red via-heritage-red to-heritage-blue py-20 overflow-hidden">
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-heritage-gold rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-heritage-gold rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                下载中心
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                提供各类表格模板、政策文件、学习资料下载服务
              </p>

              {/* 装饰分隔线 */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-0.5 w-16 bg-heritage-gold/50" />
                <div className="w-3 h-3 bg-heritage-gold rotate-45" />
                <div className="h-0.5 w-16 bg-heritage-gold/50" />
              </div>

              {/* 统计信息 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap justify-center gap-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-heritage-gold">{formsFiles.length}</div>
                  <div className="text-sm text-white/70 mt-1">表格模板</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-heritage-gold">{documentsFiles.length}</div>
                  <div className="text-sm text-white/70 mt-1">政策文件</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-heritage-gold">{materialsFiles.length}</div>
                  <div className="text-sm text-white/70 mt-1">学习资料</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 下载内容区域 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 表格下载 */}
            <FileCategorySection category="form" files={formsFiles} />

            {/* 文件下载 */}
            <FileCategorySection category="document" files={documentsFiles} />

            {/* 资料下载 */}
            <FileCategorySection category="material" files={materialsFiles} />

            {/* 温馨提示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-heritage-gold/10 border border-heritage-gold/30 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-heritage-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-heritage-blue mb-2">温馨提示</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-heritage-red mt-0.5">•</span>
                      <span>请使用最新版本的浏览器下载文件，确保下载正常</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-heritage-red mt-0.5">•</span>
                      <span>部分文件需要安装相应软件才能打开，如 Word、Excel、PDF 等</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-heritage-red mt-0.5">•</span>
                      <span>如遇到下载问题，请联系学院办公室：027-XXXXXXXX</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-heritage-red mt-0.5">•</span>
                      <span>表格文件下载后请使用 Microsoft Office 或 WPS 打开编辑</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}