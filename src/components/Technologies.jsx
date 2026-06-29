import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";
import {
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiGooglecloud,
  SiTailwindcss,
  SiRedux,
  SiExpress,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";

const ROW_ONE = [
  { name: "React", Icon: RiReactjsLine, color: "text-cyan-400" },
  { name: "Next.js", Icon: TbBrandNextjs, color: "text-neutral-100" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", Icon: TbBrandJavascript, color: "text-yellow-400" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", Icon: SiExpress, color: "text-neutral-300" },
];

const ROW_TWO = [
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
  { name: "Firebase", Icon: SiFirebase, color: "text-amber-500" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "text-sky-400" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "text-purple-500" },
  { name: "Java", Icon: FaJava, color: "text-sky-600" },
];

const Pill = ({ name, Icon, color }) => (
  <div className="flex items-center gap-3 px-6 py-4 transition-colors border shrink-0 rounded-2xl border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/5">
    <Icon className={`text-3xl ${color}`} />
    <span className="text-sm whitespace-nowrap text-neutral-300">{name}</span>
  </div>
);

const Marquee = ({ items, reverse }) => (
  <div className="relative overflow-hidden">
    <div
      className={`flex w-max gap-4 pr-4 will-change-transform ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {[...items, ...items].map((t, i) => (
        <Pill key={`${t.name}-${i}`} {...t} />
      ))}
    </div>
    <div className="absolute inset-y-0 left-0 z-10 w-20 sm:w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
    <div className="absolute inset-y-0 right-0 z-10 w-20 sm:w-24 bg-gradient-to-l from-neutral-950 to-transparent" />
  </div>
);

const Technologies = () => {
  return (
    <section id="skills" className="py-24 border-b scroll-mt-24 border-white/5">
      <SectionTitle
        kicker="Tech Stack"
        subtitle="The tools I reach for to design, build, and ship products"
      >
        Tech <span className="text-neutral-500">Stack</span>
      </SectionTitle>

      <div className="flex flex-col gap-4 mt-14 marquee-pause">
        <Marquee items={ROW_ONE} />
        <Marquee items={ROW_TWO} reverse />
      </div>
    </section>
  );
};

export default Technologies;
