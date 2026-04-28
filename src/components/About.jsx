import { FaInfoCircle } from "react-icons/fa";
import GradientText from "./GradientText/GradientText.jsx";
import AuroraText from "./GradientText/AuroraText.jsx";
import { GoProjectSymlink } from "react-icons/go";
import { SiKnowledgebase } from "react-icons/si";



export const About = () => {
  return (
    <div className="text-light">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center about-section">
          <h2 className="about-title"> <FaInfoCircle className="me-2 pop-up-icon" /> <span className="">About Me</span></h2>
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

          <p className="lead mt-1 text-white w-50 mx-auto">
            Passionate full-stack developer crafting digital experiences with modern technologies and creative solutions.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="shine-button"> < GoProjectSymlink className="me-2 pop-up-icon" color="white" size={20} /> Explore My Projects</button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container stats-section text-center">
          <h6 className="about-title"> <SiKnowledgebase className="me-1 pop-up-icon" /> <span className="">Get to Know Me</span></h6>
          <h1 className="fw-bold mb-4">Crafting <AuroraText>My Journey</AuroraText></h1>
          <p className="text-white mx-auto" style={{ width: "40%" }}>
            Discover my journey and expertise through numbers that speak louder than words.
          </p>
          <div className="d-flex justify-content-center align-items-center text-center mt-4">
            <div className="stat-box p-4 rounded stats-card me-4">
              <h2>2+</h2>
              <p className="text-white">Years Of Experience</p>
            </div>
            <div className="stat-box p-4 rounded stats-card me-4">
              <h2>13+</h2>
              <p className="text-white">Completed Projects</p>
            </div>
            <div className="stats-card p-4 rounded">
              <h2 className="mb-1">8+</h2>
              <p className="text-white">Client Satisfaction</p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="container text-center py-5">
          <div className="video-box position-relative d-inline-block">
            <img
              src="/assets/video-thumbnail.jpg"
              alt="Anas Intro"
              className="img-fluid rounded"
            />
            <button className="btn btn-danger position-absolute top-50 start-50 translate-middle rounded-circle">
              ▶
            </button>
          </div>
          <p className="mt-3 fw-bold">Ariyan Rahman Anas | Full</p>
        </section>
      </div>
    </div>
  );
}
