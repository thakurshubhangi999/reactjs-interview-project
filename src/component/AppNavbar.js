import React, { useState } from "react";
import { Navbar, Nav, NavItem, Dropdown, NavLink } from "react-bootstrap";
import SearchBar from "./SearchBar";


function AppNavbar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleMenuClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light border border-secondary border-1  text-dark">
        <Navbar.Brand href="#home" style={{ opacity: 0 }}>
          {" "}
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <Nav.Link href="/home" className="text-dark" style={{ fontWeight: 'bold' }}>Home</Nav.Link>
            </NavItem>

            {/* Toggle search bar visibility on menu click */}
            <NavItem>
              <NavLink
                href="#"
                className="collapsed text-dark" style={{ fontWeight: 'bold' }}
                onClick={handleMenuClick}
              >
                Menu
              </NavLink>
            </NavItem>

            <NavItem>
              <Nav.Link href="/about" className="text-dark" style={{ fontWeight: 'bold' }}>About Us</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>

        {/* Language Dropdown */}

        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Language <i className="fa fa-chevron-down"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action1">English</Dropdown.Item>
            <Dropdown.Item href="#action2">Hindi</Dropdown.Item>
            <Dropdown.Item href="#action3">Kannada</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      {/* Render SearchBar only if showSearch state is true */}
      {showSearch && <SearchBar />}
    </>
  );
}

export default AppNavbar;
