import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import AuroraText from "./GradientText/AuroraText";
import "../styles/Fqa.css";

const faqData = [
    {
        question: "What technologies do you work with?",
        answer:
            "I mainly work with HTML, CSS, JavaScript, React.js, PHP, Laravel, MySQL, and Bootstrap for building modern web applications.",
    },
    {
        question: "Can you build responsive websites?",
        answer:
            "Yes, all of my websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
    },
    {
        question: "Do you convert designs into websites?",
        answer:
            "Yes, I can convert Figma, PSD, or other UI designs into clean and responsive websites.",
    },
    {
        question: "Do you develop both frontend and backend?",
        answer:
            "Yes, I work on both frontend and backend development to create complete web solutions.",
    },
    {
        question: "Can you integrate APIs into a website?",
        answer:
            "Yes, I can integrate REST APIs and connect frontend applications with backend services.",
    },
    {
        question: "Do you use Git and GitHub?",
        answer:
            "Yes, I use Git and GitHub for version control, collaboration, and project management.",
    },
    {
        question: "Will my website be SEO friendly?",
        answer:
            "Yes, I follow basic SEO best practices including semantic HTML, meta tags, and performance optimization.",
    },
    {
        question: "Do you provide website maintenance?",
        answer:
            "Yes, I can provide ongoing maintenance, bug fixes, and feature updates after project delivery.",
    },
    {
        question: "Can you work on existing projects?",
        answer:
            "Yes, I can improve, fix, or add new features to existing websites and applications.",
    },
    {
        question: "How can we communicate during the project?",
        answer:
            "We can communicate through email, WhatsApp, Zoom, Google Meet, or other preferred platforms.",
    },
];

function FAQ() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="faq-section text-center text-light p-5">
            <div className="container">
                <span className="header-title mb-4">
                    <FaQuestionCircle className="me-2 pop-up-icon" size={18} />
                    FAQ
                </span>
                <h2 className="mb-1 text-center">Frequently <AuroraText>Asked Questions (FAQ)</AuroraText></h2>
                <p className="text-white subtitle mb-4">
                    Answers to your most important questions before we begin.
                </p>
                <div className="accordion-custom" id="faqAccordion">
                    {faqData.map((item, index) => (
                        <div className="accordion-item custom-accordion" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button custom-button ${expandedIndex === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={expandedIndex === index}
                                    aria-controls={`collapse${index}`}
                                >
                                    {item.question}
                                    <span className="accordion-icon">
                                        {expandedIndex === index ? (
                                            <FaMinus size={16} />
                                        ) : (
                                            <FaPlus size={16} />
                                        )}
                                    </span>
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${expandedIndex === index ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                            >
                                <div className="accordion-body custom-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
