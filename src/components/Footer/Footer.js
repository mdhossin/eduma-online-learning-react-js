import React from "react";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    // this is the footer page
    <div className="backgroun-footer">
      <Row>
        <Col xs={6} md={3}>
          <h4>EDUMA</h4>
          <p>
            <FontAwesomeIcon className="footer-icon" icon={faPhone} />
            (00) 123 456 789
          </p>
          <p>
            <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            hello@eduma.com
          </p>
          <div className="d-flex">
            <div className="icon">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </div>
            <div className="icon ms-2">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </div>
            <div className="icon ms-2">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="icon ms-2">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <h4>COMPANY</h4>
          <p>About Us</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>Become a Teacher</p>
        </Col>
        <Col xs={6} md={3}>
          <h4>LINKS</h4>
          <p>Courses</p>
          <p>Events</p>
          <p>Gallery</p>
          <p>FAQs</p>
        </Col>
        <Col xs={6} md={3}>
          <h4>SUPPORT</h4>
          <p>Documentation</p>
          <p>Forums</p>
          <p>Language Packs</p>
          <p>Release Status</p>
        </Col>
      </Row>
      <div>
        <p
          style={{
            textAlign: "center",
            marginTop: "40px",
            paddingBottom: "20px",
            color: "#999999",
          }}
        >
          2021 All Rights Reserved by &copy; EDUMA
        </p>
      </div>
    </div>
  );
};

export default Footer;
