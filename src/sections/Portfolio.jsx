import { useTheme } from "../context/ThemeContext";

const Portfolio = () => {
  const { themeColors } = useTheme();
  
  const projects = [
    {
      id: 1,
      title: "Bureau - Architecture Studio Website",
      image: "/images/portfolio1.jpg",
      categories: ["Figma", "Framer", "WordPress"],
      fullWidth: true
    },
    {
      id: 2,
      title: "Moonex WordPress Theme",
      image: "/images/portfolio2.jpg",
      categories: ["WordPress", "Laravel/PHP"],
      fullWidth: false
    },
    {
      id: 3,
      title: "Taskly Dashboard",
      image: "/images/portfolio3.jpg",
      categories: ["WordPress", "Laravel/PHP"],
      fullWidth: false
    },
    {
      id: 4,
      title: "Hinterland - Real Estate Site Redesign",
      image: "/images/portfolio4.jpg",
      categories: ["Figma", "React"],
      fullWidth: true
    },
    {
      id: 5,
      title: "Lewis Portfolio Framer Template",
      image: "/images/portfolio5.jpg",
      categories: ["Framer"],
      fullWidth: true
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div>
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium mb-4`}>
            <i className="las la-grip-vertical mr-2"></i> Portfolio
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className={themeColors.text}>Projects</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className={`${project.fullWidth ? 'md:col-span-2' : ''}`}>
              <div className="group overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800/80 transition-all">
                <a href="#" className="block overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[300px] object-cover object-top transition-transform group-hover:scale-105" 
                  />
                </a>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category, index) => (
                      <span key={index} className="bg-neutral-700 text-sm py-1 px-3 rounded-full">{category}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">
                    <a href="#" className={`hover:${themeColors.text} transition-colors`}>{project.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
