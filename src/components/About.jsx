import { motion } from "framer-motion";
import { ABOUT_TEXT, STATS } from "../constants";
import SectionTitle from "./SectionTitle";
import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className="py-24 border-b scroll-mt-24 border-white/5">
      <SectionTitle kicker="Who I Am">
        About <span className="text-neutral-500">Me</span>
      </SectionTitle>

      <div className="max-w-4xl mx-auto mt-14">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-center text-neutral-300"
        >
          {ABOUT_TEXT}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-4 mt-12 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              className="p-5 text-center transition-colors border rounded-2xl border-white/5 bg-white/[0.02] hover:border-white/15"
            >
              <div className="text-3xl font-semibold text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs text-neutral-500">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
