import React from 'react'
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import {login, registration} from "../http/userApi";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        if(isLogin){
            const response = await login()
        } else {
            const response = await registration()
        }

        const response = await registration()

    }

    return (
        <Container
            className={'d-flex justify-content-center align-items-center'}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Введите ващ email..."/>
                    <Form.Control className="mt-3" placeholder="Введите ващ пароль..."/>
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Вход</NavLink>
                            </div>

                        }
                        <Button onClick={click} variant="outline-success">
                            {isLogin? "Войти": "Регистрация"}
                        </Button>
                    </div>

                </Form>

            </Card>
        </Container>
    )
}

export default Auth