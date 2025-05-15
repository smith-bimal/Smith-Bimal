import { User } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { themeColors } = useTheme();

  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl">
        <div className="mb-6">
          <h4 className={`flex items-center ${themeColors.text} font-medium text-sm mb-4 animate-fadeIn border rounded-full w-fit px-2 py-0.5`}>
            <User className="w-4 mr-2" /> About
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every great solution begins with<br />
            an even <span className={themeColors.text}>better codebase</span>
          </h2>
        </div>

        <p className="text-gray-300 text-lg">
          Since beginning my journey in tech, I've explored everything from backend engineering to building complex web applications and collaborating with talented people to deliver robust digital solutions. With a strong foundation in Computer Science and hands-on experience in technical support and backend development, I'm quietly confident, naturally curious, and always working on improving my skills one project at a time.
          <br /><br />
          My academic background includes a B.Tech in Computer Science and a Masters in Computer Applications, which have equipped me with a solid understanding of algorithms, data structures, and scalable system design. I am proficient in technologies such as React, Node.js, Express.js, Python, Flask, SQL, MongoDB, and RESTful APIs, and have delivered projects ranging from AI-powered financial platforms to end-to-end travel and healthcare management systems.
          <br /><br />
          I believe in writing clean, maintainable code and following best practices in software development. My approach combines analytical thinking with a passion for solving real-world problems, and I thrive in collaborative environments where innovation and learning are encouraged. Whether working independently or as part of a team, I am committed to delivering high-quality solutions that drive business value.
        </p>
      </div>
    </section>
  );
};

export default About;
