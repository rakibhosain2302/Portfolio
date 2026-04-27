import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

export default function Rakib() {
    return (
        <div className="bg-dark text-light min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    
                    {/* Left Side - Text */}
                    <Col md={7}>
                        <p className="hello">👋 HELLO, I'M</p>
                        <h1 className="fw-bold">Rakib Hosain</h1>
                        <h3 className="text-info"> <span className="A">A</span>
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
                        <div className="d-flex gap-3 mt-3">
                            <span className="badge bg-primary">2+ Years Experience</span>
                            <span className="badge bg-warning text-dark">12+ Projects Completed</span>
                            <span className="badge bg-info">Remote Friendly</span>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 d-flex gap-3">
                            <Button variant="outline-light">Download Resume</Button>
                            <Button variant="primary">Explore My Work</Button>
                            <Button variant="success">Let's Talk</Button>
                        </div>

                        {/* Social Links */}
                        <div className="mt-4">
                            <a href="https://github.com/yourusername" className="me-3 text-light">
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/yourusername" className="text-light">
                                LinkedIn
                            </a>
                        </div>
                    </Col>

                    {/* Right Side - Image */}
                    <Col md={5} className="text-center">
                        <img 
                            src="/src/assets/hero.png"
                            alt="Rakib Hosain"
                            className="hero-imageV2"
                        />
                        <div className="mt-3">
                            <span className="badge bg-success">Available for Work</span>
                            <p className="mt-2">📍 Dhaka, Bangladesh</p>
                        </div>
                    </Col>
                </Row>

                {/* Footer */}
                <Row className="mt-5">
                    <Col className="text-center">
                        <small>© 2026 Rakib Hosain — All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
