import { motion, useScroll, useSpring } from "framer-motion";

/* Gradient bar at the very top of the page that fills as you scroll. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
    />
  );
};

export default ScrollProgress;
