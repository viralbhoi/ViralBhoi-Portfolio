import React from "react";

function EducationApp() {
    return (
        <div className="min-h-screen bg-gray-200 px-4 py-6 sm:px-6 md:px-10 lg:px-16 font-sans p-6 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-md border border-[#e6d9c5] p-5 sm:p-6 md:p-8 transition hover:scale-[1.02] hover:shadow-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-black border-b border-dashed border-[#c2b9a7] pb-2">
                    Education
                </h1>

                {/* College Section */}
                <div className="mb-4 sm:mb-5">
                    <h2 className="text-xl sm:text-2xl font-semibold text-black mb-1">
                        Birla Vishvakarma Mahavidyalaya
                    </h2>
                    <h3 className="text-base sm:text-lg font-mono text-black">
                        Bachelor of Technology – Computer Engineering
                    </h3>
                    <h3 className="text-sm italic font-mono text-gray-700 mb-3">
                        Jun 2023 – Jun 2027
                    </h3>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-5 text-sm sm:text-base">
                    <li>
                        <span className="font-semibold">CPI:</span> 8.37 / 10.00
                    </li>
                    <li>
                        <span className="font-semibold">Subjects:</span> DBMS,
                        Computer Networks, OOP with C++, OOP with Java,
                        Operating Systems, Data Structures, Algorithms, Web
                        Technologies
                    </li>
                </ul>

                {/* School Section */}
                <div className="mb-4 sm:mb-5 mt-4 sm:mt-5">
                    <h2 className="text-xl sm:text-2xl font-semibold text-black mb-1">
                        C.V.M. H.S.E.C. (R.P.T.P. Schools)
                    </h2>
                    <h3 className="text-base sm:text-lg font-mono text-black">
                        12th Board
                    </h3>
                    <h3 className="text-sm italic font-mono text-gray-700 mb-3">
                        Mar 2022 – Mar 2023
                    </h3>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-5 text-sm sm:text-base">
                    <li>
                        <span className="font-semibold">Percentile Rank:</span>{" "}
                        99.21 / 100.00
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EducationApp;
