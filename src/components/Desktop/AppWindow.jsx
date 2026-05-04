import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { useAppContext } from "../../context/AppContext";

export default function AppWindow({ children, title = "App Window", onClose }) {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [size, setSize] = useState({ width: 600, height: 480 });

    const [fullSize, setFullSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight - 36, // Subtracting Top Bar height
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
                width: window.innerWidth,
                height: window.innerHeight - 36,
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
            // Added glassy background, heavy shadow, and a subtle white border
            className={`bg-[#1c1c1e]/80 backdrop-blur-2xl border border-white/20 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white overflow-hidden transition-all box-border`}
            bounds="window"
            size={
                maximized
                    ? { width: fullSize.width, height: fullSize.height }
                    : size
            }
            // If maximized, start right below the top bar (y: 36 instead of 0)
            position={maximized ? { x: 0, y: 36 } : position}
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
            {/* macOS Title Bar */}
            <div className="flex justify-center items-center px-4 h-11 cursor-move absolute top-0 left-0 right-0 z-10 border-b border-white/10 bg-white/5">
                {/* Traffic Light Window Controls - Positioned Absolute Left */}
                <div className="flex gap-[8px] absolute left-4">
                    {/* Close - Red */}
                    <button
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:brightness-110 active:brightness-90 transition-all"
                    />
                    {/* Minimize - Yellow */}
                    <button
                        onClick={() =>
                            setIsMinimized((prev) => ({
                                ...prev,
                                [title]: true,
                            }))
                        }
                        className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] hover:brightness-110 active:brightness-90 transition-all"
                    />
                    {/* Maximize - Green */}
                    <button
                        onClick={() =>
                            setIsMaximized((prev) => ({
                                ...prev,
                                [title]: !prev[title],
                            }))
                        }
                        className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] hover:brightness-110 active:brightness-90 transition-all"
                    />
                </div>

                {/* Centered App Title */}
                <span className="font-semibold text-[13px] tracking-wide text-gray-300 select-none">
                    {title}
                </span>
            </div>

            {/* App Content Area */}
            <div className="absolute top-11 bottom-0 left-0 right-0 bg-[#1e1e1e]/60 overflow-auto box-border rounded-b-xl">
                {children}
            </div>
        </Rnd>
    );
}
