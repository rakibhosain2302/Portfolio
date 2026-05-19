import { Row, Col, Form } from "react-bootstrap";
import { PiTargetBold } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import GlareHover from "./GlareHover/GlareHover";
import AuroraText from "./GradientText/AuroraText";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section text-center">
      <div className="container">
        <h1 className="header-title mb-4">
          <PiTargetBold className="me-2 pop-up-icon" size={20} />
          Get in Touch
        </h1>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="contact-title head-text">
              Let’s <AuroraText>Contract Me</AuroraText>
            </h1>
            <p className="contact-subtitle p-text serv-mb">
              Ready to build something great? Let’s collaborate and turn your
              ideas into powerful digital solutions.
            </p>
          </Col>
        </Row>

        <Row className="contact-row g-4">
          <div className="col-md-6 contact-info text-start">
            <div className="cont-title">
              <strong>Need More Info?</strong>
              <h4>I'd Love to hear From You!</h4>
            </div>
            <div className="custom-card mb-3">
              <div className="info-item">
                <h5 className="info-icon"><MdAttachEmail className="me-4 icon-info" /></h5>
                <div>
                  <strong className="con-title">Email:</strong>
                  <p>
                    <a href="mailto:rakibhosain.webdev@gmail.com" className="con-info">rakibhosain.webdev@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="custom-card mb-3">
              <div className="info-item">
                <h4 className="info-icon"><BsTelephoneForwardFill className="me-4 icon-info" /></h4>
                <div>
                  <strong className="con-title">Phone:</strong>
                  <p><a href="tel:+88 01648306577" className="con-info">+88 01648306577</a></p>
                </div>
              </div>
            </div>
            <div className="custom-card mb-3">
              <div className="info-item">
                <h4 className="info-icon"><IoLocation className="me-4 icon-info" /></h4>
                <div>
                  <strong className="con-title">Address:</strong>
                  <p className="con-info"><a href="#contact" className="con-info">Hajj Camp, Airport, Dhaka, Bangladesh</a></p>
                </div>
              </div>
            </div>
          </div>
          <Col md={6}>
            <Form className="contact-form">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Message" />
              </Form.Group>
              <button className="send-btn contact-submit-btn mb-2" type="submit">
                <GlareHover
                  width="150px"
                  height="100%"
                  background="rgba(99, 102, 241, 0.6)"
                  borderRadius="50px"
                  borderColor="rgba(99, 102, 241, 0.6)"
                  glareColor="#ffffff"
                  className="p-2 fw-bold text-white"
                >
                  Send Message
                </GlareHover>

              </button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
