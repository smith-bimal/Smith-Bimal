import { useTheme } from "../context/ThemeContext";

const Services = () => {
  const { themeColors } = useTheme();
  
  const services = [
    {
      icon: "las la-bezier-curve",
      title: "Website Design",
      description: "I created digital products with unique ideas use Figma & Framer",
      projects: 24
    },
    {
      icon: "las la-code",
      title: "Development",
      description: "I build website go live with Framer, Webflow or WordPress",
      projects: 126
    },
    {
      icon: "las la-rocket",
      title: "SEO/Marketing",
      description: "Increase the traffic for your website with SEO optimized",
      projects: 8
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-3xl">
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium mb-4`}>
            <i className="las la-stream mr-2"></i> Services
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className={themeColors.text}>Specializations</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-neutral-800/80 transition-all">
              <i className={`${service.icon} text-4xl ${themeColors.text} mb-6 block`}></i>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
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
