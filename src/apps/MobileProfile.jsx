import React from "react";
import {
    Mail,
    Youtube,
    Code,
    Code2,
    Linkedin,
    Github,
    Twitter,
} from "lucide-react";
import profileImage from "../assets/profile.jpeg";

function MobileProfile() {
    const profiles = [
        {
            name: "CodeForces",
            url: "https://codeforces.com/profile/viralbhoi",
            icon: <Code2 />,
        },
        {
            name: "LeetCode",
            url: "https://leetcode.com/u/viralbhoi/",
            icon: <Code />,
        },
        {
            name: "CodeChef",
            url: "https://www.codechef.com/users/viral_bhoi",
            icon: <Code2 />,
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@viral_bhoi",
            icon: <Youtube />,
        },
    ];

    return (
        <div className="flex flex-col bg-gray-950/80 text-white h-screen w-screen justify-center items-center gap-4">
            <div
                style={{ backgroundImage: `url(${profileImage})` }}
                className="h-[20vh] w-[20vh] bg-center bg-cover bg-no-repeat shadow-xl m-6 mx-auto rounded-full"
            ></div>
            <h2 className="text-2xl font-bold">Viral Bhoi</h2>
            <p className="text-center w-[80%]">
                Striving for daily growth and career excellence.
            </p>
            <div className="flex justify-center items-center gap-4">
                <a href="https://www.linkedin.com/in/viralbhoi/">
                    <Linkedin />
                </a>
                <a href="https://github.com/viralbhoi">
                    <Github />
                </a>
                <a href="https://x.com/coder211005">
                    <Twitter />
                </a>
            </div>

            <div className="flex flex-col gap-y-3 px-4 my-2 w-[90%]">
                {profiles.map((profile, idx) => (
                    <a href={profile.url} key={idx}>
                        <div className="flex items-center p-3 bg-gray-700/80 rounded-l-full rounded-r-full">
                            <div className="rounded-full text-white m-1">
                                {profile.icon}
                            </div>
                            <div className="text-white font-medium ml-16">
                                {profile.name}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default MobileProfile;
