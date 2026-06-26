import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { projectsData, ProjectItem } from "@/data/mockData";

interface ProjectCardProps {
  project: ProjectItem;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-heritage-primary/40 via-heritage-secondary/30 to-heritage-gold/40">
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-white text-sm font-medium">查看详情 →</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-display font-bold text-heritage-primary mb-2 group-hover:text-heritage-primary transition-colors">
          {project.name}
        </h3>
        
        <p className="text-heritage-primary/80 text-sm leading-relaxed line-clamp-2 font-body">
          {project.description}
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <div className="w-8 h-0.5 bg-heritage-gold group-hover:w-12 transition-all duration-300" />
          <div className="w-1.5 h-1.5 bg-heritage-gold rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-heritage-cream">
      <div className="max-w-[1600px] mx-auto px-4">
        <SectionTitle title="特色项目" subtitle="探索荆楚文化创新实践" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-heritage-primary text-heritage-primary rounded-full font-medium hover:bg-heritage-secondary hover:text-white transition-all duration-300">
            查看全部项目
          </button>
        </div>
      </div>
    </section>
  );
}