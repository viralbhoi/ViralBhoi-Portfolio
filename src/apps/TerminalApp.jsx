import React, { useState, useRef, useEffect } from "react";

export default function TerminalApp() {
    const [lines, setLines] = useState([
        { text: "Welcome to Viral's portfolio terminal!", type: "output" },
        { text: "Type 'help' to get started.", type: "output" },
    ]);
    const [input, setInput] = useState("");
    const terminalEndRef = useRef(null);

    const handleCommand = (cmd) => {
        let output = "";

        switch (cmd.trim()) {
            case "":
                return;
            case "help":
                output = "Available commands:\nhelp, about, date, clear";
                break;
            case "about":
                output =
                    "This terminal is part of Viral’s portfolio — built with React, Tailwind & passion 💻";
                break;
            case "date":
                output = new Date().toString();
                break;
            case "clear":
                setLines([]);
                return;
            default:
                output = `Command not found: ${cmd}`;
        }

        setLines((prev) => [
            ...prev,
            { text: `guest@portfolio:~$ ${cmd}`, type: "input" },
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
            className="w-full h-full bg-black text-white p-3 font-mono text-md overflow-y-auto"
            onClick={() => document.getElementById("terminal-input")?.focus()}
        >
            {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap leading-relaxed">
                    <span
                        className={
                            line.type === "input"
                                ? "text-green-400"
                                : "text-white"
                        }
                    >
                        {line.text}
                    </span>
                </div>
            ))}

            {/* Current command prompt */}
            <div className="flex">
                <span className="text-green-400">guest@portfolio:~$&nbsp;</span>
                <input
                    id="terminal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-black text-white flex-1 outline-none border-none font-mono text-md"
                    autoFocus
                />
            </div>
            <div ref={terminalEndRef} />
        </div>
    );
}
