import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container className="py-3">
          <Navbar.Brand>
            <span className="main-color-bg text-white rounded-circle p-3">
              PZ
            </span>
            <span className="text-dark fs-5 fw-bolder ms-2">Perfume House</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <button
                style={{ width: "140px", height: "61px" }}
                className="main-color2 border-0 rounded-2"
              >
                <Link to="/login" className="text-decoration-none">
                  Log In
                </Link>
              </button>

              <button
                style={{ width: "140px", height: "61px" }}
                className="main-color-bg border-0 rounded-2 ms-2"
              >
                <Link
                  to="/register"
                  className="text-decoration-none text-white"
                >
                  Sign Up
                </Link>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
