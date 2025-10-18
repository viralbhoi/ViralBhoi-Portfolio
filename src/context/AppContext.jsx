import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isMinimized, setIsMinimized] = useState({
        Projects: false,
        Education: false,
        "About Me": false,
        Mail: false,
        Terminal: false,
        Skills: false,
        Profiles: false,
        Experience: false,
    });

    const [isMaximized, setIsMaximized] = useState({
        Projects: false,
        Education: false,
        "About Me": false,
        Mail: false,
        Terminal: false,
        Skills: false,
        Profiles: false,
        Experience: false,
    });

    const [zIdx, setZIdx] = useState(1);
    const [zIdxMap, setZIdxMap] = useState({});

    const bringToFront = (appName) => {
        setZIdx((prev) => prev + 1);
        setZIdxMap((prev) => ({ ...prev, [appName]: zIdx + 1 }));
    };

    const handleTaskBarCLick = (appName) => {
        const currentZ = zIdxMap[appName] || 0;
        const isTop = currentZ === zIdx;

        if (isMinimized[appName]) {
            setIsMinimized((prev) => ({ ...prev, [appName]: false }));
            bringToFront(appName);
        } else if (!isTop) {
            bringToFront(appName);
        } else {
            setIsMinimized((prev) => ({ ...prev, [appName]: true }));
        }
    };

    const handleWindowClick = (appName) => {
        const currentZ = zIdxMap[appName] || 0;
        if (currentZ !== zIdx) {
            bringToFront(appName);
        }
    };

    return (
        <AppContext.Provider
            value={{
                isMinimized,
                setIsMinimized,
                isMaximized,
                setIsMaximized,
                zIdx,
                zIdxMap,
                setZIdx,
                setZIdxMap,
                handleTaskBarCLick,
                handleWindowClick,
                bringToFront,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
