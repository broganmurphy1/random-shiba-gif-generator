import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container className="margin-left-2">
        <Navbar.Brand href="#">Shiba GIF Generator</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
