import { motion } from "motion/react";
import { Award, Landmark, MapPin, ClipboardCheck } from "lucide-react";
import { ABOUT_COPY, COMPANY_INFO } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-gold-600 bg-gold-50 px-3 py-1.5 rounded-full border border-gold-200/50 uppercase"
          >
            Institutional Profile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-navy-900 tracking-tight"
          >
            About STC Consultants
          </motion.h2>
          <div className="mt-4 h-1 w-16 bg-gold-500 mx-auto rounded-full" />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Verbose Narrative Content (Verbatim Copy) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="prose prose-slate max-w-none">
              {/* Parse Paragraphs from about copy */}
              {ABOUT_COPY.split("\n\n").map((para, index) => (
                <p
                  key={index}
                  className="text-base text-slate-700 leading-relaxed font-sans first-of-type:text-lg first-of-type:text-slate-800 first-of-type:font-medium"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Quick credentials tag cloud */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2">
              <span className="text-xs font-mono font-semibold bg-navy-50 text-navy-800 px-3 py-1.5 rounded border border-navy-100">
                MRTP ACT, 1966
              </span>
              <span className="text-xs font-mono font-semibold bg-navy-50 text-navy-800 px-3 py-1.5 rounded border border-navy-100">
                DCPR REGULATIONS
              </span>
              <span className="text-xs font-mono font-semibold bg-navy-50 text-navy-800 px-3 py-1.5 rounded border border-navy-100">
                CRZ COMPLIANCE
              </span>
              <span className="text-xs font-mono font-semibold bg-navy-50 text-navy-800 px-3 py-1.5 rounded border border-navy-100">
                UDPFI GUIDELINES
              </span>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Info Cards & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            
            {/* Card 1: Registration */}
            <div className="p-6 bg-white rounded-xl shadow-md shadow-slate-100 border border-slate-200/60 flex flex-col justify-between space-y-4 hover:border-gold-400/50 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
              <div className="p-3 bg-gold-50 text-gold-600 rounded-lg self-start">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-sm tracking-wide uppercase">Udyam Registration</h3>
                <p className="mt-2 text-xs font-mono text-slate-500 font-semibold leading-relaxed">UDYAM-TS-07-0106580</p>
                <p className="mt-1 text-xs text-slate-600">Registered Micro Enterprise MSME, Ministry of MSME, Govt of India.</p>
              </div>
            </div>

            {/* Card 2: HQ Location */}
            <div className="p-6 bg-white rounded-xl shadow-md shadow-slate-100 border border-slate-200/60 flex flex-col justify-between space-y-4 hover:border-gold-400/50 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
              <div className="p-3 bg-navy-50 text-navy-700 rounded-lg self-start">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-sm tracking-wide uppercase">HQ Location</h3>
                <p className="mt-2 text-xs font-mono text-slate-500 font-semibold leading-relaxed">Telangana, India</p>
                <p className="mt-1 text-xs text-slate-600">Devarakonda, Nalgonda District — Strategic urban corridor service hub.</p>
              </div>
            </div>

            {/* Card 3: Academic & Tech Edge */}
            <div className="p-6 bg-white rounded-xl shadow-md shadow-slate-100 border border-slate-200/60 flex flex-col justify-between space-y-4 hover:border-gold-400/50 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
              <div className="p-3 bg-navy-50 text-navy-700 rounded-lg self-start">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-sm tracking-wide uppercase">Institutional Rigor</h3>
                <p className="mt-2 text-xs font-mono text-slate-500 font-semibold leading-relaxed">M.Tech Planning Edge</p>
                <p className="mt-1 text-xs text-slate-600">Leadership from SVNIT Surat with public and private sector statutory expertise.</p>
              </div>
            </div>

            {/* Card 4: Unified Scope */}
            <div className="p-6 bg-white rounded-xl shadow-md shadow-slate-100 border border-slate-200/60 flex flex-col justify-between space-y-4 hover:border-gold-400/50 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
              <div className="p-3 bg-gold-50 text-gold-600 rounded-lg self-start">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-900 text-sm tracking-wide uppercase">Unified Delivery</h3>
                <p className="mt-2 text-xs font-mono text-slate-500 font-semibold leading-relaxed">Concept to Approval</p>
                <p className="mt-1 text-xs text-slate-600">Eliminating client overhead by packing GIS, EIA, and Cost Engineering under one roof.</p>
              </div>
            </div>

          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
