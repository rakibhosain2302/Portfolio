import AuroraText from "./GradientText/AuroraText";
import { PiPathBold } from "react-icons/pi";
import "../styles/Milestones.css"


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
                    <h3 className="text-info fw-bold mb-4">Education</h3>

                    <div className="card bg-dark text-white mb-3 shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">
                                Diploma in Engineering in Computer Science and Technology
                            </h5>
                            <p className="mb-1">Chattogram Polytechnic Institute</p>
                            <p className="mb-1">GPA: 3.82/4.00</p>
                            <small className="text-muted">
                                I completed my Diploma in Engineering in Computer Science and Technology from Chattogram Polytechnic Institute. This journey deepened my technical foundation and strengthened my problem-solving mindset.
                            </small>
                        </div>
                    </div>

                    <div className="card bg-dark text-white mb-3 shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Dakhil (Secondary School Certificate)</h5>
                            <p className="mb-1">Baitush Sharaf Ideal Kamil Madrasah, Chattogram</p>
                            <p className="mb-1">GPA: 4.87/5.00</p>
                            <small className="text-muted">
                                I completed my Dakhil from Baitush Sharaf Ideal Kamil Madrasah, which nurtured both my academic growth and Islamic values.
                            </small>
                        </div>
                    </div>

                    <div className="card bg-dark text-white mb-3 shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Complete Hifzul Quran</h5>
                            <p className="mb-1">Iqra Islamic School And Madrasah, Cumilla</p>
                            <p className="mb-1">GPA: 5.00/5.00</p>
                            <small className="text-muted">
                                By the mercy of Allah, I completed memorization of the Holy Qur’an (Hifz) in 2013.
                            </small>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="col-md-6">
                    <h3 className="text-info fw-bold mb-4">Experience</h3>

                    <div className="card bg-dark text-white mb-3 shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Software Developer (MERN-PERN)</h5>
                            <p className="mb-1">Neovlyze — Dhaka, Bangladesh</p>
                            <p className="mb-1">Full-time | Hybrid</p>
                            <small className="text-muted">September 2025 — Present</small>
                        </div>
                    </div>

                    <div className="card bg-dark text-white mb-3 shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Senior Web Instructor</h5>
                            <p className="mb-1">MIT Solution — Chattogram, Bangladesh</p>
                            <p className="mb-1">Part-time | On-site</p>
                            <small className="text-muted">January 2025 — Present</small>
                        </div>
                    </div>

                    <div className="card bg-dark text-white mb-3 shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Frontend Engineer</h5>
                            <p className="mb-1">Codenco IT — Dhaka, Bangladesh</p>
                            <p className="mb-1">Full-time | Remote</p>
                            <small className="text-muted">December 2024 — July 2025</small>
                        </div>
                    </div>

                    <div className="card bg-dark text-white mb-3 shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Frontend Web Developer</h5>
                            <p className="mb-1">Loopx Academy — Dhaka, Bangladesh</p>
                            <p className="mb-1">Contract | Remote</p>
                            <small className="text-muted">February 2024 — December 2024</small>
                        </div>
                    </div>

                    <div className="card bg-dark text-white mb-3 shadow">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Frontend Developer</h5>
                            <p className="mb-1">Qwik IT — Saint John, NB, Canada</p>
                            <p className="mb-1">Internship | Remote</p>
                            <small className="text-muted">November 2023 — January 2024</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
