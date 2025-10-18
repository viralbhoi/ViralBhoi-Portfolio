import React, { useState } from "react";
import { Power } from "lucide-react";
import "./BootScreen.css";

export default function BootScreenComp({ onBootComplete }) {
    const [isBooting, setIsBooting] = useState(false);

    const handlePowerOn = () => {
        setIsBooting(true);

        setTimeout(() => {
            onBootComplete();
        }, 3000);
    };

    return (
        <div
            className={`bg-gray-950 w-full h-screen ${
                isBooting ? "" : "flex justify-center items-center"
            }`}
        >
            {isBooting ? (
                <div className="booting-text">
                    <p>Booting up the setup</p>
                    <p>Loading user environment...</p>
                </div>
            ) : (
                <div className="power-section">
                    <button
                        onClick={() => handlePowerOn()}
                        className="p-3 power-button"
                    >
                        <Power size={80} className="text-emerald-100" />
                    </button>
                    <p className="hint-text">Press Power to turn on</p>
                </div>
            )}
        </div>
    );
}
