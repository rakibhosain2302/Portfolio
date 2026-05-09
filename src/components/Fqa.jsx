
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
        <section className="faq-section bg-dark text-light p-5">
            <div className="container">
                <h2 className="mb-3">Common Questions</h2>
                <p className="text-muted">
                    Everything you need to know before we start working together.
                </p>
                <div className="accordion" id="faqAccordion">
                    {faqData.map((item, index) => (
                        <div className="accordion-item mb-2" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button collapsed"
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
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
