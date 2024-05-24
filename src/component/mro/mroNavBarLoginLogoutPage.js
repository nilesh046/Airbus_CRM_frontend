import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/default.css';

function MroNavBarLoginLogoutPage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/mro/login"><div className='navItemClass'>MRO Admin</div></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/"><div className='navItemClass'>Home</div></Nav.Link>
            <Nav.Link href="/mro/landingPage"><div className='navItemClass'>Login</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MroNavBarLoginLogoutPage;
