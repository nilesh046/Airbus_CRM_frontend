import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/default.css';

function GroundStaffNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/groundStaff/landingPage"><div className='navItemClass'>Ground Staff Login</div></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/groundStaff/history"><div className='navItemClass'>Repair History</div></Nav.Link>
            <Nav.Link href="/groundStaff/profile"><div className='navItemClass'>Profile</div></Nav.Link>
            <Nav.Link href="/groundStaff/logout"><div className='navItemClass'>Logout</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default GroundStaffNavBar;
