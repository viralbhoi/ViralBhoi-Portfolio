import React, { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    LayoutGrid,
    List,
    Search,
    Folder as FolderIcon,
    FileCode2,
    HardDrive,
    Database,
    Code2,
    MonitorSmartphone,
    BrainCircuit,
} from "lucide-react";
import { folderData } from "../data/projectsData";

function ProjectApp() {
    const [activeTab, setActiveTab] = useState("Fullstack");
    const [searchQuery, setSearchQuery] = useState("");

    const tabIcons = {
        "Machine Learning": <BrainCircuit size={16} />,
        Fullstack: <HardDrive size={16} />,
        Frontend: <MonitorSmartphone size={16} />,
        DBMS: <Database size={16} />,
        "C++": <Code2 size={16} />,
        C: <Code2 size={16} />,
    };

    // Filter out "Home" from the sidebar since Finder uses the sidebar itself for navigation
    const sidebarTabs = Object.keys(folderData).filter((tab) => tab !== "Home");

    const openGitHub = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    const currentItems = folderData[activeTab] || [];

    return (
        <div className="flex w-full h-full text-gray-200 font-sans selection:bg-blue-500/30 overflow-hidden bg-[#1e1e1e]">
            {/* Finder Sidebar */}
            <div className="w-48 bg-[#282829]/90 border-r border-black/50 flex flex-col pt-4">
                <div className="px-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Favorites
                </div>
                <div className="flex flex-col px-2 gap-0.5">
                    {sidebarTabs.map((tab) => (
                        <div
                            key={tab}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
                                activeTab === tab
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-300 hover:bg-white/10"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {/* Blue icon if not active, white if active */}
                            <div
                                className={
                                    activeTab === tab
                                        ? "text-white"
                                        : "text-blue-400"
                                }
                            >
                                {tabIcons[tab] || <FolderIcon size={16} />}
                            </div>
                            <span className="text-[13px] font-medium tracking-wide">
                                {tab}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Finder Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
                {/* Finder Toolbar */}
                <div className="h-14 bg-[#2b2b2d] flex items-center justify-between px-4 border-b border-black/50 flex-shrink-0">
                    {/* Left: Navigation */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-gray-400">
                            <ChevronLeft
                                size={24}
                                className="hover:text-gray-200 cursor-pointer transition-colors"
                            />
                            <ChevronRight
                                size={24}
                                className="opacity-50 cursor-not-allowed"
                            />
                        </div>
                        <h2 className="text-[15px] font-semibold tracking-wide text-white ml-2">
                            {activeTab}
                        </h2>
                    </div>

                    {/* Right: View Toggles & Search */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-[#1c1c1e] rounded-md border border-white/10 p-0.5">
                            <div className="p-1 bg-[#4a4a4d] rounded shadow-sm text-gray-100 cursor-pointer">
                                <LayoutGrid size={16} />
                            </div>
                            <div className="p-1 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors">
                                <List size={16} />
                            </div>
                        </div>

                        {/* macOS Search Input */}
                        <div className="flex items-center bg-[#1c1c1e] border border-white/10 rounded-md px-2 py-1 w-48">
                            <Search size={14} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-[13px] text-gray-200 w-full placeholder-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Finder Content Grid */}
                <div className="flex-1 p-6 overflow-y-auto">
                    {currentItems.length > 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-8">
                            {currentItems.map((project, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center cursor-pointer group px-2"
                                    onClick={() => openGitHub(project.link)}
                                    title={project.subtitle || project.name}
                                >
                                    {/* Icon Container with macOS hover effect */}
                                    <div className="p-3 rounded-lg group-hover:bg-white/10 transition-colors border border-transparent group-hover:border-white/5">
                                        {/* Using FileCode2 to represent a repository/project file */}
                                        <FileCode2
                                            size={54}
                                            strokeWidth={1.2}
                                            className="text-blue-400 fill-blue-500/20 drop-shadow-md"
                                        />
                                    </div>

                                    {/* Filename */}
                                    <span className="text-[13px] text-gray-200 mt-1 text-center leading-tight line-clamp-2 group-hover:bg-blue-500 group-hover:text-white rounded px-1.5 transition-colors">
                                        {project.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <FolderIcon size={48} className="mb-4 opacity-20" />
                            <p className="text-sm font-medium">
                                This folder is empty.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectApp;
