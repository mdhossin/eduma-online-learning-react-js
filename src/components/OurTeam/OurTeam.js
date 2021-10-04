import React from "react";
import "./OurTeam.css";
import manOne from "../../images/man-1.jpg";
import manTwo from "../../images/man-2.jpg";
import manThree from "../../images/man-3.jpg";
import manFour from "../../images/man-4.jpg";
import { Col, Row } from "react-bootstrap";
// this is the our team page
const OurTeam = () => {
  return (
    <div className="container my-5">
      <div className="our-team">
        <div className="text-center ">
          <h1>MEET OUR TEAM</h1>
          <p>Plugins your themes with even more features.</p>
        </div>
        <Row className="text-center mt-5 Py-5">
          <Col xs={6} md={3}>
            <img src={manOne} alt="" />
            <h4>Jonathan</h4>
            <p>ART DIRECTOR</p>
          </Col>
          <Col xs={6} md={3}>
            <img src={manTwo} alt="" />
            <h4>John Doe</h4>
            <p>WEB DEVELOPER</p>
          </Col>
          <Col xs={6} md={3}>
            <img src={manThree} alt="" />
            <h4>Jane Nguyen</h4>
            <p>COPYRIGHTER</p>
          </Col>
          <Col xs={6} md={3}>
            <img src={manFour} alt="" />
            <h4>JRyze Faker</h4>
            <p>CO-FOUNDER</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurTeam;
