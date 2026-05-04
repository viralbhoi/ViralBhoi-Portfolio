import React from "react";
import {
    ChevronLeft,
    Share,
    MoreHorizontal,
    CheckCircle2,
    Camera,
    PenTool,
    SquarePen,
} from "lucide-react";

function MobileSkill() {
    const skills = {
        Languages: ["C++", "Python", "Java", "JavaScript", "C"],
        "Web & ML Stack": [
            "React",
            "Node.js",
            "Express.js",
            "TailwindCSS",
            "FastAPI",
            "MobileNetV2",
        ],
        Databases: ["PostgreSQL", "MongoDB"],
        "Competitive Programming": [
            "ICPC Asia West Amritapuri Regionalist",
            "LeetCode: 1905 (Knight, Top 4.23%)",
            "CodeChef: 1625 (3-Star)",
            "CodeForces: 1220 (Pupil)",
            "GATE 2026: AIR 5075 (CS)",
        ],
    };

    return (
        <div className="h-screen w-screen bg-[#1c1c1e] text-[#e5e5ea] font-sans flex flex-col overflow-hidden">
            {/* iOS Notes Top Navigation */}
            <div className="flex justify-between items-center px-4 pt-12 pb-2 text-yellow-500 bg-[#1c1c1e] z-10">
                <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <ChevronLeft size={30} className="-ml-2" />
                    <span className="text-[17px] font-normal">Folders</span>
                </div>
                <div className="flex items-center gap-5 cursor-pointer">
                    <Share
                        size={22}
                        className="hover:opacity-80 transition-opacity"
                    />
                    <div className="bg-yellow-500/10 p-1.5 rounded-full hover:bg-yellow-500/20 transition-colors">
                        <MoreHorizontal size={20} />
                    </div>
                </div>
            </div>

            {/* Note Content Area */}
            <div className="flex-1 overflow-y-auto px-5 pb-24">
                {/* Date Stamp */}
                <div className="text-center text-[#8e8e93] text-[12px] font-medium mb-6 mt-2">
                    May 1, 2026 at 3:47 PM
                </div>

                {/* Note Title */}
                <h1 className="text-[34px] leading-tight font-bold text-white mb-6 tracking-tight">
                    Technical Skills &<br />
                    Achievements
                </h1>

                {/* Typed Note Content */}
                <div className="space-y-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            {/* Category Header resembling typed Markdown */}
                            <h2 className="text-[19px] font-bold text-white mb-2 tracking-wide">
                                {category}
                            </h2>

                            {/* Bulleted List resembling native Notes bullets */}
                            <ul className="space-y-2">
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-[#8e8e93] text-[15px] mt-[3px]">
                                            •
                                        </span>
                                        <span className="text-[17px] text-[#d1d1d6] leading-relaxed font-normal">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* iOS Notes Bottom Toolbar */}
            <div className="absolute bottom-0 w-full bg-[#1c1c1e]/90 backdrop-blur-xl border-t border-gray-800 pb-8 pt-3 px-6 flex justify-between items-center text-yellow-500 z-20">
                <CheckCircle2
                    size={24}
                    className="hover:opacity-80 cursor-pointer"
                />
                <Camera size={24} className="hover:opacity-80 cursor-pointer" />
                <PenTool
                    size={24}
                    className="hover:opacity-80 cursor-pointer"
                />
                <SquarePen
                    size={24}
                    className="hover:opacity-80 cursor-pointer ml-4"
                />
            </div>
        </div>
    );
}

export default MobileSkill;
