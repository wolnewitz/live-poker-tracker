import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

const NavBar = () =>
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Live Poker Tracker</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
      <NavItem href="#">Sessions</NavItem>
    </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#">Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

export default NavBar;
