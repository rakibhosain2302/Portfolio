
import AuroraText from "./GradientText/AuroraText";

const steps = [
    {
        number: "01",
        title: "Project Discussion",
        desc: "We discuss your project idea, requirements, design preferences, and the technologies needed for development."
    },
    {
        number: "02",
        title: "Planning & Setup",
        desc: "I plan the project structure, choose the right tech stack like Laravel or React.js, and prepare the development workflow."
    },
    {
        number: "03",
        title: "Development Process",
        desc: "I build the website or application step by step using clean code with regular updates and responsive design implementation."
    },
    {
        number: "04",
        title: "Testing & Deployment",
        desc: "After complete testing, bug fixing, and optimization, I deploy the project and ensure everything runs smoothly."
    }
];

const MyProcess = () => {
    return (
        <section className="py-5 text-center text-light">
            <div className="container">
                <h5 className="text-info">HOW I WORK</h5>
                <h2 className="mb-4">My Process</h2>
                <p className="mb-5">
                    A clear, collaborative process that keeps you informed at every step.
                </p>
                <div className="row">
                    {steps.map((step, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="p-4 custom-card h-100">
                                <h3 className="text-start"><AuroraText>{step.number}</AuroraText></h3>
                                <h5 className="fw-bold text-start">{step.title}</h5>
                                <p style={{ textAlign: "justify" }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyProcess;
