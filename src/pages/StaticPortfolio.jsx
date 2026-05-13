import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Github,
    Linkedin,
    Youtube,
    Twitter,
    FileText,
    Trophy,
    ArrowUpRight,
    Send,
    Mail,
    Phone,
    Sun,
    Moon,
    Code,
    Database,
    Layout,
    Diamond,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";
import profileImage from "../assets/profile.jpeg";

const StaticPortfolio = ({ onBack }) => {
    // --- Resume Link ---

    const RESUME_LINK =
        "https://drive.google.com/file/d/1KX9zQ8GlEuxEbsw5h8Tfz5kvadxJqtyk/view?usp=sharing";
    // --- Theme State ---
    const [theme, setTheme] = useState("dark");
    const isDark = theme === "dark";
    const toggleTheme = () => setTheme(isDark ? "light" : "dark");

    // --- Form & Toast State ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
    });
    const [toast, setToast] = useState({ message: "", type: "" });
    const [isSending, setIsSending] = useState(false);

    // --- Handlers ---
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast({ message: "", type: "" }), 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        // Prepare Web3Forms Data
        const data = new FormData();
        data.append("access_key", "6a5c58ee-1c04-473f-bae4-46ab6528d2ef");
        data.append("name", formData.name || "Portfolio Visitor");
        data.append("email", formData.email);
        data.append(
            "subject",
            formData.subject || "New Message from Portfolio",
        );
        // Combine mobile and message into the final email body
        data.append(
            "message",
            `Mobile Number: ${formData.mobile || "Not provided"}\n\nMessage:\n${formData.message}`,
        );

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });
            const result = await res.json();

            if (result.success) {
                handleToast("Message Sent Successfully!", "success");
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    subject: "",
                    message: "",
                });
            } else {
                handleToast("Delivery Failed. Please try again.", "error");
            }
        } catch (error) {
            handleToast("Network Offline. Check your connection.", "error");
        } finally {
            setIsSending(false);
        }
    };

    // Exact 5-Color Palette Mapping
    const c = isDark
        ? {
              bg: "#00171f",
              card: "#003459",
              text: "#ffffff",
              textMuted: "#007ea7",
              accent: "#00a8e8",
              border: "#003459",
          }
        : {
              bg: "#ffffff",
              card: "#f4f9fc",
              text: "#00171f",
              textMuted: "#003459",
              accent: "#007ea7",
              border: "#e0eef5",
          };

    const sectionRise = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    return (
        <div
            style={{ backgroundColor: c.bg, color: c.text }}
            className="min-h-screen font-sans transition-colors duration-500 overflow-x-hidden selection:bg-[#00a8e8]/30 relative"
        >
            {/* --- Toast Notification System --- */}
            <AnimatePresence>
                {toast.message && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        style={{
                            backgroundColor: c.card,
                            border: `1px solid ${c.border}`,
                        }}
                        className="fixed top-24 right-6 z-[60] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md"
                    >
                        {toast.type === "success" ? (
                            <CheckCircle2
                                className="text-green-500"
                                size={20}
                            />
                        ) : (
                            <AlertCircle className="text-red-500" size={20} />
                        )}
                        <span className="text-sm font-bold tracking-wide">
                            {toast.message}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Top Navigation --- */}
            <nav
                style={{
                    backgroundColor: isDark ? `${c.bg}E6` : `${c.bg}E6`,
                    borderBottom: `1px solid ${c.border}`,
                }}
                className="fixed top-0 w-full z-50 backdrop-blur-md"
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div
                        className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer"
                        onClick={onBack}
                    >
                        Viral<span style={{ color: c.accent }}>.</span>
                    </div>
                    <div className="hidden md:flex gap-8 text-xs md:text-sm font-bold tracking-wide">
                        {["Experience", "Education", "Projects", "Contact"].map(
                            (nav) => (
                                <a
                                    key={nav}
                                    href={`#${nav.toLowerCase()}`}
                                    className="hover:-translate-y-0.5 transition-transform"
                                    style={{ color: c.text }}
                                >
                                    {nav}
                                </a>
                            ),
                        )}
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:scale-110 transition-transform"
                        style={{ color: c.accent }}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-28">
                {/* --- 1. Hero Section --- */}
                <motion.section
                    variants={sectionRise}
                    initial="initial"
                    animate="whileInView"
                    className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-8"
                >
                    <div className="md:w-[55%] space-y-5">
                        <h3 className="text-xl font-bold tracking-wide">
                            Hello, It's Me
                        </h3>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            Viral Bhoi
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold">
                            And I'm a{" "}
                            <span style={{ color: c.accent }}>
                                Full-Stack Engineer
                            </span>
                        </h2>
                        <p
                            style={{ color: c.textMuted }}
                            className="text-base leading-relaxed max-w-lg font-medium"
                        >
                            Computer Engineering student at BVM. Focused on
                            building scalable PERN Stack systems and Machine
                            Learning architectures.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <SocialIcon
                                icon={<Linkedin size={18} />}
                                link="https://linkedin.com/in/viralbhoi/"
                                c={c}
                            />
                            <SocialIcon
                                icon={<Github size={18} />}
                                link="https://github.com/viralbhoi"
                                c={c}
                            />
                            <SocialIcon
                                icon={<Twitter size={18} />}
                                link="https://x.com/coder211005"
                                c={c}
                            />
                        </div>

                        <div className="pt-4">
                            {/* Insert your Google Drive Link Here in the href */}
                            <a
                                href={RESUME_LINK}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    backgroundColor: c.accent,
                                    boxShadow: `0 8px 25px -5px ${c.accent}80`,
                                }}
                                className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all"
                            >
                                <FileText size={18} /> Download CV
                            </a>
                        </div>
                    </div>

                    {/* Glowing Hexagon Profile */}
                    <div className="md:w-[45%] flex justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                style={{
                                    backgroundColor: c.accent,
                                    filter: "blur(60px)",
                                }}
                                className="w-56 h-56 md:w-72 md:h-72 rounded-full opacity-40"
                            ></div>
                        </div>
                        <img
                            src={profileImage}
                            alt="Viral Bhoi"
                            className="relative z-10 w-72 h-72 md:w-[380px] md:h-[380px] object-cover"
                            style={{
                                clipPath:
                                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                border: `4px solid ${c.accent}`,
                            }}
                        />
                    </div>
                </motion.section>

                {/* --- 2. ICPC Standalone Highlight --- */}
                <motion.section
                    variants={sectionRise}
                    initial="initial"
                    whileInView="whileInView"
                >
                    <div
                        style={{
                            backgroundColor: c.card,
                            border: `1px solid ${c.border}`,
                        }}
                        className="rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl"
                    >
                        <Trophy
                            size={120}
                            style={{ color: c.accent }}
                            className="opacity-80 drop-shadow-[0_0_15px_rgba(0,168,232,0.5)]"
                        />
                        <div className="space-y-4 relative z-10">
                            <span
                                style={{ color: c.accent }}
                                className="font-bold text-xs uppercase tracking-widest"
                            >
                                Elite Competitive Programming
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black">
                                ICPC Amritapuri Regionalist
                            </h2>

                            <p
                                style={{ color: c.textMuted }}
                                className="text-lg leading-relaxed font-medium max-w-2xl"
                            >
                                Achieved All India Rank 256 at the 2025 Onsite
                                Regionals. Secured Rank 35 at the Mysuru Site
                                with Team Code Optimizer.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* --- 3. Coding Profiles --- */}
                <motion.section
                    variants={sectionRise}
                    initial="initial"
                    whileInView="whileInView"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ServiceCard
                            c={c}
                            icon={<Code />}
                            title="LeetCode"
                            desc="Top 4.22% of users globally."
                            highlight="Knight (1905)"
                            link="https://leetcode.com/u/viralbhoi/"
                        />
                        <ServiceCard
                            c={c}
                            icon={<Layout />}
                            title="Codeforces"
                            desc="Consistent Div 2/3/4 participant."
                            highlight="Pupil (1220)"
                            link="https://codeforces.com/profile/viralbhoi"
                        />
                        <ServiceCard
                            c={c}
                            icon={<Database />}
                            title="CodeChef"
                            desc="Solved 1600+ DSA problems."
                            highlight="3★ (1625)"
                            link="https://www.codechef.com/users/viralbhoi"
                        />
                    </div>
                </motion.section>

                {/* --- 4. Experience (60:40 Split) --- */}
                <motion.section
                    id="experience"
                    variants={sectionRise}
                    initial="initial"
                    whileInView="whileInView"
                    className="flex flex-col md:flex-row gap-12 border-t pt-16"
                    style={{ borderColor: c.border }}
                >
                    <div
                        className="md:w-[60%] border-l-[3px] ml-2 space-y-10"
                        style={{ borderColor: isDark ? "#334155" : "#cbd5e1" }}
                    >
                        <LinkedInTimelineNode
                            isDark={isDark}
                            c={c}
                            title="React.js Intern"
                            subtitle="Tech Elecon Private Limited"
                            date="May 2025 – Jun 2025"
                            text="Built reusable React.js components for production use. Collaborated via Git/GitHub, contributing to code reviews and version control. Implemented and tested features across multiple development iterations."
                        />
                    </div>
                    <div className="md:w-[40%] space-y-6 md:pl-8">
                        <h2 className="text-4xl font-black">
                            Work{" "}
                            <span style={{ color: c.accent }}>Experience</span>
                        </h2>
                    </div>
                </motion.section>

                {/* --- 5. Education (40:60 Split) --- */}
                <motion.section
                    id="education"
                    variants={sectionRise}
                    initial="initial"
                    whileInView="whileInView"
                    className="flex flex-col md:flex-row gap-12 border-t pt-16"
                    style={{ borderColor: c.border }}
                >
                    <div className="md:w-[40%] space-y-6 md:pr-8">
                        <h2 className="text-4xl font-black">
                            Academic{" "}
                            <span style={{ color: c.accent }}>Journey</span>
                        </h2>
                        <div
                            style={{
                                backgroundColor: c.card,
                                border: `1px solid ${c.border}`,
                            }}
                            className="p-4 rounded-xl inline-block shadow-sm mt-4"
                        >
                            <span
                                className="block text-xs font-bold uppercase tracking-widest mb-1"
                                style={{ color: c.textMuted }}
                            >
                                National Exams
                            </span>
                            <span className="font-bold text-sm block">
                                GATE CS (2026) AIR: 5075
                            </span>
                            <span className="font-bold text-sm block">
                                GATE DA (2026) AIR: 9596
                            </span>
                        </div>
                    </div>
                    <div
                        className="md:w-[60%] border-l-[3px] ml-2 space-y-10"
                        style={{ borderColor: isDark ? "#334155" : "#cbd5e1" }}
                    >
                        <LinkedInTimelineNode
                            isDark={isDark}
                            c={c}
                            title="Bachelor of Technology"
                            subtitle="Birla Vishvakarma Mahavidhyalaya"
                            date="Jul 2023 – Present"
                            text="CGPA: 8.31/10.00. Coursework: Data Structures & Algorithms, Object Oriented Programming, DBMS, and Operating Systems."
                        />
                    </div>
                </motion.section>

                {/* --- 6. Volunteering / Leadership (40:60 Split) --- */}
                <motion.section
                    variants={sectionRise}
                    initial="initial"
                    whileInView="whileInView"
                    className="flex flex-col md:flex-row gap-12 border-t pt-16"
                    style={{ borderColor: c.border }}
                >
                    <div className="md:w-[40%] space-y-6 md:pr-8">
                        <h2 className="text-4xl font-black">
                            Leadership &{" "}
                            <span style={{ color: c.accent }}>Community</span>
                        </h2>
                        <p
                            style={{ color: c.textMuted }}
                            className="text-base leading-relaxed font-medium"
                        >
                            Actively contributing to the coding community
                            through problem setting and chapter leadership.
                        </p>
                    </div>
                    <div
                        className="md:w-[60%] border-l-[3px] ml-2 space-y-10"
                        style={{ borderColor: isDark ? "#334155" : "#cbd5e1" }}
                    >
                        <LinkedInTimelineNode
                            isDark={isDark}
                            c={c}
                            title="Vice President"
                            subtitle="CodeChef BVM Chapter"
                            date="Dec 2025 - Present"
                            text="Leadership and Teamwork"
                        />
                        <LinkedInTimelineNode
                            isDark={isDark}
                            c={c}
                            title="Problem setter"
                            subtitle="CodeChef BVM Chapter"
                            date="Dec 2024 - Dec 2025"
                            text="Problem Analysis, Problem Solving and Teamwork"
                        />
                    </div>
                </motion.section>

                {/* --- 7. Skills (Resume Data) --- */}
                <motion.section
                    id="skills"
                    variants={sectionRise}
                    initial="initial"
                    whileInView="whileInView"
                    className="border-t pt-16"
                    style={{ borderColor: c.border }}
                >
                    <h2 className="text-4xl font-black mb-10 text-center">
                        Technical{" "}
                        <span style={{ color: c.accent }}>Skills</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SkillBox
                            c={c}
                            title="Programming Languages"
                            skills={["C++", "C", "SQL", "JavaScript", "Python"]}
                        />

                        <SkillBox
                            c={c}
                            title="Frameworks & Libraries"
                            skills={[
                                "React",
                                "HTML",
                                "CSS",
                                "Tailwind CSS",
                                "Bootstrap",
                                "Node",
                            ]}
                        />

                        <SkillBox
                            c={c}
                            title="Databases & Tools"
                            skills={["PostgreSQL", "MySQL", "Git", "GitHub"]}
                        />
                    </div>
                </motion.section>

                {/* --- 8. Projects (Divided into 3 Categories) --- */}
                <motion.section
                    id="projects"
                    variants={sectionRise}
                    initial="initial"
                    whileInView="whileInView"
                    className="border-t pt-16"
                    style={{ borderColor: c.border }}
                >
                    <h2 className="text-4xl font-black text-center mb-16">
                        Featured{" "}
                        <span style={{ color: c.accent }}>Projects</span>
                    </h2>

                    <div className="space-y-16">
                        <ProjectCategory
                            c={c}
                            title="1. Fullstack"
                            projects={[
                                {
                                    name: "Sahayak",
                                    subtitle: "Hyperlocal job platform (PERN)",
                                    link: "https://github.com/viralbhoi/Sahayak",
                                },
                                {
                                    name: "Alumni Management System",
                                    subtitle: "Institute portal (PERN)",
                                    link: "https://github.com/viralbhoi/alumni-management-system",
                                },
                                {
                                    name: "Local Finder",
                                    subtitle: "PHP + MySQL",
                                    link: "https://github.com/viralbhoi/LocalFinder/tree/main/CurrentVersion",
                                },
                            ]}
                        />

                        <ProjectCategory
                            c={c}
                            title="2. Machine Learning"
                            projects={[
                                {
                                    name: "Waste Image Classification",
                                    subtitle: "MobileNetV2 + FastAPI (79% Acc)",
                                    link: "https://github.com/viralbhoi/WASTE_IMAGE_CLASSIFICATION",
                                },
                                {
                                    name: "Smartphone Addiction Prediction",
                                    subtitle: "Predictive ML Model",
                                    link: "https://github.com/viralbhoi/smartphone_addiction_project",
                                },
                            ]}
                        />

                        <ProjectCategory
                            c={c}
                            title="3. Frontend"
                            projects={[
                                {
                                    name: "TravelMate",
                                    subtitle: "React UI Interface",
                                    link: "https://github.com/viralbhoi/TravelMate",
                                },
                                {
                                    name: "Smart React Calendar",
                                    subtitle: "Event Management UI",
                                    link: "https://github.com/viralbhoi/Smart-Calendar",
                                },
                                {
                                    name: "Zerodha Clone",
                                    subtitle: "Fintech Dashboard UI",
                                    link: "https://github.com/viralbhoi/Zerodha-Clone",
                                },
                            ]}
                        />
                    </div>
                </motion.section>

                {/* --- 9. Contact Form (Functional via Web3Forms) --- */}
                <motion.section
                    id="contact"
                    variants={sectionRise}
                    initial="initial"
                    whileInView="whileInView"
                    style={{ backgroundColor: c.card, borderRadius: "2rem" }}
                    className="p-10 md:p-16 shadow-2xl relative"
                >
                    <h2 className="text-4xl font-black text-center mb-10">
                        Contact <span style={{ color: c.accent }}>Me!</span>
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Full Name"
                                style={{
                                    backgroundColor: c.bg,
                                    color: c.text,
                                    borderColor: c.border,
                                }}
                                className="w-full p-4 rounded-xl border focus:outline-none focus:border-[#00a8e8] transition-colors font-medium text-sm"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email Address"
                                style={{
                                    backgroundColor: c.bg,
                                    color: c.text,
                                    borderColor: c.border,
                                }}
                                className="w-full p-4 rounded-xl border focus:outline-none focus:border-[#00a8e8] transition-colors font-medium text-sm"
                            />
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number (Optional)"
                                style={{
                                    backgroundColor: c.bg,
                                    color: c.text,
                                    borderColor: c.border,
                                }}
                                className="w-full p-4 rounded-xl border focus:outline-none focus:border-[#00a8e8] transition-colors font-medium text-sm"
                            />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Email Subject"
                                style={{
                                    backgroundColor: c.bg,
                                    color: c.text,
                                    borderColor: c.border,
                                }}
                                className="w-full p-4 rounded-xl border focus:outline-none focus:border-[#00a8e8] transition-colors font-medium text-sm"
                            />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message"
                            rows="5"
                            style={{
                                backgroundColor: c.bg,
                                color: c.text,
                                borderColor: c.border,
                            }}
                            className="w-full p-4 rounded-xl border focus:outline-none focus:border-[#00a8e8] transition-colors font-medium text-sm"
                        />
                        <div className="flex justify-center pt-2">
                            <button
                                type="submit"
                                disabled={isSending}
                                style={{
                                    backgroundColor: c.accent,
                                    boxShadow: `0 8px 25px -5px ${c.accent}80`,
                                }}
                                className="text-white px-10 py-3.5 rounded-full font-bold hover:scale-105 transition-transform tracking-wide flex items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {isSending ? "Sending..." : "Send Message"}{" "}
                                <Send size={18} />
                            </button>
                        </div>
                    </form>
                </motion.section>

                <div className="text-center pb-6">
                    <p
                        style={{ color: c.textMuted }}
                        className="text-xs font-bold uppercase tracking-widest opacity-60"
                    >
                        Copyright © 2026 by Viral Bhoi | All Rights Reserved.
                    </p>
                </div>
            </main>
        </div>
    );
};

