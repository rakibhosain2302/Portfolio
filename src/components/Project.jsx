import { useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import AuroraText from "./GradientText/AuroraText";
import { SiGooglecloudcomposer } from "react-icons/si";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


// Import images
import AytorImg from "../assets/Project/Aytor.png";
import JikerAppImg from "../assets/Project/Jiker-app.png";
import RestaurantImg from "../assets/Project/Restaurant.png";
import CompanyImg from "../assets/Project/Company.png";
import ClockImg from "../assets/Project/Clock.png";
import CalculatorImg from "../assets/Project/Calculator.png";

import "../styles/Project.css";
import { image } from "framer-motion/m";


const projectsData = {
    frontend: [
        { gitlink: "https://github.com/rakibhosain2302/RWD-Project-2024", liveLink: "https://rakibhosain2302.github.io/RWD-Project-2024/", image: AytorImg, title: "Aytor E-Commerce", tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"], desc: "Aytor E‑Commerce is a shopping platform offering electronics, fashion, and daily essentials. It focuses on quality products, fast delivery, and customer satisfaction for a convenient and affordable experience." },
        { gitlink: "https://github.com/rakibhosain2302/Ziker-App", liveLink: "https://ziker-app.netlify.app/", image: JikerAppImg, title: "Ziker-App", tags: ["React", "CSS", "Bootstrap"], desc: "Ziker-App is a modern Islamic Tasbih & Zikr Counter application built with React. It helps users perform daily zikr, track progress, rotate duas, and maintain consistency with a clean and calming UI." },
        { gitlink: "https://github.com/rakibhosain2302/Restaurant_Web_Design", liveLink: "https://rakibhosain2302.github.io/Restaurant_Web_Design/", image: RestaurantImg, title: "Restaurant Web Design", tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"], desc: "Restaurant Web Design is a sleek, responsive layout that showcases menus, ambiance, and services with attractive visuals and easy navigation to boost customer engagement." },
        { gitlink: "https://github.com/rakibhosain2302/Modern-Corporate-Agency-Design", liveLink: "https://rakibhosain2302.github.io/Modern-Corporate-Agency-Design/", image: CompanyImg, title: "Modern Corporate Agency Design", tags: ["HTML", "CSS", "Bootstrap"], desc: "Bizzency is a corporate agency template with a modern homepage, clear navigation, and a professional design. It emphasizes success, ambition, and client trust through bold branding, service highlights, and engaging visuals." },
    ],
    fullstack: [
        { title: "Full Stack App", tags: ["React", "Node.js", "MongoDB"], desc: "Demo full stack project" },
    ],
    static: [
        { gitlink:"https://github.com/rakibhosain2302/Analog_and_Digital_Clock",liveLink:"https://rakibhosain2302.github.io/Analog_and_Digital_Clock/", image: ClockImg, title: "Analog & Digital Clock", tags: ["HTML", "CSS", "JavaScript"], desc: "A simple and responsive Analog & Digital Clock built using HTML, CSS, and JavaScript, displaying real-time updates with both classic analog design and modern digital format." },
        { gitlink:"https://github.com/rakibhosain2302/JS-Simple-Calculators",liveLink:"https://rakibhosain2302.github.io/JS-Simple-Calculators/", image: CalculatorImg, title: "Simple Scientific Calculator", tags: ["HTML", "CSS", "JavaScript"], desc: "A modern and responsive Scientific Calculator developed using HTML, CSS, and JavaScript, supporting advanced mathematical operations such as trigonometric functions, logarithms, factorials, powers, and real-time expression evaluation with an intuitive user interface." },

    ],
};

const ProjectCard = ({ project }) => (
    <div className="mb-5 project-card">
        <div className="custom-card">
            <div className="image-card" data-desc={project.desc}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid project-img"
                />
            </div>

            <div className="fw-bold text-start mt-4">{project.title}</div>
            <div className="d-flex align-items-center mt-1 tech-Section">
                <HiOutlineDesktopComputer className="me-2 icons" size={22} />
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-badge me-2 mt-2 mb-2">{tag}</span>
                ))}
            </div>


            <div className="link-section mt-3 d-flex gap-2">
                <div className="flex-fill">
                    <a className="link-button" href={project.gitlink}>
                        <FaGithub className="me-2" size={25} />
                        Github
                    </a>
                </div>
                <div className="flex-fill">
                    <a className="link-button" href={project.liveLink}>
                        <FaExternalLinkAlt className="me-2" size={18} />
                        Live
                    </a>
                </div>
            </div>


        </div>
    </div>
);

const FeaturedProjects = () => {
    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <div fluid className="container text-light text-center py-5">
            <h1 className="header-title mb-4"><SiGooglecloudcomposer className="me-2 pop-up-icon" size={18} />Recent Work</h1>
            <h2 className="text-center mb-3">Project <AuroraText>Showcase</AuroraText></h2>
            <p className="text-center p mb-4">
                Passionate about exploring new technologies. Every project is a unique challenge that helps me push boundaries and grow as a developer.
            </p>

            <Nav variant="pills" className="justify-content-center mb-4">
                <Nav.Item>
                    <Nav.Link active={activeTab === "frontend"} onClick={() => setActiveTab("frontend")}>Front-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={activeTab === "fullstack"} onClick={() => setActiveTab("fullstack")}>Full Stack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={activeTab === "static"} onClick={() => setActiveTab("static")}>Static</Nav.Link>
                </Nav.Item>
            </Nav>

            <Row>
                {projectsData[activeTab].map((project, idx) => (
                    <Col md={4} key={idx}>
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FeaturedProjects;
