import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./NotFound.css";
// this is the not found page if route not match show the page
const NotFound = () => {
  return (
    <div>
      {/* display the menubar page */}
      <MenuBar></MenuBar>
      <div className="error-page text-center">
        <h1 className="fw-bold ">
          404 <span style={{ color: "#FFB606" }}>ERROR !</span>
        </h1>
        <p>
          Sorry, we can't find the page you are looking for. Please go to{" "}
          <span style={{ color: "#FFB606" }}>Home</span> .
        </p>
      </div>
      {/* display the footer page */}
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
