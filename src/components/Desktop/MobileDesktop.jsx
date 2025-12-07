import React, { useState } from "react";
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
    { name: "Projects", icon: <Code /> },
    { name: "Education", icon: <GraduationCap /> },
    { name: "About Me", icon: <User /> },
    { name: "Mail", icon: <Mail /> },
    { name: "Skills", icon: <BrainCircuit /> },
    { name: "Profiles", icon: <UserPen /> },
    { name: "Experience", icon: <Briefcase /> },
    { name: "Resume", icon: <FileUser /> },
];

function MobileDesktop() {
    const [activeApp, setActiveApp] = useState(null);

    const handleAppClick = (appName) => {
        setActiveApp(appName);
    };

    const handleCloseApp = () => {
        setActiveApp(null);
    };

    return (
        <div className="h-screen w-screen relative">
            {/* Desktop Grid */}

            {!activeApp && (
                <div
                    className="h-[100vh] w-[100vw] bg-cover bg-center flex flex-col"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="h-[5%] ">
                        <TopBar />
                    </div>
                    <div className="h-[100vh] w-[100vw] p-4 grid grid-rows-4 grid-cols-3 gap-6">
                        {apps.map(({ name, icon: Icon }) => (
                            <div
                                key={name}
                                className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 bg-gray-800/70 rounded-xl"
                                onClick={() => {
                                    name !== "Resume"
                                        ? handleAppClick(name)
                                        : window.open(
                                              "https://drive.google.com/file/d/19CyPSjWQfq-tepRLU4j3oKPPC9QR5d4c/view?usp=sharing",
                                              "_blank",
                                              "noopener,noreferrer"
                                          );
                                }}
                            >
                                <div className="text-white drop-shadow-md p-6">
                                    {Icon}
                                </div>

                                <span className="text-white text-xs mt-1 text-center">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skill App Fullscreen */}
            {activeApp === "Skills" && (
                <div className="absolute inset-0 bg-black text-white z-50">
                    <button
                        onClick={handleCloseApp}
                        className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-20"
                    >
                        <X size={20} />
                    </button>
                    <MobileSkill />
                </div>
            )}

            {activeApp === "Profiles" && (
                <div className="absolute inset-0 bg-black text-white z-50">
                    <button
                        onClick={handleCloseApp}
                        className="fixed top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-20"
                    >
                        <X size={20} />
                    </button>
                    <MobileProfile />
                </div>
            )}

            {activeApp === "Mail" && (
                <div className="absolute inset-0 bg-black text-white z-50">
                    <button
                        onClick={handleCloseApp}
                        className="fixed top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-20"
                    >
                        <X size={20} />
                    </button>
                    <MailApp />
                </div>
            )}

            {activeApp === "About Me" && (
                <div className="absolute inset-0 bg-black text-white z-50">
                    <button
                        onClick={handleCloseApp}
                        className="fixed top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-20"
                    >
                        <X size={20} />
                    </button>
                    <IntroductionApp />
                </div>
            )}

            {activeApp === "Projects" && (
                <div className="absolute inset-0 bg-black text-white z-50">
                    <button
                        onClick={handleCloseApp}
                        className="fixed top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-20"
                    >
                        <X size={20} />
                    </button>
                    <MobileProjects />
                </div>
            )}

            {activeApp === "Education" && (
                <div className="absolute inset-0 bg-black text-white z-50">
                    <button
                        onClick={handleCloseApp}
                        className="fixed top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-20"
                    >
                        <X size={20} />
                    </button>
                    <EducationApp />
                </div>
            )}
            {activeApp === "Experience" && (
                <div className="absolute inset-0 bg-black text-white z-50">
                    <button
                        onClick={handleCloseApp}
                        className="fixed top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-20"
                    >
                        <X size={20} />
                    </button>
                    <ExperienceApp />
                </div>
            )}
        </div>
    );
}

export default MobileDesktop;
