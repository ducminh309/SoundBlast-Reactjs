import React, { useEffect, useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Form,
  Button,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

const CustomNavbar = ({ toggleTheme, isDarkMode }) => {
  const [visitors, setVisitors] = useState(0);
  const [loggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#trending");

  useEffect(() => {
    const randomVisitors = Math.floor(Math.random() * 1000) + 100;
    setVisitors(randomVisitors);
  }, []);

  return (
    <BootstrapNavbar
  expand="lg"
  className="shadow-sm py-2"
  bg={isDarkMode ? "dark" : "light"}
  variant={isDarkMode ? "dark" : "light"}
>
  <Container fluid className="px-4"> {/* <-- fluid + custom padding */}
    {/* Logo */}
    <BootstrapNavbar.Brand
      href="/"
      className="d-flex align-items-center gap-2 me-3"
    >
      <img
        alt="Logo"
        src="/images/Logo.jpg"
        width="40"
        height="40"
        className="rounded-circle"
      />
      <span className="fw-bold fs-5">SoundBlast</span>
    </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="main-navbar-nav" />
        <BootstrapNavbar.Collapse id="main-navbar-nav">
  {/* Navigation */}

  <Nav
  className="me-auto d-flex align-items-center gap-3 text-uppercase fw-semibold"
  activeKey={activeMenu}
  onSelect={(selectedKey) => setActiveMenu(selectedKey)}
>
  <Nav.Link as={Link} to="/trending" eventKey="/trending">Trending</Nav.Link>
  <Nav.Link as={Link} to="/top-charts" eventKey="/top-charts">TopCharts</Nav.Link>
  <Nav.Link as={Link} to="/new-releases" eventKey="/new-releases">New Releases</Nav.Link>

  <NavDropdown title="More" id="more-dropdown">
    <NavDropdown.Item as={Link} to="/genres">Genres</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/languages">Languages</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/latest-albums">Latest Albums</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/top-artists">Top Artist</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/old-songs">OldSongs</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/top-searched">TopSearchedSongs</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/reviews">ReviewSection</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/feedback">FeedBack</NavDropdown.Item>
  </NavDropdown>
</Nav>

  {/* RIGHT SECTION: Search + Theme + Visitors + Login */}
  <div className="d-flex align-items-center gap-3 ms-auto">
    {/* Search */}
   
    <Form >
    <SearchBar />
    </Form>

    {/* Theme Toggle */}
    <div onClick={toggleTheme} role="button" title="Toggle theme" className="ms-2">
      {isDarkMode ? "🌞" : "🌙"}
    </div>

    {/* Online Users */}
    <div className="d-flex align-items-center small">
      <span className="me-1">👥</span>
      <span>{visitors} online</span>
    </div>

    {/* Auth Buttons */}
    {!loggedIn ? (
      <div className="d-flex gap-2">
        <Button size="sm" variant="primary">
          <Link className="nav-link text-white" to="/login">Login</Link>
        </Button>
        <Button size="sm" variant="warning">
          <Link className="nav-link text-dark" to="/register">Register</Link>
        </Button>
      </div>
    ) : (
      <Image
        src="https://i.pravatar.cc/30"
        roundedCircle
        title="Account"
        style={{ cursor: "pointer" }}
      />
    )}
  </div>
</BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
