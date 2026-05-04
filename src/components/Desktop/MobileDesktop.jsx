import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code,
    GraduationCap,
    Mail,
    User,
    BrainCircuit,
    UserPen,
    X,
    Briefcase,
    FileUser,
} from "lucide-react";
import image from "../../assets/mobile_bg.jpeg";
import MobileSkill from "../../apps/MobileSkill";
import MobileProfile from "../../apps/MobileProfile";
import MailApp from "../../apps/MailApp";
import IntroductionApp from "../../apps/IntroductionApp";
import MobileProjects from "../../apps/MobileProjects";
import EducationApp from "../../apps/EducationApp";
import ExperienceApp from "../../apps/ExperienceApp";
import TopBar from "../LoginScreen/TopBar";

const apps = [
    { name: "Projects", icon: <Code size={32} />, color: "bg-blue-500" },
    {
        name: "Education",
        icon: <GraduationCap size={32} />,
        color: "bg-green-500",
    },
    { name: "About Me", icon: <User size={32} />, color: "bg-orange-500" },
    { name: "Mail", icon: <Mail size={32} />, color: "bg-sky-400" },
    { name: "Skills", icon: <BrainCircuit size={32} />, color: "bg-amber-500" },
    { name: "Profiles", icon: <UserPen size={32} />, color: "bg-purple-500" },
    {
        name: "Experience",
        icon: <Briefcase size={32} />,
        color: "bg-indigo-500",
    },
    { name: "Resume", icon: <FileUser size={32} />, color: "bg-red-500" },
];

function MobileDesktop() {
    const [activeApp, setActiveApp] = useState(null);

    const handleAppClick = (appName) => {
        setActiveApp(appName);
    };

    const handleCloseApp = () => {
        setActiveApp(null);
    };

    // Helper to render the close button consistently
    const CloseButton = () => (
        <button
            onClick={handleCloseApp}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white z-[60] shadow-2xl active:scale-90 transition-transform"
        >
            <X size={28} />
        </button>
    );

    return (
        <div className="h-screen w-screen relative overflow-hidden bg-black font-sans text-white">
            {/* iOS Home Screen */}
            <div
                className="h-full w-full bg-cover bg-center flex flex-col transition-transform duration-500"
                style={{
                    backgroundImage: `url(${image})`,
                    filter: activeApp ? "blur(20px) scale(1.1)" : "none",
                }}
            >
                {/* Cleaner TopBar Integration */}
                <div className="h-[60px] flex items-end px-4 pb-2 bg-gradient-to-b from-black/40 to-transparent">
                    <TopBar isMobile={true} />
                </div>

                {/* Adjusted Grid: Pushed down for better balance */}
                <div className="flex-1 px-6 pt-12 grid grid-cols-4 gap-y-10 gap-x-4 content-start">
                    {apps.map(({ name, icon: Icon, color }) => (
                        <div
                            key={name}
                            className="flex flex-col items-center gap-2 cursor-pointer active:scale-90 transition-transform duration-200"
                            onClick={() =>
                                name === "Resume"
                                    ? window.open(
                                          "https://drive.google.com/file/d/1Q4l7KbBuhNUv8P2o5jkLj-yK8LTsANdL/view?usp=sharing",
                                          "_blank",
                                      )
                                    : handleAppClick(name)
                            }
                        >
                            {/* Premium Icon Styling */}
                            <div
                                className={`${color} w-[68px] h-[68px] rounded-[1.4rem] flex items-center justify-center text-white shadow-lg border border-white/10 relative overflow-hidden`}
                            >
                                {/* Suble Inner Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/20 opacity-40"></div>
                                <div className="relative z-10 drop-shadow-md">
                                    {React.cloneElement(Icon, {
                                        size: 34,
                                        strokeWidth: 1.5,
                                    })}
                                </div>
                            </div>
                            <span className="text-[12px] font-semibold tracking-tight text-white drop-shadow-md">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* THE DOCK: The Glassmorphism Fix */}
                <div className="px-4 pb-10">
                    <div className="h-[92px] w-full bg-white/15 backdrop-blur-[30px] rounded-[2.5rem] border border-white/20 flex items-center justify-around px-2 shadow-2xl">
                        {/* Move your 4 most important apps here for a true iPhone look */}
                        {apps.slice(0, 4).map(({ name, icon: Icon, color }) => (
                            <div
                                key={name + "-dock"}
                                onClick={() => handleAppClick(name)}
                                className={`${color} w-[62px] h-[62px] rounded-[1.3rem] flex items-center justify-center text-white shadow-md active:scale-95 transition-transform`}
                            >
                                {React.cloneElement(Icon, {
                                    size: 30,
                                    strokeWidth: 1.5,
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* App Overlay using Framer Motion for smooth scale-up entry */}
            <AnimatePresence>
                {activeApp && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                        }}
                        className="absolute inset-0 z-50 bg-black overflow-hidden"
                    >
                        {activeApp === "Skills" && <MobileSkill />}
                        {activeApp === "Profiles" && <MobileProfile />}
                        {activeApp === "Mail" && <MailApp />}
                        {activeApp === "About Me" && <IntroductionApp />}
                        {activeApp === "Projects" && <MobileProjects />}
                        {activeApp === "Education" && <EducationApp />}
                        {activeApp === "Experience" && <ExperienceApp />}

                        <CloseButton />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MobileDesktop;
