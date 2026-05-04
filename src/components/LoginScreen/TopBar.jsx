import React from "react";
import Clock from "./Clock";
import RightIcons from "./RightIcons";
import { Command } from "lucide-react";

function TopBar({ isMobile = false }) {
    if (isMobile) {
        return (
            <div className="w-full h-full flex items-center justify-between px-7">
                {/* iOS Time on Left */}
                <div className="text-[16px] font-semibold text-white tracking-tight">
                    <Clock mode="timeOnly" />
                </div>

                {/* iOS Status Icons on Right */}
                <div className="flex items-center gap-1.5">
                    <RightIcons mode="mobile" />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex items-center justify-between px-3 text-white text-[13px] font-medium tracking-wide">
            <div className="flex items-center gap-4">
                <Command
                    size={15}
                    strokeWidth={2}
                    className="cursor-pointer hover:opacity-80"
                />
                <div className="font-bold cursor-pointer hover:opacity-80">
                    Portfolio
                </div>
                <div className="hidden md:flex gap-4 opacity-90 font-normal">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Window</span>
                    <span>Help</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <RightIcons />
                <Clock />
            </div>
        </div>
    );
}

export default TopBar;
