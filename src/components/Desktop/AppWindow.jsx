import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { Minus, Square, X } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

export default function AppWindow({ children, title = "App Window", onClose }) {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [size, setSize] = useState({ width: 600, height: 480 });
    const [fullSize, setFullSize] = useState({
        width: window.innerWidth - 56,
        height: window.innerHeight,
    });

    const {
        isMinimized,
        setIsMinimized,
        isMaximized,
        setIsMaximized,
        zIdxMap,
        handleWindowClick,
    } = useAppContext();

    useEffect(() => {
        const handleResize = () => {
            setFullSize({
                width: window.innerWidth - 56,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const minimized = isMinimized[title];
    const maximized = isMaximized[title];
    const zIndex = zIdxMap[title] || 1;

    return (
        <Rnd
            className={`bg-gray-900 border border-gray-700 rounded-lg shadow-lg text-white overflow-hidden transition-all duration-75 box-border`}
            bounds="window"
            size={
                maximized
                    ? { width: fullSize.width, height: fullSize.height }
                    : size
            }
            position={maximized ? { x: 56, y: 0 } : position}
            onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, pos) => {
                setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
                setPosition(pos);
            }}
            disableDragging={maximized}
            style={{
                display: minimized ? "none" : "block",
                zIndex: zIndex,
            }}
            onMouseDown={() => handleWindowClick(title)}
        >
            {/* Title Bar */}
            <div className="flex justify-between items-center bg-gray-800 px-3 py-1 cursor-move absolute top-0 left-0 right-0 z-10">
                <span className="font-mono text-sm">{title}</span>
                <div className="flex gap-2">
                    <button
                        onClick={() =>
                            setIsMinimized((prev) => ({
                                ...prev,
                                [title]: true,
                            }))
                        }
                        className="hover:text-yellow-400"
                    >
                        <Minus size={14} />
                    </button>
                    <button
                        onClick={() =>
                            setIsMaximized((prev) => ({
                                ...prev,
                                [title]: !prev[title],
                            }))
                        }
                        className="hover:text-green-400"
                    >
                        <Square size={14} />
                    </button>
                    <button onClick={onClose} className="hover:text-red-400">
                        <X size={14} />
                    </button>
                </div>
            </div>

            {/* App Content */}
            <div className="absolute top-7 bottom-0 left-0 right-0 p-1 bg-gray-900 overflow-auto box-border">
                {children}
            </div>
        </Rnd>
    );
}
