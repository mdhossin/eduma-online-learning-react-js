import React from "react";
import { Row } from "react-bootstrap";
import useBlogs from "../hooks/useBlogs";
import Event from "../Event/Event";
import "./Events.css";
const Events = () => {
  // here using custom hook api data
  const [blogs] = useBlogs();
  return (
    <div className="events-page">
      <div className="text-center py-5">
        <h1>Events</h1>
        <p>New Event list</p>
      </div>
      <Row>
        {blogs.slice(4, 6).map((blog) => (
          <Event key={blog.id} obj={blog}></Event>
        ))}
      </Row>
    </div>
  );
};

export default Events;
