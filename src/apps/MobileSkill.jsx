import React from "react";

function MobileSkill() {
    const skills = {
        "Programming Languages": ["C++", "Java", "Python", "C", "JavaScript"],
        "Web Stack": [
            "React",
            "TailwindCSS",
            "ExpressJS",
            "NodeJS",
            "HTML",
            "CSS",
        ],
        Databases: ["PostgreSQL", "MongoDB"],
        "CodeChef Highlights": [
            "Global rank 107",
            "Global rank 390",
            "Global rank 986",
        ],
        "Competitive Programming Skills": [
            "Codechef : 1625 (max)",
            "LeetCode : 1634 (max)",
            "CodeForces : 1080 (max)",
        ],
    };

    return (
        <div className="h-screen w-screen bg-gray-900 text-white p-4 overflow-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">My Skills</h1>
            <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h2 className="text-xl font-semibold mb-2 border-b border-gray-700 pb-1">
                            {category}
                        </h2>
                        <ul className="space-y-1 pl-5">
                            {items.map((item, index) => (
                                <li key={index} className="border-b-1 border-gray-50/10">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MobileSkill;
