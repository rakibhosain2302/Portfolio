import { Row, Col, Form, Button } from "react-bootstrap";
import { PiTargetBold } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

import AuroraText from "./GradientText/AuroraText";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section text-center">
      <div className="container">
        <h1 className="header-title">
          <PiTargetBold className="me-2 pop-up-icon" size={20} />
          Get in Touch
        </h1>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="contact-title">
              Let’s <AuroraText>Contract Me</AuroraText>
            </h1>
            <p className="contact-subtitle">
              Ready to build something great? Let’s collaborate and turn your
              ideas into powerful digital solutions.{" "}
            </p>
          </Col>
        </Row>

        <Row>
          <div className="col-md-6 contact-info text-start">
            <div className="cont-title">
              <strong>Need More Info?</strong>
              <h4>I'd Love to hear From You!</h4>
            </div>
            <div className="custom-card mb-3">
              <div class="info-item">
                <div class="info-icon"><MdAttachEmail className="me-4" /></div>
                <div className="mt-1">
                  <strong>Email:</strong>
                  <p><a href="mailto:rakibhosain.webdev@gmail.com">rakibhosain.webdev@gmail.com</a></p>
                </div>
              </div>
            </div>
            <div className="custom-card mb-3">
              <div class="info-item">
                <div class="info-icon"><BsTelephoneForwardFill className="me-4" /></div>
                <div className="mt-1">
                  <strong>Phone:</strong>
                  <p><a href="tel:+88 01648306577">+88 01648306577</a></p>
                </div>
              </div>
            </div>
            <div className="custom-card mb-3">
              <div class="info-item">
                <div class="info-icon"><IoLocation className="me-4" /></div>
                <div className="mt-1">
                  <strong>Address:</strong>
                  <p><a href="">Hajj Camp, Airport, Dhaka, Bangladesh</a></p>
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
              <Button className="send-btn" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
