import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from "react-router-dom";
import "../App.css"

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top" expand="sm" collapseOnSelect className="px-3">
        <Navbar.Brand href="/">
          <img src="/img/cvolny-avatar.png" alt="Avatar for Cupcake Volny" className="rounded-pill nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Professional">
              <NavDropdown.Item href="/professional/talks_and_publications">
                Talks and Publications
              </NavDropdown.Item>
              <NavDropdown.Item href="/professional/projects">
                Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.github.com/cvolny">
              <img src="/img/logo-github.png" alt="find cvolny on github" className="nav-logo" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/cvolny">
              <img src="/img/logo-linkedin.png" alt="find cvolny on LinkedIn" className="nav-logo" />
            </Nav.Link>
            <Nav.Link href="https://soundcloud.com/0xcupcake">
              <img src="/img/logo-soundcloud.png" alt="find 0xCupcake on soundcloud" className="nav-logo" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;
