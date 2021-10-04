import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import OurStory from "../OurStory/OurStory";
import OurTeam from "../OurTeam/OurTeam";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      {/* menu bar page diaplay here */}
      <MenuBar></MenuBar>
      {/* here set the background image of about us section */}
      <div className="backgrund-image">
        <div className="mx-auto w-50 text-center about-us">
          <h1 style={{ color: "white" }}>About us</h1>
          <p className="about-text">
            Review important concepts and explore new topics—the options are
            endless with Education.com! Join for free today and browse 30,000+
            worksheets, lesson plans and more.
          </p>
          <Button variant="outline-warning">Learn More</Button>{" "}
        </div>
      </div>
      {/* here display our story page */}
      <OurStory />
      {/* here display our team page */}
      <OurTeam />
      {/* here display footer page */}
      <Footer />
    </div>
  );
};

export default AboutUs;
