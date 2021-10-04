import React, { useContext } from "react";
import { Button, Row } from "react-bootstrap";
import { BlogsContext } from "../../App";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import useBlogs from "../hooks/useBlogs";
import MenuBar from "../MenuBar/MenuBar";

const Blogs = () => {
  const blogsHeading = useContext(BlogsContext);
  // here using the custom hook api data
  const [blogs] = useBlogs();
  return (
    <div>
      {/* here display menubar page */}
      <MenuBar></MenuBar>
      {/* set the backgroun imgae of  blogs page using global css style from contact us css page */}
      <div className="backgrund-image">
        <div className="mx-auto w-50 text-center contact-us">
          <h1 style={{ color: "white", paddingBottom: "10px" }}>
            Read Latest Blogs
          </h1>
          <Button variant="outline-warning">Learn More</Button>
        </div>
      </div>

      <div className="container py-5">
        <h1 style={{ marginBottom: "40px" }}>{blogsHeading}</h1>
        <Row xs={1} md={1} className="g-4">
          {blogs.slice(0, 4).map((blog) => (
            <Blog key={blog.id} obj={blog} />
          ))}
        </Row>
      </div>
      {/* here display footer page */}
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
