import { BriefcaseBusiness } from 'lucide-react';
import Education from '../components/Education';
import Experience from '../components/Experience';
import { useTheme } from '../context/ThemeContext';

const Resume = () => {
  const { themeColors } = useTheme();
  
  return (
    <section id="resume" className="lg:py-20 py-16">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium text-sm mb-4 animate-fadeIn border rounded-full w-fit px-2 py-0.5`}>
            <BriefcaseBusiness className="w-4 mr-2" /> Resume
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            Education & <span className={themeColors.text}>Experience</span>
          </h2>
        </div>

        <Experience />
        <Education />
      </div>
    </section>
  );
};

export default Resume;
