import React, { useState } from "react";
import AppIcon from "../components/Desktop/AppIcon";
import image from "../assets/desktop_bg.jpg";
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
import AppWindow from "../components/Desktop/AppWindow"; // new window component
import IntroductionApp from "../apps/IntroductionApp";
import SkillApp from "../apps/SkillApp";
import ProjectApp from "../apps/ProjectApp";
import ProfileApp from "../apps/ProfileApp";
import MailApp from "../apps/MailApp";
import TerminalApp from "../apps/TerminalApp";
import EducationApp from "../apps/EducationApp";
import ExperienceApp from "../apps/ExperienceApp";
import TopBar from "../components/LoginScreen/TopBar";
import { useAppContext } from "../context/AppContext";

import MobileDesktop from "../components/Desktop/MobileDesktop";

function DesktopScreen() {
    const [openApps, setOpenApps] = useState([]);

    const { zIdx, setZIdx, setZIdxMap, bringToFront, setIsMinimized } =
        useAppContext();

    const nameToIcon = {
        Projects: <Code />,
        Education: <GraduationCap />,
        "About Me": <User />,
        Mail: <Mail />,
        Terminal: <Terminal />,
        Skills: <BrainCircuit />,
        Profiles: <UserPen />,
        Experience: <Briefcase />,
        Resume: <FileUser />,
    };

    const openApp = (name) => {
        setOpenApps((prev) => {
            const existing = prev.find((app) => app.name === name);
            if (existing) {
                setIsMinimized((m) => ({ ...m, [name]: false }));
                bringToFront(name);
                return prev;
            }

            // Otherwise open new app
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
            <div
                className="hidden md:block desktop w-screen bg-center bg-cover bg-no-repeat h-screen relative overflow-hidden"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                {/* Desktop App Icons */}
                <div className="h-10% bg-black/40">
                    <TopBar />
                </div>
                <div className="grid grid-rows-6 grid-cols-2 w-1/6 gap-6 p-4 ml-14">
                    <AppIcon
                        icon={<Code />}
                        label="Projects"
                        onClick={() => openApp("Projects")}
                    />
                    <AppIcon
                        icon={<GraduationCap />}
                        label="Education"
                        onClick={() => openApp("Education")}
                    />
                    <AppIcon
                        icon={<User />}
                        label="About Me"
                        onClick={() => openApp("About Me")}
                    />
                    <AppIcon
                        icon={<Mail />}
                        label="Mail"
                        onClick={() => openApp("Mail")}
                    />
                    <AppIcon
                        icon={<Terminal />}
                        label="Terminal"
                        onClick={() => openApp("Terminal")}
                    />
                    <AppIcon
                        icon={<BrainCircuit />}
                        label="Skills"
                        onClick={() => openApp("Skills")}
                    />
                    <AppIcon
                        icon={<UserPen />}
                        label="Profiles"
                        onClick={() => openApp("Profiles")}
                    />
                    <AppIcon
                        icon={<Briefcase />}
                        label="Experience"
                        onClick={() => openApp("Experience")}
                    />
                    <AppIcon
                        icon={<FileUser />}
                        label="Resume"
                        onClick={() => {
                            window.open(
                                "https://drive.google.com/file/d/19CyPSjWQfq-tepRLU4j3oKPPC9QR5d4c/view?usp=sharing",
                                "_blank",
                                "noopener,noreferrer"
                            );
                        }}
                    />
                </div>

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

                {/* Taskbar */}
                <TaskBar openApps={openApps} />
            </div>

            <div className="block md:hidden">
                <MobileDesktop />
            </div>
        </>
    );
}

export default DesktopScreen;
