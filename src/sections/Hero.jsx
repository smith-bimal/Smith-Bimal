import { ChevronsDown, House } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { themeColors } = useTheme();

  return (
    <section id="home" className="lg:min-h-screen flex items-center lg:py-20 py-16">
      <div className="max-w-4xl">
        <div className="mb-6">
          <h4 className={`flex items-center ${themeColors.text} font-medium text-sm mb-4 animate-fadeIn border rounded-full w-fit px-2 py-0.5`}>
            <House className="w-4 mr-2" /> Introduce
          </h4>
          <h1 className="text-6xl md:text-7xl mb-6 animate-fadeIn">
            Say Hi from <span className={themeColors.text}>Smith</span>,<br /> Full-stack Software Developer
          </h1>
        </div>

        <p className="text-neutral-300 text-xl mb-12 animate-fadeIn">
          I design and code beautifully simple things with strong technical skills. Specializing in building complex, scalable projects while combining technical expertise with development proficiency to deliver robust solutions.
        </p>

        <div className="flex justify-between items-center">
          <div className="flex flex-wrap md:flex-nowrap gap-10 animate-fadeIn">
            <div>
              <h2 className="text-4xl font-bold mb-2">10+</h2>
              <p className="text-neutral-400">Projects<br />Completed</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-2">1.5+</h2>
              <p className="text-neutral-400">Years of professional<br />technical experience</p>
            </div>
          </div>

          <a href="#portfolio" className="inline-flex items-center justify-center w-44 h-44 min-w-44 min-h-44 rounded-full animate-spin-slow border-2 border-neutral-500 p-3">
            <img src="round-text.png" alt="View Projects" className="w-full h-full animate-[spin_5s_linear_infinite]" />
            <ChevronsDown className="absolute w-10 h-10" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
