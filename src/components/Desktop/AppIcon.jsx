import React from "react";

function AppIcon({ icon, label, onClick }) {
    return (
        <div
            className="flex flex-col items-start w-[5rem] justify-center cursor-pointer hover:scale-105 transition-transform"
            onClick={onClick}
        >
            <div className="flex flex-col items-center justify-center">
                <div className="p-4 w-[3.5rem] bg-gray-700 rounded-xl hover:bg-gray-600/70 text-white">
                    {icon}
                </div>
                <p className="text-white text-sm mt-2 text-center">{label}</p>
            </div>
        </div>
    );
}
export default AppIcon;
