import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


import LoginModal from "./pages/loginModal";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldLoginModalOpen: false,
    }
  }

  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        shouldLoginModalOpen: !prevState.shouldLoginModalOpen
      }
    })
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" >
        <div className="container navt">
          <Navbar.Brand ><b>Typemania</b></Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link ><b>Home</b></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/practice">
              <Nav.Link ><b>Practice</b></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/learn">
              <Nav.Link ><b>Learn touch typing</b></Nav.Link>
            </LinkContainer>
          </Nav>

        </div>
      </Navbar>
    )
  }
}

export default NavBar;