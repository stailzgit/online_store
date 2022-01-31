import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import bigStar from '../assets/bigStar.png'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const DevicePage = () => {
    const device = { "id": 1, "name": "12 pro", "price": "100000", "rating": "0", "img": "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png", "createdAt": "2022-01-27T18:48:23.425Z", "updatedAt": "2022-01-27T18:48:23.425Z", "typeId": 2, "brandId": 2}
    const description = [
        {id: 1, title: "Оперативная память", description: '5 гб'},
        {id: 2, title: "Камера", description: '12 мп'},
        {id: 3, title: "Процессор", description: 'Intel core i5 8300U'},
        {id: 4, title: "Кол-во ядер", description: '8'},
        {id: 5, title: "Аккумулятор", description: '5000'}
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image size={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <div className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                             style={{
                                 background: `url(${bigStar}) no-repeat center center`,
                                 width:240, height:240, backgroundSize: 'cover',
                                 fontSize:64
                             }}
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                        style={{width:300, height:300, fontSize:32, border:'5px solid lightgray'}}
                    >
                        <h3>От {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>

            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((item) =>
                    <Row key={item.id}
                        style={{background: item.id % 2 !== 0 && 'lightgray', padding:10}}
                    >
                        {item.title}: {item.description}
                    </Row>
                )}
            </Row>


        </Container>
    );
};

export default DevicePage;