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
            <h4>Need More Info? I'd Love to hear From You!</h4>
            <div className="custom-card mb-3">
              <div>
                <span>
                  <MdAttachEmail className="me-4" />
                </span>
                <strong>Email:</strong> anasahibve@gmail.com
              </div>
            </div>
            <div className="custom-card mb-3">
              <span>
                <BsTelephoneForwardFill className="me-4" />
              </span>
              <strong>Phone:</strong> +88 01601-139968
            </div>
            <div className="custom-card mb-3">
              <span>
                <IoLocation className="me-4" />
              </span>
              <strong>Location:</strong> Hathazari, Chattogram, Bangladesh
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
