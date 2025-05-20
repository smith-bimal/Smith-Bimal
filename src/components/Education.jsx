import { useTheme } from "../context/ThemeContext";

const Education = () => {
    const { themeColors } = useTheme();
    const education = [
        {
            period: "2010 - 2013",
            title: "Bachelor Degree of Information Technology",
            institution: "US RMIT University"
        }
    ];

    return (
        <div className="mb-16">
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
            </div>

            <div className="space-y-12">
                {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-gray-700 pl-8 relative">
                        <div className={`absolute w-4 h-4 ${themeColors.bg} rounded-full -left-[9px] top-2`}></div>
                        <span className={`${themeColors.text} font-medium mb-4 block`}>{edu.period}</span>
                        <div>
                            <h3 className="text-xl font-bold">{edu.title}</h3>
                            <p className="text-gray-400">{edu.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
