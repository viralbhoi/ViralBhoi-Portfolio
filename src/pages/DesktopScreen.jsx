import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppIcon from "../components/Desktop/AppIcon";
import image from "../assets/mac_os_wallpaper.jpg"; 
import {
    Code,
    GraduationCap,
    Mail,
    Terminal,
    User,
    BrainCircuit,
    UserPen,
    Briefcase,
    FileUser,
} from "lucide-react";
import TaskBar from "../components/Desktop/TaskBar"; 
import AppWindow from "../components/Desktop/AppWindow";
import IntroductionApp from "../apps/IntroductionApp";
import SkillApp from "../apps/SkillApp";
import ProjectApp from "../apps/ProjectApp";
import ProfileApp from "../apps/ProfileApp";
import MailApp from "../apps/MailApp";
import TerminalApp from "../apps/TerminalApp";
import EducationApp from "../apps/EducationApp";
import ExperienceApp from "../apps/ExperienceApp";
import TopBar from "../components/LoginScreen/TopBar"; // This will be your macOS Menu Bar
import { useAppContext } from "../context/AppContext";

import MobileDesktop from "../components/Desktop/MobileDesktop";

function DesktopScreen() {
    const [openApps, setOpenApps] = useState([]);

    const { zIdx, setZIdx, setZIdxMap, bringToFront, setIsMinimized } =
        useAppContext();

    const nameToIcon = {
        Projects: <Code strokeWidth={1.5} />,
        Education: <GraduationCap strokeWidth={1.5} />,
        "About Me": <User strokeWidth={1.5} />,
        Mail: <Mail strokeWidth={1.5} />,
        Terminal: <Terminal strokeWidth={1.5} />,
        Skills: <BrainCircuit strokeWidth={1.5} />,
        Profiles: <UserPen strokeWidth={1.5} />,
        Experience: <Briefcase strokeWidth={1.5} />,
        Resume: <FileUser strokeWidth={1.5} />,
    };

    const openApp = (name) => {
        setOpenApps((prev) => {
            const existing = prev.find((app) => app.name === name);
            if (existing) {
                setIsMinimized((m) => ({ ...m, [name]: false }));
                bringToFront(name);
                return prev;
            }

            setZIdx((prevZ) => prevZ + 1);
            setZIdxMap((prevMap) => ({ ...prevMap, [name]: zIdx + 1 }));

            return [...prev, { name, icon: nameToIcon[name] }];
        });
    };

    const closeApp = (name) => {
        setOpenApps(openApps.filter((app) => app.name !== name));
    };

    return (
        <>
            {/* Desktop Wrapper with Framer Motion for smooth entry */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="hidden md:block desktop w-screen h-screen relative overflow-hidden bg-center bg-cover bg-no-repeat selection:bg-blue-500/30 text-white"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                {/* macOS Menu Bar - Fixed Top */}
                <div className="absolute top-0 w-full z-50 h-10 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm flex items-center px-4">
                    <TopBar />
                </div>

                {/* macOS Desktop Icons - Flex Column Aligned Top Right */}
                <div className="absolute top-10 right-4 flex flex-col flex-wrap gap-5 p-2 h-[calc(100vh-120px)] w-24 items-end content-end">
                    <AppIcon
                        icon={nameToIcon["Projects"]}
                        label="Projects"
                        onClick={() => openApp("Projects")}
                    />
                    <AppIcon
                        icon={nameToIcon["Education"]}
                        label="Education"
                        onClick={() => openApp("Education")}
                    />
                    <AppIcon
                        icon={nameToIcon["About Me"]}
                        label="About Me"
                        onClick={() => openApp("About Me")}
                    />
                    <AppIcon
                        icon={nameToIcon["Mail"]}
                        label="Mail"
                        onClick={() => openApp("Mail")}
                    />
                    <AppIcon
                        icon={nameToIcon["Terminal"]}
                        label="Terminal"
                        onClick={() => openApp("Terminal")}
                    />
                    <AppIcon
                        icon={nameToIcon["Skills"]}
                        label="Skills"
                        onClick={() => openApp("Skills")}
                    />
                    <AppIcon
                        icon={nameToIcon["Profiles"]}
                        label="Profiles"
                        onClick={() => openApp("Profiles")}
                    />
                    <AppIcon
                        icon={nameToIcon["Experience"]}
                        label="Experience"
                        onClick={() => openApp("Experience")}
                    />
                    <AppIcon
                        icon={nameToIcon["Resume"]}
                        label="Resume"
                        onClick={() => {
                            window.open(
                                "https://drive.google.com/file/d/1Q4l7KbBuhNUv8P2o5jkLj-yK8LTsANdL/view?usp=sharing",
                                "_blank",
                                "noopener,noreferrer",
                            );
                        }}
                    />
                </div>

                {/* Window Renderer */}
                <AnimatePresence>
                    {openApps.map((app) => (
                        <AppWindow
                            key={app.name}
                            title={app.name}
                            onClose={() => closeApp(app.name)}
                        >
                            {app.name === "Projects" && <ProjectApp />}
                            {app.name === "Profiles" && <ProfileApp />}
                            {app.name === "Mail" && <MailApp />}
                            {app.name === "Terminal" && <TerminalApp />}
                            {app.name === "Skills" && <SkillApp />}
                            {app.name === "About Me" && <IntroductionApp />}
                            {app.name === "Education" && <EducationApp />}
                            {app.name === "Experience" && <ExperienceApp />}
                        </AppWindow>
                    ))}
                </AnimatePresence>

                {/* macOS Dock - Handled in TaskBar component */}
                <div className="absolute bottom-4 w-full flex justify-center z-50">
                    <TaskBar openApps={openApps} />
                </div>
            </motion.div>

            <div className="block md:hidden">
                <MobileDesktop />
            </div>
        </>
    );
}

export default DesktopScreen;
