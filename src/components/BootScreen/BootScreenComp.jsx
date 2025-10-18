import React, { useState, useEffect } from "react";
import { Power } from "lucide-react";
import "./BootScreen.css";

export default function BootScreenComp({ onBootComplete }) {
    const [isBooting, setIsBooting] = useState(false);
    const [visibleLines, setVisibleLines] = useState([]);

    const bootLines = [
        "Booting up the setup...",
        "Loading user environment...",
        "Initializing desktop services...",
        "Checking system configurations...",
        "Connecting to local host...",
        "Launching user interface...",
        "All systems operational.",
        "Welcome, guest.....",
    ];

    const handlePowerOn = () => {
        setIsBooting(true);

        bootLines.forEach((line, index) => {
            setTimeout(() => {
                setVisibleLines((prev) => [...prev, line]);
            }, index * 400);
        });

        setTimeout(() => {
            onBootComplete();
        }, bootLines.length * 400 + 1000);
    };

    useEffect(() => {
        if (!isBooting) setVisibleLines([]);
    }, [isBooting]);

    return (
        <div
            className={`bg-gray-950 w-full h-screen ${
                isBooting ? "" : "flex justify-center items-center"
            }`}
        >
            {isBooting ? (
                <div className="booting-text">
                    {visibleLines.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
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
