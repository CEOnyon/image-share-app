import React from 'react'
import {Container,Nav,Navbar,NavDropdown,Form,Button} from 'react-bootstrap'
import logo from "../assets/logo.png"
function TopNav() {
  return (
    <Navbar className='navbar' bg="dark" variant='dark' expand="lg">
      <Container>
      <Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home"><i class="bi bi-house-door-fill" style={{ fontSize: 30 }}></i>Home</Nav.Link>
            <Nav.Link href="#upload"><i class="bi bi-file-plus-fill" style={{ fontSize: 30 }}></i>New Post</Nav.Link>
            {/* fix dropdown arrow and profile alignment with other pages*/}
            <NavDropdown title={<div style={{fontSize: 20}}><i class="bi bi-person-fill"></i> Profile </div>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#register"><i class="bi bi-person-fill-add" style={{ fontSize: 20 }}></i>Register</NavDropdown.Item>
              <NavDropdown.Item href="#login"><i class="bi bi-box-arrow-in-right" style={{ fontSize: 20 }}></i>Login</NavDropdown.Item>
            </NavDropdown>
            {/* fix searchbar to far right */}
          <Form className="d-flex" pullRight>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-auto"
              aria-label="Search"
            />
            <Button variant="dark"><i class="bi bi-search"></i></Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;