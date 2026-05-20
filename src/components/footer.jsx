import { FaInnosoft } from "react-icons/fa";
import AuroraText from "./GradientText/AuroraText";
import GlareHover from "./GlareHover/GlareHover";
import { FiLinkedin, FiGithub, FiMail, FiFacebook } from 'react-icons/fi';

import "../styles/Footer.css"


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { icon: FiFacebook, link: '#', label: 'Facebook' },
        { icon: FiLinkedin, link: '#', label: 'LinkedIn' },
        { icon: FiGithub, link: '#', label: 'GitHub' },
        { icon: FiMail, link: '#', label: 'Email' }
    ];

    return (
        <div
            className="footer d-flex justify-content-center align-items-center text-light pb-3"
            style={{
                position: "relative"
            }}
        >
            <div className="container custom-card text-center pt-5">
                <h5 className="header-title mb-4"><FaInnosoft className="me-2 pop-up-icon" size={18} />Build With Me</h5>

                <h1 className="title head-text">
                    Have A <AuroraText>Project in Mind?</AuroraText>
                </h1>

                <p className="mt-1 subtitle p-text">
                    I create responsive, scalable, and user-friendly web applications
                    using modern technologies like React, Laravel, and JavaScript.
                    Let's turn your ideas into a powerful digital experience.
                </p>

                <div className="mt-2 footer-actions">
                    <button className="me-3 fw-bold footer-action-btn">
                        <GlareHover
                            width="150px"
                            height="100%"
                            background="rgba(99, 102, 241, 0.6)"
                            borderRadius="50px"
                            borderColor="rgba(99, 102, 241, 0.6)"
                            glareColor="#ffffff"
                            className="p-2 text-white"
                        >
                            Hire Me
                        </GlareHover>
                    </button>
                    <button className="me-3 fw-bold footer-action-btn">
                        <GlareHover
                            width="150px"
                            height="100%"
                            background="rgba(255,255,255,0.02)"
                            borderRadius="50px"
                            borderColor="rgba(99, 102, 241, 0.6)"
                            glareColor="#ffffff"
                            className="p-2 bTn-text"
                            padding="10px"
                        >
                            Contact Now
                        </GlareHover>
                    </button>
                    <div className="social-links">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.link}
                                    className="social-link neon-icon"
                                    aria-label={social.label}
                                >
                                    <Icon size={22} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="mt-5 footer-bottom-text">© {currentYear} Developed by Rakib Haasan. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};
