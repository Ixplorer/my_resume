import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import erpImg from '../assets/erp_screenshot.png';
import electionhubImg from '../assets/electionhub_screenshot.png';
import cihpngImg from '../assets/cihpng_screenshot.png';
import tradeskillImg from '../assets/tradeskill_screenshot.png';
import nwtfImg from '../assets/nwtf_campaign_screenshot.png';
import aboutImg from '../assets/about.png';

interface CarouselItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: 'ENTERPRISE ERP SUITE',
    category: 'Process Automation Engine',
    description: 'Automated workflow approvals, memo generation & KOICA-SMEDAN showcased system.',
    image: erpImg,
    liveUrl: 'https://cihpng.org/erp',
  },
  {
    id: 2,
    title: 'ELECTIONHUB DASHBOARD',
    category: 'Gov-Tech & Election Monitoring',
    description: 'Real-time observer platform and election integrity tracking for TAF Africa.',
    image: electionhubImg,
    liveUrl: 'https://electionhub.org.ng/',
  },
  {
    id: 3,
    title: 'CIHP HEALTH INFRASTRUCTURE',
    category: 'Enterprise Cloud & Web',
    description: 'Secure digital portal & enterprise server infrastructure supporting 150+ staff.',
    image: cihpngImg,
    liveUrl: 'https://www.cihpng.org',
  },
  {
    id: 4,
    title: 'TRADESKILL EDTECH PLATFORM',
    category: 'Vocational Learning & Fintech',
    description: 'Paystack-integrated e-learning portal for skills acquisition & certifications.',
    image: tradeskillImg,
    liveUrl: 'https://britsonandpartners.com/',
  },
  {
    id: 5,
    title: 'NWTF ADVOCACY & DATA INFOGRAPHICS',
    category: 'Strategic Communications & Data',
    description: 'Visual analytics, policy campaign reports & gender parity advocacy graphics.',
    image: nwtfImg,
  },
  {
    id: 6,
    title: 'BRITSON & PARTNERS PORTAL',
    category: 'Corporate Web Solution',
    description: 'Modern corporate business identity and online client management hub.',
    image: tradeskillImg,
    liveUrl: 'https://britsonandpartners.com/',
  },
  {
    id: 7,
    title: 'SYSTEM ARCHITECTURE SUITE',
    category: 'IT Infrastructure & Cloud Security',
    description: 'Cross-platform server deployment, Sophos firewall security & M365 migration.',
    image: aboutImg,
  },
];

