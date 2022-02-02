import React, {useContext, useState} from 'react'
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                console.log('const response = await registration(email, password)', data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e)
        }

    }

    return (
        <Container
            className={'d-flex justify-content-center align-items-center'}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  placeholder="Введите ващ email..."
                    />
                    <Form.Control className="mt-3"
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                                  placeholder="Введите ваш пароль..."
                                  type='password'
                    />
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
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </div>

                </Form>

            </Card>
        </Container>
    )
})

export default Auth