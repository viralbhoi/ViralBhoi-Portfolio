import React from "react";
import { Briefcase, Terminal, Users, Shield } from "lucide-react";

function ExperienceApp() {
    const experiences = [
        {
            title: "React Intern",
            org: "Tech Elecon Private Limited",
            duration: "May 2025 – Jun 2025",
            icon: <Briefcase strokeWidth={1.5} size={28} />,
            color: "bg-blue-500/20 text-blue-400",
            highlights: [
                "Built responsive frontend components using React.js to improve application UI.",
                "Utilized Git/GitHub for version control and collaborated within an agile team environment.",
                "Led the frontend development of TravelMate (Travel Management System), handling task delegation and implementation.",
            ],
        },
        {
            title: "Vice President",
            org: "CodeChef BVM Chapter",
            duration: "Dec 2025 – Present",
            icon: <Shield strokeWidth={1.5} size={28} />,
            color: "bg-orange-500/20 text-orange-400",
            highlights: [
                "Lead the local college chapter, fostering a competitive programming culture.",
                "Organize regular coding contests, peer-learning sessions, and community events.",
            ],
        },
        {
            title: "Problem Setter",
            org: "CodeChef BVM Chapter",
            duration: "Dec 2024 – Dec 2025",
            icon: <Terminal strokeWidth={1.5} size={28} />,
            color: "bg-green-500/20 text-green-400",
            highlights: [
                "Authored, tested, and validated algorithmic problems for three college-level coding contests.",
                "Created comprehensive test cases and editorials to ensure problem quality and fairness.",
            ],
        },
        {
            title: "Technical Team Member",
            org: "CSI BVM",
            duration: "Jan 2025 – Present",
            icon: <Users strokeWidth={1.5} size={28} />,
            color: "bg-purple-500/20 text-purple-400",
            highlights: [],
        },
    ];

    return (
        <div className="p-6 sm:p-8 h-full w-full text-gray-200 font-sans antialiased overflow-y-auto selection:bg-blue-500/30">
            <div className="max-w-3xl mx-auto space-y-6">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/[0.07]"
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl mt-1 ${exp.color}`}>
                                {exp.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                    <div>
                                        <h2 className="text-xl font-semibold text-white tracking-wide">
                                            {exp.title}
                                        </h2>
                                        <h3 className="text-[15px] text-gray-400 mt-0.5">
                                            {exp.org}
                                        </h3>
                                    </div>
                                    <span className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-gray-300 mt-2 sm:mt-0 whitespace-nowrap">
                                        {exp.duration}
                                    </span>
                                </div>

                                {exp.highlights &&
                                    exp.highlights.length > 0 && (
                                        <div className="mt-4 space-y-2">
                                            {exp.highlights.map((point, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 opacity-70"></span>
                                                    <div>{point}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceApp;
