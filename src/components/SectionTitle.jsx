import { motion } from "framer-motion";

/* Shared, animated section heading: kicker pill, gradient-able title,
   optional subtitle, and an animated underline that draws in on scroll. */
const SectionTitle = ({ kicker, children, subtitle }) => {
  return (
    <div className="text-center">
      {kicker && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-3 py-1 mb-4 text-xs tracking-[0.2em] uppercase border rounded-full text-cyan-300 bg-cyan-500/10 border-cyan-500/20"
        >
          {kicker}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-4 text-neutral-400"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-24 h-px mx-auto mt-6 origin-center bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />
    </div>
  );
};

export default SectionTitle;
