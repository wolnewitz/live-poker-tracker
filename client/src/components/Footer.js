import React from 'react';
import { Navbar } from 'react-bootstrap'

export const Footer = () =>
  <Navbar fixedBottom >
    <Navbar.Text pullRight>
      Created By: <Navbar.Link href="https://github.com/wolnewitz">Cory Wolnewitz</Navbar.Link>
    </Navbar.Text>
  </Navbar>
