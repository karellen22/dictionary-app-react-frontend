import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Dictionary App
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
            <Nav.Link as={Link} to="/">
                Dictionary
              </Nav.Link>
              <Nav.Link as={Link} to="translator">
                Translator
              </Nav.Link>
              <Nav.Link as={Link} to="/entry/newEntry">
                New Entry
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
