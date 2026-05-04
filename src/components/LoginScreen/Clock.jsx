import React, { useState, useEffect } from "react";

function Clock({ mode }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateTime = () => setTime(new Date());
        const msUntilNextMinute =
            60000 -
            (new Date().getSeconds() * 1000 + new Date().getMilliseconds());
        const timeout = setTimeout(() => {
            updateTime();
            const interval = setInterval(updateTime, 60000);
            window.minuteInterval = interval;
        }, msUntilNextMinute);

        return () => {
            clearTimeout(timeout);
            if (window.minuteInterval) clearInterval(window.minuteInterval);
        };
    }, []);

    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");

    // Desktop Format: "Fri 1 May 16:19"
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
        time.getDay()
    ];
    const day = time.getDate();
    const month = time.toLocaleString("default", { month: "short" });
    const desktopStr = `${dayName} ${day} ${month} ${hours}:${minutes}`;

    if (mode === "timeOnly") {
        return (
            <span className="text-[16px] font-semibold tracking-tight">
                {hours}:{minutes}
            </span>
        );
    }

    return (
        <span className="text-[13px] font-medium tracking-wide">
            {desktopStr}
        </span>
    );
}

export default Clock;
