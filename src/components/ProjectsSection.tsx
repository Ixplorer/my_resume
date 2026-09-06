import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

import erpImg from '../assets/erp_screenshot.png';
import electionhubImg from '../assets/electionhub_screenshot.png';
import cihpngImg from '../assets/cihpng_screenshot.png';
import tradeskillImg from '../assets/tradeskill_screenshot.png';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Enterprise ERP & Automation Suite',
    category: 'ENTERPRISE / PROCESS AUTOMATION',
    description:
      'Custom web-based automated Enterprise Resource Planning suite engineered for CIHP. Features automated memo generation, job requisition modules, user authentication, multi-level approval workflows, auto-numbering, and print-ready outputs. Presented at the KOICA-SMEDAN Training of Trainers workshop in Abuja.',
    image: erpImg,
    liveUrl: 'https://cihpng.org/erp',
    liveUrlLabel: 'LIVE ERP SYSTEM ↗',
    tech: [
      'PHP',
      'Laravel',
      'React',
      'MySQL',
      'Active Directory',
      'Workflow Automation',
      'Tailwind CSS',
      'REST APIs',
    ],
    metrics: [
      { label: 'ORGANIZATION', value: 'CIHP Enterprise' },
      { label: 'LIVE PORTAL', value: 'cihpng.org/erp' },
      { label: 'SHOWCASE', value: 'KOICA-SMEDAN Workshop' },
    ],
  },
  {
    number: '02',
    title: 'TAF Africa ElectionHub Dashboard',
    category: 'ELECTION MONITORING / GOV-TECH',
    description:
      'Restored, upgraded, and secured the official TAF Africa ElectionHub Dashboard platform. Coordinated field observers and data analysts during the 2023 off-cycle elections in Kogi, Imo, and Bayelsa to monitor electoral integrity and accessibility for PWDs.',
    image: electionhubImg,
    liveUrl: 'https://electionhub.org.ng/',
    liveUrlLabel: 'LIVE ELECTION DASHBOARD ↗',
    tech: [
      'PHP',
      'JavaScript',
      'MySQL',
      'Cloud Backups',
      'Security Hardening',
      'Data Analytics',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'electionhub.org.ng' },
      { label: 'ELECTIONS', value: 'Kogi, Imo, Bayelsa 2023' },
      { label: 'ADVOCACY', value: 'Disability Inclusiveness' },
    ],
  },
  {
    number: '03',
    title: 'CIHP Official Website & Network Infrastructure',
    category: 'ENTERPRISE WEB & INFRASTRUCTURE',
    description:
      'Redesigned the official CIHP website with modern UX and essential feature pages. Managed network infrastructure across 3 office floors for 150+ staff using Sophos firewalls, HP servers, Cisco switches, M365, Exchange Online, SharePoint, and Active Directory.',
    image: cihpngImg,
    liveUrl: 'https://www.cihpng.org',
    liveUrlLabel: 'VISIT CIHP WEBSITE ↗',
    tech: [
      'Sophos Firewall',
      'HP Servers',
      'Cisco Switches',
      'M365 / Active Directory',
      'SharePoint Assets',
      'PHP / Web',
    ],
    metrics: [
      { label: 'SITE', value: 'cihpng.org' },
      { label: 'NETWORK', value: '3 Office Floors / 150+ Staff' },
      { label: 'DONOR', value: 'CDC-PEPFAR' },
    ],
  },
  {
    number: '04',
    title: 'Tradeskill & Enterprise Web Platforms',
    category: 'EDTECH / CLIENT DIGITAL PLATFORMS',
    description:
      'Engineered vocational e-learning applications with Paystack gateway integration alongside enterprise web platforms including Britson & Partners, The HERF, and Life Inspired Academy.',
    image: tradeskillImg,
    liveUrl: 'https://britsonandpartners.com/',
    liveUrlLabel: 'EXPLORE LIVE PORTFOLIO ↗',
    tech: [
      'PHP',
      'Laravel',
      'Paystack API',
      'MySQL',
      'Tailwind CSS',
      'Brand Identity',
    ],
    metrics: [
      { label: 'E-LEARNING', value: 'Paystack Integrated' },
      { label: 'CLIENT SITES', value: 'Britson, HERF, LifeInspired' },
      { label: 'DEPLOYMENTS', value: 'Live Web Services' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeLightbox, setActiveLightbox] = useState<{
    image: string;
    title: string;
    liveUrl?: string;
  } | null>(null);

  // Keyboard Escape Key Listener for Lightbox Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Click any project screenshot to expand into full-screen view. Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono border border-[#D4AF37]/50 rounded bg-[#1A1510] text-[#D4AF37]">ESC</kbd> or click the Close button to dismiss.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols): Project Info & Landscape Screenshot */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-3 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm font-light text-[#BDB0A4] leading-[1.8] tracking-wide mb-6"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Interactive Landscape Screenshot Thumbnail */}
                    <div
                      onClick={() =>
                        setActiveLightbox({
                          image: project.image,
                          title: project.title,
                          liveUrl: project.liveUrl,
                        })
                      }
                      className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-[#8C6D4F]/40 hover:border-[#D4AF37] cursor-pointer group/img transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        className="w-full h-full object-cover object-top filter brightness-90 contrast-105 group-hover/img:scale-105 group-hover/img:brightness-100 transition-all duration-700 ease-out"
                      />

                      {/* Hover Zoom Prompt Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span
                          className="px-4 py-2 border border-[#D4AF37] bg-black/80 text-[#F7E7C4] text-[10.5px] font-mono tracking-[0.2em] uppercase rounded-sm flex items-center space-x-2 shadow-lg"
                        >
                          <span>🔍 CLICK TO EXPAND FULLSCREEN</span>
                        </span>
                      </div>

                      {/* Corner Badge */}
                      <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-black/80 border border-[#8C6D4F]/50 text-[9px] font-mono text-[#D4AF37] rounded-sm pointer-events-none">
                        16:9 LANDSCAPE VIEW
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols): Metrics & Action Link */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.liveUrl || project.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-4 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.12)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>{project.liveUrlLabel || 'VISIT LIVE APPLICATION ↗'}</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 cursor-pointer select-none"
          >
            {/* Top Lightbox Header */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between w-full max-w-6xl mx-auto pt-2 pb-4 border-b border-[#8C6D4F]/30 z-10"
            >
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase block mb-0.5">
                  // FULLSCREEN SCREENSHOT PREVIEW
                </span>
                <h4
                  className="text-xl sm:text-2xl text-white uppercase tracking-wider"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {activeLightbox.title}
                </h4>
              </div>

              <div className="flex items-center space-x-4">
                {activeLightbox.liveUrl && (
                  <a
                    href={activeLightbox.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 border border-[#D4AF37]/60 hover:border-[#D4AF37] bg-[#1A1510] text-[#F7E7C4] text-xs font-mono tracking-wider uppercase transition-colors"
                  >
                    <span>VISIT LIVE SITE ↗</span>
                  </a>
                )}

                {/* Dismiss Button */}
                <button
                  onClick={() => setActiveLightbox(null)}
                  aria-label="Close Fullscreen View"
                  className="p-2 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white bg-[#14100C] text-xs font-mono tracking-widest uppercase transition-colors flex items-center space-x-2"
                >
                  <span>CLOSE</span>
                  <span className="text-sm font-bold">✕</span>
                  <span className="text-[9px] text-[#8C6D4F] hidden sm:inline">[ESC]</span>
                </button>
              </div>
            </div>

            {/* Center Image Canvas */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center py-4 my-auto relative max-w-6xl mx-auto w-full"
            >
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-md border border-[#D4AF37]/40 shadow-[0_0_60px_rgba(212,175,55,0.2)]"
              />
            </div>

            {/* Bottom Lightbox Helper Notice */}
            <div className="text-center pb-2 text-[10.5px] font-mono text-[#8C6D4F] tracking-widest uppercase">
              PRESS <kbd className="px-1.5 py-0.5 text-[9.5px] border border-[#D4AF37]/40 rounded bg-[#16120E] text-[#D4AF37]">ESC</kbd> OR CLICK ANYWHERE OUTSIDE TO DISMISS
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;