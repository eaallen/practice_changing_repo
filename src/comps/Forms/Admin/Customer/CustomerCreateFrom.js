import React from 'react'
import { Form, Row, Col, Button, Collapse } from 'react-bootstrap'
import {withFirebase} from '../../../Firebase'
import AddressCreateFrom from '../Address/AddressCreateFrom'
import Toggle from '../../../Tools/Toggle'
import produce from 'immer'
class CustomerCreateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            // bool: true
            customer_email:"",
            customer_size:"XXS",
            addShippingAddress:false,
            addresses:[]
        }
    }

    handleChange(e){
        console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }

    addAddress = () =>{
        this.setState(state=> produce(state, draft=>{
            draft.addresses.push(<AddressCreateFrom/>)
        })) 
    }
    removeAddress = (idx) =>{
        console.log("idx----->",idx)
        const arr = this.state.addresses.filter(comp=> this.state.addresses.indexOf(comp)!==idx)
        console.log(arr)
        this.setState(state=> produce(state, draft=>{
            draft.addresses = arr
        })) 
    }
    render(){
        return(
            <div>
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
                                <Col lg={2}>
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

                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    {this.state.addresses.map((comp,idx)=>{
                                        return(
                                            <div key={idx}>
                                                <Toggle defaultIndex={1}>{toggle=><>
                                                    {
                                                        toggle.value?
                                                        <span onClick={e=>toggle.toggle()} className="text-danger">
                                                            hide
                                                        </span>
                                                        :
                                                        <span onClick={e=>toggle.toggle()} className="text-primary">
                                                            show
                                                        </span>
                                                    }
                                                    
                                                    <Collapse in={toggle.value} timeout={300}>
                                                        <div>
                                                            <div>
                                                                {comp}
                                                                <Button onClick={e=>this.removeAddress(idx)} variant="outline-danger">Delete</Button>
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                    <br/>
                                                </>}</Toggle>
                                            </div>
                                        )
                                    })}
                                    <Button onClick={e=>this.addAddress()}>Add Address</Button>
                                    <br/>
                                    <br/>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={2}/> 
                </Row>
            </div>
        )
    }
}
export default withFirebase(CustomerCreateForm)