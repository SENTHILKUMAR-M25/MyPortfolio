import { motion, useMotionValue, useTransform, animate, useMotionTemplate, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/library.png";
import Git from "../assets/Git.png";
import GitHub from "../assets/GitHub.png";
import Redux from "../assets/Redux.png";
import WordPress from "../assets/wordpress.png";

const skills = [
  { name: "HTML", icon: html, percent: 80, color: "#E34F26" },
  { name: "CSS", icon: css, percent: 70, color: "#264DE4" },
  { name: "Tailwind", icon: tailwind, percent: 70, color: "#06B6D4" },
  { name: "JavaScript", icon: js, percent: 70, color: "#F7DF1E" },
  { name: "React", icon: react, percent: 68, color: "#61DAFB" },  
  { name: "Git", icon: Git, percent: 68, color: "#F05032" },      
  { name: "GitHub", icon: GitHub, percent: 68, color: "#181717" }, 
  { name: "Redux", icon: Redux, percent: 68, color: "#764ABC" },  
  { name: "WordPress", icon: WordPress, percent: 50, color: "#00749C" },
];

export default function SkillsCarousel() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  // Calculate scroll width
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Auto-play effect
  useEffect(() => {
    const speed = 30; // pixels per second
    let animation;

    const move = () => {
      animation = animate(x, -width, {
        duration: width / speed,
        ease: "linear",
        onComplete: () => {
          x.set(0);
          move();
        },
      });
    };

    move();
    return () => animation?.stop();
  }, [width, x]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-[#f8f5f5] flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">
        My Work <span className="text-orange-500">Skills</span>
      </h2>

      <motion.div ref={carouselRef} className="cursor-grab overflow-hidden w-full max-w-6xl">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{ x }}
          className="flex gap-6"
        >
          {skills.concat(skills).map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ------------------- Skill Card -------------------
function SkillCard({ skill }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const textTemplate = useMotionTemplate`${rounded}%`;

  useEffect(() => {
    const controls = animate(count, skill.percent, { duration: 1.8, ease: "easeInOut" });
    return controls.stop;
  }, [count, skill.percent]);

  return (
    <motion.div
      className={`
        bg-white shadow-md m-3 rounded-2xl p-6 flex flex-col items-center justify-center
        min-w-[90%] sm:min-w-[50%] md:min-w-[50%] lg:min-w-[33%]
      `}
    >
      {/* Circular Progress */}
      <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke={skill.color}
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference * (1 - skill.percent / 100) }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain mb-1" />
          <motion.span
            className="text-xs text-gray-600 font-medium"
            style={{ textContent: textTemplate }}
          >
            {textTemplate}
          </motion.span>
        </div>
      </div>

      <h3 className="text-lg font-semibold" style={{ color: skill.color }}>
        {skill.name}
      </h3>
    </motion.div>
  );
}
