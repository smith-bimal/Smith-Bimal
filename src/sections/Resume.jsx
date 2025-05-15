import Education from '../components/Education';
import Experience from '../components/Experience';
import { useTheme } from '../context/ThemeContext';

const Resume = () => {
  const { themeColors } = useTheme();
  
  return (
    <section id="resume" className="py-20">
      <div className="max-w-3xl">
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium mb-4`}>
            <i className="las la-briefcase mr-2"></i> Resume
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            Education & <span className={themeColors.text}>Experience</span>
          </h2>
        </div>

        <Education />
        <Experience />
      </div>
    </section>
  );
};

export default Resume;
