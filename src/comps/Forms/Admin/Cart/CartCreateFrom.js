import React from 'react'
import { Form, Row, Col, Button, Collapse } from 'react-bootstrap'
import {withFirebase} from '../../../Firebase'
import produce from 'immer'
import MultiSelect from '../../../Tools/MultiSelect'
class CartrCreateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            // bool: true
            customer_email:"",
            customer_size:"XXS",
            addShippingAddress:false,
        }
    }

    componentDidMount = async() =>{
        const arr_customers = await this.props.context.doQueryAll("customer")
        const arr_products = await this.props.context.doQueryAll("product")
        this.setState({
            customers:arr_customers,
            products:arr_products,
        })
    }

    handleChange(e){
        console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }

    submit = async(e) =>{
        e.preventDefault()
        const data = this.state
        delete data.addShippingAddress
        delete data.addresses
        this.props.context.doCreateOneRecord("cart",data)
    }
    render(){
        if(!this.state.products || !this.state.customers){
            return(<div>loading...</div>)
        }
        const select_prod = []
        for(const product of this.state.products){
            //[false, product.product_name]
            select_prod.push({
                id:product.id,
                selected:false,
                name: product.product_name
            })
        }
        return(
            <div>
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form onSubmit={e=>this.submit(e)}>
                            <Form.Group controlId="customerEmail">
                                <Form.Label>Select Customer</Form.Label>
                                <Form.Control 
                                    as="select"
                                    name="customer_size"
                                    value={this.state.customer_size}
                                    onChange={e => this.handleChange(e)}
                                >
                                    {this.state.customers.map(item=>{
                                        return(
                                            <option value={item.id}>{item.customer_email}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>


                            <Row>
                                <Col lg={4}>
                                    <Form.Group controlId="customerSize">
                                        <Form.Label>Select Products</Form.Label>
                                        <MultiSelect 
                                            opt={select_prod} 
                                            change_avaliable_sizes={this.change_avaliable_sizes}
                                            cart
                                        />                                    
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
export default withFirebase(CartrCreateForm)