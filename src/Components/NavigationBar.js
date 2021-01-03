import React, { Component } from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import { render } from 'react-dom';
import styled  from 'styled-components';

const Styles = styled.div`
.navbar {
   back-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
   color: #bbb;

   // &:hover {
   //    color: white;
   // }
}
`;

export class Navigationbar extends Component {
   render () {
     return (
      <Styles>
      <Navbar expand="lg">
      <Navbar.Brand href="/">Code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ml-auto">
         <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
         </Nav>
      </Navbar.Collapse>
      </Navbar>
</Styles>
     )
   }
 }


export default Navigationbar;