import { motion } from "motion/react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { CheckCircle2, Milestone, Layers2, Compass } from "lucide-react";
import { PROCESS_STEPS, CAPABILITIES, SERVICE_DISTRIBUTION } from "../data";

export default function Infographics() {
  // Brand color scheme colors
  const PIE_COLORS = [
    "#0b1325", // Navy 900
    "#112233", // Navy 800
    "#1d3557", // Navy 700
    "#1d4ed8", // Navy 500
    "#475569", // Slate 600
    "#d97706", // Gold 500
    "#b45309", // Gold 600
    "#fcd34d", // Gold 300
  ];

  const BAR_COLORS = ["#d97706", "#b45309", "#d97706", "#b45309"];

  return (
    <section id="capabilities" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(var(--color-slate-400) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-gold-600 bg-gold-50 px-3 py-1.5 rounded-full border border-gold-200/50 uppercase"
          >
            Insights & Competencies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-navy-900 tracking-tight"
          >
            Capabilities & Service Metrics
          </motion.h2>
          <p className="mt-4 text-slate-600 text-sm font-sans max-w-2xl mx-auto">
            A comprehensive overview of our technical resource distribution, service ratings, and execution workflow.
          </p>
          <div className="mt-4 h-1 w-16 bg-gold-500 mx-auto rounded-full" />
        </div>

        {/* Bento-style Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          
          {/* Bento Card 1: Donut Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md shadow-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gold-50 text-gold-600 rounded-lg">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900 text-lg leading-tight">Service-Area Distribution</h3>
                  <p className="text-xs font-mono text-slate-400 font-semibold uppercase mt-0.5">Illustrative — update with actual project mix</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-sans leading-relaxed mb-6">
                Visualizing resource allocation and project engagement focus areas across our 8 major statutory and engineering service pillars.
              </p>
            </div>

            {/* Recharts Container */}
            <div className="h-72 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={SERVICE_DISTRIBUTION}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {SERVICE_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#0b1325", 
                      borderRadius: "8px", 
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px"
                    }} 
                  />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{
                      fontSize: "10.5px",
                      fontFamily: "var(--font-sans)",
                      lineHeight: "1.4",
                      color: "var(--color-slate-600)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bento Card 2: Horizontal Bar Capability Visuals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md shadow-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-navy-50 text-navy-700 rounded-lg">
                  <Layers2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900 text-lg leading-tight">Technical Capability Ratings</h3>
                  <p className="text-xs font-mono text-slate-400 font-semibold uppercase mt-0.5">Scale 1-5 index metric</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-sans leading-relaxed mb-6">
                Firm capability self-assessment scores mapping directly to statutory compliance frameworks and spatial systems.
              </p>
            </div>

            {/* Custom Interactive Rating Bars */}
            <div className="space-y-5">
              {CAPABILITIES.map((cap) => (
                <div key={cap.area} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-display font-extrabold text-navy-900">{cap.area}</span>
                    <span className="font-mono font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200/50">
                      Score: {cap.rating} / 5
                    </span>
                  </div>
                  
                  {/* Progress Line Bar */}
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 flex items-center">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(cap.rating / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-navy-800 to-gold-500 rounded-full"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">{cap.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Five Step Process Infographic */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 text-gold-400 font-mono text-xs font-bold tracking-wider rounded border border-navy-800">
              <Milestone className="h-3.5 w-3.5" /> SYSTEM DELIVERY PROCESS
            </div>
            <h3 className="mt-3 font-display font-extrabold text-navy-900 text-2xl tracking-tight">Our 5-Step Execution Workflow</h3>
          </div>

          {/* PROCESS FLOW GRAPHIC */}
          {/* Desktop Version (Horizontal Row connected by line) */}
          <div className="hidden lg:flex relative items-start justify-between gap-4 py-8">
            {/* Absolute connection vector line */}
            <div className="absolute top-14 left-10 right-10 h-0.5 bg-gradient-to-r from-navy-950 via-gold-400 to-slate-200 z-0" />

            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.stepNumber * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center w-1/5 px-2"
              >
                {/* Step badge node */}
                <div className="w-12 h-12 rounded-full bg-navy-950 border-4 border-white shadow-md text-gold-400 flex items-center justify-center font-mono font-bold text-lg group hover:scale-105 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300">
                  {step.stepNumber}
                </div>

                <h4 className="mt-5 font-display font-extrabold text-navy-900 text-sm tracking-tight leading-snug px-1">
                  {step.title}
                </h4>
                
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-sans px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Version (Vertical Timeline) */}
          <div className="flex lg:hidden flex-col space-y-8 relative pl-6 border-l border-slate-300 ml-4 py-4">
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step node indicator absolute */}
                <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-navy-950 border-2 border-white shadow text-gold-400 flex items-center justify-center font-mono font-bold text-xs">
                  {step.stepNumber}
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-display font-extrabold text-navy-900 text-sm tracking-tight">
                    {step.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
