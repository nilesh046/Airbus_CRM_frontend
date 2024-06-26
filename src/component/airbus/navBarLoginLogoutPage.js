import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/default.css';

function NavBarLoginLogoutPage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/login"><div className='navItemClass'>Airbus Admin</div></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/"><div className='navItemClass'>Home</div></Nav.Link>
            <Nav.Link href="/landingPage"><div className='navItemClass'>Login</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarLoginLogoutPage;
