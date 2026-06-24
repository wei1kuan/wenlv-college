import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { introData, leadershipData } from "@/data/mockData";

export default function About() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="学院简介" />

          {/* 学院简介 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-heritage-gold/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-display font-bold text-heritage-primary mb-3">
                    {introData.title}
                  </h3>
                  <p className="text-heritage-primary/60 text-lg mb-6 font-medium">
                    {introData.subtitle}
                  </p>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {introData.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-3 border-2 border-heritage-primary/30 rounded-xl" />
                  <div className="absolute -inset-6 border border-heritage-gold/20 rounded-2xl" />
                  <img
                    src={introData.imageUrl}
                    alt={introData.title}
                    className="relative w-full h-auto rounded-xl shadow-lg"
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
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-heritage-primary">领导团队</h2>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="w-12 h-px bg-heritage-primary" />
                <div className="w-2 h-2 bg-heritage-gold rotate-45" />
                <div className="w-12 h-px bg-heritage-primary" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipData.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-heritage-gold/10 group"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={leader.photoUrl}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/40 to-transparent" />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="text-xl font-display font-bold text-heritage-primary">{leader.name}</h4>
                    <p className="text-heritage-primary/70 text-sm mt-2 font-medium">{leader.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
