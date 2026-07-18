import React from "react";
import { Building2, ShieldCheck, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "../data";
import stcLogoImg from "../assets/images/stc_logo_1784285789153.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
    <footer id="app-footer" className="bg-navy-950 text-slate-400 border-t border-navy-900 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-navy-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Column 1: Brand Info (5 Columns) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-gold-500/40 bg-navy-950 flex items-center justify-center shadow-lg p-1">
                <img 
                  src={stcLogoImg} 
                  alt="STC Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold tracking-wide text-white text-lg leading-tight">
                STC Consultants
              </span>
            </div>
            
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-md">
              STC Consultants & Service Provider is a premier urban planning and environmental compliance advisory firm, delivering statutory design models, Digital Twin architectures, and techno-economic validations across India.
            </p>

            {/* MSME Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" /> MSME Registered Micro Enterprise
            </div>
          </div>

          {/* Column 2: Quick Links (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Sitemap Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="hover:text-gold-400 transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="hover:text-gold-400 transition-colors">
                  About the Firm
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-gold-400 transition-colors">
                  Consulting Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollTo(e, "portfolio")} className="hover:text-gold-400 transition-colors">
                  Project Portfolio
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={(e) => handleScrollTo(e, "capabilities")} className="hover:text-gold-400 transition-colors">
                  Insights & Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-gold-400 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Summary / Registration (4 Columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Official Registries & HQ
            </h4>
            
            <div className="space-y-3 text-xs font-sans leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong>HQ:</strong> Devarakonda, Nalgonda District, Telangana – 508248, India
                </span>
              </div>
              
              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Email Desk:</strong> {COMPANY_INFO.email}
                </span>
              </div>

              <div className="pt-3 border-t border-navy-900 text-[11px] text-slate-500 font-mono space-y-1">
                <div>Udyam Registration:</div>
                <div className="text-slate-300 font-semibold">{COMPANY_INFO.registration.split(", ")[1]}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright area */}
        <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] font-mono text-slate-500">
          <p>© {currentYear} STC Consultants & Service Provider. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Udyam Registered MSME (Micro Enterprise)</span>
            <span>•</span>
            <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-white transition-colors">Support Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