export const CurvedCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [activeLightbox, setActiveLightbox] = useState<CarouselItem | null>(null);

  const dragStartX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying || activeLightbox !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeLightbox]);

  // Keyboard Escape listener for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  // Helper to calculate circular offset (-3 to 3)
  const getOffset = (index: number) => {
    const total = items.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Calculate 3D transformation properties based on offset position along the 3D arc
  const getCardTransform = (offset: number) => {
    const absOffset = Math.abs(offset);

    // Responsive position scaling
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;

    let translateX = 0;
    let rotateY = 0;
    let translateZ = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 50 - absOffset * 10;

    if (offset === 0) {
      translateX = 0;
      rotateY = 0;
      translateZ = 80;
      scale = 1.05;
      opacity = 1;
      zIndex = 50;
    } else {
      const direction = offset > 0 ? 1 : -1;
      const stepX = isMobile ? 120 : isTablet ? 200 : 280;
      const stepRotate = isMobile ? 22 : 32;
      const stepZ = isMobile ? -100 : -160;

      translateX = direction * (stepX * Math.pow(absOffset, 0.85));
      rotateY = -direction * (stepRotate * (1 + (absOffset - 1) * 0.35));
      translateZ = stepZ * absOffset;
      scale = Math.max(0.45, 1 - absOffset * 0.16);
      opacity = Math.max(0, 1 - absOffset * 0.25);
    }

    return {
      x: translateX,
      rotateY,
      z: translateZ,
      scale,
      opacity: absOffset > 3 ? 0 : opacity,
      zIndex,
    };
  };

  // Handle Touch/Mouse Dragging for swipe sensitivity
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const deltaX = e.clientX - dragStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) handlePrev();
      else handleNext();
    }
  };

  return (
    <section
      id="showcase-carousel"
      className="relative w-full bg-[#050403] text-[#E8DFD8] py-24 px-4 sm:px-8 lg:px-16 overflow-hidden select-none border-t border-b border-[#8C6D4F]/20"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[28rem] bg-[#D4AF37]/5 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[24rem] h-[24rem] bg-[#8C6D4F]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-4xl mx-auto text-center relative z-10 mb-12 sm:mb-16">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#16120E] mb-5 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span
            className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#F7E7C4]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Today's Pick
          </span>
        </motion.div>

        {/* Main Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#8C6D4F]">
            AWARD WINNING CREATORS
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm font-light text-[#BDB0A4] max-w-xl mx-auto leading-relaxed mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Explore a collection <span className="text-[#E8DFD8]">where art and design merge to shape what's next.</span> This gallery isn't just about visuals.
        </motion.p>

        {/* Pill Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => {
              const active = items[activeIndex];
              if (active) setActiveLightbox(active);
            }}
            className="px-7 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wide hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] active:scale-95"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Start for Free
          </button>
        </motion.div>
      </div>

      {/* 3D Arc Carousel Viewport */}
      <div
        className="relative w-full max-w-7xl mx-auto h-[380px] sm:h-[450px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {items.map((item, index) => {
          const offset = getOffset(index);
          const transform = getCardTransform(offset);
          const isCenter = offset === 0;

          return (
            <motion.div
              key={item.id}
              onClick={() => {
                if (isCenter) {
                  setActiveLightbox(item);
                } else {
                  setActiveIndex(index);
                }
              }}
              initial={false}
              animate={{
                x: transform.x,
                rotateY: transform.rotateY,
                z: transform.z,
                scale: transform.scale,
                opacity: transform.opacity,
              }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 26,
                mass: 0.8,
              }}
              style={{
                position: 'absolute',
                zIndex: transform.zIndex,
                transformStyle: 'preserve-3d',
              }}
              className={`w-[230px] sm:w-[300px] md:w-[340px] aspect-[3/4] rounded-3xl overflow-hidden border transition-shadow duration-500 cursor-pointer ${
                isCenter
                  ? 'border-[#D4AF37] shadow-[0_20px_50px_rgba(212,175,55,0.25)]'
                  : 'border-[#8C6D4F]/40 hover:border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
              }`}
            >
              {/* Card Image Container */}
              <div className="relative w-full h-full bg-[#0E0C0A]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />

                {/* Center Focal Card Glow & Expand Prompt */}
                {isCenter && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 border border-[#D4AF37]/60 text-[10px] font-mono text-[#F7E7C4] backdrop-blur-md flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                    <span>CLICK TO VIEW</span>
                  </div>
                )}

                {/* Card Bottom Text */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-left flex flex-col justify-end">
                  <span
                    className="text-[9.5px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-1 block"
                  >
                    {item.category}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl text-white font-bold uppercase tracking-tight leading-none mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[11px] font-light text-[#C4B5A5] line-clamp-2 leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls & Pagination Indicators */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto mt-6 pt-6 border-t border-[#8C6D4F]/20 gap-4">
        
        {/* Navigation Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-10 h-10 rounded-full border border-[#8C6D4F]/40 bg-[#14100C] text-[#E8DFD8] hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-black transition-colors flex items-center justify-center text-sm active:scale-95"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-10 h-10 rounded-full border border-[#8C6D4F]/40 bg-[#14100C] text-[#E8DFD8] hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-black transition-colors flex items-center justify-center text-sm active:scale-95"
          >
            →
          </button>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex items-center space-x-2">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === activeIndex
                  ? 'w-8 bg-[#D4AF37]'
                  : 'w-2 bg-[#8C6D4F]/40 hover:bg-[#8C6D4F]'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Status */}
        <div className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
          {isAutoPlaying ? '● AUTO SWIPE ON' : '⏸ PAUSED ON HOVER'}
        </div>
      </div>

      {/* Lightbox Modal for Fullscreen View */}
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
                  // {activeLightbox.category}
                </span>
                <h4
                  className="text-xl sm:text-3xl text-white uppercase tracking-wider"
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
                    <span>VISIT PROJECT ↗</span>
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
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl border border-[#D4AF37]/40 shadow-[0_0_60px_rgba(212,175,55,0.25)]"
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

export default CurvedCarousel;
