import React, { useState } from "react";

function MailApp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [toast, setToast] = useState({ message: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast({ message: "", type: "" }), 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data,
        })
            .then(async (res) => {
                const result = await res.json();
                if (result.success) {
                    handleToast("Message sent successfully!", "success");
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                } else {
                    handleToast(
                        "Something went wrong. Please try again.",
                        "error"
                    );
                }
            })
            .catch(() =>
                handleToast("Network error. Please try again.", "error")
            );
    };

    return (
        <div className="w-full min-h-screen bg-gray-100/30 flex flex-col items-center justify-start relative overflow-y-auto">
            {/* Toast Notification */}
            {toast.message && (
                <div
                    className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white font-mono font-semibold shadow-lg transition-opacity z-50 ${
                        toast.type === "success"
                            ? "bg-green-500/40"
                            : "bg-red-500/40"
                    }`}
                >
                    {toast.message}
                </div>
            )}

            <div className="w-full min-h-screen bg-gray-100 border border-gray-400 rounded-lg shadow-md p-6 text-black">
                <h2 className="text-2xl font-mono font-semibold mb-10 text-center">
                    Contact Me
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value="6a5c58ee-1c04-473f-bae4-46ab6528d2ef"
                    />
                    <input
                        type="hidden"
                        name="subject"
                        value={
                            formData.subject || "New Contact Form Submission"
                        }
                    />

                    <div className="flex flex-col md:flex-row items-center space-x-3">
                        <label htmlFor="name" className="w-full md:w-1/12">
                            Your Name:{" "}
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="font-mono w-full md:w-11/12 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-x-3">
                        <label htmlFor="email" className="w-full md:w-1/12">
                            Your Email:{" "}
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="font-mono w-full md:w-11/12 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-x-3">
                        <label htmlFor="subject" className="w-full md:w-1/12">
                            Subject:{" "}
                        </label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="font-mono w-full md:w-11/12 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-x-3">
                        <label
                            htmlFor="message"
                            className="w-full md:w-1/12 md:pt-2"
                        >
                            Message:{" "}
                        </label>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={10}
                            className="font-mono w-full md:w-11/12 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-700 text-white rounded-2xl py-3 hover:bg-blue-800 transition-colors font-mono font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MailApp;
