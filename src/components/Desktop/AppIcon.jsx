import React from "react";
import { motion } from "framer-motion";

function AppIcon({ icon, label, onClick }) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-1 w-24 cursor-pointer group"
        >
            {/* The Icon: Floating directly on the background with a drop shadow */}
            <div className="text-white drop-shadow-lg transition-colors group-hover:text-blue-400 flex items-center justify-center h-14 w-14">
                {/* We use cloneElement to force a consistent, slightly larger size now that the box is gone */}
                {React.cloneElement(icon, { size: 48, strokeWidth: 1.2 })}
            </div>

            {/* The Label: Needs a text-shadow so it's readable on any wallpaper */}
            <span
                className="text-white text-[13px] font-medium tracking-wide text-center px-2 py-0.5 rounded-[4px] group-hover:bg-blue-500/60"
                style={{ textShadow: "0px 1px 3px rgba(0,0,0,0.9)" }}
            >
                {label}
            </span>
        </motion.div>
    );
}

export default AppIcon;
