import React, { useState } from "react";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    LayoutList,
    House,
    Menu,
    Folder,
    HardDrive,
    Trash2,
    Code2,
    Database,
} from "lucide-react";

function ProjectApp() {
    const [activeTab, setActiveTab] = useState("Home");

    const folderData = {
        Home: [],
        Frontend: [
            {
                name: "TravelMate",
                link: "https://github.com/viralbhoi/TravelMate",
            },
            {
                name: "Zerodha Clone",
                link: "https://github.com/viralbhoi/Zerodha-Clone",
            },
            {
                name: "Landing Page Clone",
                link: "https://github.com/viralbhoi/sidcup-familygolf",
            },
        ],
        Fullstack: [
            {
                name: "Local finder",
                link: "https://github.com/viralbhoi/LocalFinder/tree/main/CurrentVersion",
            },
        ],
        "C++": [
            {
                name: "Business Management System",
                link: "https://github.com/viralbhoi/Business-Management-System",
            },
            {
                name: "Tower of Hanoi visualizer",
                link: "https://github.com/viralbhoi/TowerOfHanoiVisualizer",
            },
        ],
        C: [
            {
                name: "ParcelTrackingSystem",
                link: "https://github.com/viralbhoi/ParcelTrackingSystem",
            },
        ],
        DBMS: [
            {
                name: "Military Personnel Management System",
                link: "https://github.com/viralbhoi/Military_Personnel_Management_System",
            },
        ],
        Trash: [],
    };

    const tabs = [
        { name: "Home", icon: <House size={18} /> },
        { name: "Frontend", icon: <Folder size={18} /> },
        { name: "Fullstack", icon: <HardDrive size={18} /> },
        { name: "C++", icon: <Code2 size={18} /> },
        { name: "C", icon: <Code2 size={18} /> },
        { name: "DBMS", icon: <Database size={18} /> },
        { name: "Trash", icon: <Trash2 size={18} /> },
    ];

    const openGitHub = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex flex-col w-full rounded-sm h-full bg-gray-200">
            <div className="flex items-center justify-between bg-gray-400 text-black font-semibold p-1 border-b border-black">
                <div className="flex items-center gap-2">
                    <span className="p-2 rounded-md border border-black mx-2 cursor-pointer hover:bg-gray-300">
                        <ChevronLeft className="inline" />
                    </span>
                    <span className="p-2 rounded-md border border-black mx-2 cursor-pointer hover:bg-gray-300">
                        <ChevronRight className="inline" />
                    </span>
                </div>

                <span className="flex items-center p-2 rounded-md border border-black mx-2 cursor-pointer hover:bg-gray-300">
                    <House className="inline mr-2" />
                    <p className="inline px-1">{activeTab}</p>
                    <ChevronDown size={16} className="inline ml-2" />
                </span>

                <div className="flex items-center gap-2 mx-2">
                    <span className="p-2 rounded-md border border-black cursor-pointer hover:bg-gray-300">
                        <LayoutList size={16} />
                    </span>
                    <span className="p-2 rounded-md border border-black cursor-pointer hover:bg-gray-300">
                        <ChevronDown size={16} />
                    </span>
                    <span className="p-2 rounded-md border border-black cursor-pointer hover:bg-gray-300">
                        <Menu size={16} />
                    </span>
                </div>
            </div>

            <div className="flex bg-gray-100 text-black font-mono min-h-[85vh]">
                <div className="w-52 bg-gray-50 border-r border-gray-400 py-4 px-2 flex flex-col gap-1">
                    {tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer text-sm font-semibold ${
                                activeTab === tab.name
                                    ? "bg-gray-400 text-black"
                                    : "hover:bg-gray-300 text-gray-700"
                            }`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.icon}
                            {tab.name}
                        </div>
                    ))}
                </div>
                <div className="flex-1 p-4">
                    <h2 className="text-xl font-bold mb-4">{activeTab}</h2>

                    {folderData[activeTab] &&
                    folderData[activeTab].length > 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                            {folderData[activeTab].map((project, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                                    onClick={() => openGitHub(project.link)}
                                >
                                    <Folder
                                        size={56}
                                        className="text-gray-700 hover:text-gray-900 transition-colors"
                                    />
                                    <p className="text-xs mt-2 text-center w-20 truncate text-ellipsis">
                                        {project.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">
                            No projects in this folder
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectApp;
