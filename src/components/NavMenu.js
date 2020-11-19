import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

const NavMenu = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "black" }}
    >
      <Navbar.Brand href="/">
        <h1 style={{ fontSize: "24px" }}>NAME OF STUDIO</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Link to="services" smooth={true}>
            <Nav.Link href="/services">Services</Nav.Link>
          </Link>
          <Link to="discog" smooth={true}>
            <Nav.Link href="/discography">Discography</Nav.Link>
          </Link>
          <Nav.Link href="https://www.amazon.com/">Gear List</Nav.Link>
          <Link to="about" smooth={true}>
            <Nav.Link href="/about">About</Nav.Link>
          </Link>
          <Nav.Link href="/contact">
            <Link to="contact" smooth={true}>
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
