import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Course.css";
import Rating from "react-rating";
const Course = (props) => {
  const { name, course, image, description, price, enrolled, rating, count } =
    props?.obj;
  return (
    <div>
      {/* here show the single course detail */}
      <Card className="h-100 shadow card-hover">
        <Card.Img className="sevices-img" variant="top" src={image} />
        <Card.Body>
          <p style={{ textAlign: "center" }}>{name}</p>
          <Card.Title>{course}</Card.Title>
          <Card.Text>
            {description.slice(0, 70)}
            <Link to="/"> Learn more</Link>
          </Card.Text>
        </Card.Body>
        {/* here add the rating */}
        <div className="feature">
          <Rating
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={rating}
            readonly
          />
          <small className="ms-1">{rating}</small>
          <small className="ms-1">({count})</small>
        </div>
        <div className="d-flex justify-content-between price-details">
          <p className="user-icon">
            <span className="me-2">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            {enrolled} Students
          </p>
          <h5 className="price-color"> ${price}</h5>
        </div>
        <Card.Footer>
          <div className="text-center pb-2">
            <Button className="me-2" variant="outline-warning">
              Enroll Now
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Course;
