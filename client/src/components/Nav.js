import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export const NavBar = () =>
  <Navbar collapseOnSelect >
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Live Poker Tracker</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/sessions">
          <NavItem eventKey={1}>Sessions</NavItem>
        </LinkContainer>
        <LinkContainer to="/stats">
          <NavItem eventKey={2}>Stats</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#">Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
