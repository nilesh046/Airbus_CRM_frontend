import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/default.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/landingPage"><div className='navItemClass'>Airbus Admin</div></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/airline"><div className='navItemClass'>Airlines</div></Nav.Link>
            <Nav.Link href="/aircraft"><div className='navItemClass'>Aircrafts</div></Nav.Link>
            <Nav.Link href="/logout"><div className='navItemClass'>Logout</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
