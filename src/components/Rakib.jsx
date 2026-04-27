import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { MdShareLocation } from "react-icons/md";
import { TbBackground, TbCircleDotted } from "react-icons/tb";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";








export default function Rakib() {
    return (
        <div className="bg-dark text-light min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="align-items-center">

                    {/* Left Side - Text */}
                    <Col md={7}>
                        <p className="hello">👋 HELLO, I'M</p>
                        <h1 className="fw-bold">Rakib Hosain</h1>
                        <h3 className="text-success"> <span className="A">A</span>
                            <Typewriter
                                words={[
                                    " Full Stack Developer",
                                    " Crafting pixel-perfect web experiences",
                                    " Specialized in scalable applications",
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
                            Building modern web applications with React.js, Bootstrap, and other cutting-edge
                            technologies.
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
                        <div class="social-container mt-4">
                            <a href="#"><LuFacebook  size={30} /></a>
                            <a href="#"><FaGithub  size={30} /></a>
                            <a href="#"><LuLinkedin size={30} /></a>
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
