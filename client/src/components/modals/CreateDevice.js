import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";


const CreateDevice = ({show, onHide}) => {
    const {devices} = useContext(Context)
    const [infoList, setInfoList] = useState([])

    const addInfoList = () => {
        console.log("Info ",infoList)
        setInfoList([...infoList, {title: '', description: '', number: Date.now()}])
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header >
                <h2>Добавление устройства</h2>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devices.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devices.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className="mt-3" placeholder="Введите название устройства" type="text"/>
                    <Form.Control className="mt-3" placeholder="Введите стоимость устройства" type="number"/>
                    <Form.Control className="mt-3" type="file"/>
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfoList}
                    >
                        Добавить новое свойство
                    </Button>
                    {infoList?.map(item =>
                        <Row className='mt-2'>
                            <Col md={4}>
                                <Form.Control placeholder='Введите название свойства'/>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder='Введите описание свойства'/>
                            </Col>
                            <Col md={4}>
                                <Button variant='outline-danger'>
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
