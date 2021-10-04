import { faShoppingCart, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  const { name, course, image, description, price, enrolled } = props?.obj;
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
            <Link> Learn more</Link>
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between px-3">
          <p className="user-icon">
            <span className="me-2">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            {enrolled}
          </p>
          <h6 className="price-color">Price ${price}</h6>
        </div>
        <Card.Footer>
          <div className="text-center pb-2">
            <Button className="me-2" variant="outline-warning">
              <FontAwesomeIcon className="me-1" icon={faShoppingCart} />
              Add To Cart
            </Button>{" "}
            <Button variant="outline-danger">Details</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Course;
