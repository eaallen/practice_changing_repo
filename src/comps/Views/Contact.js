import React from 'react'
import {Form,Button,Jumbotron, Row, Col} from 'react-bootstrap'

function Contact (props){
    return(
        <div>
            <h1>CONTACT FORM</h1>
            
                <Row>
                    <Col lg={4}/>
                        <Col lg={4}>
                            <Jumbotron>
                                <Form>
                                    <Form.Group controlId="contactEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group controlId="contactPurchaseID">
                                        <Form.Label>Purchase ID Number</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                    <Form.Group controlId="contactReason">
                                        <Form.Label>Reason for Email</Form.Label>
                                        <Form.Control as="select">
                                        <option>Need money back</option>
                                        <option>I love it!</option>
                                        <option>IDK</option>
                                        <option>Just to say hi</option>
                                        <option>Other..</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="contactMsg">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows="4" placeholder="Text here"/>
                                    </Form.Group>
                                </Form>
                            </Jumbotron>
                        </Col>
                </Row>
            
        </div>
    )
}
export default Contact 