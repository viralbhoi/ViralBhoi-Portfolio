import React, { useState } from "react";
import {
    House,
    Folder,
    HardDrive,
    Trash2,
    Code2,
    Database,
    Search
} from "lucide-react";

function MobileProjects() {
    const [activeTab, setActiveTab] = useState("Home");

    const folderData = {
        Home: [
            {
                name: "Frontend",
            },
            {
                name: "Fullstack",
            },
            {
                name: "DBMS",
            },
            {
                name: "C++",
            },
            {
                name: "C",
            },
        ],
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
        <div className="h-screen w-screen bg-white">
            <div className="flex bg-gray-100 text-black font-mono min-h-[85vh]">
                <div className="flex-1 p-4">
                    <h2 className="text-3xl font-bold mb-4">{activeTab}</h2>

                    <div className="m-1 border-1 border-black/50 text-gray-600 p-1 rounded-full px-3 my-5 flex justify-between items-center">
                        <p>Search</p>
                        <Search size={20} />
                    </div>

                    {folderData[activeTab] &&
                    folderData[activeTab].length > 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                            {folderData[activeTab].map((project, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                                    onClick={() =>
                                        activeTab === "Home"
                                            ? setActiveTab(project.name)
                                            : openGitHub(project.link)
                                    }
                                >
                                    <Folder size={56} className="text-black" />
                                    <p className="text-xs mt-2 text-center w-20 truncate text-ellipsis">
                                        {project.name}
                                    </p>
                                </div>
                            ))}

                            {activeTab !== "Home" && (
                                <div
                                    className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                                    onClick={() => setActiveTab("Home")}
                                >
                                    <House size={56} className="text-black" />
                                    <p className="text-xs mt-2 text-center w-20 truncate text-ellipsis">
                                        Back
                                    </p>
                                </div>
                            )}
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

export default MobileProjects;
