import Nav from 'react-bootstrap/Nav';

function bottomNav() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/gallery">Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/upload">Upload</Nav.Link>
        </Nav.Item>
      </Nav>
      </>
  );
}

export default bottomNav;
