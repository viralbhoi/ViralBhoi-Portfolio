import React from "react";
import { FileJson, X, Menu, ChevronRight } from "lucide-react";

function SkillApp() {
    // Formatting the skills as a JSON object for the code editor aesthetic
    const codeLines = [
        `{`,
        `  "title": "Technical Skills & Achievements",`,
        `  "languages": [`,
        `    "C++", "Python", "Java", "C", "JavaScript"`,
        `  ],`,
        `  "web_and_ml_stack": [`,
        `    "React", "Node.js", "Express.js", "TailwindCSS",`,
        `    "FastAPI", "MobileNetV2"`,
        `  ],`,
        `  "databases": [`,
        `    "PostgreSQL", "MongoDB"`,
        `  ],`,
        `  "competitive_programming": {`,
        `    "ICPC": "Asia West Amritapuri Regionalist",`,
        `    "LeetCode": "1905 (Knight, Top 4.23%)",`,
        `    "CodeChef": "1625 (3-Star max)",`,
        `    "CodeForces": "1220"`,
        `  },`,
        `  "examinations": {`,
        `    "GATE_2026_CS": "AIR 5075",`,
        `    "GATE_2026_DA": "AIR 9596"`,
        `  }`,
        `}`,
    ];

    // Simple syntax highlighting logic
    const renderHighlightedLine = (line) => {
        // Highlight keys (strings with colons) in a light blue
        if (line.includes('":')) {
            const parts = line.split('":');
            return (
                <>
                    <span className="text-[#9cdcfe]">{parts[0]}"</span>:
                    <span className="text-[#ce9178]">{parts[1]}</span>
                </>
            );
        }
        // Highlight values/arrays in orange/string color
        if (line.includes('"')) {
            return <span className="text-[#ce9178]">{line}</span>;
        }
        // Brackets and punctuation stay default color
        return <span className="text-[#d4d4d4]">{line}</span>;
    };

    return (
        <div className="flex flex-col w-full h-full bg-[#1e1e1e] font-sans text-gray-300 selection:bg-blue-500/30 overflow-hidden">
            {/* Editor Toolbar / Tab Bar */}
            <div className="flex items-center bg-[#252526] h-10 border-b border-black flex-shrink-0">
                {/* Active Tab */}
                <div className="flex items-center gap-2 bg-[#1e1e1e] h-full px-4 border-t-2 border-blue-500 min-w-[150px] cursor-pointer">
                    <FileJson size={14} className="text-yellow-400" />
                    <span className="text-[13px] text-white">skills.json</span>
                    <X
                        size={14}
                        className="ml-auto text-gray-400 hover:text-white transition-colors"
                    />
                </div>
                {/* Inactive Tab area */}
                <div className="flex-1 h-full bg-[#2d2d2d] flex items-center justify-end px-4">
                    <Menu
                        size={16}
                        className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                    />
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 px-4 h-6 text-[12px] text-gray-500 bg-[#1e1e1e] flex-shrink-0">
                <span className="hover:text-gray-300 cursor-pointer">
                    portfolio
                </span>
                <ChevronRight size={14} />
                <span className="hover:text-gray-300 cursor-pointer">src</span>
                <ChevronRight size={14} />
                <span className="hover:text-gray-300 cursor-pointer">data</span>
                <ChevronRight size={14} />
                <span className="text-gray-300">skills.json</span>
            </div>

            {/* Code Editor Area */}
            <div className="flex-1 overflow-auto bg-[#1e1e1e] pt-2 pb-6">
                <div className="flex font-mono text-[14px] leading-relaxed">
                    {/* Line Numbers */}
                    <div className="flex flex-col text-right px-4 text-[#858585] select-none border-r border-white/5">
                        {codeLines.map((_, index) => (
                            <div key={index}>{index + 1}</div>
                        ))}
                    </div>

                    {/* Code Content */}
                    <div className="flex flex-col px-4 whitespace-pre">
                        {codeLines.map((line, index) => (
                            <div key={index}>{renderHighlightedLine(line)}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Editor Status Bar */}
            <div className="flex items-center justify-between h-6 bg-[#007acc] text-white text-[11px] px-3 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <span className="cursor-pointer hover:bg-white/20 px-1 rounded">
                        main*
                    </span>
                    <span className="cursor-pointer hover:bg-white/20 px-1 rounded">
                        Ln 14, Col 37
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="cursor-pointer hover:bg-white/20 px-1 rounded">
                        UTF-8
                    </span>
                    <span className="cursor-pointer hover:bg-white/20 px-1 rounded">
                        JSON
                    </span>
                    <span className="cursor-pointer hover:bg-white/20 px-1 rounded">
                        Prettier
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SkillApp;
