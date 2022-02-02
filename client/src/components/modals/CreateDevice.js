import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import device from "../../store/DeviceStore";
import {setSelectedBrand, setSelectedType} from '../../store/DeviceStore'
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {

    const {devices} = useContext(Context)
    const [info, setInfo] = useState([])

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);


    useEffect(()=>{
        fetchTypes().then(data => devices.setTypes(data))
        fetchBrands().then(data => devices.setBrands(data))
    }, [])

    const addInfoList = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(item => item.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    // const addDevice = () => {
    //     const formData = new FormData()
    //     formData.append('name', name)
    //     formData.append('price', `${price}`)
    //     formData.append('img', file)
    //     formData.append('brandId', devices.selectedBrand.id)
    //     formData.append('typeId', devices.selectedType.id)
    //     formData.append('info', JSON.stringify(info))
    //     createDevice(formData).then(data => onHide())
    // }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', devices.selectedBrand.id)
        formData.append('typeId', devices.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
        console.log(formData)
        console.log('info', JSON.stringify(info))
    }


    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header>
                <h2>Добавление устройства</h2>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>{devices.selectedBrand.name || 'Выберите брэнд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devices.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => devices.setSelectedBrand(brand)}
                                    key={brand.id}>{brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>{devices.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devices.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => devices.setSelectedType(type)}
                                    key={type.id}>{type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control value={name}
                                  onChange={e => setName(e.target.value)}
                                  className="mt-3"
                                  placeholder="Введите название устройства"
                                  type="text"
                    />
                    <Form.Control value={price}
                                  onChange={e => setPrice(Number(e.target.value))}
                                  className="mt-3"
                                  placeholder="Введите стоимость устройства"
                                  type="number"
                    />
                    <Form.Control className="mt-3"
                                  type="file"
                                  onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfoList}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(item =>
                        <Row className='mt-2' key={item.number}>
                            <Col md={4}>
                                <Form.Control placeholder='Введите название свойства'
                                              onChange={e => changeInfo('title', e.target.value, item.number)}
                                              value={item.title}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder='Введите описание свойства'
                                              onChange={e => changeInfo('description', e.target.value, item.number)}
                                              value={item.description}
                                />
                            </Col>
                            <Col md={4}>
                                <Button variant='outline-danger' onClick={() => removeInfo(item.number)}>
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
