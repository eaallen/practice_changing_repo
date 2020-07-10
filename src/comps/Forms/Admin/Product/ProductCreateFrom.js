import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import {withFirebase} from './../../../Firebase'
import produce from 'immer'
import MultiSelect from '../../../Tools/MultiSelect'

class ProductCreateForm extends React.Component{
    constructor(props){
        super(props)
        
         this.state = {
            product_name:"",
            product_description:"",
            image_name:7,
            product_color:"",
            product_price:0.00,
            product_catagory:"Men",
            product_type:"Shirt",
            avaliable_sizes:{
                xs:false, 
                s:false,
                m:false,
                l:false,
                xl:false,
            },
            product_current_size:"XS",
            product_reserved:"false",
            product_customize:"false"
         }
    }

    handleChange = (e) =>{
        // console.log(e.target.id ,"handle change")
        console.log(this ,"handle change")
        let id = e.target.id
        let val = e.target.value
        if(id === 'productCustomize' || id === 'productReserved'){
            if(val === "true"){
                val = true
            }else{
                val = false
            }
        }
        this.setState({[e.target.name]:val})
    }
    prac = (e) =>{
        this.setState({prac:e.target.name})
    }

    change_avaliable_sizes = (val,size_name) => { // val: bool size_name: string
        this.setState(state=> produce(state, draft=>{
            draft.avaliable_sizes[size_name] = val
        }))

        console.log("val", val)

        // this.setState(state=> produce(state, draft=>{
        //     if(draft.avaliable_sizes.indexOf(val)<0){
        //         draft.avaliable_sizes.push(val)
        //     }else{
        //         const idx = draft.avaliable_sizes.indexOf(val)
        //         draft.avaliable_sizes.splice(idx,1)
        //     }
        // }))
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const dictionary = this.state.avaliable_sizes // a_s = 
        let values = this.state
        let arr = []
        for(const key in dictionary){ // get keys from dictionary 
            console.log("-----> key", key)
            console.log("-----> value", dictionary[key])
            if(dictionary[key]){
                arr.push(key)
            }
        }
        values.avaliable_sizes = arr
        this.props.context.doCreateOneRecord('product',values)
    }
    render(){
        console.log("STATE", this.state)
        return(
            <div>
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form onSubmit={e=>this.handleSubmit(e)}>
                            <Form.Group controlId="productName">
                                <Form.Label>Name of Product</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="product_name"
                                    value={this.state.product_name}
                                    onChange={e => this.handleChange(e)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="productDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" 
                                    rows="3" 
                                    name="product_description"
                                    value={this.state.product_description}
                                    onChange={e => this.handleChange(e)}
                                    required
                                />
                            </Form.Group>
                            
                                    <Form.Group>
                                        <Form.File 
                                            id="selectImage" 
                                            label="Select Image" 
                                            name="image_name"
                                            onChange={e => this.handleChange(e)}
                                            />  
                                    </Form.Group>
                                
                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="productColor">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Red, Blue, Yellow, etc."
                                            name="product_color"
                                            value={this.state.product_color}
                                            onChange={e => this.handleChange(e)}
                                            required
                                            />
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="productPrice">
                                        <Form.Label>Products Price</Form.Label>
                                        <Form.Control 
                                            type="number" 
                                            placeholder="$"
                                            name="product_price"
                                            value={this.state.product_price}
                                            onChange={e => this.handleChange(e)}
                                            required
                                            />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="productCatagory">
                                        <Form.Label>Catagory</Form.Label>
                                            <Form.Control 
                                                as="select"
                                                name="product_catagory"
                                                value={this.state.product_catagory}
                                                onChange={e => this.handleChange(e)}
                                                >
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>Children</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="productType">
                                        <Form.Label>Product Type</Form.Label>
                                            <Form.Control 
                                                as="select"
                                                name="product_type"
                                                value={this.state.product_type}
                                                onChange={e => this.handleChange(e)}
                                            >
                                            <option>Shirt</option>
                                            <option>Pants</option>
                                            <option>Dress</option>
                                            <option>Sandles</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="avaliableSize">
                                        <Form.Label>Available Size:</Form.Label>
                                        <MultiSelect opt={this.state.avaliable_sizes} change_avaliable_sizes={this.change_avaliable_sizes}/>
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="currentSize">
                                        <Form.Label>Product Current Size:</Form.Label>
                                            <Form.Control 
                                                as="select"
                                                name="product_current_size"
                                                value={this.state.product_current_size}
                                                onChange={e => this.handleChange(e)}
                                            >
                                                <option>XS</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Check 
                                // type="switch"
                                id="productReserved"
                                label="Is product reserved?"
                                name="product_reserved"
                                value={this.state.product_reserved}
                                onChange={e => this.handleChange(e)}
                            />

                            <Form.Check 
                                // type="switch"
                                id="productCustomize"
                                label="Can size be adjusted?"
                                name="product_customize"
                                // value={this.state.product_customize}
                                value={true}
                                onChange={e => this.handleChange(e)}
                            />
                            
                            <br/>

                            <Button variant="primary" type="submit">
                                Create
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={2}/> 
                </Row>
            </div>
        )
    }
}
export default withFirebase(ProductCreateForm)