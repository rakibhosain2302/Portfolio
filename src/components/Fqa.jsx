
import { FaQuestionCircle } from "react-icons/fa";
import AuroraText from "./GradientText/AuroraText";
import "../styles/Fqa.css";

const faqData = [
    {
        question: "How long does a typical project take?",
        answer:
            "Most projects take between 1–4 weeks depending on complexity. A simple landing page can be done in 3–5 days, while a full-stack SaaS app may take 3–6 weeks.",
    },
    {
        question: "Do you work with clients outside Bangladesh?",
        answer: "Yes, I collaborate with international clients via online platforms.",
    },
    {
        question: "What do you need from me to get started?",
        answer: "Clear requirements, design preferences, and any existing assets.",
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, I provide ongoing support and maintenance packages.",
    },
    {
        question: "Can I request changes after the project is done?",
        answer: "Of course, revisions can be requested with a change request.",
    },
];

function FAQ() {
    return (
        <section className="faq-section text-center text-light p-5">
            <div className="container">
                <span className="header-title">
                    <FaQuestionCircle className="me-2 pop-up-icon" size={18} />
                    FAQ
                </span>
                <h2 className="mb-3 text-center">Frequently <AuroraText>Asked Questions (FAQ)</AuroraText></h2>
                <p className="text-white subtitle">
                    Answers to your most important questions before we begin.
                </p>
                <div className="accordion" id="faqAccordion">
                    {faqData.map((item, index) => (
                        <div className="accordion-item custom-accordion" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button collapsed custom-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
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
