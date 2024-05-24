import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/default.css';

function MroNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/mro/landingPage"><div className='navItemClass'>MRO Admin</div></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/mro/customer_airline"><div className='navItemClass'>Customer Airlines</div></Nav.Link>
            <Nav.Link href="/mro/history"><div className='navItemClass'>Maintenance History</div></Nav.Link>
            <Nav.Link href="/mro/profile"><div className='navItemClass'>Profile</div></Nav.Link>
            <Nav.Link href="/mro/logout"><div className='navItemClass'>Logout</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MroNavBar;
