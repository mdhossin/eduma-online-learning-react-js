import React from "react";
import { Row } from "react-bootstrap";
import Footer from "../Footer/Footer";

import MenuBar from "../MenuBar/MenuBar";
import Course from "../Course/Course";
import "./Courses.css";
import useCourses from "../hooks/useCoures";

const Courses = () => {
  // here import the custom hook function and call here to get the value
  const [courses] = useCourses();

  return (
    <div>
      {/* display the menubar page */}
      <MenuBar></MenuBar>
      <div className="container py-5">
        <div className="all-Course">
          <h1>Our All Courses</h1>
          <p>All latest Courses here</p>
        </div>
        <Row xs={1} md={3} className="g-4">
          {courses.map((course) => (
            <Course key={course.id} obj={course}></Course>
          ))}
        </Row>
      </div>
      {/* display the footer page */}
      <Footer></Footer>
    </div>
  );
};

export default Courses;
