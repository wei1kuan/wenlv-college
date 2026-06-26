import { footerLinks, contactInfo } from "@/data/mockData";
import { KnotCorner } from "@/components/KnotPattern";
import { HuiwenBgTexture } from "@/components/HuiwenPattern";
import { CloudThunderBand } from "@/components/ChuPattern";

/**
 * Footer — 页脚（漆器红底 + 中国结暗纹 + 四角如意纹 + 云雷顶边）
 */
export default function Footer() {
  return (
    <footer className="bg-heritage-primary text-white relative overflow-hidden">
      {/* 中国结菱形网格暗纹 */}
      <HuiwenBgTexture color="#E8C547" opacity={0.18} />

      {/* 四角如意结纹 */}
      <KnotCorner className="absolute top-0 left-0" color="#E8C547" size={48} />
      <KnotCorner className="absolute top-0 right-0 scale-x-[-1]" color="#E8C547" size={48} />
      <KnotCorner className="absolute bottom-0 left-0 scale-y-[-1]" color="#E8C547" size={48} />
      <KnotCorner className="absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1]" color="#E8C547" size={48} />

      {/* 云雷纹顶边装饰 */}
      <div className="relative z-10">
        <CloudThunderBand color="rgba(232,197,71,0.5)" count={100} className="w-full h-3 opacity-60" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-heritage-gold/30">
                <span className="text-heritage-gold font-bold text-2xl font-chinese">文</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">文旅创意学院</h3>
                <p className="text-white/60 text-sm">荆楚非遗传承与创新实践中心</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-body">
              传承荆楚传统文化，培养新时代文创人才，推动非遗技艺创新发展。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-heritage-gold font-bold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    className="text-white/70 hover:text-heritage-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-heritage-gold font-bold text-lg mb-4">联系我们</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="text-white/50">{info.icon}</span>
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h3 className="text-heritage-gold font-bold text-lg mb-4">关注我们</h3>
            <div className="w-32 h-32 bg-white/10 rounded-lg p-2 border border-heritage-gold/20">
              <div className="w-full h-full bg-white/20 flex items-center justify-center">
                <span className="text-white/50 text-xs text-center">学院公众号</span>
              </div>
            </div>
            <p className="mt-3 text-white/40 text-xs text-center">扫码关注获取更多资讯</p>
          </div>
        </div>

        {/* 版权 */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm font-body">
            © 2026 文旅创意学院（荆楚非遗传承与创新实践中心） 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
}
