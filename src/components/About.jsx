import CountUp from "./CounterUp/ConterUp.jsx";
import { FaInfoCircle } from "react-icons/fa";
import GradientText from "./GradientText/GradientText.jsx";
import AuroraText from "./GradientText/AuroraText.jsx";
import GlareHover from "./GlareHover/GlareHover";
import { GoProjectSymlink } from "react-icons/go";
import { SiKnowledgebase } from "react-icons/si";


export const About = () => {
  return (
    <div className="text-light">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center about-section">
          <h2 className="header-title mb-4"> <FaInfoCircle className="me-2 pop-up-icon" /> <span className="">About Me</span></h2>
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="fw-bold display-5">
              <GradientText
                animationSpeed={10}
                direction="horizontal"
                pauseOnHover={true}
                yoyo={true}
                showBorder={false}
                className="text-gradient">
                Creating Interactive Web Experiences
              </GradientText>
            </h1>
          </div>

          <p className="lead text-white w-50 mx-auto">
            Passionate full-stack developer crafting digital experiences with modern technologies and creative solutions.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button>
              <GlareHover
                width="230px"
                height="100%"
                background="linear-gradient(120deg, #4e54c8, #8f94fb)"
                borderRadius="8px"
                borderColor="rgba(99, 102, 241, 0.6)"
                glareColor="#ffffff"
                className="p-2 d-block expolor-btn text-white"
              >
                < GoProjectSymlink className="me-2 pop-up-icon" color="white" size={20} /> Explore My Projects
              </GlareHover>
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container stats-section text-center">
          <h6 className="header-title mb-3"> <SiKnowledgebase className="me-1 pop-up-icon" /> <span className="">Get to Know Me</span></h6>
          <h1 className="fw-bold">Crafting <AuroraText>My Journey</AuroraText></h1>
          <p className="text-white mx-auto" style={{ width: "40%" }}>
            Discover my journey and expertise through numbers that speak louder than words.
          </p>
          <div className="d-flex justify-content-center align-items-center text-center mt-4">
            <CountUp end={2} label="Years Of Experience" />
            <CountUp end={13} label="Completed Projects" />
            <CountUp end={8} label="Client Satisfaction" />
          </div>
        </section>
      </div>
    </div>
  );
}
