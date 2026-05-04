import React from "react";
import { Wifi, BatteryFull, Search, AlignRight } from "lucide-react";

function RightIcons({ mode }) {
    if (mode === "mobile") {
        return (
            <div className="flex gap-1.5 items-center text-white">
                <Wifi size={17} strokeWidth={2.5} />
                <BatteryFull size={20} strokeWidth={2} />
            </div>
        );
    }

    return (
        <div className="flex gap-3 items-center text-white opacity-90">
            <Search
                size={14}
                strokeWidth={2.5}
                className="cursor-pointer hover:opacity-100 hidden sm:block"
            />
            <Wifi
                size={15}
                strokeWidth={2.5}
                className="cursor-pointer hover:opacity-100"
            />
            <BatteryFull
                size={16}
                strokeWidth={2}
                className="cursor-pointer hover:opacity-100"
            />
            <AlignRight
                size={15}
                strokeWidth={2.5}
                className="cursor-pointer hover:opacity-100"
            />
        </div>
    );
}

export default RightIcons;
