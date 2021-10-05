import React from "react";
import { Col, Row } from "react-bootstrap";
import personOne from "../../images/review/1.jpg";
import personTwo from "../../images/review/2.jpg";
import personThree from "../../images/review/3.jpg";
import personFour from "../../images/review/4.jpg";
import personFive from "../../images/review/5.jpg";
import "./Review.css";
// this is the review section
const Review = () => {
  return (
    <div className="container person-img p-5 ">
      <div className="text-center pb-3 review-heading">
        <h1>WHAT PEOPLE SAY</h1>
        <p>People Reviews here</p>
      </div>
      <div className="w-75 mx-auto">
        <Row>
          <Col>
            <div>
              <img src={personOne} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <img src={personTwo} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <img src={personThree} alt="" />
              <div className="pt-2">
                <h4>Jhon Doe</h4>
                <p>ART DIRECTOR</p>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <img src={personFour} alt="" />
            </div>
          </Col>
          <Col>
            <div>
              <img src={personFive} alt="" />
            </div>
          </Col>
        </Row>
        <div>
          <p className="text-center">
            “ LearnPress is a WordPress complete solution for creating a
            Learning Management System (LMS). It can help me to create courses,
            lessons and quizzes and manage them as easy as I want. I’ve learned
            a lot, and I highly recommend it. Thank you. ”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
