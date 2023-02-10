import React from 'react'
// import {Container,Nav,Navbar,Form,Button} from 'react-bootstrap'
import logo from "../assets/logo.png"
// function TopNav() {
//   return (
//     <Navbar bg="dark" variant='dark' expand="lg">
//       <Container>
//       <Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#home"><i class="bi bi-house-door-fill" style={{ fontSize: 30 }}></i>Home</Nav.Link>
//             <Nav.Link href="#upload"><i class="bi bi-file-plus-fill" style={{ fontSize: 30 }}></i>New Post</Nav.Link>
//             {/* fix dropdown arrow and profile alignment with other pages*/}
//         <Nav>
//           <Form className="mr-auto">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="dark"><i class="bi bi-search"></i></Button>
//           </Form>
//           </Nav>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


import {Container,Nav,Navbar,Form,Button} from 'react-bootstrap'


function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home"><i class="bi bi-house-door-fill" style={{ fontSize: 30 }}></i>Home</Nav.Link>
          <Nav.Link href="/upload"><i class="bi bi-file-plus-fill" style={{ fontSize: 30 }}></i>New Post</Nav.Link>&nbsp;
          
          </Nav>
          <Nav>
          
          <Button  style={{textAlign: 'center',marginTop:12}} href="/login" variant="primary"><i class="bi bi-box-arrow-in-right"></i>  Login</Button>&nbsp;&nbsp;
          <Button  style={{textAlign: 'center',marginTop:12}} href="/" variant="success"><i class="bi bi-person-plus"></i>  Sign Up</Button>&nbsp;&nbsp;
          
          <Form className="d-flex mr-auto">
             <Form.Control
               type="search"
               placeholder="Search"
               className="me-2"
               aria-label="Search"
            />
            <Button className="mr-auto" variant="dark"><i class="bi bi-search"></i></Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;