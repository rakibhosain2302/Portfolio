import "bootstrap/dist/css/bootstrap.min.css";
import DotGrid from "./Dotgrid/DotGrid.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { MdShareLocation } from "react-icons/md";
import { TbCircleDotted } from "react-icons/tb";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";



export default function Rakib() {
    return (
        <div className="bg-dark text-light min-vh-100 d-flex align-items-center" style={{ width: '100%', height: '600px', position: 'relative' }} >
            <DotGrid
                dotSize={5}
                gap={15}
                baseColor="#2F293A"
                activeColor="#5227FF"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
                className="dotgrid-bg"
            />
            <Container className="position-relative content-layer">
                <Row className="align-items-center">

                    {/* Left Side - Text */}
                    <Col md={7}>
                        <p className="hello">👋 HELLO, I'M</p>
                        <h1 className="fw-bold">Rakib Hosain</h1>
                        <h3 className="text-success"> <span className="A">A</span>
                            <Typewriter
                                words={[
                                    " Full Stack Developer",
                                    " PHP & Laravel Expert",
                                    " JavaScript & React with API Integration",
                                    " Building Scalable Web Applications",
                                    " Crafting Modern & Responsive UI",
                                    " Clean Code & Performance Focused",
                                    " Building Dynamic UI with React",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
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
                            <Button className="shine-button">
                                <MdOutlineCloudDownload size={20} />
                                Download Resume
                            </Button>
                            <Button className="shine-button">
                                <MdOutlineVisibility size={20} />
                                Explore My Work
                            </Button>
                            <Button className="shine-button">
                                <MdOutlineChat size={20} />
                                Let's Talk
                            </Button>
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
    );
}
