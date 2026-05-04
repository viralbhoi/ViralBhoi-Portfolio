import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Gateway from "./pages/Gateway";
import StaticPortfolio from "./pages/StaticPortfolio";
import BootScreenComp from "./components/BootScreen/BootScreenComp";
import MobileBootScreen from "./components/BootScreen/MobileBootScreen";
import LoginScreen from "./pages/LoginScreen";

export default function App() {
    const [view, setView] = useState("gateway");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();

    // Update screen type on resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    switch (view) {
        case "static":
            return <StaticPortfolio onBack={() => setView("gateway")} />;
        case "booting":
            // Redirect based on device type
            return isMobile ? (
                <MobileBootScreen onBootComplete={() => navigate("/desktop")} />
            ) : (
                <BootScreenComp onBootComplete={() => setView("login")} />
            );
        case "login":
            // LoginScreen handles both but can be adjusted for isMobile
            return <LoginScreen isMobile={isMobile} />;
        default:
            return (
                <Gateway
                    onChoose={(choice) =>
                        setView(choice === "static" ? "static" : "booting")
                    }
                />
            );
    }
}
