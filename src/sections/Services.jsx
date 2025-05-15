import { Server, Database, Layers, Plug, StretchHorizontal } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Services = () => {
  const { themeColors } = useTheme();

  const services = [
    {
      icon: <Server className={`text-4xl ${themeColors.text}`} />,
      title: "Backend Development",
      description: "Design and build robust, scalable backend systems using Node.js, Express.js, Python, and Flask.",
      projects: 9
    },
    {
      icon: <Layers className={`text-4xl ${themeColors.text}`} />,
      title: "Full Stack Web Applications",
      description: "Develop end-to-end web applications with React, Node.js, Express.js, and MongoDB.",
      projects: 7
    },
    {
      icon: <Database className={`text-4xl ${themeColors.text}`} />,
      title: "Database Design & Management",
      description: "Efficiently design, manage, and optimize SQL and NoSQL databases like MySQL and MongoDB.",
      projects: 9
    },
    {
      icon: <Plug className={`text-4xl ${themeColors.text}`} />,
      title: "RESTful API Development",
      description: "Build secure and scalable RESTful APIs for seamless integration and data exchange.",
      projects: 9
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium text-sm mb-4 animate-fadeIn border rounded-full w-fit px-2 py-0.5`}>
            <StretchHorizontal className="w-4 mr-2" /> Services
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className={themeColors.text}>Specializations</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-neutral-800/80 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                {service.icon}
              </div>
              <p className="text-neutral-400 mb-6">{service.description}</p>
              <span className={`text-sm ${themeColors.text}`}>{service.projects} Projects</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
