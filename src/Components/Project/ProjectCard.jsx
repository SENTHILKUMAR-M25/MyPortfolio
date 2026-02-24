import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight, Hash, Shield } from "lucide-react";
import projects from "../Project/Projectdata";

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleNext = () =>
    setActive((prev) => (prev + 1) % projects.length);

  const handlePrev = () =>
    setActive((prev) => (prev - 1 + projects.length) % projects.length);

  return (
 
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex flex-col items-center justify-center py-20">

    
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center px-4">

        <div className="mb-8 md:mb-1 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-red-500 mb-2 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold"
          >
            <Shield size={14} /> Portfolio Archives
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter">
            PROTOTYPE <span className="text-red-600 underline decoration-red-900/50 underline-offset-8 italic">CORE</span>
          </h2>
        </div>

        <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center">
          <div
            className="relative w-full flex items-center justify-center"
            style={{ perspective: "2000px" }}
          >
            {projects.map((project, index) => {
              const offset = (index - active + projects.length) % projects.length;
              const adjustedOffset = offset > projects.length / 2 ? offset - projects.length : offset;
              const isCenter = adjustedOffset === 0;
              const absOffset = Math.abs(adjustedOffset);

              return (
                <motion.div
                  key={project.id}
                  onClick={() => isCenter ? navigate(`/projects/${project.id}`) : setActive(index)}
                  animate={{
                    /* FIX 2: Responsive X-axis spacing */
                    x: adjustedOffset * (window.innerWidth < 768 ? 180 : 300),
                    scale: isCenter ? 1 : 0.7,
                    rotateY: adjustedOffset * -35,
                    opacity: absOffset > 2 ? 0 : 1 - (absOffset * 0.4),
                    zIndex: projects.length - absOffset,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={`absolute w-[240px] md:w-[300px] h-[340px] md:h-[370px] rounded-2xl overflow-hidden cursor-pointer border ${isCenter ? 'border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.2)]' : 'border-white/5'} bg-[#0a0a0a]`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    animate={{ 
                      scale: isCenter ? 1 : 1.2,
                      filter: isCenter ? "grayscale(0%)" : "grayscale(100%) brightness(40%)" 
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                  />

                  {isCenter && (
                    <motion.div 
                      initial={{ top: "-100%" }}
                      animate={{ top: "100%" }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-[2px] bg-red-500/50 blur-sm z-20"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-30"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-px w-6 md:w-8 bg-red-600" />
                          <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">
                            {`ID_00${index + 1}`}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-4 md:mb-6 tracking-tight leading-none">
                          {project.title.toUpperCase()}
                        </h3>

                        <button className="group flex items-center gap-2 text-[10px] md:text-xs font-bold text-white uppercase tracking-widest hover:text-red-500 transition-colors">
                          Deploy Interface <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-red-600" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation - Positioned with better vertical spacing */}
        <div className="mt-8 md:mt-12 flex items-center gap-6 md:gap-12">
          <button
            onClick={handlePrev}
            className="p-3 md:p-4 rounded-xl border border-white/5 bg-white/5 text-zinc-400 hover:border-red-600 hover:text-red-600 hover:bg-red-600/5 transition-all active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-col items-center min-w-[80px]">
             <span className="text-red-600 font-black text-lg md:text-xl italic tracking-tighter">
                {active + 1} <span className="text-zinc-700 font-normal not-italic mx-1 md:mx-2">/</span> {projects.length}
             </span>
             <div className="w-full h-1 bg-zinc-900 mt-2 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-red-600" 
                  animate={{ width: `${((active + 1) / projects.length) * 100}%` }}
                />
             </div>
          </div>

          <button
            onClick={handleNext}
            className="p-3 md:p-4 rounded-xl border border-white/5 bg-white/5 text-zinc-400 hover:border-red-600 hover:text-red-600 hover:bg-red-600/5 transition-all active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}