import React, { useState } from "react";
import {
    Send,
    Paperclip,
    Inbox,
    Send as SendIcon,
    FileText,
    Trash2,
} from "lucide-react";

function MailApp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [toast, setToast] = useState({ message: "", type: "" });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast({ message: "", type: "" }), 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        const data = new FormData(e.target);

        // Map the visual "From" field to the name and email for the API
        data.set("name", formData.name || "Portfolio Visitor");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data,
        })
            .then(async (res) => {
                const result = await res.json();
                if (result.success) {
                    handleToast("Message Sent", "success");
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                } else {
                    handleToast("Delivery Failed", "error");
                }
            })
            .catch(() => handleToast("Network Offline", "error"))
            .finally(() => setIsSending(false));
    };

    return (
        <div className="w-full h-full flex bg-[#1e1e1e] text-gray-200 font-sans selection:bg-blue-500/30 overflow-hidden relative">
            {/* macOS Notification Toast */}
            {toast.message && (
                <div className="absolute top-4 right-4 z-50 bg-[#2d2d2f]/90 backdrop-blur-md border border-white/10 shadow-2xl rounded-xl px-4 py-3 flex items-center gap-3 animate-in slide-in-from-top-2 fade-in">
                    <div
                        className={`w-2 h-2 rounded-full ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
                    ></div>
                    <span className="text-sm font-medium text-white tracking-wide">
                        {toast.message}
                    </span>
                </div>
            )}

            {/* Sidebar (Hidden on small screens) */}
            <div className="hidden md:flex flex-col w-48 bg-[#1c1c1e] border-r border-white/10 py-4">
                <div className="px-4 text-xs font-semibold text-gray-400 mb-2">
                    Favorites
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-400 cursor-pointer">
                    <Inbox size={16} />
                    <span className="text-sm font-medium">Inbox</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 text-gray-300 hover:bg-white/5 cursor-pointer transition-colors">
                    <SendIcon size={16} />
                    <span className="text-sm">Sent</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 text-gray-300 hover:bg-white/5 cursor-pointer transition-colors">
                    <FileText size={16} />
                    <span className="text-sm">Drafts</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 text-gray-300 hover:bg-white/5 cursor-pointer transition-colors">
                    <Trash2 size={16} />
                    <span className="text-sm">Trash</span>
                </div>
            </div>

            {/* Main Compose Area */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e]">
                <form
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col h-full"
                >
                    {/* Hidden inputs for Web3Forms */}
                    <input
                        type="hidden"
                        name="access_key"
                        value="6a5c58ee-1c04-473f-bae4-46ab6528d2ef"
                    />

                    {/* Toolbar */}
                    <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#252526]">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="text-gray-400 hover:text-white transition-colors p-1"
                                title="Attach file (Disabled)"
                            >
                                <Paperclip size={18} />
                            </button>
                        </div>
                        <button
                            type="submit"
                            disabled={isSending}
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50"
                        >
                            <span className="text-sm font-medium">
                                {isSending ? "Sending..." : "Send"}
                            </span>
                            <Send size={18} />
                        </button>
                    </div>

                    {/* Email Headers */}
                    <div className="flex flex-col">
                        {/* To Field (Read Only) */}
                        <div className="flex items-center px-4 py-2 border-b border-white/5">
                            <span className="w-16 text-gray-400 text-sm">
                                To:
                            </span>
                            <div className="bg-blue-500/20 text-blue-400 text-sm px-2 py-0.5 rounded-md flex items-center gap-1">
                                Viral Bhoi
                            </div>
                        </div>

                        {/* From Field */}
                        <div className="flex items-center px-4 py-2 border-b border-white/5">
                            <span className="w-16 text-gray-400 text-sm">
                                From:
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="visitor@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="flex-1 bg-transparent border-none text-white text-sm outline-none placeholder-gray-600"
                            />
                        </div>

                        {/* Name Field (Optional mapping to help you know who sent it) */}
                        <div className="flex items-center px-4 py-2 border-b border-white/5">
                            <span className="w-16 text-gray-400 text-sm">
                                Name:
                            </span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="flex-1 bg-transparent border-none text-white text-sm outline-none placeholder-gray-600"
                            />
                        </div>

                        {/* Subject Field */}
                        <div className="flex items-center px-4 py-2 border-b border-white/10">
                            <span className="w-16 text-gray-400 text-sm">
                                Subject:
                            </span>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Connecting regarding..."
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="flex-1 bg-transparent border-none text-white text-sm outline-none placeholder-gray-600 font-medium"
                            />
                        </div>
                    </div>

                    {/* Message Body */}
                    <div className="flex-1 p-4">
                        <textarea
                            name="message"
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full h-full bg-transparent border-none text-gray-200 text-sm outline-none resize-none placeholder-gray-600 leading-relaxed"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MailApp;
