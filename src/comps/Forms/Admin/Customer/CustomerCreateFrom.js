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
        }
    }

    handleChange(e){
        console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }

    removeAddress = (idx) =>{
        console.log("idx----->",idx)
        const arr = this.state.addresses.filter(comp=> this.state.addresses.indexOf(comp)!==idx)
        console.log(arr)
        this.setState(state=> produce(state, draft=>{
            draft.addresses = arr
        })) 
    }
    submit = async(e) =>{
        e.preventDefault()
        const data = this.state
        delete data.addShippingAddress
        delete data.addresses
        this.props.context.doCreateOneRecord("customer",data)
    }
    render(){
        return(
            <div>
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form onSubmit={e=>this.submit(e)}>
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
                                                <option value="xxs">XXS</option>
                                                <option value="xs">XS</option>
                                                <option value="s">S</option>
                                                <option value="m">M</option>
                                                <option value="l">L</option>
                                                <option value="xl">XL</option>
                                            </Form.Control>
                                    </Form.Group>

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