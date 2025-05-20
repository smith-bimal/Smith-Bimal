import { useTheme } from "../context/ThemeContext";

const Experience = () => {
    const { themeColors } = useTheme();
    const experiences = [
        {
            period: "2020 - Present",
            roles: [
                { title: "Framer Designer & Developer", company: "Brunodee Agency" },
                { title: "Front-End WordPress Developer", company: "Envato Market" }
            ]
        },
        {
            period: "2013 - 2019",
            roles: [
                { title: "Webflow Developer & Co-Founder", company: "Designflow Studio" },
                { title: "Web Designer", company: "Freelance" },
                { title: "Leader Team of Marketing", company: "AHA Marketing Agency" }
            ]
        }
    ];

    return (
        <div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-gray-700 pl-8 relative">
                        <div className={`absolute w-4 h-4 ${themeColors.bg} rounded-full -left-[9px] top-2`}></div>
                        <span className={`${themeColors.text} font-medium mb-4 block`}>{exp.period}</span>

                        {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className={roleIndex !== exp.roles.length - 1 ? 'mb-6' : ''}>
                                <h3 className="text-xl font-bold">{role.title}</h3>
                                <p className="text-gray-400">{role.company}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
