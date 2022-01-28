import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Nav} from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {observable} from "mobx";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>КупиСлона</NavLink>
        {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button className={"mx-2"} variant={'outline-light'}>Админ панель</Button>
            <Button variant={'outline-light'}>Выйти</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }
      </Container>

    </Navbar>
  );
})

export default NavBar;