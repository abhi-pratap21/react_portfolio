import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

/* Counts up from 0 to `to` the first time it scrolls into view. */
const Counter = ({ to, suffix = "", duration = 1.8 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = Math.round(value).toLocaleString() + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
};

export default Counter;
