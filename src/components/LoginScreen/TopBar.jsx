import React from "react";
import Clock from "./Clock";
import RightIcons from "./RightIcons";

function TopBar() {
    return (
        <div className="relative w-screen h-9 flex items-center box-border bg-black/30 mb-5">
            <div className="absolute right-4 hidden md:block">
                <RightIcons />
            </div>

            <div className="flex w-full justify-end md:justify-center items-center mr-2">
                <Clock />
            </div>
        </div>
    );
}

export default TopBar;
