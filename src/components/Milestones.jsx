import AuroraText from "./GradientText/AuroraText";
import { PiPathBold } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { ImLocation } from "react-icons/im";


import "../styles/Milestones.css"

const startDate = "2025-05-01";

const getDuration = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    let months =
        (now.getFullYear() - start.getFullYear()) * 12 +
        (now.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let result = "";

    if (years > 0) {
        result += `${years} yr${years > 1 ? "s" : ""} `;
    }
    if (remainingMonths > 0) {
        result += `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
    }

    return result || "0 mo";
};

export const Milestones = () => {


    return (
        <div className="container py-5">
            {/* Title */}
            <div className="text-center mb-5">
                <h1 className="header-title"><PiPathBold className="me-2 pop-up-icon" size={20} />Milestones</h1>
                <h2>My <AuroraText className="fs-1 fw-bold">Career Timeline</AuroraText></h2>
                <p className="text-white Career-text">
                    A combination of education and hands-on experience that defines my professional growth.
                </p>
            </div>

            <div className="row">
                {/* Education Section */}
                <div className="col-md-6">
                    <h3 className="text-white fw-bold mb-4 d-flex align-items-center header-title w-25">
                        <FaGraduationCap className="me-2 pop-up-icon" size={20} />
                        Education
                    </h3>


                    <div className="custom-card text-white mb-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bold mt-1 mb-2">
                                BSc in Computer Science and Engineering (Ongoing)
                            </h5>
                            <p className="mb-1 card-title-edu">Northern University Bangladesh</p>
                            <p className="mb-1 card-gpa">2025 - Present</p>
                            <small className="text-white p">
                                Currently pursuing a Bachelor’s degree in Computer Science and Engineering, focusing on software development, problem-solving, and modern web technologies.
                            </small>
                        </div>
                    </div>

                    <div className="custom-card text-white mb-3">
                        <div className="card-body">
                            <h5 className="card-title fw-bold mt-1 mb-2">
                                Diploma in Engineering in Computer Science and Technology
                            </h5>
                            <p className="mb-1 card-title-edu">Chattogram Polytechnic Institute</p>
                            <p className="mb-1 card-gpa">CGPA: 3.43 / 4.00</p>
                            <small className="text-white p">
                                I completed my Diploma in Computer Science and Technology from Chattogram Polytechnic Institute, where I strengthened my core technical skills and developed a practical problem-solving approach.
                            </small>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="col-md-6">

                    <h3 className="text-white fw-bold mb-4 d-flex align-items-center header-title w-25">
                        <FaBriefcase className="me-2 pop-up-icon" />
                        Experience
                    </h3>

                    <div className="custom-card text-white pb-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-1">Laravel Developer</h5>
                            <p className="mb-1 companey">Isotope IT Ltd.</p>
                            <p className="mb-1"><ImLocation color="#adb5bd" className="me-1"/>Dhaka, Bangladesh</p>
                            <div className="d-flex">
                                <p className="time me-2">Full-time</p>
                                <p className="time">Hybrid</p>
                            </div>
                            <small className="text-white duration">
                                May 2025 — <span className="Present">Present · {getDuration(startDate)}</span>
                            </small>
                        </div>
                    </div>

                    {/* <div className="custom-card text-white mb-3 ">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Senior Web Instructor</h5>
                            <p className="mb-1">MIT Solution — Chattogram, Bangladesh</p>
                            <p className="mb-1">Part-time | On-site</p>
                            <small className="text-white">January 2025 — Present</small>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
