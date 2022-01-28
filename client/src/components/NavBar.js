import React, { useContext } from 'react';
import { Context } from "../index";
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = () => {
  const { user } = useContext(Context)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>КупиСлона</NavLink>
        <Nav className="me-auto" style={{ color: 'white' }}>
          <Button />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;