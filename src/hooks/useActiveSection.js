import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the navbar and the
 * side scroll-flow indicator can highlight the active section.
 * Pass a STABLE array reference (e.g. the SECTIONS constant).
 */
export default function useActiveSection(sections) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return active;
}
