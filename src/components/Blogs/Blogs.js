import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const Blogs = () => {
  return (
    <div>
      {/* here display menubar page */}
      <MenuBar></MenuBar>
      {/* set the backgroun imgae of  blogs page using global css style from contact us css page */}
      <div className="backgrund-image">
        <div className="mx-auto w-50 text-center contact-us">
          <h1 style={{ color: "white" }}>More Blogs</h1>
          <Button variant="outline-warning">Learn More</Button>
        </div>
      </div>
      {/* here display footer page */}
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
