import { technologiesList } from "@/constants";
import Image from "next/image";

const invertNames = new Set([
  "Next.js",
  "GSAP",
  "Github",
  "Vercel",
  "Three.js",
  "Express",
]);

const LogoIcon = ({ technology: { name, icon } }) => {
  const shouldInvert = invertNames.has(name);

  return (
    <div
      className="
        flex-none flex-center marquee-item
        py-7 px-6 rounded-2xl
        bg-white/5 backdrop-blur-md
        border border-white/5
        transition-all duration-300
        hover:-translate-y-1 hover:bg-white/10 hover:border-white/10
        group
      "
    >
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <div className="relative">
          <Image
            src={icon}
            alt={name}
            width={48}
            height={48}
            className={`
              transition-all duration-300
              group-hover:scale-107
              ${shouldInvert ? "invert" : ""}
            `}
          />
          <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 bg-white transition" />
        </div>

        <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition">
          {name}
        </span>
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-56">
        <div className="marquee-box md:gap-12 gap-6">
          <div className="marquee-group md:gap-12 gap-6">
            {technologiesList.map(({ name, icon }) => (
              <LogoIcon key={name} technology={{ name, icon }} />
            ))}
          </div>

          <div className="marquee-group md:gap-12 gap-6" aria-hidden="true">
            {technologiesList.map(({ name, icon }) => (
              <LogoIcon key={`${name}-duplicate`} technology={{ name, icon }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
