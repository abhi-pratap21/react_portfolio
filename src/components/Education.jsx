import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { EDUCATION } from "../constants";
import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <section id="education" className="py-24 border-b scroll-mt-24 border-white/5">
      <SectionTitle kicker="Background">
        Edu<span className="text-neutral-500">cation</span>
      </SectionTitle>

      <div className="grid max-w-5xl gap-6 mx-auto mt-16 md:grid-cols-3">
        {EDUCATION.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col p-6 transition-colors border rounded-2xl border-white/5 bg-white/[0.02] hover:border-white/10"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center justify-center text-lg border w-9 h-9 rounded-xl bg-white/5 text-cyan-300 border-white/5">
                <FiBookOpen />
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-white/5 text-neutral-300">
                {e.score}
              </span>
            </div>
            <span className="mt-4 text-xs text-cyan-300">{e.year}</span>
            <h3 className="mt-1 font-semibold leading-snug text-white">{e.degree}</h3>
            <p className="mt-2 text-sm text-neutral-400">{e.institution}</p>
            <p className="mt-1 text-xs text-neutral-500">{e.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
