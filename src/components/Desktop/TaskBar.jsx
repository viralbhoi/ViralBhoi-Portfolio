import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react"; // Replaced Menu with Search (like Spotlight) for the Dock
import { useAppContext } from "../../context/AppContext";

function TaskBar({ openApps }) {
    const { handleTaskBarCLick } = useAppContext();

    return (
        // The container is now styled as a bottom-dock with glassmorphism
        <div className="bg-gray-500/20 backdrop-blur-xl border border-white/30 rounded-2xl p-2 flex gap-2 shadow-lg items-center mb-2">
            {/* Spotlight / Finder icon permanently in the Dock */}
            <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-white cursor-pointer"
                title="Search"
            >
                <Search strokeWidth={1.5} size={24} />
            </motion.div>

            {/* A small divider between permanent dock icons and open apps */}
            {openApps.length > 0 && (
                <div className="w-[1px] h-8 bg-gray-300/30 mx-1"></div>
            )}

            {/* Icons of open apps */}
            <div className="flex items-center gap-2">
                {openApps.map((app, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, y: -5 }} // macOS style magnification on hover
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="p-3 bg-gray-500/30 hover:bg-gray-500/50 rounded-xl transition-colors text-white cursor-pointer relative"
                        title={app.name}
                        onClick={() => handleTaskBarCLick(app.name)}
                    >
                        {/* The icon */}
                        {React.cloneElement(app.icon, { size: 24 })}

                        {/* The small dot underneath indicating the app is open */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/80 rounded-full"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default TaskBar;
