import { withFirebase } from "../../../Firebase"
import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import produce from 'immer'
class ProductUpdateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            //  key:value
            product_name:this.props.product.product_name,
            product_description:this.props.product.product_description,
            // image_name
            product_color:this.props.product.product_color,
            product_price:this.props.product.product_price,
            product_catagory:this.props.product.product_catagory,
            product_type:this.props.product.product_type,
            avaliable_sizes:this.props.product.avaliable_sizes,
            product_current_size:this.props.product.product_current_size,
            product_reserved:this.props.product.product_reserved,
            product_customize:this.props.product_customize
        }
    }
    handleChange(e){
        console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }
    avaliable_sizes(e){
        const val = e.target.value
        this.setState(state=> produce(state, draft=>{
            if(draft.avaliable_sizes.indexOf(val)<0){
                draft.avaliable_sizes.push(val)
            }else{
                const idx = draft.avaliable_sizes.indexOf(val)
                draft.avaliable_sizes.splice(idx,1)
            }
        }))
    }
    render(){
        console.log("state of ProductUpdateForm{}",this.state)
        return(
            <div>
                <p>
                    Update product <strong>{this.props.product.product_name}</strong>  ({this.props.product.id})
                </p>
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form>
                            <Form.Group controlId="productName">
                                <Form.Label>Name of Product</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="product_name" 
                                    value={this.state.product_name} 
                                    onChange={e => this.handleChange(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="productDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows="3" 
                                    name="product_description" 
                                    value={this.state.product_description} 
                                    onChange={e => this.handleChange(e)}
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
                                        />
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="productPrice">
                                        <Form.Label>Products Price</Form.Label>
                                        <Form.Control type="number" 
                                            placeholder="$" 
                                            name="product_price"
                                            value={this.state.product_price} 
                                            onChange={e => this.handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="productCatagory">
                                        <Form.Label>Catagory</Form.Label>
                                            <Form.Control as="select" name="product_catagory"
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
                                            <Form.Control as="select" name="product_type"
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
                                    <Form.Group controlId="availableSize">
                                        <Form.Label>Available Size:</Form.Label>
                                            <Form.Control as="select" multiple name="avaliable_sizes"
                                                value={this.state.avaliable_sizes} 
                                                onChange={e => this.avaliable_sizes(e)}
                                            >
                                                <option value="xs">XS</option>
                                                <option value="s">S</option>
                                                <option value="m">M</option>
                                                <option value="l">L</option>
                                                <option value="xl">XL</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="currentSize">
                                        <Form.Label>Product Current Size:</Form.Label>
                                            <Form.Control as="select" name="product_current_size"
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
                                    type="switch"
                                    id="productReserved"
                                    label="Is product reserved?"
                                    name="product_reserved"
                                    value={this.state.product_reserved} 
                                    onChange={e => this.handleChange(e)}
                                    />

                            <Form.Check 
                                type="switch"
                                id="productCustomize"
                                label="Can size be adjusted?"
                                name="product_customize"
                                value={this.state.product_customize} 
                                onChange={e => this.handleChange(e)}
                            />

                            <Button variant="primary" type="submit">
                                Done
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={2}/> 
                </Row>
                {/* JSX here */}
            </div>
        )
    }
}
export default withFirebase(ProductUpdateForm)