import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { majorsData } from "@/data/mockData";
import { ArrowRight } from "lucide-react";

export default function Majors() {
  const featuredMajor = majorsData.find((major) => major.isFeatured);
  const otherMajors = majorsData.filter((major) => !major.isFeatured);

  return (
    <div className="min-h-screen bg-heritage-light">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="专业设置" subtitle="传承荆楚文化，培养创新人才" />

          {featuredMajor && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link
                to={featuredMajor.detailPath || "#"}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-heritage-red text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      重点专业
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={featuredMajor.imageUrl}
                        alt={featuredMajor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-heritage-blue/30 to-transparent" />
                    </div>

                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-heritage-blue mb-4 group-hover:text-heritage-red transition-colors">
                        {featuredMajor.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 text-base">
                        {featuredMajor.description}
                      </p>
                      <div className="flex items-center text-heritage-red font-medium">
                        <span>了解更多</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMajors.map((major, index) => (
              <motion.div
                key={major.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={major.imageUrl}
                    alt={major.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-heritage-blue mb-3">
                    {major.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {major.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-white rounded-lg shadow-md px-8 py-6">
              <p className="text-heritage-blue font-medium mb-2">
                欢迎报考文旅创意学院
              </p>
              <p className="text-gray-600 text-sm">
                各专业招生详情请咨询招生办公室：027-XXXXXXXX
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}