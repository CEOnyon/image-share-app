import React from 'react'
import {Container,Nav,Navbar,Button,Form} from 'react-bootstrap'

function TopNav() {
  return (
    <Navbar className='navbar' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#upload">Upload</Nav.Link>
          </Nav>
          <Form className="d-flex" pullRight>
            <Form.Control
              type="search"
              placeholder="Search"
              className="search"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;