
import SectionTitle from "@/components/SectionTitle";
import { HuiwenBorder } from "@/components/HuiwenPattern";
import { introData } from "@/data/mockData";

export default function About() {
  return (
    <div className="min-h-screen bg-heritage-cream">

      <main className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="学院简介" />

          {/* 学院简介 */}
          <section id="college-intro" className="mt-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-heritage-gold/10 relative">
              <HuiwenBorder color="rgba(122, 42, 42, 0.4)" />
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
                  <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-heritage-primary/30 via-heritage-secondary/40 to-heritage-gold/30">
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 领导团队 */}
          <section id="leadership" className="mt-12">
            <SectionTitle title="领导团队" />
            <div className="bg-white rounded-xl shadow-sm border border-heritage-gold/10 p-8 md:p-10">
              <div className="space-y-6">
                {[
                  { name: "汪帆", role: "学院院长", duty: "主持学院行政全面工作，负责学院发展规划、专业建设、师资队伍建设及对外合作交流。" },
                  { name: "滕亚东", role: "党总支书记", duty: "主持学院党务全面工作，负责党建思政、意识形态、统战工作及安全稳定。" },
                  { name: "石焰", role: "总支副书记", duty: "分管学院党务工作、学生管理、招生就业、宣传工作，协助书记处理日常党务。" },
                  { name: "欧阳琼", role: "教学副院长", duty: "分管学院内涵建设、教学管理工作，负责课程建设、教学改革、实训基地及科研项目。" },
                ].map((leader, i) => (
                  <div key={i} className="flex items-start gap-5 pb-6 border-b border-heritage-gold/10 last:border-b-0 last:pb-0">
                    <div className="shrink-0 mt-1 w-3 h-3 border-2 border-heritage-gold rotate-45" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h4 className="text-xl font-display font-bold text-heritage-primary">{leader.name}</h4>
                        <span className="text-sm text-heritage-gold bg-heritage-gold/10 px-3 py-0.5 rounded-full font-medium">{leader.role}</span>
                      </div>
                      <p className="mt-2 text-gray-600 leading-relaxed">{leader.duty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 师资团队 */}
          <section id="faculty" className="mt-12">
            <SectionTitle title="师资团队" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { name: "教师-1", title: "非遗研究专家", desc: "国家级非遗代表性传承人，从事荆楚传统工艺研究30余年，主持国家级课题多项。" },
                { name: "教师-2", title: "环境设计学科带头人", desc: "湖北省设计学重点学科带头人，主持多项省级教学改革项目，出版专著3部。" },
                { name: "教师-3", title: "产品设计教研室主任", desc: "工业设计专业博士，获德国红点设计奖，指导学生获国家级竞赛奖项20余项。" },
                { name: "教师-4", title: "数字媒体艺术导师", desc: "北京大学访问学者，专注非遗数字化保护与VR/AR技术应用研究。" },
                { name: "教师-5", title: "旅游管理专业骨干", desc: "武汉大学旅游管理博士，主持省级文旅融合课题，发表核心期刊论文15篇。" },
                { name: "教师-6", title: "酒店管理专业负责人", desc: "曾任国际品牌酒店高管，双师型教师，专注酒店数字化运营研究。" },
                { name: "教师-7", title: "播音主持教研室主任", desc: "省级普通话测试员，原省级广播电视台主持人，具有丰富媒体实践经验。" },
                { name: "教师-8", title: "表演艺术学科带头人", desc: "国家一级演员，中国戏剧家协会会员，从事舞台表演教学20余年。" },
              ].map((teacher, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-heritage-gold/10 overflow-hidden transition-all group">
                  <div className="h-2 bg-gradient-to-r from-heritage-primary via-heritage-gold to-heritage-primary" />
                  <div className="p-5">
                    <h4 className="text-lg font-display font-bold text-heritage-primary mb-1">{teacher.name}</h4>
                    <span className="text-xs text-heritage-gold bg-heritage-gold/10 px-2 py-0.5 rounded-full">{teacher.title}</span>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">{teacher.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
