import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Safe icon mapping resolver
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6" />;
    }
    return <Icons.FileText className="h-6 w-6" />;
  };

  return (
    <section id="services" className="py-24 bg-navy-950 text-white relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-[20%] right-0 w-[40%] h-[40%] bg-gold-600/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[40%] h-[40%] bg-navy-900/50 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1.5 rounded-full border border-gold-400/20 uppercase"
          >
            Core Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight"
          >
            Our Consulting Services
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm font-sans max-w-2xl mx-auto">
            Providing integrated engineering, spatial, and statutory clearance advice for high-stakes urban environments.
          </p>
          <div className="mt-4 h-1 w-16 bg-gold-500 mx-auto rounded-full" />
        </div>

        {/* Services Grid (6-8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isExpanded
                    ? "bg-gradient-to-b from-navy-900 to-navy-950 border-gold-400/60 shadow-xl shadow-gold-500/5 md:col-span-2 lg:col-span-1"
                    : "bg-navy-900/40 border-navy-800 hover:border-slate-700 hover:bg-navy-900/80 hover:shadow-lg hover:shadow-navy-950"
                }`}
                style={{ contentVisibility: "auto" }}
              >
                {/* Visual Gold/Navy Strip Accent */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gold-400 to-gold-600 opacity-80" />

                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-navy-950 text-gold-400 rounded-xl border border-navy-800 shadow-inner group-hover:scale-105 group-hover:border-gold-500/20 transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Short description card */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {service.card}
                  </p>

                  {/* Expanded description block */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-navy-800 text-sm text-slate-400 font-sans leading-relaxed space-y-2">
                          <p>{service.expanded}</p>
                          <p className="text-xs font-mono text-gold-500 font-semibold uppercase tracking-wider mt-2 flex items-center gap-1">
                            • Regulatory Standard Verified
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Expansion Trigger Toggle */}
                <div className="mt-6 pt-4 border-t border-navy-800/50 flex justify-end">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-gold-400 hover:text-gold-300 transition-colors uppercase cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        Collapse Detail <Icons.ChevronUp className="h-4.5 w-4.5" />
                      </>
                    ) : (
                      <>
                        Expand Details <Icons.ChevronDown className="h-4.5 w-4.5" />
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
