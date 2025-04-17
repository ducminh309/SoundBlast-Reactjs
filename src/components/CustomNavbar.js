import React, { useEffect, useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { Link } from 'react-router-dom';

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
  fixed="top"
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
    <Nav.Link eventKey="#trending" href="#trending">Trending</Nav.Link>
    <Nav.Link eventKey="#topcharts" href="#topcharts">TopCharts</Nav.Link>
    <Nav.Link eventKey="#new" href="#new">New Releases</Nav.Link>
    <NavDropdown title="More" id="more-dropdown">
      <NavDropdown.Item href="#Genres">Genres</NavDropdown.Item>
      <NavDropdown.Item href="#Gallery">Gallery</NavDropdown.Item>
      <NavDropdown.Item href="#Languages">Languages</NavDropdown.Item>
      <NavDropdown.Item href="#LatestAlbums">Latest Albums</NavDropdown.Item>
      <NavDropdown.Item href="#TopArtist">Top Artist</NavDropdown.Item>
      <NavDropdown.Item href="#OldSongs">OldSongs</NavDropdown.Item>
      <NavDropdown.Item href="#TopSearchedSongs">TopSearchedSongs</NavDropdown.Item>
      <NavDropdown.Item href="#ReviewSection">ReviewSection</NavDropdown.Item>
      <NavDropdown.Item href="#FeedBack">FeedBack</NavDropdown.Item>
    </NavDropdown>
  </Nav>

  {/* RIGHT SECTION: Search + Theme + Visitors + Login */}
  <div className="d-flex align-items-center gap-3 ms-auto">
    {/* Search */}
    <Form className="d-flex align-items-center">
    <FormControl
      type="search"
      placeholder="Enter song name"
      className="me-2"
      aria-label="Search"
      style={{ width: "320px", height: "38px" }} // <-- kéo dài ô
    />
      <Button variant="danger" style={{ height: "38px" }}>
        Search
      </Button>
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
