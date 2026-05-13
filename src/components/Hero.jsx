
import "bootstrap/dist/css/bootstrap.min.css";
import GradientText from "./GradientText/GradientText.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { MdShareLocation } from "react-icons/md";
import { TbCircleDotted } from "react-icons/tb";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

import GlareHover from "./GlareHover/GlareHover";



export default function Rakib() {
    return (
        <section id="home" className="hero">
            <div className="text-light min-vh-100 d-flex align-items-center" >
                <Container>
                    <Row className="align-items-center">
                        {/* Left Side - Text */}
                        <Col md={7}>
                            <p className="hello">👋 HELLO, I'M</p>
                            <h1 className="fw-bold">Rakib Hosain</h1>
                            <h3 className="text-success d-flex align-items-center gap-2">
                                <span className="A">A</span>
                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={10}
                                    direction="horizontal"
                                    pauseOnHover={true}
                                    yoyo={true}
                                    showBorder={false}
                                    showCursor
                                    className="gradient-typewriter fw-bold">
                                    <Typewriter
                                        words={[
                                            " Full Stack Developer",
                                            " PHP & Laravel Expert",
                                            " JavaScript & React.js with API Integration",
                                            " Building Scalable Web Applications",
                                            " Crafting Modern & Responsive UI",
                                            " Clean Code & Performance Focused",
                                            " Building Dynamic UI with React.js",
                                        ]}
                                        loop={true}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </GradientText>
                            </h3>

                            <p className="mt-3">
                                Full Stack Developer specializing in React.js and Laravel, focused on building fast, secure, and scalable web solutions.
                            </p>

                            {/* Experience Badges */}
                            <div className="d-flex gap-4 mt-3 align-items-center flex-wrap experience">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="rotate-icon icon-box">
                                        <TbCircleDotted color="var(--bs-success)" size={20} />
                                    </span>
                                    <p className="mb-0">2+ Years Experience</p>
                                </div>

                                <div className="d-flex align-items-center gap-2">
                                    <span className="rotate-icon icon-box">
                                        <TbCircleDotted color="var(--bs-blue)" size={20} />
                                    </span>
                                    <p className="mb-0">12+ Projects Completed</p>
                                </div>

                                <div className="d-flex align-items-center gap-2">
                                    <span className="rotate-icon icon-box">
                                        <TbCircleDotted color="var(--bs-purple)" size={20} />
                                    </span>
                                    <p className="mb-0">Remote Friendly</p>
                                </div>
                            </div>



                            {/* Buttons */}
                            <div className="mt-4 d-flex gap-3">
                                <button className="hro-btn">
                                    <GlareHover
                                        width="230px"
                                        height="100%"
                                        background="linear-gradient(120deg, #4e54c8, #8f94fb)"
                                        borderRadius="8px"
                                        borderColor="rgba(99, 102, 241, 0.6)"
                                        glareColor="#ffffff"
                                        className="p-2 d-block expolor-btn text-white"
                                    >

                                        <MdOutlineCloudDownload size={20} className="me-2" />
                                        Download Resume
                                    </GlareHover>
                                </button>
                                <button className="hro-btn">
                                    <GlareHover
                                        width="230px"
                                        height="100%"
                                        background="rgba(99, 102, 241, 0.1)"
                                        borderRadius="8px"
                                        borderColor="rgba(99, 102, 241, 0.6)"
                                        glareColor="#ffffff"
                                        className="p-2 d-block expolor-btn text-white"
                                    >
                                        <MdOutlineVisibility size={20} className="me-2" />
                                        Explore My Work
                                    </GlareHover>
                                </button>
                                <button className="hro-btn">
                                    <GlareHover
                                        width="230px"
                                        height="100%"
                                        background="rgba(99, 102, 241, 0.1)"
                                        borderRadius="8px"
                                        borderColor="rgba(99, 102, 241, 0.6)"
                                        glareColor="#ffffff"
                                        className="p-2 d-block expolor-btn text-white"
                                    >
                                        <MdOutlineChat size={20} className="me-2" />
                                        Let's Talk
                                    </GlareHover>
                                </button>
                            </div>


                            {/* Social Links */}
                            <div className="social-container mt-4">
                                <a href="#"><FaGithub size={30} className="github" /> github</a>
                                <a href="#"><FiLinkedin size={40} className="linkedin" /> linkedIn</a>
                            </div>
                        </Col>

                        {/* Right Side - Image */}
                        <Col md={5} className="text-center right-col">
                            <img
                                src="/src/assets/hero.png"
                                alt="Rakib Hosain"
                                className="hero-imageV2"
                            />
                            <div className="mt-3">
                                <span className="badge-work">Available for Work</span>
                                <p className="mt-2 location"><span className="l-icon"><MdShareLocation size={25} /></span> Dhaka, Bangladesh</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}
