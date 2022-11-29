
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
  return (
    <Navbar className='navbar'>
      <Navbar.Brand href="#home">
        <h1 className='pufiwhite'>Pufi</h1>
      </Navbar.Brand>
      <Nav className="justify-content-center">
        <Nav.Link href="#home" className='letter'>PUFI PUFF</Nav.Link>
        <Nav.Link href="#features">PUFI RAIN</Nav.Link>
        <Nav.Link href="#pricing">PUFI CART</Nav.Link>
        <Nav.Link href="#pricing">PUFI NAP</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <NavDropdown title="MI CUENTA" className='cuenta' id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
        <Nav className="">
          <Nav.Link href="#home" className='cuenta'>MI COMPRA</Nav.Link>
        </Nav>
      </Nav>
    </Navbar>
  );
}