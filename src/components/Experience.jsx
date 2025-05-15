import { useTheme } from "../context/ThemeContext";
import React, { useState } from "react";

const Experience = () => {
    const { themeColors } = useTheme();
    const [hovered, setHovered] = useState(null);
    const experiences = [
        {
            period: "Mar 2025 - Present",
            roles: [
                { title: "Junior Software Engineer (Backend)", company: "Xohani Solutions (Blacklog India) Pvt. Ltd., Delhi" }
            ]
        },
        {
            period: "May 2022 - Sep 2023",
            roles: [
                { title: "Technical Support Engineer", company: "Concentrix Services India Pvt. Ltd., Bengaluru" }
            ]
        }
    ];

    return (
        <div className="mb-16">
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
            </div>
            <div className="space-y-12 relative">
                <div className="absolute left-0 top-2 -bottom-12 w-[2px] bg-neutral-700 pointer-events-none" />
                {experiences.map((exp, index) => (
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
                            {exp.period}
                        </span>
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
