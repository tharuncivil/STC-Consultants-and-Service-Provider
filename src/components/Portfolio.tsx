import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, Map, ShieldCheck, HardHat, Terminal, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Urban Planning", "Environmental", "Infrastructure", "GIS & Tech"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(proj => proj.category === activeFilter);

  // Category Icon Resolver
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Urban Planning":
        return <Map className="h-5 w-5 text-gold-500" />;
      case "Environmental":
        return <ShieldCheck className="h-5 w-5 text-gold-500" />;
      case "Infrastructure":
        return <HardHat className="h-5 w-5 text-gold-500" />;
      case "GIS & Tech":
        return <Terminal className="h-5 w-5 text-gold-500" />;
      default:
        return <FolderGit2 className="h-5 w-5 text-gold-500" />;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-gold-600 bg-gold-50 px-3 py-1.5 rounded-full border border-gold-200/50 uppercase">
              Project Portfolio
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-navy-900 tracking-tight">
              Selected Engagements
            </h2>
            <p className="mt-3 text-slate-600 text-sm font-sans">
              A record of technical assistance and master plan formulations delivered across key municipal and environmental jurisdictions.
            </p>
            <div className="mt-4 h-1 w-16 bg-gold-500 rounded-full" />
          </div>

          {/* Filter Pill Container */}
          <div className="flex flex-wrap gap-2 items-center self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 uppercase cursor-pointer ${
                  activeFilter === cat
                    ? "bg-navy-900 text-gold-400 border border-navy-900 shadow-md"
                    : "bg-slate-50 text-slate-600 hover:text-navy-900 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-gold-400/50 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Corner Line */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/10 to-transparent -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-300 rounded-full" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 bg-white text-navy-800 rounded-lg border border-slate-200 shadow-sm">
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                        {project.category}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4.5 w-4.5 text-slate-400 group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-extrabold text-navy-900 text-lg sm:text-xl tracking-tight leading-snug group-hover:text-navy-800 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footing Stat */}
                <div className="pt-4 mt-auto border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                    Core Metrics
                  </span>
                  <span className="text-xs font-mono font-bold text-gold-600 bg-gold-50 px-2.5 py-1 rounded border border-gold-200/50">
                    {project.stat}
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500 font-mono text-sm">No assignments found for this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}
