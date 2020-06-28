import React from 'react'
import {Modal} from 'react-bootstrap'
const ModalForm = (props) =>{
    // const [smShow, setSmShow] = React.useState(props.show);

    return(
        <Modal
            size="lg"
            show={props.show}
            onHide={() => props.handle_modal()}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                   {props.title.toUpperCase()}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    )
}
export default ModalForm
