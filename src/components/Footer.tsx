import { motion } from "framer-motion";
import { footerLinks, contactInfo } from "@/data/mockData";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-heritage-primary text-white"
    >
      <div className="h-1 bg-white/20" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-heritage-primary font-bold text-2xl">文</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">文旅创意学院</h3>
                <p className="text-gray-400 text-sm">荆楚非遗传承与创新实践中心</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-body">
              传承荆楚传统文化，培养新时代文创人才，推动非遗技艺创新发展。
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">联系我们</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-white/80">{info.icon}</span>
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">关注我们</h3>
            <div className="w-32 h-32 bg-white rounded-lg p-2">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-xs text-center">学院公众号</span>
              </div>
            </div>
            <p className="mt-3 text-gray-400 text-xs text-center">扫码关注获取更多资讯</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm font-body">
            © 2026 文旅创意学院（荆楚非遗传承与创新实践中心） 版权所有
          </p>
        </div>
      </div>
    </motion.footer>
  );
}