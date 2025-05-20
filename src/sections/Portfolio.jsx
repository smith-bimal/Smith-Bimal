import { LayoutList } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Portfolio = () => {
  const { themeColors } = useTheme();

  const projects = [
    {
      id: 1,
      title: "FinSage.ai - AI Financial Intelligence Platform",
      image: "https://raw.githubusercontent.com/smith-bimal/FinSage.ai/refs/heads/main/uploads/landing%20page.png",
      categories: ["React.js", "Node.js", "Express.js", "MongoDB", "Gen AI", "Tailwind"],
      fullWidth: true,
      link: "https://finsage-ai-phi.vercel.app",
      repo: "https://github.com/smith-bimal/FinSage.ai"
    },
    {
      id: 2,
      title: "TripMate - Online Trip Planning Application",
      image: "tripmate.png",
      categories: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind"],
      fullWidth: false,
      link: "https://tripmate-sand.vercel.app",
      repo: "https://github.com/smith-bimal/B43_WEB_200_Web-Project-195"
    },
    {
      id: 3,
      title: "Hospital Management System",
      image: "hms.png",
      categories: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      fullWidth: false,
      link: "https://hms-p6kk.onrender.com",
      repo: "https://github.com/smith-bimal/HMS"
    },
    {
      id: 4,
      title: "NookNest - Online Hotel Booking System",
      image: "nooknest.png",
      categories: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "MapBox"],
      fullWidth: true,
      link: "https://nooknest.onrender.com",
      repo: "https://github.com/smith-bimal/NookNest"
    }
  ];

  return (
    <section id="portfolio" className="lg:py-20 py-16">
      <div>
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium text-sm mb-4 animate-fadeIn border rounded-full w-fit px-2 py-0.5`}>
            <LayoutList className="w-4 mr-2" /> Portfolio
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className={themeColors.text}>Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className={`${project.fullWidth ? 'md:col-span-2' : 'lg:col-span-2 xl:col-span-1'}`}>
              <div className="group overflow-hidden rounded-xl relative">
                {/* Outer anchor removed, only image is clickable */}
                <div className="block overflow-hidden relative cursor-pointer" onClick={() => window.open(project.link, "_blank")}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full ${project.fullWidth ? "h-[500px] group-hover:scale-[1.02]" : "h-[300px] group-hover:scale-[1.05]"} object-cover object-top transition-transform`}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.0) 100%)"
                    }}
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.categories.map((category, index) => (
                          <span key={index} className="bg-neutral-700 text-sm py-1 px-3 rounded-full">{category}</span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold">
                        <span className={`group-hover:${themeColors.text} transition-colors`}>{project.title}</span>
                      </h3>
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs underline mt-2 inline-block text-neutral-400 hover:${themeColors.text} transition-colors`}
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/smith-bimal?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-base underline transition-colors duration-200 text-neutral-400 hover:${themeColors.text}`}
          >
            And more...
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
