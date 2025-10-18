import React from "react";
import profileImage from "../assets/profile.jpeg";

function IntroductionApp() {
    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row justify-center bg-white pb-5">
            {/* Profile Image */}
            <div className="w-full md:w-[40%]">
                <div
                    className="w-48 h-48 md:w-[30vw] md:h-[30vw] rounded-full bg-center bg-cover bg-no-repeat shadow-xl border-4 border-white m-6 mx-auto"
                    style={{ backgroundImage: `url(${profileImage})` }}
                ></div>
            </div>

            {/* Text Section */}
            <div
                className="md:w-[60%] bg-white/80 backdrop-blur-md rounded-xl shadow-xs p-8 m-4 overflow-y-auto text-black shadow-black "
                style={{ fontFamily: "Inter, sans-serif" }}
            >
                <h1
                    className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 border-l-4 border-black pl-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    Introduction
                </h1>

                <p className="text-md md:text-lg leading-relaxed mb-4">
                    Hello everyone, I’m Viral Bhoi, a Computer Engineering
                    student from Birla Vishwakarma Mahavidyalaya, Anand.
                </p>
                <br />
                <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                    Technology for me is more than a subject — it’s a way to
                    solve, simplify, and empower.
                </blockquote>
                <br />
                <p className="text-md md:text-lg leading-relaxed mb-4">
                    My journey started with curiosity — how a few lines of code
                    can create something real. Over time, that curiosity turned
                    into a passion for problem-solving and building full-stack
                    projects.
                </p>
                <br />
                <p className="text-md md:text-lg leading-relaxed mb-4">
                    I’ve worked across technologies like{" "}
                    <strong>
                        C++, Java, Python, React, Node.js, Express, and
                        PostgreSQL
                    </strong>
                    , always pushing myself to write cleaner, smarter, and more
                    efficient code.
                </p>
                <br />
                <p className="text-md md:text-lg leading-relaxed mb-4">
                    On the competitive programming side, I’ve solved over{" "}
                    <strong>1,000 problems</strong> across platforms like
                    LeetCode, CodeChef, and Codeforces — achieving ratings of{" "}
                    <strong>1625+ on CodeChef</strong> and{" "}
                    <strong>1634 on LeetCode</strong>. Each problem taught me
                    persistence, patience, and precision.
                </p>
                <br />
                <p className="text-md md:text-lg leading-relaxed mb-4">
                    Beyond coding, I’ve taken up leadership roles — from being a{" "}
                    <strong>Problem Setter at CodeChef</strong> to{" "}
                    <strong>leading a Travel Management System</strong> project
                    during my internship at <strong>Tech Elecon</strong>. I love
                    guiding teams, collaborating, and transforming ideas into
                    real applications.
                </p>
                <br />
                <p className="text-md md:text-lg leading-relaxed">
                    Currently, I hold a <strong>CPI of 8.37/10</strong>, and I’m
                    on a journey to combine technical expertise with creativity
                    — to build impactful software and grow into a confident,
                    well-rounded engineer.
                </p>
            </div>
        </div>
    );
}

export default IntroductionApp;
