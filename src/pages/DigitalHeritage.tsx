import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import { digitalHeritageCourses } from "../data/mockData";

export default function DigitalHeritage() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-20"
      >
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="数字非遗设计与制作" 
              subtitle="传承千年技艺，创新数字未来"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-heritage-cream p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-heritage-primary mb-4">专业简介</h3>
                <p className="text-gray-700 leading-relaxed">
                  数字非遗设计与制作专业是学院重点特色专业，致力于将传统非遗技艺与现代数字技术相融合。专业依托荆楚地区丰富的非遗资源，开设叶画、缠花、西兰卡普、雕花剪纸、汉绣、书法、漆扇、茶艺等特色课程，培养既懂传统工艺又掌握现代设计理念的复合型人才。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-heritage-cream p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-heritage-primary mb-4">培养目标</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">●</span>
                    掌握非遗传统技艺的核心技法与工艺流程
                  </li>
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">●</span>
                    具备数字化设计与制作能力
                  </li>
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">●</span>
                    能够进行非遗文创产品的创新设计
                  </li>
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">●</span>
                    具有文化传承意识与创新精神
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-heritage-cream p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-heritage-primary mb-4">就业方向</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">▸</span>
                    非遗传承人与工艺师
                  </li>
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">▸</span>
                    文创产品设计师
                  </li>
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">▸</span>
                    博物馆、文化馆工作人员
                  </li>
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">▸</span>
                    文化旅游策划师
                  </li>
                  <li className="flex items-start">
                    <span className="text-heritage-primary mr-2">▸</span>
                    非遗教育培训师
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-heritage-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="特色课程" 
              subtitle="八大门类，传承非遗精髓"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {digitalHeritageCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={course.imageUrl}
                      alt={course.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-display font-bold text-heritage-primary">
                        {course.name}
                      </h3>
                      <span className="text-2xl">{course.icon}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-xs text-heritage-primary bg-heritage-primary/10 px-3 py-1 rounded-full">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-heritage-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                加入我们，传承非遗文化
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                数字非遗设计与制作专业欢迎热爱传统文化的你，一起探索非遗之美，创造属于新时代的文化精品
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-heritage-gold text-heritage-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
              >
                立即咨询报名
              </motion.button>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}