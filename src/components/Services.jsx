import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiCpu,
  FiShoppingCart,
  FiServer,
  FiLayout,
  FiArrowRight,
} from "react-icons/fi";
import { SERVICES, TRIDENT } from "../constants";
import SectionTitle from "./SectionTitle";

const ICONS = {
  web: FiCode,
  app: FiSmartphone,
  ai: FiCpu,
  ecommerce: FiShoppingCart,
  software: FiServer,
  design: FiLayout,
};

const Services = () => {
  return (
    <section id="services" className="py-24 border-b scroll-mt-24 border-white/5">
      <SectionTitle kicker="Hire Me">
        Services <span className="text-neutral-500">&amp; Freelance</span>
      </SectionTitle>
      <p className="max-w-2xl mx-auto mt-4 text-center text-neutral-400">
        Need a website, an app, or AI built into your product? I take on freelance
        and service-based work through my studio,{" "}
        <a
          href={TRIDENT.url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-cyan-300 hover:text-cyan-200"
        >
          {TRIDENT.name}
        </a>
        .
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-6 mt-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon] || FiCode;
          return (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              className="p-6 transition-colors border rounded-2xl border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/5"
            >
              <span className="flex items-center justify-center text-xl border w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 text-cyan-300 border-white/5">
                <Icon />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {s.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Trident Square call-to-action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center gap-5 p-8 mt-12 overflow-hidden text-center border sm:flex-row sm:justify-between sm:text-left rounded-3xl border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"
      >
        <div className="absolute rounded-full -right-10 -top-10 h-40 w-40 bg-purple-600/20 blur-3xl" />
        <div className="relative">
          <h3 className="text-xl font-semibold text-white">
            Have a project in mind?
          </h3>
          <p className="mt-1 text-neutral-400">
            {TRIDENT.tagline} Let&apos;s build yours together.
          </p>
        </div>
        <div className="relative flex flex-wrap justify-center gap-3">
          <a
            href={TRIDENT.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90"
          >
            Visit {TRIDENT.name} <FiArrowRight />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition border rounded-full border-white/15 text-neutral-200 hover:bg-white/5"
          >
            Hire me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