// --- Sub-Components ---

const SocialIcon = ({ icon, link, c }) => (
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ border: `2px solid ${c.accent}`, color: c.accent }}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#00a8e8] hover:text-white transition-all shadow-lg hover:shadow-[#00a8e8]/40"
    >
        {icon}
    </a>
);

const ServiceCard = ({ c, icon, title, desc, highlight, link }) => (
    <div
        style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}
        className="p-8 rounded-3xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300"
    >
        <div className="flex justify-center mb-5">
            <div style={{ color: c.accent }}>
                {React.cloneElement(icon, { size: 40 })}
            </div>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p
            style={{ color: c.textMuted }}
            className="text-sm leading-relaxed mb-5 font-medium"
        >
            {desc}
        </p>
        <p style={{ color: c.accent }} className="text-base font-black mb-6">
            {highlight}
        </p>
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: c.accent }}
            className="inline-block text-white px-6 py-2 rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform"
        >
            View Profile
        </a>
    </div>
);

// Unified LinkedIn Style Timeline Node
const LinkedInTimelineNode = ({ isDark, c, title, subtitle, date, text }) => (
    <div className="relative pl-8 pb-4">
        <div
            className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full"
            style={{ backgroundColor: isDark ? "#64748b" : "#94a3b8" }}
        ></div>
        <h4 className="text-xl font-bold mb-0.5">{title}</h4>
        {subtitle && (
            <h5 className="text-base font-bold mb-1" style={{ color: c.text }}>
                {subtitle}
            </h5>
        )}
        <p style={{ color: c.textMuted }} className="text-sm font-medium mb-3">
            {date}
        </p>
        {text && (
            <div className="flex items-start gap-2 text-sm font-bold">
                <Diamond
                    size={14}
                    style={{
                        color: c.textMuted,
                        flexShrink: 0,
                        marginTop: "3px",
                    }}
                />
                <div className="leading-relaxed" style={{ color: c.textMuted }}>
                    {text}
                </div>
            </div>
        )}
    </div>
);

