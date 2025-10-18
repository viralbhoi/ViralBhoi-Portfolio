import React from "react";

function ExperienceApp() {
    const experiences = [
        {
            title: "React Intern",
            org: "Tech Elecon Private Limited",
            duration: "May 2025 – Jun 2025",
            highlights: [
                "Developed scalable and responsive web components using React.js",
                "Gained hands-on experience with React.js, version control using Git/GitHub, and effective team collaboration in an agile environment",
                "Led the end-to-end development of TravelMate – Travel Management System (GitHub Link) 2, including project planning, task delegation, and team coordination",
            ],
        },
        {
            title: "Problem Setter",
            org: "CodeChef BVM",
            duration: "oct 2024 – Present",
        },
        {
            title: "Technical team member",
            org: "CSI BVM",
            duration: "jan 2025 – Present",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-200 px-4 py-6 sm:px-6 md:px-10 lg:px-16 font-sans p-6">
            <div className="max-w-5xl mx-auto space-y-8 pb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-black">
                    My Journey & Experiences
                </h1>

                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md border border-[#e6d9c5] p-5 sm:p-6 md:p-8 transition hover:scale-[1.02] hover:shadow-xl"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-1">
                            {exp.title}
                        </h2>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black">
                            {exp.org}
                        </h3>
                        <p className="text-sm sm:text-base italic text-gray-700 mb-4">
                            {exp.duration}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base md:text-lg">
                            {exp.highlights &&
                                exp.highlights.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceApp;
