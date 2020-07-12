import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import {withFirebase} from '../../../Firebase'
import {STATES} from '../../../../constanst'
import produce from 'immer'
class AddressCreateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            // bool: true
            address:{
                address_street:this.props.address.address_street || "",
                address_street_two:this.props.address.address_street_two || "",
                address_zip:this.props.address.address_zip || "",
                address_state:this.props.address.address_state || STATES[0],
                address_city:this.props.address.address_city || "",
                address_zip:this.props.address.address_zip || "",
                address_name:this.props.address.address_name || "",
                address_is_billing:this.props.address.address_is_billing || false,
                address_is_default:this.props.address.address_is_default || true,
            },
            customers: null,
            address_customer_id: this.props.address.address_customer_id || "",        
        }
    }
    componentDidMount = async() =>{
        const arr_customers = await this.props.context.doQueryAll("customer")
        this.setState({customers:arr_customers})
        if(this.state.address_customer_id === ""){
            this.setState({address_customer_id: arr_customers[0].id})
        }
    }

    handleChange(e){
        console.log(e.target)
        const name = e.target.name
        const value = e.target.value 
        this.setState(state=> produce(state, draft=>{
            draft.address[name] = value
        }))
    }
    handleCheckBox = (e) =>{
        const name = e.target.name
        const checked = e.target.checked 
        this.setState(state=> produce(state, draft=>{
            draft.address[name] = checked
        }))
    }
    handleCustomerId = (e) =>{
        console.log(e.target)
        const name = e.target.name
        const value = e.target.value 
        this.setState(state=> produce(state, draft=>{
            draft[name] = value
        }))
    }
    handleDropDown = (e) =>{
        const name = e.target.name
        const value = (e.target.value === 'true');
        console.log(value) 
        
        this.setState(state=> produce(state, draft=>{
            draft.address[name] = value
        }))
    
    }
    submit = async(e) =>{
        e.preventDefault()
        const data = {...this.state.address}
        console.log(Object.isExtensible(data))
        Object.keys(this.props.address).length===0?
            await this.props.context.doCreateOneRecord(`customer/${this.state.address_customer_id}/address`,data)
            :
            await this.props.context.doUpdateOneRecord(`customer/${this.state.address_customer_id}/address`,data,this.props.address.id)
        this.props.show_change()
    }
    render(){
        console.log("ADDRESS_____________>", this.state)
        return(
            <div>
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form onSubmit={e=>this.submit(e)}>
                        <Row>
                            <Col lg={7}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="John Doe"
                                        required
                                        name="address_name"
                                        value={this.state.address.address_name}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={5}>
                                <Form.Group controlId="name">
                                    <Form.Label>Customer ID</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        required
                                        name="address_customer_id"
                                        value={this.state.address.address_customer_id}
                                        onChange={e => this.handleCustomerId(e)}
                                    >
                                        {
                                            this.state.customers?

                                            this.state.customers.map(customer=>{
                                                return(
                                                    <option
                                                        defaultValue={customer.id===this.state.address_customer_id?true:false}
                                                        key={customer.id} 
                                                        value={customer.id}
                                                    >
                                                        {customer.customer_email}
                                                    </option>
                                                )
                                            })
                                            :
                                            <option key="default">loading...</option>
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                            <Form.Group>
                                <Form.Label>Address 1</Form.Label>
                                <Form.Control type="text"
                                    placeholder="123 ABC street"
                                    required
                                    name="address_street"
                                    value={this.state.address.address_street}
                                    onChange={e => this.handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control type="text"
                                    placeholder="123 ABC street"
                                    name="address_street_two"
                                    value={this.state.address.address_street_two}
                                    onChange={e => this.handleChange(e)}
                                />
                            </Form.Group>


                            <Row>
                                <Col lg={5}>
                                    <Form.Group>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text"
                                            placeholder=""
                                            required
                                            name="address_city"
                                            value={this.state.address.address_city}
                                            onChange={e => this.handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>

                                <Col lg={2}>
                                    <Form.Group>
                                        <Form.Label>State</Form.Label>
                                        <Form.Control 
                                            as="select"
                                            name="address_state"
                                            value={this.state.address.address_state}
                                            onChange={e => this.handleChange(e)}
                                        >
                                            {STATES.map(state=>{
                                                return(
                                                    <option value={state} key={state}>{state}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col lg={5}>
                                    <Form.Group>
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control type="number"
                                            placeholder=""
                                            required
                                            name="address_zip"
                                            value={this.state.address.address_zip}
                                            onChange={e => this.handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            <Form.Group controlId="name">
                                <Form.Label>Type of Address</Form.Label>
                                <Form.Control 
                                    as="select"
                                    required
                                    name="address_is_billing"
                                    value={this.state.address.address_is_billing}
                                    onChange={e => this.handleDropDown(e)}
                                >
                                    <option value={"true"} defaultValue={this.state.address.address_is_billing}>Billing</option>
                                    <option value={"false"} defaultValue={!this.state.address.address_is_billing}>Shipping</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Check 
                                    label={`Set this as my default${this.state.address_is_billing? " billing ":" shipping "}address`}
                                    type="checkbox"
                                    name="address_is_default"
                                    checked={this.state.address.address_is_default}
                                    onChange={e => this.handleCheckBox(e)}
                                />
                            </Form.Group>
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
export default withFirebase(AddressCreateForm)