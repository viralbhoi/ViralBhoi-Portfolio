import React from "react";
import image from "../assets/mac_os_wallpaper.jpg";
import TopBar from "../components/LoginScreen/TopBar";
import { useNavigate } from "react-router-dom";
import { Power, RotateCcw, Moon } from "lucide-react";

export default function LoginScreen({ isMobile = false }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/desktop");
    };

    return (
        <div
            className="h-screen w-screen bg-center bg-cover bg-no-repeat overflow-hidden font-sans"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* The core macOS Blur Layer */}
            <div className="flex flex-col items-center bg-black/10 backdrop-blur-[40px] h-screen w-screen transition-all duration-500">
                {/* Status Bar - hidden or very subtle on login */}
                <div className="w-full h-10">
                    <TopBar isMobile={isMobile} />
                </div>

                {/* Central Login Container */}
                <div className="flex-1 w-full flex flex-col justify-center items-center -mt-20">
                    {/* User Avatar - Representing Viral Bhoi */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/20 shadow-2xl overflow-hidden mb-6 bg-gradient-to-tr from-blue-500 to-purple-600 p-1">
                        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-3xl font-bold">
                            VB
                        </div>
                    </div>

                    <h1 className="text-white font-semibold text-2xl md:text-3xl tracking-tight mb-8 drop-shadow-md">
                        Viral Bhoi
                    </h1>

                    {/* Translucent Password Field (Your LoginBox logic) */}
                    <div className="w-full max-w-[240px]">
                        <div className="relative group">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                autoFocus
                                onKeyDown={(e) =>
                                    e.key === "Enter" && handleLogin()
                                }
                                className="w-full bg-white/20 border border-white/10 backdrop-blur-md text-white placeholder-white/50 px-4 py-2.5 rounded-full outline-none focus:bg-white/30 transition-all text-center text-sm shadow-inner"
                            />
                            <button
                                onClick={handleLogin}
                                className="mt-4 w-full text-white/60 hover:text-white text-[12px] font-medium transition-colors"
                            >
                                Click to enter or press Return
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom System Controls (Classic macOS Login) */}
                <div className="pb-12 flex gap-10 md:gap-16">
                    <SystemControl icon={<Moon size={20} />} label="Sleep" />
                    <SystemControl
                        icon={<RotateCcw size={20} />}
                        label="Restart"
                    />
                    <SystemControl
                        icon={<Power size={20} />}
                        label="Shut Down"
                    />
                </div>
            </div>
        </div>
    );
}

// Subtle bottom control component
function SystemControl({ icon, label }) {
    return (
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-white/20 group-hover:text-white transition-all">
                {icon}
            </div>
            <span className="text-white/70 text-[11px] font-medium group-hover:text-white transition-colors">
                {label}
            </span>
        </div>
    );
}
