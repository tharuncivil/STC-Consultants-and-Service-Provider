import { motion } from "motion/react";
import { Linkedin, Mail, GraduationCap, Award, MapPin } from "lucide-react";
import { LEADERSHIP, COMPANY_INFO } from "../data";
import tarunCeoPhoto from "../assets/images/tarun_ceo_1784285804628.jpg";

export default function Leadership() {
  const md = LEADERSHIP.md;
  const coreTeam = LEADERSHIP.coreTeam;

  return (
    <section id="leadership" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-gold-600 bg-gold-50 px-3 py-1.5 rounded-full border border-gold-200/50 uppercase"
          >
            Firm Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-navy-900 tracking-tight"
          >
            Management & Core Team
          </motion.h2>
          <div className="mt-4 h-1 w-16 bg-gold-500 mx-auto rounded-full" />
        </div>

        {/* MD & CEO Featured Card */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            {/* Left Photo Column */}
            <div className="lg:col-span-5 relative min-h-[350px] bg-navy-900 flex flex-col justify-center items-center p-8 text-center border-r border-slate-100">
              {/* Graphic Blueprint background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{
                  backgroundImage: "radial-gradient(var(--color-slate-100) 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              />
              
              {/* Photo Container */}
              <div className="relative w-48 h-48 rounded-full border-4 border-gold-400/50 overflow-hidden shadow-xl bg-navy-950 flex items-center justify-center group mb-6">
                <img
                  src={tarunCeoPhoto}
                  alt={md.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">{md.name}</h3>
                <p className="text-sm font-mono font-bold text-gold-400 uppercase tracking-widest mt-1.5">{md.role}</p>
                <p className="text-xs text-slate-400 font-sans mt-1">STC Consultants & Service Provider</p>
              </div>

              {/* CEO Direct Contact Links */}
              <div className="flex items-center gap-3 mt-6 relative z-10">
                <a
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2.5 rounded-full bg-navy-950 hover:bg-gold-500 hover:text-navy-950 border border-navy-800 text-slate-300 transition-all shadow-md cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-2.5 rounded-full bg-navy-950 hover:bg-gold-500 hover:text-navy-950 border border-navy-800 text-slate-300 transition-all shadow-md cursor-pointer"
                  aria-label="CEO Business Email"
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

            {/* Right Bio Column (Verbatim text) */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6 bg-white">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-gold-500" />
                <span className="text-xs font-mono font-extrabold tracking-widest text-slate-500 uppercase">Executive Biography</span>
              </div>
              
              <div className="prose prose-slate max-w-none text-slate-700 font-sans text-sm sm:text-base leading-relaxed space-y-4">
                {md.bio.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block uppercase">Qualification Edge</span>
                  <span className="text-navy-900 font-bold font-display mt-0.5 block">M.Tech (Urban Planning)</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase">Technical Base</span>
                  <span className="text-navy-900 font-bold font-display mt-0.5 block">B.Tech (Civil Engineering)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Team Members Row */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-display font-extrabold text-navy-900 text-xl tracking-tight">Our Technical Advisory Core</h3>
            <p className="text-xs text-slate-500 font-sans mt-1">Specialized professionals delivering spatial layouts, valuations, and compliance audits.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-gold-400/50 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 group"
              >
                <div>
                  {/* Photo Placeholder Graphic */}
                  <div className="w-16 h-16 rounded-xl bg-navy-50 text-navy-800 border border-slate-100 mb-5 flex items-center justify-center shadow-inner group-hover:scale-105 group-hover:border-gold-500/20 transition-all duration-300 relative overflow-hidden">
                    <span className="font-mono text-xs font-extrabold text-slate-400 uppercase">Core</span>
                    {/* Alt-tagged placeholder image for swap */}
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1 1'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3C/svg%3E"
                      alt={member.imagePlaceholder.replace("alt=", "").replace(/'/g, "").replace(/"/g, "")}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
                      loading="lazy"
                    />
                  </div>

                  <h4 className="font-display font-bold text-navy-900 text-base tracking-tight leading-tight group-hover:text-gold-600 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mt-1">
                    {member.role}
                  </p>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed mt-4">
                    {member.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>STATUS:</span>
                  <span className="text-navy-900 font-bold flex items-center gap-1 uppercase">
                    <MapPin className="h-2.5 w-2.5 text-gold-500" /> Active
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
