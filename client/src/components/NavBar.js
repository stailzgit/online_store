import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Nav} from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom'


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(LOGIN_ROUTE)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>КупиСлона</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button className={"mx-2"}
                                variant={'outline-light'}
                                onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button variant={'outline-light'}
                                onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'}
                                onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>

        </Navbar>
    );
})

export default NavBar;