const SkillBox = ({ c, title, skills }) => (
    <div
        style={{ backgroundColor: c.card, border: `1px solid ${c.border}` }}
        className="p-6 rounded-2xl shadow-sm"
    >
        <h4
            style={{ color: c.accent }}
            className="font-bold text-xs uppercase tracking-widest mb-4"
        >
            {title}
        </h4>
        <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
                <span
                    key={s}
                    style={{
                        backgroundColor: c.bg,
                        color: c.text,
                        border: `1px solid ${c.border}`,
                    }}
                    className="px-3 py-1 text-xs font-bold rounded-lg"
                >
                    {s}
                </span>
            ))}
        </div>
    </div>
);

const ProjectCategory = ({ c, title, projects }) => (
    <div>
        <h3
            className="text-2xl font-bold mb-6 border-b pb-2 inline-block"
            style={{ borderColor: c.accent }}
        >
            {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
                <a
                    key={p.name}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        backgroundColor: c.card,
                        border: `1px solid ${c.border}`,
                    }}
                    className="group p-6 rounded-2xl shadow-sm hover:shadow-[#00a8e8]/20 transition-all hover:border-[#00a8e8]/50 relative overflow-hidden block"
                >
                    <div className="relative z-10 pr-6">
                        <h4 className="text-lg font-bold mb-1 group-hover:text-[#00a8e8] transition-colors">
                            {p.name}
                        </h4>
                        <p
                            style={{ color: c.textMuted }}
                            className="text-xs font-bold"
                        >
                            {p.subtitle}
                        </p>
                    </div>
                    <ArrowUpRight
                        size={20}
                        style={{ color: c.accent }}
                        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                </a>
            ))}
        </div>
    </div>
);

export default StaticPortfolio;
