import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      {/* here display menubar page */}
      <MenuBar></MenuBar>
      {/* here set the background image of contact us page */}
      <div className="backgrund-image">
        <div className="mx-auto w-50 text-center contact-us">
          <h1 style={{ color: "white", paddingBottom: "10px" }}>Contact us</h1>
          <Button variant="outline-warning">Learn More</Button>
        </div>
      </div>
      {/* set the contact  info here */}
      <div className="container about-detail contact-heading p-5">
        <Row>
          <Col xs={6} md={6}>
            <div className="pb-3">
              <h1>CONTACT INFO</h1>
              <p>Welcome to our Website. We are glad to have you around.</p>
            </div>
            <div className="d-flex contact-detail">
              <div className="py-2">
                <div className="d-flex">
                  <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                  <div>
                    <h5>Phone</h5>
                    <p>+7 (800) 123 45 69</p>
                  </div>
                </div>
              </div>
              <div className="ps-5 email">
                <div className="d-flex">
                  <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                  <div>
                    <h5>Email</h5>
                    <p>hello@eduma.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="address py-2">
              <div className="d-flex">
                <FontAwesomeIcon
                  className="contact-icon"
                  icon={faMapMarkerAlt}
                />
                <div>
                  <h5>Address</h5>
                  <p>
                    PO Box 97845 Baker st. 567, Los Angeles, California, US.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div className="pb-3">
              <h1>SEND A MESSAGE</h1>
              <p>
                Your email address will not be published. Required fields are
                marked.
              </p>
            </div>
            <div className="d-flex pb-3">
              <div className="w-50 me-3">
                <FormControl placeholder="Name *" aria-label="First name" />
              </div>
              <div className="w-50">
                <FormControl placeholder="Email *" aria-label="Last name" />
              </div>
            </div>
            <FormControl placeholder="Subject *" aria-label="First name" />
            <div className="pt-3">
              <FloatingLabel controlId="floatingTextarea2" label="Message *">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <div className="pt-3">
                <Button variant="warning">Submit</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
