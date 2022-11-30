
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaChair } from "react-icons/fa";
import { FaUmbrella } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBox } from "react-icons/fa";

export function NavBar() {
  return (
    <Navbar collapseOnSelect className='navbar'>
      <Navbar.Brand href="#home">
        <h1 className='pufiwhite'>Pufi</h1>
      </Navbar.Brand>
      <Nav className="justify-content-center">
        <Nav.Link href="#home" className='letter bd_rigth'><FaChair/> <br /> PUFI PUFF</Nav.Link>
        <Nav.Link href="#features" className='letter bd_rigth'><FaUmbrella/> <br /> PUFI RAIN</Nav.Link>
        <Nav.Link href="#pricing" className='letter bd_rigth'><FaShoppingBag/> <br /> PUFI CART</Nav.Link>
        <Nav.Link href="#pricing" className='letter'><FaBox/> <br /> PUFI NAP</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <NavDropdown title="MI CUENTA" className='cuenta' id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Información</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Registrarse
          </NavDropdown.Item>
        </NavDropdown>
        <Nav className="">
          <Nav.Link href="#home" className='cuenta'>MI COMPRA</Nav.Link>
        </Nav>
      </Nav>
    </Navbar>
  );
}