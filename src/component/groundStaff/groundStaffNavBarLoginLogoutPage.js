import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/default.css';

function GroundStaffNavBarLoginLogoutPage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/groundStaff/login"><div className='navItemClass'>Ground Staff Login</div></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/"><div className='navItemClass'>Home</div></Nav.Link>
            <Nav.Link href="/groundStaff/landingPage"><div className='navItemClass'>Login</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default GroundStaffNavBarLoginLogoutPage;
