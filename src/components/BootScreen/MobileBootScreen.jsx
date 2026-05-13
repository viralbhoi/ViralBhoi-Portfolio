import React, { useEffect, useState } from "react";
import { Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import image from "../../assets/mobile_bg.jpeg";

function MobileBootScreen({ onBootComplete }) {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();

            // iOS Style: Time and Date
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setTime(`${hours}:${minutes}`);

            const options = { weekday: "long", month: "long", day: "numeric" };
            setDate(now.toLocaleDateString("en-US", options));
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="h-screen w-screen bg-center bg-cover bg-no-repeat flex flex-col justify-between items-center py-20 font-sans overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Top Section: iOS Typography */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center"
            >
                <div className="text-white text-xl font-semibold mb-1 drop-shadow-md">
                    {date}
                </div>
                <div className="text-white text-8xl font-bold tracking-tighter drop-shadow-xl">
                    {time}
                </div>
            </motion.div>

            {/* Bottom Section: Biometric Unlock */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center cursor-pointer group"
                onClick={onBootComplete}
            >
                <div className="relative">
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping scale-150 opacity-20"></div>

                    <Fingerprint
                        size={70}
                        className="text-white relative z-10 transition-transform duration-300 group-active:scale-90"
                        style={{
                            filter: "drop-shadow(0 0 12px rgba(255,255,255,0.6))",
                        }}
                    />
                </div>

                <p className="text-white mt-6 text-[13px] font-medium tracking-[0.2em] uppercase opacity-70 animate-pulse">
                    Touch ID to Open
                </p>

                {/* iPhone Home Indicator Line */}
                <div className="w-32 h-[5px] bg-white/40 rounded-full mt-10"></div>
            </motion.div>
        </div>
    );
}

export default MobileBootScreen;
