// const NavBar = function () {
//   return(
//     <div className='container'>
//       Nav Bar
//     </div>
//   )
// };
// export default NavBar;

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
            <Nav.Link href="/airline"><div className='navItemClass'>Partner Airlines</div></Nav.Link>
            <Nav.Link href="/aircraft"><div className='navItemClass'>Aircrafts</div></Nav.Link>
            <Nav.Link href="/logout"><div className='navItemClass'>Logout</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

// const NavBar = function () {
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <a className="navbar-brand" href="google.com">
//       Navbar
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNavDropdown"
//       aria-controls="navbarNavDropdown"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item active">
//           <a className="nav-link" href="google.com">
//             Home <span className="sr-only">(current)</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="google.com">
//             Features
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="google.com">
//             Pricing
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="google.com"
//             id="navbarDropdownMenuLink"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             Dropdown link
//           </a>
//           <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <a className="dropdown-item" href="google.com">
//               Action
//             </a>
//             <a className="dropdown-item" href="google.com">
//               Another action
//             </a>
//             <a className="dropdown-item" href="google.com">
//               Something else here
//             </a>
//           </div>
//         </li>
//       </ul>
//     </div>
//   </nav>
// };

// export default NavBar;