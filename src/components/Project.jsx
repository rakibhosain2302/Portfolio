import { useState } from "react";
import { Row, Col, Card, Nav } from "react-bootstrap";
import AuroraText from "./GradientText/AuroraText";
import { SiGooglecloudcomposer } from "react-icons/si";
import "../styles/Project.css";



const projectsData = {
    frontend: [
        { title: "The Tasbeeh", tags: ["HTML", "CSS", "JavaScript"], desc: "Digital counter interface" },
        { title: "Calculator", tags: ["React", "CSS"], desc: "Simple calculator layout" },
        { title: "Stop Watch", tags: ["React", "JavaScript"], desc: "Minimal stopwatch design" },
        { title: "Pioneer Bank", tags: ["React", "Bootstrap"], desc: "Login interface" },
        { title: "Online Exam System", tags: ["React", "CSS"], desc: "Colorful online test platform" },
    ],
    fullstack: [
        { title: "Full Stack App", tags: ["React", "Node.js", "MongoDB"], desc: "Demo full stack project" },
    ],
    static: [
        { title: "Static Portfolio", tags: ["HTML", "CSS"], desc: "Simple static portfolio" },
    ],
};

const ProjectCard = ({ project }) => (
    <Card className="mb-4 shadow-sm">
        <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.desc}</Card.Text>
            <div>
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="badge bg-primary me-2">{tag}</span>
                ))}
            </div>
        </Card.Body>
    </Card>
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
