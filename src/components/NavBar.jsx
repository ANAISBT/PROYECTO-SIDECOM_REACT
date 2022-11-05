import '../CSS/NavBar.css';

import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

let menus=[
  {id:'1',CategoriaId:'oficina', Nombre:'Oficina', Descripcion:'Utiles de  Oficina'},
  {id:'2',CategoriaId:'limpieza', Nombre:'Limpieza', Descripcion:'Productos de Limpieza'}
];

export const NavBar = () => {
    return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Link className='opciones' to='/'>Sidecom</Link>
          <Nav className="me-auto">
            <Link className='opciones' to='/'>Inicio</Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {menus.map((menu) => (
                <NavDropdown.Item ><Link to={`/categorias/${menu.CategoriaId}`}>{menu.Nombre}</Link></NavDropdown.Item>
              ))}
            </NavDropdown>
            <Link className='opciones' to='/carrito'>Carrito</Link>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
};