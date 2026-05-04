import React, { useState, useRef, useEffect } from "react";

export default function TerminalApp() {
    const [lines, setLines] = useState([
        { text: "Last login: " + new Date().toLocaleString(), type: "system" },
        {
            text: "Welcome to Viral's Portfolio Zsh Shell v2.6.0",
            type: "output",
        },
        { text: "Type 'help' to see available commands.", type: "output" },
    ]);
    const [input, setInput] = useState("");
    const terminalEndRef = useRef(null);

    // Auto-scroll to bottom whenever lines update
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [lines]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output = "";

        switch (trimmedCmd) {
            case "":
                setLines((prev) => [
                    ...prev,
                    { text: `~ %`, type: "input", raw: "" },
                ]);
                return;
            case "help":
                output =
                    "Available commands:\n  help      - Show this list\n  whoami    - Brief overview of my profile\n  skills    - List core technical stacks\n  metrics   - CP & Academic achievements\n  social    - Professional handles\n  clear     - Wipe terminal history";
                break;
            case "whoami":
                output =
                    "Viral Bhoi [3rd Year Computer Engineering @ BVM]\nSDE & ML Intern candidate focused on algorithmic efficiency and data-driven full-stack builds.";
                break;
            case "metrics":
                output =
                    "Competitive Programming & Academics:\n  • ICPC Asia West Amritapuri 2025 Regionalist\n  • LeetCode: Knight (1905 Peak, Top 4.23%)\n  • CodeChef: 1625 (3-Star)\n  • GATE 2026: AIR 5057 (CS) | AIR 9596 (DA)\n  • Current CPI: 8.37 / 10.0";
                break;
            case "skills":
                output =
                    "Core Stack:\n  • Languages: C++, Python, JavaScript, Java, C\n  • Backend: Node.js, Express, FastAPI, PostgreSQL, MongoDB\n  • Frontend: React, TailwindCSS\n  • ML: MobileNetV2, Image Classification";
                break;
            case "social":
                output =
                    "Handles:\n  GitHub:   github.com/viralbhoi\n  LinkedIn: linkedin.com/in/viralbhoi\n  LeetCode: leetcode.com/u/viralbhoi/";
                break;
            case "clear":
                setLines([]);
                return;
            default:
                output = `zsh: command not found: ${trimmedCmd}`;
        }

        setLines((prev) => [
            ...prev,
            { text: `~ % ${cmd}`, type: "input", raw: cmd },
            { text: output, type: "output" },
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleCommand(input);
            setInput("");
        }
    };

    return (
        <div
            className="w-full h-full bg-[#000000] text-[#f2f2f2] p-4 font-mono text-[14px] leading-relaxed overflow-y-auto selection:bg-gray-700"
            onClick={() => document.getElementById("terminal-input")?.focus()}
        >
            {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap mb-1">
                    <span
                        className={
                            line.type === "input"
                                ? "text-blue-400 font-bold"
                                : line.type === "system"
                                  ? "text-gray-500 italic"
                                  : "text-gray-200"
                        }
                    >
                        {line.text}
                    </span>
                </div>
            ))}

            {/* Current prompt */}
            <div className="flex items-center">
                <span className="text-blue-400 font-bold">~ %&nbsp;</span>
                <input
                    id="terminal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent text-[#f2f2f2] flex-1 outline-none border-none font-mono"
                    autoFocus
                    autoComplete="off"
                />
            </div>
            <div ref={terminalEndRef} />
        </div>
    );
}
