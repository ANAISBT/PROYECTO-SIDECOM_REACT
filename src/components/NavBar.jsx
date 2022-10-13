import '../CSS/NavBar.css';

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
      <Navbar.Collapse id="basic-navbar-nav">
        <Link to='/'>Sidecom</Link>
          <Nav className="me-auto">
            <Link to='/'>Inicio</Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><Link class="Categoria" to='/categorias/oficina'>Oficina</Link></NavDropdown.Item>
              <NavDropdown.Item><Link class="Categoria" to='/categorias/limpieza'>Limpieza</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to='/carrito'>Carrito</Link>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
};