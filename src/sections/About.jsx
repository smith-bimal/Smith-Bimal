import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { themeColors } = useTheme();
  
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl">
        <div className="mb-6">
          <h4 className={`flex items-center ${themeColors.text} font-medium mb-4`}>
            <i className="lar la-user mr-2"></i> About
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every great design begin with<br />
            an even <span className={themeColors.text}>better story</span>
          </h2>
        </div>
        
        <p className="text-gray-300 text-lg">
          Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote
          work for agencies, consulted for startups, and collaborated with talented people to create
          digital products for both business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
