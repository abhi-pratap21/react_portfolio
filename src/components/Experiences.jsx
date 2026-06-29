import { motion } from "framer-motion";
import { WORK_EXPERIENCE } from "../constants";
import SectionTitle from "./SectionTitle";

const Experiences = () => {
  return (
    <section id="experience" className="py-24 border-b scroll-mt-24 border-white/5">
      <SectionTitle kicker="Career">
        Work <span className="text-neutral-500">Experience</span>
      </SectionTitle>

      <div className="relative max-w-3xl mx-auto mt-16">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 hidden w-px left-3 sm:block bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-transparent" />

        <div className="space-y-10">
          {WORK_EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative sm:pl-12"
            >
              {/* Timeline dot */}
              <span className="absolute hidden w-3 h-3 -translate-x-1/2 rounded-full sm:block left-3 top-2 bg-cyan-400 ring-4 ring-cyan-500/20" />

              <div className="p-6 transition-colors border rounded-2xl border-white/5 bg-white/[0.02] hover:border-white/10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}{" "}
                    <span className="text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text">
                      · {exp.company}
                    </span>
                  </h3>
                  <span className="text-xs text-neutral-500">{exp.year}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-500">
                  {exp.type} · {exp.location}
                </p>
                <p className="mt-3 text-neutral-300">{exp.summary}</p>

                {exp.points.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-neutral-400">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-full border border-white/5 bg-white/5 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
