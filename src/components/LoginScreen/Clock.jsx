import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateTime = () => setTime(new Date());

        updateTime();

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
            clearInterval(window.minuteInterval);
        };
    }, []);

    const day = time.getDate().toString().padStart(2, "0");
    const month = time.toLocaleString("default", { month: "short" });
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");

    const dateTimeStr = `${day} ${month} ${hours}:${minutes}`;

    return (
        <div className="text-white text-xl font-mono text-center">
            {dateTimeStr}
        </div>
    );
}

export default Clock;
