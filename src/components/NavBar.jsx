import '../css/NavBar.css';

import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to='/'>Sidecom</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'>Inicio</Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/categorias/oficina'>Oficina</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/categorias/limpieza'>Limpieza</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to='/carrito'>Carrito</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
};