import { motion } from 'framer-motion';

interface EducationItem {
  type: 'DEGREE' | 'CERTIFICATION';
  title: string;
  institution: string;
  year: string;
  description?: string;
  badge: string;
}

const educationList: EducationItem[] = [
  {
    type: 'DEGREE',
    title: 'Masters in Information Management',
    institution: 'Ahmadu Bello University, Zaria',
    year: '2025 - 2026',
    description: 'Advanced postgraduate program specializing in enterprise information systems, IT governance, and data strategy.',
    badge: 'POSTGRADUATE',
  },
  {
    type: 'DEGREE',
    title: 'BSc. Statistics',
    institution: 'University of Abuja',
    year: '2012 - 2017',
    description: 'Foundational degree in statistical modeling, quantitative analysis, data analytics, and probability theory.',
    badge: 'BACHELORS',
  },
  {
    type: 'CERTIFICATION',
    title: 'Microsoft & GitHub Co-Pilot (AI-Assisted Coding)',
    institution: 'Microsoft / Andela',
    year: 'April 2026',
    description: 'Certified GH-300 in leveraging generative AI, GitHub Copilot, and LLMs for accelerated enterprise software development.',
    badge: 'AI & SOFTWARE',
  },
  {
    type: 'CERTIFICATION',
    title: 'Microsoft Azure Specialist Certification',
    institution: 'Microsoft',
    year: '2025',
    description: 'Certified in cloud architecture, virtual networks, identity management, and enterprise Azure deployment.',
    badge: 'CLOUD INFRASTRUCTURE',
  },
  {
    type: 'CERTIFICATION',
    title: "CS50's Introduction to Cybersecurity",
    institution: 'Harvard University (edX)',
    year: '2024',
    description: 'Rigorous coursework in network security, cryptography, threat modeling, and defensive system engineering.',
    badge: 'HARVARD / CYBERSECURITY',
  },
  {
    type: 'CERTIFICATION',
    title: "CS50's Introduction to Programming with Python",
    institution: 'Harvard University (edX)',
    year: '2024',
    description: 'Comprehensive computational thinking, algorithms, object-oriented programming, and automation in Python.',
    badge: 'HARVARD / PYTHON',
  },
  {
    type: 'CERTIFICATION',
    title: 'Web Development Certification',
    institution: 'GIZ / AfriHub / Global Distance Learning',
    year: '2021',
    description: 'Specialized training in full-stack web applications, database design, and responsive client architectures.',
    badge: 'WEB DEVELOPMENT',
  },
  {
    type: 'CERTIFICATION',
    title: 'Digital Marketing Certification',
    institution: 'Google Digital Skills for Africa',
    year: '2018',
    description: 'Certified in digital media strategy, SEO, online brand awareness, and campaign analytics.',
    badge: 'DIGITAL MEDIA',
  },
  {
    type: 'CERTIFICATION',
    title: 'Diploma in Computer Engineering',
    institution: 'Computer Engineering Institute',
    year: '2012',
    description: 'Hands-on hardware troubleshooting, motherboard repair, network assembly, and system engineering.',
    badge: 'HARDWARE ENGINEERING',
  },
  {
    type: 'CERTIFICATION',
    title: 'Graphics Design, Printing & Branding',
    institution: 'Professional Media Academy',
    year: '2011',
    description: 'Specialized training in visual communications, brand strategy, print press operations, and digital artwork.',
    badge: 'BRANDING & MEDIA',
  },
];

export const EducationSection: React.FC = () => {
  const degrees = educationList.filter((item) => item.type === 'DEGREE');
  const certs = educationList.filter((item) => item.type === 'CERTIFICATION');

  return (
    <section
      id="education"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

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
            05 / EDUCATION &amp; CERTIFICATIONS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              ACADEMIC DEGREES &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PROFESSIONAL CREDENTIALS.
            </span>
          </h2>
        </motion.div>

        {/* 1. ACADEMIC DEGREES */}
        <div className="mb-16">
          <h3
            className="text-2xl sm:text-3xl tracking-widest text-[#D4AF37] uppercase mb-8 flex items-center gap-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span>ACADEMIC DEGREES</span>
            <div className="h-[1px] flex-1 bg-[#8C6D4F]/20" />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {degrees.map((deg, idx) => (
              <motion.div
                key={deg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="relative p-7 border border-[#8C6D4F]/35 bg-[#0D0B08] rounded-sm group hover:border-[#D4AF37]/80 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] px-2.5 py-1 border border-[#D4AF37]/30 bg-[#14100C]">
                    {deg.badge}
                  </span>
                  <span className="text-xs font-mono text-[#8C6D4F]">
                    {deg.year}
                  </span>
                </div>

                <h4
                  className="text-3xl text-white group-hover:text-[#F7E7C4] transition-colors mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {deg.title}
                </h4>

                <span
                  className="block text-xs font-medium text-[#C4B5A5] mb-3 uppercase tracking-wider"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {deg.institution}
                </span>

                <p
                  className="text-xs font-light text-[#A8988B] leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {deg.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. SCHOLARSHIPS & FELLOWSHIPS BANNER */}
        <div className="mb-12 p-6 border border-[#D4AF37]/40 bg-[#120F0C] rounded-sm relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase block mb-1">
            // SCHOLARSHIPS &amp; SPONSORED FELLOWSHIPS
          </span>
          <p className="text-xs sm:text-[13px] font-light text-[#E8DFD8] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Beneficiary of prestigious scholarships and professional development programs sponsored by the <strong className="text-[#F7E7C4] font-medium">US Embassy</strong>, <strong className="text-[#F7E7C4] font-medium">Google</strong>, <strong className="text-[#F7E7C4] font-medium">Andela</strong>, the <strong className="text-[#F7E7C4] font-medium">European Union (EU)</strong>, the <strong className="text-[#F7E7C4] font-medium">British Council</strong>, and <strong className="text-[#F7E7C4] font-medium">GIZ</strong>.
          </p>
        </div>

        {/* 3. PROFESSIONAL CERTIFICATIONS */}
        <div>
          <h3
            className="text-2xl sm:text-3xl tracking-widest text-[#D4AF37] uppercase mb-8 flex items-center gap-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span>PROFESSIONAL CERTIFICATIONS</span>
            <div className="h-[1px] flex-1 bg-[#8C6D4F]/20" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative p-6 border border-[#8C6D4F]/25 bg-[#0A0806] rounded-sm group hover:border-[#D4AF37]/60 transition-all duration-400"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-mono tracking-[0.18em] uppercase text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[#8C6D4F]/80">
                    {cert.year}
                  </span>
                </div>

                <h4
                  className="text-xl sm:text-2xl text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-snug"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cert.title}
                </h4>

                <span
                  className="block text-[11px] font-medium text-[#C4B29E] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.institution}
                </span>

                <p
                  className="text-[11px] font-light text-[#8C7D70] leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
