import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/AbhiLogo.png";
import { SECTIONS, SOCIALS } from "../constants";
import useActiveSection from "../hooks/useActiveSection";

const socialLinks = [
  { href: SOCIALS.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: SOCIALS.github, icon: FaGithub, label: "GitHub" },
  { href: SOCIALS.twitter, icon: FaSquareXTwitter, label: "X" },
  { href: SOCIALS.instagram, icon: FaInstagram, label: "Instagram" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTIONS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-neutral-950/70 py-3 backdrop-blur-md"
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between px-6 mx-auto md:px-8">
        <a href="#home" aria-label="Home">
          <img className="w-12" src={logo} alt="Abhishek Pratap Mall" />
        </a>

        {/* Desktop links */}
        <div className="items-center hidden gap-7 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative text-sm transition-colors ${
                active === s.id ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="items-center hidden gap-4 text-lg sm:flex">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="transition-colors text-neutral-400 hover:text-white"
              >
                <s.icon />
              </a>
            ))}
          </div>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-2xl lg:hidden text-neutral-200"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t lg:hidden border-white/5 bg-neutral-950/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 text-sm transition-colors ${
                    active === s.id ? "text-white" : "text-neutral-400"
                  }`}
                >
                  {s.label}
                </a>
              ))}
              <div className="flex items-center gap-5 pt-4 mt-2 text-xl border-t border-white/5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="text-neutral-400 hover:text-white"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
