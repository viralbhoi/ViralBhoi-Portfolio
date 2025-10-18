import React from "react";
import { Network, Battery, Settings } from "lucide-react";

function RightIcons() {
    return (
        <div className="flex gap-4 items-center w-full text-white">
            <Network />
            <Battery />
            <Settings />
        </div>
    );
}

export default RightIcons;
