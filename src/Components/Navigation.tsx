import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import '../App.css';

export default function Navigation() {

  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setStickyNav(window.pageYOffset > 140);
  };

  return (
    <div className={`${stickyNav ? "sticky-nav" : null}`}>
      <Navbar className="nav-container">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "#e57055" }}>
            <h3>@im_pareshm</h3>
          </Navbar.Brand>
          <Nav className="nav-menu">
            <Nav.Link href="#home" style={{ color: "#e57055" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#project" style={{ color: "#e57055" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: "#e57055" }}>
              About
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: "#e57055" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
