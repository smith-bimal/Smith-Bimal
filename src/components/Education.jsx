import { useTheme } from "../context/ThemeContext";
import React, { useState } from "react";

const Education = () => {
    const { themeColors } = useTheme();
    const [hovered, setHovered] = useState(null);
    const education = [
        {
            period: "Jul 2022 - Oct 2024",
            title: "Masters in Computer Applications (CS)",
            institution: "Jain University, Bangalore"
        },
        {
            period: "Jul 2016 - Dec 2020",
            title: "Bachelor of Technology (CSE)",
            institution: "GIET, Bhubaneswar"
        },
        {
            period: "Jun 2014 - May 2016",
            title: "Intermediate (12th Science)",
            institution: "Pragati +2 Sc. College, Bhawanipatna"
        }
    ];

    return (
        <div className="">
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
            </div>
            <div className="space-y-12 relative">
                <div className="absolute left-0 top-2 -bottom-12 w-[2px] bg-neutral-700 pointer-events-none" />
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="pl-12 relative group"
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div
                            className={`absolute w-3 h-3 rounded-full -left-[0.3rem] top-2 transition-colors duration-200
                                ${hovered === index ? themeColors.bg : "bg-neutral-500"}`}
                        ></div>
                        <span
                            className={`font-medium mb-4 block transition-colors duration-200
                                ${hovered === index ? themeColors.text : "text-neutral-400"}`}
                        >
                            {edu.period}
                        </span>
                        <div>
                            <h3 className="text-xl font-bold">{edu.title}</h3>
                            <p className="text-neutral-400">{edu.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;