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
            cart_customer_id:"",
            selected_products: false,
        }
    }

    componentDidMount = async() =>{
        const arr_customers = await this.props.context.doQueryAll("customer")
        const arr_products = await this.props.context.doQueryAll("product")

        const select_prod = {}
        for(const product of arr_products){
            //[false, product.product_name]
            select_prod[product.id] = {
                product: product,                
                selected:false,
            }
        }

        this.setState({
            customers:arr_customers,
            products:arr_products,
            selected_products:select_prod,
            cart_customer_id:arr_customers[0].id,
        })
    }

    handleChange(e){
        console.log(e.target)
        let name = e.target.name
        let value = e.target.value
        this.setState({[name]:value})
    }

    change_selected_products = (val, id) =>{
        this.setState(state=> produce(state, draft=>{
            draft.selected_products[id].selected = val
        }))
    }

    submit = async(e) =>{
        e.preventDefault()
        const data = this.state
        delete data.products
        delete data.customers
        data.cart_product = []
        for(const prod of Object.values(data.selected_products)){
            console.log(prod,"<<<<<<<<")
            if(prod.selected){
                // add the item to the cart as well as the time the item was added.
                data.cart_product.push({[prod.product.id]:prod.product,time_selected:this.props.context.firebaseTimestamp})
            }
        }
        delete data.selected_products
        this.props.context.doCreateOneRecord(`customer/${this.state.cart_customer_id}/cart`,{products:data.cart_product})
    }
    render(){
        console.log("CART-State---->", this.state)
        if(!this.state.products || !this.state.customers){
            return(<div>loading...</div>)
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
                                    name="cart_customer_id"
                                    value={this.state.cart_customer_id}
                                    onChange={e => this.handleChange(e)}
                                >
                                    {this.state.customers.map(item=>{
                                        return(
                                            <option key={item.id} value={item.id}>{item.customer_email} ({item.id})</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>


                            <Row>
                                <Col lg={4}>
                                    <Form.Group controlId="customerSize">
                                        <Form.Label>Select Products</Form.Label>
                                        <MultiSelect 
                                            opt={this.state.selected_products} 
                                            change_selected_products={this.change_selected_products}
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