import React from "react";
import { Button, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import useCourses from "../hooks/useCoures";
import MenuBar from "../MenuBar/MenuBar";
import Review from "../Review/Review";
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
            <span style={{ color: "#FF920F", paddingBottom: "10px" }}>
              {" "}
              World’s Best Institutions
            </span>
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
          {/* <Link to="/courses"></Link> */}
          <NavLink
            className="nav-link nav-item"
            to="/courses"
            activeStyle={{
              fontWeight: "bold",
              color: "#FFB606",
            }}
          >
            <Button variant="warning">See All Courses</Button>
          </NavLink>
        </div>
      </div>
      {/* this is the event section */}
      <div className="container">
        <hr />
        <Events></Events>
        <hr />
      </div>
      {/* this is the review section */}
      <div className="container">
        <Review></Review>
      </div>
      {/*display footer page */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
