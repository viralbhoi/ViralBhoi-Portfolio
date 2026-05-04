import React from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

function EducationApp() {
    return (
        <div className="p-6 sm:p-8 h-full w-full text-gray-200 font-sans antialiased overflow-y-auto selection:bg-blue-500/30">
            <div className="max-w-3xl mx-auto space-y-6">
                {/* College Section */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/[0.07]">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl mt-1">
                            <GraduationCap strokeWidth={1.5} size={28} />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                <div>
                                    <h2 className="text-xl font-semibold text-white tracking-wide">
                                        Birla Vishvakarma Mahavidyalaya
                                    </h2>
                                    <h3 className="text-[15px] text-gray-400 mt-0.5">
                                        Bachelor of Technology – Computer
                                        Engineering
                                    </h3>
                                </div>
                                <span className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-gray-300 mt-2 sm:mt-0 whitespace-nowrap">
                                    Jun 2023 – Jun 2027
                                </span>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                    <span className="font-semibold text-white">
                                        CPI:
                                    </span>{" "}
                                    8.31 / 10.00
                                </div>
                                <div className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5"></span>
                                    <div>
                                        <span className="font-semibold text-white">
                                            Subjects:{" "}
                                        </span>
                                        DBMS, Computer Networks, OOP (C++/Java),
                                        Operating Systems, Data Structures,
                                        Algorithms, Web Technologies, Machine Learning
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Competitive Exams Section (GATE) */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/[0.07]">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl mt-1">
                            <Award strokeWidth={1.5} size={28} />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                <div>
                                    <h2 className="text-xl font-semibold text-white tracking-wide">
                                        GATE 2026 Examination
                                    </h2>
                                    <h3 className="text-[15px] text-gray-400 mt-0.5">
                                        Graduate Aptitude Test in Engineering
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                                    <span className="font-semibold text-white">
                                        AIR (Computer Science):
                                    </span>{" "}
                                    5075 / 211020
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                                    <span className="font-semibold text-white">
                                        AIR (Data Science & AI):
                                    </span>{" "}
                                    9596 / 69242
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* School Section */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/[0.07]">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-gray-500/20 text-gray-400 rounded-xl mt-1">
                            <BookOpen strokeWidth={1.5} size={28} />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                <div>
                                    <h2 className="text-xl font-semibold text-white tracking-wide">
                                        C.V.M. H.S.E.C. (R.P.T.P. Schools)
                                    </h2>
                                    <h3 className="text-[15px] text-gray-400 mt-0.5">
                                        12th Board
                                    </h3>
                                </div>
                                <span className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-gray-300 mt-2 sm:mt-0 whitespace-nowrap">
                                    Mar 2022 – Mar 2023
                                </span>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                    <span className="font-semibold text-white">
                                        Percentile Rank:
                                    </span>{" "}
                                    99.21 / 100.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationApp;
