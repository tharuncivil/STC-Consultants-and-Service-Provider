import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Building2, MapPin } from "lucide-react";
import { COMPANY_INFO } from "../data";
import stcLogoImg from "../assets/images/STC_Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["home", "about", "services", "portfolio", "capabilities", "map", "news", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Capabilities", href: "#capabilities", id: "capabilities" },
    { name: "HQ Map", href: "#map", id: "map" },
    { name: "Policy News", href: "#news", id: "news" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-navy-800/50 py-3"
          : "bg-gradient-to-b from-navy-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand area */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-gold-500/40 shadow-lg shadow-gold-500/10 group-hover:scale-105 transition-transform duration-300 bg-navy-950 flex items-center justify-center p-1">
              <img 
                src={stcLogoImg} 
                alt="STC Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wide text-white text-base sm:text-lg leading-tight">
                STC Consultants
              </span>
              <span className="text-[10px] font-mono text-gold-400 tracking-wider font-semibold flex items-center gap-1 uppercase">
                <MapPin className="h-2.5 w-2.5" /> MSME Micro Registered
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-gold-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 border border-gold-500/30 bg-gold-500/5 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Button CTA */}
          <div className="hidden lg:block">
            <a
              id="cta-nav-button"
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold tracking-wider text-navy-950 bg-gold-400 hover:bg-gold-300 border border-gold-500 rounded-lg shadow-md hover:shadow-gold-500/20 transition-all duration-300 active:translate-y-0.5"
            >
              GET ADVISORY
            </a>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-900 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-900 border-b border-navy-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-navy-800 text-gold-400 border-l-4 border-gold-400 pl-3 font-semibold"
                      : "text-slate-300 hover:bg-navy-800/50 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  id="mobile-cta-button"
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="w-full flex items-center justify-center px-4 py-3 font-mono font-bold text-navy-950 bg-gold-400 hover:bg-gold-300 border border-gold-500 rounded-lg transition-colors duration-200"
                >
                  CONNECT WITH CEO
                </a>
              </div>
              <div className="pt-4 text-center">
                <p className="text-[10px] font-mono text-slate-500">
                  {COMPANY_INFO.registration}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
