import { motion } from "motion/react";
import { ArrowRight, FileText, CheckCircle, Shield } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden pt-20"
    >
      {/* Dynamic Background Elements: City Grid Lines, Gradients, Ambient glow */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(var(--color-gold-500) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      {/* Corporate Abstract Curved Overlay & Ambient Glowing Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] rounded-full bg-navy-900/40 filter blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[60%] rounded-full bg-gold-600/10 filter blur-[150px]" />
        <div className="absolute bottom-0 right-[10%] w-[60%] h-[30%] bg-slate-800/30 filter blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            
            {/* MSME Badge Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-sm text-gold-400 text-xs font-mono font-bold tracking-wider"
            >
              <Shield className="h-3.5 w-3.5 text-gold-400" />
              UDYAM REGISTRATION: UDYAM-TS-07-0106580
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Planning <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">Sustainable</span> Cities. <br className="hidden sm:block" />
              Engineering Resilient Infrastructure.
            </motion.h1>

            {/* Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl"
            >
              STC Consultants & Service Provider is a Udyam-registered urban planning and environmental
              consultancy delivering GIS-driven planning, environmental clearance, infrastructure
              design, and cost engineering for statutory authorities, municipal corporations, and
              private developers.
            </motion.p>

            {/* Buttons Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <button
                type="button"
                onClick={() => handleScrollTo("services")}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-lg shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                View Our Services
                <ArrowRight className="ml-2.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-850 border border-slate-700 hover:border-slate-500 rounded-lg shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Foundational Pillars Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-6 border-t border-navy-800 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold-400 shrink-0" />
                <span className="text-xs font-mono font-medium tracking-wider text-slate-400 uppercase">GIS & Remote Sensing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold-400 shrink-0" />
                <span className="text-xs font-mono font-medium tracking-wider text-slate-400 uppercase">EIA & Compliance</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="h-4 w-4 text-gold-400 shrink-0" />
                <span className="text-xs font-mono font-medium tracking-wider text-slate-400 uppercase">Cost Engineering</span>
              </div>
            </motion.div>

          </div>

          {/* Graphical Blueprint Visual Mockup (Right 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Elegant Tech Blueprint Grid Panel */}
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-800/80 p-6 sm:p-8 shadow-2xl overflow-hidden group">
              
              {/* Overlay blueprint circular grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <div className="w-[80%] h-[80%] border border-white rounded-full border-dashed" />
                <div className="w-[50%] h-[50%] border border-white rounded-full absolute" />
                <div className="w-[30%] h-[30%] border border-white rounded-full absolute border-dashed" />
                <div className="w-full h-px bg-white absolute" />
                <div className="h-full w-px bg-white absolute" />
              </div>

              {/* Decorative coordinate text inside blueprint */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-600">STC_PROJ_REF_SYS: WGS84</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-600">SCALE: 1:25,000</div>

              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-gold-400 bg-gold-400/10 rounded border border-gold-400/20 uppercase">
                    TELANGANA HQ
                  </span>
                  <FileText className="h-5 w-5 text-slate-500" />
                </div>

                {/* Animated visual elements showcasing technical precision */}
                <div className="my-6 flex flex-col space-y-4">
                  <div className="border border-navy-800/80 bg-navy-950/70 rounded-lg p-3">
                    <p className="text-[10px] font-mono text-gold-400 font-semibold mb-1 uppercase tracking-wider">PROJECT ORIGIN</p>
                    <p className="text-sm font-display font-medium text-white">Devarakonda, Nalgonda</p>
                    <p className="text-xs text-slate-400">Founded: March 2026</p>
                  </div>

                  <div className="border border-navy-800/80 bg-navy-950/70 rounded-lg p-3">
                    <p className="text-[10px] font-mono text-gold-400 font-semibold mb-1 uppercase tracking-wider">STATUTORY STANDARDS</p>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300 font-sans">
                      <div>• MRTP Act, 1966</div>
                      <div>• DCPR Code</div>
                      <div>• CRZ Notifications</div>
                      <div>• UDPFI Norms</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>UDYAM REGISTERED</span>
                  <span className="text-gold-400 font-bold">MSME MICRO</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
