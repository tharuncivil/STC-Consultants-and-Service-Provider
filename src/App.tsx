/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Leadership from "./components/Leadership";
import Infographics from "./components/Infographics";
import MapSection from "./components/MapSection";
import NewsSection from "./components/NewsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gold-500/30 selection:text-navy-950 scroll-smooth">
      {/* Sticky glass-backdrop header */}
      <Navbar />

      {/* Main Corporate landing sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Leadership />
        <Infographics />
        <MapSection />
        <NewsSection />
        <Contact />
      </main>

      {/* Detailed footer with MSME registration and quick links */}
      <Footer />
    </div>
  );
}
