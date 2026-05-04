import React, { useState } from "react";
import {
    Search,
    ChevronRight,
    ChevronLeft,
    Folder as FolderIcon,
    FileCode2,
} from "lucide-react";
import { folderData } from "../data/projectsData"; // Adjust the import path as needed

function MobileProjects() {
    const [activeTab, setActiveTab] = useState("Home");
    const [searchQuery, setSearchQuery] = useState("");

    const openGitHub = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    const currentItems = folderData[activeTab] || [];

    return (
        <div className="h-screen w-screen bg-black text-white font-sans overflow-hidden flex flex-col">
            {/* iOS Top Navigation Bar */}
            <div className="flex items-center justify-between px-4 pt-12 pb-2 bg-black z-10">
                {activeTab !== "Home" ? (
                    <button
                        onClick={() => setActiveTab("Home")}
                        className="flex items-center text-blue-500 text-lg hover:opacity-80 transition-opacity"
                    >
                        <ChevronLeft size={24} className="-ml-1" />
                        <span>Browse</span>
                    </button>
                ) : (
                    <div className="w-20"></div> 
                )}
                <div className="w-20"></div> 
            </div>

            {/* iOS Large Title */}
            <div className="px-5 pb-2">
                <h1 className="text-4xl font-bold tracking-tight">
                    {activeTab === "Home" ? "Browse" : activeTab}
                </h1>
            </div>

            {/* iOS Search Bar */}
            <div className="px-4 mb-4">
                <div className="flex items-center bg-[#1c1c1e] text-gray-400 px-3 py-2 rounded-xl">
                    <Search size={20} className="mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none outline-none text-white w-full text-[17px] placeholder-gray-500"
                    />
                </div>
            </div>

            {/* iOS Grouped List View */}
            <div className="flex-1 overflow-y-auto px-4 pb-10">
                {currentItems.length > 0 ? (
                    <div className="bg-[#1c1c1e] rounded-xl overflow-hidden">
                        {currentItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    item.type === "folder"
                                        ? setActiveTab(item.name)
                                        : openGitHub(item.link)
                                }
                                className={`flex items-center justify-between p-3 active:bg-[#2c2c2e] transition-colors cursor-pointer ${
                                    index !== currentItems.length - 1
                                        ? "border-b border-gray-800 ml-12"
                                        : "ml-12 border-none"
                                }`}
                                // The negative margin on the icon pulls it out of the border area, exactly like iOS
                                style={{ marginLeft: 0, paddingLeft: "1rem" }}
                            >
                                <div className="flex items-center gap-4 w-full">
                                    {/* Icon */}
                                    {item.type === "folder" ? (
                                        <FolderIcon
                                            size={28}
                                            className="text-blue-500 fill-blue-500"
                                        />
                                    ) : (
                                        <FileCode2
                                            size={28}
                                            className="text-white"
                                            strokeWidth={1.5}
                                        />
                                    )}

                                    {/* Text Area */}
                                    <div
                                        className={`flex flex-col flex-1 py-1 ${index !== currentItems.length - 1 ? "border-b border-gray-800" : ""}`}
                                    >
                                        <span className="text-[17px] font-normal tracking-wide text-white">
                                            {item.name}
                                        </span>
                                        {item.subtitle && (
                                            <span className="text-[13px] text-gray-400 mt-0.5">
                                                {item.subtitle}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Chevron for Folders */}
                                {item.type === "folder" && (
                                    <ChevronRight
                                        size={20}
                                        className="text-gray-500 ml-2"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center mt-10 text-[17px]">
                        No items found.
                    </p>
                )}
            </div>
        </div>
    );
}

export default MobileProjects;
