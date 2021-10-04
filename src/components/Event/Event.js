import { faClock, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Event.css";

const Event = (props) => {
  const { title, image, description, date, time, location } = props.obj;
  return (
    <>
      <Col xs={6} md={4}>
        <div className="date pb-5 mt-5">
          <h1>{date}</h1>
        </div>
      </Col>
      <Col xs={6} md={4}>
        <div className="detail pb-5">
          <h2>{title}</h2>
          <p>
            <small>
              <FontAwesomeIcon className="me-2" icon={faClock} />
              {time}
            </small>{" "}
            <small>
              <FontAwesomeIcon className="mx-2" icon={faMapMarker} />
              {location}
            </small>
          </p>
          <p>
            {description.slice(0, 130)}
            <NavLink
              style={{ color: "#ffb606" }}
              className="nav-link d-inline"
              to="/courses"
            >
              Learn More
            </NavLink>
          </p>
        </div>
      </Col>
      <Col xs={6} md={4}>
        <div className="event-img pb-5">
          <img src={image} alt="" />
        </div>
      </Col>
    </>
  );
};

export default Event;
