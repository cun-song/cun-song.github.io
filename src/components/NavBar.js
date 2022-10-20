import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import "../style/NavBar.css";
import React, { useState } from "react";
function NavBar() {
  const [changeColor, setChangeColor] = useState(false);
  const handleClick = () => {
    setChangeColor(!changeColor);
  };
  return (
    <Navbar bg="none" expand="lg">
      <Container>
        <Navbar.Brand id="logo" href="#Home">
          CS
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleClick} className="navbar-dark" aria-controls="basic-navbar-nav li" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto bg-md-dark">
            <Link to="Home" spy={true} smooth={true} offset={0} duration={300} className="navlinked fs-3 px-4">
              HOME
            </Link>
            <Link to="About" spy={true} smooth={true} offset={0} duration={300} className="navlinked fs-3 px-4">
              ABOUT
            </Link>
            <Link to="Skill" spy={true} smooth={true} offset={0} duration={300} className="navlinked fs-3 px-4">
              SKILL
            </Link>
            <Link to="Portfolio" spy={true} smooth={true} offset={0} duration={300} className="navlinked fs-3 px-4">
              PORTFOLIO
            </Link>
            <Button to="Contact" spy={true} smooth={true} offset={0} duration={300} className="fs-3 px-4 rounded-5 butnav" href="mailto:cun.song@binus.ac.id">
              CONTACT
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
