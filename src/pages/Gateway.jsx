import React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Zap } from "lucide-react";

function Gateway({ onChoose }) {
    return (
        <div className="h-screen w-screen bg-[#050505] flex flex-col items-center justify-center font-sans text-white overflow-hidden relative">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 text-center mb-12"
            >
                <h1 className="text-5xl font-bold tracking-tight mb-4">
                    Viral Bhoi
                </h1>
                <p className="text-gray-400 text-lg">
                    Select your experience to continue
                </p>
            </motion.div>

            <div className="z-10 flex flex-col md:flex-row gap-6 px-6 max-w-5xl w-full">
                {/* Option 1: Fast/Static Page (Recruiter Optimized) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onChoose("static")}
                    className="flex-1 bg-white/5 border border-white/10 rounded-[2rem] p-8 cursor-pointer group hover:bg-white/10 transition-all backdrop-blur-md"
                >
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <Zap size={24} fill="white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Executive View</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        A high-speed, direct overview of my ICPC achievements,
                        GATE ranks, and MERN/ML projects. Optimized for quick
                        scanning.
                    </p>
                    <div className="text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Launch Summary <span>→</span>
                    </div>
                </motion.div>

                {/* Option 2: OS Interactive View (Engineer Optimized) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onChoose("os")}
                    className="flex-1 bg-white/5 border border-white/10 rounded-[2rem] p-8 cursor-pointer group hover:bg-white/10 transition-all backdrop-blur-md"
                >
                    <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        <Monitor size={24} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Interactive OS</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        An immersive macOS-inspired environment showcasing
                        advanced React state management and custom UI component
                        design.
                    </p>
                    <div className="text-purple-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Enter OS <span>→</span>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Footer Note */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 flex items-center gap-2 text-gray-500 text-sm"
            >
                <Smartphone size={14} />
                <span>Mobile view available for both experiences</span>
            </motion.div>
        </div>
    );
}

export default Gateway;
