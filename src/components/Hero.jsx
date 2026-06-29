import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiDownload, FiChevronDown } from "react-icons/fi";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/abhiprofilepic.png";
import pdf from "../pdf/resume.pdf";
import Magnetic from "./Magnetic";

const ROLES = [
  "AI-Powered SaaS Builder",
  "Full-Stack Software Engineer",
  "Backend & Cloud Architect",
  "Freelance App & Web Developer",
];

const fadeUp = (delay) => ({
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay } },
});

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex((v) => (v + 1) % ROLES.length),
      2400
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-24 pb-16 border-b scroll-mt-24 border-white/5"
    >
      {/* Animated grid backdrop */}
      <div className="absolute inset-0 -z-10 bg-grid" />

      <div className="flex flex-wrap items-center w-full gap-y-12">
        {/* Text */}
        <div className="w-full lg:w-7/12">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.span
              variants={fadeUp(0)}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs border rounded-full text-cyan-300 bg-cyan-500/10 border-cyan-500/20"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-400" />
              </span>
              Available for opportunities &amp; freelance
            </motion.span>

            <motion.h1
              variants={fadeUp(0.1)}
              className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Abhishek{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text animate-gradient">
                Pratap Mall
              </span>
            </motion.h1>

            {/* Rotating role */}
            <motion.div
              variants={fadeUp(0.2)}
              className="flex items-center h-10 mt-4 overflow-hidden text-xl sm:text-2xl"
            >
              <span className="text-neutral-500">I&apos;m a&nbsp;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-medium text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={fadeUp(0.3)}
              className="max-w-xl mt-6 font-light leading-relaxed text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={fadeUp(0.4)}
              className="flex flex-wrap items-center justify-center gap-4 mt-8 lg:justify-start"
            >
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90"
                >
                  Get in touch <FiArrowRight />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={pdf}
                  download="Abhishek_Pratap_Mall_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition border rounded-full border-white/15 text-neutral-200 hover:bg-white/5"
                >
                  <FiDownload /> Download CV
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>

        {/* Photo with parallax + rotating glow ring */}
        <div className="w-full lg:w-5/12">
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <motion.img
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-xs border shadow-2xl rounded-3xl border-white/10 sm:max-w-sm"
              src={profilePic}
              alt="Abhishek Pratap Mall"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll-down cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute hidden -translate-x-1/2 bottom-6 left-1/2 text-neutral-500 hover:text-white sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-xs"
        >
          Scroll
          <FiChevronDown className="text-lg" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
