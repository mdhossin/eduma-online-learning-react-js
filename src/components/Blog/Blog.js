import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = (props) => {
  const { title, image, description } = props.obj;
  return (
    <Col xs={6}>
      {/* show the single blog detail */}
      <Card className="h-100">
        <div className="d-flex p-3">
          <div className="card">
            <Card.Img
              className="blog-img img-fluid"
              variant="top"
              src={image}
            />
          </div>
          <div>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description} <Link to="/about"> Learn more</Link>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Blog;
