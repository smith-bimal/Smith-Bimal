import { ShapesIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import React, { useState } from "react";

const Skills = () => {
  const { themeColors } = useTheme();
  const [hovered, setHovered] = useState(null);

  const skills = [
    { name: "React", image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Tailwind CSS", image: "https://img.icons8.com/color/512/tailwind_css.png" },
    { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Data Structures & Algorithms", image: "https://hackr.io/tutorials/learn-data-structures-algorithms/logo/logo-data-structures-algorithms?ver=1587721467" }
  ];

  return (
    <section id="skills" className="lg:py-20 py-16">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium text-sm mb-4 animate-fadeIn border rounded-full w-fit px-2 py-0.5`}>
            <ShapesIcon className="w-4 mr-2" /> My Skills
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className={themeColors.text}>Advantages</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-5 lg:justify-start justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center relative group"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative w-18 h-18 flex items-center justify-center">
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center border-2 transition-colors duration-200
                    ${hovered === index ? themeColors.text : "border-gray-700"}`}
                >
                  <div
                    className="tooltip tooltip-top"
                    data-tip={skill.name}
                  >
                    <img src={skill.image} alt={skill.name} className={`w-10 h-10 ${(skill.name==="Express.js" || skill.name==="Flask" || skill.name==="GitHub" )&& "invert"}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
