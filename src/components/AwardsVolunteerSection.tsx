import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Letter of Recommendation & Automatic Employment Award',
    issuer: 'Katsina State NYSC Headquarters',
    year: '2019',
    description: 'Awarded for exceptional service and digitizing the corps member election registration system, reducing a week-long manual process to 1 day.',
  },
  {
    title: 'Letter of Recommendation',
    issuer: 'Katsina State INEC Headquarters',
    year: '2019',
    description: 'Commended for outstanding technical coordination and logistical organization of 7,720 corps members for the 2019 Nigerian General Elections.',
  },
  {
    title: 'Certificate of Appreciation & Service Excellence',
    issuer: 'NYSC CDS Katsina State',
    year: '2019',
    description: 'Honored for outstanding leadership and continuous support as General Corps Liaison Officer (CLO).',
  },
  {
    title: 'Most Resourceful Class Representative Award',
    issuer: 'University of Abuja (Department of Statistics)',
    year: '2017',
    description: 'Voted Most Resourceful Class Representative in 2017 for exemplary academic leadership and student advocacy.',
  },
];

const volunteerItems = [
  {
    role: 'Active Volunteer & Project Member',
    organization: 'Junior Chamber International (JCI) Abuja Metro',
    description: 'Active participant in community needs assessment surveys, health outreach initiatives, and youth development projects across local communities in Abuja.',
  },
];

const languages = [
  { name: 'Yoruba', level: 'Native / Primary' },
  { name: 'English', level: 'Full Professional Proficiency' },
  { name: 'Hausa', level: 'Basic Working Proficiency' },
];

const hobbies = [
  { name: 'Hiking', detail: 'Captain of local hiking team (2 years)' },
  { name: 'Tech Blogging', detail: 'Avid writer on enterprise IT & cloud tech' },
  { name: 'Gadget Reviewing', detail: 'Hardware & consumer tech enthusiast' },
  { name: 'Video Gaming', detail: 'Immersive gaming & strategy enthusiast' },
];

export const AwardsVolunteerSection: React.FC = () => {
  return (
    <section
      id="awards"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 right-1/3 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

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
            06 / AWARDS, VOLUNTEER &amp; HOBBIES
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
              RECOGNITION, COMMUNITY &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PERSONAL INTERESTS.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT 7 COLS: AWARDS & HONORS */}
          <div className="lg:col-span-7 space-y-6">
            <h3
              className="text-2xl sm:text-3xl tracking-widest text-[#D4AF37] uppercase mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span>HONORS &amp; AWARDS</span>
              <div className="h-[1px] flex-1 bg-[#8C6D4F]/20" />
            </h3>

            <div className="space-y-5">
              {awards.map((award, idx) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="p-6 border border-[#8C6D4F]/30 bg-[#0D0B08] rounded-sm group hover:border-[#D4AF37]/70 transition-all duration-400"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37]">
                      {award.issuer}
                    </span>
                    <span className="text-xs font-mono text-[#8C6D4F]">
                      {award.year}
                    </span>
                  </div>

                  <h4
                    className="text-2xl sm:text-3xl text-white group-hover:text-[#F7E7C4] transition-colors mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {award.title}
                  </h4>

                  <p
                    className="text-xs font-light text-[#A8988B] leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT 5 COLS: VOLUNTEER & HOBBIES */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* VOLUNTEER WORK */}
            <div>
              <h3
                className="text-2xl sm:text-3xl tracking-widest text-[#D4AF37] uppercase mb-6 flex items-center gap-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span>VOLUNTEER LEADERSHIP</span>
                <div className="h-[1px] flex-1 bg-[#8C6D4F]/20" />
              </h3>

              {volunteerItems.map((item) => (
                <div
                  key={item.organization}
                  className="p-6 border border-[#8C6D4F]/30 bg-[#0D0B08] rounded-sm group hover:border-[#D4AF37]/70 transition-all duration-400"
                >
                  <h4
                    className="text-2xl text-white group-hover:text-[#F7E7C4] transition-colors mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.organization}
                  </h4>
                  <span
                    className="block text-[11px] font-mono text-[#D4AF37] uppercase mb-2 tracking-wider"
                  >
                    {item.role}
                  </span>
                  <p
                    className="text-xs font-light text-[#A8988B] leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* HOBBIES & INTERESTS */}
            <div>
              <h3
                className="text-2xl sm:text-3xl tracking-widest text-[#D4AF37] uppercase mb-6 flex items-center gap-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span>HOBBIES &amp; PURSUITS</span>
                <div className="h-[1px] flex-1 bg-[#8C6D4F]/20" />
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="p-4 border border-[#8C6D4F]/20 bg-[#0A0806] rounded-sm group hover:border-[#D4AF37]/50 transition-all duration-300"
                  >
                    <span
                      className="block text-xl text-white group-hover:text-[#F7E7C4] transition-colors"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {hobby.name}
                    </span>
                    <span
                      className="block text-[10px] font-light text-[#8C6D4F] leading-tight mt-0.5"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {hobby.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* LANGUAGES */}
            <div>
              <h3
                className="text-2xl sm:text-3xl tracking-widest text-[#D4AF37] uppercase mb-6 flex items-center gap-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span>LANGUAGES SPOKEN</span>
                <div className="h-[1px] flex-1 bg-[#8C6D4F]/20" />
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 border border-[#8C6D4F]/25 bg-[#0D0B08] rounded-sm text-center group hover:border-[#D4AF37]/60 transition-all duration-300"
                  >
                    <span
                      className="block text-lg text-white group-hover:text-[#F7E7C4] transition-colors uppercase"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {lang.name}
                    </span>
                    <span
                      className="block text-[9.5px] font-mono text-[#D4AF37] uppercase"
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AwardsVolunteerSection;
