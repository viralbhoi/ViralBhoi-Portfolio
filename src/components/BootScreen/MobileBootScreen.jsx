import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fingerprint } from "lucide-react";
import image from "../../assets/mobile_bg.jpeg";

function MobileBootScreen() {
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setTime(`${hours}:${minutes}`);
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="h-screen w-screen bg-center bg-cover bg-no-repeat flex flex-col justify-between items-center py-12"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="text-white text-8xl font-bold drop-shadow-lg">
                {time}
            </div>

            <div
                className="flex flex-col items-center justify-center"
                onClick={() => navigate("/desktop")}
            >
                <Fingerprint
                    size={80}
                    className="text-white cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
                    }}
                />
                <p className="text-white mt-2 text-sm tracking-widest opacity-80">
                    Tap to Unlock
                </p>
            </div>
        </div>
    );
}

export default MobileBootScreen;
