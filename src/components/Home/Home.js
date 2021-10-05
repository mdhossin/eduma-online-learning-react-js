import React from "react";
import { Button, Carousel, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import useCourses from "../hooks/useCoures";
import MenuBar from "../MenuBar/MenuBar";
import Review from "../Review/Review";
import SingleCourse from "../SinlgeCourse/SingleCourse";
import "./Home.css";

// import sliderOne from "../../images/slider/4.jpg";
import sliderTwo from "../../images/slider/5.jpg";
import sliderThree from "../../images/slider/7.jpg";

const Home = () => {
  // here import the custom hook function and use here
  const [courses] = useCourses();

  return (
    <div>
      {/* dispplay the menubar  */}
      <MenuBar></MenuBar>
      {/* here add the carousel */}
      <div className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://ednuv-ng.envytheme.com/main-banner4.19a5a285324cbd1b9c51.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text">
                <span className="d-block text-start">
                  <small>THE FUTURE</small>
                </span>
                <h1 className="main-heading text-start">
                  Online Courses for those who learn differently
                </h1>
                <p>
                  Education can be passport to the future if it does believe.
                </p>

                <Button variant="outline-warning">Get Started Now</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={sliderTwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text">
                <span className="d-block text-start">
                  <small>WEAPON IS EDUCATION</small>
                </span>
                <h1 className="main-heading text-start">
                  Transformative Courses for those who learn differently
                </h1>
                <p>
                  EDUMA supports students by introducing collaborators outside
                  R, interships and research experience abroad.
                </p>

                <Button variant="outline-warning">View All Courses</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={sliderThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text">
                <span className="d-block text-start">
                  <small>WEAPON IS EDUCATION</small>
                </span>
                <h1 className="main-heading text-start">
                  Think out of the box and create a lerning learner
                </h1>
                <p>
                  EDUMA supports students by introducing collaborators outside
                  R, interships and research experience abroad.
                </p>

                <Button variant="outline-warning">View All Courses</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* courses sectin here */}
      <div className="all-Courses container py-5">
        <div className="course-heading">
          <h1>Our Popular Online Courses</h1>
          <p>Latest Popular Courses here</p>
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
