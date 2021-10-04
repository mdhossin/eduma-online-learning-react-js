import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import useCourses from "../hooks/useCoures";
import MenuBar from "../MenuBar/MenuBar";
import SingleCourse from "../SinlgeCourse/SingleCourse";
import "./Home.css";

const Home = () => {
  // here import the custom hook function and use here
  const [courses] = useCourses();

  return (
    <div>
      {/* dispplay the menubar  */}
      <MenuBar></MenuBar>
      {/* set the background image of home page */}
      <div className="backgrund-img">
        <div className="mx-auto w-50 text-center about-us">
          <h1 className="main-heading">
            Start learning from the
            <span style={{ color: "#FF920F" }}> World’s Best Institutions</span>
          </h1>
          <Button variant="outline-warning">Learn More</Button>
        </div>
      </div>
      <div className="all-Courses container py-5">
        <div className="Course-heading">
          <h1>Our Courses</h1>
          <p>Latest Popular Courses Details here</p>
        </div>
        {/* here using to the map method and call the single course function and pass the props */}
        <Row xs={1} md={2} className="g-4">
          {courses.slice(0, 4).map((course) => (
            <SingleCourse key={course.id} obj={course}></SingleCourse>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Link to="/courses">
            <Button variant="warning">See All Courses</Button>
          </Link>
        </div>
      </div>
      {/*display footer page */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
