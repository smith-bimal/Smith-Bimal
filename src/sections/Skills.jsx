import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { themeColors } = useTheme();
  
  const skills = [
    { name: "Figma", percent: 92, image: "/images/figma.png" },
    { name: "Framer", percent: 85, image: "/images/framer.png" },
    { name: "Webflow", percent: 80, image: "/images/webflow.png" },
    { name: "React", percent: 90, image: "/images/react.png" },
    { name: "WordPress", percent: 86, image: "/images/wordpress.png" },
    { name: "Laravel/PHP", percent: 70, image: "/images/laravel.png" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium mb-4`}>
            <i className="las la-shapes mr-2"></i> My Skills
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className={themeColors.text}>Advantages</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-full flex items-center justify-center border-4 border-gray-700">
                  <img src={skill.image} alt={skill.name} className="w-12 h-12" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle 
                      cx="64" 
                      cy="64" 
                      r="60" 
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeDasharray={`${skill.percent * 3.77} ${376 - skill.percent * 3.77}`}
                      className={themeColors.text}
                    />
                  </svg>
                  <span className="absolute text-lg font-bold">{skill.percent}%</span>
                </div>
              </div>
              <p className="text-center font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
