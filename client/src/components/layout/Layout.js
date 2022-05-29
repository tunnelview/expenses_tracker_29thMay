import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <div>
      {/* // Header Section */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* dynamically content page */}
      <main classname="container wrapper">{children}</main>

      {/* footer section */}
      <footer className="text-dark.text-center.py-5">
        All right reserved by Shibn Abraham
      </footer>
    </div>
  );
};
