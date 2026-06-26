import SectionTitle from "./SectionTitle";
import { introData } from "@/data/mockData";

export default function IntroSection() {
  return (
    <section className="py-20 bg-heritage-light">
      <div className="max-w-[1600px] mx-auto px-4">
        <SectionTitle title="学院简介" subtitle="传承荆楚文脉 培育创意人才" />
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-3 border-2 border-heritage-primary rounded-sm z-0" />
            <div className="absolute -inset-1.5 border border-heritage-primary/40 rounded-sm z-0" />
            
            <div className="relative z-10 bg-white p-2">
              <div className="w-full h-auto aspect-[4/3] bg-gradient-to-br from-heritage-primary/30 via-heritage-secondary/40 to-heritage-gold/30 rounded-sm" />
            </div>
            
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-heritage-primary" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-heritage-primary" />
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-display font-bold text-heritage-primary mb-4">
              {introData.title}
            </h3>
            <p className="text-heritage-primary/70 text-lg mb-4 font-body">
              {introData.subtitle}
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed font-body">
              {introData.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-heritage-primary/50 to-transparent" />
              <div className="w-2 h-2 bg-heritage-secondary rotate-45" />
              <div className="h-0.5 flex-1 bg-gradient-to-l from-heritage-primary/50 to-transparent" />
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              {["非遗传承", "文创设计", "数字媒体", "荆楚文化"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-heritage-secondary/10 text-heritage-primary text-sm rounded-full border border-heritage-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}