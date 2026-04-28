import { useState, useEffect } from "react";
import AuroraText from "../GradientText/AuroraText";

const CounterUpManual = ({ end, duration = 2000, suffix = "+", label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(percentage * end));

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return (
        <div className="stat-box p-4 stats-card text-center me-4">
            <h2>
                <AuroraText>{count}{suffix}</AuroraText>
            </h2>
            <p className="text-white">{label}</p>
        </div>
    );
};

export default CounterUpManual;