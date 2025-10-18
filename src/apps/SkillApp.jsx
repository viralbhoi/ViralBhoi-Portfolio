import React from "react";
import {
    Circle,
    BookOpenText,
    ChevronDown,
    Menu,
    SquareArrowOutUpRight,
} from "lucide-react";

function SkillApp() {
    const link1 =
        "https://www.codechef.com/rankings/START169D?itemsPerPage=100&order=asc&page=1&search=viral_bhoi&sortBy=rank";
    const link2 =
        "https://www.codechef.com/rankings/START176C?itemsPerPage=100&order=asc&page=1&search=viral_bhoi&sortBy=rank";
    const link3 =
        "https://www.codechef.com/rankings/START171C?itemsPerPage=100&order=asc&page=1&search=viral_bhoi&sortBy=rank";

    return (
        <div className="flex flex-col justify-between m-0 p-0 w-full rounded-sm">
            <div className="flex items-center justify-between bg-gray-400 gap-4 box-border p-1 border-b-3 border-black text-black font-semibold">
                <div className="w-auto">
                    <span className="p-2 rounded-lg mx-4 border-1 border-black w-20">
                        open <ChevronDown size={16} className="inline" />
                    </span>

                    <span className="p-2 rounded-lg mx-4 border-1 border-black">
                        <BookOpenText size={16} className="inline" />
                    </span>
                </div>

                <span className="w-auto">Skills.txt</span>

                <div className="w-auto flex items-center justify-between">
                    <span className="p-2 rounded-lg mx-4 border-1 border-black w-20">
                        Save <ChevronDown size={16} className="inline" />
                    </span>

                    <span className="p-2 rounded-lg mx-4 border-1 border-black">
                        <Menu size={16} />
                    </span>
                </div>
            </div>

            <div className="bg-gray-100 text-black font-mono min-h-screen">
                <ol start={1} className="ml-2">
                    <li>Programming Languages: </li>
                    <li>
                        <div>
                            <ol start={1} className="list-decimal ml-6">
                                <li>C++,</li>
                                <li>Java,</li>
                                <li>Python,</li>
                                <li>C,</li>
                                <li>JavaScript,</li>
                            </ol>
                        </div>
                    </li>
                    <li>
                        <div style={{ height: "1rem" }} />
                    </li>
                    <li>Web Stack: </li>
                    <li>
                        <div>
                            <ol start={1} className="list-decimal ml-6">
                                <li>React,</li>
                                <li>TailwindCSS,</li>
                                <li>ExpressJS,</li>
                                <li>NodeJS,</li>
                                <li>HTML,</li>
                                <li>CSS,</li>
                            </ol>
                        </div>
                    </li>
                    <li>
                        <div style={{ height: "1rem" }} />
                    </li>
                    <li>Databases: </li>
                    <li>
                        <div>
                            <ol start={1} className="list-decimal ml-6">
                                <li>PostgreSQL,</li>
                                <li>MongoDB,</li>
                            </ol>
                        </div>
                    </li>
                    <li>
                        <div style={{ height: "1rem" }} />
                    </li>
                    <li>Competitive Programming Skills: </li>
                    <li>
                        <div>
                            <ol start={1} className="list-decimal ml-6">
                                <li>Codechef : 1625 (max),</li>
                                <li>LeetCode : 1634 (max),</li>
                                <li>CodeForces : 1080(max),</li>
                                <li>LeetCode: 550+ question solved,</li>
                                <li>Codeforces : 500+ questions solved,</li>
                                <li>
                                    <p>
                                        Ranks : Global rank 107 (
                                        <a
                                            href={link1}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=""
                                        >
                                            Open
                                            <SquareArrowOutUpRight
                                                size={16}
                                                className="inline text-blue-700"
                                            />
                                        </a>
                                        ), Global rank 390 (
                                        <a
                                            href={link2}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline text-blue-700"
                                        >
                                            Open
                                            <SquareArrowOutUpRight
                                                size={16}
                                                className="inline text-blue-700"
                                            />
                                        </a>
                                        ), Global rank 986 (
                                        <a
                                            href={link3}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline text-blue-700"
                                        >
                                            Open
                                            <SquareArrowOutUpRight
                                                size={16}
                                                className="inline text-blue-700"
                                            />
                                        </a>
                                        ) in Codechef.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default SkillApp;
