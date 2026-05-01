import { useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import AuroraText from "./GradientText/AuroraText";
import { SiGooglecloudcomposer } from "react-icons/si";

// Import images
import AytorImg from "../assets/Project/Aytor.png";
import JikerAppImg from "../assets/Project/Jiker-app.png";
import RestaurantImg from "../assets/Project/Restaurant.png";
import CompanyImg from "../assets/Project/Company.png";

import "../styles/Project.css";


const projectsData = {
    frontend: [
        { image: AytorImg, title: "The Tasbeeh", tags: ["HTML", "CSS", "JavaScript"], desc: "Digital counter interface" },
        { image: JikerAppImg, title: "Calculator", tags: ["React", "CSS"], desc: "Simple calculator layout" },
        { image: RestaurantImg, title: "Stop Watch", tags: ["React", "JavaScript"], desc: "Minimal stopwatch design" },
        { image: CompanyImg, title: "Pioneer Bank", tags: ["React", "Bootstrap"], desc: "Login interface" },
    ],
    fullstack: [
        { title: "Full Stack App", tags: ["React", "Node.js", "MongoDB"], desc: "Demo full stack project" },
    ],
    static: [
        { title: "Static Portfolio", tags: ["HTML", "CSS"], desc: "Simple static portfolio" },
    ],
};

const ProjectCard = ({ project }) => (
    <div className="mb-4 shadow-sm">
        <div>
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid mb-2 project-img"
                />
            )}
            <div className="fw-bold">{project.title}</div>
            <div>{project.desc}</div>
            <div>
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="badge bg-primary me-2">{tag}</span>
                ))}
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
