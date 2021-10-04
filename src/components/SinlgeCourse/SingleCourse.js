import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleCourse.css";

const SingleCourse = (props) => {
  // here useing the object from courses page
  const { name, course, image, description, price, enrolled } = props?.obj;
  return (
    <Col xs={6}>
      {/* show the single card course detail */}
      <Card className="h-100 shadow card-hover">
        <div className="d-flex">
          <div>
            <Card.Img
              className="card-img img-fluid w-100"
              variant="top"
              src={image}
            />
          </div>
          <div>
            <Card.Body>
              <p>Instructor : {name}</p>
              <Card.Title>{course}</Card.Title>
              <Card.Text>
                {description.slice(0, 100)} <Link to="/about"> Learn more</Link>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
              <div className="d-flex justify-content-between mx-3">
                <p className="user-icon">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  {enrolled}
                </p>
                <h6 className="price-color">Price ${price}</h6>
              </div>
            </Card.Footer>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default SingleCourse;
