import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Quiz Card</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/manage-cards">Manage Cards</Nav.Link>
            <Nav.Link as={NavLink} to="/study">Study Mode</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
