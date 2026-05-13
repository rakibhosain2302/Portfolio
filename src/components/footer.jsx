import { FaInnosoft } from "react-icons/fa";
import AuroraText from "./GradientText/AuroraText";
import GlareHover from "./GlareHover/GlareHover";
import "../styles/Footer.css"


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div
            className="footer d-flex justify-content-center align-items-center text-light pb-5"
            style={{
                position: "relative"
            }}
        >
            <div className="container custom-card text-center p-5">
                <h5 className="header-title mb-4"><FaInnosoft className="me-2 pop-up-icon" size={18} />Build With Me</h5>

                <h2 className="title">
                    Have A <AuroraText>Project in Mind?</AuroraText>
                </h2>

                <p className="mt-1 subtitle">
                    I create responsive, scalable, and user-friendly web applications
                    using modern technologies like React, Laravel, and JavaScript.
                    Let’s turn your ideas into a powerful digital experience.
                </p>

                <div className="mt-4">
                    <button className="me-3">
                        <GlareHover
                            width="100%"
                            background="rgba(255,255,255,0.08)"
                            borderRadius="20px"
                            borderColor="rgba(255,255,255,0.1)"
                            glareColor="#ffffff"
                            glareOpacity={0.12}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={1200}
                            className="container p-5 text-center"
                        >
                            Hire Me
                        </GlareHover>
                    </button>

                    <button className="btn btn-secondary">
                        Contact Now
                    </button>
                </div>

                <p className="footer-copy mt-5">
                    &copy; {currentYear} Rakib. Crafted with passion and clean code.
                </p>
            </div>
        </div>
    );
}