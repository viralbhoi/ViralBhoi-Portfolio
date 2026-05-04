import React, { useState, useEffect } from "react";
import { Apple } from "lucide-react"; // Using Apple logo for authenticity
import { motion } from "framer-motion"; // For smooth progress bar animation

export default function BootScreenComp({ onBootComplete }) {
    const [isBooting, setIsBooting] = useState(false);
    const [progress, setProgress] = useState(0);

    const handlePowerOn = () => {
        setIsBooting(true);

        // Simulating a smooth boot progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30); // Approx 3 seconds to boot
    };

    useEffect(() => {
        if (progress === 100) {
            // Short delay at 100% before transition
            const timeout = setTimeout(() => {
                onBootComplete();
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [progress, onBootComplete]);

    return (
        <div className="bg-black w-full h-screen flex flex-col justify-center items-center font-sans overflow-hidden">
            {!isBooting ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center gap-6"
                >
                    <button
                        onClick={handlePowerOn}
                        className="p-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group active:scale-90"
                    >
                        <Apple
                            size={60}
                            className="text-white opacity-40 group-hover:opacity-100 transition-opacity"
                        />
                    </button>
                    <p className="text-gray-500 text-sm tracking-widest uppercase font-medium">
                        Click to Start
                    </p>
                </motion.div>
            ) : (
                <div className="flex flex-col items-center w-full max-w-[200px]">
                    {/* The iconic centered logo */}
                    <Apple size={80} className="text-white mb-12" />

                    {/* The minimalist progress bar */}
                    <div className="w-full h-[4px] bg-gray-800 rounded-full overflow-hidden relative border border-white/5">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
