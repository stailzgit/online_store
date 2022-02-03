import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function ErrorModal({show, onHide}) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="ls"
            aria-labelledby="contained-modal-title-center"
            centered
            className='bg-black bg-opacity-75'
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-center">
                    Ошибка заполнения формы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<h4>Centered Modal</h4>*/}
                <p>
                    Заполните все поля формы перед добавлением
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal