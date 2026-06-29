import { SECTIONS } from "../constants";
import useActiveSection from "../hooks/useActiveSection";

/* Fixed vertical dots on the right edge. The active section's dot grows
   and glows, giving a clear "where am I / where to look" flow as you scroll. */
const SectionNav = () => {
  const active = useActiveSection(SECTIONS);

  return (
    <nav className="fixed z-50 flex-col hidden gap-4 -translate-y-1/2 right-6 top-1/2 lg:flex">
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            className="relative flex items-center justify-end group"
          >
            <span className="absolute px-2 py-1 text-xs transition-all duration-200 translate-x-2 rounded-md opacity-0 right-7 whitespace-nowrap bg-neutral-800/90 text-neutral-200 group-hover:translate-x-0 group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-7 w-1.5 bg-gradient-to-b from-cyan-400 to-purple-500"
                  : "h-1.5 w-1.5 bg-neutral-600 group-hover:bg-neutral-300"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default SectionNav;
