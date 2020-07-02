import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import {withFirebase} from '../../../Firebase'
class CustomerCreateForm extends React.Component{
    constructor(props){
        super(props)
        
        // this.state = {
        //     bool: true
        // }
    }

    render(){
        return(
            <div>
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form>
                            <Form.Group controlId="cusomerEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter email: xample@mail.com"
                            />
                            </Form.Group>


                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="productCatagory">
                                        <Form.Label>Catagory</Form.Label>
                                            <Form.Control as="select">
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>Children</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={2}/> 
                </Row>
            </div>
        )
    }
}
export default withFirebase(CustomerCreateForm)