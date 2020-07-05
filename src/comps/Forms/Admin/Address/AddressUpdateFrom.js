import { withFirebase } from "../../../Firebase"
import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
class AddressUpdateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            customer_email:this.props.customer.customer_email,
            customer_size:this.props.customer.customer_size,
            customers: null        
        }
    }
    componentDidMount = async() =>{
        const arr_customers = await this.props.context.doQueryAll("customer")
        this.setState({customers:arr_customers})  
    }

    handleChange = (e) =>{
        console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        console.log("state of AddressUpdateForm{}",this.state)
        return(
            <div>
                <p>
                    Update <strong>{this.props.customer.customer_email}</strong> ({this.props.customer.id})
                </p>
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form>
                            <Form.Group controlId="customerEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email"
                                    placeholder="xample@mail.com"
                                    required
                                    name="customer_email"
                                    value={this.state.customer_email}
                                    onChange={e => this.handleChange(e)}
                            />
                            </Form.Group>


                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="customerSize">
                                        <Form.Label>Select Size</Form.Label>
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

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
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
export default withFirebase(AddressUpdateForm)