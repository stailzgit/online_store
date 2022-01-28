import React from 'react'
import {Button, Card, Container, Form} from "react-bootstrap";

const Auth = () => {
  return (
    <Container
        className={'d-flex justify-content-center align-items-center'}
        style={{height: window.innerHeight - 54}}
    >
      <Card style={{width:600}} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ващ email..."
          />
          <Form.Control
              className="mt-3"
              placeholder="Введите ващ пароль..."
          />
          <Button variant="outline-success" className="mt-5 mx-auto w-50" size="lg" >
            Войти
          </Button>
        </Form>

      </Card>
    </Container>
  )
}

export default Auth