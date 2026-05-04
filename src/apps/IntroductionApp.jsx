import React from "react";
import profileImage from "../assets/profile.jpeg";
import { Trophy, Code2, Cpu, BrainCircuit } from "lucide-react";

function IntroductionApp() {
    return (
        <div className="p-4 sm:p-6 md:p-8 h-full w-full font-sans antialiased overflow-y-auto selection:bg-blue-500/30 text-gray-200">
            <div className="max-w-5xl mx-auto">
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min">
                    {/* Main Intro Card (Spans 2 columns on desktop) */}
                    <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 transition-all hover:bg-white/[0.07] flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                        <div
                            className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full bg-center bg-cover bg-no-repeat shadow-2xl border border-white/20"
                            style={{ backgroundImage: `url(${profileImage})` }}
                        ></div>
                        <div className="text-center sm:text-left">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                                Hi, I'm Viral Bhoi.
                            </h1>
                            <p className="text-lg text-gray-300 font-medium mb-4">
                                Computer Engineering Student • Full-Stack & ML
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                I am passionate about algorithmic
                                problem-solving and building data-driven
                                applications. My focus is on writing direct,
                                efficient code to bridge the gap between complex
                                backend logic—like predictive modeling and
                                database architecture—and clean user
                                experiences.
                            </p>
                        </div>
                    </div>

                    {/* CP & Achievements Card */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-6 transition-all hover:bg-white/[0.07] flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4 text-blue-400">
                            <Trophy size={24} />
                            <h2 className="font-semibold text-white tracking-wide">
                                Achievements
                            </h2>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                <span>
                                    <strong className="text-white">
                                        ICPC 2025:
                                    </strong>{" "}
                                    Amritapuri Regionalist
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                <span>
                                    <strong className="text-white">
                                        LeetCode Knight:
                                    </strong>{" "}
                                    1905 Peak (Top 4.26%)
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                <span>
                                    <strong className="text-white">
                                        CodeChef:
                                    </strong>{" "}
                                    1625 (3-Star)
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                <span>
                                    <strong className="text-white">
                                        GATE 2026:
                                    </strong>{" "}
                                    AIR 5057 (CS)
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 transition-all hover:bg-white/[0.07]">
                        <div className="flex items-center gap-3 mb-4 text-green-400">
                            <Code2 size={24} />
                            <h2 className="font-semibold text-white tracking-wide">
                                Core Technologies
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "C++",
                                "Python",
                                "Java",
                                "React",
                                "Node.js",
                                "Express",
                                "FastAPI",
                                "PostgreSQL",
                                "MongoDB",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-white/10 border border-white/5 rounded-xl text-sm font-medium text-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all hover:bg-white/[0.07]">
                        <div className="flex items-center gap-3 mb-4 text-orange-400">
                            <BrainCircuit size={24} />
                            <h2 className="font-semibold text-white tracking-wide">
                                Vision
                            </h2>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed italic">
                            "Looking ahead, my goal is to merge modern AI and
                            text analysis techniques with the investigation of
                            scientific knowledge embedded in ancient historical
                            texts."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroductionApp;
