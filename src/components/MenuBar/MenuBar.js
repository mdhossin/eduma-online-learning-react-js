import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Stack,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";
// this is the menubar page
const MenuBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-logo" href="#">
            EDUMA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Stack direction="horizontal" gap={3}>
                <NavLink
                  className="nav-link nav-item"
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FFB606",
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link nav-item"
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FFB606",
                  }}
                >
                  About Us
                </NavLink>
                <NavLink
                  className="nav-link nav-item"
                  to="/courses"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FFB606",
                  }}
                >
                  Courses
                </NavLink>
                <NavLink
                  className="nav-link nav-item"
                  to="/blogs"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FFB606",
                  }}
                >
                  Blogs
                </NavLink>
                <NavLink
                  className="nav-link nav-item"
                  to="/contact"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FFB606",
                  }}
                >
                  Contact Us
                </NavLink>
              </Stack>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
