// src/App.jsx
import React, { useState } from "react";
import BootScreenComp from "../components/BootScreen/BootScreenComp";
import LoginScreen from "./LoginScreen";
import MobileBootScreen from "../components/BootScreen/MobileBootScreen";

export default function App() {
    const [bootComplete, setBootComplete] = useState(false);

    return (
        <>
            <div className="hidden md:block">
                {!bootComplete ? (
                    <BootScreenComp
                        onBootComplete={() => setBootComplete(true)}
                    />
                ) : (
                    <LoginScreen />
                )}
            </div>

            <div className="block md:hidden">
                <MobileBootScreen />
            </div>
        </>
    );
}
