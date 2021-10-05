import React from "react";
import { Col, Row } from "react-bootstrap";
import "./OurStory.css";
// this is the our story page
const OurStory = () => {
  return (
    <div className="container">
      <div className="container text-center">
        <div className="our-story text-center p-5 ">
          <h1>OUR STORY</h1>
          <p>It is a long established fact that a reade.</p>
        </div>
        <Row className="pb-5 story-heading">
          <Col className="cards" xs={6} md={3}>
            <h2>55000</h2>
            <p>FOREIGN FOLLOWERS</p>
          </Col>
          <Col className="cards" xs={6} md={3}>
            <h2>60</h2>
            <p>CERTIFIED TEACHERS</p>
          </Col>
          <Col className="cards" xs={6} md={3}>
            <h2>2240</h2>
            <p>STUDENTS ENROLLED</p>
          </Col>
          <Col className="cards" xs={6} md={3}>
            <h2>215</h2>
            <p>COMPLETE COURSES</p>
          </Col>
        </Row>
      </div>

      <div className="container about-detail">
        <Row>
          <Col xs={6} md={6}>
            <h4 className="about-more">WHO WE ARE</h4>
            <p>
              The website gives huge array of academic options to student from
              traditional to contemporary studies. They provide online degree
              courses from accounting and economics to engineering and also
              carries material on niche subjects like behavioural psychology.
              Moreover, it has have a collaboration with a bunch of reputed
              colleges such as University of Oxford, Massachusetts Institute of
              Technology, Stanford University and many other.
            </p>
            <p>
              This is not just an online portal, but an educational channel for
              the learners. Unlike other websites, it only represent the
              significant data catering the problems faced by students.
            </p>
          </Col>
          <Col xs={6} md={6}>
            <h4 className="about-more">WHAT WE DO</h4>
            <p>
              It's a one-stop website for all the subjects, none of the above
              portals have these many arenas. Keeping the essence of
              inquisitiveness alive, the portal functions on the common key
              words including the word 'how'.
            </p>
            <p>
              Unlike other websites, this portal provides academic as well as
              skill-based learning to the students. Students can either refer to
              the material being provided or enrol themselves in any of the 58
              courses. The website is synthesised with three main options,
              including educational material, courses and documentaries. The
              subjects have been divided into two sections.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurStory;
