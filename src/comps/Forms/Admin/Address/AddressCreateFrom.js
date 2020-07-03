import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import {withFirebase} from '../../../Firebase'
class AddressCreateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            // bool: true
            customer_email:"",
            customer_size:"XXS"
        }
    }

    handleChange(e){
        console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        return(
            <div>
                {/* <Row> */}
                    {/* <Col lg={2}/>
                    <Col lg={8}> */}
                        <Form>
                            <Form.Group controlId="customerEmail">
                                <Form.Label>Address 1</Form.Label>
                                <Form.Control type="email"
                                    placeholder="xample@mail.com"
                                    required
                                    name="customer_email"
                                    value={this.state.customer_email}
                                    onChange={e => this.handleChange(e)}
                            />
                            </Form.Group>


                            <Row>
                                <Col>
                                    <Form.Group controlId="customerSize">
                                        <Form.Label>Select State</Form.Label>
                                            <Form.Control 
                                                as="select"
                                                name="customer_size"
                                                value={this.state.customer_size}
                                                onChange={e => this.handleChange(e)}
                                            >
                                                <option>XXS</option>
                                                <option>XS</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    {/* </Col> */}
                    {/* <Col lg={2}/>  */}
                {/* </Row> */}
            </div>
        )
    }
}
export default withFirebase(AddressCreateForm)