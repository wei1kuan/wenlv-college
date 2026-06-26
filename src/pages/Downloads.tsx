import { motion } from "framer-motion";
import { Download, FileText, FileSpreadsheet, Presentation, Archive, File } from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import { downloadFilesData, type DownloadFile, type FileCategory, type FileType } from "@/data/mockData";

// 文件类型图标映射
const fileTypeIcons: Record<FileType, React.ReactNode> = {
  pdf: <FileText className="w-5 h-5 text-red-500" />,
  word: <FileText className="w-5 h-5 text-heritage-primary" />,
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
    title: "下载中心",
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
      whileHover={{ backgroundColor: "rgba(122, 42, 42, 0.05)" }}
      className="border-b border-gray-100 hover:border-heritage-primary/20 transition-colors duration-200"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
            {fileTypeIcons[file.fileType]}
          </div>
          <div>
            <div className="font-medium text-heritage-primary hover:text-heritage-primary/80 transition-colors duration-200">
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
      <td className="px-6 py-4 text-center text-sm text-gray-600 font-medium">
        {file.publishDate}
      </td>
      <td className="px-6 py-4 text-center">
        <motion.a
          href={file.downloadUrl}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-heritage-primary text-white rounded-lg hover:bg-heritage-primary/90 transition-colors duration-200 text-sm font-medium"
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
    <section className="mb-16">
      <SectionTitle title={config.title} subtitle={config.subtitle} />

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-heritage-gold/10">
        {/* 表格头部 */}
        <div className="bg-gradient-to-r from-heritage-primary to-heritage-primary/90 px-6 py-5">
          <div className="flex items-center gap-3 text-white">
            {config.icon}
            <h3 className="text-xl font-bold">{config.title}</h3>
            <span className="ml-auto text-sm bg-white/20 px-4 py-1 rounded-full font-medium">
              共 {files.length} 个文件
            </span>
          </div>
        </div>

        {/* 表格内容 */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-heritage-primary">
                  文件名称
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-heritage-primary">
                  文件类型
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-heritage-primary">
                  文件大小
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-heritage-primary">
                  发布日期
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-heritage-primary">
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
      </div>
    </section>
  );
}

export default function Downloads() {
  // 按分类分组文件
  const formsFiles = downloadFilesData.filter((file) => file.category === "form");

  return (
    <div className="min-h-screen bg-heritage-cream">

      <main className="pt-20 pb-20">
        {/* 下载内容区域 */}
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* 表格下载 */}
          <div id="form-downloads">
            <FileCategorySection category="form" files={formsFiles} />
          </div>

            {/* 温馨提示 */}
            <div className="mt-12 bg-heritage-gold/10 border border-heritage-gold/30 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-heritage-gold rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-heritage-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-heritage-primary mb-3">温馨提示</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-heritage-primary mt-0.5">•</span>
                      <span>请使用最新版本的浏览器下载文件，确保下载正常</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-heritage-primary mt-0.5">•</span>
                      <span>部分文件需要安装相应软件才能打开，如 Word、Excel、PDF 等</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-heritage-primary mt-0.5">•</span>
                      <span>如遇到下载问题，请联系学院办公室：027-87170290</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-heritage-primary mt-0.5">•</span>
                      <span>表格文件下载后请使用 Microsoft Office 或 WPS 打开编辑</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
