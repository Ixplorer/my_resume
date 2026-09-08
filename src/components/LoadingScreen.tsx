import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const statusMessages = [
  'INITIALIZING CORE ENVIRONMENT',
  'LOADING CINEMATIC ASSETS',
  'CONFIGURING SYSTEM INFRASTRUCTURE',
  'OPTIMIZING VISUAL EXPERIENCE',
  'SYSTEM READY',
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    // Smooth progress increment loop
    const duration = 2400; // Total duration ~2.4 seconds
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + (Math.random() * 1.5 - 0.5);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400); // Brief pause at 100% before triggering exit
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Update status message based on progress
  useEffect(() => {
    if (progress < 25) setStatusIndex(0);
    else if (progress < 50) setStatusIndex(1);
    else if (progress < 75) setStatusIndex(2);
    else if (progress < 100) setStatusIndex(3);
    else setStatusIndex(4);
  }, [progress]);

  const handleSkip = () => {
    setProgress(100);
    onComplete();
  };

  const formattedProgress = String(Math.min(100, Math.floor(progress))).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(12px)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[100] bg-[#050505] text-[#E8DFD8] flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden select-none pointer-events-auto cursor-default"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.07)_0%,_rgba(0,0,0,0.95)_70%)] pointer-events-none" />

      {/* Decorative Grid Patterns */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#D4AF37 1px, #050505 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Bar Header */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#9E8B78] font-medium"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ADEDAYO S. ADEDEJI
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8C6D4F] hover:text-[#D4AF37] transition-colors border border-[#8C6D4F]/30 hover:border-[#D4AF37] px-3 sm:px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm cursor-pointer"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          SKIP INTRO ↗
        </button>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
        {/* Glowing Insignia Container */}
        <div className="relative flex items-center justify-center mb-8 sm:mb-10">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#D4AF37]/20 blur-2xl pointer-events-none"
          />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <img
              src={watermarkImg}
              alt="Insignia Emblem"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]"
            />
          </motion.div>
        </div>

        {/* Title & Role */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-2 max-w-xl"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase leading-tight font-normal text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#9E8B78]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ENTERPRISE IT & SOLUTIONS
          </h1>
          <p
            className="text-[10px] sm:text-xs md:text-[13px] tracking-[0.32em] uppercase text-[#C99E5D] font-normal"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ARCHITECTING DIGITAL TRANSFORMATION
          </p>
        </motion.div>
      </div>

      {/* Bottom Progress Section */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto space-y-4">
        {/* Status Text & Numerical Percentage */}
        <div className="flex items-center justify-between w-full px-1 text-[11px] sm:text-xs">
          <motion.span
            key={statusIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="tracking-[0.22em] uppercase text-[#9E8B78] font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {statusMessages[statusIndex]}
          </motion.span>

          <span
            className="font-serif italic text-[#D4AF37] text-base sm:text-lg tracking-wider"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {formattedProgress}%
          </span>
        </div>

        {/* Outer Bar Track */}
        <div className="relative w-full h-[2px] bg-[#1E1915] overflow-hidden rounded-full border border-[#D4AF37]/10">
          {/* Inner Animated Progress Fill */}
          <div
            className="h-full bg-gradient-to-r from-[#8C6D4F] via-[#D4AF37] to-[#F7E7C4] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(212,175,55,0.7)]"
            style={{ width: `${progress}%` }}
          />

          {/* Shimmer Light Beam */}
          <motion.div
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
