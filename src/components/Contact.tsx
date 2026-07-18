import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Award, Linkedin, Send, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectType: "Urban & Regional Planning",
    message: ""
  });

  const projectTypes = [
    "Urban & Regional Planning",
    "GIS-Based Land Suitability & Mapping",
    "Environmental Clearance & EIA",
    "Industrial Park & Corridor layouts",
    "Cost Estimation & BOQ Calculation",
    "Feasibility Study & Techno-Economic Analysis",
    "Technology-Driven Planning Solution",
    "Real Estate & Land Advisory",
    "Other Consultation"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct Mailto parameters
    const recipient = COMPANY_INFO.email;
    const subject = `[STC Web Inquiry] Consultation Request from ${formData.name}`;
    const body = `Dear STC Consultants Team,

I would like to request a consultation regarding the following details:

- Name: ${formData.name}
- Email: ${formData.email}
- Organization: ${formData.organization || "N/A"}
- Project Interest Area: ${formData.projectType}

Message Detail:
${formData.message}

---
Inquiry generated from STC Consultants Digital Portal.`;

    // Trigger local email client
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 text-white relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-gold-600/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-[10%] left-0 w-[30%] h-[40%] bg-navy-900 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1.5 rounded-full border border-gold-400/20 uppercase"
          >
            Inquire & Collaborate
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight"
          >
            Let's Plan Your Next Project
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm font-sans max-w-2xl mx-auto">
            Whether you're a municipal authority preparing a statutory Development Plan, an industrial developer assessing site feasibility, or a landholder needing an environmental clearance pathway — we'd like to hear about it.
          </p>
          <div className="mt-4 h-1 w-16 bg-gold-500 mx-auto rounded-full" />
        </div>

        {/* 2 Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Corporate Info & Address Detail (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-xl tracking-tight text-white mb-4">
                Office Information & Registry
              </h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                Connect directly with our planning and engineering desk. We respond to initial statutory viability reviews within 2 business days.
              </p>
            </div>

            {/* List of info cards */}
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex gap-4 p-4 rounded-xl bg-navy-900/40 border border-navy-800">
                <div className="p-3 bg-navy-950 text-gold-400 rounded-lg shrink-0 self-start border border-navy-850">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Headquarters Address</span>
                  <p className="text-sm text-slate-200 font-sans mt-1 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-4 rounded-xl bg-navy-900/40 border border-navy-800">
                <div className="p-3 bg-navy-950 text-gold-400 rounded-lg shrink-0 self-start border border-navy-850">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Direct Consulting Line</span>
                  <p className="text-sm text-slate-200 font-sans mt-1 leading-relaxed">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-4 rounded-xl bg-navy-900/40 border border-navy-800">
                <div className="p-3 bg-navy-950 text-gold-400 rounded-lg shrink-0 self-start border border-navy-850">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Business Email Desk</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-gold-400 hover:text-gold-300 font-sans mt-1 leading-relaxed block transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Udyam MSME Detail */}
              <div className="flex gap-4 p-4 rounded-xl bg-navy-900/40 border border-navy-800">
                <div className="p-3 bg-navy-950 text-gold-400 rounded-lg shrink-0 self-start border border-navy-850">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">MSME Statutory Registry</span>
                  <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
                    <strong>Reg No:</strong> {COMPANY_INFO.registration}
                  </p>
                  <p className="text-[10px] font-mono text-gold-400 font-bold uppercase mt-1">Udyam Registered Micro Enterprise</p>
                </div>
              </div>

            </div>

            {/* Social Channels (LinkedIn) */}
            <div className="pt-4 border-t border-navy-800/80 flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400">FOLLOW CORPORATE ANNOUNCEMENTS:</span>
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-navy-950 border border-navy-800 text-slate-300 transition-all text-xs font-mono font-semibold cursor-pointer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Right Column: Actual Form (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 bg-navy-900/50 rounded-3xl border border-navy-800 p-8 sm:p-10 shadow-xl relative"
          >
            <div className="mb-6">
              <h3 className="font-display font-extrabold text-lg text-white tracking-tight">Consultation Form</h3>
              <p className="text-xs text-slate-400 font-sans mt-1">Complete your specifications. Submitting will launch your default email client with geo-referenced details pre-compiled.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 font-semibold uppercase">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full bg-navy-950 border border-navy-800 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 font-semibold uppercase">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter contact email"
                    className="w-full bg-navy-950 border border-navy-800 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                </div>
              </div>

              {/* Organization */}
              <div className="space-y-1.5">
                <label htmlFor="organization" className="text-xs font-mono text-slate-400 font-semibold uppercase">Company / Organization Name</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="E.g. Municipal Corporation or Developer Board"
                  className="w-full bg-navy-950 border border-navy-800 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-1.5">
                <label htmlFor="projectType" className="text-xs font-mono text-slate-400 font-semibold uppercase">Select Project Scope *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-navy-950 border border-navy-800 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all cursor-pointer"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-navy-950 text-slate-200">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-400 font-semibold uppercase">Project specifications / Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline the spatial scope, location details, local area criteria, and compliance deadlines..."
                  className="w-full bg-navy-950 border border-navy-800 focus:border-gold-500 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                />
              </div>

              {/* Submit trigger button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-gold-500/5 hover:shadow-gold-500/15 cursor-pointer active:translate-y-0.5 transition-all duration-200 font-display"
              >
                COMPILE & SUBMIT VIA MAIL <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
