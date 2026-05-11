
const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We discuss your goals, requirements, timeline, and budget in a free 30-min call."
  },
  {
    number: "02",
    title: "Planning & Proposal",
    desc: "I send a detailed proposal with scope, milestones, tech stack, and pricing."
  },
  {
    number: "03",
    title: "Design & Develop",
    desc: "I build iteratively with regular updates and demos for your feedback."
  },
  {
    number: "04",
    title: "Review & Launch",
    desc: "Final testing, refinements, and a smooth handoff or deployment."
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
                <h3 className="text-info text-start">{step.number}</h3>
                <h5 className="fw-bold text-start">{step.title}</h5>
                <p className="text-start">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProcess;
