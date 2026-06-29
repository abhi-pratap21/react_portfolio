import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* A soft glowing orb that trails the cursor (desktop only) — gives the
   whole page a premium, alive feel. */
const CursorGlow = () => {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[40] hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.20),rgba(168,85,247,0.12),transparent_70%)] blur-2xl mix-blend-screen lg:block"
    />
  );
};

export default CursorGlow;
