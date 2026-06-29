import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { PROJECTS, SOCIALS } from "../constants";
import SectionTitle from "./SectionTitle";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const sx = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const sy = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set(-(py - 0.5) * 10);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      style={{ rotateX: sx, rotateY: sy, transformPerspective: 900 }}
      className="relative flex flex-col overflow-hidden transition-colors border group rounded-2xl border-white/5 bg-white/[0.02] hover:border-white/15"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
      </div>

      <div className="relative z-20 flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="flex-1 mt-3 text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs rounded-full border border-white/5 bg-white/5 text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors text-cyan-300 hover:text-cyan-200"
            >
              Live Demo <FiExternalLink />
            </a>
          )}
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors text-neutral-400 hover:text-white"
          >
            Code <FiGithub />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-b scroll-mt-24 border-white/5">
      <SectionTitle
        kicker="My Work"
        subtitle="A selection of things I've designed, built, and shipped"
      >
        Featured <span className="text-neutral-500">Projects</span>
      </SectionTitle>

      <div className="grid gap-6 mt-14 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
