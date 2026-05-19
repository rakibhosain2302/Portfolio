import { useEffect, useState } from "react";
import LogoLoop from "./Logo/LogoLoop";
import AuroraText from "./GradientText/AuroraText";
import {
    SiReact, SiLaravel, SiPhp, SiBootstrap, SiJquery,
    SiJavascript, SiMysql, SiHtml5, SiCss, SiUbuntu,
    SiMariadb, SiGithub, SiGithubcopilot, SiSecurityscorecard
} from "react-icons/si";

const techLogos = [
    { node: <SiGithub color="#ffffff" />, title: "GitHub", href: "https://github.com" },
    { node: <SiGithubcopilot color="#ffffff" />, title: "Copilot", href: "https://copilot.microsoft.com" },
    { node: <SiPhp color="#777BB4" />, title: "PHP", href: "https://www.php.net" },
    { node: <SiLaravel color="#FF2D20" />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
    { node: <SiJquery color="#0769AD" />, title: "jQuery", href: "https://jquery.com" },
    { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiMysql color="#4479A1" />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiMariadb color="#003545" />, title: "MariaDB", href: "https://mariadb.org" },
    { node: <SiBootstrap color="#7952B3" />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiHtml5 color="#E34F26" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss color="#1572B6" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiUbuntu color="#E95420" />, title: "Ubuntu", href: "https://ubuntu.com" },
];

export const MySkill = () => {
    const [config, setConfig] = useState({
        logoHeight: 60,
        gap: 60,
        speed: 100,
    });

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;

            if (width < 480) {
                setConfig({ logoHeight: 32, gap: 25, speed: 60 });
            } else if (width < 768) {
                setConfig({ logoHeight: 40, gap: 35, speed: 80 });
            } else if (width < 1024) {
                setConfig({ logoHeight: 50, gap: 50, speed: 90 });
            } else {
                setConfig({ logoHeight: 60, gap: 60, speed: 100 });
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <>
            {/* HEADER */}
            <div className="myskills-section text-white text-center">
                <div className="container">
                    <h1 className="header-title mb-3">
                        <SiSecurityscorecard className="me-2 pop-up-icon" size={20} />
                        My Tech Stack
                    </h1>

                    <h1 className="fw-bold mb-2 head-text">
                        Skills & <AuroraText>Technologies</AuroraText>
                    </h1>

                    <p className="content p-text">
                        Building dynamic and scalable web applications using modern technologies like Laravel, React, and JavaScript.
                    </p>
                </div>
            </div>

            {/* TOP LOOP (LEFT → RIGHT) */}
            <div
                className="skills-loop-wrapper"
                style={{
                    height: "120px",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <LogoLoop
                    logos={techLogos}
                    speed={config.speed}
                    direction="left"
                    logoHeight={config.logoHeight}
                    gap={config.gap}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology stack left loop"
                    renderItem={(item, key) => (
                        <li key={key} className="relative group">
                            <a href={item.href} target="_blank" rel="noreferrer">
                                {item.node}
                            </a>
                            <span className="tooltip">{item.title}</span>
                        </li>
                    )}
                />
            </div>

            {/* BOTTOM LOOP (RIGHT → LEFT / REVERSE) */}
            <div
                className="skills-loop-wrapper"
                style={{
                    height: "120px",
                    overflow: "hidden",
                    position: "relative",
                    marginTop: "20px",
                }}
            >
                <LogoLoop
                    logos={techLogos}
                    speed={config.speed}
                    direction="right"
                    logoHeight={config.logoHeight}
                    gap={config.gap}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology stack right loop"
                    renderItem={(item, key) => (
                        <li key={key} className="relative group">
                            <a href={item.href} target="_blank" rel="noreferrer">
                                {item.node}
                            </a>
                            <span className="tooltip">{item.title}</span>
                        </li>
                    )}
                />
            </div>
        </>
    );
};