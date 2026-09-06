import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'AWARDS', href: '#awards' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-[#8C6D4F]/30 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#"
          className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:text-[#D4AF37] transition-colors z-50"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          ADEDAYO.
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center space-x-8 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/70 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 z-50">
          <a
            href="#contact"
            className="hidden sm:flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] transition-all duration-300 backdrop-blur-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-[#EAD8C7] hover:text-[#D4AF37] focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end relative">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-6 h-[2px] bg-[#EAD8C7] block origin-center transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-4 h-[2px] bg-[#D4AF37] block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="w-6 h-[2px] bg-[#EAD8C7] block origin-center transition-all duration-300"
              />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Collapsible Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0A0806]/98 border-b border-[#8C6D4F]/40 backdrop-blur-xl overflow-hidden px-6 pt-4 pb-8"
          >
            <nav
              className="flex flex-col space-y-5 pt-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="text-sm font-medium tracking-[0.28em] uppercase text-[#C4B5A5] hover:text-[#D4AF37] transition-colors py-1.5 border-b border-[#8C6D4F]/15 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-[#8C6D4F] font-mono">0{idx + 1}</span>
                </motion.a>
              ))}

              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 border border-[#D4AF37] bg-[#14100C] text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase"
                >
                  <span>GET IN TOUCH</span>
                  <span>↗</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
