import React, { useState } from "react";

function ProfileApp() {
    const tabs = [
        { name: "CodeForces", url: "https://codeforces.com/profile/viralbhoi" },
        { name: "LeetCode", url: "https://leetcode.com/u/viralbhoi/" },
        { name: "CodeChef", url: "https://www.codechef.com/users/viral_bhoi" },
        { name: "GitHub", url: "https://github.com/viralbhoi" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/viralbhoi/" },
        { name: "YouTube", url: "https://www.youtube.com/@viral_bhoi" },
        { name: "X", url: "https://x.com/coder211005" },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full h-screen bg-gray-100 flex flex-col">
            <div className="bg-gray-300 border-b border-gray-400 flex flex-col">
                <div
                    className="flex items-center space-x-1 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth px-2 whitespace-nowrap"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`cursor-pointer px-4 py-2 -mb-px border-t border-l border-r rounded-t-md transition-colors text-black
              ${
                  activeTab === index
                      ? "bg-white border-gray-300"
                      : "bg-gray-200 border-gray-200 hover:bg-gray-300"
              }`}
                        >
                            {tab.name}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="border-1 border-gray-800/30 rounded-md font-mono font-light text-gray-800 bg-gray-300/90 p-1 mx-3 text-md mt-0">
                    {" "}
                    {tabs[activeTab].url}
                </div>
            </div>

            <div className="flex-1">
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-black font-mono">
                    <p className="text-center px-4 w-1/2">
                        {" "}
                        {tabs[activeTab].name} does not allow embedding their
                        site in an iframe due to security policies. Please click
                        the Button to visit my profile directly.
                    </p>
                    <button className="bg-blue-700 text-white rounded-2xl p-4 mt-3">
                        {" "}
                        <a href={tabs[activeTab].url} target="_blank">
                            {" "}
                            Redirect{" "}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileApp;
