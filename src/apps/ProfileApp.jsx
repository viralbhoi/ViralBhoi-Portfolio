import React, { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Sidebar,
    ShieldCheck,
    Share,
    Plus,
    Copy,
    Search,
    Code2,
    Youtube,
    Github,
    ExternalLink,
} from "lucide-react";

function SafariApp() {
    const [url, setUrl] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    // Your actual external links to act as "Favorites"
    const favorites = [
        {
            name: "LeetCode",
            icon: <Code2 size={24} />,
            link: "https://leetcode.com/u/viralbhoi/",
            color: "bg-yellow-500/20 text-yellow-500",
        },
        {
            name: "CodeChef",
            icon: <Code2 size={24} />,
            link: "https://www.codechef.com/users/viral_bhoi",
            color: "bg-amber-700/20 text-amber-600",
        },
        {
            name: "CodeForces",
            icon: <Code2 size={24} />,
            link: "https://codeforces.com/profile/viralbhoi",
            color: "bg-red-500/20 text-red-500",
        },
        {
            name: "GitHub",
            icon: <Github size={24} />,
            link: "https://github.com/viralbhoi",
            color: "bg-gray-500/20 text-gray-300",
        },
        {
            name: "YouTube",
            icon: <Youtube size={24} />,
            link: "https://www.youtube.com/@viral_bhoi",
            color: "bg-red-600/20 text-red-500",
        },
    ];

    // Your own deployed projects (These CAN be iframed because you control them, or just linked)
    const projects = [
        { name: "Sahayak", domain: "sahayak-app.vercel.app" },
        { name: "Alumni Portal", domain: "rptp-alumni.netlify.app" },
        { name: "Waste Classification", domain: "waste-ml.onrender.com" },
    ];

    const handleNavigate = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="w-full h-full flex flex-col bg-[#1e1e1e] text-gray-200 font-sans selection:bg-blue-500/30">
            {/* Safari Toolbar */}
            <div className="h-12 bg-[#2b2b2d]/95 backdrop-blur-md border-b border-black/50 flex items-center px-4 gap-4 flex-shrink-0 z-10">
                {/* Left Controls */}
                <div className="flex items-center gap-4 text-gray-400">
                    <Sidebar
                        size={18}
                        className="hover:text-gray-200 cursor-pointer transition-colors"
                    />
                    <div className="flex items-center gap-2">
                        <ChevronLeft
                            size={22}
                            className="text-gray-600 cursor-not-allowed"
                        />
                        <ChevronRight
                            size={22}
                            className="text-gray-600 cursor-not-allowed"
                        />
                    </div>
                </div>

                {/* Unified Smart Search Field */}
                <div className="flex-1 flex justify-center max-w-2xl mx-auto">
                    <div
                        className={`flex items-center gap-2 h-7 px-3 w-full rounded-md transition-all duration-200 ${
                            isFocused
                                ? "bg-[#1c1c1e] border border-blue-500/50 shadow-[0_0_0_2px_rgba(59,130,246,0.3)]"
                                : "bg-[#1c1c1e] border border-white/5"
                        }`}
                    >
                        {isFocused ? (
                            <Search size={14} className="text-gray-400" />
                        ) : (
                            <ShieldCheck size={14} className="text-gray-400" />
                        )}
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Search or enter website name"
                            className="bg-transparent border-none outline-none text-sm text-center focus:text-left text-gray-200 w-full placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-4 text-gray-400">
                    <Share
                        size={18}
                        className="hover:text-gray-200 cursor-pointer transition-colors"
                    />
                    <Plus
                        size={20}
                        className="hover:text-gray-200 cursor-pointer transition-colors"
                    />
                    <Copy
                        size={16}
                        className="hover:text-gray-200 cursor-pointer transition-colors"
                    />
                </div>
            </div>

            {/* Safari Start Page Content */}
            <div
                className="flex-1 overflow-y-auto bg-cover bg-center bg-fixed relative"
                style={{
                    // A subtle blurred gradient to mimic the Safari default start page background
                    backgroundImage:
                        "radial-gradient(circle at 50% 0%, #2a2a35 0%, #1e1e1e 60%)",
                }}
            >
                <div className="max-w-4xl mx-auto px-8 py-12">
                    {/* Favorites Section */}
                    <div className="mb-12">
                        <h2 className="text-xl font-semibold text-white/90 tracking-wide mb-6">
                            Favorites
                        </h2>
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-y-8 gap-x-4">
                            {favorites.map((fav, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleNavigate(fav.link)}
                                    className="flex flex-col items-center gap-2 cursor-pointer group"
                                >
                                    <div
                                        className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 ${fav.color} bg-[#2c2c2e]`}
                                    >
                                        {fav.icon}
                                    </div>
                                    <span className="text-xs text-gray-300 tracking-wide">
                                        {fav.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frequently Visited / Own Projects */}
                    <div>
                        <h2 className="text-xl font-semibold text-white/90 tracking-wide mb-6">
                            Frequently Visited
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {projects.map((project, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#2c2c2e]/80 hover:bg-[#3a3a3c] backdrop-blur-md rounded-xl p-4 cursor-pointer transition-all flex flex-col justify-between h-28 border border-white/5 shadow-sm"
                                >
                                    <div className="flex justify-between items-start text-gray-400">
                                        <div className="p-1.5 bg-white/5 rounded-md">
                                            <ExternalLink size={16} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-white mb-0.5">
                                            {project.name}
                                        </h3>
                                        <p className="text-[11px] text-gray-400 truncate">
                                            {project.domain}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Privacy Report Widget */}
                    <div className="mt-12 bg-[#2c2c2e]/60 backdrop-blur-md rounded-xl p-4 border border-white/5 flex items-center gap-4 max-w-md">
                        <ShieldCheck size={32} className="text-green-400" />
                        <div>
                            <h3 className="text-sm font-medium text-white">
                                Privacy Report
                            </h3>
                            <p className="text-xs text-gray-400">
                                Safari has prevented 42 trackers from profiling
                                you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SafariApp;
