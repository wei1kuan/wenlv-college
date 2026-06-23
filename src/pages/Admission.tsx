import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { admissionInfo, recruitNews, employmentStats } from "@/data/mockData";

export default function Admission() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-64 bg-gradient-to-r from-heritage-red to-heritage-gold flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">招生就业</h1>
          <p className="text-lg">欢迎报考文旅创意学院</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 招生信息 */}
        <SectionTitle title="招生信息" subtitle="了解招生政策，开启梦想之旅" />
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {admissionInfo.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-heritage-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <a href={item.link} className="inline-block mt-4 text-heritage-red hover:underline">
                    {item.linkText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 招生动态 */}
        <SectionTitle title="招生动态" subtitle="最新招生资讯" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recruitNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-md h-full">
                <div className="p-6">
                  <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-heritage-red text-white text-xs px-2 py-1 rounded">
                      {news.tag}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-heritage-blue mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{news.summary}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{news.date}</span>
                    <a href="#" className="text-heritage-red hover:underline">查看详情</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 就业情况 */}
        <SectionTitle title="就业情况" subtitle="优质就业，成就未来" />
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {employmentStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 text-center shadow-md"
            >
              <div className="text-4xl font-bold text-heritage-red mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 就业方向 */}
        <SectionTitle title="就业方向" subtitle="多元化职业发展" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "文化创意设计", icon: "🎨" },
            { name: "非遗传承创新", icon: "🏮" },
            { name: "旅游规划开发", icon: "🗺️" },
            { name: "酒店管理运营", icon: "🏨" },
            { name: "新媒体传播", icon: "📱" },
            { name: "艺术教育", icon: "🎓" },
            { name: "演艺策划", icon: "🎭" },
            { name: "会展策划", icon: "🎪" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-gray-700 font-medium">{item.name}</div>
            </motion.div>
          ))}
        </div>

        {/* 联系我们 */}
        <div className="mt-12 bg-heritage-blue text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">招生咨询</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-heritage-gold font-medium mb-1">咨询电话</div>
              <div>027-87170290</div>
            </div>
            <div>
              <div className="text-heritage-gold font-medium mb-1">招生邮箱</div>
              <div>zsb@cjxy.edu.cn</div>
            </div>
            <div>
              <div className="text-heritage-gold font-medium mb-1">咨询时间</div>
              <div>工作日 8:30-17:30</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}