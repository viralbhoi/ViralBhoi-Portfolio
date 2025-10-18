import React from "react";
import { Menu } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

function TaskBar({ openApps }) {
    const { handleTaskBarCLick } = useAppContext();

    return (
        <div className="h-screen w-14 bg-gray-900/75 left-0 top-0 absolute p-3 flex flex-col items-center gap-4">
            {/* Main menu icon at top */}
            <Menu className="text-white mb-4" size={30} />

            {/* Icons of open apps */}
            <div className="flex flex-col items-center gap-3">
                {openApps.map((app, index) => (
                    <div
                        key={index}
                        className="p-2 bg-gray-700/20 hover:bg-gray-600/50 rounded-xl transition-all text-white "
                        title={app.name}
                        onClick={() => handleTaskBarCLick(app.name)}
                    >
                        {/* app.icon already holds the icon component */}
                        {app.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskBar;
