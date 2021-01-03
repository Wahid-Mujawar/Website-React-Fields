import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import { styled } from 'styled-components';

const Styles = styled.div`
.navbar {
   back-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
   color: #bbb;

   &:hover {
      color: white;
   }
}
`;

export const Navbar = () => {
   <Styles>
      <Navbar expand="lg">
         <Navbar.Brand href="/">Code Life</Navbar.Brand>
         </Navbar>
   </Styles>
}
