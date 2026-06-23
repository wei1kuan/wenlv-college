import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { introData, leadershipData } from "@/data/mockData";

export default function About() {
  return (
    <div className="min-h-screen bg-heritage-light">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="学院概况" subtitle="了解文旅创意学院" />

          {/* 学院简介 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-display font-bold text-heritage-blue mb-4">
                    {introData.title}
                  </h3>
                  <p className="text-heritage-red/70 text-lg mb-4">
                    {introData.subtitle}
                  </p>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {introData.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-3 border-2 border-heritage-red rounded-sm" />
                  <img
                    src={introData.imageUrl}
                    alt={introData.title}
                    className="relative w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* 领导团队 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-heritage-blue">领导团队</h2>
              <div className="w-16 h-1 bg-heritage-red mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipData.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={leader.photoUrl}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-display font-bold text-heritage-blue">{leader.name}</h4>
                    <p className="text-heritage-red text-sm mt-1">{leader.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 学院文化 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="bg-heritage-blue rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-display font-bold text-heritage-gold mb-4">10+</div>
                  <p className="text-gray-300">专业方向</p>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold text-heritage-gold mb-4">500+</div>
                  <p className="text-gray-300">在校学生</p>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold text-heritage-gold mb-4">50+</div>
                  <p className="text-gray-300">合作企业</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}