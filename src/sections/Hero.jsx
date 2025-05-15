import { ChevronsDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { themeColors } = useTheme();
  
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="max-w-3xl">
        <div className="mb-6">
          <h4 className={`flex items-center ${themeColors.text} font-medium mb-4 animate-fadeIn`}>
            <i className="las la-home mr-2"></i> Introduce
          </h4>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Say Hi from <span className={themeColors.text}>Drake</span>, Webflow Designer and Developer
          </h1>
        </div>

        <p className="text-gray-300 text-xl mb-12 animate-fadeIn">
          I design and code beautifully simple things and I love what I do. Just simple like that!
        </p>

        <a href="#portfolio" className="relative inline-flex items-center justify-center w-44 h-44 rounded-full mb-16 animate-spin-slow border-2 border-neutral-500 p-3">
          <img src="round-text.png" alt="View Projects" className="w-full h-full animate-[spin_5s_linear_infinite]" />
          <ChevronsDown className="absolute w-10 h-10"/>
        </a>

        <div className="flex flex-wrap md:flex-nowrap gap-10 animate-fadeIn">
          <div>
            <h2 className="text-4xl font-bold mb-2">10+</h2>
            <p className="text-gray-400">Years of<br />Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-2">182+</h2>
            <p className="text-gray-400">Projects completed on<br />15 countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
